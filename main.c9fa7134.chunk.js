(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 101:
/***/ (function(module) {

module.exports = JSON.parse("[{\"y\":5,\"x\":1.5,\"name\":\"Yukon\",\"abbr\":\"Yuk.\",\"code\":\"YT\"},{\"y\":5,\"x\":2.5,\"name\":\"Northwest Territories\",\"abbr\":\"N.W.T.\",\"code\":\"NT\"},{\"y\":5,\"x\":3.5,\"name\":\"Nunavut\",\"abbr\":\"Nun.\",\"code\":\"NU\"},{\"y\":4,\"x\":1,\"name\":\"British Columbia\",\"abbr\":\"B.C.\",\"code\":\"BC\"},{\"y\":4,\"x\":2,\"name\":\"Alberta\",\"abbr\":\"Alta.\",\"code\":\"AB\"},{\"y\":4,\"x\":3,\"name\":\"Saskatchewan\",\"abbr\":\"Sask.\",\"code\":\"SK\"},{\"y\":4,\"x\":4,\"name\":\"Manitoba\",\"abbr\":\"Man.\",\"code\":\"MB\"},{\"y\":3.5,\"x\":5,\"name\":\"Ontario\",\"abbr\":\"Ont.\",\"code\":\"ON\"},{\"y\":3.5,\"x\":6,\"name\":\"Quebec\",\"abbr\":\"Que.\",\"code\":\"QC\"},{\"y\":4,\"x\":7,\"name\":\"Newfoundland and Labrador\",\"abbr\":\"N.L.\",\"code\":\"NL\"},{\"y\":2.5,\"x\":6,\"name\":\"New Brunswick\",\"abbr\":\"N.B.\",\"code\":\"NB\"},{\"y\":3,\"x\":7,\"name\":\"Prince Edward Island\",\"abbr\":\"P.E.I.\",\"code\":\"PE\"},{\"y\":2,\"x\":7,\"name\":\"Nova Scotia\",\"abbr\":\"N.S.\",\"code\":\"NS\"}]");

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(153);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(12);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/css/normalize.css
var normalize = __webpack_require__(154);

// EXTERNAL MODULE: ./src/css/colors.css
var colors = __webpack_require__(155);

// EXTERNAL MODULE: ./src/css/fonts.css
var fonts = __webpack_require__(156);

// EXTERNAL MODULE: ./src/css/main.css
var main = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/d3/index.js + 293 modules
var d3 = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(158);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(54);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(166);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(167);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(171);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(173);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(175);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(176);

// CONCATENATED MODULE: ./src/js/helper-functions.js











var helper = {
  getUrlParam: function getUrlParam(param) {
    var defaultResult = null;
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var paramValue = urlParams.get(param); // is there a value?

    paramValue = paramValue ? paramValue.toUpperCase() : defaultResult; // check if the province is a value province code

    if (param === 'prov') {
      paramValue = this.validProvinceCodes.includes(paramValue) ? paramValue : 'BC';
    }

    return paramValue;
  },
  map: function map(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  },
  months: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
  numberWithCommas: function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  validProvinceCodes: ['YT', 'NT', 'NU', 'BC', 'AB', 'SK', 'MB', 'ON', 'QC', 'NL', 'NB', 'PE', 'NS']
};
/* harmony default export */ var helper_functions = (helper);
// EXTERNAL MODULE: ./src/js/components/header/header.css
var header_header = __webpack_require__(184);

// CONCATENATED MODULE: ./src/js/components/header/header.js







 // import template from 'header-template';

var init = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(data, provCode) {
    var prov;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            prov = data.filter(function (d) {
              return d.code === provCode;
            })[0];
            return _context.abrupt("return", "\n\t\t<h1>".concat(prov.name, " has administered <span class=\"highlight\">").concat(helper_functions.numberWithCommas(parseInt(prov.doses_admin)), " doses</span> of COVID-19 vaccines so far \u2013 roughly <span class=\"highlight\">").concat(prov.pct_admin, "%</span> of the supply received from the federal government.</h1>\n\t"));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var components_header_header = ({
  init: init
});
// EXTERNAL MODULE: ./src/js/components/table/table.css
var table = __webpack_require__(185);

// CONCATENATED MODULE: ./src/js/components/table/table.js








 // VARS

var tableRows = '';
var responsiveBreakpoint = 500;

var table_init = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(data, el) {
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // build the table rows
            data.forEach(function (d) {
              tableRows += rowTemplate(d);
            }); // add table to document

            document.querySelector(el).innerHTML = tableRows;

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function rowTemplate(d) {
  return "\n\t\t<h3 class=\"province\">".concat(d.name, "</h3>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"container received\">\n\t\t\t\t<h4>Doses Received</h4>\n\t\t\t\t<div class=\"metric-container\">\n\t\t\t\t\t<div class=\"metric\">\n\t\t\t\t\t\t<p class=\"title\">Received</p>\n\t\t\t\t\t\t<p class=\"value\">").concat(helper_functions.numberWithCommas(d.doses_rx), "</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"container administered\">\n\t\t\t\t<h4>Shots given</h4>\n\t\t\t\t<div class=\"metric-container\">\n\t\t\t\t\t<div class=\"metric\">\n\t\t\t\t\t\t<p class=\"title\">Used</p>\n\t\t\t\t\t\t<p class=\"value\">").concat(helper_functions.numberWithCommas(d.doses_admin), "</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"metric\">\n\t\t\t\t\t\t<p class=\"title\">% used</p>\n\t\t\t\t\t\t<p class=\"value\">").concat(d.pct_admin, "%</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"metric\">\n\t\t\t\t\t\t<p class=\"title\">Per 100,000</p>\n\t\t\t\t\t\t<p class=\"value\">").concat(helper_functions.numberWithCommas(d.doses_per100k), "</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t");
}

/* harmony default export */ var table_table = ({
  init: table_init
});
// EXTERNAL MODULE: ./node_modules/@flourish/popup/src/index.js + 5 modules
var src = __webpack_require__(102);

// EXTERNAL MODULE: ./src/js/components/TooltipTemplate/tooltip-template.css
var tooltip_template = __webpack_require__(186);

// CONCATENATED MODULE: ./src/js/components/TooltipTemplate/tooltip-template.js





function tooltip(data, variable) {
  var template = "\n\t\t<div class=\"tooltip-content\">\n\t\t\t<h4>".concat(data.name, "</h4>\n\t\t\t<p class=\"doses\">At least ").concat(helper_functions.numberWithCommas(data.doses_admin), " doses have been administered \u2013 about ").concat(data[variable], "% of the current supply.</p>\n\t\t</div>\n\t");
  return template;
}

;
/* harmony default export */ var TooltipTemplate_tooltip_template = (tooltip); // <p class="per100k">${helper.numberWithCommas(data['Doses per 100,000 people'])} vaccinations per 100,000 people</p>
// EXTERNAL MODULE: ./src/js/components/canada-tilemap/canada-tilemap.css
var canada_tilemap = __webpack_require__(187);

// CONCATENATED MODULE: ./src/js/components/canada-tilemap/canada-tilemap.js








 // CSS


var coloursArray = ['#D4DAEA', '#AFBEDB', '#829DC7', '#6D8EBF', '#3C76B0', '#0062A3'];
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
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(el, data, metric, legendTitle) {
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
            addLegend(map, colours, legendTitle, "".concat(Math.floor(scaleMax), "+"), canada_tilemap_displayVariable); // set fill colour for shapes

            data.forEach(function (d) {
              d3["f" /* select */]("#".concat(d.code)).style('fill', colours(d[canada_tilemap_displayVariable]));
            });

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init(_x, _x2, _x3, _x4) {
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

function addLegend(svg, legendScale, legendTitle, scaleMax, displayVariable) {
  var legend = d3["f" /* select */]('#map').append('div').attr('class', 'legend');
  legend.append('p').attr('class', 'legend-title').text(legendTitle);
  legend.append('div').attr('class', 'legend-fill');
  legend.append('p').attr('class', 'legend-value legend-value-left').text('0');
  legend.append('p').attr('class', 'legend-value legend-value-right').text(scaleMax);
}

function assignColours(scaleMax) {
  // colour scale (postmedia blue)
  return d3["e" /* scaleQuantile */]().domain([0, scaleMax]).range(coloursArray);
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
var data_canada_tilemap = __webpack_require__(101);

// CONCATENATED MODULE: ./src/index.js









// CSS



 // JS






 // import map from './js/components/map/map';
// VARS

var src_variable = 'pct_admin';
var src_legendTitle = 'Doses used (%)'; // DATA

var vaxDataUrl = 'https://vs-postmedia-data.sfo2.digitaloceanspaces.com/covid/covid-vaccination-counts.csv';

var src_init = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    var header, provCode, format, vax, joinedData, data, sorted, headerCopy;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            header = document.querySelector('#header');
            provCode = helper_functions.getUrlParam('prov');
            format = helper_functions.getUrlParam('format'); // vaccination data

            _context.next = 5;
            return d3["a" /* csv */](vaxDataUrl);

          case 5:
            vax = _context.sent;
            _context.next = 8;
            return joinData(vax, data_canada_tilemap);

          case 8:
            joinedData = _context.sent;
            data = parseNumbers(joinedData); // load province shapes
            // const provinces = await d3.json('https://vs-postmedia-data.sfo2.digitaloceanspaces.com/maps/canada_provinces.topojson');
            // is it a table or a map?

            if (!(format === 'TABLE')) {
              _context.next = 15;
              break;
            }

            sorted = data.sort(function (a, b) {
              return b.pct_admin - a.pct_admin;
            });
            table_table.init(sorted, '#table');
            _context.next = 20;
            break;

          case 15:
            _context.next = 17;
            return components_header_header.init(data, provCode, src_variable);

          case 17:
            headerCopy = _context.sent;
            header.innerHTML = headerCopy; // build map

            canada_tilemap_canada_tilemap.init('#map', data, src_variable, src_legendTitle); // map.init(vax, provinces);

          case 20:
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
  // join by prov code
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
    d['doses_rx'] = +d['doses_rx'], d['doses_admin'] = +d['doses_admin'], d['doses_per100k'] = +d['doses_per100k'];
  });
  return data;
}

src_init();

/***/ })

},[[188,1,2]]]);