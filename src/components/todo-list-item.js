import { Component } from "react";
import "./todo-list-item.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default class TodoListItem extends Component {
  constructor() {
    super();

    this.state = {
      done: false,
      important: false,
    };

    this.onLabelClick = () => {
      this.setState((state) => {
        return {
          done: !state.done,
        };
      });
    };

    this.onMarkImportant = () => {
      this.setState((state) => {
        return {
          important: !state.important,
        };
      });
    };
  }

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-end"
          onClick={this.props.onDeleteClicked}
        >
          <i className="fa fa-trash" />
        </button>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-end"
          onClick={this.onMarkImportant}
        >
          <i className="fa fa-exclamation" />
        </button>
      </span>
    );
  }
}
