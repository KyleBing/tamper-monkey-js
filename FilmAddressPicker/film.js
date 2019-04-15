// ==UserScript==
// @name         电影链接显示
// @namespace    *
// @version      1.0
// @description  显示电影页面中的电影下载链接
// @author       KyleBing <kylebing@163.com>
// @match        http://www.6vhao.tv/*
// @match        http://www.dygang.net/*
// @match        https://www.dy2018.com/i/*
// @grant        All
// ==/UserScript==

(function() {
    'use strict';
    var ls = document.links;
    var linkStr = '';
    var linkExp = /(ed2k|ftp|magnet).*/;
    var matchesLinks = [];
    for(var i=0; i<ls.length; i++){
        var item = ls[i];
        if(linkExp.test(item.href)){
            matchesLinks.push(item);
        }
        if(linkExp.test(item.innerText)){
            matchesLinks.push(item);
        }
    }
    // 去重
    matchesLinks = unique(matchesLinks);
    // 生成 结果 string
    matchesLinks.forEach(function (item) {
        linkStr += (item.innerText + '\n')

    });
    linkStr = matchesLinks.length < 1 ? "未找到下载链接": linkStr;
    var resultText = decodeURIComponent(linkStr);
    var styleText = "  background-color: #fff;\n" +
        "  margin: 20px;\n" +
        "  -webkit-border-radius: 5px;\n" +
        "  -moz-border-radius: 5px;\n" +
        "  border-radius: 5px;\n" +
        "  border: 2px solid #00a905;\n" +
        "  padding: 20px;\n" +
        "  font-size: 1em;\n" +
        "  color: #333;\n" +
        "  -webkit-box-sizing: border-box;\n" +
        "  -moz-box-sizing: border-box;\n" +
        "  box-sizing: border-box;\n" +
        "  -webkit-box-shadow: 3px 4px 10px #00a90522;\n" +
        "  -moz-box-shadow: 3px 4px 10px #00a90522;\n" +
        "  box-shadow: 3px 4px 10px #00a90522;\n";
    // 新建 html 元素
    var element = document.createElement('pre');
    element.setAttribute('style',styleText);
    element.innerHTML = resultText;

    // 插入 html 元素
    document.body.insertBefore(element, document.body.firstChild)
})();

function unique(arr) {
    arr.sort();
    var tempArr = [];
    for (var i = 0; i < arr.length; i++) {
        var j = i + 1;
        if (arr[i] === arr[j]) {
            continue;
        } else {
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}



