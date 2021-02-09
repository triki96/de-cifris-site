# DeCifris

Questo progetto racchiude il codice del sito web dell'associazione nazionale di crittografia **De Componendis Cifris**. Il codice è stato scritto utilizzando Angular, un framework front-end che gestisce l'interazione di HTML, CSS e Typescript.


# Linee Guida Generali
L'idea di base è che questo sito venga gestito in modo più o meno volontario da studenti/ex-studenti, o comunque persone non specialiste del settore. Da un lato la conoscenza di questo codice, nella sua interezza, può essere un lavoro laborioso, ma dall'altro la conoscenza necessaria e sufficiente per apportare qualche modifica risulta essere un compito ben più leggero. Nelle seguenti sotto-sezioni sono spiegate passo passo le procedure da seguire per svolgere le mansioni ordinarie di manutenzione.

Visto che il compito di gestire questo sito è un testimone che passa di mano in mano a diverse persone, è buona cosa che tutti risultiamo d'accordo sul modo di operare. Un codice pulito, snello e ben commentato (qualora il codice non fosse sufficientemente auto-esplicativo) sono sicuramente dei buoni punti da cui partire, e facilitano il compito anche a chi leggerà il codice dopo di noi.

# Linee Guida Specifiche
In questa macro-sezione sono esposte le procedure per le operazioni di routine più e meno comuni. Ogni volta che vogliamo apportare qualche modifica a lato server dovremo seguire il seguente iter: scaricare la repository di GitHub, apportare le modifiche in locale, aggiornare la repository di GitHub, aggiornare il server. Vediamo come eseguire ognuna di queste operazioni.

## 1. Scaricare il codice da GitHub
Scaricare il codice da GitHub è semplice: è sufficiente cliccare sul dropdown *code* e avviare il download del file zip associato al progetto. In alternativa è possibile scaricare il progetto direttamente da terminale con il comando
```
git clone https://github.com/<username>/<indirizzoRepo>
```
avendo cura di sostituire *\<username>* e *\<indirizzoRepo>* rispettivamente con il proprietario del progetto e l'effettivo indirizzo in cui si trova il progetto.  Ad oggi il progetto è reperibile all'indirizzo https://github.com/triki96/de-cifris-site, ma non garantisco che in futuro sia ancora così.

