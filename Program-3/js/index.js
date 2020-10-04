var objBooks = [

    {
        bookID: 2314,
        title: 'My experiments with Truth',
        author: 'Mahathma Ghandhi',
        status: false
    },

    {
        bookID: 7864,
        title: 'Origin of species',
        author: 'Charles Darwin',
        status: false
    },

    {
        bookID: 1524,
        title: 'Geetanjali',
        author: 'Rabindra Nath Tagore',
        status: true
    },
    {
        bookID: 0981,
        title: 'Le Contract Social',
        author: 'Jean Jacques Rousseau',
        status: true
    },
    {
        bookID: 0981,
        title: 'Le Contract Social',
        author: 'Jean Jacques Rousseau',
        status: true
    }
];
//arranging the books in the order of book id
objBooks.sort((a, b) => {
    return (a.bookID === b.bookID ? 0: ((b.bookID > a.bookID) ? 1 : -1));

})
console.log(objBooks);
//arranging the books in the order of book id

objBooks.sort((a, b) => {
    return a.title === b.title ? 0 : a.title > b.title ? 1 : -1;

})
console.log(objBooks);
//removing duplicate values 
function removeDuplicate(data) {
    return data.filter((value, index) => data.inndexOf(value) === index);
}
console.log(removeDuplicate(objBooks));

