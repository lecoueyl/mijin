import * as components from './components';

export let options = {
  extendIcons: {},
  prefix: 'Mj',
};

const setOptions = (newOptions) => {
  Object.entries(newOptions).forEach(([key, value]) => {
    if (!options[key]) throw new Error(`[Mijin] ${key} is not a valid plugin option`);
    if (typeof value !== typeof options[key]) throw new Error(`[Mijin] Invalid prop: type check failed for option "${key}". Expected ${typeof options[key]} , got ${typeof value}`);

    options[key] = value;
  });
};

const install = (Vue, config = {}) => {
  setOptions(config);

  Object.entries(components).forEach(([name, component]) => {
    Vue.component(`${options.prefix}${name}`, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install;
export * from './components';
