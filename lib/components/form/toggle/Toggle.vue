<template>
  <div
    v-if="hasSlotDefault"
    :class="[utilityClasses,　{ [`o-media--${align}`]: align }]"
    class="o-media"
  >
    <div class="o-media__fluid">
      <slot />
    </div>
    <div class="o-media__fixed u-text-right u-pl u-pt-half">
      <label
        :class="[classes]"
        class="c-toggle"
      >
        <input
          ref="input"
          v-model="currentValue"
          :disabled="disabled"
          :name="name"
          class="c-toggle__container"
          type="checkbox"
          v-on="{
            ...$listeners,
            focus: () => $emit('focus'),
            blur: () => $emit('blur'),
          }"
        >
        <span class="c-toggle__slider" />
      </label>
    </div>
  </div>
  <label
    v-else
    :class="[classes, utilityClasses]"
    class="c-toggle"
  >
    <input
      ref="input"
      v-model="currentValue"
      :disabled="disabled"
      :name="name"
      class="c-toggle__container"
      type="checkbox"
      v-on="{
        ...$listeners,
        focus: () => $emit('focus'),
        blur: () => $emit('blur'),
      }"
    >
    <span class="c-toggle__slider" />
  </label>
</template>

<script>
import { Base } from '../../..';

export default {

  name: 'BlueberryVueToggle',
  extends: Base,

  props: {
    align: {
      type: String,
      default: null,
      validator: (value) => [
        'top',
        'middle',
        'bottom',
      ].indexOf(value) >= 0,
    },
    value: {
      type: [String, Number, Boolean, Function, Object, Array, Symbol, Event],
      default: null,
    },
    disabled: {
      type: Boolean,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: 's',
      validator: (value) => [
        'xs',
        's',
      ].indexOf(value) >= 0,
    },
  },

  computed: {
    currentValue: {
      get() {
        // console.log(this.value);
        if (this.value && this.value.target) {
          return this.value.target.checked;
        }
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },

    validating() {
      return this.$parent.validating;
    },

    classes() {
      return {
        [`c-toggle--${this.size}`]: this.size,
        'c-toggle--is-disabled': this.disabled,
      };
    },

    hasSlotDefault() {
      return this.$slots.default;
    },
  },
};
</script>
