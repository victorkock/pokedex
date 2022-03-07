import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [
    createPersistedState({
      key: "pokedex",
    }),
  ],
  state: {
    statePokemonDataList: [],
    stateFavoritePokemonList: [],
  },
  getters: {},
  mutations: {
    setPokemonData(state, list) {
      state.statePokemonDataList = list;
    },
    setFavoritePokemonList(state, list) {
      state.stateFavoritePokemonList = list;
    },
    addFavorite(state, name) {
      state.stateFavoritePokemonList.push(name);
    },
    deleteFavorite(state, item) {
      state.stateFavoritePokemonList.splice(item, 1);
    },
    eraseFavoritePokemonList(state) {
      state.stateFavoritePokemonList = [];
    },
  },
  actions: {
    setPokemonData(context, payload) {
      context.commit("setPokemonData", payload);
    },
    stateFavoritePokemonList(context, payload) {
      context.commit("setFavoritePokemonList", payload);
    },
    addFavorite(context, payload) {
      context.commit("addFavorite", payload);
    },
    deleteFavorite(context, payload) {
      context.commit("deleteFavorite", payload);
    },
    eraseFavoritePokemonList(context) {
      context.commit("eraseFavoritePokemonList");
    },
  },
  modules: {},
});
