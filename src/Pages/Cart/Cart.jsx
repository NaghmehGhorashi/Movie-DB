import CartItem from "../../Components/ShareComponents/CartItem/CartItem";
import { AppContext } from "../../Context/AppContextProvider";
import { useContext, useEffect, useState } from "react";
import { MovieApi } from "../../Services/ProductApi";
import {checkDiscount} from "../../Services/ProductApi"
import Input from "../../Components/CoreComponents/input/input";
import Button from "../../Components/CoreComponents/Button/Button";

function Cart() {
  const { CartItems } = useContext(AppContext);
  const[products,setProducts]=useState([])
  const[discountCode,setDiscountCode]=useState("")
  const [discountAmount, setDiscountAmount] = useState(0);


  useEffect( ()=>{
    MovieApi.then( (respond)=>{
      let data=respond.data
      setProducts(data)
    })
    .catch( (error)=>(console.log("error",error)))
  },[])


  let totalPrice=CartItems.reduce( (total,item)=>{
    let selectedProduct=products.find((_item)=>(_item.id==item.id))
    return total + ((selectedProduct?.price ?? 0)* item.qty)
  },0)

 const submitDiscount = async() => {
  const discountValue = await checkDiscount(discountCode);
  if (discountValue) {
    setDiscountAmount(discountValue.percent); 
  } else {
    alert("Invalid discount code"); 
  }
};
 
  return (
    <div>
      {CartItems.length > 0 ? (
        CartItems.map((item) => <CartItem key={item.id} {...item} />)
      ) : (
        <p className="text-white flex justify-center mt-20 text-3xl ">No Item In Cart</p>
      )}
      <p>Total Price: {totalPrice}</p>
      <p>Discount: <span>{parseInt(totalPrice)* discountAmount/100}</span> </p>
      <div className="flex">
        <Input onchange={(e)=>setDiscountCode(e.target.value)} placeholder="write your code"/>
        <Button onclick={submitDiscount}/>
      </div>
    </div>
  );
}

export default Cart;
