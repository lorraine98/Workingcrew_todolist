export default function TodoForm({ $target, onSubmit }) {
  const $form = document.createElement("form");

  $target.appendChild($form);

  let isInit = false;

  this.render = () => {
    $form.innerHTML = `
        <input class="todoForm fontMedium" type="text" name="todo" />
        <button class="todoBtn font600">ADD</button>
      `;

    if (!isInit) {
      $form.addEventListener("submit", (e) => {
        e.preventDefault();

        const $todo = $form.querySelector("input[name=todo]");
        const text = $todo.value;

        if (text.length > 0) {
          $todo.value = "";
          onSubmit(text);
        }
      });
      isInit = true;
    }
  };

  this.render();
}
