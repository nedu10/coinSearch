import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        files: [],
        storeSearchResult: [],
        storeFoundResult: {}
    },
    getters: {
        files: (state) => {
            return state.files;
        },
        storeSearchResult: (state) => {
            return state.storeSearchResult
        },
        storeFoundResult: (state) => {
            return state.storeFoundResult
        }
    },
    mutations: {
        upload: (state,payload) => {
            state.files = payload
        },
        uploadSearchResult: (state, payload) => {
            state.storeSearchResult = payload
        },
        uploadStoreFoundResult: (state, payload) => {
            state.storeFoundResult = payload;
        }
    },
    actions: {
        upload: ({commit},payload) => {
            commit('upload',payload)
        },
        uploadSearchResult: ({commit}, payload) => {
            commit('uploadSearchResult',payload)
        },
        uploadStoreFoundResult: ({commit}, payload) => {
            commit('uploadStoreFoundResult', payload)
        }
    }
})
