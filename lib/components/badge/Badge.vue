<template>
  <div
    class="u-inline-block u-bdradius-round u-text-center "
    :class="[classes, utilityClasses]"
  >
    <bb-icon
      v-if="status"
      :name="icon"
      class="u-flex c-badge__content"
    />

    <div
      v-if="number"
      class="c-badge__content u-flex"
    >
      <bb-type
        :size="size"
        class="u-leading-none"
      >
        {{ number }}
      </bb-type>
    </div>
  </div>
</template>

<script>
import { Base } from '../..';

export default {
  name: 'BlueberryVueBadge',

  extends: Base,

  props: {
    status: {
      type: String,
      default: null,
    },
    number: {
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
  },

  computed: {
    classes() {
      return {
        [`c-badge--${this.size}`]: this.size,
        'u-bgcolor-green u-bd-green u-color-white': this.status && this.status === 'success',
        'u-bgcolor-orange u-bd-orange u-color-white': this.status && this.status === 'warning',
        'u-bgcolor-red u-bd-red u-color-white': this.status && this.status === 'error',
        'u-color-foreground u-bd-foreground': this.number,
      };
    },

    icon() {
      switch (this.status) {
        case 'alert':
          return 'x';
        case 'warning':
          return 'alert';
        default:
          return 'check';
      }
    },
  },
};
</script>

<style lang="scss">
.c-badge__content {
  align-items: center;
  justify-content: center;
}

.c-badge--xs {
  .c-badge__content {
    width: 16px;
    height: 16px;
  }
}

.c-badge--s {
  padding: 2px;
  .c-badge__content {
    width: 16px;
    height: 16px;
  }
}

.c-badge--m {
  padding: 2px;
  .c-badge__content {
    width: 24px;
    height: 24px;
  }
}
</style>
