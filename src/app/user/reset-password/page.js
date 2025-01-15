import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Link from "next/link";
import React from "react";

const Passwordreset = () => {
    return (
        <div>
            <NavBar /><br /><br />
            <div className="flex flex-col md:flex-row items-center justify-center bg-white shadow-md rounded-lg p-8 md:p-16">
                <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 resPass">
                    <img src="https://placehold.co/300x300" alt="Illustration of a password reset process with a lock, email, and password input" className="w-3/4 md:w-full" />
                </div>
                <div className="w-full md:w-1/2">
                    <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
                    <p className="mb-4">Enter your email and we'll send you a link to reset your password.</p>
                    <form>
                        <div className="mb-4">
                            <input type="email" placeholder="Yourmail@gmail.com" className="w-full p-2 border border-gray-300 rounded" />
                            <p className="text-red-500 mt-2">We cannot find your email.</p>
                        </div>
                        <button type="submit" className="w-full bg-black text-white p-2 rounded">Submit</button>
                    </form>
                    <Link href={'/user/signin'}>
                    <p  className="block text-center text-gray-500 mt-4">Back to Login</p>
                    </Link>
                </div>
            </div>
            <br /><br /><br />
            <Footer />
        </div>

    )
}

export default Passwordreset;