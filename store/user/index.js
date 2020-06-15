import Vue from 'vue'
import _ from 'lodash'


export const state = () => ({
    account: null,
})

export const mutations = {
    LOG_IN: (state, data) => {
        state.account = data;
    },
    LOG_OUT: (state) => {
        state.account = null;
    }
}

export const getters = {
    IS_AUTH(state) {
        return (state.account != null && !!state.account.email)
    }
}

export const actions = {

}