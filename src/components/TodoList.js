import React from "react";

import Item from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.list.map(task => (
        <Item
          toggleTaskCompleted={props.toggleTaskCompleted}
          key={task.id}
          task={task}
        />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed Tasks
      </button>
    </div>
  );
};

export default TodoList;