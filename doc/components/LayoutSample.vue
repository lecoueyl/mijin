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

        <table class="w-full table-auto">
          <thead>
            <tr class="text-left">
              <th class="py-2">Name</th>
              <th class="py-2">Default</th>
              <th class="py-2">Required</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="prop in props"
              :key="prop.name"
            >
              <td class="border-b py-2">
                {{ prop.name }}
              </td>

              <td class="border-b py-2">
                {{ prop.default }}
              </td>

              <td class="border-b py-2">
                {{ prop.required || false }}
              </td>
            </tr>
          </tbody>
        </table>

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
      required: true,
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
      const props = this.$root?.$options?.components[`Bb${this.component}`]?.options?.props;
      console.table(props);
      const test = Object.keys(props).map((key) => ({
        name: key,
        required: props[key].required,
        type: JSON.stringify(props[key].type),
        default: props[key].default,
      }));

      // console.table(test);
      return test;
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
