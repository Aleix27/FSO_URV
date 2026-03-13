const existingTests = [
    {
        q: "Quina diferencia hi ha entre kernel i sistema operatiu?",
        options: [
            "No hi ha cap diferencia, presten el mateix propòsit complet.",
            "El kernel controla exclusivament el software i el sistema operatiu el hardware.",
            "El sistema operatiu conté el kernel (nucli pincipal de control hw) a més de les aplicacions/utilitats de sistema.",
            "El kernel no pot executar en mode privilegiat."
        ], answer: 2, explanation: "El Kernel és el nucli d'execució contínua; el SO és el Kernel més tot l'ecosistema d'eines essencials afegides."
    },
    {
        q: "Per a què es fan servir primordialment les interrupcions als dispositius?",
        options: [
            "Per permetre que els programes d'usuari facin crides de xarxa.",
            "Per a informar al kernel que un dispositiu de hardware ha finalitzat l'operació sol·licitada.",
            "Per permetre que un programa faci E/S directament al disc evitant el kernel."
        ], answer: 1, explanation: "Les interrupcions són mecanismes asíncons hardware que notifiquen al processador d'events."
    },
    {
        q: "Què diferencia principalment un SO multiprogramat d'un de temps compartit?",
        options: [
             "Absolutament res, amdbós termes descriuen el mateix SO.",
             "La utilització d'estrategies de paginació i swappng de disc pur.",
             "La capacitat fer fora un procés de la CPU sense la seva cooperació (escollint el moment mitjançant apropiació temporal o quanta)."
        ], answer: 2, explanation: "Un SO temps compartit TALLA (preempts) l'execució del procés per repartir interactivitat a d'altres freqüentment."
    },
    {
        q: "Que permet fer la tècnica de DMA (Direct Memory Access)?",
        options: [
             "Permet establir accés directe entre discs compartits per varies CPUs de forma paralela.",
             "Permet l'assignació indirecta d'adreces virtuals de disc pur a la CPU.",
             "Permet fer transferències complexes i grans blocs d'informació entre disc o dispositius E/S i la RAM sense usar temps contínu de la CPU."
        ], answer: 2, explanation: "El DMA s'apropia del bus i escriu els blocs de Bytes d'E/S directament a la RAM. La CPU pot fer altres tasques mentrestant."
    },
    {
        q: "Quin d'aquests sistemes preten donar i aconseguir la *millor productivitat* o eficiència global d'ús màxim (Throughput) de la CPU?",
        options: [
             "Sistemes de Lots Serials Monoprogramats antics.",
             "Sistemes Multiprogramats no-apropiatius per a treballs.",
             "Programació per Interrupcions de Kernel aillades.",
             "Sistemes Temps Compatit Pur per Interactivitat."
        ], answer: 1, explanation: "Nota: el pur Multiprogramat té millor throughput global perquè no perd tant temps 'context switching'."
    },
    {
        q: "Quines de les següents descripcions representa els 3 estats claus per a cicle de vida operatiu de QUALSEVOL procés bàsic d'un SO?",
        options: [
            "Paused, Starting i Stopping.",
            "Create, Destroy, Background i Foreground",
            "Run, Ready i Blocked (Suspend o Wait).",
            "Hault, Fetch o Decode operatiu."
        ], answer: 2, explanation: "Els estats centrals a tota CPU Scheduler són RUN (A l'equip processant), READY (Esperant al Planificador) o BLOCKED."
    },
    {
        q: "En un Planificador típic d'E/S o OS; A qui o a què té per tàrea el 'planificador de mig termini'?",
        options: [
            "Garantizar que els PIDs s'assignin per ordre pur seqüencial estricte de naixement del kernel.",
            "Decidir quan s'ha de treure temporalment tros/parts o el procés sencer de la memòria a disc (swapping) per gestionar hiper-saturació.",
            "Decidir exclusivament el pròxim procés a passar d'estat READY a RUN abans de temps llargs estancat."
        ], answer: 1, explanation: "The medium terms resolves virtual memory problems moving suspended blocks by SWAPPING them continuously to backend Storage drives temporarily."
    },
    {
        q: "L'estructura del SO 'Mach', precursora de SO com el d'Apple a nivells essencials d'arrel per seguretat va canviar el mercat usant una estructura...",
        options: [
            "100% Monolítica clàssica tancada de UNIX V",
            "Tipus Arbre de xarxa multinivell descentralitzat de Google i Oracle",
            "Arquitectura Tipus Microkernel de passos missatges IPC",
            "Tipus purament Multi-Procès obert (Hardware SMP only)"
        ], answer: 2, explanation: "Mach va ser un intent fort modern als 80s / 90s per imposar l'arquitectura Microkernel."
    },
    {
        q: "Quina descripció defineix correctament la finalitat d'una 'crida de sistema' (System Call)?",
        options: [
            "Gestionar interrupcions dels perifèrics exclusivament hardware.",
            "Proporcionar una interfície segura entre l'espai d'usuari (aplicacions) i l'espai de nucli (kernel).",
            "Assignar espai directe al disc dur sense mediació del sistema operatiu."
        ], answer: 1, explanation: "Les aplicacions no poden tocar hardware o tasques crítiques, han de cridar al kernel mitjançant Syscalls (open, read, fork...)."
    },
    {
        q: "Imagina un planificador que usa Round Robin pur on el quant (quantum) és enorme i tendeix a infinit. A quin altre algorisme s'assemblarà aquest comportament?",
        options: [
            "SJF (Shortest Job First).",
            "FCFS (First Come, First Served).",
            "Multinivell amb retroalimentació."
        ], answer: 1, explanation: "Si el quantum és infinit, els processos no són apropiats (expulsats) mai pel timer. Entraran per ordre d'arribada i sortiran quan vulguin (FCFS)."
    },
    {
        q: "Quina tasca TÍPICA està reservada al planificador de LLARG termini (Job Scheduler)?",
        options: [
            "Seleccionar el pròxim procés a entrar a la CPU des de l'estat Ready.",
            "Controlar i admetre el grau absolut de multiprogramació del sistema (de Nou a Ready).",
            "Fer un Swap complet d'un procés bloquejat a disc secundari per falta de RAM."
        ], answer: 1, explanation: "El Job Scheduler (Llarg termini) determina quants i quins programes s'agafen del spool/disc per ser injectats a memòria principal."
    },
    {
        q: "Quan parlem d'Arquitectura de Microkernel, quina és la seva GRAN fortalesa?",
        options: [
            "Moltíssim rendiment en comparació amb solucions monolítiques degut a poques interrupcions.",
            "Seguretat i estabilitat: la majoria de subsistemes d'E/S i funcions de SO operen com processos d'usuari aïllats.",
            "Usa zero memòria virtual alhora d'arrancar l'ordindar per estalviar RAM."
        ], answer: 1, explanation: "Aïlla completament els serveis SO a espai usuari. Si el driver de xarxa peta, el sistema no peta."
    },
    {
        q: "Una evolució: Run → Blocked → Ready... Què causa tìpicament l'anada a Blocked del procés M, i posteriorment el retorn a Ready?",
        options: [
            "S'ha demanat crear un procés fill // i un context switch posterior.",
            "El quantum del timer ha caducat // i el procés ja s'ha refredat.",
            "M demana llegir un fitxer (Syscall E/S) // l'E/S finalitza i el disc llença interrupció HW de fi."
        ], answer: 2, explanation: "Run a Blocked és voluntari (demano lectura a disc, la CPU va molt ràpida i m'he d'esperar). El disc avisa per HW (interrupció) i el kernel em posa de Blocked a Ready."
    },
    {
        q: "Què produeix una anomalia 'efecte comboi' (Convoy Effect)?",
        options: [
            "Un procés molt CPU-intensiu i llarg en un sistema no apropiatiu retarda totalment a processos molt curts darrere seu.",
            "Un dispositiu de xarxa monopolitzant contínuament el DMA sencer de la placa base.",
            "Fer fora de CPU a processos amb alta prioritat per inanició."
        ], answer: 0, explanation: "Sol passar al sistema FCFS (First Come, First Serve) pur on un procés gegant col·lapsa l'arribada rere seu de múltiples processos 'ràpids'."
    },
    {
        q: "Quin és l'avantatge primordial del planificador SJF (Shortest Job First)?",
        options: [
            "És altíssimament segur.",
            "És matemàticament idoni: llança el menor temps MIG d'ESPERA possible combinant tota la cua de Ready en un vector perfecte.",
            "Fàcil implementació real exacte en sistemes domèstics atès conéixer de veritat futurs clars d'un processador."
        ], answer: 1, explanation: "SJF minimitza l'espera mitja col·locant el més ràpid primer, per evitar el comboi. Problema: En veritat NO COMPTE EL FUTUR (usant per tant heurístiques/exp net/est), i genera inanició a tasques llargues."
    }
];

