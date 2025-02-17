import { motion } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function Button({ children, className = "" ,...rest}) {
  return (
    <div>
      <motion.button
        whileHover={{
          scale: 1.04,
          backgroundColor: "rgba(113, 125, 113, 0.8)",
          color: "#fff",
          boxShadow: "0px 0px 15px rgba(0, 191, 255, 0.8)",
        }}
       className={twMerge(clsx(`text-white border rounded-2xl cursor-pointer w-30 h-8 ml-2.5`, className))}
      {...rest}>
        {children}
      </motion.button>
    </div>
  );
}

export default Button;


