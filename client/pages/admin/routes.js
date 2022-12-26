import Link from 'next/link'
import React from 'react'

const RoutesAdmin = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden absolute z-50 bottom-5 left-3"
        >
          Buka Info Rute
        </label>
        <div className="relative overflow-hidden rounded-2xl">
          aaaaa
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="menu p-8 overflow-y-auto w-80 bg-base-100 text-base-content">
          <div className='flex flex-col h-full justify-between'>
            <div className='flex flex-col gap-8'>
              <h1 className="font-bold text-3xl">Info Rute</h1>
              <div className=''>
                <h2 className='text-2xl font-semibold'>Code</h2>
              </div>
              <div className=''>
                <h2 className='text-2xl font-semibold'>Description</h2>
              </div>
            </div>
            <div>
              <Link href="/" className='btn btn-primary'>Logout</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoutesAdmin
