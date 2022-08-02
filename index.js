/*
SEND AJAX REQUEST
*/

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    document.getElementById('container').innerHTML = xhttp.responseText;
  }
};
xhttp.open('GET', 'https://remoteok.com/api?tag=css', true);
xhttp.send();
