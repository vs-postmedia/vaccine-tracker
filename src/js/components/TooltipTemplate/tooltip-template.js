import css from './tooltip-template.css';
import helper from '../../../js/helper-functions';


function tooltip(data, variable) {
	const template = `
		<div class="tooltip-content">
			<h4>${data.name}</h4>
			<p class="doses">At least <span class="green">${helper.numberWithCommas(data.doses_admin)}</span> doses have been administered – roughly <span class="green">${helper.numberWithCommas(data[variable])}</span> doses per 100,000 people.</p>
		</div>
	`;

	return template;
};

export default tooltip;

