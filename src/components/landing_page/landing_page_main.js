import React from 'react'
import './landing_page_main.css';
import Dash from '../img/Dashboard.png';
import Download from '../img/icons_download.gif';
import {Link} from 'react-router-dom'


const Landing_Page_Main = () => {
  return (
    <>
    <div>
        <main className="flex flex-col items-center justify-center mt-32">
          <header className="container">
            {/* Navbar */}
            <nav className="flex justify-between md:justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full px-10 fixed top-0 left-0 right-0 z-10 md:px-3">
              {/* Logo Container */}
              <div className="flex items-center">
                {/* Logo */}
                <a className="cursor-pointer">
                <a href="#" className="text-xl font-bold flex items-center lg:ml-2.5">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGJs5QCNRfQ4X9Wwzol6IepgsgqkayzQ57JsIsorc4TA&s" className="h-12 mr-2" alt="Windster Logo" />
                                    <span className="self-center whitespace-nowrap">V-Track</span>
                                </a>
                </a>
              </div>
              {/* Links Section */}
              <div className="items-center md:space-x-8 justify-center justify-items-start md:justify-items-center md:flex md:pt-2 w-full left-0 top-16 px-5 md:px-10 py-3 md:py-0 border-t md:border-t-0">
                
                <a className="flex cursor-pointer transition-colors duration-300 font-semibold text-blue-600">
                  Home
                </a>
                <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                  Supports
                </a>
                <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                  Overview
                </a>
                <a className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                  About Us
                </a>
              </div>
              {/* Auth Links */}
              <div className="items-center space-x-5 hidden md:flex">
                {/* Register */}
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  <Link exact to='/downloads'>Download</Link>
                </button>

              </div>
              {/* Hamberger Menu */}
              <button className="w-10 h-10 md:hidden justify-self-end rounded-full hover:bg-gray-100">
                <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={24} height={24} viewBox="0 0 24 24">
                  <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                </svg>
              </button>
            </nav>
          </header>
          {/* Hero */}
          
          <section className="py-20 bg-white">
            
        <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img className="rounded-lg shadow-xl" src={Dash} alt="" />
            </div>
            <div className="px-2 w-full lg:w-3/5">
            <div className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
                <h2 className="mb-4 text-3xl font-bold text-left lg:text-5xl">
                Real-time visitor 
                  <span className="text-5xl text-blue-500 leading-relaxeds"> tracking&nbsp; 
                  </span>
                  multi-store for ecommerce.
                </h2>
                <p className="visible mx-0 mt-3 mb-0 text-sm leading-relaxed text-left text-slate-400">
                  Helping, monitor product performance across multiple online stores.
                </p>
              </div>
              
              <div className="text-left">
                <a className="block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-blue-500 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block">Key Features</a>
                <a className="block visible py-4 px-8 text-xs font-semibold leading-none bg-white rounded border border-solid cursor-pointer sm:inline-block border-slate-200 text-slate-500">How We Work?</a>
              </div>
              </div>
          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
              <img className="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-04.png" alt="" />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
              <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">know your data</p>
              <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">How it works:</h3>
              <p className="mt-5 text-lg text-gray-700 text md:text-left">V-Track uses an advanced Event Processing System (EPS) to track customer visits to your products across multiple ecommerce stores in real-time.
When a customer visits a product page on any store, an event is sent to the EPS, which tracks unique visits for that product across all stores.
If the visitor threshold for a product is breached, V-Track displays a banner on the respective store's product page indicating the number of unique visitors for that product.</p>
            </div>
          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img className="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-03.png" alt="" />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">Easy to customize</p>
              <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Main features and benefits</h3>
              <p className="mt-5 text-lg text-gray-700 text md:text-left">Real-time visitor tracking across multiple ecommerce stores, giving you valuable insights into customer behavior and product performance.
Store-wise visitor count for products, allowing you to see how each store is performing and identify areas for improvement.
Customizable visitor thresholds, allowing you to set specific goals for each product and receive alerts when they are met or exceeded.</p>
            </div>
          </div>
        </div>
      </section>
          {/* Parallax Background */}
          <section className="flex-col w-full h-[500px] bg-cover bg-fixed bg-center flex justify-center items-center" style={{backgroundImage: 'url(https://i.gifer.com/BXe0.gif)'}}>
            <h1 className="text-white text-5xl font-semibold mt-20 mb-10">
              V-TRACK SUPPORTS
            </h1>
            <span className="text-center font-bold my-20 text-white/90">
              <a href="https://egoistdeveloper.github.io/twcss-to-sass-playground/" target="_blank">
              WORDPRESS
              </a>
              <hr className="my-4" />
              <a href="https://unsplash.com/photos/8Pm_A-OHJGg" target="_blank" className="text-white/90 hover:text-white">
              SHOPIFY
              </a>
              <hr className="my-4" />
              <p>
                <a href="https://github.com/EgoistDeveloper/my-tailwind-components/blob/main/src/templates/parallax-landing-page.html" target="_blank" className="text-white/90 hover:text-white">
                MAJENTO
                </a>
              </p>
            </span>
          </section>
          {/* Content */}
          <section className="p-20 space-y-8">
            <h1 className="text-4xl text-center my-20">Overview</h1>
            <p>
            Welcome to V-Track, the ultimate solution for optimizing product sales across multiple ecommerce stores.
With V-Track, you can easily track unique visits to your products and gain valuable insights into customer behavior.
Our powerful analytics platform integrates seamlessly with popular ecommerce platforms like Wordpress, Magento, and Shopify, making it easy to monitor product performance across multiple stores.
            </p>
          </section>
        </main>
        {/* Footer */}
        <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10 w-full">
          <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
            {/* Col-1 */}
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              {/* Col Title */}
              <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Getting Started
              </div>
              {/* Links */}
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Installation
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Release Notes
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Upgrade Guide
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Using with Preprocessors
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Optimizing for Production
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Browser Support
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                IntelliSense
              </a>
            </div>
            {/* Col-2 */}
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              {/* Col Title */}
              <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Core Concepts
              </div>
              {/* Links */}
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Utility-First
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Responsive Design
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Hover, Focus, &amp; Other States
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Dark Mode
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Adding Base Styles
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Extracting Components
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Adding New Utilities
              </a>
            </div>
            {/* Col-3 */}
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              {/* Col Title */}
              <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Customization
              </div>
              {/* Links */}
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Configuration
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Theme Configuration
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Breakpoints
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Customizing Colors
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Customizing Spacing
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Configuring Variants
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Plugins
              </a>
            </div>
            {/* Col-3 */}
            <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
              {/* Col Title */}
              <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Community
              </div>
              {/* Links */}
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                GitHub
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Discord
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                Twitter
              </a>
              <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                YouTube
              </a>
            </div>
          </div>
          {/* Copyright Bar */}
          <div className="pt-2">
            <div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl">
              <div className="mt-2">© Copyright 1998-year. All Rights Reserved.</div>
              {/* Required Unicons (if you want) */}
              <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                <a href="#" className="w-6 mx-1">
                  <i className="uil uil-facebook-f" />
                </a>
                <a href="#" className="w-6 mx-1">
                  <i className="uil uil-twitter-alt" />
                </a>
                <a href="#" className="w-6 mx-1">
                  <i className="uil uil-youtube" />
                </a>
                <a href="#" className="w-6 mx-1">
                  <i className="uil uil-linkedin" />
                </a>
                <a href="#" className="w-6 mx-1">
                  <i className="uil uil-instagram" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Landing_Page_Main