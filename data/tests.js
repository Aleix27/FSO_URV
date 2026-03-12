// Combined Test Data Generator
const testsData = {
  "parcial1": {
    "tests_assignatura": [
      {
        "title": "Primer Parcial 2023 - A",
        "questions": [
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
            "q": "Que permet fer la tècnica de DMA (Direct Memory Access)?",
            "options": [
              "Permet establir accés directe entre discs compartits per varies CPUs de forma paralela.",
              "Permet l'assignació indirecta d'adreces virtuals de disc pur a la CPU.",
              "Permet fer transferències complexes i grans blocs d'informació entre disc o dispositius E/S i la RAM sense usar temps contínu de la CPU."
            ],
            "answer": 2,
            "explanation": "El DMA s'apropia del bus i escriu els blocs de Bytes d'E/S directament a la RAM. La CPU pot fer altres tasques mentrestant."
          }
        ]
      },
      {
        "title": "Primer Parcial 2023 - B",
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
        "title": "1er Parcial FSO (Amb Solució)",
        "questions": [
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
            "q": "Quina descripció defineix correctament la finalitat d'una 'crida de sistema' (System Call)?",
            "options": [
              "Gestionar interrupcions dels perifèrics exclusivament hardware.",
              "Proporcionar una interfície segura entre l'espai d'usuari (aplicacions) i l'espai de nucli (kernel).",
              "Assignar espai directe al disc dur sense mediació del sistema operatiu."
            ],
            "answer": 1,
            "explanation": "Les aplicacions no poden tocar hardware o tasques crítiques, han de cridar al kernel mitjançant Syscalls (open, read, fork...)."
          }
        ]
      },
      {
        "title": "Test FSO Tema 1 Wala",
        "questions": [
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
          }
        ]
      },
      {
        "title": "Test Primer Parcial 2025",
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
        "title": "Examen FSO Temes 1 i 2 (2022 Solució)",
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
            "q": "Quina descripció defineix correctament la finalitat d'una 'crida de sistema' (System Call)?",
            "options": [
              "Gestionar interrupcions dels perifèrics exclusivament hardware.",
              "Proporcionar una interfície segura entre l'espai d'usuari (aplicacions) i l'espai de nucli (kernel).",
              "Assignar espai directe al disc dur sense mediació del sistema operatiu."
            ],
            "answer": 1,
            "explanation": "Les aplicacions no poden tocar hardware o tasques crítiques, han de cridar al kernel mitjançant Syscalls (open, read, fork...)."
          }
        ]
      },
      {
        "title": "Test Interactiu Avançat (Original Web)",
        "questions": [
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
            "q": "Quina descripció defineix correctament la finalitat d'una 'crida de sistema' (System Call)?",
            "options": [
              "Gestionar interrupcions dels perifèrics exclusivament hardware.",
              "Proporcionar una interfície segura entre l'espai d'usuari (aplicacions) i l'espai de nucli (kernel).",
              "Assignar espai directe al disc dur sense mediació del sistema operatiu."
            ],
            "answer": 1,
            "explanation": "Les aplicacions no poden tocar hardware o tasques crítiques, han de cridar al kernel mitjançant Syscalls (open, read, fork...)."
          }
        ]
      },
      {
        "title": "Parcial Antic / Extra",
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
        "title": "Wala Free - TAC 12346",
        "questions": [
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
            "q": "Una evolució: Run → Blocked → Ready... Què causa tìpicament l'anada a Blocked del procés M, i posteriorment el retorn a Ready?",
            "options": [
              "S'ha demanat crear un procés fill // i un context switch posterior.",
              "El quantum del timer ha caducat // i el procés ja s'ha refredat.",
              "M demana llegir un fitxer (Syscall E/S) // l'E/S finalitza i el disc llença interrupció HW de fi."
            ],
            "answer": 2,
            "explanation": "Run a Blocked és voluntari (demano lectura a disc, la CPU va molt ràpida i m'he d'esperar). El disc avisa per HW (interrupció) i el kernel em posa de Blocked a Ready."
          }
        ]
      },
      {
        "title": "Recopilatori Primer Parcial",
        "questions": [
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
      }
    ],
    "tests_generats": [
      {
        "title": "Simulacre Pràctic P1 (Variant #1)",
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
            "q": "Que permet fer la tècnica de DMA (Direct Memory Access)?",
            "options": [
              "Permet establir accés directe entre discs compartits per varies CPUs de forma paralela.",
              "Permet l'assignació indirecta d'adreces virtuals de disc pur a la CPU.",
              "Permet fer transferències complexes i grans blocs d'informació entre disc o dispositius E/S i la RAM sense usar temps contínu de la CPU."
            ],
            "answer": 2,
            "explanation": "El DMA s'apropia del bus i escriu els blocs de Bytes d'E/S directament a la RAM. La CPU pot fer altres tasques mentrestant."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #2)",
        "questions": [
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
        "title": "Simulacre Pràctic P1 (Variant #3)",
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
        "title": "Simulacre Pràctic P1 (Variant #4)",
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
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #5)",
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
        "title": "Simulacre Pràctic P1 (Variant #6)",
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
        "title": "Simulacre Pràctic P1 (Variant #7)",
        "questions": [
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
            "q": "(General) Quina és una de les finalitats 24 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 24",
              "Evitar interrupcions",
              "Crear 24 zombis",
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
            "q": "Què produeix una anomalia 'efecte comboi' (Convoy Effect)?",
            "options": [
              "Un procés molt CPU-intensiu i llarg en un sistema no apropiatiu retarda totalment a processos molt curts darrere seu.",
              "Un dispositiu de xarxa monopolitzant contínuament el DMA sencer de la placa base.",
              "Fer fora de CPU a processos amb alta prioritat per inanició."
            ],
            "answer": 0,
            "explanation": "Sol passar al sistema FCFS (First Come, First Serve) pur on un procés gegant col·lapsa l'arribada rere seu de múltiples processos 'ràpids'."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #9)",
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
        "title": "Simulacre Pràctic P1 (Variant #10)",
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
            "q": "(General) Quina és una de les finalitats 3 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 3",
              "Evitar interrupcions",
              "Crear 3 zombis",
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
        "title": "Simulacre Pràctic P1 (Variant #12)",
        "questions": [
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
        "title": "Simulacre Pràctic P1 (Variant #13)",
        "questions": [
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
        "title": "Simulacre Pràctic P1 (Variant #14)",
        "questions": [
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
            "q": "(General) Quina és una de les finalitats 6 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 6",
              "Evitar interrupcions",
              "Crear 6 zombis",
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
            "q": "Quina descripció defineix correctament la finalitat d'una 'crida de sistema' (System Call)?",
            "options": [
              "Gestionar interrupcions dels perifèrics exclusivament hardware.",
              "Proporcionar una interfície segura entre l'espai d'usuari (aplicacions) i l'espai de nucli (kernel).",
              "Assignar espai directe al disc dur sense mediació del sistema operatiu."
            ],
            "answer": 1,
            "explanation": "Les aplicacions no poden tocar hardware o tasques crítiques, han de cridar al kernel mitjançant Syscalls (open, read, fork...)."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #16)",
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
            "q": "(General) Quina és una de les finalitats 24 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 24",
              "Evitar interrupcions",
              "Crear 24 zombis",
              "Processament de text"
            ],
            "answer": 0,
            "explanation": "La gestió és fonamental per qualsevol SO actiu."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #17)",
        "questions": [
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
        "title": "Simulacre Pràctic P1 (Variant #18)",
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
        "title": "Simulacre Pràctic P1 (Variant #19)",
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
        "title": "Simulacre Pràctic P1 (Variant #20)",
        "questions": [
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
        "title": "Simulacre Pràctic P1 (Variant #21)",
        "questions": [
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
        "title": "Simulacre Pràctic P1 (Variant #22)",
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
        "title": "Simulacre Pràctic P1 (Variant #23)",
        "questions": [
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
            "q": "(General) Quina és una de les finalitats 16 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 16",
              "Evitar interrupcions",
              "Crear 16 zombis",
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
        "title": "Simulacre Pràctic P1 (Variant #25)",
        "questions": [
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
            "q": "Que permet fer la tècnica de DMA (Direct Memory Access)?",
            "options": [
              "Permet establir accés directe entre discs compartits per varies CPUs de forma paralela.",
              "Permet l'assignació indirecta d'adreces virtuals de disc pur a la CPU.",
              "Permet fer transferències complexes i grans blocs d'informació entre disc o dispositius E/S i la RAM sense usar temps contínu de la CPU."
            ],
            "answer": 2,
            "explanation": "El DMA s'apropia del bus i escriu els blocs de Bytes d'E/S directament a la RAM. La CPU pot fer altres tasques mentrestant."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #26)",
        "questions": [
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
        "title": "Simulacre Pràctic P1 (Variant #27)",
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
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #28)",
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
            "q": "En un Planificador típic d'E/S o OS; A qui o a què té per tàrea el 'planificador de mig termini'?",
            "options": [
              "Garantizar que els PIDs s'assignin per ordre pur seqüencial estricte de naixement del kernel.",
              "Decidir quan s'ha de treure temporalment tros/parts o el procés sencer de la memòria a disc (swapping) per gestionar hiper-saturació.",
              "Decidir exclusivament el pròxim procés a passar d'estat READY a RUN abans de temps llargs estancat."
            ],
            "answer": 1,
            "explanation": "The medium terms resolves virtual memory problems moving suspended blocks by SWAPPING them continuously to backend Storage drives temporarily."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #29)",
        "questions": [
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
        "title": "Simulacre Pràctic P1 (Variant #30)",
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
            "q": "(General) Quina és una de les finalitats 29 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 29",
              "Evitar interrupcions",
              "Crear 29 zombis",
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
            "q": "(General) Quina és una de les finalitats 6 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 6",
              "Evitar interrupcions",
              "Crear 6 zombis",
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
            "q": "(General) Quina és una de les finalitats 3 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 3",
              "Evitar interrupcions",
              "Crear 3 zombis",
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
        "title": "Simulacre Pràctic P1 (Variant #34)",
        "questions": [
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
        "title": "Simulacre Pràctic P1 (Variant #35)",
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
            "q": "(General) Quina és una de les finalitats 30 d'un Sistema Operatiu de multiprogramació?",
            "options": [
              "Gestió recursos 30",
              "Evitar interrupcions",
              "Crear 30 zombis",
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
        "title": "Simulacre Pràctic P1 (Variant #37)",
        "questions": [
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
        "title": "Simulacre Pràctic P1 (Variant #38)",
        "questions": [
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
            "q": "Una evolució: Run → Blocked → Ready... Què causa tìpicament l'anada a Blocked del procés M, i posteriorment el retorn a Ready?",
            "options": [
              "S'ha demanat crear un procés fill // i un context switch posterior.",
              "El quantum del timer ha caducat // i el procés ja s'ha refredat.",
              "M demana llegir un fitxer (Syscall E/S) // l'E/S finalitza i el disc llença interrupció HW de fi."
            ],
            "answer": 2,
            "explanation": "Run a Blocked és voluntari (demano lectura a disc, la CPU va molt ràpida i m'he d'esperar). El disc avisa per HW (interrupció) i el kernel em posa de Blocked a Ready."
          }
        ]
      },
      {
        "title": "Simulacre Pràctic P1 (Variant #40)",
        "questions": [
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
      }
    ]
  }
};
