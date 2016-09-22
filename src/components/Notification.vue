<template lang="jade">
.notification(
  transition='fade',
  :style="{ top: top ? top + 'px' : 'auto' }",
  @mouseenter='clearTimer()',
  @mouseleave='startTimer()'
)
  .icon(v-bind:class="type")
    i.fa(v-bind:class="{ warning: 'fa-warning', error: 'fa-times', info: 'fa-exclamation-circle', success: 'fa-check' }[type]")
  .group
    span {{title}}
    p {{message}}
    .closeBtn.d-icon.d-icon-close(@click='handleClose()')

</template>

<script>
export default {
  props: {
    title: '',
    message: '',
    duration: 3000,
    type: 'info',
    callback: null,

    closed: false,
    top: null,
    timer: null,
  },

  watch: {
    closed(newVal) {
      if (newVal) {
        this.$destroy(true);
      }
    },
  },

  methods: {
    handleClose() {
      this.closed = true;
      if (this.callback) {
        this.callback();
      }
    },

    clearTimer() {
      clearTimeout(this.timer);
    },

    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.handleClose();
          }
        }, this.duration);
      }
    },
  },

  ready() {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        if (!this.closed) {
          this.handleClose();
        }
      }, this.duration);
    }
  },
};
</script>

<style lang="stylus">
.notification
  display inline-block
  width 320px
  padding 15px
  box-sizing border-box
  border-radius 4px
  position fixed
  right 25px
  background-color #fff
  box-shadow 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)
  transition opacity 0.2s, top 0.2s
  overflow hidden
  z-index 100

  .group
    float left
    display inline-block
    width 230px
    color #666

  .icon
    display inline-block
    box-sizing border-box
    height 48px
    line-height 42px
    text-align center
    width 48px
    font-size 46px
    float left
    margin-right 10px

    &.success
      color #87d068

    &.error
      color #f60

    &.info
      color #2db7f5

    &.warning
      color #fac450

  span
    font-size 16px

  p
    font-size 14px
    margin 5px 0 0 0

  .closeBtn
    position absolute
    top 15px
    right 15px
    cursor pointer

.fade-leave
  opacity 0
</style>
