<template>
  <LayoutSample
    :title="$t('sections.atoms.avatar.title')"
    components="Avatar"
  >
    <Sample
      :title="$t('props.image')"
      :snippet="samples.image"
    >
      <BbAvatar
        alt="image"
        img="https://images.unsplash.com/photo-1600704613492-edaa3f8cbd2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1232&q=80"
      />
    </Sample>

    <Sample
      :title="$t('props.letter')"
      :snippet="samples.letter"
    >
      <BbAvatar
        letter="BB"
      />
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <div class="flex items-center">
        <BbAvatar
          v-for="(size, index) in ['sm', 'base', 'lg', 'xl']"
          :key="size"
          :size="size"
          :class="[{ 'ml-2': index !== 0 }]"
          letter="BB"
        />
      </div>
    </Sample>

    <Sample
      :title="$t('props.variant')"
      :snippet="samples.variant"
    >
      <BbAvatar
        variant="squared"
        img="https://images.unsplash.com/photo-1600704613492-edaa3f8cbd2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1232&q=80"
      />
    </Sample>

    <Sample
      :title="$t('props.color')"
      :snippet="samples.color"
    >
      <div class="flex items-center">
        <BbAvatar
          v-for="(color, index) in ['red', 'blue', 'green']"
          :key="color"
          :color="color"
          :class="[{ 'ml-2': index !== 0 }]"
          letter="BB"
        />
      </div>
    </Sample>

  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      demo: {
        default: 0,
        disabled: 0,
      },
      samples: {
        image: [
          `<BbAvatar
  alt="image"
  img="https://..."
/>`,
        ],
        letter: [
          '<BbAvatar letter="BB" />',
        ],
        size: [
          `<BbAvatar
  size="sm"
  letter="BB"
/>

<BbAvatar
  size="base"
  letter="BB"
/>

<BbAvatar
  size="lg"
  letter="BB"
/>

<BbAvatar
  size="xl"
  letter="BB"
/>`,
        ],
        variant: [
          `<BbAvatar
  alt="image"
  img="https://..."
  variant="squared"
/>`,
        ],
        color: [
          `<BbAvatar
  color="red"
  letter="BB"
/>

<BbAvatar
  color="blue"
  letter="BB"
/>

<BbAvatar
  color="green"
  letter="BB"
/>`,
        ],
      },
    };
  },
});
</script>
