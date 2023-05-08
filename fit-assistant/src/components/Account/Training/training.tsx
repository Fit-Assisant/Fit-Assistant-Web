import React from "react";
import "./training.css";

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
          <svg
            version="1.1"
            width="50px"
            height="50px"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path
                d="M141.698,141.549H79.077c-8.488,0-15.37,6.882-15.37,15.362v198.179c0,8.479,6.882,15.362,15.37,15.362h62.622
      c8.489,0,15.371-6.883,15.371-15.362V156.911C157.07,148.431,150.187,141.549,141.698,141.549z"
              />
              <path
                d="M32.374,189.734H12.803C5.736,189.734,0,195.47,0,202.537v106.925c0,7.068,5.736,12.803,12.803,12.803h19.571
      c7.067,0,12.803-5.736,12.803-12.803V202.537C45.177,195.47,39.441,189.734,32.374,189.734z"
              />
              <rect x="177.69" y="228.894" width="156.62" height="54.212" />
              <path
                d="M432.922,141.549h-62.621c-8.488,0-15.371,6.882-15.371,15.362v198.179c0,8.479,6.882,15.362,15.371,15.362
      h62.621c8.488,0,15.371-6.883,15.371-15.362V156.911C448.293,148.431,441.411,141.549,432.922,141.549z"
              />
              <path
                d="M499.197,189.734h-19.57c-7.068,0-12.803,5.736-12.803,12.803v106.925c0,7.068,5.736,12.803,12.803,12.803
      h19.57c7.068,0,12.803-5.736,12.803-12.803V202.537C512,195.47,506.264,189.734,499.197,189.734z"
              />
            </g>
          </svg>
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
