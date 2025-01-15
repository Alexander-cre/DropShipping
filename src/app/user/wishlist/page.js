import React from "react";
import Link from "next/link";
import ProfileSideBar from "@/components/profilesidebar";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const Wishlistpage = () => {
    return (
        <>
            <NavBar />
            <div className="min-h-screen flex flex-col p-12">
                <div className="flex flex-1">
                    <ProfileSideBar />
                    <main className="flex-1 p-4">
                        <div className="bg-white p-4 rounded shadow">
                            <div className="flex items-center justify-between border-b pb-2 mb-4">
                                <h1 className="text-xl font-bold">Wishlist</h1>
                                <div className="flex items-center space-x-2">
                                    <button className="text-blue-600">wishlist</button>
                                    <input type="text" placeholder="Filter order history by name of product" className="p-2 rounded border border-gray-300" />
                                    <button className="text-gray-600">Sort by:</button>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 border rounded">
                                    <div className="flex items-center space-x-4">
                                        <img src="https://placehold.co/60x60?text=mg" alt="minigrow logo" className="h-16 w-16 rounded-full" />
                                        <div>
                                            <Link href='/catalog/product-details'>
                                                <h2 className="text-lg font-bold">minigrow</h2>
                                            </Link>
                                            <div className="text-gray-600">Category : Blues</div>
                                            <div className="text-gray-600 font-bold">12 units available</div>
                                        </div>
                                    </div>
                                    <div className="text-right gap-6 ">
                                        <div className="text-lg font-bold">$12.19</div>
                                        <button className="mt-2 px-4 py-2 bg-black text-white rounded">Add to Cart</button><br />
                                        <a href="#" className="text-blue-600">del</a><br />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-4 border rounded">
                                    <div className="flex items-center space-x-4">
                                        <img src="https://placehold.co/60x60?text=mg" alt="minigrow logo" className="h-16 w-16 rounded-full" />
                                        <div>
                                            <Link href='/catalog/product-details'>
                                                <h2 className="text-lg font-bold">minigrow</h2>
                                            </Link>
                                            <div className="text-gray-600">Category : Blues</div>
                                            <div className="text-gray-600 font-bold">12 units available</div>
                                        </div>
                                    </div>
                                    <div className="text-right gap-6 ">
                                        <div className="text-lg font-bold">$12.19</div>
                                        <button className="mt-2 px-4 py-2 bg-black text-white rounded">Add to Cart</button><br />
                                        <a href="#" className="text-blue-600">del</a><br />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-4 border rounded">
                                    <div className="flex items-center space-x-4">
                                        <img src="https://placehold.co/60x60?text=mg" alt="minigrow logo" className="h-16 w-16 rounded-full" />
                                        <div>
                                            <Link href='/catalog/product-details'>
                                                <h2 className="text-lg font-bold">minigrow</h2>
                                            </Link>
                                            <div className="text-gray-600">Category : Blues</div>
                                            <div className="text-gray-600 font-bold">12 units available</div>
                                        </div>
                                    </div>
                                    <div className="text-right gap-6 ">
                                        <div className="text-lg font-bold">$12.19</div>
                                        <button className="mt-2 px-4 py-2 bg-black text-white rounded">Add to Cart</button><br />
                                        <a href="#" className="text-blue-600">del</a><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Wishlistpage;