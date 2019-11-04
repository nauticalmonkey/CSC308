
// This script defines functions for adding and removing error messages.

// This function adds the error message.
// It takes two arguments: the form element ID and the message.
function addErrorMessage(id, msg) {
    'use strict';

    // Get the form element reference:
    var elem = document.getElementById(id);

    // Define the new span's ID value:
    var newId = id + 'Error';

    // Check for the existence of the span:
    var span = document.getElementById(newId);
    if (span) {
        span.firstChild.value = msg; // Update
    } else { // Create new.

        // Create the span:
        span = document.createElement('span');
        span.id = newId;
        span.className = 'error';
        span.appendChild(document.createTextNode(msg));

        // Add the span to the parent:
        elem.parentNode.appendChild(span);
        if (elem.previousSibling.className.value) {
            //bullet 2 add error to multi class elem
            var str = elem.previousSibling.className.value;
            str.concat(" error");
            elem.previousSibling.className = str;
        } else {
            elem.previousSibling.className = "error";
        }
    } // End of main IF-ELSE.

} // End of addErrorMessage() function.

// This function removes the error message.
// It takes one argument: the form element ID.
function removeErrorMessage(id) {
    'use strict';

    // Get a reference to the span:
    var span = document.getElementById(id + 'Error');
    if (span) {
        var str = span.previousSibling.previousSibling.className.value;
        //bullet 2 remove error from class with 2 class elem
        var reg = /^error$/;
        if (reg.test(str)) {
            // Remove the class from the label:
            span.previousSibling.previousSibling.className = null;
            //if class name is not just error remove error from class name
        } else str.replace(reg, ""); span.previousSibling.previousSibling.className = str;
        // Remove the span:
        span.parentNode.removeChild(span);

    } // End of IF.

} // End of removeErrorMessage() function.