"use strict";
var modelDOM1 = new UpdateTime(-5);
var viewDOM1 = new ClockViewDOM("clock1");
var controllerDom1 = new ClockController();

var containerElem1 = document.getElementById("clock1");
viewDOM1.onloadPage(modelDOM1);
modelDOM1.onloadPage(viewDOM1);
controllerDom1.onloadPage(modelDOM1, containerElem1);





var modelDOM2 = new UpdateTime(+2);
var viewDOM2 = new ClockViewDOM("clock2");
var controllerDom2 = new ClockController();

var containerElem2 = document.getElementById("clock2");
viewDOM2.onloadPage(modelDOM2);
modelDOM2.onloadPage(viewDOM2);
controllerDom2.onloadPage(modelDOM2, containerElem2);






var modelSVG1 = new UpdateTime(-12);
var viewSVG1 = new ClockViewSVG("clockSVG1");


var containerElem3 = document.getElementById("clockSVG1");
viewSVG1.onloadPage(modelSVG1);
modelSVG1.onloadPage(viewSVG1);






var modelSVG2 = new UpdateTime(-1);
var viewSVG2 = new ClockViewSVG("clockSVG2");


var containerElem3 = document.getElementById("clockSVG2");
viewSVG2.onloadPage(modelSVG2);
modelSVG2.onloadPage(viewSVG2);
