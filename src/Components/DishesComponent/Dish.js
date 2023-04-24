import { useState } from "react";
import {  useDispatch } from 'react-redux';
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";


const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1); // для добавления количества порций задаем первоначальное состояние 1
    const dispatch = useDispatch() // прописываем и устанавливаем useDispatch как в документации
    
    return (
        <div key={dish.id}>
            <img src={`${dish.img}.jpg`} alt="dish"/> {/**прописываем путь src таким образом, чтобы получить доступ к изображению, которое лежит в папке public через поле img, прописанное в dataDishes.js */}
            <h2>{dish.name}</h2>
            <p>$ {dish.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/> {/**используем quantity в качестве пропса, setQuantity также передаем в качестве пропса */}
            <button onClick={() => {dispatch(addItemToCart({dish, quantity}))}}>Add to cart</button> {/* в Онклик прописываем метод dispatch, addItemToCart из cartSlice и {dish, quantity} в качестве свойств*/}
        </div>
    )
}

export default Dish;