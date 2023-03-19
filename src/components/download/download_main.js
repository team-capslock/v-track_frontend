import React from 'react'
import Megento from '../img/magento.png';
import Wordpress from '../img/wordpress.jpeg';
import Shopify from '../img/shopify.jpeg';

const Download_Main = () => {
  return (
    <>
    <body className="h-screen overflow-hidden flex items-center justify-center" style={{background: '#edf2f7'}}>

<div className="mr-8 min-h-screen bg-gray-100 flex justify-center items-center">
  <div className="w- p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
    <img className="w-64 object-cover rounded-t-md" src={Wordpress} alt="" />
    <div className="mt-4">
      <h1 className="text-2xl font-bold ml-20 text-gray-700">WordPress</h1>
      <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
        <button className="text-lg block font-semibold mx-auto py-2 px-6 text-green-100 hover:text-white bg-blue-400 rounded-lg shadow hover:shadow-md transition duration-300">Install</button>
      </div>
    </div>
  </div>
</div>

<div className="mr-8 min-h-screen bg-gray-100 flex justify-center items-center">
  <div className="w- p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
    <img className="w-45 object-cover rounded-t-md" src={Megento} alt="" />
    <div className="mt-4">
      <h1 className="text-2xl font-bold ml-20 text-gray-700">Magento</h1>
      <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
        <button className="text-lg block font-semibold mx-auto mb-5 py-2 px-6 text-green-100 hover:text-white bg-blue-400 rounded-lg shadow hover:shadow-md transition duration-300">Install</button>
      </div>
    </div>
  </div>
</div>

<div className="mr-8 min-h-screen bg-gray-100 flex justify-center items-center">
  <div className="w- p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
    <img className="h-64 object-cover rounded-t-md" src={Shopify} alt="" />
    <div className="mt-4">
      <h1 className="text-2xl font-bold ml-20 text-gray-700">Shopify</h1>
      <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
        <button className="text-lg block font-semibold mx-auto py-2 px-6 text-green-100 hover:text-white bg-blue-400 rounded-lg shadow hover:shadow-md transition duration-300">Install</button>
      </div>
    </div>
  </div>
</div>

</body>
    </>
  )
}

export default Download_Main