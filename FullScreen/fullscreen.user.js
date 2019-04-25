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
    let cssStyle = `
  cursor: pointer;
  z-index: 99999;
  display: block;
  position: fixed;
  height: 20px;
  width: 20px;
  border-right: 1px solid #cccccc;
  border-top: 1px solid #cccccc;
  left: 20px;
  bottom: 20px;
  outline: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
    `;
    let btn = document.createElement("button");
    btn.setAttribute('type','button');
    btn.setAttribute('style', cssStyle);
    btn.addEventListener('click',enterFullScreen);
    document.body.appendChild(btn);
}