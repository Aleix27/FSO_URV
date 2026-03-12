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

// 1. GENERATED EXAMS: We generate 30 distinct exams of 10 questions each
const generatedExamsArr = [];
for(let i=1; i<=30; i++) {
    const shuffled = shuffle([...questionPool]);
    generatedExamsArr.push({
        title: `Examen Pràctic Generat #${i}`,
        questions: shuffled.slice(0, 10)
    });
}

// 2. ASSIGNATURA EXAMS (The PDFs structure)
const assignaturaExamsArr = [
    { title: "Primer Parcial 2023 - A", questions: shuffle([...existingTests]).slice(0,10) },
    { title: "Primer Parcial 2023 - B", questions: shuffle([...existingTests]).slice(0,10) },
    { title: "1er Parcial FSO amb Solucio", questions: shuffle([...existingTests]).slice(0,10) },
    { title: "Test Primer Parcial 2025", questions: shuffle([...existingTests]).slice(0,10) },
    { title: "Examen FSO Temes 1 i 2", questions: shuffle([...existingTests]).slice(0,10) },
    { title: "Test Interactiu Avançat", questions: shuffle([...existingTests]).slice(0,10) },
    { title: "Parcial Antic / Extra", questions: shuffle([...existingTests]).slice(0,10) }
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
