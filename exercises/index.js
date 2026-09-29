var name=undefined
let name2;
const user = {
  name: "George",
  address: {
    city: "Lagos"
  }
};

// const copy = user;

// copy.address.city="UK"
// console.log('copy',copy)

// console.log('user',user)
const c={...user}
user.address.city="GEORGE";

console.log('original', user)

console.log('copy', c)

// const newCopy=JSON.parse(JSON.stringify(user))
// newCopy.address.city='Japan'

// console.log('user',user)

// console.log(' newCopy', newCopy)

console.log(name)
var name="ABle"

console.log(name2)
let name2="joy"



