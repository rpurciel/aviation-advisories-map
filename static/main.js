function replaceWithKindWords(inputString, type = null) {

  if (type == "map-abbr") {
    var outputString = inputString.replace("MT_OBSC", "MTN OBSCN")
    .replace("TC", "TROP")
    .replace("CONVECTIVE", "CONV")
    .replace("MTW", "MTN WAVE")
    .replace("ASH", "VOLC ASH")
    .replace("VA", "VOLC ASH")
    .replace("SS", "SAND STRM")
    .replace("DS", "DUST STRM")
    .replace("TSGR", "TS HAIL")
    .replace("ICING", "ICE")
    .replace("SFC_WIND", "SFC WIND");
  } else if (type == "hazard-title") {
    var outputString = inputString.replace("ICE", "Icing")
    .replace("TURB-HI", "High-level Turbulence")
    .replace("TURB-LO", "Low-level Turbulence")
    .replace("LLWS", "Low-level Wind Shear")
    .replace("SFC_WIND", "Surface Winds")
    .replace("MT_OBSC", "Mountain Obscuration")
    .replace("CONVECTIVE", "Convection")
    .replace("TS", "Thunderstorm")
    .replace("TC", "Tropical Weather")
    .replace("ASH", "Volcanic Ash")
    .replace("VA", "Volcanic Ash")
    .replace("TURB", "Turbulence")
    .replace("MTW", "Mountain Wave Turbulence")
    .replace("TSGR", "Thunderstorm (with Hail)")
    .replace("CONV", "Convection")
    .replace("SS", "Sandstorm")
    .replace("DS", "Dust Storm")
    .replace("RDOACT CLD", "Radioactive Cloud");
  } else if (type == "isigmet-abbr") {
    var outputString = inputString.replace("icaoId", "ICAO ID")
    .replace("firId", "Flight Information Region ID")
    .replace("firName", "Flight Information Region Name")
    .replace("seriesId", "SIGMET Series ID")
    .replace("validTimeFrom", "SIGMET Valid From")
    .replace("validTimeTo", "SIGMET Valid To")
    .replace("qualifier", "Qualifier/Identifier")
    .replace("base", "Lowest Valid Level (ft)")
    .replace("top", "Highest Valid Level (ft)")
    .replace("dir", "Direction of Movement (deg)")
    .replace("spd", "Speed of Movement (kts)")
    .replace("chng", "Change of Intensity")
    .replace("rawSigmet", "Raw Text");
  } else if (type == "sigmet-abbr") {
    var outputString = inputString.replace("icaoId", "ICAO ID")
    .replace("airSigmetType", "Type of SIGMET")
    .replace("severity", "Severity")
    .replace("validTimeFrom", "SIGMET Valid From")
    .replace("validTimeTo", "SIGMET Valid To")
    .replace("altitudeLow1", "Lowest Valid Level (ft)")
    .replace("altitudeLow2", "Secondary Lowest Valid Level (ft)")
    .replace("altitudeHi1", "Highest Valid Level (ft)")
    .replace("altitudeHi2", "Secondary Highest Valid Level (ft)")
    .replace("rawAirSigmet", "Raw Text");
  } else if (type == "airmet-abbr") {
    var outputString = inputString.replace("severity", "Severity")
    .replace("level", "Valid Level (ft x100)")
    .replace("fzlbase", "Base of Freezing Level (ft x100)")
    .replace("fzltop", "Top of Freezing Level (ft x100)")
    .replace("top", "Highest Valid Level (ft x100)")
    .replace("base", "Lowest Valid Level (ft x100)")
    .replace("dueTo", "Issued Due To")
    .replace("issueTime", "Time AIRMET Issued")
    .replace("validTime", "AIRMET Valid To")
    .replace("forecast", "Forecast Hour Issued");
  } else if (type == "pirep-abbr") {
    var outputString = inputString.replace("icaoId", "ICAO ID")
    .replace("obsTime", "Time Report Issued")
    .replace("acType", "Aircraft Type/Flight Number")
    .replace("temp", "Temperature (deg C)")
    .replace("wdir", "Wind Direction (deg)")
    .replace("wspd", "Wind Speed (kts)")
    .replace("cloudCvg1", "Cloud Layer 1 - Coverage")
    .replace("cloudBas1", "Cloud Layer 1 - Base (ft x100)")
    .replace("cloudTop1", "Cloud Layer 1 - Top (ft x100)")
    .replace("cloudCvg2", "Cloud Layer 2 - Coverage")
    .replace("cloudBas2", "Cloud Layer 2 - Base (ft x100)")
    .replace("cloudTop2", "Cloud Layer 2 - Top (ft x100)")
    .replace("wxString", "Observed Weather")
    .replace("fltlvlType", "Type of Flight")
    .replace("fltlvl", "Flight Level (ft x100)")
    .replace("tbInt1", "Turbulence Intensity")
    .replace("tbType1", "Turbulence Type")
    .replace("tbFreq1", "Turbulence Frequency")
    .replace("icgInt1", "Icing Intensity")
    .replace("icgType1", "Icing Type")
    .replace("brkAction", "Braking Action")
    .replace("rawOb", "Raw Text");
  } else if (type == "metar-abbr") {
    var outputString = inputString.replace("id", "Airport ID")
    .replace("obsTime", "Time Report Issued")
    .replace("temp", "Temperature (deg C)")
    .replace("wdir", "Wind Direction (deg)")
    .replace("wspd", "Wind Speed (kts)")
    .replace("rawOb", "Raw METAR Text")
    .replace("site", "Site Name")
    .replace("dewp", "Dewpoint Temperature (deg C)")
    .replace("wgst", "Wind Gust Speed (kts)")
    .replace("ceil", "Cloud Ceiling Level (ft x100)")
    .replace("cover", "Cloud Cover")
    .replace("visib", "Visibility (mi)")
    .replace("fltcat", "Flight Category")
    .replace("altim", "Altimeter Setting (hPa)")
    .replace("slp", "Sea Level Pressure (hPa)")
    .replace("cldCvg1", "Cloud Layer 1 - Coverage")
    .replace("cldBas1", "Cloud Layer 1 - Base (ft x100)")
    .replace("cldCvg2", "Cloud Layer 2 - Coverage")
    .replace("cldBas2", "Cloud Layer 2 - Base (ft x100)")
    .replace("cldCvg3", "Cloud Layer 3 - Coverage")
    .replace("cldBas3", "Cloud Layer 3 - Base (ft x100)")
    .replace("cldCvg4", "Cloud Layer 4 - Coverage")
    .replace("cldBas4", "Cloud Layer 4 - Base (ft x100)")
    .replace("wx", "Observed Weather")
    .replace("rawTaf", "Raw TAF Text");
  }

  return outputString;

}

