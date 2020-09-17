<template>
  <label
    ref="label"
    :class="[utilityClasses, classes]"
    class="c-checkbox"
  >
    <slot />
    <input
      ref="input"
      v-model="currentValue"
      :value="nativeValue"
      :disabled="disabled"
      :name="name"
      type="checkbox"
      class="c-checkbox__input"
      v-on="{
        ...$listeners,
        focus: () => $emit('focus'),
        blur: () => $emit('blur'),
      }"
    >
    <span class="c-checkbox__checkmark" />
  </label>
</template>

<script>
import { Base } from '../../..';

export default {

  name: 'BlueberryVueCheckbox',
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

  data() {
    return {
      checked: this.value,
    };
  },

  computed: {
    currentValue: {
      get() {
        if (this.value && this.value.target) {
          this.check(this.value.target);
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
        [`c-checkbox--${this.type}`]: this.type,
        'c-checkbox--is-disabled': this.disabled,
      };
    },
  },

  methods: {
    check(target) {
      if (this.nativeValue == null) {
        this.checked = !this.checked;
        this.currentValue = this.checked;
      } else {
        if (target.checked) {
          this.checked.push(target.value);
        } else {
          this.checked = this.checked.filter((item) => item !== target.value);
        }
        this.currentValue = this.checked;
      }
    },
  },
};
</script>