## 2. Modifiche al codice
Modificare il codice è lo step meno immediato dei 4, ma rimane comunque una procedura tranquilla. Poiché spesso le modifiche da fare riguardano essenzialmente l'aggiunta di nuovi pdf o l'aggiornamento di qualche pagina HTML/CSS (e non operazioni più complesse, ad esempio, l'aggiunta di nuovi componenti oppure nuove funzionalità, ...) di seguito sono presenti due sotto-guide. La prima, più veloce, si rivolge a chi vuole apportare modifiche unicamente ai file HTML/CSS; la seconda, più completa (ma spesso non necessaria), si rivolge a chi ha bisogno di interfacciarsi con l'intero ambiente di sviluppo (i.e. Angular), per apportare modifiche anche più profonde.

### Modifiche rapide
Una volta scaricata la repository come da punto 1, possiamo modificare il codice. Distinguiamo i casi in cui l'operazione da fare sia il caricamento di un nuovo documento (ad esempio un pdf), oppure l'aggiornamento di una pagina HTML/CSS.

- **Caricare un file:** i documenti sono tutti aggiunti nella cartella src/assets. In questa cartella troviamo le immagini del logo, più alcune sotto-cartelle, che hanno il compito di tenere ordine dei vari file caricati. Per caricare un file possiamo quindi spostarci in una di queste cartelle (o crearne un'altra se ce ne fosse bisogno) e spostare qua il file desiderato. Per fare un esempio: supponiamo di voler caricare il file locandina.pdf dell' evento "Post Quantum Key Exchange" tenutosi nel 2020; in questo caso ci sposteremo in src/assets/eventi/2020, dove creeremo la cartella "PostQuantumKeyExchange", all'interno della quale incolleremo il file.
- **Modificare una pagina specifica:** il progetto si compone di molti file html (e css), ad esempio il codice presente nella pagina principale è scritto nel file home.component.html (e il css associato è presente nel file home.component.css), e cosi via. Scrivere codice HTML in più file (se fatto bene) ci garantisce un rapido accesso ai sorgenti. Premesso questo, tutti i file HTML/CSS sono presenti nel path src/app/, e relative sottocartelle. È importante a questo punto sapere che Angular (il framework che stiamo usando) lavora con i cosiddetti **components**; un component è una terna composta da un file HTML, un file CSS e un file TS. Grazie ad Angular (che si preoccupa di gestire l'interazione di questi tre file) possiamo scrivere del codice in HTML, gestirne la grafica nel rispettivo file CSS, e gestire gli eventi e più in generale la logica nel file TS. Quindi, ad esempio, se volessimo modificare una porzione di codice nella homepage, ci posizioneremo nella cartella src/app/home, all'interno della quale troveremo i file *home.component.html, home.component.css e home.component.ts* (più un file extra di test, di cui non ci interessiamo); a questo punto apriamo *home.component.html*, modifichiamo, salviamo e chiudiamo.

### Modifiche consistenti
Per fare modifiche consistenti è consigliabile lavorare con un IDE con cui si abbia confidenza (personalmente VSCode rimane una buona opzione).  Il primo punto che risolviamo è quello di simulare il sito in locale; lo faremo all'indirizzo http://localhost:4200. Per prima cosa apriamo il progetto dal nostro editor di testo Avremo bisogno di un'[interfaccia a linea di comando](https://cli.angular.io/) apposita per Angular, installabile con
```
npm install -g @angular/cli
```
A questo punto siamo in grado di far girare il sito, con il comando
```
ng serve --port 4200
```
Di solito il comando è ridotto a *ng serve*, in quanto la porta 4200 è impostata in automatico da Angular. Probabilmente eseguendo questo comando per la prima volta la shell interromperà l'esecuzione con degli errori, chiedendo l'installazione di qualche modulo (ad es. @angular-devkit/build-angular). Per ovviare a questo problema è sufficiente installare il modulo in questione, ad esempio con
```
npm install --save-dev @angular-devkit/build-angular
```
A questo punto il comando *ng serve* funziona senza nessun problema, e possiamo vedere la nostra versione locale del sito all'indirizzo sopracitato.
Per fare una modifica accedere al rispettivo file in cui si desidera modificare qualcosa, dopodiché sarà sufficiente salvare le modifiche fatte, e Angular si preoccuperà di aggiornare il sito in locale. In questo modo è possibile riscontrare se le modifiche apportate hanno raggiunto il risultato desiderato. Nel primo caso abbiamo finito nel secondo caso torniamo sul codice e continuiamo a modificare.

## 3. Aggiornare la repository GitHub
Una volta fatte le modifiche, è fondamentale rendere queste modifiche disponibili per tutte le altre persone che potrebbero dover mettere mano al codice più avanti. Per garantire che ciò sia possibile, aggiorniamo la repositort GitHub posizionandoci nella cartella del progetto ed eseguendo da terminale i seguenti comandi standard.
```
git add *
git commit -m "<mettere un commento appropriato per il commit>"
git push
```
Per controllare che la versione locale coincida con quella remota è sufficiente leggere l'output del comando
```
git status
```
Il risultato dovrebbe essere qualcosa come:
```
Sul branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```
Questo conclude l'aggiornamento della repository GitHub.

## 4. Deploy sul server
Per fare il deploy sul server bisogna dapprima fare la build del progetto in locale. 
Per fare la build di un progetto Angular utilizziamo un'[interfaccia a linea di comando](https://cli.angular.io/) apposita per Angular, installabile con
```
npm install -g @angular/cli
```
Questa interfaccia ci dà accesso al comando *ng*, che risolve i nostri dubbi sulla build, vediamo come.
Ci sono due modi per fare una build. Il primo è tramite il comando *ng serve*, che però non fa a caso nostro, in quanto questo comando non genera i file che dovremo poi andare a mettere sul server. Il comando che invece useremo è
```
ng build --prod
```
In prima battuta probabilmente l'esecuzione di questo comando verrà interrotta con qualche errore. Con ogni probabilità verrete avvertiti della mancanza di qualche modulo (ad es. @angular-devkit/build-angular). Per ovviare a questo problema è sufficiente installare il modulo in questione, ad esempio con
```
npm install --save-dev @angular-devkit/build-angular
```
Una volta installati tutti i moduli richiesti e fatta la build, verrà automaticamente creata una nuova cartella, chiamata *dist*, all'interno del vostro progetto. All'interno di questa cartella ne trovate un'altra con il nome del progetto. All'interno di questa trovate una dozzina di file. Tutti questi file vanno spostati sul server affinché le modifiche diventino effettive.
