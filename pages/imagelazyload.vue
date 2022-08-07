<template>
  <div>
    <div
      class="card-image"
      data-image-full="https://unsplash.it/500/500?image=758"
    >
      <!-- style="background-image: url(https://unsplash.it/100/100?image=758)" -->
      <img
        id="image_source"
        src="https://unsplash.it/100/100?image=758"
        alt="Eli DeFaria"
      />
    </div>
    adsd
  </div>
</template>

<script>
export default {
  name: "imageLazyLoad",
  mounted() {
    setTimeout(() => {
      this.lazyLoad();
    }, 1000);
  },
  methods: {
    lazyLoad() {
      var card_images = document.querySelectorAll(".card-image");

      // loop over each card image
      card_images.forEach(function (card_image) {
        var image_url = card_image.getAttribute("data-image-full");
        var content_image = card_image.querySelector("#image_source");

        console.log(image_url, "dsds");
        // change the src of the content image to load the new high res photo
        content_image.src = image_url;

        // listen for load event when the new photo is finished loading
        content_image.addEventListener("load", function () {
          // swap out the visible background image with the new fully downloaded photo
          card_image.style.backgroundImage = "url(" + image_url + ")";
          // add a class to remove the blur filter to smoothly transition the image change
          card_image.className = card_image.className + " is-loaded";
        });
      });
    },
  },
};
</script>

<style>
.card-image {
  display: block;
  min-height: 100px; /* layout hack */
  height: 100px;
  width: 100px;
  background: #fff center center no-repeat;
  background-size: cover;
  filter: blur(3px); /* blur the lowres image */
}
.card-image > img {
  display: block;
  width: 100%;
  opacity: 0; /* visually hide the img element */
}
.card-image.is-loaded {
  filter: none; /* remove the blur on fullres image */
  transition: filter 1s;
}
</style>
