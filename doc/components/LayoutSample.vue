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

      <template v-if="componentsProps">
        <BbHeadline
          id="props"
          :level="2"
          :size="2"
          class="pb-8"
        >
          {{ $t('common.props') }}
        </BbHeadline>

        <div
          v-for="(props, name, index) in componentsProps"
          :key="name"
        >
          <BbHeadline
            v-if="Object.keys(componentsProps).length > 1"
            :class="{ 'pt-10': index > 0 }"
            :level="3"
            :size="4"
            class="pb-8"
          >
            {{ name }}
          </BbHeadline>

          <table class="w-full table-fixed relative">
            <thead>
              <tr class="text-left text-sm text-gray-700">
                <th class="bg-background py-2 font-medium sticky top-0 w-1/4">
                  {{ $t('common.name') }}
                </th>

                <th class="bg-background py-2 font-medium sticky top-0 w-1/4">
                  {{ $t('common.type') }}
                </th>

                <th class="bg-background py-2 font-medium sticky top-0 w-1/4">
                  {{ $t('common.default') }}
                </th>

                <th class="bg-background py-2 font-medium sticky top-0 w-1/4">
                  {{ $t('common.required') }}
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="prop in props"
                :key="prop.name"
                class="align-top border-b border-gray-200"
              >
                <td class="py-2">
                  {{ prop.name }}
                </td>

                <td class="py-2">
                  <span
                    v-for="type in prop.type"
                    :key="type"
                  >
                    {{ type }}
                  </span>
                </td>

                <td class="py-2">
                  {{ prop.default }}
                </td>

                <td class="py-2">
                  {{ prop.required || false }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
            class="transition-colors duration-200 ease-in-out text-gray-700 hover:text-foreground"
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
    components: {
      default: null,
      type: [Array, String],
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
    componentsProps() {
      if (!this.components) return null;

      const components = Array.isArray(this.components) ? this.components : [this.components];
      const props = {};
      components.forEach((component) => {
        const prop = this.$root?.$options?.components[`Bb${component}`]?.options?.props;
        props[component] = Object.keys(prop).map((key) => ({
          name: key,
          required: prop[key].required,
          type: Array.isArray(prop[key].type) ? prop[key].type.map((type) => type.name) : [prop[key].type.name],
          default: prop[key].default,
        }));
      });

      return props;
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
