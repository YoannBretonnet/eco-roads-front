/* eslint-disable max-len */
import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import getMapRoute from './getMapRoute';
import Sidebar from '../Sidebar';

// import styles and icons
import './styles.scss';
import myImage from 'src/assets/images/borne.png';
import InterestsPoint from 'src/data/coords.json'

// import data
import { accessToken } from 'mapbox-gl';

// import mapBox token
accessToken = 'pk.eyJ1IjoieWJyZXRvbm5ldCIsImEiOiJjbDVxdXliOHQweHV3M2tvM2hlMG41cXFwIn0.K1s56VTf9EAsagytjhRKSw';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const isConnected = useSelector((state) => state.auth.isConnected);
  const pointCoords = useSelector((state) => state.mapData.pointCoords);
  const {
    stLong,
    stLat,
    arLong,
    arLat,
  } = useSelector((state) => state.mapData.startEndCoords);
  const lng = (stLong + arLong) / 2;
  const lat = (stLat + arLat) / 2;

  const bornesArray = pointCoords.data.features.filter((option) => option.borne === true);
  
  useEffect(() => {
    map.current = null;
    // on inititalise la map, centrée entre le point de départ et d'arrivée
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [0.8184, 47.653],
      zoom: 6,
      logoPosition: 'bottom-left',
    });

    // On récupère les points de départ et d'arrivée
    const start = [stLong, stLat];
    const end = [arLong, arLat];

    // On récupère les coordonnées des points d'intérêt
    const coords = pointCoords.data.features.map((feature) => feature.geometry.coordinates);
    const coordsReplace = JSON.stringify(coords).replaceAll('],[', ';').replace('[[', '').replace(']]', '');

    // On trace le trajet
    map.current.on('load', () => {
      getMapRoute(map, start, coordsReplace, end, accessToken);

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

      // // On ajoute les points d'intérêt
      // map.current.addSource(
      //   'interestPoints',
      //   InterestsPoint,
      // );

      // map.current.addLayer({
      //   id: 'interestPoints',
      //   type: 'symbol',
      //   source: 'interestPoints',
      //   layout: {
      //     'icon-image': '{icon}',
      //   },
      // });
    });

    // Quand on clique, ça ouvre une pop-up au niveau des coordonnées du point d'intérêt
    // map.current.on('click', 'interestPoints', (e) => {
    //   // const coordinates = e.features[0].geometry.coordinates.slice();
    //   const { coordinates } = e.features[0].geometry;
    //   const {
    //     adresse,
    //     title,
    //     image,
    //   } = e.features[0].properties;

    //   new mapboxgl.Popup()
    //     .setLngLat(coordinates)
    //     .setHTML(
    //       `<div>
    //     <img crossOrigin="anonymous" src="${DOMPurify.sanitize(image, { USE_PROFILES: { html: false } })}" />
    //     <h3>${DOMPurify.sanitize(title, { USE_PROFILES: { html: false } })}</h3>
    //       <p>${DOMPurify.sanitize(adresse, { USE_PROFILES: { html: false } })}</p>
    //     </div>`,
    //     )
    //     .addTo(map.current);
    // });

    // // On change le pointeur du curseur
    // map.current.on('mouseenter', 'interestPoints', () => {
    //   map.current.getCanvas().style.cursor = 'pointer';
    // });

    // map.current.on('mouseleave', 'interestPoints', () => {
    //   map.current.getCanvas().style.cursor = '';
    // });

    // // On ajoute les bornes
    // map.current.on('load', () => {
    //   bornesArray.forEach((borne, index) => {
    //     map.current.loadImage(
    //       myImage,
    //       (error, image) => {
    //         if (error) throw error;

    //         // Add the image to the map style.
    //         map.current.addImage(`${borne.properties.title} ${index + 1}`, image);

    //         // Add a data source containing one point feature.
    //         map.current.addSource(`${borne.properties.title} ${index + 1} ${index + 1}`, {
    //           type: 'geojson',
    //           data: {
    //             type: 'FeatureCollection',
    //             features: [
    //               {
    //                 type: 'Feature',
    //                 geometry: {
    //                   type: 'Point',
    //                   coordinates: borne.geometry.coordinates,
    //                 },
    //               },
    //             ],
    //           },
    //         });

    //         // Add a layer to use the image to represent the data.
    //         map.current.addLayer({
    //           id: `${borne.properties.title} ${index + 1} ${index + 1}`,
    //           type: 'symbol',
    //           source: `${borne.properties.title} ${index + 1} ${index + 1}`, // reference the data source
    //           layout: {
    //             'icon-image': `${borne.properties.title} ${index + 1}`, // reference the image
    //             'icon-size': 0.25,
    //           },
    //         });
    //       },
    //     );
    //   });
    //   // Load a local image
    // });
    
  }, [InterestsPoint]);

  return (
    <section ref={map} className="map">
      <aside ref={mapContainer} className="map-container" />
      {/* {
            !isConnected ? (
              <Sidebar
                text="Pour sauvegarder votre prochain trajet, connectez-vous"
                intLength={InterestsPoint.data.features.length}
                bornLength={bornesArray.length}
              />
            ) : (
              <Sidebar
                text="Sauvegardez ce trajet dans vos favoris"
                intLength={InterestsPoint.data.features.length}
                bornLength={bornesArray.length}
              />
            )
        } */}
    </section>
  );
}
