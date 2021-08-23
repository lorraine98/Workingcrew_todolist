import Counter from "./Counter.js";
import DateTime from "./Datetime.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

export default function App({ $target }) {
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
      //   setItem("todos", JSON.stringify(nextState));
    },
  });
  const initialState = [];

  const todoList = new TodoList({
    $target,
    initialState,
  });
}
