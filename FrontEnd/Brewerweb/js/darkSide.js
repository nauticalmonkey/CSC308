//Justin Evans

function darkSide(){
    'use strict';
    var message = "Welcome to the Hopsy, A Better way to Beer.";
   U.setText("doomHandle",message);
   U.$("darkSide").onclick = U.setText("doomHandle",message);
U.$("darkSide").style.visibility = "hidden";
togglediv("taco");

}

function init() {
    'use strict';
    
U.$("darkSide").onclick = darkSide;

}
function togglediv(id) {
    var div = document.getElementById(id);
    div.style.display = div.style.display == "block" ? "none" : "block";
}

window.onload = init;
