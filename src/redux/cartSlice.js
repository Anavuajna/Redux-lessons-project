import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
    name: 'cart', // название, нужное для идентификации и передачи данным другим компонентам: в store, 
    initialState: {
        cartItems: [] // первоначальное состояние - пустой массив
    },
    reducers: {
        addItemToCart: (state, action) => { // 
            const timeId = new Date().getTime() // для того чтобы можно было удалять из корзины каждое блюдо отдельно вводим timeId, чтобы отслеживать время добавления товара в корзину
            state.cartItems.push({ // методом push добавляем по id товар в конец массива
                id: timeId, // для папраметра Id прописываем timeId
                dishId: action.payload.dish.id, // dishId имеет значение, которое мы берем из dataDishes в поле id
                quantity: action.payload.quantity, // количество порций
                totalPrice: action.payload.quantity * action.payload.dish.price // прописываем формулу для общей суммы
            })
            console.log(timeId)
    },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            )
        }
}
})



export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
    },0)
} // используем для передачи данных об общей сумме в Cart

export const getCartItems = state => state.cart.cartItems; //
export const { addItemToCart, removeItemFromCart } = cartSlice.actions; // экспортируем addItemToCart и removeItemFromCart для использования в других документах
export default cartSlice.reducer; // 