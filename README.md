# SOQuestionsRemap

To use, just copy the code into Tampermonkey or Greasemonkey as a script, and then modify the HREF= line to match what you want the Questions button to open.  (this part: http://stackoverflow.com/questions/tagged/YourTagsHere)

So for example, if you want the Questions button to open up a combined page showing the `swift` and `ios` tags, you would change it like so:

    document.getElementById("nav-questions").onclick = function() {
      document.getElementById("nav-questions").href="http://stackoverflow.com/questions/tagged/swift%20ios?mode=all";
      return true;
    };
    
