<template>
  <component :is="tag">
    <div
      v-if="variant === 'bar'"
      class="rounded-lg bg-gray-200 dark:bg-gray-700 overflow-hidden"
    >
      <div
        class="h-2 rounded-lg"
        :class="{
          'bg-primary-500': color === 'primary',
          'bg-success-500': color === 'success',
          'bg-danger-500': color === 'danger',
          'bg-warning-500': color === 'warning',
        }"
        :style="{
          width: `${percentage}%`,
        }"
      />
    </div>

    <svg
      v-if="variant === 'circle'"
      class="transform -rotate-90"
      viewBox="0 0 100 100"
    >
      <circle
        class="text-gray-200 dark:text-gray-700"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="8"
        fill="none"
        cx="50"
        cy="50"
        r="40"
      />
      <circle
        :class="{
          'text-primary-500': color === 'primary',
          'text-success-500': color === 'success',
          'text-danger-500': color === 'danger',
          'text-warning-500': color === 'warning',
        }"
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

    <div
      v-if="variant === 'score'"
      class="space-x-1 inline-block"
    >
      <div
        v-for="index in scoreLength"
        :key="index"
        class="rounded-sm h-2 w-3 inline-block"
        :class="{
          'bg-gray-200 dark:bg-gray-700': !isScoreActive(index),
          'bg-primary-500': isScoreActive(index) && color === 'primary',
          'bg-success-500': isScoreActive(index) && color === 'success',
          'bg-danger-500': isScoreActive(index) && color === 'danger',
          'bg-warning-500': isScoreActive(index) && color === 'warning',
        }"
      />
    </div>
  </component>
</template>

<script>
const validator = {
  color: [
    'primary',
    'danger',
    'success',
    'warning',
  ],
  variant: [
    'bar',
    'circle',
    'score',
  ],
};

export default {
  name: 'MijinProgress',

  validator,

  props: {
    color: {
      default: 'primary',
      type: String,
      validator: (value) => validator.color.includes(value),
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
      validator: (value) => validator.variant.includes(value),
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
