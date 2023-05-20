import React from "react";
import "./record.css";

interface RecordProps {
  weight: number;
  exercise: string;
  repetitions: number;
  date: string;
}
function Record(props: RecordProps) {
  return (
    <div className="list-item">
      <img
        src="https://picsum.photos/200/300"
        alt="exercise"
        className="picto"
      />
      <div className="list-item-content">
        <h3>{props.exercise}</h3>
        <p className="datetime">{props.date}</p>
        <div className="list-item-content-bottom">
          <div className="list-item-content-bottom-left">
            <p className="weight">{props.weight}kg</p>
          </div>
          <div className="list-item-content-bottom-right">
            <p className="reps">{props.repetitions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Record;
