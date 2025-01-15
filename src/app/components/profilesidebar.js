import React from "react";
import Link from "next/link";

const ProfileSideBar = () => {
    return (
        <>
            <input type="checkbox" class="proopenSidebarMenu" id="proopenSidebarMenu" />
            <label for="proopenSidebarMenu" class="prosidebarIconToggle">
                <div class="prospinner prodiagonal part-1"></div>
                <div class="prospinner prohorizontal"></div>
                <div class="prospinner prodiagonal part-2"></div>
            </label>


            <aside className="bg-white w-64 p-4 shadow profileBar " id="prosidebarMenu">
                <nav>
                    <ul>
                        <li className="mb-4 flex items-center text-black  hover:text-orange-400 hover:text-lg">
                            <Link href={'/user/'}>
                                <i className="fas fa-tachometer-alt mr-2"></i> Profile
                            </Link>
                        </li>
                        <li className="mb-4 flex items-center  text-black hover:text-orange-400 hover:text-lg cursor-pointer">
                            <Link href={'/user/orders/'}>
                                <i className="fas fa-wallet mr-2"></i> Orders
                            </Link>
                        </li>
                        <li className="mb-4 flex items-center  text-black hover:text-orange-400 hover:text-lg cursor-pointer">
                            <Link href={'/user/wishlist/'}>
                                <i className="fas fa-mobile-alt mr-2"></i> Wishlist
                            </Link>
                        </li>
                        <li className="mb-4 flex items-center  text-black hover:text-orange-400 hover:text-lg cursor-pointer">
                            <Link href={'/user/notifications'}>
                                <i className="fas fa-exclamation-circle mr-2"></i> Inbox
                            </Link>
                        </li>
                        <li
                            className="mb-4 flex items-center  text-white bg-black px-2 py-2 rounded w-2/4 hover:text-black hover:bg-none hover:border-2 hover:border-black cursor-pointer">
                            <i className="fas fa-money-bill-alt mr-2"></i> Logout
                        </li>
                    </ul>
                </nav>
            </aside>

        </>
    )
}

export default ProfileSideBar;