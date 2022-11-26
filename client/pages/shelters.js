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

  /* placesLayer.setSource(
    new VectorSource({
      features: new GeoJSON().readFeatures(data.results),
    })
  ); */

  /* useEffect(() => {
    fetch("http://localhost:9876/shelters")
      .then((res) => res.json())
      .then((data) => {
        placesLayer.setSource(
          new VectorSource({
            features: new GeoJSON().readFeatures(data.results, {
              dataProjection: "EPSG:4326",
            }),
          })
        );
        setResult(data.results);
      });
    console.log(result)
  }, []); */

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label> */}
        <div className="relative overflow-hidden rounded-2xl">
          <Maps layer={placesLayer} />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Shelters;
