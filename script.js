//DECLARE A VARIABLE

//Display todays date at the top of the page!!
var currentTimeVar = moment();
$("#currentDay").text("Today's Date: " + currentTimeVar.format("MM-DD-YYYY"));

var savedtext=[];


//define variables
var text9= $(".9text").val();
var saveStatus9 = false,

var text10= $(".10text").val();
var saveStatus10= false;

var text11 = $(".11text").val(); 
var saveStatus11= false;

var text12= $(".12text").val();
saveStatus12= false;

var text1= $(".1text").val();
saveStatus1= false;

var text2= $(".2text").val();
saveStatus2= false;

var text3= $(".3text").val();
saveStatus3= false;

var text4= $(".4text").val();
saveStatus4= false;

var text5= $(".5text").val();
var saveStatus5= false;

//event listeners

$("button9").on("click", saveFunction9);
$("button10").on("click", saveFunction10);
$("button11").on("click", saveFunction11);
$("button12").on("click", saveFunction12);
$("button1").on("click", saveFunction1);
$("button2").on("click", saveFunction2);
$("button3").on("click", saveFunction3);
$("button4").on("click", saveFunction4);
$("button5").on("click", saveFunction5);

function savefunction9() {
    localStorage.setItem("",savedText)
}
// userInputsArray[0].saveStatus = true;
//event listeners for save buttons, calls saveFunction>>

//function to call switchSave: change save status, store to local storage
