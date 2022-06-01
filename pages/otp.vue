<template>
  <div>
    <div>
      Jaga rahasia diantara kita jangan sampai disebar kemana mana ini otp buat
      kamu ya: 12345
    </div>
    <div>@master--fluffy-moonbeam-bcc80b.netlify.app #12345</div>

    <br />
    <br />
    {{ cok }}
    <v-otp-input length="5" v-model="stateOTP" @finish="onFinish"></v-otp-input>
    <br />
    <h1 v-if="stateOTP.length >= 5">{{ sukses }}</h1>
    <div>v.{{ version }}</div>
  </div>
</template>

<script>
export default {
  name: "OTP",
  data() {
    return {
      stateOTP: "",
      sukses: "",
      cok: {},
      version: "1.0.1",
    };
  },
  mounted() {
    this.otpFak();
    navigator.credentials
      .get({
        password: true,
      })
      .then((res) => {
        this.cok = res;
        console.log(res);
      });
  },
  methods: {
    onFinish(rsp) {
      if (this.stateOTP == "12345") return (this.sukses = "Gweeerrrr isoh cah");
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
