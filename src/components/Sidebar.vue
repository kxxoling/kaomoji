<template lang="jade">
.sidebar
  figure.avatar
    img(src="https://avatars0.githubusercontent.com/u/1227139")
    figcaption Click to copy!

  ul.sources
    li.source(v-for="key in keys")
      router-link(:to="{ name: 'emoticons', params: { source: key, category: 0 }}"
      v-bind:class="{ active: key == $route.params.source }"
      ) {{ key }}

  .github-container
    github.github
</template>

<script>
import Github from 'components/Github';

export default {
  props: {
    sources: Object,
    default() {
      return {};
    },
  },
  computed: {
    keys() {
      return Object.keys(this.sources);
    },
  },
  data() {
    return {
    };
  },
  components: {
    Github,
  },
};
</script>

<style lang="stylus">
$avatar-width = 160
$avatar-border-width = 10
$avatar-border-radius = ($avatar-width) / 2 + $avatar-border-width
$source-border = 2px solid rgba(200, 200, 200, 0.7)
$dark-blue = #101b28
$blue = #1c3049

.sidebar
  background-color $blue
  min-height 720px
  overflow auto
  display flex
  flex-direction column

.avatar
  width 100%
  padding 0
  margin 0
  margin-bottom 30px
  padding-top 60px

  img
    height $avatar-width px
    width $avatar-width px
    border-radius $avatar-border-radius px
    border ($avatar-border-width)px solid rgba(200, 200, 200, .5)
    display block
    margin-left auto
    margin-right auto

  figcaption
    color #ccc
    font-size 22px
    line-height 36px
    text-align center

.sources
  padding 0
  line-height 52px
  width 100%
  flex-start top

  .source
    border-top $source-border

    &:last-child
      border-bottom $source-border

    .active
      color #fff
      background-color $dark-blue

    a
      display block
      width 100%
      color #aaa
      font-weight bold
      text-indent 36px

      &:hover
        color #ccc
        background-color $dark-blue
        cursor pointer

.github-container
  width 240px
  position absolute
  bottom 30px

  .github
    margin-left auto
    margin-right auto

</style>
