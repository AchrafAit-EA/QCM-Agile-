/* Jeu de données des 20 questions conforme au Module 202 - Partie 1 */
const QUIZ_QUESTIONS = [
    {
        id: 1,
        category: "Concepts de Projet",
        topic: "Définition d'un projet",
        question: "Selon les principes fondamentaux de la gestion de projet, quelle est la définition exacte d'un « projet » ?",
        options: [
            "A) Une suite d'opérations courantes et répétitives visant à assurer le fonctionnement régulier de l'entreprise.",
            "B) Une démarche temporaire visant à créer un produit, service ou résultat unique, mobilisant des ressources identifiées dans des délais fixés.",
            "C) Un ensemble de tâches informatiques libres sans contraintes de budget ni de calendrier imposé.",
            "D) Un contrat juridique exclusivement conclu entre des prestataires externes sans intervention du client."
        ],
        correctIndex: 1,
        explanation: "Selon le cours (Module 202 - Partie 1), un projet est « une démarche temporaire (un début et une fin) visant à créer un produit, service ou résultat unique. Il mobilise des ressources identifiées (humaines et matérielles) et fait l'objet d'une budgétisation de moyens »."
    },
    {
        id: 2,
        category: "Concepts de Projet",
        topic: "Les 5 éléments essentiels",
        question: "Quels sont les 5 éléments essentiels qui encadrent et définissent tout projet pour garantir sa réussite ?",
        options: [
            "A) Objectif, Délais, Ressources, Coût et Livrables.",
            "B) Serveur, Base de données, Code source, Développeur et Interface.",
            "C) Réunions, Courriels, Compte-rendu, Tableur et Navigateur.",
            "D) Idée, Déploiement, Facturation, Bénéfice et Maintenance."
        ],
        correctIndex: 0,
        explanation: "Un projet est encadré par 5 éléments indissociables : 1) Objectif (répondre à un besoin précis), 2) Délais (début et fin), 3) Ressources (humaines et matérielles), 4) Coût (budget à respecter), et 5) Livrables (des résultats concrets)."
    },
    {
        id: 3,
        category: "Documents Clés",
        topic: "Cahier des charges",
        question: "Quelle est l'utilité première d'un « Cahier des charges » (CdC) dans le cycle de vie du projet ?",
        options: [
            "A) Fixer uniquement les horaires de pause et les vacances des membres de l'équipe.",
            "B) Remplacer intégralement le code source et automatiser les tests d'intégration.",
            "C) Document officiel définissant les besoins, exigences fonctionnelles/techniques, livrables, délais et budget pour éviter tout malentendu.",
            "D) Servir de facture finale remise au client pour solder les paiements bancaires."
        ],
        correctIndex: 2,
        explanation: "Le cahier des charges est la feuille de route du projet. Document officiel créé dans un appel d'offres ou contrat, il formalise les exigences, objectifs, périmètre, budget et délais pour assurer une vision commune et éliminer les mauvaises interprétations."
    },
    {
        id: 4,
        category: "Documents Clés",
        topic: "Charte de projet",
        question: "Quelle est la mission fondamentale d'une « Charte de projet » (Project Charter) dès le lancement ?",
        options: [
            "A) Formaliser l'autorisation du projet, définir le périmètre, les critères de succès et engager les parties prenantes vers un objectif partagé.",
            "B) Rédiger les lignes de commandes pour déployer l'application sur le serveur de production.",
            "C) Recenser tous les bogues découverts lors de la phase de test unitaire.",
            "D) Clôturer administrativement le projet en libérant les ressources financières."
        ],
        correctIndex: 0,
        explanation: "La charte de projet est le socle initial : elle formalise l'autorisation du projet, indique les engagements des participants, clarifie les objectifs, le périmètre, les contraintes et critères de succès pour aligner toutes les parties prenantes."
    },
    {
        id: 5,
        category: "Organisation du Projet",
        topic: "Maître d'ouvrage vs Maître d'œuvre",
        question: "Dans le pilotage du projet, quelle est la distinction fondamentale entre le Maître d'Ouvrage (MOA) et le Maître d'Œuvre (MOE) ?",
        options: [
            "A) Le MOA réalise techniquement la solution, tandis que le MOE exprime les besoins.",
            "B) Le MOA est le responsable du besoin et client final (qu'il soit interne ou externe), tandis que le MOE conçoit et réalise techniquement l'ouvrage.",
            "C) Le MOE s'occupe exclusivement de la trésorerie et le MOA de l'installation des logiciels.",
            "D) Les deux termes sont strictement synonymes et désignent le développeur principal."
        ],
        correctIndex: 1,
        explanation: "La gestion de projet fait en sorte que l'ouvrage réalisé par le Maître d'Œuvre (MOE = réalisateur/technique) réponde aux attentes et exigences du Maître d'Ouvrage (MOA = donneur d'ordre, détenteur du besoin)."
    },
    {
        id: 6,
        category: "Ressources du Projet",
        topic: "Typologie des ressources",
        question: "Selon la classification des ressources d'un projet, que regroupent spécifiquement les « Ressources Techniques » ?",
        options: [
            "A) Les logiciels, outils de gestion, technologies employées, méthodes et documentations.",
            "B) Uniquement la trésorerie disponible et les emprunts bancaires.",
            "C) Les bureaux, meubles, chaises et locaux physiques de l'organisme.",
            "D) Le calendrier des jours fériés et les horaires de nuit."
        ],
        correctIndex: 0,
        explanation: "Le cours distingue 5 types de ressources : Humaines (compétences, disponibilité), Matérielles (équipements, postes, locaux), Techniques (logiciels, outils, technologies, méthodes, docs), Financières (budget, trésorerie) et Temporelles (temps disponible, calendrier)."
    },
    {
        id: 7,
        category: "Concepts de Projet",
        topic: "Notion de livrable",
        question: "Concernant la notion de « Livrable », laquelle de ces affirmations est rigoureusement EXACTE ?",
        options: [
            "A) Un livrable ne désigne impérativement que l'application finale prête à l'emploi le dernier jour du projet.",
            "B) Les réalisations intermédiaires (cahier des charges, prototypes/maquettes, plans financiers, manuels) sont aussi des livrables essentiels.",
            "C) Un livrable est une notion abstraite qui n'a pas besoin d'être concrète ni mesurable.",
            "D) Les documents de travail ne peuvent jamais être reconnus comme des livrables de projet."
        ],
        correctIndex: 1,
        explanation: "Le livrable est un résultat tangible d'une production mesurable. La notion ne se limite pas à l'aboutissement final : les réalisations intermédiaires (rapports, maquettes, prototypes, guides, budgets) jalonnent l'avancement et sont des livrables à part entière."
    },
    {
        id: 8,
        category: "Parties Prenantes",
        topic: "Acteurs internes vs externes",
        question: "Parmi les groupes d'acteurs suivants, lesquels font partie intégrante des « Acteurs EXTERNES » du projet ?",
        options: [
            "A) Le Chef de projet, la Direction générale et les services supports (RH, Comptabilité).",
            "B) L'équipe de développement, le Sponsor interne et les syndicats de l'entreprise.",
            "C) Les clients, les fournisseurs, les communautés d'utilisateurs, les organismes privés (ONG) et les investisseurs financiers.",
            "D) Les administrateurs réseau internes et les analystes métier de l'entreprise."
        ],
        correctIndex: 2,
        explanation: "Les acteurs externes ne font pas partie de l'équipe ni de l'organisation interne : ils regroupent les clients/utilisateurs finaux externes, fournisseurs/prestataires, organismes publics/privés, investisseurs et communautés."
    },
    {
        id: 9,
        category: "Rôles Projet Informatique",
        topic: "Responsabilités clés",
        question: "Dans un projet informatique, quel rôle a pour mission de recueillir les besoins des métiers, de concevoir les spécifications fonctionnelles et de faire le pont entre le métier et la technique ?",
        options: [
            "A) L'Administrateur Système & Réseau.",
            "B) Le Business Analyst (Analyste fonctionnel / métier).",
            "C) Le Testeur / QA.",
            "D) Le Sponsor du projet."
        ],
        correctIndex: 1,
        explanation: "Le Business Analyst recueille et analyse les besoins des utilisateurs et parties prenantes, rédige les spécifications fonctionnelles et facilite la compréhension mutuelle entre les équipes métiers et l'équipe technique."
    },
    {
        id: 10,
        category: "Matrice RACI",
        topic: "Signification de la lettre 'A'",
        question: "Dans une matrice RACI, que représente la lettre « A » (Accountable) et quelle règle impérative doit être respectée ?",
        options: [
            "A) Assistant : il soutient le développeur, et chaque tâche peut en comporter une dizaine.",
            "B) Approbateur (ou Redevable) : c'est l'autorité ultime qui valide la tâche, et il doit y avoir UN SEUL « A » par tâche.",
            "C) Actionneur : membre réalisant le travail technique sur le code source.",
            "D) Animateur : responsable de programmer les réunions de rétrospective."
        ],
        correctIndex: 1,
        explanation: "Règle d'or de la matrice RACI : « A » signifie Accountable (Approbateur). C'est la personne qui approuve et en porte la responsabilité ultime. Une tâche doit impérativement avoir UN SEUL 'A' pour éviter la dispersion des responsabilités."
    },
    {
        id: 11,
        category: "Matrice RACI",
        topic: "Rôle 'Consulted' vs 'Informed'",
        question: "Dans le modèle RACI, quelle différence fondamentale sépare le rôle « C » (Consulté) du rôle « I » (Informé) ?",
        options: [
            "A) Le rôle C donne son avis d'expert et est consulté AVANT la décision/action (échange bidirectionnel), tandis que I est tenu informé APRÈS (communication unidirectionnelle).",
            "B) Le rôle C exécute le code alors que le rôle I valide le budget.",
            "C) Il n'y a aucune différence, les deux rôles assistent simplement aux mêmes réunions.",
            "D) Le rôle I peut bloquer le projet alors que le rôle C est passif."
        ],
        correctIndex: 0,
        explanation: "Consulted (C) : consulté pour son expertise avant de prendre la décision ou de finaliser le livrable (dialogue bidirectionnel). Informed (I) : tenu au courant de l'avancement ou des décisions une fois celles-ci prises (flux d'information descendant)."
    },
    {
        id: 12,
        category: "Caractéristiques de Base",
        topic: "Logique et activités transformantes",
        question: "Quelle est la logique séquentielle fondamentale d'un projet selon le cours ?",
        options: [
            "A) Résultats attendus ➔ Moyens ➔ Activités transformantes ➔ Valeur créée.",
            "B) Investissement de Moyens (ressources) ➔ Réalisation d'Activités ➔ Obtention de Résultats ➔ Impact & Valeur créée.",
            "C) Clôture ➔ Conception ➔ Planification ➔ Facturation.",
            "D) Emprunt bancaire ➔ Dépense sans contrôle ➔ Livraison aléatoire."
        ],
        correctIndex: 1,
        explanation: "La logique d'un projet est claire : Moyens/Ressources (intrants) ➔ Activités transformantes ➔ Résultats concrets obtenus (extrants) ➔ Impact positif et Valeur créée pour l'organisation."
    },
    {
        id: 13,
        category: "Contraintes de Projet",
        topic: "Contraintes externes absolues",
        question: "Laquelle de ces situations représente typiquement une « Contrainte externe absolue » ?",
        options: [
            "A) Une préférence stylistique du chef de projet sur la police de caractères.",
            "B) Un événement à date fixe non modifiable (salon, manifestation sportive internationale, passage à l'an 2000, nouvelle loi obligatoire) : si l'échéance est manquée, le projet n'a plus de sens.",
            "C) Une suggestion informelle formulée par un stagiaire pendant une pause.",
            "D) La négociation d'une remise commerciale facultative sur des licences logicielles."
        ],
        correctIndex: 1,
        explanation: "Une contrainte externe absolue s'impose à tous de l'extérieur. Si elle n'est pas respectée, le projet perd toute sa raison d'être (ex : date impérative d'un événement sportif, loi à entrée en vigueur stricte, passage à l'an 2000)."
    },
    {
        id: 14,
        category: "Méthodes Prévisibles",
        topic: "Modèle en Cascade (Waterfall)",
        question: "Quelle caractéristique majeure définit le modèle en Cascade (Waterfall) et constitue aussi son principal inconvénient ?",
        options: [
            "A) Les étapes sont courtes (1 semaine) et les réunions quotidiennes réorientent le projet chaque matin.",
            "B) C'est une démarche linéaire et séquentielle stricte où chaque phase doit être 100% terminée avant de passer à la suite, interdisant tout retour en arrière (manque de souplesse).",
            "C) L'utilisateur teste l'application dès la phase de rédaction des besoins.",
            "D) Le projet ne nécessite aucune documentation ni validation formelle."
        ],
        correctIndex: 1,
        explanation: "Le modèle en cascade (Waterfall) repose sur 6 phases séquentielles strictes (Exigences ➔ Design ➔ Planning ➔ Exécution ➔ Validation ➔ Maintenance). Son grand défaut est la rigidité : aucun retour en arrière n'est permis et les erreurs ne sont souvent découvertes qu'en toute fin."
    },
    {
        id: 15,
        category: "Méthodes Prévisibles",
        topic: "Cycle en V - Correspondances",
        question: "Dans le schéma du Cycle en V, quelle phase de la branche montante (validation) valide spécifiquement la phase de « Définition des besoins / Étude de faisabilité » de la branche descendante ?",
        options: [
            "A) Les Tests Unitaires des composants.",
            "B) Les Tests d'Intégration technique.",
            "C) La Recette (validation du produit en conditions réelles avec les utilisateurs).",
            "D) La Revue de conception détaillée."
        ],
        correctIndex: 2,
        explanation: "Dans le cycle en V, chaque niveau de conception correspond à un niveau de validation : Définition des besoins ⟷ Recette (validation avec utilisateurs) ; Spécifications ⟷ Validation fonctionnelle ; Conception générale ⟷ Tests d'intégration ; Conception détaillée ⟷ Tests unitaires."
    },
    {
        id: 16,
        category: "Méthodes Prévisibles",
        topic: "Effet tunnel du Cycle en V",
        question: "Que désigne le phénomène d'« Effet Tunnel » fréquemment reproché au Cycle en V et à la méthode Cascade ?",
        options: [
            "A) Une perte temporaire de signal Wi-Fi dans la salle de formation.",
            "B) La longue période opaque entre la signature des spécifications initiales et la recette finale où le client ne voit rien du produit, rendant toute adaptation au changement difficile et coûteuse.",
            "C) L'utilisation de protocoles VPN cryptés pour relier les développeurs distants.",
            "D) L'obligation de travailler exclusivement dans des locaux sans fenêtres."
        ],
        correctIndex: 1,
        explanation: "L'effet tunnel illustre le temps (souvent très long) qui sépare l'expression du besoin initial de la recette finale. Pendant ce « tunnel », si les besoins changent ou étaient mal exprimés, le produit livré risque de ne plus correspondre aux attentes réelles du client."
    },
    {
        id: 17,
        category: "Méthodes Prévisibles",
        topic: "Cycle en Y (2TUP)",
        question: "En quoi consiste la particularité du cycle de développement en Y (modèle 2TUP - Two Track Unified Process) ?",
        options: [
            "A) Il sépare le projet en 2 branches indépendantes : une branche Fonctionnelle et une branche Technique, avant de les faire converger pour la conception détaillée et le codage.",
            "B) Il supprime totalement la phase de tests pour diviser le temps de développement par deux.",
            "C) Il impose l'utilisation de deux ordinateurs portables simultanés pour chaque développeur.",
            "D) Il organise le projet en trois réunions hebdomadaires sans aucune documentation."
        ],
        correctIndex: 0,
        explanation: "Le 2TUP (cycle en Y) décompose le système selon deux axes parallèles : la branche fonctionnelle (analyse des besoins métier) et la branche technique (spécifications non fonctionnelles, architecture, prototype technique), avant de fusionner les deux résultats."
    },
    {
        id: 18,
        category: "Approche Agile",
        topic: "Manifeste Agile 2001",
        question: "Parmi les propositions suivantes, laquelle cite EXACTEMENT l'une des 4 valeurs fondamentales du Manifeste Agile (2001) ?",
        options: [
            "A) Les processus et outils plus que les individus et leurs interactions.",
            "B) Une documentation exhaustive et volumineuse plus qu'un logiciel opérationnel.",
            "C) L'adaptation au changement plus que le suivi d'un plan.",
            "D) La négociation contractuelle stricte plus que la collaboration continue avec le client."
        ],
        correctIndex: 2,
        explanation: "Les 4 valeurs du Manifeste Agile sont : 1) Les individus et les interactions plus que les processus et outils ; 2) Des logiciels opérationnels plus qu'une documentation exhaustive ; 3) La collaboration avec les clients plus que la négociation contractuelle ; 4) L'adaptation au changement plus que le suivi d'un plan."
    },
    {
        id: 19,
        category: "Comparaison Méthodologies",
        topic: "Cycle en V vs Approche Agile",
        question: "Quelle est la différence fondamentale de positionnement entre le Cycle en V traditionnel et les Méthodes Agiles ?",
        options: [
            "A) Le Cycle en V est « Orienté Processus » (séquentiel, produit figé au départ, livraison unique finale), tandis qu'Agile est « Orienté Produit » (itératif, incrémental, livraisons fréquentes et valeur continue).",
            "B) Le Cycle en V interdit les tests alors qu'Agile n'écrit aucun code.",
            "C) Agile refuse d'écouter les retours clients en cours de réalisation.",
            "D) Le Cycle en V convient uniquement aux applications de commerce électronique d'une semaine."
        ],
        correctIndex: 0,
        explanation: "Comme résumé dans le comparatif du cours : le Cycle en V est orienté processus (plan complet en amont, changements difficiles, livraison unique tardive) alors que les Méthodes Agiles sont orientées produit (itérations courtes, livraisons fréquentes par incréments, adaptation continue au changement)."
    },
    {
        id: 20,
        category: "Approche Agile",
        topic: "Scrum et Kanban",
        question: "Comment se caractérise principalement la méthode Kanban par rapport à la méthode Scrum ?",
        options: [
            "A) Kanban impose obligatoirement des Sprints stricts de 2 semaines avec un Scrum Master.",
            "B) Kanban repose sur la gestion d'un « flux continu » de travail visualisé en colonnes d'états (ex: À faire, En cours, En revue, Terminé), inspiré de la production Toyota pour limiter le gaspillage.",
            "C) Kanban est un langage de programmation servant à compiler le code PHP.",
            "D) Kanban interdit formellement de déplacer les cartes de tâches."
        ],
        correctIndex: 1,
        explanation: "Scrum organise le travail en cycles courts rythmés appelés 'Sprints' avec des rôles fixes (Product Owner, Scrum Master), tandis que Kanban gère un « flux continu » de tâches visualisé sur un tableau en colonnes d'avancement pour fluidifier le travail et éliminer les goulets d'étranglement (héritage Toyota)."
    }
];

