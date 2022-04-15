
// utility of create a random id 
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
  console.log(uuidv4());

/**
 * This is Array
 */
  const student = [
    {
      id: 'bccacb3e-68ef-4116-853b-284d012f49e2',
      name: 'sujon',
      email: 'sujon@gmail.com'
    },
    {
      id: '0753523e-5deb-48a1-afae-1e29aafe9368',
      name: 'Rakib',
      email: 'rukib@gmail.com'
    },
    {
      id: '6220452f-a1cf-4615-a658-efc522b9e961',
      name: 'Sakib',
      email: 'sakib@gmail.com'
    }
  ]  
/**
 Array Operation
 -----------------
 * 1. Easily Traverser
 * 2. Filter
 * 3. Delete (medium) [splice --> o(n), filter --> o(n)]
 * 4. Update (medium) [push -->o(n)]
 * 5. Create a new One (easy) [push --> o(1), unshift --> o(n)]
 */


 //Create a new One
 student.push({
    id: '459b2b23-ed86-4ea4-ad8f-46e449547544',
    name: 'Smita',
    email: 'smita@gmail.com'
  })

//Update

const idToUpdate = '0753523e-5deb-48a1-afae-1e29aafe9368';

const updateData = {
    name: 'Susmita',
    email:'susmita@gmail.com'
    
}

// Option One
// This is not proper way

const updateDataObj = student.find((item) => item.id == idToUpdate);
updateDataObj.name = updateData.name;
updateDataObj.email = updateData.email;
 


//Option Two
// This is not proper way

 const upDateIndex = student.findIndex((item) => item.id == idToUpdate);
student[upDateIndex] = {
    id: idToUpdate,
    ...updateData,
} 



//Option Three
// This is proper way
const updateDataIndex = student.findIndex((item) => item.id == idToUpdate);
student[updateDataIndex] = {
    ...student[updateDataIndex],
    ...updateData
}
//Update END

//Delete
student.splice(updateDataIndex, 1);
console.log('Delete',student);

// Traverser
// ForEach, map, filter, every , reduce , some , find , findIndex

//Option One 
for (var i = 0; i <student.length; i++) {
    console.log(student[i].name)
    console.log(student[i].email)
}

// Option Two 

for(let i in student){
    console.log(student[i].name)
}

// Option three 

for(let v of student){
    console.log(v);
}


// console.log(updateDataObj);

//   console.log(student);