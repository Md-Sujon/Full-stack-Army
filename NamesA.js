const Names = [
    'Ayman',
    'Array',
    'Anika',
    'Elias Emon',
    'Md Sujon',
    'Smita',
    'Engar',
    'Feroz Khan',
    'Habib',
    'Hriday khan',
    'Johir',
    'Md Alamin',
    'md Arafat',
    'parvej'
]

const namesGroup = Names.reduce((acc, cur) =>{
const firstLetter = cur[0].toUpperCase();
if(firstLetter in acc){
   acc[firstLetter].push(cur)
}
else {
    acc[firstLetter] = [cur];
}
    return acc;
}, {});


Object.keys(namesGroup).forEach(groupKey => {

    console.log('----------', groupKey,'----------');
    namesGroup[groupKey].forEach((name) => console.log(name));
    
})
