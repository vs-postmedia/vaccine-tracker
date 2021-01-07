import css from './tooltip-template.css';
import helper from '../../../js/helper-functions';


function tooltip(data, variable) {
	const template = `
		<div class="tooltip-content">
			<h4>${data.name}</h4>
			<p class="doses">${helper.numberWithCommas(data['Doses administered'])} doses have been administered – about ${data[variable]}% of the received doses.</p>
		</div>
	`;

	return template;
};

export default tooltip;


// <p class="per100k">${helper.numberWithCommas(data['Doses per 100,000 people'])} vaccinations per 100,000 people</p>