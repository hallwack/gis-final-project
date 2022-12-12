import React from "react";
import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Maps from "../components/Maps";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:9876/shelters");
  const data = await res.json();
  return {
    props: { data },
  };
}

const Shelters = ({ data }) => {
  const placesLayer = new VectorLayer({
    source: new VectorSource({
      features: new GeoJSON().readFeatures(data.results),
    }),
  });

  console.log(data);

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
