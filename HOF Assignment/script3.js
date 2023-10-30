const inrInDollar = 80;

let priceList = {
    'patasi': 10,   // Price in USD
    'kulche': 5,    // Price in USD
    'coffee': 7     // Price in USD
}


console.log('priceList => ', priceList);

// console.log('Object.keys(priceList) : ', Object.keys(priceList));

// let newObjWithInrPrice = {};

//     Object.keys(priceList).map((key) => {
//         newObjWithInrPrice[key] = priceList[key] * inrInDollar;
//     })

// console.log('with USD price : ', newObjWithInrPrice);

let newObjWithInrPrice = priceList;

Object.keys(priceList).map(i=> {
    newObjWithInrPrice[i] = priceList[i] * inrInDollar;
})

console.log('with INR price : ', newObjWithInrPrice);