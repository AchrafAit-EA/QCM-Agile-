/**
 * QCM Module 202 : Approche Agile - Partie 2
 * Planification, Ordonnancement (WBS, PERT, MPM, Gantt), Chemin Critique, Marges & Coûts
 */

const QUIZ_QUESTIONS = [
    {
        id: 1,
        category: "Découpage WBS",
        topic: "Approche descendante (Top-Down)",
        question: "Dans la répartition des fonctionnalités en tâches (WBS), quelle approche consiste à partir du résultat global du projet pour le décomposer progressivement en sous-projets, groupes de tâches puis tâches détaillées ?",
        options: [
            "A) L'approche ascendante (Bottom-Up)",
            "B) L'approche descendante (Top-Down)",
            "C) L'estimation analogique",
            "D) L'ordonnancement par niveaux"
        ],
        correctIndex: 1,
        explanation: "Dans l'approche descendante (Top-Down), on part du résultat global du projet et on le décompose en sous-projets de plus en plus détaillés, puis en groupes de tâches. Elle convient particulièrement lorsqu'on connaît bien le domaine du projet."
    },
    {
        id: 2,
        category: "Caractérisation des tâches",
        topic: "Caractéristiques intrinsèques vs extrinsèques",
        question: "Parmi les éléments suivants, lequel est une caractéristique INTRINSÈQUE d'une tâche (déterminable dès son identification, avant même la constitution de l'équipe) ?",
        options: [
            "A) La date de début programmée",
            "B) Le nom du responsable affecté à la tâche",
            "C) La charge de travail et les données d'entrée/sortie",
            "D) La date de fin programmée"
        ],
        correctIndex: 2,
        explanation: "Les caractéristiques intrinsèques (libellé, description, données d'entrée/sortie, compétences nécessaires, charge de travail, contraintes) sont propres à la tâche dès son identification. Les dates programmées et les personnes affectées sont des caractéristiques extrinsèques."
    },
    {
        id: 3,
        category: "Estimation PERT",
        topic: "Formule de la durée moyenne (DM)",
        question: "Selon la méthode PERT d'estimation des durées, quelle est la formule exacte permettant de calculer la durée moyenne (DM) d'une tâche ?",
        options: [
            "A) DM = (Do + Dp + Dc) / 3",
            "B) DM = (Do + Dp + 4 × Dc) / 6",
            "C) DM = (4 × Do + Dp + Dc) / 6",
            "D) DM = (Dp - Do) / 2"
        ],
        correctIndex: 1,
        explanation: "La formule officielle PERT pondère la durée la plus probable (Dc) par 4 : DM = (Do + Dp + 4Dc) / 6, où Do est la durée optimiste et Dp la durée pessimiste."
    },
    {
        id: 4,
        category: "Calcul PERT",
        topic: "Application numérique DM",
        question: "Calcul pratique : Une tâche de développement a une durée optimiste Do = 2 jours, une durée la plus probable Dc = 5 jours et une durée pessimiste Dp = 14 jours. Quelle est sa durée moyenne estimée (DM) ?",
        options: [
            "A) 5 jours",
            "B) 6 jours",
            "C) 7 jours",
            "D) 8 jours"
        ],
        correctIndex: 1,
        explanation: "Application de la formule : DM = (Do + Dp + 4 × Dc) / 6 = (2 + 14 + 4 × 5) / 6 = (16 + 20) / 6 = 36 / 6 = 6 jours."
    },
    {
        id: 5,
        category: "Charge & Ressources",
        topic: "Notion de Jour-Homme (JH)",
        question: "Calcul pratique : Une tâche représente une charge de travail de 12 jours-homme (JH). Si le chef de projet affecte 3 développeurs compétents travaillant à 100% de disponibilité, quelle sera la durée de réalisation ?",
        options: [
            "A) 36 jours",
            "B) 12 jours",
            "C) 4 jours",
            "D) 3 jours"
        ],
        correctIndex: 2,
        explanation: "Un jour-homme (JH) correspond au travail d'une personne pendant un jour. Avec 3 personnes à 100% sur une charge de 12 JH : Durée = 12 / 3 = 4 jours."
    },
    {
        id: 6,
        category: "Méthodes d'estimation",
        topic: "Estimation paramétrique",
        question: "Quelle technique d'estimation consiste à utiliser des calculs mathématiques proportionnels sur des tâches simples et répétitives (exemple : 1h pour 1 unité donc 10h pour 10 unités) ?",
        options: [
            "A) L'estimation paramétrique (analyse statistique et mathématique)",
            "B) L'estimation analogique (données historiques)",
            "C) Le planning de Gantt",
            "D) L'analyse SWOT"
        ],
        correctIndex: 0,
        explanation: "L'estimation paramétrique utilise des ratios ou calculs mathématiques simples sur des tâches répétitives. L'estimation analogique, quant à elle, se base sur l'historique d'anciens projets similaires."
    },
    {
        id: 7,
        category: "Ordonnancement",
        topic: "Méthode M.P.M.",
        question: "Que signifie l'acronyme M.P.M. dans les méthodes d'ordonnancement des tâches d'un projet ?",
        options: [
            "A) Modèle de Planification Mensuelle",
            "B) Méthode des Potentiels Métra",
            "C) Management des Projets Modernes",
            "D) Matrice de Priorisation des Marges"
        ],
        correctIndex: 1,
        explanation: "M.P.M. signifie Méthode des Potentiels Métra : c'est une méthode française d'ordonnancement basée sur la théorie des graphes permettant d'optimiser la planification d'un projet."
    },
    {
        id: 8,
        category: "Diagramme de GANTT",
        topic: "Avantages et limites du Gantt",
        question: "Quel est l'inconvénient principal du diagramme de GANTT par rapport aux réseaux PERT ou MPM ?",
        options: [
            "A) Il est impossible à lire sur un écran",
            "B) Il ne permet pas d'afficher la durée des tâches",
            "C) Il ne met pas clairement en évidence l'enchaînement logique et les dépendances entre les tâches",
            "D) Il ne peut être utilisé que pour des projets de moins de 5 jours"
        ],
        correctIndex: 2,
        explanation: "Le diagramme de GANTT est très facile à lire visuellement (jalonnement au plus tôt ou au plus tard), mais il montre mal l'enchaînement des contraintes d'antériorité ; c'est pourquoi il s'utilise en complément du réseau PERT ou MPM."
    },
    {
        id: 9,
        category: "Réseau PERT",
        topic: "Rôle de la tâche fictive",
        question: "Dans un réseau PERT, quelle est l'utilité d'une « tâche fictive » (représentée par une flèche en pointillés) ?",
        options: [
            "A) Remplacer une tâche annulée par le client",
            "B) Matérialiser une contrainte d'antériorité entre deux étapes avec une durée nulle (0) et sans ressources",
            "C) Ajouter une marge de sécurité de 2 jours au projet",
            "D) Représenter les jours fériés et week-ends non travaillés"
        ],
        correctIndex: 1,
        explanation: "Une tâche fictive (trait en tirets/pointillés) a pour objet de matérialiser une contrainte d'antériorité logique dans le graphe PERT. Elle a une durée nulle (0) et ne consomme aucun moyen."
    },
    {
        id: 10,
        category: "Ordonnancement",
        topic: "Niveaux d'exécution (Rangs)",
        question: "Lors de la construction d'un graphe d'ordonnancement par niveaux (rangs), quelles tâches sont placées au Niveau 0 (Rang 0) ?",
        options: [
            "A) Les tâches ayant la durée la plus longue",
            "B) Les tâches qui n'ont aucun successeur",
            "C) Les tâches qui n'ont aucune tâche antérieure (aucun prédécesseur)",
            "D) Uniquement les tâches fictives"
        ],
        correctIndex: 2,
        explanation: "Le Niveau 0 regroupe toutes les tâches qui ne possèdent aucun prédécesseur (aucune antériorité) et qui peuvent donc démarrer dès l'instant initial t = 0."
    },
    {
        id: 11,
        category: "Lecture réseau PERT",
        topic: "Dates d'une étape",
        question: "Dans le cercle représentant une étape d'un réseau PERT, que désignent respectivement le chiffre de gauche et le chiffre de droite (ex: 5 | 7) ?",
        options: [
            "A) Le numéro de la tâche et sa durée",
            "B) La date au plus tôt de l'étape (à gauche) et sa date au plus tard (à droite)",
            "C) La marge libre (à gauche) et la marge totale (à droite)",
            "D) Le coût minimum et le coût maximum"
        ],
        correctIndex: 1,
        explanation: "Dans un sommet PERT, la case inférieure indique le numéro d'étape, la case supérieure gauche indique la date au plus tôt (ti) et la case supérieure droite indique la date au plus tard (Ti)."
    },
    {
        id: 12,
        category: "Chemin Critique",
        topic: "Définition du CPM",
        question: "Comment définit-on le « chemin critique » (Critical Path Method) d'un projet ?",
        options: [
            "A) Le chemin le plus court permettant de livrer le projet en urgence",
            "B) Le chemin comportant le moins de tâches possibles",
            "C) Le chemin le plus long (en durée cumulée) du début à la fin du projet, composé de tâches à marge totale nulle",
            "D) L'ensemble des tâches ayant la marge libre la plus élevée"
        ],
        correctIndex: 2,
        explanation: "Le chemin critique est la séquence de tâches la plus longue de bout en bout. Elle détermine la durée minimale totale du projet et toutes ses tâches ont une marge totale égale à 0."
    },
    {
        id: 13,
        category: "Chemin Critique",
        topic: "Impact d'un retard critique",
        question: "Que se passe-t-il si une tâche appartenant au chemin critique prend un retard de 3 jours ?",
        options: [
            "A) Rien, car sa marge totale absorbe le retard",
            "B) La date de fin globale de l'ensemble du projet est retardée de 3 jours",
            "C) Seule la tâche suivante est décalée sans impacter la livraison finale",
            "D) Le chemin critique disparaît automatiquement"
        ],
        correctIndex: 1,
        explanation: "Les tâches critiques n'ont aucun espace de liberté (MT = 0). Tout retard pris sur une tâche critique se répercute intégralement sur la date de fin finale du projet."
    },
    {
        id: 14,
        category: "Suivi de planning",
        topic: "Chemins sub-critiques",
        question: "Pourquoi le chef de projet doit-il mettre à jour régulièrement le diagramme de GANTT au fur et à mesure de l'avancement ?",
        options: [
            "A) Parce que les chemins « sub-critiques » peuvent devenir critiques suite à un retard ou une modification",
            "B) Parce que le diagramme de Gantt s'efface après chaque semaine",
            "C) Uniquement pour changer les couleurs des barres",
            "D) Parce que la méthode MPM interdit les mises à jour"
        ],
        correctIndex: 0,
        explanation: "Le chemin critique est dynamique : en cas d'avance, de retard ou de modification d'une tâche, des chemins dits « sub-critiques » (presque critiques) peuvent devenir critiques à leur tour."
    },
    {
        id: 15,
        category: "Calcul des Marges",
        topic: "Formule de la Marge Totale (MT)",
        question: "Quelle est la formule exacte de la Marge Totale (MT) d'une tâche de durée dij comprise entre l'étape i et l'étape j ?",
        options: [
            "A) MT = tj - ti - dij",
            "B) MT = Tj - ti - dij",
            "C) MT = Tj - Ti - dij",
            "D) MT = ti + dij - Tj"
        ],
        correctIndex: 1,
        explanation: "Marge Totale : MT = Tj (date au plus tard de l'étape suivante) - ti (date au plus tôt de l'étape précédente) - dij (durée de la tâche)."
    },
    {
        id: 16,
        category: "Calcul des Marges",
        topic: "Différence Marge Libre vs Marge Totale",
        question: "Quelle affirmation distingue correctement la Marge Libre (ML) de la Marge Totale (MT) ?",
        options: [
            "A) La marge libre peut être supérieure à la marge totale",
            "B) La marge libre est le retard maximal sans retarder la fin du projet, tandis que la marge totale concerne uniquement la tâche suivante",
            "C) La marge libre est le retard maximal sans retarder le démarrage au plus tôt des tâches immédiatement suivantes (ML = tj - ti - dij)",
            "D) Une tâche critique possède toujours une marge libre positive"
        ],
        correctIndex: 2,
        explanation: "La Marge Libre (ML = tj - ti - dij) mesure le retard possible sans impacter la date au plus tôt de la tâche suivante. La Marge Totale mesure le retard sans impacter la fin du projet. De plus, on a toujours ML ≤ MT."
    },
    {
        id: 17,
        category: "Exercice de Calcul",
        topic: "Calcul de la Marge Totale (MT)",
        question: "Calcul pratique : Une tâche D a une durée d = 2 jours. L'étape précédente a une date au plus tôt ti = 8, et l'étape suivante a une date au plus tard Tj = 16. Quelle est sa Marge Totale (MT) ?",
        options: [
            "A) 2 jours",
            "B) 4 jours",
            "C) 6 jours",
            "D) 8 jours"
        ],
        correctIndex: 2,
        explanation: "On applique MT = Tj - ti - dij : MT = 16 - 8 - 2 = 6 jours. La tâche D peut prendre jusqu'à 6 jours de retard sans décaler la fin du projet."
    },
    {
        id: 18,
        category: "Exercice de Calcul",
        topic: "Calcul de la Marge Libre (ML)",
        question: "Calcul pratique : Une tâche G a une durée d = 3 jours. L'étape précédente a une date au plus tôt ti = 10, et l'étape suivante (Fin) a une date au plus tôt tj = 19. Quelle est sa Marge Libre (ML) ?",
        options: [
            "A) 3 jours",
            "B) 6 jours",
            "C) 9 jours",
            "D) 0 jour"
        ],
        correctIndex: 1,
        explanation: "On applique ML = tj - ti - dij : ML = 19 - 10 - 3 = 6 jours."
    },
    {
        id: 19,
        category: "Maîtrise des Coûts",
        topic: "Méthodes d'estimation budgétaire",
        question: "Juste avant de démarrer le projet, quelle méthode le chef de projet utilise-t-il pour construire le budget initial détaillé (estimation contractuelle) en s'appuyant sur des devis précis ?",
        options: [
            "A) La méthode analogique",
            "B) La méthode paramétrique",
            "C) La méthode analytique",
            "D) La méthode empirique"
        ],
        correctIndex: 2,
        explanation: "L'estimation évolue en 3 phases : analogique en phase de faisabilité, paramétrique en phase d'avant-projet, et analytique (basée sur des devis précis) juste avant le démarrage du projet."
    },
    {
        id: 20,
        category: "Points de validation",
        topic: "Dossier de faisabilité & SWOT",
        question: "Quel outil d'analyse stratégique est intégré dans le dossier de faisabilité pour justifier le projet en évaluant ses Forces, Faiblesses, Opportunités et Menaces ?",
        options: [
            "A) Le diagramme de Gantt",
            "B) L'analyse SWOT",
            "C) Le réseau MPM",
            "D) La matrice RACI"
        ],
        correctIndex: 1,
        explanation: "Le dossier de faisabilité s'appuie notamment sur l'Analyse SWOT (Strengths/Forces, Weaknesses/Faiblesses, Opportunities/Opportunités, Threats/Menaces) pour valider la pertinence stratégique et économique du projet."
    }
];

