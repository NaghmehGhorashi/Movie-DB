import Buttom from "../../Components/CoreComponents/Button/Button";
import Textarea from "../../Components/CoreComponents/textarea/textarea";
import Input from "../../Components/CoreComponents/input/input";
import Wrapper from "../../Components/ShareComponents/Wrapper/Wrapper";
import { useState } from "react";

function Dashboard() {
  const [newProduct, setNewProduct] = useState({
    popularity: "",
    backdrop_path: "",
    original_title: "",
    profile_path: "",
    Description: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value, 
    }));
  };

  console.log(newProduct); 

  return (
    <div>
      <Wrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-amber-50">
          <div>
            <label className="block mb-1">Price:</label>
            <Input
              onChange={handelChange} 
              className="w-60"
              type="text"
              name="popularity" 
            />
          </div>
          <div>
            <label className="block mb-1">Title:</label>
            <Input
              onChange={handelChange}
              className="w-60"
              type="text"
              name="original_title"
            />
          </div>
          <div>
            <label className="block mb-1">Background:</label>
            <Input
              onChange={handelChange}
              className="w-60"
              type="text"
              name="backdrop_path"
            />
          </div>
          <div>
            <label className="block mb-1 w-full">Cast photo:</label>
            <Input
              onChange={handelChange}
              className="w-60"
              type="text"
              name="profile_path" // Changed to match state key
            />
          </div>
          <div>
            <label className="block mb-1">Description:</label>
            <Textarea
              onChange={handelChange}
              className="w-full h-30"
              name="Description"
            />
          </div>
        </div>
        <Buttom>Submit</Buttom>
      </Wrapper>
    </div>
  );
}

export default Dashboard;


