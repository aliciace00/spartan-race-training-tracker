// Spartan Sprint Obstacles Data
const obstacles = [
    {
        id: 'pullup-training',
        name: 'Pull-Up Training',
        description: 'Build the foundational strength needed for pull-up dependent obstacles',
        milestones: [
            'Hold a dead hang for 10 seconds',
            'Hold a dead hang for 30 seconds',
            'Perform 3 negative pull-ups (slow descent)',
            'Perform 1 full pull-up',
            'Perform 5 consecutive pull-ups'
        ]
    },
    {
        id: 'rope-climb',
        name: 'Rope Climb',
        description: 'Climb a 15-foot rope to ring the bell at the top',
        milestones: [
            'Hold a dead hang for 30 seconds',
            'Climb a 6-foot rope using leg assistance',
            'Climb a 10-foot rope using leg assistance',
            'Climb a 10-foot rope without leg assistance',
            'Climb a 15-foot rope under race conditions'
        ]
    },
    {
        id: 'monkey-bars',
        name: 'Monkey Bars',
        description: 'Traverse horizontal bars using only your hands',
        milestones: [
            'Hold a dead hang for 30 seconds',
            'Practice grip transitions on a bar',
            'Traverse 3 bars without falling',
            'Traverse 6 bars without falling',
            'Complete full monkey bars under race conditions'
        ]
    },
    {
        id: 'sandbag-carry',
        name: 'Sandbag Carry',
        description: 'Carry a 40-60lb sandbag over uneven terrain',
        milestones: [
            'Deadlift your body weight',
            'Carry 30lb for 50 yards',
            'Carry 40lb for 75 yards',
            'Carry 50lb for 100 yards',
            'Complete sandbag carry under race conditions'
        ]
    },
    {
        id: 'bucket-brigade',
        name: 'Bucket Brigade',
        description: 'Carry a bucket filled with rocks for a set distance',
        milestones: [
            'Farmer\'s walk with 15lb each hand for 25 yards',
            'Carry 25lb bucket for 25 yards',
            'Carry 35lb bucket for 50 yards',
            'Carry 45lb bucket for 50 yards',
            'Complete bucket brigade under race conditions'
        ]
    },
    {
        id: 'barbed-wire-crawl',
        name: 'Barbed Wire Crawl',
        description: 'Crawl under low barbed wire, often through mud',
        milestones: [
            'Hold a plank for 1 minute',
            'Crawl 15 yards in bear crawl position',
            'Crawl 15 yards in army crawl position',
            'Crawl 25 yards through mud/sand',
            'Complete barbed wire crawl under race conditions'
        ]
    },
    {
        id: 'spear-throw',
        name: 'Spear Throw',
        description: 'Throw a spear at a target from 20 feet away',
        milestones: [
            'Practice throwing motion 25 times',
            'Hit target 2 out of 10 attempts',
            'Hit target 4 out of 10 attempts',
            'Hit target 6 out of 10 attempts',
            'Successfully hit target under race pressure'
        ]
    },
    {
        id: 'wall-climb',
        name: 'Wall Climb',
        description: 'Climb over walls ranging from 4-8 feet tall',
        milestones: [
            'Perform 5 box jumps (18 inches)',
            'Climb over 3-foot wall',
            'Climb over 5-foot wall',
            'Climb over 7-foot wall',
            'Complete all wall climbs under race conditions'
        ]
    },
    {
        id: 'hercules-hoist',
        name: 'Hercules Hoist',
        description: 'Hoist a heavy weight using a rope and pulley system',
        milestones: [
            'Perform 5 rope pulls (50% body weight)',
            'Hoist 40% body weight',
            'Hoist 60% body weight',
            'Hoist 80% body weight',
            'Complete Hercules hoist under race conditions'
        ]
    },
    {
        id: 'tyrolean-traverse',
        name: 'Tyrolean Traverse',
        description: 'Traverse a horizontal rope suspended above ground',
        milestones: [
            'Hold a dead hang for 30 seconds',
            'Traverse 5 feet on rope',
            'Traverse 15 feet on rope',
            'Traverse 25 feet on rope',
            'Complete Tyrolean traverse under race conditions'
        ]
    },
    {
        id: 'over-under-through',
        name: 'Over-Under-Through',
        description: 'Navigate over walls, under barriers, and through openings',
        milestones: [
            'Perform 5 burpees',
            'Practice ducking and crawling movements',
            'Complete obstacle sequence slowly',
            'Complete obstacle sequence at race pace',
            'Complete O-U-T under race conditions'
        ]
    },
    {
        id: 'atlas-carry',
        name: 'Atlas Carry',
        description: 'Lift and carry a heavy stone for a short distance',
        milestones: [
            'Deadlift your body weight',
            'Carry 30lb stone for 15 yards',
            'Carry 40lb stone for 20 yards',
            'Carry 50lb stone for 20 yards',
            'Complete Atlas carry under race conditions'
        ]
    },
    {
        id: 'slip-wall',
        name: 'Slip Wall',
        description: 'Climb up a slippery, inclined wall using a rope',
        milestones: [
            'Hold a dead hang for 30 seconds',
            'Practice rope climbing technique',
            'Climb 6-foot slip wall',
            'Climb 8-foot slip wall',
            'Complete slip wall under race conditions'
        ]
    },
    {
        id: 'multi-rig',
        name: 'Multi-Rig',
        description: 'Swing from a series of hanging objects',
        milestones: [
            'Hold a dead hang for 30 seconds',
            'Practice grip transitions on hanging objects',
            'Traverse 2 hanging objects',
            'Traverse 4 hanging objects',
            'Complete multi-rig under race conditions'
        ]
    },
    {
        id: 'z-wall',
        name: 'Z-Wall',
        description: 'Traverse a series of small blocks in a zigzag pattern',
        milestones: [
            'Hold a dead hang for 20 seconds',
            'Practice lateral movement on bars',
            'Traverse 3 blocks without falling',
            'Traverse 6 blocks without falling',
            'Complete Z-wall under race conditions'
        ]
    },
    {
        id: 'cargo-net',
        name: 'A-Frame Cargo Net',
        description: 'Climb up and down an A-shaped structure using a cargo net',
        milestones: [
            'Practice climbing technique on low net',
            'Climb 6-foot cargo net',
            'Climb 10-foot cargo net',
            'Climb 12-foot cargo net',
            'Complete cargo net under race conditions'
        ]
    },
    {
        id: 'inverted-wall',
        name: 'Inverted Wall',
        description: 'Climb over a wall that leans toward you',
        milestones: [
            'Perform 5 box jumps (16 inches)',
            'Practice wall climbing technique',
            'Climb 4-foot inverted wall',
            'Climb 6-foot inverted wall',
            'Complete inverted wall under race conditions'
        ]
    },
    {
        id: 'stairway-to-sparta',
        name: 'Stairway to Sparta',
        description: 'Climb up a series of angled walls',
        milestones: [
            'Perform 8 box jumps (16 inches)',
            'Climb 2 angled walls',
            'Climb 4 angled walls',
            'Climb 6 angled walls',
            'Complete stairway under race conditions'
        ]
    },
    {
        id: 'twister',
        name: 'Twister',
        description: 'Traverse hanging handles that rotate as you move',
        milestones: [
            'Hold a dead hang for 30 seconds',
            'Practice grip transitions',
            'Traverse 2 rotating handles',
            'Traverse 4 rotating handles',
            'Complete twister under race conditions'
        ]
    },
    {
        id: 'beater',
        name: 'Beater',
        description: 'Swing across hanging objects that move unpredictably',
        milestones: [
            'Hold a dead hang for 30 seconds',
            'Practice dynamic swinging',
            'Traverse 2 moving objects',
            'Traverse 4 moving objects',
            'Complete beater under race conditions'
        ]
    },
    {
        id: 'bender',
        name: 'Bender',
        description: 'Traverse a series of hanging rings and bars',
        milestones: [
            'Hold a dead hang for 30 seconds',
            'Practice ring transitions',
            'Traverse 3 hanging objects',
            'Traverse 5 hanging objects',
            'Complete bender under race conditions'
        ]
    }
];