function generatePopupUsingContents(propertiesObject, type = null) {

  var popupText = "";

  if (propertiesObject.data == "GAIRMET") {
    if (propertiesObject.product != "") {
      popupText = popupText.concat("<h1>" + replaceWithKindWords(propertiesObject.hazard, "hazard-title") + " AIRMET</h1><h2>" + propertiesObject.product + "</h2>");
    } else {
      popupText = popupText.concat("<h1>" + replaceWithKindWords(propertiesObject.hazard, "hazard-title") + " AIRMET</h1>");
    }

    for (var i = 0; i < Object.keys(propertiesObject).length; i++) {
      if (Object.keys(propertiesObject)[i] != "product" && Object.keys(propertiesObject)[i] != "data" && Object.keys(propertiesObject)[i] != "hazard" && Object.keys(propertiesObject)[i] != "alphaChar")
      popupText = popupText.concat("<b>" + replaceWithKindWords(Object.keys(propertiesObject)[i], "airmet-abbr") + "</b>: " + propertiesObject[Object.keys(propertiesObject)[i]] + "<br>");
    };
  } else if (propertiesObject.data == "SIGMET") {
    popupText = popupText.concat("<h1>" + replaceWithKindWords(propertiesObject.hazard, "hazard-title") + " " + propertiesObject.airSigmetType + "</h1>");

    for (var i = 0; i < Object.keys(propertiesObject).length; i++) {
      if (Object.keys(propertiesObject)[i] != "airSigmetType" && Object.keys(propertiesObject)[i] != "data" && Object.keys(propertiesObject)[i] != "hazard" && Object.keys(propertiesObject)[i] != "alphaChar")
      popupText = popupText.concat("<b>" + replaceWithKindWords(Object.keys(propertiesObject)[i], "sigmet-abbr") + "</b>: " + propertiesObject[Object.keys(propertiesObject)[i]] + "<br>");
    };
  } else if (propertiesObject.data == "ISIGMET") {
    popupText = popupText.concat("<h1>" + replaceWithKindWords(propertiesObject.hazard, "hazard-title") + " SIGMET</h1>");

    for (var i = 0; i < Object.keys(propertiesObject).length; i++) {
      if (Object.keys(propertiesObject)[i] != "geom" && Object.keys(propertiesObject)[i] != "data" && Object.keys(propertiesObject)[i] != "hazard" && Object.keys(propertiesObject)[i] != "coords")
      popupText = popupText.concat("<b>" + replaceWithKindWords(Object.keys(propertiesObject)[i], "isigmet-abbr") + "</b>: " + propertiesObject[Object.keys(propertiesObject)[i]] + "<br>");
    };
  } else if (propertiesObject.data == "AIREP") {

    popupText = popupText.concat("<h1>" + propertiesObject.airepType + " " + propertiesObject.acType +  "</h1>");

    for (var i = 0; i < Object.keys(propertiesObject).length; i++) {
      if (Object.keys(propertiesObject)[i] != "data" && Object.keys(propertiesObject)[i] != "airepType" && Object.keys(propertiesObject)[i] != "acType")
      popupText = popupText.concat("<b>" + replaceWithKindWords(Object.keys(propertiesObject)[i], "pirep-abbr") + "</b>: " + propertiesObject[Object.keys(propertiesObject)[i]] + "<br>");
    };
  } else if (propertiesObject.data == "METAR"){ 
    popupText = popupText.concat("<h1>" + propertiesObject.id + "</h1>");

    for (var i = 0; i < Object.keys(propertiesObject).length; i++) {
      if (Object.keys(propertiesObject)[i] != "data" && Object.keys(propertiesObject)[i] != "id" && Object.keys(propertiesObject)[i] != "prior")
      popupText = popupText.concat("<b>" + replaceWithKindWords(Object.keys(propertiesObject)[i], "metar-abbr") + "</b>: " + propertiesObject[Object.keys(propertiesObject)[i]] + "<br>");
    };
  } else {
    popupText = "NULL";
  }

  return popupText;
}

