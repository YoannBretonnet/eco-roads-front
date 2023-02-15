async function getMapRoute(map, start, coordsReplace, end, accessToken) {
  // On fait une requête de trajet à mapBox avec l'option "driving"
  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${start}${coordsReplace.length > 2 ? `;${coordsReplace};` : ';'}${end}?steps=true&geometries=geojson&overview=full&access_token=${accessToken}`,
    { method: 'GET' }
  );
  const json = await query.json();
  const data = json.routes[0];
  const route = data.geometry.coordinates;
  const geojson = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: route
    }
  };
  // Si un trajet existe déjà, on le reset
  if (map.current.getSource('route')) {
    map.current.getSource('route').setData(geojson);
  }
  // Autrement, on en crée un nouveau
  else {
    map.current.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: geojson
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round',
      },
      paint: {
        'line-color': '#b6db68',
        'line-width': 5,
        'line-opacity': 0.75
      }
    }, 'point');
  }
}

export default getMapRoute;
