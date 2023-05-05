import { useEffect, useState } from "react";
import "./categories.css";
import Category from "../../components/Category/category";

function Categories() {
  const [data, setData] = useState<
    {
      id: number;
      name: string;
    }[]
  >([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/categories`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log("data" + data);
  return (
    <div className={"categories"}>
      <h1>Categories</h1>
      {data !== null &&
        data.map((category) => (
          <Category id={category.id} name={category.name} />
        ))}
    </div>
  );
}

export default Categories;
