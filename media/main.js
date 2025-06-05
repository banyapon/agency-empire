// --- Language Configuration ---
const LANGUAGES = {
  en: {
    // App & Header
    appTitle: "Agency Simulation Game",
    appNameHeader: "Agency Simulation",
    moneyLabel: "Funds",
    reputationLabel: "Reputation",
    officeLevelLabel: "Office Lv",
    currencySuffix: "USD",
    dateYear: "Year",
    dateMonth: "Month",
    dateDay: "Day",
    // Projects Section
    projectsSectionTitle: "Projects",
    findNewProjectBtn: "Find New Project",
    tabAvailableProjects: "Available Projects",
    tabInProgressProjects: "In Progress",
    tabCompletedProjects: "Completed Projects",
    noAvailableProjects: "No available projects. Try 'Find New Project'.",
    noInProgressProjects: "No projects in progress.",
    noCompletedProjects: "No completed projects yet.",
    // Team Section
    teamSectionTitle: "Team",
    hireEmployeeBtn: "Hire Employee",
    noEmployees: "No employees yet.",
    // Office Upgrade Section
    officeUpgradeSectionTitle: "Upgrade Office",
    upgradeOfficeToLevel: "Upgrade Office to Lv. {0}",
    upgradeOfficeDesc: "Increase employee limit and project opportunities.",
    priceLabel: "Price",
    upgradeBtn: "Upgrade",
    upgradeMaxLevel: "Max Level Reached",
    // Notifications Section
    notificationsSectionTitle: "Notifications / Events",
    noNotifications: "No notifications yet.",
    // Modals
    tutorialTitle: "Welcome to Agency Empire!",
    tutorialGoalLabel: "Goal:",
    tutorialGoalText: "Build the ultimate advertising agency!",
    tutorialHowToPlay: "How to Play:",
    tutorialStepFindProject: "Find Projects: Click 'Find New Project' to discover jobs.",
    tutorialStepAcceptProject: "Accept Projects: Review available projects and click 'Accept Project'.",
    tutorialStepHireEmployees: "Hire Employees: Hire staff to help with work when you have enough funds.",
    tutorialStepManageProjects: "Manage Projects: Keep an eye on progress and deadlines.",
    tutorialStepFinances: "Finances: Completed projects are billed; wait for client payments.",
    tutorialStepUpgrade: "Upgrade: Develop your office to take on more work and staff.",
    tutorialTipLabel: "Tip:",
    tutorialTipText: "Manage funds wisely, choose suitable projects, and watch for random events!",
    tutorialStartButton: "Got it, Let's Play!",
    hireModalTitle: "Recruit Employees",
    noCandidates: "No candidates available now. Check back later.",
    candidateSalaryLabel: "Desired Salary",
    candidateHiringFeeLabel: "Hiring Fee",
    oneTimeFee: "one-time",
    hireThisCandidateBtn: "Hire This Person",
    // Project Card Details
    projectClientLabel: "Client",
    projectBudgetLabel: "Budget",
    projectTimelineLabel: "Timeline",
    projectBillingLabel: "Billing",
    projectDepositRequired: "Deposit Required",
    projectStatusAwaitingAcceptance: "Awaiting Acceptance",
    projectStatusInProgress: "In Progress ({0}%)",
    projectStatusCompletedAwaitingBill: "Completed (Awaiting Billing)",
    projectStatusBilledAwaitingPayment: "Billed (Awaiting Payment)",
    projectStatusPaid: "Paid",
    acceptProjectBtn: "Accept This Project",
    viewDetailsBtn: "View Details",
    processBillingBtn: "Process Billing",
    statusLabel: "Status",
    installmentNum: "Installment {0}",
    paidOn: "Paid on",
    dueOn: "Due on",
    // Employee Card Details
    employeeSalaryLabel: "Salary",
    employeeSkillsLabel: "Skills",
    trainEmployeeBtn: "Train",
    fireEmployeeBtn: "Fire",
    // Event Log Messages
    eventWelcome: "Welcome to Agency Empire! Start your business.",
    eventNewProjectFound: "New project opportunity: {0}",
    eventProjectAccepted: "Project {0} accepted!",
    eventDepositPaid: "Paid deposit of {0} {1} for project {2}.",
    eventNoFundsForDeposit: "Not enough funds for project {0} deposit! (Requires {1} {2})",
    eventEmployeeHired: "Hired {0}! (Hiring fee: {1} {2})",
    eventNoFundsToHire: "Not enough funds to hire {0}! (Requires {1} {2})",
    eventOfficeFull: "Office is full! Upgrade to hire more.",
    eventEmployeeFired: "{0} has been fired.",
    eventOfficeUpgraded: "Office upgraded to Lv. {0}!",
    eventNoFundsForUpgrade: "Not enough funds to upgrade office (Requires {0} {1})",
    eventProjectCompleted: "Project \"{0}\" completed! Prepare for billing.",
    eventProjectBilled: "Project \"{0}\" billed.",
    eventPaymentReceived: "Received {0} {1} from project \"{2}\".",
    eventAllPaymentsReceived: "Project \"{0}\" fully paid.",
    eventBonusReceived: "Good news! Received a special bonus of {0} {1} from a client referral!",
    eventUnexpectedCost: "Oh no! An unexpected cost (e.g., equipment failure) of {0} {1}.",
    eventEmployeeSkillUp: "Employee {0} improved skill {1} to Lv.{2}!",
    eventPowerOutage: "Power outage! Work might be slightly slower today.",
    eventOfficeMaxLevel: "Your office is at the maximum level!",
    eventTooManyOpportunities: "Too many project opportunities. Try clearing old ones first!",
    eventErrorNoCandidate: "Error: Candidate data not found.",
    eventTrainingNotReady: "Training system for {0} is not yet available.",
    eventNotEnoughMoneySalaries: "Not enough money to pay salaries! Employees might leave soon..."
  },
  ja: {
    /* … (Japanese translations here) … */
  },
  zh: {
    /* … (Chinese translations here) … */
  }
};

