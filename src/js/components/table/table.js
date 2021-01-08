import helper from '../../helper-functions'
import css from './table.css';


// VARS
let tableRows = '';
const responsiveBreakpoint = 500;


const init = async (data, el) => {

	// build the table rows
	data.forEach(d => {
		tableRows += rowTemplate(d);
	});

	// add table to document
	document.querySelector(el).innerHTML = tableRows;
}


function rowTemplate(d) {
	return `
		<h3 class="province">${d.name}</h3>
		<div class="row">
			<div class="container received">
				<h4>Doses Received</h4>
				<div class="metric-container">
					<div class="metric">
						<p class="title">Received</p>
						<p class="value">${helper.numberWithCommas(d.doses_rx)}</p>
					</div>
				</div>
			</div>

			<div class="container administered">
				<h4>Shots given</h4>
				<div class="metric-container">
					<div class="metric">
						<p class="title">Used</p>
						<p class="value">${helper.numberWithCommas(d.doses_admin)}</p>
					</div>
					<div class="metric">
						<p class="title">% used</p>
						<p class="value">${d.pct_admin}%</p>
					</div>
					<div class="metric">
						<p class="title">Per 100,000</p>
						<p class="value">${helper.numberWithCommas(d.doses_per100k)}</p>
					</div>
				</div>
			</div>
		</div>
	`;
}


export default { init };

