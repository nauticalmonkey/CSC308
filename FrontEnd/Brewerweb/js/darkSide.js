//Justin Evans

function MoreDetails(){
    'use strict';
    var message = "Welcome to the Hopsy, A Better way to Beer.";
   U.setText("IntroMsg",message);
   U.$("MoreDetails").onclick = U.setText("IntroMsg",message);
U.$("MoreDetails").style.visibility = "hidden";
togglediv("taco");

}

function init() {
    'use strict';
    
U.$("MoreDetails").onclick = MoreDetails;

}
function togglediv(id) {
    var div = document.getElementById(id);
    div.style.display = div.style.display == "block" ? "none" : "block";
}

window.onload = init;
