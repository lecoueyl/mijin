<template>
  <Component
    :is="tag"
  >
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
      required: true,
      validator: (val) => val >= 0 && val <= 100,
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
};
</script>
