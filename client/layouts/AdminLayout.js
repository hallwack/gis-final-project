import Link from "next/link";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden absolute z-50 bottom-5 left-3"
        >
          Buka Sidebar
        </label>
        <div className="relative overflow-hidden rounded-2xl">{children}</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="menu p-8 overflow-y-auto w-80 bg-base-300 text-base-content">
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col gap-8">
              <h1 className="font-bold text-3xl">Sidamri</h1>
              <ul className="flex flex-col gap-4">
                <li className="py-2 px-2 bg-primary/40 rounded-lg">
                  <Link href="/admin/routes" className="font-semibold">
                    Rute
                  </Link>
                </li>
                <li className="py-2 px-2 bg-primary/40 rounded-lg">
                  <Link href="/admin/shelters" className="font-semibold">
                    Halte
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Link href="/" className="btn btn-primary">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
