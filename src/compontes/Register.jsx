
 import axios from 'axios';
import React, { useState } from 'react'
import WelcomeMenu from './WelcomeMenu';
import Footer from './Footer';

function Register() {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: ""
  })

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setRegisterForm((old) => ({ ...old, [name]: value }))
  }

  const register = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://employee-crud-zgma.onrender.com/register", {
        name: registerForm.name,
        email: registerForm.email,
        password: registerForm.password
      });

      console.log('Register response:', response.data);

      // Adjust condition based on your API response shape
      if (response.data && response.data.success !== false) {
        alert("Registration Successful! Please login");
        setRegisterForm({ name: "", email: "", password: "" });
      } else {
        alert(response.data?.message || "Invalid credentials.");
      }
    } catch (error) {
      console.error(error)
      alert(error.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/Emp.jpg')" }}
    >
      {/* Top fixed header */}
      <header className="w-full">
        
          <WelcomeMenu />
    
      </header>

      {/* Main content - center form */}
      <main className="flex-1 flex items-center justify-center pt-20 pb-20">
        <div className="w-full max-w-md mx-4">
          <div className="bg-white/95 shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Register</h2>
            <form onSubmit={register} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={registerForm.name}
                  onChange={inputHandler}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={registerForm.email}
                  onChange={inputHandler}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-1">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={registerForm.password}
                  onChange={inputHandler}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <p>
                If you are already registered, please
                <a href="/login" className='text-blue-800 font-bold px-1 py-2 rounded-md transition  hover:text-green-700  '>Login</a>
              </p>

              <button
                type="submit"
                className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition-colors"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Bottom fixed footer */}
      <footer className="w-full">
     
          <Footer />
        
      </footer>
    </div>
  )
}

export default Register