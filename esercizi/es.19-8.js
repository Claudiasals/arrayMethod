// ESERCIZIO 1: Dato un array di prodotti, filtra solo quelli disponibili in magazzino 
// e restituisci un array con i loro nomi in maiuscolo 
/* const products = [
    { id: 1, name: "Laptop", price: 999, inStock: true },
    { id: 2, name: "Mouse", price: 25, inStock: false },
    { id: 3, name: "Keyboard", price: 75, inStock: true },
    { id: 4, name: "Monitor", price: 350, inStock: false },
    { id: 5, name: "Headphones", price: 85, inStock: true },
];


const productsInStock = products.filter((product) => {
    return product.inStock;
});

console.log(productsInStock);
*/
//const productsNotInStock

/*const notavaibleDevice = products.filter(product => !product.inStock);
console.log(notavaibleDevice); //qui mi stampa nel console.log i prodotti non disponibili*/

//filter((item, index, array) => {}) -> Trovo più elementi nell’array
// const items = users.filter((item) => {
//     return item.age >= 18;
//     // return item.id !== 4; // Equivale a rimuovere l’elemento con id 4 dall’array
// });

// console.log(items);






// ESERCIZIO 2: Calcola il valore totale di tutti gli articoli nel carrello
// considerando la quantità e applicando uno sconto del 10% se il totale supera 100

/* 
const shoppingCart = [
    { item: "Book", price: 15, quantity: 2 },
    { item: "Pen", price: 2, quantity: 10 },
    { item: "Notebook", price: 8, quantity: 3 },
    { item: "Backpack", price: 45, quantity: 1 },
];

let totalCart = shoppingCart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
}, 0
);

if (totalCart > 100) {
        totalCart = totalCart - totalCart * 0.1;
    }

console.log("totale: €", totalCart);
*/





// ESERCIZIO 3: Trova il primo utente che è sia attivo che ha il ruolo di admin
// Poi controlla se c’è almeno un utente proveniente dall’Italia
/*
const users = [
    { id: 1, name: "John", active: true, role: "user", country: "USA" },
    { id: 2, name: "Maria", active: false, role: "admin", country: "Spain" },
    { id: 3, name: "Luigi", active: true, role: "admin", country: "Italy" },
    { id: 4, name: "Anna", active: true, role: "user", country: "Germany" },
  ]

const activeUser = users.find((user) => {
    return user.active && user.role == ("admin");
});

console.log(activeUser);

const italianStudents = users.some(user => user.country == "Italy");
console.log(italianStudents)
*/
/*
oppure lo verificiamo stampando un messaggio se risponde al requisito:
if (italianStudents) {
    console.log("C'è almeno un utente proveniente dall'Italia");
}

e verrà stampato in console "C'è almeno un utente proveniente dall'Italia"
*/

/*
Sintessi metodo some:
array.some((elementoCorrente, indice, array) => {
    // restituisce true o false in base alla condizione
  });
*/





// ESERCIZIO 4: Ordina gli studenti in base al voto (decrescente) 
// e restituisci i primi 3 studenti
/*
const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
    { name: "Diana", grade: 95 },
    { name: "Eve", grade: 88 },
    { name: "Frank", grade: 90 },
  ]
  
const decrescentStudents = students.sort((a, b) => {
    return b.grade - a.grade; // Decrescente
});
console.log(decrescentStudents);


const topStudents = students.slice(0, 3);

console.log(topStudents);
*/





// ESERCIZIO 5: Estrai tutti i tag da tutti i post in un unico array,
// rimuovendo i duplicati e ordinandoli in ordine alfabetico

const blogPosts = [
    { title: "Post 1", tags: ["javascript", "web", "frontend"] },
    { title: "Post 2", tags: ["nodejs", "backend", "javascript"] },
    { title: "Post 3", tags: ["react", "frontend", "web"] },
    { title: "Post 4", tags: ["mongodb", "database", "backend"] },
]


const newArray = blogPosts.flatMap(post => post.tags);
//ogni oggetto di blogPosts, che noi abbiamo chiamato "post", 
//si trasforma nel contenuto di "tags" e quindi avremo un nuovo array 
//con il contenuto di tags.
console.log(newArray);
//flatMap ci permette di trasformare come map e si unificare come flat.

const duplicatesRemove = [...new Set(newArray)];
/*per eliminare i duplicati utiliziamo "set" che non accetta 
duplicati e di conseguenza li elimina automaticamente. Perché
"Set" è un oggetto di JavaScript che può contenere solo valori unici.
[...Set] trasforma il Set di nuovo in un array.
Scrivendo new Set(newArray), creiamo un Set a partire dall’array newArray.*/
console.log(duplicatesRemove);

const alphabeticOrder = duplicatesRemove.sort();
console.log(alphabeticOrder);





//ESERCIZI 6: Controlla se tutte le temperature sono sotto lo zero (0°C)
// Poi filtra solo i giorni con temperatura negativa

const temperatures = [
    { day: "Monday", temp: -2 },
    { day: "Tuesday", temp: -5 },
    { day: "Wednesday", temp: 1 },
    { day: "Thursday", temp: -3 },
    { day: "Friday", temp: 0 },
]
/*
const underZero = temperatures.some(under => under.temp > 0);
console.log(underZero)
*/
//oppure con negazione NOT(!) 
/*
const underZero = temperatures.some(under => !(under.temp <= 0))

console.log(underZero)
*/

