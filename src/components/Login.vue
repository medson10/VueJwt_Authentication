<template>
    <div class="col-sm-4 col-sm-offset-4">
      <h2>Log In</h2>
      <p>Log In with Auth0's Lock Widget.</p>
      <button class="btn btn-primary" @click="login()">Log In</button>
    </div>
  </template>

  <script>
  // Import the Lock instance
  import {lock} from '../index'

  export default {

    methods: {

      login() {

        // Show the Lock Widget and save the user's JWT on a successful login
        lock.show((err, profile, id_token) => {

          localStorage.setItem('profile', JSON.stringify(profile))
          localStorage.setItem('id_token', id_token)

        })
      },

      logout() {

        // Remove the profile and token from localStorage
        localStorage.removeItem('profile')
        localStorage.removeItem('id_token')

      }
    }

  }

  </script>
