$(".img-upload-btn").bind("click", function () {
  $(".profile-pic").click();
});

let Cultutal = [
  'The works of art you will explore in this course may also serve as points of departure to make your own abstract paintings. You may choose to participate in the studio exercises, for which you are invited to post images of your own paintings to the discussion boards, or you may choose to complete the course through its quizzes and written assessments only.',
  'The definition of DJing has changed drastically in the last decade. Laptops, controllers, and software have emerged alongside traditional turntables and CDJs, smashing the barrier to entry. With today’s technology, it seems like anyone can become a DJ. On the wave of this digital DJ revolution, We have created the Learn to DJ with Traktor course. In this course, not only will you learn all of the creative possibilities of Traktor, but you will also learn the concepts and techniques of the modern DJ, using the Traktor Pro 2 software from Native Instruments.',
  'This course guides you through the essential concepts and methods to master the craft of vocal production. You will learn the technical aspects of working with the vocal and the personal, artistic aspects of working with a vocalist to achieve the best performance - skills that can be applied to many roles from engineer to producer to a.',
  "Nukkad Natak is a form of theatrical performance and presentation in outdoor public spaces without a specific paying audience. They are especially seen in outdoor spaces where there are large numbers of people.All the world's a stage! That's what we learned from Shakespeare's 'As you like it'. The Shakespearean phrase holds true for the youngsters in colleges. They don't need a theatre or an opera hall to enact plays. The streets are their stage now. And, thus Nukkad Natak is a big hit on the campuses across the city.",
]

let Mechatronics = [
  "The course will comprise of the essential theoretical aspects of robotics from the basics to advanced applications. Each module will be integrated with hands on experiments and applications. There would also be invited speakers from industries and research laboratories to expose the participants to real world robotics applications and research. The course would be designed for teachers, researchers and industry personnel who would like to upgrade their skills in the areas of robotics and automation. Final assessment will be in terms of Quiz, written exams and practical project.",
  "Sensors and actuators are the key components of any automation system. The idea of this workshop is to make teachers aware of the theoretical and practical aspects of sensors and actuators together with the associated technologies in practice. The workshop will comprise of the essential theory with hands on experiments ( through daily lab session) by the experts from academic institutions and industries.",
  "This course is designed to help students to understand the fundamentals of network analysis including three phase systems, reactive power compensation and filters.To analyze them, circuit theorems, techniques and laws are really important. Superposition Theorem, Thevenin Theorem, Norton Theorem, Maximum Power Transfer Theorem, Substitution Theorem, Millman Theorem and Reciprocity Theorem are the fundamental laws used for network analysis. All these circuit theorems help us to find the basic electrical parameters like voltage and current in a simpler way. ",
  "This Mechatronics and Remote Engineering - Computing and AutoCAD course at IDC Technologies is designed to help students to understand the fundamentals of AutoCAD commands including Printed Circuit Board (PCB) design and MATLAB concepts. After completing this course, students will have sound knowledge on CAD to prepare neat and accurate electrical engineering drawings for industrial power and control applications. ",
]

let Programming = [
  "Learn foundational programming concepts (e.g., functions, for loops, conditional statements) and how to solve problems like a programmer. In addition, learn basic web development as you build web pages using HTML, CSS, JavaScript. By the end of the course, will create a web page where others can upload their images and apply image filters that you crea",
  "With strong roots in statistics, Machine Learning is becoming one of the most interesting and fast-paced computer science fields to work in. There’s an endless supply of industries and applications machine learning can be applied to to make them more efficient and intelligent.Chat bots, spam filtering, ad serving, search engines, and fraud detection, are among just a few examples of how machine learning models underpin everyday life. Machine learning is what lets us find patterns and create mathematical models for things that would sometimes be impossible for humans to do.",
  "In this course, you'll learn how to use Flutter to quickly develop high-quality, interactive mobile applications for iOS and Android devices. Whether you’re just getting started with mobile app development, or experienced with other mobile app frameworks, you’ll enjoy the high-velocity development and quality apps that Flutter enables.Work with Google instructors step-by-step to build an app in one codebase that compiles down to native ARM code and has high performance on both iOS and Android. Learn how to develop fast by making use of Flutter's reactive framework, stateful Hot Reload, and integrated tooling. Customize your app with rich, composable widgets, built-in animations, and a layered, extensible architecture.",
  "In this course of the specialization, we will discuss the limitations of the Internet for business and economic activity, and explain how blockchain technology represents the way forward. After completing this course, you will be able to explain what blockchain is, how it works, and why it is revolutionary. You will learn key concepts such as mining, hashing, proof-of-work, public key cryptography, and the double-spend problem. You’ll be able to describe seven design principles for blockchain technology, and the challenges facing the people developing it. You’ll also meet the players in the blockchain ecosystem, and consider your own role in stewarding the blockchain revolution."
]

