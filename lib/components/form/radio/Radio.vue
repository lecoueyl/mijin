<template>
  <label
    ref="label"
    :class="[utilityClasses, classes]"
    class="c-radio"
  >
    <slot />
    <input
      ref="input"
      v-model="currentValue"
      :value="nativeValue"
      :disabled="disabled"
      :name="name"
      type="radio"
      class="c-radio__input"
      v-on="{
        ...$listeners,
        focus: () => $emit('focus'),
        blur: () => $emit('blur'),
      }"
    >
    <span class="c-radio__checkmark" />
  </label>
</template>

<script>
import { Base } from '../../..';

export default {

  name: 'BlueberryVueRadio',
  extends: Base,

  props: {
    value: {
      type: [String, Number, Boolean, Function, Object, Array, Symbol, Event],
      default: null,
    },
    nativeValue: {
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
    type: {
      type: String,
      default: null,
    },
  },

  computed: {
    currentValue: {
      get() {
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
        [`c-radio--${this.type}`]: this.type,
        'c-radio--is-disabled': this.disabled,
        'c-radio--is-checked': this.value === this.nativeValue,
      };
    },
  },
};
</script>
