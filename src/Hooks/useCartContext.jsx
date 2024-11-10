import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

const useCartContext=()=>{
   return useContext(CartContext)
}
export default useCartContext