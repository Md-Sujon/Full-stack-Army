// Map , Filter , reduce

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Map
const str = number.map((v) => v.toString());
console.log(str);

// Filter
const num = [1, 2, false, 4, NaN, 6, "", 7];

const filtered = num.filter((v) => !v); //false value show
console.log(filtered);

const filtereds = num
  .filter((v) => !!v) /**trued value show */
  .map((v) => v.toString()); //map use filter after convert string
console.log(filtereds);

// Reduce
const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const sum = numb.reduce((a, b) => a + b);
console.log(sum);

/**
 * map -> [same length as the original array]
 * filter --> [With Filtered item]
 * reduce --> Know one knows(Only you know) number, string,boolean,function,array, object
              all possible value
 */

//We want this --> '12false4NaN67'
const result = num.reduce((accumulator, current) => {
  accumulator += current.toString();
  return accumulator;
}, "");
console.log(result);

//We want this --> '12467'
const result1 = num.reduce((accumulator, current) => {
  if (current) {
    accumulator += current.toString();
  }
  return accumulator;
}, "");
console.log(result1);

//We want this --> '1,2,4,6,7'
const result2 = num.reduce((accumulator, current, index) => {
  if (current) {
    accumulator += current.toString() + (index < num.length - 1 ? "," : "");
  }
  return accumulator;
}, "");
console.log(result2);

//We want this --> [1,2,4,6,7]
const result3 = num.reduce((accumulator, current, index) => {
  if (index == 0) accumulator += "[";
  if (current) {
    accumulator += current.toString() + (index < num.length - 1 ? "," : "");
  }
  if (index == num.length - 1) accumulator += "]";
  return accumulator;
}, "");
console.log(result3);

//We want this --> ['1','2','4','6','7']
const result4 = num.reduce((accumulator, current,) => {
    if(current){
        accumulator.push(current.toString());
    }
   return accumulator
  }, []);
  console.log(result4);

  
