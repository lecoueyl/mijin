import Vue from 'vue';
import { Button, Headline, Icon } from '../../lib/index';

const components = { Button, Headline, Icon };

Object.entries(components).forEach(([name, component]) => {
  Vue.component(`Bb${name}`, component);
});
