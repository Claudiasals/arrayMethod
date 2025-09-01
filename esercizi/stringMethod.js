// metodo includes 

let saluta = "Ciao a tutti";
let contiene = saluta.includes("tut");

console.log(contiene); 

// metodo endsWith 

let ends = saluta.endsWith("cii");

console.log(ends)

// metodo startsWith

let start = saluta.startsWith("Cia")

console.log(start)

// meotodo slice

let nome = saluta.slice(7, 12)
console.log(nome)

// metodo split

let pezzettini = saluta.split("");
console.log(pezzettini)


/*1. Cos’è un metodo delle stringhe

Un metodo è una funzione che possiamo usare su un oggetto, in questo caso su una stringa, per fare qualcosa di utile con quella stringa, per esempio analizzarla o estrarne informazioni
Esempi di cose che possiamo fare con i metodi delle stringhe:
 • Trasformare tutte le lettere in maiuscolo o minuscolo (toUpperCase(), toLowerCase())
 • Controllare se contiene una parola (includes())
 • Controllare se la stringa termina con delle determinate lettere
 • Ecc. 
💡 Ricorda: una stringa è un oggetto immutabile, quindi i metodi non cambiano la stringa originale, ma restituiscono una nuova stringa modificata.


2. Come si scrivono i metodi delle stringhe

La sintassi generale è:

stringa.metodo(argomento1, argomento2, ...)

 • stringa → la variabile o la stringa su cui vogliamo agire
 • metodo → il nome del metodo (come toUpperCase)
 • (argomento1, argomento2, ...) → alcune funzioni richiedono argomenti, altre no

*/

// 1. metodo toUpperCase() 

let testo = "ciao Claudia";
let maiuscolo = testo.toUpperCase();

console.log(maiuscolo);

//esempio 2 toUpperCase()

let persona = {
    nome: "Claudia",
    città: "Milano",
    hobby: "scrivere"
  };
  
  // Applichiamo il metodo toUpperCase() a ciascuna proprietà
  console.log(persona.nome.toUpperCase()); // "CLAUDIA"
  console.log(persona.città.toUpperCase()); // "MILANO"
  console.log(persona.hobby.toUpperCase()); // "SCRIVERE"

// 2. metodo includes()

let testo = "Ciao Claudia";
let contiene = testo.includes("Claudia");

console.log(contiene); // Output: true


// 3. metodo endsWith()

let parola = "javascript";

// Controlliamo se la parola finisce con "script"
let finisceConScript = parola.endsWith("script");

console.log(finisceConScript); // Output: true

// Controlliamo se finisce con "java"
console.log(parola.endsWith("java")); // Output: false

/* endsWith() prende un argomento, cioè la sottostringa da controllare.
Restituisce true se la stringa termina con quella sottostringa, 
altrimenti false. */

// 4. metodo slice()

let testo = "Ciao Claudia";
console.log(testo.slice(5, 11)); // output: "Claudia"

// Con valori negativi, conta dalla fine della stringa
console.log(testo.slice(-7)); // Output: "Claudia"
console.log(testo.slice(-7, -1)); // Output: "Claudi"

// 5. combiniamo i due metodi

let testo = "Ciao Claudia";
let parolaDaCercare = "claudia";

// Trasformiamo entrambe in maiuscolo
let contiene = testo.toUpperCase().includes(parolaDaCercare.toUpperCase());

console.log(contiene); // Output: true