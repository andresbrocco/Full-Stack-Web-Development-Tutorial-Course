var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentageOfY');


function calculatePercentage(event) {
  if (!numField1.value || !numField2.value) {
    alert("Invalid X or Y");
  } else {
    var x = parseFloat(numField1.value);
    var y = parseFloat(numField2.value);
    var percentage = 100*x/y;
    resultField.innerText = "Result: "+percentage+"%";
    event.preventDefault(); // Prevent the page from refreshing and clearing formulary data after submit button is pressed. If we used a normal button, this behaviour would not exist... But using input type submit can be pressed only hitting enter after filling the last form field, so it's cool to use!
  }
};

form.addEventListener('submit', calculatePercentage);
