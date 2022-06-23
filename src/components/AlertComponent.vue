<template>
<v-alert
  :border="border"
  :color="color"
></v-alert>
</template>

<script>
export default {
    props: {
        border: {
            type: String,
            default: null
        },
        color: {
            type: String,
            default: null
        }
    }
}
</script>