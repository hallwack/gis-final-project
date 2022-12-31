import React from "react";
import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Maps from "../components/Maps";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import { useSelector } from "react-redux";
import Link from "next/link";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:9876/shelters");
  const data = await res.json();
  return {
    props: { data },
  };
}

const Shelters = ({ data }) => {
  const shelterData = useSelector((state) => state.shelters);
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
      }),
    }),
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
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col gap-8">
              <h1 className="font-bold text-3xl">Info Halte</h1>
              <div className="">
                <h2 className="text-2xl font-semibold">Nama Halte</h2>
                <p>{shelterData?.value?.name}</p>
              </div>
              <div className="">
                <h2 className="text-2xl font-semibold">Description</h2>
                <p>{shelterData?.value?.description}</p>
              </div>
            </div>
            <div>
              <Link href="/" className="btn btn-primary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shelters;
