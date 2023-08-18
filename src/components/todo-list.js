import TodoListItem from './todo-list-item';
import './todo-list.css';

const Todolist = ({ list, onDeleted, onTooggleImportant, onTooggleDone }) => {
  const elements = list.map((item) => {
    return (
      <li key={item.id} className="list-group-item">
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
