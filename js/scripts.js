//Update the date annually. 
var theYear = new Date();
msg = theYear.getFullYear();
var footText = document.getElementById('footText');
footText.textContent = 'Copyright Julian Bessinger, ' + msg;


