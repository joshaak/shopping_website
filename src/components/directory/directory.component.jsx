import categories from "../../categories";
import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";
const DirectoryItem = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default DirectoryItem;
