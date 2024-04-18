export default {
  async login(context, payload) {
    let loginUrl = 'http://localhost:8080/api/v1/auth/login'

    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Accept', 'application/json')

    headers.append('Access-Control-Allow-Origin', 'http://localhost:8080')
    headers.append('Access-Control-Allow-Credentials', 'true')

    headers.append('GET', 'POST', 'OPTIONS')

    const res = await fetch(loginUrl, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password
      })
    })

    const responseData = await res.json()

    if (!res.ok) {
      const error = new Error(
        responseData.error || 'Failed to authenticate. Check your login data.'
      )
      throw error
    }

    localStorage.setItem('token', responseData.token)

    context.commit('setToken', {
      token: responseData.token
    })
  },

  async signup(context, payload) {
    let signupUrl = 'http://localhost:8080/api/v1/auth/register'

    const res = await fetch(signupUrl, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        name: payload.name
      })
    })

    if (!res.ok) {
      const error = new Error()
      throw error
    }

    context.dispatch('login', {
      email: payload.email,
      password: payload.password
    })
  },

  async logout(context) {
    context.commit('setToken', {
      token: null
    })
  }
}
