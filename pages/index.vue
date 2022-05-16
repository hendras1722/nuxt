<template>
  <div>
    <div>
      Jaga rahasia diantara kita jangan sampai disebar kemana mana ini otp buat
      kamu ya: 12345
    </div>
    <div>@webgua.com #12345</div>
    <br />
    <div>Otpmu nii buat dikirim: {{ stateOTP }}</div>
    <div>sayangnya belum ada input otpnya ini cuman ngetest doang</div>
    <div>v.{{ version }}</div>
  </div>
</template>

<script>
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
            this.stateOTP = otp.code;
            ac.abort();
            return otp.code;
          })
          .catch((err) => {
            ac.abort();
            console.log(err);
          });
        alert(res);
      }
    },
  },
};
</script>
