import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <header>
            <h1>Exercise Tracker</h1>
            <p>Create, edit, and delete exercises</p>
          </header>
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path="/create">
            <CreatePage />
          </Route>
          <Route path="/edit">
            <EditPage exerciseToEdit={exerciseToEdit} />
          </Route>
        </div>
        <nav>
          <div>
            <Link to="/">Home </Link>
          </div>
          <div>
            <Link to="/create">Create</Link>
          </div>
        </nav>
        <footer>© 2022 Andrew Scott</footer>
      </Router>
    </div>
  );
}

export default App;
