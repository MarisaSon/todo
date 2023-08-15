import "./App.css";
import Header from "./components/app-header";
import ItemStatusFilter from "./components/item-status-filter";
import Search from "./components/search-panel";
import Todolist from "./components/todo-list";

function App() {
  const todoArr = [
    { label: "Drink coffee", important: false, id: 1 },
    { label: "Learn react", important: true, id: 2 },
    { label: "Have a lunch", important: false, id: 3 },
  ];

  return (
    <div className="todo-app">
      <Header toDo={1} done={3} />
      <div className="top-panel d-flex">
        <Search />
        <ItemStatusFilter />
      </div>

      <Todolist list={todoArr} />
    </div>
  );
}

export default App;
