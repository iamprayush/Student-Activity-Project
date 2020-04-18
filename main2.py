from flask import Flask,render_template,request,redirect,flash
from werkzeug.security import generate_password_hash,check_password_hash
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_required, login_user, logout_user, current_user
from flask_uploads import configure_uploads, IMAGES, UploadSet


app = Flask(__name__)

'''
Images Configuration
'''
images = UploadSet('images', IMAGES)
app.config['UPLOADED_IMAGES_DEST'] = 'static/uploads/image'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024 
configure_uploads(app, images)

'''
secret key
'''
app.config['SECRET_KEY'] ='it is a secret'

'''
DataBase configuration
'''
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.student'

db = SQLAlchemy(app)


'''
Authentication Configuration
'''
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'


'''
DatabaseSchema
'''
class User(UserMixin,db.Model) :
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(50))
    image = db.Column(db.String(50))
    email = db.Column(db.String(50))
    password = db.Column(db.String(255))
    club = db.Column(db.String(50))
    event = db.Column(db.String(80))


'''
Register Page only allowed to non-authenticated users
'''
@app.route('/register',methods=['GET','POST'])
def Register() :
    if current_user.is_authenticated :
        flash('You are already registered !!','error')
        return redirect('/search')
    else :
        if request.method == 'POST' :
            name = request.form['fullname']
            image = request.files['image']
            email = request.form['email']
            password = request.form['password']
            club = request.form['club']
            event = request.form.getlist('event')
            event = str(event)
            filename = images.save(image)
            image = image.filename.replace(' ','_')
            password = generate_password_hash(password)
            name = name.capitalize()
            check = User.query.filter_by(email=email).first()
            if check : 
                flash('email already used','error')
                return redirect('/register')
            else :
                user = User(name=name,image=image,email=email,password=password,club=club,event=event)
                db.session.add(user)
                db.session.commit()
                user = User.query.filter_by(email=email).first()
                login_user(user)
                flash('Congrats you are successfully registered','success')
                return redirect('/search')
        return render_template('register.html')


'''
Login Adapter
'''
@login_manager.user_loader
def load_user(user_id) :
    return User.query.get(int(user_id))



'''
Login Page only allowed to non-authenticated users
'''
@app.route('/',methods=['GET','POST'])
def login() :
    if current_user.is_authenticated :
        flash('You are already registered !!','error')
        return redirect('/search')
    else :
        if request.method == 'POST' :
            email = request.form['email']
            password = request.form['password']
            user = User.query.filter_by(email=email).first()
            if user : 
                original = user.password
                if check_password_hash(original,password) == True :
                    login_user(user)
                    return redirect('/search')
                else :
                    flash('wrong password !!','error')
                    return redirect('/')
            else :
                flash('You dont have an account !!','error')
                return redirect('/')
        return render_template('login.html')



'''
only allowed to authenticated users
'''
@app.route('/search',methods=['GET','POST'])
@login_required
def search() :
    if request.method == 'POST' :
        email = request.form['email']
        check = User.query.filter_by(email=email).first()
        g = check.event
        g = g.replace(']','+')
        g  = g.replace('[','')
        g  = g.replace("u'",'')
        g  = g.replace("u'",'')
        h = g.split(',')
        arr = []
        for i in h :
            arr.append(i.replace("'",''))
        return render_template('search.html',check=check,arr = arr)
    else :
        return render_template('search.html')


'''
only allowed to authenticated users
'''
@app.route('/clubs')
@login_required
def clubs() :
    return render_template('ClubsAndEvents.html')

'''
only allowed to authenticated users
'''
@app.route('/college')
@login_required
def college() :
    return render_template('college.html')

'''
only allowed to authenticated users
'''
@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect('/')



'''
run run run !!!!
'''
app.run(debug=True)