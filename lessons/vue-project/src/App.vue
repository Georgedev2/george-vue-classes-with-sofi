<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import SearchInput from './SearchInput/SearchInput.vue';

</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/profile">Profile</RouterLink> -->
        <RouterLink to="/products">Products</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
        <RouterLink to="/search">SearchInput</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 0 2rem;
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

nav {
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 70px;
}

nav a {
  color: #374151;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.2s ease;
}

nav a:hover {
  color: #2563eb;
}

/* Active route */
nav a.router-link-active {
  color: #2563eb;
  font-weight: 600;
  border-bottom: 2px solid #2563eb;
}
</style>
