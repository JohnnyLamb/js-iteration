// DOM functions for the names page

if (document.URL === "file:///Users/johnny/Desktop/js-iteration/names.html") {
// function to print a list of all the names
var printAll = document.getElementById("all-names").addEventListener("click", function() {

    var allNames = document.getElementsByTagName('textarea')[0].value;
    var splitArray = allNames.split("\n");
    for (var i = 0; i < splitArray.length; i++) {
        var node = document.createElement('li');
        var answer = document.createTextNode(splitArray[i]);
        node.appendChild(answer);
        document.getElementById("for names").appendChild(node);

     }
});

// function to print a list of only the first names

var printFirstNames = document.getElementById("first-names").addEventListener("click" , function(){

    var firstNames = document.getElementsByTagName('textarea')[0].value;
    var splitArray = firstNames.split("\n");

    for (var i = 0; i< splitArray.length; i++) {
        var first = splitArray[i].split(" ")[0];
        var node = document.createElement('li');
        var answer = document.createTextNode(first);
        node.appendChild(answer);
        document.getElementById("for names").appendChild(node);

    }
});

// function for last names

var printLastNames = document.getElementById("last-names").addEventListener("click", function(){
        var lastNames = document.getElementsByTagName('textarea')[0].value;
        var splitArray= lastNames.split("\n");
        for (var i = 0; i < splitArray.length; i++ ) {
            var last = splitArray[i].split(" ")[1];
            var node = document.createElement('li');
            var answer = document.createTextNode(last);
            node.appendChild(answer);
            document.getElementById("for names").appendChild(node);
        }
});

// function for length of names


var printAll = document.getElementById("names-with-lengths").addEventListener("click", function() {

    var nameLength = document.getElementsByTagName('textarea')[0].value;
    var splitArray = nameLength.split("\n");
    for (var i = 0; i < splitArray.length; i++) {
        var node = document.createElement('li');
        var length = splitArray[i].length;
        var answer = document.createTextNode(splitArray[i] + "-" +length);
        node.appendChild(answer);
        document.getElementById("for names").appendChild(node);

     }
});

} else if (document.URL === "file:///Users/johnny/Desktop/js-iteration/index.html") {

/////////////////////////////////////////////////////////////////////////////////////////
// DOM functions for prices page
// making a button for SUM ALL output the sum of all the prices on the screen

var sumAll = document.getElementById("sum-all").addEventListener("click", function() {
  var pricesList = document.getElementsByName("prices")[0].children;

  var sumAnswer = document.getElementById('sumAll');
  sumAnswer.innerHTML = (sum(pricesList) + " is the sum of all the prices.");

});
// making an average for all button output the average of all the prices on the screen
var average = document.getElementById("average-all").addEventListener("click", function() {
  var pricesList = document.getElementsByName("prices")[0].children;

  var averageAnswer = document.getElementById('averageAll');
  averageAnswer.innerHTML = (averageAll(pricesList) + " is the average of all the prices.");

});
// // making a button for sum selected

// // this line adds an event listener to the sum-selected button.
var sumSelected = document.getElementById('sum-selected').addEventListener("click", function() {
// this line assigns a variable of the contents of the select element to "select box"
  var selectBox = document.getElementsByTagName("select")[0];
// this line assigns a variable of the selected options to "getSelected Options"
  var getSelectedOptions = selectBox.selectedOptions;
//  this line assigns the answer/output from the function to the variable 'selectedForSum'
    var selectedForSum = sumTheSelected(getSelectedOptions);
//  this line assigns the html element to a variable names 'summedAnswer'
      var summedAnswer = document.getElementById('sumSelected');
// this line assigns innerHTML to the page with the answer and the sentence below

    summedAnswer.innerHTML = (selectedForSum + " is the sum of all the prices selected.");
});

var countSelected = document.getElementById('count-selected').addEventListener("click", function() {

  var selectBox = document.getElementsByTagName("select")[0];

  var getSelectedOptions = selectBox.selectedOptions;

    var selectedForCount = pricesSelected(getSelectedOptions);

      var selectedAnswer = document.getElementById('countSelected');


    selectedAnswer.innerHTML = (selectedForCount + " this counts how many prices");
});

var averageOfSelected = document.getElementById('average-selected').addEventListener("click", function(){

    var selectBox = document.getElementsByTagName("select")[0];

    var getSelectedOptions = selectBox.selectedOptions;
    console.log("the button is clicking");
    var selectedForAverage = averageSelected(getSelectedOptions);
    var selectedAverage = document.getElementById('averageSelected');

    selectedAverage.innerHTML = (selectedForAverage + " yay");

});
}
