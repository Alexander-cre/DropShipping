import React from "react";
import Link from "next/link";
import '../catalog/catalog.css'

const ProductSideBar = () => {
    return (
        <>

<input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
                    <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                        <div className="spinner diagonal part-1"></div>
                        <div className="spinner horizontal"></div>
                        <div className="spinner diagonal part-2"></div>
                    </label>
                    
            <aside className="w-full md:w-1/4 bg-white p-4 shadow-md" id="sidebarMenu">




                <ul className="space-y-2">
                    <li className="font-bold">
                        Any Department
                    </li>
                    <li>
                        Home &amp; Kitchen
                    </li>
                    <li>
                        Home Décor
                    </li>
                    <li>
                        Artificial Plants &amp; Flowers
                    </li>
                    <li>
                        Candles &amp; Holders
                    </li>
                    <li>
                        Decorative Pillows, Inserts &amp; Covers
                    </li>
                    <li>
                        Draft Stoppers
                    </li>
                    <li>
                        Dried &amp; Preserved Flora
                    </li>
                    <li>
                        Home Décor Accents
                    </li>
                    <li>
                        Home Fragrance
                    </li>
                    <li>
                        Indoor Fountains &amp; Accessories
                    </li>
                    <li>
                        Kids' Room Décor
                    </li>
                    <li>
                        Lamps &amp; Light Fixtures
                    </li>
                    <li>
                        Mirrors
                    </li>
                    <li>
                        Photo Frames
                    </li>
                    <li>
                        Slipcovers
                    </li>
                    <li>
                        Tapestries
                    </li>
                    <li>
                        Wall Art
                    </li>
                    <li>
                        Window Treatment Hardware
                    </li>
                </ul>
            </aside>
            </>
    )
}

export default ProductSideBar;