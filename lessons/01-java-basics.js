
let list = [2.7, 4.88, 6.9, 8.1, 10.2];
const res = list.reduce((acc, curr) => acc + curr, 0);
console.log('R->', res)//  32.78
console.log(res.toFixed(1));



const foo = (arg) => {
    let output;
    setTimeout
        (() => {
            output = arg.split('').reverse().join('');
        })

    return output
}


// ['J', 'o', 'y']
// ['y', 'o', 'J']
// 'yoJ'
const result = foo("Joy");
console.log('K',result);
console.log(result.toUpperCase());// 'YOJ'

const foo1 = (arg, cb) => {
    let output;
    setTimeout
        (() => {
            output = arg.split('').reverse().join('');
                    cb(output.toUpperCase());
        })


}

foo1("Joy", (result) => {
    console.log(result);
});

//handling async operations
//  using promises
// using callbacks
//using Async/await

const foo2 = (arg) => { 
    return new Promise((resolve) => {
        setTimeout(() => {
            const output = arg.split('').reverse().join('');
            resolve(output.toUpperCase());
        });
    });
}    

foo2("Joy").then((result) => {
    console.log('K', result);
}); 

const baz = async (arg) => {

    const result = await foo2(arg);
    console.log('K', result);
}

baz("Joy");

// Closure

function makeCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

/* 
makeCounter() runs and creates a local variable count.
It returns an inner function that uses count.
Normally, once makeCounter() finishes, its local variables would disappear.
But because the inner function references count, JavaScript keeps it alive. The inner function "closes over" that variable — that's the closure.
*/

// PURE FUNCTION

let count=9
// HOF. Higher Order Function
// null and undefined
// let x='paul'

let name=null
let lastName;

let isvalid=true
const add = (a, b, c) => {  
    const result = a + b + count;
    c(result);
};

add(1,3, (result) => {
    console.log(result);
}

);

const add2 = (a, b) => {
    const result = a + b + count;
    return ()=>{
        console.log(result);
    }
};

const x=add2(1,3);
x();

// v1 --> v2 --> v3
// vue2 introduce option API
// vue3 introduce composition API