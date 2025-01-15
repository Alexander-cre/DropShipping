import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import React  from "react";
import { useRouter } from 'next/compat/router';

const checkoutOrderdetails = () => {

    const router = useRouter();
    const { trxref, reference, status, trans } = router.query; // Extract query parameters


    return(
        <div>
            <NavBar />
        <div className="max-w-4xl mx-auto bg-white p-6 mt-6 shadow-md">

                    <div>
            <h1>Payment Successful!</h1>
            <p><strong>Message:</strong> Approved</p>
            <p><strong>Transaction Reference:</strong> {reference}</p>
            <p><strong>Transaction ID:</strong> {trans}</p>
            <p><strong>Transaction Reference (trxref):</strong> {trxref}</p>
            <p><strong>Status:</strong> {status}</p>
        </div>

        <div className="border-b border-gray-300 mb-6"></div>
        <h1 className="text-2xl font-bold mb-4">Thank you for your order #3911690705825</h1>
        <p className="mb-6">We'll send you an email with tracking information when your item ships.</p>
        <div className="flex justify-between mb-6">
            <div>
                <h2 className="font-bold">Order placed</h2>
                <p>Value shipping</p>
                <p>Arrives by <span className="font-bold">Tue, May 10</span></p>
                <p>Sold by Walmart.com</p>
                <p>Order #3911690705825</p>
            </div>
            <div>
                <h2 className="font-bold">Shipping address</h2>
                <p>John Newman</p>
                <p>2125 Chestnut Street</p>
                <p>San Francisco, CA 94123</p>
                <p>test-order@baymard.com</p>
            </div>
        </div>
        <div className="border-b border-gray-300 mb-6"></div>
        <div className="flex items-center mb-6">
            <div className="flex items-center space-x-4">
                <img src="https://placehold.co/100x100?text=Product+Image" alt="Crayola 83-Piece Bundle Set" className="w-20 h-20"/>
                <div>
                    <h2 className="font-bold">Crayola 83-Piece Bundle Set</h2>
                    <p>Value shipping: Arrives by Tue, May 10</p>
                </div>
            </div>
            <div>
                <p>Quantity: 1</p>
                <p className="font-bold">$4.43</p>
            </div>
        </div>
        <div className="border-b border-gray-300 mb-6"></div>
        <div className="flex justify-between mb-6">
            <div>
                <h2 className="font-bold">Order summary</h2>
                <p>Subtotal (1 item): <span className="font-bold">$4.43</span></p>
                <p>Value shipping: <span className="font-bold">$4.97</span></p>
                <p>Est. tax: <span className="font-bold">$0.39</span></p>
                <p>Total: <span className="font-bold">$9.79</span></p>
            </div>
            <div>
                <h2 className="font-bold">Payment type</h2>
                <p>Ending in 8903</p>
            </div>
            <div>
                <h2 className="font-bold">Billing address</h2>
                <p>John Newman</p>
                <p>2125 Chestnut Street</p>
                <p>San Francisco, CA 94123</p>
                <p>test-order@baymard.com</p>
            </div>
        </div>
        <div className="border-b border-gray-300 mb-6"></div>
        <div className="flex justify-center">
            <img src="https://placehold.co/600x100?text=Get+%2410+Cash+Back+%26+10%25+cash+back" alt="Get $10 Cash Back & 10% cash back" className="w-full"/>
        </div>
    </div>
        <Footer />
    </div>
)
}

export default checkoutOrderdetails ;