import Vue from 'vue';
import { Button, Headline } from '../../lib/index';

const components = { Button, Headline };

Object.entries(components).forEach(([name, component]) => {
  Vue.component(`Bb${name}`, component);
});
