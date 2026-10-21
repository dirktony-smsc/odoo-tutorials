import { registry } from "@web/core/registry";
import { reactive } from "@odoo/owl";
import { rpc } from "@web/core/network/rpc";

const statistics = {
  // dependencies: ["rpc"],
  start() {

    const data = reactive({
      isReady: false
    })

    async function loadStatistics() {
      const result = await rpc("/awesome_dashboard/statistics", {});
      Object.assign(data, {
        data: result,
      }, {
        isReady: true
      })
    }

    setInterval(loadStatistics, 10 * 60 * 1000);
    loadStatistics()

    return data;
  }
}

registry.category("services").add("awesome_dashboard.statistics", statistics)
