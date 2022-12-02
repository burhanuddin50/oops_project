import React, { Component } from 'react';
import Navbar2 from './navbar2';
import Logo from '../images/logo.jpg'
class About extends Component {
    render() {
        return (
            <div>
            <div>
            <div>
              <Navbar2/>
              <section className="text-gray-600 body-font -m-12">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                  <img className="w-64 mb-16 border-solid border-black border-2 rounded-full" src={Logo} alt="" />
                  <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
                    <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
            </div>
        );
    }
}

export default About;

