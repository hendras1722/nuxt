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
    <div class="image">
      <img class="loading_img" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "IndexPage",
  data() {
    return {
      stateOTP: "",
      version: "1.0.1",
    };
  },
  mounted() {
    var image = document.getElementsByClassName("loading_img")[0];
    const containter = document.getElementsByClassName("image")[0];
    containter.style.width = "300px";
    image.src = "loading-cat.gif";

    image.onload = function () {
      image.src =
        "https://deelay.me/5000/https://thumbs.dreamstime.com/b/fond-de-coeur-d-amour-d-arc-en-ciel-60045149.jpg";
    };
    this.otpFak();
    axios
      .get("/api/meta-scraper", {
        params: {
          target:
            "https://www.cimbniaga.co.id/content/dam/cimb/kpr/KPR%20XTRA%20MANFAAT.pdf",
        },
      })
      .then((res) => console.log(res));

    // "https://www.cimbniaga.co.id/content/dam/cimb/kpr/KPR%20XTRA%20MANFAAT.pdf"
  },
  methods: {
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
.image img {
  width: 100%;
}
.image {
  display: inline-block;
  height: 100%;
}
</style>