let Living = [
  "In this course, you will learn how to use strategic marketing and personal branding techniques for designing, enhancing, and promoting your professional image. Acting as 'your own Chief Executive Officer', you will learn how to use relationship and network marketing and impression management to showcase your skills to prospective employers, colleagues, supervisors, and other interested parties. ",
  "Practice everyday leadership, manage people, learn and apply concepts and techniques to effectively manage organizations through organizational design, and formulate and implement strategy.Through the courses in this specialization, you will learn the fundamentals to effectively lead people and teams, manage organizations as well as tools to analyze business situations and develop strategies. The Specialization covers the strategic, human resource, and organizational foundations for creating and capturing value for sustainable competitive advantage – including how to manage people and organizations, analyze the competition, and develop strategies both within a business and across a portfolio of businesses.",
  "We all negotiate on a daily basis. On a personal level, we negotiate with friends, family, landlords, car sellers and employers, among others. Negotiation is also the key to business success. No business can survive without profitable contracts. Within a company, negotiation skills can lead to your career advancement.  This framework will allow you to make principled arguments that persuade others. It will allow you to see beneath the surface of apparent conflicts to uncover the underlying interests. You will leave the course better able to predict, interpret, and shape the behavior of those you face in competitive situations.",
  "Improving Communications Skills is an essential course designed to give you both the tools you need to improve your communication skills, and the most successful strategies for using them to your advantage. You'll learn how to discover if someone is lying, how to develop trust, the best method of communication for negotiation, and how to apologize. You'll also learn when to cooperate and when to compete, how to create persuasive messages, ask thoughtful questions, engage in active listening, and choose the right medium for your messages. You'll be able to understand what others want, respond strategically to their wants and needs, and develop the critical communication skills you need to get ahead in business and in life."
]

let CulturalFaculty = ["Naresh chitrakaar", "Harish Dholakiya", "Mitesh Gayak", "Ramesh Kalakaar"]
let MechatronicsFaculty = ['Manav Yantrik', 'Shanti Jhatka', 'Kiran Shocklaga', 'Suresh Ekalakaar']
let ProgrammingFaculty = ['Babu Khatpatiya', 'Jarves Stark', 'Neeta Phonewala', 'Parth Banker']
let LivingFaculty = ['Sapna Nayak', 'Magan Sarpanch', 'Suresh Babaliya', 'Masoom Vartalaap']

