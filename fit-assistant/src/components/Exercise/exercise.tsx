import React from "react";
import "./exercise.css";
import { Link } from "react-router-dom";
import ShoulderSVG from "../Svg/shoulder";

interface CategoryProps {
  id: number;
  name: string;
}
function Category(props: CategoryProps) {
  return (
    <Link to={`/exercises/${props.id}`}>
      <div className="exercise">
        <div className="exercise-content">
          <ShoulderSVG />
          <h3>{props.name}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Category;
