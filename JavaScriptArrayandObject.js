
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
 * Easily Traverser
 * Filter
 * Delete
 * Update
 * create a new One
 */





  console.log(student);