// กำหนดภาษาตั้งต้นเป็นอังกฤษ
let currentLanguage = 'en';

// --- Game Configuration ---
const INITIAL_MONEY = 100000;
const INITIAL_REPUTATION = 10;
const INITIAL_OFFICE_LEVEL = 1;
const MAX_EMPLOYEES_PER_LEVEL = [0, 2, 5, 10, 20];
const OFFICE_UPGRADE_COSTS = [0, 500000, 1500000, 5000000];
const PROJECT_OPPORTUNITY_BASE_CHANCE = 0.7;
const DAYS_PER_MONTH = 30;
const MONTHS_PER_YEAR = 12;

const EMPLOYEE_NAMES_MALE = [
  "Somchai",
  "Prasert",
  "Wichai",
  "Thanakorn",
  "Ekachai",
  "Kongpop",
  "Teeradech",
  "Warapong",
  "Nattapong",
  "Kittipong",
  "Arthit",
  "Chalerm",
  "Sakchai",
  "Wannaphong",
  "Phuwadol",
  "Suwit",
  "Nirun",
  // American names
  "John",
  "Peter",
  "Michael",
  "David",
  "Robert",
  "James",
  "William",
  "Charles",
  "Thomas",
  "Daniel",
  "Matthew",
  "Christopher"
];

const EMPLOYEE_NAMES_FEMALE = [
  "Somying",
  "Jintana",
  "Orathai",
  "Kanda",
  "Thipsuda",
  "Phenny",
  "Rasami",
  "Suchada",
  "Naphat",
  "Chanida",
  "Wimonrat",
  "Pimchanok",
  "Kamolrat",
  "Mayuree",
  "Busarakham",
  "Naruemon",
  "Supaporn",
  // American names
  "Cherry",
  "Jane",
  "Mary",
  "Patricia",
  "Linda",
  "Barbara",
  "Elizabeth",
  "Jennifer",
  "Maria",
  "Susan",
  "Jessica",
  "Sarah"
];

const EMPLOYEE_SURNAMES = [
  "Raktai",
  "Sukjai",
  "Meebun",
  "Charoensuk",
  "Rungreung",
  "Phatthana",
  "Kaonah",
  "Chaisiri",
  "Phongpet",
  "Sriwichai",
  "Chantarasri",
  "Phumipat",
  "Sukprasert",
  "Rojanaphruk",
  "Intarut",
  "Kanchanasin",
  "Jirasut",
  // American surnames
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Miller",
  "Davis",
  "Garcia",
  "Rodriguez",
  "Wilson"
];


const EMPLOYEE_SKILLS = [
  "Creative",
  "Graphic Design",
  "Digital Marketing",
  "Customer Relations",
  "Strategic Planning",
  "Elephant Handling",            // New, unusual skill
  "Alien Communication",          // New, unusual skill
  "Experimental Advertising",     // New, unusual skill
  "Research Insight Analysis",    // New, unusual skill
  "Augmented Reality Design"      // New, unusual skill
];

const PROJECT_TYPES = [
  "Logo Design",
  "E-Commerce Website Development",
  "Social Media Campaign",
  "Advertising Video Production",
  "Product Launch Event",
  "Comprehensive Marketing Plan",
  "Painted Elephant Photo Shoot for Advertising",  // Weird project
  "Alien Research & Insight Report",               // Weird project
  "Virtual Reality Museum Installation",
  "Interactive AR Treasure Hunt Campaign",
  "Holographic Product Demo",
  "Time-Travel Promo Video",
  "Underwater Brand Photography",
  "AI-Powered Customer Behavioral Study"
];

const CLIENT_NAMES = [
  "Sunrise Bright Co., Ltd.",
  "Quality Products LLC",
  "Delicious Restaurant",
  "Comfort Inn Hotel",
  "New Idea Startup",
  "Intergalactic Federation",          // Unusual client
  "Elephant Conservation Fund",        // Unusual client
  "Time Travelers Inc.",               // Unusual client
  "Deep-Sea Ventures Ltd.",
  "AI-Driven Insights Corp."
];


const BILLING_STRUCTURES = [
  { 
    name: "1 Installment (100%)", 
    installments: [{ percent: 100, daysAfterCompletion: 0 }] 
  },
  { 
    name: "2 Installments (50-50%)", 
    installments: [
      { percent: 50, daysAfterCompletion: 0 }, 
      { percent: 50, daysAfterCompletion: 30 }
    ] 
  },
  { 
    name: "2 Installments (60-40%)", 
    installments: [
      { percent: 60, daysAfterCompletion: 0 }, 
      { percent: 40, daysAfterCompletion: 30 }
    ] 
  },
  { 
    name: "2 Installments (30-70%)", 
    installments: [
      { percent: 30, daysAfterCompletion: 0 }, 
      { percent: 70, daysAfterCompletion: 30 }
    ] 
  },
  { 
    name: "2 Installments (70-30%)", 
    installments: [
      { percent: 70, daysAfterCompletion: 0 }, 
      { percent: 30, daysAfterCompletion: 30 }
    ] 
  },
  { 
    name: "2 Installments (40-60%)", 
    installments: [
      { percent: 40, daysAfterCompletion: 0 }, 
      { percent: 60, daysAfterCompletion: 30 }
    ] 
  },
  { 
    name: "3 Installments (30-30-40%)", 
    installments: [
      { percent: 30, daysAfterCompletion: 0 },
      { percent: 30, daysAfterCompletion: 15 },
      { percent: 40, daysAfterCompletion: 45 }
    ] 
  }
];

