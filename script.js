// bams.xyz Static Site JavaScript
let currentSection = 'home';

// Navigation
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionName).classList.add('active');
    
    // Load data if needed
    if (sectionName === 'herbs' && !document.getElementById('herbsList').hasChildNodes()) {
        loadHerbs();
    } else if (sectionName === 'sanskrit' && !document.getElementById('sanskritList').hasChildNodes()) {
        loadSanskrit();
    } else if (sectionName === 'remedies' && !document.getElementById('remediesList').hasChildNodes()) {
        loadRemedies();
    }
    
    currentSection = sectionName;
}

// Load Herbs Data
function loadHerbs() {
    const container = document.getElementById('herbsList');
    container.innerHTML = '';
    
    const dataToLoad = window.herbsData || [];
    if (dataToLoad.length === 0) {
        container.innerHTML = '<p>Loading authentic herb database...</p>';
        // Try again after a short delay
        setTimeout(loadHerbs, 1000);
        return;
    }
    
    dataToLoad.forEach(herb => {
        const card = createHerbCard(herb);
        container.appendChild(card);
    });
}

function createHerbCard(herb) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-header">
            <h3>${herb.englishName}</h3>
            <p class="sanskrit">${herb.sanskritName}</p>
        </div>
        <div class="card-content">
            <p><strong>Scientific:</strong> ${herb.scientificName}</p>
            <p><strong>Rasa:</strong> ${herb.rasa.join(', ')}</p>
            <p><strong>Virya:</strong> ${herb.virya}</p>
            <p><strong>Properties:</strong> ${herb.properties.join(', ')}</p>
            <p><strong>Uses:</strong> ${herb.indications.slice(0, 3).join(', ')}</p>
            <p><strong>Dosage:</strong> ${herb.dosage}</p>
            <div class="dosha-effects">
                <span class="dosha vata ${herb.doshaEffects.vata}">Vata: ${herb.doshaEffects.vata}</span>
                <span class="dosha pitta ${herb.doshaEffects.pitta}">Pitta: ${herb.doshaEffects.pitta}</span>
                <span class="dosha kapha ${herb.doshaEffects.kapha}">Kapha: ${herb.doshaEffects.kapha}</span>
            </div>
            <p class="description">${herb.description}</p>
            <div class="card-actions">
                <button class="download-btn" onclick="downloadCard(this, 'herb', '${herb.englishName}')">
                    📥 Download Card
                </button>
            </div>
        </div>
    `;
    return card;
}

// Load Sanskrit Terms
function loadSanskrit() {
    const container = document.getElementById('sanskritList');
    container.innerHTML = '';
    
    const dataToLoad = window.sanskritData || [];
    if (dataToLoad.length === 0) {
        container.innerHTML = '<p>Loading authentic Sanskrit database...</p>';
        // Try again after a short delay
        setTimeout(loadSanskrit, 1000);
        return;
    }
    
    dataToLoad.forEach(term => {
        const card = createSanskritCard(term);
        container.appendChild(card);
    });
}

function createSanskritCard(term) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-header">
            <h3>${term.term}</h3>
            <p class="transliteration">${term.transliteration}</p>
        </div>
        <div class="card-content">
            <p><strong>Meaning:</strong> ${term.meaning}</p>
            <p><strong>Context:</strong> ${term.context}</p>
            <p><strong>Subject:</strong> ${term.subject}</p>
            <div class="examples">
                <strong>Examples:</strong>
                <ul>
                    ${term.examples.map(example => `<li>${example}</li>`).join('')}
                </ul>
            </div>
            <div class="card-actions">
                <button class="download-btn" onclick="downloadCard(this, 'sanskrit', '${term.term}')">
                    📥 Download Card
                </button>
            </div>
        </div>
    `;
    return card;
}

// Load Home Remedies
function loadRemedies() {
    const container = document.getElementById('remediesList');
    container.innerHTML = '';
    
    const dataToLoad = window.remediesData || [];
    if (dataToLoad.length === 0) {
        container.innerHTML = '<p>Loading authentic remedies database...</p>';
        // Try again after a short delay
        setTimeout(loadRemedies, 1000);
        return;
    }
    
    dataToLoad.forEach(remedy => {
        const card = createRemedyCard(remedy);
        container.appendChild(card);
    });
}

