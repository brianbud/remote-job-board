/*
SEND AJAX REQUEST
*/

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    const data = JSON.parse(xhttp.responseText);
    const container = document.getElementById('container');
    console.log(data);
    data.slice(1).forEach(function (row, index) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');
      rowDiv.innerHTML = `
      <div class='left-section'>
      <h5 class='company'>${row.company}</h5>
      <h3 class= 'position'>${row.position}</h3>
      <p class= 'location'>${row.location}</p>
      </div>
      <div class='mid-section'>
      ${row.tags
        .map(function (tag) {
          return `<span class= 'tag'>${tag}</span>`;
        })
        .join('')}
      </div>
      `;
      container.appendChild(rowDiv);
    });
  }
};
xhttp.open('GET', 'https://remoteok.com/api?tag=css', true);
xhttp.send();