// Application state
let appState = {
    milestones: {},
    notes: {},
    lastUpdated: new Date().toISOString(),
    isOnline: true
};

// Initialize the application
document.addEventListener('DOMContentLoaded', async function() {
    await loadState();
    renderObstacles();
    updateProgress();
    startCountdown();
    updateConnectionStatus();
    
    // Add online/offline event listeners
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
});

// Handle online status
function handleOnline() {
    appState.isOnline = true;
    console.log('Back online - syncing data...');
    updateConnectionStatus();
    loadState(); // Re-sync data when back online
}

// Handle offline status
function handleOffline() {
    appState.isOnline = false;
    console.log('Gone offline - using local storage fallback');
    updateConnectionStatus();
}

// Update connection status display
function updateConnectionStatus() {
    const indicator = document.getElementById('status-indicator');
    const text = document.getElementById('status-text');
    
    if (indicator && text) {
        if (appState.isOnline) {
            indicator.className = 'status-indicator online';
            text.textContent = 'Synced';
        } else {
            indicator.className = 'status-indicator offline';
            text.textContent = 'Offline';
        }
    }
}

// Load state from Supabase (with localStorage fallback)
async function loadState() {
    try {
        if (appState.isOnline && window.SupabaseAPI) {
            // Load from Supabase
            const [milestonesData, notesData] = await Promise.all([
                SupabaseAPI.getMilestones(),
                SupabaseAPI.getNotes()
            ]);
            
            // Convert Supabase data to app state format
            appState.milestones = {};
            appState.notes = {};
            
            milestonesData.forEach(milestone => {
                const key = `${milestone.obstacle_id}-${milestone.milestone_index}`;
                appState.milestones[key] = milestone.completed;
                if (milestone.completed_at) {
                    appState.milestones[`${key}-date`] = new Date(milestone.completed_at).toLocaleDateString();
                }
            });
            
            notesData.forEach(note => {
                appState.notes[note.obstacle_id] = note.content || '';
            });
            
            console.log('Data loaded from Supabase');
        } else {
            // Fallback to localStorage
            const saved = localStorage.getItem('spartan-training-data');
            if (saved) {
                const localData = JSON.parse(saved);
                appState.milestones = localData.milestones || {};
                appState.notes = localData.notes || {};
                console.log('Data loaded from localStorage (offline mode)');
            }
        }
    } catch (error) {
        console.error('Error loading data:', error);
        // Fallback to localStorage
        const saved = localStorage.getItem('spartan-training-data');
        if (saved) {
            const localData = JSON.parse(saved);
            appState.milestones = localData.milestones || {};
            appState.notes = localData.notes || {};
        }
    }
}

