<template>
  <LayoutSample
    :title="$t('sections.atoms.radio.title')"
    components="Radio"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbRadio
        v-model="model.default"
        name="radio"
        :value="$t('examples.list.1')"
      >
        {{ $t('examples.list.1') }}
      </BbRadio>

      <BbRadio
        v-model="model.default"
        class="ml-4"
        name="radio"
        :value="$t('examples.list.2')"
      >
        {{ $t('examples.list.2') }}
      </BbRadio>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <BbRadio
        v-model="model.disabled"
        name="disabled"
        disabled
        :value="$t('examples.list.1')"
      >
        {{ $t('examples.list.1') }}
      </BbRadio>

      <BbRadio
        v-model="model.disabled"
        class="ml-4"
        name="disabled"
        disabled
        :value="$t('examples.list.2')"
      >
        {{ $t('examples.list.2') }}
      </BbRadio>
    </Sample>

    <Sample
      :title="$t('props.bordered')"
      :snippet="samples.bordered"
    >
      <div class="grid grid-cols-2 gap-4">
        <BbRadio
          v-model="model.bordered"
          name="bordered"
          bordered
          :value="$t('examples.list.1')"
        >
          {{ $t('examples.list.1') }}
          <template v-slot:summary>
            <div class="pt-1 text-sm text-gray-700">
              {{ $t('examples.summary') }}
            </div>
          </template>
        </BbRadio>

        <BbRadio
          v-model="model.bordered"
          class="ml-4"
          name="bordered"
          bordered
          :value="$t('examples.list.2')"
        >
          {{ $t('examples.list.2') }}
          <template v-slot:summary>
            <div class="pt-1 text-sm text-gray-700">
              {{ $t('examples.summary') }}
            </div>
          </template>
        </BbRadio>
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
        default: this.$t('examples.list.1'),
        disabled: this.$t('examples.list.1'),
        bordered: this.$t('examples.list.1'),
      },
      samples: {
        default: [
          `<BbRadio
  v-model="radio"
  name="radio"
  value="${this.$t('examples.list.1')}"
>
  ${this.$t('examples.list.1')}
</BbRadio>

<BbRadio
  v-model="radio"
  class="ml-4"
  name="radio"
  value="${this.$t('examples.list.2')}"
>
  ${this.$t('examples.list.2')}
</BbRadio>`,
        ],
        disabled: [
          `<BbRadio
  v-model="radio"
  name="radio"
  disabled
  value="${this.$t('examples.list.1')}"
>
  ${this.$t('examples.list.1')}
</BbRadio>

<BbRadio
  v-model="radio"
  class="ml-4"
  name="radio"
  disabled
  value="${this.$t('examples.list.2')}"
>
  ${this.$t('examples.list.2')}
</BbRadio>`,
        ],
        bordered: [
          `<BbRadio
  v-model="radio"
  name="radio"
  bordered
  value="${this.$t('examples.list.1')}"
>
  ${this.$t('examples.list.1')}
  <template v-slot:summary>
    <div class="pt-1 text-sm text-gray-700">
      ${this.$t('examples.summary')}
    </div>
  </template>
</BbRadio>`,
        ],
      },
    };
  },
});
</script>
