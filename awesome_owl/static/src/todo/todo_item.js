import { Component } from "@odoo/owl";
import { Todo } from "./todo";

export class TodoItem extends Component {
  static template = "awesome_owl.todos.item";

  // static components = { Counter, Card, TodoListItem }

  static props = {
    todo: Todo
  }

}
