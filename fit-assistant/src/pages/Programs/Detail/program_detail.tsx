import { useEffect, useState } from "react";
import "./program_detail.css";
import { useParams } from "react-router-dom";
import RepsSVG from "../../../components/Svg/reps";
import Exercise from "../../../components/Exercise/exercise";

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
  muscles: Array<Muscles>;
}

interface Category {
  id: number;
  name: string;
}

interface Muscles {
  id: number;
  name: string;
}

function Program() {
  const { id } = useParams();
  const [data, setData] = useState<Programs>();

  useEffect(() => {
    fetch(`http://localhost:8080/api/programs/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(data);
  return (
    <div className="program">
      <h1>{data?.name}</h1>
      <div className="program-details">
        <div className="program-details-info">
          <h2>Description</h2>
          <p>{data?.description}</p>
          <h2>Exercises</h2>
          <div className="program-details-exercises">
            {data?.exercises.map((exercise) => (
              <Exercise
                key={exercise.details.id}
                id={exercise.details.id}
                name={exercise.details.name}
                category={exercise.details.category.name}
                muscles={exercise.details.muscles[0].name}
              />
            ))}
          </div>
        </div>
        <div className="timeline">
          <h2>Details</h2>
          {data?.exercises.map((exercise) =>
            exercise == data.exercises[data.exercises.length - 1] ? (
              <div className="timeline-object">
                <div className="timeline-status"></div>
                <div className="timeline-content">
                  {(exercise.series || exercise.series > 1) && (
                    <div className="circle">
                      <p>x{exercise.series}</p>
                    </div>
                  )}

                  <h3>{exercise.details.name}</h3>
                  <div className="timeline-content-details">
                    {exercise.repetitions && (
                      <div>
                        <p>{exercise.repetitions}</p>
                        <RepsSVG />
                      </div>
                    )}
                    {exercise.duration && <p>{exercise.duration}</p>}
                    {exercise.intensity && <p>{exercise.intensity}%</p>}
                  </div>
                </div>
              </div>
            ) : (
              <div className="timeline-object complete">
                <div className="timeline-status"></div>
                <div className="timeline-content">
                  {(exercise.series || exercise.series > 1) && (
                    <div className="circle">
                      <p>x{exercise.series}</p>
                    </div>
                  )}
                  <h3>{exercise.details.name}</h3>
                  <div className="timeline-content-details">
                    {exercise.repetitions && (
                      <div>
                        <p>{exercise.repetitions}</p>
                        <RepsSVG />
                      </div>
                    )}
                    {exercise.duration && <p>{exercise.duration}</p>}
                    {exercise.intensity && <p>{exercise.intensity}%</p>}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Program;