// oppure con il metodo EVERY che controlla tutti i parametri temp e non si ferma 
//al primo che rispetta la condizione come invece fa SOME
const allUnderZero = temperatures.every(under => under.temp < 0);
console.log(allUnderZero)

const negativeT = temperatures.filter(under => under.temp < 0);
console.log(negativeT)






//ESERCIZIO 7: Crea una stringa formattata di indirizzi email separati da punto e virgola
// Formato: "nome.cognome@azienda.com"

/*
const employees = [
    { firstName: "John", lastName: "Doe", department: "IT" },
    { firstName: "Jane", lastName: "Smith", department: "HR" },
    { firstName: "Bob", lastName: "Johnson", department: "Sales" },
    { firstName: "Alice", lastName: "Brown", department: "IT" },
]

const company = "techcorp"

const email = employees //utilizzare + metodi mandandoli a capo
    .map(user => `${user.firstName}.${user.lastName}@${company}.com`) //costruisco l'email
    .join("; ")
console.log(email)
*/

/* join trasforma l'array in una stringa formattata con tutti gli elementi attaccati. 
Il contenuto tra le parentesi di join funziona da "SEPARATORE" tra gli elementi; 
Serve per serve per inserire spazi,punteggiatura o qualsiasi testo tra gli elementi 
quando li unisci in un unica stringa. */





// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//ESERCIZIO 8: //Raggruppa le transazioni per categoria e calcola 
//il totale speso per ciascuna transazione

/*
utilizziamo reduce per raggruppare con l accumulatore?
ma come????? 
e poi ancora reduce per calcolare.

const transactions = [
  { id: 1, category: "Food", amount: 25 },
  { id: 2, category: "Transport", amount: 15 },
  { id: 3, category: "Food", amount: 30 },
  { id: 4, category: "Entertainment", amount: 50 },
  { id: 5, category: "Transport", amount: 20 },
  { id: 6, category: "Food", amount: 15 },
]

const categoriesGroups = transactions.reduce((acc, t) => {
 [] // creo un array vuoto perché la categoria che mi serve non esiste
}

*/



//ESERCIZIO 9: Calcola l’età media degli utenti che hanno l’email verificata

const userData = [
    { name: "Tom", age: 25, emailVerified: true },
    { name: "Lisa", age: 30, emailVerified: false },
    { name: "Mike", age: 22, emailVerified: true },
    { name: "Sarah", age: 28, emailVerified: true },
    { name: "James", age: 35, emailVerified: false },
]


const verifiedUsers = userData.filter(user => user.emailVerified);
// filtrimamo i verificati , in automatico ci darà i valori true
console.log(verifiedUsers)

const average = verifiedUsers.reduce((acc, userA) => acc + userA.age, 0) / verifiedUsers.length;
/* nella parentesi di reduce mettiamo i suoi parametri, ovvero: 
l'accumulatore che serve ad accumulare i valori, in questo caso a sommare le età, 
e il secondo è il valore da sommare quindi le età degli user. 
Poi => per dirgli cosa fare con quei valori */

console.log(average)



// ESERCIZIO 10: Trova l’indice del task con id 3 ed eliminalo dall’array
// Poi aggiungi un nuovo task nella stessa posizione

const tasks = [
    { id: 1, task: "Study JavaScript", completed: true },
    { id: 2, task: "Practice coding", completed: false },
    { id: 3, task: "Read documentation", completed: false },
    { id: 4, task: "Build project", completed: false },
]

const newTask = { id: 5, task: "Review code", completed: false };

/*
const find = tasks.findIndex((item) => {
    return item.id === 3;
})

console.log(find)
*/

tasks.splice(2, 1, newTask);
console.log(tasks);

/* nelle parentesi di splice troviamo al primo parametro il num 2 
che è la posizione di partenza, quindi il 3^ oggetto nell'array, 
il secondo parametro di splice è 1 ovvero quanti elementi deve eliminare, 
mentre dal terzo parametro ciò che deve essere aggiunto e quindi "newTask" */

/* SINTASSI DI SPLICE:
array.splice(start, deleteCount, item1, item2, ...);
Parametri:
start → la posizione (indice) da cui cominciare a modificare l’array.
deleteCount → quanti elementi eliminare dall’array a partire da start.
item1, item2, ... → (opzionale) gli elementi che vuoi aggiungere 
all’array a partire da start. */


//ESERCIZIO 11: Raddoppia i punteggi di tutti gli studenti che hanno superato l’esame (score >= 60)
// e restituisci solo quelli con punteggio finale sopra 100

const examScores = [
    { student: "Alex", score: 45 },
    { student: "Beth", score: 65 },
    { student: "Carl", score: 55 },
    { student: "Dana", score: 70 },
    { student: "Eric", score: 80 },
]

const double = examScores.map(scoreEx => {
    if (scoreEx.score > 60) {
        return scoreEx.score * 2;
    } else {
        return scoreEx > 100;
    }
});

console.log(double);

/*
const double = examScores
  .filter(n => n >= 60);
  .map(n => n.score * 2)
  

console.log(double);

 const overOneundred = double.filter(n => n >= 100);
 console.log(overOneundred)
*/



// ESERCIZIO 12: Appiattisci la struttura di array annidati e filtra i numeri minori di 5

const nestedNumbers = [
    [1, 2, [3, 4]],
    [5, [6, [7, 8]]],
    [9, 10],
    [[11, 12], 13],
  ]
  
const flatNumbers = nestedNumbers
.flat(3)
.filter (number => number>5);

console.log(flatNumbers);

