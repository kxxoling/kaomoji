<template lang="jade">
#app
  .category(v-for="cate in emojiData.categories")
    .name
      | {{e.name}}
    .entries(v-for="e in cate.entries")
      card(:description="e.description", :emoticon="e.emoticon")

</template>

<script>
import Card from './components/Card';
import emoji from '../data/kt.json';

export default {
  data() {
    return {
      emojiData: emoji,
    };
  },
  components: {
    Card,
  },
};
</script>

<style lang="stylus">

</style>
