import { useEffect, useState } from "react";
import "./exercises_detail.css";
import { useParams } from "react-router-dom";
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
}

function Exercises() {
  const { id } = useParams();
  const [exercise, setExercise] = useState<Exercise>();

  useEffect(() => {
    fetch(`http://localhost:8080/api/exercises/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setExercise(data);
        console.log(data.muscles[0].name);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className={"exercise"}>
      <div className="exercise-header">
        <div className="exercise-header-image">
          <img src="https://picsum.photos/200/300" alt="exercise" />
        </div>
        <h1>{exercise?.name}</h1>
      </div>
      <div className="exercise-description">
        <div className="exercise-description-column">
          <div className="trained-muscles">
            <h2>Trained Muscles</h2>
            <ul>
              {exercise?.muscles.map((muscle) => (
                <li>{muscle.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="exercise-description-middle">
          <h2>Description</h2>
          <p>{exercise?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Exercises;
