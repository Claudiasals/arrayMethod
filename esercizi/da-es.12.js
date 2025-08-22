// ESERCIZIO 12: Appiattisci la struttura di array annidati e filtra i numeri minori di 5

const nestedNumbers = [
    [1, 2, [3, 4]],
    [5, [6, [7, 8]]],
    [9, 10],
    [[11, 12], 13],
]

const flatNumbers = nestedNumbers
    .flat(3)
    .filter(number => number > 5);

console.log(flatNumbers);



// ESERCIZIO 13: Ordina i libri prima per anno (crescente), poi per titolo (in ordine alfabetico)

const library = [
    { title: "The Great Gatsby", author: "Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Lee", year: 1960 },
    { title: "1984", author: "Orwell", year: 1949 },
    { title: "Animal Farm", author: "Orwell", year: 1945 },
    { title: "Brave New World", author: "Huxley", year: 1932 },
    { title: "Fahrenheit 451", author: "Bradbury", year: 1953 },
]

const forYears = library.sort((a, b) => a.year - b.year);
console.log(forYears);

const forTitle = library.sort((a, b) => a.title - b.title);
console.log(forTitle);



//ESERCIZIO 8: //Raggruppa le transazioni per categoria e calcola 
//il totale speso per ciascuna transazione


const transactions = [
    { id: 1, category: "Food", amount: 25 },
    { id: 2, category: "Transport", amount: 15 },
    { id: 3, category: "Food", amount: 30 },
    { id: 4, category: "Entertainment", amount: 50 },
    { id: 5, category: "Transport", amount: 20 },
    { id: 6, category: "Food", amount: 15 },
]


const categories = transactions.reduce((acc, item) => {
    // la categoria non esiste ancora nell'accumulatore, la inizializziamo a 0
    if (!acc[item.category]) {
        //le quadre servono per accedere a una proprietà di un oggetto usando una stringa dinamica, 
        //mentre quando usiamo il punto è perché conosciamo già il nome della proprietà.
        acc[item.category] = 0;
    }
    //aggiungi l'importo
    acc[item.category] += item.amount;
    return acc; // return fondamentale! xke se non ritorni l’accumulatore, 
    //alla prossima iterazione accumulatore sarà undefined.
}, {});

console.log(categories);



// ESERCIZIO 14: Filtra i prodotti che appartengono ad almeno una delle categorie selezionate

const inventory = [
    { name: "Shirt", category: "Clothing", price: 30 },
    { name: "Laptop", category: "Electronics", price: 1000 },
    { name: "Shoes", category: "Footwear", price: 80 },
    { name: "Phone", category: "Electronics", price: 600 },
    { name: "Jeans", category: "Clothing", price: 50 },
    { name: "Watch", category: "Accessories", price: 200 },
]

const selectedCategories = ["Electronics", "Clothing"]

console.log(selectedCategories);

const selectedProducts = selectedCategories.filter(item => selectedCategories.includes(item.category));
// creo una variabile, applico filter e gli dico: prendi ogni oggetto, guarda selectedCateories 
//e applica il metodo includes che ci permette di includere nle nuovo oggetto qualcosa di specifico, 
//e gli diciamo tra parentesi di includere tutti gli oggetti con le categorie appartenenti a selectedCategory
console.log(selectedProducts);



// ESERCIZIO 15: Converti un array di coppie chiave-valore in un oggetto

const keyValuePairs = [
    ["name", "John"],
    ["age", 30],
    ["city", "New York"],
    ["profession", "Developer"],
    ["hobby", "Photography"],
]

const obj = Object.fromEntries(keyValuePairs);
console.log(obj)



// ESERCIZIO 16: Aggiungi una proprietà 'hasDiscount' a ciascun prodotto
// Impostala su true se uno dei tag include 'sale' o 'promo'

const catalog = [
    { id: 1, name: "Tablet", tags: ["electronics", "sale"] },
    { id: 2, name: "Chair", tags: ["furniture", "office"] },
    { id: 3, name: "Desk", tags: ["furniture", "promo", "office"] },
    { id: 4, name: "Lamp", tags: ["lighting", "home"] },
]

