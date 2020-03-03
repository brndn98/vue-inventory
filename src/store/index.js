import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: []
  },
  getters: {
    sortedItems: state => {
      return state.items.sort((a, b) => {
        return a.amount > 0 ? 1 : a.amount < b.amount ? -1 : 0;
      });
    }
  },
  mutations: {
    incrementItem(state, id) {
      state.items.forEach(item => {
        item.id === id ? item.amount++ : (item.amount = item.amount);
      });
    },
    decrementItem(state, id) {
      state.items.forEach(item => {
        item.id === id
          ? item.amount > 0
            ? item.amount--
            : (item.amount = 0)
          : (item.amount = item.amount);
      });
    },
    addItem(state, name) {
      state.items = [...state.items, { id: uuidv4(), name, amount: 0 }];
    },
    deleteItem(state, id) {
      state.items = state.items.filter(item => item.id !== id);
    },
    setItems(state) {
      localStorage.setItem("vue-inventory", JSON.stringify(state.items));
    },
    getItems(state) {
      const localData = localStorage.getItem("vue-inventory");
      state.items = localData ? JSON.parse(localData) : [];
    }
  },
  actions: {},
  modules: {}
});
