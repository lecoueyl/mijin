<template>
  <LayoutSample
    :title="$t('sections.atoms.tag.title')"
    components="Tag"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbTag>
        {{ $t('props.default') }}
      </BbTag>
    </Sample>

    <Sample
      :title="$t('props.removable')"
      :snippet="samples.removable"
    >
      <BbTag
        v-if="showTag"
        removable
        @remove="removeTag()"
      >
        {{ $t('props.removable') }}
      </BbTag>
    </Sample>

    <Sample
      :title="$t('props.color')"
      :snippet="samples.color"
    >
      <BbTag
        v-for="(color, index) in [
          { bg: 'primary-100', text: 'primary-500'},
          { bg: 'primary-500', text: 'white'},
        ]"
        :key="index"
        :bg-color="color.bg"
        :text-color="color.text"
        :class="[{ 'ml-2': index !== 0 }]"
      >
        {{ $t('props.color') }}
      </BbTag>
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <BbTag size="sm">
        {{ $t('props.size') }}
      </BbTag>
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      showTag: true,
      samples: {
        default: [`<BbTag hred="#">
  ${this.$t('props.tag')}
</BbTag>`],
        removable: [`<BbTag
  removable
  @remove="remove()"
>
  ${this.$t('props.removable')}
</BbTag>`],
        color: [`<BbTag
  bg-color="primary-100"
  text-color="primary-500"
>
  ${this.$t('props.color')}
</BbTag>

<BbTag
  bg-color="primary-500"
  text-color="white"
>
  ${this.$t('props.color')}
</BbTag>
`],
        size: [`<BbTag size="sm">
  ${this.$t('props.size')}
</BbTag>`],
      },
    };
  },

  methods: {
    removeTag() {
      this.showTag = false;
      setTimeout(() => {
        this.showTag = true;
      }, 500);
    },
  },
});
</script>
