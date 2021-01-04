<template>
  <LayoutSample
    :title="$t('sections.atoms.modal.title')"
    components="Modal"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjButton @click="$refs.default.open()">
        {{ $t('props.default') }}
      </MjButton>

      <MjModal ref="default">
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
            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50 text-center sm:text-left">
              Deactivate account
            </h3>

            <p class="pt-2 text-gray-800 dark:text-gray-300">
              Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.
            </p>
          </div>
        </div>

        <footer class="pt-8 flex justify-end">
          <MjButton
            variant="secondary"
            @click="$refs.default.close()"
          >
            {{ $t('props.default') }}
          </MjButton>

          <MjButton
            class="ml-2"
            @click="$refs.default.close()"
          >
            {{ $t('props.default') }}
          </MjButton>
        </footer>
      </MjModal>
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <template v-for="size in ['lg', 'full']">
        <div
          :key="size"
          class="inline-block mr-4 last:mr-0"
        >
          <MjButton @click="$refs[size][0].open()">
            {{ size }}
          </MjButton>

          <MjModal
            :ref="size"
            :size="size"
          >
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
                <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50  text-center sm:text-left">
                  Activate account
                </h3>

                <p class="pt-2 text-gray-800 dark:text-gray-300">
                  Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.
                </p>
              </div>
            </div>

            <footer class="pt-8 flex justify-end">
              <MjButton
                variant="secondary"
                @click="$refs[size][0].close()"
              >
                {{ $t('props.default') }}
              </MjButton>

              <MjButton
                class="ml-2"
                @click="$refs[size][0].close()"
              >
                {{ $t('props.default') }}
              </MjButton>
            </footer>
          </MjModal>
        </div>
      </template>
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
          `<MjNote>
  ${this.$t('props.default')}
</MjNote>`,
        ],
        variant: [
          `<MjNote variant="success>
  success
</MjNote>

<MjNote variant="error>
  error
</MjNote>

<MjNote variant="warning>
  warning
</MjNote>`,
        ],
        filled: [
          `<MjNote filled>
  ${this.$t('props.default')}
</MjNote>

<MjNote
  filled
  variant="success
>
  success
</MjNote>

<MjNote
  filled
  variant="error
>
  error
</MjNote>

<MjNote
  filled
  variant="warning
>
  warning
</MjNote>`,
        ],
      },
    };
  },
});
</script>
