import React from "react";
import "./exercise.css";
import { Link } from "react-router-dom";
import ShoulderSVG from "../Svg/shoulder";
import BackSVG from "../Svg/back";
import AbsSVG from "../Svg/abs";
import ArmsSVG from "../Svg/arms";
import ChestSVG from "../Svg/chest";
import GlutesSVG from "../Svg/glutes";
import LegsSVG from "../Svg/legs";
import CardioSVG from "../Svg/cardio";
import TargetSVG from "../Svg/target";

interface CategoryProps {
  id: number;
  name: string;
  category: string;
  muscles: string;
}
function Category(props: CategoryProps) {
  return (
    <Link to={`/exercises/${props.id}`}>
      <div className="exercise-composant">
        <div className="exercise-content">
          {
            {
              Arms: <ArmsSVG />,
              Abs: <AbsSVG />,
              Back: <BackSVG />,
              Cardio: <CardioSVG />,
              Chest: <ChestSVG />,
              Glutes: <GlutesSVG />,
              Legs: <LegsSVG />,
              Shoulder: <ShoulderSVG />,
            }[props.category]
          }
          <div className="exercise-content-section">
            <h3>{props.name}</h3>
          </div>
          <div className="exercise-content-section">
            <TargetSVG />
            <p>{props.muscles}</p>
          </div>
          <div className="exercise-content-section">
            <div>
              <h4>Last Session</h4>
              <p>17/07/97</p>
            </div>
            <div>
              <h4>Record</h4>
              <p>180kg</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Category;
