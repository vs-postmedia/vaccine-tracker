import helper from '../../helper-functions';
import './header.css';

// import template from 'header-template';
const init = async (data, provCode) => {
	let header
	const prov = data.filter(d => d.code === provCode)[0];

	if (provCode !== 'CA') {
		header = `
			<h1>${prov.name} has administered <span class="highlight">${helper.numberWithCommas(parseInt(prov.doses_admin))} doses</span> of COVID-19 vaccines so far – roughly <span class="highlight">${Math.round(prov.pct_admin)}%</span> of the supply received from the federal government.</h1>
		`;
	} else {
		header = '<h1>Per cent of available vaccine supply used in each province</h1>'
	}

	return header;
}


export default { init };