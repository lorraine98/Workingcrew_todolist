import Counter from "./Counter.js";
import DateTime from "./Datetime.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import { setItem } from "./storage.js";

export default function App({ $target, initialState }) {
  this.$target = $target;
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = { ...nextState };
    const todos = [...this.state.todos];
    todoListComp.setState({ todos });
    setItem("todos", JSON.stringify(todos));
  };

  this.toggleTodo = (id) => {
    const todo = this.state.todos.find((t) => t.id === id);
    todo.isCompleted = !todo.isCompleted;
    this.setState({ todos: [...this.state.todos] });
  };

  this.addTodo = (text) => {
    const newTodos = [...this.state.todos, createTodoItem(text)];
    this.setState({ todos: newTodos });
    counterComp.setState({ todoCount: newTodos.length });
  };

  this.deleteTodo = (target) => {
    const newTodos = [...this.state.todos].filter(function (todo) {
      return todo.id != target.dataset.id;
    });
    target.remove();
    this.setState({ todos: newTodos });
    counterComp.setState({ todoCount: newTodos.length });
  };

  this.editTodo =(target) => {
    
  }

  new DateTime({
    $target: document.querySelector(".date-time"),
  });

  const counterComp = new Counter({
    $target: document.querySelector(".counter"),
    initialState: { todoCount: this.state.todos.length ?? 0 },
  });

  new TodoForm({
    $target,
    onSubmit: (text) => {
      this.addTodo(text);
    },
  });

  const todoListComp = new TodoList({
    $target,
    initialState: { todos: [...this.state.todos] },
    toggleTodo: (id) => this.toggleTodo(id),
    deleteTodo: (target) => this.deleteTodo(target),
    editTodo: (target) => this.editTodo(target),
  });
}

function createTodoItem(text) {
  return {
    id: Date.now(),
    isCompleted: false,
    text,
  };
}
