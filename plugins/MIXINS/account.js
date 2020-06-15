import Vue from "vue";

import { mapState } from "vuex";

const Account = {
    install(Vue, options) {
        Vue.mixin({
            computed: {
                ...mapState({
                    account: state => state.user.account,
                })
            }
        });
    }
};

Vue.use(Account);