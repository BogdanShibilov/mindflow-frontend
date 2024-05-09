export default {
  setUser(state, payload) {
    state.token = payload.token
    state.userId = payload.userId
    state.email = payload.email
    state.didAutoLogout = false
    state.roles = payload.roles
  },
  setAutoLogout(state) {
    state.didAutoLogout = true
  }
}
