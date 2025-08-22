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







  




