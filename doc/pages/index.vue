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
      class="p-4 my-4 rounded-lg bg-gray-800"
      code="npm install tailwindcss/zephyr"
    />

    <BbHeadline
      :level="3"
      :size="4"
      class="pb-4"
    >
      Import the tailwindcss preset
    </BbHeadline>

    <p>
      Import tailwind preset in your `tailwind.config.js`
    </p>
    <highlightjs
      language="javascript"
      class="p-4 rounded-lg bg-gray-800"
      code="const blueberry = require('./src/tailwind-preset');

module.exports = {
  presets: [
    blueberry,
  ],
};"
    />
  </div>
</template>
