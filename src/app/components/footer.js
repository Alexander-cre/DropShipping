import React from "react";
import Link from "next/link";


const Footer = () => {
    return (
        <div className="p-8 bg-black text-white">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">Don't Miss Out</h1>
                <p>Sign up for the latest beauty news, product samples and coupons</p>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="email">EMAIL ADDRESS*</label>
                    <input className="w-full p-2 border border-gray-400 bg-black text-white" type="email" id="email" placeholder="Enter Your Email Address" />
                </div>
                <div className="flex justify-center space-x-4 mt-8">
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-pinterest-p"></i>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-sm">
                <div>
                    <h2 className="font-bold">COMPANY</h2>
                    <ul>
                        <li><Link href={'about'}>About</Link></li>
                        <li><Link href={'Developer'}> Developers </Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold">CUSTOMER SERVICE</h2>
                    <ul>
                        <li><Link href={'contactus'}>Contact Us</Link></li>
                        <li><Link href={'/user/'}>My Account</Link></li>
                        <li>Redeem rewards</li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold">MORE TO EXPLORE</h2>
                    <ul>
                        <li>Tools and Consultations</li>
                        <li>Offers</li>
                        <li>#Dropshipping Business</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between items-center mt-8 text-xs">
                <ul className="flex space-x-4">
                    <li>SITE MAP</li>
                    <li>PRIVACY</li>
                    <li><Link href={'/FAQ'}>TERMS</Link></li>
                    <li>USER CONTENT PERMISSION TERMS</li>
                    <li><Link href={'/FAQ'}> FAQs</Link></li>
                </ul>
                <p>© 2024/2025 JOJO Marketplace.</p>
            </div>
            <div className="text-center mt-4 text-xs">
                <p>This site is Designed and tailored towards individuals who desires to start their dropshipping business with easy and professional looking webapps . Cookies and related technology are used for advertising and for optimization. To learn more, visit AdChoices and our Privacy Policy.</p>
            </div>
            <div className="text-center mt-4">
                <a href="#" className="text-xs">BACK TO TOP</a>
            </div>
        </div>
    )
}

export default Footer;