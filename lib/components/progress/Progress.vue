<template>
  <div class="c-progress">
    <div
      v-if="type === 'line'"
      class="c-progress-line"
    >
      <div
        :class="{
          [`u-bgcolor-${color}`]: color,
        }"
        :style="{
          width: `${percentage}%`,
        }"
        class="c-progress-line__track"
      />
    </div>

    <span
      v-if="type === 'score'"
      class="c-progress-score"
    >
      <span
        v-for="index in scoreLength"
        :key="index"
        class="c-progress-score__item"
        :class="{
          [`u-bgcolor-${color}`]: color && isScoreActive(index),
        }"
      />
    </span>

    <span
      v-if="type === 'circle'"
      :class="{
        [`c-progress-circle--${color}`]: color,
      }"
      class="c-progress-circle"
    >
      <svg viewBox="0 0 100 100">
        <circle
          :style="{ strokeDasharray: `${progress} 252` }"
          cx="50"
          cy="50"
          r="40"
        />
      </svg>
    </span>
  </div>
</template>

<script>
import { Base } from '../..';

export default {

  name: 'BlueberryVueProgress',
  extends: Base,

  props: {
    type: {
      type: String,
      default: 'line',
      validator: (value) => [
        'line',
        'score',
        'circle',
      ].indexOf(value) >= 0,
    },
    percentage: {
      type: Number,
      default: 0,
      required: true,
      validator: (val) => val >= 0 && val <= 100,
    },
    color: {
      type: String,
      default: 'primary',
    },
    scoreLength: {
      type: Number,
      default: 3,
      validator: (val) => val >= 3 && val <= 5,
    },
  },

  computed: {
    progress() {
      const progressLimit = 251;
      return (progressLimit / 100) * this.percentage;
    },
  },

  methods: {
    isScoreActive(item) {
      if (this.percentage > (item - 1) * (100 / this.scoreLength)) {
        return true;
      }
      return false;
    },
  },
};
</script>