// ==========================================
// ÉTAT GLOBAL DE L'APPLICATION
// ==========================================
let quizMode = 'practice';
let activeQuestionsPool = [];
let currentQuestionIdx = 0;
let userAnswers = [];
let flaggedQuestions = new Set();
let timerInterval = null;
let timerSecondsLeft = 0;
let totalElapsedSeconds = 0;
let elapsedInterval = null;
let activeFilter = 'all';

// Références DOM
const viewWelcome = document.getElementById('view-welcome');
const viewQuiz = document.getElementById('view-quiz');
const viewReview = document.getElementById('view-review');
const headerControls = document.getElementById('header-quiz-controls');
const headerProgress = document.getElementById('header-progress-container');
const progressBar = document.getElementById('header-progress-bar');
const timerText = document.getElementById('quiz-timer-text');
const timerBadge = document.getElementById('quiz-timer-badge');
const modePill = document.getElementById('quiz-mode-pill');
const modeLabel = document.getElementById('quiz-mode-label');
const btnFormulas = document.getElementById('btn-formulas-modal');

// ==========================================
// GESTION DU THÈME (DARK / LIGHT MODE)
// ==========================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    updateThemeIcon();
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = document.getElementById('theme-icon');
    if (!icon) return;
    if (document.documentElement.classList.contains('dark')) {
        icon.className = 'fa-solid fa-sun text-sm text-amber-400';
    } else {
        icon.className = 'fa-solid fa-moon text-sm text-slate-600';
    }
}

