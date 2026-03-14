// Combined Test Data Generator
const testsData = {
  "parcial1": {
    "tests_assignatura": [
      {
        "title": "wuolah-free-examen-fso-temes-1-i-2-any-2022-amb-solucio (1)",
        "questions": [
          {
            "q": "Hi ha una única resposta totalment correcta. 1. És funció dels SO:",
            "options": [
              "Controlar l'execució de les aplicacions.",
              "Gestionar els recursos del sistema.",
              "Oferir i facilitar l'accés als recursos per part de les aplicacions.",
              "Totes les anteriors."
            ],
            "answer": 3,
            "explanation": "El SO controla l'execució, gestiona recursos i facilita l'accés. Totes les anteriors."
          },
          {
            "q": "Quins perfils d'usuaris hi ha en un Sistema de computació?",
            "options": [
              "Interactiu,Programador i Dissenyador.",
              "Interactiu i Programador.",
              "Modern, antic i renovat.",
              "Lineal, seqüencial i recursiu."
            ],
            "answer": 0,
            "explanation": "Els tres perfils d'usuari en un sistema de computació: interactiu, programador i dissenyador."
          },
          {
            "q": "En ‘Bash’ com passem una variable local a variable global",
            "options": [
              "Hi ha prou en escriure-la en majúscules.",
              "Cal tornar a definir-la al fitxer ‘.bashrc’.",
              "Amb la comanda ‘global’.",
              "Amb la comanda ‘export’."
            ],
            "answer": 3,
            "explanation": "La comanda 'export' permet que una variable local sigui accessible com a variable d'entorn global."
          },
          {
            "q": "Quines feines fa el kernel per a les aplicacions d’usuari?",
            "options": [
              "Accedir a dispositius d'E/S mitjançant el driver.",
              "Accés total a qualsevol fitxer.",
              "Accedir a recursos que no pertanyen a l’usuari.",
              "Totes les anteriors."
            ],
            "answer": 0,
            "explanation": "El kernel gestiona l'accés a dispositius E/S a través dels drivers."
          },
          {
            "q": "Per que és important que els SO evolucionin:",
            "options": [
              "Per permetre que els programes facin més càlculs.",
              "Per permetre als usuaris treballar més hores.",
              "Per permetre accés a nous dispositius d'E/S.",
              "Per garantir que un programa no tingui errors."
            ],
            "answer": 2,
            "explanation": "Els SO evolucionen principalment per suportar nou hardware i nous dispositius d'E/S."
          },
          {
            "q": "Que diferencia un SO multiprogramat d'un de temps compartit?",
            "options": [
              "La capacitat de carregar programes a memòria.",
              "La capacitat d'escollir el moment de fer fora de CPU a un procés.",
              "La capacitat d'executar-se en un sistema multiprocessador.",
              "res, és el mateix"
            ],
            "answer": 1,
            "explanation": "El temps compartit pot preemptar un procés (treure'l de CPU). El multiprogramat espera que el procés faci E/S."
          },
          {
            "q": "Quin sistema dóna millor productivitat?",
            "options": [
              "Monoprogramat.",
              "Multiprogramat.",
              "Temps compatit.",
              "Tots per igual."
            ],
            "answer": 1,
            "explanation": "El multiprogramat maximitza la utilització de CPU, donant millor productivitat global."
          },
          {
            "q": "El processament per lots (batch) original",
            "options": [
              "Permet crear una cua de programes que s'executaran un darrera de l'altre.",
              "No es fa servir en els Sistemes d'avui en dia.",
              "Permet accedir als usuaris de manera interactiva.",
              "És un tipus de reproductor de música."
            ],
            "answer": 0,
            "explanation": "El processament per lots executa programes en cua, un rere l'altre, sense interactivitat."
          },
          {
            "q": "La multiprogramació està pensada per?",
            "options": [
              "Incrementar el nombre d'usuaris connectats al sistema.",
              "Incrementar l'accés a les diferents CPU del sistema.",
              "Incrementar la utilització de la CPU.",
              "Incrementar el temps de resposta."
            ],
            "answer": 2,
            "explanation": "La multiprogramació manté la CPU ocupada mentre processos esperen E/S, maximitzant la utilització."
          },
          {
            "q": "Quina implementació es més eficient per a una cua de processos Blocked?",
            "options": [
              "Una cua LIFO",
              "Una cua FIFO",
              "Una cua de prioritats.",
              "Múltiples cues."
            ],
            "answer": 2,
            "explanation": "Una cua de prioritats és la implementació més eficient, els processos de major prioritat es desbloquegen primer."
          },
          {
            "q": "Quina tasca té assignada el planificador de mig termini?",
            "options": [
              "Decidir quan s'ha de començar a executar un procés.",
              "Decidir quan s'ha de treure un tros de la memòria assignada a un procés.",
              "Decidir l'ordre d'acabament dels processos.",
              "Decidir retirar completament de memòria principal a un procés."
            ],
            "answer": 1,
            "explanation": "El planificador de mig termini (swapper) decideix quan treure processos parcialment de memòria a disc (swapping)."
          },
          {
            "q": "Quins són els tres estats principals d'un procés?",
            "options": [
              "Ready, Run i Blocked.",
              "New, Run i Terminated.",
              "New, Run i Blocked.",
              "Run, Blocked i Terminated."
            ],
            "answer": 0,
            "explanation": "Els tres estats principals: Ready (preparat), Run (executant-se) i Blocked (bloquejat per E/S)."
          },
          {
            "q": "Quina evolució és possible per a un procés en un Sistema Operatiu de temps  compartit?",
            "options": [
              "Run -> Ready -> Blocked -> Run.",
              "Run -> Blocked -> Ready -> New.",
              "New -> Run -> Blocked -> Run.",
              "New -> Ready -> Run -> Ready."
            ],
            "answer": 0,
            "explanation": "En un SO temps compartit: Run→Ready (preemptat), Ready→Run (scheduling), Run→Blocked (E/S), Blocked→Ready (E/S completa)."
          },
          {
            "q": "Què sortirà per pantalla si executem en un intèrpret de python les seguents  comandes:  x=3; y=5; z=x+y; print (z)",
            "options": [
              "x+y",
              "35",
              "3+5",
              "8"
            ],
            "answer": 3,
            "explanation": "En Python, z=x+y fa la suma aritmètica. x=3, y=5 → z=8."
          },
          {
            "q": "Quin tipus de SO és Solaris?",
            "options": [
              "Monoprogramat, monousuari.",
              "Multiprogramat temps compartit i multithread.",
              "Multiusuari, monoprogramat per cada usuari.",
              "Mutiprogramant, monothread per cada procés."
            ],
            "answer": 1,
            "explanation": "Solaris és un SO multiprogramat de temps compartit amb suport multithread."
          },
          {
            "q": "El codi que s'executa en una interrupció:",
            "options": [
              "Pertany al codi del programa.",
              "Pertany al codi del kernel.",
              "S'executa en mode usuari del sistema operatiu.",
              "S'executa en mode kernel del procés d'usuari."
            ],
            "answer": 1,
            "explanation": "El gestor d'interrupcions (ISR) pertany al codi del kernel, s'executa en mode privilegiat."
          },
          {
            "q": "L'objectiu principal que vol assolir una aplicació que esta programada amb  threads?",
            "options": [
              "És millorar el temps de retorn de l'aplicació.",
              "És millorar la productivitat del sistema.",
              "És millorar l'utilització de la CPU del sistema.",
              "És millorar el temps de resposta de l'aplicació. Donat el següent esquema d'execució de tres processos:"
            ],
            "answer": 3,
            "explanation": "L'objectiu principal dels threads és millorar el temps de resposta de l'aplicació (concurrència)."
          },
          {
            "q": "Quin tipus de sistema operatiu és?",
            "options": [
              "Monoprogramat.",
              "Multiprogramat.",
              "Multiprogramat temps compartit.",
              "Cap de les anteriors."
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa.",
            "images": [
              "assets/img/exams/auto_ext_wuolah_free_examen_fso_temes_1_i_2_any_2022_amb_solucio__1__p5_b4.png"
            ]
          },
          {
            "q": "Quina prioritat tenen els processos?",
            "options": [
              "P1 > P2 > P3.",
              "P2 > P3 >P1.",
              "P1 > P3 > P2.",
              "No tenen prioritats."
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa.",
            "images": [
              "assets/img/exams/auto_ext_wuolah_free_examen_fso_temes_1_i_2_any_2022_amb_solucio__1__p5_b4.png"
            ]
          },
          {
            "q": "Quina és la mitja del temps d’espera?",
            "options": [
              "16",
              "24",
              "21,33",
              "32"
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa.",
            "images": [
              "assets/img/exams/auto_ext_wuolah_free_examen_fso_temes_1_i_2_any_2022_amb_solucio__1__p5_b4.png"
            ]
          },
          {
            "q": "Quina és la mitja del temps de retorn?",
            "options": [
              "14,66",
              "30,66",
              "32,66",
              "36 Donada la següent execució de dos processos de temps real:"
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa."
          },
          {
            "q": "Quin son els períodes dels processos P1 i P2, respectivament:",
            "options": [
              "50,50",
              "50,100",
              "100,100",
              "100,150"
            ],
            "answer": 1,
            "explanation": "Del diagrama: P1 té un periode de 50 unitats i P2 de 100 unitats."
          },
          {
            "q": "En un planificador Rate-Monotonic, quina relació de prioritats tenen P1 i P2?",
            "options": [
              "La mateixa.",
              "P1 < P2.",
              "P1 > P2.",
              "No té sentit en un planificador Rate-Monotonic."
            ],
            "answer": 2,
            "explanation": "En Rate-Monotonic, el procés amb el periode més curt té més prioritat. P1 (T=50) > P2 (T=100)."
          },
          {
            "q": "En un planificador Earliest-Deadline-First (EDF), quina relació de prioritats  tindrien P1 i P2?",
            "options": [
              "És dinàmica i es modifica a mesura que s’apropen al seu deadline.",
              "La mateixa.",
              "P1 < P2.",
              "P1 > P2."
            ],
            "answer": 0,
            "explanation": "EDF assigna prioritats dinàmicament: el procés amb el deadline més proper té la màxima prioritat en cada moment."
          }
        ]
      },
      {
        "title": "wuolah-free-Test-Primer-Parcial-2025 (1)",
        "questions": [
          {
            "q": "pdf Anónimo Fundamentos de Sistemas Operativos 2º Grado en Ingeniería Informática Escuela Técnica Superior de Ingeniería Universidad Rovira i Virgili Accede al documento original Reservados todos los derechos. No se permite la explotación económica ni la transformación de esta obra. Queda permitida la impresión en su totalidad. .          Fonaments Sistemes Operatius. 17 de març de 2025 Primera part: TEST .  Duració : 30 minuts. No es permet consultar cap mena de documentació. Si cada pregunta val 1, per cada resposta incorrecta es descompta 0,33. Hi ha una única resposta totalment correcta. 1.És funció dels SO:",
            "options": [
              "Controlar l'execució de les aplicacions.",
              "Gestionar els recursos del sistema.",
              "Oferir i facilitar l'accés als recursos per part de les aplicacions.",
              "Totes les anteriors."
            ],
            "answer": 3,
            "explanation": "El SO controla l'execució, gestiona recursos i facilita l'accés. Totes les anteriors."
          },
          {
            "q": "Si diem que un SO controla un programa....",
            "options": [
              "No el deixa pensar per si mateix.",
              "Crea un PCB amb tota la informació necessària per poder executar-lo.",
              "Gestiona i decideix la seva finalització.",
              "Decideix quanta memòria necessita."
            ],
            "answer": 1,
            "explanation": "El SO controla un programa creant un PCB (Process Control Block) amb tota la informació per executar-lo."
          },
          {
            "q": "Quina diferencia hi ha entre kernel i sistema operatiu?",
            "options": [
              "No hi ha cap diferencia, és el mateix.",
              "El kernel controla el hardware i el sistema operatiu el software.",
              "El kernel controla el software i el sistema operatiu el hardware.",
              "El sistema operatiu conté el kernel a mes de les aplicacions de sistema."
            ],
            "answer": 3,
            "explanation": "El Kernel és el nucli; el SO és el Kernel més tot l'ecosistema d'eines essencials."
          },
          {
            "q": "Si al fer una crida al sistema el programa fa un bucle d’espera sense bloquejar- se?",
            "options": [
              "Probablement és un SO monoprogramat.",
              "O és un SO multiprogramat.",
              "O és un SO multiprogramat de temps compartit.",
              "És una situació impossible."
            ],
            "answer": 0,
            "explanation": "El busy waiting (espera activa sense bloquejar) és típic d'un SO monoprogramat."
          },
          {
            "q": "Quina interrupció és necessària per a SO de temps compartit?",
            "options": [
              "Timer",
              "Teclat",
              "Pantalla",
              "Disc"
            ],
            "answer": 0,
            "explanation": "Un SO de temps compartit necessita la interrupció del Timer per fer preempció i repartir la CPU."
          },
          {
            "q": "Què és caching en la implementació d’un SO?",
            "options": [
              "La capacitat de carregar programes a memòria.",
              "La capacitat d'escollir el moment de fer fora de CPU a un procés.",
              "La capacitat d'executar-se en un sistema multiprocessador.",
              "La capacitat de copiar dades d’un dispositiu lent a un de més ràpid."
            ],
            "answer": 3,
            "explanation": "Caching = copiar dades d'un dispositiu lent (disc) a un de ràpid (RAM/cache) per millorar el rendiment."
          },
          {
            "q": "Quin sistema dóna millor productivitat?",
            "options": [
              "Monoprogramat.",
              "Multiprogramat.",
              "Temps compatit.",
              "Tots per igual."
            ],
            "answer": 1,
            "explanation": "El multiprogramat maximitza la utilització de CPU, donant millor productivitat global."
          },
          {
            "q": "Que permet fer la tècnica de DMA?",
            "options": [
              "Permet fer transferències entre disc i RAM sense usar la CPU.",
              "Permet crear una cua de programes que s'executaran directament.",
              "No es fa servir en els sistemes d'avui en dia.",
              "Permet accedir als usuaris de manera directa."
            ],
            "answer": 0,
            "explanation": "El DMA (Direct Memory Access) permet transferir dades entre dispositius i RAM sense ocupar la CPU."
          },
          {
            "q": "Què implica que un SO permeti l’execució de múltiples processos?",
            "options": [
              "Incrementar la utilització de la CPU.",
              "Poder executar aplicacions compartint dades.",
              "El estar executant diferents parts del procés de manera concurrent.",
              "Reduir el temps de resposta de cada procés."
            ],
            "answer": 0,
            "explanation": "Permetre múltiples processos (multiprogramació) incrementa la utilització de la CPU."
          },
          {
            "q": "Quin disseny d’estructura té el UNIX original",
            "options": [
              "Monolític",
              "Microkernel",
              "Per capes",
              "Modular"
            ],
            "answer": 0,
            "explanation": "El UNIX original té un disseny monolític: tot el nucli del SO s'executa en un únic espai de memòria."
          },
          {
            "q": "Quina tasca té assignada el planificador de mig termini?",
            "options": [
              "Decidir quan s'ha de començar a executar un procés.",
              "Decidir quan s'ha de treure un tros de la memòria assignada a un procés.",
              "Decidir l'ordre d'acabament dels processos.",
              "Decidir retirar completament de memòria principal a un procés."
            ],
            "answer": 1,
            "explanation": "El planificador de mig termini (swapper) decideix quan treure processos parcialment de memòria a disc (swapping)."
          },
          {
            "q": "Quina és la feina principal del ‘bootstrap loader’?",
            "options": [
              "Localitzar el kernel del SO.",
              "Carregar el kernel a memòria.",
              "Permete que el kernel comenci a executar-se.",
              "Totes les anteriors."
            ],
            "answer": 3,
            "explanation": "El bootstrap loader: localitza el kernel, el carrega a memòria i permet que comenci a executar-se. Tot és correcte."
          },
          {
            "q": "Quina evolució és possible per a un procés en un Sistema Operatiu de temps  compartit?",
            "options": [
              "Run -> Ready -> Blocked -> Run.",
              "New -> Ready -> Run -> Ready.",
              "Run -> Blocked -> Ready -> New.",
              "New -> Run -> Blocked -> Run."
            ],
            "answer": 0,
            "explanation": "En un SO temps compartit: Run→Ready (preemptat), Ready→Run (scheduling), Run→Blocked (E/S), Blocked→Ready (E/S completa)."
          },
          {
            "q": "Què permet fer la comanda ‘getopts’?",
            "options": [
              "Tractar opcions de comanda d’un caràcter",
              "Tractar opcions de comanda de més d’un caràcter",
              "Tractar opcions de comanda que comencen per ‘--’",
              "No existeix aquesta comanda."
            ],
            "answer": 0,
            "explanation": "getopts processa opcions de comanda d'un sol caràcter (com -a, -b). Per opcions llargues (--option) s'usa getopt."
          },
          {
            "q": "Que implica que un SO sigui de Temps Real?",
            "options": [
              "Que el SO és monoprogramat.",
              "Que si és un SO multiprogramat té prioritats.",
              "Que els procesos d’usuari no acabaen mai",
              "Que els procesos de sistema acaben sempre de manera correcta."
            ],
            "answer": 1,
            "explanation": "Un SO de Temps Real usa prioritats per garantir que les tasques crítiques s'executen dins del seu termini."
          },
          {
            "q": "Què diferencia el SJF del SRTF?",
            "options": [
              "SJF és apropiatiu i SRTF no.",
              "SRTF és apropiatiu i SJF no.",
              "SJF és un planificador de llarg termini i SRTF de curt termini",
              "SRTF és de temps de real i SJF no. Donat el següent esquema d'execució de tres processos:"
            ],
            "answer": 1,
            "explanation": "SRTF (Shortest Remaining Time First) és la versió apropiativa del SJF. SJF no és apropiatiu."
          },
          {
            "q": "Quin tipus de sistema operatiu és?",
            "options": [
              "Monoprogramat.",
              "Multiprogramat apropiatiu.",
              "Multiprogramat temps compartit.",
              "Multiprogramat temps compartir apropiatiu."
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa."
          },
          {
            "q": "Quina prioritat tenen els processos?",
            "options": [
              "P1 > P2 > P3.",
              "P2 > P3 > P1.",
              "P3 > P1 > P2.",
              "No tenen prioritats."
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa."
          },
          {
            "q": "Quina és la mitja del temps d’espera?",
            "options": [
              "47/4",
              "50/3",
              "57/3",
              "63/3"
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa."
          },
          {
            "q": "Quina és la mitja del temps de retorn?",
            "options": [
              "49/3",
              "56/3",
              "106/3",
              "123/3"
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa."
          }
        ]
      },
      {
        "title": "wuolah-free-1erParcial-FSO-amb-Solucio (1)",
        "questions": [
          {
            "q": "Hi ha una única resposta totalment correcta. 1.És funció dels SO:",
            "options": [
              "Controlar l'execució de les aplicacions.",
              "Gestionar els recursos del sistema.",
              "Oferir i facilitar l'accés als recursos per part de les aplicacions.",
              "Totes les anteriors."
            ],
            "answer": 3,
            "explanation": "El SO controla l'execució, gestiona recursos i facilita l'accés. Totes les anteriors."
          },
          {
            "q": "Quins quatre components hi ha en un Sistema de computació?",
            "options": [
              "Hardware, sistema operatiu, aplicacions i usuaris.",
              "CPU, RAM, disc i Kernel.",
              "Hardware, kernel, dispositius E/S i drivers.",
              "Aplicacions procedurals, lineals, seqüencials i recursives."
            ],
            "answer": 0,
            "explanation": "Un sistema de computació conté Hardware, SO, aplicacions d'usuari i els usuaris."
          },
          {
            "q": "Quina diferencia hi ha entre kernel i sistema operatiu?",
            "options": [
              "No hi ha cap diferencia, és el mateix.",
              "El kernel controla el hardware i el sistema operatiu el software.",
              "El kernel controla el software i el sistema operatiu el hardware.",
              "El sistema operatiu conté el kernel a mes de les aplicacions de sistema."
            ],
            "answer": 3,
            "explanation": "El Kernel és el nucli; el SO és el Kernel més tot l'ecosistema d'eines essencials."
          },
          {
            "q": "Quines feines fa el kernel per a les aplicacions d’usuari?",
            "options": [
              "Accedir a dispositius d'E/S mitjançant el driver.",
              "Accés total a qualsevol fitxer.",
              "Accedir a recursos que no pertanyen a l’usuari.",
              "Totes les anteriors."
            ],
            "answer": 0,
            "explanation": "El kernel gestiona l'accés a dispositius E/S a través dels drivers."
          },
          {
            "q": "Per a què es fan servir les interrupcions?",
            "options": [
              "Per permetre que els programes facin més càlculs.",
              "Per permetre als usuaris fer un cafè a mig matí.",
              "Per a informar al kernel que un dispositiu ha finalitzat la operació  sol·licitada.",
              "Per permetre que un programa faci E/S directament."
            ],
            "answer": 2,
            "explanation": "Les interrupcions informen al kernel que un dispositiu ha finalitzat l'operació sol·licitada (E/S completa)."
          },
          {
            "q": "Què diferencia un SO multiprogramat d'un de temps compartit?",
            "options": [
              "La capacitat de carregar programes a memòria.",
              "La capacitat d'escollir el moment de fer fora de CPU a un procés.",
              "La capacitat d'executar-se en un sistema multiprocessador.",
              "res, és el mateix"
            ],
            "answer": 1,
            "explanation": "El temps compartit pot preemptar un procés (treure'l de CPU). El multiprogramat espera que el procés faci E/S."
          },
          {
            "q": "Quin sistema dóna millor productivitat?",
            "options": [
              "Monoprogramat.",
              "Multiprogramat.",
              "Temps compatit.",
              "Tots per igual."
            ],
            "answer": 1,
            "explanation": "El multiprogramat maximitza la utilització de CPU, donant millor productivitat global."
          },
          {
            "q": "Que permet fer la tècnica de DMA?",
            "options": [
              "Permet fer transferències entre disc i RAM sense usar la CPU.",
              "Permet crear una cua de programes que s'executaran directament.",
              "No es fa servir en els sistemes d'avui en dia.",
              "Permet accedir als usuaris de manera directa."
            ],
            "answer": 0,
            "explanation": "El DMA (Direct Memory Access) permet transferir dades entre dispositius i RAM sense ocupar la CPU."
          },
          {
            "q": "Què permet fer passar d’un procés single-thread a multi-thread?",
            "options": [
              "Incrementar el nombre d'usuaris connectats al sistema.",
              "Poder executar-se en un sistema multiprogramat.",
              "El estar executant diferents parts del procés de manera concurrent.",
              "Incrementar el temps de resposta."
            ],
            "answer": 2,
            "explanation": "Els threads permeten executar parts del procés de manera concurrent (paral·lelament)."
          },
          {
            "q": "Què diferencia un fitxer d’un disc dur?",
            "options": [
              "El primer és software i el segon és hardware.",
              "El mètode d’accés.",
              "Les restriccions d’accés.",
              "Cap, és el mateix."
            ],
            "answer": 0,
            "explanation": "Un fitxer és una abstracció software; un disc dur és hardware físic."
          },
          {
            "q": "Quina tasca té assignada el planificador de mig termini?",
            "options": [
              "Decidir quan s'ha de començar a executar un procés.",
              "Decidir quan s'ha de treure un tros de la memòria assignada a un procés.",
              "Decidir l'ordre d'acabament dels processos.",
              "Decidir retirar completament de memòria principal a un procés."
            ],
            "answer": 1,
            "explanation": "El planificador de mig termini (swapper) decideix quan treure processos parcialment de memòria a disc (swapping)."
          },
          {
            "q": "Quins són els tres estats principals d'un procés?",
            "options": [
              "New, Run i Terminated.",
              "New, Run i Blocked.",
              "Ready, Run i Blocked.",
              "Run, Blocked i Terminated."
            ],
            "answer": 2,
            "explanation": "Els tres estats principals: Ready (preparat), Run (executant-se) i Blocked (bloquejat per E/S)."
          },
          {
            "q": "Quina evolució és possible per a un procés en un Sistema Operatiu de temps  compartit?",
            "options": [
              "Run -> Ready -> Blocked -> Run.",
              "New -> Ready -> Run -> Ready.",
              "Run -> Blocked -> Ready -> New.",
              "New -> Run -> Blocked -> Run."
            ],
            "answer": 0,
            "explanation": "En un SO temps compartit: Run→Ready (preemptat), Ready→Run (scheduling), Run→Blocked (E/S), Blocked→Ready (E/S completa)."
          },
          {
            "q": "Què sortirà per pantalla si executem en una bash les següents comandes:   x=5; y=5; z=x+y; echo $z",
            "options": [
              "10",
              "x+y",
              "55",
              "5+5"
            ],
            "answer": 1,
            "explanation": "z=x+y en bash assigna la cadena literal 'x+y'. Per sumar cal: z=$((x+y))."
          },
          {
            "q": "Quin tipus d’estructura té un sistema basat en Mach?",
            "options": [
              "Monolític.",
              "Multicapa.",
              "Microkernel",
              "Modular."
            ],
            "answer": 2,
            "explanation": "Mach té arquitectura Microkernel: nucli mínim, serveis en espai d'usuari."
          },
          {
            "q": "Que és el PCB?",
            "options": [
              "Process Control Block.",
              "Program Counter Block.",
              "Parallel and Concurrent Block.",
              "Program Control Behavior. Donat el següent esquema d'execució de tres processos:"
            ],
            "answer": 0,
            "explanation": "El PCB (Process Control Block) és l'estructura de dades del SO que conté tota la informació d'un procés."
          },
          {
            "q": "Quin tipus de sistema operatiu és?",
            "options": [
              "Monoprogramat.",
              "Multiprogramat apropiatiu.",
              "Multiprogramat temps compartit.",
              "Multiprogramat temps compartir apropiatiu."
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa."
          },
          {
            "q": "Quina prioritat tenen els processos?",
            "options": [
              "P1 > P2 > P3.",
              "P2 > P3 >P1.",
              "P1 > P3 > P2.",
              "No tenen prioritats."
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa."
          },
          {
            "q": "Quina és la mitja del temps d’espera?",
            "options": [
              "5,66",
              "19,66",
              "20,33",
              "14,66"
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa."
          },
          {
            "q": "Quina és la mitja del temps de retorn?",
            "options": [
              "36",
              "41,66",
              "16,33",
              "19,66"
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa."
          }
        ]
      },
      {
        "title": "Primer Parcial 2023 - A",
        "questions": [
          {
            "q": "Hi ha una única resposta totalment correcta. 1. És funció dels SO:",
            "options": [
              "Controlar l'execució de les aplicacions.",
              "Gestionar els recursos del sistema.",
              "Oferir i facilitar l'accés als recursos per part de les aplicacions.",
              "Totes les anteriors."
            ],
            "answer": 3,
            "explanation": "El SO controla l'execució, gestiona recursos i facilita l'accés. Totes les anteriors."
          },
          {
            "q": "Quins quatre components hi ha en un Sistema de computació?",
            "options": [
              "Hardware, sistema operatiu, aplicacions i usuaris.",
              "CPU, RAM, disc i Kernel.",
              "Hardware, kernel, dispositius E/S i drivers.",
              "Aplicacions procedurals, lineals, seqüencials i recursives."
            ],
            "answer": 0,
            "explanation": "Un sistema de computació conté Hardware, SO, aplicacions d'usuari i els usuaris."
          },
          {
            "q": "Quina diferencia hi ha entre kernel i sistema operatiu?",
            "options": [
              "No hi ha cap diferencia, és el mateix.",
              "El kernel controla el hardware i el sistema operatiu el software.",
              "El kernel controla el software i el sistema operatiu el hardware.",
              "El sistema operatiu conté el kernel a mes de les aplicacions de sistema."
            ],
            "answer": 3,
            "explanation": "El Kernel és el nucli; el SO és el Kernel més tot l'ecosistema d'eines essencials."
          },
          {
            "q": "Quines feines fa el kernel per a les aplicacions d’usuari?",
            "options": [
              "Accedir a dispositius d'E/S mitjançant el driver.",
              "Accés total a qualsevol fitxer.",
              "Accedir a recursos que no pertanyen a l’usuari.",
              "Totes les anteriors."
            ],
            "answer": 0,
            "explanation": "El kernel gestiona l'accés a dispositius E/S a través dels drivers."
          },
          {
            "q": "Per a què es fan servir les interrupcions?",
            "options": [
              "Per permetre que els programes facin més càlculs.",
              "Per permetre als usuaris fer un cafè a mig matí.",
              "Per a informar al kernel que un dispositiu ha finalitzat la operació  sol·licitada.",
              "Per permetre que un programa faci E/S directament."
            ],
            "answer": 2,
            "explanation": "Les interrupcions informen al kernel que un dispositiu ha finalitzat l'operació sol·licitada (E/S completa)."
          },
          {
            "q": "Què diferencia un SO multiprogramat d'un de temps compartit?",
            "options": [
              "La capacitat de carregar programes a memòria.",
              "La capacitat d'escollir el moment de fer fora de CPU a un procés.",
              "La capacitat d'executar-se en un sistema multiprocessador.",
              "res, és el mateix"
            ],
            "answer": 1,
            "explanation": "El temps compartit pot preemptar un procés (treure'l de CPU). El multiprogramat espera que el procés faci E/S."
          },
          {
            "q": "Quin sistema dóna millor productivitat?",
            "options": [
              "Monoprogramat.",
              "Multiprogramat.",
              "Temps compatit.",
              "Tots per igual."
            ],
            "answer": 1,
            "explanation": "El multiprogramat maximitza la utilització de CPU, donant millor productivitat global."
          },
          {
            "q": "Que permet fer la tècnica de DMA?",
            "options": [
              "Permet fer transferències entre disc i RAM sense usar la CPU.",
              "Permet crear una cua de programes que s'executaran directament.",
              "No es fa servir en els sistemes d'avui en dia.",
              "Permet accedir als usuaris de manera directa."
            ],
            "answer": 0,
            "explanation": "El DMA (Direct Memory Access) permet transferir dades entre dispositius i RAM sense ocupar la CPU."
          },
          {
            "q": "Què permet fer passar d’un procés single-thread a multi-thread?",
            "options": [
              "Incrementar el nombre d'usuaris connectats al sistema.",
              "Poder executar-se en un sistema multiprogramat.",
              "El estar executant diferents parts del procés de manera concurrent.",
              "Incrementar el temps de resposta."
            ],
            "answer": 2,
            "explanation": "Els threads permeten executar parts del procés de manera concurrent (paral·lelament)."
          },
          {
            "q": "Què diferencia un fitxer d’un disc dur?",
            "options": [
              "El primer és software i el segon és hardware.",
              "El mètode d’accés.",
              "Les restriccions d’accés.",
              "Cap, és el mateix."
            ],
            "answer": 0,
            "explanation": "Un fitxer és una abstracció software; un disc dur és hardware físic."
          },
          {
            "q": "Quina tasca té assignada el planificador de mig termini?",
            "options": [
              "Decidir quan s'ha de començar a executar un procés.",
              "Decidir quan s'ha de treure un tros de la memòria assignada a un procés.",
              "Decidir l'ordre d'acabament dels processos.",
              "Decidir retirar completament de memòria principal a un procés."
            ],
            "answer": 1,
            "explanation": "El planificador de mig termini (swapper) decideix quan treure processos parcialment de memòria a disc (swapping)."
          },
          {
            "q": "Quins són els tres estats principals d'un procés?",
            "options": [
              "New, Run i Terminated.",
              "New, Run i Blocked.",
              "Ready, Run i Blocked.",
              "Run, Blocked i Terminated."
            ],
            "answer": 2,
            "explanation": "Els tres estats principals: Ready (preparat), Run (executant-se) i Blocked (bloquejat per E/S)."
          },
          {
            "q": "Quina evolució és possible per a un procés en un Sistema Operatiu de temps  compartit?",
            "options": [
              "Run -> Ready -> Blocked -> Run.",
              "New -> Ready -> Run -> Ready.",
              "Run -> Blocked -> Ready -> New.",
              "New -> Run -> Blocked -> Run."
            ],
            "answer": 0,
            "explanation": "En un SO temps compartit: Run→Ready (preemptat), Ready→Run (scheduling), Run→Blocked (E/S), Blocked→Ready (E/S completa)."
          },
          {
            "q": "Què sortirà per pantalla si executem en una bash les següents comandes:   x=5; y=5; z=x+y; echo $z",
            "options": [
              "10",
              "x+y",
              "55",
              "5+5"
            ],
            "answer": 1,
            "explanation": "z=x+y en bash assigna la cadena literal 'x+y'. Per sumar cal: z=$((x+y))."
          },
          {
            "q": "Quin tipus d’estructura té un sistema basat en Mach?",
            "options": [
              "Monolític.",
              "Multicapa.",
              "Microkernel",
              "Modular."
            ],
            "answer": 2,
            "explanation": "Mach té arquitectura Microkernel: nucli mínim, serveis en espai d'usuari."
          },
          {
            "q": "Que és el PCB?",
            "options": [
              "Process Control Block.",
              "Program Counter Block.",
              "Parallel and Concurrent Block.",
              "Program Control Behavior. Donat el següent esquema d'execució de tres processos:"
            ],
            "answer": 0,
            "explanation": "El PCB (Process Control Block) és l'estructura de dades del SO que conté tota la informació d'un procés."
          },
          {
            "q": "Quin tipus de sistema operatiu és?",
            "options": [
              "Monoprogramat.",
              "Multiprogramat apropiatiu.",
              "Multiprogramat temps compartit.",
              "Multiprogramat temps compartir apropiatiu."
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa."
          },
          {
            "q": "Quina prioritat tenen els processos?",
            "options": [
              "P1 > P2 > P3.",
              "P2 > P3 >P1.",
              "P1 > P3 > P2.",
              "No tenen prioritats."
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa."
          },
          {
            "q": "Quina és la mitja del temps d’espera?",
            "options": [
              "5,66",
              "19,66",
              "20,33",
              "14,66"
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa."
          },
          {
            "q": "Quina és la mitja del temps de retorn?",
            "options": [
              "36",
              "41,66",
              "16,33",
              "19,66"
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa."
          }
        ]
      },
      {
        "title": "wuolah-free-tac12346 (1)",
        "questions": [
          {
            "q": "pdf Kattorzeh Fundamentos de Sistemas Operativos 2º Grado en Ingeniería Informática Escuela Técnica Superior de Ingeniería Universidad Rovira i Virgili Accede al documento original Reservados todos los derechos. No se permite la explotación económica ni la transformación de esta obra. Queda permitida la impresión en su totalidad. .          Fonaments Sistemes Operatius. 21 de març de 2022 Primera part: TEST .  Duració : 30 minuts. No es permet consultar cap mena de documentació. Si cada pregunta val 1, per cada resposta incorrecta es descompta 0,33. Hi ha una única resposta totalment correcta. 1. És funció dels SO:",
            "options": [
              "Controlar l'execució de les aplicacions.",
              "Gestionar els recursos del sistema.",
              "Oferir i facilitar l'accés als recursos per part de les aplicacions.",
              "Totes les anteriors."
            ],
            "answer": 3,
            "explanation": "El SO controla l'execució, gestiona recursos i facilita l'accés. Totes les anteriors."
          },
          {
            "q": "Quins perfils d'usuaris hi ha en un Sistema de computació?",
            "options": [
              "Interactiu,Programador i Dissenyador.",
              "Interactiu i Programador.",
              "Modern, antic i renovat.",
              "Lineal, seqüencial i recursiu."
            ],
            "answer": 0,
            "explanation": "Els tres perfils d'usuari en un sistema de computació: interactiu, programador i dissenyador."
          },
          {
            "q": "En ‘Bash’ com passem una variable local a variable global",
            "options": [
              "Hi ha prou en escriure-la en majúscules.",
              "Cal tornar a definir-la al fitxer ‘.bashrc’.",
              "Amb la comanda ‘global’.",
              "Amb la comanda ‘export’."
            ],
            "answer": 3,
            "explanation": "La comanda 'export' permet que una variable local sigui accessible com a variable d'entorn global."
          },
          {
            "q": "Quines feines fa el kernel per a les aplicacions d’usuari?",
            "options": [
              "Accedir a dispositius d'E/S mitjançant el driver.",
              "Accés total a qualsevol fitxer.",
              "Accedir a recursos que no pertanyen a l’usuari.",
              "Totes les anteriors."
            ],
            "answer": 0,
            "explanation": "El kernel gestiona l'accés a dispositius E/S a través dels drivers."
          },
          {
            "q": "Per que és important que els SO evolucionin:",
            "options": [
              "Per permetre que els programes facin més càlculs.",
              "Per permetre als usuaris treballar més hores.",
              "Per permetre accés a nous dispositius d'E/S.",
              "Per garantir que un programa no tingui errors."
            ],
            "answer": 2,
            "explanation": "Els SO evolucionen principalment per suportar nou hardware i nous dispositius d'E/S."
          },
          {
            "q": "Que diferencia un SO multiprogramat d'un de temps compartit?",
            "options": [
              "La capacitat de carregar programes a memòria.",
              "La capacitat d'escollir el moment de fer fora de CPU a un procés.",
              "La capacitat d'executar-se en un sistema multiprocessador.",
              "res, és el mateix"
            ],
            "answer": 1,
            "explanation": "El temps compartit pot preemptar un procés (treure'l de CPU). El multiprogramat espera que el procés faci E/S."
          },
          {
            "q": "Quin sistema dóna millor productivitat?",
            "options": [
              "Monoprogramat.",
              "Multiprogramat.",
              "Temps compatit.",
              "Tots per igual."
            ],
            "answer": 1,
            "explanation": "El multiprogramat maximitza la utilització de CPU, donant millor productivitat global."
          },
          {
            "q": "El processament per lots (batch) original",
            "options": [
              "Permet crear una cua de programes que s'executaran un darrera de l'altre.",
              "No es fa servir en els Sistemes d'avui en dia.",
              "Permet accedir als usuaris de manera interactiva.",
              "És un tipus de reproductor de música."
            ],
            "answer": 0,
            "explanation": "El processament per lots executa programes en cua, un rere l'altre, sense interactivitat."
          },
          {
            "q": "La multiprogramació està pensada per?",
            "options": [
              "Incrementar el nombre d'usuaris connectats al sistema.",
              "Incrementar l'accés a les diferents CPU del sistema.",
              "Incrementar la utilització de la CPU.",
              "Incrementar el temps de resposta."
            ],
            "answer": 2,
            "explanation": "La multiprogramació manté la CPU ocupada mentre processos esperen E/S, maximitzant la utilització."
          },
          {
            "q": "Quina implementació es més eficient per a una cua de processos Blocked?",
            "options": [
              "Una cua LIFO",
              "Una cua FIFO",
              "Una cua de prioritats.",
              "Múltiples cues."
            ],
            "answer": 2,
            "explanation": "Una cua de prioritats és la implementació més eficient, els processos de major prioritat es desbloquegen primer."
          },
          {
            "q": "Quina tasca té assignada el planificador de mig termini?",
            "options": [
              "Decidir quan s'ha de començar a executar un procés.",
              "Decidir quan s'ha de treure un tros de la memòria assignada a un procés.",
              "Decidir l'ordre d'acabament dels processos.",
              "Decidir retirar completament de memòria principal a un procés."
            ],
            "answer": 1,
            "explanation": "El planificador de mig termini (swapper) decideix quan treure processos parcialment de memòria a disc (swapping)."
          },
          {
            "q": "Quins són els tres estats principals d'un procés?",
            "options": [
              "Ready, Run i Blocked.",
              "New, Run i Terminated.",
              "New, Run i Blocked.",
              "Run, Blocked i Terminated."
            ],
            "answer": 0,
            "explanation": "Els tres estats principals: Ready (preparat), Run (executant-se) i Blocked (bloquejat per E/S)."
          },
          {
            "q": "Quina evolució és possible per a un procés en un Sistema Operatiu de temps  compartit?",
            "options": [
              "Run -> Ready -> Blocked -> Run.",
              "Run -> Blocked -> Ready -> New.",
              "New -> Run -> Blocked -> Run.",
              "New -> Ready -> Run -> Ready."
            ],
            "answer": 0,
            "explanation": "En un SO temps compartit: Run→Ready (preemptat), Ready→Run (scheduling), Run→Blocked (E/S), Blocked→Ready (E/S completa)."
          },
          {
            "q": "Què sortirà per pantalla si executem en un intèrpret de python les seguents  comandes:  x=3; y=5; z=x+y; print (z)",
            "options": [
              "x+y",
              "35",
              "3+5",
              "8"
            ],
            "answer": 3,
            "explanation": "En Python, z=x+y fa la suma aritmètica. x=3, y=5 → z=8."
          },
          {
            "q": "Quin tipus de SO és Solaris?",
            "options": [
              "Monoprogramat, monousuari.",
              "Multiprogramat temps compartit i multithread.",
              "Multiusuari, monoprogramat per cada usuari.",
              "Mutiprogramant, monothread per cada procés."
            ],
            "answer": 1,
            "explanation": "Solaris és un SO multiprogramat de temps compartit amb suport multithread."
          },
          {
            "q": "El codi que s'executa en una interrupció:",
            "options": [
              "Pertany al codi del programa.",
              "Pertany al codi del kernel.",
              "S'executa en mode usuari del sistema operatiu.",
              "S'executa en mode kernel del procés d'usuari."
            ],
            "answer": 1,
            "explanation": "El gestor d'interrupcions (ISR) pertany al codi del kernel, s'executa en mode privilegiat."
          },
          {
            "q": "L'objectiu principal que vol assolir una aplicació que esta programada amb  threads?",
            "options": [
              "És millorar el temps de retorn de l'aplicació.",
              "És millorar la productivitat del sistema.",
              "És millorar l'utilització de la CPU del sistema.",
              "És millorar el temps de resposta de l'aplicació. Donat el següent esquema d'execució de tres processos:"
            ],
            "answer": 3,
            "explanation": "L'objectiu principal dels threads és millorar el temps de resposta de l'aplicació (concurrència)."
          },
          {
            "q": "Quin tipus de sistema operatiu és?",
            "options": [
              "Monoprogramat.",
              "Multiprogramat.",
              "Multiprogramat temps compartit.",
              "Cap de les anteriors."
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa.",
            "images": [
              "assets/img/exams/auto_ext_wuolah_free_tac12346__1__p4_b4.png"
            ]
          },
          {
            "q": "Quina prioritat tenen els processos?",
            "options": [
              "P1 > P2 > P3.",
              "P2 > P3 >P1.",
              "P1 > P3 > P2.",
              "No tenen prioritats."
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa.",
            "images": [
              "assets/img/exams/auto_ext_wuolah_free_tac12346__1__p4_b4.png"
            ]
          },
          {
            "q": "Quina és la mitja del temps d’espera?",
            "options": [
              "16",
              "24",
              "21,33",
              "32"
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa.",
            "images": [
              "assets/img/exams/auto_ext_wuolah_free_tac12346__1__p4_b4.png"
            ]
          },
          {
            "q": "Quina és la mitja del temps de retorn?",
            "options": [
              "14,66",
              "30,66",
              "32,66",
              "36 Donada la següent execució de dos processos de temps real:"
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa."
          },
          {
            "q": "Quin son els períodes dels processos P1 i P2, respectivament:",
            "options": [
              "50,50",
              "50,100",
              "100,100",
              "100,150"
            ],
            "answer": 1,
            "explanation": "Del diagrama: P1 té un periode de 50 unitats i P2 de 100 unitats."
          },
          {
            "q": "En un planificador Rate-Monotonic, quina relació de prioritats tenen P1 i P2?",
            "options": [
              "La mateixa.",
              "P1 < P2.",
              "P1 > P2.",
              "No té sentit en un planificador Rate-Monotonic."
            ],
            "answer": 2,
            "explanation": "En Rate-Monotonic, el procés amb el periode més curt té més prioritat. P1 (T=50) > P2 (T=100)."
          },
          {
            "q": "En un planificador Earliest-Deadline-First (EDF), quina relació de prioritats  tindrien P1 i P2?",
            "options": [
              "És dinàmica i es modifica a mesura que s’apropen al seu deadline.",
              "La mateixa.",
              "P1 < P2.",
              "P1 > P2."
            ],
            "answer": 0,
            "explanation": "EDF assigna prioritats dinàmicament: el procés amb el deadline més proper té la màxima prioritat en cada moment."
          }
        ]
      },
      {
        "title": "Primer Parcial 2023 - B",
        "questions": [
          {
            "q": "Hi ha una única resposta totalment correcta. 1. Quines feines fa el kernel per a les aplicacions d’usuari?",
            "options": [
              "Accedir a dispositius d'E/S mitjançant el driver.",
              "Accés total a qualsevol fitxer.",
              "Accedir a recursos que no pertanyen a l’usuari.",
              "Totes les anteriors."
            ],
            "answer": 0,
            "explanation": "El kernel gestiona l'accés a dispositius E/S a través dels drivers."
          },
          {
            "q": "És funció dels SO:",
            "options": [
              "Controlar l'execució de les aplicacions.",
              "Gestionar els recursos del sistema.",
              "Oferir i facilitar l'accés als recursos per part de les aplicacions.",
              "Totes les anteriors."
            ],
            "answer": 3,
            "explanation": "El SO controla l'execució, gestiona recursos i facilita l'accés. Totes les anteriors."
          },
          {
            "q": "Quins quatre components hi ha en un Sistema de computació?",
            "options": [
              "Hardware, sistema operatiu, aplicacions i usuaris.",
              "CPU, RAM, disc i Kernel.",
              "Hardware, kernel, dispositius E/S i drivers.",
              "Aplicacions procedurals, lineals, seqüencials i recursives."
            ],
            "answer": 0,
            "explanation": "Un sistema de computació conté Hardware, SO, aplicacions d'usuari i els usuaris."
          },
          {
            "q": "Quina diferencia hi ha entre kernel i sistema operatiu?",
            "options": [
              "No hi ha cap diferencia, és el mateix.",
              "El kernel controla el hardware i el sistema operatiu el software.",
              "El kernel controla el software i el sistema operatiu el hardware.",
              "El sistema operatiu conté el kernel a mes de les aplicacions de sistema."
            ],
            "answer": 3,
            "explanation": "El Kernel és el nucli; el SO és el Kernel més tot l'ecosistema d'eines essencials."
          },
          {
            "q": "Per a què es fan servir les interrupcions?",
            "options": [
              "Per permetre que els programes facin més càlculs.",
              "Per permetre als usuaris fer un cafè a mig matí.",
              "Per a informar al kernel que un dispositiu ha finalitzat la operació  sol·licitada.",
              "Per permetre que un programa faci E/S directament."
            ],
            "answer": 2,
            "explanation": "Les interrupcions informen al kernel que un dispositiu ha finalitzat l'operació sol·licitada (E/S completa)."
          },
          {
            "q": "Què diferencia un SO multiprogramat d'un de temps compartit?",
            "options": [
              "La capacitat de carregar programes a memòria.",
              "La capacitat d'escollir el moment de fer fora de CPU a un procés.",
              "La capacitat d'executar-se en un sistema multiprocessador.",
              "res, és el mateix"
            ],
            "answer": 1,
            "explanation": "El temps compartit pot preemptar un procés (treure'l de CPU). El multiprogramat espera que el procés faci E/S."
          },
          {
            "q": "Que permet fer la tècnica de DMA?",
            "options": [
              "Permet fer transferències entre disc i RAM sense usar la CPU.",
              "Permet crear una cua de programes que s'executaran directament.",
              "No es fa servir en els sistemes d'avui en dia.",
              "Permet accedir als usuaris de manera directa."
            ],
            "answer": 0,
            "explanation": "El DMA (Direct Memory Access) permet transferir dades entre dispositius i RAM sense ocupar la CPU."
          },
          {
            "q": "Quin sistema dóna millor productivitat?",
            "options": [
              "Monoprogramat.",
              "Multiprogramat.",
              "Temps compatit.",
              "Tots per igual."
            ],
            "answer": 1,
            "explanation": "El multiprogramat maximitza la utilització de CPU, donant millor productivitat global."
          },
          {
            "q": "Què permet fer passar d’un procés single-thread a multi-thread?",
            "options": [
              "Incrementar el nombre d'usuaris connectats al sistema.",
              "Poder executar-se en un sistema multiprogramat.",
              "El estar executant diferents parts del procés de manera concurrent.",
              "Incrementar el temps de resposta."
            ],
            "answer": 2,
            "explanation": "Els threads permeten executar parts del procés de manera concurrent (paral·lelament)."
          },
          {
            "q": "Què diferencia un fitxer d’un disc dur?",
            "options": [
              "El primer és software i el segon és hardware.",
              "El mètode d’accés.",
              "Les restriccions d’accés.",
              "Cap, és el mateix."
            ],
            "answer": 0,
            "explanation": "Un fitxer és una abstracció software; un disc dur és hardware físic."
          },
          {
            "q": "Quina tasca té assignada el planificador de mig termini?",
            "options": [
              "Decidir quan s'ha de començar a executar un procés.",
              "Decidir quan s'ha de treure un tros de la memòria assignada a un procés.",
              "Decidir l'ordre d'acabament dels processos.",
              "Decidir retirar completament de memòria principal a un procés."
            ],
            "answer": 1,
            "explanation": "El planificador de mig termini (swapper) decideix quan treure processos parcialment de memòria a disc (swapping)."
          },
          {
            "q": "Quins són els tres estats principals d'un procés?",
            "options": [
              "New, Run i Terminated.",
              "New, Run i Blocked.",
              "Ready, Run i Blocked.",
              "Run, Blocked i Terminated."
            ],
            "answer": 2,
            "explanation": "Els tres estats principals: Ready (preparat), Run (executant-se) i Blocked (bloquejat per E/S)."
          },
          {
            "q": "Quina evolució és possible per a un procés en un Sistema Operatiu  multiprogramat?",
            "options": [
              "Run  → Blocked  →  Ready  Run.→",
              "New   Ready   Run   Ready.→ → →",
              "Run   Blocked   Ready   New.→ → →",
              "New   Run   Blocked   Run.→ → →"
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa."
          },
          {
            "q": "Què sortirà per pantalla si executem en una bash les següents comandes:   x=5; y=5; z=$x+$y; echo $z",
            "options": [
              "10",
              "x+y",
              "55",
              "5+5"
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa."
          },
          {
            "q": "Quin tipus d’estructura té un sistema basat en Unix?",
            "options": [
              "Monolític.",
              "Multicapa.",
              "Microkernel",
              "Modular."
            ],
            "answer": 0,
            "explanation": "Unix té estructura monolítica."
          },
          {
            "q": "Que és el PCB?",
            "options": [
              "Process Control Block.",
              "Program Counter Block.",
              "Parallel and Concurrent Block.",
              "Program Control Behavior. Donat el següent esquema d'execució de tres processos:"
            ],
            "answer": 0,
            "explanation": "El PCB (Process Control Block) és l'estructura de dades del SO que conté tota la informació d'un procés."
          },
          {
            "q": "Quin tipus de sistema operatiu és?",
            "options": [
              "Monoprogramat.",
              "Multiprogramat apropiatiu.",
              "Multiprogramat temps compartit.",
              "Multiprogramat temps compartir apropiatiu."
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa."
          },
          {
            "q": "Quina prioritat tenen els processos?",
            "options": [
              "P1 > P2 > P3.",
              "P2 > P3 >P1.",
              "P1 > P3 > P2.",
              "No tenen prioritats."
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa."
          },
          {
            "q": "Quina és la mitja del temps d’espera?",
            "options": [
              "5",
              "16",
              "21",
              "19,66"
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa."
          },
          {
            "q": "Quina és la mitja del temps de retorn?",
            "options": [
              "34",
              "41,66",
              "16,33",
              "19,66"
            ],
            "answer": 0,
            "explanation": "Pregunta extreta del PDF. Consulta els apunts per a la justificació completa."
          }
        ]
      }
    ],
    "tests_generats": [
      {
        "title": "Simulacre Pràctic P1 (Variant #1)",
        "questions": [
          {
            "q": "Imagina un planificador que usa Round Robin pur on el quant (quantum) és enorme i tendeix a infinit. A quin altre algorisme s'assemblarà aquest comportament?",
            "options": [
              "SJF (Shortest Job First).",
              "FCFS (First Come, First Served).",
              "Multinivell amb retroalimentació."
            ],
            "answer": 1,
            "explanation": "Si el quantum és infinit, els processos no són apropiats (expulsats) mai pel timer. Entraran per ordre d'arribada i sortiran quan vulguin (FCFS)."
          },
          {
            "q": "(General) Quina és una de les finalitats 0 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 0",
              "Evitar interrupcions",
              "Crear 0 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 22 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 22",
              "Evitar interrupcions",
              "Crear 22 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 20 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 20",
              "Evitar interrupcions",
              "Crear 20 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 13 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 13",
              "Evitar interrupcions",
              "Crear 13 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 34 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 34",
              "Evitar interrupcions",
              "Crear 34 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 38 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 38",
              "Evitar interrupcions",
              "Crear 38 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 24 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 24",
              "Evitar interrupcions",
              "Crear 24 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 18 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 18",
              "Evitar interrupcions",
              "Crear 18 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 15 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 15",
              "Evitar interrupcions",
              "Crear 15 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quin és l'avantatge primordial del planificador SJF (Shortest Job First)?",
            "options": [
              "És altíssimament segur.",
              "És matemàticament idoni: llança el menor temps MIG d'ESPERA possible combinant tota la cua de Ready en un vector perfecte.",
              "Fàcil implementació real exacte en sistemes domèstics atès conéixer de veritat futurs clars d'un processador."
            ],
            "answer": 1,
            "explanation": "SJF minimitza l'espera mitja col·locant el més ràpid primer, per evitar el comboi. Problema: En veritat NO COMPTE EL FUTUR (usant per tant heurístiques/exp net/est), i genera inanició a tasques llargues."
          },
          {
            "q": "(General) Quina és una de les finalitats 29 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 29",
              "Evitar interrupcions",
              "Crear 29 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 1 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 1",
              "Evitar interrupcions",
              "Crear 1 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #2)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 3 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 3",
              "Evitar interrupcions",
              "Crear 3 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quina diferencia hi ha entre kernel i sistema operatiu?",
            "options": [
              "No hi ha cap diferencia, presten el mateix propòsit complet.",
              "El kernel controla exclusivament el software i el sistema operatiu el hardware.",
              "El sistema operatiu conté el kernel (nucli pincipal de control hw) a més de les aplicacions/utilitats de sistema.",
              "El kernel no pot executar en mode privilegiat."
            ],
            "answer": 2,
            "explanation": "El Kernel és el nucli d'execució contínua; el SO és el Kernel més tot l'ecosistema d'eines essencials afegides."
          },
          {
            "q": "(General) Quina és una de les finalitats 19 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 19",
              "Evitar interrupcions",
              "Crear 19 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 38 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 38",
              "Evitar interrupcions",
              "Crear 38 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quin d'aquests sistemes preten donar i aconseguir la *millor productivitat* o eficiència global d'ús màxim (Throughput) de la CPU?",
            "options": [
              "Sistemes de Lots Serials Monoprogramats antics.",
              "Sistemes Multiprogramats no-apropiatius per a treballs.",
              "Programació per Interrupcions de Kernel aillades.",
              "Sistemes Temps Compatit Pur per Interactivitat."
            ],
            "answer": 1,
            "explanation": "Nota: el pur Multiprogramat té millor throughput global perquè no perd tant temps 'context switching'."
          },
          {
            "q": "(General) Quina és una de les finalitats 14 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 14",
              "Evitar interrupcions",
              "Crear 14 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 7 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 7",
              "Evitar interrupcions",
              "Crear 7 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 12 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 12",
              "Evitar interrupcions",
              "Crear 12 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 37 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 37",
              "Evitar interrupcions",
              "Crear 37 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 20 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 20",
              "Evitar interrupcions",
              "Crear 20 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #3)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 21 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 21",
              "Evitar interrupcions",
              "Crear 21 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 10 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 10",
              "Evitar interrupcions",
              "Crear 10 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 19 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 19",
              "Evitar interrupcions",
              "Crear 19 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 28 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 28",
              "Evitar interrupcions",
              "Crear 28 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 9 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 9",
              "Evitar interrupcions",
              "Crear 9 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "L'estructura del SO 'Mach', precursora de SO com el d'Apple a nivells essencials d'arrel per seguretat va canviar el mercat usant una estructura...",
            "options": [
              "100% Monolítica clàssica tancada de UNIX V",
              "Tipus Arbre de xarxa multinivell descentralitzat de Google i Oracle",
              "Arquitectura Tipus Microkernel de passos missatges IPC",
              "Tipus purament Multi-Procès obert (Hardware SMP only)"
            ],
            "answer": 2,
            "explanation": "Mach va ser un intent fort modern als 80s / 90s per imposar l'arquitectura Microkernel."
          },
          {
            "q": "(General) Quina és una de les finalitats 12 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 12",
              "Evitar interrupcions",
              "Crear 12 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "En un Planificador típic d'E/S o OS; A qui o a què té per tàrea el 'planificador de mig termini'?",
            "options": [
              "Garantizar que els PIDs s'assignin per ordre pur seqüencial estricte de naixement del kernel.",
              "Decidir quan s'ha de treure temporalment tros/parts o el procés sencer de la memòria a disc (swapping) per gestionar hiper-saturació.",
              "Decidir exclusivament el pròxim procés a passar d'estat READY a RUN abans de temps llargs estancat."
            ],
            "answer": 1,
            "explanation": "The medium terms resolves virtual memory problems moving suspended blocks by SWAPPING them continuously to backend Storage drives temporarily."
          },
          {
            "q": "Imagina un planificador que usa Round Robin pur on el quant (quantum) és enorme i tendeix a infinit. A quin altre algorisme s'assemblarà aquest comportament?",
            "options": [
              "SJF (Shortest Job First).",
              "FCFS (First Come, First Served).",
              "Multinivell amb retroalimentació."
            ],
            "answer": 1,
            "explanation": "Si el quantum és infinit, els processos no són apropiats (expulsats) mai pel timer. Entraran per ordre d'arribada i sortiran quan vulguin (FCFS)."
          },
          {
            "q": "(General) Quina és una de les finalitats 1 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 1",
              "Evitar interrupcions",
              "Crear 1 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 16 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 16",
              "Evitar interrupcions",
              "Crear 16 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quan parlem d'Arquitectura de Microkernel, quina és la seva GRAN fortalesa?",
            "options": [
              "Moltíssim rendiment en comparació amb solucions monolítiques degut a poques interrupcions.",
              "Seguretat i estabilitat: la majoria de subsistemes d'E/S i funcions de SO operen com processos d'usuari aïllats.",
              "Usa zero memòria virtual alhora d'arrancar l'ordindar per estalviar RAM."
            ],
            "answer": 1,
            "explanation": "Aïlla completament els serveis SO a espai usuari. Si el driver de xarxa peta, el sistema no peta."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #4)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 15 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 15",
              "Evitar interrupcions",
              "Crear 15 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 30 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 30",
              "Evitar interrupcions",
              "Crear 30 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 2 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 2",
              "Evitar interrupcions",
              "Crear 2 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 11 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 11",
              "Evitar interrupcions",
              "Crear 11 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quan parlem d'Arquitectura de Microkernel, quina és la seva GRAN fortalesa?",
            "options": [
              "Moltíssim rendiment en comparació amb solucions monolítiques degut a poques interrupcions.",
              "Seguretat i estabilitat: la majoria de subsistemes d'E/S i funcions de SO operen com processos d'usuari aïllats.",
              "Usa zero memòria virtual alhora d'arrancar l'ordindar per estalviar RAM."
            ],
            "answer": 1,
            "explanation": "Aïlla completament els serveis SO a espai usuari. Si el driver de xarxa peta, el sistema no peta."
          },
          {
            "q": "(General) Quina és una de les finalitats 4 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 4",
              "Evitar interrupcions",
              "Crear 4 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 5 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 5",
              "Evitar interrupcions",
              "Crear 5 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 0 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 0",
              "Evitar interrupcions",
              "Crear 0 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Una evolució: Run → Blocked → Ready... Què causa tìpicament l'anada a Blocked del procés M, i posteriorment el retorn a Ready?",
            "options": [
              "S'ha demanat crear un procés fill // i un context switch posterior.",
              "El quantum del timer ha caducat // i el procés ja s'ha refredat.",
              "M demana llegir un fitxer (Syscall E/S) // l'E/S finalitza i el disc llença interrupció HW de fi."
            ],
            "answer": 2,
            "explanation": "Run a Blocked és voluntari (demano lectura a disc, la CPU va molt ràpida i m'he d'esperar). El disc avisa per HW (interrupció) i el kernel em posa de Blocked a Ready."
          },
          {
            "q": "(General) Quina és una de les finalitats 8 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 8",
              "Evitar interrupcions",
              "Crear 8 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 34 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 34",
              "Evitar interrupcions",
              "Crear 34 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quina tasca TÍPICA està reservada al planificador de LLARG termini (Job Scheduler)?",
            "options": [
              "Seleccionar el pròxim procés a entrar a la CPU des de l'estat Ready.",
              "Controlar i admetre el grau absolut de multiprogramació del sistema (de Nou a Ready).",
              "Fer un Swap complet d'un procés bloquejat a disc secundari per falta de RAM."
            ],
            "answer": 1,
            "explanation": "El Job Scheduler (Llarg termini) determina quants i quins programes s'agafen del spool/disc per ser injectats a memòria principal."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #5)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 18 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 18",
              "Evitar interrupcions",
              "Crear 18 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 28 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 28",
              "Evitar interrupcions",
              "Crear 28 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 21 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 21",
              "Evitar interrupcions",
              "Crear 21 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 29 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 29",
              "Evitar interrupcions",
              "Crear 29 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Imagina un planificador que usa Round Robin pur on el quant (quantum) és enorme i tendeix a infinit. A quin altre algorisme s'assemblarà aquest comportament?",
            "options": [
              "SJF (Shortest Job First).",
              "FCFS (First Come, First Served).",
              "Multinivell amb retroalimentació."
            ],
            "answer": 1,
            "explanation": "Si el quantum és infinit, els processos no són apropiats (expulsats) mai pel timer. Entraran per ordre d'arribada i sortiran quan vulguin (FCFS)."
          },
          {
            "q": "En un Planificador típic d'E/S o OS; A qui o a què té per tàrea el 'planificador de mig termini'?",
            "options": [
              "Garantizar que els PIDs s'assignin per ordre pur seqüencial estricte de naixement del kernel.",
              "Decidir quan s'ha de treure temporalment tros/parts o el procés sencer de la memòria a disc (swapping) per gestionar hiper-saturació.",
              "Decidir exclusivament el pròxim procés a passar d'estat READY a RUN abans de temps llargs estancat."
            ],
            "answer": 1,
            "explanation": "The medium terms resolves virtual memory problems moving suspended blocks by SWAPPING them continuously to backend Storage drives temporarily."
          },
          {
            "q": "(General) Quina és una de les finalitats 0 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 0",
              "Evitar interrupcions",
              "Crear 0 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 12 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 12",
              "Evitar interrupcions",
              "Crear 12 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 14 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 14",
              "Evitar interrupcions",
              "Crear 14 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 37 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 37",
              "Evitar interrupcions",
              "Crear 37 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 36 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 36",
              "Evitar interrupcions",
              "Crear 36 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "L'estructura del SO 'Mach', precursora de SO com el d'Apple a nivells essencials d'arrel per seguretat va canviar el mercat usant una estructura...",
            "options": [
              "100% Monolítica clàssica tancada de UNIX V",
              "Tipus Arbre de xarxa multinivell descentralitzat de Google i Oracle",
              "Arquitectura Tipus Microkernel de passos missatges IPC",
              "Tipus purament Multi-Procès obert (Hardware SMP only)"
            ],
            "answer": 2,
            "explanation": "Mach va ser un intent fort modern als 80s / 90s per imposar l'arquitectura Microkernel."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #6)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 24 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 24",
              "Evitar interrupcions",
              "Crear 24 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 36 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 36",
              "Evitar interrupcions",
              "Crear 36 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 4 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 4",
              "Evitar interrupcions",
              "Crear 4 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 14 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 14",
              "Evitar interrupcions",
              "Crear 14 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Què diferencia principalment un SO multiprogramat d'un de temps compartit?",
            "options": [
              "Absolutament res, amdbós termes descriuen el mateix SO.",
              "La utilització d'estrategies de paginació i swappng de disc pur.",
              "La capacitat fer fora un procés de la CPU sense la seva cooperació (escollint el moment mitjançant apropiació temporal o quanta)."
            ],
            "answer": 2,
            "explanation": "Un SO temps compartit TALLA (preempts) l'execució del procés per repartir interactivitat a d'altres freqüentment."
          },
          {
            "q": "(General) Quina és una de les finalitats 22 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 22",
              "Evitar interrupcions",
              "Crear 22 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 18 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 18",
              "Evitar interrupcions",
              "Crear 18 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 29 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 29",
              "Evitar interrupcions",
              "Crear 29 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 25 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 25",
              "Evitar interrupcions",
              "Crear 25 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 26 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 26",
              "Evitar interrupcions",
              "Crear 26 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #7)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 3 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 3",
              "Evitar interrupcions",
              "Crear 3 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 33 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 33",
              "Evitar interrupcions",
              "Crear 33 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Per a què es fan servir primordialment les interrupcions als dispositius?",
            "options": [
              "Per permetre que els programes d'usuari facin crides de xarxa.",
              "Per a informar al kernel que un dispositiu de hardware ha finalitzat l'operació sol·licitada.",
              "Per permetre que un programa faci E/S directament al disc evitant el kernel."
            ],
            "answer": 1,
            "explanation": "Les interrupcions són mecanismes asíncons hardware que notifiquen al processador d'events."
          },
          {
            "q": "(General) Quina és una de les finalitats 6 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 6",
              "Evitar interrupcions",
              "Crear 6 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 22 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 22",
              "Evitar interrupcions",
              "Crear 22 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 16 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 16",
              "Evitar interrupcions",
              "Crear 16 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 12 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 12",
              "Evitar interrupcions",
              "Crear 12 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 34 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 34",
              "Evitar interrupcions",
              "Crear 34 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 18 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 18",
              "Evitar interrupcions",
              "Crear 18 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quines de les següents descripcions representa els 3 estats claus per a cicle de vida operatiu de QUALSEVOL procés bàsic d'un SO?",
            "options": [
              "Paused, Starting i Stopping.",
              "Create, Destroy, Background i Foreground",
              "Run, Ready i Blocked (Suspend o Wait).",
              "Hault, Fetch o Decode operatiu."
            ],
            "answer": 2,
            "explanation": "Els estats centrals a tota CPU Scheduler són RUN (A l'equip processant), READY (Esperant al Planificador) o BLOCKED."
          },
          {
            "q": "(General) Quina és una de les finalitats 8 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 8",
              "Evitar interrupcions",
              "Crear 8 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #8)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 34 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 34",
              "Evitar interrupcions",
              "Crear 34 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 7 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 7",
              "Evitar interrupcions",
              "Crear 7 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 25 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 25",
              "Evitar interrupcions",
              "Crear 25 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 0 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 0",
              "Evitar interrupcions",
              "Crear 0 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 36 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 36",
              "Evitar interrupcions",
              "Crear 36 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "En un Planificador típic d'E/S o OS; A qui o a què té per tàrea el 'planificador de mig termini'?",
            "options": [
              "Garantizar que els PIDs s'assignin per ordre pur seqüencial estricte de naixement del kernel.",
              "Decidir quan s'ha de treure temporalment tros/parts o el procés sencer de la memòria a disc (swapping) per gestionar hiper-saturació.",
              "Decidir exclusivament el pròxim procés a passar d'estat READY a RUN abans de temps llargs estancat."
            ],
            "answer": 1,
            "explanation": "The medium terms resolves virtual memory problems moving suspended blocks by SWAPPING them continuously to backend Storage drives temporarily."
          },
          {
            "q": "Imagina un planificador que usa Round Robin pur on el quant (quantum) és enorme i tendeix a infinit. A quin altre algorisme s'assemblarà aquest comportament?",
            "options": [
              "SJF (Shortest Job First).",
              "FCFS (First Come, First Served).",
              "Multinivell amb retroalimentació."
            ],
            "answer": 1,
            "explanation": "Si el quantum és infinit, els processos no són apropiats (expulsats) mai pel timer. Entraran per ordre d'arribada i sortiran quan vulguin (FCFS)."
          },
          {
            "q": "(General) Quina és una de les finalitats 35 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 35",
              "Evitar interrupcions",
              "Crear 35 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quina diferencia hi ha entre kernel i sistema operatiu?",
            "options": [
              "No hi ha cap diferencia, presten el mateix propòsit complet.",
              "El kernel controla exclusivament el software i el sistema operatiu el hardware.",
              "El sistema operatiu conté el kernel (nucli pincipal de control hw) a més de les aplicacions/utilitats de sistema.",
              "El kernel no pot executar en mode privilegiat."
            ],
            "answer": 2,
            "explanation": "El Kernel és el nucli d'execució contínua; el SO és el Kernel més tot l'ecosistema d'eines essencials afegides."
          },
          {
            "q": "(General) Quina és una de les finalitats 3 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 3",
              "Evitar interrupcions",
              "Crear 3 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 31 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 31",
              "Evitar interrupcions",
              "Crear 31 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 12 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 12",
              "Evitar interrupcions",
              "Crear 12 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 10 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 10",
              "Evitar interrupcions",
              "Crear 10 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 4 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 4",
              "Evitar interrupcions",
              "Crear 4 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #9)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 38 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 38",
              "Evitar interrupcions",
              "Crear 38 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 15 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 15",
              "Evitar interrupcions",
              "Crear 15 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 14 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 14",
              "Evitar interrupcions",
              "Crear 14 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Què produeix una anomalia 'efecte comboi' (Convoy Effect)?",
            "options": [
              "Un procés molt CPU-intensiu i llarg en un sistema no apropiatiu retarda totalment a processos molt curts darrere seu.",
              "Un dispositiu de xarxa monopolitzant contínuament el DMA sencer de la placa base.",
              "Fer fora de CPU a processos amb alta prioritat per inanició."
            ],
            "answer": 0,
            "explanation": "Sol passar al sistema FCFS (First Come, First Serve) pur on un procés gegant col·lapsa l'arribada rere seu de múltiples processos 'ràpids'."
          },
          {
            "q": "(General) Quina és una de les finalitats 7 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 7",
              "Evitar interrupcions",
              "Crear 7 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quin d'aquests sistemes preten donar i aconseguir la *millor productivitat* o eficiència global d'ús màxim (Throughput) de la CPU?",
            "options": [
              "Sistemes de Lots Serials Monoprogramats antics.",
              "Sistemes Multiprogramats no-apropiatius per a treballs.",
              "Programació per Interrupcions de Kernel aillades.",
              "Sistemes Temps Compatit Pur per Interactivitat."
            ],
            "answer": 1,
            "explanation": "Nota: el pur Multiprogramat té millor throughput global perquè no perd tant temps 'context switching'."
          },
          {
            "q": "(General) Quina és una de les finalitats 27 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 27",
              "Evitar interrupcions",
              "Crear 27 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 33 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 33",
              "Evitar interrupcions",
              "Crear 33 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 5 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 5",
              "Evitar interrupcions",
              "Crear 5 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 2 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 2",
              "Evitar interrupcions",
              "Crear 2 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 28 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 28",
              "Evitar interrupcions",
              "Crear 28 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 1 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 1",
              "Evitar interrupcions",
              "Crear 1 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quines de les següents descripcions representa els 3 estats claus per a cicle de vida operatiu de QUALSEVOL procés bàsic d'un SO?",
            "options": [
              "Paused, Starting i Stopping.",
              "Create, Destroy, Background i Foreground",
              "Run, Ready i Blocked (Suspend o Wait).",
              "Hault, Fetch o Decode operatiu."
            ],
            "answer": 2,
            "explanation": "Els estats centrals a tota CPU Scheduler són RUN (A l'equip processant), READY (Esperant al Planificador) o BLOCKED."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #10)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 10 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 10",
              "Evitar interrupcions",
              "Crear 10 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 12 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 12",
              "Evitar interrupcions",
              "Crear 12 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 20 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 20",
              "Evitar interrupcions",
              "Crear 20 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 33 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 33",
              "Evitar interrupcions",
              "Crear 33 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 19 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 19",
              "Evitar interrupcions",
              "Crear 19 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quin és l'avantatge primordial del planificador SJF (Shortest Job First)?",
            "options": [
              "És altíssimament segur.",
              "És matemàticament idoni: llança el menor temps MIG d'ESPERA possible combinant tota la cua de Ready en un vector perfecte.",
              "Fàcil implementació real exacte en sistemes domèstics atès conéixer de veritat futurs clars d'un processador."
            ],
            "answer": 1,
            "explanation": "SJF minimitza l'espera mitja col·locant el més ràpid primer, per evitar el comboi. Problema: En veritat NO COMPTE EL FUTUR (usant per tant heurístiques/exp net/est), i genera inanició a tasques llargues."
          },
          {
            "q": "Quin d'aquests sistemes preten donar i aconseguir la *millor productivitat* o eficiència global d'ús màxim (Throughput) de la CPU?",
            "options": [
              "Sistemes de Lots Serials Monoprogramats antics.",
              "Sistemes Multiprogramats no-apropiatius per a treballs.",
              "Programació per Interrupcions de Kernel aillades.",
              "Sistemes Temps Compatit Pur per Interactivitat."
            ],
            "answer": 1,
            "explanation": "Nota: el pur Multiprogramat té millor throughput global perquè no perd tant temps 'context switching'."
          },
          {
            "q": "(General) Quina és una de les finalitats 37 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 37",
              "Evitar interrupcions",
              "Crear 37 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 13 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 13",
              "Evitar interrupcions",
              "Crear 13 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 32 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 32",
              "Evitar interrupcions",
              "Crear 32 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #11)",
        "questions": [
          {
            "q": "Per a què es fan servir primordialment les interrupcions als dispositius?",
            "options": [
              "Per permetre que els programes d'usuari facin crides de xarxa.",
              "Per a informar al kernel que un dispositiu de hardware ha finalitzat l'operació sol·licitada.",
              "Per permetre que un programa faci E/S directament al disc evitant el kernel."
            ],
            "answer": 1,
            "explanation": "Les interrupcions són mecanismes asíncons hardware que notifiquen al processador d'events."
          },
          {
            "q": "Que permet fer la tècnica de DMA (Direct Memory Access)?",
            "options": [
              "Permet establir accés directe entre discs compartits per varies CPUs de forma paralela.",
              "Permet l'assignació indirecta d'adreces virtuals de disc pur a la CPU.",
              "Permet fer transferències complexes i grans blocs d'informació entre disc o dispositius E/S i la RAM sense usar temps contínu de la CPU."
            ],
            "answer": 2,
            "explanation": "El DMA s'apropia del bus i escriu els blocs de Bytes d'E/S directament a la RAM. La CPU pot fer altres tasques mentrestant."
          },
          {
            "q": "L'estructura del SO 'Mach', precursora de SO com el d'Apple a nivells essencials d'arrel per seguretat va canviar el mercat usant una estructura...",
            "options": [
              "100% Monolítica clàssica tancada de UNIX V",
              "Tipus Arbre de xarxa multinivell descentralitzat de Google i Oracle",
              "Arquitectura Tipus Microkernel de passos missatges IPC",
              "Tipus purament Multi-Procès obert (Hardware SMP only)"
            ],
            "answer": 2,
            "explanation": "Mach va ser un intent fort modern als 80s / 90s per imposar l'arquitectura Microkernel."
          },
          {
            "q": "(General) Quina és una de les finalitats 36 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 36",
              "Evitar interrupcions",
              "Crear 36 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quina tasca TÍPICA està reservada al planificador de LLARG termini (Job Scheduler)?",
            "options": [
              "Seleccionar el pròxim procés a entrar a la CPU des de l'estat Ready.",
              "Controlar i admetre el grau absolut de multiprogramació del sistema (de Nou a Ready).",
              "Fer un Swap complet d'un procés bloquejat a disc secundari per falta de RAM."
            ],
            "answer": 1,
            "explanation": "El Job Scheduler (Llarg termini) determina quants i quins programes s'agafen del spool/disc per ser injectats a memòria principal."
          },
          {
            "q": "Quin és l'avantatge primordial del planificador SJF (Shortest Job First)?",
            "options": [
              "És altíssimament segur.",
              "És matemàticament idoni: llança el menor temps MIG d'ESPERA possible combinant tota la cua de Ready en un vector perfecte.",
              "Fàcil implementació real exacte en sistemes domèstics atès conéixer de veritat futurs clars d'un processador."
            ],
            "answer": 1,
            "explanation": "SJF minimitza l'espera mitja col·locant el més ràpid primer, per evitar el comboi. Problema: En veritat NO COMPTE EL FUTUR (usant per tant heurístiques/exp net/est), i genera inanició a tasques llargues."
          },
          {
            "q": "Una evolució: Run → Blocked → Ready... Què causa tìpicament l'anada a Blocked del procés M, i posteriorment el retorn a Ready?",
            "options": [
              "S'ha demanat crear un procés fill // i un context switch posterior.",
              "El quantum del timer ha caducat // i el procés ja s'ha refredat.",
              "M demana llegir un fitxer (Syscall E/S) // l'E/S finalitza i el disc llença interrupció HW de fi."
            ],
            "answer": 2,
            "explanation": "Run a Blocked és voluntari (demano lectura a disc, la CPU va molt ràpida i m'he d'esperar). El disc avisa per HW (interrupció) i el kernel em posa de Blocked a Ready."
          },
          {
            "q": "Què produeix una anomalia 'efecte comboi' (Convoy Effect)?",
            "options": [
              "Un procés molt CPU-intensiu i llarg en un sistema no apropiatiu retarda totalment a processos molt curts darrere seu.",
              "Un dispositiu de xarxa monopolitzant contínuament el DMA sencer de la placa base.",
              "Fer fora de CPU a processos amb alta prioritat per inanició."
            ],
            "answer": 0,
            "explanation": "Sol passar al sistema FCFS (First Come, First Serve) pur on un procés gegant col·lapsa l'arribada rere seu de múltiples processos 'ràpids'."
          },
          {
            "q": "Quines de les següents descripcions representa els 3 estats claus per a cicle de vida operatiu de QUALSEVOL procés bàsic d'un SO?",
            "options": [
              "Paused, Starting i Stopping.",
              "Create, Destroy, Background i Foreground",
              "Run, Ready i Blocked (Suspend o Wait).",
              "Hault, Fetch o Decode operatiu."
            ],
            "answer": 2,
            "explanation": "Els estats centrals a tota CPU Scheduler són RUN (A l'equip processant), READY (Esperant al Planificador) o BLOCKED."
          },
          {
            "q": "(General) Quina és una de les finalitats 39 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 39",
              "Evitar interrupcions",
              "Crear 39 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 21 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 21",
              "Evitar interrupcions",
              "Crear 21 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 35 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 35",
              "Evitar interrupcions",
              "Crear 35 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 14 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 14",
              "Evitar interrupcions",
              "Crear 14 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 38 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 38",
              "Evitar interrupcions",
              "Crear 38 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #12)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 13 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 13",
              "Evitar interrupcions",
              "Crear 13 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Una evolució: Run → Blocked → Ready... Què causa tìpicament l'anada a Blocked del procés M, i posteriorment el retorn a Ready?",
            "options": [
              "S'ha demanat crear un procés fill // i un context switch posterior.",
              "El quantum del timer ha caducat // i el procés ja s'ha refredat.",
              "M demana llegir un fitxer (Syscall E/S) // l'E/S finalitza i el disc llença interrupció HW de fi."
            ],
            "answer": 2,
            "explanation": "Run a Blocked és voluntari (demano lectura a disc, la CPU va molt ràpida i m'he d'esperar). El disc avisa per HW (interrupció) i el kernel em posa de Blocked a Ready."
          },
          {
            "q": "(General) Quina és una de les finalitats 11 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 11",
              "Evitar interrupcions",
              "Crear 11 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quan parlem d'Arquitectura de Microkernel, quina és la seva GRAN fortalesa?",
            "options": [
              "Moltíssim rendiment en comparació amb solucions monolítiques degut a poques interrupcions.",
              "Seguretat i estabilitat: la majoria de subsistemes d'E/S i funcions de SO operen com processos d'usuari aïllats.",
              "Usa zero memòria virtual alhora d'arrancar l'ordindar per estalviar RAM."
            ],
            "answer": 1,
            "explanation": "Aïlla completament els serveis SO a espai usuari. Si el driver de xarxa peta, el sistema no peta."
          },
          {
            "q": "(General) Quina és una de les finalitats 21 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 21",
              "Evitar interrupcions",
              "Crear 21 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quines de les següents descripcions representa els 3 estats claus per a cicle de vida operatiu de QUALSEVOL procés bàsic d'un SO?",
            "options": [
              "Paused, Starting i Stopping.",
              "Create, Destroy, Background i Foreground",
              "Run, Ready i Blocked (Suspend o Wait).",
              "Hault, Fetch o Decode operatiu."
            ],
            "answer": 2,
            "explanation": "Els estats centrals a tota CPU Scheduler són RUN (A l'equip processant), READY (Esperant al Planificador) o BLOCKED."
          },
          {
            "q": "(General) Quina és una de les finalitats 22 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 22",
              "Evitar interrupcions",
              "Crear 22 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "L'estructura del SO 'Mach', precursora de SO com el d'Apple a nivells essencials d'arrel per seguretat va canviar el mercat usant una estructura...",
            "options": [
              "100% Monolítica clàssica tancada de UNIX V",
              "Tipus Arbre de xarxa multinivell descentralitzat de Google i Oracle",
              "Arquitectura Tipus Microkernel de passos missatges IPC",
              "Tipus purament Multi-Procès obert (Hardware SMP only)"
            ],
            "answer": 2,
            "explanation": "Mach va ser un intent fort modern als 80s / 90s per imposar l'arquitectura Microkernel."
          },
          {
            "q": "(General) Quina és una de les finalitats 12 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 12",
              "Evitar interrupcions",
              "Crear 12 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 23 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 23",
              "Evitar interrupcions",
              "Crear 23 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Imagina un planificador que usa Round Robin pur on el quant (quantum) és enorme i tendeix a infinit. A quin altre algorisme s'assemblarà aquest comportament?",
            "options": [
              "SJF (Shortest Job First).",
              "FCFS (First Come, First Served).",
              "Multinivell amb retroalimentació."
            ],
            "answer": 1,
            "explanation": "Si el quantum és infinit, els processos no són apropiats (expulsats) mai pel timer. Entraran per ordre d'arribada i sortiran quan vulguin (FCFS)."
          },
          {
            "q": "(General) Quina és una de les finalitats 18 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 18",
              "Evitar interrupcions",
              "Crear 18 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quina diferencia hi ha entre kernel i sistema operatiu?",
            "options": [
              "No hi ha cap diferencia, presten el mateix propòsit complet.",
              "El kernel controla exclusivament el software i el sistema operatiu el hardware.",
              "El sistema operatiu conté el kernel (nucli pincipal de control hw) a més de les aplicacions/utilitats de sistema.",
              "El kernel no pot executar en mode privilegiat."
            ],
            "answer": 2,
            "explanation": "El Kernel és el nucli d'execució contínua; el SO és el Kernel més tot l'ecosistema d'eines essencials afegides."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #13)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 17 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 17",
              "Evitar interrupcions",
              "Crear 17 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 37 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 37",
              "Evitar interrupcions",
              "Crear 37 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 29 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 29",
              "Evitar interrupcions",
              "Crear 29 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 20 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 20",
              "Evitar interrupcions",
              "Crear 20 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Una evolució: Run → Blocked → Ready... Què causa tìpicament l'anada a Blocked del procés M, i posteriorment el retorn a Ready?",
            "options": [
              "S'ha demanat crear un procés fill // i un context switch posterior.",
              "El quantum del timer ha caducat // i el procés ja s'ha refredat.",
              "M demana llegir un fitxer (Syscall E/S) // l'E/S finalitza i el disc llença interrupció HW de fi."
            ],
            "answer": 2,
            "explanation": "Run a Blocked és voluntari (demano lectura a disc, la CPU va molt ràpida i m'he d'esperar). El disc avisa per HW (interrupció) i el kernel em posa de Blocked a Ready."
          },
          {
            "q": "(General) Quina és una de les finalitats 34 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 34",
              "Evitar interrupcions",
              "Crear 34 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quan parlem d'Arquitectura de Microkernel, quina és la seva GRAN fortalesa?",
            "options": [
              "Moltíssim rendiment en comparació amb solucions monolítiques degut a poques interrupcions.",
              "Seguretat i estabilitat: la majoria de subsistemes d'E/S i funcions de SO operen com processos d'usuari aïllats.",
              "Usa zero memòria virtual alhora d'arrancar l'ordindar per estalviar RAM."
            ],
            "answer": 1,
            "explanation": "Aïlla completament els serveis SO a espai usuari. Si el driver de xarxa peta, el sistema no peta."
          },
          {
            "q": "(General) Quina és una de les finalitats 15 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 15",
              "Evitar interrupcions",
              "Crear 15 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Per a què es fan servir primordialment les interrupcions als dispositius?",
            "options": [
              "Per permetre que els programes d'usuari facin crides de xarxa.",
              "Per a informar al kernel que un dispositiu de hardware ha finalitzat l'operació sol·licitada.",
              "Per permetre que un programa faci E/S directament al disc evitant el kernel."
            ],
            "answer": 1,
            "explanation": "Les interrupcions són mecanismes asíncons hardware que notifiquen al processador d'events."
          },
          {
            "q": "(General) Quina és una de les finalitats 30 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 30",
              "Evitar interrupcions",
              "Crear 30 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 31 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 31",
              "Evitar interrupcions",
              "Crear 31 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #14)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 5 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 5",
              "Evitar interrupcions",
              "Crear 5 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 1 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 1",
              "Evitar interrupcions",
              "Crear 1 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 31 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 31",
              "Evitar interrupcions",
              "Crear 31 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 33 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 33",
              "Evitar interrupcions",
              "Crear 33 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 17 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 17",
              "Evitar interrupcions",
              "Crear 17 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 8 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 8",
              "Evitar interrupcions",
              "Crear 8 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 3 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 3",
              "Evitar interrupcions",
              "Crear 3 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quina tasca TÍPICA està reservada al planificador de LLARG termini (Job Scheduler)?",
            "options": [
              "Seleccionar el pròxim procés a entrar a la CPU des de l'estat Ready.",
              "Controlar i admetre el grau absolut de multiprogramació del sistema (de Nou a Ready).",
              "Fer un Swap complet d'un procés bloquejat a disc secundari per falta de RAM."
            ],
            "answer": 1,
            "explanation": "El Job Scheduler (Llarg termini) determina quants i quins programes s'agafen del spool/disc per ser injectats a memòria principal."
          },
          {
            "q": "(General) Quina és una de les finalitats 20 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 20",
              "Evitar interrupcions",
              "Crear 20 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 7 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 7",
              "Evitar interrupcions",
              "Crear 7 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quin d'aquests sistemes preten donar i aconseguir la *millor productivitat* o eficiència global d'ús màxim (Throughput) de la CPU?",
            "options": [
              "Sistemes de Lots Serials Monoprogramats antics.",
              "Sistemes Multiprogramats no-apropiatius per a treballs.",
              "Programació per Interrupcions de Kernel aillades.",
              "Sistemes Temps Compatit Pur per Interactivitat."
            ],
            "answer": 1,
            "explanation": "Nota: el pur Multiprogramat té millor throughput global perquè no perd tant temps 'context switching'."
          },
          {
            "q": "Quina descripció defineix correctament la finalitat d'una 'crida de sistema' (System Call)?",
            "options": [
              "Gestionar interrupcions dels perifèrics exclusivament hardware.",
              "Proporcionar una interfície segura entre l'espai d'usuari (aplicacions) i l'espai de nucli (kernel).",
              "Assignar espai directe al disc dur sense mediació del sistema operatiu."
            ],
            "answer": 1,
            "explanation": "Les aplicacions no poden tocar hardware o tasques crítiques, han de cridar al kernel mitjançant Syscalls (open, read, fork...)."
          },
          {
            "q": "(General) Quina és una de les finalitats 34 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 34",
              "Evitar interrupcions",
              "Crear 34 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #15)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 3 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 3",
              "Evitar interrupcions",
              "Crear 3 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 13 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 13",
              "Evitar interrupcions",
              "Crear 13 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Què produeix una anomalia 'efecte comboi' (Convoy Effect)?",
            "options": [
              "Un procés molt CPU-intensiu i llarg en un sistema no apropiatiu retarda totalment a processos molt curts darrere seu.",
              "Un dispositiu de xarxa monopolitzant contínuament el DMA sencer de la placa base.",
              "Fer fora de CPU a processos amb alta prioritat per inanició."
            ],
            "answer": 0,
            "explanation": "Sol passar al sistema FCFS (First Come, First Serve) pur on un procés gegant col·lapsa l'arribada rere seu de múltiples processos 'ràpids'."
          },
          {
            "q": "(General) Quina és una de les finalitats 18 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 18",
              "Evitar interrupcions",
              "Crear 18 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 37 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 37",
              "Evitar interrupcions",
              "Crear 37 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 11 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 11",
              "Evitar interrupcions",
              "Crear 11 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Una evolució: Run → Blocked → Ready... Què causa tìpicament l'anada a Blocked del procés M, i posteriorment el retorn a Ready?",
            "options": [
              "S'ha demanat crear un procés fill // i un context switch posterior.",
              "El quantum del timer ha caducat // i el procés ja s'ha refredat.",
              "M demana llegir un fitxer (Syscall E/S) // l'E/S finalitza i el disc llença interrupció HW de fi."
            ],
            "answer": 2,
            "explanation": "Run a Blocked és voluntari (demano lectura a disc, la CPU va molt ràpida i m'he d'esperar). El disc avisa per HW (interrupció) i el kernel em posa de Blocked a Ready."
          },
          {
            "q": "(General) Quina és una de les finalitats 31 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 31",
              "Evitar interrupcions",
              "Crear 31 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quina diferencia hi ha entre kernel i sistema operatiu?",
            "options": [
              "No hi ha cap diferencia, presten el mateix propòsit complet.",
              "El kernel controla exclusivament el software i el sistema operatiu el hardware.",
              "El sistema operatiu conté el kernel (nucli pincipal de control hw) a més de les aplicacions/utilitats de sistema.",
              "El kernel no pot executar en mode privilegiat."
            ],
            "answer": 2,
            "explanation": "El Kernel és el nucli d'execució contínua; el SO és el Kernel més tot l'ecosistema d'eines essencials afegides."
          },
          {
            "q": "(General) Quina és una de les finalitats 9 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 9",
              "Evitar interrupcions",
              "Crear 9 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 28 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 28",
              "Evitar interrupcions",
              "Crear 28 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quina tasca TÍPICA està reservada al planificador de LLARG termini (Job Scheduler)?",
            "options": [
              "Seleccionar el pròxim procés a entrar a la CPU des de l'estat Ready.",
              "Controlar i admetre el grau absolut de multiprogramació del sistema (de Nou a Ready).",
              "Fer un Swap complet d'un procés bloquejat a disc secundari per falta de RAM."
            ],
            "answer": 1,
            "explanation": "El Job Scheduler (Llarg termini) determina quants i quins programes s'agafen del spool/disc per ser injectats a memòria principal."
          },
          {
            "q": "(General) Quina és una de les finalitats 17 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 17",
              "Evitar interrupcions",
              "Crear 17 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #16)",
        "questions": [
          {
            "q": "En un Planificador típic d'E/S o OS; A qui o a què té per tàrea el 'planificador de mig termini'?",
            "options": [
              "Garantizar que els PIDs s'assignin per ordre pur seqüencial estricte de naixement del kernel.",
              "Decidir quan s'ha de treure temporalment tros/parts o el procés sencer de la memòria a disc (swapping) per gestionar hiper-saturació.",
              "Decidir exclusivament el pròxim procés a passar d'estat READY a RUN abans de temps llargs estancat."
            ],
            "answer": 1,
            "explanation": "The medium terms resolves virtual memory problems moving suspended blocks by SWAPPING them continuously to backend Storage drives temporarily."
          },
          {
            "q": "(General) Quina és una de les finalitats 27 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 27",
              "Evitar interrupcions",
              "Crear 27 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 26 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 26",
              "Evitar interrupcions",
              "Crear 26 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quina descripció defineix correctament la finalitat d'una 'crida de sistema' (System Call)?",
            "options": [
              "Gestionar interrupcions dels perifèrics exclusivament hardware.",
              "Proporcionar una interfície segura entre l'espai d'usuari (aplicacions) i l'espai de nucli (kernel).",
              "Assignar espai directe al disc dur sense mediació del sistema operatiu."
            ],
            "answer": 1,
            "explanation": "Les aplicacions no poden tocar hardware o tasques crítiques, han de cridar al kernel mitjançant Syscalls (open, read, fork...)."
          },
          {
            "q": "(General) Quina és una de les finalitats 17 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 17",
              "Evitar interrupcions",
              "Crear 17 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quina tasca TÍPICA està reservada al planificador de LLARG termini (Job Scheduler)?",
            "options": [
              "Seleccionar el pròxim procés a entrar a la CPU des de l'estat Ready.",
              "Controlar i admetre el grau absolut de multiprogramació del sistema (de Nou a Ready).",
              "Fer un Swap complet d'un procés bloquejat a disc secundari per falta de RAM."
            ],
            "answer": 1,
            "explanation": "El Job Scheduler (Llarg termini) determina quants i quins programes s'agafen del spool/disc per ser injectats a memòria principal."
          },
          {
            "q": "(General) Quina és una de les finalitats 4 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 4",
              "Evitar interrupcions",
              "Crear 4 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quina diferencia hi ha entre kernel i sistema operatiu?",
            "options": [
              "No hi ha cap diferencia, presten el mateix propòsit complet.",
              "El kernel controla exclusivament el software i el sistema operatiu el hardware.",
              "El sistema operatiu conté el kernel (nucli pincipal de control hw) a més de les aplicacions/utilitats de sistema.",
              "El kernel no pot executar en mode privilegiat."
            ],
            "answer": 2,
            "explanation": "El Kernel és el nucli d'execució contínua; el SO és el Kernel més tot l'ecosistema d'eines essencials afegides."
          },
          {
            "q": "(General) Quina és una de les finalitats 18 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 18",
              "Evitar interrupcions",
              "Crear 18 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quin d'aquests sistemes preten donar i aconseguir la *millor productivitat* o eficiència global d'ús màxim (Throughput) de la CPU?",
            "options": [
              "Sistemes de Lots Serials Monoprogramats antics.",
              "Sistemes Multiprogramats no-apropiatius per a treballs.",
              "Programació per Interrupcions de Kernel aillades.",
              "Sistemes Temps Compatit Pur per Interactivitat."
            ],
            "answer": 1,
            "explanation": "Nota: el pur Multiprogramat té millor throughput global perquè no perd tant temps 'context switching'."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #17)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 0 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 0",
              "Evitar interrupcions",
              "Crear 0 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 18 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 18",
              "Evitar interrupcions",
              "Crear 18 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 17 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 17",
              "Evitar interrupcions",
              "Crear 17 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 4 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 4",
              "Evitar interrupcions",
              "Crear 4 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 31 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 31",
              "Evitar interrupcions",
              "Crear 31 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 28 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 28",
              "Evitar interrupcions",
              "Crear 28 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Per a què es fan servir primordialment les interrupcions als dispositius?",
            "options": [
              "Per permetre que els programes d'usuari facin crides de xarxa.",
              "Per a informar al kernel que un dispositiu de hardware ha finalitzat l'operació sol·licitada.",
              "Per permetre que un programa faci E/S directament al disc evitant el kernel."
            ],
            "answer": 1,
            "explanation": "Les interrupcions són mecanismes asíncons hardware que notifiquen al processador d'events."
          },
          {
            "q": "(General) Quina és una de les finalitats 39 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 39",
              "Evitar interrupcions",
              "Crear 39 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quin d'aquests sistemes preten donar i aconseguir la *millor productivitat* o eficiència global d'ús màxim (Throughput) de la CPU?",
            "options": [
              "Sistemes de Lots Serials Monoprogramats antics.",
              "Sistemes Multiprogramats no-apropiatius per a treballs.",
              "Programació per Interrupcions de Kernel aillades.",
              "Sistemes Temps Compatit Pur per Interactivitat."
            ],
            "answer": 1,
            "explanation": "Nota: el pur Multiprogramat té millor throughput global perquè no perd tant temps 'context switching'."
          },
          {
            "q": "(General) Quina és una de les finalitats 29 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 29",
              "Evitar interrupcions",
              "Crear 29 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 33 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 33",
              "Evitar interrupcions",
              "Crear 33 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #18)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 25 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 25",
              "Evitar interrupcions",
              "Crear 25 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quina tasca TÍPICA està reservada al planificador de LLARG termini (Job Scheduler)?",
            "options": [
              "Seleccionar el pròxim procés a entrar a la CPU des de l'estat Ready.",
              "Controlar i admetre el grau absolut de multiprogramació del sistema (de Nou a Ready).",
              "Fer un Swap complet d'un procés bloquejat a disc secundari per falta de RAM."
            ],
            "answer": 1,
            "explanation": "El Job Scheduler (Llarg termini) determina quants i quins programes s'agafen del spool/disc per ser injectats a memòria principal."
          },
          {
            "q": "(General) Quina és una de les finalitats 12 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 12",
              "Evitar interrupcions",
              "Crear 12 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 27 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 27",
              "Evitar interrupcions",
              "Crear 27 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "En un Planificador típic d'E/S o OS; A qui o a què té per tàrea el 'planificador de mig termini'?",
            "options": [
              "Garantizar que els PIDs s'assignin per ordre pur seqüencial estricte de naixement del kernel.",
              "Decidir quan s'ha de treure temporalment tros/parts o el procés sencer de la memòria a disc (swapping) per gestionar hiper-saturació.",
              "Decidir exclusivament el pròxim procés a passar d'estat READY a RUN abans de temps llargs estancat."
            ],
            "answer": 1,
            "explanation": "The medium terms resolves virtual memory problems moving suspended blocks by SWAPPING them continuously to backend Storage drives temporarily."
          },
          {
            "q": "Quin és l'avantatge primordial del planificador SJF (Shortest Job First)?",
            "options": [
              "És altíssimament segur.",
              "És matemàticament idoni: llança el menor temps MIG d'ESPERA possible combinant tota la cua de Ready en un vector perfecte.",
              "Fàcil implementació real exacte en sistemes domèstics atès conéixer de veritat futurs clars d'un processador."
            ],
            "answer": 1,
            "explanation": "SJF minimitza l'espera mitja col·locant el més ràpid primer, per evitar el comboi. Problema: En veritat NO COMPTE EL FUTUR (usant per tant heurístiques/exp net/est), i genera inanició a tasques llargues."
          },
          {
            "q": "(General) Quina és una de les finalitats 34 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 34",
              "Evitar interrupcions",
              "Crear 34 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 39 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 39",
              "Evitar interrupcions",
              "Crear 39 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 37 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 37",
              "Evitar interrupcions",
              "Crear 37 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 2 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 2",
              "Evitar interrupcions",
              "Crear 2 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 32 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 32",
              "Evitar interrupcions",
              "Crear 32 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 31 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 31",
              "Evitar interrupcions",
              "Crear 31 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 38 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 38",
              "Evitar interrupcions",
              "Crear 38 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #19)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 22 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 22",
              "Evitar interrupcions",
              "Crear 22 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 11 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 11",
              "Evitar interrupcions",
              "Crear 11 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 17 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 17",
              "Evitar interrupcions",
              "Crear 17 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 29 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 29",
              "Evitar interrupcions",
              "Crear 29 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 39 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 39",
              "Evitar interrupcions",
              "Crear 39 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quina tasca TÍPICA està reservada al planificador de LLARG termini (Job Scheduler)?",
            "options": [
              "Seleccionar el pròxim procés a entrar a la CPU des de l'estat Ready.",
              "Controlar i admetre el grau absolut de multiprogramació del sistema (de Nou a Ready).",
              "Fer un Swap complet d'un procés bloquejat a disc secundari per falta de RAM."
            ],
            "answer": 1,
            "explanation": "El Job Scheduler (Llarg termini) determina quants i quins programes s'agafen del spool/disc per ser injectats a memòria principal."
          },
          {
            "q": "(General) Quina és una de les finalitats 16 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 16",
              "Evitar interrupcions",
              "Crear 16 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 38 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 38",
              "Evitar interrupcions",
              "Crear 38 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 15 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 15",
              "Evitar interrupcions",
              "Crear 15 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "En un Planificador típic d'E/S o OS; A qui o a què té per tàrea el 'planificador de mig termini'?",
            "options": [
              "Garantizar que els PIDs s'assignin per ordre pur seqüencial estricte de naixement del kernel.",
              "Decidir quan s'ha de treure temporalment tros/parts o el procés sencer de la memòria a disc (swapping) per gestionar hiper-saturació.",
              "Decidir exclusivament el pròxim procés a passar d'estat READY a RUN abans de temps llargs estancat."
            ],
            "answer": 1,
            "explanation": "The medium terms resolves virtual memory problems moving suspended blocks by SWAPPING them continuously to backend Storage drives temporarily."
          },
          {
            "q": "Imagina un planificador que usa Round Robin pur on el quant (quantum) és enorme i tendeix a infinit. A quin altre algorisme s'assemblarà aquest comportament?",
            "options": [
              "SJF (Shortest Job First).",
              "FCFS (First Come, First Served).",
              "Multinivell amb retroalimentació."
            ],
            "answer": 1,
            "explanation": "Si el quantum és infinit, els processos no són apropiats (expulsats) mai pel timer. Entraran per ordre d'arribada i sortiran quan vulguin (FCFS)."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #20)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 12 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 12",
              "Evitar interrupcions",
              "Crear 12 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quin d'aquests sistemes preten donar i aconseguir la *millor productivitat* o eficiència global d'ús màxim (Throughput) de la CPU?",
            "options": [
              "Sistemes de Lots Serials Monoprogramats antics.",
              "Sistemes Multiprogramats no-apropiatius per a treballs.",
              "Programació per Interrupcions de Kernel aillades.",
              "Sistemes Temps Compatit Pur per Interactivitat."
            ],
            "answer": 1,
            "explanation": "Nota: el pur Multiprogramat té millor throughput global perquè no perd tant temps 'context switching'."
          },
          {
            "q": "(General) Quina és una de les finalitats 2 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 2",
              "Evitar interrupcions",
              "Crear 2 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 25 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 25",
              "Evitar interrupcions",
              "Crear 25 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Imagina un planificador que usa Round Robin pur on el quant (quantum) és enorme i tendeix a infinit. A quin altre algorisme s'assemblarà aquest comportament?",
            "options": [
              "SJF (Shortest Job First).",
              "FCFS (First Come, First Served).",
              "Multinivell amb retroalimentació."
            ],
            "answer": 1,
            "explanation": "Si el quantum és infinit, els processos no són apropiats (expulsats) mai pel timer. Entraran per ordre d'arribada i sortiran quan vulguin (FCFS)."
          },
          {
            "q": "Quin és l'avantatge primordial del planificador SJF (Shortest Job First)?",
            "options": [
              "És altíssimament segur.",
              "És matemàticament idoni: llança el menor temps MIG d'ESPERA possible combinant tota la cua de Ready en un vector perfecte.",
              "Fàcil implementació real exacte en sistemes domèstics atès conéixer de veritat futurs clars d'un processador."
            ],
            "answer": 1,
            "explanation": "SJF minimitza l'espera mitja col·locant el més ràpid primer, per evitar el comboi. Problema: En veritat NO COMPTE EL FUTUR (usant per tant heurístiques/exp net/est), i genera inanició a tasques llargues."
          },
          {
            "q": "(General) Quina és una de les finalitats 18 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 18",
              "Evitar interrupcions",
              "Crear 18 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "En un Planificador típic d'E/S o OS; A qui o a què té per tàrea el 'planificador de mig termini'?",
            "options": [
              "Garantizar que els PIDs s'assignin per ordre pur seqüencial estricte de naixement del kernel.",
              "Decidir quan s'ha de treure temporalment tros/parts o el procés sencer de la memòria a disc (swapping) per gestionar hiper-saturació.",
              "Decidir exclusivament el pròxim procés a passar d'estat READY a RUN abans de temps llargs estancat."
            ],
            "answer": 1,
            "explanation": "The medium terms resolves virtual memory problems moving suspended blocks by SWAPPING them continuously to backend Storage drives temporarily."
          },
          {
            "q": "(General) Quina és una de les finalitats 10 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 10",
              "Evitar interrupcions",
              "Crear 10 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 17 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 17",
              "Evitar interrupcions",
              "Crear 17 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 27 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 27",
              "Evitar interrupcions",
              "Crear 27 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #21)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 6 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 6",
              "Evitar interrupcions",
              "Crear 6 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 10 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 10",
              "Evitar interrupcions",
              "Crear 10 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 11 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 11",
              "Evitar interrupcions",
              "Crear 11 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 5 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 5",
              "Evitar interrupcions",
              "Crear 5 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 21 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 21",
              "Evitar interrupcions",
              "Crear 21 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quina tasca TÍPICA està reservada al planificador de LLARG termini (Job Scheduler)?",
            "options": [
              "Seleccionar el pròxim procés a entrar a la CPU des de l'estat Ready.",
              "Controlar i admetre el grau absolut de multiprogramació del sistema (de Nou a Ready).",
              "Fer un Swap complet d'un procés bloquejat a disc secundari per falta de RAM."
            ],
            "answer": 1,
            "explanation": "El Job Scheduler (Llarg termini) determina quants i quins programes s'agafen del spool/disc per ser injectats a memòria principal."
          },
          {
            "q": "(General) Quina és una de les finalitats 2 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 2",
              "Evitar interrupcions",
              "Crear 2 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "L'estructura del SO 'Mach', precursora de SO com el d'Apple a nivells essencials d'arrel per seguretat va canviar el mercat usant una estructura...",
            "options": [
              "100% Monolítica clàssica tancada de UNIX V",
              "Tipus Arbre de xarxa multinivell descentralitzat de Google i Oracle",
              "Arquitectura Tipus Microkernel de passos missatges IPC",
              "Tipus purament Multi-Procès obert (Hardware SMP only)"
            ],
            "answer": 2,
            "explanation": "Mach va ser un intent fort modern als 80s / 90s per imposar l'arquitectura Microkernel."
          },
          {
            "q": "(General) Quina és una de les finalitats 17 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 17",
              "Evitar interrupcions",
              "Crear 17 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 15 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 15",
              "Evitar interrupcions",
              "Crear 15 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 34 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 34",
              "Evitar interrupcions",
              "Crear 34 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Per a què es fan servir primordialment les interrupcions als dispositius?",
            "options": [
              "Per permetre que els programes d'usuari facin crides de xarxa.",
              "Per a informar al kernel que un dispositiu de hardware ha finalitzat l'operació sol·licitada.",
              "Per permetre que un programa faci E/S directament al disc evitant el kernel."
            ],
            "answer": 1,
            "explanation": "Les interrupcions són mecanismes asíncons hardware que notifiquen al processador d'events."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #22)",
        "questions": [
          {
            "q": "Què produeix una anomalia 'efecte comboi' (Convoy Effect)?",
            "options": [
              "Un procés molt CPU-intensiu i llarg en un sistema no apropiatiu retarda totalment a processos molt curts darrere seu.",
              "Un dispositiu de xarxa monopolitzant contínuament el DMA sencer de la placa base.",
              "Fer fora de CPU a processos amb alta prioritat per inanició."
            ],
            "answer": 0,
            "explanation": "Sol passar al sistema FCFS (First Come, First Serve) pur on un procés gegant col·lapsa l'arribada rere seu de múltiples processos 'ràpids'."
          },
          {
            "q": "Quin és l'avantatge primordial del planificador SJF (Shortest Job First)?",
            "options": [
              "És altíssimament segur.",
              "És matemàticament idoni: llança el menor temps MIG d'ESPERA possible combinant tota la cua de Ready en un vector perfecte.",
              "Fàcil implementació real exacte en sistemes domèstics atès conéixer de veritat futurs clars d'un processador."
            ],
            "answer": 1,
            "explanation": "SJF minimitza l'espera mitja col·locant el més ràpid primer, per evitar el comboi. Problema: En veritat NO COMPTE EL FUTUR (usant per tant heurístiques/exp net/est), i genera inanició a tasques llargues."
          },
          {
            "q": "(General) Quina és una de les finalitats 17 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 17",
              "Evitar interrupcions",
              "Crear 17 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quines de les següents descripcions representa els 3 estats claus per a cicle de vida operatiu de QUALSEVOL procés bàsic d'un SO?",
            "options": [
              "Paused, Starting i Stopping.",
              "Create, Destroy, Background i Foreground",
              "Run, Ready i Blocked (Suspend o Wait).",
              "Hault, Fetch o Decode operatiu."
            ],
            "answer": 2,
            "explanation": "Els estats centrals a tota CPU Scheduler són RUN (A l'equip processant), READY (Esperant al Planificador) o BLOCKED."
          },
          {
            "q": "(General) Quina és una de les finalitats 14 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 14",
              "Evitar interrupcions",
              "Crear 14 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 4 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 4",
              "Evitar interrupcions",
              "Crear 4 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Imagina un planificador que usa Round Robin pur on el quant (quantum) és enorme i tendeix a infinit. A quin altre algorisme s'assemblarà aquest comportament?",
            "options": [
              "SJF (Shortest Job First).",
              "FCFS (First Come, First Served).",
              "Multinivell amb retroalimentació."
            ],
            "answer": 1,
            "explanation": "Si el quantum és infinit, els processos no són apropiats (expulsats) mai pel timer. Entraran per ordre d'arribada i sortiran quan vulguin (FCFS)."
          },
          {
            "q": "(General) Quina és una de les finalitats 21 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 21",
              "Evitar interrupcions",
              "Crear 21 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Que permet fer la tècnica de DMA (Direct Memory Access)?",
            "options": [
              "Permet establir accés directe entre discs compartits per varies CPUs de forma paralela.",
              "Permet l'assignació indirecta d'adreces virtuals de disc pur a la CPU.",
              "Permet fer transferències complexes i grans blocs d'informació entre disc o dispositius E/S i la RAM sense usar temps contínu de la CPU."
            ],
            "answer": 2,
            "explanation": "El DMA s'apropia del bus i escriu els blocs de Bytes d'E/S directament a la RAM. La CPU pot fer altres tasques mentrestant."
          },
          {
            "q": "(General) Quina és una de les finalitats 8 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 8",
              "Evitar interrupcions",
              "Crear 8 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 39 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 39",
              "Evitar interrupcions",
              "Crear 39 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #23)",
        "questions": [
          {
            "q": "Quan parlem d'Arquitectura de Microkernel, quina és la seva GRAN fortalesa?",
            "options": [
              "Moltíssim rendiment en comparació amb solucions monolítiques degut a poques interrupcions.",
              "Seguretat i estabilitat: la majoria de subsistemes d'E/S i funcions de SO operen com processos d'usuari aïllats.",
              "Usa zero memòria virtual alhora d'arrancar l'ordindar per estalviar RAM."
            ],
            "answer": 1,
            "explanation": "Aïlla completament els serveis SO a espai usuari. Si el driver de xarxa peta, el sistema no peta."
          },
          {
            "q": "(General) Quina és una de les finalitats 19 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 19",
              "Evitar interrupcions",
              "Crear 19 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 8 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 8",
              "Evitar interrupcions",
              "Crear 8 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 1 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 1",
              "Evitar interrupcions",
              "Crear 1 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Imagina un planificador que usa Round Robin pur on el quant (quantum) és enorme i tendeix a infinit. A quin altre algorisme s'assemblarà aquest comportament?",
            "options": [
              "SJF (Shortest Job First).",
              "FCFS (First Come, First Served).",
              "Multinivell amb retroalimentació."
            ],
            "answer": 1,
            "explanation": "Si el quantum és infinit, els processos no són apropiats (expulsats) mai pel timer. Entraran per ordre d'arribada i sortiran quan vulguin (FCFS)."
          },
          {
            "q": "(General) Quina és una de les finalitats 11 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 11",
              "Evitar interrupcions",
              "Crear 11 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 23 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 23",
              "Evitar interrupcions",
              "Crear 23 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 17 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 17",
              "Evitar interrupcions",
              "Crear 17 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 10 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 10",
              "Evitar interrupcions",
              "Crear 10 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 32 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 32",
              "Evitar interrupcions",
              "Crear 32 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 16 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 16",
              "Evitar interrupcions",
              "Crear 16 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 38 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 38",
              "Evitar interrupcions",
              "Crear 38 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Que permet fer la tècnica de DMA (Direct Memory Access)?",
            "options": [
              "Permet establir accés directe entre discs compartits per varies CPUs de forma paralela.",
              "Permet l'assignació indirecta d'adreces virtuals de disc pur a la CPU.",
              "Permet fer transferències complexes i grans blocs d'informació entre disc o dispositius E/S i la RAM sense usar temps contínu de la CPU."
            ],
            "answer": 2,
            "explanation": "El DMA s'apropia del bus i escriu els blocs de Bytes d'E/S directament a la RAM. La CPU pot fer altres tasques mentrestant."
          },
          {
            "q": "(General) Quina és una de les finalitats 4 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 4",
              "Evitar interrupcions",
              "Crear 4 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #24)",
        "questions": [
          {
            "q": "Per a què es fan servir primordialment les interrupcions als dispositius?",
            "options": [
              "Per permetre que els programes d'usuari facin crides de xarxa.",
              "Per a informar al kernel que un dispositiu de hardware ha finalitzat l'operació sol·licitada.",
              "Per permetre que un programa faci E/S directament al disc evitant el kernel."
            ],
            "answer": 1,
            "explanation": "Les interrupcions són mecanismes asíncons hardware que notifiquen al processador d'events."
          },
          {
            "q": "En un Planificador típic d'E/S o OS; A qui o a què té per tàrea el 'planificador de mig termini'?",
            "options": [
              "Garantizar que els PIDs s'assignin per ordre pur seqüencial estricte de naixement del kernel.",
              "Decidir quan s'ha de treure temporalment tros/parts o el procés sencer de la memòria a disc (swapping) per gestionar hiper-saturació.",
              "Decidir exclusivament el pròxim procés a passar d'estat READY a RUN abans de temps llargs estancat."
            ],
            "answer": 1,
            "explanation": "The medium terms resolves virtual memory problems moving suspended blocks by SWAPPING them continuously to backend Storage drives temporarily."
          },
          {
            "q": "(General) Quina és una de les finalitats 9 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 9",
              "Evitar interrupcions",
              "Crear 9 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 15 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 15",
              "Evitar interrupcions",
              "Crear 15 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 32 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 32",
              "Evitar interrupcions",
              "Crear 32 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 7 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 7",
              "Evitar interrupcions",
              "Crear 7 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 30 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 30",
              "Evitar interrupcions",
              "Crear 30 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Imagina un planificador que usa Round Robin pur on el quant (quantum) és enorme i tendeix a infinit. A quin altre algorisme s'assemblarà aquest comportament?",
            "options": [
              "SJF (Shortest Job First).",
              "FCFS (First Come, First Served).",
              "Multinivell amb retroalimentació."
            ],
            "answer": 1,
            "explanation": "Si el quantum és infinit, els processos no són apropiats (expulsats) mai pel timer. Entraran per ordre d'arribada i sortiran quan vulguin (FCFS)."
          },
          {
            "q": "(General) Quina és una de les finalitats 31 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 31",
              "Evitar interrupcions",
              "Crear 31 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quines de les següents descripcions representa els 3 estats claus per a cicle de vida operatiu de QUALSEVOL procés bàsic d'un SO?",
            "options": [
              "Paused, Starting i Stopping.",
              "Create, Destroy, Background i Foreground",
              "Run, Ready i Blocked (Suspend o Wait).",
              "Hault, Fetch o Decode operatiu."
            ],
            "answer": 2,
            "explanation": "Els estats centrals a tota CPU Scheduler són RUN (A l'equip processant), READY (Esperant al Planificador) o BLOCKED."
          },
          {
            "q": "(General) Quina és una de les finalitats 10 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 10",
              "Evitar interrupcions",
              "Crear 10 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "L'estructura del SO 'Mach', precursora de SO com el d'Apple a nivells essencials d'arrel per seguretat va canviar el mercat usant una estructura...",
            "options": [
              "100% Monolítica clàssica tancada de UNIX V",
              "Tipus Arbre de xarxa multinivell descentralitzat de Google i Oracle",
              "Arquitectura Tipus Microkernel de passos missatges IPC",
              "Tipus purament Multi-Procès obert (Hardware SMP only)"
            ],
            "answer": 2,
            "explanation": "Mach va ser un intent fort modern als 80s / 90s per imposar l'arquitectura Microkernel."
          },
          {
            "q": "(General) Quina és una de les finalitats 36 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 36",
              "Evitar interrupcions",
              "Crear 36 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quina diferencia hi ha entre kernel i sistema operatiu?",
            "options": [
              "No hi ha cap diferencia, presten el mateix propòsit complet.",
              "El kernel controla exclusivament el software i el sistema operatiu el hardware.",
              "El sistema operatiu conté el kernel (nucli pincipal de control hw) a més de les aplicacions/utilitats de sistema.",
              "El kernel no pot executar en mode privilegiat."
            ],
            "answer": 2,
            "explanation": "El Kernel és el nucli d'execució contínua; el SO és el Kernel més tot l'ecosistema d'eines essencials afegides."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #25)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 28 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 28",
              "Evitar interrupcions",
              "Crear 28 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 35 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 35",
              "Evitar interrupcions",
              "Crear 35 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 26 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 26",
              "Evitar interrupcions",
              "Crear 26 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 33 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 33",
              "Evitar interrupcions",
              "Crear 33 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 9 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 9",
              "Evitar interrupcions",
              "Crear 9 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 7 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 7",
              "Evitar interrupcions",
              "Crear 7 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 34 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 34",
              "Evitar interrupcions",
              "Crear 34 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 18 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 18",
              "Evitar interrupcions",
              "Crear 18 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "L'estructura del SO 'Mach', precursora de SO com el d'Apple a nivells essencials d'arrel per seguretat va canviar el mercat usant una estructura...",
            "options": [
              "100% Monolítica clàssica tancada de UNIX V",
              "Tipus Arbre de xarxa multinivell descentralitzat de Google i Oracle",
              "Arquitectura Tipus Microkernel de passos missatges IPC",
              "Tipus purament Multi-Procès obert (Hardware SMP only)"
            ],
            "answer": 2,
            "explanation": "Mach va ser un intent fort modern als 80s / 90s per imposar l'arquitectura Microkernel."
          },
          {
            "q": "Quan parlem d'Arquitectura de Microkernel, quina és la seva GRAN fortalesa?",
            "options": [
              "Moltíssim rendiment en comparació amb solucions monolítiques degut a poques interrupcions.",
              "Seguretat i estabilitat: la majoria de subsistemes d'E/S i funcions de SO operen com processos d'usuari aïllats.",
              "Usa zero memòria virtual alhora d'arrancar l'ordindar per estalviar RAM."
            ],
            "answer": 1,
            "explanation": "Aïlla completament els serveis SO a espai usuari. Si el driver de xarxa peta, el sistema no peta."
          },
          {
            "q": "(General) Quina és una de les finalitats 3 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 3",
              "Evitar interrupcions",
              "Crear 3 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 27 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 27",
              "Evitar interrupcions",
              "Crear 27 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 25 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 25",
              "Evitar interrupcions",
              "Crear 25 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #26)",
        "questions": [
          {
            "q": "Per a què es fan servir primordialment les interrupcions als dispositius?",
            "options": [
              "Per permetre que els programes d'usuari facin crides de xarxa.",
              "Per a informar al kernel que un dispositiu de hardware ha finalitzat l'operació sol·licitada.",
              "Per permetre que un programa faci E/S directament al disc evitant el kernel."
            ],
            "answer": 1,
            "explanation": "Les interrupcions són mecanismes asíncons hardware que notifiquen al processador d'events."
          },
          {
            "q": "(General) Quina és una de les finalitats 28 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 28",
              "Evitar interrupcions",
              "Crear 28 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 7 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 7",
              "Evitar interrupcions",
              "Crear 7 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quines de les següents descripcions representa els 3 estats claus per a cicle de vida operatiu de QUALSEVOL procés bàsic d'un SO?",
            "options": [
              "Paused, Starting i Stopping.",
              "Create, Destroy, Background i Foreground",
              "Run, Ready i Blocked (Suspend o Wait).",
              "Hault, Fetch o Decode operatiu."
            ],
            "answer": 2,
            "explanation": "Els estats centrals a tota CPU Scheduler són RUN (A l'equip processant), READY (Esperant al Planificador) o BLOCKED."
          },
          {
            "q": "(General) Quina és una de les finalitats 3 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 3",
              "Evitar interrupcions",
              "Crear 3 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 25 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 25",
              "Evitar interrupcions",
              "Crear 25 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 21 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 21",
              "Evitar interrupcions",
              "Crear 21 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 23 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 23",
              "Evitar interrupcions",
              "Crear 23 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 33 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 33",
              "Evitar interrupcions",
              "Crear 33 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 32 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 32",
              "Evitar interrupcions",
              "Crear 32 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 10 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 10",
              "Evitar interrupcions",
              "Crear 10 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 38 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 38",
              "Evitar interrupcions",
              "Crear 38 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 11 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 11",
              "Evitar interrupcions",
              "Crear 11 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #27)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 38 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 38",
              "Evitar interrupcions",
              "Crear 38 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 4 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 4",
              "Evitar interrupcions",
              "Crear 4 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 32 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 32",
              "Evitar interrupcions",
              "Crear 32 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Per a què es fan servir primordialment les interrupcions als dispositius?",
            "options": [
              "Per permetre que els programes d'usuari facin crides de xarxa.",
              "Per a informar al kernel que un dispositiu de hardware ha finalitzat l'operació sol·licitada.",
              "Per permetre que un programa faci E/S directament al disc evitant el kernel."
            ],
            "answer": 1,
            "explanation": "Les interrupcions són mecanismes asíncons hardware que notifiquen al processador d'events."
          },
          {
            "q": "(General) Quina és una de les finalitats 19 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 19",
              "Evitar interrupcions",
              "Crear 19 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 39 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 39",
              "Evitar interrupcions",
              "Crear 39 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Una evolució: Run → Blocked → Ready... Què causa tìpicament l'anada a Blocked del procés M, i posteriorment el retorn a Ready?",
            "options": [
              "S'ha demanat crear un procés fill // i un context switch posterior.",
              "El quantum del timer ha caducat // i el procés ja s'ha refredat.",
              "M demana llegir un fitxer (Syscall E/S) // l'E/S finalitza i el disc llença interrupció HW de fi."
            ],
            "answer": 2,
            "explanation": "Run a Blocked és voluntari (demano lectura a disc, la CPU va molt ràpida i m'he d'esperar). El disc avisa per HW (interrupció) i el kernel em posa de Blocked a Ready."
          },
          {
            "q": "(General) Quina és una de les finalitats 33 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 33",
              "Evitar interrupcions",
              "Crear 33 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 8 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 8",
              "Evitar interrupcions",
              "Crear 8 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 20 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 20",
              "Evitar interrupcions",
              "Crear 20 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quines de les següents descripcions representa els 3 estats claus per a cicle de vida operatiu de QUALSEVOL procés bàsic d'un SO?",
            "options": [
              "Paused, Starting i Stopping.",
              "Create, Destroy, Background i Foreground",
              "Run, Ready i Blocked (Suspend o Wait).",
              "Hault, Fetch o Decode operatiu."
            ],
            "answer": 2,
            "explanation": "Els estats centrals a tota CPU Scheduler són RUN (A l'equip processant), READY (Esperant al Planificador) o BLOCKED."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #28)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 25 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 25",
              "Evitar interrupcions",
              "Crear 25 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 18 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 18",
              "Evitar interrupcions",
              "Crear 18 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 20 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 20",
              "Evitar interrupcions",
              "Crear 20 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 10 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 10",
              "Evitar interrupcions",
              "Crear 10 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 32 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 32",
              "Evitar interrupcions",
              "Crear 32 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 7 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 7",
              "Evitar interrupcions",
              "Crear 7 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 21 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 21",
              "Evitar interrupcions",
              "Crear 21 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 38 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 38",
              "Evitar interrupcions",
              "Crear 38 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 37 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 37",
              "Evitar interrupcions",
              "Crear 37 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 6 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 6",
              "Evitar interrupcions",
              "Crear 6 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 0 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 0",
              "Evitar interrupcions",
              "Crear 0 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quina diferencia hi ha entre kernel i sistema operatiu?",
            "options": [
              "No hi ha cap diferencia, presten el mateix propòsit complet.",
              "El kernel controla exclusivament el software i el sistema operatiu el hardware.",
              "El sistema operatiu conté el kernel (nucli pincipal de control hw) a més de les aplicacions/utilitats de sistema.",
              "El kernel no pot executar en mode privilegiat."
            ],
            "answer": 2,
            "explanation": "El Kernel és el nucli d'execució contínua; el SO és el Kernel més tot l'ecosistema d'eines essencials afegides."
          },
          {
            "q": "(General) Quina és una de les finalitats 34 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 34",
              "Evitar interrupcions",
              "Crear 34 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #29)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 38 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 38",
              "Evitar interrupcions",
              "Crear 38 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 3 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 3",
              "Evitar interrupcions",
              "Crear 3 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 20 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 20",
              "Evitar interrupcions",
              "Crear 20 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 0 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 0",
              "Evitar interrupcions",
              "Crear 0 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 21 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 21",
              "Evitar interrupcions",
              "Crear 21 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 35 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 35",
              "Evitar interrupcions",
              "Crear 35 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 5 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 5",
              "Evitar interrupcions",
              "Crear 5 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 36 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 36",
              "Evitar interrupcions",
              "Crear 36 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 2 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 2",
              "Evitar interrupcions",
              "Crear 2 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Una evolució: Run → Blocked → Ready... Què causa tìpicament l'anada a Blocked del procés M, i posteriorment el retorn a Ready?",
            "options": [
              "S'ha demanat crear un procés fill // i un context switch posterior.",
              "El quantum del timer ha caducat // i el procés ja s'ha refredat.",
              "M demana llegir un fitxer (Syscall E/S) // l'E/S finalitza i el disc llença interrupció HW de fi."
            ],
            "answer": 2,
            "explanation": "Run a Blocked és voluntari (demano lectura a disc, la CPU va molt ràpida i m'he d'esperar). El disc avisa per HW (interrupció) i el kernel em posa de Blocked a Ready."
          },
          {
            "q": "(General) Quina és una de les finalitats 22 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 22",
              "Evitar interrupcions",
              "Crear 22 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #30)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 21 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 21",
              "Evitar interrupcions",
              "Crear 21 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quin d'aquests sistemes preten donar i aconseguir la *millor productivitat* o eficiència global d'ús màxim (Throughput) de la CPU?",
            "options": [
              "Sistemes de Lots Serials Monoprogramats antics.",
              "Sistemes Multiprogramats no-apropiatius per a treballs.",
              "Programació per Interrupcions de Kernel aillades.",
              "Sistemes Temps Compatit Pur per Interactivitat."
            ],
            "answer": 1,
            "explanation": "Nota: el pur Multiprogramat té millor throughput global perquè no perd tant temps 'context switching'."
          },
          {
            "q": "(General) Quina és una de les finalitats 29 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 29",
              "Evitar interrupcions",
              "Crear 29 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "En un Planificador típic d'E/S o OS; A qui o a què té per tàrea el 'planificador de mig termini'?",
            "options": [
              "Garantizar que els PIDs s'assignin per ordre pur seqüencial estricte de naixement del kernel.",
              "Decidir quan s'ha de treure temporalment tros/parts o el procés sencer de la memòria a disc (swapping) per gestionar hiper-saturació.",
              "Decidir exclusivament el pròxim procés a passar d'estat READY a RUN abans de temps llargs estancat."
            ],
            "answer": 1,
            "explanation": "The medium terms resolves virtual memory problems moving suspended blocks by SWAPPING them continuously to backend Storage drives temporarily."
          },
          {
            "q": "(General) Quina és una de les finalitats 37 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 37",
              "Evitar interrupcions",
              "Crear 37 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 14 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 14",
              "Evitar interrupcions",
              "Crear 14 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 26 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 26",
              "Evitar interrupcions",
              "Crear 26 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 13 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 13",
              "Evitar interrupcions",
              "Crear 13 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 6 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 6",
              "Evitar interrupcions",
              "Crear 6 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 22 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 22",
              "Evitar interrupcions",
              "Crear 22 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quin és l'avantatge primordial del planificador SJF (Shortest Job First)?",
            "options": [
              "És altíssimament segur.",
              "És matemàticament idoni: llança el menor temps MIG d'ESPERA possible combinant tota la cua de Ready en un vector perfecte.",
              "Fàcil implementació real exacte en sistemes domèstics atès conéixer de veritat futurs clars d'un processador."
            ],
            "answer": 1,
            "explanation": "SJF minimitza l'espera mitja col·locant el més ràpid primer, per evitar el comboi. Problema: En veritat NO COMPTE EL FUTUR (usant per tant heurístiques/exp net/est), i genera inanició a tasques llargues."
          },
          {
            "q": "(General) Quina és una de les finalitats 36 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 36",
              "Evitar interrupcions",
              "Crear 36 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 15 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 15",
              "Evitar interrupcions",
              "Crear 15 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 35 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 35",
              "Evitar interrupcions",
              "Crear 35 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #31)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 5 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 5",
              "Evitar interrupcions",
              "Crear 5 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 4 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 4",
              "Evitar interrupcions",
              "Crear 4 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Que permet fer la tècnica de DMA (Direct Memory Access)?",
            "options": [
              "Permet establir accés directe entre discs compartits per varies CPUs de forma paralela.",
              "Permet l'assignació indirecta d'adreces virtuals de disc pur a la CPU.",
              "Permet fer transferències complexes i grans blocs d'informació entre disc o dispositius E/S i la RAM sense usar temps contínu de la CPU."
            ],
            "answer": 2,
            "explanation": "El DMA s'apropia del bus i escriu els blocs de Bytes d'E/S directament a la RAM. La CPU pot fer altres tasques mentrestant."
          },
          {
            "q": "(General) Quina és una de les finalitats 25 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 25",
              "Evitar interrupcions",
              "Crear 25 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "L'estructura del SO 'Mach', precursora de SO com el d'Apple a nivells essencials d'arrel per seguretat va canviar el mercat usant una estructura...",
            "options": [
              "100% Monolítica clàssica tancada de UNIX V",
              "Tipus Arbre de xarxa multinivell descentralitzat de Google i Oracle",
              "Arquitectura Tipus Microkernel de passos missatges IPC",
              "Tipus purament Multi-Procès obert (Hardware SMP only)"
            ],
            "answer": 2,
            "explanation": "Mach va ser un intent fort modern als 80s / 90s per imposar l'arquitectura Microkernel."
          },
          {
            "q": "(General) Quina és una de les finalitats 18 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 18",
              "Evitar interrupcions",
              "Crear 18 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 21 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 21",
              "Evitar interrupcions",
              "Crear 21 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quina descripció defineix correctament la finalitat d'una 'crida de sistema' (System Call)?",
            "options": [
              "Gestionar interrupcions dels perifèrics exclusivament hardware.",
              "Proporcionar una interfície segura entre l'espai d'usuari (aplicacions) i l'espai de nucli (kernel).",
              "Assignar espai directe al disc dur sense mediació del sistema operatiu."
            ],
            "answer": 1,
            "explanation": "Les aplicacions no poden tocar hardware o tasques crítiques, han de cridar al kernel mitjançant Syscalls (open, read, fork...)."
          },
          {
            "q": "(General) Quina és una de les finalitats 0 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 0",
              "Evitar interrupcions",
              "Crear 0 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 23 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 23",
              "Evitar interrupcions",
              "Crear 23 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #32)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 22 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 22",
              "Evitar interrupcions",
              "Crear 22 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 24 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 24",
              "Evitar interrupcions",
              "Crear 24 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 17 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 17",
              "Evitar interrupcions",
              "Crear 17 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 36 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 36",
              "Evitar interrupcions",
              "Crear 36 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 23 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 23",
              "Evitar interrupcions",
              "Crear 23 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quina diferencia hi ha entre kernel i sistema operatiu?",
            "options": [
              "No hi ha cap diferencia, presten el mateix propòsit complet.",
              "El kernel controla exclusivament el software i el sistema operatiu el hardware.",
              "El sistema operatiu conté el kernel (nucli pincipal de control hw) a més de les aplicacions/utilitats de sistema.",
              "El kernel no pot executar en mode privilegiat."
            ],
            "answer": 2,
            "explanation": "El Kernel és el nucli d'execució contínua; el SO és el Kernel més tot l'ecosistema d'eines essencials afegides."
          },
          {
            "q": "(General) Quina és una de les finalitats 32 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 32",
              "Evitar interrupcions",
              "Crear 32 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Per a què es fan servir primordialment les interrupcions als dispositius?",
            "options": [
              "Per permetre que els programes d'usuari facin crides de xarxa.",
              "Per a informar al kernel que un dispositiu de hardware ha finalitzat l'operació sol·licitada.",
              "Per permetre que un programa faci E/S directament al disc evitant el kernel."
            ],
            "answer": 1,
            "explanation": "Les interrupcions són mecanismes asíncons hardware que notifiquen al processador d'events."
          },
          {
            "q": "(General) Quina és una de les finalitats 14 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 14",
              "Evitar interrupcions",
              "Crear 14 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 25 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 25",
              "Evitar interrupcions",
              "Crear 25 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #33)",
        "questions": [
          {
            "q": "Quin d'aquests sistemes preten donar i aconseguir la *millor productivitat* o eficiència global d'ús màxim (Throughput) de la CPU?",
            "options": [
              "Sistemes de Lots Serials Monoprogramats antics.",
              "Sistemes Multiprogramats no-apropiatius per a treballs.",
              "Programació per Interrupcions de Kernel aillades.",
              "Sistemes Temps Compatit Pur per Interactivitat."
            ],
            "answer": 1,
            "explanation": "Nota: el pur Multiprogramat té millor throughput global perquè no perd tant temps 'context switching'."
          },
          {
            "q": "(General) Quina és una de les finalitats 28 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 28",
              "Evitar interrupcions",
              "Crear 28 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 0 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 0",
              "Evitar interrupcions",
              "Crear 0 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Per a què es fan servir primordialment les interrupcions als dispositius?",
            "options": [
              "Per permetre que els programes d'usuari facin crides de xarxa.",
              "Per a informar al kernel que un dispositiu de hardware ha finalitzat l'operació sol·licitada.",
              "Per permetre que un programa faci E/S directament al disc evitant el kernel."
            ],
            "answer": 1,
            "explanation": "Les interrupcions són mecanismes asíncons hardware que notifiquen al processador d'events."
          },
          {
            "q": "(General) Quina és una de les finalitats 27 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 27",
              "Evitar interrupcions",
              "Crear 27 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 6 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 6",
              "Evitar interrupcions",
              "Crear 6 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quin és l'avantatge primordial del planificador SJF (Shortest Job First)?",
            "options": [
              "És altíssimament segur.",
              "És matemàticament idoni: llança el menor temps MIG d'ESPERA possible combinant tota la cua de Ready en un vector perfecte.",
              "Fàcil implementació real exacte en sistemes domèstics atès conéixer de veritat futurs clars d'un processador."
            ],
            "answer": 1,
            "explanation": "SJF minimitza l'espera mitja col·locant el més ràpid primer, per evitar el comboi. Problema: En veritat NO COMPTE EL FUTUR (usant per tant heurístiques/exp net/est), i genera inanició a tasques llargues."
          },
          {
            "q": "Que permet fer la tècnica de DMA (Direct Memory Access)?",
            "options": [
              "Permet establir accés directe entre discs compartits per varies CPUs de forma paralela.",
              "Permet l'assignació indirecta d'adreces virtuals de disc pur a la CPU.",
              "Permet fer transferències complexes i grans blocs d'informació entre disc o dispositius E/S i la RAM sense usar temps contínu de la CPU."
            ],
            "answer": 2,
            "explanation": "El DMA s'apropia del bus i escriu els blocs de Bytes d'E/S directament a la RAM. La CPU pot fer altres tasques mentrestant."
          },
          {
            "q": "Quina tasca TÍPICA està reservada al planificador de LLARG termini (Job Scheduler)?",
            "options": [
              "Seleccionar el pròxim procés a entrar a la CPU des de l'estat Ready.",
              "Controlar i admetre el grau absolut de multiprogramació del sistema (de Nou a Ready).",
              "Fer un Swap complet d'un procés bloquejat a disc secundari per falta de RAM."
            ],
            "answer": 1,
            "explanation": "El Job Scheduler (Llarg termini) determina quants i quins programes s'agafen del spool/disc per ser injectats a memòria principal."
          },
          {
            "q": "(General) Quina és una de les finalitats 8 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 8",
              "Evitar interrupcions",
              "Crear 8 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #34)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 18 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 18",
              "Evitar interrupcions",
              "Crear 18 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 25 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 25",
              "Evitar interrupcions",
              "Crear 25 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Imagina un planificador que usa Round Robin pur on el quant (quantum) és enorme i tendeix a infinit. A quin altre algorisme s'assemblarà aquest comportament?",
            "options": [
              "SJF (Shortest Job First).",
              "FCFS (First Come, First Served).",
              "Multinivell amb retroalimentació."
            ],
            "answer": 1,
            "explanation": "Si el quantum és infinit, els processos no són apropiats (expulsats) mai pel timer. Entraran per ordre d'arribada i sortiran quan vulguin (FCFS)."
          },
          {
            "q": "Quan parlem d'Arquitectura de Microkernel, quina és la seva GRAN fortalesa?",
            "options": [
              "Moltíssim rendiment en comparació amb solucions monolítiques degut a poques interrupcions.",
              "Seguretat i estabilitat: la majoria de subsistemes d'E/S i funcions de SO operen com processos d'usuari aïllats.",
              "Usa zero memòria virtual alhora d'arrancar l'ordindar per estalviar RAM."
            ],
            "answer": 1,
            "explanation": "Aïlla completament els serveis SO a espai usuari. Si el driver de xarxa peta, el sistema no peta."
          },
          {
            "q": "En un Planificador típic d'E/S o OS; A qui o a què té per tàrea el 'planificador de mig termini'?",
            "options": [
              "Garantizar que els PIDs s'assignin per ordre pur seqüencial estricte de naixement del kernel.",
              "Decidir quan s'ha de treure temporalment tros/parts o el procés sencer de la memòria a disc (swapping) per gestionar hiper-saturació.",
              "Decidir exclusivament el pròxim procés a passar d'estat READY a RUN abans de temps llargs estancat."
            ],
            "answer": 1,
            "explanation": "The medium terms resolves virtual memory problems moving suspended blocks by SWAPPING them continuously to backend Storage drives temporarily."
          },
          {
            "q": "(General) Quina és una de les finalitats 11 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 11",
              "Evitar interrupcions",
              "Crear 11 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 8 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 8",
              "Evitar interrupcions",
              "Crear 8 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 15 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 15",
              "Evitar interrupcions",
              "Crear 15 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 0 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 0",
              "Evitar interrupcions",
              "Crear 0 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 36 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 36",
              "Evitar interrupcions",
              "Crear 36 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Què diferencia principalment un SO multiprogramat d'un de temps compartit?",
            "options": [
              "Absolutament res, amdbós termes descriuen el mateix SO.",
              "La utilització d'estrategies de paginació i swappng de disc pur.",
              "La capacitat fer fora un procés de la CPU sense la seva cooperació (escollint el moment mitjançant apropiació temporal o quanta)."
            ],
            "answer": 2,
            "explanation": "Un SO temps compartit TALLA (preempts) l'execució del procés per repartir interactivitat a d'altres freqüentment."
          },
          {
            "q": "(General) Quina és una de les finalitats 34 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 34",
              "Evitar interrupcions",
              "Crear 34 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #35)",
        "questions": [
          {
            "q": "En un Planificador típic d'E/S o OS; A qui o a què té per tàrea el 'planificador de mig termini'?",
            "options": [
              "Garantizar que els PIDs s'assignin per ordre pur seqüencial estricte de naixement del kernel.",
              "Decidir quan s'ha de treure temporalment tros/parts o el procés sencer de la memòria a disc (swapping) per gestionar hiper-saturació.",
              "Decidir exclusivament el pròxim procés a passar d'estat READY a RUN abans de temps llargs estancat."
            ],
            "answer": 1,
            "explanation": "The medium terms resolves virtual memory problems moving suspended blocks by SWAPPING them continuously to backend Storage drives temporarily."
          },
          {
            "q": "Quin és l'avantatge primordial del planificador SJF (Shortest Job First)?",
            "options": [
              "És altíssimament segur.",
              "És matemàticament idoni: llança el menor temps MIG d'ESPERA possible combinant tota la cua de Ready en un vector perfecte.",
              "Fàcil implementació real exacte en sistemes domèstics atès conéixer de veritat futurs clars d'un processador."
            ],
            "answer": 1,
            "explanation": "SJF minimitza l'espera mitja col·locant el més ràpid primer, per evitar el comboi. Problema: En veritat NO COMPTE EL FUTUR (usant per tant heurístiques/exp net/est), i genera inanició a tasques llargues."
          },
          {
            "q": "(General) Quina és una de les finalitats 29 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 29",
              "Evitar interrupcions",
              "Crear 29 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quina diferencia hi ha entre kernel i sistema operatiu?",
            "options": [
              "No hi ha cap diferencia, presten el mateix propòsit complet.",
              "El kernel controla exclusivament el software i el sistema operatiu el hardware.",
              "El sistema operatiu conté el kernel (nucli pincipal de control hw) a més de les aplicacions/utilitats de sistema.",
              "El kernel no pot executar en mode privilegiat."
            ],
            "answer": 2,
            "explanation": "El Kernel és el nucli d'execució contínua; el SO és el Kernel més tot l'ecosistema d'eines essencials afegides."
          },
          {
            "q": "(General) Quina és una de les finalitats 4 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 4",
              "Evitar interrupcions",
              "Crear 4 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 37 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 37",
              "Evitar interrupcions",
              "Crear 37 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "L'estructura del SO 'Mach', precursora de SO com el d'Apple a nivells essencials d'arrel per seguretat va canviar el mercat usant una estructura...",
            "options": [
              "100% Monolítica clàssica tancada de UNIX V",
              "Tipus Arbre de xarxa multinivell descentralitzat de Google i Oracle",
              "Arquitectura Tipus Microkernel de passos missatges IPC",
              "Tipus purament Multi-Procès obert (Hardware SMP only)"
            ],
            "answer": 2,
            "explanation": "Mach va ser un intent fort modern als 80s / 90s per imposar l'arquitectura Microkernel."
          },
          {
            "q": "(General) Quina és una de les finalitats 26 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 26",
              "Evitar interrupcions",
              "Crear 26 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 13 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 13",
              "Evitar interrupcions",
              "Crear 13 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 16 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 16",
              "Evitar interrupcions",
              "Crear 16 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 34 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 34",
              "Evitar interrupcions",
              "Crear 34 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 33 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 33",
              "Evitar interrupcions",
              "Crear 33 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 17 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 17",
              "Evitar interrupcions",
              "Crear 17 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 36 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 36",
              "Evitar interrupcions",
              "Crear 36 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #36)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 22 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 22",
              "Evitar interrupcions",
              "Crear 22 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 35 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 35",
              "Evitar interrupcions",
              "Crear 35 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 1 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 1",
              "Evitar interrupcions",
              "Crear 1 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 33 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 33",
              "Evitar interrupcions",
              "Crear 33 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 6 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 6",
              "Evitar interrupcions",
              "Crear 6 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 28 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 28",
              "Evitar interrupcions",
              "Crear 28 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quin d'aquests sistemes preten donar i aconseguir la *millor productivitat* o eficiència global d'ús màxim (Throughput) de la CPU?",
            "options": [
              "Sistemes de Lots Serials Monoprogramats antics.",
              "Sistemes Multiprogramats no-apropiatius per a treballs.",
              "Programació per Interrupcions de Kernel aillades.",
              "Sistemes Temps Compatit Pur per Interactivitat."
            ],
            "answer": 1,
            "explanation": "Nota: el pur Multiprogramat té millor throughput global perquè no perd tant temps 'context switching'."
          },
          {
            "q": "(General) Quina és una de les finalitats 14 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 14",
              "Evitar interrupcions",
              "Crear 14 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 10 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 10",
              "Evitar interrupcions",
              "Crear 10 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 21 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 21",
              "Evitar interrupcions",
              "Crear 21 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 23 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 23",
              "Evitar interrupcions",
              "Crear 23 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 0 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 0",
              "Evitar interrupcions",
              "Crear 0 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #37)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 8 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 8",
              "Evitar interrupcions",
              "Crear 8 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 22 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 22",
              "Evitar interrupcions",
              "Crear 22 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 11 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 11",
              "Evitar interrupcions",
              "Crear 11 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 17 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 17",
              "Evitar interrupcions",
              "Crear 17 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "En un Planificador típic d'E/S o OS; A qui o a què té per tàrea el 'planificador de mig termini'?",
            "options": [
              "Garantizar que els PIDs s'assignin per ordre pur seqüencial estricte de naixement del kernel.",
              "Decidir quan s'ha de treure temporalment tros/parts o el procés sencer de la memòria a disc (swapping) per gestionar hiper-saturació.",
              "Decidir exclusivament el pròxim procés a passar d'estat READY a RUN abans de temps llargs estancat."
            ],
            "answer": 1,
            "explanation": "The medium terms resolves virtual memory problems moving suspended blocks by SWAPPING them continuously to backend Storage drives temporarily."
          },
          {
            "q": "(General) Quina és una de les finalitats 16 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 16",
              "Evitar interrupcions",
              "Crear 16 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 6 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 6",
              "Evitar interrupcions",
              "Crear 6 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 21 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 21",
              "Evitar interrupcions",
              "Crear 21 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 12 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 12",
              "Evitar interrupcions",
              "Crear 12 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 37 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 37",
              "Evitar interrupcions",
              "Crear 37 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #38)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 17 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 17",
              "Evitar interrupcions",
              "Crear 17 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 5 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 5",
              "Evitar interrupcions",
              "Crear 5 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 35 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 35",
              "Evitar interrupcions",
              "Crear 35 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 34 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 34",
              "Evitar interrupcions",
              "Crear 34 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 10 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 10",
              "Evitar interrupcions",
              "Crear 10 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Imagina un planificador que usa Round Robin pur on el quant (quantum) és enorme i tendeix a infinit. A quin altre algorisme s'assemblarà aquest comportament?",
            "options": [
              "SJF (Shortest Job First).",
              "FCFS (First Come, First Served).",
              "Multinivell amb retroalimentació."
            ],
            "answer": 1,
            "explanation": "Si el quantum és infinit, els processos no són apropiats (expulsats) mai pel timer. Entraran per ordre d'arribada i sortiran quan vulguin (FCFS)."
          },
          {
            "q": "Què diferencia principalment un SO multiprogramat d'un de temps compartit?",
            "options": [
              "Absolutament res, amdbós termes descriuen el mateix SO.",
              "La utilització d'estrategies de paginació i swappng de disc pur.",
              "La capacitat fer fora un procés de la CPU sense la seva cooperació (escollint el moment mitjançant apropiació temporal o quanta)."
            ],
            "answer": 2,
            "explanation": "Un SO temps compartit TALLA (preempts) l'execució del procés per repartir interactivitat a d'altres freqüentment."
          },
          {
            "q": "En un Planificador típic d'E/S o OS; A qui o a què té per tàrea el 'planificador de mig termini'?",
            "options": [
              "Garantizar que els PIDs s'assignin per ordre pur seqüencial estricte de naixement del kernel.",
              "Decidir quan s'ha de treure temporalment tros/parts o el procés sencer de la memòria a disc (swapping) per gestionar hiper-saturació.",
              "Decidir exclusivament el pròxim procés a passar d'estat READY a RUN abans de temps llargs estancat."
            ],
            "answer": 1,
            "explanation": "The medium terms resolves virtual memory problems moving suspended blocks by SWAPPING them continuously to backend Storage drives temporarily."
          },
          {
            "q": "Què produeix una anomalia 'efecte comboi' (Convoy Effect)?",
            "options": [
              "Un procés molt CPU-intensiu i llarg en un sistema no apropiatiu retarda totalment a processos molt curts darrere seu.",
              "Un dispositiu de xarxa monopolitzant contínuament el DMA sencer de la placa base.",
              "Fer fora de CPU a processos amb alta prioritat per inanició."
            ],
            "answer": 0,
            "explanation": "Sol passar al sistema FCFS (First Come, First Serve) pur on un procés gegant col·lapsa l'arribada rere seu de múltiples processos 'ràpids'."
          },
          {
            "q": "(General) Quina és una de les finalitats 23 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 23",
              "Evitar interrupcions",
              "Crear 23 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 15 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 15",
              "Evitar interrupcions",
              "Crear 15 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #39)",
        "questions": [
          {
            "q": "(General) Quina és una de les finalitats 34 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 34",
              "Evitar interrupcions",
              "Crear 34 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 36 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 36",
              "Evitar interrupcions",
              "Crear 36 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 31 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 31",
              "Evitar interrupcions",
              "Crear 31 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 26 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 26",
              "Evitar interrupcions",
              "Crear 26 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 8 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 8",
              "Evitar interrupcions",
              "Crear 8 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 13 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 13",
              "Evitar interrupcions",
              "Crear 13 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quines de les següents descripcions representa els 3 estats claus per a cicle de vida operatiu de QUALSEVOL procés bàsic d'un SO?",
            "options": [
              "Paused, Starting i Stopping.",
              "Create, Destroy, Background i Foreground",
              "Run, Ready i Blocked (Suspend o Wait).",
              "Hault, Fetch o Decode operatiu."
            ],
            "answer": 2,
            "explanation": "Els estats centrals a tota CPU Scheduler són RUN (A l'equip processant), READY (Esperant al Planificador) o BLOCKED."
          },
          {
            "q": "(General) Quina és una de les finalitats 3 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 3",
              "Evitar interrupcions",
              "Crear 3 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 4 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 4",
              "Evitar interrupcions",
              "Crear 4 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 22 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 22",
              "Evitar interrupcions",
              "Crear 22 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 15 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 15",
              "Evitar interrupcions",
              "Crear 15 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Què diferencia principalment un SO multiprogramat d'un de temps compartit?",
            "options": [
              "Absolutament res, amdbós termes descriuen el mateix SO.",
              "La utilització d'estrategies de paginació i swappng de disc pur.",
              "La capacitat fer fora un procés de la CPU sense la seva cooperació (escollint el moment mitjançant apropiació temporal o quanta)."
            ],
            "answer": 2,
            "explanation": "Un SO temps compartit TALLA (preempts) l'execució del procés per repartir interactivitat a d'altres freqüentment."
          },
          {
            "q": "(General) Quina és una de les finalitats 33 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 33",
              "Evitar interrupcions",
              "Crear 33 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 2 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 2",
              "Evitar interrupcions",
              "Crear 2 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #40)",
        "questions": [
          {
            "q": "Quin d'aquests sistemes preten donar i aconseguir la *millor productivitat* o eficiència global d'ús màxim (Throughput) de la CPU?",
            "options": [
              "Sistemes de Lots Serials Monoprogramats antics.",
              "Sistemes Multiprogramats no-apropiatius per a treballs.",
              "Programació per Interrupcions de Kernel aillades.",
              "Sistemes Temps Compatit Pur per Interactivitat."
            ],
            "answer": 1,
            "explanation": "Nota: el pur Multiprogramat té millor throughput global perquè no perd tant temps 'context switching'."
          },
          {
            "q": "(General) Quina és una de les finalitats 38 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 38",
              "Evitar interrupcions",
              "Crear 38 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 30 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 30",
              "Evitar interrupcions",
              "Crear 30 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Per a què es fan servir primordialment les interrupcions als dispositius?",
            "options": [
              "Per permetre que els programes d'usuari facin crides de xarxa.",
              "Per a informar al kernel que un dispositiu de hardware ha finalitzat l'operació sol·licitada.",
              "Per permetre que un programa faci E/S directament al disc evitant el kernel."
            ],
            "answer": 1,
            "explanation": "Les interrupcions són mecanismes asíncons hardware que notifiquen al processador d'events."
          },
          {
            "q": "(General) Quina és una de les finalitats 0 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 0",
              "Evitar interrupcions",
              "Crear 0 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Quina descripció defineix correctament la finalitat d'una 'crida de sistema' (System Call)?",
            "options": [
              "Gestionar interrupcions dels perifèrics exclusivament hardware.",
              "Proporcionar una interfície segura entre l'espai d'usuari (aplicacions) i l'espai de nucli (kernel).",
              "Assignar espai directe al disc dur sense mediació del sistema operatiu."
            ],
            "answer": 1,
            "explanation": "Les aplicacions no poden tocar hardware o tasques crítiques, han de cridar al kernel mitjançant Syscalls (open, read, fork...)."
          },
          {
            "q": "Quan parlem d'Arquitectura de Microkernel, quina és la seva GRAN fortalesa?",
            "options": [
              "Moltíssim rendiment en comparació amb solucions monolítiques degut a poques interrupcions.",
              "Seguretat i estabilitat: la majoria de subsistemes d'E/S i funcions de SO operen com processos d'usuari aïllats.",
              "Usa zero memòria virtual alhora d'arrancar l'ordindar per estalviar RAM."
            ],
            "answer": 1,
            "explanation": "Aïlla completament els serveis SO a espai usuari. Si el driver de xarxa peta, el sistema no peta."
          },
          {
            "q": "(General) Quina és una de les finalitats 28 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 28",
              "Evitar interrupcions",
              "Crear 28 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 26 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 26",
              "Evitar interrupcions",
              "Crear 26 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 31 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 31",
              "Evitar interrupcions",
              "Crear 31 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "(General) Quina és una de les finalitats 12 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 12",
              "Evitar interrupcions",
              "Crear 12 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          },
          {
            "q": "Imagina un planificador que usa Round Robin pur on el quant (quantum) és enorme i tendeix a infinit. A quin altre algorisme s'assemblarà aquest comportament?",
            "options": [
              "SJF (Shortest Job First).",
              "FCFS (First Come, First Served).",
              "Multinivell amb retroalimentació."
            ],
            "answer": 1,
            "explanation": "Si el quantum és infinit, els processos no són apropiats (expulsats) mai pel timer. Entraran per ordre d'arribada i sortiran quan vulguin (FCFS)."
          },
          {
            "q": "(General) Quina és una de les finalitats 18 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 18",
              "Evitar interrupcions",
              "Crear 18 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      }
    ]
  }
};
