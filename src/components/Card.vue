<template lang="jade">
.emoji(@click="copyToClipboard(emoticon)")
  .description {{description}}
  .emoticon
    pre(onClick="javascript:this.select();") {{emoticon}}
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: false,
    },
    emoticon: {
      type: String,
      required: true,
    },
  },
  methods: {
    copyToClipboard() {
      this.selectNode();
      document.execCommand('copy');
    },
    selectNode() {
      const node = this.$el.getElementsByClassName('emoticon')[0];
      const range = document.createRange();
      range.selectNode(node);
      window.getSelection().addRange(range);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="stylus" scoped>
.emoji
  color #42b983
  border 1px solid #ccc
  border-radius 6px
  padding 10px
  margin-bottom 10px

  .description
    opacity 0.6

  .emoticon
    cursor pointer
</style>
