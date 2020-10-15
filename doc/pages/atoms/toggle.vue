<template>
  <LayoutSample
    :title="$t('sections.atoms.toggle.title')"
    components="Toggle"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbToggle
        v-model="model.default"
        name="Toggle"
      >
        {{ $t('props.default') }}
      </BbToggle>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <div class="flex">
        <BbToggle
          v-model="model.false"
          disabled
        >
          {{ $t('props.disabled') }}
        </BbToggle>

        <BbToggle
          v-model="model.true"
          disabled
          class="ml-6"
        >
          {{ $t('props.disabled') }}
        </BbToggle>
      </div>
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <div class="flex items-center">
        <BbToggle
          v-for="size in ['sm', 'base']"
          :key="size"
          v-model="model.size"
          :size="size"
          class="mr-6"
        >
          <span :class="{'text-sm leading-loose' : size === 'sm'}">{{ size }}</span>
        </BbToggle>
      </div>
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      model: {
        default: true,
        false: false,
        true: true,
        size: false,
      },
      samples: {
        default: [
          `<BbToggle
  v-model="value"
  name="Toggle"
>
  Default
</BbToggle>`,
        ],
        disabled: [
          `<BbToggle
  v-model="value"
  name="Toggle"
  disabled
>
  Disabled
</BbToggle>`,
        ],
        size: [
          `<BbToggle
  v-model="value"
  name="Toggle"
  size="sms
>
  sm
</BbToggle>

<BbToggle
  v-model="value"
  name="Toggle"
  size="base
>
  base
</BbToggle>`,
        ],
      },
    };
  },
});
</script>
