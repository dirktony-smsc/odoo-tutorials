import { Component, useState } from "@odoo/owl";
import { TodoModel } from "./todo";
import { TodoItem } from "./todo_item";

export class Todos extends Component {
  static template = "awesome_owl.todos";

  static components = { TodoItem }

  static props = []

  setup() {
    this.model = useState(new TodoModel());
  }

  addTodo(ev) {
    if (ev.keyCode == 13 && ev.target.value != "") {
      this.model.add(ev.target.value);
      ev.target.value = "";
    }
  }

}
