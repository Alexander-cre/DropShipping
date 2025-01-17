"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();


export const useCart = () => {
    return useContext(CartContext);
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
};

  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script src="https://cdn.jsdelivr.net/npm/react-paystack@latest/dist/react-paystack.umd.js"></script>
        <CartContext.Provider value={{ cart, addToCart }}>
        {children}
        </CartContext.Provider>
      </body>
    </html>
  );
}