// ==========================================
// MODAL MÉMO FORMULES (PARTIE 2)
// ==========================================
function openFormulasModal() {
    const modal = document.getElementById('formulas-modal');
    if (modal) modal.classList.remove('hidden');
}

function closeFormulasModal() {
    const modal = document.getElementById('formulas-modal');
    if (modal) modal.classList.add('hidden');
}

// ==========================================
// DÉMARRAGE ET LOGIQUE DU QUIZ
// ==========================================
function startQuiz() {
    const selectedMode = document.querySelector('input[name="mode-select"]:checked').value;
    const timerVal = parseInt(document.getElementById('timer-setting').value);

    quizMode = selectedMode;
    activeQuestionsPool = [...QUIZ_QUESTIONS];
    userAnswers = new Array(activeQuestionsPool.length).fill(null);
    flaggedQuestions.clear();
    currentQuestionIdx = 0;
    totalElapsedSeconds = 0;

    if (timerVal > 0) {
        timerSecondsLeft = timerVal * 60;
        startCountdownTimer();
    } else {
        timerSecondsLeft = null;
        timerText.textContent = "Illimité";
    }
    startElapsedTracker();

    if (headerControls) headerControls.classList.remove('hidden');
    if (headerProgress) headerProgress.classList.remove('hidden');

    if (quizMode === 'practice') {
        modePill.className = "hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200";
        modeLabel.textContent = "Mode Entraînement";
        document.getElementById('practice-live-score').classList.remove('hidden');
        if (btnFormulas) btnFormulas.classList.remove('hidden');
    } else {
        modePill.className = "hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200";
        modeLabel.textContent = "Mode Examen";
        document.getElementById('practice-live-score').classList.add('hidden');
        if (btnFormulas) btnFormulas.classList.add('hidden');
    }

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
                "Le temps alloué pour cette session est terminé. Vos réponses vont être validées automatiquement.",
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

function updateTimerDisplay() {
    if (timerSecondsLeft === null) return;
    const mins = Math.floor(timerSecondsLeft / 60);
    const secs = timerSecondsLeft % 60;
    timerText.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (timerSecondsLeft < 60) {
        timerBadge.className = "flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-rose-50 border border-rose-300 text-rose-700 font-mono text-xs sm:text-sm font-bold animate-pulse";
    } else {
        timerBadge.className = "flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs sm:text-sm font-semibold";
    }
}

function renderNavGrid() {
    const grid = document.getElementById('question-nav-grid');
    grid.innerHTML = '';

    activeQuestionsPool.forEach((_, idx) => {
        const btn = document.createElement('button');
        btn.id = `nav-grid-btn-${idx}`;
        btn.textContent = idx + 1;
        btn.onclick = () => loadQuestion(idx);
        btn.className = "h-9 rounded-lg text-xs font-bold border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-all";
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
            btn.className = "h-9 rounded-lg text-xs font-extrabold border-2 border-emerald-600 bg-emerald-600 text-white shadow-sm";
        } else if (isFlagged) {
            btn.className = "h-9 rounded-lg text-xs font-bold border-2 border-amber-400 bg-amber-50 text-amber-900";
        } else if (isAnswered) {
            btn.className = "h-9 rounded-lg text-xs font-bold border border-slate-700 bg-slate-800 text-white";
        } else {
            btn.className = "h-9 rounded-lg text-xs font-medium border border-slate-200 bg-white text-slate-600 hover:bg-slate-50";
        }
    });
}

