/* eslint-disable max-len */
// == Initialisation
import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import getMapRoute from './getMapRoute';

// Styles
import './styles.scss';

// mapBox token
import { accessToken } from 'mapbox-gl';
accessToken = 'pk.eyJ1IjoieWJyZXRvbm5ldCIsImEiOiJjbDVxdXliOHQweHV3M2tvM2hlMG41cXFwIn0.K1s56VTf9EAsagytjhRKSw';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const adressesCoordinate = useSelector((state) => state.mapData.pointCoords);
  const startLong = useSelector((state) => state.mapSettings.localisationSettingsModal.DepartSelected.Long);
  const startLat = useSelector((state) => state.mapSettings.localisationSettingsModal.DepartSelected.Lat);
  const arrivalLong = useSelector((state) => state.mapSettings.localisationSettingsModal.ArrivSelected.Long);
  const arrivalLat = useSelector((state) => state.mapSettings.localisationSettingsModal.ArrivSelected.Lat);
  const lng = (startLong + arrivalLong) / 2;
  const lat = (startLat + arrivalLat) / 2;
  const InterestPoints = adressesCoordinate.data.features.map((category) => category.features);
  const InterestPointsReplace = JSON.stringify(InterestPoints).replaceAll('[[', '[').replaceAll(']]', ']').replaceAll('}}', '}').replaceAll('],[', ',').replaceAll(']}', ']}}');
  const InterestPointsObject = JSON.parse(InterestPointsReplace);

  // On récupère les coordonnées des points d'intérêt 
  const interestCoordinateRaw= adressesCoordinate.data.features.map((category) => category.features.map((feature) => feature.geometry.coordinates));
  // On stringify les coordonnées et remplace certains élements pour que la string corresponde à ce que demande mapBox
  const interestCoordinate = JSON.stringify(interestCoordinateRaw).replaceAll('],[', ';').replace('[[', '').replace(']]', '').replace(']', '').replace('[', '').replace('];', ';').replaceAll(';[', ';').replace('];[', ';').replace('];', ';').replace(']', '');

  useEffect(() => {
    map.current = null;
    // on inititalise la map, centrée entre le point de départ et d'arrivée
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [lng, lat],
      zoom: 6,
      logoPosition: 'bottom-left',
    });

  // On récupère les points de départ et d'arrivée
  const start = [startLong, startLat];
  const end = [arrivalLong, arrivalLat];

  // On trace le trajet
  map.current.on('load', () => {
    getMapRoute(map, start, interestCoordinate, end, accessToken);

  // On ajoute les points de départs de d'arrivée
   map.current.addLayer({
        id: 'point',
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: start,
                },
              },
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: end,
                },
              },
            ],
          },
        },
        paint: {
          'circle-radius': 5,
          'circle-color': '#6cc573',
        },
      });

  // On ajoute les points d'intérêt
   map.current.addSource('interestPoints',
        {
          type: 'geojson',
          data:
          {
            "type": "FeatureCollection",
            "features": InterestPointsObject
          }
        },
      );

  map.current.addLayer({
        id: 'interestPoints',
        type: 'symbol',
        source: 'interestPoints',
        layout: {
          'icon-image': '{icon}',
        },
      });

    });

  // Quand on clique, ça ouvre une pop-up au niveau des coordonnées du point d'intérêt
  map.current.on('click', 'interestPoints', (e) => {
    const { coordinates } = e.features[0].geometry;
    const {
        adresse,
        title,
        image,
        description,
     } = e.features[0].properties;

    new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(
          `<div>
        <img crossOrigin="anonymous" src="${DOMPurify.sanitize(image, { USE_PROFILES: { html: false } })}" />
        <h3>${DOMPurify.sanitize(title, { USE_PROFILES: { html: false } })}</h3>
          <h4>${DOMPurify.sanitize(adresse, { USE_PROFILES: { html: false } })}</h4>
          <p>${DOMPurify.sanitize(description, { USE_PROFILES: { html: false } })}</p>
        </div>`,
        )
        .addTo(map.current);
    });

    // On change le pointeur du curseur
    map.current.on('mouseenter', 'interestPoints', () => {
      map.current.getCanvas().style.cursor = 'pointer';
    });

    map.current.on('mouseleave', 'interestPoints', () => {
      map.current.getCanvas().style.cursor = '';
    });


  }, [InterestPoints]);

  return (
    <section className="map">
      <aside ref={mapContainer} className="map-container" />
    </section>
  );
}
