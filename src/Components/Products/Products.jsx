import Product from "../Product/Product";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }, 
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: "-50%" }, 
  visible: { opacity: 1, x: "0%", transition: { duration: 0.9 } }, 
};

function Products() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="ml-3 mt-5 flex flex-wrap gap-5"
    >
      {[...Array(35)].map((_, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Product />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Products;

