<template>
  <span
    :class="{
      'c-list__sort--sorted': sort === 'asc',
      'c-list__sort--sorted-reverse': sort === 'desc',
    }"
    class="c-list__sort"
  >
    <slot />
    <span class="c-list__sort-icon">
      <div class="c-list__sort-icon__top" />
      <div class="c-list__sort-icon__middle" />
      <div class="c-list__sort-icon__bottom" />
    </span>
  </span>
</template>

<script>
export default {
  name: 'BlueberryVueListSort',

  props: {
    sort: {
      type: [String, Boolean],
      default: null,
      validator: (value) => [
        null,
        true,
        false,
        'asc',
        'desc',
      ].indexOf(value) >= 0,
    },
  },
};
</script>
