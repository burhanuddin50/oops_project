import React from 'react';
import Logo from '../images/logo.jpg'
import Navbar from './navbar'
import { useState } from 'react'; 
  const Register = () => {
    const [name, setname] = useState('');
    const [password, setpassword] = useState('');
    const [number, setnumber] = useState('');
    const [address, setaddress] = useState('');
    const [email, setemail] = useState('');
    const handleChange = event => {
      setemail(event.target.value);
    };
    const handleChange1 = event => {
      setpassword(event.target.value);
    };
    const handleChange2 = event => {
      setname(event.target.value);
    };
    const handleChange3 = event => {
      setnumber(event.target.value);
    };
    const handleChange4 = event => {
      setaddress(event.target.value);
    };
   
    return (
      <div>
        <div>
          <Navbar />
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <img className="mx-auto w-36 border-solid border-black border-2 rounded-full" src={Logo} alt="" />
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
              </div>
              <div className="flex flex-row lg:w-2/3 w-full sm:flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-center">
                <div className="relative flex-grow w-1/2 left-2">
                  <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                  <input type="text" id="full-name" name="full-name" value={name} onInput={handleChange2} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative flex-grow w-1/2">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" value={email} onInput={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative flex-grow w-1/2">
                  <label htmlFor="number" className="leading-7 text-sm text-gray-600">Phone Number</label>
                  <input type="number" id="number" name="number" value={number} onInput={handleChange3} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative flex-grow w-1/2">
                  <label htmlFor="pass" className="leading-7 text-sm text-gray-600">Create a password</label>
                  <input type="password" id="password" value={password} onInput={handleChange1} name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative flex-grow w-1/2">
                  <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                  <input type="address" id="address" value={address} onInput={handleChange4} name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button className="relative top-8  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href="/main"> Register</a></button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
  
  export default Register;
  
