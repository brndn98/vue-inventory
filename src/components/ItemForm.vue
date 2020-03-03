<template>
  <form @submit.prevent="submitItem(name)">
    <input type="text" v-model="name" placeholder="new item..." required />
    <input type="submit" value="add item" />
  </form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ItemForm",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    ...mapMutations(["addItem"]),
    submitItem(itemName) {
      this.addItem(itemName);
      this.name = "";
    }
  }
};
</script>

<style scoped>
form {
  margin-top: 2%;
  width: 95%;
  height: 6%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
form > * {
  height: 100%;
  font-family: "Roboto";
  font-weight: 700;
  border: none;
  outline: none;
  color: #2c3e50;
  transition: 0.2s;
}
input[type="text"] {
  width: 70%;
  font-size: 1.2em;
  padding: 0 2%;
  border-radius: 10px 0 0 10px;
  background-color: #eee;
}
input[type="submit"] {
  width: 20%;
  font-size: 1.1em;
  border-radius: 0 10px 10px 0;
  background-color: #41b883;
}
input[type="text"]:focus {
  border-radius: 0;
  outline: #41b883 auto 1px;
}
input[type="submit"]:focus {
  border-radius: 0;
  background-color: #34495e;
  color: #41b883;
}

@media only screen and (min-width: 1000px) {
  form {
    width: 80%;
    height: 5%;
  }
  input[type="text"] {
    font-size: 1em;
  }
  input[type="submit"] {
    font-size: 1em;
  }
  input[type="submit"]:hover {
    border-radius: 0;
    background-color: #34495e;
    color: #41b883;
  }
}
</style>
