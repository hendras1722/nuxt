<template>
  <div>
    <div>
      Jaga rahasia diantara kita jangan sampai disebar kemana mana ini otp buat
      kamu ya: 12345
    </div>
    <div>@master--fluffy-moonbeam-bcc80b.netlify.app #12345</div>

    <br />
    <br />
    <div>Otpmu nii buat dikirim: {{ stateOTP }}</div>
    <div>sayangnya belum ada input otpnya ini cuman ngetest doang</div>
    <div>kalau pengen coba bisa ke sini ni <a href="/otp">Klik Disini</a></div>
    <div>v.{{ version }}</div>

    <!-- "mousemove", onZoom);
      container.addEventListener("mouseover", onZoom);
      container.addEventListener("mouseleave", offZoom); -->
    <div style="width: 100vw" class="d-flex justify-center">
      <div
        id="container"
        @mousemove="onZoom"
        @mouseover="onZoom"
        @mouseleave="offZoom"
      >
        <img
          src="https://thumbs.dreamstime.com/b/fond-de-coeur-d-amour-d-arc-en-ciel-60045149.jpg"
          alt="Image Alt"
        />
      </div>
    </div>

    <!-- <div id="container" class="image">
      <img class="loading_img" />
    </div> -->
    <Tutorial ref="tutorial" />
  </div>
</template>

<script>
import Tutorial from "../components/Tutorial.vue";
export default {
  name: "IndexPage",
  components: {
    Tutorial,
  },
  data() {
    return {
      stateOTP: "",
      version: "1.0.1",
    };
  },
  mounted() {
    // var image = document.getElementsByClassName("loading_img")[0];
    // const containter = document.getElementsByClassName("image")[0];
    // containter.style.width = "300px";
    // image.src = "loading-cat.gif";
    // image.onload = function () {
    //   this.onload = function () {
    //     // Whatever you want to do now.
    //   };
    //   image.src =
    //     "https://deelay.me/5000/https://thumbs.dreamstime.com/b/fond-de-coeur-d-amour-d-arc-en-ciel-60045149.jpg";
    // };
    // this.otpFak();
    // axios.get(
    //   "http://127.0.0.1:8080/https://www.cimbniaga.co.id/content/dam/cimb/kpr/KPR%20XTRA%20MANFAAT.pdf"
    // );
  },
  methods: {
    imageZoom() {
      const tutorial = this.$refs.tutorial;
      console.log(tutorial, this.$nuxt, "initutorial");

      const container = document.getElementById("container");
      const img = document.querySelector("img");
      container.addEventListener("mousemove", onZoom);
      container.addEventListener("mouseover", onZoom);
      container.addEventListener("mouseleave", offZoom);
      function onZoom(e) {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        img.style.transformOrigin = `${x}px ${y}px`;
        img.style.transform = "scale(2.5)";
      }
      function offZoom(e) {
        img.style.transformOrigin = `center center`;
        img.style.transform = "scale(1)";
      }
    },
    onZoom(e) {
      const img = document.querySelector("img");
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;
      img.style.transformOrigin = `${x}px ${y}px`;
      img.style.transform = "scale(2.5)";
    },
    offZoom(e) {
      const img = document.querySelector("img");
      img.style.transformOrigin = `center center`;
      img.style.transform = "scale(1)";
    },
    async otpFak() {
      if ("OTPCredential" in window) {
        const ac = new AbortController();

        const res = await navigator.credentials
          .get({
            otp: { transport: ["sms"] },
            signal: ac.signal,
          })
          .then((otp) => {
            ac.abort();
            return otp.code;
          })
          .catch((err) => {
            ac.abort();
            console.log(err);
          });
        this.stateOTP = res;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.loading_img {
  // width: 600px;
  // height: 450px;
  // background-image: url("../static/loading.gif");
  background-position: center;
}
// .image img {
//   width: 100%;
// }
// .image {
//   display: inline-block;
//   height: 100%;
// }

#container {
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.3);
  height: 300px;
  width: 300px;
  overflow: hidden;
}
img {
  transform-origin: center center;
  object-fit: cover;
  height: 100%;
  width: 100%;
}
</style>
