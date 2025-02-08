import Navbar from "../../Components/Navbar/Navbar";
import Wrapper from "../../Components/Wrapper/Wrapper";
import { useEffect, useState } from "react";
import { MoviesApi } from "../../Services/ProductApi";
import { BiCameraMovie } from "react-icons/bi";
import Product from "../../Components/Product/Product";
import { Link } from "react-router-dom";
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

function Movies() {
  const [movies, setMovies] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    MoviesApi()
      .then((response) => {
        setMovies(response.data); 
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Wrapper>
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
  <BiCameraMovie className="text-blue-300 text-5xl" />
</div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="ml-3 mt-5 flex flex-wrap gap-5"
          >
            {movies.map((movie) => (
              <motion.div key={movie.id} variants={itemVariants}>
                <Link to={`/product/${movie.id}`}>
                  <Product {...movie} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </Wrapper>
    </div>
  );
}

export default Movies;



