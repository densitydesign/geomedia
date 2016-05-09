'use strict';

/**
 * @ngdoc service
 * @name geomediaApp.dorlingservice
 * @description
 * # dorlingservice
 * Factory in the geomediaApp.
 */
angular.module('geomediaApp')
  .factory('dorlingservice', function () {
    // Service logic
    // ...

    var dorlingdata =[{"key":"RUS","label":"Russian Federation","lon":100,"lat":60},{"key":"EGY","label":"Egypt","lon":30,"lat":27},{"key":"IDN","label":"Indonesia","lon":120,"lat":-5},{"key":"USA","label":"United States of America","lon":-98.5795,"lat":39.828175},{"key":"IND","label":"India","lon":77,"lat":20},{"key":"JPN","label":"Japan","lon":138,"lat":36},{"key":"PSE","label":"Palestine, State of","lon":34.373398,"lat":31.425074},{"key":"SOM","label":"Somalia","lon":48,"lat":6},{"key":"SDN","label":"Sudan","lon":30,"lat":16},{"key":"ISR","label":"Israel","lon":34.75,"lat":31.5},{"key":"RWA","label":"Rwanda","lon":30,"lat":-2},{"key":"LBN","label":"Lebanon","lon":35.833333,"lat":33.833333},{"key":"SSD","label":"South Sudan","lon":30,"lat":8},{"key":"IRQ","label":"Iraq","lon":44,"lat":33},{"key":"THA","label":"Thailand","lon":100,"lat":15},{"key":"BGD","label":"Bangladesh","lon":90,"lat":24},{"key":"CHN","label":"China","lon":105,"lat":35},{"key":"VAT","label":"Holy See (Vatican City State)","lon":12.45,"lat":41.9},{"key":"SYR","label":"Syrian Arab Republic","lon":38,"lat":35},{"key":"IRN","label":"Iran, Islamic Republic of","lon":53,"lat":32},{"key":"CUB","label":"Cuba","lon":-79.5,"lat":22},{"key":"KHM","label":"Cambodia","lon":105,"lat":13},{"key":"DEU","label":"Germany","lon":10.5,"lat":51.5},{"key":"GBR","label":"United Kingdom","lon":-4,"lat":54},{"key":"AFG","label":"Afghanistan","lon":66,"lat":33},{"key":"PRK","label":"Korea, Democratic People's Republic of","lon":127,"lat":40},{"key":"BRA","label":"Brazil","lon":-55,"lat":-10},{"key":"ESP","label":"Spain","lon":-4,"lat":40},{"key":"ITA","label":"Italy","lon":12.833333,"lat":42.833333},{"key":"FRA","label":"France","lon":2,"lat":46},{"key":"VEN","label":"Venezuela, Bolivarian Republic of","lon":-66,"lat":8},{"key":"TUR","label":"Turkey","lon":34.911546,"lat":39.059012},{"key":"TON","label":"Tonga","lon":-175,"lat":-20},{"key":"CAF","label":"Central African Republic","lon":21,"lat":7},{"key":"LBY","label":"Libya","lon":17,"lat":25},{"key":"MMR","label":"Myanmar","lon":98,"lat":22},{"key":"NGA","label":"Nigeria","lon":8,"lat":10},{"key":"MEX","label":"Mexico","lon":-102,"lat":23},{"key":"DNK","label":"Denmark","lon":10,"lat":56},{"key":"ARG","label":"Argentina","lon":-64,"lat":-34},{"key":"AUS","label":"Australia","lon":135,"lat":-25},{"key":"UKR","label":"Ukraine","lon":32,"lat":49},{"key":"JAM","label":"Jamaica","lon":-77.5,"lat":18.25},{"key":"NRU","label":"Nauru","lon":166.916667,"lat":-0.533333},{"key":"NOR","label":"Norway","lon":10,"lat":62},{"key":"PAK","label":"Pakistan","lon":70,"lat":30},{"key":"QAT","label":"Qatar","lon":51.25,"lat":25.5},{"key":"BIH","label":"Bosnia and Herzegovina","lon":17.833333,"lat":44.25},{"key":"GRC","label":"Greece","lon":22,"lat":39},{"key":"CAN","label":"Canada","lon":-96,"lat":60},{"key":"TCD","label":"Chad","lon":19,"lat":15},{"key":"PHL","label":"Philippines","lon":122,"lat":13},{"key":"IRL","label":"Ireland","lon":-8,"lat":53},{"key":"SWE","label":"Sweden","lon":15,"lat":62},{"key":"NPL","label":"Nepal","lon":84,"lat":28},{"key":"ZAF","label":"South Africa","lon":26,"lat":-30},{"key":"CHE","label":"Switzerland","lon":8,"lat":47},{"key":"SLV","label":"El Salvador","lon":-88.916667,"lat":13.833333},{"key":"DZA","label":"Algeria","lon":3,"lat":28},{"key":"POL","label":"Poland","lon":20,"lat":52},{"key":"FJI","label":"Fiji","lon":178,"lat":-18},{"key":"SGP","label":"Singapore","lon":103.8,"lat":1.366667},{"key":"BEL","label":"Belgium","lon":4,"lat":50.833333},{"key":"TWN","label":"Taiwan, Province of China","lon":121,"lat":24},{"key":"LKA","label":"Sri Lanka","lon":81,"lat":7},{"key":"UGA","label":"Uganda","lon":33,"lat":2},{"key":"MYS","label":"Malaysia","lon":112.5,"lat":2.5},{"key":"PER","label":"Peru","lon":-76,"lat":-10},{"key":"BLR","label":"Belarus","lon":28,"lat":53},{"key":"GRL","label":"Greenland","lon":-40,"lat":72},{"key":"MDA","label":"Moldova, Republic of","lon":29,"lat":47},{"key":"MDV","label":"Maldives","lon":73,"lat":3.2},{"key":"SAU","label":"Saudi Arabia","lon":45,"lat":25},{"key":"KEN","label":"Kenya","lon":38,"lat":1},{"key":"CHL","label":"Chile","lon":-71,"lat":-30},{"key":"PRT","label":"Portugal","lon":-8,"lat":39.5},{"key":"HUN","label":"Hungary","lon":20,"lat":47},{"key":"LIE","label":"Liechtenstein","lon":9.533333,"lat":47.166667},{"key":"BRN","label":"Brunei Darussalam","lon":114.666667,"lat":4.5},{"key":"YEM","label":"Yemen","lon":47.5,"lat":15.5},{"key":"TLS","label":"Timor-Leste","lon":125.75,"lat":-8.833333},{"key":"MCO","label":"Monaco","lon":7.4,"lat":43.733333},{"key":"LAO","label":"Lao People's Democratic Republic","lon":105,"lat":18},{"key":"LTU","label":"Lithuania","lon":24,"lat":56},{"key":"VNM","label":"Viet Nam","lon":107.833333,"lat":16.166667},{"key":"ZWE","label":"Zimbabwe","lon":29,"lat":-19},{"key":"KOR","label":"Korea, Republic of","lon":127.5,"lat":37},{"key":"HKG","label":"Hong Kong","lon":114.166667,"lat":22.25},{"key":"BHR","label":"Bahrain","lon":50.5,"lat":26},{"key":"NLD","label":"Netherlands","lon":5.75,"lat":52.5},{"key":"GIN","label":"Guinea","lon":-10,"lat":11},{"key":"ISL","label":"Iceland","lon":-18,"lat":65},{"key":"LBR","label":"Liberia","lon":-9.5,"lat":6.5},{"key":"ARE","label":"United Arab Emirates","lon":54,"lat":24},{"key":"LSO","label":"Lesotho","lon":28.25,"lat":-29.5},{"key":"BOL","label":"Bolivia, Plurinational State of","lon":-65,"lat":-17},{"key":"SLE","label":"Sierra Leone","lon":-11.5,"lat":8.5},{"key":"EST","label":"Estonia","lon":26,"lat":59},{"key":"TUN","label":"Tunisia","lon":9,"lat":34},{"key":"MKD","label":"Macedonia, the former Yugoslav Republic of","lon":22,"lat":41.833333},{"key":"SVN","label":"Slovenia","lon":15.166667,"lat":46.25},{"key":"PLW","label":"Palau","lon":134,"lat":6},{"key":"NZL","label":"New Zealand","lon":174,"lat":-42},{"key":"ZMB","label":"Zambia","lon":30,"lat":-15},{"key":"BFA","label":"Burkina Faso","lon":-2,"lat":13},{"key":"MLI","label":"Mali","lon":-4,"lat":17},{"key":"JOR","label":"Jordan","lon":36,"lat":31},{"key":"COL","label":"Colombia","lon":-72,"lat":4},{"key":"HND","label":"Honduras","lon":-86.5,"lat":15},{"key":"MRT","label":"Mauritania","lon":-12,"lat":20},{"key":"ROU","label":"Romania","lon":25,"lat":46},{"key":"HRV","label":"Croatia","lon":15.5,"lat":45.166667},{"key":"GMB","label":"Gambia","lon":-15.5,"lat":13.5},{"key":"CRI","label":"Costa Rica","lon":-84,"lat":10},{"key":"MAC","label":"Macao","lon":113.559722,"lat":22.157778},{"key":"NER","label":"Niger","lon":8,"lat":16},{"key":"MWI","label":"Malawi","lon":34,"lat":-13.5},{"key":"CMR","label":"Cameroon","lon":12,"lat":6},{"key":"CYP","label":"Cyprus","lon":33,"lat":35},{"key":"AUT","label":"Austria","lon":13.333333,"lat":47.333333},{"key":"VUT","label":"Vanuatu","lon":167,"lat":-16},{"key":"ARM","label":"Armenia","lon":45,"lat":40},{"key":"ETH","label":"Ethiopia","lon":38,"lat":8},{"key":"BDI","label":"Burundi","lon":30,"lat":-3.5},{"key":"CZE","label":"Czech Republic","lon":15,"lat":49.75},{"key":"GHA","label":"Ghana","lon":-2,"lat":8},{"key":"ERI","label":"Eritrea","lon":39,"lat":15},{"key":"KWT","label":"Kuwait","lon":47.75,"lat":29.5},{"key":"MNG","label":"Mongolia","lon":105,"lat":46},{"key":"CXR ","label":"Christmas Island","lon":105.666667,"lat":-10.5},{"key":"COG","label":"Congo","lon":15,"lat":-1},{"key":"CCK ","label":"Cocos (Keeling) Islands","lon":96.833333,"lat":-12},{"key":"WSM","label":"Samoa","lon":-172.178309,"lat":-13.803096},{"key":"SLB","label":"Solomon Islands","lon":159,"lat":-8},{"key":"FSM","label":"Micronesia, Federated States of","lon":152,"lat":5},{"key":"PAN","label":"Panama","lon":-80,"lat":9},{"key":"BHS","label":"Bahamas","lon":-76,"lat":24},{"key":"FIN","label":"Finland","lon":26,"lat":64},{"key":"SRB","label":"Serbia","lon":21,"lat":44},{"key":"GEO","label":"Georgia","lon":43.499905,"lat":41.999981},{"key":"NAM","label":"Namibia","lon":17,"lat":-22},{"key":"HTI","label":"Haiti","lon":-72.416667,"lat":19},{"key":"NIC","label":"Nicaragua","lon":-85,"lat":13},{"key":"GTM","label":"Guatemala","lon":-90.25,"lat":15.5},{"key":"KAZ","label":"Kazakhstan","lon":68,"lat":48},{"key":"MAR","label":"Morocco","lon":-5,"lat":32},{"key":"ALB","label":"Albania","lon":20,"lat":41},{"key":"BGR","label":"Bulgaria","lon":25,"lat":43},{"key":"MLT","label":"Malta","lon":14.433333,"lat":35.916667},{"key":"XK","label":"Kosovo","lon":21.166667,"lat":42.666667},{"key":"ECU","label":"Ecuador","lon":-77.5,"lat":-2},{"key":"SEN","label":"Senegal","lon":-14,"lat":14},{"key":"UZB","label":"Uzbekistan","lon":63.84911,"lat":41.707542},{"key":"DOM","label":"Dominican Republic","lon":-70.666667,"lat":19},{"key":"TZA","label":"Tanzania, United Republic of","lon":35,"lat":-6},{"key":"GRD","label":"Grenada","lon":-61.666667,"lat":12.116667},{"key":"LUX","label":"Luxembourg","lon":6.166667,"lat":49.75},{"key":"URY","label":"Uruguay","lon":-56,"lat":-33},{"key":"MOZ","label":"Mozambique","lon":35,"lat":-18.25},{"key":"SVK","label":"Slovakia","lon":19.5,"lat":48.666667},{"key":"CIV","label":"Côte d'Ivoire","lon":-5,"lat":8},{"key":"KGZ","label":"Kyrgyzstan","lon":75,"lat":41},{"key":"BRB","label":"Barbados","lon":-59.533333,"lat":13.166667},{"key":"AZE","label":"Azerbaijan","lon":47.5,"lat":40.5},{"key":"LVA","label":"Latvia","lon":25,"lat":57},{"key":"GAB","label":"Gabon","lon":11.75,"lat":-1},{"key":"MUS","label":"Mauritius","lon":57.583333,"lat":-20.3},{"key":"DMA","label":"Dominica","lon":-61.333333,"lat":15.5},{"key":"BTN","label":"Bhutan","lon":90.5,"lat":27.5},{"key":"PNG","label":"Papua New Guinea","lon":147,"lat":-6},{"key":"AGO","label":"Angola","lon":18.5,"lat":-12.5},{"key":"BWA","label":"Botswana","lon":24,"lat":-22},{"key":"TGO","label":"Togo","lon":1.166667,"lat":8},{"key":"TKM","label":"Turkmenistan","lon":60,"lat":40},{"key":"MDG","label":"Madagascar","lon":47,"lat":-20},{"key":"TJK","label":"Tajikistan","lon":71,"lat":39},{"key":"SUR","label":"Suriname","lon":-56,"lat":4},{"key":"CPV","label":"Cabo Verde","lon":-24,"lat":16},{"key":"DJI","label":"Djibouti","lon":42.5,"lat":11.5},{"key":"BEN","label":"Benin","lon":2.25,"lat":9.5},{"key":"GUY","label":"Guyana","lon":-59,"lat":5},{"key":"GNB","label":"Guinea-Bissau","lon":-15,"lat":12},{"key":"OMN","label":"Oman","lon":57,"lat":21},{"key":"GNQ","label":"Equatorial Guinea","lon":10,"lat":2},{"key":"MHL","label":"Marshall Islands","lon":167,"lat":10},{"key":"VIR","label":"Virgin Islands, U.S.","lon":-64.9834807,"lat":18.3482891},{"key":"SYC","label":"Seychelles","lon":55.666667,"lat":-4.583333},{"key":"FLK","label":"Falkland Islands (Malvinas)","lon":-59.166667,"lat":-51.75},{"key":"SMR","label":"San Marino","lon":12.416667,"lat":43.933333},{"key":"PRY","label":"Paraguay","lon":-57.996389,"lat":-22.993333},{"key":"COD","label":"Congo, the Democratic Republic of the","lon":25,"lat":0},{"key":"BLZ","label":"Belize","lon":-88.75,"lat":17.25},{"key":"SWZ","label":"Swaziland","lon":31.5,"lat":-26.5},{"key":"ESH","label":"Western Sahara","lon":-13.5,"lat":25},{"key":"TTO","label":"Trinidad and Tobago","lon":-61,"lat":11},{"key":"MNE","label":"Montenegro","lon":19.3,"lat":42.5},{"key":"FRO","label":"Faroe Islands","lon":-7,"lat":62},{"key":"COM","label":"Comoros","lon":44.25,"lat":-12.166667},{"key":"KIR","label":"Kiribati","lon":-170,"lat":-5},{"key":"LCA","label":"Saint Lucia","lon":-60.966667,"lat":13.883333},{"key":"ATG","label":"Antigua and Barbuda","lon":-61.8,"lat":17.05},{"key":"COK","label":"Cook Islands","lon":-161.583333,"lat":-16.083333},{"key":"TUV","label":"Tuvalu","lon":178,"lat":-8},{"key":"AND","label":"Andorra","lon":1.5,"lat":42.5},{"key":"STP","label":"Sao Tome and Principe","lon":7,"lat":1}]
    // Public API here
    return {
      getData: function () {
        return dorlingdata;
      }
    };
  });
