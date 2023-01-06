

import './category-card.styles.scss'

const CategoryCard = ({category}) => {
    const {title,imageUrl} = category
    return(
        <div className="category-container" >
        <div className="background-image" style={{
          'backgroundImage':`url(${imageUrl})`
        }}></div>
        <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
        </div>
        </div>
    )
}

export default CategoryCard;