<template>
  <div
    ref="container"
    :style="[containerStyles]"
    class="c-chart c-chart-bar u-color-primary"
  >
    <span
      ref="label"
      class="u-color-wash-medium u-bgcolor-wash-light"
    />

    <span
      ref="grid"
      class="u-color-wash-thin u-color-wash-light"
    />

    <canvas ref="canvas" />
  </div>
</template>

<script>
import Chart from 'chart.js';
import { Bar } from 'vue-chartjs';
import { tooltips } from '../utils';

export default {
  name: 'BlueberryVueChartBar',

  extends: Bar,

  props: {
    data: {
      type: [Array, Object],
      required: true,
    },
    format: {
      type: [Function],
      default: null,
    },
    formatTooltip: {
      type: [Function],
      default: null,
    },
    width: {
      type: Number,
      default: null,
    },
    height: {
      type: Number,
      default: null,
    },
    yLabel: {
      type: String,
      default: '',
    },
  },

  computed: {
    containerStyles() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
      };
    },
  },

  mounted() {
    const { fontFamily } = window.getComputedStyle(this.$refs.container);
    Chart.defaults.global.defaultFontFamily = fontFamily;
    this.render();
  },

  methods: {
    cssvar(name) {
      return getComputedStyle(document.documentElement).getPropertyValue(name);
    },

    getChartData() {
      // if the data is a simple aray contructed like this [{ x: 0, y: 1 }]
      // return single bar chart using the key as label name
      if (Array.isArray(this.data)) {
        const color = this.cssvar('--color-primary-500');

        return {
          labels: this.data.map((v) => v[Object.keys(v)[0]]),
          datasets:
          [
            {
              backgroundColor: color,
              data: this.data.map((v) => v[Object.keys(v)[1]]),
              hoverBackgroundColor: color,
              label: this.data.map((v) => Object.keys(v))[0][1],
            },
          ],
        };
      }

      return {
        labels: this.data.labels,
        datasets: this.data.datasets.map((data) => {
          const color = data.color ? this.cssvar(`--color-${data.color}`) : this.cssvar('--color-primary-500');

          return {
            backgroundColor: data.type === 'line' ? false : color,
            barPercentage: 1, // stick group bar together
            borderColor: data.type === 'line' ? color : false,
            categoryPercentage: 0.5, // add space between bars
            cubicInterpolationMode: 'monotone',
            data: data.data,
            fill: data.type !== 'line',
            hoverBackgroundColor: data.type === 'line' ? false : color,
            label: data.label,
            type: data.type ? data.type : 'bar',
          };
        }),
      };
    },

    render() {
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            gridLines: {
              color: this.cssvar('--color-wash-light'),
              drawBorder: false,
              zeroLineColor: this.cssvar('--color-wash-medium'),
            },
            ticks: {
              beginAtZero: true,
              fontColor: this.cssvar('--color-wash-medium'),
            },
          }],

          xAxes: [{
            gridLines: {
              display: false,
            },
            ticks: {
              autoSkip: true,
              fontColor: this.cssvar('--color-wash-medium'),
              maxRotation: 0,
              maxTicksLimit: 5,
            },
          }],
        },
        legend: {
          display: false,
        },
        tooltips: { ...tooltips },
      };

      if (this.yLabel) {
        options.scales.yAxes[0].scaleLabel = {
          display: true,
          labelString: this.yLabel,
        };
      }

      if (this.format) {
        options.scales.yAxes[0].ticks.callback = this.format;
        options.tooltips.callbacks = {
          label: this.format,
        };
      }

      if (this.formatTooltip) {
        options.tooltips.callbacks = {
          label: this.formatTooltip,
        };
      }

      this.renderChart(this.getChartData(), options);
    },

    rerender() {
      this.$data._chart.destroy(); // eslint-disable-line no-underscore-dangle
      this.render();
    },
  },
};
</script>
