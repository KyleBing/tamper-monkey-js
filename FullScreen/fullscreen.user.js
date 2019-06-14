// ==UserScript==
// @name         全屏内容
// @namespace    *
// @version      1.0
// @description  全屏文档内容
// @author       KyleBing
// @include      /^http.*/
// @grant        All
// @run-at       default
// @copyright    2019, KyleBing (https://kylebing.cn)
// @license      MIT
// @icon         https://github.com/KyleBing/tamper-monkey-js/blob/master/FullScreen/imgs/fullscreen.png?raw=true
// @homepageURL  https://github.com/KyleBing/tamper-monkey-js/tree/master/FullScreen
// @supportURL   https://github.com/KyleBing/tamper-monkey-js/tree/master/FullScreen
// @contributionURL https://github.com/KyleBing/tamper-monkey-js/tree/master/FullScreen
// @updateURL    https://openuserjs.org/meta/kylebing/My_Script.meta.js
// ==/UserScript==

// ==OpenUserJS==
// @author kylebing
// @collaborator
// ==/OpenUserJS==



(function() {
    'use strict';

    addBtn();
    window.addEventListener('fullscreenchange', ()=>{
        if (document.fullscreenElement){

        } else {
            addBtn();
        }
    })
})();

function enterFullScreen() {
    let btn = event.target;
    btn.style.borderRadius = "5";
    document.body.removeChild(btn);
    document.documentElement.requestFullscreen();
}

function addBtn() {
    let styleSheet = `
      cursor: pointer;
      z-index: 99999;
      display: block;
      position: fixed;
      height: 20px;
      width: 20px;
      background-color: #60CF73;
      border: none;
      left: 20px;
      bottom: 20px;
      outline: none;
      padding: 0;
      margin: 0;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      opacity: 0;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
      -webkit-transition: opacity 0.3s;
      -moz-transition: opacity 0.3s;
      -ms-transition: opacity 0.3s;
      -o-transition: opacity 0.3s;
      transition: opacity 0.3s;
    `;

    var className = '.fullScreenBtn';

    // add stylesheet
    var styleBracket = document.createElement('style');
    styleBracket.innerHTML = className + '{' + styleSheet + '}';
    document.head.append(styleBracket);


    let btn = document.createElement("button");
    btn.setAttribute('type','button');
    btn.classList.add(className);
    btn.addEventListener('click',enterFullScreen);
    btn.addEventListener('mouseenter',showBtn);
    btn.addEventListener('mouseleave',hideBtn);
    document.body.appendChild(btn);
}

function showBtn() {
    event.target.style.opacity = "1";
}
function hideBtn() {
    event.target.style.opacity = "0";
}