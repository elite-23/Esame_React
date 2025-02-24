# React + Vite

[00:40, 24/02/2025] Luca: Esame_React

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
   
[00:40, 24/02/2025] Luca: Questo comando installerà tutte le librerie necessarie per il funzionamento del frontend, come quelle relative a React.

Esecuzione del frontend (React)

Per avviare il progetto in modalità di sviluppo, esegui il seguente comando:

bash
npm start


Questo avvierà il server di sviluppo, e potrai accedere all'applicazione nel tuo browser all'indirizzo:


http://localhost:3000


Installazione del backend (Flask)

1. Naviga nella cartella del backend:

   Se non l'hai già fatto, spostati nella cartella del backend dove si trova il file server_with_mock.py.

   bash
   cd Esame_React/Esame/backend
   

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
[00:40, 24/02/2025] Luca: - flask-cors: Per gestire il Cross-Origin Resource Sharing (CORS), consentendo al frontend React di comunicare con il server Flask.

Esecuzione del backend (Flask)

1. Avvia il server Flask:

   Esegui il comando seguente per avviare il server backend:

   bash
   python server_with_mock.py
   

   Questo avvierà il server Flask, che sarà accessibile all'indirizzo:

   
   http://127.0.0.1:5000
   

   Assicurati che il server Flask stia funzionando correttamente prima di avviare il frontend, in modo che le comunicazioni tra il backend e il frontend possano avvenire senza problemi.

Costruzione del progetto per la produzione

Per creare una versione ottimizzata per la produzione del progetto React, puoi eseguire il comando:

bash
npm run build


Questo creerà una cartella build contenente una versione minimizzata del progetto, pronta per essere distribuita.

Test

Per eseguire i test del progetto React, usa il comando:
 
bash
npm test


Per eseguire i test del backend (se presenti), puoi aggiungere i tuoi test a Flask e usarli come segue:

bash
python -m unittest test_file.py


Librerie utilizzate

Frontend (React):

- React: La libreria principale per costruire l'interfaccia utente.
[00:40, 24/02/2025] Luca: - React Router (se presente): Per la gestione della navigazione tra le pagine.
- Axios (se presente): Per effettuare richieste HTTP al backend.

Backend (Flask):

- Flask: Il framework Python per costruire il server backend.
- Flask-CORS: Per abilitare il CORS e consentire la comunicazione tra il frontend e il backend.
- psycopg2: Per connettersi e interagire con un database PostgreSQL.

Contribuire

Se desideri contribuire al progetto, puoi fare un fork della repository e inviare una pull request con le tue modifiche.

Licenza

Questo progetto è sotto licenza [MIT](LICENSE).

---

Spero che queste modifiche siano utili! Se hai bisogno di altre modifiche o chiarimenti, fammi sapere!