<template>
  <div>
    <div class="image">
      <img class="loading_img" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      stateOTP: '',
      version: '1.0.1',
    }
  },
  mounted() {
    var image = document.getElementsByClassName('loading_img')[0]
    const containter = document.getElementsByClassName('image')[0]
    containter.style.width = '300px'
    image.src = 'loading-cat.gif'

    image.onload = function () {
      this.onload = function () {
        // Whatever you want to do now.
      }
      image.src =
        'https://deelay.me/5000/https://thumbs.dreamstime.com/b/fond-de-coeur-d-amour-d-arc-en-ciel-60045149.jpg'
    }

    // "https://www.cimbniaga.co.id/content/dam/cimb/kpr/KPR%20XTRA%20MANFAAT.pdf"
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.loading_img {
  // width: 600px;
  // height: 450px;
  // background-image: url("../static/loading.gif");
  background-position: center;
}
.image img {
  width: 100%;
}
.image {
  display: inline-block;
  height: 100%;
}
</style>
