import { Link, useLocation } from "react-router-dom"

import { FaOpencart } from "react-icons/fa6";
import { SiThemoviedatabase } from "react-icons/si";
import { motion } from "framer-motion";
import { useAppContext } from "../../../Context/AppContextProvider";
import Cookies from "js-cookie";
import { useEffect,useState } from "react";


const lineVariant = {
  hidden: { opacity:0, x: "100%" }, 
  visible: { opacity: 1, x: "0%", transition: { duration:0.9 } },
};
function Navbar() {
const _location=useLocation()
const {cartQty}=useAppContext()
const [isLogin,setIsLogin]=useState(false)

useEffect( ()=>{
  Cookies.get("token")
  Cookies.get("token") && setIsLogin(true)
},[])

 const handelLogout =()=>{
 Cookies.remove("token")
 location.reload()
 }


  return (
    <>
 <div className="mt-5 open-sans-body grid grid-cols-6 items-center">
  <motion.div 
    initial={{y:-200}} 
    animate={{y:-8}} 
    transition={{delay:0.8, duration:1, type:"spring", stiffness:100}} 
    className="text-white text-6xl col-span-1 ml-8">
    <SiThemoviedatabase />
  </motion.div>

  <div className="col-span-4 flex justify-center">
    <ul className="flex mt-2 text-lg space-x-6">
      <Link to="/dashboard" className={_location.pathname === "/dashboard" ? "text-white" : "text-blue-300"  }>Dashboard</Link>
      <Link to="/" className={_location.pathname === "/" ? "text-white" : "text-blue-300"}>Home</Link>
      <Link to="/movies" className={_location.pathname === "/movies" ? "text-white" : "text-blue-300 "}>Movie</Link>
      <Link to="/category" className={_location.pathname === "/category" ? "text-white" : "text-blue-300"  }>Category</Link>
    </ul>
  </div>

  <div className="col-span-1 flex justify-end pr-8">
   
      <Link to="/cart" className="relative "><FaOpencart className="w-8 h-8 text-white" />
      {cartQty() > 0 && (
  <span className="bg-rose-700 text-sm text-amber-50 absolute size-4.5 text-center -top-3 rounded-full -right-3">
    {cartQty()}
  </span>
)} </Link>


    {isLogin ? 
    <button onClick={handelLogout} className=" text-sm text-white ml-4" >Logout</button> :
    <Link to="/login" className="text-sm mt-2 text-white ml-4" >Login</Link>}

  </div>
</div>

              <motion.div variants={lineVariant} initial="hidden" animate="visible">
      <motion.hr className="border-t-2 border-white w-full" />
    </motion.div>


    </>
  );
}



export default Navbar







