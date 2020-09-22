<template>
  <LayoutSample
    title="Button"
    component="Button"
  >
    <Sample
      title="Default"
      snippet="
<bb-button>
  Default
</bb-button>"
    >
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

    <Sample
      title="Link"
    >
      <bb-button
        tag="nuxt-link"
        :to="localePath('atom-button')"
        class="inline-block"
      >
        Link
      </bb-button>
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>
