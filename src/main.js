import Vue from 'vue';
import VueRouter from 'vue-router';

import App from 'src/App';
import urls from 'src/urls';

Vue.use(VueRouter);

const router = new VueRouter();
router.map(urls);
router.start(App, 'body');
