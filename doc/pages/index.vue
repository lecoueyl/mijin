<template>
  <div>
    <MjHeadline
      :level="2"
      :size="3"
      class="pb-8"
    >
      Nuxt
    </MjHeadline>

    <MjHeadline
      :level="3"
      :size="4"
      class="pb-4"
    >
      Install package
    </MjHeadline>

    <highlightjs
      class="p-4 my-4 rounded-lg bg-gray-800"
      code="npm install tailwindcss/zephyr"
    />

    <MjHeadline
      :level="3"
      :size="4"
      class="pb-4"
    >
      Import the tailwindcss preset
    </MjHeadline>

    <p>
      Import tailwind preset in your `tailwind.config.js`
    </p>
    <highlightjs
      language="javascript"
      class="p-4 rounded-lg bg-gray-800"
      code="const mijin = require('./src/tailwind-preset');

module.exports = {
  presets: [
    mijin,
  ],
};"
    />
  </div>
</template>
