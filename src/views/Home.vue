<template>
  <div class="home container mt-5">
    <h1>H O M E</h1>
    <div class="users-list">
      <router-link v-for="user in users" :to="{ name: 'UserProfile', params: { userId: user.id} }" :key="user.id">
        <div class="users-square">
          {{ user.username }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

import { users } from '../assets/users'

export default {
  name: 'Home',
  setup() {
    return {
      users
    }
  }
}
</script>

<style scoped>
  .users-square {
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.25s ease;
  }
  .users-square:hover {
      transform: scale(1.1, 1.1);
  }
</style>
