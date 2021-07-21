import React from "react";
import BasicContainer from "../../Container/BasicContainer";
import Exercise from "../Exercise_Prescription/Exercise";
import { Link } from "react-router-dom";

function ExerciseCards(props) {
  return (
    <BasicContainer>
      <div className="column">
        <div className="ui fluid card">
          <div className="image">
            <img src={props.exercise.image} />
          </div>
          <div className="content">
            <Link to={`/programBuilder/${props.exercise._id}`}>
              {props.exercise.name}
            </Link>
          </div>
        </div>
      </div>
    </BasicContainer>
  );
}

export default ExerciseCards;
