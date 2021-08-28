/*  
   State

   {todos: TodoItem[] }

   TodoItem
    {
     id: number, 
     text: string, 
     completed: boolean 
    }
  
 */
export default function TodoList({
  $target,
  initialState,
  toggleTodo,
  deleteTodo,
}) {
  const $todoList = document.createElement("div");
  this.state = initialState;
  $target.appendChild($todoList);

  this.setState = (nextState) => {
    this.state = { ...nextState };
    this.render();
  };

  const onClickTodos = (e) => {
    const $todo = e.target.closest(".todo-container");
    if (!$todo) {
      return;
    }

    const id = +$todo.dataset.id;
    if (e.target.closest(".todo-toggle")) {
      toggleTodo(id);
    }
    if (e.target.matches(".deleteBtn")) {
      deleteTodo($todo);
    }
  };

  $todoList.addEventListener("click", onClickTodos);

  this.render = () => {
    const { todos } = this.state;
    if (todos.length === 0) {
      $todoList.innerHTML = `<div class="warning-container"><span class="warning font600">할 일을 추가해주세요</span></div>`;
      return;
    }
    $todoList.innerHTML = `
                ${todos
                  .map(
                    ({ id, isCompleted, text }) =>
                      `
                  <ul class="todo-container fontMedium" data-id=${id}>
                    <label class="todo-toggle">
                      <span class="material-icons-outlined"> 
                      ${
                        isCompleted
                          ? "check_circle_outline"
                          : "radio_button_unchecked"
                      }
                      </span>
                      <li class="todo ${isCompleted ? "line" : ""}">
                        ${text}
                      </li>
                    </label>
                    <div>
                      <span class="material-icons-outlined editBtn"> edit </span>
                      <span class="material-icons-outlined deleteBtn"> delete </span>
                    </div>
                  </ul>
                `
                  )
                  .join("")}
        `;
  };

  this.render();
}
