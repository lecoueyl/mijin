<template>
  <div>
    <highlightjs language="javascript" code="var x = 5;" />
    <p>
      Install package
    </p>
    <code>
      npm install tailwindcss/zephyr
    </code>

    <p>
      Import CSS style
    </p>
    <code>
      css/main.scss
    </code>

    <p>
      Import tailwind configuration
    </p>
    <code>
      tailwind.config.js
    </code>
  </div>
</template>

<style lang="scss">
.hljs {
  display: block;
  overflow-x: auto;

  // @apply bg-blue-500 hover:bg-blue-700 text-white;
}
</style>
