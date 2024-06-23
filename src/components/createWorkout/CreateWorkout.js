import React, { useState } from "react";
import "./CreateWorkout.scss"
import { useNavigate } from "react-router-dom";

const CreateWorkout = ({ addWorkout }) => {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [duration, setDuration] = useState("")
  const [calories, setCalories] = useState("")

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    addWorkout({ name, date, duration, calories })
    setCalories("")
    setDate("")
    setDuration("")
    setName("")
    navigate("/workouts")
  }



  return (
    <div className="CreateWorkout">
      <h2>Create Workout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div>
          <label>Calories Burned</label>
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateWorkout;
