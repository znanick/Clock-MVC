"use strict";

function ClockViewDOM(clockDiv) {
  this.clock = document.getElementById(clockDiv); //див в котором находятся часы
  this.circle = document.createElement("div"); //циферблат
  var val; //часовые значения
  this.hourArrow = document.createElement("div");
  this.minuteArrow = document.createElement("div");
  this.secondArrow = document.createElement("div");
  var utc = document.createElement("div");

  var myModel = null;

  this.onloadPage = function (model) {
    myModel = model;
    //часовой пояс
    this.clock.appendChild(utc);
    utc.style.fontSize = "15px";
    utc.style.position = "absolute";
    utc.style.top = "2px";
    utc.style.left = "115px";

    utc.innerHTML = "UTC" + " " + myModel.timeDiference;

    //циферблат
    this.clock.appendChild(this.circle);
    this.circle.style.position = "relative";
    this.circle.style.backgroundColor = "#fcca66";
    this.circle.style.width = circleRadius * 2 + "px";
    this.circle.style.height = circleRadius * 2 + "px";
    this.circle.style.borderRadius = "50%";
    this.circle.style.marginTop = "10px";

    //часовые значения
    var valRadius = circleRadius * 0.15;
    var angle = 360;
    for (var i = 11; i >= 0; i--) {
      val = document.createElement("div");
      this.circle.appendChild(val);
      val.style.position = "absolute";
      val.style.backgroundColor = "#48b382";
      val.style.width = circleRadius * 2 * 0.15 + "px";
      val.style.height = circleRadius * 2 * 0.15 + "px";
      val.style.borderRadius = "50%";
      val.innerHTML = i + 1;
      val.style.textAlign = "center";
      val.style.lineHeight = "190%";
      var angleRad = (angle / 180) * Math.PI;
      angle = angle - 30;
      var valX = Math.round(
        circleRadius + circleRadius * 0.8 * Math.sin(angleRad) - valRadius
      );
      var valY = Math.round(
        circleRadius - circleRadius * 0.8 * Math.cos(angleRad) - valRadius
      );
      val.style.left = valX + "px";
      val.style.top = valY + "px";
    }

    this.circle.appendChild(this.hourArrow);
    var dHourArrow = 55; //длина стрелки
    this.hourArrow.style.backgroundColor = "black";
    this.hourArrow.style.width = "6px";
    this.hourArrow.style.height = dHourArrow + "px";
    this.hourArrow.style.borderRadius = "60% / 5%";
    this.hourArrow.style.position = "absolute";
    this.hourArrow.style.transformOrigin = "3px 50px";
    this.hourArrow.style.top = "50px";
    this.hourArrow.style.left = "100px";

    //позиционируем минутную стрелку

    this.circle.appendChild(this.minuteArrow);
    var dMinuteArrow = 70; //длина стрелки
    this.minuteArrow.style.backgroundColor = "black";
    this.minuteArrow.style.width = "4px";
    this.minuteArrow.style.height = dMinuteArrow + "px";
    this.minuteArrow.style.borderRadius = "60% / 5%";
    this.minuteArrow.style.position = "absolute";
    this.minuteArrow.style.transformOrigin = "2px 65px";
    this.minuteArrow.style.top = "35px";
    this.minuteArrow.style.left = "100px";

    this.circle.appendChild(this.secondArrow);
    var dSecondArrow = 80; //длина стрелки
    this.secondArrow.style.backgroundColor = "black";
    this.secondArrow.style.width = "2px";
    this.secondArrow.style.height = dSecondArrow + "px";
    this.secondArrow.style.borderRadius = "60% / 5%";
    this.secondArrow.style.position = "absolute";
    this.secondArrow.style.transformOrigin = "1px 75px";
    this.secondArrow.style.top = "25px";
    this.secondArrow.style.left = "100px";
  };

  this.degUpdate = function () {
    this.hourDeg = 30 * (myModel.hour + (1 / 60) * myModel.minute);
    this.minuteDeg = 6 * (myModel.minute + (1 / 60) * myModel.second);
    this.secondDeg = 6 * myModel.second;
    this.secondArrow.style.transform = `rotate(${this.secondDeg}deg)`;
    this.hourArrow.style.transform = `rotate(${this.hourDeg}deg)`;
    this.minuteArrow.style.transform = `rotate(${this.minuteDeg}deg)`;
  };
}


function ClockViewSVG(clockDiv) {
  this.clock = document.getElementById(clockDiv); //див в котором находятся часы
  this.circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
  var val; //часовые значения



  var utc = document.createElement("div");

  var myModel = null;

  this.onloadPage = function (model) {
    myModel = model;
    //часовой пояс
    this.clock.appendChild(utc);
    utc.style.fontSize = "15px";
    utc.style.position = "absolute";
    utc.style.top = "2px";
    utc.style.left = "115px";

    utc.innerHTML = "UTC" + " " + myModel.timeDiference;

  
    //циферблат
    this.clock.appendChild(this.circle);
    this.circle.setAttribute("cx", `${circleRadius}`);
    this.circle.setAttribute("cy", `${circleRadius}`);
    this.circle.setAttribute("r", `${circleRadius}`);
    this.circle.setAttribute("fill", "#fcca66");


    //часовые значения
    var valRadius = circleRadius * 0.15;
    var angle = 360;
    for (var i = 11; i >= 0; i--) {
      val = document.createElementNS("http://www.w3.org/2000/svg",'circle');
      this.circle.appendChild(val);
      val.innerHTML = i + 1;
      val.style.textAlign = "center";
      val.style.lineHeight = "190%";
      var angleRad = (angle / 180) * Math.PI;
      angle = angle - 30;
      var valX = Math.round(
        circleRadius + circleRadius * 0.8 * Math.sin(angleRad) - valRadius
      );
      var valY = Math.round(
        circleRadius - circleRadius * 0.8 * Math.cos(angleRad) - valRadius
      );
      val.setAttribute("cx",`${valX}`);
      val.setAttribute("cy",`${valY}`);
      val.setAttribute("r",`${valRadius}`);
      val.setAttribute("fill","#48b382");
    }
  }
}
