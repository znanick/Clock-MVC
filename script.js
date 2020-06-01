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

var modelSVG3 = new UpdateTime(-12);
var viewSVG3 = new ClockViewSVG("clockSVG1");


var containerElem1 = document.getElementById("clockSVG1");
viewSVG3.onloadPage(modelSVG3);
modelSVG3.onloadPage(viewSVG3);

