const restuarant ={
    name:'Classico Italino',
    location :'Via Angelo Tavanti 23, Firenze ,Italy ',
    categories :['Italino' ,'Pizzeria','Vegetarian','Organic'],
    startMenu :['Focaccia' ,'Brushetta','Garlic','Bread','Caprese Salad'],
    mainMenu :['Pizza','Pasta','Risotto'],
    order:function(starterIndex,mainOndex){
        return [this.startMenu[starterIndex],this.mainMenu[mainOndex]]
    }
};

const arr= [2,3,4];

const [x,y,z]=arr;
console.log(x,y,z);
console.log(arr);

const [first,,secod]= restuarant.categories;
console.log(first,secod);

 //for swaping
console.log("swapping");

let [main,secondary]=restuarant.categories;
console.log(main,secondary);

let temp = main;
main = secondary;
secondary = temp;
console.log(main,secondary);

//or 

[main,secondary] = [secondary,main];
console.log(main,secondary);


//destructing an return value of a function 

const [starter ,mainM] = restuarant.order(2,0);
console.log(starter,mainM);

//Default values 

const [p=1 ,q=2,r=3]=[6];
console.log(p,q,r);