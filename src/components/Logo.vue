<template>
  <img :src="withText ? '/logo.png' : '/logo_square.png'" :width="getWidth" :height="getHeight" alt="NumberNine CMS - Every good business needs a good CMS software">
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 40
    },
    withText: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    getWidth() {
      return this.width;
    },

    getHeight() {
      return Math.ceil((this.getWidth / 48) * 48);
    }
  }
};
</script>

