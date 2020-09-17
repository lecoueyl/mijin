<template>
  <bb-popover
    v-if="type !== 'range'"
    ref="popover"
    :align="align"
  >
    <slot />

    <template slot="popover">
      <vuejs-datepicker
        ref="datepicker"
        v-model="pickedDate"
        :minimum-view="minimumView"
        :value="value"
        :language="$t('blueberry.datepicker.language')"
        :disabled-dates="disabledDates"
        calendar-class="c-datepicker"
        inline
        monday-first
        @selected="setPickedDate"
      />
    </template>
  </bb-popover>

  <bb-popover
    v-else
    ref="popover"
    :align="align"
  >
    <slot />

    <template slot="popover">
      <div class="o-media">
        <div class="o-media__fixed u-bdr-wash-thin">
          <vuejs-datepicker
            ref="datepickerStart"
            v-model="range.startDate"
            :value="range.startDate"
            :language="$t('blueberry.datepicker.language')"
            :disabled-dates="disableRangeStart"
            :highlighted="highlightRangeStart"
            calendar-class="c-datepicker c-datepicker--range c-datepicker--start "
            inline
            monday-first
            @selected="setCustomQuickAccess()"
          />
        </div>

        <div class="o-media__fixed u-bdr-wash-thin">
          <vuejs-datepicker
            ref="datepickerEnd"
            v-model="range.endDate"
            :value="range.endDate"
            :language="$t('blueberry.datepicker.language')"
            :disabled-dates="disableRangeEnd"
            :highlighted="highlightRangeEnd"
            calendar-class="c-datepicker c-datepicker--range c-datepicker--end "
            inline
            monday-first
            @selected="setCustomQuickAccess()"
          />
        </div>

        <div
          class="o-media__fixed"
        >
          <bb-tab
            class="c-datepicker__menu"
            type="link"
            u-m
            u-ph="x2"
          >
            <bb-tab-item
              v-for="(option, index) in quickAccess[quickAccessOptions]"
              :key="`datepicker-${index}`"
              :active="quickAccess.current === option"
              u-p
              @click.native="setRange(option)"
            >
              {{ $t(`blueberry.datepicker.${option}`) }}
            </bb-tab-item>
          </bb-tab>
        </div>
      </div>

      <div class="o-media o-media--middle u-p u-bgcolor-wash-thin">
        <div
          class="o-media__fixed u-color-wash-medium u-pl-x2"
        >
          <bb-type size="xs">
            <template v-if="range.startDate">
              {{ formatDate(range.startDate) }}
            </template>

            <template v-if="range.endDate">
              ー
              {{ formatDate(range.endDate) }}
            </template>
          </bb-type>
        </div>
        <div class="o-media__fluid u-text-right">
          <bb-button
            :disabled="!isRangeSelected"
            size="xs"
            @click="confirmRange"
          >
            {{ $t('blueberry.datepicker.apply') }}
          </bb-button>
        </div>
      </div>
    </template>
  </bb-popover>
</template>

<script>
import moment from 'moment';
import VuejsDatepicker from 'vuejs-datepicker';

