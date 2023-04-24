import dataDishes from "../../data/dataDishes";
import {  useDispatch } from 'react-redux';
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => { // передаем информацию о каждом элемента из Cart.js через проп cartItem
    console.log(cartItem)
    
    const dishes = dataDishes.find(item => item.id === cartItem.dishId) // вводим константу, в которой будет отражено если item.id (берем из dataDishes) соответствует cartItem.dishId (bp документа Cart.j) отобрази его его название в p через dishes.name
    console.log(dishes)

    const dispatch = useDispatch() // прописываем и устанавливаем useDispatch как в документации
    return(
        <div key={cartItem.id}>
            <p>{dishes.name}</p> {/**значение name из dishes */}
            <p>{cartItem.quantity} portions</p>
            <p>Price: ${dishes.price * cartItem.quantity}</p> {/**отображаем сумму за одинаковыце блюда */}
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="basket"/>
            </span> 
        </div>
    )

}

export default CartItem;