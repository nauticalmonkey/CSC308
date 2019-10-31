
// This script creates two linked select menus.

// Function called when the first menu's value changes.
// Function updates the second menu.
function updateMenu() {
	'use strict';

	// Get references to the menus:
	var os = document.getElementById('os');
	var os2 = document.getElementById('os2');
	//kept os 2 as possible element if wanted to add back in later
	os2.style.visibility = "hidden";
	// For storing the options:
	var options = null;

	// Empty the second menu:
	while (os2.firstChild) {
		os2.removeChild(os2.firstChild);
	}

	// Determine the options:
	if (os.value == 'Windows') {
		options = ['7 Home Basic', '7 Home Premium', '7 Professional', '7 Ultimate', 'Vista', 'XP'];
	} else if (os.value == 'Mac OS X') {
		options = ['10.7 Lion', '10.6 Snow Leopard', '10.5 Leopard', '10.4 Tiger'];
	}

	// Update the menu:
	if (options) {
		//eliminates options from first list once selected bullet 6
		function eliminations(selection, choices) {
			while (selection.firstChild) {
				selection.removeChild(selection.firstChild);
			}
			for (var i = 0, count = options.length; i < count; i++) {
				var opt = document.createElement('option');
				opt.text = opt.value = options[i];
				os.appendChild(opt);
			}


		}
		eliminations(os, options);

	} else { // No selection!
		os2.disabled = true;
	}

} // End of updateMenu() function.

// Establish functionality on window load:
window.onload = function () {
	'use strict';

	// Get the select menu:
	var os = document.getElementById('os');

	// Clear out the existing options:
	while (os.firstChild) {
		os.removeChild(os.firstChild);
	}

	// Add the new options:
	var options = ['Choose', 'Windows', 'Mac OS X'];
	for (var i = 0, count = options.length; i < count; i++) {
		var opt = document.createElement('option');
		opt.text = opt.value = options[i];
		os.appendChild(opt);
	}

	// Add an event handler:
	os.onchange = updateMenu;

	// Create the other select menu:
	var os2 = document.createElement('select');
	os2.id = 'os2';
	os2.disabled = true;
	//if wanted to add in later need to make visable
	os2.style.visibility = "hidden";
	os.parentNode.appendChild(os2);

};