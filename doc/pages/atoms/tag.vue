<template>
  <LayoutSample
    :title="$t('sections.atoms.tag.title')"
    components="Tag"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjTag>
        {{ $t('props.default') }}
      </MjTag>
    </Sample>

    <Sample
      :title="$t('props.removable')"
      :snippet="samples.removable"
    >
      <MjTag
        v-if="showTag"
        removable
        @remove="removeTag()"
      >
        {{ $t('props.removable') }}
      </MjTag>
    </Sample>

    <Sample
      :title="$t('props.color')"
      :snippet="samples.color"
    >
      <MjTag
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
      </MjTag>
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <MjTag size="sm">
        {{ $t('props.size') }}
      </MjTag>
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
        default: [`<MjTag hred="#">
  ${this.$t('props.tag')}
</MjTag>`],
        removable: [`<MjTag
  removable
  @remove="remove()"
>
  ${this.$t('props.removable')}
</MjTag>`],
        color: [`<MjTag
  bg-color="primary-100"
  text-color="primary-500"
>
  ${this.$t('props.color')}
</MjTag>

<MjTag
  bg-color="primary-500"
  text-color="white"
>
  ${this.$t('props.color')}
</MjTag>
`],
        size: [`<MjTag size="sm">
  ${this.$t('props.size')}
</MjTag>`],
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
