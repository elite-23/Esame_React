# React + Vite

Luca: Esame_React

Questo progetto è un'applicazione realizzata con React e un backend in Flask. Di seguito sono riportate le istruzioni per l'installazione, la configurazione e l'esecuzione del progetto, comprese le dipendenze per il frontend e il backend.

Prerequisiti

Per eseguire correttamente il progetto, è necessario avere installato i seguenti strumenti sul proprio computer:

- [Node.js](https://nodejs.org/) (versione 14.x o superiore)
- [npm](https://www.npmjs.com/) (di solito viene installato automaticamente con Node.js)
- [Python](https://www.python.org/) (versione 3.x o superiore)
- [pip](https://pip.pypa.io/en/stable/) (per gestire i pacchetti Python)

Installazione del frontend (React)

1. Clona il repository sulla tua macchina locale:

   bash
   git clone https://github.com/elite-23/Esame_React.git
   

2. Naviga nella cartella del progetto frontend:

   bash
   cd Esame_React/Esame
   

3. Installa le dipendenze frontend utilizzando npm:

   bash
   npm install
   
Questo comando installerà tutte le librerie necessarie per il funzionamento del frontend, come quelle relative a React.


Installazione del backend (Flask)

1. Naviga nella cartella del backend:

   Se non l'hai già fatto, spostati nella cartella del backend dove si trova il file server_with_mock.py.

   bash
   cd Esame_React/Esame
   

2. Crea un ambiente virtuale Python (facoltativo ma consigliato):

   Se non hai già un ambiente virtuale Python configurato, puoi crearne uno:

   bash
   python3 -m venv venv
   

   Poi attiva l'ambiente virtuale:

   - Su macOS/Linux:

     bash
     source venv/bin/activate
     

   - Su Windows:

     bash
     venv\Scripts\activate
     

3. Installa le dipendenze Python:

   Utilizza pip per installare le librerie necessarie (psycopg2, flask, flask-cors):

   bash
   pip install psycopg2 flask flask-cors
   

   - psycopg2: Per connettersi a un database PostgreSQL.
   - flask: Per il server backend.
   - flask-cors: Per gestire il Cross-Origin Resource Sharing (CORS), consentendo al frontend React di comunicare con il server Flask.

Esecuzione del backend (Flask)

1. Avvia il server Flask:

   Esegui il comando seguente per avviare il server backend:

   bash
   python server_with_mock.py
   

   Questo avvierà il server Flask, che sarà accessibile all'indirizzo:

   
   http://127.0.0.1:8050
   

   Assicurati che il server Flask stia funzionando correttamente prima di avviare il frontend, in modo che le comunicazioni tra il backend e il frontend possano avvenire senza problemi.

Esecuzione del frontend (React)

Avviare un secondo terminale così che il primo gestisca solamente il backend, per avviare il progetto esegui il seguente comando nella cartella del progetto:

bash
npm run dev


Questo avvierà il server, e si potra visualizzare la pagina facendo ctrl + click sinistro sul link che compare nel terminale .


Il progetto consiste di una pagina web dalla quale è possibile inviare query ad un database e visualizzare la risposta in una tabella.
In caso la conessione al database sia assente il backend utilizzerà il file mock_data.json così da simulare la chiamata al server,
ma  verà nascosta la possibilità di aggiungere clausole WHERE la quale viene automaticamente riaggiunta nel momento in cui il backend riesce a ricollegarsi 
al database.

Licenza

Questo progetto è sotto licenza [MIT](LICENSE).