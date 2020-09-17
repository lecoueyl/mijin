<!-- TODO: dry duplicate code for default and column -->
<template>
  <li
    :class="[classes, utilityClasses]"
    class="c-list__item"
    @click="clickAction()"
  >
    <!-- column child -->
    <bb-media
      v-if="isChildColumn"
      :align="align"
      class="c-list__row"
    >
      <slot />

      <div
        v-if="this.$slots.action"
        class="c-list__item-action"
      >
        <slot name="action" />
      </div>

      <div
        v-if="this.$slots.expand"
        class="c-list__item-icon-container"
      >
        <bb-icon
          :class="{ 'c-list__item-icon--is-rotated': expand.expanded }"
          name="plus"
          size="s"
          color="wash-medium"
          class="c-list__item-icon"
        />
      </div>
    </bb-media>

    <!-- default item -->
    <template v-else>
      <div
        v-if="hasAction"
      >
        <bb-icon
          v-if="this.$slots.expand"
          :class="{ 'c-list__item-icon--is-rotated': expand.expanded }"
          name="plus"
          size="s"
          color="wash-medium"
          class="c-list__item-icon"
        />
        <slot />
      </div>

      <template v-else>
        <slot />
      </template>
    </template>

    <!-- expand slot -->

    <bb-base
      v-if="this.$slots.expand"
      :class="{ 'c-list__expand--is-expanded': expand.expanded }"
      :style="{ maxHeight: expand.height + 'px' }"
      class="c-list__expand"
      @click.stop
    >
      <div
        ref="expand"
        class="c-list__expand-content"
      >
        <slot name="expand" />
      </div>
    </bb-base>
  </li>
</template>

<script>
import { Base } from '../..';

export default {

  name: 'BlueberryVueListItem',
  extends: Base,

  props: {
    to: {
      type: [Object, String],
      default: null,
    },
    exact: {
      type: Boolean,
      default: false,
    },
    align: {
      type: String,
      default: 'top',
      validator: (value) => [
        'top',
        'middle',
        'bottom',
      ].indexOf(value) >= 0,
    },
  },

  data() {
    return {
      expand: {
        height: 0,
        expanded: false,
      },
      isListItem: true, // used by children
      isChildColumn: false, // used by children
    };
  },

  computed: {
    classes() {
      return {
        'c-list__item--with-line': this.isParentDivided(),
        // Action sets hover and link cursor
        'c-list__action': this.hasAction,
        // We should have default pointer when action buttons are present, but there's
        // no expanding feature
        'c-list__action--default_pointer': this.$slots.action && !this.$slots.expand,
      };
    },

    hasAction() {
      if (this.$slots.action
        || this.$slots.expand
        || this.to) {
        return true;
      }
      return false;
    },
  },

  created() {
    if (!this.isParentList()) {
      this.$destroy();
      throw new Error('You should wrap <bb-list-item> with <bb-list>');
    }
  },

  mounted() {
    if (this.$children) {
      this.isChildColumn = this.$children.some((child) => child.isListColumn);
    }

    this.$nextTick(() => {
      window.addEventListener('resize', this.resizeExpand);
      this.resizeExpand();
    });
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.resizeExpand);
  },

  methods: {
    isParentList() {
      if (this.$parent.$data.isList
          || this.$parent.$parent.$data.isList
          || this.$parent.$parent.$parent.$data.isList) {
        return true;
      }
      return false;
    },

    isParentDivided() {
      if (this.$parent.$data.isDivided
          || this.$parent.$parent.$data.isDivided
          || this.$parent.$parent.$parent.$data.isDivided) {
        return true;
      }
      return false;
    },

    clickAction() {
      if (this.$slots.expand) {
        this.toggleExpand();
      }

      if (this.to) {
        this.$router.push(this.to);
      }
    },

    toggleExpand() {
      if (this.expand.expanded) {
        this.expand.height = 0;
      }
      this.expand.expanded = !this.expand.expanded;
      this.resizeExpand();
    },

    resizeExpand() {
      if (this.expand.expanded) {
        let marginTop = 0;
        if (this.$refs.expand.children[0]) {
          const style = window.getComputedStyle(this.$refs.expand.children[0]);
          marginTop = parseInt(style.marginTop, 10);
        }
        this.expand.height = this.$refs.expand.offsetHeight + marginTop;
      }
    },
  },
};
</script>
