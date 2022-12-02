import React, { Component } from 'react';
import Navbar2 from './navbar2';
class Cart extends Component {
    render() {
        return (
            <div>    
      <div>
      <Navbar2/>
        <div className aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
          <div className>
            <div className>
              <div className="pointer-events-none flex pl-10">
                <div className="pointer-events-auto  max-w-md m-auto mt-28 w-full">
                  <div className="flex flex-col  bg-white shadow-xl w-full">
                    <div className="flex-1  py-6 px-4 sm:px-6">
                      <div className="flex">
                        <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                      </div>
                      <div className="mt-8">
                        <div className="flow-root ">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            <li className="flex py-10 ">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                              </div>
                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">Throwback Hip Bag</a>
                                    </h3>
                                    <p className="ml-4">₹90.00</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">Salmon</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500">Qty 1</p>
                                  <div className="flex">
                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." className="h-full w-full object-cover object-center" />
                              </div>
                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href="#">Medium Stuff Satchel</a>
                                    </h3>
                                    <p className="ml-4">₹32.00</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">Blue</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500">Qty 1</p>
                                  <div className="flex">
                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                  </div>
                                </div>
                              </div>
                            </li>
                            {/* More products... */}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>₹122.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                            <a href="main.html"> Continue Shopping</a>
                            <span aria-hidden="true"> →</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
            </div>
        );
    }
}

export default Cart;
