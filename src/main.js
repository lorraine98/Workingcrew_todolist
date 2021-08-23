import App from "./App.js";
import { getItem } from "./storage.js";

const initialState = getItem("todos", []);

const $app = document.querySelector("#app");

new App({
  $target: $app,
  initialState
});