function createRemedyCard(remedy) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-header">
            <h3>${remedy.ailment}</h3>
            <p class="remedy-name">${remedy.remedy}</p>
        </div>
        <div class="card-content">
            <div class="ingredients">
                <strong>Ingredients:</strong>
                <ul>
                    ${remedy.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            <p><strong>Preparation:</strong> ${remedy.preparation}</p>
            <p><strong>Dosage:</strong> ${remedy.dosage}</p>
            <div class="precautions">
                <strong>Precautions:</strong>
                <ul>
                    ${remedy.precautions.map(precaution => `<li>${precaution}</li>`).join('')}
                </ul>
            </div>
            <div class="dosha-specific">
                <strong>Dosha Effects:</strong>
                <ul>
                    ${remedy.doshaSpecific.map(effect => `<li>${effect}</li>`).join('')}
                </ul>
            </div>
            <div class="card-actions">
                <button class="download-btn" onclick="downloadCard(this, 'remedy', '${remedy.ailment}')">
                    📥 Download Card
                </button>
            </div>
        </div>
    `;
    return card;
}

// Search Functions
function searchHerbs() {
    const searchTerm = document.getElementById('herbSearch').value.toLowerCase();
    const cards = document.querySelectorAll('#herbsList .card');
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function searchSanskrit() {
    const searchTerm = document.getElementById('sanskritSearch').value.toLowerCase();
    const cards = document.querySelectorAll('#sanskritList .card');
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function searchRemedies() {
    const searchTerm = document.getElementById('remedySearch').value.toLowerCase();
    const cards = document.querySelectorAll('#remediesList .card');
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Enhanced Dosha Calculator
function calculateDosha() {
    const form = document.getElementById('doshaForm');
    const formData = new FormData(form);
    const answers = {};
    
    for (let [key, value] of formData.entries()) {
        answers[key] = value;
    }
    
    // Calculate dosha scores
    let vataScore = 0, pittaScore = 0, kaphaScore = 0;
    
    for (let answer of Object.values(answers)) {
        if (answer === 'vata') vataScore++;
        else if (answer === 'pitta') pittaScore++;
        else if (answer === 'kapha') kaphaScore++;
    }
    
    const totalQuestions = Object.keys(answers).length;
    
    if (totalQuestions === 0) {
        alert('Please answer all questions before calculating your dosha.');
        return;
    }
    
    const vataPercentage = Math.round((vataScore / totalQuestions) * 100);
    const pittaPercentage = Math.round((pittaScore / totalQuestions) * 100);
    const kaphaPercentage = Math.round((kaphaScore / totalQuestions) * 100);
    
    // Determine primary dosha
    let primaryDosha = 'Vata';
    let primaryScore = vataScore;
    let doshaSymbol = '🌬️';
    let doshaElement = 'Air + Space';
    let doshaDescription = 'Dynamic, creative, and energetic. You are naturally quick-thinking and adaptable, with a tendency toward movement and change.';
    
    if (pittaScore > primaryScore) {
        primaryDosha = 'Pitta';
        primaryScore = pittaScore;
        doshaSymbol = '🔥';
        doshaElement = 'Fire + Water';
        doshaDescription = 'Focused, intelligent, and driven. You have strong digestive fire, natural leadership qualities, and a goal-oriented nature.';
    }
    if (kaphaScore > primaryScore) {
        primaryDosha = 'Kapha';
        primaryScore = kaphaScore;
        doshaSymbol = '🌍';
        doshaElement = 'Earth + Water';
        doshaDescription = 'Stable, nurturing, and grounded. You naturally provide support and stability, with strong endurance and a calm disposition.';
    }
    
    displayDoshaResult(vataPercentage, pittaPercentage, kaphaPercentage, primaryDosha, doshaSymbol, doshaElement, doshaDescription);
}

function displayDoshaResult(vataPercentage, pittaPercentage, kaphaPercentage, primaryDosha, doshaSymbol, doshaElement, doshaDescription) {
    const resultContainer = document.getElementById('doshaResult');
    
    resultContainer.innerHTML = `
        <div class="results-header">
            <h3>${doshaSymbol} Your Dosha Constitution Revealed</h3>
            <p>Based on ancient Ayurvedic principles and your unique responses</p>
        </div>
        
        <div class="primary-dosha">
            <h4 style="font-size: 2rem; margin-bottom: 1rem; color: var(--saffron);">
                Primary Dosha: ${primaryDosha} (${doshaElement})
            </h4>
            <p style="font-size: 1.1rem; line-height: 1.6; color: var(--sandalwood);">
                ${doshaDescription}
            </p>
        </div>
        
        <div class="dosha-breakdown">
            <div class="dosha-score vata-score">
                <div class="score-circle vata-circle">${vataPercentage}%</div>
                <div class="dosha-name">Vata</div>
                <div class="sanskrit-name" style="font-family: 'Noto Sans Devanagari', sans-serif; color: var(--saffron); font-size: 1.2rem;">वात</div>
                <div class="dosha-percentage">Air + Space Elements</div>
            </div>
            
            <div class="dosha-score pitta-score">
                <div class="score-circle pitta-circle">${pittaPercentage}%</div>
                <div class="dosha-name">Pitta</div>
                <div class="sanskrit-name" style="font-family: 'Noto Sans Devanagari', sans-serif; color: var(--saffron); font-size: 1.2rem;">पित्त</div>
                <div class="dosha-percentage">Fire + Water Elements</div>
            </div>
            
            <div class="dosha-score kapha-score">
                <div class="score-circle kapha-circle">${kaphaPercentage}%</div>
                <div class="dosha-name">Kapha</div>
                <div class="sanskrit-name" style="font-family: 'Noto Sans Devanagari', sans-serif; color: var(--saffron); font-size: 1.2rem;">कफ</div>
                <div class="dosha-percentage">Earth + Water Elements</div>
            </div>
        </div>
        
        <div class="results-actions">
            <button class="action-button" onclick="retakeAssessment()">
                🔄 Retake Assessment
            </button>
            <button class="action-button" onclick="showSection('herbs')">
                🌿 Explore Herbs for ${primaryDosha}
            </button>
            <button class="action-button" onclick="showSection('remedies')">
                🍯 ${primaryDosha} Remedies
            </button>
            <button class="download-btn" onclick="downloadDoshaResult()">
                📥 Download Dosha Report
            </button>
        </div>
    `;
    
    resultContainer.classList.add('show');
    
    // Scroll to results with smooth animation
    setTimeout(() => {
        resultContainer.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }, 100);
}

function retakeAssessment() {
    // Reset the calculator
    currentQuestionGroup = 1;
    
    // Clear all form inputs
    const form = document.getElementById('doshaForm');
    form.reset();
    
    // Hide results
    const resultContainer = document.getElementById('doshaResult');
    resultContainer.classList.remove('show');
    
    // Show first question group
    document.querySelectorAll('.question-group').forEach(group => {
        group.classList.remove('active');
    });
    document.querySelector('.question-group[data-group="1"]').classList.add('active');
    
    // Update progress and navigation
    updateProgress();
    updateNavigationButtons();
    
    // Scroll back to calculator
    setTimeout(() => {
        document.querySelector('.dosha-calculator').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }, 100);
}

// Mobile Navigation Functions
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    navMenu.classList.toggle('active');
    toggle.classList.toggle('active');
}

// Enhanced Dosha Calculator Variables
let currentQuestionGroup = 1;
let totalQuestionGroups = 3;

// Enhanced Dosha Calculator Functions
function nextGroup() {
    if (currentQuestionGroup < totalQuestionGroups) {
        document.querySelector(`.question-group[data-group="${currentQuestionGroup}"]`).classList.remove('active');
        currentQuestionGroup++;
        document.querySelector(`.question-group[data-group="${currentQuestionGroup}"]`).classList.add('active');
        updateProgress();
        updateNavigationButtons();
    }
}

function previousGroup() {
    if (currentQuestionGroup > 1) {
        document.querySelector(`.question-group[data-group="${currentQuestionGroup}"]`).classList.remove('active');
        currentQuestionGroup--;
        document.querySelector(`.question-group[data-group="${currentQuestionGroup}"]`).classList.add('active');
        updateProgress();
        updateNavigationButtons();
    }
}

function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const progressPercentage = document.getElementById('progressPercentage');
    
    if (progressFill && progressText && progressPercentage) {
        const progress = (currentQuestionGroup / totalQuestionGroups) * 100;
        progressFill.style.width = progress + '%';
        
        const totalQuestions = totalQuestionGroups * 5; // Updated for better granularity
        const currentQuestion = ((currentQuestionGroup - 1) * 5) + 1;
        progressText.textContent = `Question ${currentQuestion} of ${totalQuestions}`;
        progressPercentage.textContent = Math.round(progress) + '%';
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const calculateBtn = document.getElementById('calculateBtn');
    
    if (prevBtn) prevBtn.style.display = currentQuestionGroup === 1 ? 'none' : 'inline-block';
    if (nextBtn) nextBtn.style.display = currentQuestionGroup === totalQuestionGroups ? 'none' : 'inline-block';
    if (calculateBtn) calculateBtn.style.display = currentQuestionGroup === totalQuestionGroups ? 'inline-block' : 'none';
}

// Wellness Tools Functions - Fully Functional
function showBMICalculator() {
    showSection('bmi-calculator');
}

function showPulseAnalysis() {
    showSection('pulse-analysis');
}

function showTongueAnalysis() {
    showSection('tongue-analysis');
}

function showSeasonalGuide() {
    showSection('seasonal-guide');
}

function showMeditationGuide() {
    showSection('meditation-guide');
}

// BMI Calculator Implementation
function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);
    const dosha = document.getElementById('primaryDosha').value;
    
    if (!height || !weight || !age || !dosha) {
        alert('Please fill in all fields to calculate your Ayurvedic BMI');
        return;
    }
    
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    
    // Ayurvedic BMI adjustments based on dosha
    let idealBMI, doshaAdvice, weightCategory;
    
    switch(dosha) {
        case 'vata':
            idealBMI = { min: 18.5, max: 22.0 };
            doshaAdvice = {
                diet: 'Warm, cooked foods with healthy fats. Avoid cold, dry foods.',
                lifestyle: 'Regular meal times, gentle exercise, adequate rest.',
                herbs: 'Ashwagandha, Shatavari, Brahmi for nourishment.'
            };
            break;
        case 'pitta':
            idealBMI = { min: 20.0, max: 24.0 };
            doshaAdvice = {
                diet: 'Cool, fresh foods. Avoid spicy, oily, and acidic foods.',
                lifestyle: 'Moderate exercise, avoid overheating, stress management.',
                herbs: 'Amalaki, Neem, Aloe Vera for cooling.'
            };
            break;
        case 'kapha':
            idealBMI = { min: 22.0, max: 26.0 };
            doshaAdvice = {
                diet: 'Light, warm, spicy foods. Reduce dairy and sweet foods.',
                lifestyle: 'Regular vigorous exercise, avoid daytime sleep.',
                herbs: 'Trikatu, Guggulu, Triphala for metabolism.'
            };
            break;
    }
    
    if (bmi < idealBMI.min) {
        weightCategory = 'Underweight for your dosha';
    } else if (bmi > idealBMI.max) {
        weightCategory = 'Overweight for your dosha';
    } else {
        weightCategory = 'Ideal weight for your dosha';
    }
    
    const resultHTML = `
        <div class="bmi-result-card ${dosha}-gradient" id="bmiResultCard">
            <h3>Your Ayurvedic BMI Report</h3>
            <div class="bmi-score">
                <span class="score-number">${bmi.toFixed(1)}</span>
                <span class="score-label">BMI</span>
            </div>
            <div class="weight-status ${weightCategory.includes('Ideal') ? 'ideal' : 'needs-attention'}">
                ${weightCategory}
            </div>
            <div class="personal-data">
                <p><strong>Height:</strong> ${height} cm | <strong>Weight:</strong> ${weight} kg | <strong>Age:</strong> ${age} years</p>
                <p><strong>Primary Dosha:</strong> ${dosha.charAt(0).toUpperCase() + dosha.slice(1)}</p>
                <p><strong>Ideal BMI Range:</strong> ${idealBMI.min} - ${idealBMI.max}</p>
            </div>
            <div class="dosha-recommendations">
                <h4>Personalized Recommendations for ${dosha.charAt(0).toUpperCase() + dosha.slice(1)} Constitution</h4>
                <div class="recommendation-grid">
                    <div class="rec-card">
                        <h5>🍽️ Diet</h5>
                        <p>${doshaAdvice.diet}</p>
                    </div>
                    <div class="rec-card">
                        <h5>🏃 Lifestyle</h5>
                        <p>${doshaAdvice.lifestyle}</p>
                    </div>
                    <div class="rec-card">
                        <h5>🌿 Herbs</h5>
                        <p>${doshaAdvice.herbs}</p>
                    </div>
                </div>
                <div class="ideal-range">
                    <p><strong>Ideal BMI Range for your dosha:</strong> ${idealBMI.min} - ${idealBMI.max}</p>
                </div>
                <div class="download-actions">
                    <button class="download-btn" onclick="downloadBMIResult()">
                        📥 Download BMI Report
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('bmiResult').innerHTML = resultHTML;
}

