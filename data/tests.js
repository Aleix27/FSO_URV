// Combined Test Data Generator
// This combines existing known test questions and generated tests for the study web app
const testsData = {
    parcial1: {
        tests_assignatura: [
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
    "q": "Per a què es fan servir primordialment les interrupcions als dispositius?",
    "options": [
      "Per permetre que els programes d'usuari facin crides de xarxa.",
      "Per a informar al kernel que un dispositiu de hardware ha finalitzat l'operació sol·licitada.",
      "Per permetre que un programa faci E/S directament al disc evitant el kernel.",
      "Per a treure exclusivament la memòria RAM assignada a un procés actiu."
    ],
    "answer": 1,
    "explanation": "Les interrupcions són mecanismes asíncons hardware que notifiquen al processador d'events com el fi d'una d'E/S sense fer 'polling'."
  },
  {
    "q": "Què diferencia principalment un SO multiprogramat d'un de temps compartit?",
    "options": [
      "La capacitat d'executar interrupcions asíncrones d'usuari.",
      "Absolutament res, amdbós termes descriuen el mateix SO.",
      "La utilització d'estrategies de paginació i swappng de disc pur.",
      "La capacitat fer fora un procés de la CPU sense la seva cooperació (escollint el moment mitjançant apropiació temporal o quanta)."
    ],
    "answer": 3,
    "explanation": "Un SO temps compartit TALLA (preempts) l'execució del procés per repartir interactivitat a d'altres freqüentment."
  },
  {
    "q": "Que permet fer la tècnica de DMA (Direct Memory Access)?",
    "options": [
      "Controla la seguretat en els processos que corren només a multi-threads independents.",
      "Permet establir accés directe entre discs compartits per varies CPUs de forma paralela.",
      "Permet l'assignació indirecta d'adreces virtuals de disc pur a la CPU.",
      "Permet fer transferències complexes i grans blocs d'informació entre disc o dispositius E/S i la RAM sense usar temps contínu de la CPU."
    ],
    "answer": 3,
    "explanation": "El DMA s'apropia del bus i escriu els blocs de Bytes d'E/S directament a la RAM. La CPU pot fer altres tasques mentrestant."
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
    "explanation": "Nota: el pur Multiprogramat té millor throughput global perquè no perd tant temps 'context switching' i maxifica tenir la CPU totalment plena. El Temps compartit optimitza TEMPS DE RESPOSTA per pantalla."
  },
  {
    "q": "Què permet atorgar passar d'un procés single-thread (pesat tradicional) a programació amb multi-thread al mateix procés?",
    "options": [
      "Duplicar tot el mapa complet d'adreces Base Limit per als nous segments de l'aplicatiu",
      "Executar diferents parts, rutines o algoritmes del mateix programa o procés de manera simultània-concurrent.",
      "Incrementar el nombre màxim d'usuaris que el SO admet al Terminal de Xarxa.",
      "Poder augmentar dràsticament l'aïllament i seguretat completa de la informació privada del procés."
    ],
    "answer": 1,
    "explanation": "Els threads coexisteixen amb memoria global però stack separat per tal de donar operació asíncrona a tasques com el recàlcul i GUI dins la MATEIXA aplicacić."
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
    "explanation": "Els estats centrals a tota CPU Scheduler són RUN (A l'equip processant), READY (Esperant al Planificador) o BLOCKED (Aturat de forma autònoma esperant Dispositiu/Timer)."
  },
  {
    "q": "En un Planificador típic d'E/S o OS; A qui o a què té per tàrea el 'planificador de mig termini'?",
    "options": [
      "Garantizar que els PIDs s'assignin per ordre pur seqüencial estricte de naixement del kernel.",
      "Decidir quan s'ha de treure temporalment tros/parts o el procés sencer de la memòria a disc (swapping) per gestionar hiper-saturació.",
      "Decidir exclusivament el pròxim procés a passar d'estat READY a RUN abans de temps llargs estancat.",
      "Gestió d'assignació d'E/S DMA compartit de xarxa per buffers directes al PCB del pare de la trucada."
    ],
    "answer": 1,
    "explanation": "The short term assigns CPU. The medium terms resolves virtual memory problems moving suspended blocks by SWAPPING them continuously to backend Storage drives temporarily."
  },
  {
    "q": "Al següent codi shell:  x=5; y=5; echo $x+$y  ... Que imprimeix precisament per línia la comanda 'echo' final?",
    "options": [
      "10",
      "x+y",
      "55",
      "5+5"
    ],
    "answer": 3,
    "explanation": "Per resoldre l'impresió posa exactament el text substituint variables si detecta el $. $x = 5. L'operador '+' text = +. $y = 5. Per tant, resultat literal 5+5."
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
    "explanation": "Mach va ser un intent fort modern als 80s / 90s per imposar l'arquitectura Microkernel per davant dels excessivament perillosos o complicats nuclis monòlitics lents tot en un."
  },
  {
    "q": "Quina descripció defineix correctament la finalitat d'una 'crida de sistema' (System Call)?",
    "options": [
      "Gestionar interrupcions dels perifèrics exclusivament hardware.",
      "Emmagatzemar valors temporals del PCB durant un context switch.",
      "Proporcionar una interfície segura entre l'espai d'usuari (aplicacions) i l'espai de nucli (kernel).",
      "Assignar espai directe al disc dur sense mediació del sistema operatiu."
    ],
    "answer": 2,
    "explanation": "Les aplicacions no poden tocar hardware o tasques crítiques, han de cridar al kernel mitjançant Syscalls (open, read, fork...)."
  },
  {
    "q": "Imagina un planificador que usa Round Robin pur on el quant (quantum) és enorme i tendeix a infinit. A quin altre algorisme s'assemblarà aquest comportament?",
    "options": [
      "SJF (Shortest Job First).",
      "FCFS (First Come, First Served).",
      "Temps Compartit Apropiatiu agressiu.",
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
      "Passar variables d'entorn als fils (threads) en execució actius.",
      "Fer un Swap complet d'un procés bloquejat a disc secundari per falta de RAM."
    ],
    "answer": 1,
    "explanation": "El Job Scheduler (Llarg termini) determina quants i quins programes s'agafen del spool/disc per ser injectats a memòria principal."
  },
  {
    "q": "Diferència entre procés i thread (fil): per quin motiu un canvi de context (Context Switch) entre threads és més RÀPID que entre processos?",
    "options": [
      "Els threads no necessiten Pila (Stack) on guardar variables.",
      "Els threads no s'han d'apropiar mai, col·laboren sols.",
      "S'evita el pesat canvi dels mapes de memòria virtual posat que comparteixen l'espai d'adreces Base i Límit.",
      "Els threads no usen la mateixa CPU, s'auto-balancegen a la GPU."
    ],
    "answer": 2,
    "explanation": "Un procés pesat implica canviar tot l'espai de memòria virtual, variables, caches, llistes. Els threads d'un mateix PID ja comparteixen tot això."
  },
  {
    "q": "Quan parlem d'Arquitectura de Microkernel, quina és la seva GRAN fortalesa?",
    "options": [
      "Moltíssim rendiment en comparació amb solucions monolítiques degut a poques interrupcions.",
      "Permet compilar mòduls a l'interior mateix del kernel de la placa.",
      "Seguretat i estabilitat: la majoria de subsistemes d'E/S i funcions de SO operen com processos d'usuari aïllats.",
      "Usa zero memòria virtual alhora d'arrancar l'ordindar per estalviar RAM."
    ],
    "answer": 2,
    "explanation": "Aïlla completament els serveis SO a espai usuari. Si el driver de xarxa peta, el sistema no peta."
  },
  {
    "q": "Una evolució: Run → Blocked → Ready... Què causa tìpicament l'anada a Blocked del procés M, i posteriorment el retorn a Ready?",
    "options": [
      "S'ha demanat crear un procés fill // i un context switch posterior.",
      "El quantum del timer ha caducat // i el procés ja s'ha refredat.",
      "L'usuari ha premut Ctrl+C // i el Kernel tanca l'aplicatiu.",
      "M demana llegir un fitxer (Syscall E/S) // l'E/S finalitza i el disc llença interrupció HW de fi."
    ],
    "answer": 3,
    "explanation": "Run a Blocked és voluntari (demano lectura a disc, la CPU va molt ràpida i m'he d'esperar). El disc avisa per HW (interrupció) i el kernel em posa de Blocked a Ready."
  },
  {
    "q": "Què produeix una anomalia 'efecte comboi' (Convoy Effect)?",
    "options": [
      "Un procés es multiplica en milers de fils buidant l'espai de pila.",
      "Un procés molt CPU-intensiu i llarg en un sistema no apropiatiu retarda totalment a processos molt curts darrere seu.",
      "Un dispositiu de xarxa monopolitzant contínuament el DMA sencer de la placa base.",
      "Fer fora de CPU a processos amb alta prioritat per inanició."
    ],
    "answer": 1,
    "explanation": "Sol passar al sistema FCFS (First Come, First Serve) pur on un procés gegant col·lapsa l'arribada rere seu de múltiples processos 'ràpids'."
  },
  {
    "q": "En una interfície de línia de comandes UNIX com bash, quina d'aquestes línies farà efectivament una SUMA aritmètica correcta de variables (obtenint resultat numèric 12)?",
    "options": [
      "x=6; y=6; z=x+y; echo $z",
      "x=6; y=6; z=$x+$y; echo z",
      "x=6; y=6; z=$((x+y)); echo $z",
      "x=6; y=6; z=sum($x, $y); echo $z"
    ],
    "answer": 2,
    "explanation": "bash per defecte tracta tot com text. La doble paràntesi $(()) invoca l'avaluació matemàtica i l'entorn de càlcul explícit de shell de linux."
  },
  {
    "q": "Com actua un sistema que usa Interrupcions en lloc del mètode de 'Polling' (Enquesta Típica) per dispositius lents?",
    "options": [
      "La CPU consulta constantment l'estat del dispositiu 1000 cops per min fins agafar la dada.",
      "Evita absolutament el sistema operatiu enviant les dades via memòria L2 de la gràfica (GPU).",
      "Permet evitar l'alta pèrdua de temps (busy waiting) de CPU, ja que el Hardware avisa via senyal asíncron en complir feina.",
      "Requerix que tots els processos llancin l'estat 'Zombie'."
    ],
    "answer": 2,
    "explanation": "Polling desgasta inútilment cicles de CPU. Amb interrupcions, el xip fa la seva, mentre CPU processa Excel o Firefox... xip avisa i CPU s'aparta un microsegon."
  },
  {
    "q": "Imagina un sistema operatiu (Kernel modern). Quin esdeveniment provoca necessàriament el que s'anomena 'Canvi de Mode' (de Mode Usuari a Mode Kernel)?",
    "options": [
      "El planificador canvia un procés A per un procés B a la memòria cau.",
      "Un procés sol·licita una Crida a Sistema com (open file) per llegir l'arxiu dels preus de venda.",
      "Un registre general R1 de la cpu duplica la seva memòria RAM al buffer.",
      "La connexió a una xarxa WIFI canvia lliurement de freqüència lliure internament per proxy d'App."
    ],
    "answer": 1,
    "explanation": "Qualsevol operació crítica que necessiti drets (Syscalls, traps o interrupcions físiques exteriors a l'usuari) fa que la CPU activi el Mode Kernel posant bit privilegi 0."
  },
  {
    "q": "Les inicials API usades per accedir via codi alt nivell a les Syscalls, solen ocultar completament...",
    "options": [
      "Si la prioritat de MultiProgramació està activada manualment.",
      "Com s'estructuren els registres, els passos concrets i números seqüencials de interrupció software al sistema receptor d'arrel.",
      "El control block (PCB), deixant a l'usuari borrar-lo fàcilment manualment referenciant memòria.",
      "Els mòduls gràfics completament i evitant la GUI del ordinador."
    ],
    "answer": 1,
    "explanation": "Cridar Win32 API o POSIX API (libc open/write) amaga la complexitat en codi compilador x86/ARM de crida per trap directe per interrupció i vector d'entrada."
  },
  {
    "q": "Quin és l'avantatge primordial del planificador SJF (Shortest Job First)?",
    "options": [
      "És altíssimament segur.",
      "És el més just de forma absolut i eviten tot risc de retingut final temporal d'un procés lent per sempre (zero inanició).",
      "És matemàticament idoni: llança el menor temps MIG d'ESPERA possible combinant tota la cua de Ready en un vector perfecte.",
      "Fàcil implementació real exacte en sistemes domèstics atès conéixer de veritat futurs clars d'un processador."
    ],
    "answer": 2,
    "explanation": "SJF minimitza l'espera mitja col·locant el més ràpid primer, per evitar el comboi. Problema: En veritat NO COMPTE EL FUTUR (usant per tant heurístiques/exp net/est), i genera inanició a tasques llargues."
  },
  {
    "q": "Quina descripció engloba a la Memòria Física Ram que fa un sistema multiprogramat com pertoca de base?",
    "options": [
      "Cap aplicació es fica a RAM si no hi ha completament DMA vinculat previ del usuari.",
      "Només l'aplicació en ús per CPU s'hi manté, i al ser canviant tot el buffer d'aquesta es buida absolutament.",
      "Molts processos hi cohàbiten simultàniament aïllats en blocs reservats gràcies base/límit pel salt de context sense recarregar de disc a cada 20 ms.",
      "No actua en Multiprogramat si no en Monoprogramat estricte local temporal."
    ],
    "answer": 2,
    "explanation": "El pre-requisit bàsic del multiprogramat és mantenir molts processos vius a la RAM alhora. Només fa swap-out a disc dur la part estrictament necessària quan es satura la mateix."
  },
  {
    "q": "La diferència i motius base d'ús de temps de Tornada i temps d'Espera en l'anàlisi...",
    "options": [
      "La Tornada analitza el temps total inclosa de Ready a Turnaround Final, Espera calcula Cicles Run CPU.",
      "Temps d'espera (WT) calcula on passiva l'espera (cua READY), Tornada (TT) es el lapse global de vida des d'entrada fins la seva Extinció Definitiva.",
      "La meïtat del vector E/S, ja que sense ell mai existix Wait Time final.",
      "Espera usa DMA pur de hardware físic absolut de GPU només per fer preempció final."
    ],
    "answer": 1,
    "explanation": "Espera = el total acumulat només dins READY. Tornada (Turnaround) globalitza: Espera + Actiu_CPU + Temps a Blocked_E/S. Des de creació fina mort d'acomiadament."
  },
  {
    "q": "Quin d'aquests fenòmens clau de hardware NO POT formar part lògica del control per part de temps compartit?",
    "options": [
      "Interrupció Típica originada d'un Temporitzador del microXip Base (Timer de Quàntum).",
      "Les interrupcions HW d'Acabament de DMA o Perifèrics lents com Mouse Moviment.",
      "El forçat a Run continu prement crida del shell sense permissos extres externs o base.",
      "Pas Autònom a Blocked / Wait."
    ],
    "answer": 2,
    "explanation": "Sistemes T-Compartit usa Timer actiu, E/S hardware normal per ser avui i peticions syscall per voluntari, cap usuari o crida pot forzar l'stay in execution run."
  }
],
        tests_generats: [
  {
    "q": "(Tema 1) Quina estructura de sistema operatiu aïlla millor les fallades de components (drivers, sistemes d'arxius) posant-los a l'espai d'usuari?",
    "options": [
      "SO Monolític",
      "Estructura en Capes estricta",
      "Microkernel",
      "Temps Compartit Pur"
    ],
    "answer": 2,
    "explanation": "L'arquitectura Microkernel posa tants components com sigui possible a l'espai d'usuari per evitar que la fallada d'un component col·lapsi tot el SO."
  },
  {
    "q": "(Tema 1) Quina de les següents afirmacions sobre les 'Crides a Sistema' (Syscalls) és CERT?",
    "options": [
      "Només es poden executar quan el processador està en Mode Usuari per seguretat.",
      "Són la interfície programable que el Kernel ofereix als programes d'usuari.",
      "Són crides asíncrones que provenen directament de l'usuari final mitjançant el teclat.",
      "S'executen molt més ràpid si s'eviten els vectors d'interrupció."
    ],
    "answer": 1,
    "explanation": "Les System Calls aporten la API segura per accedir a recursos del kernel des de l'espai d'usuari (canviant a Mode Supervisor temporalment)."
  },
  {
    "q": "(Tema 2) Com es representa a nivell de SO la informació vital i contextual de QUALSEVOL procés local?",
    "options": [
      "Al PCB (Process Control Block)",
      "A la MBR (Master Boot Record)",
      "Al directori d'Arxius Ocult de ROOT",
      "Exclusivament als registres Base i Límit del CPU."
    ],
    "answer": 0,
    "explanation": "El PCB (o descriptor de procés) conté TOTA la informació (adreces, PID, estat, prioritat, temps acumulats..)."
  },
  {
    "q": "(Tema 2) Identifica quina de les transicions d'estat a continuació és COMPLETAMENT INVIABLE en un cicle de vida estàndard d'un Procés:",
    "options": [
      "De RUN a READY (Expiració de Quantum o planificador extern apropriatiu)",
      "De BLOCKED a RUN (Interrupció finalitzada i pas a execució directíssim)",
      "De RUN a BLOCKED (Demana Entrada per teclat a un dispositiu lent)",
      "De READY a RUN (El Scheduler - Dispatcher - l'ha seleccionat per ocupar la CPU)."
    ],
    "answer": 1,
    "explanation": "D'un bloqueig, ha de passar obligadament a READY. No es pot anar directe del bloqueig a la CPU, has d'esperar a que el planificador et vulgui acollir després de tornar a l'estat LLest."
  },
  {
    "q": "(Tema 2) Típicament, quin planificador executa la transició per col·locar processos de memòria secundària a la cua 'Ready' per regular el multiprogramat global?",
    "options": [
      "Planificador a Llarg Termini (Job Scheduler)",
      "Planificador de Mig Termini (Swapper)",
      "Planificador de Curt Termini (CPU Scheduler / DIspatcher)",
      "L'usuari via shell bash command limits"
    ],
    "answer": 0,
    "explanation": "El Llarg termini (Admisió) decideix el grau absolut de multiprogramació i quins procesos entren a memòria primària inicialment per executar-se."
  },
  {
    "q": "(Tema 3) Què passa si programem un fill en C usant `fork()`? Què retorna exactament el kernel al procés pare original i al procés nou creat (fill)?",
    "options": [
      "Als dos els hi retorna un 0 (zero) idèntic en finalitzar l'èxit.",
      "Retorna el PID (nombre positiu) del fill al pare, i un 0 al fill.",
      "Retorna al pare la paraula 'OK', al fill el status de xarxa actiu.",
      "Retorna un 1 al Fill exclusivament i a la resta no retorna res i mor."
    ],
    "answer": 1,
    "explanation": "L'essència de `fork()` per diferenciar-se es basa en els valors de retorn: El fill té 0. El pare guanya el numèric (PID) del de baix."
  },
  {
    "q": "(Tema 3) Quant de temps costa (cost afegit del nucli) fer un canvi de fil (Thread Switch) enfront d'un canvi de context complet de procés enterament?",
    "options": [
      "Trigaran i costaran exactament el mateix número de cicles de CPU precalculats.",
      "És MOLT més car i difícil un canvi entre els fils per excés de registres duplicats i solapaments de caché.",
      "El canvi de fil és DRÀSTICAMENT inferior i d'efecte gairebé instantani en comparació, ja que l'espai d'adreces Base Limit és el mateix a conservar.",
      "Els fils no tenen canvi de context."
    ],
    "answer": 2,
    "explanation": "Els threads que formen el mateix procés operatiu col·laboren amb la mateixa taula de variables estructurals de disc i llistes generals, escurçant massivament la càrrega/sobrecàrrega (overhead)."
  },
  {
    "q": "(Tema 3) Quin model relaciona Múltiples fils programats i desenvolupats a nivell Usuari a Només UN thread únic al Kernel base (Configuració Molts-a-Un)? Quina és la principal conseqüència pràctica d'això?",
    "options": [
      "Si de casualitat un sol dels fills entra a Blocked per una E/S, els companys poden seguir corrent lliurement sense molestar.",
      "És lent doncs consumeix massa crides a Sistema (overhead constant).",
      "Si un sol i únic thread usuari entra i queda suspès esperant a 'Blocked', TOTA la aplicació sencera i fils de suport queden morts (bloquejats).",
      "És idoni per Arquitectura multi core x16 d'un procesador paral·lelitzant els processos fàcilment en nuclis."
    ],
    "answer": 2,
    "explanation": "Molts threads usuari acoplats a UN de solitari a kernel-level no suporta escalabilitat, ni poden treballar sobre nuclis d'E/S; si el fill inferior truca syscal-espera, bloca la unitat pare completa."
  },
  {
    "q": "(Tema 4) Si apliqués l'algorisme RR (Round Robin), com s'aconsegueix evitar per complert el que s'anomena l'efecte Inanició (Starvation) en tasques enllestides?",
    "options": [
      "Sempre ho fa, per natura atès donar estones obligades igualitaris ('Q' Talls Temporals) equitatius i rotatoris circulars a tots.",
      "L'evita posat a afegir regles d'envelliment (aging) obligatòriament o patiran eternament les grans.",
      "RR no ho evita mai l'enguliment a llarg termini per efectes comboi de prioritats dinàmiques elevades als fills de tasques grans.",
      "Requerint que tots siguin multithreads i només programats en shell scripting exclusiu."
    ],
    "answer": 0,
    "explanation": "El pur gir rotacional igual a l'A, dóna temps garantizat llimiti i regular a la llista d'esbarjo, evitant totalment posponer endarrerits la vida d'un procés permanentment en espera."
  },
  {
    "q": "(Tema 4) A un algorisme per prioritats. Un fil pot empassar-se llibertats d'ús i viure esperant sense finalització al no tindre rang adequat quan un reguitzell de nous actius alt-graus pilla la run. Solució per excel·lència:",
    "options": [
      "La tècnica coneguda per 'Envelliment' o Aging, pujant de mica i mica poc a poc el radi temporal numèric o de posició de qui va retingut.",
      "Mètode SJF exclusiu obligatori combinat al hardware L1 cache de la targeta d'imatge (GPU).",
      "Interrupcions periòdiques de Llarg Termini via Syscall 0x11 cap els perifèrics de disc.",
      "Forçar-los a anar a un estat 'ZOMBIE'."
    ],
    "answer": 0,
    "explanation": "La prevenció principal del fenomen d'inanició temporal és incrementar a poc a poc o de manera periòdica la urgència ('prioritat') del procés que mai guanya CPU."
  },
  {
    "q": "(Tema 4) Un algorisme tipus SJF (Shortest Job First) fa ús teòric de l'estimació en predir quin procés d'execució necessitarà menys durada (o cicle d'arribada propera) abans de desitjar Entrada - Sortida. Quin propòsit aconsegueix o domina a resultats numèrics idílics d'anàlisis?",
    "options": [
      "MinIMITZAR el temps mitjà de TORNADA però allargar l'inici.",
      "MinIMITZAR a llarg termini el nivell i proporció temps MITJÀ d'espera i optimitza CPU per als ràfegues curtes d'arribada immediata que pateixen el temps de col·lapse (comboi).",
      "Garantizar que NO tinguem envelliment extern extremat i els sistemes perillin eternament per càrregues curtes al Ready.",
      "Cap, només pot utilitzar-se pràcticament per sistemes reals comercials existents per defectes (Apple / Window Server, etc)."
    ],
    "answer": 1,
    "explanation": "La certesa per a Shortest Job provada formula es que te the absolute MINIMUM limit global Average Target Wait Time quan analitzem ràfegues, movent endavant ràpids traiem pes i molta més rotació de cues."
  },
  {
    "q": "(Tema 6) Dins la programació a shell bash (UNIX) de guions, quin operand es fa servir naturalment per enviar la sortida (l'Output Standard num 1) del terminal anterior com a nova dada directa (Input Standar) al qual demana el previ al següent terminal/comanda?",
    "options": [
      "L'operari Pipe Vertical ( | )",
      "Redirecció estricta d'errors tipus ( 2> ) i fi per text",
      "La fusió binaria pura en memòria cau via 'append direct' a fitxer d'escriptura (>>)",
      "A UNIX no es pot fusionar directament l'output si no usem prèviament C codi pel mitg via compilador i linkat."
    ],
    "answer": 0,
    "explanation": "La tuberia de shell ('pipe', per la barra | ) empasta la dada emesa per comandament com output de A dins a l'entrada (stdin) d'utilitats noves en bateria comandes B."
  },
  {
    "q": "(Tema 6) Un cop tancats els processos de Codi o Shell (Bash, SH), trobem la crida `$?`. Per a què serveix majoritàriament consultar `$?` en línies properes subseqüents a l'ordinador?",
    "options": [
      "Emmagatzema temporalment el nom literal de l'anterior línia sense excepció i el valor PID original base.",
      "Recull internament l'Error Standard (Descriptor número 2) i tota sortida defectiva textual que emeti completament aquesta darrera dita.",
      "Mostra el status/número d'acabament final de la darrera operació executada instintivament - On sortida num 0 acostuma ser EXIT_SUCCESS o reeiximent real al cent per cent.",
      "Dona informació de quants arxius físics locals s'han generat internament al directori."
    ],
    "answer": 2,
    "explanation": "Un valor recollit zero (0) sempre al echo '$?' donarà que allò passat era sense error greu ni alertatiu ni forçat complet. És la forma primordial per scripts per actuar via CONDICIONAL (If [ $? -eq 0 ])."
  },
  {
    "q": "(Tema 1 / 2) Si s'usa la instrucció en sistema shell que digui dita `ps -lf`, quina dada sota camp conegut de S ens indicarà si es manté suspès però enllestit pel sistema llest per passar a córrer de nou amb CPU lliure propera?",
    "options": [
      "T (Terminat/Aturat/Zombie)",
      "R (Running)",
      "I (Idle/Buidat)",
      "R (Ready) o S de stat / Wait/Sleep depenent del procés segons implementació de visualitzador ps unix pur però el Ready purament pot barrejar-se a Runnable com a codi actiu actuant com espera del Queue o RunQueue activa corrent real."
    ],
    "answer": 3,
    "explanation": "Cal notar que la implementació POSIX 'ps' englobarà un Runnable procés que pot caure dins CPU actii però que formalment esperar de cues normalment com 'R'. "
  },
  {
    "q": "(Tema 3/4) Que succeeix exactament conceptual a dins si cridem al C (`Linux GNU`) una crida del Kernel `wait()` i tenint varis fils morts?",
    "options": [
      "L'usuari ha de recuperar completament tot el disc que hi perdi.",
      "No fa res si estem l'estat pur en Threads d'usuari directament implementat sense Kernel LWP (Threads 1:m Usuaris - 1 Kernel).",
      "El Kernel tanca l'execució de qui la llença forçosament sense dades d'apuntador al pare base.",
      "El Procés s'espera si té Fills (processos zombis o nous) a recuperar el codi d'estat a tancament amb neteja completa per a aquest i eviten estats difunts i ocupació al sistema de PCB fantasma limitatiu de cues lliures o zombies purament externats com morts de taulers limitats."
    ],
    "answer": 3,
    "explanation": "Si pare crea (fork) fill A, fill pot mortir... però queda taula interna ocupada (Zombie pid viu). 'Wait' d'una trucada a l'API allibera això totalment. La Crida fa un atur fins a tindre això de resultats finalitzats."
  },
  {
    "q": "(Tema 1) Quin element hardware o registre ha canviat l'ordem lliurement cap i avall de manera ràpida permetent que l'Usuari pugui llençar ordres cap el Mode Kernel d'una forma a la seguretat evitada dels Sistemes Base?",
    "options": [
      "L'interrupció Trap a causa d'una System Call sol·licitada (Bit mode s'enganya 0 capc al controlador).",
      "La pila virtual compartida oberta de Root amb control per registre pur de memòria i busos PCIE sense mode dual tancat real o fals de bit real 1.",
      "S'evita el registre i el Bit Dual ja que la capa Codi C posa System Kernel directe en base lliure.",
      "Només a partir dels Xips DMA físic extern puros."
    ],
    "answer": 0,
    "explanation": "El sistema de protecció per execucions és el d'Ús DUAL MODE. Usuari s'esgota la permisió al HW mode (Bit 1 base). Crides Sistema actúen d'excepcions Programables al Trap forçat cap controlador operatiu dalt a OS Base protegit en salt zero privilegi (kernel mode bit0)."
  },
  {
    "q": "(Tema 4) Si tenim planificació HRRN (Highest Response Ratio Next), es prioritzen segons una ràtio. Aquesta a priori penalitza de quina part l'assignació en arribades curtes però velles?",
    "options": [
      "Les afavoreix per efectes del temps portat a esperant dins sistema fent l'envelliment i calcul global dividents en relació a curta tasca pròpia limit.",
      "Fent exactament el contrari lliurement, sempre executen temps majors abans purs fins no envellir",
      "És Round Robin camuflat",
      "Nul"
    ],
    "answer": 0,
    "explanation": "HRRN ràtio = (W+S)/S. Dona suport per envelliment. W creix la relacio pel procés vell, i temps (S) xicotet ho multiplica exponencialment."
  },
  {
    "q": "(Tema 4) Com influeix fer Switch de context llargs pel Temps global (Turnaround) generalitzat complet i Throughput si la Cua manté Molts Processos menudets i Mida Quantum Lògic molt minúscul en compartiments lents a Temps Compartit d'Alt gir circular?",
    "options": [
      "Tot millora de manera massiva la eficiència CPU activa. Total 100/100 us actiu real pel xip final.",
      "Disminueix i minva globalment de gran mesura i extrem molt la qualitat d'execució d'eficiència a treballs perquè destrossa a causa de l' Overhead elevadísim (temps gastats extra intercanviant variables internes sense res de progrés i codificació real complerta al 30%).",
      "És just la mateixa efectivament, un Timer limit molt baix té relació asimptòtica perfectament escalada al número treballs i mai té limitacions pràctiqües i reals basat a un hardware.",
      "Ho eviten el Planificador Llarga durada exclusio real en RR base 3 pureses menudes."
    ],
    "answer": 1,
    "explanation": "El cost ocult extrem i fosc del Round robin ràpid saps posar un Q (quantum) prop i proper a un zero: El gir pot caure a ser de 80ms i canvi gasta 5 ms... gairebe percentatge del migdia la CPU perd canviant registres només operativament perdent productivitat forta d'arxius base i usuari codis base i real final operatiu fosc general..."
  },
  {
    "q": "(Tema 2) Són els estats Zombis als Cicles de Treball als SO'S capaços de seguir executant per compte propi el fil real fins que pare o Kernel recuperin i demanen fi de les estructures d'aquests PIDs velles inútils restades penjades en cues tancades d'entrada - esperes i sortida limit o a Ready pur?",
    "options": [
      "Cert a medias i pot forçar a sortir la E/S final que els penjava de Zombie o Deadlocked a Wait",
      "SÍ! Encara viuen consumint cicles RUN a baixa limitació limit prioritat background mort base al tauler en cua FCFS",
      "Sempre No absolut. Només és un PCB lliure a l'etapa Dead o Z. Els Processos ja finalitzaren execució (sortida total complet i caduc), deixant al cos mort la 'petjada fantasma' per mantenir Exit Status o Temps reals al compte al seu sistema que Pare esperava tenir referenciats d'existència fins netejar la taula o dades numèriques finals externes de valors.",
      "Els Zombies van i busquen fills."
    ],
    "answer": 2,
    "explanation": "L'Estat Zombie és un procés acabat per ell mateix del qual només sobreviu la seva mínima fitxa burocràtica amb resultats al Kernel esperant el seu pare recollir l'Acta de Defunció per crida (wait) alliberant fitxa sistema de números (PID slot llest). No fa programari dalt de RAM executa zero i caduc!"
  },
  {
    "q": "(Tema 1 / 4) Els Sistemes temps Compartits tenen per funció i filosofia real primordial aconseguir quin esdevenint/propòsit global o de percepció usuari pur absolut final general a pantalles obertes o multi processaments manuals de taules de visualitzacions externes oberts d'apliacions GUI simultaneament base?",
    "options": [
      "Proporció de Punts a l'Usuari en relació Temps Temps Processador pur maxim i net només d'estacaments",
      "Temps de RESPOSTA adequat, òptim per il·lusió o dació visual de múltiples usuaris compartint màquina com si el CPU i les targetes grafiques, interfícies gràfiques base pur d'una forma local exclusivament a la teva dispossicó ràpida a resposta minsa interactiva de mil·lisegons contínus.",
      "Aïllar el Throughput general. Destrossar els Threads pel Procés pur Monolític base final o pur real complert desats des fons",
      "Temps pur de tornades mitjanes basats sense forçat final extern i giratoris estables completaments en codis gràfics completament i evitant l'aturat forçós general i final exclusivament."
    ],
    "answer": 1,
    "explanation": "La intenció pur i objectiu del Time Shearing real compartit des del concepte als temps d'Unix original antics és permetre i garantir la interactivitat en consola. Optimitzar al Màxim l'agudesa visual o temps de RESPOSTA, donant 'petits trossos' rotatius perquè la UI respongui ràpid no l'eficàcia purament de CPU del Batch o monoprogramat."
  },
  {
    "q": "(Tema 6) Si fas en script de shell GNU / Unix  `ls -l > sortides.txt`, i de resultes trobem en consola que apareixen missatges de Permís Negat, Fitxers No trobats (error standard format); on podríem llegir els èxits reals obrint aquesta línia comanda de forma correcta completa visual limit general?",
    "options": [
      "Els erros surten només dins a text pel descrit base pur d'un o del sistema.",
      "Ambdós anirien directes sempre o general del txt i mai el prompt t'ho llegiria de volta i lliurement de visualitzar res extern intern fons",
      "Els encerts d'escrit pur Standard Out s'allotjen en sortides.txt i els errors apareixeran exclusius pel Terminal o Standart Error pur separat sense ser introduïts completament en sortides.txt a menys recanvi del format d'enviament limit o unificat `2>&1` complert i genèric tancat.",
      "Unificats complets exclusi en fitxers"
    ],
    "answer": 2,
    "explanation": "Per defecte la redirecció d'escriptrua limit major simple ( > ) sols canalitza l'arxiu Descriptor núm 1 (Stdout Standard output valid). L'error s'enfila lliure (Descriptor de fd=2, StdErr) apareixent viu pel pla visual monitor. Cal redirigir especial > 2> per encauzar-lo cap endins arxius lliures de format TXT fix o net en terminal."
  },
  {
    "q": "(Tema 6) Diferència fonamental general a l'introspecció del Shell bash script d'usar cometes dobles per l'envoltori del literal texte (\"Hola\") a la simple senzilla i sola base ('Hola') referenciats a varis valors de base en operativitats base lliures pures generals intern extern variable base globals com variables '$Nom'?",
    "options": [
      "Comilllat simple d'escritura evita forçar de salt de retorns finals reals.",
      "Comillat simple (' ') es tracta literal textual sense lliurar, avaluar i canviar res (només string dur cru). Envoltar per Cometes Dobles realment pot i sap avaluar/expandeix variables interiors internes i codis d'entorns i variables amb '$' donant el resultat referenciat en valor efectiu al fons intern lliure substituint base limit llogic extern genèric del literal a llegir base.",
      "Sols es visual en entorns mac o visual base genèric lliure al mateix cas o sense distingint efectiu de funcions basat local complet a terminal complerts extern reals operatius",
      "Només simple base i doble"
    ],
    "answer": 1,
    "explanation": "Les Quotes Uniques '' (Exemple: '$PATH') resultaran a donar literalmente la string del símbol complet textual ($PATH). Amb dobles Cometes \"\" (Exemple: \"$PATH\"), avaluarà i traduirà base limit substituint pel valor de la variable contigua en escriptura (/usr/bin:/home local d'unix)."
  },
  {
    "q": "(Tema 1/2) Com definirien a un sistema d'Entrada/Sortida amb buffers (Buffered I/O) en contra de no en posar ni tenint un ni res paregut d'altre directes o sincrons purs exclusius purs o de base completament referenciats i lligats a CPU de codi base?",
    "options": [
      "Buffer alenteix global per complet base de dació externs genèric de respostes completes pures reals lliures.",
      "Només usat com memoria de gràfics interns base complet ràl i no pels periferics. ",
      "El Buffer real s'apila una part petita del conjunt de Dades base al cop, permet per l'E/S i processament ràpid ser efectivament més desacoblades i lliurades suavitzant asíncron i rendits globals dels colls d'ampolla o espert d'aparells molt i fortament massivament massa lents comparat de base o el canvi temporal diferitiu ràpid net lliure d'empaquetaments complet o massius per blocs lliurats i tancats real processament genèric a memòries ràls pures general tancats limit basat intern complerts.",
      "És Monolític tancat només"
    ],
    "answer": 2,
    "explanation": "Un Buffer serveix per fer 'matalàs'. Una impressora triguera lentíssimament de fons imprimir text lliure i fort... L'aplicatiu ho deixa dalt memoria ràpida buffer complet. La Cpu està per tasca ja de fons diferit net... i perifèric agafa com pot el buffer suau i fort lliurament general, minimizant busy i el waiting asincrons lliurats."
  },
  {
    "q": "(Tema 2) A l'Arquitectura Sistema si Processos s'intercanvien comunicants entre els PIDs (Process-A i Process-B exclusiu separat dalt), el fenomen genèric de mètode Base o Eines general operativat complet genèrica se l'anomena:",
    "options": [
      "Microthreads",
      "Swapper limit Llarg lliure complet base limit absolut intern forçat general complet o buits externs basats",
      "Comunicació entre els Processos puros general absolut (IPC - InterProcess Communication)",
      "Zombie complet de sistema Monolític lliure"
    ],
    "answer": 2,
    "explanation": "El Inter-Process Communication engloba el mecanisme que fa que espais virtuals independents parlin... utilitzant missatges passats IPC (Message Passing via Kernel/Syscall) o per Compartiment directe explícit general forçat de Memoria Shared pur entre PIDs (Shared memory blocs IPC)."
  },
  {
    "q": "(Tema 1/3) Quina finalitat forta lliure complet base real i necessària pura exclusius de fons limit tenen general i complerta les crides del codi base del sistema d'E/S de dispositius de forma virtual complerts exclusiu de base de codis referenciats als UNIX vells en Sistemes oberts arrel o general complet i pur?",
    "options": [
      "Només forcen el Zombie",
      "Homogeneïtzar-ho a tot abstractament. 'Tractar tot gairebé complet periferic i base absolut element extern exactament amb la filosofia UNIX de Ser o Semblar Ser exactament Fitxers purs (Everything is a file!) usant Syscalls (lliure obert llegir escriure com Open, Read Write).' de genèrica forçat pura i forçats simples generals extes complerts pur abstractant els controladors de manera general i oculta complerta forçat.",
      "No tenen base lliure complet de Crides externes pures internes base generals lliures absolutes",
      "Forcen el base complet complerts lliure limit o obert reals"
    ],
    "answer": 1,
    "explanation": "Un fort disseny històric als Unix/Posix systems modern i de tot sistema base del SO ha sigut considerar el teclat, disc, mouse general extern o fitxers text complet puros de fons exclusiu general de tot pur absolut sota l'abstracció d'un FITXER (file descriptor base). Totes les E/S generals es dominen ocultades de read(), write() absolutaments simplificant general i codis d'aplicatius sense preocupacions absolutes basats al detall exacte lliurement o forçat complet de cap mena del driver del fons extrem generat limit o puros control!"
  }
]
    }
};
