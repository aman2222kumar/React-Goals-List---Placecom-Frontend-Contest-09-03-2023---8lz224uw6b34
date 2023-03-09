import React from "react";

const ListOfGoals = (props) => {
  return (
    <ul>
      {props.ListOfGoals.map((item) => {
        return (
          <li>
            <p>
              My goal is to goalName{item.goal}, by goalDeadline {item.by}.
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default ListOfGoals;
