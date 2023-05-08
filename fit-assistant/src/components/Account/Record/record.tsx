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
            <svg
              width="800"
              height="800"
              viewBox="0 0 800 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_55_91)">
                <path
                  d="M800 0H0V800H800V0Z"
                  fill="white"
                  fill-opacity="0.01"
                />
                <path
                  d="M683.333 66.6667H116.667C89.0525 66.6667 66.6666 89.0526 66.6666 116.667V683.333C66.6666 710.948 89.0525 733.333 116.667 733.333H683.333C710.948 733.333 733.333 710.948 733.333 683.333V116.667C733.333 89.0526 710.948 66.6667 683.333 66.6667Z"
                  fill="#064931"
                  stroke="white"
                  stroke-width="66.6667"
                  stroke-linejoin="round"
                />
                <path
                  d="M200 317.562C255.415 250.895 322.082 217.562 400 217.562C477.918 217.562 544.585 250.895 600 317.562"
                  stroke="white"
                  stroke-width="66.6667"
                  stroke-linecap="round"
                />
                <path
                  d="M400 516.667C427.615 516.667 450 494.282 450 466.667C450 439.052 427.615 416.667 400 416.667C372.385 416.667 350 439.052 350 466.667C350 494.282 372.385 516.667 400 516.667Z"
                  fill="white"
                />
                <path
                  d="M316.667 350L400.138 466.667"
                  stroke="white"
                  stroke-width="66.6667"
                  stroke-linecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_55_91">
                  <rect width="800" height="800" fill="white" />
                </clipPath>
              </defs>
            </svg>
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
