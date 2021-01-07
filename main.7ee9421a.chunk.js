(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(14);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(30);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/css/normalize.css
var normalize = __webpack_require__(143);

// EXTERNAL MODULE: ./src/css/colors.css
var colors = __webpack_require__(144);

// EXTERNAL MODULE: ./src/css/fonts.css
var fonts = __webpack_require__(145);

// EXTERNAL MODULE: ./src/css/main.css
var main = __webpack_require__(146);

// EXTERNAL MODULE: ./node_modules/d3/index.js + 293 modules
var d3 = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(147);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(154);

// CONCATENATED MODULE: ./src/js/helper-functions.js


const helper = {
  getPrCode() {
    const defaultPrCode = 'BC';
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const prCode = urlParams.get('prov'); // is there a code?

    const code = prCode ? prCode.toUpperCase() : defaultPrCode;
    return this.validProvinceCodes.includes(code) ? code : defaultPrCode;
  },

  map(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  },

  months: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },

  validProvinceCodes: ['YT', 'NT', 'NU', 'BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NL', 'NB', 'PE', 'NS']
};
/* harmony default export */ var helper_functions = (helper);
// EXTERNAL MODULE: ./src/js/components/header/header.css
var header_header = __webpack_require__(170);

// CONCATENATED MODULE: ./src/js/components/header/header.js

 // import template from 'header-template';

const init = async (data, provCode) => {
  const prov = data.filter(d => d.code === provCode)[0];
  return `
		<h1>${prov.name} has administered <span class="highlight">${helper_functions.numberWithCommas(parseInt(prov['Doses administered']))} doses</span> of COVID-19 vaccines so far – roughly <span class="highlight">${prov['% administered']}%</span> of the supply received from the federal government.</h1>
	`;
};

/* harmony default export */ var components_header_header = ({
  init
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(171);

// EXTERNAL MODULE: ./node_modules/@flourish/popup/src/index.js + 5 modules
var src = __webpack_require__(87);

// EXTERNAL MODULE: ./src/js/components/TooltipTemplate/tooltip-template.css
var tooltip_template = __webpack_require__(172);

// CONCATENATED MODULE: ./src/js/components/TooltipTemplate/tooltip-template.js



function tooltip(data, variable) {
  const template = `
		<div class="tooltip-content">
			<h4>${data.name}</h4>
			<p class="doses">${helper_functions.numberWithCommas(data['Doses administered'])} doses have been administered – about ${data[variable]}% of the current supply.</p>
		</div>
	`;
  return template;
}

;
/* harmony default export */ var TooltipTemplate_tooltip_template = (tooltip); // <p class="per100k">${helper.numberWithCommas(data['Doses per 100,000 people'])} vaccinations per 100,000 people</p>
// EXTERNAL MODULE: ./src/js/components/canada-tilemap/canada-tilemap.css
var canada_tilemap = __webpack_require__(173);

// CONCATENATED MODULE: ./src/js/components/canada-tilemap/canada-tilemap.js








 // CSS


var popup = Object(src["a" /* default */])();
var mobileBreakpoint = 500;
var marginMobile = {
  top: 50,
  right: 30,
  bottom: 25,
  left: 25
};
var marginWeb = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50
};
var windowWidth, shapeMultiplier, x, y, canada_tilemap_displayVariable;

var canada_tilemap_init = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(el, data, metric) {
    var label, square, margin, height, width, svg, scaleMax, colours;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            canada_tilemap_displayVariable = metric;
            label = 'abbr'; // OR 'code'

            square = d3["g" /* symbol */]().type(d3["h" /* symbolSquare */]); // calculations to jankily adjust map dimensions

            windowWidth = document.querySelector(el).offsetWidth;
            shapeMultiplier = windowWidth < mobileBreakpoint ? 6 : 12;
            margin = windowWidth < mobileBreakpoint ? marginMobile : marginWeb;
            height = windowWidth * 0.4;
            width = windowWidth * 0.8; // scales

            x = d3["d" /* scaleLinear */]().range([0, width]);
            y = d3["d" /* scaleLinear */]().range([height, 0]); // Compute the scales’ domains.

            x.domain(d3["b" /* extent */](data, function (d) {
              return d.x;
            })).nice();
            y.domain(d3["b" /* extent */](data, function (d) {
              return d.y;
            })).nice(); // SVG

            svg = d3["f" /* select */]('#map').append('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom + 10).append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')'); // add shapes

            drawShapes(svg, data, square); // add labels

            addLabels(svg, data, label); // add colours & a legend

            scaleMax = d3["c" /* max */](data, function (d) {
              return d[canada_tilemap_displayVariable];
            });
            colours = assignColours(scaleMax);
            addLegend(map, colours, "".concat(Math.floor(scaleMax), "+"), canada_tilemap_displayVariable); // set fill colour for shapes

            data.forEach(function (d) {
              d3["f" /* select */]("#".concat(d.code)).style('fill', colours(d[canada_tilemap_displayVariable]));
            });
            console.log(data);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

function addLabels(svg, data, label) {
  svg.append('g').attr('class', 'labels').selectAll('labels').data(data).enter().append('text').attr('transform', function (d) {
    return "translate(".concat(x(d.x), ",").concat(y(d.y), ")");
  }).text(function (d) {
    return d[label];
  }).attr('class', 'label');
}

function addLegend(svg, legendScale, scaleMax, displayVariable) {
  var legend = d3["f" /* select */]('#map').append('div').attr('class', 'legend');
  legend.append('p').attr('class', 'legend-title').text(displayVariable);
  legend.append('div').attr('class', 'legend-fill');
  legend.append('p').attr('class', 'legend-value legend-value-left').text('0');
  legend.append('p').attr('class', 'legend-value legend-value-right').text(scaleMax);
}

function assignColours(scaleMax) {
  // colour scale (postmedia blue)
  return d3["e" /* scaleQuantile */]().domain([0, scaleMax]).range(['#D1D2D4', '#D4DAEA', '#AFBEDB', '#829DC7', '#3C76B0', '#0062A3']);
}

function drawShapes(svg, data, square) {
  // Add the points/shapes
  svg.append('g').attr('class', 'shapes').selectAll('prov').data(data).enter().append('path').attr('id', function (d) {
    return d.code;
  }).attr('class', 'prov').attr('d', square.size(windowWidth * shapeMultiplier)).attr('transform', function (d) {
    return "translate(".concat(x(d.x), ",").concat(y(d.y), ")");
  }).on('mouseover', handleMouseenter).on('mouseout', handleMouseout);
}

function handleMouseenter(d) {
  popup.point(event.pageX, event.pageY).html(TooltipTemplate_tooltip_template(d, canada_tilemap_displayVariable)).draw();
}

function handleMouseout(d) {
  popup.hide();
}

/* harmony default export */ var canada_tilemap_canada_tilemap = ({
  init: canada_tilemap_init
});
// EXTERNAL MODULE: ./src/data/canada-tilemap.json
var data_canada_tilemap = __webpack_require__(86);

// CONCATENATED MODULE: ./src/index.js








// CSS



 // JS





 // import map from './js/components/map/map';
// import config from './data/config.json';
// DATA

var src_variable = '% administered';
var vaxDataUrl = 'https://vs-postmedia-data.sfo2.digitaloceanspaces.com/covid/covid-vaccination-counts.csv';

var src_init = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    var header, provCode, vax, joinedData, data, headerCopy;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            header = document.querySelector('#header');
            provCode = helper_functions.getPrCode(); // vaccination data

            _context.next = 4;
            return d3["a" /* csv */](vaxDataUrl);

          case 4:
            vax = _context.sent;
            _context.next = 7;
            return joinData(vax, data_canada_tilemap);

          case 7:
            joinedData = _context.sent;
            data = parseNumbers(joinedData); // load province shapes
            // const provinces = await d3.json('https://vs-postmedia-data.sfo2.digitaloceanspaces.com/maps/canada_provinces.topojson');
            // build header

            _context.next = 11;
            return components_header_header.init(data, provCode, src_variable);

          case 11:
            headerCopy = _context.sent;
            header.innerHTML = headerCopy; // build map

            canada_tilemap_canada_tilemap.init('#map', data, src_variable); // map.init(vax, provinces);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

function joinData(data, shapes) {
  console.log(data, shapes); // join by prov code

  return shapes.map(function (s) {
    var dataProps = data.filter(function (d) {
      return d.prov_code === s.code;
    })[0];
    delete dataProps.prov_code; // duplicate

    var joined = Object.assign({}, s, dataProps);
    return joined;
  });
}

function parseNumbers(data) {
  data.forEach(function (d) {
    d['% vaccinated'] = +d['% vaccinated'], d['Doses administered'] = +d['Doses administered'], d['Doses per 100,000'] = +d['Doses per 100,000'];
  });
  return data;
}

src_init();

/***/ }),