function loadQuestion(index) {
    currentQuestionIdx = index;
    const q = activeQuestionsPool[index];

    document.getElementById('q-category-pill').textContent = q.category;
    document.getElementById('q-index-pill').textContent = `Question ${index + 1} sur ${activeQuestionsPool.length}`;
    document.getElementById('q-text').textContent = q.question;

    const answeredCount = userAnswers.filter(a => a !== null).length;
    const pct = Math.round((answeredCount / activeQuestionsPool.length) * 100);
    progressBar.style.width = `${pct}%`;
    document.getElementById('answered-counter-pill').textContent = `${answeredCount}/${activeQuestionsPool.length} répondues`;

    const flagBtn = document.getElementById('btn-flag-question');
    if (flaggedQuestions.has(index)) {
        flagBtn.innerHTML = `<i class="fa-solid fa-bookmark text-amber-500"></i><span class="hidden sm:inline text-amber-700 font-semibold">Marquée</span>`;
    } else {
        flagBtn.innerHTML = `<i class="fa-regular fa-bookmark"></i><span class="hidden sm:inline">Marquer pour relecture</span>`;
    }

    const optionsContainer = document.getElementById('q-options-container');
    optionsContainer.innerHTML = '';

    const chosenAnswer = userAnswers[index];
    const isAlreadyAnswered = chosenAnswer !== null;

    q.options.forEach((optText, optIdx) => {
        const btn = document.createElement('button');
        const letter = String.fromCharCode(65 + optIdx);

        btn.disabled = (quizMode === 'practice' && isAlreadyAnswered);
        btn.className = getOptionButtonClass(optIdx, chosenAnswer, isAlreadyAnswered, q.correctIndex);

        btn.innerHTML = `
            <div class="flex items-start space-x-3 text-left w-full">
                <span class="w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${getOptionPrefixBadgeClass(optIdx, chosenAnswer, isAlreadyAnswered, q.correctIndex)}">
                    ${letter}
                </span>
                <span class="text-sm font-medium leading-relaxed flex-1 text-slate-800 dark:text-slate-100">${optText.substring(3)}</span>
            </div>
        `;

        btn.onclick = () => selectAnswer(optIdx);
        optionsContainer.appendChild(btn);
    });

    const feedbackCard = document.getElementById('instant-feedback-card');
    if (quizMode === 'practice' && isAlreadyAnswered) {
        renderInstantFeedback(q, chosenAnswer);
    } else {
        feedbackCard.classList.add('hidden');
    }

    document.getElementById('btn-prev-question').disabled = (index === 0);
    document.getElementById('btn-prev-question').classList.toggle('opacity-40', index === 0);

    const isLast = index === activeQuestionsPool.length - 1;
    document.getElementById('btn-next-question').classList.toggle('hidden', isLast);
    document.getElementById('btn-finish-quiz').classList.toggle('hidden', !isLast && answeredCount < activeQuestionsPool.length);

    if (answeredCount === activeQuestionsPool.length) {
        document.getElementById('btn-finish-quiz').classList.remove('hidden');
    }

    updateNavGridVisuals();
    updateLivePracticeScore();
}

