"use client";

import React, { useState } from "react";
import Link from "next/link";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <header classNameName='shadow-lg font-[sans-serif] tracking-wide relative z-50'>
            <section
                className='flex items-center relative py-3 lg:px-10 px-4 border-gray-200 border-b bg-white lg:min-h-[70px] max-lg:min-h-[60px]'>
                <a href="javascript:void(0)" className="shrink-0 max-sm:hidden"><img
                    src="https://storage.googleapis.com/a1aa/image/1c8d7065-b538-4560-a760-ad6455a46e01.jpeg" alt="logo" className='sm:w-[150px] w-32' />
                </a>
                <a href="/" className="hidden max-sm:block"><img src="" alt="logo" className='w-9' />
                </a>

                <div className='flex flex-wrap w-full items-center'>
                    <input type='text' placeholder='Search something...'
                        className='xl:w-80 max-lg:hidden lg:ml-10 max-md:mt-4 max-lg:ml-4 bg-gray-100 border focus:bg-transparent px-4 rounded h-10 outline-none text-sm transition-all' />
                    <div className="ml-auto">

                        <ul className='flex items-center'>
                            <li className='max-md:hidden flex items-center text-[15px] max-lg:py-2 px-4 font-medium text-gray-800 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                                    <g data-name="Layer 2">
                                        <path
                                            d="M14.5 12.75A3.22 3.22 0 0 1 12 11.6a3.27 3.27 0 0 1-2.5 1.15A3.22 3.22 0 0 1 7 11.6a2.91 2.91 0 0 1-.3.31 3.22 3.22 0 0 1-2.51.82 3.35 3.35 0 0 1-2.94-3.37v-.71a4.76 4.76 0 0 1 .24-1.5l1.57-4.7a1.75 1.75 0 0 1 1.66-1.2h14.56a1.75 1.75 0 0 1 1.66 1.2l1.57 4.7a4.76 4.76 0 0 1 .24 1.5v.71a3.35 3.35 0 0 1-2.92 3.37 3.2 3.2 0 0 1-2.51-.82c-.11-.1-.22-.22-.32-.33a3.28 3.28 0 0 1-2.5 1.17zm-9.78-10a.26.26 0 0 0-.24.17l-1.56 4.7a3.27 3.27 0 0 0-.17 1v.71a1.84 1.84 0 0 0 1.57 1.88A1.75 1.75 0 0 0 6.25 9.5a.75.75 0 0 1 1.5 0 1.67 1.67 0 0 0 1.75 1.75 1.76 1.76 0 0 0 1.75-1.75.75.75 0 0 1 1.5 0 1.67 1.67 0 0 0 1.75 1.75 1.76 1.76 0 0 0 1.75-1.75.75.75 0 0 1 1.5 0 1.75 1.75 0 0 0 1.93 1.74 1.84 1.84 0 0 0 1.57-1.88v-.71a3.27 3.27 0 0 0-.17-1l-1.56-4.7a.26.26 0 0 0-.24-.17z"
                                            data-original="#000000" />
                                        <path
                                            d="M20 22.75H4A1.76 1.76 0 0 1 2.25 21v-9.52a.75.75 0 0 1 1.5 0V21a.25.25 0 0 0 .25.25h16a.25.25 0 0 0 .25-.25v-9.53a.75.75 0 1 1 1.5 0V21A1.76 1.76 0 0 1 20 22.75z"
                                            data-original="#000000" />
                                        <path
                                            d="M15.5 22.75h-7a.76.76 0 0 1-.75-.75v-5a1.76 1.76 0 0 1 1.75-1.75h5A1.76 1.76 0 0 1 16.25 17v5a.76.76 0 0 1-.75.75zm-6.25-1.5h5.5V17a.25.25 0 0 0-.25-.25h-5a.25.25 0 0 0-.25.25z"
                                            data-original="#000000" />
                                    </g>
                                </svg>
                                Stores and Services
                            </li>
                            <li className='max-md:hidden flex items-center text-[15px] max-lg:py-2 px-4 font-medium text-gray-800 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 512 511">
                                    <path
                                        d="M497 193.3h-40.168c-1.215 0-2.418.052-3.613.13-9.024-8.051-19.004-14.7-29.68-19.82 24.348-17.294 40.262-45.712 40.262-77.778C463.8 43.266 421.035.5 368.469.5c-52.57 0-95.336 42.766-95.336 95.332 0 25.262 9.883 48.258 25.976 65.332h-70.148c16.094-17.074 25.973-40.07 25.973-65.332C254.934 43.266 212.168.5 159.602.5c-52.567 0-95.336 42.766-95.336 95.332 0 29.48 13.453 55.875 34.539 73.379-14.602 5.457-28.149 13.617-40.028 24.219a55.211 55.211 0 0 0-3.609-.13H15c-8.285 0-15 6.716-15 15v80.333c0 8.285 6.715 15 15 15h1.066v113.535c0 8.281 6.715 15 15 15h449.868c8.285 0 15-6.719 15-15V303.633H497c8.285 0 15-6.715 15-15V208.3c0-8.285-6.715-15-15-15zm-15 80.333h-25.168c-13.875 0-25.168-11.29-25.168-25.168 0-13.875 11.293-25.164 25.168-25.164H482zM303.133 95.832c0-36.023 29.308-65.332 65.332-65.332 36.023 0 65.336 29.309 65.336 65.332 0 36.027-29.309 65.332-65.332 65.332-36.028 0-65.336-29.305-65.336-65.332zM159.602 30.5c36.023 0 65.332 29.309 65.332 65.332 0 36.023-29.309 65.332-65.332 65.332-36.028 0-65.336-29.305-65.336-65.332 0-36.023 29.308-65.332 65.336-65.332zM30 223.3h25.168c13.875 0 25.168 11.29 25.168 25.169 0 13.875-11.293 25.164-25.168 25.164H30zm16.066 80.333h9.102c30.418 0 55.168-24.746 55.168-55.168 0-16.844-7.602-31.942-19.54-42.067h.356c15.504-9.918 33.535-15.23 52.383-15.23h142.887C258.664 214.566 241 249.574 241 288.633v113.535H110.332v-65.336c0-8.281-6.715-15-15-15-8.281 0-15 6.719-15 15v65.332H46.066zm419.868 98.531h-34.27v-65.332c0-8.281-6.715-15-15-15-8.281 0-15 6.719-15 15v65.332H271V288.633c0-53.742 43.723-97.465 97.469-97.465 18.933 0 37.039 5.36 52.582 15.36-11.852 10.128-19.383 25.163-19.383 41.94 0 30.419 24.746 55.165 55.168 55.165h9.098zm0 0"
                                        data-original="#000000" />
                                </svg>
                                Communty
                            </li>
                            <li className='max-lg:py-2 px-4 cursor-pointer'>
                                <Link href={'/user/cart/'}>
                                <span className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 inline" viewBox="0 0 512 512">
                                        <path
                                            d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                                            data-original="#000000"></path>
                                    </svg>
                                    <span
                                        className="absolute left-auto -ml-1 -top-2 rounded-full bg-red-500 px-1 py-0 text-xs text-white">3</span>
                                </span>
                                </Link>
                            </li>
                            <li className='flex text-[15px] max-lg:py-2 px-4 hover:text-[#007bff] hover:fill-[#007bff]'>
                                <button
                                    className='px-4 py-2 text-sm font-semibold text-gray-800 border border-[#333] bg-transparent'>Sign
                                    In</button>
                            </li>
                            <li id="toggleOpen" className='lg:hidden'>
                                <button>
                                    <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {isMenuOpen && (
                <div classNameName='lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50'>
                    <div classNameName='bg-white p-6'>
                        <button onClick={handleToggleMenu} classNameName='absolute top-2 right-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" classNameName="w-6 h-6" fill="#333" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9.586l4.293-4.293 1.414 1.414L11.414 11l4.293 4.293-1.414 1.414L10 12.414l-4.293 4.293-1.414-1.414L8.586 11 4.293 6.707 5.707 5.293 10 9.586z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <ul classNameName='flex flex-col space-y-4'>
                            <li><Link href='/new' classNameName='hover:text-yellow-300'>New</Link></li>
                            <li><Link href='/brands' classNameName='hover:text-yellow-300'>Brands</Link></li>
                            <li><Link href='/makeup' classNameName='hover:text-yellow-300'>Makeup</Link></li>
                            <li><Link href='/hair' classNameName='hover:text-yellow-300'>Hair</Link></li>
                            <li><Link href='/tools' classNameName='hover:text-yellow-300'>Tools & Brushes</Link></li>
                            <li><Link href='/bath' classNameName='hover:text-yellow-300'>Bath & Body</Link></li>
                            <li><Link href='/gifts' classNameName='hover:text-yellow-300'>Gifts</Link></li>
                            <li><Link href='/skincare' classNameName='hover:text-yellow-300'>Skincare</Link></li>
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
}

export default NavBar;