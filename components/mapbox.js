import {useState, useEffect, useRef} from 'react';
import mapboxgl from 'mapbox-gl';
export default function Mapbox() {
  // mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obm1pY2hhZWxidXRsZXIiLCJhIjoiY2tsOHc5NTBnMDFsMjJ1bW9pcXhxZmVsZyJ9.r27CtaDZ4W7p7ZFs6XCJpA';

  const coordinatesHrl = [-97.70021817590026, 26.17119956997308];
  const coordinatesSA = [-98.55464396483997, 29.513481967758327];
  const zoom = 14;


  useEffect(() => {
    const mapHrl = new mapboxgl.Map({

      container: 'mapHrl',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: coordinatesHrl,
      zoom: zoom
    });

    mapHrl.addControl(new mapboxgl.NavigationControl({
      showCompass: true,
      showZoom: true
    }), 'bottom-left');

    new mapboxgl.Marker({
      draggable: false,
    })
      .setLngLat(coordinatesHrl)
      .addTo(mapHrl);

    const mapSA = new mapboxgl.Map({
      container: 'mapSA',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: coordinatesSA,
      zoom: zoom
    });

    mapSA.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    new mapboxgl.Marker({
      draggable: false,
    })
      .setLngLat(coordinatesSA)
      .addTo(mapSA);

    return () => {
      mapHrl.remove();
      mapSA.remove();
    }
  }, []);

  return (
    <div className="">
      <h2 className="body-subheading">Our Locations</h2>
      <div className="h-900 md:h-screen grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2 px-4">
        <div className="body-text">
          <p>Harlingen Office</p>
          <p>2312 S Expressway 83 Ste B</p>
          <p>Harlingen, Texas 78552</p>
          <div className="map-container1 h-1/2 md:h-3/4"  id="mapHrl" />
        </div>
        <div className="body-text">
          <p>San Antonio Office</p>
          <p>8000 West I-10 Suite 600</p>
          <p>San Antonio, Texas 78230</p>
          <div className="map-container2 h-1/2 md:h-3/4" id="mapSA" />
        </div>
    </div>
    </div>
    )
};