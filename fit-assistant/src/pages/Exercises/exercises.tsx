import { useEffect, useState } from "react";
import Exercise from "../../components/Exercise/exercise";
import "./exercises.css";

function Exercises() {
  const [data, setData] = useState<
    {
      id: number;
      name: string;
      description: string;
      image: string;
      machine: number;
    }[]
  >([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/exercises`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className={"exercises"}>
      <h1>Exercises</h1>
      <div className="exercises-list">
        {data.map((exercise) => (
          <Exercise id={exercise.id} name={exercise.name} />
        ))}
      </div>
    </div>
  );
}

export default Exercises;
