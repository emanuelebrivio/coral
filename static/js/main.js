/*jshint browser:true, laxcomma:true, eqnull:true, indent:2, unused:true, undef:true, devel:true*/
/*globals NodeList, HTMLCollection*/

window.addEventListener('DOMContentLoaded', function () {
  
  'use strict';

  NodeList.prototype.forEach = Array.prototype.forEach;
  HTMLCollection.prototype.forEach = Array.prototype.forEach;


  window.playState = false;

  var player = document.querySelector('.player');
  
  player.querySelector('.play').classList.add('visible');

  player.addEventListener('click', function (e) {
    e.stopPropagation();

    window.playState = !window.playState;

    if (!window.playState) {
      player.querySelector('.play').classList.add('visible');
      player.querySelector('.pause').classList.remove('visible');
    } else {
      player.querySelector('.pause').classList.add('visible');
      player.querySelector('.play').classList.remove('visible');
    }

    return false;
  });

});