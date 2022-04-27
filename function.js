
/**
 
function sleep(name){
console.log(`${name} is sleeping`);
}


function awake(name){
    console.log(`${name} is taking hours`);
}

function eat(name, time){
    console.log(`${name} is eat ${time}`);
}


function walk(name, destination){
    console.log(`${name} is walking to ${destination}`);
}


function study(name){
    console.log(`${name} is studying`);
}

function work(name){
    console.log(`${name} working`);
}

function jobHolderLifecycle(name){
    awake(name);
    eat(name, "breakfast")
    walk(name, 'Office');
    work(name);
    eat(name, "Lunch");
    walk(name, 'home');
    eat(name, "dinner");
    sleep(name);
}
 */

// jobHolderLifecycle("sujon");
// console.log("----------------------------------------------------------------");
// jobHolderLifecycle("smita")
// console.log("----------------------------------------------------------------");
// jobHolderLifecycle("Rakib")
// console.log("----------------------------------------------------------------");
// jobHolderLifecycle("Robin")
// console.log("----------------------------------------------------------------");
// jobHolderLifecycle("Sumi")



/**
function StudentLifecycle(name){
    awake(name);
    eat(name, "breakfast")
    study(name)
    eat(name, "Lunch");
    walk(name, 'home');
    eat(name, "dinner");
    sleep(name);
}
 */

// StudentLifecycle('Alifa')
// console.log("---------------------");
// StudentLifecycle('Akhi')
// console.log("---------------------");
// StudentLifecycle('Bilkish')





function name_of_function(){
    //function body

    //you can write any valid js code here

    // return a result
}

//There are two steps

//-Define a function

// -Invoke a function
  const c = 100;
function test_function(a,b=5){
    // const a = 10;
    // const b = 20;
    const result = a + b;
    console.log(result);
}
test_function(c);

//Return Function
/**
function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}
 +
function time(a,b){
    return a*b;
}

const a = 10;
const b = 20;

const r1 = sum(a, b);

const r2 = sub(a, b);

const r = Math.abs(time(sum(a, b), sub(a, b)));
console.log(r);
 */


// Prove --> Function is a value

function testFunction(){
    console.log('i am test function');
}

const fn = testFunction;
fn();


const fData = {
    prams : ['a', 'b'],
    body : [
        'const r = a+b',
        'return r'
    ]
};

const fBody = fData.body.reduce((accumulator, current) => {
    accumulator += current+ ';';
    return accumulator;
}, '');

console.log(fBody);
