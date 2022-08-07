<template>
  <v-data-table :headers="headers" :items="search_result" hide-default-footer>
    <template #[`item.no`]="{ item }">
      <v-chip
        label
        small
        outlined
        color="#F86C6B"
        text-color="#F86C6B"
        class="reject-column"
      >
        {{ item.no }}
      </v-chip>
    </template>
    <template #[`item.ya`]="{ index }">
      <v-radio-group v-if="index === 0" v-model="radioGroup">
        <v-radio value="aaa"></v-radio>
      </v-radio-group>
      <v-radio-group v-if="index === 1" v-model="radioGroup1">
        <v-radio value="bbb"></v-radio>
      </v-radio-group>
    </template>
    <template #[`item.tidak`]="{ index }">
      <v-radio-group v-if="index === 0" v-model="radioGroup">
        <v-radio value="we"></v-radio>
      </v-radio-group>
      <v-radio-group v-if="index === 1" v-model="radioGroup1">
        <v-radio value="we1"></v-radio>
      </v-radio-group>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      h: '',
      headers: [
        { text: 'No', value: 'no' },
        { text: 'Question', value: 'result' },
        { text: 'Ya', value: 'ya' },
        { text: 'Tidak', value: 'tidak' },
      ],
      search_result: [
        { no: 0, result: 'Apakah Aku Ganteng ?', ya: '', tidak: '' },
        { no: 1, result: 'Apakah Kamu Jelek?', ya: '', tidak: '' },
      ],
      radioGroup: false,
      radioGroup1: false,
    }
  },
  mounted() {},
  methods: {
    handleAccept() {
      const body = document.getElementById('button')
      body.style.tra
    },
    onButtonClick(item) {
      console.log('click on ' + item.no)
    },
  },
}
</script>

<style></style>
