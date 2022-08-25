function name(){

}

// This Function Expression
const myFn = function(){

}

// FatArrow Function
const myFns = () =>{

}

// Pure function
function sum(a, b){
    return a+b;
}

//Side effect
let limit = 100;
function changeLimit(limit){
    limit= 500;  
}

// pure function
const arr = [4,5,6];
function add(arr, data){
    arr.push(data)
}


// impure Function
function log(msg){
console.log(msg);
}

/** 
Higher Order Function
function can be as an argument
function can be from another function
*/

/** 
Hidden concepts
scope
closer
Excution Context
Hoisting
*/
// Pure Function
// function hFn(a, b){
//     const r = a+b
//     return r;
// }


// console.log(Math.floor(Math.random()*101));




// function can be as an argument
// convert Higher Order Function

            //Dry Code
  /**      
function generateTwoRanNum(max, callBack){
        const random1 = Math.floor(Math.random()*max)
        const random2 = Math.floor(Math.random()*max)
        const result = callBack(random1, random2);
        return result;
            }

const result = generateTwoRanNum(100,(ren1, ren2)=>{
console.log(ren1,ren2 , "Total:",ren1*ren2);
})


console.log(generateTwoRanNum(1000,(ren1, ren2)=>ren1+ren2));
console.log(generateTwoRanNum(1000,(ren1, ren2)=>ren1-ren2));
console.log(generateTwoRanNum(1000,(ren1, ren2)=>ren1*ren2));

// function randomSum(max){
//     const random1 = Math.floor(Math.random()*max)
//     const random2 = Math.floor(Math.random()*max)
//     return random1+random2;
// }

// function randomSub(max){
//     const random1 = Math.floor(Math.random()*max)
//     const random2 = Math.floor(Math.random()*max)
//     return random1-random2;
// }

// function randomSqr(max){
//     const random1 = Math.floor(Math.random()*max)
//     const random2 = Math.floor(Math.random()*max)
//     return random1*random1 + random2+random2;
// }


*/