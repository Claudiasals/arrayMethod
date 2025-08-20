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
/*
const blogPosts = [
    { title: "Post 1", tags: ["javascript", "web", "frontend"] },
    { title: "Post 2", tags: ["nodejs", "backend", "javascript"] },
    { title: "Post 3", tags: ["react", "frontend", "web"] },
    { title: "Post 4", tags: ["mongodb", "database", "backend"] },
  ]
  */