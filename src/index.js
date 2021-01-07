// CSS
import './css/normalize.css';
import './css/colors.css';
import './css/fonts.css';
import './css/main.css';

// JS
import * as d3 from 'd3';
import head from './js/components/header/header';
import tilemap from './js/components/canada-tilemap/canada-tilemap.js';
import provinces from './data/canada-tilemap.json';
import helper from './js/helper-functions';
// import map from './js/components/map/map';


// VARS
const variable = 'pct_admin';
const legendTitle = 'Doses used (%)';
// DATA
const vaxDataUrl = 'https://vs-postmedia-data.sfo2.digitaloceanspaces.com/covid/covid-vaccination-counts.csv';


const init = async () => {
	const header = document.querySelector('#header');
	const provCode = helper.getPrCode();

	// vaccination data
	const vax = await d3.csv(vaxDataUrl);
	const joinedData = await joinData(vax, provinces);
	const data = parseNumbers(joinedData);
	// load province shapes
	// const provinces = await d3.json('https://vs-postmedia-data.sfo2.digitaloceanspaces.com/maps/canada_provinces.topojson');

	// build header
	const headerCopy = await head.init(data, provCode, variable);
	header.innerHTML = headerCopy;

	// build map
	tilemap.init('#map', data, variable, legendTitle);
	// map.init(vax, provinces);
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