// Seasonal Guide Functions
function showSeasonDetails(season) {
    const seasonData = {
        spring: {
            name: 'Spring (Vasant Ritu)',
            icon: '🌸',
            duration: 'Mid-March to Mid-May',
            dominantDosha: 'Kapha',
            climate: 'Warm and humid',
            diet: [
                'Light, warm, and dry foods',
                'Bitter, pungent, and astringent tastes',
                'Avoid heavy, cold, and oily foods',
                'Include: barley, honey, ginger, turmeric'
            ],
            lifestyle: [
                'Wake up early before sunrise',
                'Exercise regularly to reduce kapha',
                'Practice pranayama and yoga',
                'Avoid daytime sleeping'
            ],
            herbs: ['Triphala', 'Trikatu', 'Punarnava', 'Guggulu']
        },
        summer: {
            name: 'Summer (Grishma Ritu)',
            icon: '☀️',
            duration: 'Mid-May to Mid-July',
            dominantDosha: 'Pitta',
            climate: 'Hot and dry',
            diet: [
                'Cool, sweet, and liquid foods',
                'Sweet, bitter, and astringent tastes',
                'Avoid spicy, sour, and salty foods',
                'Include: coconut water, melons, cucumber, mint'
            ],
            lifestyle: [
                'Avoid direct sun exposure',
                'Wear light colored, cotton clothes',
                'Take cool baths and showers',
                'Practice cooling pranayama (Sheetali, Sheetkari)'
            ],
            herbs: ['Amalaki', 'Shatavari', 'Aloe Vera', 'Rose petals']
        },
        monsoon: {
            name: 'Monsoon (Varsha Ritu)',
            icon: '🌧️',
            duration: 'Mid-July to Mid-September',
            dominantDosha: 'Vata',
            climate: 'Humid and cool',
            diet: [
                'Warm, light, and easily digestible foods',
                'All six tastes in moderation',
                'Avoid raw foods and too much liquid',
                'Include: rice, lentils, ginger, black pepper'
            ],
            lifestyle: [
                'Keep body warm and dry',
                'Avoid getting wet in rain',
                'Practice gentle yoga and meditation',
                'Maintain regular sleep schedule'
            ],
            herbs: ['Ginger', 'Ajwain', 'Hing (Asafoetida)', 'Tulsi']
        },
        autumn: {
            name: 'Autumn (Sharad Ritu)',
            icon: '🍂',
            duration: 'Mid-September to Mid-November',
            dominantDosha: 'Pitta',
            climate: 'Pleasant and clear',
            diet: [
                'Sweet, bitter, and astringent foods',
                'Avoid sour, salty, and pungent foods',
                'Include ghee and milk',
                'Include: rice, wheat, green vegetables, pomegranate'
            ],
            lifestyle: [
                'Expose body to gentle morning sun',
                'Practice moderate exercise',
                'Maintain emotional balance',
                'Avoid anger and stress'
            ],
            herbs: ['Brahmi', 'Jatamansi', 'Shankhpushpi', 'Saraswatarishta']
        },
        winter: {
            name: 'Winter (Shishir Ritu)',
            icon: '❄️',
            duration: 'Mid-January to Mid-March',
            dominantDosha: 'Kapha',
            climate: 'Cold and dry',
            diet: [
                'Warm, heavy, and nourishing foods',
                'Sweet, sour, and salty tastes',
                'Include healthy fats and oils',
                'Include: nuts, seeds, warm milk, sesame oil'
            ],
            lifestyle: [
                'Oil massage (Abhyanga)',
                'Wear warm clothes',
                'Vigorous exercise',
                'Avoid cold drinks'
            ],
            herbs: ['Chyawanprash', 'Ashwagandha', 'Bala', 'Kapikacchu']
        },
        prewinter: {
            name: 'Pre-Winter (Hemant Ritu)',
            icon: '🍃',
            duration: 'Mid-November to Mid-January',
            dominantDosha: 'Vata',
            climate: 'Cool and windy',
            diet: [
                'Warm, unctuous, and nourishing foods',
                'Sweet, sour, and salty tastes',
                'Include warm beverages',
                'Include: dates, almonds, ghee, warm soups'
            ],
            lifestyle: [
                'Regular oil massage',
                'Keep body warm',
                'Practice gentle exercise',
                'Adequate sleep'
            ],
            herbs: ['Dashmool', 'Bala', 'Ashwagandha', 'Jivanti']
        }
    };
    
    const data = seasonData[season];
    const detailsHTML = `
        <div class="season-detail-card">
            <div class="season-header">
                <span class="season-icon">${data.icon}</span>
                <div>
                    <h3>${data.name}</h3>
                    <p class="season-duration">${data.duration}</p>
                    <p class="dominant-dosha">Dominant Dosha: <strong>${data.dominantDosha}</strong></p>
                </div>
            </div>
            
            <div class="season-info-grid">
                <div class="info-card">
                    <h4>🍽️ Dietary Guidelines</h4>
                    <ul>
                        ${data.diet.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="info-card">
                    <h4>🧘 Lifestyle Practices</h4>
                    <ul>
                        ${data.lifestyle.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="info-card">
                    <h4>🌿 Recommended Herbs</h4>
                    <div class="herb-tags">
                        ${data.herbs.map(herb => `<span class="herb-tag">${herb}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('seasonDetails').innerHTML = detailsHTML;
}

