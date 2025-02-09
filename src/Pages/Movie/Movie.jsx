import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Wrapper from "../../Components/Wrapper/Wrapper";
import { BiCameraMovie } from "react-icons/bi";
import { motion } from "framer-motion";
import {MovieApi} from "../../Services/ProductApi";



function Movie() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {


    MovieApi(id)
      .then((response) => {
        setMovie(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("API Error:",error);
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
        ) : movie ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <img
              src={movie.poster_path}
              alt={movie.original_title}
              className="w-60 mx-auto rounded-lg shadow-lg"
            />
            <p className="text-white mt-5 text-xl font-bold">{movie.original_title}</p>
            <p className="text-gray-400 mt-2">{movie.overview}</p>
          </motion.div>
        ) : (
          <p className="text-white text-center mt-10">Movie not found</p>
        )}
      </Wrapper>
    </div>
  );
}

export default Movie;