const PAYMENT_TERMS_DAYS = [1, 15, 30, 45];

// --- Game State ---
let gameState = {
  money: INITIAL_MONEY,
  reputation: INITIAL_REPUTATION,
  officeLevel: INITIAL_OFFICE_LEVEL,
  currentTotalDays: 1,
  employees: [],
  projects: [],
  projectOpportunities: [],
  nextProjectId: 1,
  nextEmployeeId: 1,
  gameSpeed: 1000,
  isPaused: false,
  eventLog: [{
    messageKey: 'eventWelcome',
    args: [],
    type: "system",
    totalDays: 1
  }]
};

// --- DOM Elements ---
const moneyEl = document.getElementById('money');
const reputationEl = document.getElementById('reputation');
const officeLevelEl = document.getElementById('officeLevel');
const currentDateFormattedEl = document.getElementById('currentDateFormatted');
const availableProjectsListEl = document.getElementById('available-projects-list');
const inProgressProjectsListEl = document.getElementById('in-progress-projects-list');
const completedProjectsListEl = document.getElementById('completed-projects-list');
const employeeListEl = document.getElementById('employee-list');
const nextOfficeLevelEl = document.getElementById('nextOfficeLevel');
const officeUpgradeCostEl = document.getElementById('officeUpgradeCost');
const upgradeOfficeButtonEl = document.getElementById('upgradeOfficeButton');
const eventLogContainerEl = document.getElementById('event-log-container');
const noEventsEl = document.getElementById('no-events');
const noAvailableProjectsEl = document.getElementById('no-available-projects');
const noInProgressProjectsEl = document.getElementById('no-in-progress-projects');
const noCompletedProjectsEl = document.getElementById('no-completed-projects');
const noEmployeesEl = document.getElementById('no-employees');
const languageSelectorEl = document.getElementById('language-selector');
const appTitleEl = document.getElementById('app-title');
const appNameHeaderEl = document.getElementById('app-name-header');

// --- Utility Functions ---
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function formatCurrency(amount) {
  return amount.toLocaleString('th-TH');
}
function getRandomColorHex() {
  return Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

// --- Language Helper ---
function getLangString(key, ...args) {
  const langData = LANGUAGES[currentLanguage] || LANGUAGES.en;
  let str = langData[key] !== undefined ? langData[key] : `MISSING_LANG_KEY: ${key}`;
  args.forEach((arg, index) => {
    const placeholder = `{${index}}`;
    if (typeof str === 'string') {
      str = str.replace(placeholder, arg);
    }
  });
  return str;
}

// --- Date Formatting ---
function getFormattedDate(totalDays) {
  const year = Math.floor((totalDays - 1) / (DAYS_PER_MONTH * MONTHS_PER_YEAR)) + 1;
  const monthInYear = Math.floor(((totalDays - 1) % (DAYS_PER_MONTH * MONTHS_PER_YEAR)) / DAYS_PER_MONTH) + 1;
  const dayInMonth = ((totalDays - 1) % DAYS_PER_MONTH) + 1;
  return { year, month: monthInYear, day: dayInMonth };
}
function getDateString(totalDays) {
  const dateObj = getFormattedDate(totalDays);
  return `${getLangString('dateYear')} ${dateObj.year}, ${getLangString('dateMonth')} ${dateObj.month}, ${getLangString('dateDay')} ${dateObj.day}`;
}

// --- Event Log ---
function addEventLog(messageKey, type = "system", ...args) {
  gameState.eventLog.unshift({ messageKey, args, type, totalDays: gameState.currentTotalDays });
  if (gameState.eventLog.length > 20) gameState.eventLog.pop();
  renderEventLog();
}

function renderEventLog() {
  if (!eventLogContainerEl) return;
  eventLogContainerEl.innerHTML = '';

  if (gameState.eventLog.length === 0) {
    noEventsEl.style.display = 'block';
    return;
  } else {
    noEventsEl.style.display = 'none';
  }

  gameState.eventLog.forEach(logEntry => {
    const card = document.createElement('div');
    card.className = 'event-item-card';
    let placeholderText = "E";
    let bgColor = "cccccc";
    let textColor = "ffffff";

    switch (logEntry.type) {
      case "system": placeholderText = "S"; bgColor = "667EEA"; break;
      case "project": placeholderText = "P"; bgColor = "4CAF50"; break;
      case "employee": placeholderText = "U"; bgColor = "FF9800"; break;
      case "money_gain": placeholderText = "$"; bgColor = "4CAF50"; break;
      case "money_loss": placeholderText = "!"; bgColor = "F44336"; break;
      default: break;
    }

    const message = getLangString(logEntry.messageKey, ...(logEntry.args || []));
    const fullMessage = `${getDateString(logEntry.totalDays)}: ${message}`;

    card.innerHTML = `
      <img src="https://placehold.co/36x36/${bgColor}/${textColor}?text=${placeholderText}&font=kanit" alt="Event Icon" class="rounded-full">
      <p>${fullMessage}</p>
    `;
    eventLogContainerEl.appendChild(card);
  });
}

// --- UI Translations & Updates ---
function applyTranslations() {
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (!key) return;
    const translatedText = getLangString(key);
    if (key.startsWith('tutorialStep')) {
      el.innerHTML = translatedText;
    } else {
      el.textContent = translatedText;
    }
  });

  if (appTitleEl) appTitleEl.textContent = getLangString('appTitle');
  if (appNameHeaderEl) appNameHeaderEl.innerHTML = `<i class="fas fa-building mr-2"></i> ${getLangString('appNameHeader')}`;

  updateStatsUI();
  renderProjects();
  renderEmployees();
  renderEventLog();
}

function setLanguage(lang) {
  if (LANGUAGES[lang]) {
    currentLanguage = lang;
    localStorage.setItem('agencyGameLanguage', lang);
    document.body.className = `lang-${lang}`;
    applyTranslations();
  }
}

