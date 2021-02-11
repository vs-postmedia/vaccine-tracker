import helper from '../../helper-functions';
import './header.css';

// import template from 'header-template';
const init = async (data, provCode) => {
	let header
	const prov = data.filter(d => d.code === provCode)[0];

	if (provCode !== 'CA') {
		header = `
			<h2>At least <span class="highlight">${helper.numberWithCommas(parseInt(prov.full_vax))}</span> people in ${prov.name} have been fully vaccinated against the coronavirus. Another <span class="highlight">${helper.numberWithCommas(parseInt(prov.doses_admin - (prov.full_vax * 2)))}</span> have received one vaccine dose.</h2>
		`;
	} else {
		header = '<h2>Doses of COVID-19 vaccine administered per 100,000 people</h2>'
	}

	return header;
}


export default { init };