function getOptionButtonClass(optIdx, chosenAnswer, isAlreadyAnswered, correctIdx) {
    let base = "w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between ";

    if (!isAlreadyAnswered) {
        return base + "border-slate-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/20 active:scale-[0.99]";
    }

    if (quizMode === 'practice') {
        if (optIdx === correctIdx) {
            return base + "border-emerald-500 bg-emerald-50 text-emerald-950";
        }
        if (optIdx === chosenAnswer && optIdx !== correctIdx) {
            return base + "border-rose-500 bg-rose-50 text-rose-950";
        }
        return base + "border-slate-200 bg-slate-50 opacity-60 text-slate-500";
    }

    if (optIdx === chosenAnswer) {
        return base + "border-emerald-600 bg-emerald-50/60 font-semibold text-slate-900";
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
        return "bg-emerald-600 text-white";
    }
    return "bg-slate-100 text-slate-700 border border-slate-200";
}

function selectAnswer(optIdx) {
    if (quizMode === 'practice' && userAnswers[currentQuestionIdx] !== null) return;
    userAnswers[currentQuestionIdx] = optIdx;
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
        feedbackTitle.className = "font-bold text-emerald-950";
        feedbackTitle.textContent = "Excellente réponse ! Bonne maîtrise.";
    } else {
        feedbackCard.className = "rounded-xl p-4 border bg-rose-50 border-rose-200 text-rose-900";
        feedbackIcon.innerHTML = `<i class="fa-solid fa-circle-xmark text-rose-600"></i>`;
        feedbackTitle.className = "font-bold text-rose-950";
        feedbackTitle.textContent = "Réponse incorrecte. Explication détaillée :";
    }

    feedbackExp.textContent = q.explanation;
}

