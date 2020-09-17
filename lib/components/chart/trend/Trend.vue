<template>
  <span
    :class="[classes]"
    class="c-chart c-chart-trend"
  >
    <svg ref="chart" />
  </span>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'BlueberryVueChartTrend',

  props: {
    data: {
      type: Array,
      required: true,
    },
    dataSecondary: {
      type: Array,
      required: false,
      default: () => [],
    },
    dataTertiary: {
      type: Array,
      required: false,
      default: () => [],
    },
    width: {
      required: false,
      type: Number,
      default: 100,
    },
    height: {
      required: false,
      type: Number,
      default: 50,
    },
    xScale: {
      required: false,
      type: Function,
      default: null,
    },
    yScale: {
      required: false,
      type: Function,
      default: null,
    },
    yScaleSecondary: {
      required: false,
      type: Function,
      default: null,
    },
    yScaleTertiary: {
      required: false,
      type: Function,
      default: null,
    },
    // This should be in format [{ startX, endX }]
    highlights: {
      required: false,
      type: Array,
      default: null,
    },
    bordered: {
      type: Boolean,
      default: null,
    },
  },

  data() {
    return {
      paddings: {
        left: 1,
        top: 1,
        bottom: 2,
        right: 1,
      },
      currentXScale: null,
      currentYScale: null,
      currentYScaleSecondary: null,
      currentYScaleTertiary: null,
    };
  },

  computed: {
    classes() {
      return {
        'c-chart--with-border': this.bordered,
      };
    },
  },

  watch: {
    data() {
      this.renderChart();
    },
  },

  updated() {
    this.renderChart();
  },

  mounted() {
    this.renderChart();
  },

  methods: {
    renderChart() {
      const svg = this.$refs.chart;
      svg.setAttribute('height', this.height);
      svg.setAttribute('width', this.width);

      this.setupScales();

      const d3svg = d3.select(svg);
      d3svg.selectAll('*').remove();

      this.createHighlights(d3svg);
      this.appendPath(d3svg);
    },

    createHighlights(svg) {
      if (!this.highlights || this.highlights.length === 0) return;

      const rect = svg.selectAll('rect.highlight')
        .data(this.highlights)
        .enter()
        .append('rect')
        .attr('class', 'c-chart-trend__hightlight');

      rect.attr('x', (d) => this.currentXScale(d.startX))
        .attr('y', this.paddings.top)
        .attr('width', (d) => this.currentXScale(d.endX) - this.currentXScale(d.startX))
        .attr('height', this.height - this.paddings.bottom - this.paddings.top);
    },

    appendPath(svg) {
      const createPath = d3.line()
        .curve(d3.curveCardinal)
        .x((d) => this.currentXScale(d.x))
        .y((d) => this.currentYScale(d.y));

      const lineChartGroup = svg.append('g');
      lineChartGroup.append('path').attr('d', createPath(this.data));

      // add secondary data
      if (this.dataSecondary && this.dataSecondary.length) {
        const secondaryLineChartGroup = svg.append('g');
        secondaryLineChartGroup.attr('class', 'c-chart-trend__secondary');
        const createSecondaryPath = d3.line()
          .curve(d3.curveCardinal)
          .x((d) => this.currentXScale(d.x))
          .y((d) => this.currentYScaleSecondary(d.y));
        secondaryLineChartGroup.append('path').attr('d', createSecondaryPath(this.dataSecondary));
      }

      // add tertiary data
      if (this.dataTertiary && this.dataTertiary.length) {
        const tertiaryLineChartGroup = svg.append('g');
        tertiaryLineChartGroup.attr('class', 'c-chart-trend__tertiary');
        const createTertiaryPath = d3.line()
          .curve(d3.curveCardinal)
          .x((d) => this.currentXScale(d.x))
          .y((d) => this.currentYScaleTertiary(d.y));
        tertiaryLineChartGroup.append('path').attr('d', createTertiaryPath(this.dataTertiary));
      }
    },

    setupScales() {
      if (!this.xScale) {
        this.currentXScale = d3.scaleLinear()
          .domain(d3.extent(this.data.concat(this.dataSecondary), (d) => d.x));
      } else {
        this.currentXScale = this.xScale;
      }

      if (!this.yScale) {
        this.currentYScale = d3.scaleLinear()
          .domain([0, d3.max(this.data, (d) => d.y)]);
      } else {
        this.currentYScale = this.yScale;
      }

      this.currentXScale.range([0 + this.paddings.left, this.width - this.paddings.right]);
      this.currentYScale.range([this.height - this.paddings.bottom, 0 + this.paddings.top]);

      // setup secondary yScale
      if (this.dataSecondary && this.dataSecondary.length) {
        if (!this.yScaleSecondary) {
          this.currentYScaleSecondary = d3.scaleLinear()
            .domain([0, d3.max(this.dataSecondary, (d) => d.y)]);
        } else {
          this.currentYScaleSecondary = this.yScaleSecondary;
        }
        this.currentYScaleSecondary.range([
          this.height - this.paddings.bottom,
          0 + this.paddings.top,
        ]);
      }

      // setup tertiary yScale
      if (this.dataTertiary && this.dataTertiary.length) {
        if (!this.yScaleTertiary) {
          this.currentYScaleTertiary = d3.scaleLinear()
            .domain([0, d3.max(this.dataTertiary, (d) => d.y)]);
        } else {
          this.currentYScaleTertiary = this.yScaleTertiary;
        }
        this.currentYScaleTertiary.range([
          this.height - this.paddings.bottom,
          0 + this.paddings.top,
        ]);
      }
    },
  },
};
</script>
