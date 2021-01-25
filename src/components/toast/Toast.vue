<template>
  <div
    class="fixed p-4 z-40 w-full sm:w-96"
    :class="{
      // align
      'left-0': align === 'left',
      'right-0': align === 'right',
      // position
      'bottom-0': position === 'bottom',
      'top-0': position === 'top',
    }"
  >
    <transition-group
      tag="ul"
      enter-active-class="transition ease-in ease-out-mijin duration-500"
      leave-active-class="transition ease-out ease-out-mijin duration-500"
      enter-class="transform translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-2 opacity-0"
      move-class="ease-in-out duration-200"
      class="space-y-3"
    >
      <li
        v-for="event in events"
        :key="event.id"
        class="rounded px-4 py-2 cursor-pointer shadow-lg w-full"
        :class="{
          // type
          'bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-100 dark:border-gray-800': !event.type || (event.type && !['success', 'error', 'warn'].includes(event.type)),
          'bg-success-500 text-success-50': event.type && event.type === 'success',
          'bg-danger-500 text-danger-50': event.type && event.type === 'error',
          'bg-warning-500 text-warning-50': event.type && event.type === 'warn',
        }"
        @click="remove(event)"
      >
        {{ event.content }}
      </li>
    </transition-group>
  </div>
</template>

<script>
const validator = {
  align: [
    'left',
    'right',
  ],
  position: [
    'bottom',
    'top',
  ],
};

export default {
  name: 'MijinToast',

  validator,

  props: {
    align: {
      type: String,
      default: 'right',
      validator: (value) => validator.align.includes(value),
    },

    position: {
      default: 'bottom',
      type: String,
      validator: (value) => validator.position.includes(value),
    },

    timeout: {
      type: Number,
      default: 3500,
    },
  },

  data() {
    return {
      events: [],
    };
  },

  methods: {
    log(content) {
      this.add(content);
    },

    success(content) {
      this.add(content, 'success');
    },

    warn(content) {
      this.add(content, 'warn');
    },

    error(content) {
      this.add(content, 'error');
    },

    add(content, type = null) {
      const event = {
        id: Date.now(),
        content,
        type,
      };
      this.events.push(event);
      this.setTimer(event);
    },

    remove(event) {
      this.events = this.events.filter((e) => e.id !== event.id);
    },

    setTimer(event) {
      setTimeout(
        () => {
          this.remove(event);
        },
        this.timeout,
      );
    },
  },
};
</script>
