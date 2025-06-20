import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';

export default function Portfolio() {
    const [selectedItem, setSelectedItem] = useState(null);
    
    // Portfolio items data with image paths
    const portfolioItems = [
        { 
            id: 1, 
            title: 'Cabin', 
            category: 'Web Design',
            image: 'https://routeegy.github.io/startFramework/assets/images/poert1.png'
        },
        { 
            id: 2, 
            title: 'Cake', 
            category: 'Web Development',
            image: 'https://routeegy.github.io/startFramework/assets/images/port2.png' 
        },
        { 
            id: 3, 
            title: 'Circus', 
            category: 'Branding',
            image: 'https://routeegy.github.io/startFramework/assets/images/port3.png'
        },
        { 
            id: 4, 
            title: 'Game', 
            category: 'Mobile App',
            image: 'https://routeegy.github.io/startFramework/assets/images/poert1.png'
        },
        { 
            id: 5, 
            title: 'Safe', 
            category: 'Web Design',
            image: 'https://routeegy.github.io/startFramework/assets/images/port2.png'
        },
        { 
            id: 6, 
            title: 'Submarine', 
            category: 'Web Development',
            image: 'https://routeegy.github.io/startFramework/assets/images/port3.png'
        },
    ];

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <section className="py-5 px-4">
                <div className="max-w-6xl mx-auto text-center"> 
                    <h1 className="text-4xl font-bold text-gray-800 mb-4 uppercase">Portfolio Component</h1>
            
                    <div className="flex justify-center items-center mb-16">
                        <div className="bg-gray-800 h-1 w-16 mr-4"></div>
                        <svg className="w-8 h-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                        <div className="bg-gray-800 h-1 w-16 ml-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {portfolioItems.map((item) => (
                            <div 
                                key={item.id} 
                                className="portfolio-item group relative overflow-hidden rounded-lg cursor-pointer"
                                onClick={() => handleItemClick(item)}
                            >
                                {/* Card with image instead of number */}
                                <div className="w-full h-64 flex items-center justify-center overflow-hidden">
                                    <img 
                                        src={item.image} 
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-[#1abc9c] bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white text-8xl font-bold rounded-2xl">+</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedItem && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-1"
                    onClick={closeModal}
                >
                    <div 
                        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center p-4 border-b">
                            <h3 className="text-xl font-bold">{selectedItem.title}</h3>
                            <button 
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-1 flex flex-col items-center">
                            <img 
                                src={selectedItem.image} 
                                alt={selectedItem.title}
                                className="w-full h-auto max-h-[70vh] object-contain mb-4"
                            />
                            <p className="text-gray-600 mb-2">{selectedItem.category}</p>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}