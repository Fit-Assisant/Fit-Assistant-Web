import { useEffect, useState } from "react";
import "./programs.css";
import DeltoidWorkoutSVG from "../../components/Svg/deltoidWorkout";
import { Link } from "react-router-dom";

interface Programs {
  id: number;
  name: string;
  difficulty: string;
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

function Programs() {
  const [data, setData] = useState<Programs[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/programs")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="programs">
      <h1>Programs</h1>
      {data.map((program) => (
        <Link to={`/programs/${program.id}`}>
          <div className="program-item">
            <DeltoidWorkoutSVG />
            <div className="program-item-content">
              <h2>{program.name}</h2>
              <div className="badges-section">
                <p className="badge">{program.difficulty}</p>
                {program.exercises.length == 1 ? (
                  <p className="badge">{program.exercises.length} exercise</p>
                ) : (
                  <p className="badge">{program.exercises.length} exercises</p>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Programs;
