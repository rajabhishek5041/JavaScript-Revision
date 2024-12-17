const myNums = [1, 2, 3, 4]

const totalNums = myNums.reduce( function (acc, curval) {
    // console.log(`acc: ${acc} and curval: ${curval}`);
    return acc + curval;
}, 0)

// console.log(totalNums);


const totalNums2 = myNums.reduce((acc, curval) => acc + curval , 0)

console.log(totalNums2);




const ShoppingCart = [
    {
        Car: 'BMW',
        Price: 15000000,
    },
    {
        Car: 'Aston',
        Price: 55000000,
    },
    {
        Car: 'Rolls',
        Price: 65000000,
    },
    {
        Car: 'Lambo',
        Price: 85000000,
    }
]
const total_Price = ShoppingCart.reduce( (acc, item) => acc + item.Price , 0)

console.log(total_Price);
