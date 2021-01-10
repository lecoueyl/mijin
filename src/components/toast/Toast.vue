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
    class="fixed bottom-0 right-0 p-4 z-10 space-y-2"
  >
    <li
      v-for="(event, key) in events"
      :key="key"
      class="rounded px-4 py-2 cursor-pointer shadow-lg"
      :class="{
        'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900': !event.type || (event.type && !['success', 'danger', 'warning'].includes(event.type)),
        'bg-green-500 text-green-50': event.type && event.type === 'success',
        'bg-red-500 text-red-50': event.type && event.type === 'danger',
        'bg-orange-500 text-orange-50': event.type && event.type === 'warning',
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

  data() {
    return {
      events: [],
    };
  },

  methods: {
    add(event) {
      const newEvent = { id: Date.now(), ...event };
      this.events.push(newEvent);
      this.setTimer(newEvent);
    },

    remove(event) {
      this.events = this.events.filter((e) => e.id !== event.id);
    },

    setTimer(event) {
      setTimeout(
        () => {
          this.remove(event);
        },
        3000,
      );
    },
  },
};
</script>
