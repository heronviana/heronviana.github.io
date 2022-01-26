//JQuery validation for input
$(document).ready(function(){
  $(".form")
  .submit(function(e){
    e.preventDefault();
    readInput();
  })
  //validation rules
  .validate({
    rules:{
      minColValInput:{
        required: true,
        range: [-50, 50],
      },
      maxColValInput:{
        required: true,
        range: [-50, 50],
        greaterThan: "#minColValInput",
      },
      minRowValInput:{
        required: true,
        range:[-50,50],
      },
      maxRowValInput:{
        required: true,
        range:[-50,50],
        greaterThan: "#minRowValInput",
      },
    },
    //error msgs
    messages:{
      minColValInput:{
        required: "Enter the starting x value.",
        range: "must be between -50 to 50.",
      },
      maxColValInput:{
        required: "Enter the ending x value.",
        range: "Must be between -50 to 50.",
      },
      minRowValInput:{
        required: "Enter the starting y value.",
        range: "must be between -50 to 50.",
      },
      maxRowValInput:{
        required: "enter the ending y value.",
        range: "must be between -50 to 50.",
      },
    },
  });
});

//check if min is > than max
$.validator.addMethod(
  "greaterThan",
  function (value, element, param){
    if (this.optional(element)) return true;
    var $otherElement=$(param);
    return parseInt(value, 10)>=parseInt($otherElement.val(), 10);
  },
  "Min value needs to be smaller than Max value."
);

// Read Form values
function readInput() {

var table="";
document.getElementById("multiplicationTable").innerHTML=table;
document.getElementById("errorMessage").innerHTML="";

  var minColVal = parseInt(document.getElementById("minColValInput").value);
  var maxColVal = parseInt(document.getElementById("maxColValInput").value);
  var minRowVal = parseInt(document.getElementById("minRowValInput").value);
  var maxRowVal = parseInt(document.getElementById("maxRowValInput").value);

  //checking for errors
  if (minColVal>maxColVal || minRowVal > maxRowVal){
    return;
  }

createTable(minColVal, maxColVal, minRowVal, maxRowVal);
}

//function to create table
function createTable(minColVal, maxColVal, minRowVal, maxRowVal) {
  var i, j;
  var table = "";


  for (j = minRowVal - 1; j <= maxRowVal; j++) {
    table += "<tr>";
    if (j == minRowVal - 1) {
      table += "<td></td>"; // empty cell
      for (i = minColVal; i <= maxColVal; i++) {
        table += "<td>" + i + "</td>";
      }
    } else {
      table += "<td>" + j + "</td>";
      for (i = minColVal; i <= maxColVal; i++) {
        table += "<td>" + i * j + "</td>";
      }
    }
    table += "</tr>";
  }

  // Insert table
  document.getElementById("multiplicationTable").innerHTML = table;
}

//keyboard input check
var minColValInput=document.getElementById("minColValInput");
var maxColValInput=document.getElementById("maxColValInput");
var minRowValInput=document.getElementById("minRowValInput");
var maxRowValInput=document.getElementById("maxRowValInput");
var inputArray=[minColValInput, maxColValInput, minRowValInput, maxRowValInput];

//checking for inval char
var invalidChars=["+","e","."];
inputArray.forEach(function(element){
  element.addEventListener("keydown", function(e){
    if (invalidChars.includes(e.key)){
      e.preventDefault();
    }
  });
});
