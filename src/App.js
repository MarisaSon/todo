import { Component } from "react";
import "./App.css";
import Header from "./components/app-header";
import ItemStatusFilter from "./components/item-status-filter";
import Search from "./components/search-panel";
import Todolist from "./components/todo-list";
import AddElementBtn from "./components/btn-add";

export default class App extends Component {
  constructor() {
    super();

    this.maxId = 100;

    this.state = {
      todoArr: [
        { label: "Drink coffee", important: false, id: 1 },
        { label: "Learn react", important: true, id: 2 },
        { label: "Have a lunch", important: false, id: 3 },
      ],
    };

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

    this.addElement = (text) => {
      const newElement = {
        label: text,
        important: false,
        id: this.maxId++,
      };
      this.setState((state) => {
        const newArr = [...state.todoArr, newElement];

        return {
          todoArr: newArr,
        };
      });
    };
  }

  render() {
    return (
      <div className="todo-app">
        <Header toDo={1} done={3} />
        <div className="top-panel d-flex">
          <Search />
          <ItemStatusFilter />
        </div>

        <Todolist list={this.state.todoArr} onDeleted={this.deleteElement} />
        <AddElementBtn onAdded={this.addElement} />
      </div>
    );
  }
}
