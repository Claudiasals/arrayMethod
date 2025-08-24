// ESERCIZIO 20: Elabora i log per trovare:
// 1. Tutti gli ID unici degli utenti che hanno avuto errori
// 2. Il tipo di azione più comune
// 3. Il tempo medio di risposta delle richieste con successo (status 200)
// 4. L’elenco delle azioni ordinate per data (dalla più recente alla più vecchia)
/* Errori:
500 (Internal Server Error)
401 (Unauthorized)
404 (Not Found) */ 

const logs = [
    {
      userId: 101,
      action: "login",
      status: 200,
      responseTime: 120,
      timestamp: "2024-01-10T10:00:00",
    },
    {
      userId: 102,
      action: "upload",
      status: 500,
      responseTime: 450,
      timestamp: "2024-01-10T10:05:00",
    },
    {
      userId: 101,
      action: "download",
      status: 200,
      responseTime: 200,
      timestamp: "2024-01-10T10:10:00",
    },
    {
      userId: 103,
      action: "login",
      status: 200,
      responseTime: 100,
      timestamp: "2024-01-10T10:15:00",
    },
    {
      userId: 102,
      action: "login",
      status: 401,
      responseTime: 80,
      timestamp: "2024-01-10T10:20:00",
    },
    {
      userId: 104,
      action: "upload",
      status: 200,
      responseTime: 300,
      timestamp: "2024-01-10T10:25:00",
    },
    {
      userId: 101,
      action: "logout",
      status: 200,
      responseTime: 50,
      timestamp: "2024-01-10T10:30:00",
    },
    {
      userId: 103,
      action: "download",
      status: 404,
      responseTime: 150,
      timestamp: "2024-01-10T10:35:00",
    },
  ]
  
  
// USERID CON ERRORI
const errorStatus = logs.filter (log => log.status !== 200);

console.log("User con errori:", errorStatus)

const userIdError = errorStatus.map (user => user.userId);

console.log("userId degli utenti che hanno avuto errori:", userIdError)

// VALORE DI ACTION PIÙ FREQUENTE

// PRIMO PASSO: Contare le occorrenze
const count = {};  //step 1
logs.forEach(log => {count[log.action] = (count[log.action] || 0) + 1;});  //step 2

// SECONDO PASSO: Trovare il valore con il massimo numero di occorrenze
let bestAction = null;
let maxCount = 0;
for (const action in count) {
  if (count[action] > maxCount) {
    maxCount = count[action];
    bestAction = action;
  }
}

console.log("Azione più frequente:", bestAction);

// TEMPO MEDIO RISPOSTE CON SUCCESSO

const successStatus = logs.filter (log => log.status === 200);

console.log("User richieste eseguite con successo:", successStatus)


const averageResponseTime = successStatus.reduce ((acc, time) => 
 acc + time.responseTime, 0) / successStatus.length;

console.log("Tempo medio di risposta delle richieste con successo:", averageResponseTime)

// AZIONI DALLA PIÙ DATATA ALLA PIÙ RECENTE

const orderAction = logs.sort((b, a) => new Date(b.timestamp) - new Date(a.timestamp));
console.log("Azioni ordinate per orario:", orderAction)

/* DESCRIZIONE DEL SECONDO PUNTO: INDIVIDUARE IL TIPO DI AZIONE PIÙ FREQUENTE:
-----PRIMO PASSO: CONTARE I VALORI DI ACTION:
- STEP 1: CREO UN OGGETTO VUOTO (COUNT). SERVE PER SALVARE QUANTE VOLTE TROVIAMO OGNI TIPO DI AZIONE; 
LE CHIAVI DELL'OGGETTO SARANNO I VALORI DI ACTION, QUINDI: LOGIN, UPLOAD, DOWNLOAD;
IL VALORE SARÀ IL NUMERO DI VOLTE CHE QUELLA CHIAVE APPARE COME VALORE IN ACTION.
- STEP 2: USIAMO FOREACH PER CICLARE TUTTI GLI OGGETTI DI LOGS. 
COUNT[UTENTE.ACTION] --> LEGGE QUANTE VOLTE SI PRESENTA QUELL'AZIONE. 
COUNT = È L'OGGETTO CHE ACCUMULA; UTENTE.ACTION = PRENDE IL VALORE DELL'AZIONE CORRENTE
(|| 0) --> DICIAMO A JS CHE SE L'AZIONE È NUOVA PARTI DA 0.
+1 --> AGGIUNGE 1 AL CONTO PER OGNI NUOVA AZIONE
-----SECONDO PASSO: TROVARE IL VALORE PIÙ FREQUENTE DI ACTION_
- INIZIALIZZIAMO LE VARIABILI PERCHÈ INIZIALMENTE NON AVREMO ANCORA LETTO NESSUNA AZIONE: 
let bestAction = null; --> dove salveremo l'azione più frequente alla fine del ciclo.
let maxCount = 0; --> qui salveremo il numero massimo di occorrenze trovato fino a quel momento.
- CICLO FOR...IN: 
for (const action in count) { ... } --> SCORRE TUTTE LE CHIAVI DELL'OGGETTO COUNT.
Count è la variabile che contiene l'oggetto che contiene tutte le azioni con il loro numero di frequenza.
- if (count[action] > maxCount) { ... } 
IF CONTENUTO NEL CICLO FOR METTE LA CONDIZIONE DEL NUMERO MAGGIORE DI RIPETIZIONI, 
QUINDI CERCA IL VALORE PIÙ ALTO DI RIPETIZIONI. COME?
count prende il numero di volte che l'azione è stata letta. 
> maxCount controlla se questa azione è la più frequente 
tra quelle lette fino ad ora. 
RIPRENDIAMO LE DUE VARIABILI CREATE INIZIALMENTE:
maxCount = count[action];
bestAction = action; 
Se la condizione è vera Aggiorniamo maxCount con il nuovo numero massimo 
e bestAction con l’azione corrispondente.
- STAMPANDO BESTACTION AVREMO QUINDI L'AZIONE PIÙ FREQUENTE.
*/