function navigateQuestion(step) {
    const nextIdx = currentQuestionIdx + step;
    if (nextIdx >= 0 && nextIdx < activeQuestionsPool.length) {
        loadQuestion(nextIdx);
    }
}

function toggleFlagCurrentQuestion() {
    if (flaggedQuestions.has(currentQuestionIdx)) {
        flaggedQuestions.delete(currentQuestionIdx);
    } else {
        flaggedQuestions.add(currentQuestionIdx);
    }
    loadQuestion(currentQuestionIdx);
}

function updateLivePracticeScore() {
    let correct = 0;
    activeQuestionsPool.forEach((q, idx) => {
        if (userAnswers[idx] === q.correctIndex) correct++;
    });
    document.getElementById('live-score-text').textContent = `${correct}/${activeQuestionsPool.length} pts`;
}

// ==========================================
// SOUMISSION ET RÉSULTATS
// ==========================================
function finishQuizConfirmation() {
    const unanswered = userAnswers.filter(a => a === null).length;

    if (unanswered > 0) {
        showCustomModal(
            "fa-solid fa-circle-question",
            "Questions sans réponse",
            `Il vous reste ${unanswered} question(s) sans réponse. Les questions non répondues seront comptabilisées comme fausses. Voulez-vous valider quand même ?`,
            () => submitQuizFinal()
        );
    } else {
        showCustomModal(
            "fa-solid fa-flag-checkered",
            "Terminer le QCM Partie 2 ?",
            "Vous avez répondu à toutes les questions. Souhaitez-vous soumettre vos réponses et afficher votre bilan officiel ?",
            () => submitQuizFinal()
        );
    }
}

