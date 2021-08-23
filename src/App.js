import DateTime from "./Datetime.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

const initialState = [];

export default function App({ $target }) {
  this.$target = $target;

  this.render = () => {
    this.$target.innerHTML = `<div class="date-time fontXl font600"></div>`;
  };

  this.render();

  new DateTime({
    $target: this.$target.querySelector(".date-time"),
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

  const todoList = new TodoList({
    $target,
    initialState,
  });
}
