<template>
  <nav>
    <h1>INVENTORY WITH VUE</h1>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
nav {
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  background-color: #41b883;
  color: #34495e;
}

@media only screen and (min-width: 1000px) {
  nav {
    height: 20%;
  }
}
</style>