function confirmExitQuiz() {
    showCustomModal(
        "fa-solid fa-door-open",
        "Quitter la session ?",
        "Votre progression actuelle sera perdue et vous retournerez à la configuration de la Partie 2.",
        () => exitToWelcome()
    );
}

function exitToWelcome() {
    clearInterval(timerInterval);
    clearInterval(elapsedInterval);
    if (headerControls) headerControls.classList.add('hidden');
    if (headerProgress) headerProgress.classList.add('hidden');
    if (btnFormulas) btnFormulas.classList.add('hidden');
    viewQuiz.classList.add('hidden');
    viewReview.classList.add('hidden');
    viewWelcome.classList.remove('hidden');
}

function submitQuizFinal() {
    clearInterval(timerInterval);
    clearInterval(elapsedInterval);
    if (headerControls) headerControls.classList.add('hidden');
    if (headerProgress) headerProgress.classList.add('hidden');
    if (btnFormulas) btnFormulas.classList.add('hidden');

    let correctCount = 0;
    activeQuestionsPool.forEach((q, idx) => {
        if (userAnswers[idx] === q.correctIndex) {
            correctCount++;
        }
    });

    const total = activeQuestionsPool.length;
    const wrongCount = total - correctCount;
    const percentage = Math.round((correctCount / total) * 100);

    // Sauvegarde du meilleur score Partie 2 pour la page d'accueil
    if (total === 20) {
        const prevBest = parseInt(localStorage.getItem('bestScore_p2') || '0');
        if (correctCount > prevBest) {
            localStorage.setItem('bestScore_p2', correctCount);
        }
    }

    const headerBg = document.getElementById('result-header-bg');
    const appreciationEl = document.getElementById('result-user-appreciation');
    const subtitleEl = document.getElementById('result-user-subtitle');

    if (percentage >= 80) {
        headerBg.className = "p-6 sm:p-8 text-white relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-800";
        appreciationEl.textContent = "Excellent ! Maîtrise Totale 🏆";
        subtitleEl.textContent = "Vous maîtrisez parfaitement les calculs PERT, le chemin critique et les marges.";
        triggerVictoryConfetti();
    } else if (percentage >= 60) {
        headerBg.className = "p-6 sm:p-8 text-white relative overflow-hidden bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800";
        appreciationEl.textContent = "Validé ! Bon Résultat 👍";
        subtitleEl.textContent = "Vous dépassez le seuil de réussite. Révisez les quelques erreurs ci-dessous pour viser 20/20.";
    } else {
        headerBg.className = "p-6 sm:p-8 text-white relative overflow-hidden bg-gradient-to-r from-rose-600 via-red-600 to-rose-800";
        appreciationEl.textContent = "Révision Recommandée 📚";
        subtitleEl.textContent = "Revoyez les formules de durées PERT, de marge totale et de marge libre avant l'examen.";
    }

    document.getElementById('result-score-number').textContent = `${correctCount}/${total}`;
    document.getElementById('result-percentage').textContent = `${percentage}%`;
    document.getElementById('stat-correct-count').textContent = correctCount;
    document.getElementById('stat-wrong-count').textContent = wrongCount;

    const eMins = Math.floor(totalElapsedSeconds / 60);
    const eSecs = totalElapsedSeconds % 60;
    document.getElementById('stat-time-spent').textContent = `${String(eMins).padStart(2, '0')}:${String(eSecs).padStart(2, '0')}`;

    const btnMistakes = document.getElementById('btn-retake-mistakes');
    if (wrongCount === 0) {
        btnMistakes.classList.add('hidden');
    } else {
        btnMistakes.classList.remove('hidden');
    }

    document.getElementById('count-filter-all').textContent = total;
    document.getElementById('count-filter-wrong').textContent = wrongCount;
    document.getElementById('count-filter-correct').textContent = correctCount;

    viewQuiz.classList.add('hidden');
    viewReview.classList.remove('hidden');

    filterReviewQuestions(wrongCount > 0 ? 'wrong' : 'all');
}

