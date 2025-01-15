"use client"

import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import React, { useState } from "react";

const FAQPage = () => {

    const FAQItem = ({ question, answer }) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div className="border-b border-gray-200 py-4">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <h2 className="text-lg font-medium text-gray-800">{question}</h2>
                    <i className={`fas fa-chevron-down transform transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
                </div>
                {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
            </div>
        );
    };

    const faqs = [
        { question: "What is your return policy?", answer: "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange." },
        { question: "How do I track my order?", answer: "You can track your order using the tracking number provided in your order confirmation email." },
        { question: "Can I purchase items again?", answer: "Yes, you can purchase items again by visiting our store and adding them to your cart." },
        { question: "Do you ship internationally?", answer: "Yes, we ship internationally. Shipping charges and delivery times may vary depending on the destination." },
        { question: "How can I contact customer support?", answer: "You can contact our customer support team via email at support@example.com or by calling our hotline at 123-456-7890." },
        { question: "What payment methods do you accept?", answer: "We accept various payment methods including credit cards, PayPal, and bank transfers." },
        { question: "How do I reset my password?", answer: "To reset your password, click on the 'Forgot Password' link on the login page and follow the instructions." },
        { question: "Can I change my shipping address?", answer: "Yes, you can change your shipping address before the order is shipped. Please contact our customer support for assistance." },
        { question: "What is your privacy policy?", answer: "Our privacy policy can be found on our website. It outlines how we collect, use, and protect your personal information." },
        { question: "How do I cancel my order?", answer: "To cancel your order, please contact our customer support team as soon as possible. If the order has already been shipped, you may need to return the items for a refund." },
        { question: "Do you offer gift cards?", answer: "Yes, we offer gift cards in various denominations. You can purchase them on our website." },
        { question: "How do I apply a discount code?", answer: "You can apply a discount code at checkout. Enter the code in the designated field and the discount will be applied to your order." },
        { question: "What should I do if I receive a damaged item?", answer: "If you receive a damaged item, please contact our customer support team immediately with photos of the damage and your order details." },
        { question: "How long does shipping take?", answer: "Shipping times vary depending on the destination and shipping method chosen. Estimated delivery times are provided at checkout." },
        { question: "Can I return a gift?", answer: "Yes, you can return a gift. Please contact our customer support team for assistance with the return process." }
    ];

    return (
        <>
            <NavBar />
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}

                <br />
            </div>
            <Footer />
        </>
    );
};

export default FAQPage;