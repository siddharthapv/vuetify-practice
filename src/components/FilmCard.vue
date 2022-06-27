<template>
  <v-card elevation="12" hover>
    <v-row>
      <v-col class="col-12 col-sm-6 col-md-4">
        <v-img :src="filmImg" height="200px"></v-img>
      </v-col>
      <v-col class="col-12 col-sm-6 col-md-8">
        <v-card-title>
          {{ filmTitle }}
        </v-card-title>

        <v-card-subtitle>
          {{ filmOpeningCrawl }}
        </v-card-subtitle>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    filmImg: {
      type: String,
      default: null
    },
    filmTitle: {
      type: String,
      default: null
    },
    filmOpeningCrawl: {
      type: String,
      default: null
    },
    path: {
      type: String,
      required: true
    }
  }
}
</script>