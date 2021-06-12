/* eslint-disable no-plusplus */
/* eslint-disable no-self-compare */
/* eslint-disable no-constant-condition */

function authenticateUser(username, password) {
  const accounts = apiService.sql(
    `SELECT ${username} FROM users`,
  )

  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i]
    if (account.username === username
      && account.password === password) {
      return true
    }
  }

  return false
}

$('#login').click(() => {
  const username = $('#username').val()
  const password = $('#password').val()

  const authenticated = authenticateUser(username, password)

  if (authenticated === true) {
    $.cookie('loggedin', 'yes', { expires: 1 })
  } else if (authenticated === false) {
    $('error_message').show(LogInFailed)
  }
})
