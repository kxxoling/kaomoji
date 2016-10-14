import Vue from 'vue';
import VueRouter from 'vue-router';

import App from 'src/App';
import urls from 'src/urls';

Vue.use(VueRouter);

const router = new VueRouter({ routes: urls });

export default new Vue({
  el: 'app',
  router,
  render: h => h(App),
});
