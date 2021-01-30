import Papa from 'papaparse';
import helper from '../../helper-functions'
import css from './table.css';


// VARS
let copy;
let tableRows = '';
const responsiveBreakpoint = 500;
const copyUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2cMRSXnkjEZqYJKqsr3q_rNUOb9_LC4CFRe6qWT2M6nuol0GwXWR7J0U_I6HxCxxilHJtyNjyOEDI/pub?gid=0&single=true&output=csv';

const init = async (data, el) => {
	// text is stored in google sheet
	let copy;
	try {
		copy = await getCopy(copyUrl);
	} catch (err) {
		console.log(err)
	}

	// build the table rows
	data.forEach(d => {
		d.copy = copy.data.filter(c => c.code === d.code)[0].text;
		tableRows += rowTemplate(d);
	});

	// add table to document
	document.querySelector(el).innerHTML = tableRows;
}

function getCopy(url) {
	return new Promise((resolve, reject) => {
		Papa.parse(url, {
			download: true,
			header: true,
			complete: results => resolve(results),
			error: err => reject(err)
		});
	})
}

function rowTemplate(d) {
	return `
		<h3 class="province">${d.name}</h3>
		<p class="copy">${d.copy}</p>
		<div class="row">
			<div class="container received">
				<h4>Doses received</h4>
				<div class="metric-container">
					<div class="metric">
						<p class="title">Received</p>
						<p class="value">${helper.numberWithCommas(d.doses_rx)}</p>
					</div>
				</div>
			</div>

			<div class="container administered">
				<h4>People vaccinated</h4>
				<div class="metric-container">
					<div class="metric">
						<p class="title">Per 100,000 (fully)</p>
						<p class="value">${helper.numberWithCommas(d.full_vax_per100k)}</p>
					</div>

					<div class="metric">
						<p class="title">Fully</p>
						<p class="value">${helper.numberWithCommas(d.full_vax)}</p>
					</div>
					<div class="metric">
						<p class="title">Partially</p>
						<p class="value">${helper.numberWithCommas(d.doses_admin)}</p>
					</div>
				</div>
			</div>
		</div>
	`;
}


export default { init };

