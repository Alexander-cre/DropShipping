"use client"

import Footer from "../app/components/footer";
import NavBar from "../app/components/navbar";
import Link from "next/link";
import React from "react";
import { useParams } from "next/navigation";
import products from "../app/data/products";
import { useEffect, useState } from "react";
import { useCart } from "../app/user/cart/context/CartContext";




const productDetails = () => {

    const params = useParams();
    const id = Number(params.id);
    const [product, setProduct] = useState(null); // State to hold the product
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    useEffect(() => {
        const foundProduct = products.find((product) => product.id === id);
        if (foundProduct) {
            setProduct(foundProduct);
        } else {
            console.error(`Product with id ${id} not found`);
            setProduct(null);
        }
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleAddToCart = () => {
        const itemToAdd = { ...product }; // Create an object with product details
        addToCart(itemToAdd); // Add the item to the cart
    
        // Store the item in local storage using the product ID as the key
        localStorage.setItem(itemToAdd.id, JSON.stringify(itemToAdd));
        console.log("Added to cart:", itemToAdd); // Log the added item to the console
        alert(`${product.name} has been added!`); // Alert the user
    };

    const displayItemsInLocalStorage = () => {
        const items = Object.keys(localStorage).map(key => {
            const item = JSON.parse(localStorage.getItem(key));
            return item; // Return the parsed item
        });
    
        console.log("Items in Local Storage:", items);
        // You can also render these items in your UI as needed
    };
    
    const handleRemoveFromLocalStorage = (id) => {
        localStorage.removeItem(id);
        console.log(`Removed item with id: ${id} from local storage`);
        // Optionally, refresh the displayed items
        displayItemsInLocalStorage();
    };

    // Render the product details
    return (
        <div className="">
            <NavBar />
            <section className="flex flex-col lg:flex-row mt-8 p-4">
                <div className="flex flex-col items-center lg:w-1/2">
                    <div className="w-full productImg ">
                        <img src="https://placehold.co/600x600" alt="Product Image" className="w-full similarImg" />
                    </div>
                    <div className="grid grid-cols-5 gap-6 items-center mt-4 smallImg">
                        <img src="https://placehold.co/50x50" alt="/" className="w-24 h-24 border border-2" />
                        <img src="https://placehold.co/50x50" alt="/" className="w-24 h-24 border border-2" />
                        <img src="https://placehold.co/50x50" alt="/" className="w-24 h-24 border border-2" />
                        <img src="https://placehold.co/50x50" alt="/" className="w-24 h-24 border border-2" />
                        <img src="https://placehold.co/50x50" alt="/" className="w-24 h-24 border border-2" />
                    </div>
                </div>
                <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
                    <h1 className="text-2xl font-bold uppercase"> {product.name}</h1>
                    <div className="flex items-center mt-2">
                        <div className="text-red-500 text-xl font-bold">${product.price}</div>
                        <div className="text-gray-500 line-through ml-2">${product.original_price}</div>
                    </div>
                    <div className="flex items-center mt-2">
                        <div className="text-red-500 text-sm font-bold">{product.ratings}</div>
                        <div className="text-gray-500 text-sm ml-2">(30 reviews)</div>
                    </div>
                    <div className="mt-4">
                        <div className="text-sm text-gray-600 font-bold">Color</div>
                        <div className="flex items-center mt-2 space-x-2">
                            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                            <div className="w-8 h-8 bg-black rounded-full"></div>
                            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                            <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                            <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="text-sm text-gray-600 font-bold">Size</div>
                        <div className="flex items-center mt-2 space-x-2">
                            <button className="px-4 py-2 border rounded">XXS</button>
                            <button className="px-4 py-2 border rounded">XS</button>
                            <button className="px-4 py-2 border rounded">S</button>
                            <button className="px-4 py-2 border rounded">M</button>
                            <button className="px-4 py-2 border rounded">L</button>
                            <button className="px-4 py-2 border rounded">XL</button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button
                            className="w-full bg-black text-white py-2 rounded"
                            onClick={handleAddToCart}
                        >
                            ADD TO CART
                        </button>

                    </div>
                    <div className="mt-4">
                        <div className="text-sm font-bold text-gray-600">Product Detail</div>
                        <p className="text-sm text-gray-800 mt-2">A wardrobe essential made with soft, smooth SUPIMA® cotton and a new feminine flattering fit.</p>
                        <ul className="list-disc list-inside text-sm text-gray-800 mt-2">
                            <li>100% SUPIMA® cotton</li>
                            <li>Machine wash cold</li>
                            <li>Imported</li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <div className="text-sm  font-bold text-gray-600">Materials & Care</div>
                        <p className="text-sm text-gray-800 mt-2">100% SUPIMA® cotton. Machine wash cold. Imported.</p>
                    </div>
                </div>
            </section>
            <section className="mt-8 p-4">
                <h2 className="text-xl font-bold">SIMILAR ITEMS</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div className="border p-4 similarCard" >
                        <Link href='catalog/product-details'>
                        <img src="https://placehold.co/200x200" alt="Similar Item 1" className="w-full similarImg" />
                        <div className="mt-2 text-sm text-gray-800">Item 1</div>
                        <div className="text-red-500 text-sm font-bold">$9.90</div>
                        </Link>
                    </div>
                    <div className="border p-4 similarCard">
                        <img src="https://placehold.co/200x200" alt="Similar Item 2" className="w-full similarImg" />
                        <div className="mt-2 text-sm text-gray-800">Item 2</div>
                        <div className="text-red-500 text-sm font-bold">$9.90</div>
                    </div>
                    <div className="border p-4 similarCard">
                        <img src="https://placehold.co/200x200" alt="Similar Item 3" className="w-full similarImg" />
                        <div className="mt-2 text-sm text-gray-800">Item 3</div>
                        <div className="text-red-500 text-sm font-bold">$9.90</div>
                    </div>
                    <div className="border p-4 similarCard">
                        <img src="https://placehold.co/200x200" alt="Similar Item 4" className="w-full similarImg" />
                        <div className="mt-2 text-sm text-gray-800">Item 4</div>
                        <div className="text-red-500 text-sm font-bold">$9.90</div>
                    </div>
                </div>
            </section>
            <br /><br /><br />
                <Footer />
        </div>

        

    )
}

export default productDetails;