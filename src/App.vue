<template>
  <!-- App.vue -->
  <v-app>

    <v-app-bar app>
      <img @click="$router.push({ path: '/' })" id="starwars-logo" src="http://imageshack.com/a/img922/3783/oyvsRd.png">
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
#starwars-logo {
  width: 150px;
  height: 90px;
  position: relative;
  left: calc(50% - 100px);
}

#starwars-logo:hover {
  cursor: pointer;
}
</style>