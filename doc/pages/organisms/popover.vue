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
          <BbButton group="first">
            {{ $t('sections.organisms.popover.edit') }}
          </BbButton>

          <BbPopover
            ref="popover"
            align="right"
          >
            <BbButton group="last">
              <template #icon>
                <bb-icon name="chevronDown" />
              </template>
            </BbButton>

            <template #content>
              <BbPopoverContainer class="py-2 w-64">
                <BbPopoverItem
                  class="mx-1"
                  @click.prevent="toggleSize()"
                >
                  {{ $t('sections.organisms.popover.smallText') }}
                  <template #action>
                    <BbToggle
                      v-model="model.size"
                      size="sm"
                    />
                  </template>
                </BbPopoverItem>

                <BbPopoverItem
                  class="mx-1"
                  @click.prevent="model.width = !model.width"
                >
                  {{ $t('sections.organisms.popover.fullWidth') }}
                  <template #action>
                    <BbToggle
                      v-model="model.width"
                      size="sm"
                    />
                  </template>
                </BbPopoverItem>

                <BbDivider class="my-2" />

                <BbPopoverItem
                  tag="a"
                  href="#app"
                  class="mx-1"
                >
                  <template #icon>
                    <bb-icon name="smartphone" />
                  </template>
                  {{ $t('sections.organisms.popover.openApp') }}
                </BbPopoverItem>

                <BbPopoverItem class="mx-1">
                  <template #icon>
                    <bb-icon name="calendar" />
                  </template>
                  {{ $t('sections.organisms.popover.addToCalendar') }}
                </BbPopoverItem>

                <BbPopoverItem class="mx-1">
                  <template #icon>
                    <bb-icon name="copy" />
                  </template>
                  {{ $t('sections.organisms.popover.copyLink') }}
                </BbPopoverItem>

                <BbPopoverItem class="mx-1">
                  <template #icon>
                    <bb-icon name="share" />
                  </template>
                  {{ $t('sections.organisms.popover.share') }}
                </BbPopoverItem>

                <BbDivider class="my-2" />

                <BbPopoverItem class="mx-1">
                  <template #icon>
                    <bb-icon name="rotateCcw" />
                  </template>
                  {{ $t('sections.organisms.popover.undo') }}
                </BbPopoverItem>

                <BbPopoverItem
                  variant="danger"
                  class="mx-1"
                  @click="$refs.popover.close()"
                >
                  <template #icon>
                    <bb-icon name="trash" />
                  </template>
                  {{ $t('sections.organisms.popover.delete') }}
                </BbPopoverItem>

                <BbDivider class="my-2" />

                <p class="px-4 py-2 text-gray-600 text-sm">
                  {{ $t('sections.organisms.popover.lastEdit') }}
                  <br>
                  {{ $t('sections.organisms.popover.today') }}
                </p>
              </BbPopoverContainer>
            </template>
          </BbPopover>
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
  <BbInput v-model="model.signIn.username">
    ${this.$t('sections.organisms.form.username')}
  </BbInput>

  <BbInput
    v-model="model.signIn.password"
    type="password"
  >
    ${this.$t('sections.organisms.form.password')}
  </BbInput>

  <div class="flex items-center mt-2">
    <div class="flex-1">
      <BbLink href="#">
        ${this.$t('sections.organisms.form.forgotPassword')}
      </BbLink>
    </div>

    <div>
      <BbButton class="ml-4">
        ${this.$t('sections.organisms.form.signIn')}
      </BbButton>
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
