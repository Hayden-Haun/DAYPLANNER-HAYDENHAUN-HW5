///Display todays date at the top of the page!!
let currentTimeVar = moment();
let currentDateVar = moment().format("MM-DD-YYYY");
let currentHourVar = Number(moment().format("H"));

$("#currentDay").text("Today's Date: " + currentDateVar);

// console.log(currentTimeVar);
let userTextArray = JSON.parse(localStorage.getItem("userTextArray")) || [];

var userDataArray = [
  {
    text: $(".0text").val(),
    saveStatus: false,
    momentTime: 9,
    element: $("#row0"),
  },
  {
    text: $(".1text").val(),
    saveStatus: false,
    momentTime: 10,
    element: $("#row1"),
  },
  {
    text: $(".2text").val(),
    saveStatus: false,
    momentTime: 11,
    element: $("#row2"),
  },
  {
    text: $(".3text").val(),
    saveStatus: false,
    momentTime: 12,
    element: $("#row3"),
  },
  {
    text: $(".4text").val(),
    saveStatus: false,
    momentTime: 13,
    element: $("#row4"),
  },
  {
    text: $(".5text").val(),
    saveStatus: false,
    momentTime: 14,
    element: $("#row5"),
  },
  {
    text: $(".6text").val(),
    saveStatus: false,
    momentTime: 15,
    element: $("#row6"),
  },
  {
    text: $(".7text").val(),
    saveStatus: false,
    momentTime: 16,
    element: $("#row7"),
  },
  {
    text: "Some String Cheese!",
    saveStatus: false,
    momentTime: 17,
    element: $("#row8"),
  },
];

//THIS FUNCTION COMPARES THE CURRENT HOUR TO EACH HOUR ON THE PLANNER. IT WILL COLOR EACH TIMEBLOCK ACCORDINGLY
function compareTimes() {
  console.log(currentHourVar);

  userDataArray.forEach(function (timeBlock) {
    console.log(timeBlock.momentTime);
    if (currentHourVar < timeBlock.momentTime) {
      timeBlock.element.addClass("list-group-item-info");
    } else if (currentHourVar === timeBlock.momentTime) {
      timeBlock.element.addClass("list-group-item-success");
    } else {
      timeBlock.element.addClass("list-group-item-secondary");
    }
  });
}

function init() {
  compareTimes();
  saveText();
  displayText();
}

function saveText() {
  localStorage.setItem("userTextArray", JSON.stringify(userTextArray));
  //ADD USER TEXT ARRAY TO OBJECT ARRAY
}

function displayText() {
  userDataArray.forEach(function (timeBlock) {
    timeBlock.element.find("textarea").val(timeBlock.text);
  });
}

init();

//list-group-item-info --- blue
//list-group-item-success --- green
//list-group-item-secondary --- grey
