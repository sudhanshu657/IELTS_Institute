
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-gray-300 py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
  
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Your trusted partner in achieving IELTS success. We've helped thousands of students reach their target scores with personalized guidance and proven methods.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-400 text-sm">info@ieltspro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-400 text-sm">123 Education St, Learning City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-light mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 text-sm hover:text-blue-400 transition duration-300 hover:translate-x-1 transform">
                About Us
              </a>
              <a href="#" className="block text-gray-400 text-sm hover:text-blue-400 transition duration-300 hover:translate-x-1 transform">
                Our Courses
              </a>
              <a href="#" className="block text-gray-400 text-sm hover:text-blue-400 transition duration-300 hover:translate-x-1 transform">
                Mock Tests
              </a>
              <a href="#" className="block text-gray-400 text-sm hover:text-blue-400 transition duration-300 hover:translate-x-1 transform">
                Success Stories
              </a>
              <a href="#" className="block text-gray-400 text-sm hover:text-blue-400 transition duration-300 hover:translate-x-1 transform">
                Contact
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white text-lg font-light mb-6">Resources</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 text-sm hover:text-blue-400 transition duration-300 hover:translate-x-1 transform">
                Study Materials
              </a>
              <a href="#" className="block text-gray-400 text-sm hover:text-blue-400 transition duration-300 hover:translate-x-1 transform">
                Practice Tests
              </a>
              <a href="#" className="block text-gray-400 text-sm hover:text-blue-400 transition duration-300 hover:translate-x-1 transform">
                Score Calculator
              </a>
              <a href="#" className="block text-gray-400 text-sm hover:text-blue-400 transition duration-300 hover:translate-x-1 transform">
                Tips & Guides
              </a>
              <a href="#" className="block text-gray-400 text-sm hover:text-blue-400 transition duration-300 hover:translate-x-1 transform">
                FAQ
              </a>
            </div>
          </div>
        </div>

       
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
            {/* Social Icons */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <span className="text-gray-400 text-sm text-center sm:text-left">Follow us:</span>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition duration-300 transform hover:scale-110">
                  <Facebook size={16} className="text-gray-400 hover:text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition duration-300 transform hover:scale-110">
                  <Twitter size={16} className="text-gray-400 hover:text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition duration-300 transform hover:scale-110">
                  <Instagram size={16} className="text-gray-400 hover:text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300 transform hover:scale-110">
                  <Linkedin size={16} className="text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>

        
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <span className="text-gray-400 text-sm text-center sm:text-left">Stay updated:</span>
              <div className="flex w-full sm:w-auto max-w-sm">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-gray-800 text-gray-300 text-sm px-4 py-2 rounded-l-lg border border-gray-700 focus:outline-none focus:border-blue-400 transition duration-300 flex-1 sm:w-48"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg text-white text-sm transition duration-300 flex-shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

   
        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 IELTS Institute. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-blue-400 transition duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition duration-300">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;