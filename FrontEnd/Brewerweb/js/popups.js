
// This script creates a popup window on every link.

// Function called when the link is clicked.
function createPopup(e) {
    'use strict';
    
    // Get the event object:
    if (typeof e == 'undefined') var e = window.event;

    // Get the event target:
    var target = e.target || e.srcElement;

    // Create the window:
    var popup = window.open(target.href, 'PopUp', 'height=900,width=900,top=900,left=900,location=no,resizable=yes,scrollbars=yes');
    
    // Give the window focus if it's open:
    if ( (popup !== null) && !popup.closed) {
        popup.focus();
        return false; // Prevent the default behavior.
    } else { // Allow the default behavior.
        return true;
    }
    
} // End of createPopup() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';
    //bullet 8 only class popup will open in popups. 
    var popupLinks = document.getElementsByClassName("popup");
    for (var i = 0, count = popupLinks.length; i< count; i++){
        popupLinks[i].onclick=createPopup;
    }

}; // End of onload function.