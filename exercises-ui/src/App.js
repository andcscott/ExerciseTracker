import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/create">
            <CreatePage />
          </Route>
          <Route path="/edit">
            <EditPage />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
