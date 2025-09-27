import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 bg-white shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                          <a href="/">
                        <h1 className="text-2xl font-bold text-blue-600 drop-shadow-lg">
                            🎓IELTS Institute
                        </h1>
                        </a>
                    </div>


                   
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Home</a>
                            <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Courses</a>
                            <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">About</a>
                            <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Contact</a>
                        </div>
                    </div>

                  
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-900 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

              
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
                            <a href="#" className="text-gray-900 hover:text-blue-600 block px-3 py-2 font-medium">Home</a>
                            <a href="#" className="text-gray-900 hover:text-blue-600 block px-3 py-2 font-medium">Courses</a>
                            <a href="#" className="text-gray-900 hover:text-blue-600 block px-3 py-2 font-medium">About</a>
                            <a href="#" className="text-gray-900 hover:text-blue-600 block px-3 py-2 font-medium">Contact</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;