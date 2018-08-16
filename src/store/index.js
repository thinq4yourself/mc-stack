import TodoListModel from "./models/TodoListModel";

const store = new TodoListModel();

store.addTodo("Get sleep");
store.addTodo("Wake up");
store.addTodo("Sit for a while");
store.todos[0].finished = true;

setTimeout(() => {
  store.addTodo("Get a tea in as well");
}, 2000);

// playing around in the console
window.store = store;