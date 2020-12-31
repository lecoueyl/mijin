import Vue from 'vue';

const hljs = require('highlight.js/lib/core');
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('html', require('highlight.js/lib/languages/xml'));

Vue.use(hljs.vuePlugin);
