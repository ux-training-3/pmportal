import Vuex from 'vuex'

const appStore = () => {
    return new Vuex.Store({
        state: {
            instructor_list: {},
            content_list: [],
        },
        mutations: {
            instructor_list_update(state, payload) {
                state.instructor_list = {...payload}
            },
            content_list_update(state, payload) {
                state.content_list = [...payload]
            },
        }
    })
};

export default appStore