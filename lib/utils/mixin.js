import utilities from './utilsList';

export default {
  props: {
    tagName: {
      type: String,
    },
    // applies vertical align using align items
    uAi: {
      type: String,
    },
    // Applies vertical align using align utility
    uAlign: {
      type: String,
    },
    // Applies border color value using bdcolor utility
    uBdcolor: {
      type: String,
    },
    // Applies background color value using bgcolor utility
    uBgcolor: {
      type: String,
    },
    // Applies margin using margin utility
    uBorder: {
      type: [Boolean, String],
    },
    // Applies margin top using margin utility
    uBordert: {
      type: [Boolean, String],
    },
    // Applies margin right using margin utility
    uBorderr: {
      type: [Boolean, String],
    },
    // Applies margin bottom using margin utility
    uBorderb: {
      type: [Boolean, String],
    },
    // Applies margin left using margin utility
    uBorderl: {
      type: [Boolean, String],
    },
    // Applies vertical margin using margin utility
    uBorderv: {
      type: [Boolean, String],
    },
    // Applies horizontal margin using margin utility
    uBorderh: {
      type: [Boolean, String],
    },
    // Applies clearfix using clearfix utility
    uCf: {
      type: Boolean,
      default: false,
    },
    // Applies color value using color utility
    uColor: {
      type: String,
    },
    // Applies cursor value using cursor utility
    uCursor: {
      type: String,
    },
    // Applies display type using display utility
    uDisplay: {
      type: String,
    },
    // Applies ellipsis using ellipsis utility
    uEllipsis: {
      type: Boolean,
    },
    // Applies flex direction using flex direction utility
    uFd: {
      type: String,
    },
    // Applies float direction using float utility
    uFloat: {
      type: String,
    },
    // Applies height direction using height utility
    uHeight: {
      type: String,
    },
    // Applies line-height direction using leading utility
    uLeading: {
      type: String,
    },
    // Applies horizontal alignment using justify content utility
    uJc: {
      type: String,
    },
    // Applies margin using margin utility
    uM: {
      type: [Boolean, String],
    },
    // Applies margin top using margin utility
    uMt: {
      type: [Boolean, String],
    },
    // Applies margin right using margin utility
    uMr: {
      type: [Boolean, String],
    },
    // Applies margin bottom using margin utility
    uMb: {
      type: [Boolean, String],
    },
    // Applies margin left using margin utility
    uMl: {
      type: [Boolean, String],
    },
    // Applies vertical margin using margin utility
    uMv: {
      type: [Boolean, String],
    },
    // Applies horizontal margin using margin utility
    uMh: {
      type: [Boolean, String],
    },
    // Applies opacity size using opacity utility
    uOpacity: {
      type: String,
    },
    // Applies overflow size using overflow utility
    uOverflow: {
      type: String,
    },
    // Applies padding using margin utility
    uP: {
      type: [Boolean, String],
    },
    // Applies padding top using margin utility
    uPt: {
      type: [Boolean, String],
    },
    // Applies padding right using margin utility
    uPr: {
      type: [Boolean, String],
    },
    // Applies padding bottom using margin utility
    uPb: {
      type: [Boolean, String],
    },
    // Applies padding left using margin utility
    uPl: {
      type: [Boolean, String],
    },
    // Applies vertical padding using margin utility
    uPv: {
      type: [Boolean, String],
    },
    // Applies horizontal padding using margin utility
    uPh: {
      type: [Boolean, String],
    },
    // Applies position type using position utility
    uPlacement: {
      type: String,
    },
    // Applies position type using position utility
    uPosition: {
      type: String,
    },
    // Applies after offset using pull utility
    uPull: {
      type: String,
    },
    // Applies offset using push utility
    uPush: {
      type: String,
    },
    // Applies aspect ratio using ratio utility
    uRatio: {
      type: String,
    },
    // Applies border-radius size using border utility
    uRadius: {
      type: [Boolean, String],
    },
    // Applies top border-radius size using border utility
    uRadiust: {
      type: [Boolean, String],
    },
    // Applies bottom border-radius size using border utility
    uRadiusb: {
      type: [Boolean, String],
    },
    // Applies box-shadow size using boxshadow utility
    uShadow: {
      type: [Boolean, String],
    },
    // Applies width size using size utility
    uSize: {
      type: String,
    },
    // Applies text alignment using text utility
    uText: {
      type: String,
    },
    // Applies text transform using transform utility
    uTransform: {
      type: String,
    },
    // Applies font weight size using weight utility
    uWeight: {
      type: String,
    },
    // Applies z-index size using z-index utility
    uZindex: {
      type: String,
    },
  },
  computed: {
    utilityClasses() {
      let className = '';
      const propKeys = Object.keys(this._props); // eslint-disable-line
      const classNames = propKeys.map((propKey) => {
        const utilityKey = propKey.substr(1).toLowerCase();
        const utilityValue = this._props[propKey] === true ? '' : this._props[propKey]; // eslint-disable-line
        const utility = utilities.find((util) => util.name.toLowerCase() === utilityKey);

        if (utility && this[propKey]) {
          const utilityValues = typeof utilityValue === 'string' ? utilityValue.split(' ') : [];

          return utilityValues.map((value) => {
            className = 'u';

            if (utility.namespace.length > 0) {
              className += `-${utility.namespace}`;
            }

            if (value === 'all') {
              value = ''; // eslint-disable-line
            } else if (value.startsWith('@')) {
              value.replace('@', '');
              className += value;
            } else if (value.length) {
              className += `-${utilityValue}`;
            }

            return className;
          });
        }
        return '';
      });

      return classNames;
    },
  },
};
