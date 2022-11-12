//collection of unique element 

const orderS = new Set(['pasta','parat','roti','curd','parat','roti']);
console.log(orderS);
console.log(orderS.has('roti'));
console.log(orderS.add('samosa'));
console.log(orderS.delete('roti'));
console.log(orderS);


//looping

for(const ord of orderS){
    console.log(ord);
}