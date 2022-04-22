const axios = require('axios').default;
const url = 'https://jsonplaceholder.typicode.com/posts';

async function getData(){
    const {data} = await axios.get(url);
    /**
     // array data ShowS
      const result = data.slice(0, 11).map(item => {
        return {
            userId: item.id,
            id: item.id,
            title: item.title
        }
    })
     */
   
    //Array data convert Object
    //Array data convert Object
    const result = data.slice(0, 11).reduce((acc, cur) =>{
        acc [cur.id] = {...cur};
        delete acc[cur.id].body;
        return acc;
    }, {})
    return result;
}
getData().then(data => console.log(data))
.catch(err => console.log(err))