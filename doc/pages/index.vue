<template>
  <div>
    <code v-highlightjs class="javascript">console.log('Hello World')</code>
    <pre v-highlightjs>
      <code class="javascript">// Static source code
function(test) {
    console.log(test)
}</code>
    </pre>
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
