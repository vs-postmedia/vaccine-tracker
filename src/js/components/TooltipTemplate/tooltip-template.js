import css from './tooltip-template.css';
import helper from '../../../js/helper-functions';


function tooltip(data, variable) {
	const template = `
		<div class="tooltip-content">
			<h4>${data.name}</h4>
			<p class="doses">At least <span class="green">${helper.numberWithCommas(data.doses_admin)}</span> vaccine doses have been administered – <span class="green">${helper.numberWithCommas(data[variable])}</span> doses per 100,000 people.</p>
			<p>At least <span class="green">${helper.numberWithCommas(data.full_vax)}</span> people are fully vaccinated.</p>
		</div>
	`;

	return template;
};

export default tooltip;

