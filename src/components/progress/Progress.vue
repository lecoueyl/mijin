<template>
  <Component :is="tag">
    <div
      v-if="variant === 'bar'"
      class="rounded-lg bg-gray-200 overflow-hidden"
    >
      <div
        class="h-2 rounded-lg"
        :class="`bg-${color}`"
        :style="{
          width: `${percentage}%`,
        }"
      />
    </div>

    <div
      v-if="variant === 'circle'"
      :class="`text-${color}`"
    >
      <svg
        class="transform -rotate-90"
        viewBox="0 0 100 100"
      >
        <circle
          :style="{ strokeDasharray: `${circleProgress} 252` }"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="8"
          fill="none"
          cx="50"
          cy="50"
          r="40"
        />
      </svg>
    </div>

    <template v-if="variant === 'score'">
      <div
        v-for="index in scoreLength"
        :key="index"
        class="rounded-sm h-2 w-3 inline-block mr-1 last:mr-0"
        :class="color && isScoreActive(index) ? `bg-${color}` : 'bg-gray-200'"
      />
    </template>
  </Component>
</template>

<script>
export default {
  name: 'UiProgress',

  props: {
    color: {
      default: 'primary-500',
      type: String,
    },

    percentage: {
      type: Number,
      default: 0,
      validator: (val) => val >= 0 && val <= 100,
    },

    scoreLength: {
      type: Number,
      default: 3,
      validator: (val) => val >= 3 && val <= 5,
    },

    tag: {
      default: 'div',
      type: String,
    },

    variant: {
      type: String,
      default: 'bar',
      validator: (value) => [
        'bar',
        'score',
        'circle',
      ].includes(value),
    },
  },

  computed: {
    circleProgress() {
      const progressLimit = 251;

      return (progressLimit / 100) * this.percentage;
    },
  },

  methods: {
    isScoreActive(item) {
      if (this.percentage > (item - 1) * (100 / this.scoreLength)) return true;

      return false;
    },
  },
};
</script>
