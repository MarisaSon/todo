import TodoListItem from '../todo-list-item/todo-list-item';
import styles from './todo-list.module.css';
import cx from 'classnames';

const Todolist = ({ list, onDeleted, onTooggleImportant, onTooggleDone }) => {
  const elements = list.map((item) => {
    return (
      <li key={item.id} className={cx('list-group-item', styles['list-group-item'])}>
        <TodoListItem
          {...item}
          onDeleteClicked={function () {
            onDeleted(item.id);
          }}
          onTooggleImportant={() => onTooggleImportant(item.id)}
          onTooggleDone={() => onTooggleDone(item.id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default Todolist;
