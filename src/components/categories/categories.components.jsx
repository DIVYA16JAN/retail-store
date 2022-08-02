import CategoryItem from './../category-item/category-item.components';
import './categories.styles.scss';

const Categories = ({categories}) => {

    const categoriesList = categories;
    return (
        <div className="categories-container">
            {categories.map((category) => {
                return (<CategoryItem category={category} key={category.id} />);
            })}
        </div>
    );
};

export default Categories;