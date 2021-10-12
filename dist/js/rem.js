(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

//rem px:rem 100:1
var rem = function rem() {
  var deviceWidth = document.documentElement.clientWidth,
      html = document.documentElement;

  if (deviceWidth > 1024) {
    deviceWidth = 1024;
    html.style.maxWidth = '1024px';
    html.style.margin = '0 auto';
  }

  html.style.fontSize = deviceWidth / 7.5 + 'px';
};

rem();
window.addEventListener("resize", function () {
  rem();
}, false);
},{}]},{},[1])