export default function Counter({ $target }) {
  this.$target = $target;

  this.render = () => {
    this.$target.innerHTML = `
        <span>얼마 안남았어요</span>
        <span>3</span>
    `;
  };

  this.render();
}