// Meditation Guide Functions
function showPranayamaGuide() {
    const guideHTML = `
        <div class="practice-guide">
            <h3>🫁 Pranayama Breathing Techniques</h3>
            <div class="technique-cards">
                <div class="technique-card">
                    <h4>Anulom Vilom (Alternate Nostril)</h4>
                    <div class="steps">
                        <p><strong>Steps:</strong></p>
                        <ol>
                            <li>Sit comfortably with spine straight</li>
                            <li>Close right nostril with thumb, inhale through left</li>
                            <li>Close left nostril with ring finger, release thumb</li>
                            <li>Exhale through right nostril</li>
                            <li>Continue alternating for 5-10 minutes</li>
                        </ol>
                        <p><strong>Benefits:</strong> Balances nervous system, improves focus</p>
                    </div>
                </div>
                
                <div class="technique-card">
                    <h4>Kapalbhati (Skull Shining)</h4>
                    <div class="steps">
                        <p><strong>Steps:</strong></p>
                        <ol>
                            <li>Sit with spine erect, hands on knees</li>
                            <li>Take deep breath, then forceful exhale contracting belly</li>
                            <li>Let inhale happen naturally</li>
                            <li>Start with 20 breaths, gradually increase</li>
                        </ol>
                        <p><strong>Benefits:</strong> Detoxifies, energizes, strengthens core</p>
                    </div>
                </div>
                
                <div class="technique-card">
                    <h4>Bhramari (Humming Bee)</h4>
                    <div class="steps">
                        <p><strong>Steps:</strong></p>
                        <ol>
                            <li>Close eyes, place thumbs in ears</li>
                            <li>Index fingers above eyebrows, remaining fingers on eyes</li>
                            <li>Inhale deeply, then hum while exhaling</li>
                            <li>Feel vibration throughout head</li>
                            <li>Repeat 5-10 times</li>
                        </ol>
                        <p><strong>Benefits:</strong> Calms mind, reduces stress, improves concentration</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('practiceDetails').innerHTML = guideHTML;
}

function showMeditationTechniques() {
    const guideHTML = `
        <div class="practice-guide">
            <h3>🧠 Meditation Practices</h3>
            <div class="technique-cards">
                <div class="technique-card">
                    <h4>Mindfulness Meditation</h4>
                    <div class="steps">
                        <p><strong>Instructions:</strong></p>
                        <ol>
                            <li>Sit comfortably, close eyes gently</li>
                            <li>Focus on natural breath without controlling</li>
                            <li>When mind wanders, gently return to breath</li>
                            <li>Start with 10 minutes, gradually increase</li>
                        </ol>
                        <p><strong>Benefits:</strong> Present moment awareness, emotional regulation</p>
                    </div>
                </div>
                
                <div class="technique-card">
                    <h4>Trataka (Candle Gazing)</h4>
                    <div class="steps">
                        <p><strong>Instructions:</strong></p>
                        <ol>
                            <li>Place candle 3-4 feet away at eye level</li>
                            <li>Gaze at flame without blinking for 1-3 minutes</li>
                            <li>Close eyes, visualize flame in mind</li>
                            <li>Open eyes when inner image fades</li>
                            <li>Repeat 3-5 cycles</li>
                        </ol>
                        <p><strong>Benefits:</strong> Improves concentration, strengthens eyes</p>
                    </div>
                </div>
                
                <div class="technique-card">
                    <h4>Mantra Meditation</h4>
                    <div class="steps">
                        <p><strong>Instructions:</strong></p>
                        <ol>
                            <li>Choose mantra: "Om", "So Hum", or personal mantra</li>
                            <li>Repeat mentally with each breath</li>
                            <li>If mind wanders, return to mantra</li>
                            <li>Practice for 15-20 minutes</li>
                        </ol>
                        <p><strong>Benefits:</strong> Deep relaxation, spiritual connection</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('practiceDetails').innerHTML = guideHTML;
}