// --- Update Stats in UI ---
function updateStatsUI() {
  if (!moneyEl || !reputationEl || !officeLevelEl || !currentDateFormattedEl || !nextOfficeLevelEl || !officeUpgradeCostEl || !upgradeOfficeButtonEl) {
    console.error("UI elements missing in updateStatsUI.");
    return;
  }

  moneyEl.textContent = formatCurrency(gameState.money);
  moneyEl.classList.remove('money-positive', 'money-negative');
  if (gameState.money > 100000) {
    moneyEl.classList.add('money-positive');
  } else if (gameState.money < 0) {
    moneyEl.classList.add('money-negative');
  }
  const moneyStatContainer = document.getElementById('money-stat-container');
  if (moneyStatContainer) {
    moneyStatContainer.innerHTML = `<i class="fas fa-coins mr-1"></i> ${getLangString('moneyLabel')}: <span id="money" class="${moneyEl.className}">${formatCurrency(gameState.money)}</span> ${getLangString('currencySuffix')}`;
  }

  reputationEl.textContent = gameState.reputation;
  const repStatContainer = document.getElementById('reputation-stat-container');
  if (repStatContainer) {
    repStatContainer.innerHTML = `<i class="fas fa-star mr-1"></i> ${getLangString('reputationLabel')}: <span id="reputation">${gameState.reputation}</span>`;
  }

  officeLevelEl.textContent = gameState.officeLevel;
  const officeStatContainer = document.getElementById('office-level-stat-container');
  if (officeStatContainer) {
    officeStatContainer.innerHTML = `<i class="fas fa-level-up-alt mr-1"></i> ${getLangString('officeLevelLabel')}: <span id="officeLevel">${gameState.officeLevel}</span>`;
  }

  currentDateFormattedEl.textContent = getDateString(gameState.currentTotalDays);

  const upgradeOfficeToLevelEl = document.querySelector('[data-lang="upgradeOfficeToLevel"]');
  if (gameState.officeLevel < MAX_EMPLOYEES_PER_LEVEL.length - 1) {
    nextOfficeLevelEl.textContent = (gameState.officeLevel + 1).toString();
    officeUpgradeCostEl.textContent = formatCurrency(OFFICE_UPGRADE_COSTS[gameState.officeLevel]);
    upgradeOfficeButtonEl.disabled = gameState.money < OFFICE_UPGRADE_COSTS[gameState.officeLevel];
    if (upgradeOfficeToLevelEl) {
      upgradeOfficeToLevelEl.innerHTML = getLangString('upgradeOfficeToLevel', (gameState.officeLevel + 1).toString());
    }
    if (upgradeOfficeButtonEl) {
      upgradeOfficeButtonEl.textContent = getLangString('upgradeBtn');
    }
  } else {
    nextOfficeLevelEl.textContent = "";
    if (upgradeOfficeToLevelEl) {
      upgradeOfficeToLevelEl.textContent = getLangString('upgradeMaxLevel');
    }
    officeUpgradeCostEl.textContent = "-";
    if (upgradeOfficeButtonEl) {
      upgradeOfficeButtonEl.textContent = getLangString('upgradeMaxLevel');
      upgradeOfficeButtonEl.disabled = true;
    }
  }
}

// --- Render Projects Lists ---
function renderProjects() {
  if (!availableProjectsListEl || !inProgressProjectsListEl || !completedProjectsListEl || !noAvailableProjectsEl || !noInProgressProjectsEl || !noCompletedProjectsEl) {
    console.error("UI elements missing in renderProjects.");
    return;
  }

  availableProjectsListEl.innerHTML = '';
  inProgressProjectsListEl.innerHTML = '';
  completedProjectsListEl.innerHTML = '';

  let hasAvailable = false, hasInProgress = false, hasCompleted = false;

  gameState.projectOpportunities.forEach(opp => {
    const card = createProjectCard(opp, 'available_opportunity');
    availableProjectsListEl.appendChild(card);
    hasAvailable = true;
  });
  gameState.projects.forEach(p => {
    if (p.status === 'in-progress') {
      const card = createProjectCard(p, 'in-progress');
      inProgressProjectsListEl.appendChild(card);
      hasInProgress = true;
    } else if (['completed', 'billed', 'paid'].includes(p.status)) {
      const card = createProjectCard(p, 'completed');
      completedProjectsListEl.appendChild(card);
      hasCompleted = true;
    }
  });

  noAvailableProjectsEl.style.display = hasAvailable ? 'none' : 'block';
  noInProgressProjectsEl.style.display = hasInProgress ? 'none' : 'block';
  noCompletedProjectsEl.style.display = hasCompleted ? 'none' : 'block';
}

