function emailValidator (email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  return emailRegex.test(email)
}

function maskEmail (email, maskChar = '*', start = 0, end = -1) {
  if (!emailValidator(email)) {
    throw new Error('Invalid email')
  }
  const emailArr = email.split('@')
  const username = emailArr[0]
  const domain = emailArr[1]
  if (username.length < start + end) {
    start = 0
    end = -1
  }
  const maskedUsername = username.slice(0, start) + maskChar.repeat(username.length - start - end) + username.slice(username.length - end)
  return maskedUsername + '@' + domain
}

maskEmail.withDomain = function (email, maskChar = '*', start = 0, end = -1, domain = 'gmail.com') {
  if (!emailValidator(email)) {
    throw new Error('Invalid email')
  }
  const emailArr = email.split('@')
  const username = emailArr[0]
  if (username.length < start + end) {
    start = 0
    end = -1
  }
  const maskedUsername = username.slice(0, start) + maskChar.repeat(username.length - start - end) + username.slice(username.length - end)
  return maskedUsername + '@' + domain
}

module.exports = maskEmail