function filterReviewQuestions(type) {
    activeFilter = type;

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
        card.className = `bg-white rounded-2xl p-5 sm:p-6 border transition-all ${isCorrect ? 'border-slate-200' : 'border-rose-200 shadow-sm shadow-rose-100/50'}`;

        let statusBadge = isCorrect 
            ? `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200"><i class="fa-solid fa-circle-check"></i> Réponse Correcte</span>`
            : `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200"><i class="fa-solid fa-circle-xmark"></i> Erreur Commise</span>`;

        let optionsHTML = '';
        q.options.forEach((optText, optIdx) => {
            const isUserPick = optIdx === userChoice;
            const isRightAnswer = optIdx === q.correctIndex;

            let optStyle = "border-slate-100 bg-slate-50 text-slate-700";
            let markerIcon = `<span class="w-6 h-6 rounded-md bg-white border border-slate-200 font-bold text-xs flex items-center justify-center text-slate-700">${String.fromCharCode(65 + optIdx)}</span>`;

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
                        <span class="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
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

function retakeMistakesOnly() {
    const wrongQuestions = [];
    activeQuestionsPool.forEach((q, idx) => {
        if (userAnswers[idx] !== q.correctIndex) {
            wrongQuestions.push(q);
        }
    });

    if (wrongQuestions.length === 0) return;

    quizMode = 'practice';
    activeQuestionsPool = wrongQuestions;
    userAnswers = new Array(activeQuestionsPool.length).fill(null);
    flaggedQuestions.clear();
    currentQuestionIdx = 0;
    totalElapsedSeconds = 0;
    timerSecondsLeft = null;

    timerText.textContent = "Ciblé";
    startElapsedTracker();

    if (headerControls) headerControls.classList.remove('hidden');
    if (headerProgress) headerProgress.classList.remove('hidden');
    if (btnFormulas) btnFormulas.classList.remove('hidden');
    modePill.className = "hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200";
    modeLabel.textContent = `Révision Erreurs (${wrongQuestions.length})`;
    document.getElementById('practice-live-score').classList.remove('hidden');

    viewReview.classList.add('hidden');
    viewQuiz.classList.remove('hidden');

    renderNavGrid();
    loadQuestion(0);
}

function retakeFullQuiz() {
    exitToWelcome();
}

function showCustomModal(iconClass, title, message, onConfirmCallback) {
    const modal = document.getElementById('custom-modal');
    document.getElementById('modal-icon').className = iconClass;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-message').textContent = message;

    const btnCancel = document.getElementById('modal-btn-cancel');
    const btnConfirm = document.getElementById('modal-btn-confirm');

    btnCancel.onclick = () => modal.classList.add('hidden');
    btnConfirm.onclick = () => {
        modal.classList.add('hidden');
        if (onConfirmCallback) onConfirmCallback();
    };

    modal.classList.remove('hidden');
}

function triggerVictoryConfetti() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 90,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}

// Initialisation du thème au chargement
initTheme();