import { useEffect, useState } from "react";
import "./programs.css";
import Program from "../../components/Program/program";

interface Programs {
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
        <Program
          key={program.id}
          name={program.name}
          id={program.id}
          description={program.description}
          user={program.user}
          exercises={program.exercises}
        />
      ))}
    </div>
  );
}

export default Programs;
