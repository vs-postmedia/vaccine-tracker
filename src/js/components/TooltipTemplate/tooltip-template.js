import css from './tooltip-template.css';
import helper from '../../../js/helper-functions';


function tooltip(data, variable) {
	const template = `
		<div class="tooltip-content">
			<h4>${data.name}</h4>
			<p class="doses">At least ${helper.numberWithCommas(data.doses_admin)} doses have been administered – roughly ${helper.numberWithCommas(data[variable])} doses per 100,000 people.</p>
		</div>
	`;

	return template;
};

export default tooltip;


// <p class="per100k">${helper.numberWithCommas(data['Doses per 100,000 people'])} vaccinations per 100,000 people</p>