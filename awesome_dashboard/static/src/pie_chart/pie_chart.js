import { Component, onMounted, onWillStart, useRef, onWillUnmount } from "@odoo/owl";
import { loadJS } from "@web/core/assets"

export class PieChart extends Component {
  static template = "awesome_dashboard.PieChart"

  static props = {
    orders_by_size: {
      type: Object,
      shape: {
        m: Number,
        s: Number,
        xl: Number
      }
    }
  }

  setup() {
    onWillStart(async () => {
      await loadJS("/web/static/lib/Chart/Chart.js");
    });

    this.chart_canvas = useRef("pie-chart-canvas");

    onMounted(() => {
      this.renderChart()
    });

    onWillUnmount(() => {
      this.destroyChart()
    })
  }

  renderChart() {
    const orders_by_size = this.props.orders_by_size;
    this.chart = new Chart(this.chart_canvas.el, {
      type: "pie",
      data: {
        labels: ["m", "s", "xl"],
        datasets: [{
          data: [orders_by_size.m, orders_by_size.s, orders_by_size.xl]
        }]
      }
    });
  }

  destroyChart() {
    this.chart.destroy()
  }

}
