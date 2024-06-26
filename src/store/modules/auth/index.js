import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
  state() {
    return {
      userId: null,
      email: null,
      token: null,
      didAutoLogout: false,
      roles: null
    }
  },
  mutations,
  actions,
  getters
}
