import { createSlice } from '@reduxjs/toolkit'

export const dishesSlice = createSlice({
    name: 'dishes', // название, нужное для идентификации и передачи данным другим компонентам: в store, 
    initialState: {
        selectedCategory: "SEAFOOD" // первоначальное состояние - выбранная категория - SEAFOOD
    },
    reducers: {
        filterCategory: (state, action) => { // в документации Create a Redux State Slice это действие (это редьюсер) называется incrementByAmount, мы называем filterCategory. reducer filterCategory принимает значение текущего состояния и объекта action. Обьект события содержит два свойства — это тип события (action.type) и значение события (action.value). filterCategory (шаблон) соединяет этот документ с другими документами
            state.selectedCategory = action.payload // состояние state от selectedCategory (выбранная категория, заданное начальное состояние) приравниваем к свойству action.payload, доступное благодаря действию, переданному редьюсеру при его вызове
        }
    }
})

export const getSelectedCategory = state => state.dishes.selectedCategory; // в константу getSelectedCategory прописываем начальное состояние selectedCategory: "SEAFOOD"
export const { filterCategory } = dishesSlice.actions; // экспортируем константу { filterCategory } по примеру в документации и приравниваем ее к намерению actions в dishesSlice
export default dishesSlice.reducer; // 'экспортируем редьюсеры (см документацию Create a Redux State Slice)