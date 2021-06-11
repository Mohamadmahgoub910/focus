var div = document.getElementById("main");
var inpt =  document.getElementById("inpt");
window.onload = function(){
    'user strict';
    inpt.focus();
};
var btn = document.getElementById("btn");
inpt.onclick = function() {
    this .blur();
};