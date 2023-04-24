import dataDishes from "../../data/dataDishes";
import Dish from "./Dish";
import { useSelector }  from 'react-redux';
import { getSelectedCategory } from '../../redux/dishesSlice'; // импортируем из нашего документа dishesSlice из папки redux

const Dishes = () => {

    const selectedCategory = useSelector(getSelectedCategory); // прописываем хук useSelector помогает читать состояние getSelectedCategory. Передаем информацию о первоначальном состоянии в selectedCategory

    return(
        <div>
            {dataDishes
            .filter( dish => {
                if (selectedCategory === "ALL") return true; // внутри метода filter прописываем, если выбраная категория соответствует "ALL", вернуть значение true (отобразить все блюда)
                return selectedCategory === dish.category; // выбранная категория равна той категории, которую мы прописали в dataDishes
            }
            )
            .map(dish => <Dish dish={dish} key={dish.id}/>)} {/**к dataDishes применяем метод filter() и метод map(), результат применения передаем в компонент Dish через проп dish */}
        </div>
    )
}

export default Dishes;