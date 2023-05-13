import React from "react";
import "./training.css";
import ArmsSVG from "../../Svg/arms";

interface TrainingProps {
  exercises: number;
  categories: Array<Categories>;
  date: string;
}

interface Categories {
  id: number;
  name: string;
}
function Training(props: TrainingProps) {
  return (
    <div className="list-item">
      <h3>{props.date}</h3>
      <div className="list-item-content">
        <div className="list-item-content-exercises">
          <p>{props.exercises}</p>
          <ArmsSVG />
        </div>
        <div className="list-item-content-separator"></div>
        <div className="list-item-content-categories">
          {props.categories.map((category, index) => {
            return <p>{category.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Training;
