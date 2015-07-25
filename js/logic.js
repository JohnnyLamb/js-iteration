



/*
--------------------------------------------------------------------------
functions below this line are for the prices page
--------------------------------------------------------------------------
*/
// this function sums all options and should be connected to the sum all button

var sum = function(options) {
  var numSum = 0;

  for (var i = 0; i < options.length; i++) {
    numSum += parseInt(options[i].value);
    // this line should return value, numSum += +options[i].value;
  }
  return numSum;
};


// // this is the average button should be connected to average button

var averageAll = function(options) {
  var avNum = 0;
  for (var i = 0; i < options.length; i++) {
    avNum += parseInt(options[i].value);

  }
  return avNum / options.length;

};


// // console.log(average([1,3,3,3,77]));

// // this is the function for summing the selected prices

var sumTheSelected = function(options) {
  var num = 0;
  for (var i = 0; i < options.length; i++) {
    num += parseInt(options[i].value);

  }
  return num;
};

// // count the number of prices selected

var pricesSelected = function(options) {
  var num = 0;
  for (var i = 0; i < options.length; i++) {
    if (options[i].selected === true) {
      num++;
    }

  }
  console.log(num);
  return num;
};

var averageSelected = function(options) {
  var average = 0;
  for (var i = 0; i < options.length; i++) {
    average += parseInt(options[i].value);

  }
    if (average === 0) {
      return 0;
    }
  return average / options.length;


};