catalog.forEach(item => {
    item.hasDiscount = item.tags.includes("sale") || item.tags.includes("promo")
});
// includes serve a verificare se un valore specifico è presente 
// in un array e restituisce un valore booleano
console.log(catalog)


// esercizio 17: Estrai le email degli utenti attivi con più di 25 anni che si sono iscritti dopo il 2020
// Restituiscile in minuscolo

const accounts = [
    { email: "John@EXAMPLE.com", age: 28, active: true, joinYear: 2021 },
    { email: "MARY@example.COM", age: 24, active: true, joinYear: 2022 },
    { email: "Bob@EXAMPLE.com", age: 30, active: false, joinYear: 2021 },
    { email: "alice@Example.COM", age: 26, active: true, joinYear: 2019 },
    { email: "TOM@example.com", age: 27, active: true, joinYear: 2023 },
]

const activeUser = accounts.filter(item => item.active === true && item.age > 25 && item.joinYear > 2020);
console.log(activeUser)

const emailUpperCase = activeUser.map(item => item.email.toLowerCase());
console.log(emailUpperCase)



// ESERCIZIO 18: Trova il primo mese in cui tutte le settimane hanno avuto vendite sopra i 1000
// Restituisci l’indice del mese e verifica se anche i mesi successivi rispettano questa condizione

const monthlySales = [
    { month: "Jan", weeks: [800, 1200, 900, 1100] },
    { month: "Feb", weeks: [1100, 1200, 1500, 1300] },
    { month: "Mar", weeks: [1200, 1100, 1400, 1300] },
    { month: "Apr", weeks: [900, 1000, 1100, 800] },
    { month: "May", weeks: [1100, 1200, 1300, 1400] },
]

const topMonth = monthlySales.find(item => item.weeks.every(week => week > 1000));
console.log(topMonth)

const indexTopMonth = monthlySales.findIndex(item => item === topMonth);
console.log(indexTopMonth);

const nextMonths = monthlySales.slice(indexTopMonth + 1);

const verifiedEveryMonth = nextMonths.map(item => item.weeks.every(week => week > 1000));
console.log("Nei mesi successivi viene rispettata questa condizione:", verifiedEveryMonth)

// map cicla su ogni mese e restituisce un array con il booleano per ogni mese

/*
const nextMonths = monthlySales.slice(indexTopMonth + 1); 

const verifiedEveryMonth = nextMonths.every(item => item.weeks.every (week => week > 1000));
console.log("Nei mesi successivi viene rispettata questa condizione:", verifiedEveryMonth)
*/
// slice(indexTopMonth + 1) = parti dai mesi dopo il topMonth





// ESERCIZIO 19: Calcola il prezzo totale per ciascun ordine
// Applica sconti in base alla quantità: 5-9 articoli = 5%, 10+ articoli = 10%
// Restituisci un array di oggetti con orderId e finalPrice

const orders = [
    {
        orderId: "A001",
        items: [
            { product: "Widget", price: 10, quantity: 3 },
            { product: "Gadget", price: 20, quantity: 2 },
        ],
    },
    {
        orderId: "A002",
        items: [
            { product: "Widget", price: 10, quantity: 5 },
            { product: "Tool", price: 15, quantity: 6 },
        ],
    },
    {
        orderId: "A003",
        items: [
            { product: "Gadget", price: 20, quantity: 8 },
            { product: "Tool", price: 15, quantity: 4 },
        ],
    },
]

// order è il singolo obj ordine nell'array orders
// item è il singolo oggetto prodotto nell'array items


const totalPriceOrder = orders.map(order => {
    return order.items.reduce((sum, item) => {
        return sum + item.price * item.quantity}, 0);
});
  
  console.log("il prezzo totale per ciascun ordine è", totalPriceOrder)
 
/* "reduce" reitera ma restituisce un soltanto un unico valore. 
Per avere più valori, come qui che ci servono tutti i prezzi totale degli ordini 
serve "map" che ci può creare un array con tutti i valori. mentre reduce somma e 
moltiplica price a quantity per avere  il prezzo totale per ogni ordine. 
Quindi annidando reduce dentro map è come se salvassimo ogni dato reiterato nella variabile 
di map per inserirli nell'array */