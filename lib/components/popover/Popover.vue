<template>
  <div
    :class="[utilityClasses]"
    class="u-inline-block"
  >
    <div
      v-click-outside="close"
      class="u-relative"
    >
      <div @click="toggle">
        <slot />
      </div>

      <div
        :class="[
          {
            [`c-popover--${size}`]: size,
            'c-popover--align-top': align === 'top',
            'c-popover--align-right': align === 'right',
            'c-popover--align-bottom': align === 'bottom',
            'c-popover--align-left': align === 'left',
            'c-popover--align-center': align === 'center',
            'c-popover--align-middle': align === 'middle',
            'c-popover--position-top': position === 'top',
            'c-popover--position-right': position === 'right',
            'c-popover--position-bottom': position === 'bottom',
            'c-popover--position-left': position === 'left',
            'c-popover--is-active': isActive
          }, className]"
        class="c-popover"
        @click="closeIfLink($event)"
      >
        <slot name="popover" />
      </div>
    </div>
  </div>
</template>

<script>
import { Base } from '../..';
import ClickOutside from '../../directives/clickOutside';

export default {

  name: 'BlueberryVuePopover',

  directives: {
    ClickOutside,
  },
  extends: Base,

  props: {
    align: {
      type: String,
      default: null,
      validator: (value) => [
        'top',
        'right',
        'bottom',
        'left',
        'center',
        'middle',
      ].indexOf(value) >= 0,
    },
    position: {
      default: 'bottom',
      type: String,
      validator: (value) => [
        'top',
        'right',
        'bottom',
        'left',
      ].indexOf(value) >= 0,
    },
    size: {
      type: String,
      default: null,
      validator: (value) => [
        's',
        'm',
        'l',
      ].indexOf(value) >= 0,
    },
    className: {
      type: String,
      default: null,
    },
    styles: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },

    close() {
      this.isActive = false;
    },

    closeIfLink(event) {
      if (event.target.tagName === 'A') {
        this.close();
      }
    },
  },
};
</script>
