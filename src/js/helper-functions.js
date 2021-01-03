const helper = {
	getPrCode() {
		let province;
		const defaultPrCode = 'BC';
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const prCode = urlParams.get('prov');

		return this.validProvinceCodes.includes(prCode.toUpperCase()) ? prCode.toUpperCase() : defaultPrCode;
	},

	map(num, in_min, in_max, out_min, out_max) {
		return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
	},
	months: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
	numberWithCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	},
	validProvinceCodes: ['YT','NT','NU','BC','AB','SK','MB','ON','QC','NL','NB','PE','NS']
};

export default helper;

