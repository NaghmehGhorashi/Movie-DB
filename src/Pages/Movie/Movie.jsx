import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../../Components/ShareComponents/Wrapper/Wrapper";
import { BiCameraMovie } from "react-icons/bi";
import { motion } from "framer-motion";
import { MovieApi } from "../../Services/ProductApi";
import FavoriteIcone from "../../Components/CoreComponents/FavoriteButton/FavoriteButton";
import Button from "../../Components/CoreComponents/Button/Button";
import { useAppContext } from "../../Context/AppContextProvider";
import { Rating } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";


function Movie() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const { IncreaseQty, DecreaseQty, getProductQty } = useAppContext();

  useEffect(() => {
    MovieApi(id)
      .then((response) => {
        setMovie(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setIsLoading(false);
      });
  }, [id]);

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
              alt={movie.backdrop_path}
              className="h-80 md:h-150 md:w-full border border-orange-400 rounded-lg shadow-lg"
            />
            <p className="text-white mt-5 text-xl font-bold">{movie.original_title}</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">
              <div>
                <img
                  src={movie.poster_path}
                  alt={movie.poster_path}
                  className="w-full border border-orange-400  rounded-lg shadow-lg"
                />
              </div>
              <div>
                <p className="text-gray-400 p-3 text-sm text-left border  border-orange-400 rounded-lg">
                  {movie.overview}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center border  border-orange-400 rounded-lg p-4">
                <p className="text-blue-100 text-sm">Release Date: {movie.release_date}</p>
                <p className="text-blue-100 text-sm">Vote Average: {movie.vote_average}</p>
                <p className="text-blue-100 text-sm">Original Language: {movie.original_language}</p>
                <p className="text-blue-100 text-sm">Vote Count: {movie.vote_count}</p>
                <Rating
  name="half-rating"
  defaultValue={4}
  precision={0.5}
  sx={{
    "& .MuiRating-icon": {
      color: "#FFA500", 
      
    },
  }}
/>
<AvatarGroup  max={4}>
  <Avatar alt="Remy Sharp" src="" />
  <Avatar alt="Travis Howard" src="" />
  <Avatar alt="Cindy Baker" src="" />
  <Avatar alt="Agnes Walker" src="/" />
  <Avatar alt="Trevor Henderson" src="" />
</AvatarGroup>
              </div>
              <div className="flex flex-col items-center justify-center border  border-orange-400 rounded-lg p-4">
                <div className="flex items-center justify-center gap-3 mt-2">
                  <p className="text-blue-100">Price: {movie.popularity}$</p>
                  <FavoriteIcone />
                </div>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <Button className="text-blue-300 w-8 h-8 flex items-center justify-center" onClick={() => IncreaseQty(id)}>+</Button>
                  <span className="text-blue-100"> {getProductQty(id)}</span>
                   <Button className="text-blue-300 w-8 h-8 flex items-center justify-center" onClick={() => DecreaseQty(id)}>-</Button>
                </div>
                <Button className="bg-blue-300 px-4 rounded-lg mt-4">Add</Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-5 border  border-orange-400 rounded-lg p-4">
              {movie.casts?.slice(0, 12).map((cast) => (
                <div key={cast.id} className="text-center">
                  <img
                    src={cast.profile_path || "https://via.placeholder.com/100"}
                    alt={cast.name}
                    className="w-20 h-20 border border-orange-400 rounded-full mx-auto"
                  />
                  <p className="text-white mt-2">{cast.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <p className="text-white text-center mt-10">Movie not found</p>
        )}
      </Wrapper>
    </div>
  );
}

export default Movie;

