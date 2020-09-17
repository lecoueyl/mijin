<template>
  <div
    :class="[utilityClasses]"
    class="u-inline-block"
  >
    <div
      class="u-inline-block u-bdradius-round"
      style="width: 9px; height: 9px"
      :class="{ [`u-bgcolor-${color}`]: color }"
    />

    <span class="o-media__fixed o-type-xs">
      <slot />
    </span>
  </div>
</template>

<script>
import { Base } from '../..';

export default {
  name: 'BlueberryVueChartLegend',

  extends: Base,

  props: {
    color: {
      type: String,
      default: 'primary',
    },
  },
};
</script>
