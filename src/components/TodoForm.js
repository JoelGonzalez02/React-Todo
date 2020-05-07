import React from "react";


class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTaskName: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      newTaskName: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addNewTask(this.state.newTaskName);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>

        <input
          type="text"
          name="item"
          value={this.state.newTaskName}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
