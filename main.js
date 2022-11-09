/*let users = [
    {name: 'vasya', status: 0},
    {name: 'petya', status: 1},
    {name: 'kolya',  status: 2},
    {name: 'olya', status: 3},
    {name: 'max',  status: 4},
    {name: 'anya',  status: 5},
    {name: 'oleg',  status: 6},
    {name: 'andrey', status: 7},
    {name: 'masha',  status: 8},
    {name: 'olya',  status: 9},
    {name: 'max',  status: 10}
];*/
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

/*for (let user of users) {
    document.write(`<div>${user.name}  ${user.status}</div>`);
}*/
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

/*for (let i=0; i<users.length; i++) {
   // console.log(`<div>${users[i]}</div>`);
    document.write( `<div>${users[i].name} ${users[i].status}  </div>`);
}*/

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let users = [
    {name: 'vasya', status: 0},
    {name: 'petya', status: 1},
    {name: 'kolya',  status: 2},
    {name: 'olya', status: 3},
    {name: 'max',  status: 4},
    {name: 'anya',  status: 5},
    {name: 'oleg',  status: 6},
    {name: 'andrey', status: 7},
    {name: 'masha',  status: 8},
    {name: 'olya',  status: 9},
    {name: 'max',  status: 10},
    {name: 'vasya', status: 10},
    {name: 'petya', status: 11},
    {name: 'kolya',  status: 12},
    {name: 'olya', status: 13},
    {name: 'max',  status: 14},
    {name: 'anya',  status: 15},
    {name: 'oleg',  status: 16},
    {name: 'andrey', status: 17},
    {name: 'masha',  status: 18},
    {name: 'olya',  status: 19},
    {name: 'max',  status: 20},];
/*let i=0;
while (i<users.length){
    document.write(`<h1>${users[i].name} </h1>`);
    i++;
}


//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
/*let i=0;
while (i<users.length){
    document.write(`<h1>${users[i].name} ${users[i].status}</h1>`);
    i++;
}*/
