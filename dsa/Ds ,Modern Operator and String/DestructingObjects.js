const restaurant ={
    names:'Classico Italino',
    location :'Via Angelo Tavanti 23 ,Frienze,Italy',
    categories:['Italian','Pizzeria','Vegetarian' ,'Organic'],
    startMenu:['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu:['Pizza','Pasta','Risotto'],
    openingHours :{
        thu :{
            open:12,
            close:22,
        },
        fri :{
            open:11,
            close:23,
        },
        sat:{
            open:0,
            close:24,
        },
    },
    order: function (starterIndex ,mainIndex){
        return [this.startMenu[starterIndex] ,this.mainMenu[mainIndex]]
    },
};


const {names ,openingHours ,categories} = restaurant;
console.log(names,openingHours,categories);

// to destructure with different name 

const{names :na ,openingHours :oh,categories :cg}= restaurant
console.log(na,cg,oh);

const {menu ,startMenu:startater =[]} = restaurant;

console.log(menu,startater);