<template>
  <LayoutSample
    :title="$t('sections.atoms.list.title')"
    :components="['List']"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjList>
        <MjListItem>
          {{ $t('examples.list.1') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.list.2') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.list.3') }}
        </MjListItem>
      </MjList>
    </Sample>

    <Sample
      :title="$t('props.divided')"
      :snippet="samples.divided"
    >
      <MjList divided>
        <MjListItem>
          {{ $t('examples.list.1') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.list.2') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.list.3') }}
        </MjListItem>
      </MjList>
    </Sample>

    <Sample
      :title="$t('props.inline')"
      :snippet="samples.inline"
    >
      <MjList inline>
        <MjListItem>
          {{ $t('examples.list.1') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.list.2') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.list.3') }}
        </MjListItem>
      </MjList>
    </Sample>

    <Sample
      :title="$t('props.gutter')"
      :snippet="samples.gutter"
    >
      <MjList gutter="lg">
        <MjListItem>
          {{ $t('examples.list.1') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.list.2') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.list.3') }}
        </MjListItem>
      </MjList>
    </Sample>

    <Sample
      :title="$t('props.orderedList')"
      :snippet="samples.ol"
    >
      <MjList tag="ol">
        <MjListItem>
          {{ $t('examples.list.1') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.list.2') }}
        </MjListItem>
        <MjListItem>
          {{ $t('examples.list.3') }}
        </MjListItem>
      </MjList>
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
          `<MjList>
  <MjListItem>
    ${this.$t('examples.list.1')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.list.2')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.list.3')}
  </MjListItem>
</MjList>`,
        ],
        divided: [
          `<MjList divided>
  <MjListItem>
    ${this.$t('examples.list.1')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.list.2')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.list.3')}
  </MjListItem>
</MjList>`,
        ],
        inline: [
          `<MjList inline>
  <MjListItem>
    ${this.$t('examples.list.1')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.list.2')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.list.3')}
  </MjListItem>
</MjList>`,
        ],
        gutter: [
          `<MjList gutter="lg">
  <MjListItem>
    ${this.$t('examples.list.1')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.list.2')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.list.3')}
  </MjListItem>
</MjList>`,
        ],
        ol: [
          `<MjList tag="ol">
  <MjListItem>
    ${this.$t('examples.list.1')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.list.2')}
  </MjListItem>
  <MjListItem>
    ${this.$t('examples.list.3')}
  </MjListItem>
</MjList>`,
        ],
      },
    };
  },
});
</script>
