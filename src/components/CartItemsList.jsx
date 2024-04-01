import { useSelector } from "react-redux/es/hooks/useSelector"
import CartItem from "./CartItem"

function CartItemsList() {
    const cartItems = useSelector((state)=>state.cartState.cartItems)
  return (
    <>{cartItems.map((item)=>{
        return <CartItem key={item.cartID} cartItem={item} />
    })}</>
  )
}

export default CartItemsList