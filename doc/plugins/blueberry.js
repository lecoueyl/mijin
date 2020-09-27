import Vue from 'vue';
import {
  Button,
  Checkbox,
  Headline,
  Icon,
} from '../../lib/index';

const components = {
  Button,
  Checkbox,
  Headline,
  Icon,
};

Object.entries(components).forEach(([name, component]) => {
  Vue.component(`Bb${name}`, component);
});
