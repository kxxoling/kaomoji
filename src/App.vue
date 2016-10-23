<template lang="jade">
.app
  sidebar.left-bar(:sources="kaomojiSources")
  router-view.route-view(:kaomoji-sources="kaomojiSources")
  .notifications
    notification(
      v-for="n in notifications",
      :title="n.title",
      :message="n.message",
      :type="n.type",
      :duration="n.duration")

</template>

<script>
import '!vue-style!css!../node_modules/font-awesome/css/font-awesome.css';
import Sidebar from 'components/Sidebar';
import Notification from 'components/Notification';
import ktc from '../data/ktc.json';
import kt from '../data/kt.json';
import jp from '../data/jp.json';
import nimingban from '../data/nimingban.json';
import yashi from '../data/yashi.json';
import kxxoling from '../data/kxxoling.json';

const kaomojiSources = {
  'KT 颜文字': kt,
  'KT 颜文字（2）': ktc,
  'Japanese Kaomoji': jp,
  神乐版雅诗: yashi,
  'A 岛匿名版': nimingban,
  kxxoling,
};

export default {
  data() {
    return {
      kaomojiSources,
      notifications: [],
    };
  },
  methods: {
    success(kaomoji) {
      const notification = {
        title: 'Successfully copied!',
        message: kaomoji,
        type: 'success',
        duration: 3000,
      };
      this.notifications.push(notification);
    },
  },

  components: {
    Sidebar, Notification,
  },
};
</script>

<style lang="stylus">
@require '~normalize.css/normalize.css'

li
  list-style-type none
a
  text-decoration none

html, body, .app
  width 100%
  height 100%
.app
  display flex

  .left-bar
    width 240px

  .route-view
    flex 1
    height 100%
    overflow auto
</style>