// État de l'application
let currentQuestionIdx = 0;
let userAnswers = new Array(QUIZ_QUESTIONS.length).fill(null);
let flaggedQuestions = new Set();
let activeQuestionsPool = [...QUIZ_QUESTIONS]; // Supporte la révision exclusive des erreurs
let quizMode = 'practice'; // 'practice' ou 'exam'
let timerSecondsLeft = 0;
let timerInterval = null;
let totalElapsedSeconds = 0;
let elapsedInterval = null;
let activeFilter = 'all'; // 'all', 'wrong', ou 'correct'

// Synthèse Web Audio API pour les signaux sonores sans URLs externes
const audioCtx = (window.AudioContext || window.webkitAudioContext) ? new (window.AudioContext || window.webkitAudioContext)() : null;

function playTone(type) {
    if (!audioCtx) return;
    try {
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        const now = audioCtx.currentTime;
        if (type === 'correct') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(523.25, now); // C5
            osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.15); // G5
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
            osc.start(now);
            osc.stop(now + 0.35);
        } else if (type === 'wrong') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(260, now);
            osc.frequency.exponentialRampToValueAtTime(180, now + 0.2);
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
            osc.start(now);
            osc.stop(now + 0.25);
        }
    } catch (e) {
        console.warn('Lecture audio indisponible ou bloquée par le navigateur.');
    }
}