function showDisclaimer() {
  var isFired = localStorage.getItem('disclaimerShown');

  if (isFired != '1'){
      alert("DISCLAIMER: \nThis map is for informational purposes only.\nDo not use this map to make decisions, consult official information.\nGraphical representations of area-based products are not guaranteed to be accurate.\n\nBy closing this window, you acknoledge the above statements.");
      localStorage.setItem('disclaimerShown', '1');
  }
}

async function generateLabels(geoJsonUrl) {

  var result = {
    "type": "FeatureCollection",
    "features": []
  };

  async function fetchData(Url) {
    let data;
    const result = await fetch(Url);
    data = await result.json();
    return data
  }

  const geoJsonInput = await fetchData(geoJsonUrl);

  for (var i = 0; i < geoJsonInput.features.length; i++) {
    var poly = turf.multiPolygon(geoJsonInput.features[i].geometry)
    if (poly.geometry.coordinates != undefined) {
      var centerPoint = turf.pointOnFeature(poly.geometry.coordinates);
    } else {
      continue
    }

    result.features.push({
      "type": "Feature",
      "properties": {
        "title": replaceWithKindWords(geoJsonInput.features[i].properties.hazard, "map-abbr")
      },
      "geometry": centerPoint.geometry
    })

  }
  return result;
}

let isigmetLabels, sigmetLabels, airmetLabels;


const isigmetLabelProcessor = async () => {
  isigmetLabels = await generateLabels('https://wxdash-cors-22bcf3a70f54.herokuapp.com/https://www.aviationweather.gov/cgi-bin/json/IsigmetJSON.php')
}

const sigmetLabelProcessor = async () => {
  sigmetLabels = await generateLabels('https://wxdash-cors-22bcf3a70f54.herokuapp.com/https://www.aviationweather.gov/cgi-bin/json/SigmetJSON.php')
}

const airmetLabelProcessor = async () => {
  airmetLabels = await generateLabels('https://wxdash-cors-22bcf3a70f54.herokuapp.com/https://www.aviationweather.gov/cgi-bin/json/GairmetJSON.php')
}

