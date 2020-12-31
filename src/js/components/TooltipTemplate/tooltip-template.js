import css from './tooltip-template.css';
import helper from '../../../js/helper-functions';


function tooltip(data) {
	const template = `
		<div class="tooltip-content">
			<h4>${data.PRENAME}</h4>
			<p class="doses">${helper.numberWithCommas(data['Doses administered'])} doses administered</p>
			<p class="per100k">${helper.numberWithCommas(data['Doses per 100,000 people'])} vaccinations per 100,000 people</p>
		</div>
	`;

	return template;
};

export default tooltip;

