export class Todo {
  static NEXT_ID = 1;

  static get_next_id() {
    return this.NEXT_ID++;
  }

  constructor(model, description) {
    this._model = model;
    this.id = Todo.get_next_id();
    this.description = description;
    this.isCompleted = false;
  }

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }

  remove() {
    this._model.remove(this.id)
  }

}

export class TodoModel {
  constructor() {
    this.todos = [];
  }

  add(description) {
    this.todos.push(new Todo(this, description));
  }

  remove(id) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex >= 0) {
      this.todos.splice(todoIndex, 1);
    }
  }

}
