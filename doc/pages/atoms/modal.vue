<template>
  <LayoutSample
    :title="$t('sections.atoms.modal.title')"
    components="Modal"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbButton @click="$refs.default.open()">
        {{ $t('props.default') }}
      </BbButton>

      <BbModal ref="default">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <!-- Heroicon name: exclamation -->
            <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div class="mt-3  sm:mt-0 sm:ml-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900 text-center sm:text-left">
              Deactivate account
            </h3>

            <p class="pt-2 text-gray-800">
              Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.
            </p>
          </div>
        </div>

        <footer class="pt-8 flex justify-end">
          <BbButton
            variant="secondary"
            @click="$refs.default.close()"
          >
            {{ $t('props.default') }}
          </BbButton>

          <BbButton
            class="ml-2"
            @click="$refs.default.close()"
          >
            {{ $t('props.default') }}
          </BbButton>
        </footer>
      </BbModal>
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
          `<BbNote>
  ${this.$t('props.default')}
</BbNote>`,
        ],
        variant: [
          `<BbNote variant="success>
  success
</BbNote>

<BbNote variant="error>
  error
</BbNote>

<BbNote variant="warning>
  warning
</BbNote>`,
        ],
        filled: [
          `<BbNote filled>
  ${this.$t('props.default')}
</BbNote>

<BbNote
  filled
  variant="success
>
  success
</BbNote>

<BbNote
  filled
  variant="error
>
  error
</BbNote>

<BbNote
  filled
  variant="warning
>
  warning
</BbNote>`,
        ],
      },
    };
  },
});
</script>
