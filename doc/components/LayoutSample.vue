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
          id="props"
          :level="2"
          :size="2"
          class="pb-8"
        >
          Props
        </BbHeadline>

        <table class="w-full table-auto relative">
          <thead>
            <tr class="text-left text-sm text-gray-700">
              <th class="bg-background py-2 font-medium sticky top-0">
                Name
              </th>

              <th class="bg-background py-2 font-medium sticky top-0">
                Type
              </th>

              <th class="bg-background py-2 font-medium sticky top-0">
                Default
              </th>

              <th class="bg-background py-2 font-medium sticky top-0">
                Required
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="prop in props"
              :key="prop.name"
            >
              <td class="border-b border-gray-200 py-2">
                {{ prop.name }}
              </td>

              <td class="border-b border-gray-200 py-2">
                <span
                  v-for="type in prop.type"
                  :key="type"
                >
                  {{ type }}
                </span>
              </td>

              <td class="border-b border-gray-200 py-2">
                {{ prop.default }}
              </td>

              <td class="border-b border-gray-200 py-2">
                {{ prop.required || false }}
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </div>

    <nav
      v-if="anchors.length > 0"
      class="w-1/4 pl-10 pt-10 sticky top-0 self-start text-sm hidden xl:block"
    >
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

      if (props) {
        return Object.keys(props).map((key) => ({
          name: key,
          required: props[key].required,
          type: Array.isArray(props[key].type) ? props[key].type.map((type) => type.name) : [props[key].type.name],
          default: props[key].default,
        }));
      }

      return null;
    },
  },

  mounted() {
    document.querySelectorAll('h2').forEach((element) => this.anchors.push({
      id: element.id,
      name: element?.textContent?.trim() || '',
    }));
  },

  head() {
    return {
      title: this.title,
    };
  },
});
</script>
