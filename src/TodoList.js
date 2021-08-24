import TodoItem from "./TodoItem.js";

export default function TodoList({ $target, initialState }) {
  const $todoList = document.createElement("div");
  $target.appendChild($todoList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $todoList.innerHTML = `
                ${this.state
                  .map(
                    ({ text }) => `
                  <ul class="todo-container fontMedium">
                    <div>
                      <span class="material-icons-outlined toggleBtn"> radio_button_unchecked </span>
                      <li class="todo">${text}</li>
                    </div>
                    <div>
                      <span class="material-icons-outlined"> edit </span>
                      <span class="material-icons-outlined"> delete </span>
                    </div>
                  </ul>
                `
                  )
                  .join("")}
        `;
  };

  this.render();
}


