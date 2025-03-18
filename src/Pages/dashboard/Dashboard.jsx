import { useState, useEffect } from "react";
import Buttom from "../../Components/CoreComponents/Button/Button";
import Textarea from "../../Components/CoreComponents/textarea/textarea";
import Input from "../../Components/CoreComponents/input/input";
import Wrapper from "../../Components/ShareComponents/Wrapper/Wrapper";
import SelectComponent from "../../Components/CoreComponents/select/select";
import { createProduct } from "../../Services/ProductApi";
import { MoviesApi } from "../../Services/ProductApi";

function Dashboard() {
  const [searchId, setSearchId] = useState("");
  const [id, setId] = useState([]); 
  const [popularity, setPopularity] = useState("");
  const [release_date, setRelease_date] = useState(""); 
  const [original_title, setOriginal_title] = useState(""); 
  const [backdrop_path, setBackdrop_path] = useState(""); 
  const [originalLanguage, setOriginalLanguage] = useState(""); 
  const [overview, setOverview] = useState(""); // Overview state
  const [vote_count, setVote_count] = useState(""); // Vote count state

  const [newProduct, setNewProduct] = useState({
    popularity: "",
    backdrop_path: "",
    original_title: "",
    poster_path: null,
    overview: "",
    original_language: "",
    release_date: "",
    vote_average: null,
    vote_count: null,
    adult: 0,
    created_at: null,
    updated_at: null,
    casts: null,
    movie_id: null
  });

 
  const handelChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };


  const handelCreateProduct = async () => {
    try {
      const result = await createProduct({ ...newProduct });
      console.log(result);
    } catch (error) {
      console.error("Error while creating product:", error);
    }
  };

  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await MoviesApi(); 
        setId(response.data); 
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);


  const handelSearchInput = (e) => {
    setSearchId(e.target.value); // Update search ID value
  };

  
  const handelSearch = () => {
    const searchedItem = id.find((item) => item.id === parseInt(searchId));
    if (searchedItem) {
      setPopularity(searchedItem.popularity);
      setRelease_date(searchedItem.release_date);
      setOriginal_title(searchedItem.original_title);
      setBackdrop_path(searchedItem.backdrop_path);
      setOriginalLanguage(searchedItem.original_language);
      setOverview(searchedItem.overview);
      setVote_count(searchedItem.vote_count);
    } else {
      alert("Movie not found");
    }
  };

  const handelFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setNewProduct((prevProduct) => ({
        ...prevProduct,
        backdrop_path: fileReader.result, 
      }));
    };
    fileReader.readAsDataURL(file); 
  }
};

  return (
    <div>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center justify-center mt-5 text-amber-50">
          <Input
            onChange={handelSearchInput} 
            className="w-80 h-10"
            type="number"
            value={searchId} 
            placeholder="Write id of movie ..."
          />
          <Buttom className="rounded-md h-10 w-20" onClick={handelSearch}>
            Search
          </Buttom>
        </div>

        <div className="grid md:grid-cols-2 mt-15 lg:grid-cols-4 gap-4 text-amber-50">
          <div>
            <label className="block mb-1">Price:</label>
            <Input
              onChange={handelChange} 
              className="w-70 h-10"
              type="text"
              name="vote_count" 
              value={newProduct.vote_count || vote_count} 
            />
          </div>
          <div>
            <label className="block mb-1">Title:</label>
            <Input
              onChange={handelChange}
              className="w-60 h-10"
              type="text"
              name="original_title"
              value={newProduct.original_title || original_title} 
            />
          </div>
        



          <div>
            <label className="block mb-1">Release Date:</label>
            <Input
              onChange={handelChange}
              className="w-60 h-10"
              type="text"
              name="release_date"
              value={newProduct.release_date || release_date} 
            />
          </div>

          <div>
            <label className="block mb-1">Language:</label>
            <SelectComponent
             options={ [
  { value: "1", label: "English" },
  { value: "2", label: "Spanish" },
  { value: "3", label: "Swedish" },
  { value: "4", label: "Finnish" },
  { value: "5", label: "Danish" },
 
 
 
]} 
              value={ [
                { value: "1", label: "English" },
  { value: "2", label: "Spanish" },
  { value: "3", label: "Swedish" },
  { value: "4", label: "Finnish" },
  { value: "5", label: "Danish" },]} 
              onChange={(selected) => {
                setNewProduct((current) => ({
                  ...current,
                  original_language: selected.value
                }));
              }}
            />
          </div>

          <div>
            <label className="block mb-1">Popularity:</label>
          <SelectComponent
  options={[
    { value: "1", label: "8" },
    { value: "2", label: "7" },
    { value: "3", label: "6" },
    { value: "4", label: "5" },
    { value: "5", label: "4" },
    { value: "6", label: "3" },
    { value: "7", label: "2" },
  ]}
  value={
    [
      { value: "1", label: "8" },
      { value: "2", label: "7" },
      { value: "3", label: "6" },
      { value: "4", label: "5" },
      { value: "5", label: "4" },
      { value: "6", label: "3" },
      { value: "7", label: "2" },
    ].find(option => option.value === newProduct.popularity) || null
  }
  onChange={(selected) => {
    setNewProduct((current) => ({
      ...current,
      popularity: selected.value,
    }));
  }}
/>

          </div>





 <div className="flex gap-2 ">


  <div className="flex flex-col  gap-2">
  <label className="block ">Background:</label>
  <Input
    className="w-60 h-10"
    type="text"
    name="backdrop_path"
    value={newProduct.backdrop_path || backdrop_path}
    readOnly
  />
</div>

  
 
<div>  <input
    type="file"
    id="fileUpload"
    onChange={handelFileChange}
    className="hidden"
  />
 <button
    onClick={() => document.getElementById("fileUpload").click()}
    className="bg-orange-500 md:mt-8 text-white px-4 py-2 rounded"
  >
    Upload
  </button></div>
</div>





          <div>
            <label className="block mb-1">Description:</label>
            <Textarea
              onChange={handelChange}
              className="w-[500px] h-30"
              name="overview"
              value={newProduct.overview || overview} 
            />
          </div>




        </div>

        <div className="flex mt-5 justify-center" ><Buttom className="mt-8 rounded-md h-10" onClick={handelCreateProduct}>
          Submit
        </Buttom>
        <Buttom className="mt-8 rounded-md h-10" onClick={handelCreateProduct}>
          Update
        </Buttom></div>
      </Wrapper>
    </div>
  );
}