// Save state to Supabase (with localStorage backup)
async function saveState() {
    appState.lastUpdated = new Date().toISOString();
    
    // Always save to localStorage as backup
    localStorage.setItem('spartan-training-data', JSON.stringify({
        milestones: appState.milestones,
        notes: appState.notes,
        lastUpdated: appState.lastUpdated
    }));
    
    // Try to save to Supabase if online
    if (appState.isOnline && window.SupabaseAPI) {
        try {
            // Note: Individual milestone and note saves are handled in their respective functions
            console.log('Data synced to Supabase');
        } catch (error) {
            console.error('Error syncing to Supabase:', error);
        }
    }
}

// Render all obstacles
function renderObstacles() {
    const grid = document.getElementById('obstacles-grid');
    grid.innerHTML = '';

    obstacles.forEach(obstacle => {
        const obstacleElement = createObstacleElement(obstacle);
        grid.appendChild(obstacleElement);
    });
}

// Create obstacle element
function createObstacleElement(obstacle) {
    const card = document.createElement('div');
    card.className = 'obstacle-card';
    card.innerHTML = `
        <div class="obstacle-header">
            <div>
                <h3 class="obstacle-title">${obstacle.name}</h3>
                <p class="obstacle-description">${obstacle.description}</p>
            </div>
            <div class="obstacle-progress">
                <span id="progress-${obstacle.id}">0/${obstacle.milestones.length}</span>
                <div class="obstacle-progress-bar">
                    <div class="obstacle-progress-fill" id="fill-${obstacle.id}"></div>
                </div>
            </div>
        </div>
        <div class="milestones" id="milestones-${obstacle.id}">
            ${obstacle.milestones.map((milestone, index) => `
                <div class="milestone">
                    <input type="checkbox" 
                           class="milestone-checkbox" 
                           id="${obstacle.id}-${index}"
                           ${isMilestoneCompleted(obstacle.id, index) ? 'checked' : ''}>
                    <div class="milestone-content">
                        <div class="milestone-text">${milestone}</div>
                        <div class="milestone-date" id="date-${obstacle.id}-${index}">
                            ${getMilestoneDate(obstacle.id, index) || ''}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="notes-section">
            <label class="notes-label" for="notes-${obstacle.id}">Notes:</label>
            <textarea class="notes-textarea" 
                      id="notes-${obstacle.id}" 
                      placeholder="Add your training notes here...">${getObstacleNotes(obstacle.id)}</textarea>
        </div>
    `;

    // Add event listeners
    addObstacleEventListeners(obstacle, card);
    
    return card;
}

// Add event listeners for an obstacle
function addObstacleEventListeners(obstacle, card) {
    // Milestone checkboxes
    obstacle.milestones.forEach((_, index) => {
        const checkbox = card.querySelector(`#${obstacle.id}-${index}`);
        checkbox.addEventListener('change', (e) => {
            toggleMilestone(obstacle.id, index, e.target.checked);
        });
    });

    // Notes textarea
    const notesTextarea = card.querySelector(`#notes-${obstacle.id}`);
    notesTextarea.addEventListener('input', (e) => {
        saveObstacleNotes(obstacle.id, e.target.value);
    });
}

