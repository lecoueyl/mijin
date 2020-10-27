/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */

export default {
  bind: (el, binding) => {
    // define Handler
    const { bubble } = binding.modifiers;
    const handler = (e) => {
      if (bubble || (!el.contains(e.target) && el !== e.target)) {
        binding.value(e);
      }
    };
    el.__vueClickOutside__ = handler;

    // add Event Listeners
    document.addEventListener('click', handler);
  },

  unbind: (el) => {
    // remove Event Listeners
    document.removeEventListener('click', el.__vueClickOutside__);
    el.__vueClickOutside__ = null;
  },
};
