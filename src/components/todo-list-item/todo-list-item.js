import { Component } from 'react';
import styles from './todo-list-item.module.css';
import cx from 'classnames';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default class TodoListItem extends Component {
  constructor() {
    super();
  }

  render() {
    const { label, done, important } = this.props;

    let classNames = styles['todo-list-item'];
    if (done) {
      classNames += ' ' + styles.done;
    }

    if (important) {
      classNames += ' ' + styles.important;
    }

    return (
      <span className={cx(classNames)}>
        <span
          className={cx('todo-list-item-label', styles['todo-list-item-label'])}
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
          className={cx("btn", "btn-outline-success", "btn-sm", "float-end", styles['btn-outline-success'])}
          onClick={this.props.onTooggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>
      </span>
    );
  }
}
