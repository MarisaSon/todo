import { Component } from 'react';
import './todo-list-item.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default class TodoListItem extends Component {
  constructor() {
    super();
  }

  render() {
    const { label, done, important } = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={this.props.onTooggleDone}
        >
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
          onClick={this.props.onTooggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>
      </span>
    );
  }
}
