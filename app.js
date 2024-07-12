import bcrypt from "bcrypt"
const saltRounds = 5;
const myPlaintextPassword = 'Serz4862@';
const someOtherPlaintextPassword = 'not_bacon';

// bcrypt.genSalt(saltRounds, function(err, salt) {
//    const apple = bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//         console.log("It is working")
//         // console.log(apple)
//     });

// });

const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(myPlaintextPassword, salt);
console.log(myPlaintextPassword)
console.log(hash)
console.log(salt)