// Templates

// sayHi and sayHello, although formatted differently, are both valid ways of declaring functions
function sayHi () {
    console.log("Hi")
}

const sayHello = function(){
    console.log("Hello")
}

sayHello()

function greeter(greeter1, greeter2) { 
    greeter1()
    greeter2()
}

x = sayHi

greeter(x, sayHello)

greetMe = function() { 
    greeter(x, sayHello);
}

// traditional: 
function add(a,b) { 
    return a+b;
}
// or
const add = function (x,y) {return x+y}

// arrow function: (shorter way of writing the same function)
const add = (x,y) => x+y;

// callback: the function that is called to after do_something is done
function do_something(callback) { something }
//shorter way: 
do_something(()=>callback);{ something }

const dog = {
    name: "Fido",
    speak(){
        console.log(this.name)
    }
}
dog.speak()

const add = function(x,y) { console.log(this); return x+y}
console.log(add(1,2))

function Timer() { 
    this.seconds = 0; 
    // arrow function says we aren't creating a new seconds variable inside of this function
    setInterval(()=> {
        this.seconds++;
    }, 1000);
}


// Creating classes
class MathTools { 
    square(x) { 
        return x*x
    }

    static double(x){
        return x+x
    }
}

// Create object
mt = MathTools()
mt.square(4)

// Because double is a static method
MathTools.double(4)