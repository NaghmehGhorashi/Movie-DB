import CartItem from "../../Components/ShareComponents/CartItem/CartItem";
import { AppContext } from "../../Context/AppContextProvider";
import { useContext } from "react";

function Cart() {
  const { CartItems } = useContext(AppContext);

  return (
    <div>
      {CartItems.length > 0 ? (
        CartItems.map((item) => <CartItem key={item.id} {...item} />)
      ) : (
        <p className="text-white flex justify-center mt-20 text-3xl ">No Item In Cart</p>
      )}
    </div>
  );
}

export default Cart;
