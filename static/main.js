$(".img-upload-btn").bind("click", function () {
  $(".profile-pic").click();
});

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
