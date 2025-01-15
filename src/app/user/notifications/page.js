import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import React from "react";

const Notifications = () => {
    
    const notifications = [
        {
            type: 'Joined New User',
            title: 'New Registration: Finibus Bonorum et Malorum',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
            user: 'Allen Deo',
            date: '24 Nov 2018 at 9:30 AM',
            color: 'bg-green-500'
        },
        {
            type: 'Message',
            title: 'Darren Smith sent new message',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
            user: 'Darren',
            date: '24 Nov 2018 at 9:30 AM',
            color: 'bg-yellow-500'
        },
        {
            type: 'Comment',
            title: 'Arin Ganshram Commented on post',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
            user: 'Arin Ganshram',
            date: '24 Nov 2018 at 9:30 AM',
            color: 'bg-pink-500'
        },
        {
            type: 'Connect',
            title: 'Juliet Den Connect Allen Depk',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
            user: 'Juliet Den',
            date: '24 Nov 2018 at 9:30 AM',
            color: 'bg-blue-500'
        },
        {
            type: 'Connect',
            title: 'Juliet Den Connect Allen Depk',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
            user: 'Juliet Den',
            date: '24 Nov 2018 at 9:30 AM',
            color: 'bg-blue-500'
        },
        {
            type: 'Message',
            title: 'Darren Smith sent new message',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
            user: 'Juliet Den',
            date: '24 Nov 2018 at 9:30 AM',
            color: 'bg-yellow-500'
        }
    ];
            return (
                <div >
                    <NavBar />
                <div className="max-w-4xl mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-4">NOTIFICATIONS</h1>
                    <div className="bg-white shadow-md rounded-lg">
                        {notifications.map((notification, index) => (
                            <div key={index} className="border-b last:border-none p-4 flex items-start">
                                <div className="flex-shrink-0">
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                                <div className="ml-4 flex-grow">
                                    <div className={`inline-block px-2 py-1 text-white text-xs font-bold rounded ${notification.color}`}>
                                        {notification.type}
                                    </div>
                                    <h2 className="mt-2 text-sm font-semibold">{notification.title}</h2>
                                    <p className="text-gray-600 text-xs">{notification.description}</p>
                                    <p className="text-gray-500 text-xs mt-1">{notification.user}</p>
                                </div>
                                <div className="text-gray-400 text-xs">
                                    {notification.date}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
                </div>
       
    )
}

export default Notifications ;