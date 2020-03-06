<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <Navbar />
    <ItemForm />
    <ItemList />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import ItemList from "./components/ItemList.vue";
import ItemForm from "./components/ItemForm.vue";

export default {
  name: "App",
  components: {
    Navbar,
    ItemList,
    ItemForm
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Roboto", "Segoe UI", "Oxygen";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #34495e;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  width: 98%;
  height: 98%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border-radius: 10px;
  background-color: #2c3e50;
}

::-webkit-scrollbar {
  width: 2%;
}
::-webkit-scrollbar-track {
  background-color: #202f3f;
  border-radius: 25px;
}
::-webkit-scrollbar-thumb {
  background-color: #34495e;
  border-radius: 25px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #41b883;
}

@media only screen and (min-width: 1000px) {
  #app {
    width: 40%;
    height: 80%;
  }
}
</style>
