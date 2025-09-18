console.log("hello")

function testScope() { 
    let x = 1;
    if (true) { 
        let x = 2; 
        console.log(x);
        /* semi colons are required in Javascript to seperate statements 'if they are necessary'
        /* key words -- 'let': does not allow you to redeclare the variable in the same space
                        'const': can't be redefined */
    }
    console.log(x);
}

testScope();

console.log("---")

function makeDoubler() {
return function(x) { 
return x + x
    }
}

myDoubler = makeDoubler()

console.log(myDoubler(4))

console.log("---")

function makeIncrementer(k) {
    let n = k        // forms the 'closure'
return function(x) { 
return x + n
    }
}

myIncrementer = makeIncrementer(5)

console.log(myIncrementer(4))

console.log("---")

function makeIncrementer(k) {
return function(x) { 
return x + k
    }
}

myIncrementer = makeIncrementer(5)

console.log(myIncrementer(4))

console.log("---")

function makeCounter() { 
    let count = 0; 
    return function () { 
        count++; 
        return count;
    };
}

const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter2());

function x() {
    myDoubler = makeIncrementer(4)  // this is writing over an existing global variable
    console.log("whatever")
}

/*
utils.js: 

function add (x,y){ 
    return x + y
}

main.js: 

// how do you import util.js
z = add(3,4)

// 2 ways: 

// Way #1:
<html>
    <body>
        <script src="utils.js"></script>
        <script src="main.js"></script>  // this 'glues' the two together so the add function can now be used in main
    </body>
</html>

// Way #2: (in main.js)
const {add} = require("./utils.js")
// or
const utils = require("./utils.js")
utils.add(3,4)

// NEW WAY 
// (in util.js)
export function add(x,y) {
return x+y
}

// (in main.js)
import {add} from "./utils.js";
console.log(add(3,4))
*/


