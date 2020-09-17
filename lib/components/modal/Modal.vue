<template>
  <transition name="c-modal-transition">
    <div
      v-if="isActive"
      class="c-modal"
    >
      <div
        class="c-modal__wrapper"
        @click.self="close()"
      >
        <div
          :class="{
            [`c-modal__container--${size}`]: size,
            'c-modal__container--without-padding': withoutPadding
          }"
          class="c-modal__container"
        >
          <div
            class="c-modal__close"
            @click="close()"
          />

          <div
            v-if="this.$slots.header"
            class="c-modal__header"
          >
            <slot name="header" />
          </div>

          <div
            v-if="this.$slots.body"
            class="c-modal__body"
          >
            <slot name="body" />
          </div>

          <div
            v-if="this.$slots.footer"
            class="c-modal__footer"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { Base } from '../..';

const SIZES = [
  's',
  'm',
  'l',
  'full',
];

export default {

  name: 'BlueberryVueModal',
  extends: Base,

  sizes: SIZES,

  props: {
    size: {
      default: 's',
      type: String,
      validator: (value) => SIZES.indexOf(value) >= 0,
    },

    withoutPadding: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isActive: false,
    };
  },

  mounted() {
    document.addEventListener('keydown', this.escapeKeyListener);
  },

  destroyed() {
    document.removeEventListener('keydown', this.escapeKeyListener);
  },

  methods: {
    show() {
      this.isActive = true;
      this.$emit('show');
    },

    close() {
      this.isActive = false;
      this.$emit('close');
    },

    escapeKeyListener(event) {
      if (event.keyCode === 27 && this.isActive) {
        this.close();
      }
    },
  },
};
</script>
