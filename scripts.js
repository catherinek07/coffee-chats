$(document).ready(() => {
  $.get('./responses.tsv', processResponse);

  // Go through CSV and return array of people
  function parseResponse(data) {
    let rows = data.split('\n');
    rows.shift(); // Remove column names
    return rows.map((row) => {
      let d = row.split('\t');

      let person = {};
      person['name'] = d[1];
      person['term'] = d[2];
      person['contact'] = d[3];
      person['fun-fact'] = d[4];
      person['talk'] = d[5];
      person['coop'] = d[6];
      return d;
    });
  }

  // Parse and render response
  function processResponse(resp) {
    let people = parseResponse(resp);
    console.log(people);
  }
});
