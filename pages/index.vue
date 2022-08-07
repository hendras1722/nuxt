<template>
  <div>
    <div class="home">
      <div class="image_bg"></div>
      <div class="home__wording">Welcome to MSA LuL</div>
    </div>
    <div class="text-center mt-5">
      <h1 style="font-weight: 700">Catatan Untuk MSA</h1>
    </div>
    <div class="section px-5 py-5">
      <v-card class="card" width="400">
        <v-card-text>Table Questionnaire</v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn text color="teal accent-4" @click="handleUrl('questionnaire')">
            Learn More
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="card" width="400">
        <v-card-text>OTP Sms</v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn text color="teal accent-4" @click="handleUrl('otp')">
            Learn More
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="card" width="400">
        <v-card-text>Image Lazy Load</v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn
            text
            color="teal accent-4"
            @click="handleUrl('lazyloadingimages')"
          >
            Learn More
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="card" width="400">
        <v-card-text>Drag n Drop (For Desktop)</v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn text color="teal accent-4" @click="handleUrl('drag')">
            Learn More
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="card" width="400">
        <v-card-text>HTML Symbols</v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn text color="teal accent-4" @click="handleUrl('htmlSymbol')">
            Learn More
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="card" width="400">
        <v-card-text>Table Questionnaire</v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn text color="teal accent-4" @click="handleUrl('questionnaire')">
            Learn More
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleUrl(e) {
      switch (e) {
        case 'questionnaire':
          location.href = '/tableQuestionnaire'
          break
        case 'otp':
          location.href = '/otp'
          break
        case 'lazyloadingimages':
          location.href = '/lazyloadingimages'
          break
        case 'drag':
          location.href = '/drag'
          break
        case 'htmlSymbol':
          location.href = '/htmlSymbol'

          break
        default:
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.image_bg {
  background: url('@/assets/image/msa.jpeg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: black;
  background-position: center;
  height: 100vh;
}
.home {
  position: relative;
  &__wording {
    position: absolute;
    z-index: 1;
    color: white;
    margin-top: -100px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    font-size: 30px;
    font-weight: 700;
  }
}
.section {
  display: flex;
  gap: 5px;
  justify-content: center;
  flex-wrap: wrap;
}
.section .card {
  margin: 8px;
}
</style>
