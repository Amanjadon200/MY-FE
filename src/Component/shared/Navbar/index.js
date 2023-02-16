/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import AJ from "../../../assets/AJLogo.jpg"
const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg bg-body-tertiary text-black-900 w-[100vw]">
      <div className="flex w-[100vw] text-start">
        <div className="w-[50%] ml-5">
          <Link to="/">
            <div >
              <img src={AJ} className="h-10 w-10" />
            </div>

          </Link>

        </div>
        <ul className="flex w-[50%] justify-end mr-10 gap-2 items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
            <button className="bg-gray-400 p-2">Register</button>
         
         
            <button className="bg-gray-400 p-2">LogIn</button>
          
        </ul>
      </div>
    </nav></div>
  )
}
export default Navbar