function createProjectCard(project, cardType) {
  const card = document.createElement('div');
  card.className = 'project-card';

  let statusTextKey = '', statusTextArgs = [], actionsHTML = '';

  if (cardType === 'available_opportunity') {
    statusTextKey = 'projectStatusAwaitingAcceptance';
    actionsHTML = `
      <button class="button mt-3 w-full text-sm" onclick="acceptProjectOpportunity(${project.id})">
        <i class="fas fa-check-circle mr-1"></i> ${getLangString('acceptProjectBtn')}
      </button>
      <button class="button button-secondary mt-1 w-full text-sm" onclick="viewProjectDetails(${project.id})">
        <i class="fas fa-eye mr-1"></i> ${getLangString('viewDetailsBtn')}
      </button>
    `;
  } else if (cardType === 'in-progress') {
    const progressPercent = project.timelineDays > 0
    ? Math.min(100, Math.floor((project.progress / project.timelineDays) * 100))
    : 0;
    statusTextKey = 'projectStatusInProgress';
    statusTextArgs = [progressPercent];
    actionsHTML = `
      <button class="button button-secondary mt-3 w-full text-sm" onclick="viewProjectDetails(${project.id})">
        <i class="fas fa-eye mr-1"></i> ${getLangString('viewDetailsBtn')}
      </button>
    `;
  } else if (cardType === 'completed') {
    if (project.status === 'completed') statusTextKey = 'projectStatusCompletedAwaitingBill';
    else if (project.status === 'billed') statusTextKey = 'projectStatusBilledAwaitingPayment';
    else if (project.status === 'paid') statusTextKey = 'projectStatusPaid';

    actionsHTML = `
      <button class="button button-secondary mt-3 w-full text-sm" onclick="viewProjectDetails(${project.id})">
        <i class="fas fa-eye mr-1"></i> ${getLangString('viewDetailsBtn')}
      </button>
    `;
  }

  const statusText = getLangString(statusTextKey, ...statusTextArgs);
  const progressPercent = project.timelineDays > 0 
    ? Math.min(100, Math.floor((project.progress / project.timelineDays) * 100)) 
    : 0;
  const progressHTML = (cardType === 'in-progress') 
    ? `<div class="progress-bar-container mt-1"><div class="progress-bar" style="width: ${progressPercent}%;"></div></div>`
    : '';

  card.innerHTML = `
    <div class="flex justify-between items-start">
      <h3 class="text-indigo-700">${project.name}</h3> 
      <span class="text-sm font-semibold">${statusText}</span>
    </div>
    <p class="text-sm">${getLangString('projectClientLabel')}: ${project.client}</p>
    <p class="text-sm">${getLangString('projectBudgetLabel')}: ${formatCurrency(project.budget)} ${getLangString('currencySuffix')}</p>
    <p class="text-sm">${getLangString('projectTimelineLabel')}: ${project.timelineDays} ${getLangString('dateDay')}</p>
    <p class="text-sm">${getLangString('projectBillingLabel')}: ${project.billingStructure.name}</p>
    ${project.requiresDeposit 
      ? `<p class="text-sm text-orange-500">
           <i class="fas fa-exclamation-triangle mr-1"></i> 
           ${getLangString('projectDepositRequired')}: ${formatCurrency(project.depositAmount)} ${getLangString('currencySuffix')}
         </p>`
      : ''
    }
    ${progressHTML}
    <div class="mt-2 flex flex-col gap-1">
      ${actionsHTML}
    </div>
  `;
  return card;
}

// --- Render Employee List ---
function renderEmployees() {
  if (!employeeListEl || !noEmployeesEl) return;
  employeeListEl.innerHTML = '';

  if (gameState.employees.length === 0) {
    noEmployeesEl.style.display = 'block';
    return;
  }
  noEmployeesEl.style.display = 'none';

  gameState.employees.forEach(emp => {
    const card = document.createElement('div');
    card.className = 'employee-card';
    const skillText = emp.skills.map(s => `${s.name} (Lv.${s.level})`).join(', ');
    const placeholderInitial = emp.name.substring(0, 1).toUpperCase();

    card.innerHTML = `
      <div class="flex items-center gap-3">
        <img src="https://placehold.co/40x40/7F7FD5/E9E9E9?text=${placeholderInitial}&font=kanit" alt="Employee Avatar" class="rounded-full">
        <div>
          <h3 class="text-gray-800">${emp.name}</h3>
          <p class="text-xs text-gray-500">${getLangString('employeeSalaryLabel')}: ${formatCurrency(emp.salary)} ${getLangString('currencySuffix')}/${getLangString('dateMonth')}</p>
        </div>
      </div>
      <p class="text-xs mt-1">${getLangString('employeeSkillsLabel')}: ${skillText}</p>
      <div class="mt-2 flex gap-2">
        <button class="button text-xs flex-1" onclick="openTrainModal(${emp.id})">
          <i class="fas fa-graduation-cap mr-1"></i> ${getLangString('trainEmployeeBtn')}
        </button>
        <button class="button button-danger text-xs flex-1" onclick="fireEmployee(${emp.id})">
          <i class="fas fa-user-times mr-1"></i> ${getLangString('fireEmployeeBtn')}
        </button>
      </div>
    `;
    employeeListEl.appendChild(card);
  });
}

// --- Modal Functions ---
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('active');
  if (modalId === 'tutorial-modal') {
    localStorage.setItem('tutorialSeen', 'true');
  }
}
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

// --- Hiring Logic ---
let tempCandidates = [];
function openHireModal() {
  const candidateListEl = document.getElementById('candidate-list');
  const noCandidatesEl = document.getElementById('no-candidates');
  if (!candidateListEl || !noCandidatesEl) return;

  candidateListEl.innerHTML = '';
  tempCandidates = [];

  if (gameState.employees.length >= MAX_EMPLOYEES_PER_LEVEL[gameState.officeLevel]) {
    addEventLog('eventOfficeFull', "system");
    noCandidatesEl.style.display = 'block';
    openModal('hire-employee-modal');
    return;
  }

  const numCandidates = getRandomInt(1, 3);
  if (numCandidates === 0) {
    noCandidatesEl.style.display = 'block';
  } else {
    noCandidatesEl.style.display = 'none';
    for (let i = 0; i < numCandidates; i++) {
      const candidate = generateEmployeeCandidate();
      tempCandidates.push(candidate);
      const card = document.createElement('div');
      card.className = 'project-card';
      const skillText = candidate.skills.map(s => `${s.name} (Lv.${s.level})`).join(', ');
      const placeholderInitial = candidate.name.substring(0,1).toUpperCase();

      card.innerHTML = `
        <div class="flex items-center gap-3 mb-2">
          <img src="https://placehold.co/50x50/${getRandomColorHex()}/${getRandomColorHex()}?text=${placeholderInitial}&font=kanit" alt="Candidate Avatar" class="rounded-full">
          <div>
            <h3 class="text-lg text-indigo-700">${candidate.name}</h3>
            <p class="text-sm text-gray-600">${getLangString('candidateSalaryLabel')}: ${formatCurrency(candidate.salary)} ${getLangString('currencySuffix')}</p>
          </div>
        </div>
        <p class="text-sm">${getLangString('employeeSkillsLabel')}: ${skillText}</p>
        <p class="text-sm">${getLangString('candidateHiringFeeLabel')}: ${formatCurrency(candidate.hiringFee)} ${getLangString('currencySuffix')} (${getLangString('oneTimeFee')})</p>
        <button class="button mt-3 w-full" onclick="hireEmployee(${candidate.id})">${getLangString('hireThisCandidateBtn')}</button>
      `;
      candidateListEl.appendChild(card);
    }
  }
  openModal('hire-employee-modal');
}

