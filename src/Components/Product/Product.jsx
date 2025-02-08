
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useState } from "react";



function Product(p) {
  const [IsFavoriteIcon,setIsFavoriteIcon]=useState(false)
  function FavoriteIcone (){
setIsFavoriteIcon(!IsFavoriteIcon)
}
  return (
 
    <div className="border border-amber-50 rounded-lg w-40 h-72  p-2 shadow-md shadow-blue-300">
      <img src={p.movie.poster_path} alt="" className=" w-full h-40 object-contain" />
      <p className="text-white mt-5 text-center">
  {p.movie.original_title.split(' ').slice(0, 2).join(' ')}
</p>
      <div className="flex justify-between">
        <p className="text-white mt-1 text-sm">Price:{p.movie.popularity}$ </p> 
       <p className={`text-md cursor-pointer mt-2 ${IsFavoriteIcon ? "text-rose-700"   :"text-white" }`} onClick={FavoriteIcone}><MdOutlineFavoriteBorder /></p>
      </div>
    <button className="mt-3 text-white border-1 rounded-2xl cursor-pointer w-30 h-8 ml-2.5">Add To Card</button>
    </div>
  );
}

export default Product;
