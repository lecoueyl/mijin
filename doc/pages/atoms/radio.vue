<template>
  <LayoutSample
    :title="$t('sections.atoms.radio.title')"
    components="Radio"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjRadio
        v-model="model.default"
        name="radio"
        :value="$t('examples.list.1')"
      >
        {{ $t('examples.list.1') }}
      </MjRadio>

      <MjRadio
        v-model="model.default"
        class="ml-4"
        name="radio"
        :value="$t('examples.list.2')"
      >
        {{ $t('examples.list.2') }}
      </MjRadio>
    </Sample>

    <Sample
      :title="$t('props.disabled')"
      :snippet="samples.disabled"
    >
      <MjRadio
        v-model="model.disabled"
        name="disabled"
        disabled
        :value="$t('examples.list.1')"
      >
        {{ $t('examples.list.1') }}
      </MjRadio>

      <MjRadio
        v-model="model.disabled"
        class="ml-4"
        name="disabled"
        disabled
        :value="$t('examples.list.2')"
      >
        {{ $t('examples.list.2') }}
      </MjRadio>
    </Sample>

    <Sample
      :title="$t('props.bordered')"
      :snippet="samples.bordered"
    >
      <div class="grid grid-cols-2 gap-4">
        <MjRadio
          v-model="model.bordered"
          name="bordered"
          bordered
          :value="$t('examples.list.1')"
        >
          {{ $t('examples.list.1') }}
          <template #summary>
            <div class="pt-1 text-sm text-gray-700 dark:text-gray-400">
              {{ $t('examples.summary') }}
            </div>
          </template>
        </MjRadio>

        <MjRadio
          v-model="model.bordered"
          class="ml-4"
          name="bordered"
          bordered
          :value="$t('examples.list.2')"
        >
          {{ $t('examples.list.2') }}
          <template #summary>
            <div class="pt-1 text-sm text-gray-700 dark:text-gray-400">
              {{ $t('examples.summary') }}
            </div>
          </template>
        </MjRadio>
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
          `<MjRadio
  v-model="radio"
  name="radio"
  value="${this.$t('examples.list.1')}"
>
  ${this.$t('examples.list.1')}
</MjRadio>

<MjRadio
  v-model="radio"
  class="ml-4"
  name="radio"
  value="${this.$t('examples.list.2')}"
>
  ${this.$t('examples.list.2')}
</MjRadio>`,
        ],
        disabled: [
          `<MjRadio
  v-model="radio"
  name="radio"
  disabled
  value="${this.$t('examples.list.1')}"
>
  ${this.$t('examples.list.1')}
</MjRadio>

<MjRadio
  v-model="radio"
  class="ml-4"
  name="radio"
  disabled
  value="${this.$t('examples.list.2')}"
>
  ${this.$t('examples.list.2')}
</MjRadio>`,
        ],
        bordered: [
          `<MjRadio
  v-model="radio"
  name="radio"
  bordered
  value="${this.$t('examples.list.1')}"
>
  ${this.$t('examples.list.1')}
  <template #summary>
    <div class="pt-1 text-sm text-gray-700">
      ${this.$t('examples.summary')}
    </div>
  </template>
</MjRadio>`,
        ],
      },
    };
  },
});
</script>
