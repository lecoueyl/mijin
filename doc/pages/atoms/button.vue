<template>
  <LayoutSample
    title="Button"
    :props="props"
  >
    <Sample title="Default">
      <bb-button>Default</bb-button>
    </Sample>

    <Sample title="Secondary">
      <bb-button
        type="secondary"
      >
        Secondary
      </bb-button>
    </Sample>

    <Sample title="Disabled">
      <bb-button
        disabled
      >
        Disabled
      </bb-button>
    </Sample>

    <Sample title="Icon">
      <bb-button
        icon="test"
      >
        Icon
      </bb-button>
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';
import { Button } from '../../../lib';

export default Vue.extend({
  data() {
    return {
      props: Button.props,
    };
  },
});
</script>
