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
    this.otpFak();
    axios.get(
      "http://localhost:8080/https://www.cimbniaga.co.id/content/dam/cimb/kpr/KPR%20XTRA%20MANFAAT.pdf"
    );
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
