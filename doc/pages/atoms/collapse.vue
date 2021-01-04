<template>
  <LayoutSample
    :title="$t('sections.atoms.collapse.title')"
    components="Collapse"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjCollapse>
        {{ $t('props.default') }}
        <template #content>
          {{ $t('examples.sentence') }}
        </template>
      </MjCollapse>
    </Sample>

    <Sample
      :title="$t('props.expanded')"
      :snippet="samples.expanded"
    >
      <MjCollapse expanded>
        {{ $t('props.expanded') }}
        <template #content>
          {{ $t('examples.sentence') }}
        </template>
      </MjCollapse>
    </Sample>

    <Sample
      :title="$t('props.iconPosition')"
      :snippet="samples.icon"
    >
      <MjCollapse icon-left>
        {{ $t('props.iconPosition') }}
        <template #content>
          {{ $t('examples.sentence') }}
        </template>
      </MjCollapse>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <MjCollapse disabled>
        {{ $t('props.disabled') }}
        <template #content>
          {{ $t('examples.sentence') }}
        </template>
      </MjCollapse>
    </Sample>

    <Sample
      :title="$t('props.summary')"
      :snippet="samples.summary"
    >
      <MjCollapse class="pb-4 border-b border-gray-400">
        <MjHeadline :level="3">
          {{ $t('props.summary') }}
        </MjHeadline>

        <template #summary>
          <div class="text-gray-700">
            {{ $t('examples.summary') }}
          </div>
        </template>

        <template #content>
          <div class="pt-4">
            {{ $t('examples.sentence') }}
          </div>
        </template>
      </MjCollapse>
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      samples: {
        default: [`<MjCollapse>
  ${this.$t('props.default')}
  <template #content>
    ${this.$t('examples.sentence')}
  </template>
</MjCollapse>`],
        expanded: [`<MjCollapse expanded>
  ${this.$t('props.expanded')}
  <template #content>
    ${this.$t('examples.sentence')}
  </template>
</MjCollapse>`],
        icon: [`<MjCollapse icon-left>
  ${this.$t('props.iconPosition')}
  <template #content>
    ${this.$t('examples.sentence')}
  </template>
</MjCollapse>`],
        disabled: [`<MjCollapse disabled>
  ${this.$t('props.disabled')}
  <template #content>
    ${this.$t('examples.sentence')}
  </template>
</MjCollapse>`],
        summary: [`<MjCollapse class="pb-4 border-b border-gray-400">
  <MjHeadline :level="2">
    ${this.$t('props.summary')}
  </MjHeadline>

  <template #summary>
    <div class="text-gray-700">
      ${this.$t('examples.summary')}
    </div>
  </template>

  <template #content>
    <div class="pt-4">
      ${this.$t('examples.sentence')}
    </div>
  </template>
</MjCollapse>`],
      },
    };
  },
});
</script>
