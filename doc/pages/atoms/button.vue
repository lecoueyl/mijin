<template>
  <LayoutSample
    :title="$t('sections.atoms.button.title')"
    component="Button"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <bb-button type="reset">
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

    <Sample :title="$t('props.disabled')">
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
      <bb-button
        icon="test"
      >
        {{ $t('props.icon') }}
      </bb-button>

      <bb-button
        icon="test"
        icon-right
      >
        {{ $t('props.icon') }}
      </bb-button>

      <bb-button
        icon="test"
      />
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

        <bb-button
          icon="test"
          group="last"
        />
      </div>
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
  Default
</bb-button>`,
        ],
        secondary: [
          `<bb-button variant="secondary">
  Default
</bb-button>`,
        ],
        icon: [
          `<bb-button icon="test">
  Icon
</bb-button>

<bb-button
  icon="test"
  icon-right
>
  Icon
</bb-button>

<bb-button icon="test" />`,
        ],
        link: [
          `<bb-button
  tag="nuxt-link"
  to="/"
  class="inline-block""
>
  Link
</bb-button>`,
        ],
        size: [
          `<bb-button size="sm">
  Size
</bb-button>

<bb-button size="lg">
  Size
</bb-button>`,
        ],
      },
    };
  },
});
</script>
