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
            <ul class="todo-container fontMedium">
                ${this.state
                  .map(
                    ({ text }) => `
                    <div>
                      <span class="material-icons-outlined"> radio_button_unchecked </span>
                      <li class="todo">${text}</li>
                    </div>
                    <div>
                      <span class="material-icons-outlined"> edit </span>
                      <span class="material-icons-outlined"> delete </span>
                    </div>
                `
                  )
                  .join("")}
            </ul>
        `;
  };

  this.render();
}
