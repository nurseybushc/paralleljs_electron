//test paralleljs
var Parallel = require('paralleljs');
$(document).ready(whenReady());
		
function factorial (n) {
	var calc =  n < 2 ? 1 : n * factorial(n - 1);
    return calc;
}

function whenReady(){
	//$('#runme').click(parallelAnalyze(stringArray));	
}
$('#runme').click(runTheNumbers);	


var baseString = "Hello there my good sir!";
var stringArray = ["Hello", "there", "my", "good", "dude"];

function runTheNumbers(){
	var p = new Parallel([1, 2, 3, 4, 5]);

    p.require(factorial);

	p.map(function (n) { 
		return factorial(n);
	//return Math.pow(10, n) / factorial(n); 
	}).reduce(function (data) { 
		return data[0] + data[1]; 
	}).then(function (data) {
		console.log(data);
	});
}

function analyzeString(baseString, searchString){

}

function parallelAnalyze(stringArray){
	var p = new Parallel([stringArray[0], stringArray[1], stringArray[2], stringArray[3], stringArray[4]]);
	
	p.require(analyzeString);
	
	p.map(function (myString) { 
		return analyzeString(baseString, myString);
	//return Math.pow(10, n) / factorial(n); 
	}).reduce(function (data) { 
		return data[0] + data[1]; 
	}).then(function (data) {
		console.log(data);
	});
}
