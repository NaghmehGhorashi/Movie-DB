import { motion } from "framer-motion";
import clsx from "clsx";

function Button({ children, className = "" }) {
  return (
    <div>
      <motion.button
        whileHover={{
          scale: 1.04,
          backgroundColor: "rgba(113, 125, 113, 0.8)",
          color: "#fff",
          boxShadow: "0px 0px 15px rgba(0, 191, 255, 0.8)",
        }}
        className={clsx(
          "text-white border-1 rounded-2xl cursor-pointer w-30 h-8 ml-2.5",
          className
        )}
      >
        {children}
      </motion.button>
    </div>
  );
}

export default Button;

