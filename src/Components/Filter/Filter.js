import { useDispatch, useSelector }  from 'react-redux';
import { filterCategory, getSelectedCategory } from '../../redux/dishesSlice'; // импортируем из нашего документа dishesSlice из папки redux
// import Dish from '../DishesComponent/Dish';

const Filter = ({category}) => {

    const dispatch = useDispatch(); // прописываем dispatch как в документации, предварительно импортируем useDispatch
    const selectedCategory = useSelector(getSelectedCategory); // хук useSelector помогает читать состояние getSelectedCategory

    return(
        <div>
            <p onClick={()=> {dispatch(filterCategory(category))}} className={selectedCategory === category ? "categoryButtonSelected categoryButton" : "categoryButton"}>{category}</p> {/**навешиваем класс на тег P , сам стиль прописываем в css. Если категория выбрана, примени стиль .categoryButtonSelected, если нет то примени стиль categoryButton. При клике методом dispatch будет изменено стостояние (фильтрация методом фильтр по выбранной категории) */}
        </div>
    )
}

export default Filter;