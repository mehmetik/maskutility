function maskName (name, maskingChar = '*', revealCount = 0) {
  let nameArray = name.trim().split(' ')
  let maskedName = ''

  for (let i = 0; i < nameArray.length; i++) {
    let currentNamePart = nameArray[i]
    let maskedPart = ''
    for (let j = 0; j < currentNamePart.length; j++) {
      if (j < revealCount) {
        maskedPart += currentNamePart[j]
      } else {
        maskedPart += maskingChar
      }
    }
    maskedName += maskedPart + ' '
  }

  return maskedName.trim()
}

maskName.maskWithRegex = function (text, maskCharacter = '*', numOfCharsToMask = 0, regex = /[^a-zA-Z .]/g) {
  if (Array.isArray(text)) {
    return text.map(t => maskName.maskWithRegex(t, maskCharacter, numOfCharsToMask, regex))
  }
  if (typeof text === 'object') {
    for (let key in text) {
      text[key] = maskName.maskWithRegex(text[key], maskCharacter, numOfCharsToMask, regex)
    }
    return text
  }
  return maskName(text.replace(regex, ''), maskCharacter, numOfCharsToMask)
}

module.exports = maskName
