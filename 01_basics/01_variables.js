
const accountId= 111111//we can not change the value
let accountEmail ="aashish@email.com"// we can change the value
var accountPassword ="1234"//scope ke problem h
accountCity="indore"//without variable we give memory but it is not safe
let accountState;
console.table([accountId,accountEmail,accountCity,accountState])
// accountId= 22
accountEmail="ash@.com"
accountPassword="1231212"
accountCity="sanawad"
console.log(accountId);
console.table([accountId,accountEmail,accountCity])

/*prefer not to use var 
because of issue in block scope and functional scope*/