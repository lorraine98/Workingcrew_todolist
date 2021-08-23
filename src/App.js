import DateTime from "./Datetime.js";

export default function App({ $target }) {
  this.$target = $target;

  this.render = () => {
    this.$target.innerHTML = `<div class="date-time fontXl font600"></div>`;
  };

  this.render();

  new DateTime({
    $target: this.$target.querySelector(".date-time"),
  });
}
