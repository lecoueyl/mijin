<template>
  <div
    class="fixed z-40 w-full sm:w-96"
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
      enter-active-class="transition ease-out-mijin duration-200"
      leave-active-class="transition ease-in-mijin duration-200 absolute w-full"
      :enter-class="position === 'bottom'
        ? 'transform translate-y-3 opacity-0'
        : 'transform -translate-y-3 opacity-0'"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-class="transform translate-y-0 opacity-100"
      :leave-to-class="position === 'bottom'
        ? 'transform translate-y-1/4 opacity-0'
        : 'transform -translate-y-1/4 opacity-0'"
      move-class="ease-in-out-mijin duration-200"
      class="inline-block w-full"
    >
      <li
        v-for="event in events"
        :key="event.id"
        :class="[
          'px-2',
          {
            'pb-2': position === 'bottom',
            'pt-2': position === 'top',
          }
        ]"
      >
        <div
          class="flex w-full rounded px-4 py-3 cursor-pointer shadow-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
          @click="remove(event)"
        >
          <svg
            class="stroke-2 inline-block flex-none w-4 h-4 my-1"
            :class="[
              {
                'text-gray-900 dark:text-white':
                  !event.type || (event.type && !['success', 'error', 'warn'].includes(event.type)),
                'text-success-500': event.type && event.type === 'success',
                'text-danger-500': event.type && event.type === 'error',
                'text-warning-500': event.type && event.type === 'warn',
              }
            ]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <template v-if="!event.type || (event.type && !['success', 'error', 'warn'].includes(event.type))">
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <line
                x1="12"
                y1="16"
                x2="12"
                y2="12"
              />
              <line
                x1="12"
                y1="8"
                x2="12.01"
                y2="8"
              />
            </template>

            <template v-if="event.type && event.type === 'success'">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </template>

            <template v-if="event.type && event.type === 'error'">
              <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
              <line
                x1="12"
                y1="8"
                x2="12"
                y2="12"
              />
              <line
                x1="12"
                y1="16"
                x2="12.01"
                y2="16"
              />
            </template>

            <template v-if="event.type && event.type === 'warn'">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line
                x1="12"
                y1="9"
                x2="12"
                y2="13"
              />
              <line
                x1="12"
                y1="17"
                x2="12.01"
                y2="17"
              />
            </template>
          </svg>

          <div class="flex-grow pl-2">
            {{ event.content }}
          </div>
        </div>
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
        id: Math.random().toString(36),
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
