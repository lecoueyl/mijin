<template>
  <LayoutSample
    :title="$t('sections.organisms.form.title')"
  >
    <Sample
      :title="$t('sections.organisms.form.signIn')"
      :snippet="samples.login"
    >
      <form class="sm:w-1/2 sm:mx-auto grid gap-4 grid-cols-1">
        <BbInput v-model="model.signIn.username">
          {{ $t('sections.organisms.form.username') }}
        </BbInput>

        <BbInput
          v-model="model.signIn.password"
          type="password"
        >
          {{ $t('sections.organisms.form.password') }}
        </BbInput>

        <div class="text-right">
          <BbLink href="#">
            {{ $t('sections.organisms.form.forgotPassword') }}
          </BbLink>

          <BbButton class="ml-4">
            {{ $t('sections.organisms.form.signIn') }}
          </BbButton>
        </div>
      </form>
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      model: {
        signIn: {
          username: '',
          password: '',
        },
      },
      samples: {
        login: [
          `<BbAvatar
  alt="image"
  img="https://..."
/>`,
        ],
      },
    };
  },
});
</script>
