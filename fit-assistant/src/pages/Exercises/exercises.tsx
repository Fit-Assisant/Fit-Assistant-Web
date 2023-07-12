import { useEffect, useState } from "react";
import Exercise from "../../components/Exercise/exercise";
import "./exercises.css";
import ArmsSVG from "../../components/Svg/arms";
import AbsSVG from "../../components/Svg/abs";
import BackSVG from "../../components/Svg/back";
import CardioSVG from "../../components/Svg/cardio";
import ChestSVG from "../../components/Svg/chest";
import GlutesSVG from "../../components/Svg/glutes";
import LegsSVG from "../../components/Svg/legs";
import ShoulderSVG from "../../components/Svg/shoulder";

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

  const handleCategoryFilter = (selectedCategory: Category | undefined) => {
    setCategoryFilter(selectedCategory);
  };

  return (
    <div className={"exercises"}>
      <h1>Exercises</h1>
      <div className="exercises-filter">
        <input
          type="text"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          placeholder="🔍 Find by name"
        />
        <div className="exercises-filter-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-button ${
                categoryFilter?.id === category.id ? "active" : ""
              } ${category.name}`}
              onClick={() => handleCategoryFilter(category)}
            >
              {
                {
                  Arms: <ArmsSVG />,
                  Abs: <AbsSVG />,
                  Back: <BackSVG />,
                  Cardio: <CardioSVG />,
                  Chest: <ChestSVG />,
                  Glutes: <GlutesSVG />,
                  Legs: <LegsSVG />,
                  Shoulder: <ShoulderSVG />,
                }[category.name]
              }
              {category.name}
            </button>
          ))}
          <button
            className={`category-button ${
              categoryFilter === undefined ? "active" : ""
            }`}
            onClick={() => handleCategoryFilter(undefined)}
          >
            All categories
          </button>
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
