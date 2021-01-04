<template>
  <LayoutSample
    :title="$t('sections.atoms.popover.title')"
    :components="['Popover', 'PopoverItem']"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <MjPopover align="left">
        <MjButton>
          {{ $t('props.default') }}
        </MjButton>

        <template #content>
          <MjPopoverContainer class="p-2 w-48">
            <MjPopoverItem
              v-for="(item, key) in $t('examples.list')"
              :key="key"
            >
              {{ item }}
            </MjPopoverItem>
          </MjPopoverContainer>
        </template>
      </MjPopover>
    </Sample>

    <Sample
      :title="$t('props.dismissible')"
      :snippet="samples.dismissible"
    >
      <MjPopover
        align="left"
        dismissible
      >
        <MjButton>
          {{ $t('props.dismissible') }}
        </MjButton>

        <template #content>
          <MjPopoverContainer class="p-2 w-48">
            <MjPopoverItem
              v-for="(item, key) in $t('examples.list')"
              :key="key"
            >
              {{ item }}
            </MjPopoverItem>
          </MjPopoverContainer>
        </template>
      </MjPopover>
    </Sample>

    <Sample
      :title="$t('props.position')"
      :snippet="samples.position"
    >
      <div class="grid gap-4 sm:grid-cols-4">
        <div
          v-for="position in ['top', 'right', 'bottom', 'left']"
          :key="position"
        >
          <MjPopover
            :position="position"
          >
            <MjButton>
              {{ position }}
            </MjButton>

            <template #content>
              <MjPopoverContainer class="p-2 w-48">
                <MjPopoverItem
                  v-for="(item, key) in $t('examples.list')"
                  :key="key"
                >
                  {{ item }}
                </MjPopoverItem>
              </MjPopoverContainer>
            </template>
          </MjPopover>
        </div>
      </div>
    </Sample>

    <Sample
      :title="$t('props.align')"
      :snippet="samples.position"
    >
      <div class="grid gap-4 sm:grid-cols-3">
        <div
          v-for="props in [
            {
              align: 'left',
              position: 'bottom',
            },
            {
              align: 'center',
              position: 'bottom',
            },
            {
              align: 'right',
              position: 'bottom',
            },
            {
              align: 'left',
              position: 'top',
            },
            {
              align: 'center',
              position: 'top',
            },
            {
              align: 'right',
              position: 'top',
            },
            {
              align: 'top',
              position: 'left',
            },
            {
              align: 'middle',
              position: 'left',
            },
            {
              align: 'bottom',
              position: 'left',
            },
            {
              align: 'top',
              position: 'right',
            },
            {
              align: 'middle',
              position: 'right',
            },
            {
              align: 'bottom',
              position: 'right',
            },
          ]"
          :key="`${props.position}-${props.align}`"
        >
          <MjPopover
            :align="props.align"
            :position="props.position"
          >
            <MjButton>
              {{ props.position }} / {{ props.align }}
            </MjButton>

            <template #content>
              <MjPopoverContainer class="p-2 w-48">
                <MjPopoverItem
                  v-for="(item, key) in $t('examples.list')"
                  :key="key"
                >
                  {{ item }}
                </MjPopoverItem>
              </MjPopoverContainer>
            </template>
          </MjPopover>
        </div>
      </div>
    </Sample>

    <Sample
      :title="$t('props.icon')"
      :snippet="samples.icon"
    >
      <MjPopover align="left">
        <MjButton>
          {{ $t('props.default') }}
        </MjButton>

        <template #content>
          <MjPopoverContainer class="p-2 w-48">
            <MjPopoverItem>
              <template #icon>
                <MjIcon name="share" />
              </template>

              {{ $t('examples.list.1') }}
            </MjPopoverItem>

            <MjPopoverItem>
              <template #icon>
                <MjIcon name="calendar" />
              </template>

              {{ $t('examples.list.2') }}
            </MjPopoverItem>

            <MjPopoverItem>
              <template #icon>
                <MjIcon name="copy" />
              </template>

              {{ $t('examples.list.3') }}
            </MjPopoverItem>
          </MjPopoverContainer>
        </template>
      </MjPopover>
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
          `<MjPopover align="left">
  <MjButton>
    ${this.$t('props.default')}
  </MjButton>

  <template #content>
    <MjPopoverContainer class="p-2 w-48">
      <MjPopoverItem>${this.$t('examples.list.1')}</MjPopoverItem>
      <MjPopoverItem>${this.$t('examples.list.2')}</MjPopoverItem>
      <MjPopoverItem>${this.$t('examples.list.3')}</MjPopoverItem>
    </MjPopoverContainer>
  </template>
</MjPopover>`,
        ],
        dismissible: [
          `<MjPopover
  align="left"
  dismissible
>
  <MjButton>
    ${this.$t('props.dismissible')}
  </MjButton>

  <template #content>
    <MjPopoverContainer class="p-2 w-48">
      <MjPopoverItem>${this.$t('examples.list.1')}</MjPopoverItem>
      <MjPopoverItem>${this.$t('examples.list.2')}</MjPopoverItem>
      <MjPopoverItem>${this.$t('examples.list.3')}</MjPopoverItem>
    </MjPopoverContainer>
  </template>
</MjPopover>`,
        ],
        position: [
          `<MjPopover position="top">
  <MjButton>
    ${this.$t('props.position')}
  </MjButton>

  <template #content>
    <MjPopoverContainer class="p-2 w-48">
      <MjPopoverItem>${this.$t('examples.list.1')}</MjPopoverItem>
      <MjPopoverItem>${this.$t('examples.list.2')}</MjPopoverItem>
      <MjPopoverItem>${this.$t('examples.list.3')}</MjPopoverItem>
    </MjPopoverContainer>
  </template>
</MjPopover>`,
        ],
        align: [
          `<MjPopover
  align="left"
  position="bottom"
>
  <MjButton>
    ${this.$t('props.align')}
  </MjButton>

  <template #content>
    <MjPopoverContainer class="p-2 w-48">
      <MjPopoverItem>${this.$t('examples.list.1')}</MjPopoverItem>
      <MjPopoverItem>${this.$t('examples.list.2')}</MjPopoverItem>
      <MjPopoverItem>${this.$t('examples.list.3')}</MjPopoverItem>
    </MjPopoverContainer>
  </template>
</MjPopover>`,
        ],
        icon: [
          `<MjPopover position="top">
  <MjButton>
    ${this.$t('props.icon')}
  </MjButton>

  <template #content>
    <MjPopoverContainer class="p-2 w-48">
      <MjPopoverItem>
        <template #icon>
          <MjIcon name="share" />
        </template>
        ${this.$t('examples.list.1')}
      </MjPopoverItem>
      <MjPopoverItem>
        <template #icon>
          <MjIcon name="calendar" />
        </template>
        ${this.$t('examples.list.2')}
      </MjPopoverItem>
      <MjPopoverItem>
        <template #icon>
          <MjIcon name="copy" />
        </template>
        ${this.$t('examples.list.3')}
      </MjPopoverItem>
    </MjPopoverContainer>
  </template>
</MjPopover>`,
        ],
      },
    };
  },
});
</script>
