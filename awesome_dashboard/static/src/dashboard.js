import { Component, useState, onWillStart } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout"
import { useService } from "@web/core/utils/hooks";
import { _t } from "@web/core/l10n/translation";
import { DashboardItem } from "./dashboard_item/dashboard_item";
import { rpc } from "@web/core/network/rpc";

class AwesomeDashboard extends Component {
    static template = "awesome_dashboard.AwesomeDashboard";

  static components = {
    Layout,
    DashboardItem
  }

  static props = []

  setup() {
    this.action = useService("action")

    const statistics = useState({
      isReady: false
    });

    this.statistics = statistics;
    onWillStart(async () => {
      const result = await rpc("/awesome_dashboard/statistics", {});
      Object.assign(statistics, {
        data: result
      }, {
        isReady: true
      });
    });
    console.debug(statistics)
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

registry.category("actions").add("awesome_dashboard.dashboard", AwesomeDashboard);
