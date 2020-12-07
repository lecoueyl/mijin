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

      <template v-if="componentsProperties">
        <section
          v-for="(component, propertyName) in componentsProperties"
          :key="propertyName"
        >
          <BbHeadline
            :id="propertyName"
            :level="2"
            :size="2"
            class="pb-8"
          >
            {{ $t(`common.${propertyName}`) }}
          </BbHeadline>

          <div
            v-for="(properties, componentName, index) in component"
            :key="componentName"
          >
            <BbHeadline
              v-if="Object.keys(properties).length > 1"
              :class="{ 'pt-10': index > 0 }"
              :level="3"
              :size="4"
              class="pb-8"
            >
              {{ componentName }}
            </BbHeadline>

            <BbTable>
              <BbTableHead>
                <BbTableTitle class="bg-background">
                  {{ $t('common.name') }}
                </BbTableTitle>

                <template v-if="propertyName === 'props'">
                  <BbTableTitle class="bg-background">
                    {{ $t('common.type') }}
                  </BbTableTitle>

                  <BbTableTitle class="bg-background">
                    {{ $t('common.default') }}
                  </BbTableTitle>

                  <BbTableTitle class="bg-background">
                    {{ $t('common.required') }}
                  </BbTableTitle>
                </template>

                <template v-else>
                  <BbTableTitle class="bg-background">
                    {{ $t('common.description') }}
                  </BbTableTitle>
                </template>
              </BbTableHead>

              <BbTableBody>
                <BbTableRow
                  v-for="(prop, propName, propKey) in properties"
                  :key="propKey"
                >
                  <template v-if="propertyName === 'props'">
                    <BbTableCell>
                      {{ prop.name }}
                    </BbTableCell>

                    <BbTableCell>
                      <span
                        v-for="type in prop.type"
                        :key="type"
                      >
                        {{ type }}
                      </span>
                    </BbTableCell>

                    <BbTableCell>
                      {{ prop.default }}
                    </BbTableCell>

                    <BbTableCell>
                      {{ prop.required || false }}
                    </BbTableCell>
                  </template>

                  <template v-else>
                    <BbTableCell>
                      {{ propName }}
                    </BbTableCell>

                    <BbTableCell>
                      {{ prop.description }}
                    </BbTableCell>
                  </template>
                </BbTableRow>
              </BbTableBody>
            </BbTable>
          </div>
        </section>
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
    const anchors = [];

    return {
      anchors,
    };
  },

  head() {
    return {
      title: this.title,
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

    componentsProperties() {
      if (!this.components) return null;

      const components = Array.isArray(this.components) ? this.components : [this.components];
      const properties = {
        props: {},
      };

      components.forEach((component) => {
        const i18nKey = `sections.atoms.${component.toLowerCase()}`;
        const props = this.$root?.$options?.components[`Bb${component}`]?.options?.props;

        if (props) {
          const mappedProps = Object.keys(props).map((key) => ({
            name: key,
            required: props[key].required,
            type: Array.isArray(props[key].type) ? props[key].type.map((type) => type.name) : [props[key].type.name],
            default: props[key].default,
          }));
          properties.props[component] = mappedProps;
        }

        ['events', 'methods', 'slots'].forEach((property) => {
          if (this.$te(`${i18nKey}.${property}`)) {
            properties[property] = { [component]: this.$t(`${i18nKey}.${property}`) };
          }
        });
      });

      return properties;
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
