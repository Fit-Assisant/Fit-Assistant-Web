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
            <svg
              width="800"
              height="800"
              viewBox="0 0 800 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M700 366.667V400C700 510.457 610.457 600 500 600L252.889 599.999L313.807 660.947L266.667 708.088L125.245 566.667L266.667 425.245L313.807 472.386L252.889 533.332L500 533.333C572.902 533.333 632.138 474.826 633.315 402.205L633.333 400L633.333 366.667H700ZM533.333 91.9119L674.755 233.333L533.333 374.755L486.193 327.614L547.109 266.667H300C227.098 266.667 167.862 325.174 166.685 397.795L166.667 400L166.666 433.332H100V400C100 290.647 187.761 201.793 296.693 200.027L300 200L547.111 199.999L486.193 139.052L533.333 91.9119Z"
                fill="#064931"
              />
            </svg>
            <p className="reps">{props.repetitions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Record;
