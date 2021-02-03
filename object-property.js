const students = [
    {id: 01, name: 'Tahia'},
    {id: 02, name: 'Sara'},
    {id: 03, name: 'Munia'},
    {id: 04, name: 'Saif'}
]

const kid = students.map(x => x.name);
const kidId = students.map(x => x.id);
const bigKid = students.filter(x => x.id < 3);
const smallKid = students.filter(x => x.id > 2);
const kidOne = students.find(x => x.id < 3);

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     const sName = student.name;
//     kid.push(sName);
// }
console.log(kid);
console.log(kidId);
console.log(bigKid);
console.log(smallKid);
console.log(kidOne)
