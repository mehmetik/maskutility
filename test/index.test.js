import ava from 'ava'
import mask from '../src/index'
import maskPhone from '../src/maskPhone'
import maskEmail from '../src/maskEmail'
import maskName from '../src/maskName'

ava('maskPhone', t => {
  t.is(mask.withCharacters(['1 2 345678 9 .0', '532.346.49-11'], '*', -1, 4, '-'), ['1 2 345678 9 .0', '532.346.49-11'])
  t.is(maskPhone('532.346.49-11', '*', -1, 4), '532.346.49-11')
  t.is(maskPhone.onlyNumbers('532.346.49-11', '*', -1, 4), '532.346.49-11')
})

ava('maskEmail', t => {
  t.is(maskEmail('example@gmail.com', '*', 0, -1))
})

ava('maskName', t => {
  t.is(maskName('Mehmet Ali Doğan'))
})
