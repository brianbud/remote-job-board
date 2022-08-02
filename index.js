/*
SEND AJAX REQUEST
*/

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    const data = JSON.parse(xhttp.responseText);
    data.slice(1).forEach(function (row, index) {
      console.log(row, index);
    });
  }
};
xhttp.open('GET', 'https://remoteok.com/api?tag=css', true);
xhttp.send();