isigmetLabelProcessor().then(() => {
  //console.log(isigmetLabels)
});

sigmetLabelProcessor().then(() => {
  //console.log(isigmetLabels)
});

airmetLabelProcessor().then(() => {
  //console.log(isigmetLabels)
});

mapboxgl.accessToken = 'pk.eyJ1IjoicnB1cmNpZWwiLCJhIjoiY2xsNzFjaGx4MDRmNDNwcHIxbDl3ZDBvciJ9.Wpocq8eWQoUkerFMZC2ecA';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: 'mapbox://styles/rpurciel/clldyjtrz00e701r8cl7ycsr6', // style URL
  center: [-72.3, -50.283611], // starting position
  zoom: 4 // starting zoom
});

map.on('load', () => {

  showDisclaimer();

  //SOURCES
  map.addSource('isigmet', {
    'type': 'geojson',
    'data': 'https://wxdash-cors-22bcf3a70f54.herokuapp.com/https://www.aviationweather.gov/cgi-bin/json/IsigmetJSON.php'
  });

  map.addSource('isigmet-labels', {
    'type': 'geojson',
    'data': isigmetLabels
  });

  map.addSource('sigmet', {
    'type': 'geojson',
    'data': 'https://wxdash-cors-22bcf3a70f54.herokuapp.com/https://www.aviationweather.gov/cgi-bin/json/SigmetJSON.php'
  });
  
    map.addSource('sigmet-labels', {
    'type': 'geojson',
    'data': sigmetLabels
  });

  map.addSource('airmet', {
    'type': 'geojson',
    'data': 'https://wxdash-cors-22bcf3a70f54.herokuapp.com/https://www.aviationweather.gov/cgi-bin/json/GairmetJSON.php'
  });
  
  map.addSource('airmet-labels', {
    'type': 'geojson',
    'data': airmetLabels
  });
  
  map.addSource('pirep', {
    'type': 'geojson',
    'data': 'https://wxdash-cors-22bcf3a70f54.herokuapp.com/https://www.aviationweather.gov/cgi-bin/json/AirepJSON.php?bbox=0,-90,360,90&age=6'
  });

  map.addSource('metar', {
    'type': 'geojson',
    'data': "https://wxdash-cors-22bcf3a70f54.herokuapp.com/https://www.aviationweather.gov/cgi-bin/json/MetarJSON.php?bbox=0,-90,360,90"
  })

/*
              G-AIRMETS (CONUS only)
*/
  map.addLayer({
    'id': 'airmet-turbhi', //high level turb
    'type': 'fill',
    'source': 'airmet',
    'layout': {},
    'paint': {
      'fill-color': '#F8A967', //light orange
      'fill-opacity': 0.5
    },
    'filter': ['==', 'hazard', 'TURB-HI']
  });
  map.addLayer({
    'id': 'airmet-turblo', //low level turb
    'type': 'fill',
    'source': 'airmet',
    'layout': {},
    'paint': {
      'fill-color': '#DB906F', //dark orange
      'fill-opacity': 0.5
    },
    'filter': ['==', 'hazard', 'TURB-LO']
  });
  map.addLayer({
    'id': 'airmet-llws', //llws
    'type': 'fill',
    'source': 'airmet',
    'layout': {},
    'paint': {
      'fill-color': '#C29190', //dark brown
      'fill-opacity': 0.5
    },
    'filter': ['==', 'hazard', 'LLWS']
  });
  map.addLayer({
    'id': 'airmet-sfcwind', //surface winds
    'type': 'fill',
    'source': 'airmet',
    'layout': {},
    'paint': {
      'fill-color': '#DAAC6C', //yellow brown
      'fill-opacity': 0.5
    },
    'filter': ['==', 'hazard', 'SFC_WIND']
  });
  map.addLayer({
    'id': 'airmet-icing', //icing
    'type': 'fill',
    'source': 'airmet',
    'layout': {},
    'paint': {
      'fill-color': '#8653FF', //dark blue
      'fill-opacity': 0.5
    },
    'filter': ['==', 'hazard', 'ICE']
  });
  /*
    map.addLayer({
        'id': 'airmet-frz', //freezing level
        'type': 'line',
        'source': 'airmet', 
        'layout': {},
        'paint': {
          'fill-color': '#B19AFF', //blue
          'fill-opacity': 0.5
        },
        'filter': ['==', 'hazard', 'FZLVL']
      });*/
  map.addLayer({
    'id': 'airmet-ifr',
    'type': 'fill',
    'source': 'airmet',
    'layout': {},
    'paint': {
      'fill-color': '#C86CCA', //dark purple
      'fill-opacity': 0.5
    },
    'filter': ['==', 'hazard', 'IFR']
  });
  map.addLayer({
    'id': 'airmet-mtnobs',
    'type': 'fill',
    'source': 'airmet',
    'layout': {},
    'paint': {
      'fill-color': '#FF5AFF', //pink
      'fill-opacity': 0.5
    },
    'filter': ['==', 'hazard', 'MT_OBSC']
  });
  map.addLayer({ //FOR POPUPS
    'id': 'airmet-popup',
    'type': 'fill',
    'source': 'airmet',
    'layout': {},
    'paint': {
      'fill-color': 'transparent',
      'fill-opacity': 1.0
    },
    'filter': ['all', ['!=', 'hazard', 'FZLVL'], ['!=', 'hazard', 'M_FZLVL']]
  });
  map.addLayer({ //LABELS
    'id': 'airmet-labels',
    'type': 'symbol',
    'source': 'airmet-labels',
    'layout': {
      'text-field': ['get', 'title'],
      'text-font': [
        'Open Sans Semibold',
        'Arial Unicode MS Bold'
      ]
    },
    'paint': {
      'text-halo-blur': 1,
      'text-halo-color': '#FFFFFF',
      'text-halo-width': 2,
      'text-color': '#000000'
    },
    'filter': ['all', ['!=', 'title', 'FZLVL'], ['!=', 'title', 'M_FZLVL']]
  });
  map.addLayer({ //FOR POPUPS
    'id': 'airmet-outline',
    'type': 'line',
    'source': 'airmet',
    'layout': {},
    'paint': {
      'line-color': '#303236',
      'line-width': 2
    },
    'filter': ['all', ['!=', 'hazard', 'FZLVL'], ['!=', 'hazard', 'M_FZLVL']]
  });
  map.on('click', 'airmet-popup', (e) => {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(generatePopupUsingContents(e.features[0].properties))
      .addTo(map);
  });

  map.on('mouseenter', 'airmet-popup', () => {
    map.getCanvas().style.cursor = 'pointer';
  });


  map.on('mouseleave', 'airmet-popup', () => {
    map.getCanvas().style.cursor = '';
  });

/*
              CONUS SIGMETS
*/
  map.addLayer({
    'id': 'sigmet-conv',
    'type': 'fill',
    'source': 'sigmet',
    'layout': {},
    'paint': {
      'fill-color': '#D87C79', //red
      'fill-opacity': 0.7
    },
    'filter': ['==', 'hazard', 'CONVECTIVE']
  });
  map.addLayer({
    'id': 'sigmet-ice',
    'type': 'fill',
    'source': 'sigmet',
    'layout': {},
    'paint': {
      'fill-color': '#7D6BBC', //blue
      'fill-opacity': 0.7
    },
    'filter': ['==', 'hazard', 'ICING']
  });
  map.addLayer({
    'id': 'sigmet-turb',
    'type': 'fill',
    'source': 'sigmet',
    'layout': {},
    'paint': {
      'fill-color': '#B49A72', //brown
      'fill-opacity': 0.7
    },
    'filter': ['==', 'hazard', 'TURB']
  });
  map.addLayer({
    'id': 'sigmet-va',
    'type': 'fill',
    'source': 'sigmet',
    'layout': {},
    'paint': {
      'fill-color': '#B8B8B8', //gray
      'fill-opacity': 0.7
    },
    'filter': ['==', 'hazard', 'ASH']
  });
  map.addLayer({
    'id': 'sigmet-ifr',
    'type': 'fill',
    'source': 'sigmet',
    'layout': {},
    'paint': {
      'fill-color': '#BB6DBC', //purple
      'fill-opacity': 0.7
    },
    'filter': ['==', 'hazard', 'IFR']
  });
  map.addLayer({
    'id': 'sigmet-mtnobs',
    'type': 'fill',
    'source': 'sigmet',
    'layout': {},
    'paint': {
      'fill-color': '#BB6DBC', //purple
      'fill-opacity': 0.7
    },
    'filter': ['==', 'hazard', 'MTN OBSCN']
  });
  map.addLayer({ //FOR POPUPS
    'id': 'sigmet-popup',
    'type': 'fill',
    'source': 'sigmet',
    'layout': {},
    'paint': {
      'fill-color': 'transparent',
      'fill-opacity': 1.0
    }
  });
  map.addLayer({ //LABELS
    'id': 'sigmet-labels',
    'type': 'symbol',
    'source': 'sigmet-labels',
    'layout': {
      'text-field': ['get', 'title'],
      'text-font': [
        'Open Sans Semibold',
        'Arial Unicode MS Bold'
      ]
    },
    'paint': {
      'text-halo-blur': 1,
      'text-halo-color': '#FFFFFF',
      'text-halo-width': 2,
      'text-color': '#000000'
    }
  });
  map.addLayer({ //POLY OUTLINE
    'id': 'sigmet-outline',
    'type': 'line',
    'source': 'sigmet',
    'layout': {},
    'paint': {
      'line-color': '#303236',
      'line-width': 2
    }
  });

  map.on('click', 'sigmet-popup', (e) => {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(generatePopupUsingContents(e.features[0].properties))
      .addTo(map);

  });

  map.on('mouseenter', 'sigmet-popup', () => {
    map.getCanvas().style.cursor = 'pointer';
  });


  map.on('mouseleave', 'sigmet-popup', () => {
    map.getCanvas().style.cursor = '';
  });

/*
              International SIGMETS
*/

  map.addLayer({
    'id': 'isigmet-turb', //turbulence
    'type': 'fill',
    'source': 'isigmet',
    'layout': {},
    'paint': {
      'fill-color': '#B49A72', //brown
      'fill-opacity': 0.7
    },
    'filter': ['==', 'hazard', 'TURB']
  });
  map.addLayer({
    'id': 'isigmet-mtw', //mountain wave turbulence
    'type': 'fill',
    'source': 'isigmet',
    'layout': {},
    'paint': {
      'fill-color': '#B49A72', //brown
      'fill-opacity': 0.7
    },
    'filter': ['==', 'hazard', 'MTW']
  });
  map.addLayer({
    'id': 'isigmet-llws', //turbulence
    'type': 'fill',
    'source': 'isigmet',
    'layout': {},
    'paint': {
      'fill-color': '#B49A72', //brown
      'fill-opacity': 0.7
    },
    'filter': ['==', 'hazard', 'LLWS']
  });
  map.addLayer({
    'id': 'isigmet-ice', //icing
    'type': 'fill',
    'source': 'isigmet',
    'layout': {},
    'paint': {
      'fill-color': '#7D6BBC', //blue
      'fill-opacity': 0.5
    },
    'filter': ['==', 'hazard', 'ICE']
  });
  map.addLayer({
    'id': 'isigmet-ts', //thunderstorm
    'type': 'fill',
    'source': 'isigmet',
    'layout': {},
    'paint': {
      'fill-color': '#D87C79', //red
      'fill-opacity': 0.7
    },
    'filter': ['==', 'hazard', 'TS']
  });
  map.addLayer({
    'id': 'isigmet-conv', //general convection
    'type': 'fill',
    'source': 'isigmet',
    'layout': {},
    'paint': {
      'fill-color': '#D87C79', //red
      'fill-opacity': 0.7
    },
    'filter': ['==', 'hazard', 'CONV']
  });
  map.addLayer({
    'id': 'isigmet-trop', //tropical cyclone
    'type': 'fill',
    'source': 'isigmet',
    'layout': {},
    'paint': {
      'fill-color': '#D87C79', //red
      'fill-opacity': 0.7
    },
    'filter': ['==', 'hazard', 'TC']
  });
  map.addLayer({
    'id': 'isigmet-ash', //volcanic ash
    'type': 'fill',
    'source': 'isigmet',
    'layout': {},
    'paint': {
      'fill-color': '#B8B8B8', //gray
      'fill-opacity': 0.7
    },
    'filter': ['==', 'hazard', 'VA']
  });
  map.addLayer({
    'id': 'isigmet-tsgr', //tstm with hail
    'type': 'fill',
    'source': 'isigmet',
    'layout': {},
    'paint': {
      'fill-color': '#D87C79', //red
      'fill-opacity': 0.7
    },
    'filter': ['==', 'hazard', 'TSGR']
  });
  map.addLayer({
    'id': 'isigmet-ss', //sandstorm
    'type': 'fill',
    'source': 'isigmet',
    'layout': {},
    'paint': {
      'fill-color': '#DAAC6C', //yellow
      'fill-opacity': 0.7
    },
    'filter': ['==', 'hazard', 'SS']
  });
  map.addLayer({
    'id': 'isigmet-ds', //dust storm
    'type': 'fill',
    'source': 'isigmet',
    'layout': {},
    'paint': {
      'fill-color': '#DAAC6C', //yellow
      'fill-opacity': 0.7
    },
    'filter': ['==', 'hazard', 'DS']
  });
  map.addLayer({
    'id': 'isigmet-radio', //radioactive cloud (never gonna see this lol)
    'type': 'fill',
    'source': 'isigmet',
    'layout': {},
    'paint': {
      'fill-color': '#BCE200', //lime
      'fill-opacity': 0.7
    },
    'filter': ['==', 'hazard', 'RDOACT CLD']
  });
  map.addLayer({ //FOR POPUPS
    'id': 'isigmet-popup',
    'type': 'fill',
    'source': 'isigmet',
    'layout': {},
    'paint': {
      'fill-color': 'transparent',
      'fill-opacity': 1.0
    }
  });
  map.addLayer({ //LABELS
    'id': 'isigmet-labels',
    'type': 'symbol',
    'source': 'isigmet-labels',
    'layout': {
      'text-field': ['get', 'title'],
      'text-font': [
        'Open Sans Semibold',
        'Arial Unicode MS Bold'
      ]
    },
    'paint': {
      'text-halo-blur': 1,
      'text-halo-color': '#FFFFFF',
      'text-halo-width': 2,
      'text-color': '#000000'
    }
  });
  map.addLayer({ //SHAPE OUTLINE
    'id': 'isigmet-outline',
    'type': 'line',
    'source': 'isigmet',
    'layout': {},
    'paint': {
      'line-color': '#303236',
      'line-width': 2
    }
  });

  map.on('click', 'isigmet-popup', (e) => {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(generatePopupUsingContents(e.features[0].properties))
      .addTo(map);

  });

  map.on('mouseenter', 'isigmet-popup', () => {
    map.getCanvas().style.cursor = 'pointer';
  });


  map.on('mouseleave', 'isigmet-popup', () => {
    map.getCanvas().style.cursor = '';
  });

/*
              PIREPS
*/

  map.addLayer({ //LABELS
    'id': 'pirep',
    'type': 'symbol',
    'source': 'pirep',
    'layout': {
      'text-field': ['get', 'fltlvl'],
      'text-font': [
        'Open Sans Semibold',
        'Arial Unicode MS Bold'
      ],
      'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
      'text-radial-offset': 0.5,
      'text-justify': 'auto',
      'icon-image' : 'rocket'
    },
    'paint': {
      'text-color': '#000000'
    }
  });
  
 map.on('click', 'pirep', (e) => {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(generatePopupUsingContents(e.features[0].properties))
      .addTo(map);

  });

  map.on('mouseenter', 'pirep', () => {
    map.getCanvas().style.cursor = 'pointer';
  });


  map.on('mouseleave', 'pirep', () => {
    map.getCanvas().style.cursor = '';
  });

  /*
              METARS
*/

  map.addLayer({ //LABELS
    'id': 'metar',
    'type': 'symbol',
    'source': 'metar',
    'layout': {
      'text-field': ['get', 'id'],
      'text-font': [
        'Open Sans Semibold',
        'Arial Unicode MS Bold'
      ],
      'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
      'text-radial-offset': 0.5,
      'text-justify': 'auto',
      'text-size': 10,
      'icon-image' : 'marker'
    },
    'paint': {
      'text-halo-blur': 1,
      'text-halo-color': '#FFFFFF',
      'text-halo-width': 2,
      'text-color': '#000000'
    }
  });
  
 map.on('click', 'metar', (e) => {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(generatePopupUsingContents(e.features[0].properties))
      .addTo(map);

  });

  map.on('mouseenter', 'metar', () => {
    map.getCanvas().style.cursor = 'pointer';
  });


  map.on('mouseleave', 'metar', () => {
    map.getCanvas().style.cursor = '';
  });
});
