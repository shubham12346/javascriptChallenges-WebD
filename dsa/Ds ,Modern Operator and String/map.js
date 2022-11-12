
const obj ={
    1: 'shubham',
    2:'ravi',
    3:'sunny',
    4:'Aashish'
}
const rest = new Map();

rest.set('name','shubham restaurant ');
rest.set(1,'taulihawa ,kapilvastu ');
console.log(rest);
rest.set('categories ',['samosa','chay','jelabi','pudi -sabji']);
console.log(rest);
rest.set('open',7);
rest.set('close',22);
rest.set(true,'we are open');
rest.set(false,'we are close');
const time=9;
console.log( rest.get(time>rest.get('open') && time< rest.get('close')));

console.log(rest.size);




//creating a new map

const question = new Map([
['question','what is the best programming language in the world '],
[1,'C'],
[3,'Java'],
[2,'javascript'] ,
[true,'Correct'],
[false,'Incorrect'] ]);

console.log(question)


//converting object into map 

console.log(Object.entries(obj));
map = new Map(Object.entries(obj))
console.log(map);

//Quiz app
console.log(question.get('question'));
for( const [key,value ] of question){
    if(typeof(key)===Number)console.log(`Answer is ${key}:${value}`)
}
const answer =2|| Number(prompt('Your answer '))

console.log( question.get(answer===2))



//converting map to array 

console.log([...question])