function generateEmployeeCandidate() {
  const isMale = Math.random() < 0.5;
  const firstName = getRandomElement(isMale ? EMPLOYEE_NAMES_MALE : EMPLOYEE_NAMES_FEMALE);
  const lastName = getRandomElement(EMPLOYEE_SURNAMES);
  const baseSalary = getRandomInt(15000, 35000) + (gameState.officeLevel * 2000);
  const hiringFee = Math.floor(baseSalary * getRandomInt(30, 70) / 100);

  let skills = [];
  let numSkills = getRandomInt(1, 3);
  let availableSkills = [...EMPLOYEE_SKILLS];
  for (let i = 0; i < numSkills; i++) {
    if (availableSkills.length === 0) break;
    let skillName = getRandomElement(availableSkills);
    skills.push({ name: skillName, level: getRandomInt(1, 3) + Math.floor(gameState.officeLevel / 2) });
    availableSkills = availableSkills.filter(s => s !== skillName);
  }
  if (skills.length === 0) {
    skills.push({ name: getRandomElement(EMPLOYEE_SKILLS), level: getRandomInt(1, 2) });
  }

  return {
    id: gameState.nextEmployeeId++,
    name: `${firstName} ${lastName}`,
    salary: baseSalary,
    hiringFee: hiringFee,
    skills: skills
  };
}

function hireEmployee(candidateId) {
  const candidate = tempCandidates.find(c => c.id === candidateId);
  if (!candidate) {
    addEventLog('eventErrorNoCandidate', "system");
    return;
  }
  if (gameState.money < candidate.hiringFee) {
    addEventLog('eventNoFundsToHire', "money_loss", candidate.name, formatCurrency(candidate.hiringFee), getLangString('currencySuffix'));
    return;
  }
  if (gameState.employees.length >= MAX_EMPLOYEES_PER_LEVEL[gameState.officeLevel]) {
    addEventLog('eventOfficeFull', "system");
    return;
  }

  gameState.money -= candidate.hiringFee;
  const newEmployee = {
    id: candidate.id,
    name: candidate.name,
    salary: candidate.salary,
    skills: candidate.skills,
    assignedProject: null,
    status: 'idle'
  };
  gameState.employees.push(newEmployee);
  addEventLog('eventEmployeeHired', "employee", newEmployee.name, formatCurrency(candidate.hiringFee), getLangString('currencySuffix'));

  closeModal('hire-employee-modal');
  updateStatsUI();
  renderEmployees();
}

function fireEmployee(employeeId) {
  const index = gameState.employees.findIndex(emp => emp.id === employeeId);
  if (index > -1) {
    const firedEmployee = gameState.employees[index];
    // ถ้าพนักงานคนนั้นถูกจ้างไว้ในโปรเจกต์ ให้ตัดลิงก์ออก
    if (firedEmployee.assignedProject) {
      const project = gameState.projects.find(p => p.id === firedEmployee.assignedProject);
      if (project) {
        project.assignedEmployees = project.assignedEmployees.filter(id => id !== employeeId);
      }
    }
    gameState.employees.splice(index, 1);
    addEventLog('eventEmployeeFired', "employee", firedEmployee.name);
    renderEmployees();
    updateStatsUI();
  }
}

function openTrainModal(employeeId) {
  const employee = gameState.employees.find(e => e.id === employeeId);
  if (employee) {
    addEventLog('eventTrainingNotReady', "system", employee.name);
  }
}

// --- Upgrade Office ---
function upgradeOffice() {
  const currentLevel = gameState.officeLevel;
  if (currentLevel < MAX_EMPLOYEES_PER_LEVEL.length - 1) {
    const cost = OFFICE_UPGRADE_COSTS[currentLevel];
    if (gameState.money >= cost) {
      gameState.money -= cost;
      gameState.officeLevel++;
      addEventLog('eventOfficeUpgraded', "system", gameState.officeLevel);
      updateStatsUI();
      renderEmployees();
    } else {
      addEventLog('eventNoFundsForUpgrade', "money_loss", formatCurrency(cost), getLangString('currencySuffix'));
    }
  } else {
    addEventLog('eventOfficeMaxLevel', "system");
  }
}

// --- Project Logic ---
function generateNewProjectOpportunity() {
  if (gameState.projectOpportunities.length >= 5 + gameState.officeLevel) {
    addEventLog('eventTooManyOpportunities', "system");
    return;
  }

  const newProjectId = gameState.nextProjectId++;
  const projectType = getRandomElement(PROJECT_TYPES);
  const clientName = getRandomElement(CLIENT_NAMES);
  const baseBudget = getRandomInt(50000, 300000) * gameState.officeLevel;
  const timeline = getRandomInt(15, 90);
  const billing = getRandomElement(BILLING_STRUCTURES);
  const requiresDeposit = Math.random() < 0.2;
  const depositAmount = requiresDeposit ? Math.floor(baseBudget * getRandomInt(10, 30) / 100) : 0;

  const opportunity = {
    id: newProjectId,
    name: `${projectType} for ${clientName}`,
    client: clientName,
    budget: baseBudget,
    timelineDays: timeline,
    progress: 0,
    status: 'available_opportunity',
    assignedEmployees: [],
    billingStructure: billing,
    invoices: [],
    requiresDeposit: requiresDeposit,
    depositAmount: depositAmount,
    paymentTerms: getRandomElement(PAYMENT_TERMS_DAYS)
  };

  gameState.projectOpportunities.push(opportunity);
  addEventLog('eventNewProjectFound', "project", opportunity.name);
  renderProjects();
}

