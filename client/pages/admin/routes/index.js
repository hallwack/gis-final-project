import Link from "next/link";
import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:9876/routes`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}

const RoutesAdmin = ({ data }) => {
  console.log(data.results.info);
  const routes = data.results.info;
  return (
    <AdminLayout>
      <div className="py-8 px-12">
        <h1 className="font-bold text-3xl">Daftar Rute</h1>
        <div className="my-8">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((route, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{route.code || "No Code"}</td>
                    <td>
                      <Link
                        href={`routes/${route.id}`}
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

export default RoutesAdmin;
