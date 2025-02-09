import { motion } from "framer-motion";
import FavoriteButton from "../../Components/FavoritIcone/FavoritIcone"; 
import Button from "../Button/Button";

function Product({ poster_path, original_title, popularity }) {
  return (
    <motion.div
      whileHover={{
        scale: 0.98,
        backgroundColor: "rgba(113, 125, 113, 0.8)",
        color: "#fff",
        boxShadow: "0px 0px 15px rgba(0, 191, 255, 0.8)",
      }}
      className="border border-amber-50 rounded-lg w-40 h-75 p-2 shadow-md shadow-blue-300"
    >
      <img src={poster_path} alt="" className="w-full h-40 object-contain" />
      <p className="text-white mt-5 text-center">
        {original_title.split(" ").slice(0, 2).join(" ")}
      </p>
      <div className="flex justify-between">
        <p className="text-white mt-1 text-sm">Price: {popularity}$</p>
        <div className="mt-1.5"><FavoriteButton /></div>
      </div>
   <div className="mt-3"> <Button /></div>
    </motion.div>
  );
}

export default Product;
