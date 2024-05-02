import { parseJwt } from './helper.js'

let timer

export default {
  async signIn(context, payload) {
    let signInUrl = import.meta.env.VITE_API_URL + '/auth/emailsignin'

    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Accept', 'application/json')

    const res = await fetch(signInUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email: payload.email,
        password: payload.password
      })
    })

    const responseData = await res.json()

    if (!res.ok) {
      const error = new Error(
        responseData.error || 'Failed to authenticate. Check your sign in data.'
      )
      throw error
    }

    let jwtData = parseJwt(responseData.accessToken)

    localStorage.setItem('token', responseData.accessToken)
    localStorage.setItem('userId', jwtData.uuid)
    localStorage.setItem('expiresAt', jwtData.exp)
    localStorage.setItem('email', jwtData.email)

    let expiresIn = jwtData.exp - jwtData.iat
    timer = setTimeout(function () {
      context.dispatch('autoSignOut')
    }, expiresIn * 1000)

    context.commit('setUser', {
      token: responseData.accessToken,
      userId: jwtData.uuid,
      email: jwtData.email
    })
  },

  async signUp(context, payload) {
    let signUpUrl = import.meta.env.VITE_API_URL + '/v1/auth/signup'

    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Accept', 'application/json')

    const res = await fetch(signUpUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        username: payload.username,
        password: payload.password,
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        professionalField: payload.professionalField,
        experienceDescription: payload.experienceDescription
      })
    })

    if (!res.ok) {
      const data = await res.json()
      const error = new Error(data.message || 'Failed to sign up. Check your sign up data.')
      throw error
    }

    context.dispatch('signIn', {
      email: payload.email,
      password: payload.password
    })
  },

  trySignIn(context) {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    const expiresAt = localStorage.getItem('expiresAt')
    const email = localStorage.getItem('email')

    const now = parseInt(new Date().getTime() / 1000)
    const expiresIn = +expiresAt - now

    if (expiresIn < 0) {
      return
    }

    timer = setTimeout(function () {
      context.dispatch('autoSignOut')
    }, expiresIn * 1000)

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
        email: email
      })
    }
  },

  signOut(context) {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expiresAt')

    clearTimeout(timer)

    context.commit('setUser', {
      token: null,
      userId: null,
      email: null
    })
  },

  autoSignOut(context) {
    context.dispatch('signOut')
    context.commit('setAutoLogout')
  }
}
