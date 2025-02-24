import CartItem from "../../Components/ShareComponents/CartItem/CartItem";
import { AppContext } from "../../Context/AppContextProvider";
import { useContext, useEffect, useState } from "react";
import { MovieApi } from "../../Services/ProductApi";

function Cart() {
  const { CartItems } = useContext(AppContext);
  const[products,setProducts]=useState([])
  
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

 
  return (
    <div>
      {CartItems.length > 0 ? (
        CartItems.map((item) => <CartItem key={item.id} {...item} />)
      ) : (
        <p className="text-white flex justify-center mt-20 text-3xl ">No Item In Cart</p>
      )}
      <p>Total Price: {totalPrice}</p>
    </div>
  );
}

export default Cart;