// Récupération des éléments du DOM
const viewWelcome = document.getElementById('view-welcome');
const viewQuiz = document.getElementById('view-quiz');
const viewReview = document.getElementById('view-review');
const headerControls = document.getElementById('header-quiz-controls');
const headerProgress = document.getElementById('header-progress-container');
const headerProgressBar = document.getElementById('header-progress-bar');
const timerText = document.getElementById('quiz-timer-text');
const modePill = document.getElementById('quiz-mode-pill');
const modeLabel = document.getElementById('quiz-mode-label');

function startQuiz() {
    // Lecture de la configuration choisie
    const selectedMode = document.querySelector('input[name="mode-select"]:checked').value;
    const timerVal = parseInt(document.getElementById('timer-setting').value);

    quizMode = selectedMode;
    activeQuestionsPool = [...QUIZ_QUESTIONS];
    userAnswers = new Array(activeQuestionsPool.length).fill(null);
    flaggedQuestions.clear();
    currentQuestionIdx = 0;
    totalElapsedSeconds = 0;

    // Configuration du chronomètre
    if (timerVal > 0) {
        timerSecondsLeft = timerVal * 60;
        startCountdownTimer();
    } else {
        timerSecondsLeft = null;
        timerText.textContent = "Illimité";
    }
    startElapsedTracker();

    // Mise à jour de l'affichage de l'en-tête
    headerControls.classList.remove('hidden');
    headerProgress.classList.remove('hidden');

    if (quizMode === 'practice') {
        modePill.className = "hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200";
        modeLabel.textContent = "Mode Entraînement";
        document.getElementById('practice-live-score').classList.remove('hidden');
    } else {
        modePill.className = "hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200";
        modeLabel.textContent = "Mode Examen";
        document.getElementById('practice-live-score').classList.add('hidden');
    }

    // Basculement des vues
    viewWelcome.classList.add('hidden');
    viewReview.classList.add('hidden');
    viewQuiz.classList.remove('hidden');

    renderNavGrid();
    loadQuestion(0);
}

function startCountdownTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        if (timerSecondsLeft > 0) {
            timerSecondsLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            showCustomModal(
                "fa-solid fa-hourglass-end",
                "Temps Écoulé !",
                "Le temps alloué pour cette session est terminé. Vos réponses vont être validées automatiquement pour générer votre bilan.",
                () => submitQuizFinal()
            );
        }
    }, 1000);
}

function startElapsedTracker() {
    clearInterval(elapsedInterval);
    elapsedInterval = setInterval(() => {
        totalElapsedSeconds++;
    }, 1000);
}

function formatMinutesSeconds(sec) {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function updateTimerDisplay() {
    if (timerSecondsLeft === null) {
        timerText.textContent = "Illimité";
        return;
    }
    timerText.textContent = formatMinutesSeconds(timerSecondsLeft);
    if (timerSecondsLeft < 120) {
        timerText.parentElement.classList.add('bg-rose-50', 'text-rose-700', 'border-rose-300');
    } else {
        timerText.parentElement.classList.remove('bg-rose-50', 'text-rose-700', 'border-rose-300');
    }
}

function loadQuestion(index) {
    currentQuestionIdx = index;
    const q = activeQuestionsPool[currentQuestionIdx];

    // Mise à jour de la barre de progression
    const progressPct = ((currentQuestionIdx + 1) / activeQuestionsPool.length) * 100;
    headerProgressBar.style.width = `${progressPct}%`;

    // Mise à jour des informations de la question
    document.getElementById('q-category-pill').textContent = q.category;
    document.getElementById('q-index-pill').textContent = `Question ${currentQuestionIdx + 1} sur ${activeQuestionsPool.length}`;
    document.getElementById('q-text').textContent = q.question;

    // Aspect du bouton de marquage
    updateFlagButtonUI();

    // Génération des options
    const optionsBox = document.getElementById('q-options-container');
    optionsBox.innerHTML = '';

    const chosenAnswer = userAnswers[currentQuestionIdx];
    const isAlreadyAnswered = chosenAnswer !== null;

    q.options.forEach((optText, optIdx) => {
        const btn = document.createElement('button');
        btn.className = getOptionButtonClass(optIdx, chosenAnswer, isAlreadyAnswered, q.correctIndex);
        btn.onclick = () => handleSelectOption(optIdx);

        // Cercle préfixe d'option (A, B, C, D)
        const letter = String.fromCharCode(65 + optIdx);
        btn.innerHTML = `
            <div class="flex items-start space-x-3 text-left w-full">
                <span class="w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${getOptionPrefixBadgeClass(optIdx, chosenAnswer, isAlreadyAnswered, q.correctIndex)}">
                    ${letter}
                </span>
                <span class="text-sm text-slate-800 font-medium leading-relaxed flex-1">${optText.substring(3)}</span>
            </div>
        `;
        optionsBox.appendChild(btn);
    });

    // Feedback immédiat pour le mode entraînement
    const feedbackCard = document.getElementById('instant-feedback-card');
    if (quizMode === 'practice' && isAlreadyAnswered) {
        renderInstantFeedback(q, chosenAnswer);
    } else {
        feedbackCard.classList.add('hidden');
    }

    // Gestion de l'état des boutons de navigation
    document.getElementById('btn-prev-question').disabled = currentQuestionIdx === 0;
    document.getElementById('btn-prev-question').classList.toggle('opacity-40', currentQuestionIdx === 0);

    const isLast = currentQuestionIdx === activeQuestionsPool.length - 1;
    document.getElementById('btn-next-question').classList.toggle('hidden', isLast);
    document.getElementById('btn-finish-quiz').classList.toggle('hidden', !isLast);

    updateNavGridVisuals();
    updateAnsweredCounter();
}

function getOptionButtonClass(optIdx, chosenAnswer, isAlreadyAnswered, correctIdx) {
    let base = "w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between ";

    if (!isAlreadyAnswered) {
        return base + "border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/20 active:scale-[0.99]";
    }

    // Mode entraînement : révéler immédiatement les bonnes et mauvaises réponses
    if (quizMode === 'practice') {
        if (optIdx === correctIdx) {
            return base + "border-emerald-500 bg-emerald-50 text-emerald-900";
        }
        if (optIdx === chosenAnswer && optIdx !== correctIdx) {
            return base + "border-rose-500 bg-rose-50 text-rose-900";
        }
        return base + "border-slate-200 bg-slate-50 opacity-60";
    }

    // Mode examen : surligner uniquement le choix sans divulguer la réponse
    if (optIdx === chosenAnswer) {
        return base + "border-indigo-600 bg-indigo-50/60 font-semibold";
    }
    return base + "border-slate-200 bg-white hover:border-slate-300";
}

function getOptionPrefixBadgeClass(optIdx, chosenAnswer, isAlreadyAnswered, correctIdx) {
    if (!isAlreadyAnswered) {
        return "bg-slate-100 text-slate-700 border border-slate-200";
    }
    if (quizMode === 'practice') {
        if (optIdx === correctIdx) return "bg-emerald-600 text-white";
        if (optIdx === chosenAnswer && optIdx !== correctIdx) return "bg-rose-600 text-white";
        return "bg-slate-200 text-slate-600";
    }
    if (optIdx === chosenAnswer) {
        return "bg-indigo-600 text-white";
    }
    return "bg-slate-100 text-slate-700 border border-slate-200";
}

function handleSelectOption(optIdx) {
    const q = activeQuestionsPool[currentQuestionIdx];

    // En mode entraînement, bloquer le changement si déjà répondu
    if (quizMode === 'practice' && userAnswers[currentQuestionIdx] !== null) {
        return;
    }

    userAnswers[currentQuestionIdx] = optIdx;

    // Signal sonore en mode entraînement
    if (quizMode === 'practice') {
        if (optIdx === q.correctIndex) {
            playTone('correct');
        } else {
            playTone('wrong');
        }
    }

    // Recharger la carte pour mettre à jour l'état visuel et l'explication
    loadQuestion(currentQuestionIdx);
}

function renderInstantFeedback(q, chosenAnswer) {
    const feedbackCard = document.getElementById('instant-feedback-card');
    const feedbackIcon = document.getElementById('feedback-icon');
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackExp = document.getElementById('feedback-explanation');

    const isCorrect = chosenAnswer === q.correctIndex;
    feedbackCard.classList.remove('hidden');

    if (isCorrect) {
        feedbackCard.className = "rounded-xl p-4 border bg-emerald-50 border-emerald-200 text-emerald-900";
        feedbackIcon.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-600"></i>`;
        feedbackTitle.textContent = "Excellente réponse ! Bonne maîtrise du concept.";
    } else {
        feedbackCard.className = "rounded-xl p-4 border bg-rose-50 border-rose-200 text-rose-900";
        feedbackIcon.innerHTML = `<i class="fa-solid fa-circle-xmark text-rose-600"></i>`;
        feedbackTitle.textContent = "Réponse incorrecte. Rappel du cours :";
    }
    feedbackExp.textContent = q.explanation;
}

function toggleFlagCurrentQuestion() {
    if (flaggedQuestions.has(currentQuestionIdx)) {
        flaggedQuestions.delete(currentQuestionIdx);
    } else {
        flaggedQuestions.add(currentQuestionIdx);
    }
    updateFlagButtonUI();
    updateNavGridVisuals();
}

function updateFlagButtonUI() {
    const btn = document.getElementById('btn-flag-question');
    if (flaggedQuestions.has(currentQuestionIdx)) {
        btn.className = "text-xs font-semibold text-amber-700 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-100 border border-amber-300";
        btn.innerHTML = `<i class="fa-solid fa-bookmark text-amber-600"></i><span class="hidden sm:inline">Marquée pour revue</span>`;
    } else {
        btn.className = "text-xs font-medium text-slate-500 hover:text-amber-600 flex items-center gap-1.5 px-2.5 py-1 rounded-md hover:bg-amber-50 transition-colors";
        btn.innerHTML = `<i class="fa-regular fa-bookmark"></i><span class="hidden sm:inline">Marquer pour relecture</span>`;
    }
}

function navigateQuestion(delta) {
    const nextIdx = currentQuestionIdx + delta;
    if (nextIdx >= 0 && nextIdx < activeQuestionsPool.length) {
        loadQuestion(nextIdx);
    }
}

function renderNavGrid() {
    const grid = document.getElementById('question-nav-grid');
    grid.innerHTML = '';
    activeQuestionsPool.forEach((_, idx) => {
        const btn = document.createElement('button');
        btn.id = `nav-grid-btn-${idx}`;
        btn.textContent = idx + 1;
        btn.className = "h-9 rounded-lg text-xs font-bold transition-all border";
        btn.onclick = () => loadQuestion(idx);
        grid.appendChild(btn);
    });
    updateNavGridVisuals();
}

function updateNavGridVisuals() {
    activeQuestionsPool.forEach((_, idx) => {
        const btn = document.getElementById(`nav-grid-btn-${idx}`);
        if (!btn) return;

        const isAnswered = userAnswers[idx] !== null;
        const isCurrent = idx === currentQuestionIdx;
        const isFlagged = flaggedQuestions.has(idx);

        if (isCurrent) {
            btn.className = "h-9 rounded-lg text-xs font-extrabold border-2 border-indigo-600 bg-indigo-600 text-white shadow-sm";
        } else if (isFlagged) {
            btn.className = "h-9 rounded-lg text-xs font-bold border-2 border-amber-400 bg-amber-50 text-amber-900";
        } else if (isAnswered) {
            btn.className = "h-9 rounded-lg text-xs font-bold border border-slate-700 bg-slate-800 text-white";
        } else {
            btn.className = "h-9 rounded-lg text-xs font-medium border border-slate-200 bg-white text-slate-600 hover:bg-slate-50";
        }
    });
}

function updateAnsweredCounter() {
    const answeredCount = userAnswers.filter(a => a !== null).length;
    document.getElementById('answered-counter-pill').textContent = `${answeredCount}/${activeQuestionsPool.length} répondues`;

    // Mise à jour du score en direct en mode entraînement
    if (quizMode === 'practice') {
        let correctSoFar = 0;
        userAnswers.forEach((ans, idx) => {
            if (ans !== null && ans === activeQuestionsPool[idx].correctIndex) {
                correctSoFar++;
            }
        });
        document.getElementById('live-score-text').textContent = `${correctSoFar}/${activeQuestionsPool.length} pts`;
    }
}

function finishQuizConfirmation() {
    const unanswered = userAnswers.filter(a => a === null).length;
    if (unanswered > 0) {
        showCustomModal(
            "fa-solid fa-circle-question",
            "Questions non répondues",
            `Attention : Vous avez encore ${unanswered} question(s) sans réponse. Voulez-vous tout de même finaliser le test et calculer votre note finale ?`,
            () => submitQuizFinal()
        );
    } else {
        showCustomModal(
            "fa-solid fa-flag-checkered",
            "Finaliser le test",
            "Êtes-vous sûr de vouloir soumettre vos réponses et afficher le bilan complet de vos erreurs ?",
            () => submitQuizFinal()
        );
    }
}

function submitQuizFinal() {
    // Arrêt des chronomètres
    clearInterval(timerInterval);
    clearInterval(elapsedInterval);

    // Calcul du résultat
    let correctCount = 0;
    let wrongCount = 0;
    const mistakesList = [];

    activeQuestionsPool.forEach((q, idx) => {
        const userChoice = userAnswers[idx];
        if (userChoice === q.correctIndex) {
            correctCount++;
        } else {
            wrongCount++;
            mistakesList.push(q);
        }
    });

    const score = correctCount;
    const total = activeQuestionsPool.length;
    const percentage = Math.round((score / total) * 100);

    // Remplissage du panneau récapitulatif
    document.getElementById('result-score-number').textContent = `${score}/${total}`;
    document.getElementById('result-percentage').textContent = `${percentage}%`;
    document.getElementById('stat-correct-count').textContent = correctCount;
    document.getElementById('stat-wrong-count').textContent = wrongCount;
    document.getElementById('stat-time-spent').textContent = formatMinutesSeconds(totalElapsedSeconds);

    // Définition des appréciations et couleurs
    const resHeader = document.getElementById('result-header-bg');
    const appreciationText = document.getElementById('result-user-appreciation');
    const subtitleText = document.getElementById('result-user-subtitle');

    if (percentage >= 80) {
        resHeader.className = "p-6 sm:p-8 text-white relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-700";
        appreciationText.textContent = "Excellent ! Niveau Expert Dépassé";
        subtitleText.textContent = "Félicitations, vous maîtrisez parfaitement les concepts de gestion de projet, RACI et principes Agiles !";
        triggerCelebration();
    } else if (percentage >= 60) {
        resHeader.className = "p-6 sm:p-8 text-white relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-700";
        appreciationText.textContent = "Admis ! Bon travail d'ensemble";
        subtitleText.textContent = "Objectif atteint ! Prenez le temps de revoir les questions signalées en rouge pour viser le 20/20.";
        triggerCelebration();
    } else {
        resHeader.className = "p-6 sm:p-8 text-white relative overflow-hidden bg-gradient-to-r from-rose-600 to-amber-700";
        appreciationText.textContent = "Objectif non atteint : Révisions Nécessaires";
        subtitleText.textContent = "Ne vous découragez pas. Consultez les explications du cours ci-dessous pour combler vos lacunes et relancez le test des erreurs !";
    }

    // Gestion du bouton de reprise des erreurs
    const btnMistakes = document.getElementById('btn-retake-mistakes');
    btnMistakes.disabled = wrongCount === 0;
    btnMistakes.classList.toggle('opacity-40', wrongCount === 0);

    // Mise à jour des compteurs de filtres
    document.getElementById('count-filter-all').textContent = total;
    document.getElementById('count-filter-wrong').textContent = wrongCount;
    document.getElementById('count-filter-correct').textContent = correctCount;

    // Affichage des corrections détaillées
    filterReviewQuestions('all');

    // Affichage de la vue de correction
    viewQuiz.classList.add('hidden');
    viewWelcome.classList.add('hidden');
    headerControls.classList.add('hidden');
    headerProgress.classList.add('hidden');
    viewReview.classList.remove('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterReviewQuestions(type) {
    activeFilter = type;

    // Mise à jour visuelle des boutons de filtre
    ['all', 'wrong', 'correct'].forEach(btnType => {
        const el = document.getElementById(`filter-btn-${btnType}`);
        if (btnType === type) {
            el.className = "px-3 py-1.5 rounded-lg bg-white shadow-sm text-slate-900 font-bold transition-all";
        } else {
            el.className = "px-3 py-1.5 rounded-lg text-slate-500 hover:text-slate-800 transition-all";
        }
    });

    const container = document.getElementById('review-questions-container');
    container.innerHTML = '';

    activeQuestionsPool.forEach((q, idx) => {
        const userChoice = userAnswers[idx];
        const isCorrect = userChoice === q.correctIndex;

        if (type === 'wrong' && isCorrect) return;
        if (type === 'correct' && !isCorrect) return;

        const card = document.createElement('div');
        card.className = `rounded-2xl p-5 sm:p-6 border transition-all ${
            isCorrect 
                ? 'bg-white border-slate-200' 
                : 'bg-white border-rose-200 shadow-sm shadow-rose-100/50'
        }`;

        let statusBadge = isCorrect 
            ? `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200"><i class="fa-solid fa-circle-check"></i> Réponse Correcte</span>`
            : `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200"><i class="fa-solid fa-circle-xmark"></i> Erreur Commise</span>`;

        let optionsHTML = '';
        q.options.forEach((optText, optIdx) => {
            const isUserPick = optIdx === userChoice;
            const isRightAnswer = optIdx === q.correctIndex;

            let optStyle = "border-slate-100 bg-slate-50 text-slate-700";
            let markerIcon = `<span class="w-6 h-6 rounded-md bg-white border border-slate-200 font-bold text-xs flex items-center justify-center">${String.fromCharCode(65 + optIdx)}</span>`;

            if (isRightAnswer) {
                optStyle = "border-emerald-300 bg-emerald-50 font-semibold text-emerald-950 ring-1 ring-emerald-400";
                markerIcon = `<span class="w-6 h-6 rounded-md bg-emerald-600 text-white font-bold text-xs flex items-center justify-center"><i class="fa-solid fa-check"></i></span>`;
            } else if (isUserPick && !isRightAnswer) {
                optStyle = "border-rose-300 bg-rose-50 font-semibold text-rose-950 ring-1 ring-rose-400";
                markerIcon = `<span class="w-6 h-6 rounded-md bg-rose-600 text-white font-bold text-xs flex items-center justify-center"><i class="fa-solid fa-xmark"></i></span>`;
            }

            optionsHTML += `
                <div class="p-3 rounded-xl border text-xs sm:text-sm flex items-start space-x-3 ${optStyle}">
                    ${markerIcon}
                    <div class="flex-1">
                        <span>${optText.substring(3)}</span>
                        ${isUserPick && !isRightAnswer ? '<span class="ml-2 text-rose-600 font-bold text-xs block sm:inline">(Votre choix incorrect)</span>' : ''}
                        ${isRightAnswer ? '<span class="ml-2 text-emerald-700 font-bold text-xs block sm:inline">(Bonne réponse)</span>' : ''}
                    </div>
                </div>
            `;
        });

        card.innerHTML = `
            <div class="space-y-4">
                <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div class="flex items-center gap-2">
                        <span class="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                            Q${idx + 1}
                        </span>
                        <span class="text-xs text-slate-500 font-medium">
                            ${q.category} &bull; ${q.topic}
                        </span>
                    </div>
                    <div>
                        ${statusBadge}
                    </div>
                </div>

                <h4 class="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    ${q.question}
                </h4>

                <div class="space-y-2">
                    ${optionsHTML}
                </div>

                <!-- Boîte d'explication pédagogique du cours -->
                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1.5">
                    <div class="font-bold text-slate-900 flex items-center gap-1.5">
                        <i class="fa-solid fa-lightbulb text-amber-500"></i>
                        <span>Explication & Référence du cours :</span>
                    </div>
                    <p class="leading-relaxed text-slate-600">
                        ${q.explanation}
                    </p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    if (container.children.length === 0) {
        container.innerHTML = `
            <div class="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 space-y-2">
                <i class="fa-solid fa-champagne-glasses text-emerald-500 text-2xl"></i>
                <p class="font-bold text-slate-700">Aucune erreur trouvée !</p>
                <p class="text-xs">Félicitations, vous n'avez fait aucune erreur dans cette catégorie.</p>
            </div>
        `;
    }
}

function retakeFullQuiz() {
    activeQuestionsPool = [...QUIZ_QUESTIONS];
    userAnswers = new Array(activeQuestionsPool.length).fill(null);
    flaggedQuestions.clear();
    currentQuestionIdx = 0;
    totalElapsedSeconds = 0;

    const timerVal = parseInt(document.getElementById('timer-setting').value);
    if (timerVal > 0) {
        timerSecondsLeft = timerVal * 60;
        startCountdownTimer();
    } else {
        timerSecondsLeft = null;
    }
    startElapsedTracker();

    headerControls.classList.remove('hidden');
    headerProgress.classList.remove('hidden');
    viewReview.classList.add('hidden');
    viewQuiz.classList.remove('hidden');

    renderNavGrid();
    loadQuestion(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function retakeMistakesOnly() {
    // Filtrage pour ne garder que les questions erronées
    const mistakes = [];
    activeQuestionsPool.forEach((q, idx) => {
        if (userAnswers[idx] !== q.correctIndex) {
            mistakes.push(q);
        }
    });

    if (mistakes.length === 0) return;

    activeQuestionsPool = mistakes;
    userAnswers = new Array(activeQuestionsPool.length).fill(null);
    flaggedQuestions.clear();
    currentQuestionIdx = 0;
    totalElapsedSeconds = 0;

    timerSecondsLeft = null;
    startElapsedTracker();

    headerControls.classList.remove('hidden');
    headerProgress.classList.remove('hidden');
    viewReview.classList.add('hidden');
    viewQuiz.classList.remove('hidden');

    renderNavGrid();
    loadQuestion(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function confirmExitQuiz() {
    showCustomModal(
        "fa-solid fa-door-open",
        "Quitter le QCM ?",
        "Votre progression en cours sera réinitialisée. Souhaitez-vous vraiment retourner à l'accueil ?",
        () => {
            clearInterval(timerInterval);
            clearInterval(elapsedInterval);
            headerControls.classList.add('hidden');
            headerProgress.classList.add('hidden');
            viewQuiz.classList.add('hidden');
            viewReview.classList.add('hidden');
            viewWelcome.classList.remove('hidden');
        }
    );
}

function showCustomModal(iconClass, title, message, onConfirm) {
    const modal = document.getElementById('custom-modal');
    document.getElementById('modal-icon').className = iconClass;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-message').textContent = message;

    const btnConfirm = document.getElementById('modal-btn-confirm');
    const btnCancel = document.getElementById('modal-btn-cancel');

    const handleConfirm = () => {
        modal.classList.add('hidden');
        btnConfirm.removeEventListener('click', handleConfirm);
        if (onConfirm) onConfirm();
    };

    const handleCancel = () => {
        modal.classList.add('hidden');
        btnConfirm.removeEventListener('click', handleConfirm);
    };

    btnConfirm.onclick = handleConfirm;
    btnCancel.onclick = handleCancel;
    modal.classList.remove('hidden');
}

function triggerCelebration() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
        });
        setTimeout(() => {
            confetti({
                particleCount: 50,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 50,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });
        }, 300);
    }
}