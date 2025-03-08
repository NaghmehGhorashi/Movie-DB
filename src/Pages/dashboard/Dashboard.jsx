import Buttom from "../../Components/CoreComponents/Button/Button";
import Textarea from "../../Components/CoreComponents/textarea/textarea";
import Input from "../../Components/CoreComponents/input/input";
import Wrapper from "../../Components/ShareComponents/Wrapper/Wrapper";
import { useState } from "react";
import SelectComponent from "../../Components/CoreComponents/select/select";
import {createProduct} from "../../Services/ProductApi"

function Dashboard() {
  const [newProduct, setNewProduct] = useState({
    popularity: "",
    backdrop_path: "",
    original_title: "",
    poster_path: null,
    overview: "",
    original_language: "",
    // eslint-disable-next-line no-dupe-keys
    popularity :"",
    // eslint-disable-next-line no-dupe-keys
    backdrop_path:"",
    release_date:"",
     vote_average: null,
    vote_count: null,
     adult: 0,
    created_at: null,
    updated_at: null,
    casts:null,
    movie_id: null
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value, 
    }));
  };
console.log(newProduct)

const originalLanguage = [
  { value: "1", label: "English" },
  { value: "2", label: "Spanish" },
  { value: "3", label: "Swedish" },
  { value: "4", label: "Finnish" },
  { value: "5", label: "Danish" },
 
 
 
];
const popularity = [
  { value: "1", label: "8" },
  { value: "2", label: "7" },
  { value: "3", label: "6" },
  { value: "4", label: "5" },
  { value: "5", label: "4" },
  { value: "6", label: "3" },
  { value: "7", label: "2" },
 
];

const handelCreateProduct = async () => {
  try {
    const result = await createProduct({ ...newProduct }); 
    console.log(result); 
  } catch (error) {
    console.error("Error while creating product:", error);
  }
};


  return (
    <div>
      <Wrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-amber-50">
          <div>
            <label className="block mb-1">Price:</label>
            <Input
              onChange={handelChange} 
              className="w-60 h-10"
              type="text"
              name="popularity" 
            />
          </div>
          <div>
            <label className="block mb-1">Title:</label>
            <Input
              onChange={handelChange}
              className="w-60 h-10"
              type="text"
              name="original_title"
            />
          </div>
          <div>
            <label className="block mb-1">Background:</label>
            <Input
              onChange={handelChange}
              className="w-60 h-10"
              type="text"
              name="backdrop_path"
            />
          </div>
          <div>
            <label className="block mb-1 w-full">Release Date:</label>
            <Input
              onChange={handelChange}
              className="w-60 h-10"
              type="text"
              name="release_date"
            />
          </div>
        
        <div>  
          <label className="block mb-1">Series or Film</label>
           <SelectComponent
        options={originalLanguage}
       onChange={(selected) =>{
        console.log(selected)
  setNewProduct((current) => ({
    ...current,
    original_language: selected.value
  }))
}}

      
      />
     </div>

      <div>  
          <label className="block mb-1">Popularity</label>
           <SelectComponent
        options={popularity}
              onChange={(selected) =>{
             console.log(selected)
  setNewProduct((current) => ({
    ...current,
    popularity: selected.value
  }))
}}
       
      />
      </div>
    
      <div>
            <label className="block mb-1">Description:</label>
            <Textarea
              onChange={handelChange}
              className="w-[500px] h-30"
              name="overview"
            />
          </div>
        </div>

        <Buttom className="mt-8 rounded-md h-10" onClick={handelCreateProduct}>Submit</Buttom>
      </Wrapper>
    </div>
  );
}

export default Dashboard;


