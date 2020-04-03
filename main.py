from flask import Flask,render_template,request,redirect,flash
from werkzeug.security import generate_password_hash,check_password_hash
from flask_sqlalchemy import SQLAlchemy
from flask_uploads import configure_uploads, IMAGES, UploadSet

app = Flask(__name__)


images = UploadSet('images', IMAGES)
app.config['UPLOADED_IMAGES_DEST'] = 'static/uploads/image'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024 
configure_uploads(app, images)

app.config['SECRET_KEY'] ='h'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'

db = SQLAlchemy(app)


class User(db.Model) :
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(50))
    image = db.Column(db.String(50))
    email = db.Column(db.String(50))
    password = db.Column(db.String(255))
    club = db.Column(db.String(50))




@app.route('/',methods=['GET','POST'])
def Register() :
    if request.method == 'POST' :
        name = request.form['fullname']
        image = request.files['image']
        email = request.form['email']
        password = request.form['password']
        club = request.form['club']
        # event = request.form.getlist('event')
        # print(event)
        filename = images.save(image)
        image = image.filename.replace(' ','_')
        password = generate_password_hash(password)
        name = name.capitalize()
        check = User.query.filter_by(email=email).first()
        if check : 
            flash('email already used')
            redirect('/')
        else :
            user = User(name=name,image=image,email=email,password=password,club=club)
            db.session.add(user)
            db.session.commit()
            flash('done !!')
            redirect('/')
            
    return render_template('register.html')


@app.route('/search')
def search() :
    return render_template('search.html')


@app.route('/login',methods=['GET','POST'])
def login() :
    if request.method == 'POST' :
        email = request.form['email']
        password = request.form['password']
        check = User.query.filter_by(email=email).first()
        original = check.password
        if check_password_hash(original,password) == True :
            print('correct')
        else :
            print('not')
    return render_template('login.html')















app.run(debug=True)