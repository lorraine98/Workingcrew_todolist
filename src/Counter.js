export default function Counter({ $target, initialState }) {
  this.$target = $target;
  this.state = initialState;

  this.setState = (nextState) => {
    this.validationState(nextState);
    this.state = { ...nextState };
    this.render();
  };

  this.validationState = (state) => {
    if (!isArray(state?.todos)) {
      throw new Error("State must have a type of array");
    }
  };

  this.render = () => {
    const { todoCount } = this.state;
    this.$target.innerHTML = `
        ${
          todoCount < 3
            ? `<span>얼마 안남았어요</span>`
            : `<span>오늘도 열심히!</span>`
        }     
        <span>${todoCount}</span>
    `;
  };

  this.render();
}
