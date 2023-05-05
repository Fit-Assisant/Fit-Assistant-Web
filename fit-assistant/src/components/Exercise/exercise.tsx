import React from "react";
import "./exercise.css";
import { Link } from "react-router-dom";

interface CategoryProps {
  id: number;
  name: string;
}
function Category(props: CategoryProps) {
  return (
    <Link to={`/exercises/${props.id}`}>
      <div className="exercise">
        <h2>{props.name}</h2>
      </div>
    </Link>
  );
}

export default Category;
