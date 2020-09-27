<template functional>
  <Component
    :is="props.tag"
    :ref="data.ref"
    class="flex items-center"
    :class="[
      data.class,
      data.staticClass,
    ]"
    :style="[
      data.style,
      data.staticStyle,
    ]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <div class="bg-background border-2 rounded border-gray-500 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 hover:border-primary-500">
      <input type="checkbox" class="opacity-0 absolute">
    </div>
    <div class="select-none">
      <slot />
    </div>
  </Component>
</template>

<script>
export default {
  name: 'UiCheckbox',

  props: {
    disabled: {
      default: false,
      type: Boolean,
    },

    tag: {
      default: 'label',
      type: String,
    },
  },
};
</script>

<style scoped>
input:checked + svg {
  display: block;
}
</style>
