const maskPhone = require('./src/maskPhone')
import mask from './src/index'

console.log(mask.withCharacters(['1 2 345678 9 .0', '532.346.49-11'], '*', -1, 4, '-'))
console.log(maskPhone('532.346.49-11', '*', -1, 4))
console.log(maskPhone.onlyNumbers('532.346.49-11', '*', -1, 4))
// console.log(maskEmail('mehmetik@gmail.com','*', 0, -1));
// console.log(maskEmail("bilgi@mehmet.com.tr", "*", 0, 2)); // ***gi@mehmet.com.tr
// console.log(maskEmail("bilgi@mehmet.com.tr", "#", 3, 3)); // bil##@mehmet.com.tr
// console.log(maskEmail.withDomain("mehmetik@gmail.com", "*", 0, -1, "hidden.co")); // ***

// console.log(maskName("Mehmet Ali Doğan"));
// console.log(maskName("Mehmet Karabulut", "*", 2));
// console.log(maskName("Jr. Murtaza Öbek", "*", 3));
// console.log(maskName.maskWithRegex("Mehmet Ali Doğan", "*", 2, /[^A-Za-z]/g));


