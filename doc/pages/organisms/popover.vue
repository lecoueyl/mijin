<template>
  <LayoutSample
    :title="$t('sections.organisms.popover.title')"
  >
    <Sample
      :title="$t('sections.organisms.popover.actionMenu')"
      :snippet="samples.login"
    >
      <div class="flex justify-center">
        <div
          class="flex"
          role="group"
        >
          <MjButton group="first">
            {{ $t('sections.organisms.popover.edit') }}
          </MjButton>

          <MjPopover
            ref="popover"
            align="right"
          >
            <MjButton group="last">
              <template #icon>
                <MjIcon name="chevronDown" />
              </template>
            </MjButton>

            <template #content>
              <MjPopoverContainer class="py-2 w-64">
                <MjPopoverItem
                  class="mx-1"
                  @click.prevent="toggleSize()"
                >
                  {{ $t('sections.organisms.popover.smallText') }}
                  <template #action>
                    <MjToggle
                      v-model="model.size"
                      size="sm"
                    />
                  </template>
                </MjPopoverItem>

                <MjPopoverItem
                  class="mx-1"
                  @click.prevent="model.width = !model.width"
                >
                  {{ $t('sections.organisms.popover.fullWidth') }}
                  <template #action>
                    <MjToggle
                      v-model="model.width"
                      size="sm"
                    />
                  </template>
                </MjPopoverItem>

                <MjDivider class="my-2" />

                <MjPopoverItem
                  tag="a"
                  href="#app"
                  class="mx-1"
                >
                  <template #icon>
                    <MjIcon name="smartphone" />
                  </template>
                  {{ $t('sections.organisms.popover.openApp') }}
                </MjPopoverItem>

                <MjPopoverItem class="mx-1">
                  <template #icon>
                    <MjIcon name="calendar" />
                  </template>
                  {{ $t('sections.organisms.popover.addToCalendar') }}
                </MjPopoverItem>

                <MjPopoverItem class="mx-1">
                  <template #icon>
                    <MjIcon name="copy" />
                  </template>
                  {{ $t('sections.organisms.popover.copyLink') }}
                </MjPopoverItem>

                <MjPopoverItem class="mx-1">
                  <template #icon>
                    <MjIcon name="share" />
                  </template>
                  {{ $t('sections.organisms.popover.share') }}
                </MjPopoverItem>

                <MjDivider class="my-2" />

                <MjPopoverItem class="mx-1">
                  <template #icon>
                    <MjIcon name="rotateCcw" />
                  </template>
                  {{ $t('sections.organisms.popover.undo') }}
                </MjPopoverItem>

                <MjPopoverItem
                  variant="danger"
                  class="mx-1"
                  @click="$refs.popover.close()"
                >
                  <template #icon>
                    <MjIcon name="trash" />
                  </template>
                  {{ $t('sections.organisms.popover.delete') }}
                </MjPopoverItem>

                <MjDivider class="my-2" />

                <p class="px-4 py-2 text-gray-600 dark:text-gray-400 text-sm">
                  {{ $t('sections.organisms.popover.lastEdit') }}
                  <br>
                  {{ $t('sections.organisms.popover.today') }}
                </p>
              </MjPopoverContainer>
            </template>
          </MjPopover>
        </div>
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
        size: false,
        width: false,
      },
      samples: {
        login: [
          `<form class="lg:w-1/2 lg:mx-auto grid gap-4">
  <MjInput v-model="model.signIn.username">
    ${this.$t('sections.organisms.form.username')}
  </MjInput>

  <MjInput
    v-model="model.signIn.password"
    type="password"
  >
    ${this.$t('sections.organisms.form.password')}
  </MjInput>

  <div class="flex items-center mt-2">
    <div class="flex-1">
      <MjLink href="#">
        ${this.$t('sections.organisms.form.forgotPassword')}
      </MjLink>
    </div>

    <div>
      <MjButton class="ml-4">
        ${this.$t('sections.organisms.form.signIn')}
      </MjButton>
    </div>
  </div>
</form>`,
        ],
      },
    };
  },

  methods: {
    toggleSize() {
      this.model.size = !this.model.size;
      const { style } = document.documentElement;
      if (this.model.size) {
        style.fontSize = '0.9rem';
      } else {
        style.fontSize = '';
      }
    },
  },
});
</script>
