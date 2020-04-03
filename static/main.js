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

let eventList1 = ["Event C1 ", "Event C1", "Event C1", "Event C1"];
let eventList2 = ["Event C2", "Event C2", "Event C2", "Event C2"];
let eventList3 = ["Event C3", "Event C3", "Event C3", "Event C3"];
let eventList4 = ["Event C4", "Event C4", "Event C4", "Event C4"];

function populateEvents(eventList) {
  let labelElements = [];
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

$("#club-select").change(function () {
  if ($(this).val() === "Club 1") {
    populateEvents(eventList1);
  } else if ($(this).val() === "Club 2") {
    populateEvents(eventList2);
  } else if ($(this).val() === "Club 3") {
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
