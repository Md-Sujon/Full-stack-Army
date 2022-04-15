const array = [];
const arrayToObj = {};


for (let i = 0; i < 500000; i++) {
    const o = {
        id: i,
        value:i,
    }

  array.push(o);
  arrayToObj[i] = o;
 
}
// console.log(array);



console.time('Array') //Operation Time Check start
const index =array.findIndex((item) => item.id == 400000)
    array.splice(index, 1);
console.timeEnd('Array') //Operation Time Check End


console.time('Object') //Operation Time Check start
delete arrayToObj[400000]
console.timeEnd('Object') //Operation Time Check End

// console.log(array.length);

