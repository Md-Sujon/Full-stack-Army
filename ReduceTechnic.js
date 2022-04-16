const arrr = []; 
for(var i = 0; i < 5000; i++){
    arr.push(i)
}

console.log(arrr.length);

console.time("not-Optimized");
arr.filter((item) => item % 2 == 0 ).map((item) => item * 2);
console.timeEnd("not-Optimized")



console.time("Optimized");
arr.reduce((acc, current) =>{
    if(current %  2 == 0){
        acc.push(current * 2);
    }
    return acc;
}, [] )
console.timeEnd("Optimized")



function myReduce(array, callBack, init) {
    let acc = init;
for(let i = 0; i < array.length; i++) {
    acc = callBack(acc, array[i], i , array);
}
return acc;
}

const sum = myReduce([1,2,3,4], (a, b) => a + b, 0)
console.log(sum);


const arr = [1,2, false,3,NaN,false,4,5,NaN,6];
const result = myReduce(
    arr,
    (acc, cur) => {
        if(cur){
      acc.push(cur * cur);
        }
        return acc;
    },
    []
)
console.log(result);