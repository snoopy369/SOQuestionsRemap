// ==UserScript==
// @name         SO Questions Remap
// @namespace    
// @version      0.1
// @description  Remap StackOverflow "Questions" link on the new navbar (new in 2017)
// @author       http://stackoverflow.com/users/1623007/joe
// @include      http*://stackoverflow.com/*
// @grant        none
// ==/UserScript==

  //Adding this functionality to the onClick of the Questions nav link itself.
  //As a result it won't actually show up in the text to say what you're going to, unfortunately.
  document.getElementById("nav-questions").onclick = function() {
    
    //Update the .href below to target the page you want Questions to map to
    document.getElementById("nav-questions").href="http://stackoverflow.com/questions/tagged/YourTagsHere";

    return true;  //This lets the link actually work.
  };
