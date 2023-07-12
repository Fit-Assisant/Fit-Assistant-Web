import { useEffect, useState } from "react";
import "./exercises_detail.css";
import { Link, useParams } from "react-router-dom";
import ArmsSVG from "../../../components/Svg/arms";
import IdeaSVG from "../../../components/Svg/idea";
interface Muscle {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
}
interface Exercise {
  id: number;
  category: Category;
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
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className={"exercise-detail"}>
      <div className={"exercise-detail-header"}>
        <Link to={`/exercises`}>❮</Link>
        <h1>Exercise Details</h1>
        <div></div>
      </div>
      <h2>{exercise?.name}</h2>
      <div className="exercise-detail-badges">
        <p className="badge">{exercise?.category.name}</p>
        <p className="badge">Medium</p>
      </div>
      <h3>Description</h3>
      <p>{exercise?.description}</p>
      <h3>Instructions</h3>
      <ol>
        {exercise?.instructions.split("\n").map((instruction) => (
          <li>{instruction}</li>
        ))}
      </ol>
      <h3>Trained Muscles</h3>
      <ul>
        {exercise?.muscles.map((muscle) => (
          <li>{muscle.name}</li>
        ))}
      </ul>
      <h3>Tips</h3>
      <ul>
        {exercise?.tips.split("\n").map((tip) => (
          <li>{tip}</li>
        ))}
      </ul>
    </div>
  );
}

export default Exercises;
