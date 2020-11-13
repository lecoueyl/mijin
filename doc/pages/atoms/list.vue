<template>
  <LayoutSample
    :title="$t('sections.atoms.list.title')"
    :components="['List']"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbList>
        <BbListItem>
          {{ $t('examples.list.1') }}
        </BbListItem>
        <BbListItem>
          {{ $t('examples.list.2') }}
        </BbListItem>
        <BbListItem>
          {{ $t('examples.list.3') }}
        </BbListItem>
      </BbList>
    </Sample>

    <Sample
      :title="$t('props.bordered')"
      :snippet="samples.bordered"
    >
      <BbList bordered>
        <BbListItem>
          {{ $t('examples.list.1') }}
        </BbListItem>
        <BbListItem>
          {{ $t('examples.list.2') }}
        </BbListItem>
        <BbListItem>
          {{ $t('examples.list.3') }}
        </BbListItem>
      </BbList>
    </Sample>

    <Sample
      :title="$t('props.inline')"
      :snippet="samples.inline"
    >
      <BbList inline>
        <BbListItem>
          {{ $t('examples.list.1') }}
        </BbListItem>
        <BbListItem>
          {{ $t('examples.list.2') }}
        </BbListItem>
        <BbListItem>
          {{ $t('examples.list.3') }}
        </BbListItem>
      </BbList>
    </Sample>

    <Sample
      :title="$t('props.gutter')"
      :snippet="samples.gutter"
    >
      <BbList gutter="lg">
        <BbListItem>
          {{ $t('examples.list.1') }}
        </BbListItem>
        <BbListItem>
          {{ $t('examples.list.2') }}
        </BbListItem>
        <BbListItem>
          {{ $t('examples.list.3') }}
        </BbListItem>
      </BbList>
    </Sample>

    <Sample
      :title="$t('props.orderedList')"
      :snippet="samples.ol"
    >
      <BbList tag="ol">
        <BbListItem>
          {{ $t('examples.list.1') }}
        </BbListItem>
        <BbListItem>
          {{ $t('examples.list.2') }}
        </BbListItem>
        <BbListItem>
          {{ $t('examples.list.3') }}
        </BbListItem>
      </BbList>
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
          `<BbList>
  <BbListItem>
    ${this.$t('examples.list.1')}
  </BbListItem>
  <BbListItem>
    ${this.$t('examples.list.2')}
  </BbListItem>
  <BbListItem>
    ${this.$t('examples.list.3')}
  </BbListItem>
</BbList>`,
        ],
        bordered: [
          `<BbList bordered>
  <BbListItem>
    ${this.$t('examples.list.1')}
  </BbListItem>
  <BbListItem>
    ${this.$t('examples.list.2')}
  </BbListItem>
  <BbListItem>
    ${this.$t('examples.list.3')}
  </BbListItem>
</BbList>`,
        ],
        inline: [
          `<BbList inline>
  <BbListItem>
    ${this.$t('examples.list.1')}
  </BbListItem>
  <BbListItem>
    ${this.$t('examples.list.2')}
  </BbListItem>
  <BbListItem>
    ${this.$t('examples.list.3')}
  </BbListItem>
</BbList>`,
        ],
        gutter: [
          `<BbList gutter="lg">
  <BbListItem>
    ${this.$t('examples.list.1')}
  </BbListItem>
  <BbListItem>
    ${this.$t('examples.list.2')}
  </BbListItem>
  <BbListItem>
    ${this.$t('examples.list.3')}
  </BbListItem>
</BbList>`,
        ],
        ol: [
          `<BbList tag="ol">
  <BbListItem>
    ${this.$t('examples.list.1')}
  </BbListItem>
  <BbListItem>
    ${this.$t('examples.list.2')}
  </BbListItem>
  <BbListItem>
    ${this.$t('examples.list.3')}
  </BbListItem>
</BbList>`,
        ],
      },
    };
  },
});
</script>
