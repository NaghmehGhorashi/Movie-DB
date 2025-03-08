import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../../Components/ShareComponents/Wrapper/Wrapper";
import { BiCameraMovie } from "react-icons/bi";
import { motion } from "framer-motion";
import {MovieApi} from "../../Services/ProductApi";
import FavoriteIcone from "../../Components/CoreComponents/FavoriteButton/FavoriteButton";
import Button from "../../Components/CoreComponents/Button/Button";
import {useAppContext} from "../../Context/AppContextProvider"



function Movie() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const {IncreaseQty,DecreaseQty,getProductQty} = useAppContext()
 useEffect(() => {
 MovieApi(id)
      .then((response) => {
        console.log("API Response:", response.data);
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
<div className="flex flex-col">
            <img
              src={movie.backdrop_path}
              alt={movie.original_title}
              className="w-full mx-auto border border-amber-50 border-1 rounded-lg shadow-lg"
            />
            <p className="text-white mt-5 text-xl font-bold">{movie.original_title}</p>
         <div className="grid grid-cols-4 mt-8">
          <div className="cols-1  mr-5 ml-5">
             <img
              src={movie.poster_path}
              alt={movie.poster_path}
              className="w-full mx-auto border border-amber-50 border-1 rounded-lg shadow-lg h-50"
            />
          </div>
              {/* //overview */}
              <div className="flex ">
                <div className="cols-1 ">
                <p className="text-gray-400 h-auto w-100 p-3 text-sm text-left border-1 rounded-lg border-amber-50">{movie.overview}</p>
                </div>


           <div className="flex flex-col items-center justify-center  border-1 rounded-lg border-amber-50 ml-5 min-w-60" >
              <p className="text-blue-100 mt-3 text-sm ">Release Date : {movie.release_date}</p>
              <p className="text-blue-100 mt-4 text-sm ">Vote Average : {movie.vote_average}</p>
              <p className="text-blue-100 mt-4 text-sm ">Original Language : {movie.original_language}</p>
               <p className="text-blue-100 mt-4 text-sm ">Original Language : {movie.vote_count}</p>
           </div>


              <div className="flex flex-col items-center justify-center ml-5 min-w-50 border border-amber-50 rounded-lg text-center p-4">
  {/* Price */}
  <div className="flex items-center justify-center gap-3 mt-2">
    <p className="text-blue-100">Price: {movie.popularity}$</p>
    <FavoriteIcone />
  </div>

  {/* Quantity Buttons */}
  <div className="flex items-center justify-center gap-4 mt-6">
    <Button className="text-blue-300 w-8 h-8 flex items-center justify-center" onClick={() => IncreaseQty(id)}>+</Button>
    <span className="text-blue-100">{getProductQty(id)}</span>
    <Button className="text-blue-300 w-8 h-8 flex items-center justify-center" onClick={() => DecreaseQty(id)}>-</Button>
  </div>

  {/* Add Button */}
  <div className="mt-4">
    <Button className="bg-blue-300 px-4 py-2 rounded-lg">Add</Button>
  </div>
</div>

               </div>
             </div>
            </div>


            <div className="flex flex-wrap gap-9 mt-5 border-1 rounded-lg border-amber-50">
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


