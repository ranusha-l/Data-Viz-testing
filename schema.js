var vg_1 = "map.vg.json";
var vg_2 = "line_chart.vg.json";

vegaEmbed('#map', vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

vegaEmbed('#line_chart', vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
