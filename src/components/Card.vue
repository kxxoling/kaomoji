<template lang="jade">
.emoji(@click="copyToClipboard(emoticon)")
  .description {{description}}
  .emoticon
    pre {{emoticon}}
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
      this.$root.success(this.emoticon);
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
  border 1px solid #ddd
  padding 20px
  margin-bottom 10px
  cursor pointer

  &:hover, &:active
    background-color #f0f0f0
    box-shadow 0 0 10px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,.2)

  .description
    opacity 0.6

  .emoticon
    cursor pointer
</style>
