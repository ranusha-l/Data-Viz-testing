{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Data Visualization by State",
    "width": 800,
    "height": 400,
    "projection": {"type": "mercator"},
    "data": {
      "url": "https://raw.githubusercontent.com/ranusha-l/Data-Viz-testing/refs/heads/main/ne_10m_admin_1_states_provinces.topojson",  // Corrected TopoJSON file path
      "format": {"type": "topojson", "feature": "ne_10m_admin_1_states_provinces"}  // Correct feature name
    },
    "transform": [
      {
        "lookup": "properties.name",  // Lookup state names in TopoJSON
        "from": {
          "data": {
            "url": "https://raw.githubusercontent.com/ranusha-l/Data-Viz-testing/refs/heads/main/test_supply.csv",  // Corrected CSV file path
            "format": {"type": "csv"}
          },
          "key": "state",  // Corrected field to match with the TopoJSON
          "fields": ["value"]  // Ensure the 'value' field exists in your CSV file
        }
      }
    ],
    "mark": {"type": "geoshape"},
    "encoding": {
      "color": {
        "field": "value",  // This should refer to a numeric field in the CSV file
        "type": "quantitative",
        "scale": {"type": "log"}  // Log scale for better color scaling
      },
      "tooltip": [
        {"field": "properties.name", "type": "nominal", "title": "State"},
        {"field": "value", "type": "quantitative", "title": "Value"}
      ]
    }
  }
  