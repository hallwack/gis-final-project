import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import Maps from "../../../components/Maps";
import Stroke from "ol/style/Stroke";
import AdminLayout from "../../../layouts/AdminLayout";

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:9876/routes/${context.params.id}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data: data.results,
    },
  };
}

const ShelterDetails = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(data.geom);

  const layer = [
    new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(data.geom),
      }),
      style: new Style({
        stroke: new Stroke({
          color: "#FF5733",
          width: 3,
        }),
      }),
    }),
  ];

  return (
    <AdminLayout>
      <div className="py-8 px-12">
        <h1 className="font-bold text-3xl">Daftar Rute</h1>
      </div>
      <div className="mx-12 my-4 flex flex-col gap-4">
        <div className="form-control w-full max-w-xs">
          <label className="label" htmlFor="name">
            <span className="label-text">Kode Rute</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="py-2 px-4 rounded-lg input input-bordered w-auto max-w-xs"
          />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="desc">
            <span className="label-text">Deskripsi Rute</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-auto max-w-xs h-24"
            name="desc"
            id="desc"
            placeholder="Description"
            defaultValue={""}
          />
        </div>
        <button className="btn btn-primary self-start w-fit">Submit</button>
        <div className="h-72">
          <Maps layer={layer} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default ShelterDetails;
