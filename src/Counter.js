export default function Counter({ $target, initialState }) {
  this.$target = $target;
  this.state = initialState;

  this.setState = (nextState) => {
    this.validationState(nextState);
    this.state = { ...nextState };
    this.render();
  };

  this.validationState = (state) => {
    if (typeof state?.todoCount !== "number") {
      throw new Error("State must have a type of number");
    }
  };

  this.render = () => {
    const { todoCount } = this.state;
    const changeTextLength = 3;
    this.$target.innerHTML = `
        ${
          todoCount < changeTextLength
            ? `<span>얼마 안남았어요</span>`
            : `<span>오늘도 열심히!</span>`
        }     
        <span>${todoCount}</span>
    `;
  };

  this.render();
}
