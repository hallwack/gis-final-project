import Link from "next/link";
import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:9876/shelters");
  const data = await res.json();
  return {
    props: {
      data: data.results,
    },
  };
}

const ShelterAdmin = ({ data }) => {
  const shelters = data.features;
  console.log(shelters);

  return (
    <AdminLayout>
      <div className="py-8 px-12">
        <h1 className="font-bold text-3xl">Daftar Halte</h1>
        <div className="my-8">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Coordinate</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {shelters.map((shelter, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{shelter.properties.name || "No Name"}</td>
                    <td>{shelter.geometry.coordinates}</td>
                    <td>
                      <Link
                        href={`shelters/${shelter.properties.id_geom}`}
                        className="btn btn-primary"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ShelterAdmin;
