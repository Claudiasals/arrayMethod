// Esercizio: Dato un array di prodotti, filtra solo quelli disponibili in magazzino 
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



// Esercizio: Calcola il valore totale di tutti gli articoli nel carrello
// considerando la quantità e applicando uno sconto del 10% se il totale supera 100

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

