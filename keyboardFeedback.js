// ==UserScript==
// @name         Ankiweb Keyboard Feedback
// @version      0.1
// @description  Interface to show answers and give feedback for anki flashcards using the keyboard (Space - show answer, A-again, S-hard, D-good, F-easy)
// @license      GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @match        https://ankiweb.net/study/
// @match        https://ankiuser.net/study/
// @require http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

$(document).ready(function() {
    var currPos=0;
    document.addEventListener("keydown",registerEvents);
    function registerEvents(e){
        var charClicked=String.fromCharCode(e.which);
        if(charClicked==' '){
            $("#ansbuta").click();
            console.log("Showing answer");
            return true;
        }if(charClicked=='A') {
            $("#ease1").click();
            console.log("Feedback - again");
            return true;
        }if(charClicked=='S') {
            $("#ease2").click();
            console.log("Feedback - hard");
            return true;
        }if(charClicked=='D') {
            $("#ease3").click();
            console.log("Feedback - good");
            return true;
        }if(charClicked=='F') {
            $("#ease4").click();
            console.log("Feedback - easy");
            return true;
        }
        return false;
    }
});
