var pin = document.getElementById("pin").value;
document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var pin = document.getElementById("pin").value;
    var blob = new Blob([pin], { type: 'text/plain'});
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "pin.txt"; 
    link.click();
  });
  