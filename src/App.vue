<template>
  <div id="app">
    <div class="row mt-3 ml-3 mr-4">
      <div class="col col-md-6">
        <router-link to="/">
          <div class="col col-md-6 twitter-title">Twitter</div>
        </router-link>
      </div>
      <div class="col col-md-6">
        <h3 class="text-right"> {{ state.user.username }} </h3>
      </div>
    </div>
    <router-view/>
  </div>

</template>

<script>

import { reactive } from 'vue';

export default {
  name: 'App',
  setup() {
    const state = reactive({
      user: {
        username: '_DavidPena'
      }
    })

    return {
      state,
    }
  }
}
</script>

<style>
a:link, a:visited, a:active {
  color: inherit;  
  text-decoration:none;
}
#app {
  font-family: 'Raleway', sans-serif;
}
.twitter-title {
  font-size: 1.7em;
}
</style>
