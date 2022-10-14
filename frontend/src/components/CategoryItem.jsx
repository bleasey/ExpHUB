import { selectUser } from "../features/user";
import { useSelector } from "react-redux";
import { AiFillDelete, AiOutlineQuestion } from "react-icons/ai";
import { Link } from "react-router-dom";

const CategoryItem = ({ category,handleDelete }) => {
  const user = useSelector(selectUser)
  return (
    <div className="p-2 border-l-4 border-orange-300 hover:border-orange-600 shadow-md  flex items-center justify-between">
      <p className="text-lg text-orange-500 cursor-pointer px-2">{category.name.toUpperCase()}</p>
      {user.role=='ADMIN' && (
        <p className="text-lg flex space-x-2">
          <abbr title="See all questions">
            <Link to={`/admin/questions/${category._id}`}>
            <AiOutlineQuestion className="cursor-pointer"/>
            </Link>
          </abbr>
          <abbr title="delete">
          <AiFillDelete className="cursor-pointer" onClick={handleDelete}/>
          </abbr>
        </p>
      )}
    </div>
  );
};
export default CategoryItem;
