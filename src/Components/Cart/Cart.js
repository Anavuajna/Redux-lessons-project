import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice" // импортирем getCartItems и getTotalPrice из документа cartSlice

const Cart = () => {

    const cartItems = useSelector(getCartItems) // с помощью хука useSelector передаем состояни в cartItems из getCartItems
    const totalPrice = useSelector(getTotalPrice) // с помощью хука useSelector передаем состояни в totalPrice из getTotalPrice


    return(
        <div>
            <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png" alt="cart"/> 
            <h3>TOTAL: $ {totalPrice}</h3> {/**Прописываем общую сумму */}
            {cartItems.map(cartItem =><CartItem cartItem={cartItem}/>)} 
            </div>
    )
}

export default Cart;
// {/**методом map получаем каждый элемент и приравниваем его к компоненту <CartItem>, используем cartItem в качестве пропса*/}