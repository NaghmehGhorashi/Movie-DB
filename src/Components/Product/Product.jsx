


function Product(p) {
  return (
    <div className="border border-amber-50 rounded-lg w-40 h-50 p-2">
      <img src={p.movie.poster_path} alt="" className="w-full h-40 object-cover rounded-md" />
      <p className="text-white mt-2 text-center">{p.movie.original_title}</p>
    </div>
  );
}

export default Product;
