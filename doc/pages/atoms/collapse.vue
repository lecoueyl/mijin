<template>
  <LayoutSample
    :title="$t('sections.atoms.collapse.title')"
    components="Collapse"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbCollapse>
        {{ $t('props.default') }}
        <template #content>
          {{ $t('examples.sentence') }}
        </template>
      </BbCollapse>
    </Sample>

    <Sample
      :title="$t('props.expanded')"
      :snippet="samples.expanded"
    >
      <BbCollapse expanded>
        {{ $t('props.expanded') }}
        <template #content>
          {{ $t('examples.sentence') }}
        </template>
      </BbCollapse>
    </Sample>

    <Sample
      :title="$t('props.iconPosition')"
      :snippet="samples.icon"
    >
      <BbCollapse icon-left>
        {{ $t('props.iconPosition') }}
        <template #content>
          {{ $t('examples.sentence') }}
        </template>
      </BbCollapse>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <BbCollapse disabled>
        {{ $t('props.disabled') }}
        <template #content>
          {{ $t('examples.sentence') }}
        </template>
      </BbCollapse>
    </Sample>

    <Sample
      :title="$t('props.summary')"
      :snippet="samples.summary"
    >
      <BbCollapse class="pb-4 border-b border-gray-400">
        <BbHeadline :level="3">
          {{ $t('props.summary') }}
        </BbHeadline>

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
      </BbCollapse>
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      samples: {
        default: [`<BbCollapse>
  ${this.$t('props.default')}
  <template #content>
    ${this.$t('examples.sentence')}
  </template>
</BbCollapse>`],
        expanded: [`<BbCollapse expanded>
  ${this.$t('props.expanded')}
  <template #content>
    ${this.$t('examples.sentence')}
  </template>
</BbCollapse>`],
        icon: [`<BbCollapse icon-left>
  ${this.$t('props.iconPosition')}
  <template #content>
    ${this.$t('examples.sentence')}
  </template>
</BbCollapse>`],
        disabled: [`<BbCollapse disabled>
  ${this.$t('props.disabled')}
  <template #content>
    ${this.$t('examples.sentence')}
  </template>
</BbCollapse>`],
        summary: [`<BbCollapse class="pb-4 border-b border-gray-400">
  <BbHeadline :level="2">
    ${this.$t('props.summary')}
  </BbHeadline>

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
</BbCollapse>`],
      },
    };
  },
});
</script>