function showStressReliefGuide() {
    const guideHTML = `
        <div class="practice-guide">
            <h3>😌 Quick Stress Relief Techniques</h3>
            <div class="technique-cards">
                <div class="technique-card">
                    <h4>4-7-8 Breathing</h4>
                    <div class="steps">
                        <p><strong>Quick Relief Method:</strong></p>
                        <ol>
                            <li>Exhale completely through mouth</li>
                            <li>Close mouth, inhale through nose for 4 counts</li>
                            <li>Hold breath for 7 counts</li>
                            <li>Exhale through mouth for 8 counts</li>
                            <li>Repeat 3-4 cycles</li>
                        </ol>
                        <p><strong>Use:</strong> Instant anxiety relief, before sleep</p>
                    </div>
                </div>
                
                <div class="technique-card">
                    <h4>Progressive Muscle Relaxation</h4>
                    <div class="steps">
                        <p><strong>Full Body Relaxation:</strong></p>
                        <ol>
                            <li>Lie down comfortably</li>
                            <li>Tense and release each muscle group</li>
                            <li>Start from toes, work up to head</li>
                            <li>Hold tension 5 seconds, then release</li>
                            <li>Notice difference between tension and relaxation</li>
                        </ol>
                        <p><strong>Benefits:</strong> Physical tension relief, deep relaxation</p>
                    </div>
                </div>
                
                <div class="technique-card">
                    <h4>Guided Visualization</h4>
                    <div class="steps">
                        <p><strong>Mental Escape:</strong></p>
                        <ol>
                            <li>Close eyes, breathe deeply</li>
                            <li>Imagine peaceful place (beach, forest, garden)</li>
                            <li>Engage all senses in the visualization</li>
                            <li>Stay in this peaceful space for 5-10 minutes</li>
                            <li>Slowly return awareness to present</li>
                        </ol>
                        <p><strong>Benefits:</strong> Mental escape, emotional healing</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('practiceDetails').innerHTML = guideHTML;
}

// Close mobile menu when clicking navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            const navMenu = document.getElementById('navMenu');
            const toggle = document.querySelector('.mobile-menu-toggle');
            if (navMenu) navMenu.classList.remove('active');
            if (toggle) toggle.classList.remove('active');
        });
    });
    
    // Initialize dosha calculator
    updateProgress();
    updateNavigationButtons();
});

// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formResult = document.getElementById('contactFormResult');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            const consent = formData.get('consent');
            
            // Basic validation
            if (!name || !email || !subject || !message || !consent) {
                showFormResult('Please fill in all required fields and provide consent.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormResult('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission (in a real implementation, this would send to a server)
            showFormResult('Thank you for your message! We will get back to you within 24-48 hours.', 'success');
            contactForm.reset();
        });
    }
});

function showFormResult(message, type) {
    const formResult = document.getElementById('contactFormResult');
    if (formResult) {
        formResult.textContent = message;
        formResult.className = `form-result ${type}`;
        formResult.style.display = 'block';
        
        // Hide the result after 5 seconds
        setTimeout(() => {
            formResult.style.display = 'none';
        }, 5000);
        
        // Scroll to result
        formResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Enhanced Card Download Functionality with Complete Data
async function downloadCard(button, cardType, cardTitle) {
    try {
        const card = button.closest('.card');
        if (!card) return;
        
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 900;
        canvas.height = 1200;
        
        // Create type-specific background gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        if (cardType === 'herb') {
            gradient.addColorStop(0, '#e8f5e8');
            gradient.addColorStop(1, '#f0f8f0');
        } else if (cardType === 'sanskrit') {
            gradient.addColorStop(0, '#fff8e1');
            gradient.addColorStop(1, '#fffaf0');
        } else {
            gradient.addColorStop(0, '#ffeaa7');
            gradient.addColorStop(1, '#fff5e6');
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Decorative border
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 6;
        ctx.strokeRect(15, 15, canvas.width - 30, canvas.height - 30);
        
        ctx.strokeStyle = '#DAA520';
        ctx.lineWidth = 3;
        ctx.strokeRect(25, 25, canvas.width - 50, canvas.height - 50);
        
        // Ornamental corners
        ctx.fillStyle = '#FF9933';
        ctx.fillRect(25, 25, 40, 40);
        ctx.fillRect(canvas.width - 65, 25, 40, 40);
        ctx.fillRect(25, canvas.height - 65, 40, 40);
        ctx.fillRect(canvas.width - 65, canvas.height - 65, 40, 40);
        
        // Header with type indicator
        ctx.fillStyle = '#8B4513';
        ctx.font = 'bold 28px Georgia';
        ctx.textAlign = 'center';
        const typeLabel = cardType === 'herb' ? '🌿 MEDICINAL HERB' : cardType === 'sanskrit' ? '📜 SANSKRIT TERM' : '🍯 HOME REMEDY';
        ctx.fillText(typeLabel, canvas.width / 2, 80);
        
        // Main title with text wrapping
        ctx.font = 'bold 36px Georgia';
        ctx.fillStyle = '#654321';
        const titleLines = wrapText(ctx, cardTitle, canvas.width - 100);
        let yPosition = 130;
        titleLines.forEach(line => {
            ctx.fillText(line, canvas.width / 2, yPosition);
            yPosition += 45;
        });
        
        // Extract and display complete content
        yPosition += 20;
        const lineHeight = 32;
        const leftMargin = 60;
        const contentWidth = canvas.width - 120;
        
        ctx.font = '22px Arial';
        ctx.textAlign = 'left';
        ctx.fillStyle = '#444444';
        
        // Get all content from the card including precautions and dosha effects
        const cardContent = card.querySelector('.card-content');
        const allElements = cardContent.querySelectorAll('p, .dosha-effects, .examples ul, .ingredients, .precautions, .dosha-specific, .benefits');
        
        allElements.forEach(element => {
            if (yPosition > canvas.height - 200) return; // Stop if near footer
            
            let content = '';
            let header = '';
            
            if (element.tagName === 'P' && element.innerHTML.includes('<strong>')) {
                const strongText = element.querySelector('strong')?.textContent || '';
                if (strongText) {
                    header = strongText;
                    content = element.textContent.replace(strongText, '').replace(':', '').trim();
                }
            } else if (element.classList.contains('dosha-effects')) {
                header = 'Dosha Effects';
                const doshaSpans = element.querySelectorAll('.dosha');
                content = Array.from(doshaSpans).map(span => span.textContent).join(' | ');
            } else if (element.classList.contains('examples')) {
                header = 'Examples';
                const listItems = element.querySelectorAll('li');
                content = Array.from(listItems).map(li => '• ' + li.textContent).join(' ');
            } else if (element.classList.contains('ingredients')) {
                header = 'Ingredients';
                const listItems = element.querySelectorAll('li');
                content = Array.from(listItems).map(li => '• ' + li.textContent).join(' ');
            } else if (element.classList.contains('precautions')) {
                header = 'Precautions';
                const listItems = element.querySelectorAll('li');
                content = Array.from(listItems).map(li => '• ' + li.textContent).join(' ');
            } else if (element.classList.contains('dosha-specific')) {
                header = 'Dosha Effects';
                const listItems = element.querySelectorAll('li');
                content = Array.from(listItems).map(li => '• ' + li.textContent).join(' ');
            } else if (element.classList.contains('benefits')) {
                header = 'Benefits';
                content = element.textContent.replace('Benefits:', '').trim();
            } else if (element.classList.contains('description')) {
                header = 'Description';
                content = element.textContent.trim();
            } else if (element.textContent.trim() && !element.querySelector('strong')) {
                content = element.textContent.trim();
            }
            
            // Draw header
            if (header) {
                ctx.fillStyle = '#8B4513';
                ctx.font = 'bold 24px Arial';
                ctx.fillText(header + ':', leftMargin, yPosition);
                yPosition += lineHeight + 5;
                ctx.fillStyle = '#444444';
                ctx.font = '22px Arial';
            }
            
            // Draw content with text wrapping
            if (content) {
                const wrappedLines = wrapText(ctx, content, contentWidth);
                wrappedLines.forEach(line => {
                    if (yPosition < canvas.height - 180) {
                        ctx.fillText(line, leftMargin, yPosition);
                        yPosition += lineHeight;
                    }
                });
                yPosition += 10; // Extra spacing between sections
            }
        });
        
        // Enhanced footer
        const footerY = canvas.height - 120;
        const footerGradient = ctx.createLinearGradient(0, footerY, 0, canvas.height);
        footerGradient.addColorStop(0, '#8B4513');
        footerGradient.addColorStop(1, '#654321');
        ctx.fillStyle = footerGradient;
        ctx.fillRect(0, footerY, canvas.width, 120);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 32px Georgia';
        ctx.textAlign = 'center';
        ctx.fillText('bams.xyz', canvas.width / 2, footerY + 45);
        
        ctx.font = '20px Arial';
        ctx.fillText('Authentic Ayurveda Education Hub', canvas.width / 2, footerY + 75);
        
        ctx.font = '16px Arial';
        ctx.fillText('Complete Study Guide for BAMS Students & Practitioners', canvas.width / 2, footerY + 100);
        
        // Download the enhanced card
        canvas.toBlob(function(blob) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `bams-xyz-${cardType}-${cardTitle.replace(/[^a-zA-Z0-9]/g, '-')}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 'image/png');
        
    } catch (error) {
        console.error('Download failed:', error);
        alert('Download failed. Please try again.');
    }
}

