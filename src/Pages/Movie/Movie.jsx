import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../../Components/ShareComponents/Wrapper/Wrapper";
import { BiCameraMovie } from "react-icons/bi";
import { motion } from "framer-motion";
import {MovieApi} from "../../Services/ProductApi";
import FavoriteIcone from "../../Components/CoreComponents/FavoriteButton/FavoriteButton";
import Button from "../../Components/CoreComponents/Button/Button";



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
              src={movie.backdrop_path}
              alt={movie.original_title}
              className="w-full mx-auto borde border-amber-50 border-1 rounded-lg shadow-lg"
            />
            <p className="text-white mt-5 text-xl font-bold">{movie.original_title}</p>
            <p className="text-gray-400 h-auto w-80 mt-2 p-3 font-thin text-left border-1 rounded-lg border-amber-50">{movie.overview}</p>
     
             
            <FavoriteIcone />
            <Button />
            <div className="flex flex-wrap gap-9">
            { movie.casts.slice(0,12).map((cast) => (
    <div key={cast.id} className="text-center mt-4">
     
      <img
        src={cast.profile_path ? cast.profile_path : "https://via.placeholder.com/100"}
        alt={cast.name}
        className="w-20 h-20 borde border-amber-50 border-1  mx-auto"
      />
       <p className="text-white mt-2">{cast.name}</p>
    </div>
    

))}</div>

          </motion.div>
        ) : (
          <p className="text-white text-center mt-10">Movie not found</p>
        )}
      </Wrapper>
    </div>
  );
}

export default Movie;



