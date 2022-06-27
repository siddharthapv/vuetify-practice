<template>
  <v-card v-if="path" hover @click="$router.push({ path: path })">
    <v-img :src="resourceImg" height="200px"></v-img>

    <v-card-title>
      {{ resourceTitle }}
    </v-card-title>

    <v-card-subtitle>
      {{ resourceSubTitle }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: {
    resourceImg: {
      type: String,
      default: null
    },
    resourceTitle: {
      type: String,
      default: null
    },
    resourceSubTitle: {
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