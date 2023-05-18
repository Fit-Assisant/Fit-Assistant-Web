import React from "react";
import "./program.css";
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

interface ProgramProps {
  id: number;
  name: string;
  description: string;
  user: number;
  exercises: Array<Series>;
}

interface Series {
  program: number;
  exercise: number;
  sorting: number;
  duration: number | null;
  repetitions: number;
  series: number;
  intensity: number;
  details: Exercise;
}

interface Exercise {
  id: number;
  name: string;
  category: Category;
  description: string;
  image: string;
  machine: number;
  instructions: string;
  tips: string;
}

interface Category {
  id: number;
  name: string;
}

function Program(props: ProgramProps) {
  // console.log(props);
  const categories = Array<Category>();
  props.exercises.map((serie) => {
    if (!categories.includes(serie.details.category)) {
      categories.push(serie.details.category);
    }
  });
  console.log(categories);
  return (
    <Link to={`/programs/${props.id}`}>
      <div className="program-composant">
        <div className="program-content">
          <ArmsSVG />
          {categories.slice(0, 3).map(
            (category) =>
              ({
                Arms: <ArmsSVG />,
                Abs: <AbsSVG />,
                Back: <BackSVG />,
                Cardio: <CardioSVG />,
                Chest: <ChestSVG />,
                Glutes: <GlutesSVG />,
                Legs: <LegsSVG />,
                Shoulder: <ShoulderSVG />,
              }[category.name])
          )}
          {/* {
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
          } */}
          <div className="program-content-section">
            <h3>{props.name}</h3>
          </div>
          <div className="program-content-section">
            <p>{props.description}</p>
          </div>
          <div className="program-content-section">
            <div>
              <h4>Exercises</h4>
              <p>{props.exercises.length}</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Program;
