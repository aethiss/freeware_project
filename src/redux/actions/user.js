const fetch = require('node-fetch')

import connections from '../../constants/connections'

// Helpers
import { omit } from 'ramda'

export function setUser(data) {
  return {
    type: 'SET_USER',
    user: data,
  }
}

export function saveNewUser(user) {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      fetch(`${connections.HOST}:${connections.PORT}/api/register`, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify(user),
      })
        .then(resp => resp.json())
        .then(data => {
          // console.log('POST NEW USER ::', data)
          if (data.errno) {
            reject({ error: 'sql error', msg: data.code })
          } else {
            dispatch(setUser(omit(['token', 'iduser', 'password'], user)))
            resolve(omit(['iduser', 'password'], data))
          }
        })
        .catch(err => {
          // console.log('catch new user ', JSON.stringify(err))
          reject({ msg: 'errore :(', error: err })
        })
    })
  }
}

export function loginUser(username, password) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      fetch(`${connections.HOST}:${connections.PORT}/api/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify({ username, password }),
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.errno) {
            reject({ error: 'sql error', msg: data.code })
          } else if (Array.isArray(data.body) && !data.body.length) {
            reject({ msg: 'Email or password incorrect', error: {} })
          } else {
            dispatch(setUser(omit(['iduser', 'password'], data.body[0])))
            resolve(data.body)
          }
        })
        .catch(err => {
          reject({ msg: 'errore :(', error: err })
        })
    })
  }
}

export function autoLogin(token) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      fetch(`${connections.HOST}:${connections.PORT}/api/restorelogin`, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify({ token }),
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.errno) {
            reject({ error: 'sql error', msg: data.code })
          } else if (Array.isArray(data.body) && !data.body.length) {
            reject({ msg: 'Email or password incorrect', error: {} })
          } else {
            console.log('user !', data.body[0])
            dispatch(setUser(omit(['iduser', 'password'], data.body[0])))
            resolve(data.body)
          }
        })
        .catch(err => {
          reject({ msg: 'errore :(', error: err })
        })
    })
  }
}
