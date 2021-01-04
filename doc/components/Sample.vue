<template>
  <section class="pb-10">
    <MjHeadline
      :id="id"
      :level="2"
      :size="4"
      class="pb-8 text-gray-800 dark:text-gray-200"
    >
      {{ title }}
    </MjHeadline>

    <div
      class="p-4 sm:p-8 border-t border-r border-l border-gray-100 dark:border-gray-800"
      :class="snippet.length > 0 ? 'rounded-t-lg' : 'rounded-lg border-b'"
    >
      <slot />
    </div>

    <div
      v-if="snippet.length > 0"
      class="bg-gray-800 rounded-b-lg overflow-y-hidden relative"
      :class="{ 'transition-all duration-300 ease-in-out': mounted }"
      :style="[ isSnippetCodeOverflow ? { maxHeight: codeSnippetMaxHeight + 'px' } : {} ]"
    >
      <div
        ref="sample"
        class="p-4"
      >
        <div
          ref="dummyCode"
          class="invisible absolute p-4"
        >
          <code
            class="whitespace-pre-wrap text-sm"
          >&#8203;
            &#8203;
            &#8203;
            &#8203;</code>
        </div>

        <div
          ref="snippet"
          :class="{ 'pb-4': isSnippetCodeOverflow }"
        >
          <highlightjs
            v-for="(code, index) in snippet"
            :key="index"
            language="html"
            :code="code"
          />
        </div>
      </div>

      <div
        v-if="isSnippetCodeOverflow"
        ref="expandButton"
        class="absolute bottom-0 p-2 text-center w-full bg-gradient-to-t from-gray-800"
      >
        <button
          class="bg-gray-700 text-gray-100 rounded-full px-2 py-1 text-sm leading-tight focus:outline-none"
          @click="toggleCollapse()"
        >
          <template v-if="collapsed">
            {{ $t('common.expand') }}
          </template>
          <template v-else>
            {{ $t('common.collapse') }}
          </template>
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

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
    const codeSnippetMaxHeight: Number = 104;
    const collapsed: Boolean = true;
    const isSnippetCodeOverflow: Boolean = false;
    const mounted: Boolean = false;

    return {
      codeSnippetMaxHeight,
      collapsed,
      isSnippetCodeOverflow,
      mounted,
    };
  },

  computed: {
    id(): string {
      return this.title.toLowerCase().replace(/ /g, '-');
    },
  },

  beforeMount() {
    window.addEventListener('resize', this.resizeSnippetContent);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.resizeSnippetContent);
  },

  mounted() {
    this.setSnippetContentHeight();
    this.resizeSnippetContent();
    setTimeout(() => { this.mounted = true; }, 100);
  },

  methods: {
    setSnippetContentHeight() {
      if (!this.$refs.dummyCode || !this.$refs.snippet) return;

      this.codeSnippetMaxHeight = (this.$refs.dummyCode as HTMLInputElement).offsetHeight;
      this.isSnippetCodeOverflow = (this.$refs.snippet as HTMLInputElement).offsetHeight > this.codeSnippetMaxHeight;
    },

    toggleCollapse() {
      this.collapsed = !this.collapsed;
      this.$emit('toggle', this.collapsed);
      this.resizeSnippetContent();
    },

    resizeSnippetContent() {
      if (!this.$refs.snippet) return;

      if (this.collapsed) {
        this.codeSnippetMaxHeight = (this.$refs.dummyCode as HTMLInputElement).offsetHeight;
      } else {
        this.codeSnippetMaxHeight = (this.$refs.snippet as HTMLInputElement).offsetHeight + (this.$refs.expandButton as HTMLInputElement).offsetHeight;
      }
    },
  },
});
</script>
