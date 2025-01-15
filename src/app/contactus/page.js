import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import React from "react";

const Contactpage = () => {
    return (
        <>
            <NavBar />
            <div className="flex justify-center items-center h-screen ">
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl md:w-4/5 conBox">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 p-4">
                            <h1 className="text-3xl font-bold mb-6">Contact us</h1>
                            <form className="space-y-4">
                                <div className="relative">
                                    <i className="fas fa-user absolute left-3 top-3 text-gray-400"></i>
                                    <input type="text" placeholder="Name" className="pl-10 pr-4 py-2 w-full border rounded-lg bg-gray-100 focus:outline-none" />
                                </div>
                                <div className="relative">
                                    <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
                                    <input type="email" placeholder="Email" className="pl-10 pr-4 py-2 w-full border rounded-lg bg-gray-100 focus:outline-none" />
                                </div>
                                <div className="relative">
                                    <textarea placeholder="Message" className="pl-4 pr-4 py-2 w-full border rounded-lg bg-gray-100 focus:outline-none h-32"></textarea>
                                </div>
                                <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded-lg w-full">Send Message</button>
                            </form>
                        </div>
                        <div className="md:w-1/2 p-4 flex justify-center items-center conImg">
                            <img src="https://placehold.co/300x300" alt="Illustration of a person holding an envelope while riding a skateboard" className="w-full h-auto" />
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Contactpage;