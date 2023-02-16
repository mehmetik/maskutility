// Description: Mask phone number
function maskPhone (phone, maskCharacter = '*', start = -1, end = 0) {
  if (Array.isArray(phone)) {
    return phone.map(p => maskPhone(p, maskCharacter, start, end))
  }
  if (typeof phone === 'object') {
    for (let key in phone) {
      phone[key] = maskPhone(phone[key], maskCharacter, start, end)
    }
    return phone
  }
  let maskedPhone = ''
  for (let i = 0; i < phone.length; i++) {
    if (i >= start - 1 && i < phone.length - end) {
      maskedPhone += maskCharacter
    } else {
      maskedPhone += phone[i]
    }
  }
  return maskedPhone
}

maskPhone.onlyNumbers = function (phone, maskCharacter = '*', start = -1, end = 0) {
  if (Array.isArray(phone)) {
    return phone.map(p => maskPhone.onlyNumbers(p, maskCharacter, start, end))
  }
  if (typeof phone === 'object') {
    for (let key in phone) {
      phone[key] = maskPhone.onlyNumbers(phone[key], maskCharacter, start, end)
    }
    return phone
  }
  return maskPhone(phone.replace(/[^0-9]/g, ''), maskCharacter, start, end)
}
maskPhone.withCharacters = function (phone, maskCharacter = '*', start = -1, end = 0, characters = ' ') {
  if (Array.isArray(phone)) {
    return phone.map(p => maskPhone.onlyNumbers(p, maskCharacter, start, end))
  }
  if (typeof phone === 'object') {
    for (let key in phone) {
      phone[key] = maskPhone.onlyNumbers(phone[key], maskCharacter, start, end)
    }
    return phone
  }
  return maskPhone(phone.replace(new RegExp('[^0-9' + characters + ']', 'g'), ''), maskCharacter, start, end)
}
maskPhone.withRegex = function (phone, maskCharacter = '*', start = -1, end = 0, regex = /[^0-9]/g) {
  if (Array.isArray(phone)) {
    return phone.map(p => maskPhone.onlyNumbers(p, maskCharacter, start, end))
  }
  if (typeof phone === 'object') {
    for (let key in phone) {
      phone[key] = maskPhone.onlyNumbers(phone[key], maskCharacter, start, end)
    }
    return phone
  }
  return maskPhone(phone.replace(regex, ''), maskCharacter, start, end)
}

module.exports = maskPhone
