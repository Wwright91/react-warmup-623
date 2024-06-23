import React from "react";
import "./WorkoutDetails.scss"
import { useParams } from "react-router-dom";

const WorkoutDetails = ({ workoutList }) => {
  const { id } = useParams();
  const workout = workoutList.find((workout) => workout.id === parseInt(id));

  if (!workout) {
    return <div>Workout not found</div>;
  }

  return (
    <div className="WorkoutDetails">
      <h2>{workout.name}</h2>
      <img src="https://media.self.com/photos/6398b36c72eb56f726777d06/4:3/w_1920,c_limit/weekly-workout-schedule.jpeg" alt="workout-img"/>
      <p>Date: <span>{workout.date}</span></p>
      <p>Duration: <span>{workout.duration}</span></p>
      <p>Calories Burned: <span>{workout.calories}</span></p>
    </div>
  );
};

export default WorkoutDetails;
