<template>
  <LayoutSample
    :title="$t('sections.organisms.form.title')"
  >
    <Sample
      :title="$t('sections.organisms.form.signUp')"
      :snippet="samples.login"
    >
      <form
        autocomplete="off"
        class="lg:w-1/2 lg:mx-auto grid gap-4"
      >
        <BbInput :placeholder="$t('sections.organisms.form.usernamePlaceholder')">
          {{ $t('sections.organisms.form.username') }}
        </BbInput>

        <BbInput
          type="email"
          placeholder="email@address.com"
        >
          {{ $t('sections.organisms.form.email') }}
        </BbInput>

        <BbSelect :placeholder="$t('sections.organisms.form.selectDepartment')">
          <option
            v-for="(option, index) in $t('examples.list')"
            :key="index"
            :value="option"
          >
            {{ option }}
          </option>

          <template v-slot:label>
            {{ $t('sections.organisms.form.department') }}
          </template>
        </BbSelect>

        <BbCheckbox
          v-model="model.default"
          name="checkbox"
        >
          <i18n
            path="sections.organisms.form.agreedToTerms"
          >
            <template #terms>
              <BbLink
                href="#"
                color="foreground"
                underline>
                {{ $t('sections.organisms.form.termsOfUse') }}
              </BbLink>
            </template>

            <template #privacy>
              <BbLink
                href="#"
                color="foreground"
                underline>
                {{ $t('sections.organisms.form.privacy') }}
              </BbLink>
            </template>
          </i18n>
        </BbCheckbox>

        <BbButton class="mt-4">
          {{ $t('sections.organisms.form.signIn') }}
        </BbButton>

        <i18n
          path="sections.organisms.form.alreadyAUser"
          tag="div"
          class="text-center"
        >
          <template #login>
            <BbLink href="#">
              {{ $t('sections.organisms.form.login') }}
            </BbLink>
          </template>
        </i18n>
      </form>
    </Sample>

    <Sample
      :title="$t('sections.organisms.form.signIn')"
      :snippet="samples.login"
    >
      <form class="lg:w-1/2 lg:mx-auto grid gap-4">
        <BbInput v-model="model.signIn.username">
          {{ $t('sections.organisms.form.username') }}
        </BbInput>

        <BbInput
          v-model="model.signIn.password"
          type="password"
        >
          {{ $t('sections.organisms.form.password') }}
        </BbInput>

        <div class="flex items-center mt-2">
          <div class="flex-1">
            <BbLink href="#">
              {{ $t('sections.organisms.form.forgotPassword') }}
            </BbLink>
          </div>

          <div>
            <BbButton class="ml-4">
              {{ $t('sections.organisms.form.signIn') }}
            </BbButton>
          </div>
        </div>
      </form>
    </Sample>

    <Sample
      :title="$t('sections.organisms.form.vueForm')"
      :snippet="samples.vueForm"
    >
      <vue-form
        class="lg:w-1/2 lg:mx-auto grid gap-4"
        :state="vueFormState"
        @submit.prevent=""
      >
        <validate>
          <BbInput
            v-model="model.vueForm.email"
            name="email"
            type="email"
            required
          >
            {{ $t('sections.organisms.form.email') }}

            <template #error>
              <field-messages
                name="email"
                show="$touched || $submitted"
              >
                <div slot="required">
                  {{ $t('sections.organisms.form.emailRequired') }}
                </div>
                <div slot="email">
                  {{ $t('sections.organisms.form.emailValidation') }}
                </div>
              </field-messages>
            </template>
          </BbInput>
        </validate>

        <validate>
          <BbInput
            v-model="model.vueForm.password"
            name="password"
            type="password"
            required
            pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
          >
            {{ $t('sections.organisms.form.password') }}

            <template #error>
              <field-messages
                name="password"
                show="$touched || $submitted"
              >
                <div slot="required">
                  {{ $t('sections.organisms.form.passwordRequired') }}
                </div>
                <div slot="pattern">
                  {{ $t('sections.organisms.form.passwordPattern') }}
                </div>
              </field-messages>
            </template>
          </BbInput>
        </validate>

        <BbButton
          class="mt-2"
          type="submit"
        >
          {{ $t('sections.organisms.form.signUp') }}
        </BbButton>
      </vue-form>
    </Sample>
  </LayoutSample>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      vueFormState: {},
      model: {
        signIn: {
          username: '',
          password: '',
        },
        vueForm: {
          email: '',
          password: '',
        },
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
        vueForm: [
          `<vue-form
  class="lg:w-1/2 lg:mx-auto grid gap-4"
  :state="vueFormState"
  @submit.prevent=""
>
  <validate>
    <BbInput
      v-model="model.vueForm.email"
      name="email"
      type="email"
      required
    >
      ${this.$t('sections.organisms.form.email')}

      <template #error>
        <field-messages
          name="email"
          show="$touched || $submitted"
        >
          <div slot="required">
            ${this.$t('sections.organisms.form.emailRequired')}
          </div>
          <div slot="email">
            ${this.$t('sections.organisms.form.emailValidation')}
          </div>
        </field-messages>
      </template>
    </BbInput>
  </validate>

  <validate>
    <BbInput
      v-model="model.vueForm.password"
      name="password"
      type="password"
      required
      pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
    >
      ${this.$t('sections.organisms.form.password')}

      <template #error>
        <field-messages
          name="password"
          show="$touched || $submitted"
        >
          <div slot="required">
            ${this.$t('sections.organisms.form.passwordRequired')}
          </div>
          <div slot="pattern">
            ${this.$t('sections.organisms.form.passwordPattern')}
          </div>
        </field-messages>
      </template>
    </BbInput>
  </validate>

  <BbButton
    class="mt-2"
    type="submit"
  >
    ${this.$t('sections.organisms.form.signUp')}
  </BbButton>
</vue-form>`,
        ],
      },
    };
  },
});
</script>
