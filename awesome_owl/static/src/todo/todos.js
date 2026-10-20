import { Component, useState } from "@odoo/owl";

export class Todos extends Component {
  static template = "awesome_owl.todos";

  // static components = { Counter, Card, TodoListItem }

  static props = []

  setup() {

    this.todos = useState([{
      id: 3,
      description: "Something",
      isCompleted: false
    }]);

  }

  toggleCompleted(id) {
    this.todos.forEach((todo) => {
      if (todo.id == id) {
        todo.isCompleted = !todo.isCompleted;
      }
    })
  }

}
