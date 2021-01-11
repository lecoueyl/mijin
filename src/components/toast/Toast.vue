<template>
  <transition-group
    tag="ul"
    enter-active-class="transition ease-in duration-150"
    leave-active-class="transition ease-out duration-150"
    enter-class="transform translate-y-2 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-2 opacity-0"
    move-class="ease-in-out duration-150"
    class="fixed p-4 z-10 space-y-2"
    :class="{
      // align
      'left-0': align === 'left',
      'right-0': align === 'right',
      // position
      'bottom-0': position === 'bottom',
      'top-0': position === 'top',
    }"
  >
    <li
      v-for="event in events"
      :key="event.id"
      class="rounded px-4 py-2 cursor-pointer shadow-lg w-72"
      :class="{
        // type
        'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900': !event.type || (event.type && !['success', 'error', 'warn'].includes(event.type)),
        'bg-green-500 text-green-50': event.type && event.type === 'success',
        'bg-red-500 text-red-50': event.type && event.type === 'error',
        'bg-orange-500 text-orange-50': event.type && event.type === 'warn',
      }"
      @click="remove(event)"
    >
      {{ event.content }}
    </li>
  </transition-group>
</template>

<script>
export default {
  name: 'MijinToast',

  props: {
    align: {
      type: String,
      default: 'right',
      validator: (value) => [
        'left',
        'right',
      ].includes(value),
    },

    position: {
      default: 'bottom',
      type: String,
      validator: (value) => [
        'bottom',
        'top',
      ].includes(value),
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
