import helper from '../../helper-functions';
import './header.css';

// import template from 'header-template';
const init = async (data, provCode) => {
	const prov = data.filter(d => d.code === provCode)[0];
	const provName = prov.name;

	return `
		<h1>${provName} has administered <span class="highlight">${helper.numberWithCommas(parseInt(prov['Doses administered']))} doses</span> of COVID-19 vaccines so far – roughly <span class="highlight">${prov['% vaccinated']}%</span> of the province.</h1>
	`;
}


export default { init };