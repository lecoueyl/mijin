<template>
  <label
    :class="[utilityClasses]"
    class="u-block"
  >
    <FormLabel v-if="hasSlotDefault">
      <slot />
    </FormLabel>

    <div class="c-input-container">
      <bb-icon
        v-if="currentIcon"
        :name="currentIcon"
        color="wash-medium"
        size="s"
        class="c-input__icon"
      />
      <input
        v-if="type !== 'textarea'"
        ref="input"
        v-bind="$attrs"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        :minlength="minlength"
        :min="min"
        :max="max"
        :value="value"
        :class="[classes]"
        class="c-input"
        v-on="listeners"
      >
      <textarea
        v-else
        ref="input"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        :value="value"
        :class="[classes]"
        class="c-input c-input--default c-input-textarea"
        v-on="listeners"
      />
      <bb-icon
        v-if="type === 'password'"
        ref="icon"
        :name="passwordIcon"
        size="s"
        class="c-input__icon c-input__icon--isRight u-cursor-pointer"
        @click.native="togglePasswordVisibility()"
      />
    </div>
  </label>
</template>

<script>
import FormLabel from '../Label';
import { Base } from '../../..';

export default {
  name: 'BlueberryVueInput',

  components: {
    FormLabel,
  },

  extends: Base,

  props: {
    value: {
      type: [String, Number],
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
    readonly: {
      type: Boolean,
      default: null,
    },
    icon: {
      type: String,
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
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: null,
    },
    autosize: {
      type: [Boolean, Object],
      default: false,
    },
    maxlength: {
      type: Number,
      default: null,
    },
    minlength: {
      type: Number,
      default: null,
    },
    max: {
      type: Number,
      default: null,
    },
    min: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      currentType: this.type,
      currentIcon: this.icon,
      passwordIcon: 'eye',
    };
  },

  computed: {
    validating() {
      return this.$parent.validating;
    },

    hasSlotDefault() {
      return this.$slots.default;
    },

    classes() {
      return {
        [`o-type-${this.size}`]: this.size,
        [`c-input--${this.size}`]: this.size,
        'c-input--default': this.type !== 'search',
        'c-input--search': this.type === 'search',
        'c-input--file': this.type === 'file',
        'c-input--is-disabled': this.disabled,
        'c-input--with-icon': this.currentIcon,
        'c-input--without-border': this.withoutBorder,
        'u-block': this.hasSlotLabel,
      };
    },

    listeners() {
      const vm = this;
      return {

        // Add listeners from parent
        ...this.$listeners,
        // Ensure that the component works with v-model
        input(event) {
          vm.$emit('input', event.target.value);
        },
        focus: () => vm.$emit('focus'),
        blur: () => vm.$emit('blur'),
      };
    },
  },

  mounted() {
    this.setIcon();
  },

  methods: {
    setIcon() {
      this.currentIcon = this.icon;
      if (this.type === 'search' && !this.icon) {
        this.currentIcon = 'search';
      }
    },

    togglePasswordVisibility() {
      if (this.currentType === 'password') {
        this.currentType = 'text';
        this.passwordIcon = 'eyeOff';
      } else {
        this.currentType = 'password';
        this.passwordIcon = 'eye';
      }
      this.$refs.input.setAttribute('type', this.currentType);
    },
  },
};
</script>
