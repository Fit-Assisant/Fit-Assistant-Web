import { useEffect, useState } from "react";
import "./exercises.css";
import { useParams } from "react-router-dom";

function Exercises() {
  const { id } = useParams();
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
    fetch(`http://localhost:8080/api/exercises/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log("data" + data);
  return (
    <div className={"exercises"}>
      <h1>Exercises</h1>
    </div>
  );
}

export default Exercises;