export default {
  name: 'BlueberryVueDatepicker',

  components: {
    VuejsDatepicker,
  },

  props: {
    value: {
      type: Date,
      default: null,
    },
    valueStart: {
      type: [Object, Date],
      default: null,
    },
    valueEnd: {
      type: [Object, Date],
      default: null,
    },
    type: {
      type: String,
      default: 'date',
      validator: (value) => [
        'date',
        'month',
        'range',
      ].indexOf(value) >= 0,
    },
    align: {
      type: String,
      default: null,
      validator: (value) => [
        'left',
        'center',
        'right',
      ].indexOf(value) >= 0,
    },
    disabledFromNow: {
      type: Boolean,
      default: false,
    },
    disabledUntilNow: {
      type: Boolean,
      default: false,
    },
    timeAccess: {
      type: String,
      default: 'default',
      validator: (value) => [
        'default',
        'past',
        'future',
      ].indexOf(value) >= 0,
    },
  },

  data() {
    return {
      pickedDate: '',
      range: {
        startDate: this.valueStart,
        endDate: this.valueEnd,
      },
      quickAccess: {
        default: [
          'today',
          'currentWeek',
          'currentMonth',
        ],
        past: [
          'today',
          'currentWeek',
          'lastWeek',
          'currentMonth',
          'lastMonth',
        ],
        future: [
          'today',
          'currentWeek',
          'nextWeek',
          'currentMonth',
          'nextMonth',
        ],
        current: '',
      },
    };
  },

  computed: {
    format() {
      if (this.type === 'month') {
        return this.$i18n.t('blueberry.datepicker.format.yearMonth');
      }
      return this.$i18n.t('blueberry.datepicker.format.date');
    },

    disabledDates() {
      if (this.disabledFromNow) {
        return {
          from:　new Date(),
        };
      }
      if (this.disabledUntilNow) {
        return {
          to:　moment().subtract(1, 'day').toDate(),
        };
      }
      return { };
    },

    minimumView() {
      if (this.type === 'month') {
        return this.type;
      }
      return '';
    },

    disableRangeStart() {
      if (this.range.endDate) {
        if (this.disabledUntilNow) {
          return {
            to:　moment().subtract(1, 'day').toDate(),
            from: this.range.endDate,
          };
        }
        return {
          from: this.range.endDate,
        };
      }
      return this.disabledDates;
    },

    disableRangeEnd() {
      if (this.range.startDate) {
        if (this.disabledFromNow) {
          return {
            to: this.range.startDate,
            from:　new Date(),
          };
        }
        return {
          to: this.range.startDate,
        };
      }
      return {
        customPredictor() {
          return true;
        },
      };
    },

    highlightRangeStart() {
      if (this.range.startDate && this.range.endDate) {
        return {
          from: this.range.startDate,
          to: this.range.endDate,
          includeDisabled: true,
        };
      }
      return { };
    },

    highlightRangeEnd() {
      if (this.range.startDate && this.range.endDate) {
        return {
          from: this.range.startDate,
          to: this.range.endDate,
          includeDisabled: true,
        };
      }
      return { };
    },

    menuHighlight() {
      return true;
    },

    isRangeSelected() {
      if (this.range.startDate && this.range.endDate) {
        return true;
      }
      return false;
    },

    quickAccessOptions() {
      if (this.disabledFromNow) {
        return 'past';
      }
      if (this.disabledUntilNow) {
        return 'future';
      }
      if (this.timeAccess === 'past') {
        return 'past';
      }
      if (this.timeAccess === 'future') {
        return 'future';
      }
      return 'default';
    },
  },

  mounted() {
    if (this.value) {
      this.pickedDate = this.value;
      this.setPickedDate();
    }
    if (this.valueStart) {
      this.range.start = this.valueStart;
    }
    if (this.valueEnd) {
      this.range.end = this.valueEnd;
    }
    if (this.valueStart && this.valueEnd) {
      this.confirmRange();
    }
  },

  methods: {
    formatDate(date) {
      if (date) {
        return moment(date).format(this.format);
      }
      return '';
    },

    setRange(range) {
      switch (range) {
        case 'today':
          this.$refs.datepickerStart.setDate(moment());
          this.$refs.datepickerEnd.setDate(moment());
          break;
        case 'currentWeek':
          if (this.quickAccessOptions === 'default') {
            this.$refs.datepickerStart.setDate(moment().startOf('isoWeek'));
            this.$refs.datepickerEnd.setDate(moment().endOf('isoWeek'));
          } else if (this.quickAccessOptions === 'future') {
            this.$refs.datepickerStart.setDate(moment());
            this.$refs.datepickerEnd.setDate(moment().endOf('isoWeek'));
          } else {
            this.$refs.datepickerStart.setDate(moment().startOf('isoWeek'));
            this.$refs.datepickerEnd.setDate(moment());
          }
          break;
        case 'lastWeek':
          this.$refs.datepickerStart.setDate(moment().subtract(1, 'weeks').startOf('isoWeek'));
          this.$refs.datepickerEnd.setDate(moment().subtract(1, 'weeks').endOf('isoWeek'));
          break;
        case 'nextWeek':
          this.$refs.datepickerStart.setDate(moment().add(1, 'weeks').startOf('isoWeek'));
          this.$refs.datepickerEnd.setDate(moment().add(1, 'weeks').endOf('isoWeek'));
          break;
        case 'currentMonth':
          if (this.quickAccessOptions === 'default') {
            this.$refs.datepickerStart.setDate(moment().startOf('month'));
            this.$refs.datepickerEnd.setDate(moment().endOf('month'));
          } else if (this.quickAccessOptions === 'future') {
            this.$refs.datepickerStart.setDate(moment());
            this.$refs.datepickerEnd.setDate(moment().endOf('month'));
          } else {
            this.$refs.datepickerStart.setDate(moment().startOf('month'));
            this.$refs.datepickerEnd.setDate(moment());
          }
          break;
        case 'lastMonth':
          this.$refs.datepickerStart.setDate(moment().subtract(1, 'month').startOf('month'));
          this.$refs.datepickerEnd.setDate(moment().subtract(1, 'month').endOf('month'));
          break;
        case 'nextMonth':
          this.$refs.datepickerStart.setDate(moment().add(1, 'month').startOf('month'));
          this.$refs.datepickerEnd.setDate(moment().add(1, 'month').endOf('month'));
          break;
        default:
          break;
      }
      this.quickAccess.current = range;
    },

    setCustomQuickAccess() {
      this.quickAccess.current = '';
    },

    setPickedDate() {
      this.$refs.popover.close();
      this.$nextTick(() => {
        this.$emit(
          'selected',
          this.pickedDate,
          this.formatDate(this.pickedDate),
        );
      });
    },

    confirmRange() {
      if (this.isRangeSelected) {
        this.$refs.popover.close();
        this.$emit(
          'selected',
          {
            start: moment(this.range.startDate).startOf('day'),
            end: moment(this.range.endDate).endOf('day'),
          },
          `${this.formatDate(this.range.startDate)} - ${this.formatDate(this.range.endDate)}`,
        );
      }
    },
  },
};
</script>
