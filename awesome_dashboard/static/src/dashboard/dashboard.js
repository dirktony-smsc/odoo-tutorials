import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout"
import { useService } from "@web/core/utils/hooks";
import { _t } from "@web/core/l10n/translation";
import { DashboardItem } from "./dashboard_item/dashboard_item";
import { PieChart } from "./pie_chart/pie_chart";


class AwesomeDashboard extends Component {
    static template = "awesome_dashboard.AwesomeDashboard";

  static components = {
    Layout,
    DashboardItem,
    PieChart
  }

  static props = []

  setup() {
    this.action = useService("action")

    this.statistics = useState(useService("awesome_dashboard.statistics"));

  }

  openCustomers() {
    this.action.doAction("base.action_partner_form");
  }

  openLeads() {
    this.action.doAction({
      type: "ir.actions.act_window",
      name: _t("Leads"),
      res_model: "crm.lead",
      views: [[false, "list"], [false, "form"]]
    })
  }
}

registry.category("lazy_components").add("AwesomeDashboard", AwesomeDashboard);
