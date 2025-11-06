import React from 'react'
import WelcomeMenu from './WelcomeMenu'
import Footer from './Footer'

function Welcome() {
  return (
    <div>
      <WelcomeMenu />
      <img
  src="https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2023/11/Employee-Management-System.png"
  alt="Banner"
  className="w-full mt-2  h-auto object-cover mt-4 rounded-lg shadow-md"
/>

      <Footer />
    </div>
  )
}

export default Welcome
