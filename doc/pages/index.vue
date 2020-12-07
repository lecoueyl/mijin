<template>
  <div>
    <BbHeadline
      :level="2"
      :size="3"
      class="pb-8"
    >
      Nuxt
    </BbHeadline>

    <BbHeadline
      :level="3"
      :size="4"
      class="pb-4"
    >
      Install package
    </BbHeadline>

    <highlightjs
      language="bash"
      class="p-4 my-4 rounded-lg bg-blue-900"
      code="npm install tailwindcss/zephyr"
    />

    <BbHeadline
      :level="3"
      :size="4"
      class="pb-4"
    >
      Import CSS
    </BbHeadline>

    <p>
      Import CSS style in your main style file
    </p>

    <highlightjs
      language="scss"
      class="p-4 my-4 rounded-lg bg-blue-900"
      code="@import '../../../src/main';"
    />

    <p>
      Import tailwind configuration in your `tailwind.config.js`
    </p>
    <highlightjs
      language="javascript"
      class="p-4 rounded-lg bg-blue-900"
      code="import tailwindConf from 'zephyr/tailwind.config';

tailwindConf.theme.extend.fontFamily = {
  // add your custom configuration here
};

module.exports = tailwindConf;"
    />
  </div>
</template>

<style lang="scss">
.hljs {
  display: block;
  overflow-x: auto;

  // @apply bg-blue-500 hover:bg-blue-700 text-white;
}
</style>
