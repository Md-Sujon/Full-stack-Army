

// utility of create a random id 
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
//   console.log(uuidv4());

/**
 * This is Array
 */
const student = {
    'bccacb3e-68ef-4116-853b-284d012f49e2' : {
      id: 'bccacb3e-68ef-4116-853b-284d012f49e2',
      name: 'sujon',
      email: 'sujon@gmail.com'
    },
    '0753523e-5deb-48a1-afae-1e29aafe9368': {
      id: '0753523e-5deb-48a1-afae-1e29aafe9368',
      name: 'Rakib',
      email: 'rukib@gmail.com'
    },
    '6220452f-a1cf-4615-a658-efc522b9e961' : {
      id: '6220452f-a1cf-4615-a658-efc522b9e961',
      name: 'Sakib',
      email: 'sakib@gmail.com'
    }
}

/**
 Object Operation
 -----------------
 * 1. Easily Traverser (o(n))
 * 2. 1.1 Get anything if you have the key: o(1)
 * 3. Delete (medium) o(1)
 * 4. Update (medium) o(1)
 * 5. Create a new One (easy) o(1) */


 //Create a new One
const std = {
    id: '497a6c7b-9514-4827-b632-6a4d2da9b05c',
    name: 'Alifa',
    email: 'alifa@gmail.com',
}

student[std.id] = std

// Update
const idToBeData = '6220452f-a1cf-4615-a658-efc522b9e961';
const updateData = {
    id: '6220452f-a1cf-4615-a658-efc522b9e961',
    name : 'Faruk',
    email : 'faruk@gmail.com',
}
student[idToBeData] = {
    ...student[updateData],
    ...updateData
}

//Delete
delete student[idToBeData];

// Traverser
//Option one
for(let key in student){
    console.log(student[key].email);
}
//Option two
Object.keys(student).forEach((key) => {
    const students = student[key];
    console.log(students.name, students.email);
});

// Option three
Object.values(student).forEach((item) => {
    console.log(item.name, item.email);
})


//  console.log(student);