export default Dashboard;















// import { updateProduct } from "../../Services/ProductApi"; // اضافه کردن API آپدیت

// // بعد از جستجو مقدار newProduct را مقداردهی کنید
// const handelSearch = () => {
//   const searchedItem = id.find((item) => item.id === parseInt(searchId));
//   if (searchedItem) {
//     setNewProduct({
//       popularity: searchedItem.popularity,
//       backdrop_path: searchedItem.backdrop_path,
//       original_title: searchedItem.original_title,
//       poster_path: searchedItem.poster_path || null,
//       overview: searchedItem.overview,
//       original_language: searchedItem.original_language,
//       release_date: searchedItem.release_date,
//       vote_average: searchedItem.vote_average || null,
//       vote_count: searchedItem.vote_count,
//       adult: searchedItem.adult || 0,
//       created_at: searchedItem.created_at || null,
//       updated_at: searchedItem.updated_at || null,
//       casts: searchedItem.casts || null,
//       movie_id: searchedItem.id, // ذخیره ID فیلم
//     });
//   } else {
//     alert("Movie not found");
//   }
// };

// // تابع آپدیت داده‌ها در API
// const handleUpdateProduct = async () => {
//   try {
//     if (!newProduct.movie_id) {
//       alert("Please search for a movie first.");
//       return;
//     }
    
//     const result = await updateProduct(newProduct.movie_id, newProduct);
//     console.log("Updated product:", result);
//     alert("Movie updated successfully!");
//   } catch (error) {
//     console.error("Error while updating product:", error);
//   }
// };

// return (
//   <div>
//     <Buttom className="mt-8 rounded-md h-10" onClick={handleUpdateProduct}>
//       Update
//     </Buttom>
//   </div>
// );
// export const updateProduct = async (id, updatedData) => {
//   return await axios.put(`https://your-api-endpoint/products/${id}`, updatedData);
// };
