import React from "react";

const Todo = props => {
  const onClick = e => {
    props.toggleTaskCompleted(props.task.id);
  };
  return (
    <div
      onClick={onClick}
      className={`task${props.task.completed ? " completed" : ""}`}
    >
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;