<template>
  <LayoutSample
    :title="$t('sections.atoms.avatar.title')"
    components="Avatar"
  >
    <Sample
      :title="$t('props.image')"
      :snippet="samples.image"
    >
      <MjAvatar
        alt="image"
        img="https://images.unsplash.com/photo-1576502200916-3808e07386a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60"
      />
    </Sample>

    <Sample
      :title="$t('props.letter')"
      :snippet="samples.letter"
    >
      <MjAvatar
        letter="BB"
      />
    </Sample>

    <Sample
      :title="$t('props.size')"
      :snippet="samples.size"
    >
      <div class="flex items-center">
        <MjAvatar
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
      <MjAvatar
        variant="squared"
        letter="BB"
      />
    </Sample>

    <Sample
      :title="$t('props.color')"
      :snippet="samples.color"
    >
      <MjAvatar
        v-for="(color, index) in ['red', 'blue', 'green']"
        :key="color"
        :color="color"
        :class="[{ 'ml-2': index !== 0 }]"
        letter="BB"
      />
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      samples: {
        image: [
          `<MjAvatar
  alt="image"
  img="https://..."
/>`,
        ],
        letter: [
          '<MjAvatar letter="BB" />',
        ],
        size: [
          `<MjAvatar
  size="sm"
  letter="BB"
/>

<MjAvatar
  size="base"
  letter="BB"
/>

<MjAvatar
  size="lg"
  letter="BB"
/>

<MjAvatar
  size="xl"
  letter="BB"
/>`,
        ],
        variant: [
          `<MjAvatar
  alt="image"
  img="https://..."
  variant="squared"
/>`,
        ],
        color: [
          `<MjAvatar
  color="red"
  letter="BB"
/>

<MjAvatar
  color="blue"
  letter="BB"
/>

<MjAvatar
  color="green"
  letter="BB"
/>`,
        ],
      },
    };
  },
});
</script>
