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
    orderpasta: (in1, in2, in3) => {
        console.log(`this is ypur ${in1} and ${in2} and $one{in3}`);
    },
    orderPizza : (ing1 ,...otherIng)=>{
        console.log(`this is ${ing1} and ${otherIng}`)
    }
};



const [a,b,...other] =[1,2,34,5,6,7,4];
console.log(a,b,other)

const add =(...num)=>{
    let sum =0;
    for(let i=0;i<num.length;i++)
    sum+=num[i];

    console.log(sum);
}

add(2,3);
add(2,3,4,5,6);
x=[1,2,3,4,5,5];
add(...x);

restaurant.orderPizza('asad',1,2,3,4);