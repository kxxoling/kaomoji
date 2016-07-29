<template lang="jade">
#app
  .category(v-for="cate in emoji.categories")
    .name
      | {{e.name}}
    .entries(v-for="e in cate.entries")
      card(:description="e.description", :emoticon="e.emoticon")

</template>

<script>
import Card from './components/Card';
import ktc from '../data/ktc.json';
import kt from '../data/kt.json';
import jp from '../data/jp.json';
import nimingban from '../data/nimingban.json';
import plum from '../data/plum.json';
import yashi from '../data/yashi.json';

const emojiList = [
  kt, ktc, plum, jp, nimingban, yashi,
];
const emoji = emojiList[0];

export default {
  data() {
    return {
      emoji,
    };
  },
  components: {
    Card,
  },
};
</script>

<style lang="stylus">

</style>
