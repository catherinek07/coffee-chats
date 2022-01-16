## To preview on a local server
1. Install [jekyll](https://jekyllrb.com/)
2. Run `jekyll serve` and go to `localhost:4000`

## How to setup
1. Add/replace `data.tsv` with mentor response data containing only the columns with information you want to display.
2. Modify `script.js` to map the columns to the desired mentor fields (eg: assign column 1 in `data.tsv` to mentor names).

Note: It is easy to modify what is displayed by changing in `script.js`: 1) how the mentor data is mapped and 2) the html template used to display each mentor.