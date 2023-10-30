const books = [
    {'name': 'book 1', 'author': 'Hemant', 'publication': 2005},
    {'name': 'book 2', 'author': 'Kuldeep', 'publication': 2009},
    {'name': 'book 3', 'author': 'Rohit', 'publication': 2013},
    {'name': 'book 4', 'author': 'Rahul', 'publication': 2015}
]

const newBooksArray = books.filter(i => i.publication < 2010);
newBooksArray.map(i=> i.author = i.author.toUpperCase());

console.log(newBooksArray);