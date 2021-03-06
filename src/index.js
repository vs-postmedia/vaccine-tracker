// CSS
import './css/normalize.css';
import './css/colors.css';
import './css/fonts.css';
import './css/main.css';

// JS
import * as d3 from 'd3';
import head from './js/components/header/header';
import table from './js/components/table/table';
import tilemap from './js/components/canada-tilemap/canada-tilemap.js';
import provinces from './data/canada-tilemap.json';
import helper from './js/helper-functions';


// VARS
const mapVariable = 'doses_per100k';
const tableSortMetric = 'full_vax_per100k';
const legendTitle = 'Shots given per 100,000';


// DATA
const vaxDataUrl = 'https://vs-postmedia-data.sfo2.digitaloceanspaces.com/covid/covid-vaccination-counts.csv';


const init = async () => {
	const header = document.querySelector('#header');
	const provCode = helper.getUrlParam('prov');
	const format = helper.getUrlParam('format');

	// vaccination data
	const vax = await d3.csv(vaxDataUrl);
	const joinedData = await joinData(vax, provinces);
	const data = parseNumbers(joinedData);

	// is it a table or a map?
	if (format === 'TABLE') {
		const sorted = data.sort((a,b) => b[tableSortMetric] - a[tableSortMetric]);
		table.init(sorted, '#table');
	} else {
		// build header
		const headerCopy = await head.init(data, provCode);
		header.innerHTML = headerCopy;

		// build map
		tilemap.init('#map', data, mapVariable, legendTitle);
	}
};


function joinData(data, shapes) {
	// join by prov code
	return shapes.map(s => {
		const dataProps = data.filter(d => d.prov_code === s.code)[0];
		delete dataProps.prov_code; // duplicate
		
		const joined = Object.assign({}, s, dataProps);

		return joined;
	});
}


function parseNumbers(data) {
	data.forEach(d => {
		d['doses_rx'] = +d['doses_rx'],
		d['doses_admin'] = +d['doses_admin'],
		d['doses_per100k'] = +d['doses_per100k']
	});

	return data;
}
init();