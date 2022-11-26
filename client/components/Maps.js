import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import React, { useEffect, useRef, useState } from "react";
import "ol/ol.css";

const Maps = ({ layer }) => {
  const [map, setMap] = useState();
  const mapEl = useRef();
  const mapRef = useRef();
  mapRef.current = map;

  useEffect(() => {
    const initialMap = new Map({
      target: mapEl.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        layer
      ],
      view: new View({
        projection: `EPSG:4326`,
        center: [107.639408, -6.923019],
        zoom: 13,
      }),
    });

    setMap(initialMap);
  }, []);

  return <div style={{ width: "100%", height: "100vh" }} ref={mapEl}></div>;
};

export default Maps;
