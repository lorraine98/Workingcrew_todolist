import App from "./App.js";
import { getItem } from "./storage.js";

const initialState = {
  todos: getItem("todos", []),
};

const $app = document.querySelector("#app");

new App({
  $target: $app,
  initialState,
});
