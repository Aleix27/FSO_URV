// App State and Logic
const app = {
    currentTests: {
        assignatura: testsData.parcial1.tests_assignatura[0].questions,
        generats: testsData.parcial1.tests_generats[0].questions,
        temes: []
    },
    
    currentTemaSelected: 'tema1',
    
    init() {
        this.setupNavigation();
        this.setupThemeToggle();
        this.renderResums();
        
        // Render main carousels
        this.renderCarousels('assignatura');
        this.renderCarousels('generats');
        
        // Initial Tema Carousel rendering
        this.renderTemaCarousel(this.currentTemaSelected);
        
        const topicTabs = document.querySelectorAll('.topic-tab');
        if(topicTabs.length > 0) {
            topicTabs.forEach(tab => {
                tab.addEventListener('click', (e) => {
                    topicTabs.forEach(t => t.classList.remove('active'));
                    e.currentTarget.classList.add('active');
                    this.currentTemaSelected = e.currentTarget.getAttribute('data-tema');
                    this.backToCarousel('temes'); // Revert to carousel view
                    this.renderTemaCarousel(this.currentTemaSelected);
                });
            });
        }
    },

    setupThemeToggle() {
        const toggleBtn = document.getElementById('theme-toggle');
        if(!toggleBtn) return;
        
        if(localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-theme');
            toggleBtn.textContent = '☀️';
        }
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            if(document.body.classList.contains('dark-theme')) {
                toggleBtn.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                toggleBtn.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            }
        });
    },

    renderCarousels(type) {
        const container = document.getElementById(`${type}-carousel`);
        if(!container) return;
        container.innerHTML = '';
        
        const exams = testsData.parcial1[`tests_${type}`];
        exams.forEach((exam, index) => {
            const card = document.createElement('div');
            card.className = 'exam-card';
            card.innerHTML = `
                <h3>${exam.title}</h3>
                <p>${exam.questions.length} Preguntes</p>
                <button class="btn-start-exam" onclick="app.openExam('${type}', ${index})">Començar Test</button>
            `;
            container.appendChild(card);
        });
    },

    openExam(type, index) {
        const exam = testsData.parcial1[`tests_${type}`][index];
        this.currentTests[type] = exam.questions;
        
        const titleEl = document.getElementById(`${type}-exam-title`);
        if(titleEl) titleEl.textContent = exam.title;
        
        document.getElementById(`${type}-carousel`).classList.add('hidden-view');
        document.getElementById(`${type}-test-wrapper`).classList.remove('hidden-view');
        
        this.renderTests(type, `${type}-questions-container`);
    },
    
    backToCarousel(type) {
        document.getElementById(`${type}-test-wrapper`).classList.add('hidden-view');
        document.getElementById(`${type}-carousel`).classList.remove('hidden-view');
        document.getElementById(`${type}-questions-container`).innerHTML = '';
    },

    renderTemaCarousel(temaId) {
        const container = document.getElementById('temes-carousel');
        if(!container) return;
        container.innerHTML = '';
        
        const data = testsPerTema[temaId];
        data.exams.forEach((exam, index) => {
            const card = document.createElement('div');
            card.className = 'exam-card';
            card.innerHTML = `
                <h3>${exam.title}</h3>
                <p>Tema: ${data.title} (${exam.questions.length} preg.)</p>
                <button class="btn-start-exam" onclick="app.openTemaExam('${temaId}', ${index})" style="background: linear-gradient(135deg, #10b981, #0ea5e9);">Fer Test</button>
            `;
            container.appendChild(card);
        });
    },

    openTemaExam(temaId, index) {
        const exam = testsPerTema[temaId].exams[index];
        this.currentTests.temes = exam.questions;
        
        const titleEl = document.getElementById('temes-exam-title');
        if(titleEl) titleEl.textContent = exam.title;
        
        document.getElementById('temes-carousel').classList.add('hidden-view');
        document.getElementById('temes-test-wrapper').classList.remove('hidden-view');
        
        this.renderTests('temes', 'temes-questions-container');
    },

    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        const views = document.querySelectorAll('main > .view');

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                // Update nav classes
                navItems.forEach(n => n.classList.remove('active'));
                item.classList.add('active');

                // Update views
                const targetId = item.getAttribute('data-target');
                views.forEach(v => {
                    v.classList.remove('active');
                    v.classList.add('hidden-view');
                });
                
                // If it's resums, make sure to hide reader and show cards list
                if(targetId === 'resums-view') {
                    document.getElementById('resums-view').classList.remove('hidden-view');
                    document.getElementById('resums-view').classList.add('active');
                    document.getElementById('reader-view').classList.add('hidden-view');
                } else {
                    document.getElementById(targetId).classList.remove('hidden-view');
                    document.getElementById(targetId).classList.add('active');
                }
                
                window.scrollTo(0,0);
            });
        });

        // Reader back button
        document.getElementById('btn-back-resums').addEventListener('click', () => {
            document.getElementById('reader-view').classList.add('hidden-view');
            document.getElementById('resums-view').classList.remove('hidden-view');
            document.getElementById('resums-view').classList.add('active');
        });
    },

    renderResums() {
        const container = document.getElementById('chapters-list');
        container.innerHTML = '';

        resumsData.forEach((resum, index) => {
            const card = document.createElement('div');
            card.className = 'chapter-card';
            
            // Generate preview text by stripping markdown
            let rawText = resum.content.replace(/[#_*>`]/g, '').substring(0, 100) + '...';
            
            card.innerHTML = `
                <div class="chapter-title">${resum.title}</div>
                <div class="chapter-preview">${rawText}</div>
            `;

            card.addEventListener('click', () => {
                this.openResumReader(resum);
            });

            container.appendChild(card);
        });
    },

    openResumReader(resum) {
        document.getElementById('resums-view').classList.remove('active');
        document.getElementById('resums-view').classList.add('hidden-view');
        
        const readerView = document.getElementById('reader-view');
        readerView.classList.remove('hidden-view');
        readerView.classList.add('active');

        document.getElementById('reader-title').innerText = resum.title;
        
        // Parse markdown to HTML
        document.getElementById('reader-content').innerHTML = marked.parse(resum.content);
        window.scrollTo(0, 0);
    },

    renderTests(testKey, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        const questions = this.currentTests[testKey];

        questions.forEach((q, index) => {
            const wrap = document.createElement('div');
            wrap.className = 'q-card';

            let html = `
                <div class="q-title">${index + 1}. ${q.q}</div>
                <div class="opts-list">
            `;

            q.options.forEach((opt, oIndex) => {
                // Generate a unique ID for label binding
                const uid = `${testKey}-q${index}-o${oIndex}`;
                html += `
                    <label class="opt-label" for="${uid}" onclick="app.selectOption(this, '${testKey}', ${index}, ${oIndex})">
                        <input type="radio" id="${uid}" name="${testKey}-q${index}" value="${oIndex}">
                        <span>${opt}</span>
                    </label>
                `;
            });

            html += `
                </div>
                <div id="fb-${testKey}-${index}" class="feedback-box"></div>
            `;

            wrap.innerHTML = html;
            container.appendChild(wrap);
        });
    },

    selectOption(labelElement, testKey, qIndex, oIndex) {
        const parentList = labelElement.closest('.opts-list');
        
        // Prevent changing the answer once selected
        if (parentList.classList.contains('answered')) return;
        
        // Mark as answered lock
        parentList.classList.add('answered');
        
        // Ensure radio is checked (in case pointer events intercept differently)
        const radio = document.getElementById(`${testKey}-q${qIndex}-o${oIndex}`);
        if(radio) radio.checked = true;

        const q = this.currentTests[testKey][qIndex];
        const isCorrect = (oIndex === q.answer);
        
        const fbBox = document.getElementById(`fb-${testKey}-${qIndex}`);
        fbBox.style.display = 'block';

        if (isCorrect) {
            fbBox.className = 'feedback-box feedback-correct';
            fbBox.innerHTML = `✅ <b>Correcte</b><br><br><i>${q.explanation}</i>`;
            labelElement.style.borderColor = "var(--success)";
            labelElement.style.backgroundColor = "rgba(16, 185, 129, 0.1)";
        } else {
            fbBox.className = 'feedback-box feedback-wrong';
            fbBox.innerHTML = `❌ <b>Error.</b> La correcta era: "${q.options[q.answer]}". <br><br><i>${q.explanation}</i>`;
            labelElement.style.borderColor = "var(--danger)";
            labelElement.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
            
            // Highlight the correct option as well to guide the user
            const correctLabel = parentList.querySelector(`label[for="${testKey}-q${qIndex}-o${q.answer}"]`);
            if (correctLabel) {
                correctLabel.style.borderColor = "var(--success)";
                correctLabel.style.borderWidth = "2px";
                correctLabel.style.borderStyle = "dashed";
            }
        }
    },

    submitTest(testKey) {
        const questions = this.currentTests[testKey];
        let score = 0;
        let correctC = 0;
        let errors = 0;
        let blank = 0;

        questions.forEach((q, index) => {
            const selectedInput = document.querySelector(`input[name="${testKey}-q${index}"]:checked`);
            const fbBox = document.getElementById(`fb-${testKey}-${index}`);

            if (!selectedInput) {
                // Handled as blank during final evaluation
                fbBox.style.display = 'block';
                fbBox.className = 'feedback-box feedback-blank';
                fbBox.innerHTML = `📓 <b>Deixada en blanc (0 pts).</b> La correcta era: "${q.options[q.answer]}". <br><br><i>${q.explanation}</i>`;
                
                // Lock the options
                const firstInput = document.getElementById(`${testKey}-q${index}-o0`);
                if(firstInput) {
                    const parentList = firstInput.closest('.opts-list');
                    if(parentList) parentList.classList.add('answered');
                }
                
                blank++;
            } else {
                const val = parseInt(selectedInput.value);
                if (val === q.answer) {
                    score += 1;
                    correctC++;
                } else {
                    score -= 0.33;
                    errors++;
                }
            }
        });

        const maxScore = questions.length;
        let outOf10 = ((score / maxScore) * 10).toFixed(2);
        if (outOf10 < 0) outOf10 = 0;

        // Populate Modal
        document.getElementById('final-score').innerText = outOf10;
        
        const msgElem = document.getElementById('final-message');
        const circle = document.querySelector('.score-circle');

        if (outOf10 >= 5) {
            msgElem.innerHTML = "<b>Aprovat brillantment!</b> 🚀 Ara ets un mestre dels recursos compartits!";
            circle.style.borderColor = "var(--success)";
            document.getElementById('final-score').style.color = "var(--success)";
            circle.style.backgroundColor = "#ecfdf5";
        } else {
            msgElem.innerHTML = "<b>Suspès...</b> 😔 Toca obrir l'apartat de llibres i llegir la documentació!";
            circle.style.borderColor = "var(--danger)";
            document.getElementById('final-score').style.color = "var(--danger)";
            circle.style.backgroundColor = "#fef2f2";
        }

        document.getElementById('stat-correct').innerText = correctC;
        document.getElementById('stat-wrong').innerText = errors;
        document.getElementById('stat-blank').innerText = blank;

        document.getElementById('results-modal').classList.remove('hidden');
    },

    closeModal() {
        document.getElementById('results-modal').classList.add('hidden');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
