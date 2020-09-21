<template>
  <div class="flex">
    <div class="flex-1">
      <BbHeadline
        :level="1"
        :size="2"
        class="pb-8"
      >
        {{ title }}
      </BbHeadline>

      <slot />
    </div>

    <nav class="w-1/4 pl-10 pt-10 sticky top-0 left-0 text-sm">
      <ul>
        <li
          v-for="(anchor, anchorName, anchorIndex) in anchors"
          :key="anchorName"
          :class="{ 'pt-2': anchorIndex != 0 }"
        >
          <a
            :href="`#${anchor}`"
            class="transition-fast text-gray-700 hover:text-foreground"
          >
            {{ anchor }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      anchors: [],
    };
  },

  mounted() {
    document.querySelectorAll('h2').forEach((element) => this.anchors.push(element.textContent.trim()));
  },
});
</script>
