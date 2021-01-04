<template>
  <div class="flex">
    <div class="flex-1">
      <MjHeadline
        :level="1"
        :size="2"
        class="pb-8"
      >
        {{ title }}
      </MjHeadline>

      <slot />

      <template v-if="componentsProperties">
        <MjHeadline
          id="api"
          :level="2"
          :size="2"
          class="pb-8"
        >
          {{ $t('common.properties') }}
        </MjHeadline>

        <section
          v-for="(component, componentName) in componentsProperties"
          :key="componentName"
        >
          <MjHeadline
            v-if="Object.keys(componentsProperties).length > 1"
            :id="componentName"
            :level="3"
            class="pb-4"
          >
            {{ componentName }}
          </MjHeadline>

          <div
            v-for="(properties, propertyName) in component"
            :key="propertyName"
          >
            <MjHeadline
              :level="4"
              class="pb-4 text-gray-800 dark:text-gray-300"
            >
              {{ $t(`common.${propertyName}`) }}
            </MjHeadline>

            <MjTable
              fixed
              class="mb-8"
            >
              <MjTableHead>
                <MjTableTitle class="bg-white dark:bg-gray-900 w-3/12">
                  {{ $t('common.name') }}
                </MjTableTitle>

                <template v-if="propertyName === 'props'">
                  <MjTableTitle class="bg-white dark:bg-gray-900">
                    {{ $t('common.type') }}
                  </MjTableTitle>

                  <MjTableTitle class="bg-white dark:bg-gray-900">
                    {{ $t('common.default') }}
                  </MjTableTitle>

                  <MjTableTitle class="bg-white dark:bg-gray-900">
                    {{ $t('common.required') }}
                  </MjTableTitle>
                </template>

                <template v-else>
                  <MjTableTitle class="bg-white dark:bg-gray-900">
                    {{ $t('common.description') }}
                  </MjTableTitle>
                </template>
              </MjTableHead>

              <MjTableBody>
                <MjTableRow
                  v-for="(prop, propName, propKey) in properties"
                  :key="propKey"
                >
                  <template v-if="propertyName === 'props'">
                    <MjTableCell>
                      {{ prop.name }}
                    </MjTableCell>

                    <MjTableCell>
                      <span
                        v-for="type in prop.type"
                        :key="type"
                      >
                        {{ type }}
                      </span>
                    </MjTableCell>

                    <MjTableCell>
                      {{ prop.default }}
                    </MjTableCell>

                    <MjTableCell>
                      {{ prop.required || false }}
                    </MjTableCell>
                  </template>

                  <template v-else>
                    <MjTableCell>
                      {{ propName }}
                    </MjTableCell>

                    <MjTableCell>
                      {{ prop.description }}
                    </MjTableCell>
                  </template>
                </MjTableRow>
              </MjTableBody>
            </MjTable>
          </div>
        </section>
      </template>
    </div>

    <nav class="w-1/4 pl-10 pt-10 sticky top-0 self-start text-sm hidden xl:block">
      <ul>
        <li
          v-for="(anchor, anchorIndex) in anchors"
          :key="anchor.id"
          :class="{ 'pt-2': anchorIndex != 0 }"
        >
          <a
            :href="`#${anchor.id}`"
            class="transition-colors duration-200 ease-in-out text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-50"
            :class="{'text-primary-500 dark:text-primary-500': anchor.id === currentAnchor}"
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
    const anchors = [];
    const anchorObserver = null;
    const currentAnchor = null;

    return {
      anchors,
      anchorObserver,
      currentAnchor,
    };
  },

  head() {
    return {
      title: this.title,
    };
  },

  computed: {
    componentsProperties() {
      if (!this.components) return null;

      const components = Array.isArray(this.components) ? this.components : [this.components];
      const properties = {};

      components.forEach((component) => {
        const i18nKey = `sections.atoms.${component.toLowerCase()}`;
        const props = this.$root?.$options?.components[`Mj${component}`]?.options?.props;

        if (props) {
          const mappedProps = Object.keys(props).map((key) => ({
            name: key,
            required: props[key].required,
            type: Array.isArray(props[key].type) ? props[key].type.map((type) => type.name) : [props[key].type.name],
            default: props[key].default,
          }));
          properties[component] = { props: mappedProps, ...properties[component] };
        }

        ['events', 'methods', 'slots'].forEach((property) => {
          if (this.$te(`${i18nKey}.${property}`)) {
            properties[component] = { [property]: this.$t(`${i18nKey}.${property}`), ...properties[component] };
          }
        });
      });

      return properties;
    },
  },

  mounted() {
    this.setAnchorObserver();
    this.setAnchors();
  },

  beforeDestroy() {
    this.anchorObserver.disconnect();
  },

  methods: {
    setAnchors() {
      document.querySelectorAll('h2').forEach((element) => {
        this.anchors.push({
          id: element.id,
          name: element?.textContent?.trim() || '',
        });

        this.anchorObserver.observe(element);
      });
    },

    setAnchorObserver() {
      this.anchorObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) this.currentAnchor = entry.target.id;
        });
      }, {
        root: document.body,
        threshold: 1,
      });
    },
  },
});
</script>
