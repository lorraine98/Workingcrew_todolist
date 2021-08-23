import Counter from "./Counter.js";
import DateTime from "./Datetime.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import { setItem } from "./storage.js";

export default function App({ $target, initialState }) {
  this.$target = $target;

  new DateTime({
    $target: document.querySelector(".date-time"),
  });

  new Counter({
    $target: document.querySelector(".counter"),
  });

  new TodoForm({
    $target,
    onSubmit: (text) => {
      const nextState = [
        ...todoList.state,
        {
          text,
        },
      ];
      todoList.setState(nextState);
      setItem("todos", JSON.stringify(nextState));
    },
  });

  const todoList = new TodoList({
    $target,
    initialState,
  });
}
