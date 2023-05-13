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
      {/* <div className="exercise-header">
        <div className="exercise-header-image">
          <img src="https://picsum.photos/200/300" alt="exercise" />
        </div>
        <h1>{exercise?.name}</h1>
      </div>
      <div className="exercise-description">
        <div className="exercise-description-column">
          <div className="trained-muscles section-column">
            <svg className="picto-column" viewBox="0 0 800 800">
              <path
                d="M364.956 564.6C385.203 492.806 455.998 441.525 537.544 450.004C615.181 458.072 676.899 522.208 680.809 598.514C681.786 618.616 678.993 637.898 672.989 655.812C669.359 666.752 658.467 674 646.598 674H230.745C160.253 674 107.383 610.841 121.207 543.145L206.191 127H373.752L429.605 222.725L309.94 306.553L276.008 263.75"
                stroke="black"
                stroke-width="37.5"
                stroke-miterlimit="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M310 306L374 537"
                stroke="black"
                stroke-width="37.5"
                stroke-miterlimit="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="trained-muscles-content content">
              <h2>Trained Muscles</h2>
              <ul>
                {exercise?.muscles.map((muscle) => (
                  <li>{muscle.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tips section-column">
            <svg className="picto-column" viewBox="0 0 64 64" stroke-width="3">
              <path d="M24.78,41.94c0-5.63-3.48-10.34-5.35-13.83a13.38,13.38,0,0,1-1.59-6.33c0-7.4,6.76-13.4,14.16-13.4" />
              <path d="M39.22,41.94c0-5.63,3.48-10.34,5.35-13.83a13.38,13.38,0,0,0,1.59-6.33c0-7.4-6.76-13.4-14.16-13.4" />
              <rect x="21.96" y="41.63" width="20.62" height="4.62" rx="2.31" />
              <rect x="23.22" y="46.25" width="18.09" height="4.62" rx="2.31" />
              <path d="M35.78,50.87v.93a3.52,3.52,0,1,1-7,0v-.93" />
              <path d="M22.87,21.14a8.19,8.19,0,0,1,8.59-7.75" />
            </svg>
            <div className="tips-content content  ">
              <h2>Tips</h2>
              <ul>
                {exercise?.tips.split("\n").map((tip) => (
                  <li>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="exercise-description-middle">
          <h2>Description</h2>
          <p>{exercise?.description}</p>
          <h2>Instructions</h2>
          <ol>
            {exercise?.instructions.split("\n").map((instruction) => (
              <li>{instruction}</li>
            ))}
          </ol>
        </div>
      </div> */}
    </div>
  );
}

export default Exercises;
