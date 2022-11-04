const restaurant = {
    names: 'Classico Italino',
    location: 'Via Angelo Tavanti 23 ,Frienze,Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.startMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    orderpasta : (in1,in2,in3)=>{
        console.log(`this is ypur ${in1} and ${in2} and $one{in3}`);
    }
};




const arr=[7,8,9];
const badNewRR =[1,2,arr[0]];

const newaarr = [1,2,...arr];
console.log(newaarr)


//creating a new array with 

const newmenu = [...restaurant.mainMenu,'Alluprata'];
console.log(newmenu);


//copy array 

const menu =[...restaurant.startMenu ,...restaurant.mainMenu];
console.log(menu);

//Iterables :arrays ,strings ,maps ,sets .Not objects

const str='shuham';
const letter =[...str,'','a','g'];
console.log(letter);


// const ingredients =[prompt("Let's make pasta ! Ingredient "),prompt('Ingredient 2 '),
// prompt('Ingredient 3 ')];

// console.log(ingredients);
// restaurant.orderpasta(...ingredients);




//object 

const newRestaurant ={foudded:1888,...restaurant ,owner:'shubham'};
console.log(newRestaurant);

const restaCopy = {...restaurant};
restaCopy.names="this is new resataurant";
console.log(restaCopy.names ,restaurant.names)
   