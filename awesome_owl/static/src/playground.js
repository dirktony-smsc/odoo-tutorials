import { Component, markup, useState } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { Card } from "./card/card";
import { Todos } from "./todo/todos";

export class Playground extends Component {
  static template = "awesome_owl.playground";

  static components = { Counter, Card, Todos }

  static props = []

  setup() {
    this.html = markup("<div>some content</div>")
    this.counters = useState([{
      value: 5,
    }, {
      value: 7
    }, {
      value: 2
    }]);

  }

  get sum() {
     return this.counters.reduce((sum, current_value) => sum + current_value.value, 0)
  }

  incrementSum(index) {
    this.counters[index].value++;
  }
}
