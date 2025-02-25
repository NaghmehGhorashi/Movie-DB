import Input from "../../Components/CoreComponents/input/input"
import Button from "../../Components/CoreComponents/Button/Button"


function Login() {
  return (
<div className="flex justify-center">
      <div className="flex flex-col items-center border border-amber-50 mt-50 w-80 h-40">
     
      <p className="text-amber-50">Login</p>
      <Input className="mt-2 bg-amber-50 " type="text"/>
      <Input className="mt-2 bg-amber-50" type="password"/>
      <Button className="mt-3">Submit</Button>
     
   
  </div>
</div>
  )
}

export default Login
