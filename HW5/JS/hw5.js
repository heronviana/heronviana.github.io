//hw5.js
//Heron Melo
//heron_melo@student.uml.edu
//Student of GUI Programming I 91.61 - UML
//File Created on: 10/15/2020
//In this assignment we will create a dynamic table.-->

// Read Form values
function readInput() {
  var minColVal = parseInt(document.getElementById("minColValInput").value);
  var maxColVal = parseInt(document.getElementById("maxColValInput").value);
  var minRowVal = parseInt(document.getElementById("minRowValInput").value);
  var maxRowVal = parseInt(document.getElementById("maxRowValInput").value);

  // Clear error msg
  document.getElementById("errorMessage").innerHTML = "";
//if isNaN(minColVal)
//if statements to check if any values are 0
if (minColVal == "0")
{
  document.getElementById("errorMessage").innerHTML =
    "Please enter a NUMBER other than 0 for your input.<br>";
  return;

}
if (maxColVal == "0")
{
  document.getElementById("errorMessage").innerHTML =
    "Please enter a NUMBER other than 0 for your input.<br>";
  return;
}
if (minRowVal == "0")
{
  document.getElementById("errorMessage").innerHTML =
    "Please enter a NUMBER other than 0 for your input.<br>";;
  return;
}
if (maxRowVal == "0")
{
  document.getElementById("errorMessage").innerHTML =
    "Please enter a NUMBER other than 0 for your input.<br>";;
  return;
}

  // Swap values
  if (minColVal > maxColVal) {
    var temp = minColVal;
    minColVal = maxColVal;
    maxColVal = temp;
    document.getElementById("errorMessage").innerHTML =
      "Swapping columns.<br>";
  }
  if (minRowVal > maxRowVal) {
    var temp = minRowVal;
    minRowVal = maxRowVal;
    maxRowVal = temp;
    document.getElementById("errorMessage").innerHTML +=
      "Swapping rows.<br>";
  }
//create table call
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
