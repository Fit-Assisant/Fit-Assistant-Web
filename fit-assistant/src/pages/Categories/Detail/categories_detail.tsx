import { useEffect, useState } from "react";
import "./categories_detail.css";
import Exercise from "../../../components/Exercise/exercise";
import { useParams } from "react-router-dom";

interface Exercise {
  id: number;
  name: string;
  description: string;
  image: string;
  machine: number;
}

interface Category {
  id: number;
  name: string;
  exercises: Exercise[];
}

function Category() {
  const { id } = useParams();
  const [category, setCategory] = useState<Category>();

  useEffect(() => {
    fetch(`http://localhost:8080/api/categories/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCategory(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className={"categories"}>
      <h1>{category?.name}</h1>
      {category?.exercises?.map((exercise) => (
        <Exercise id={exercise.id} name={exercise.name} />
      ))}
    </div>
  );
}

export default Category;
