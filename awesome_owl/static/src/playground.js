import { Component  } from "@odoo/owl";
// oxlint-disable-next-line no-unused-vars
import { Counter } from "./counter/counter";

export class Playground extends Component {
  static template = "awesome_owl.playground";

  static components = { Counter }

  setup() {
  }

}
