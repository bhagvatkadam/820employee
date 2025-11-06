import React from 'react'


function WelcomeMenu() {
  return (
    <nav className="flex justify-between items-center bg-gray-100 px-6 py-3 shadow-md">
      {}
      <div className="text-2xl font-bold text-blue-600">
        Employee
      </div>

      {}
      <ul className="flex space-x-6">
          <li>
          <a
            href="/"
             class="bg-yellow-400   text-black px-3 py-1 rounded-md   hover:bg-yellow-300 transition">
          
            Home
          </a>
        </li>

        <li>
      
          <a
            href="/login"
             class="bg-yellow-400   text-black px-3 py-1 rounded-md   hover:bg-yellow-300 transition">
          
            Login
          </a>
        </li>
        
        <li>
          <a
            href="/register"
             class="bg-yellow-400   text-black px-3 py-1 rounded-md   hover:bg-yellow-300 transition"
          >
            Register
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default WelcomeMenu;
