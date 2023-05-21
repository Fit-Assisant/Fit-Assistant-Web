import { useEffect, useState } from "react";
import Exercise from "../../components/Exercise/exercise";
import "./exercises.css";

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

function Exercises() {
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

  const filteredData = data
    .filter((exercise) =>
      exercise.name.toLowerCase().includes(filter.toLowerCase())
    )
    .filter((exercise) =>
      categoryFilter ? exercise.category.id === categoryFilter.id : true
    );

  const categories = data.reduce((acc: Category[], exercise: Exercise) => {
    if (!acc.some((category) => category.id === exercise.category.id)) {
      acc.push(exercise.category);
    }
    return acc;
  }, []);

  return (
    <div className={"exercises"}>
      <h1>Exercises</h1>
      <div className="exercises-filter">
        <input
          type="text"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          placeholder="Find by name"
        />
        <div>
          <select
            id="category-filter"
            value={categoryFilter?.id ?? ""}
            onChange={(event) =>
              setCategoryFilter(
                categories.find(
                  (category) => category.id === parseInt(event.target.value)
                )
              )
            }
          >
            <option value="">All categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="exercises-list">
        {filteredData.map((exercise) => (
          <Exercise
            key={exercise.id}
            id={exercise.id}
            name={exercise.name}
            category={exercise.category.name}
            muscles={exercise.muscles[0].name}
          />
        ))}
      </div>
    </div>
  );
}

export default Exercises;
