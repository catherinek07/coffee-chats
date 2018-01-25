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
      return person;
    });
  }

  // Parse and render response
  function processResponse(resp) {
    let people = parseResponse(resp);
    renderPeople(document.getElementById('people'), people);
  }

  // Render all da people
  function renderPeople(rootElem, people) {
    for (let i = 0; i < people.length; i++) {
      rootElem.appendChild(createPersonElement(people[i]));
    }
  }

  function createPersonElement(person) {
    let root = document.createElement('div');

    let name = document.createElement('div');
    name.className = 'name';
    name.innerHTML = person['name'];

    let term = document.createElement('div');
    term.className = 'term';
    term.innerHTML = person['term'];

    let funFact = document.createElement('div');
    funFact.className = 'fun-fact';
    funFact.className = person['fun-fact'];

    let talk = document.createElement('div');
    talk.className = 'talk';
    talk.innerHTML = person['talk'];

    let coop = document.createElement('div');
    coop.className = 'coop';
    coop.innerHTML = person['coop'];

    root.appendChild(name);
    root.appendChild(term);
    root.appendChild(funFact);
    root.appendChild(talk);
    root.appendChild(coop);
    return root;
  }
});
