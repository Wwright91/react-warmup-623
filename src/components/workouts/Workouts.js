import React, { useState } from "react";
import "./Workouts.scss";
import { Link } from "react-router-dom";

const Workouts = ({ workoutList }) => {
  const [sortedWorkouts, setSortedWorkouts] = useState([...workoutList]);
  const [toggleSort, setToggleSort] = useState(false);

  const sortWorkouts = () => {
    setToggleSort(!toggleSort);
    const sorted = [...workoutList].sort((a, b) => {
      if (toggleSort) return b.calories - a.calories;
      return a.calories - b.calories;
    });
    setSortedWorkouts(sorted);
  };

  return (
    <div className="Workouts">
      <h2>Workout List</h2>
      <button onClick={sortWorkouts}>
        Sort by Calories Burned ({!toggleSort ? "Asc" : "Desc"})
      </button>
      <ul>
        {sortedWorkouts.map((workout) => (
          <p key={workout.id}>
            <Link to={`/workouts/${workout.id}`}>
              {workout.name} 
            </Link> 
            - {workout.date} 
              Calories Burned: {workout.calories}
          </p>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;
