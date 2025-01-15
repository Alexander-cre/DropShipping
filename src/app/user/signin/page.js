import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Link from "next/link";
import React from "react";

const Signin = () => {
    return (
        <div>
            <NavBar />
        <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl mx-auto mt-5 conBox">
            <div className="bg-black text-white p-8 rounded-t-lg md:rounded-l-lg md:rounded-t-none flex flex-col justify-center items-center md:w-1/2 ">
                <h1 className="text-3xl font-bold mb-4">
                <div className="bg-white text-white rounded-full w-10 h-10 flex items-center justify-center mr-2">
                        <span className="font-bold text-black text-2xl">J</span>
                    </div>
                    JOJO Online B2C Platform.</h1>
                <p className="text-lg">Simplify your shopping experience with our unique store. </p>
                <img src="https://placehold.co/300x400" alt="Two people standing" className="mt-8 w-full h-auto rounded-lg imgCOn" />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center mb-8">
                    <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center mr-2">
                        <span className="font-bold text-xl">J</span>
                    </div>
                    <h2 className="text-2xl font-bold">JOJO Marketplace</h2>
                </div>
                <h3 className="text-2xl font-bold mb-4">Welcome Back</h3>
                <p className="text-gray-600 mb-6">Please login to your account</p>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Email address</label>
                        <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                        <span className="text-gray-600 text-right mt-2">
                            <Link href={'reset-password'}>Forgot Password ?</Link> </span>
                    </div>
                    <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300">Login</button>
                </form>
                <div className="flex items-center justify-center mt-4">
                    <span className="text-gray-600">Or login with</span>
                </div>
                <div className="flex items-center justify-center mt-4 space-x-4">
                    <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-100 transition duration-300">
                        <i className="fab fa-google text-red-500 mr-2"></i> Google
                    </button>
                    <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-100 transition duration-300">
                        <i className="fab fa-facebook text-blue-500 mr-2"></i> Facebook
                    </button>
                </div>
                <span className="text-gray-600 text-center "><Link href={'signup'}>Don't have an account?</Link> </span>
            </div>
        </div>
        <br />
        <Footer />
        </div>
    )
}

export default Signin;