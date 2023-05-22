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

interface SelectedExercise extends Exercise {
  reps: number;
  sets: number;
  duration: number;
  weight: number;
  intensity: number;
}

function Session() {
  const [data, setData] = useState<Exercise[]>([]);
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState<Exercise[]>([]);
  const [selectedExercises, setSelectedExercises] = useState<
    SelectedExercise[]
  >([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/exercises")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const filteredExercises = data.filter((exercise) =>
      exercise.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredData(filteredExercises);
  }, [data, filter]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const updateReps = (exerciseId: number, newReps: number) => {
    setSelectedExercises((prevExercises) =>
      prevExercises.map((exercise) =>
        exercise.id === exerciseId ? { ...exercise, reps: newReps } : exercise
      )
    );
  };

  const updateSets = (exerciseId: number, newSets: number) => {
    setSelectedExercises((prevExercises) =>
      prevExercises.map((exercise) =>
        exercise.id === exerciseId ? { ...exercise, sets: newSets } : exercise
      )
    );
  };

  const updateDuration = (exerciseId: number, newDuration: number) => {
    setSelectedExercises((prevExercises) =>
      prevExercises.map((exercise) =>
        exercise.id === exerciseId
          ? { ...exercise, duration: newDuration }
          : exercise
      )
    );
  };

  const updateWeight = (exerciseId: number, newWeight: number) => {
    setSelectedExercises((prevExercises) =>
      prevExercises.map((exercise) =>
        exercise.id === exerciseId
          ? { ...exercise, weight: newWeight }
          : exercise
      )
    );
  };

  const updateIntensity = (exerciseId: number, newIntensity: number) => {
    setSelectedExercises((prevExercises) =>
      prevExercises.map((exercise) =>
        exercise.id === exerciseId
          ? { ...exercise, intensity: newIntensity }
          : exercise
      )
    );
  };

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
          <button type="submit">Save</button>
        </form>
        <div className="session-exercises">
          <h2>Exercises</h2>
          <div className="session-exercises-search">
            <input
              type="text"
              placeholder="Search exercises"
              value={filter}
              onChange={handleFilterChange}
            />
          </div>
          <div className="session-exercises-list">
            {filteredData.map((exercise) => (
              <div className="session-exercise-list-item" key={exercise.id}>
                <p>{exercise.name}</p>
                <button
                  onClick={() => {
                    setSelectedExercises((prevExercises) => [
                      ...prevExercises,
                      {
                        ...exercise,
                        reps: 0,
                        sets: 0,
                        duration: 0,
                        weight: 0,
                        intensity: 0,
                      },
                    ]);
                  }}
                >
                  +
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="session-middle">
        <h2>Selected Exercises</h2>
        <div className="session-selected-exercises">
          {selectedExercises.map((exercise) => (
            <div className="selected-exercise-list-item" key={exercise.id}>
              <p>{exercise.name}</p>
              <div>
                <div>
                  <label htmlFor={`reps-${exercise.id}`}>Reps</label>
                  <div>
                    <button
                      onClick={() => updateReps(exercise.id, exercise.reps + 1)}
                    >
                      +
                    </button>
                    <input
                      type="number"
                      id={`reps-${exercise.id}`}
                      value={exercise.reps}
                      onChange={(e) => {
                        const newReps = parseInt(e.target.value);
                        if (!isNaN(newReps)) {
                          updateReps(exercise.id, newReps);
                        }
                      }}
                    />

                    <button
                      onClick={() => updateReps(exercise.id, exercise.reps - 1)}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div>
                  <label htmlFor={`sets-${exercise.id}`}>Sets</label>
                  <div>
                    <button
                      onClick={() => updateSets(exercise.id, exercise.sets + 1)}
                    >
                      +
                    </button>
                    <input
                      type="number"
                      id={`sets-${exercise.id}`}
                      value={exercise.sets}
                      onChange={(e) => {
                        const newSets = parseInt(e.target.value);
                        if (!isNaN(newSets)) {
                          updateSets(exercise.id, newSets);
                        }
                      }}
                    />

                    <button
                      onClick={() => updateSets(exercise.id, exercise.sets - 1)}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div>
                  <label htmlFor={`duration-${exercise.id}`}>Duration</label>
                  <div>
                    <button
                      onClick={() =>
                        updateDuration(exercise.id, exercise.duration + 1)
                      }
                    >
                      +
                    </button>
                    <input
                      type="number"
                      id={`duration-${exercise.id}`}
                      value={exercise.duration}
                      onChange={(e) => {
                        const newDuration = parseInt(e.target.value);
                        if (!isNaN(newDuration)) {
                          updateDuration(exercise.id, newDuration);
                        }
                      }}
                    />

                    <button
                      onClick={() =>
                        updateDuration(exercise.id, exercise.duration - 1)
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
                <div>
                  <label htmlFor={`weight-${exercise.id}`}>Weight</label>
                  <div>
                    <button
                      onClick={() =>
                        updateWeight(exercise.id, exercise.weight + 1)
                      }
                    >
                      +
                    </button>
                    <input
                      type="number"
                      id={`weight-${exercise.id}`}
                      value={exercise.weight}
                      onChange={(e) => {
                        const newWeight = parseInt(e.target.value);
                        if (!isNaN(newWeight)) {
                          updateWeight(exercise.id, newWeight);
                        }
                      }}
                    />

                    <button
                      onClick={() =>
                        updateWeight(exercise.id, exercise.weight - 1)
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
                <div>
                  <label htmlFor={`intensity-${exercise.id}`}>Intensity</label>
                  <div>
                    <button
                      onClick={() =>
                        updateIntensity(exercise.id, exercise.intensity + 1)
                      }
                    >
                      +
                    </button>
                    <input
                      type="number"
                      id={`intensity-${exercise.id}`}
                      value={exercise.intensity}
                      onChange={(e) => {
                        const newIntensity = parseInt(e.target.value);
                        if (!isNaN(newIntensity)) {
                          updateIntensity(exercise.id, newIntensity);
                        }
                      }}
                    />

                    <button
                      onClick={() =>
                        updateIntensity(exercise.id, exercise.intensity - 1)
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Session;