/***/ 86:
/***/ (function(module) {

module.exports = JSON.parse("[{\"y\":5,\"x\":1.5,\"name\":\"Yukon\",\"abbr\":\"Yuk.\",\"code\":\"YT\"},{\"y\":5,\"x\":2.5,\"name\":\"Northwest Territories Territories\",\"abbr\":\"N.W.T.\",\"code\":\"NT\"},{\"y\":5,\"x\":3.5,\"name\":\"Nunavut\",\"abbr\":\"Nun.\",\"code\":\"NU\"},{\"y\":4,\"x\":1,\"name\":\"British Columbia\",\"abbr\":\"B.C.\",\"code\":\"BC\"},{\"y\":4,\"x\":2,\"name\":\"Alberta\",\"abbr\":\"Alta.\",\"code\":\"AB\"},{\"y\":4,\"x\":3,\"name\":\"Saskatchewan\",\"abbr\":\"Sask.\",\"code\":\"SK\"},{\"y\":4,\"x\":4,\"name\":\"Manitoba\",\"abbr\":\"Man.\",\"code\":\"MB\"},{\"y\":3.5,\"x\":5,\"name\":\"Ontario\",\"abbr\":\"Ont.\",\"code\":\"ON\"},{\"y\":3.5,\"x\":6,\"name\":\"Quebec\",\"abbr\":\"Que.\",\"code\":\"QC\"},{\"y\":4,\"x\":7,\"name\":\"Newfoundland and Labrador\",\"abbr\":\"N.L.\",\"code\":\"NL\"},{\"y\":2.5,\"x\":6,\"name\":\"New Brunswick\",\"abbr\":\"N.B.\",\"code\":\"NB\"},{\"y\":3,\"x\":7,\"name\":\"Prince Edward Island\",\"abbr\":\"P.E.I.\",\"code\":\"PE\"},{\"y\":2,\"x\":7,\"name\":\"Nova Scotia\",\"abbr\":\"N.S.\",\"code\":\"NS\"}]");

/***/ })

},[[174,1,2]]]);