// Check if milestone is completed
function isMilestoneCompleted(obstacleId, milestoneIndex) {
    return appState.milestones[`${obstacleId}-${milestoneIndex}`] === true;
}

// Get milestone completion date
function getMilestoneDate(obstacleId, milestoneIndex) {
    const key = `${obstacleId}-${milestoneIndex}`;
    return appState.milestones[`${key}-date`] || null;
}

// Toggle milestone completion
async function toggleMilestone(obstacleId, milestoneIndex, completed) {
    const key = `${obstacleId}-${milestoneIndex}`;
    const dateKey = `${key}-date`;
    
    if (completed) {
        appState.milestones[key] = true;
        appState.milestones[dateKey] = new Date().toLocaleDateString();
    } else {
        delete appState.milestones[key];
        delete appState.milestones[dateKey];
    }
    
    // Save to Supabase if online
    if (appState.isOnline && window.SupabaseAPI) {
        try {
            await SupabaseAPI.saveMilestone(obstacleId, milestoneIndex, completed);
        } catch (error) {
            console.error('Error saving milestone to Supabase:', error);
        }
    }
    
    await saveState();
    updateObstacleProgress(obstacleId);
    updateProgress();
    
    // Update the date display
    const dateElement = document.getElementById(`date-${obstacleId}-${milestoneIndex}`);
    if (dateElement) {
        dateElement.textContent = completed ? appState.milestones[dateKey] : '';
    }
}

// Get obstacle notes
function getObstacleNotes(obstacleId) {
    return appState.notes[obstacleId] || '';
}

// Save obstacle notes
async function saveObstacleNotes(obstacleId, notes) {
    appState.notes[obstacleId] = notes;
    
    // Save to Supabase if online
    if (appState.isOnline && window.SupabaseAPI) {
        try {
            await SupabaseAPI.saveNotes(obstacleId, notes);
        } catch (error) {
            console.error('Error saving notes to Supabase:', error);
        }
    }
    
    await saveState();
}

// Update obstacle progress
function updateObstacleProgress(obstacleId) {
    const obstacle = obstacles.find(o => o.id === obstacleId);
    if (!obstacle) return;
    
    const completed = obstacle.milestones.filter((_, index) => 
        isMilestoneCompleted(obstacleId, index)
    ).length;
    
    const total = obstacle.milestones.length;
    const percentage = (completed / total) * 100;
    
    const progressElement = document.getElementById(`progress-${obstacleId}`);
    const fillElement = document.getElementById(`fill-${obstacleId}`);
    
    if (progressElement) {
        progressElement.textContent = `${completed}/${total}`;
    }
    
    if (fillElement) {
        fillElement.style.width = `${percentage}%`;
    }
}

// Update overall progress
function updateProgress() {
    let totalMilestones = 0;
    let completedMilestones = 0;
    let completedObstacles = 0;
    
    obstacles.forEach(obstacle => {
        const obstacleCompleted = obstacle.milestones.filter((_, index) => 
            isMilestoneCompleted(obstacle.id, index)
        ).length;
        
        totalMilestones += obstacle.milestones.length;
        completedMilestones += obstacleCompleted;
        
        if (obstacleCompleted === obstacle.milestones.length) {
            completedObstacles++;
        }
        
        updateObstacleProgress(obstacle.id);
    });
    
    const percentage = totalMilestones > 0 ? (completedMilestones / totalMilestones) * 100 : 0;
    
    document.getElementById('completed-milestones').textContent = completedMilestones;
    document.getElementById('total-milestones').textContent = totalMilestones;
    document.getElementById('completed-obstacles').textContent = completedObstacles;
    document.getElementById('progress-fill').style.width = `${percentage}%`;
}

// Start countdown timer
function startCountdown() {
    const raceDate = new Date('December 14, 2025');
    const timerElement = document.getElementById('countdown-timer');
    
    function updateCountdown() {
        const now = new Date();
        const timeLeft = raceDate - now;
        
        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            
            timerElement.textContent = `${days}d ${hours}h ${minutes}m`;
        } else {
            timerElement.textContent = 'Race Day!';
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 60000); // Update every minute
}
