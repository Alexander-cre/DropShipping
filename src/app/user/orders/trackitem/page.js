import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import React  from "react";

const OrderTracking = () => {
    return(
                <div class="max-w-2xl mx-auto p-4">
                    <NavBar />
                    <h1 class="text-xl font-bold mb-2">Order #30112657244</h1>
                    <p class="text-gray-600 mb-4">November 27, 2023</p>
                    <div class="border p-4 mb-4">
                        <div class="flex items-center mb-4">
                            <img src="https://placehold.co/50x50" alt="Soccer Shin Guard Tape" class="w-12 h-12 mr-4"/>
                            <div>
                                <a href="#" class="text-green-600 font-bold">DICK'S Sporting Goods</a>
                                <p>Soccer Shin Guard Tape</p>
                                <p>SKU: 14817807</p>
                                <p>Color: White</p>
                                <p>Quantity: 1</p>
                            </div>
                        </div>
                        <div class="flex items-center mb-4">
                            <i class="fas fa-shipping-fast text-green-600 mr-2"></i>
                            <p class="font-bold">Shipped</p>
                        </div>
                        <p class="text-gray-600 mb-4">Departed FedEx location</p>
                        <div class="flex items-center mb-4">
                            <div class="flex-1">
                                <div class="flex items-center">
                                    <div class="w-1/4 text-center">
                                        <div class="bg-green-600 h-2 rounded-full"></div>
                                        <p class="text-xs mt-1">Order Placed</p>
                                    </div>
                                    <div class="w-1/4 text-center">
                                        <div class="bg-green-600 h-2 rounded-full"></div>
                                        <p class="text-xs mt-1">Preparing Shipment</p>
                                    </div>
                                    <div class="w-1/4 text-center">
                                        <div class="bg-green-600 h-2 rounded-full"></div>
                                        <p class="text-xs mt-1">Shipped</p>
                                    </div>
                                    <div class="w-1/4 text-center">
                                        <div class="bg-gray-300 h-2 rounded-full"></div>
                                        <p class="text-xs mt-1">Delivered</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="border border-gray-400 px-4 py-2">TRACK PACKAGE</button>
                    </div>
                    <div class="mb-4">
                        <p class="text-gray-600">Tracking: <a href="#" class="text-blue-600">7263924876518</a></p>
                        <p class="text-gray-600">Delivery Method: Ground Parcel</p>
                        <p class="text-gray-600">Shipped to:</p>
                        <p class="text-gray-600">[Address]</p>
                    </div>
                    <div class="mb-4">
                        <p class="text-gray-600">Order Subtotal: <span class="float-right">$3.89</span></p>
                        <p class="text-gray-600">Shipping & Handling: <span class="float-right">$8.99</span></p>
                        <p class="text-gray-600">Estimated Tax: <span class="float-right">$0.42</span></p>
                        <p class="font-bold">Order Total: <span class="float-right">$13.22</span></p>
                    </div>
                    <div class="border p-4">
                        <h2 class="font-bold mb-2">Your Contact Info</h2>
                        <p>John Newman</p>
                        <p><a href="mailto:john.newman.bayward@gmail.com" class="text-blue-600">john.newman.bayward@gmail.com</a></p>
                        <p>1-888-946-6456</p>
                    </div>
                    <Footer />
                </div>
            );
        }

        export default OrderTracking ;