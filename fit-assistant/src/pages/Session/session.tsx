import { useEffect, useState } from "react";
import "./session.css";
interface Exercise {
  id: number;
  name: string;
  description: string;
  image: string;
  machine: number;
  category: Category;
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

function Session() {
  const [data, setData] = useState<Exercise[]>([]);
  const [filter, setFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<Category | undefined>(
    undefined
  );

  useEffect(() => {
    fetch(`http://localhost:8080/api/exercises`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="session">
      <div className="session-left">
        <h1>New Session</h1>
        <form>
          <div className="title-section">
            <label htmlFor="title">Your session title</label>
            <input type="text" id="title" name="title" />
          </div>
          <div className="description-section">
            <label htmlFor="description">Your session description</label>
            <textarea id="description" name="description" rows={5} />
          </div>
        </form>
        <div className="session-exercises">
          <h2>Exercises</h2>
          <div className="session-exercises-list">
            {data.map((exercise) => (
              <p>{exercise.name}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="session-middle"></div>
    </div>
  );
}

export default Session;
