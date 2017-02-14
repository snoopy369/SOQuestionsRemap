# SOQuestionsRemap

This script remaps the "Questions" button on the Stack Overflow new navigation (new as of 2017-02-14) to a link of your choice.  I use it to map the Questions button to a particular set of tags that I prefer to follow, but you can remap it to whatever you like.

---

To use, just copy the code into Tampermonkey or Greasemonkey as a script, and then modify the HREF= line to match what you want the Questions button to open.  (this part: http://stackoverflow.com/questions/tagged/YourTagsHere)

So for example, if you want the Questions button to open up a combined page showing the `swift` and `ios` tags, you would change it like so:

    document.getElementById("nav-questions").onclick = function() {
      document.getElementById("nav-questions").href="http://stackoverflow.com/questions/tagged/swift%20ios?mode=all";
      return true;
    };
    
