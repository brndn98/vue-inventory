<template>
  <ul v-if="sortedItems.length">
    <ItemDetails
      v-for="item in sortedItems"
      v-bind:item="item"
      :key="item.id"
    />
  </ul>
  <p v-else>add some items to your list <i class="fas fa-arrow-up"></i></p>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import ItemDetails from "./ItemDetails.vue";

export default {
  name: "ItemList",
  components: {
    ItemDetails
  },
  computed: {
    ...mapGetters(["sortedItems"])
  },
  methods: {
    ...mapMutations(["setItems"])
  },
  updated() {
    this.setItems();
  }
};
</script>

<style scoped>
ul {
  width: 90%;
  height: 70%;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  overflow: auto;
  list-style-type: none;
}
p {
  width: 90%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5em;
  color: #eee;
}
i {
  margin-left: 5%;
  color: #41b883;
}

@media only screen and (min-width: 1000px) {
  ul {
    width: 90%;
    height: 60%;
  }
}
</style>
