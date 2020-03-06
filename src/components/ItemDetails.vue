<template>
  <li>
    <p class="name" :class="{ empty: item.amount < 1 }">{{ item.name }}</p>
    <div>
      <i class="fas fa-plus icon increment" @click="incrementItem(item.id)"></i>
      <span>{{ item.amount }}</span>
      <i v-if="item.amount > 0" class="fas fa-minus icon decrement" @click="decrementItem(item.id)"></i>
      <i v-else class="fas fa-times icon decrement unavailable delete" @click="deleteItem(item.id)"></i>
    </div>
  </li>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ItemDetails",
  props: ["item"],
  methods: {
    ...mapMutations([
      "incrementItem",
      "decrementItem",
      "deleteItem",
      "setItems"
    ])
  },
  updated() {
    this.setItems();
  }
};
</script>

<style scoped>
li {
  width: 97%;
  height: 15%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 25px;
  background-color: #34495e;
  margin-bottom: 5%;
}
.name {
  width: 60%;
  text-align: center;
  font-size: 1.3em;
  font-weight: 700;
  color: #41b883;
}
.empty {
  color: #e57373;
}
div {
  width: 40%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
div > * {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  background-color: #41b883;
  font-size: 1.5em;
  color: #34495e;
  cursor: pointer;
  transition: 0.2s;
}
.increment {
  border-radius: 25px 0 0 25px;
}
.decrement {
  border-radius: 0 25px 25px 0;
}
.unavailable {
  background-color: #34495e;
  color: #ef5350;
}
span {
  background-color: #2c3e50;
  font-size: 1.5em;
  font-weight: 700;
  color: #eee;
}

@media only screen and (min-width: 1000px) {
  li {
    width: 90%;
    margin-bottom: 2%;
  }
  .name {
    width: 70%;
    font-size: 1em;
  }
  div {
    width: 30%;
    height: 70%;
  }
  .icon {
    font-size: 1em;
  }
  .icon:hover {
    background-color: #2c3e50;
    color: #41b883;
  }
  .unavailable {
    background-color: #34495e;
    color: #2c3e50;
  }
  .delete:hover {
    background-color: #2c3e50;
    color: #ef5350;
  }
  span {
    font-size: 1em;
  }
}
</style>
