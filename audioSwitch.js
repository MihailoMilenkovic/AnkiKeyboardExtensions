// ==UserScript==
// @name         Ankiweb Audio Switch
// @version      0.1
// @description  Plays audio files on ankiweb.net on click (V for next file, B to replay current file)
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
        var audioElements=document.getElementsByTagName('audio');
        var charClicked=String.fromCharCode(e.which);
        if(audioElements.length==0) return false;
        if(charClicked=='V') {
            audioElements[(currPos++)%audioElements.length].play();
            return true;
        }if(charClicked=='B') {
            audioElements[currPos%audioElements.length].play();
            return true;
        }
        return false;
    }
});
