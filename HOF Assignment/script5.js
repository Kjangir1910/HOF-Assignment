const check = 'http://';

const url = 'http://www.google.com';

console.log(url.includes(check));

const regax = /^(http|https):\/\//;
console.log(regax.test(url));