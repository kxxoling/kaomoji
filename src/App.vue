<template lang="jade">
.app
  sidebar.left-bar(:sources="emojiSources")
  router-view.route-view(:emoji-sources="emojiSources")

</template>

<script>
import Sidebar from 'components/Sidebar';

import ktc from '../data/ktc.json';
import kt from '../data/kt.json';
import jp from '../data/jp.json';
import nimingban from '../data/nimingban.json';
import yashi from '../data/yashi.json';
import kxxoling from '../data/kxxoling.json';

const emojiSources = {
  'KT 颜文字': kt,
  'KT 颜文字（2）': ktc,
  'Japanese Kaomoji': jp,
  神乐版雅诗: yashi,
  'A 岛匿名版': nimingban,
  kxxoling,
};

export default {
  replace: false,
  data() {
    return {
      emojiSources,
    };
  },

  components: {
    Sidebar,
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
