import React from "react";
import "./category.css";
import { Link } from "react-router-dom";

interface CategoryProps {
  id: number;
  name: string;
}
function Category(props: CategoryProps) {
  return (
    <Link to={`/categories/${props.id}`}>
      <div className="category">
        <h2>{props.name}</h2>
      </div>
    </Link>
  );
}

export default Category;
