<template>
  <th
    class="py-2 font-medium pr-1 last:pr-0"
    :class="[
      {
        //sort
        'cursor-pointer hover:text-gray-800 dark:hover:text-gray-300 transition-colors duration-150 ease-in-out': sort,
        //stickyHeader
        'sticky top-0': tableProps && tableProps.stickyHeader,
        // textAlign
        'text-left': textAlign === 'left',
        'text-center': textAlign === 'center',
        'text-right': textAlign === 'right',
        'text-justify': textAlign === 'justify',
      },
    ]"
  >
    <div
      v-if="sort"
      class="flex items-center"
    >
      <slot />

      <svg
        v-if="['asc', 'desc'].includes(sort)"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill="none"
        role="presentation"
        class="inline-block stroke-2 w-3 h-3 ml-0.5"
      >
        <template v-if="sort === 'asc'">
          <line
            x1="12"
            y1="5"
            x2="12"
            y2="19"
          />
          <polyline points="19 12 12 19 5 12" />
        </template>

        <template v-if="sort === 'desc'">
          <line
            x1="12"
            y1="19"
            x2="12"
            y2="5"
          />
          <polyline points="5 12 12 5 19 12" />
        </template>
      </svg>
    </div>

    <template v-else>
      <slot />
    </template>
  </th>
</template>

<script>
const validator = {
  sort: [
    null,
    true,
    'asc',
    'desc',
  ],
  textAlign: [
    null,
    'left',
    'center',
    'right',
    'justify',
  ],
};

export default {
  name: 'MijinTableTitle',

  validator,

  props: {
    sort: {
      default: null,
      type: [String, Boolean],
      validator: (value) => validator.sort.includes(value),
    },

    textAlign: {
      default: 'left',
      type: String,
      validator: (value) => validator.textAlign.includes(value),
    },
  },

  computed: {
    tableProps() {
      return this.$parent?.$parent?.$props;
    },
  },

  created() {
    if (this.$parent.$options.name !== 'MijinTableHead') {
      this.$destroy();
      throw new Error('TableTitle must be wrap with TableHead');
    }
  },
};
</script>
