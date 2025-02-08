import { Link, useLocation } from "react-router-dom"
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaOpencart } from "react-icons/fa6";
import { SiThemoviedatabase } from "react-icons/si";
import { motion } from "framer-motion";


// import style from "./Navbar.module.css"


const lineVariant = {
  hidden: { opacity:0, x: "100%" }, 
  visible: { opacity: 1, x: "0%", transition: { duration:0.9 } },
};





function Navbar() {
const location=useLocation()

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
      <Link to="/" className={location.pathname === "/" ? "text-white" : "text-cyan-800"}>Home</Link>
      <Link to="/music" className={location.pathname === "/music" ? "text-white" : "text-cyan-800 "}>Music</Link>
      <Link to="/category" className={location.pathname === "/category" ? "text-white" : "text-cyan-800"  }>Category</Link>
    </ul>
  </div>

  <div className="col-span-1 flex justify-end pr-8">
    <Link to="/"><FaOpencart className="w-8 h-8 text-white" /></Link>
    <Link to="/"><MdOutlineAccountCircle className="w-8 h-8 text-white ml-4" /></Link>
  </div>
</div>



      
             
         
        
        
       
              <motion.div variants={lineVariant} initial="hidden" animate="visible">
      <motion.hr className="border-t-2 border-white w-full" />
    </motion.div>






        {/* //     initial={{y:-200}}
        //  animate={{y:-8}}
        //  transition={{delay:1 ,duration:1 ,type:"spring",stiffness:100}}/> */}


    </>
  );
}



export default Navbar







// className={style.navbar}