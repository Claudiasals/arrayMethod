
/*Esercizio 1: Lista Utenti Base**

Crea una pagina semplice che mostri informazioni sugli utenti:
* Recupera tutti gli utenti da `https://jsonplaceholder.typicode.com/users`
* Usa `map()` per creare un elemento `<li>` per ogni utente mostrando: **nome ed email**
* Usa `filter()` per mostrare solo gli utenti con email che terminano in **.biz**
* Mostra i risultati filtrati in una lista non ordinata `<ul>`
* Aggiungi un paragrafo che mostri il numero totale di utenti filtrati
*/


// recupera i dati dal link
fetch('https://jsonplaceholder.typicode.com/users') // 1. Effettua la chiamata GET
    .then(risp => risp.json()) // 2. Converte la risposta in JSON
    .then(users => { //utilizziamo i dati json. Otteniamo un array di utenti
        console.log("Array di oggetti, ogni oggetto è un user", users);
        // otteniamo nome ed email
        const listNameEmail = users.map(user => `${user.name}, ${user.email}`);

        console.log("Array di stringhe con nome e email:", listNameEmail);

        //UTILIZZO UN CICLO FOR PER ITERARE TUTTI GLI ELEMENTI DI listaNameEmail E CREARE LA LISTA UL
        let listaHTML = "<ul>"; // CREO L'INIZIO DELLA LISTA

        for (let i = 0; i < listNameEmail.length; i++) {
            //inizializzo; scorro tutta la lunghezza dell'array; aggiungo 1 indice ad ogni ciclo
            listaHTML += "<li>" + listNameEmail[i] + "</li>"; // Aggiungi un elemento <li> per ogni stringa
        } //+= aggiunge questa nuova stringa a listaHTML

        listaHTML += "</ul>"; // Chiudi la lista

        console.log("ECCO LA LISTA DEGLI UTENTI CON NOME E EMAIL: ", listaHTML)

        document.body.innerHTML += listaHTML; //stampo a video

        //Uso `filter()` per mostrare solo gli utenti con email che terminano in .biz
        const bizUsers = users.filter(user => user.email.endsWith('.biz'));
        //endsWith() -->  è un metodo delle stringhe che verifica se la stringa termina con (endsWith) il parametro scritto.

        console.log("Filtro utenti con email che termina per .biz", bizUsers)


        //lista utenti filtrati biz

        let listaHTMLbiz = "<ul>";

        for (let i = 0; i < bizUsers.length; i++) {
            listaHTMLbiz += "<li>" + bizUsers[i].name + "</li>";
        }

        listaHTMLbiz += "</ul>";

        console.log("ECCO LA LISTA DEGLI UTENTI CON EMAIL CHE TERMINANO PER .BIZ: ", listaHTMLbiz)

        document.body.innerHTML += listaHTMLbiz;

        // conta elementi nell'array con gli utenti filtrati
        let numeroUtentiFiltrati = bizUsers.length;
        console.log(numeroUtentiFiltrati)

        // creo paragrafo con il numero degli utenti filtrati
        let paragrafo = "<p> Paragrafo con il numero totale di utenti filtrati: " + numeroUtentiFiltrati + "</p>";

        document.body.innerHTML += paragrafo;
    })

    .catch(error => {
        console.error('Errore nel recupero utenti:', error);

    });






/*Esercizio 2: Todo Counter

Crea una pagina che mostri statistiche sulle attività (todo)
1* Recupera le todo da `https://jsonplaceholder.typicode.com/todos`
2* Usa `filter()` per separare le todo completate da quelle non completate
3* Usa `reduce()` per contare il numero di todo per ogni utente
4* Mostra nel DOM:
  - Numero totale di todo
  - Numero di todo completate
  - Numero di todo non completate
  - L’utente con più todo (usando `reduce()`)
  - Mostra tutti i risultati come semplici paragrafi di testo
*/

//recupero i dati
fetch('https://jsonplaceholder.typicode.com/todos') // 1. Effettua la chiamata GET
    .then(risposta => risposta.json()) // 2. Converte la risposta in JSON
    .then(todos => { //utilizziamo i dati json. Otteniamo un array di utenti
        console.log("Array di oggetti di azioni todo:", todos);

        //filtra le azioni completate
        const completedActions = todos.filter(todo => todo.completed); //in automatico ci ridà i true
        console.log("Azioni completate:", completedActions)

        const incompleteActions = todos.filter(todo => !todo.completed);
        console.log("Azioni non completate", incompleteActions)


        //Usa `reduce()` per contare il numero di todo per ogni utente
        let numbersActionForUser = todos.reduce((acc, obj) => {
            if (!acc[obj.userId]) {
                acc[obj.userId] = 0
            }
            acc[obj.userId]++;
            return acc
        })

        // Mostra nel DOM L’utente con più todo (usando `reduce()`)
        //Object.entries() trasforma l’oggetto in un array di coppie [userId, count], perché reduce non funziona sugli oggetti
        /*Il "?" è l’operatore ternario di JavaScript. 😄
        Serve a fare un if veloce in una sola riga. La sintassi è:
        condizione ? valoreSeVero : valoreSeFalso
        condizione → qualcosa che può essere true o false
        valoreSeVero → quello che viene restituito se la condizione è vera
        valoreSeFalso → quello che viene restituito se la condizione è falsa*/
        let moreTodoUser = Object.entries(numbersActionForUser)//trasformo l'oggetto in un array 
            .reduce((accMax, [userId, item]) => {
                return item > accMax.item ? { userId, item } : accMax;
            }, { userId: null, item: 0 });

        console.log("Utente con più todo:", moreTodoUser);
    }, {});

