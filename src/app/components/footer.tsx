import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">NextCommerce</h2>
          <p className="text-gray-400">We sell only the most exclusive and high-quality products for you. Shop with confidence and style!</p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Men</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Women</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Teens</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">123 Fashion Street, NY 10001</p>
          <p className="text-gray-400">Phone: +1 234 567 890</p>
          <p className="text-gray-400">Email: support@nextcommerce.com</p>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">Subscribe to get the latest updates and offers.</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg focus:outline-none text-black"
            />
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-gray-700 pt-4">
        <p className="text-gray-400">&copy; 2025 NextCommerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
