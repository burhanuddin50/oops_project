import React, { Component } from 'react';
import Logo from '../images/logo.jpg'
class Navbar2 extends Component {
    render() {
        return (
            <div>
                <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="logo.jpg" type="image/x-icon" />
        <title>Super Mart</title>
        <link rel="stylesheet" href="style.css" />
        <header className="text-gray-600 body-font -mb-8">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a href="/main" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img className="w-28 border-solid border-black border-2 rounded-full" src={Logo} alt="" />
              <span className="ml-3 text-2xl">Super Mart</span>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
              <a href="/home" className="mr-5 hover:text-gray-900">Home</a>
              <a href="/about" className="mr-5 hover:text-gray-900">About</a>
              <a href="/services" className="mr-5 hover:text-gray-900">Our Services</a>
              <a href="/contact" className="mr-5 hover:text-gray-900">Contact Us</a>
            </nav>
            <form>   
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Products" required />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
            </form>
          </div>
        </header>
            </div>
        );
    }
}

export default Navbar2;