function acceptProjectOpportunity(opportunityId) {
  const opportunityIndex = gameState.projectOpportunities.findIndex(opp => opp.id === opportunityId);
  if (opportunityIndex === -1) return;

  const project = gameState.projectOpportunities[opportunityIndex];
  if (project.requiresDeposit && gameState.money < project.depositAmount) {
    addEventLog('eventNoFundsForDeposit', "money_loss", project.name, formatCurrency(project.depositAmount), getLangString('currencySuffix'));
    closeModal('project-detail-modal');
    return;
  }

  if (project.requiresDeposit) {
    gameState.money -= project.depositAmount;
    addEventLog('eventDepositPaid', "money_loss", formatCurrency(project.depositAmount), getLangString('currencySuffix'), project.name);
  }

  project.status = 'in-progress';
  gameState.projects.push(project);
  gameState.projectOpportunities.splice(opportunityIndex, 1);

  addEventLog('eventProjectAccepted', "project", project.name);
  updateStatsUI();
  renderProjects();
  closeModal('project-detail-modal');
}

function viewProjectDetails(projectId) {
  const project = gameState.projects.find(p => p.id === projectId) 
               || gameState.projectOpportunities.find(p => p.id === projectId);
  if (!project) return;

  const modalContentEl = document.getElementById('project-detail-content');
  if (!modalContentEl) return;

  let detailsHTML = `
    <span class="modal-close" onclick="closeModal('project-detail-modal')">&times;</span>
    <h2 class="text-2xl font-semibold mb-3 text-indigo-600">${project.name}</h2>
    <p><strong>${getLangString('projectClientLabel')}:</strong> ${project.client}</p>
    <p><strong>${getLangString('projectBudgetLabel')}:</strong> ${formatCurrency(project.budget)} ${getLangString('currencySuffix')}</p>
    <p><strong>${getLangString('projectTimelineLabel')}:</strong> ${project.timelineDays} ${getLangString('dateDay')}</p>
    <p><strong>${getLangString('projectBillingLabel')}:</strong> ${project.billingStructure.name}</p>
  `;

  if (project.requiresDeposit) {
    detailsHTML += `
      <p class="text-orange-600">
        <strong><i class="fas fa-exclamation-triangle mr-1"></i> ${getLangString('projectDepositRequired')}:</strong> 
        ${formatCurrency(project.depositAmount)} ${getLangString('currencySuffix')}
      </p>
    `;
  }

  let statusKey = '', statusArgs = [];
  if (project.status === 'in-progress') {
    const progressPercent = project.timelineDays > 0 
      ? Math.min(100, Math.floor((project.progress / project.timelineDays) * 100)) 
      : 0;
    statusKey = 'projectStatusInProgress';
    statusArgs = [progressPercent];
    detailsHTML += `
      <p><strong>${getLangString('statusLabel')}:</strong> ${getLangString(statusKey, ...statusArgs)}</p>
      <div class="progress-bar-container my-2">
        <div class="progress-bar" style="width: ${progressPercent}%;"></div>
      </div>
    `;
  } else if (project.status === 'completed') {
    statusKey = 'projectStatusCompletedAwaitingBill';
    detailsHTML += `
      <p><strong>${getLangString('statusLabel')}:</strong> ${getLangString(statusKey)}</p>
      <button class="button mt-4 w-full" onclick="processBilling(${project.id})">
        ${getLangString('processBillingBtn')}
      </button>
    `;
  } else if (project.status === 'billed') {
    statusKey = 'projectStatusBilledAwaitingPayment';
    detailsHTML += `<p><strong>${getLangString('statusLabel')}:</strong> ${getLangString(statusKey)}</p>`;
    project.invoices.forEach((inv, idx) => {
      detailsHTML += `
        <p class="ml-4">
          ${getLangString('installmentNum', (idx + 1).toString())}: ${formatCurrency(inv.amount)} ${getLangString('currencySuffix')} - 
          ${inv.paid ? `${getLangString('paidOn')} ${getDateString(inv.paidDate)}` : `${getLangString('dueOn')} ${getDateString(inv.dueDate)}`}
        </p>
      `;
    });
  } else if (project.status === 'paid') {
    statusKey = 'projectStatusPaid';
    detailsHTML += `<p><strong>${getLangString('statusLabel')}:</strong> ${getLangString(statusKey)}</p>`;
  } else if (project.status === 'available_opportunity') {
    statusKey = 'projectStatusAwaitingAcceptance';
    detailsHTML += `
      <p><strong>${getLangString('statusLabel')}:</strong> ${getLangString(statusKey)}</p>
      <button class="button mt-4 w-full" onclick="acceptProjectOpportunity(${project.id})">
        ${getLangString('acceptProjectBtn')}
      </button>
    `;
  }

  modalContentEl.innerHTML = detailsHTML;
  openModal('project-detail-modal');
}

