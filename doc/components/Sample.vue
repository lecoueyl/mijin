<template>
  <section class="pb-10">
    <BbHeadline
      :id="id"
      :level="2"
      :size="4"
      class="pb-8"
    >
      {{ title }}
    </BbHeadline>

    <div class="p-4 bg-gray-100 rounded-t-lg">
      <slot />
    </div>

    <div
      class="bg-gray-900 rounded-b-lg overflow-y-hidden transition-all duration-300 ease-in-out"
      :style="{ maxHeight: maxSampleHeight + 'px' }"
      @click="toggleCollapse()"
    >
      <div
        ref="sample"
        class="p-4"
      >
        <code
          v-for="(code, index) in snippet"
          :key="index"
          class="whitespace-pre-wrap text-sm text-gray-100"
        >{{ code }}</code>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';

const maxSampleHeight = 100;
export default Vue.extend({
  props: {
    snippet: {
      default: () => [],
      type: Array,
    },

    title: {
      required: true,
      type: String,
    },
  },

  data() {
    return {
      collapsed: true,
      maxSampleHeight,
    };
  },

  computed: {
    id() {
      return this.title.toLowerCase().replace(/ /g, '-');
    },
  },

  beforeMount() {
    window.addEventListener('resize', this.resizeSampleContent);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.resizeSampleContent);
  },

  mounted() {
    this.resizeSampleContent();
  },

  methods: {
    toggleCollapse() {
      if (this.disabled) return;

      this.collapsed = !this.collapsed;
      this.$emit('toggle', this.collapsed);
      this.resizeSampleContent();
    },

    resizeSampleContent() {
      if (this.collapsed) {
        this.maxSampleHeight = maxSampleHeight;
      } else {
        this.maxSampleHeight = this.$refs.sample.offsetHeight;
      }
    },
  },
});
</script>
