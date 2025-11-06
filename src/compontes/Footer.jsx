import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">MyBrand</h2>
          <p className="text-gray-400 text-sm">
            Building the best web experiences with modern tools and beautiful
            design. Let's make the web better together.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Docs</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">API</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;



