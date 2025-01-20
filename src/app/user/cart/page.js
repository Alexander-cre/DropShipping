"use client";

// import Footer from "@/app/components/footer";
// import NavBar from "@/app/components/navbar";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { PaystackButton } from 'react-paystack';


const Cart = () => {


    const [cartItems, setCartItems] = useState([]);
    const [deliveryOption, setDeliveryOption] = useState('free'); // Default delivery option
    const [totalPrice, setTotalPrice] = useState(0);    
    const [publicKey, setPublicKey] = useState('pk_test_9a3e161cda021278e5ada93f903282917dc43254'); // Replace with your Paystack public key

    // Delivery fees
    const deliveryFees = {
        free: 0.00,
        express: 9.99,
    };
    // Function to load items from local storage
    const loadCartItems = () => {
        const items = Object.keys(localStorage).map(key => {
            try {
                const item = JSON.parse(localStorage.getItem(key));
                return item; // Return the parsed item
            } catch (error) {
                console.error(`Error parsing item with key "${key}":`, error);
                return null; // Return null for invalid items
            }
        }).filter(item => item !== null); // Filter out null items

        setCartItems(items);
    };

    // Function to remove an item from local storage
    const handleRemoveFromLocalStorage = (id) => {
        localStorage.removeItem(id);
        loadCartItems(); // Refresh the cart items after removal
    };

    const clearLocalStorage = () => {
        localStorage.clear();
        loadCartItems(); // Refresh the cart items after clearing
    };

    // Function to calculate the total price of items in the cart
    const calculateTotalPrice = () => {
        const itemsTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        const deliveryFee = deliveryFees[deliveryOption]; // Get the selected delivery fee
        return (itemsTotal + deliveryFee).toFixed(2); // Include delivery fee in total
    };

    // Function to increase the quantity of an item
    const increaseQuantity = (id) => {
        const updatedItems = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }; // Increase quantity
            }
            return item;
        });
        setCartItems(updatedItems);
        localStorage.setItem(id, JSON.stringify(updatedItems.find(item => item.id === id))); // Update local storage
    };


    // Function to decrease the quantity of an item
    const decreaseQuantity = (id) => {
        const updatedItems = cartItems.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 }; // Decrease quantity
            }
            return item;
        });
        setCartItems(updatedItems);
        localStorage.setItem(id, JSON.stringify(updatedItems.find(item => item.id === id))); // Update local storage
    };

    // Load cart items when the component mounts
    useEffect(() => {
        loadCartItems();
    }, []);

    // Update total price whenever cartItems or deliveryOption changes
    useEffect(() => {
        setTotalPrice(calculateTotalPrice());
    }, [cartItems, deliveryOption]); // Dependencies to recalculate total price

    // Paystack
    const componentProps = {
        email: "customer-email@example.com", // Customer's email
        amount: totalPrice * 100, // Amount in kobo
        publicKey: publicKey,
        text: "Proceed to checkout ",
        onSuccess: (reference) => {
            // Redirect to success page with query parameters
            console.log("Successful!!!")
        },
        onClose: () => {
            alert("Payment closed");
        },
    }


    return (
        <>

            {/* <NavBar /> */}
            <div className="container mx-auto p-4">
                <div className="flex flex-col lg:flex-row justify-between cart-con ">
                    <div className="w-full lg:w-2/3">
                        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

                        {cartItems.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            cartItems.map((item, index) => (
                                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-4">
                                    <div className="flex items-center">
                                        <img src={item.Image} alt={item.name} className="w-16 h-16 rounded-lg mr-4" />
                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                <Link href={`/catalog/product-details/${item.id}`}>
                                                    {item.name}
                                                </Link>
                                            </h3>
                                            <p className={`text-sm ${item.status === 'In stock' ? 'text-green-500' : 'text-red-500'}`}>{item.status}</p>
                                            <div className="flex items-center  rounded-lg">
                                                <button className="px-2 py-1 border rounded" onClick={() => decreaseQuantity(item.id)}> <b>-</b></button>
                                                <span className="px-2 py-1">{item.quantity}</span>
                                                <button className="px-2 py-1 border rounded" onClick={() => increaseQuantity(item.id)}><b>+</b></button>
                                            </div>
                                            <div className="flex items-center mt-2">
                                                <div className="text-gray-500 font-bold text-sm mr-2">{item.selectedSize || 'Size: Not selected'}</div><br />
                                                <div className="text-gray-500 font-bold text-sm mr-2">{item.selectedColor || 'Color: Not selected'}</div><br />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-0 items-center">
                                        <p className="text-lg font-semibold mr-4">N {item.price}</p>
                                        <button className="text-gray-500"
                                            onClick={() => handleRemoveFromLocalStorage(item.id)}
                                        >
                                            <i className="fas fa-trash"></i>
                                            <img src="https://www.svgrepo.com/show/488148/delete.svg" alt="Delete" width={20} height={20} />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                        <button className="bg-black rounded text-white p-3 pointer m-2"
                            onClick={() => clearLocalStorage()}
                        >
                            clear cart
                        </button>
                    </div>
                    
                    <div className="w-full lg:w-1/3 mt-4 lg:mt-0 lg:ml-4">
                        <div className="p-4 bg-white rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Delivery</h2>
                            <h3>Select Delivery Option:</h3>
                            <div className="flex justify-between mb-4">
                                <button
                                    className={`px-4 py-2 rounded-lg ${deliveryOption === 'free' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-black hover:text-white'}`}
                                    onClick={() => setDeliveryOption('free')}
                                >
                                    Free
                                </button>
                                <button
                                    className={`px-4 py-2 rounded-lg ${deliveryOption === 'express' ? 'bg-black text-white' : 'bg-gray-200 hover:bg-black hover:text-white'}`}
                                    onClick={() => setDeliveryOption('express')}
                                >
                                    Express: N 9.99
                                </button>
                            </div>
                            <p className="text-gray-500 mb-4">Delivery date: June 24, 2022</p>
                            <div className="mb-4">
                                <input type="text" placeholder="Promocode" className="w-full p-2 border rounded-lg mb-2" />
                                <button className="w-full px-4 py-2 bg-gray-200 rounded-lg">Apply</button>
                            </div>
                            <div className="flex justify-between mb-2">
                                <p className="text-gray-500">Delivery</p>
                                <p>N 0.00</p>
                            </div>
                            <div className="flex justify-between mb-4">
                                <p className="text-lg font-semibold">Total</p>
                                <p className="text-lg font-semibold">N {calculateTotalPrice()}</p>
                            </div>
                                <button className="w-full px-4 py-2 bg-black text-white rounded-lg mb-4">
                                <PaystackButton {...componentProps} />
                                </button>
                            <Link href={'/'}>
                                <button className="w-full px-4 py-2 bg-gray-200 rounded-lg">Continue shopping</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>

    );
}

export default Cart;
