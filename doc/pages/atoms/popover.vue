<template>
  <LayoutSample
    :title="$t('sections.atoms.popover.title')"
    :components="['Popover', 'PopoverItem']"
  >
    <Sample
      :title="$t('props.default')"
      :snippet="samples.default"
    >
      <BbPopover align="left">
        <BbButton>
          {{ $t('props.default') }}
        </BbButton>

        <template #content>
          <BbPopoverContainer class="p-2 w-48">
            <BbPopoverItem
              v-for="(item, key) in $t('examples.list')"
              :key="key"
            >
              {{ item }}
            </BbPopoverItem>
          </BbPopoverContainer>
        </template>
      </BbPopover>
    </Sample>

    <Sample
      :title="$t('props.dismissible')"
      :snippet="samples.dismissible"
    >
      <BbPopover
        align="left"
        dismissible
      >
        <BbButton>
          {{ $t('props.dismissible') }}
        </BbButton>

        <template #content>
          <BbPopoverContainer class="p-2 w-48">
            <BbPopoverItem
              v-for="(item, key) in $t('examples.list')"
              :key="key"
            >
              {{ item }}
            </BbPopoverItem>
          </BbPopoverContainer>
        </template>
      </BbPopover>
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
          <BbPopover
            :position="position"
          >
            <BbButton>
              {{ position }}
            </BbButton>

            <template #content>
              <BbPopoverContainer class="p-2 w-48">
                <BbPopoverItem
                  v-for="(item, key) in $t('examples.list')"
                  :key="key"
                >
                  {{ item }}
                </BbPopoverItem>
              </BbPopoverContainer>
            </template>
          </BbPopover>
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
          <BbPopover
            :align="props.align"
            :position="props.position"
          >
            <BbButton>
              {{ props.position }} / {{ props.align }}
            </BbButton>

            <template #content>
              <BbPopoverContainer class="p-2 w-48">
                <BbPopoverItem
                  v-for="(item, key) in $t('examples.list')"
                  :key="key"
                >
                  {{ item }}
                </BbPopoverItem>
              </BbPopoverContainer>
            </template>
          </BbPopover>
        </div>
      </div>
    </Sample>

    <Sample
      :title="$t('props.icon')"
      :snippet="samples.icon"
    >
      <BbPopover align="left">
        <BbButton>
          {{ $t('props.default') }}
        </BbButton>

        <template #content>
          <BbPopoverContainer class="p-2 w-48">
            <BbPopoverItem>
              <template #icon>
                <bb-icon name="share" />
              </template>

              {{ $t('examples.list.1') }}
            </BbPopoverItem>

            <BbPopoverItem>
              <template #icon>
                <bb-icon name="calendar" />
              </template>

              {{ $t('examples.list.2') }}
            </BbPopoverItem>

            <BbPopoverItem>
              <template #icon>
                <bb-icon name="copy" />
              </template>

              {{ $t('examples.list.3') }}
            </BbPopoverItem>
          </BbPopoverContainer>
        </template>
      </BbPopover>
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
          `<BbPopover align="left">
  <BbButton>
    ${this.$t('props.default')}
  </BbButton>

  <template #content>
    <BbPopoverContainer class="p-2 w-48">
      <BbPopoverItem>${this.$t('examples.list.1')}</BbPopoverItem>
      <BbPopoverItem>${this.$t('examples.list.2')}</BbPopoverItem>
      <BbPopoverItem>${this.$t('examples.list.3')}</BbPopoverItem>
    </BbPopoverContainer>
  </template>
</BbPopover>`,
        ],
        dismissible: [
          `<BbPopover
  align="left"
  dismissible
>
  <BbButton>
    ${this.$t('props.dismissible')}
  </BbButton>

  <template #content>
    <BbPopoverContainer class="p-2 w-48">
      <BbPopoverItem>${this.$t('examples.list.1')}</BbPopoverItem>
      <BbPopoverItem>${this.$t('examples.list.2')}</BbPopoverItem>
      <BbPopoverItem>${this.$t('examples.list.3')}</BbPopoverItem>
    </BbPopoverContainer>
  </template>
</BbPopover>`,
        ],
        position: [
          `<BbPopover position="top">
  <BbButton>
    ${this.$t('props.position')}
  </BbButton>

  <template #content>
    <BbPopoverContainer class="p-2 w-48">
      <BbPopoverItem>${this.$t('examples.list.1')}</BbPopoverItem>
      <BbPopoverItem>${this.$t('examples.list.2')}</BbPopoverItem>
      <BbPopoverItem>${this.$t('examples.list.3')}</BbPopoverItem>
    </BbPopoverContainer>
  </template>
</BbPopover>`,
        ],
        align: [
          `<BbPopover
  align="left"
  position="bottom"
>
  <BbButton>
    ${this.$t('props.align')}
  </BbButton>

  <template #content>
    <BbPopoverContainer class="p-2 w-48">
      <BbPopoverItem>${this.$t('examples.list.1')}</BbPopoverItem>
      <BbPopoverItem>${this.$t('examples.list.2')}</BbPopoverItem>
      <BbPopoverItem>${this.$t('examples.list.3')}</BbPopoverItem>
    </BbPopoverContainer>
  </template>
</BbPopover>`,
        ],
        icon: [
          `<BbPopover position="top">
  <BbButton>
    ${this.$t('props.icon')}
  </BbButton>

  <template #content>
    <BbPopoverContainer class="p-2 w-48">
      <BbPopoverItem>
        <template #icon>
          <bb-icon name="share" />
        </template>
        ${this.$t('examples.list.1')}
      </BbPopoverItem>
      <BbPopoverItem>
        <template #icon>
          <bb-icon name="calendar" />
        </template>
        ${this.$t('examples.list.2')}
      </BbPopoverItem>
      <BbPopoverItem>
        <template #icon>
          <bb-icon name="copy" />
        </template>
        ${this.$t('examples.list.3')}
      </BbPopoverItem>
    </BbPopoverContainer>
  </template>
</BbPopover>`,
        ],
      },
    };
  },
});
</script>
