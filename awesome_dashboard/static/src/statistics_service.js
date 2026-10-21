import { registry } from "@web/core/registry";
// import { reactive } from "@odoo/owl";
import { memoize } from "@web/core/utils/functions";
import { rpc } from "@web/core/network/rpc";

async function loadStatistics() {
  const result = await rpc("/awesome_dashboard/statistics", {});
  return result;
}

const statistics = {
  // dependencies: ["rpc"],
  start() {

    return {
      loadStatistics: memoize(loadStatistics)
    }
  }
}

registry.category("services").add("awesome_dashboard.statistics", statistics)
