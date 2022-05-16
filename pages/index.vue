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
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data: {
    stateOTP: "",
  },
  mounted() {
    if ("OTPCredential" in window) {
      const ac = new AbortController();

      navigator.credentials
        .get({
          otp: { transport: ["sms"] },
          signal: ac.signal,
        })
        .then((otp) => {
          this.stateOTP = otp.code;
          ac.abort();
        })
        .catch((err) => {
          ac.abort();
          console.log(err);
        });
    }
  },
};
</script>
