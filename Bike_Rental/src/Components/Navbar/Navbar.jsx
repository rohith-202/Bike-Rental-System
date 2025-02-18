import React from 'react'

export const Navbar = () => {
  return (
    <>
    <nav className="shadow-sm">
      <div className="container">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-bold">Home</h1>
          </div>
          <div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar