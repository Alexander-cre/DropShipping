"use client"

import Footer from '../app/components/footer';
import NavBar from '../app/components/navbar';
import ProfileSideBar from '../app/components/profilesidebar';
import Link from 'next/link';
import React, { useState } from 'react';
import '../user/profilecomponent.css' ;
const UserProfile = () => {

    return (
        <>
        <NavBar />
                        <div className="min-h-screen flex flex-col">
                            <header className="bg-white shadow p-4 flex justify-between items-center">
                                <div className="flex items-center">
                                    <img src="https://placehold.co/40x40" alt="Logo" className="mr-2"/>
                                    <div>
                                        <h1 className="text-xl font-bold">Profile</h1>
                                        <p className="text-sm text-gray-500">Welcome to JOJO Marketplace </p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <img src="https://placehold.co/40x40" alt="User" className="rounded-full mr-2"/>
                                    <span>Hello Sami</span>
                                </div>
                            </header>
                            <div className="flex flex-1 mx-auto mt-6 px-4">

                                <ProfileSideBar />

                                <main className="flex-1 p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-white p-6 rounded-lg shadow">
                                            <div className="flex items-center mb-4 proInfo">
                                                <img src="https://placehold.co/100x100" alt="Profile" className="rounded-full mr-4"/>
                                                <div>
                                                    <h2 className="text-lg font-bold">My profile</h2>
                                                    <p className="text-sm text-gray-500">Last login: 07 Aug 2019 14:48</p>
                                                    <p className="text-sm text-gray-500">Woodland Heights, Texas, USA</p>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <p className="font-bold">Sami Rahman</p>
                                                <p className="text-gray-500">+1-856-569-0328</p>
                                                <p className="text-gray-500">samirahman007@gmail.com</p>
                                            </div>
                                            <button className="bg-red-500 text-white px-4 py-2 rounded-full mb-4">SMS alerts activation</button>
                                            <button className="bg-orange-500 text-white px-4 py-2 rounded-full">Save</button>
                                        </div>
                                        <div className="bg-white p-6 rounded-lg shadow">
                                            <h2 className="text-lg font-bold mb-4">My xPay accounts</h2>
                                            <div className="mb-4">
                                                <p className="font-bold">Active account</p>
                                                <p className="text-gray-500">8569 8569 8569 858</p>
                                                <button className="bg-red-500 text-white px-4 py-2 rounded-full mt-2">Block Account</button>
                                            </div>
                                            <div>
                                                <p className="font-bold">Blocked account</p>
                                                <p className="text-gray-500">8569 8569 8569 858</p>
                                                <button className="bg-green-500 text-white px-4 py-2 rounded-full mt-2">Unlock account</button>
                                            </div>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                        <Footer />
        
    </>
        
    );
}

export default UserProfile;