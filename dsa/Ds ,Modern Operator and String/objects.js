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
    }
};

const {openingHours } = restaurant;
const properties =Object.keys(openingHours);
console.log(properties) 
for (const day of Object.keys(openingHours)){
    console.log(day);
}