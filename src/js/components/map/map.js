// NOTE: https://bl.ocks.org/officeofjane/d33d6ef783993b60b15a3fe0f8da1481
// hex shapes: https://github.com/BobHarper1/d3.geo2recthex/blob/master/README.md


import * as d3 from 'd3';
import Popup from '@flourish/popup';
import helper from '../../helper-functions';
import * as topojson from 'topojson-client';
import TooltipTemplate from '../TooltipTemplate/tooltip-template';


import './map.css';

let popup;
const config = {
	padding : 30,
	projection : d3.geoMercator().scale([200]),
	duration : 1000,
	key: d => d.properties.code,
	grid: {
		YT: {x: 1, y: 1},
		NT: {x: 1, y: 2},
		NU: {x: 1, y: 4},
		BC: {x: 2, y: 1},
		AB: {x: 2, y: 2},
		SK: {x: 2, y: 3},
		MB: {x: 2, y: 4},
		ON: {x: 3, y: 5},
		QC: {x: 3, y: 6},
		NB: {x: 4, y: 6},
		NS: {x: 5, y: 7},
		PE: {x: 4, y: 7},
		NL: {x: 2, y: 7},
	}
};


const init = async (data, topoShapes) => {
	console.log('mpa!');

	const app = document.querySelector('#map');
	config.width = app.offsetWidth;
	config.height = app.offsetHeight;
	console.log(config)

	// colour scale (postmedia blue)
	const colours = d3.scaleQuantile()
		.domain([0,0.1,0.2,0.4,0.6,0.8])
		.range(['#D1D2D4','#D4DAEA','#AFBEDB','#829DC7','#3C76B0','#0062A3']);
		// .range(['#D4DAEA','#AFBEDB','#829DC7','#6D8EBF','#3C76B0','#0062A3']);

	// map projection
	const projection = d3.geoAlbers().scale([400]).translate([config.width / 2, config.height])

	// svg container
	const svg = d3.select('#map')
		.append('svg')
		.attr('width',config.width)
		.attr('height',config.height);

	// add popup
	popup = Popup();
	// const shape = d3.selectAll('.province');
	// popup = Popup().container(shape);

	/* 
	*	MOVE TO INIT
	*/
	// prep topo
	const topo = topojson.feature(topoShapes, topoShapes.objects.canada_provinces)
	// merge our datasets
	const mapData = await leftJoinData(data, topo);
	/*
	*	END MOVE
	*/


	// build our map
	drawMap(svg, mapData, projection);

	// set fill colour for shapes
	data.forEach(function(d) {
	    d3.select(`#${d.prov_code}`)
	    	.style('fill', colours(d['% of population']));
	});

	console.log(mapData);
}

function addLabels(data, path, svg) {
	svg.append('g')
		.selectAll('labels')
		.data(data.features)
		.enter()
		.append('text')
			.attr('id', d => d.properties.code)
			.attr('class', 'labels benton-reg')
			.attr('x', d => {
				let centroid = path.centroid(d)[0];

				// NB
				centroid = d.id === 8 ? centroid - 4 : centroid;

				return centroid;
			})
			.attr('y', d => {
				let centroid = path.centroid(d)[1];

				// NS
				centroid = d.id === 12 ? centroid + 10 : centroid;

				return centroid;
			})
			.text(d => `${helper.numberWithCommas(parseFloat(d.properties['% of population']))}%`);
}

function addZoom(svg) {
	const zoom = d3.zoom()
		.scaleExtent([1,5])
		.on('zoom', () => {
			svg.selectAll('path')
				.attr('transform', d3.event.transform)
			svg.select('#map #NB.labels')
				.attr('transform', d3.event.transform);
			svg.selectAll('.labels')
				.attr('transform', d3.event.transform);
		});

	svg.call(zoom);

	return svg;
}

function drawMap(svg, data, projection) {
	// setup svg
	const path = d3.geoPath()
		.projection(projection);

	// draw shapes
	svg.append('g')
		.selectAll('path')
		.data(data.features)
		.enter()
		.append('path')
			.attr('id', d => d.properties.code)
			.attr('class', 'province')
			.attr('fill', '#EAEBEC')
			.attr('stroke', '#FFF')
			.attr('stroke-linejoin', 'round')
			.attr('stroke-width', '0.25px')
			.attr('d', path)
			.on('mousemove touchmove', hoverEvent)
			.on('mouseout', handleMouseout);

	// label provinces
	addLabels(data, path, svg);

	// add zoom functions
	addZoom(svg);
	
	return svg;
}


function handleMouseout() {
	popup.hide();
}

function hoverEvent(e) {
	console.log(e);

	// popup.container(shape);
	const name = e.properties.PRENAME;
	const point = d3.select(`#${e.properties.code}`)
	// const currentPoint = popup.point();
	const mouse = d3.mouse(this);
	
	// console.log(mouse[0], mouse[1], e.properties.code, point)

	popup
		.point(mouse[0], mouse[1] + 125)
		.html(TooltipTemplate(e.properties))
		.draw();
}

function leftJoinData(data, topo) {
	// join by prov code
	topo.features.forEach(d => {
		const dataProps = data.filter(f => f.prov_code === d.properties.code)[0];
		const newProperties = Object.assign({}, d.properties, dataProps)
		d.properties = newProperties;
	});

	return topo;
}

export default { init };