// Combine all possible generated base exams questions into a massive pool
const questionPool = existingTests.slice();
// Add mock ones to pool
for (let i = 0; i < 40; i++) {
    questionPool.push({
        q: `(General) Quina és una de les finalitats ${i} d'un Sistema Operatiu de multiprogramació?`,
        options: [`Gestió recursos ${i}`, `Evitar interrupcions`, `Crear ${i} zombis`, `Processament de text`],
        answer: 0,
        explanation: "La gestió és fonamental per qualsevol SO actiu."
    });
}

// Fisher-Yates shuffle
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

// 1. GENERATED EXAMS: We generate 40 distinct exams of 10-15 questions each
const generatedExamsArr = [];
for(let i=1; i<=40; i++) {
    const shuffled = shuffle([...questionPool]);
    const numQ = Math.floor(Math.random() * 5) + 10; // 10 to 14 questions
    generatedExamsArr.push({
        title: `Simulacre Pràctic P1 (Variant #${i})`,
        questions: shuffled.slice(0, numQ)
    });
}

// 2. ASSIGNATURA EXAMS
const assignaturaExamsArr = [
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
                "explanation": "Totes les anteriors: controlar, gestionar, oferir accés."
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
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "En ‘Bash’ com passem una variable local a variable global",
                "options": [
                    "Hi ha prou en escriure-la en majúscules.",
                    "Cal tornar a definir-la al fitxer ‘.bashrc’.",
                    "Amb la comanda ‘global’.",
                    "Amb la comanda ‘export’."
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Accedir a dispositius d'E/S mitjançant el driver."
            },
            {
                "q": "Per que és important que els SO evolucionin:",
                "options": [
                    "Per permetre que els programes facin més càlculs.",
                    "Per permetre als usuaris treballar més hores.",
                    "Per permetre accés a nous dispositius d'E/S.",
                    "Per garantir que un programa no tingui errors."
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "Que diferencia un SO multiprogramat d'un de temps compartit?",
                "options": [
                    "La capacitat de carregar programes a memòria.",
                    "La capacitat d'escollir el moment de fer fora de CPU a un procés.",
                    "La capacitat d'executar-se en un sistema multiprocessador.",
                    "res, és el mateix"
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Multiprogramat."
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
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "La multiprogramació està pensada per?",
                "options": [
                    "Incrementar el nombre d'usuaris connectats al sistema.",
                    "Incrementar l'accés a les diferents CPU del sistema.",
                    "Incrementar la utilització de la CPU.",
                    "Incrementar el temps de resposta."
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "Quina implementació es més eficient per a una cua de processos Blocked?",
                "options": [
                    "Una cua LIFO",
                    "Una cua FIFO",
                    "Una cua de prioritats.",
                    "Múltiples cues."
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Decidir quan s'ha de treure un tros de la memòria assignada a un procés."
            },
            {
                "q": "Quins són els tres estats principals d'un procés?",
                "options": [
                    "Ready, Run i Blocked.",
                    "New, Run i Terminated.",
                    "New, Run i Blocked.",
                    "Run, Blocked i Terminated."
                ],
                "answer": 2,
                "explanation": "Ready, Run i Blocked."
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
                "explanation": "Run -> Ready -> Blocked -> Run."
            },
            {
                "q": "Què sortirà per pantalla si executem en un intèrpret de python les seguents  comandes:  x=3; y=5; z=x+y; print (z)",
                "options": [
                    "x+y",
                    "35",
                    "3+5",
                    "8"
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "Quin tipus de SO és Solaris?",
                "options": [
                    "Monoprogramat, monousuari.",
                    "Multiprogramat temps compartit i multithread.",
                    "Multiusuari, monoprogramat per cada usuari.",
                    "Mutiprogramant, monothread per cada procés."
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "El codi que s'executa en una interrupció:",
                "options": [
                    "Pertany al codi del programa.",
                    "Pertany al codi del kernel.",
                    "S'executa en mode usuari del sistema operatiu.",
                    "S'executa en mode kernel del procés d'usuari."
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "L'objectiu principal que vol assolir una aplicació que esta programada amb  threads?",
                "options": [
                    "És millorar el temps de retorn de l'aplicació.",
                    "És millorar la productivitat del sistema.",
                    "És millorar l'utilització de la CPU del sistema.",
                    "És millorar el temps de resposta de l'aplicació. Donat el següent esquema d'execució de tres processos:"
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Pregunta extreta del PDF exactament.",
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
                "explanation": "Pregunta extreta del PDF exactament.",
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
                "explanation": "Pregunta extreta del PDF exactament.",
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
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "Quin son els períodes dels processos P1 i P2, respectivament:",
                "options": [
                    "50,50",
                    "50,100",
                    "100,100",
                    "100,150"
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "En un planificador Rate-Monotonic, quina relació de prioritats tenen P1 i P2?",
                "options": [
                    "La mateixa.",
                    "P1 < P2.",
                    "P1 > P2.",
                    "No té sentit en un planificador Rate-Monotonic."
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Totes les anteriors: controlar, gestionar, oferir accés."
            },
            {
                "q": "Si diem que un SO controla un programa....",
                "options": [
                    "No el deixa pensar per si mateix.",
                    "Crea un PCB amb tota la informació necessària per poder executar-lo.",
                    "Gestiona i decideix la seva finalització.",
                    "Decideix quanta memòria necessita."
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "Quina diferencia hi ha entre kernel i sistema operatiu?",
                "options": [
                    "No hi ha cap diferencia, és el mateix.",
                    "El kernel controla el hardware i el sistema operatiu el software.",
                    "El kernel controla el software i el sistema operatiu el hardware.",
                    "El sistema operatiu conté el kernel a mes de les aplicacions de sistema."
                ],
                "answer": 2,
                "explanation": "El Kernel és el nucli d'execució contínua; el SO és el Kernel més tot l'ecosistema d'eines essencials afegides."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "Què és caching en la implementació d’un SO?",
                "options": [
                    "La capacitat de carregar programes a memòria.",
                    "La capacitat d'escollir el moment de fer fora de CPU a un procés.",
                    "La capacitat d'executar-se en un sistema multiprocessador.",
                    "La capacitat de copiar dades d’un dispositiu lent a un de més ràpid."
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Multiprogramat."
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
                "explanation": "Permet fer transferències entre disc i RAM sense usar la CPU."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Decidir quan s'ha de treure un tros de la memòria assignada a un procés."
            },
            {
                "q": "Quina és la feina principal del ‘bootstrap loader’?",
                "options": [
                    "Localitzar el kernel del SO.",
                    "Carregar el kernel a memòria.",
                    "Permete que el kernel comenci a executar-se.",
                    "Totes les anteriors."
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Run -> Ready -> Blocked -> Run."
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
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "Que implica que un SO sigui de Temps Real?",
                "options": [
                    "Que el SO és monoprogramat.",
                    "Que si és un SO multiprogramat té prioritats.",
                    "Que els procesos d’usuari no acabaen mai",
                    "Que els procesos de sistema acaben sempre de manera correcta."
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "Què diferencia el SJF del SRTF?",
                "options": [
                    "SJF és apropiatiu i SRTF no.",
                    "SRTF és apropiatiu i SJF no.",
                    "SJF és un planificador de llarg termini i SRTF de curt termini",
                    "SRTF és de temps de real i SJF no. Donat el següent esquema d'execució de tres processos:"
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Totes les anteriors: controlar, gestionar, oferir accés."
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
                "explanation": "Hardware, sistema operatiu, aplicacions i usuaris."
            },
            {
                "q": "Quina diferencia hi ha entre kernel i sistema operatiu?",
                "options": [
                    "No hi ha cap diferencia, és el mateix.",
                    "El kernel controla el hardware i el sistema operatiu el software.",
                    "El kernel controla el software i el sistema operatiu el hardware.",
                    "El sistema operatiu conté el kernel a mes de les aplicacions de sistema."
                ],
                "answer": 2,
                "explanation": "El Kernel és el nucli d'execució contínua; el SO és el Kernel més tot l'ecosistema d'eines essencials afegides."
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
                "explanation": "Accedir a dispositius d'E/S mitjançant el driver."
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
                "explanation": "Informar al kernel que un dispositiu ha finalitzat l'operació sol·licitada."
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
                "explanation": "La capacitat d'escollir el moment de fer fora de CPU a un procés."
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
                "explanation": "Multiprogramat."
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
                "explanation": "Permet fer transferències entre disc i RAM sense usar la CPU."
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
                "explanation": "El estar executant diferents parts del procés de manera concurrent."
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
                "explanation": "El primer és software i el segon és hardware."
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
                "explanation": "Decidir quan s'ha de treure un tros de la memòria assignada a un procés."
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
                "explanation": "Ready, Run i Blocked."
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
                "explanation": "Run -> Ready -> Blocked -> Run."
            },
            {
                "q": "Què sortirà per pantalla si executem en una bash les següents comandes:   x=5; y=5; z=x+y; echo $z",
                "options": [
                    "10",
                    "x+y",
                    "55",
                    "5+5"
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Microkernel"
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
                "explanation": "Process Control Block."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Totes les anteriors: controlar, gestionar, oferir accés."
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
                "explanation": "Hardware, sistema operatiu, aplicacions i usuaris."
            },
            {
                "q": "Quina diferencia hi ha entre kernel i sistema operatiu?",
                "options": [
                    "No hi ha cap diferencia, és el mateix.",
                    "El kernel controla el hardware i el sistema operatiu el software.",
                    "El kernel controla el software i el sistema operatiu el hardware.",
                    "El sistema operatiu conté el kernel a mes de les aplicacions de sistema."
                ],
                "answer": 2,
                "explanation": "El Kernel és el nucli d'execució contínua; el SO és el Kernel més tot l'ecosistema d'eines essencials afegides."
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
                "explanation": "Accedir a dispositius d'E/S mitjançant el driver."
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
                "explanation": "Informar al kernel que un dispositiu ha finalitzat l'operació sol·licitada."
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
                "explanation": "La capacitat d'escollir el moment de fer fora de CPU a un procés."
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
                "explanation": "Multiprogramat."
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
                "explanation": "Permet fer transferències entre disc i RAM sense usar la CPU."
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
                "explanation": "El estar executant diferents parts del procés de manera concurrent."
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
                "explanation": "El primer és software i el segon és hardware."
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
                "explanation": "Decidir quan s'ha de treure un tros de la memòria assignada a un procés."
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
                "explanation": "Ready, Run i Blocked."
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
                "explanation": "Run -> Ready -> Blocked -> Run."
            },
            {
                "q": "Què sortirà per pantalla si executem en una bash les següents comandes:   x=5; y=5; z=x+y; echo $z",
                "options": [
                    "10",
                    "x+y",
                    "55",
                    "5+5"
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Microkernel"
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
                "explanation": "Process Control Block."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Totes les anteriors: controlar, gestionar, oferir accés."
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
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "En ‘Bash’ com passem una variable local a variable global",
                "options": [
                    "Hi ha prou en escriure-la en majúscules.",
                    "Cal tornar a definir-la al fitxer ‘.bashrc’.",
                    "Amb la comanda ‘global’.",
                    "Amb la comanda ‘export’."
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Accedir a dispositius d'E/S mitjançant el driver."
            },
            {
                "q": "Per que és important que els SO evolucionin:",
                "options": [
                    "Per permetre que els programes facin més càlculs.",
                    "Per permetre als usuaris treballar més hores.",
                    "Per permetre accés a nous dispositius d'E/S.",
                    "Per garantir que un programa no tingui errors."
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "Que diferencia un SO multiprogramat d'un de temps compartit?",
                "options": [
                    "La capacitat de carregar programes a memòria.",
                    "La capacitat d'escollir el moment de fer fora de CPU a un procés.",
                    "La capacitat d'executar-se en un sistema multiprocessador.",
                    "res, és el mateix"
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Multiprogramat."
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
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "La multiprogramació està pensada per?",
                "options": [
                    "Incrementar el nombre d'usuaris connectats al sistema.",
                    "Incrementar l'accés a les diferents CPU del sistema.",
                    "Incrementar la utilització de la CPU.",
                    "Incrementar el temps de resposta."
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "Quina implementació es més eficient per a una cua de processos Blocked?",
                "options": [
                    "Una cua LIFO",
                    "Una cua FIFO",
                    "Una cua de prioritats.",
                    "Múltiples cues."
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Decidir quan s'ha de treure un tros de la memòria assignada a un procés."
            },
            {
                "q": "Quins són els tres estats principals d'un procés?",
                "options": [
                    "Ready, Run i Blocked.",
                    "New, Run i Terminated.",
                    "New, Run i Blocked.",
                    "Run, Blocked i Terminated."
                ],
                "answer": 2,
                "explanation": "Ready, Run i Blocked."
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
                "explanation": "Run -> Ready -> Blocked -> Run."
            },
            {
                "q": "Què sortirà per pantalla si executem en un intèrpret de python les seguents  comandes:  x=3; y=5; z=x+y; print (z)",
                "options": [
                    "x+y",
                    "35",
                    "3+5",
                    "8"
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "Quin tipus de SO és Solaris?",
                "options": [
                    "Monoprogramat, monousuari.",
                    "Multiprogramat temps compartit i multithread.",
                    "Multiusuari, monoprogramat per cada usuari.",
                    "Mutiprogramant, monothread per cada procés."
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "El codi que s'executa en una interrupció:",
                "options": [
                    "Pertany al codi del programa.",
                    "Pertany al codi del kernel.",
                    "S'executa en mode usuari del sistema operatiu.",
                    "S'executa en mode kernel del procés d'usuari."
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "L'objectiu principal que vol assolir una aplicació que esta programada amb  threads?",
                "options": [
                    "És millorar el temps de retorn de l'aplicació.",
                    "És millorar la productivitat del sistema.",
                    "És millorar l'utilització de la CPU del sistema.",
                    "És millorar el temps de resposta de l'aplicació. Donat el següent esquema d'execució de tres processos:"
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Pregunta extreta del PDF exactament.",
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
                "explanation": "Pregunta extreta del PDF exactament.",
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
                "explanation": "Pregunta extreta del PDF exactament.",
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
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "Quin son els períodes dels processos P1 i P2, respectivament:",
                "options": [
                    "50,50",
                    "50,100",
                    "100,100",
                    "100,150"
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
            },
            {
                "q": "En un planificador Rate-Monotonic, quina relació de prioritats tenen P1 i P2?",
                "options": [
                    "La mateixa.",
                    "P1 < P2.",
                    "P1 > P2.",
                    "No té sentit en un planificador Rate-Monotonic."
                ],
                "answer": 0,
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Accedir a dispositius d'E/S mitjançant el driver."
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
                "explanation": "Totes les anteriors: controlar, gestionar, oferir accés."
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
                "explanation": "Hardware, sistema operatiu, aplicacions i usuaris."
            },
            {
                "q": "Quina diferencia hi ha entre kernel i sistema operatiu?",
                "options": [
                    "No hi ha cap diferencia, és el mateix.",
                    "El kernel controla el hardware i el sistema operatiu el software.",
                    "El kernel controla el software i el sistema operatiu el hardware.",
                    "El sistema operatiu conté el kernel a mes de les aplicacions de sistema."
                ],
                "answer": 2,
                "explanation": "El Kernel és el nucli d'execució contínua; el SO és el Kernel més tot l'ecosistema d'eines essencials afegides."
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
                "explanation": "Informar al kernel que un dispositiu ha finalitzat l'operació sol·licitada."
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
                "explanation": "La capacitat d'escollir el moment de fer fora de CPU a un procés."
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
                "explanation": "Permet fer transferències entre disc i RAM sense usar la CPU."
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
                "explanation": "Multiprogramat."
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
                "explanation": "El estar executant diferents parts del procés de manera concurrent."
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
                "explanation": "El primer és software i el segon és hardware."
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
                "explanation": "Decidir quan s'ha de treure un tros de la memòria assignada a un procés."
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
                "explanation": "Ready, Run i Blocked."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Process Control Block."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Pregunta extreta del PDF exactament."
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
                "explanation": "Pregunta extreta del PDF exactament."
            }
        ]
    }
];

const finalTestsData = {
    parcial1: {
        tests_assignatura: assignaturaExamsArr,
        tests_generats: generatedExamsArr
    }
};

const jsOutput = `// Combined Test Data Generator
const testsData = ${JSON.stringify(finalTestsData, null, 2)};
`;

require('fs').writeFileSync('data/tests.js', jsOutput, 'utf8');
console.log("Tests object successfully created with multi-exam structures at data/tests.js");
