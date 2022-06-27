<template>
<v-row dense>
  <v-col v-for="(item, index) in resourcesList"  cols="4" :key="index">
    <resources-card-vue 
      :resourceImg="item.resourceImg"
      :resourceTitle="item.resourceTitle" 
      :resourceSubTitle="item.resourceSubTitle"
      :path="item.path">
    </resources-card-vue>
  </v-col>
</v-row>
</template>

<script>
import resources from '@/constants/resources';
import ResourcesCardVue from '@/components/ResourcesCard.vue'

export default {
  name: 'HomeView',
  computed: {
    resourcesList() {
      return resources;
    }
  },
  components: {
    ResourcesCardVue
  },
}
</script>
