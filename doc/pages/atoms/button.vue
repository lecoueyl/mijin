<template>
  <LayoutSample
    :title="$t('sections.atoms.button.title')"
    component="Button"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <bb-button>
        {{ $t('props.default') }}
      </bb-button>
    </Sample>

    <Sample
      :title="$t('props.secondary')"
      :snippet="samples.secondary"
    >
      <bb-button
        variant="secondary"
      >
        {{ $t('props.secondary') }}
      </bb-button>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <bb-button
        disabled
      >
        {{ $t('props.disabled') }}
      </bb-button>
    </Sample>

    <Sample
      :title="$t('props.icon')"
      :snippet="samples.icon"
    >
      <bb-button>
        <template v-slot:icon>
          <bb-icon name="copy" />
        </template>
        {{ $t('props.icon') }}
      </bb-button>

      <bb-button icon-right>
        <template v-slot:icon>
          <bb-icon name="filter" />
        </template>
        {{ $t('props.icon') }}
      </bb-button>

      <bb-button>
        <template v-slot:icon>
          <bb-icon name="alertCircle" />
        </template>
      </bb-button>
    </Sample>

    <Sample
      :title="$t('props.link')"
      :snippet="samples.link"
    >
      <bb-button
        tag="nuxt-link"
        :to="localePath('/')"
        class="inline-block"
      >
        {{ $t('props.link') }}
      </bb-button>
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <bb-button size="sm">
        {{ $t('props.size') }}
      </bb-button>

      <bb-button size="lg">
        {{ $t('props.size') }}
      </bb-button>
    </Sample>

    <Sample
      :title="$t('props.group')"
      :snippet="samples.size"
    >
      <div
        class="flex"
        role="group"
      >
        <bb-button group="first">
          {{ $t('props.group') }}
        </bb-button>

        <bb-button group>
          {{ $t('props.group') }}
        </bb-button>

        <bb-button group="last">
          <template v-slot:icon>
            <bb-icon name="calendar" />
          </template>
        </bb-button>
      </div>
    </Sample>

    <Sample
      :title="$t('props.loading')"
      :snippet="samples.loading"
    >
      <bb-button loading>
        {{ $t('props.loading') }}
      </bb-button>
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      samples: {
        default: [
          `<bb-button>
  ${this.$t('props.default')}
</bb-button>`,
        ],
        secondary: [
          `<bb-button variant="secondary">
  ${this.$t('props.secondary')}
</bb-button>`,
        ],
        disabled: [
          `<bb-button disabled>
  ${this.$t('props.disabled')}
</bb-button>`,
        ],
        icon: [
          `<bb-button icon="test">
  ${this.$t('props.icon')}
</bb-button>

<bb-button
  icon="test"
  icon-right
>
  ${this.$t('props.icon')}
</bb-button>

<bb-button icon="test" />`,
        ],
        link: [
          `<bb-button
  tag="nuxt-link"
  to="/"
  class="inline-block""
>
  ${this.$t('props.link')}
</bb-button>`,
        ],
        size: [
          `<bb-button size="sm">
  ${this.$t('props.size')}
</bb-button>

<bb-button size="lg">
  ${this.$t('props.size')}
</bb-button>`,
        ],
        loading: [
          `<bb-button loading>
  ${this.$t('props.loading')}
</bb-button>`,
        ],
      },
    };
  },
});
</script>
