
import axios from 'axios';
import React, { useState } from 'react'
import WelcomeMenu from './WelcomeMenu';
import Footer from './Footer';
import { Link, Navigate, useNavigate } from 'react-router-dom';


function Login() {
     
    const navigate= useNavigate();

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })

    const inputHandler = (e) => { 
        const { name, value } = e.target;
        setLoginForm((old) => ({ ...old, [name]: value }))
    }

    const login = (e) => {
        e.preventDefault();

        axios.post("https://employee-crud-zgma.onrender.com/login", { email: loginForm.email, password: loginForm.password })
            .then((response) => {
                if (response.data) {
                navigate("/allemp")

                   
                } else {
                    alert("Invalid Credentials..");
                }
            })
            .catch((error) => {
                console.error(error);
                alert("Something went wrong..");
            });

    }
    return (


        <div
            className="min-h-screen bg-cover bg-center flex flex-col"
            style={{ backgroundImage: "url('/Emp.jpg')" }} 
        >
           
            <header className="w-full">
                <WelcomeMenu />
            </header>

            <main className="flex-1 flex items-center justify-center px-6 ">
                <div className="bg-white/95  shadow-lg rounded-lg p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Sign-in to your account</h2>
                    <form onSubmit={login} className="space-y-6  p-6 m-3">
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={loginForm.email}
                                onChange={inputHandler}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-bold  text-gray-700 mb-1">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={loginForm.password}
                                onChange={inputHandler}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <p>If you are new please register,<Link to='/register' className='text-blue-800 font-medium px-1 py-2 rounded-md transition  hover:text-green-700  '>Register</Link></p>


                        <button
                            type="submit"
                            className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-md transition">
                        
                            Login
                        </button>
                    </form>
                </div>
            </main>

            
            <footer className="w-full">
                <Footer />
            </footer>
        </div>
    )
}

export default Login