/* make topics available globally (safe) */
if (typeof window !== 'undefined') window.topics = topics;

/* ------------- image overrides & defaults ------------- */
const imageOverrides = {
  // optional: map id -> image (tune or remove as needed)
  // 'seo': 'https://images.unsplash.com/...',
};
const defaultCover = 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3';

/* apply overrides if present (non-destructive) */
if (typeof imageOverrides !== 'undefined' && Array.isArray(topics)) {
  topics.forEach(t => {
    if (t && t.id && imageOverrides[t.id]) t.cover = imageOverrides[t.id];
  });
}

/* ------------- helpers ------------- */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function toHtmlParagraphs(text) {
  if (!text) return '';
  const parts = String(text).split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
  return parts.map(p => `<p class="mt-4 text-slate-700 leading-relaxed">${escapeHtml(p)}</p>`).join('\n');
}

function formatLessonContent(text) {
  if (!text) return '';

  let formattedText = String(text);

  // First, handle major section headings
  const sectionHeadings = [
    'Introduction & Definition',
    'Why the topic is important',
    'Core Concepts',
    'Detailed Explanations',
    'Important Points',
    'Practical Applications',
    'Case Studies or Real-world Examples',
    'Pro Tips & Best Practices',
    'Key Takeaways',
    'Conclusion'
  ];

  sectionHeadings.forEach(heading => {
    const regex = new RegExp(`^${heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'gm');
    formattedText = formattedText.replace(regex, `<h3 class="text-xl font-bold text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">${heading}</h3>`);
  });

  // Handle concept definitions (lines that end with colon)
  formattedText = formattedText.replace(/^([^:\n]+):\s*(.+)$/gm, (match, term, definition) => {
    return `<div class="mb-3 text-base leading-relaxed"><strong class="text-slate-900 font-semibold">${term}:</strong> <span class="text-slate-700">${definition}</span></div>`;
  });

  // Handle bullet points and lists
  formattedText = formattedText.replace(/^•\s*(.+)$/gm, '<li class="ml-4 mb-2 text-base leading-relaxed text-slate-700">$1</li>');
  formattedText = formattedText.replace(/^-\s*(.+)$/gm, '<li class="ml-4 mb-2 text-base leading-relaxed text-slate-700">$1</li>');
  formattedText = formattedText.replace(/^\*\s*(.+)$/gm, '<li class="ml-4 mb-2 text-base leading-relaxed text-slate-700">$1</li>');

  // Wrap consecutive list items in ul tags
  formattedText = formattedText.replace(/(<li class="ml-4 mb-2 text-base leading-relaxed text-slate-700">.*<\/li>)(\s*<li class="ml-4 mb-2 text-base leading-relaxed text-slate-700">.*<\/li>)*/g, (match) => {
    return `<ul class="list-disc list-inside my-4 space-y-2 ml-4">${match}</ul>`;
  });

  // Handle numbered lists
  formattedText = formattedText.replace(/^(\d+)\.\s*(.+)$/gm, '<li class="ml-4 mb-2 text-base leading-relaxed text-slate-700">$1. $2</li>');
  formattedText = formattedText.replace(/(<li class="ml-4 mb-2 text-base leading-relaxed text-slate-700">\d+\..*<\/li>)(\s*<li class="ml-4 mb-2 text-base leading-relaxed text-slate-700">\d+\..*<\/li>)*/g, (match) => {
    return `<ol class="list-decimal list-inside my-4 space-y-2 ml-4">${match}</ol>`;
  });

  // Handle emphasis and strong text
  formattedText = formattedText.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>');
  formattedText = formattedText.replace(/\*(.+?)\*/g, '<em class="italic text-slate-800">$1</em>');

  // Handle code snippets
  formattedText = formattedText.replace(/`(.+?)`/g, '<code class="bg-slate-100 px-2 py-1 rounded text-sm font-mono text-slate-800">$1</code>');

  // Handle example sections
  formattedText = formattedText.replace(/^Example:\s*(.+)$/gm, '<div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 text-base leading-relaxed"><strong class="text-blue-800 font-semibold">Example:</strong> <span class="text-blue-700">$1</span></div>');

  // Split into paragraphs and format
  const paragraphs = formattedText.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);

  return paragraphs.map(p => {
    // Skip if it's already formatted (headings, lists, examples)
    if (p.includes('<h3') || p.includes('<ul') || p.includes('<ol') || p.includes('<div class="bg-blue-50') || p.includes('<strong class="text-slate-900 font-semibold">')) {
      return p;
    }

    // Format as paragraph
    return `<p class="mt-4 text-slate-700 leading-relaxed text-base">${p}</p>`;
  }).join('\n');
}

/* ------------- DOM elements ------------- */
const grid = document.getElementById('cardGrid');
const search = document.getElementById('search');
const clearSearch = document.getElementById('clearSearch');
const heroSection = document.getElementById('hero');
const coursesSection = document.getElementById('courses');
const courseInfoSection = document.getElementById('courseView');
const courseDashboardSection = document.getElementById('courseDashboard');
const lessonCardsSection = document.getElementById('lessonCardsView');
const individualLessonSection = document.getElementById('individualLessonView');
const lessonSection = document.getElementById('lessonView');
const importantTopicsSection = document.getElementById('importantTopicsView');

const title = document.getElementById('title');
const desc = document.getElementById('desc');
const cover = document.getElementById('cover');
const lessonList = document.getElementById('lessonList');
const tagList = document.getElementById('tagList');
const startBtn = document.getElementById('startBtn');
const downloadBtn = document.getElementById('downloadBtn');
const meta = document.getElementById('meta');
const backBtn = document.getElementById('backBtn');

// Dashboard elements
const dashboardTitle = document.getElementById('dashboardTitle');
const dashboardMeta = document.getElementById('dashboardMeta');
const studyMaterialsCard = document.getElementById('studyMaterialsCard');
const importantTopicsCard = document.getElementById('importantTopicsCard');
const mockTestsCard = document.getElementById('mockTestsCard');
const backToCourseFromDashboardBtn = document.getElementById('backToCourseFromDashboardBtn');

// Important topics elements
const importantTopicsView = document.getElementById('importantTopicsView');
const importantTopicsTitle = document.getElementById('importantTopicsTitle');
const importantTopicsContent = document.getElementById('importantTopicsContent');
const importantTopicsNoteText = document.getElementById('importantTopicsNoteText');
const backToDashboardFromTopicsBtn = document.getElementById('backToDashboardFromTopicsBtn');
const downloadImportantTopicsBtn = document.getElementById('downloadImportantTopicsBtn');

// Exam system elements
const examSystemView = document.getElementById('examSystemView');
const examMeta = document.getElementById('examMeta');
const examInstructions = document.getElementById('examInstructions');
const examInterface = document.getElementById('examInterface');
const examResults = document.getElementById('examResults');
const certificateDisplay = document.getElementById('certificateDisplay');
const backToDashboardFromExamBtn = document.getElementById('backToDashboardFromExamBtn');
const startExamBtn = document.getElementById('startExamBtn');
const submitExamBtn = document.getElementById('submitExamBtn');
const retakeExamBtn = document.getElementById('retakeExamBtn');
const generateCertificateBtn = document.getElementById('generateCertificateBtn');
const downloadCertificateBtn = document.getElementById('downloadCertificateBtn');
const backToResultsBtn = document.getElementById('backToResultsBtn');
const timer = document.getElementById('timer');
const currentQuestion = document.getElementById('currentQuestion');
const progressPercentage = document.getElementById('progressPercentage');
const progressBar = document.getElementById('progressBar');
const questionNavigation = document.getElementById('questionNavigation');
const questionText = document.getElementById('questionText');
const questionOptions = document.getElementById('questionOptions');
const prevQuestionBtn = document.getElementById('prevQuestionBtn');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const scoreDisplay = document.getElementById('scoreDisplay');
const certificateSection = document.getElementById('certificateSection');
const retakeSection = document.getElementById('retakeSection');
const studentName = document.getElementById('studentName');
const detailedResults = document.getElementById('detailedResults');
const certificateContent = document.getElementById('certificateContent');

// Submit confirmation modal elements
const submitConfirmModal = document.getElementById('submitConfirmModal');
const cancelSubmitBtn = document.getElementById('cancelSubmitBtn');
const confirmSubmitBtn = document.getElementById('confirmSubmitBtn');

// Lesson cards elements
const lessonCardsTitle = document.getElementById('lessonCardsTitle');
const lessonCardsMeta = document.getElementById('lessonCardsMeta');
const lessonCardsGrid = document.getElementById('lessonCardsGrid');
const backToDashboardBtn = document.getElementById('backToDashboardBtn');

// Individual lesson elements
const individualLessonTitle = document.getElementById('individualLessonTitle');
const individualLessonImage = document.getElementById('individualLessonImage');
const individualLessonContent = document.getElementById('individualLessonContent');
const backToLessonCardsBtn = document.getElementById('backToLessonCardsBtn');
const downloadLessonBtn = document.getElementById('downloadLessonBtn');

const lessonTitle = document.getElementById('lessonTitle');
const lessonContent = document.getElementById('lessonContent');
const lessonMeta = document.getElementById('lessonMeta');
const backToCourseBtn = document.getElementById('backToCourseBtn');
const downloadFullCourseBtn = document.getElementById('downloadFullCourseBtn');

let currentCourse = null;

// Exam system variables
let examState = {
  currentQuestionIndex: 0,
  answers: {},
  timeRemaining: 3600, // 60 minutes in seconds
  timerInterval: null,
  isExamStarted: false,
  isExamCompleted: false
};
let currentLesson = null;

/* ------------- render cards ------------- */
function renderCards(filter = '') {
  const q = (filter || '').trim().toLowerCase();
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = (Array.isArray(topics) ? topics : []).filter(t => {
    if (!t) return false;
    const titleOk = (t.title || '').toLowerCase().includes(q);
    const tagOk = (t.tags || []).some(tag => tag.toLowerCase().includes(q));
    return titleOk || tagOk;
  });

  filtered.forEach(t => {
    const coverUrl = t.cover || defaultCover;
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'group card-shadow rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:-translate-y-0.5 focus:outline-none';
    el.setAttribute('aria-label', `Open course: ${t.title}`);

    el.innerHTML = `
        <div class="w-full overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
          <div class="card-img-box" style="height:12rem; width:100%;">
            <img
              src="${escapeHtml(coverUrl)}"
              alt="${escapeHtml(t.title)}"
              loading="lazy"
              style="width:100%; height:100%; object-fit:cover; object-position:center; opacity:0; transition:opacity 0.3s;"
              onerror="this.onerror=null;this.src='${escapeHtml(defaultCover)}';"
              onload="this.style.opacity='1';"
            />
          </div>
        </div>
  
        <div class="mt-3">
          <h3 class="text-sm font-semibold leading-snug text-slate-900 card-title">${escapeHtml(t.title)}</h3>
          <div class="card-badges">
            ${(t.tags || []).slice(0, 4).map(tag => `<span class="rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-[12px] font-medium text-slate-700">${escapeHtml(tag)}</span>`).join('')}
          </div>
        </div>
      `;

    el.addEventListener('click', () => openCourse(t.id));

    grid.appendChild(el);
  });
}

/* ------------- open course (info view) ------------- */
function openCourse(id) {
  currentCourse = topics.find(t => t.id === id);
  if (!currentCourse) return;

  title.textContent = currentCourse.title || '';
  desc.textContent = currentCourse.desc || '';
  cover.src = currentCourse.cover || defaultCover;

  // lesson list: only titles (no click functionality)
  lessonList.innerHTML = (currentCourse.lessons || []).map((lesson, idx) => {
    const safeTitle = escapeHtml(lesson.title || `Lesson ${idx + 1}`);
    return `
        <li class="text-sm font-medium text-slate-800">
          ${idx + 1}. ${safeTitle}
        </li>
      `;
  }).join('');

  tagList.innerHTML = (currentCourse.tags || []).map(tag => `<span class='rounded-full bg-white border border-slate-200 px-2.5 py-1 text-xs font-medium mr-1'>${escapeHtml(tag)}</span>`).join('');
  meta.textContent = '';

  // show/hide sections
  heroSection?.classList.add('hidden');
  coursesSection?.classList.add('hidden');
  lessonSection?.classList.add('hidden');
  lessonCardsSection?.classList.add('hidden');
  individualLessonSection?.classList.add('hidden');
  courseDashboardSection?.classList.add('hidden');
  importantTopicsSection?.classList.add('hidden');
  courseInfoSection?.classList.remove('hidden');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ------------- show course dashboard ------------- */
function showCourseDashboard() {
  if (!currentCourse) return;

  dashboardTitle.textContent = `Crack ${currentCourse.title} with Student AI`;

  // show/hide sections
  heroSection?.classList.add('hidden');
  coursesSection?.classList.add('hidden');
  lessonSection?.classList.add('hidden');
  lessonCardsSection?.classList.add('hidden');
  individualLessonSection?.classList.add('hidden');
  courseInfoSection?.classList.add('hidden');
  importantTopicsSection?.classList.add('hidden');
  examSystemView?.classList.add('hidden');
  courseDashboardSection?.classList.remove('hidden');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ------------- show lesson cards ------------- */
function showLessonCards() {
  if (!currentCourse) return;

  lessonCardsTitle.textContent = `${currentCourse.title} - Study Materials`;
  lessonCardsGrid.innerHTML = '';

  // Create lesson cards
  (currentCourse.lessons || []).forEach((lesson, index) => {
    const card = document.createElement('div');
    card.className = 'group relative rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-all duration-200 cursor-pointer';
    card.setAttribute('data-lesson-index', index);

    // Extract first sentence as description
    const description = lesson.content ? lesson.content.split('.')[0] + '.' : 'Learn essential concepts and practical applications.';

    card.innerHTML = `
        <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 mb-4">
          <svg class="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-slate-900 mb-2">${escapeHtml(lesson.title || `Lesson ${index + 1}`)}</h3>
        <p class="text-slate-600 text-sm">${escapeHtml(description)}</p>
      `;

    card.addEventListener('click', () => showIndividualLesson(index));
    lessonCardsGrid.appendChild(card);
  });

  // show/hide sections
  heroSection?.classList.add('hidden');
  coursesSection?.classList.add('hidden');
  lessonSection?.classList.add('hidden');
  individualLessonSection?.classList.add('hidden');
  courseInfoSection?.classList.add('hidden');
  courseDashboardSection?.classList.add('hidden');
  importantTopicsSection?.classList.add('hidden');
  examSystemView?.classList.add('hidden');
  lessonCardsSection?.classList.remove('hidden');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ------------- show important topics ------------- */
function showImportantTopics() {
  if (!currentCourse) return;

  const topicsData = importantTopics[currentCourse.id];
  if (!topicsData) {
    alert('Important topics are not available for this course yet.');
    return;
  }

  importantTopicsTitle.textContent = topicsData.title;
  importantTopicsNoteText.textContent = topicsData.note;

  // Generate important topics content
  importantTopicsContent.innerHTML = '';

  topicsData.content.forEach((topic) => {
    const topicCard = document.createElement('div');
    topicCard.className = 'rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-all duration-200';

    topicCard.innerHTML = `
      <div class="flex items-start gap-4">
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
          <span class="text-sm font-bold text-blue-600">${topic.step}</span>
        </div>
        <div class="flex-1">
          <h3 class="text-xl font-semibold text-slate-900 mb-3">${topic.title}</h3>
          <ul class="space-y-2">
            ${topic.points.map(point => `
              <li class="flex items-start gap-2 text-slate-700">
                <svg class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm">${point}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;

    importantTopicsContent.appendChild(topicCard);
  });

  // show/hide sections
  heroSection?.classList.add('hidden');
  coursesSection?.classList.add('hidden');
  lessonSection?.classList.add('hidden');
  individualLessonSection?.classList.add('hidden');
  courseInfoSection?.classList.add('hidden');
  courseDashboardSection?.classList.add('hidden');
  lessonCardsSection?.classList.add('hidden');
  examSystemView?.classList.add('hidden');
  importantTopicsSection?.classList.remove('hidden');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ------------- show exam system ------------- */
function showExamSystem() {
  if (!currentCourse) return;

  // Reset exam state
  examState = {
    currentQuestionIndex: 0,
    answers: {},
    timeRemaining: 3600, // 60 minutes in seconds
    timerInterval: null,
    isExamStarted: false,
    isExamCompleted: false
  };

  // Update exam meta
  examMeta.textContent = `${currentCourse.title} • Certification Exam`;

  // Show exam instructions
  examInstructions.classList.remove('hidden');
  examInterface.classList.add('hidden');
  examResults.classList.add('hidden');
  certificateDisplay.classList.add('hidden');

  // show/hide sections
  heroSection?.classList.add('hidden');
  coursesSection?.classList.add('hidden');
  lessonSection?.classList.add('hidden');
  individualLessonSection?.classList.add('hidden');
  courseInfoSection?.classList.add('hidden');
  courseDashboardSection?.classList.add('hidden');
  lessonCardsSection?.classList.add('hidden');
  importantTopicsSection?.classList.add('hidden');
  examSystemView?.classList.remove('hidden');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ------------- start exam ------------- */
function startExam() {
  examState.isExamStarted = true;
  examState.timeRemaining = 3600; // Reset to 60 minutes

  // Hide instructions and show exam interface
  examInstructions.classList.add('hidden');
  examInterface.classList.remove('hidden');

  // Initialize exam
  initializeExam();
  startTimer();
  displayQuestion();
  generateQuestionNavigation();
}

/* ------------- initialize exam ------------- */
function initializeExam() {
  examState.currentQuestionIndex = 0;
  examState.answers = {};
  examState.isExamCompleted = false;
}

/* ------------- start timer ------------- */
function startTimer() {
  if (examState.timerInterval) {
    clearInterval(examState.timerInterval);
  }

  examState.timerInterval = setInterval(() => {
    examState.timeRemaining--;
    updateTimerDisplay();

    if (examState.timeRemaining <= 0) {
      clearInterval(examState.timerInterval);
      submitExam();
    }
  }, 1000);
}

/* ------------- update timer display ------------- */
function updateTimerDisplay() {
  const minutes = Math.floor(examState.timeRemaining / 60);
  const seconds = examState.timeRemaining % 60;
  timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Change color when time is running low
  if (examState.timeRemaining <= 300) { // 5 minutes
    timer.parentElement.classList.add('text-red-400');
  } else {
    timer.parentElement.classList.remove('text-red-400');
  }
}

/* ------------- display question ------------- */
function displayQuestion() {
  // Get course-specific questions
  const courseQuestions = examQuestions[currentCourse.id] || examQuestions.seo; // fallback to SEO

  // Debug: Log course info
  console.log('Current course ID:', currentCourse.id);
  console.log('Available exam courses:', Object.keys(examQuestions));
  console.log('Course questions found:', courseQuestions ? courseQuestions.length : 'No questions found');

  const question = courseQuestions[examState.currentQuestionIndex];
  if (!question) return;

  // Update question number and progress
  currentQuestion.textContent = examState.currentQuestionIndex + 1;
  const progress = ((examState.currentQuestionIndex + 1) / courseQuestions.length) * 100;
  progressPercentage.textContent = `${Math.round(progress)}%`;
  progressBar.style.width = `${progress}%`;

  // Display question
  questionText.textContent = question.question;

  // Display options
  questionOptions.innerHTML = '';
  question.options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.className = 'flex items-center p-4 border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors';

    const isSelected = examState.answers[examState.currentQuestionIndex] === index;
    if (isSelected) {
      optionElement.classList.add('bg-blue-50', 'border-blue-300');
    }

    optionElement.innerHTML = `
      <input type="radio" name="question-${examState.currentQuestionIndex}" value="${index}" 
             class="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500" 
             ${isSelected ? 'checked' : ''}>
      <label class="ml-3 text-slate-700 cursor-pointer flex-1">${option}</label>
    `;

    optionElement.addEventListener('click', () => {
      // Remove selection from other options
      questionOptions.querySelectorAll('.bg-blue-50').forEach(el => {
        el.classList.remove('bg-blue-50', 'border-blue-300');
      });

      // Remove checked from all radio buttons
      questionOptions.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
      });

      // Add selection to clicked option
      optionElement.classList.add('bg-blue-50', 'border-blue-300');

      // Check the radio button
      const radioButton = optionElement.querySelector('input[type="radio"]');
      radioButton.checked = true;

      // Update answer
      examState.answers[examState.currentQuestionIndex] = index;

      // Update navigation
      updateQuestionNavigation();
    });

    questionOptions.appendChild(optionElement);
  });

  // Update navigation buttons
  prevQuestionBtn.disabled = examState.currentQuestionIndex === 0;
  // Keep next button enabled even on last question so it can submit
  nextQuestionBtn.disabled = false;

  if (examState.currentQuestionIndex === 0) {
    prevQuestionBtn.classList.add('opacity-50', 'cursor-not-allowed');
  } else {
    prevQuestionBtn.classList.remove('opacity-50', 'cursor-not-allowed');
  }

  if (examState.currentQuestionIndex === courseQuestions.length - 1) {
    nextQuestionBtn.textContent = 'Submit Exam';
    nextQuestionBtn.classList.add('bg-red-600', 'hover:bg-red-700');
    nextQuestionBtn.classList.remove('bg-slate-900', 'hover:bg-slate-800');
  } else {
    nextQuestionBtn.textContent = 'Next →';
    nextQuestionBtn.classList.remove('bg-red-600', 'hover:bg-red-700');
    nextQuestionBtn.classList.add('bg-slate-900', 'hover:bg-slate-800');
  }

  // Update question navigation highlighting
  updateQuestionNavigation();
}

/* ------------- generate question navigation ------------- */
function generateQuestionNavigation() {
  questionNavigation.innerHTML = '';

  // Get course-specific questions
  const courseQuestions = examQuestions[currentCourse.id] || examQuestions.seo;

  for (let i = 0; i < courseQuestions.length; i++) {
    const navButton = document.createElement('button');
    navButton.className = 'w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-slate-300 text-xs sm:text-sm font-medium transition-colors flex items-center justify-center';
    navButton.textContent = i + 1;
    navButton.addEventListener('click', () => {
      examState.currentQuestionIndex = i;
      displayQuestion();
      updateQuestionNavigation();
    });

    questionNavigation.appendChild(navButton);
  }

  updateQuestionNavigation();
}

/* ------------- update question navigation ------------- */
function updateQuestionNavigation() {
  const navButtons = questionNavigation.querySelectorAll('button');
  navButtons.forEach((button, index) => {
    const hasAnswer = examState.answers[index] !== undefined;
    const isCurrent = index === examState.currentQuestionIndex;

    button.classList.remove('bg-blue-600', 'text-white', 'bg-green-100', 'text-green-700', 'bg-slate-100');

    if (isCurrent) {
      button.classList.add('bg-blue-600', 'text-white');
    } else if (hasAnswer) {
      button.classList.add('bg-green-100', 'text-green-700');
    } else {
      button.classList.add('bg-slate-100');
    }
  });
}

/* ------------- navigate to previous question ------------- */
function goToPreviousQuestion() {
  if (examState.currentQuestionIndex > 0) {
    examState.currentQuestionIndex--;
    displayQuestion();
  }
}

/* ------------- navigate to next question ------------- */
function goToNextQuestion() {
  // Get course-specific questions
  const courseQuestions = examQuestions[currentCourse.id] || examQuestions.seo;

  if (examState.currentQuestionIndex < courseQuestions.length - 1) {
    examState.currentQuestionIndex++;
    displayQuestion();
  } else {
    // Last question - open the same confirmation modal as header submit
    if (submitConfirmModal) {
      submitConfirmModal.classList.remove('hidden');
    } else {
      // Fallback: directly submit if modal missing
      submitExam();
    }
  }
}

/* ------------- submit exam ------------- */
function submitExam() {
  if (examState.timerInterval) {
    clearInterval(examState.timerInterval);
  }

  examState.isExamCompleted = true;

  // Calculate score
  const score = calculateScore();

  // Hide exam interface and show results
  examInterface.classList.add('hidden');
  examResults.classList.remove('hidden');

  // Display results
  displayExamResults(score);
}

/* ------------- calculate score ------------- */
function calculateScore() {
  let correctAnswers = 0;

  // Get course-specific questions
  const courseQuestions = examQuestions[currentCourse.id] || examQuestions.seo;

  courseQuestions.forEach((question, index) => {
    if (examState.answers[index] === question.correct) {
      correctAnswers++;
    }
  });

  return {
    correct: correctAnswers,
    total: courseQuestions.length,
    percentage: Math.round((correctAnswers / courseQuestions.length) * 100),
    marks: correctAnswers * 2 // 2 marks per question
  };
}

/* ------------- display exam results ------------- */
function displayExamResults(score) {
  // Display score
  scoreDisplay.innerHTML = `
    <div class="text-center">
      <div class="w-24 h-24 rounded-full ${score.marks >= 50 ? 'bg-green-100' : 'bg-red-100'} flex items-center justify-center mx-auto mb-4">
        <span class="text-3xl font-bold ${score.marks >= 50 ? 'text-green-600' : 'text-red-600'}">${score.marks}</span>
      </div>
      <h3 class="text-2xl font-bold text-slate-900 mb-2">${score.marks}/100 Marks</h3>
      <p class="text-slate-600 mb-4">You answered ${score.correct} out of ${score.total} questions correctly</p>
      <div class="text-sm text-slate-500">
        <p>Percentage: ${score.percentage}%</p>
        <p>${score.marks >= 50 ? 'Congratulations! You passed!' : 'You need at least 50 marks to pass.'}</p>
      </div>
    </div>
  `;

  // Show certificate section or retake section
  if (score.marks >= 50) {
    certificateSection.classList.remove('hidden');
    retakeSection.classList.add('hidden');
  } else {
    certificateSection.classList.add('hidden');
    retakeSection.classList.remove('hidden');
  }

  // Display detailed results
  displayDetailedResults(score);
}

/* ------------- display detailed results ------------- */
function displayDetailedResults(score) {
  detailedResults.innerHTML = '';

  // Get course-specific questions
  const courseQuestions = examQuestions[currentCourse.id] || examQuestions.seo;

  courseQuestions.forEach((question, index) => {
    const userAnswer = examState.answers[index];
    const isCorrect = userAnswer === question.correct;
    const hasAnswer = userAnswer !== undefined;

    const resultItem = document.createElement('div');
    resultItem.className = `p-4 rounded-xl border ${isCorrect ? 'bg-green-50 border-green-200' : hasAnswer ? 'bg-red-50 border-red-200' : 'bg-yellow-50 border-yellow-200'}`;

    resultItem.innerHTML = `
      <div class="flex items-start gap-3">
        <div class="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${isCorrect ? 'bg-green-100' : hasAnswer ? 'bg-red-100' : 'bg-yellow-100'}">
          <span class="text-xs font-bold ${isCorrect ? 'text-green-600' : hasAnswer ? 'text-red-600' : 'text-yellow-600'}">${index + 1}</span>
        </div>
        <div class="flex-1">
          <h4 class="font-semibold text-slate-900 mb-2">${question.question}</h4>
          <div class="space-y-2 text-sm">
            <div class="flex items-center gap-2">
              <span class="font-medium text-slate-700">Your answer:</span>
              <span class="${hasAnswer ? (isCorrect ? 'text-green-600' : 'text-red-600') : 'text-yellow-600'}">
                ${hasAnswer ? question.options[userAnswer] : 'Not answered'}
              </span>
            </div>
            <div class="flex items-center gap-2">
              <span class="font-medium text-slate-700">Correct answer:</span>
              <span class="text-green-600">${question.options[question.correct]}</span>
            </div>
            <div class="mt-2 p-2 bg-slate-100 rounded text-xs text-slate-600">
              <strong>Explanation:</strong> ${question.explanation}
            </div>
          </div>
        </div>
      </div>
    `;

    detailedResults.appendChild(resultItem);
  });
}

/* ------------- generate certificate ------------- */
function generateCertificate() {
  const name = studentName.value.trim();
  if (!name) {
    alert('Please enter your name for the certificate.');
    return;
  }

  const score = calculateScore();

  // Hide results and show certificate
  examResults.classList.add('hidden');
  certificateDisplay.classList.remove('hidden');

  // Generate certificate content
  generateCertificateContent(name, score);
}

/* ------------- generate certificate content ------------- */
function generateCertificateContent(name, score) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  certificateContent.innerHTML = `
    <div class="border-4 border-slate-800 p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-slate-800 mb-2">Student AI</h1>
        <p class="text-lg text-slate-600">Digital Marketing Education Platform</p>
      </div>
      
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-slate-800 mb-4">Certificate of Completion</h2>
        <p class="text-xl text-slate-700 mb-6">This is to certify that</p>
        <h3 class="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-slate-800 pb-2 inline-block">${name}</h3>
        <p class="text-lg text-slate-700 mb-4">has successfully completed the</p>
        <h4 class="text-xl font-semibold text-slate-800 mb-6">Digital Marketing Certification Exam</h4>
      </div>
      
      <div class="grid grid-cols-2 gap-8 mb-8">
        <div class="text-center">
          <p class="text-sm text-slate-600 mb-1">Score Achieved</p>
          <p class="text-2xl font-bold text-slate-800">${score.marks}/100</p>
        </div>
        <div class="text-center">
          <p class="text-sm text-slate-600 mb-1">Percentage</p>
          <p class="text-2xl font-bold text-slate-800">${score.percentage}%</p>
        </div>
      </div>
      
      <div class="text-center mb-8">
        <p class="text-sm text-slate-600 mb-4">Date of Completion: ${currentDate}</p>
        <div class="flex justify-center items-center gap-8">
          <div class="text-center">
            <div class="w-24 h-1 bg-slate-800 mb-2"></div>
            <p class="text-xs text-slate-600">Student AI</p>
          </div>
          <div class="text-center">
            <div class="w-24 h-1 bg-slate-800 mb-2"></div>
            <p class="text-xs text-slate-600">Digital Marketing Expert</p>
          </div>
        </div>
      </div>
      
      <div class="text-center">
        <p class="text-xs text-slate-500">Certificate ID: DM-${Date.now().toString().slice(-8)}</p>
      </div>
    </div>
  `;
}

/* ------------- download certificate as PDF ------------- */
function downloadCertificate() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('landscape', 'mm', 'a4');

  // Get certificate content
  const certificateElement = certificateContent;
  const name = studentName.value.trim();
  const score = calculateScore();
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Set up the PDF
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('Student AI', 105, 30, { align: 'center' });

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Digital Marketing Education Platform', 105, 40, { align: 'center' });

  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('Certificate of Completion', 105, 60, { align: 'center' });

  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('This is to certify that', 105, 80, { align: 'center' });

  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(name, 105, 95, { align: 'center' });

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('has successfully completed the', 105, 110, { align: 'center' });

  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Digital Marketing Certification Exam', 105, 125, { align: 'center' });

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`Score: ${score.marks}/100 (${score.percentage}%)`, 105, 145, { align: 'center' });
  doc.text(`Date: ${currentDate}`, 105, 155, { align: 'center' });

  // Add signature lines
  doc.text('Student AI', 50, 180);
  doc.text('Digital Marketing Expert', 150, 180);

  // Add certificate ID
  doc.setFontSize(8);
  doc.text(`Certificate ID: DM-${Date.now().toString().slice(-8)}`, 105, 200, { align: 'center' });

  // Download the PDF
  doc.save(`Digital_Marketing_Certificate_${name.replace(/\s+/g, '_')}.pdf`);
}

/* ------------- retake exam ------------- */
function retakeExam() {
  // Reset exam state
  examState = {
    currentQuestionIndex: 0,
    answers: {},
    timeRemaining: 3600,
    timerInterval: null,
    isExamStarted: false,
    isExamCompleted: false
  };

  // Show instructions again
  examInstructions.classList.remove('hidden');
  examInterface.classList.add('hidden');
  examResults.classList.add('hidden');
  certificateDisplay.classList.add('hidden');
}

/* ------------- show individual lesson ------------- */
function showIndividualLesson(lessonIndex) {
  if (!currentCourse || !currentCourse.lessons || !currentCourse.lessons[lessonIndex]) return;

  currentLesson = currentCourse.lessons[lessonIndex];

  individualLessonTitle.textContent = currentLesson.title || `Lesson ${lessonIndex + 1}`;

  // Use course cover image instead of individual lesson image
  let imageUrl = currentCourse.cover || defaultCover;
  if (imageUrl.includes('[') && imageUrl.includes('](')) {
    // Extract URL from markdown format [text](url)
    const match = imageUrl.match(/\[.*?\]\((.*?)\)/);
    imageUrl = match ? match[1] : defaultCover;
  }

  individualLessonImage.src = imageUrl;
  individualLessonImage.alt = currentLesson.title || `Lesson ${lessonIndex + 1}`;
  individualLessonContent.innerHTML = `<div class="prose max-w-none prose-slate prose-lg">${formatLessonContent(currentLesson.content || '')}</div>`;

  // show/hide sections
  heroSection?.classList.add('hidden');
  coursesSection?.classList.add('hidden');
  lessonSection?.classList.add('hidden');
  courseInfoSection?.classList.add('hidden');
  courseDashboardSection?.classList.add('hidden');
  lessonCardsSection?.classList.add('hidden');
  importantTopicsSection?.classList.add('hidden');
  examSystemView?.classList.add('hidden');
  individualLessonSection?.classList.remove('hidden');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ------------- render full course (all lessons on one page) ------------- */
function renderFullCourse(startIndex = null) {
  if (!currentCourse) return;

  // shallow copy lessons so we don't mutate original
  const lessons = (currentCourse.lessons || []).map(l => Object.assign({}, l));

  // Course cover image at the top
  const courseCoverImage = currentCourse.cover || defaultCover;
  const courseImageHtml = `
      <div class="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <img src="${escapeHtml(courseCoverImage)}" alt="${escapeHtml(currentCourse.title || '')}" class="w-full h-64 md:h-80 lg:h-96 object-cover" loading="lazy" onerror="this.onerror=null;this.src='${escapeHtml(defaultCover)}';" />
      </div>
    `;

  // build lesson blocks without individual images
  const blocks = lessons.map((lesson, idx) => {
    const num = idx + 1;
    const safeTitle = escapeHtml(lesson.title || `Lesson ${num}`);
    const contentSource = lesson.content || '';
    const contentHtml = toHtmlParagraphs(contentSource);

    return `
        <article class="mb-12" id="lesson-${num}">
          <h3 class="text-2xl font-bold">${num}. ${safeTitle}</h3>
          <div class="mt-4">${contentHtml}</div>
        </article>
      `;
  });

  lessonTitle.textContent = `${escapeHtml(currentCourse.title || '')} — All lessons`;
  lessonMeta.textContent = '';
  lessonContent.innerHTML = `<div class="prose max-w-none">${courseImageHtml}${blocks.join('\n')}</div>`;

  // show/hide sections
  courseInfoSection?.classList.add('hidden');
  courseDashboardSection?.classList.add('hidden');
  lessonCardsSection?.classList.add('hidden');
  individualLessonSection?.classList.add('hidden');
  importantTopicsSection?.classList.add('hidden');
  examSystemView?.classList.add('hidden');
  lessonSection?.classList.remove('hidden');

  // scroll and optionally jump to a lesson
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (Number.isFinite(startIndex) && startIndex >= 0) {
    requestAnimationFrame(() => {
      const el = document.getElementById(`lesson-${startIndex + 1}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

/* ------------- PDF generation functions ------------- */

// Function to load and convert SVG to image data
async function loadLogoAsImageData() {
  try {
    const response = await fetch('studnetailogo.svg');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const svgText = await response.text();

    // Create a canvas to convert SVG to image data
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    return new Promise((resolve, reject) => {
      img.onload = function () {
        canvas.width = 100; // Set logo width
        canvas.height = 100; // Set logo height
        ctx.drawImage(img, 0, 0, 100, 100);
        const imageData = canvas.toDataURL('image/png');
        resolve(imageData);
      };

      img.onerror = function () {
        console.error('Error loading image from SVG');
        resolve(null); // Return null instead of rejecting to allow PDF generation without logo
      };

      // Convert SVG to data URL
      const svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      img.src = url;
    });
  } catch (error) {
    console.error('Error loading logo:', error);
    return null;
  }
}

// Function to generate PDF with logo
async function generatePDFWithLogo(course, isFullCourse = false) {
  if (!window.jspdf) {
    throw new Error('jsPDF library not loaded. Please check if the CDN is accessible.');
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Load logo
  const logoData = await loadLogoAsImageData();

  // Add logo to PDF
  if (logoData) {
    doc.addImage(logoData, 'PNG', 15, 10, 30, 30);
  }

  // Add title
  doc.setFontSize(20);
  doc.setFont(undefined, 'bold');
  doc.text(course.title, 15, 50);

  // Add description
  doc.setFontSize(12);
  doc.setFont(undefined, 'normal');
  const descLines = doc.splitTextToSize(course.desc, 180);
  doc.text(descLines, 15, 65);

  // Add course info
  doc.setFontSize(10);
  doc.text(`Level: ${course.level}`, 15, 85);
  doc.text(`Duration: ${course.duration}`, 15, 95);

  // Add tags
  if (course.tags && course.tags.length > 0) {
    doc.text('Tags:', 15, 110);
    const tagsText = course.tags.join(', ');
    const tagLines = doc.splitTextToSize(tagsText, 180);
    doc.text(tagLines, 15, 120);
  }

  let yPosition = 140;

  // Add lessons
  doc.setFontSize(14);
  doc.setFont(undefined, 'bold');
  doc.text('Lessons:', 15, yPosition);
  yPosition += 10;

  course.lessons.forEach((lesson, index) => {
    // Check if we need a new page
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }

    // Add lesson title
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    const lessonTitle = `${index + 1}. ${lesson.title}`;
    const titleLines = doc.splitTextToSize(lessonTitle, 180);
    doc.text(titleLines, 15, yPosition);
    yPosition += titleLines.length * 5 + 5;

    // Add lesson content if it's a full course download
    if (isFullCourse && lesson.content) {
      doc.setFontSize(10);
      doc.setFont(undefined, 'normal');
      const contentLines = doc.splitTextToSize(lesson.content, 180);

      // Check if content fits on current page
      if (yPosition + contentLines.length * 4 > 280) {
        doc.addPage();
        yPosition = 20;
      }

      doc.text(contentLines, 15, yPosition);
      yPosition += contentLines.length * 4 + 10;
    } else {
      yPosition += 5;
    }
  });

  // Add footer
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setFont(undefined, 'normal');
    doc.text('Generated by Student AI', 15, 290);
    doc.text(`Page ${i} of ${pageCount}`, 180, 290);
  }

  return doc;
}

/* ------------- download syllabus (PDF) ------------- */
async function downloadSyllabus() {
  if (!currentCourse) {
    console.error('No current course selected');
    return;
  }

  try {
    console.log('Starting PDF generation for syllabus...');
    const doc = await generatePDFWithLogo(currentCourse, false);
    const fileName = `${(currentCourse.title || 'syllabus').replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-syllabus.pdf`;
    console.log('Saving PDF:', fileName);
    doc.save(fileName);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error generating PDF. Please check console for details.');
  }
}

/* ------------- download course (PDF) ------------- */
async function downloadCourse(courseId) {
  const course = topics.find(t => t.id === courseId);
  if (!course) {
    console.error('Course not found:', courseId);
    return;
  }

  try {
    console.log('Starting PDF generation for course:', course.title);
    const doc = await generatePDFWithLogo(course, true);
    const fileName = `${(course.title || 'course').replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-course.pdf`;
    console.log('Saving PDF:', fileName);
    doc.save(fileName);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error generating PDF. Please check console for details.');
  }
}

/* ------------- download individual lesson (PDF) ------------- */
async function downloadIndividualLesson() {
  if (!currentLesson || !currentCourse) {
    console.error('No current lesson or course available');
    return;
  }

  try {
    console.log('Starting PDF generation for lesson:', currentLesson.title);
    const doc = await generateIndividualLessonPDF(currentLesson, currentCourse);
    const fileName = `${(currentLesson.title || 'lesson').replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-lesson.pdf`;
    console.log('Saving PDF:', fileName);
    doc.save(fileName);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error generating PDF. Please check console for details.');
  }
}

/* ------------- download important topics (PDF) ------------- */
async function downloadImportantTopics() {
  if (!currentCourse) {
    console.error('No current course available');
    return;
  }

  try {
    console.log('Starting PDF generation for important topics:', currentCourse.title);
    const doc = await generateImportantTopicsPDF(currentCourse);
    const fileName = `${(currentCourse.title || 'topics').replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-important-topics.pdf`;
    console.log('Saving PDF:', fileName);
    doc.save(fileName);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error generating PDF. Please check console for details.');
  }
}

// Function to generate PDF for individual lesson with clean formatting
async function generateIndividualLessonPDF(lesson, course) {
  if (!window.jspdf) {
    throw new Error('jsPDF library not loaded. Please check if the CDN is accessible.');
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Load logo
  const logoData = await loadLogoAsImageData();

  // Add logo to PDF
  if (logoData) {
    doc.addImage(logoData, 'PNG', 15, 10, 30, 30);
  }

  // Add lesson title (main title only)
  doc.setFontSize(18);
  doc.setFont(undefined, 'bold');
  const titleLines = doc.splitTextToSize(lesson.title, 180);
  doc.text(titleLines, 15, 40);

  let yPosition = 55;

  // Add lesson content with proper formatting
  if (lesson.content) {
    // Process the content to identify sections and format them properly
    const content = lesson.content;

    // Split content into sections based on the formatLessonContent logic
    const sections = content.split(/\n\s*\n/).map(s => s.trim()).filter(Boolean);

    sections.forEach(section => {
      // Check if we need a new page
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }

      // Check if this is a major section heading
      const sectionHeadings = [
        'Introduction & Definition',
        'Why the topic is important',
        'Core Concepts',
        'Detailed Explanations',
        'Important Points',
        'Practical Applications',
        'Case Studies or Real-world Examples',
        'Pro Tips & Best Practices',
        'Key Takeaways',
        'Conclusion'
      ];

      const isHeading = sectionHeadings.some(heading =>
        section.trim() === heading || section.trim().startsWith(heading)
      );

      if (isHeading) {
        // Format as heading
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        const headingLines = doc.splitTextToSize(section, 180);
        doc.text(headingLines, 15, yPosition);
        yPosition += headingLines.length * 6 + 5;
      } else {
        // Check if this section contains concept definitions (lines ending with colon)
        const lines = section.split('\n');
        let hasDefinitions = false;

        lines.forEach(line => {
          if (yPosition > 270) {
            doc.addPage();
            yPosition = 20;
          }

          if (line.includes(':') && !line.includes('http')) {
            // This might be a definition
            const parts = line.split(':');
            if (parts.length === 2) {
              doc.setFontSize(11);
              doc.setFont(undefined, 'bold');
              doc.text(parts[0].trim() + ':', 15, yPosition);
              yPosition += 5;

              doc.setFontSize(11);
              doc.setFont(undefined, 'normal');
              const defLines = doc.splitTextToSize(parts[1].trim(), 165);
              doc.text(defLines, 20, yPosition);
              yPosition += defLines.length * 5 + 3;
              hasDefinitions = true;
            } else {
              // Regular line
              doc.setFontSize(11);
              doc.setFont(undefined, 'normal');
              const textLines = doc.splitTextToSize(line, 180);
              doc.text(textLines, 15, yPosition);
              yPosition += textLines.length * 5;
            }
          } else if (line.trim().startsWith('•') || line.trim().startsWith('-') || line.trim().startsWith('*')) {
            // Bullet point
            doc.setFontSize(11);
            doc.setFont(undefined, 'normal');
            const bulletText = line.trim().substring(1).trim();
            const bulletLines = doc.splitTextToSize(bulletText, 165);
            doc.text(bulletLines, 20, yPosition);
            yPosition += bulletLines.length * 5;
          } else if (line.trim().match(/^\d+\./)) {
            // Numbered list
            doc.setFontSize(11);
            doc.setFont(undefined, 'normal');
            const numberedLines = doc.splitTextToSize(line, 180);
            doc.text(numberedLines, 15, yPosition);
            yPosition += numberedLines.length * 5;
          } else if (line.trim()) {
            // Regular paragraph
            doc.setFontSize(11);
            doc.setFont(undefined, 'normal');
            const textLines = doc.splitTextToSize(line, 180);
            doc.text(textLines, 15, yPosition);
            yPosition += textLines.length * 5;
          }
        });

        if (!hasDefinitions) {
          yPosition += 3; // Extra space between sections
        }
      }
    });
  }

  // Add footer
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setFont(undefined, 'normal');
    doc.text('Generated by Student AI', 15, 290);
    doc.text(`Page ${i} of ${pageCount}`, 180, 290);
  }

  return doc;
}

// Function to generate PDF for important topics
async function generateImportantTopicsPDF(course) {
  if (!window.jspdf) {
    throw new Error('jsPDF library not loaded. Please check if the CDN is accessible.');
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Load logo
  const logoData = await loadLogoAsImageData();

  // Add logo to PDF
  if (logoData) {
    doc.addImage(logoData, 'PNG', 15, 10, 30, 30);
  }

  // Add title - make it shorter to avoid truncation
  doc.setFontSize(18);
  doc.setFont(undefined, 'bold');
  const titleText = `${course.title} - Important Topics`;
  const titleLines = doc.splitTextToSize(titleText, 180);
  doc.text(titleLines, 15, 50);

  // Add description
  doc.setFontSize(12);
  doc.setFont(undefined, 'normal');
  const descLines = doc.splitTextToSize('High-priority topics to revise step-by-step before exams, interviews, or projects', 180);
  doc.text(descLines, 15, 65);

  let yPosition = 85;

  // Get important topics from the separate importantTopics object
  const topicsData = importantTopics[course.id];

  if (topicsData && topicsData.content && topicsData.content.length > 0) {
    topicsData.content.forEach((topic, index) => {
      // Check if we need a new page
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }

      // Add step number and topic title with better formatting
      doc.setFontSize(14);
      doc.setFont(undefined, 'bold');
      const topicTitle = `Step ${topic.step}: ${topic.title}`;
      const titleLines = doc.splitTextToSize(topicTitle, 180);
      doc.text(titleLines, 15, yPosition);
      yPosition += titleLines.length * 5 + 5;

      // Add topic points
      if (topic.points && topic.points.length > 0) {
        doc.setFontSize(11);
        doc.setFont(undefined, 'normal');

        topic.points.forEach((point, pointIndex) => {
          // Check if we need a new page
          if (yPosition > 270) {
            doc.addPage();
            yPosition = 20;
          }

          // Add bullet point
          doc.text(`• ${point}`, 20, yPosition);
          yPosition += 5;
        });

        yPosition += 5; // Extra space after each topic
      }
    });
  } else {
    // If no important topics, show a message
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    doc.text('No important topics available for this course.', 15, yPosition);
  }

  // Add footer
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setFont(undefined, 'normal');
    doc.text('Generated by Student AI', 15, 290);
    doc.text(`Page ${i} of ${pageCount}`, 180, 290);
  }

  return doc;
}

/* ------------- events ------------- */
document.addEventListener('DOMContentLoaded', () => {

  search?.addEventListener('input', () => renderCards(search.value));
  clearSearch?.addEventListener('click', () => { search.value = ''; renderCards(''); search.focus(); });

  backToCourseBtn?.addEventListener('click', () => {
    lessonSection?.classList.add('hidden');
    courseDashboardSection?.classList.add('hidden');
    lessonCardsSection?.classList.add('hidden');
    individualLessonSection?.classList.add('hidden');
    importantTopicsSection?.classList.add('hidden');
    courseInfoSection?.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  backToCourseFromDashboardBtn?.addEventListener('click', () => {
    courseDashboardSection?.classList.add('hidden');
    lessonCardsSection?.classList.add('hidden');
    individualLessonSection?.classList.add('hidden');
    importantTopicsSection?.classList.add('hidden');
    courseInfoSection?.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  backToDashboardBtn?.addEventListener('click', () => {
    lessonCardsSection?.classList.add('hidden');
    individualLessonSection?.classList.add('hidden');
    importantTopicsSection?.classList.add('hidden');
    examSystemView?.classList.add('hidden');
    courseDashboardSection?.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  backToLessonCardsBtn?.addEventListener('click', () => {
    individualLessonSection?.classList.add('hidden');
    importantTopicsSection?.classList.add('hidden');
    examSystemView?.classList.add('hidden');
    lessonCardsSection?.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  backBtn?.addEventListener('click', () => {
    courseInfoSection?.classList.add('hidden');
    courseDashboardSection?.classList.add('hidden');
    lessonCardsSection?.classList.add('hidden');
    individualLessonSection?.classList.add('hidden');
    importantTopicsSection?.classList.add('hidden');
    examSystemView?.classList.add('hidden');
    lessonSection?.classList.add('hidden');
    heroSection?.classList.remove('hidden');
    coursesSection?.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  startBtn?.addEventListener('click', function (e) {
    e.preventDefault();
    // show dashboard instead of immediately starting course
    showCourseDashboard();
  });

  // Dashboard card event handlers
  studyMaterialsCard?.addEventListener('click', () => {
    // Show lesson cards when Study Materials is clicked
    showLessonCards();
  });

  importantTopicsCard?.addEventListener('click', () => {
    showImportantTopics();
  });

  mockTestsCard?.addEventListener('click', () => {
    showExamSystem();
  });

  backToDashboardFromTopicsBtn?.addEventListener('click', () => {
    importantTopicsSection?.classList.add('hidden');
    examSystemView?.classList.add('hidden');
    courseDashboardSection?.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Exam system event listeners
  backToDashboardFromExamBtn?.addEventListener('click', () => {
    examSystemView?.classList.add('hidden');
    courseDashboardSection?.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  startExamBtn?.addEventListener('click', () => {
    startExam();
  });

  // Open submit confirmation modal from header button
  submitExamBtn?.addEventListener('click', () => {
    if (submitConfirmModal) submitConfirmModal.classList.remove('hidden');
  });

  // Modal: cancel -> close modal
  cancelSubmitBtn?.addEventListener('click', () => {
    submitConfirmModal?.classList.add('hidden');
  });

  // Modal: confirm -> submit exam
  confirmSubmitBtn?.addEventListener('click', () => {
    submitConfirmModal?.classList.add('hidden');
    submitExam();
  });

  prevQuestionBtn?.addEventListener('click', () => {
    goToPreviousQuestion();
  });

  nextQuestionBtn?.addEventListener('click', () => {
    goToNextQuestion();
  });

  retakeExamBtn?.addEventListener('click', () => {
    retakeExam();
  });

  generateCertificateBtn?.addEventListener('click', () => {
    generateCertificate();
  });

  downloadCertificateBtn?.addEventListener('click', () => {
    downloadCertificate();
  });

  backToResultsBtn?.addEventListener('click', () => {
    certificateDisplay?.classList.add('hidden');
    examResults?.classList.remove('hidden');
  });

  downloadBtn?.addEventListener('click', () => {
    console.log('Download syllabus button clicked');
    downloadSyllabus();
  });

  downloadFullCourseBtn?.addEventListener('click', () => {
    console.log('Download full course button clicked');
    if (currentCourse) {
      downloadCourse(currentCourse.id);
    } else {
      console.error('No current course available for download');
    }
  });

  downloadLessonBtn?.addEventListener('click', () => {
    console.log('Download lesson button clicked');
    if (currentLesson && currentCourse) {
      downloadIndividualLesson();
    } else {
      console.error('No current lesson available for download');
    }
  });

  downloadImportantTopicsBtn?.addEventListener('click', () => {
    console.log('Download important topics button clicked');
    if (currentCourse) {
      downloadImportantTopics();
    } else {
      console.error('No current course available for download');
    }
  });

  /* ------------- init ------------- */
  renderCards();
}); // End of DOMContentLoaded
