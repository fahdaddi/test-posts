import getCookie from "~/plugins/getCookie";
import _ from "lodash";

export const state = () => ({});

export const mutations = {};

export const getters = {};

export const actions = {
    async nuxtServerInit({ commit, dispatch, state }, { app, req, redirect }) {
        let token = getCookie('token-test', req)
        if (!!token) {
            commit('user/LOG_IN', JSON.parse(token));
        }
    }
};