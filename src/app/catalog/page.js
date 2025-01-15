import Footer from "@/app/components/footer";
import NavBar from "@/app/components/navbar";
import ProductSideBar from "@/app/components/productsidebar";
import ProfileSideBar from "@/app/components/profilesidebar";
import Link from "next/link";
import '@/app/catalog/catalog.css';
import products from "../data/products";

const Catalog = () => {
    return (
        <body className="bg-gray-100 block ">

            <NavBar />

            <header className="bg-teal-600 text-white text-center py-4">

                <h1 className="text-3xl font-bold">
                    Jojo Store Best Sellers
                </h1>
                <p className="text-sm">
                    Our most popular products based on sales. Updated hourly.
                </p>
            </header>

            <div className="container mx-auto mt-6 px-4">

                <div className="flex flex-col md:flex-row">




                    <ProductSideBar />
                    <main className="w-full md:w-3/4 md:ml-6 mt-6 md:mt-0">
                        <h2 className="text-xl font-bold mb-4">
                            Best Sellers in Home Décor Products
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map(product => (
                                <div key={product.id} className="border p-4 rounded-lg shadow-md">
                                    <Link href={`/catalog/product-details/${product.id}`}>
                                        <img src="https://placehold.co/200x200" alt={product.name} className="w-full h-48 object-cover mb-2" />
                                        <h2 className="text-lg font-semibold">{product.name}</h2>
                                        <div className="flex items-center mt-2">
                                            <div className="text-red-500 text-lg font-bold">${product.price.toFixed(2)}</div>
                                            <div className="text-gray-500 line-through ml-2">${product.original_price.toFixed(2)}</div>
                                        </div>
                                        <div className="text-sm text-gray-500 mt-1">{product.ratings} ★</div>
                                    </Link>
                                </div>
                            ))}

                        </div>
                    </main>
                </div><br /><br /><br /><br />
            </div><br /><br />

            <Footer />

        </body>

    )
}

export default Catalog;