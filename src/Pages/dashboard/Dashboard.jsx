import Buttom from "../../Components/CoreComponents/Button/Button"
import Textarea from "../../Components/CoreComponents/textarea/textarea"
import Input from "../../Components/CoreComponents/input/input"
import Wrapper from "../../Components/ShareComponents/Wrapper/Wrapper"


function Dashboard() {
  return (
    <div >
        <Wrapper> 
       <div className="grid grid-cols-4 text-amber-50">
             <Input label="Price:" type="text" name="Price" />
             <Input label="Title:" type="text" name="original_title" />
             <Input label="background:" type="text" name="backdrop_path" />
             <Input label="cast photo:" type="text" name="cast.profile_path" />
             <Textarea label="Description:" type="text" name="Description" />
        </div>
     
      <Buttom>Submit</Buttom>
        </Wrapper>
      
    </div>
  )
}

export default Dashboard


