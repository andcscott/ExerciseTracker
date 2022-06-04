import "../App.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const EditPage = () => {
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("");
  const [date, setDate] = useState("");

  const history = useHistory();

  const editExercise = async () => {
    const updatedExercise = { name, reps, weight, unit, date };
    const response = await fetch(`/exercises/id`, {
      method: "PUT",
      body: JSON.stringify(updatedExercise),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Successfully edited exercise");
    } else {
      alert(`Failed to edit exercise, status code = ${response.status}`);
    }
    history.push("/");
  };

  return (
    <div className="App">
      <h2>Edit Exercise</h2>
      <input
        type="text"
        placeholder="Enter name here"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter reps here"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter weight here"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter unit here"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter date here"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={editExercise}>Edit</button>
    </div>
  );
};

//   const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
//     method: 'PUT',
//     body: JSON.stringify({ name: name, reps: reps, weight: weight, unit: unit, date: date }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   if(response.status === 200){
//        alert("Successfully edited the exercise!");
//   } else {
//        alert(`Failed to edit the exercise, status code = ${response.status}`);
//   }
// };

export default EditPage;
