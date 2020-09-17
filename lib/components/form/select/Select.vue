<template>
  <label
    class="c-select"
    :class="[utilityClasses]"
    uDisplay="block"
  >
    <FormLabel v-if="this.$slots.label">
      <slot name="label" />
    </FormLabel>
    <span class="c-select">
      <select
        ref="select"
        v-model="selectedValue"
        :class="[classes]"
        :disabled="disabled"
        class="c-select__input c-select--default"
        v-on="{
          ...$listeners,
          focus: () => $emit('focus'),
          blur: () => $emit('blur'),
        }"
      >
        <option
          v-if="placeholder"
          selected
          disabled
        >
          {{ placeholder }}
        </option>
        <slot />
      </select>
      <bb-icon
        size="s"
        name="select"
        class="c-select__dropdown"
      />
    </span>
  </label>
</template>

<script>
import FormLabel from '../Label';
import { Base } from '../../..';

export default {
  name: 'BlueberryVueSelect',

  components: {
    FormLabel,
  },

  extends: Base,

  props: {
    value: {
      type: [String, Number, Boolean, Function, Object, Array, Symbol, Event],
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: 's',
      validator: (value) => [
        'xs',
        's',
        'm',
      ].indexOf(value) >= 0,
    },
    multiple: {
      type: Boolean,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: null,
    },
    withoutBorder: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    selectedValue: {
      get() {
        if (this.value && this.value.target) {
          return this.value.target.value;
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
        [`o-type-${this.size}`]: this.size,
        [`c-select--${this.size}`]: this.size,
        'c-select--is-disabled': this.disabled,
        'c-input--without-border': this.withoutBorder,
      };
    },
  },
};
</script>
