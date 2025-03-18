
import Wrapper from "../../Components/ShareComponents/Wrapper/Wrapper";
import { useEffect, useState } from "react";
import { MoviesApi } from "../../Services/ProductApi";
import { BiCameraMovie } from "react-icons/bi";
import Product from "../../Components/ShareComponents/Product/Product";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../Components/CoreComponents/Button/Button";
import Input from "../../Components/CoreComponents/input/input";
// import Pagination from "../../Components/CoreComponents/pagination/Pagination";


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
  const [search,setSearch] = useState()
  // const [currentPage,setCurrentPage]=uaseState(1)
  // const [perPage,setPerPage]=useState(10)

  useEffect(() => {
    MoviesApi()      //  Movies (currentPage,perPage)
      .then((response) => {
        setMovies(response.data); 
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setIsLoading(false);
      });
  }, []);  // [currentPage]  for pagination
 
//   useEffect(() => {
//   if (search) { 
//     Movies(currentPage, perPage, search)
//       .then((response) => {
//         setMovies(response.data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error("API Error:", error);
//         setIsLoading(false);
//       });
//   } else {
//     Movies(currentPage, perPage)
//       .then((response) => {
//         setMovies(response.data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error("API Error:", error);
//         setIsLoading(false);
//       });
//   }
// }, [currentPage, search]); 

  const handelSearch = async() => {
    const response = await MoviesApi(search) 
    setMovies(response.data); 
  }

  return (
    <div>

      <Wrapper>
        <div className="flex justify-center">
          <Input className="text-amber-50 md:w-60" type="search" placeholder=" Write your title ..." onChange={(e)=>setSearch(e.target.value)} />
          <Button className="text-amber-50 w-20" onClick={handelSearch}>Search</Button>
        </div>
        {isLoading ? (
          <div className="flex flex-wrap align-middle justify-center items-center h-screen">
  <BiCameraMovie className="text-blue-300 text-5xl" />
</div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="ml-3 mt-5 flex lg:ml-22 flex-wrap gap-5"
          >
            {movies.map((movie) => (
              <motion.div key={movie.id} variants={itemVariants}>
                <Link to={`/movies/${movie.id}`}>
                  <Product {...movie} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* <Pagination 
          pageCount={Movies.pages}
          onPageChange={({selected})=>{setCurrentPage(selected+1)}} />
          <select onChange={(e)=>{setPerPage(e.target.value)}}>
            <optiom value="5">5</optiom>
            <optiom value="10">10</optiom>
            <optiom value="20">20</optiom>
          </select> */}
      </Wrapper>
    </div>
  );
}

export default Movies;



