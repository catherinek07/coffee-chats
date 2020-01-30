/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

$(document).ready(() => {
  $.get('./data.tsv', processResponse);

  // Go through CSV and return array of people
  function parseResponse(data) {
    let rows = data.split('\n');
    rows.shift(); // Remove column names
    return rows.map((row) => {
      let d = row.split('\t');

      let person = {};
      person['name'] = d[0];
      person['year'] = d[1]
	    person['about'] = d[2];
      person['talk'] = d[3];
      person['fun-fact'] = d[4];
      
      return person;
    });
  }

  // Parse and render response
  function processResponse(resp) {
    let people = parseResponse(resp);
    shuffle(people); // Mix up the order each time so no one is always at the top
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
    root.className = 'person';

    let aboutHeader = document.createElement('h3');
    let year = document.createElement('span');
    year.className = 'year';
    year.innerHTML = person['year'] == 2022 ? '3A' : '4B';

    aboutHeader.innerHTML = person['name'] + " " + year.outerHTML;
    root.appendChild(aboutHeader);

	  let about = document.createElement('div');
    about.className = 'about';
    about.innerHTML = person['about'];

    let funFact = document.createElement('div');
    funFact.className = 'fun-fact';
    funFact.innerHTML = person['fun-fact'];

    let talk = document.createElement('div');
    talk.className = 'talk';
    talk.innerHTML = person['talk'];

    root.appendChild(about);
    root.appendChild(talk);
    root.appendChild(funFact);
    
    return root;
  }
});
