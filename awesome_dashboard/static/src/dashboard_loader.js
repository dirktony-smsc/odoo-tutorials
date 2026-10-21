import { Component } from "@odoo/owl";
import { LazyComponent } from "@web/core/assets";
import { registry } from "@web/core/registry";

class AwesomeDashboardLoader extends Component {
  static components = {
    LazyComponent
  }
  static template = "awesome_dashboard.AwesomeDashboardLoader"
}

registry.category("actions").add("awesome_dashboard.dashboard", AwesomeDashboardLoader);
