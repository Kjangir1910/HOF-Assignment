const X = Math.floor(Math.random()*21)
let y = 3

for(let i=3;i>0;i--){
    setTimeout(() => {
       console.log('Timem remaing : ',i)
   }, 1000*(y-i));
 }
setTimeout(() => {
    console.log('Auto generated no : ', X)
 }, y*1000);


// function countdown() {
//   if (y > 0) {
//     console.log(`Time remaining: ${y} seconds`);
//     y--;
//     setTimeout(countdown, 1000);
//   } else {
//     console.log('Auto generated no : ', X)
//   }
// }


// function countdown() {
//     if (y === 0) {
//         console.log('Auto generated no : ', X)
//         return;
//     }
//     console.log(`Time remaining: ${y} seconds`);
//       y--;
//       setTimeout(countdown, 1000);
//   }

// countdown(); 
