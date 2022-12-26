import React from 'react'
import Maps from '../components/Maps'
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import Link from 'next/link';

export async function getServerSideProps() {
  const res = await fetch('http://localhost:9876/routes')
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

const Routes = ({ data }) => {
  const placesLayer = [
    new VectorLayer({
    source: new VectorSource({
      features: new GeoJSON().readFeatures(data.results.geom),
    }),
    style: new Style({
      stroke: new Stroke({
        color: '#FF5733',
        width: 3
      })
    })
  })
];
  console.log(data)

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden absolute z-50 bottom-5 right-3"
        >
          Buka Info Rute
        </label>
        <div className="relative overflow-hidden rounded-2xl">
          <Maps layer={placesLayer} />
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
                <p>{data.results.info[0].code}</p>
              </div>
              <div className=''>
                <h2 className='text-2xl font-semibold'>Description</h2>
                <p>{data.results.info[0].description}</p>
              </div>
            </div>
            <div>
              <Link href="/" className='btn btn-primary'>Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Routes
