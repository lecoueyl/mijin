import * as components from './components';

const install = (Vue, config = {}) => {
  Object.entries(components).forEach(([name, component]) => {
    const prefix = config.prefix ? config.prefix : 'Mj';

    Vue.component(`${prefix}${name}`, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install;