console.log("Utenti con il numero di todo", numbersActionForUser)

// Numero totale di todo
const totalTodos = todos.length;
document.body.innerHTML += `<p>Numero totale di todo: ${totalTodos}</p>`;

// Numero di todo completate
document.body.innerHTML += `<p>Todo completate: ${completedActions.length}</p>`;

// Numero di todo non completate
document.body.innerHTML += `<p>Todo non completate: ${incompleteActions.length}</p>`;


     



    })

    .catch (error => {
    console.error('Errore nel recupero utenti:', error);

});







/*Esercizio 3: Ricerca nei Titoli dei Post**

Crea una lista di post ricercabile:
* Recupera tutti i post da `https://jsonplaceholder.typicode.com/posts`
* Crea un campo di input di testo per la ricerca
* Usa `filter()` e `includes()` per cercare all’interno dei titoli dei post
* Mostra i post corrispondenti come lista semplice che visualizza solo i titoli
* Usa `forEach()` per aggiungere i risultati al DOM
* Mostra sopra la lista il **numero dei post trovati**
*/










/*Esercizio 4: Commenti per Post**

Mostra i post con il numero dei loro commenti
* Recupera i post da `https://jsonplaceholder.typicode.com/posts` (limitati ai primi 10 con `slice()`)
* Recupera tutti i commenti da `https://jsonplaceholder.typicode.com/comments`
* Usa `filter()` per contare i commenti di ciascun post
* Usa `map()` per creare un `<li>` che mostri:
- Titolo del post
- Numero di commenti di quel post
- Mostra i risultati come lista ordinata `<ol>`
*/











/*Esercizio 5: Album e Contatore di Foto**

Crea una pagina riepilogativa per album e foto:
* Recupera gli album da `https://jsonplaceholder.typicode.com/albums`
* Recupera le foto da `https://jsonplaceholder.typicode.com/photos`
* Usa `Promise.all()` per recuperarli contemporaneamente
* Usa `reduce()` per raggruppare le foto per `albumId`
* Usa `map()` per mostrare ogni album con:

  - Titolo dell’album
  - Numero di foto in quell’album
  - Usa `find()` per individuare l’album con più foto
  - Mostra l’album con più foto in cima con la dicitura **“Album più Popolare”**
  - Mostra tutti gli album come lista semplice sotto
*/













//CONSEGNE IN INGLESE:
// Exercise 1: Basic User List
// Create a simple page that displays user information
// Requirements:
// - Fetch all users from https://jsonplaceholder.typicode.com/users
// - Use map() to create a list item for each user showing: name and email
// - Use filter() to show only users with .biz email domains
// - Display the filtered results in an unordered list <ul>
// - Add a paragraph showing the total count of filtered users


// Exercise 2: Todo Counter
// Build a todo statistics page
// Requirements:
// - Fetch todos from https://jsonplaceholder.typicode.com/todos
// - Use filter() to separate completed and incomplete todos
// - Use reduce() to count todos per user
// - Display in the DOM:
//   * Total number of todos
//   * Number of completed todos
//   * Number of incomplete todos
//   * User with most todos (use reduce() to find)
// - Show all results as simple text paragraphs


// Exercise 3: Post Titles Search
// Create a searchable list of posts
// Requirements:
// - Fetch all posts from https://jsonplaceholder.typicode.com/posts
// - Create a text input for searching
// - Use filter() and includes() to search post titles
// - Display matching posts as a simple list showing only titles
// - Use forEach() to append results to the DOM
// - Show count of matching posts above the list


// Exercise 4: Comments by Post
// Display posts with their comment counts
// Requirements:
// - Fetch posts from https://jsonplaceholder.typicode.com/posts (limit to first 10 using slice())
// - Fetch all comments from https://jsonplaceholder.typicode.com/comments
// - Use filter() to count comments for each post
// - Use map() to create list items showing:
//   * Post title
//   * Number of comments for that post
// - Display as a simple ordered list


// Exercise 5: Album and Photo Counter
// Create a summary page for albums and photos
// Requirements:
// - Fetch albums from https://jsonplaceholder.typicode.com/albums
// - Fetch photos from https://jsonplaceholder.typicode.com/photos
// - Use Promise.all() to fetch both simultaneously
// - Use reduce() to group photos by albumId
// - Use map() to display each album with:
//   * Album title
//   * Count of photos in that album
// - Use find() to identify the album with most photos
// - Display the album with most photos at the top as "Most Popular Album"
// - Show all albums as a simple list below