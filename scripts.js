$(document).ready(() => {
  $.get('./responses.csv', processResponse);

  function parseResponse(data) {
    let rows = data.split('\n');
    rows.shift(); // Remove column names
    return rows.map((row) => {
      let d = row.split(',');
      d.shift();
      return d;
    });
  }

  function processResponse(resp) {
    let people = parseResponse(resp);
    console.log(people);
  }
});
