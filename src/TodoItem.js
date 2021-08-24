export default function TodoItem() {
  this.render = () => {
    const $toggleBtn = document.querySelector(".toggleBtn");
    const $todo = document.querySelector(".todo");

    console.log($toggleBtn.innerHTML);
    console.log($todo.style);

    function makeToggle() {
      if ($toggleBtn.innerHTML === " radio_button_unchecked ") {
        console.log("hi");
      } else {
        // $toggleBtn.text("radio_button_unchecked");
      }
      if ($todo.style.textDecoration === "") {
        $todo.style.textDecoration = "line-through";
      } else {
        $todo.style.textDecoration = "";
      }
    }
    $toggleBtn.addEventListener("click", makeToggle);
  };
  this.render();
}
