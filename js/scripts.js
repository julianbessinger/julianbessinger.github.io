//Update the date annually. 
var theYear = new Date();
msg = theYear.getFullYear();
var footText = document.getElementById('footText');
footText.textContent = 'Copyright Julian Bessinger, ' + msg;

//submit button submit
elSubmit = getElementById('submitButton');
myScript = function(){};
elSubmit.addEventListener("submit", myScript )
