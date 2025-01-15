import Footer from "@/app/components/footer"
import NavBar from "@/app/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="">
        <div className="bg-gray-500 text-white rounded-lg mb-4 slider">
          <img src="" alt="/" />
          <h1 className="text-3xl font-bold">Steal-worthy gifts under $10</h1>
          <p>Shop white elephant</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div className="bg-white p-4 rounded-lg shadow-lg boxoutercon">
            <h2 className="text-xl font-bold mb-2">Shop gifts by recipient</h2>
            <div className="grid grid-cols-2 gap-2 ">
              <div className="innerbox mb-4">
                <img src="https://placehold.co/100x100" alt="For him" className="w-full" />
                <p className="text-center">For him</p>
              </div>
              <div className="innerbox mb-4">
                <img src="https://placehold.co/100x100" alt="For her" className="w-full" />
                <p className="text-center">For her</p>
              </div>
              <div className="innerbox mb-4">
                <img src="https://placehold.co/100x100" alt="For kids" className="w-full" />
                <p className="text-center">For kids</p>
              </div>
              <div className="innerbox mb-4">
                <img src="https://placehold.co/100x100" alt="For teens" className="w-full" />
                <p className="text-center">For teens</p>
              </div>
            </div>
            <a href="#" className="text-blue-500 mt-2 block text-center">Shop all gifts</a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg boxoutercon">
            <h2 className="text-xl font-bold mb-2">Makeup Kits</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="innerbox mb-4">
                <img src="https://placehold.co/100x100" alt="Headsets" className="w-full" />
                <p className="text-center">Headsets</p>
              </div>
              <div className="innerbox mb-4">
                <img src="https://placehold.co/100x100" alt="Keyboards" className="w-full" />
                <p className="text-center">Keyboards</p>
              </div>
              <div className="innerbox mb-4">
                <img src="https://placehold.co/100x100" alt="Computer mice" className="w-full" />
                <p className="text-center">Computer mice</p>
              </div>
              <div className="innerbox mb-4">
                <img src="https://placehold.co/100x100" alt="Chairs" className="w-full" />
                <p className="text-center">Chairs</p>
              </div>
            </div>
            <a href="#" className="text-blue-500 mt-2 block text-center">See more</a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg boxoutercon">
            <h2 className="text-xl font-bold mb-2">Deals in Gadgets</h2>
            <img src="https://placehold.co/200x200" alt="Gadget Deals" className="w-full" />
            <a href="#" className="text-blue-500 mt-2 block text-center">Shop now</a>
          </div>
        </div>
      </main>

      <div className="p-4 Holiday">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 ">
          <div className="border border-2 p-4 rounded-lg holitab  shadow-lg ">
            <div className="mainholibox">
              <h2 className="font-bold mb-2">Top categories in Kitchen appliances</h2>
              <img src="https://placehold.co/300x200" alt="Cooker" className="mb-2" />
              <p>Cooker</p>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2 ">
              <div className="miniholibox">
                <img src="https://placehold.co/150x100" alt="Coffee" className="mb-1" />
                <p>Coffee</p>
              </div>
              <div className="miniholibox">
                <img src="https://placehold.co/150x100" alt="Pots and Pans" className="mb-1" />
                <p>Pots and Pans</p>
              </div>
              <div className="miniholibox">
                <img src="https://placehold.co/150x100" alt="Kettles" className="mb-1" />
                <p>Kettles</p>
              </div>
            </div>
            <a href="#" className="text-blue-500 mt-12 block">Explore all products in Kitchen</a>
          </div>
          <div className="border border-2 p-4 rounded-lg shadow-lg holitab gifttab">
            <h2 className="font-bold mb-2">Get your game on</h2>
            <img src="https://placehold.co/300x200" alt="Gaming setup" className="mb-2" />
            <a href="#" className="text-blue-500 mt-2 block">Shop gaming</a>
          </div>
          <div className="border border-2 p-4 rounded-lg shadow-lg holitab gifttab">
            <h2 className="font-bold mb-2">Small gifts under $20</h2>
            <img src="https://placehold.co/300x200" alt="Amazon gift box" className="mb-2" />
            <a href="#" className="text-blue-500 mt-2 block">Shop now</a>
          </div>
        </div>
        <div className="border border-2 p-4 rounded-lg shadow-lg holispecial ">
          <h2 className="font-bold mb-2">Here come Holiday Specials</h2>
          <Link href='catalog' >
            <b className="text-blue-500 mb-4 block">Explore now</b>
          </Link>
          <div className="flex overflow-x-auto space-x-4 slides">
            <div className="flex-shrink-0 text-center roundtab">
              <div className="tems-center justify-center mb-2">
                <img src="https://placehold.co/100x100" alt="Holiday deals" />
              </div>
              <p>Holiday deals</p>
            </div>
            <div className="flex-shrink-0 text-center roundtab">
              <div className="ms-center justify-center mb-2">
                <img src="https://placehold.co/100x100" alt="Most loved deals" />
              </div>
              <p>Most loved deals</p>
            </div>
            <div className="flex-shrink-0 text-center roundtab">
              <div className="items-center justify-center mb-2">
                <img src="https://placehold.co/100x100" alt="Deals under $50" />
              </div>
              <p>Deals under $50</p>
            </div>
            <div className="flex-shrink-0 text-center roundtab">
              <div className="tems-center justify-center mb-2">
                <img src="https://placehold.co/100x100" alt="Deals on Computer" />
              </div>
              <p>Deals on Computer</p>
            </div>
            <div className="flex-shrink-0 text-center roundtab">
              <div className="tems-center justify-center mb-2">
                <img src="https://placehold.co/100x100" alt="Deals" />
              </div>
              <p>Deals</p>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br />
      <Footer />
    </div>
  );
}
