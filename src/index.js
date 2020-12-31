// CSS
import './css/normalize.css';
import './css/colors.css';
import './css/fonts.css';
import './css/main.css';

// JS
import * as d3 from 'd3';
import head from './js/components/header/header';
import map from './js/components/map/map';
import config from './data/config.json';

// DATA
const vaxDataUrl = 'https://vs-postmedia-data.sfo2.digitaloceanspaces.com/covid/covid-vaccination-counts.csv';



const init = async () => {
	const header = document.querySelector('#header');
	const provCode = 'BC';

	// vaccination data
	const vax = await d3.csv('https://vs-postmedia-data.sfo2.digitaloceanspaces.com/covid/covid-vaccination-counts.csv');
	// load province shapes
	const provinces = await d3.json('https://vs-postmedia-data.sfo2.digitaloceanspaces.com/maps/canada_provinces.topojson');

	// build header
	const headerCopy = await head.init(vax, provCode);
	header.innerHTML = headerCopy;

	// build map
	map.init(vax, provinces);
};

init();