
import CategoryCard from "../category-card/category-card";
import './categories.styles.scss'

const CategoryList = ({categories} ) =>{

    return(
        <div className='categories-container' >
        {categories.map((category)=>(
        <CategoryCard category = {category} key={category.id} />
    ))}
        </div>
    )
}

export default CategoryList;