function processBilling(projectId) {
  const project = gameState.projects.find(p => p.id === projectId);
  if (!project || project.status !== 'completed') return;

  project.status = 'billed';
  project.invoices = [];
  const totalBudget = project.budget;

  project.billingStructure.installments.forEach(installment => {
    const amount = Math.floor(totalBudget * (installment.percent / 100));
    const dueDateInTotalDays = project.completionDate + installment.daysAfterCompletion + project.paymentTerms;
    project.invoices.push({
      amount: amount,
      dueDate: dueDateInTotalDays,
      paid: false,
      paidDate: null
    });
  });

  addEventLog('eventProjectBilled', "project", project.name);
  closeModal('project-detail-modal');
  renderProjects();
  updateStatsUI();
}

function processPayments() {
  gameState.projects.forEach(project => {
    if (project.status === 'billed') {
      let allPaid = true;
      project.invoices.forEach(invoice => {
        if (!invoice.paid && gameState.currentTotalDays >= invoice.dueDate) {
          gameState.money += invoice.amount;
          invoice.paid = true;
          invoice.paidDate = gameState.currentTotalDays;
          addEventLog('eventPaymentReceived', "money_gain", formatCurrency(invoice.amount), getLangString('currencySuffix'), project.name);
        }
        if (!invoice.paid) allPaid = false;
      });
      if (allPaid) {
        project.status = 'paid';
        addEventLog('eventAllPaymentsReceived', "project", project.name);
      }
    }
  });
}

function processProjectProgress() {
  gameState.projects.forEach(p => {
    if (p.status === 'in-progress') {
      let dailyProgress = 0.5 + (p.assignedEmployees.length * 0.2);
      p.progress += dailyProgress;
      p.progress = Math.min(p.progress, p.timelineDays);
      if (p.progress >= p.timelineDays) {
        p.status = 'completed';
        p.completionDate = gameState.currentTotalDays;
        addEventLog('eventProjectCompleted', "project", p.name);
        gameState.reputation += getRandomInt(1, 5);
      }
    }
  });
}


// --- Random Events & Daily Update ---
function triggerRandomEvent() {
  const eventType = getRandomInt(1, 4);
  switch (eventType) {
    case 1: {
      const bonus = getRandomInt(10000, 50000) * gameState.officeLevel;
      gameState.money += bonus;
      addEventLog('eventBonusReceived', "money_gain", formatCurrency(bonus), getLangString('currencySuffix'));
      break;
    }
    case 2: {
      const cost = getRandomInt(5000, 20000) * gameState.officeLevel;
      gameState.money -= cost;
      addEventLog('eventUnexpectedCost', "money_loss", formatCurrency(cost), getLangString('currencySuffix'));
      break;
    }
    case 3: {
      if (gameState.employees.length > 0) {
        const emp = getRandomElement(gameState.employees);
        if (emp.skills.length > 0) {
          const skillToUpgrade = getRandomElement(emp.skills);
          skillToUpgrade.level++;
          addEventLog('eventEmployeeSkillUp', "employee", emp.name, skillToUpgrade.name, skillToUpgrade.level);
        }
      }
      break;
    }
    case 4:
      addEventLog('eventPowerOutage', "system");
      break;
  }
}

function dailyUpdate() {
  if (gameState.isPaused) return;
  gameState.currentTotalDays++;

  // หักเงินเดือนรายวัน
  let totalSalaries = 0;
  gameState.employees.forEach(emp => { totalSalaries += emp.salary; });
  const dailySalaryCost = Math.floor(totalSalaries / DAYS_PER_MONTH);
  if (dailySalaryCost > 0 && gameState.money >= dailySalaryCost) {
    gameState.money -= dailySalaryCost;
  } else if (dailySalaryCost > 0 && gameState.money < dailySalaryCost) {
    addEventLog('eventNotEnoughMoneySalaries', "money_loss");
  }

  processProjectProgress();
  processPayments();

  // สุ่มอีเวนต์ (3% โอกาส)
  if (Math.random() < 0.03) {
    triggerRandomEvent();
  }

  // สุ่มโปรเจกต์เข้าโอกาสใหม่
  if (Math.random() < (PROJECT_OPPORTUNITY_BASE_CHANCE / 10) * gameState.officeLevel) {
    if (gameState.projectOpportunities.length < 5 + gameState.officeLevel) {
      generateNewProjectOpportunity();
    }
  }

  updateGameUI();
}

function updateGameUI() {
  updateStatsUI();
  renderProjects();
  renderEmployees();
  renderEventLog();
}

// --- Tab Switching ---
function openTab(evt, tabName) {
  const tabcontent = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].classList.remove("active");
  }
  const tablinks = document.getElementsByClassName("tab-button");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  const currentTab = document.getElementById(tabName);
  if (currentTab) {
    currentTab.style.display = "block";
    currentTab.classList.add("active");
  }
  if (evt && evt.currentTarget) {
    evt.currentTarget.className += " active";
  }
}

// --- Game Loop ---
let gameLoopInterval;
function startGameLoop() {
  gameLoopInterval = setInterval(dailyUpdate, gameState.gameSpeed);
}
function stopGameLoop() {
  clearInterval(gameLoopInterval);
}

// --- Initialization ---
function initGame() {
  const savedLang = localStorage.getItem('agencyGameLanguage') || 'en';
  if (languageSelectorEl) languageSelectorEl.value = savedLang;
  setLanguage(savedLang);

  gameState.eventLog = [{
    messageKey: 'eventWelcome',
    args: [],
    type: "system",
    totalDays: gameState.currentTotalDays
  }];

  if (!localStorage.getItem('tutorialSeen')) {
    openModal('tutorial-modal');
  }
  startGameLoop();

  const firstTabButton = document.querySelector('.tabs .tab-button');
  if (firstTabButton) {
    openTab({ currentTarget: firstTabButton }, 'available-projects');
  }
}

if (languageSelectorEl) {
  languageSelectorEl.addEventListener('change', event => {
    setLanguage(event.target.value);
  });
}

document.addEventListener('DOMContentLoaded', initGame);
