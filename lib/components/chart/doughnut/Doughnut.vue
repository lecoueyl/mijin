<template>
  <div
    ref="container"
    :style="[containerStyles]"
    class="c-chart c-chart-bar u-color-primary"
  >
    <span
      v-for="(color, index) in colors"
      :ref="color"
      :key="index"
      :class="`u-color-${color}`"
    />

    <canvas ref="canvas" />
  </div>
</template>

<script>
import Chart from 'chart.js';
import { Doughnut } from 'vue-chartjs';
import { tooltips } from '../utils';

export default {
  name: 'BlueberryVueChartDoughnut',

  extends: Doughnut,

  props: {
    data: {
      type: Array,
      required: true,
    },
    width: {
      type: Number,
      default: null,
    },
    height: {
      type: Number,
      default: null,
    },
  },

  computed: {
    dataset() {
      const { colors } = this;
      let backgroundColors = [];

      if (colors.length > 0) {
        colors.forEach((color) => backgroundColors.push(window.getComputedStyle(this.$refs[color][0]).color));
      } else {
        const backgroundDefaultColor = this.getStyle().color;
        backgroundColors = Array.from({ length: this.data.length }, () => backgroundDefaultColor);
      }

      return {
        labels: this.data.map((v) => v.label),
        datasets:
        [
          {
            data: this.data.map((v) => v.value),
            backgroundColor: backgroundColors,
            borderColor: 'transparent',
          },
        ],
      };
    },

    colors() {
      const colors = this.data.filter((v) => v.color);
      if (colors.length > 0) {
        return this.data.map((v) => v.color);
      }
      return [];
    },

    containerStyles() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
      };
    },
  },

  mounted() {
    const { fontFamily } = this.getStyle();
    Chart.defaults.global.defaultFontFamily = fontFamily;
    this.render();
  },

  methods: {
    getStyle() {
      return window.getComputedStyle(this.$refs.container);
    },

    render() {
      this.renderChart(
        this.dataset,
        {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          tooltips,
        },
      );
    },

    rerender() {
      this.$data._chart.destroy(); // eslint-disable-line no-underscore-dangle
      this.render();
    },
  },
};
</script>
