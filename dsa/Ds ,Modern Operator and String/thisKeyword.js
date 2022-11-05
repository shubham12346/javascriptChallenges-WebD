// console.log(this)

// const calage = function(birthyear){
//     console.log(2034-birthyear);
//     console.log(this);
// }

// // const calxAge = (birthyear)=>{
// //     console.log(2034-birthyear)
// //     console.log(this)
// // }

// calage(2222);
// calxAge(1344);

const jonas ={
    firstName:'jonas',
    year:1991,
    calcAge:function (){
        console.log(this)
        console.log(3234-this.year)
       
    },
   

}

jonas.calcAge();