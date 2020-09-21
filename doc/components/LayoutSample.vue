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

      <template v-if="props">
        <BbHeadline
          :level="2"
          :size="2"
          class="pb-8"
        >
          Props
        </BbHeadline>

        {{ props }}
      </template>
    </div>

    <nav class="w-1/4 pl-10 pt-10 sticky top-0 self-start text-sm">
      <ul>
        <li
          v-for="(anchor, anchorIndex) in anchors"
          :key="anchor.id"
          :class="{ 'pt-2': anchorIndex != 0 }"
        >
          <a
            :href="`#${anchor.id}`"
            class="transition-fast text-gray-700 hover:text-foreground"
          >
            {{ anchor.name }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    component: {
      default: null,
      required: false,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
  },

  data() {
    return {
      anchors: [],
    };
  },

  computed: {
    props() {
      return this.$root?.$options?.components[`Bb${this.component}`]?.options?.props || null;
    },
  },

  mounted() {
    document.querySelectorAll('h2').forEach((element) => this.anchors.push({
      id: element.id,
      name: element?.textContent?.trim() || '',
    }));
  },
});
</script>
