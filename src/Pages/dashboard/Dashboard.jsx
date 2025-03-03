import Buttom from "../../Components/CoreComponents/Button/Button";
import Textarea from "../../Components/CoreComponents/textarea/textarea";
import Input from "../../Components/CoreComponents/input/input";
import Wrapper from "../../Components/ShareComponents/Wrapper/Wrapper";

function Dashboard() {
    
  return (
    <div>
      <Wrapper>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-amber-50"> 
          <div>
            <label className="block mb-1">Price:</label>
            <Input className="w-60" type="text" name="Price" />
          </div>
          <div>
            <label className="block mb-1">Title:</label>
            <Input className="w-60" type="text" name="original_title" />
          </div>
          <div>
            <label className="block mb-1">Background:</label>
            <Input className="w-60" type="text" name="backdrop_path" />
          </div>
          <div>
            <label className="block mb-1 w-full">Cast photo:</label>
            <Input className="w-60" type="text" name="cast.profile_path" />
          </div>
          <div>
            <label className="block mb-1">Description:</label>
            <Textarea className="w-full h-30" type="text" name="Description" />
          </div>
        </div>
        <Buttom>Submit</Buttom>
      </Wrapper>
    </div>
  );
}

export default Dashboard;