// Helper function to wrap text for canvas
function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
    
    words.forEach(word => {
        const testLine = currentLine + (currentLine ? ' ' : '') + word;
        const metrics = ctx.measureText(testLine);
        
        if (metrics.width > maxWidth && currentLine) {
            lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine = testLine;
        }
    });
    
    if (currentLine) {
        lines.push(currentLine);
    }
    
    return lines;
}

// Download BMI Result Function
function downloadBMIResult() {
    const resultCard = document.getElementById('bmiResultCard');
    if (!resultCard) {
        alert('Please calculate your BMI first!');
        return;
    }
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 900;
    canvas.height = 1100;
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#e8f5e8');
    gradient.addColorStop(1, '#f0f8f0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Border
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 6;
    ctx.strokeRect(15, 15, canvas.width - 30, canvas.height - 30);
    
    // Header
    ctx.fillStyle = '#8B4513';
    ctx.font = 'bold 36px Georgia';
    ctx.textAlign = 'center';
    ctx.fillText('🏥 AYURVEDIC BMI REPORT', canvas.width / 2, 80);
    
    // Extract data from result card
    const bmiScore = resultCard.querySelector('.score-number').textContent;
    const weightStatus = resultCard.querySelector('.weight-status').textContent;
    const personalData = resultCard.querySelectorAll('.personal-data p');
    const recommendations = resultCard.querySelectorAll('.rec-card');
    
    let yPos = 150;
    const leftMargin = 60;
    const lineHeight = 35;
    
    // BMI Score
    ctx.fillStyle = '#654321';
    ctx.font = 'bold 48px Arial';
    ctx.fillText(`BMI: ${bmiScore}`, canvas.width / 2, yPos);
    yPos += 60;
    
    // Weight Status
    ctx.font = 'bold 28px Arial';
    ctx.fillStyle = weightStatus.includes('Ideal') ? '#228B22' : '#FF6347';
    ctx.fillText(weightStatus, canvas.width / 2, yPos);
    yPos += 60;
    
    // Personal Data
    ctx.fillStyle = '#444444';
    ctx.font = '24px Arial';
    ctx.textAlign = 'left';
    personalData.forEach(p => {
        const text = p.textContent.trim();
        if (text && yPos < canvas.height - 200) {
            ctx.fillText(text, leftMargin, yPos);
            yPos += lineHeight;
        }
    });
    
    yPos += 20;
    
    // Recommendations
    ctx.fillStyle = '#8B4513';
    ctx.font = 'bold 28px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('PERSONALIZED RECOMMENDATIONS', canvas.width / 2, yPos);
    yPos += 50;
    
    ctx.textAlign = 'left';
    ctx.font = '22px Arial';
    ctx.fillStyle = '#444444';
    
    recommendations.forEach(rec => {
        if (yPos > canvas.height - 150) return;
        
        const title = rec.querySelector('h5').textContent;
        const content = rec.querySelector('p').textContent;
        
        // Title
        ctx.fillStyle = '#8B4513';
        ctx.font = 'bold 24px Arial';
        ctx.fillText(title, leftMargin, yPos);
        yPos += 35;
        
        // Content with wrapping
        ctx.fillStyle = '#444444';
        ctx.font = '20px Arial';
        const wrappedContent = wrapText(ctx, content, canvas.width - 120);
        wrappedContent.forEach(line => {
            if (yPos < canvas.height - 120) {
                ctx.fillText(line, leftMargin, yPos);
                yPos += 30;
            }
        });
        yPos += 20;
    });
    
    // Footer
    const footerY = canvas.height - 80;
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(0, footerY, canvas.width, 80);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px Georgia';
    ctx.textAlign = 'center';
    ctx.fillText('bams.xyz - Authentic Ayurveda Education Hub', canvas.width / 2, footerY + 50);
    
    // Download
    canvas.toBlob(function(blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `bams-xyz-ayurvedic-bmi-report.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 'image/png');
}

// Download Dosha Calculator Result Function  
function downloadDoshaResult() {
    const resultCard = document.getElementById('doshaResult');
    if (!resultCard || !resultCard.innerHTML.trim()) {
        alert('Please complete the dosha assessment first!');
        return;
    }
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 900;
    canvas.height = 1200;
    
    // Extract primary dosha from result
    let primaryDosha = 'Vata';
    const primaryDoshaElement = resultCard.querySelector('.primary-dosha h4, .primary-dosha');
    if (primaryDoshaElement) {
        const text = primaryDoshaElement.textContent.toLowerCase();
        if (text.includes('pitta')) primaryDosha = 'Pitta';
        else if (text.includes('kapha')) primaryDosha = 'Kapha';
    }
    
    // Background gradient based on dominant dosha
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    if (primaryDosha === 'Vata') {
        gradient.addColorStop(0, '#f0e6ff');
        gradient.addColorStop(1, '#faf5ff');
    } else if (primaryDosha === 'Pitta') {
        gradient.addColorStop(0, '#fff0e6');
        gradient.addColorStop(1, '#fff8f0');
    } else {
        gradient.addColorStop(0, '#e6f7e6');
        gradient.addColorStop(1, '#f0faf0');
    }
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Decorative border
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 6;
    ctx.strokeRect(15, 15, canvas.width - 30, canvas.height - 30);
    
    ctx.strokeStyle = '#DAA520';
    ctx.lineWidth = 3;
    ctx.strokeRect(25, 25, canvas.width - 50, canvas.height - 50);
    
    // Header
    ctx.fillStyle = '#8B4513';
    ctx.font = 'bold 32px Georgia';
    ctx.textAlign = 'center';
    ctx.fillText('🕉️ AYURVEDIC DOSHA ASSESSMENT', canvas.width / 2, 80);
    
    let yPos = 140;
    const leftMargin = 60;
    const lineHeight = 32;
    const contentWidth = canvas.width - 120;
    
    // Extract dosha scores
    const doshaScores = resultCard.querySelectorAll('.dosha-score');
    if (doshaScores.length === 3) {
        ctx.fillStyle = '#654321';
        ctx.font = 'bold 28px Georgia';
        ctx.fillText(`Primary Constitution: ${primaryDosha}`, canvas.width / 2, yPos);
        yPos += 50;
        
        // Display dosha percentages
        ctx.font = '24px Arial';
        ctx.textAlign = 'left';
        ctx.fillStyle = '#444444';
        
        doshaScores.forEach(score => {
            const name = score.querySelector('.dosha-name')?.textContent || '';
            const percentage = score.querySelector('.score-circle')?.textContent || '';
            const element = score.querySelector('.dosha-percentage')?.textContent || '';
            
            if (name && percentage) {
                ctx.fillStyle = '#8B4513';
                ctx.font = 'bold 22px Arial';
                ctx.fillText(`${name}: ${percentage}`, leftMargin, yPos);
                yPos += 30;
                
                if (element) {
                    ctx.fillStyle = '#666666';
                    ctx.font = '18px Arial';
                    ctx.fillText(`(${element})`, leftMargin + 20, yPos);
                    yPos += 35;
                }
            }
        });
    }
    
    yPos += 20;
    
    // Add primary dosha description
    const doshaDescription = resultCard.querySelector('.primary-dosha p');
    if (doshaDescription) {
        ctx.fillStyle = '#8B4513';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('Constitution Description:', leftMargin, yPos);
        yPos += 35;
        
        ctx.fillStyle = '#444444';
        ctx.font = '20px Arial';
        const description = doshaDescription.textContent.trim();
        const wrappedDesc = wrapText(ctx, description, contentWidth);
        wrappedDesc.forEach(line => {
            if (yPos < canvas.height - 150) {
                ctx.fillText(line, leftMargin, yPos);
                yPos += 30;
            }
        });
        yPos += 30;
    }
    
    // Add recommendations
    ctx.fillStyle = '#8B4513';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('Recommendations:', leftMargin, yPos);
    yPos += 35;
    
    ctx.fillStyle = '#444444';
    ctx.font = '18px Arial';
    const recommendations = [
        `• Explore ${primaryDosha}-balancing herbs and remedies`,
        `• Follow dietary guidelines suitable for ${primaryDosha} constitution`,
        `• Practice lifestyle modifications to maintain dosha balance`,
        `• Consult with an Ayurvedic practitioner for personalized guidance`
    ];
    
    recommendations.forEach(rec => {
        if (yPos < canvas.height - 120) {
            const wrappedRec = wrapText(ctx, rec, contentWidth);
            wrappedRec.forEach(line => {
                if (yPos < canvas.height - 120) {
                    ctx.fillText(line, leftMargin, yPos);
                    yPos += 25;
                }
            });
            yPos += 10;
        }
    });
    
    // Footer
    const footerY = canvas.height - 80;
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(0, footerY, canvas.width, 80);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px Georgia';
    ctx.textAlign = 'center';
    ctx.fillText('bams.xyz - Authentic Ayurveda Education Hub', canvas.width / 2, footerY + 50);
    
    // Download
    canvas.toBlob(function(blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `bams-xyz-${primaryDosha.toLowerCase()}-dosha-assessment-report.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 'image/png');
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    console.log('bams.xyz Static Site Loaded');
    console.log('Herbs Database:', herbsData.length, 'entries');
    console.log('Sanskrit Terms:', sanskritData.length, 'entries');
    console.log('Home Remedies:', remediesData.length, 'entries');
});