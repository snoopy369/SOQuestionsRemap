// ==UserScript==
// @name         SO Questions Remap
// @namespace    
// @version      0.1
// @description  Remap StackOverflow "Questions" link on the new navbar (new in 2017)
// @author       http://stackoverflow.com/users/1623007/joe
// @include      http*://stackoverflow.com/*
// @grant        none
// ==/UserScript==

  document.getElementById("nav-questions").onclick = function() {
    document.getElementById("nav-questions").href="http://stackoverflow.com/questions/tagged/YourTagsHere";
    return true;
  };
