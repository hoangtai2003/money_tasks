<template>
  <nav>
    <!-- Trong trường hợp sau này thay đổi path thì chỗ này nên sử dụng name -->
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'transaction' }">Transaction</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
