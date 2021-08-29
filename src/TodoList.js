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
  editTodo,
}) {
  const $todoList = document.createElement("div");
  $todoList.className = "todos-container";
  this.state = initialState;
  this.$target = $target;
  this.$target.appendChild($todoList);

  this.setState = (nextState) => {
    this.validationState(nextState);
    this.state = { ...nextState };
    this.render();
  };

  this.validationState = (state) => {
    if (!Array.isArray(state?.todos)) {
      throw new Error("State must have a type of array");
    }
  };

  const onClickTodos = (e) => {
    const $todoContainer = e.target.closest(".todo-container");
    if (!$todoContainer) {
      return;
    }
    const id = +$todoContainer.dataset.id;

    if (e.target.closest(".todo-toggle")) {
      toggleTodo(id);
    }
    if (e.target.matches(".deleteBtn")) {
      deleteTodo($todoContainer);
    }
    if (e.target.matches(".editBtn")) {
      this.startEditMode($todoContainer);
    }
    if (e.target.matches(".doneBtn")) {
      this.finishEditMode($todoContainer);
    }
  };

  this.startEditMode = ($todoContainer) => {
    const $editBtn = $todoContainer.querySelector(".editBtn");
    $editBtn.classList.add("hidden");

    const $todo = $todoContainer.querySelector(".todo");
    const todoText = $todo.innerText;
    $todo.classList.add("hidden");

    const $doneBtn = $todoContainer.querySelector(".doneBtn");
    $doneBtn.classList.remove("display-none");

    const $editInput = $todoContainer.querySelector(".editInput");
    $editInput.value = todoText;
    $editInput.classList.remove("display-none");
  };

  this.finishEditMode = ($todoContainer) => {
    const $editBtn = $todoContainer.querySelector(".editBtn");
    $editBtn.classList.remove("hidden");

    const $todo = $todoContainer.querySelector(".todo");
    $todo.classList.remove("hidden");

    const $doneBtn = $todoContainer.querySelector(".doneBtn");
    $doneBtn.classList.add("display-none");

    const $editInput = $todoContainer.querySelector(".editInput");
    const editedText = $editInput.value;
    $editInput.classList.add("display-none");
    if (editedText.length < 30) {
      const id = +$todoContainer.dataset.id;
      editTodo(id, editedText);
    } else {
      alert("30자 미만으로 작성해주세요!");
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
                    <label>
                      <span class="material-icons-outlined todo-toggle"> 
                      ${
                        isCompleted
                          ? "check_circle_outline"
                          : "radio_button_unchecked"
                      }
                      </span> 
                      <li class="todo ${isCompleted ? "line" : ""}">
                          ${text}
                      </li>
                      <input value="" class="editInput fontMedium display-none">
                    </label>
                    <div>
                      <span class="material-icons-outlined editBtn">edit</span>
                      <span class="material-icons-outlined doneBtn display-none">done</span>
                      <span class="material-icons-outlined deleteBtn">delete</span>
                    </div>
                  </ul>
                `
                  )
                  .join("")}
        `;
  };
  this.render();
}
