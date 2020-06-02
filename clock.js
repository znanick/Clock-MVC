"use strict";

const circleRadius = 100;

function UpdateTime(timeDiference) {
  this.valPosition = []; //часовые значения

  this.timeDiference = timeDiference; //числом от -12 до +12 при созднании класса мы будем задавать разницу во времени от стандартной по гринвичу

  //текущее время
  this.hour = 0;
  this.minute = 0;
  this.second = 0;
  this.timerID;
  var currTime = new Date();
  var myView = null;

  //методы
  //находим координаты всех часовых значений
  this.onloadPage = function (view) {
    myView = view;
    this.timeUpdate();

    this.timerID = setInterval(() => {
      this.timeUpdate();
    }, 1000);
  };

  this.timeUpdate = function () {
    currTime = new Date();
    this.hour = currTime.getUTCHours() + this.timeDiference;
    this.minute = currTime.getUTCMinutes();
    this.second = currTime.getUTCSeconds();
    myView.degUpdate();
  };

  this.onclickStart = function () {
    if (!this.timerID) {
      this.timerID = setInterval(() => {
        this.timeUpdate();
      }, 1000);
    }
  };

  this.onclickStop = function () {
    clearInterval(this.timerID);
  };
}