function eventDesc(input) {
  let event = input.innerHTML.trim()
  if(event == 'Painting') {
    document.getElementById("display").innerHTML = Cultutal[0];
    document.getElementById("facultyName").innerHTML = CulturalFaculty[0];
  }
  else if(event== 'DJing') {
    document.getElementById("display").innerHTML = Cultutal[1];
    document.getElementById("facultyName").innerHTML = CulturalFaculty[1];
  }
  else if(event== 'Singing') {
    document.getElementById("display").innerHTML = Cultutal[2];
    document.getElementById("facultyName").innerHTML = CulturalFaculty[2];
  }
  else if(event== 'Nukkad Natak') {
    document.getElementById("display").innerHTML = Cultutal[3];
    document.getElementById("facultyName").innerHTML = CulturalFaculty[3];
  }
  else if(event== 'Robotics') {
    document.getElementById("display").innerHTML = Mechatronics[0];
    document.getElementById("facultyName").innerHTML = MechatronicsFaculty[0];
  }
  else if(event== 'Sensors and Actuators') {
    document.getElementById("display").innerHTML = Mechatronics[1];
    document.getElementById("facultyName").innerHTML = MechatronicsFaculty[1];
  }
  else if(event== 'Electro Technology') {
    document.getElementById("display").innerHTML = Mechatronics[2];
    document.getElementById("facultyName").innerHTML = MechatronicsFaculty[2];
  }
  else if(event== 'Computing And Autocad') {
    document.getElementById("display").innerHTML = Mechatronics[3];
    document.getElementById("facultyName").innerHTML = MechatronicsFaculty[3];
  }
  else if(event== 'Programming Foundations') {
    document.getElementById("display").innerHTML = Programming[0];
    document.getElementById("facultyName").innerHTML = ProgrammingFaculty[0];
  }
  else if(event== 'Machine Learning') {
    document.getElementById("display").innerHTML = Programming[1];
    document.getElementById("facultyName").innerHTML = ProgrammingFaculty[1];
  }
  else if(event== 'Flutter') {
    document.getElementById("display").innerHTML = Programming[2];
    document.getElementById("facultyName").innerHTML = ProgrammingFaculty[2];
  }
  else if(event== 'Block Chain') {
    document.getElementById("display").innerHTML = Programming[3];
    document.getElementById("facultyName").innerHTML = ProgrammingFaculty[3];
  }
  else if(event== 'Strategic Self Marketing') {
    document.getElementById("display").innerHTML = Living[0];
    document.getElementById("facultyName").innerHTML = LivingFaculty[0];
  }
  else if(event== 'Leadership and Management') {
    document.getElementById("display").innerHTML = Living[1];
    document.getElementById("facultyName").innerHTML = LivingFaculty[1];
  }
  else if(event== 'Negotiations') {
    document.getElementById("display").innerHTML = Living[2];
    document.getElementById("facultyName").innerHTML = LivingFaculty[2];
  }
  else {
    document.getElementById("display").innerHTML = Living[3];
    document.getElementById("facultyName").innerHTML = LivingFaculty[3];
  }
}




function readURL(input) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();

    reader.onload = function (e) {
      $(".placeholder").attr("src", e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

let eventList1 = ["Painting", "Singing", "DJing", "Nukkad Natak"];
let eventList2 = ["Robotics", "Sensors and Actuators", "Electro Technology", "Computing and Autocad"];
let eventList3 = ["Programming Foundations", "Machine Learning", "Flutter", "Block Chain"];
let eventList4 = ["Strategic Self Marketing", "Leadership and Management", "Negotiations", "Communication Skills"];

function populateEvents(eventList) {
  let labelElements = [];
  console.log(eventList)
  for (event of eventList) {
    let labelElement = document.createElement("label");
    labelElement.classList.add("checkbox-inline");
    labelElement.innerHTML = '<input type="checkbox" name="event" value="' + event + '"/> ' + event;
    console.log(labelElement)
    labelElements.push(labelElement);
  }

  let eventsElement = document.getElementsByClassName("events-list")[0];
  eventsElement.innerHTML = "";
  for (labelElement of labelElements) {
    eventsElement.appendChild(labelElement);
  }
}

$("#club-select").change(function() {
  if ($(this).val() === "Cultutal Club -- drama and creations") {
    populateEvents(eventList1);
  } else if ($(this).val() === "Mechatronics Club -- hardware technical activities") {
    populateEvents(eventList2);
  } else if ($(this).val() === "Programming Club -- hackathons and data quests") {
    populateEvents(eventList3);
  } else {
    populateEvents(eventList4);
  }
});
$(function () {
  $(".register form button").click(function () {
    if ($(".events-list input:checkbox:checked").length > 2)
      alert("Please select only 2 club events.");

    if ($(".placeholder").attr("src") === "assets/placeholder.jpg")
      alert("Please add a profile picture.");
  });
});
