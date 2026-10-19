import { Component  } from "@odoo/owl";

export class Counter extends Component {
  static template = "awesome_owl.counter";

  static props = {
    value: Number,
    onChange: {
      type: Function,
      optional: true
    }
  }

  setup() {
  }

  increment() {
    this.props.onChange?.()
  }
}
