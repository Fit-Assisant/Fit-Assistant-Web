import { useEffect, useState } from "react";
import "./exercises_detail.css";
import { useParams } from "react-router-dom";
import ArmsSVG from "../../../components/Svg/arms";
import IdeaSVG from "../../../components/Svg/idea";
interface Muscle {
  id: number;
  name: string;
}

interface Exercise {
  id: number;
  category: number;
  name: string;
  description: string;
  image: string;
  machine: number;
  muscles: Muscle[];
  instructions: string;
  tips: string;
}

function Exercises() {
  const { id } = useParams();
  const [exercise, setExercise] = useState<Exercise>();

  useEffect(() => {
    fetch(`http://localhost:8080/api/exercises/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setExercise(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className={"exercise-detail"}>
      <div className="exercise-content">
        <div className="exercise-content-middle">
          <h1>{exercise?.name}</h1>
          <div className="exercise-content-description">
            <h2>Description</h2>
            <p>{exercise?.description}</p>
          </div>
          <div className="exercise-content-instructions">
            <h2>Instructions</h2>
            <ol>
              {exercise?.instructions.split("\n").map((instruction) => (
                <li>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
        <div className="exercise-content-right">
          <div className="exercise-content-muscles">
            <ArmsSVG />
            <h2>Trained Muscles</h2>
            <ul>
              {exercise?.muscles.map((muscle) => (
                <li>{muscle.name}</li>
              ))}
            </ul>
          </div>
          <div className="exercise-content-tips">
            <IdeaSVG />
            <h2>Tips</h2>
            <ul>
              {exercise?.tips.split("\n").map((tip) => (
                <li>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exercises;
