<template lang="jade">
.emoticon-container
  .title-container
    a(
      v-for="cate in source.categories",
      v-link="{ name: 'emoticons', params: { source: $route.params.source, category: $index }}",
    ).tag {{ cate.name || '[ ]' }}
  .category
    .entry(v-for="e in emoji.entries")
      card.card(:description="e.description", :emoticon="e.emoticon")
</template>

<script>
import Card from 'components/Card';

export default {
  props: {
    emojiSources: {
      required: true,
    },
  },
  computed: {
    source() {
      const { source } = this.$route.params;
      return this.emojiSources[source];
    },
    emoji() {
      const { category, source } = this.$route.params;
      return this.emojiSources[source].categories[category];
    },
  },
  components: {
    Card,
  },
};
</script>

<style lang="stylus">
.emoticon-container
  width 100%

  .title-container
    padding-top 20px
    padding-left 5px
    margin-bottom 20px
    font-size 32px

    .tag
      color #777
      border 2px solid #ccc
      border-radius 2px
      font-size 14px
      display inline-block
      line-height 30px
      margin 0 5px
      padding 0 15px

      &:hover
        background-color #dfdfdf

  .category
    display flex
    flex-wrap wrap
    justify-content flex-start

    .entry
      margin 10px
      width 300px
</style>
