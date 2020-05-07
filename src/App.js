import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import './components/Todo.css';

const list = [
  {
    task: "Deposit my $1200 check",
    id: 0,
    completed: false
  },
  {
    task: "Buy 1200 $1 tacos",
    id: 1,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list
    };
  }

  toggleTaskCompleted = taskId => {
    this.setState({
      list: this.state.list.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  addNewTask = taskName => {
    this.setState({
      list: [
        ...this.state.list,
        { task: taskName, completed: false, id: Date.now() }
      ]
    });
  };

  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter(task => {
        return !task.completed;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addNewTask={this.addNewTask} />
        </div>
        <TodoList
          toggleTaskCompleted={this.toggleTaskCompleted}
          list={this.state.list}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;