import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import cx from 'classnames';
import styles from './App.module.css';
import Header from './components/app-header/app-header';
import ItemStatusFilter from './components/item-status-filter/item-status-filter';
import Search from './components/search-panel/search-panel';
import Todolist from './components/todo-list/todo-list';
import AddElementBtn from './components/btn-add/btn-add';

export default class App extends Component {
  constructor() {
    super();

    this.maxId = 100;

    this.state = {
      todoArr: [
        { label: 'Drink coffee', important: false, id: 1, done: false },
        { label: 'Learn react', important: true, id: 2, done: false },
        { label: 'Have a lunch', important: false, id: 3, done: false },
      ],
      word: '',
      status: 'All',
    };

    /**
     * Удаляет элемент по Id
     */
    this.deleteElement = (id) => {
      this.setState((state) => {
        const idx = state.todoArr.findIndex(function (el) {
          return el.id === id;
        });

        const before = state.todoArr.slice(0, idx);
        const after = state.todoArr.slice(idx + 1);
        const newArray = before.concat(after);

        return {
          todoArr: newArray,
        };
      });
    };

    /**
     * Добавляет элемент с указанным текстом
     */
    this.addElement = (text) => {
      if (text === '') {
        alert('Введите значение!');
        return;
      }
      const newElement = {
        label: text,
        important: false,
        id: this.maxId++,
        done: false,
      };

      this.setState((state) => {
        const newArr = [...state.todoArr, newElement];

        return {
          todoArr: newArr,
        };
      });
    };

    /**
     * Переключает отображение элемента как важный
     */
    this.onTooggleImportant = (id) => {
      this.setState((state) => {
        const idx = state.todoArr.findIndex(function (el) {
          return el.id === id;
        });
        const oldItem = state.todoArr[idx];
        const newItem = { ...oldItem, important: !oldItem.important };
        const newArray = [
          ...state.todoArr.slice(0, idx),
          newItem,
          ...state.todoArr.slice(idx + 1),
        ];
        return {
          todoArr: newArray,
        };
      });
    };

    /**
     * Переключает отображение элемента как выполненный
     */
    this.onTooggleDone = (id) => {
      this.setState((state) => {
        const idx = state.todoArr.findIndex(function (el) {
          return el.id === id;
        });
        const oldItem = state.todoArr[idx];
        const newItem = { ...oldItem, done: !oldItem.done };
        const newArray = [
          ...state.todoArr.slice(0, idx),
          newItem,
          ...state.todoArr.slice(idx + 1),
        ];
        return {
          todoArr: newArray,
        };
      });
    };

    /**
     * Ищет элементы по заданной строке
     */
    this.search = (items, word) => {
      const filtered = items.filter((el) => {
        return el.label.toLowerCase().indexOf(word.toLowerCase()) > -1;
      });
      return filtered;
    };

    /**
     * Обновляет стейт
     */
    this.onSearch = (word) => {
      this.setState({ word });
    };

    /**
     * Обновляет стейт
     */
    this.onStatusChanged = (status) => {
      this.setState({ status });
    };
  }

  render() {
    const statusItems = this.state.todoArr.filter((el) => {
      switch (this.state.status) {
        case 'All':
          return true;
        case 'Active':
          return el.done === false;
        case 'Done':
          return el.done === true;
      }
    });
    const visibleItems = this.search(statusItems, this.state.word);
    const doneCount = this.state.todoArr.filter(
      (el) => el.done === true,
    ).length;
    const todoCount = this.state.todoArr.length - doneCount;
    return (
      <div className={styles['todo-app']}>
        <Header toDo={todoCount} done={doneCount} />
        <div className={cx('d-flex', styles['top-panel'])}>
          <Search onSearch={this.onSearch} />
          <ItemStatusFilter
            status={this.state.status}
            onStatusChanged={this.onStatusChanged}
          />
        </div>

        <Todolist
          list={visibleItems}
          onDeleted={this.deleteElement}
          onTooggleImportant={this.onTooggleImportant}
          onTooggleDone={this.onTooggleDone}
        />
        <AddElementBtn onAdded={this.addElement} />
      </div>
    );
  }
}
