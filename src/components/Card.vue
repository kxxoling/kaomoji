<template lang="pug">
.kaomoji(v-bind:data-clipboard-text="emoticon")
  .description {{description}}
  .emoticon
    pre {{emoticon}}
</template>

<script>
import Clipboard from 'clipboard';

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
  mounted() {
    this.clipboard = new Clipboard(this.$el);
    this.clipboard.on('success', (e) => {
      e.clearSelection();
      this.$parent.$parent.success(e.text);
    });

    this.clipboard.on('error', () => {
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="stylus" scoped>
.kaomoji
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
