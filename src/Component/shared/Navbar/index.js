/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AJ from "../../../assets/AJLogo.jpg"
import { LOG_OUT } from "../../../redux/actions";
const Navbar = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const logIn=useSelector((state)=>{return state.LogIn})
  return (
    <div><nav className="navbar navbar-expand-lg bg-darkGray text-white w-[100vw]">
      <div className="flex w-[100vw] text-start">
        <div className="w-[50%] ml-5">
        <div className="h-10 !w-10">
          <Link to="/">
              <img src={AJ}  className="h-10 !w-10" alt="Aj Logo"/>

          </Link>

            </div>
        </div>
        <ul className="flex w-[50%] justify-end mr-10 gap-2 items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <Link to="/register">
            <button className=" p-2">Register</button>
          </Link>

          {!logIn?<button className=" p-2" onClick={()=>{navigate('/logIn')}}>LogIn</button>:<button className="p-2" onClick={()=>{dispatch(LOG_OUT())}}>LogOut</button>}
          <Link to="/tickets">
            <button className=" p-2">Tickets</button>
          </Link>

        </ul>
      </div>
    </nav></div>
  )
}
export default Navbar