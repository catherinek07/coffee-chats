/**
	Shuffles array in place.
	@param {Array} a items An array containing the items.
**/
function shuffle(a) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
}

// read from data.tsv and generate html for each mentor
$.get('./data.tsv', (data) => {
	var rows = data.split('\n');
	rows.shift(); 	// remove first header row
	shuffle(rows); 	// shuffle the order of mentors every page load

	var mentors = rows.map((row) => {
		var col = row.split('\t');

		// NOTE: modify what is displayed by changing 1) and 2)

		// 1) how mentor data is mapped (columns in the .tsv file to fields)
		var mentor = {
			'name': col[0],
			// 'year': '',
			'about': col[1],
			'talk': col[2],
			'fun': col[3]
		};

		// 2) the html template used to display each mentor
		var mentorTemplate = `
			<div class="mentor">
				<h2>
					${mentor.name}
					<!-- <span class="year">${mentor.year}</span> -->
				</h2>
				<div class="about">${mentor.about}</div>
				<div class="fun"><b>Fun fact: </b>${mentor.fun}</div>
				<div class="talk"><b>Talk to me about: </b>${mentor.talk}</div>
			</div>
		`;

		return mentorTemplate;
	});

	$('#mentors').html(mentors);
});