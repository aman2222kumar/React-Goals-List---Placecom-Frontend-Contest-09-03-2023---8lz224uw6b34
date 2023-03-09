import React, { useState } from "react";

const GoalForm = (props) => {
  const [formData, setFormData] = useState({
    goal: "",
    by: "",
  });
  const [goal, setGoal] = useState("");
  const [by, setBy] = useState("");
  function handlegoalBro(e) {
    setGoal(e.target.value);
  }
  function handBYBro(e) {
    setBy(e.target.value);
  }
  function handleGoals(e) {
    e.preventDefault();
    setFormData([...formData, { goal: goal, by: by }]);
    setGoal("");
    setBy("");
  }
  return (
    <>
      <h1>My Goals</h1>
      <form>
        <input
          value={goal}
          onChange={handlegoalBro}
          type="text"
          name="goal"
          placeholder="Goal..."
        />
        <input value={by} type="text" name="by" placeholder="By..." />
        <button oClick={handleGoals}>Add</button>
      </form>
    </>
  );
};

export default GoalForm;
