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

  




