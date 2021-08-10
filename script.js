//DECLARE A VARIABLE

//Display todays date at the top of the page!!
var currentTimeVar = moment();
var currentTimeFormatVar = moment().format("MM-DD-YYYY");
$("#currentDay").text("Today's Date: " + currentTimeFormatVar);

// console.log(currentTimeVar);
//var userTextArray = [];
var itemListUl = $(".itemListUl li");

//define Array

var userDataArray = [
  {
    text: $(".0text").val(),
    saveStatus: false,
    momentTime: moment(),
    class: null,
  },
  {
    text: $(".1text").val(),
    saveStatus: false,
    momentTime: moment(),
    class: null,
  },
  {
    text: $(".2text").val(),
    saveStatus: false,
    momentTime: moment(),
    class: null,
  },
  {
    text: $(".3text").val(),
    saveStatus: false,
    momentTime: moment(),
    class: null,
  },
  {
    text: $(".4text").val(),
    saveStatus: false,
    momentTime: moment(),
    class: null,
  },
  {
    text: $(".5text").val(),
    saveStatus: false,
    momentTime: moment(),
    class: null,
  },
  {
    text: $(".6text").val(),
    saveStatus: false,
    momentTime: moment(),
    class: null,
  },
  {
    text: $(".7text").val(),
    saveStatus: false,
    momentTime: moment(),
    class: null,
  },
  {
    text: $(".8text").val(),
    saveStatus: false,
    momentTime: moment(),
    class: null,
  },
];

//event listeners

// $("button9").on("click", saveFunction9);
// $("button10").on("click", saveFunction10);
// $("button11").on("click", saveFunction11);
// $("button12").on("click", saveFunction12);
// $("button1").on("click", saveFunction1);
// $("button2").on("click", saveFunction2);
// $("button3").on("click", saveFunction3);
// $("button4").on("click", saveFunction4);
// $("button5").on("click", saveFunction5);

function init() {
  var savedArray = JSON.parse(localStorage.getItem("userTextArray"));

  if (savedArray) {
    userTextArray = savedArray;
  }

  saveText();
  displayText();
}

function saveText() {
  localStorage.setItem("userTextArray", JSON.stringify(userTextArray));
}

function displayText() {
  itemListUl.each(function (counter) {
    var currentRowClass = '".row' + counter + '"';
    console.log(currentRowClass);
  });
}

displayText();

//list-group-item-info --- blue
//list-group-item-success --- green
//list-group-item-secondary --- grey
