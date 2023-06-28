const toogleSwitch = document.querySelector('input[type="checkbox"]');

// switch theme dynamically
function switchTheme(event) {
if (event.target.checked) {
	document.documentElement.setAttribute('data-theme', 'dark');
} else {
	document.documentElement.setAttribute('data-theme', 'light');
}
}

// eventListner
toogleSwitch.addEventListener('change', switchTheme);