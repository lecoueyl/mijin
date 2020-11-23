<template>
  <LayoutSample
    :title="$t('sections.atoms.button.title')"
    components="Button"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbButton>
        {{ $t('props.default') }}
      </BbButton>
    </Sample>

    <Sample
      :title="$t('props.secondary')"
      :snippet="samples.secondary"
    >
      <BbButton
        variant="secondary"
      >
        {{ $t('props.secondary') }}
      </BbButton>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <BbButton
        disabled
      >
        {{ $t('props.disabled') }}
      </BbButton>
    </Sample>

    <Sample
      :title="$t('props.icon')"
      :snippet="samples.icon"
    >
      <BbButton>
        <template #icon>
          <bb-icon name="copy" />
        </template>
        {{ $t('props.icon') }}
      </BbButton>

      <BbButton icon-right>
        <template #icon>
          <bb-icon name="filter" />
        </template>
        {{ $t('props.icon') }}
      </BbButton>

      <BbButton>
        <template #icon>
          <bb-icon name="alertCircle" />
        </template>
      </BbButton>
    </Sample>

    <Sample
      :title="$t('props.link')"
      :snippet="samples.link"
    >
      <BbButton
        tag="nuxt-link"
        :to="localePath('/')"
        class="inline-block"
      >
        {{ $t('props.link') }}
      </BbButton>
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <BbButton size="sm">
        {{ $t('props.size') }}
      </BbButton>

      <BbButton size="lg">
        {{ $t('props.size') }}
      </BbButton>
    </Sample>

    <Sample
      :title="$t('props.group')"
      :snippet="samples.group"
    >
      <div
        class="flex"
        role="group"
      >
        <BbButton group="first">
          {{ $t('props.group') }}
        </BbButton>

        <BbButton group>
          {{ $t('props.group') }}
        </BbButton>

        <BbButton group="last">
          <template #icon>
            <bb-icon name="calendar" />
          </template>
        </BbButton>
      </div>
    </Sample>

    <Sample
      :title="$t('props.loading')"
      :snippet="samples.loading"
    >
      <BbButton loading>
        {{ $t('props.loading') }}
      </BbButton>
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
          `<BbButton>
  ${this.$t('props.default')}
</BbButton>`,
        ],
        secondary: [
          `<BbButton variant="secondary">
  ${this.$t('props.secondary')}
</BbButton>`,
        ],
        disabled: [
          `<BbButton disabled>
  ${this.$t('props.disabled')}
</BbButton>`,
        ],
        icon: [
          `<BbButton icon="test">
  ${this.$t('props.icon')}
</BbButton>

<BbButton
  icon="test"
  icon-right
>
  ${this.$t('props.icon')}
</BbButton>

<BbButton icon="test" />`,
        ],
        link: [
          `<BbButton
  tag="nuxt-link"
  to="/"
  class="inline-block"
>
  ${this.$t('props.link')}
</BbButton>`,
        ],
        size: [
          `<BbButton size="sm">
  ${this.$t('props.size')}
</BbButton>

<BbButton size="lg">
  ${this.$t('props.size')}
</BbButton>`,
        ],
        group: [`<div
  class="flex"
  role="group"
>
  <BbButton group="first">
    ${this.$t('props.group')}
  </BbButton>

  <BbButton group>
    ${this.$t('props.group')}
  </BbButton>

  <BbButton group="last">
    <template #icon>
      <bb-icon name="calendar" />
    </template>
  </BbButton>
</div>`,
        ],
        loading: [
          `<BbButton loading>
  ${this.$t('props.loading')}
</BbButton>`,
        ],
      },
    };
  },
});
</script>
