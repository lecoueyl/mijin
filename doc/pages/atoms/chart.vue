<template>
  <LayoutSample
    :title="$t('sections.atoms.chart.title')"
    components="Chart"
  >
    <MjNote
      filled
      variant="warning"
      class="mb-8"
    >
      Chart component requires the following packaes:
      <br>
      npm install vue-chartjs chart.js --save
    </MjNote>

    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjChart
        v-if="dataChartBar"
        ref="chart"
        :data="dataChartBar"
        :height="350"
      />
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      dataChartBar: {},
      dataChartBarGroup: {},
      dataChartMixed: {},
      samples: {
        default: [
          `<MjAvatar
  alt="image"
  img="https://..."
/>`],
      },
    };
  },

  mounted() {
    this.generateDatasets();
  },

  methods: {
    generateDatasets() {
      const length = 20;
      this.dataChartBar = Array.from({ length: 20 }, (_, i) => (
        {
          date: i + 1,
          visit: Math.floor(Math.random() * 2000),
        }
      ));

      this.dataChartBarGroup = {
        labels: Array.from({ length }, (_, i) => i + 1),
        datasets: [
          {
            color: 'purple-500',
            label: 'blueberry',
            data: Array.from({ length }, () => Math.floor(Math.random() * 2000)),
          },
          {
            color: 'purple-100',
            label: 'banana',
            data: Array.from({ length }, () => Math.floor(Math.random() * 2000)),
          },
        ],
      };

      const randomArray = Array.from({ length }, () => Math.floor(Math.random() * 2000));
      this.dataChartMixed = {
        labels: Array.from({ length }, (_, i) => i + 1),
        datasets: [
          {
            type: 'line',
            color: 'purple-100',
            label: 'blueberry',
            data: randomArray,
          },
          {
            color: 'purple-500',
            label: 'blueberry',
            data: randomArray,
          },
        ],
      };
    },

    updateChart(chart: string) {
      this.generateDatasets();
      // @ts-ignore
      this.$refs[chart].rerender();
    },
  },
});
</script>
