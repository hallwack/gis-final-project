import React from "react";
import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Maps from "../components/Maps";
import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import Icon from "ol/style/Icon";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:9876/shelters");
  const resRoutes = await fetch("http://localhost:9876/routes");
  const data = await res.json();
  const dataRoutes = await resRoutes.json();
  return {
    props: { data, dataRoutes },
  };
}

const Shelters = ({ data, dataRoutes }) => {
  const placesLayer = [
    new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(data.results),
      }),
      style: new Style({
        image: new Icon({
          anchor: [0.5, 1],
          imgSize: [32, 48],
          src: "https://openlayers.org/en/v3.20.1/examples/data/icon.png",
        }),
      })
    }),
    /* new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(dataRoutes.results.geom),
      }),
      style: new Style({
        stroke: new Stroke({
          color: '#FF5733',
          width: 3
        })
      })
    }) */
  ];

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden absolute z-50 bottom-3 right-3"
        >
          Buka Info Halte
        </label>
        <div className="relative overflow-hidden rounded-2xl">
          <Maps layer={placesLayer} />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="menu p-8 overflow-y-auto w-80 bg-base-100 text-base-content">
          <h1 className="font-bold text-3xl">Info Halte</h1>
        </div>
      </div>
    </div>
  );
};

export default Shelters;
