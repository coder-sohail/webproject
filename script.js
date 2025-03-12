const timeTable = {
    Monday: {
        '9:30-11:00': { subject: 'Data Visualization', type: 'regular', professor: 'LR', professorName: 'Lachi Ram' },
        '11:00-11:45': { subject: 'Advanced Engineering Mathematics', type: 'regular', professor: 'DSN', professorName: 'DS Nanda' },
        '11:45-12:30': { subject: 'Advanced Engineering Mathematics', type: 'regular', professor: 'DSN', professorName: 'DS Nanda' },
        '12:30-1:15': { subject: 'Python Programming for AI', type: 'regular', professor: 'KMA', professorName: 'KM Aravind' },
        '1:15-1:45': { subject: 'Lunch Break', type: 'L' },
        '1:45-3:15': { subject: 'Relational Database Management Systems', type: 'regular', professor: 'AB', professorName: 'Asheera Begum' },
        '3:15-4:00': { subject: 'Skill Upgradation', type: 'regular', professor: 'LR', professorName: 'Lachi Ram' }
    },
    Tuesday: {
        '9:30-11:00': { subject: 'Python Programming for AI', type: 'regular', professor: 'KMA', professorName: 'KM Aravind' },
        '11:00-11:45': { subject: 'Relational Database Management Systems', type: 'regular', professor: 'AB', professorName: 'Asheera Begum' },
        '11:45-12:30': { subject: 'Advanced Engineering Mathematics', type: 'regular', professor: 'DSN', professorName: 'DS Nanda' },
        '12:30-1:15': { subject: 'Data Visualization', type: 'regular', professor: 'LR', professorName: 'Lachi Ram' },
        '1:15-1:45': { subject: 'Lunch Break', type: 'U' },
        '1:45-3:15': { subject: 'RDBMS Lab', type: 'lab', professor: 'AB', professorName: 'Asheera Begum' },
        '3:15-4:00': { subject: 'RDBMS Lab', type: 'lab', professor: 'AB', professorName: 'Asheera Begum' }
    },
    Wednesday: {
        '9:30-11:00': { subject: 'Relational Database Management Systems', type: 'regular', professor: 'AB', professorName: 'Asheera Begum' },
        '11:00-11:45': { subject: 'Computer Hardware and Networking', type: 'regular', professor: 'BP', professorName: 'B Pushyami' },
        '11:45-12:30': { subject: 'Data Visualization', type: 'regular', professor: 'LR', professorName: 'Lachi Ram' },
        '12:30-1:15': { subject: 'Data Visualization', type: 'regular', professor: 'LR', professorName: 'Lachi Ram' },
        '1:15-1:45': { subject: 'Lunch Break', type: 'N' },
        '1:45-3:15': { subject: 'Python Programming Lab', type: 'lab', professor: 'KMA', professorName: 'KM Aravind' },
        '3:15-4:00': { subject: 'Python Programming Lab', type: 'lab', professor: 'KMA', professorName: 'KM Aravind' }
    },
    Thursday: {
        '9:30-11:00': { subject: 'Computer Hardware and Networking', type: 'regular', professor: 'BP', professorName: 'B Pushyami' },
        '11:00-11:45': { subject: 'Python Programming for AI', type: 'regular', professor: 'KMA', professorName: 'KM Aravind' },
        '11:45-12:30': { subject: 'Python Programming for AI', type: 'regular', professor: 'KMA', professorName: 'KM Aravind' },
        '12:30-1:15': { subject: 'Skill Upgradation', type: 'regular', professor: 'KMA', professorName: 'KM Aravind' },
        '1:15-1:45': { subject: 'Lunch Break', type: 'C' },
        '1:45-3:15': { subject: 'Computer Hardware Lab', type: 'lab', professor: 'BP', professorName: 'B Pushyami' },
        '3:15-4:00': { subject: 'Computer Hardware Lab', type: 'lab', professor: 'BP', professorName: 'B Pushyami' }
    },
    Friday: {
        '9:30-11:00': { subject: 'Advanced Engineering Mathematics', type: 'regular', professor: 'DSN', professorName: 'DS Nanda' },
        '11:00-11:45': { subject: 'Skill Upgradation', type: 'regular', professor: 'LR', professorName: 'Lachi Ram' },
        '11:45-12:30': { subject: 'Skill Upgradation', type: 'regular', professor: 'LR', professorName: 'Lachi Ram' },
        '12:30-1:15': { subject: 'Skill Upgradation', type: 'regular', professor: 'BP', professorName: 'B Pushyami' },
        '1:15-1:45': { subject: 'Lunch Break', type: 'H' },
        '1:45-3:15': { subject: 'Data Visualization Lab', type: 'lab', professor: 'LR', professorName: 'Lachi Ram' },
        '3:15-4:00': { subject: 'Data Visualization Lab', type: 'lab', professor: 'LR', professorName: 'Lachi Ram' }
    },
    Saturday: {
        '9:30-11:00': { subject: 'Computer Hardware and Networking', type: 'regular', professor: 'BP', professorName: 'B Pushyami' },
        '11:00-11:45': { subject: 'Skill Upgradation', type: 'regular', professor: 'AB', professorName: 'Asheera Begum' },
        '11:45-12:30': { subject: 'Skill Upgradation', type: 'regular', professor: 'AB', professorName: 'Asheera Begum' },
        '12:30-1:15': { subject: 'Skill Upgradation', type: 'regular', professor: 'AB', professorName: 'Asheera Begum' },
        '1:15-1:45': { subject: 'Lunch Break', type: 'BREAK' },
        '1:45-3:15': { subject: 'Employability Skills Lab', type: 'lab', professor: 'VR', professorName: 'Visiting Faculty' },
        '3:15-4:00': { subject: 'Employability Skills Lab', type: 'lab', professor: 'VR', professorName: 'Visiting Faculty' }
    }
};

const timeSlots = [
    '9:30-11:00',
    '11:00-11:45',
    '11:45-12:30',
    '12:30-1:15',
    '1:15-1:45',
    '1:45-3:15',
    '3:15-4:00'
];

let favorites = JSON.parse(localStorage.getItem('favoriteProfs') || '[]');
let isDarkMode = localStorage.getItem('darkMode') === 'true';

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
    const themeIcon = document.getElementById('themeIcon');
    themeIcon.src = isDarkMode ? 'https://api.iconify.design/ph/sun-bold.svg?color=white' : 'https://api.iconify.design/ph/moon-bold.svg?color=black';
}

function populateTimeTable() {
    const tbody = document.getElementById('timetableBody');
    tbody.innerHTML = '';
    
    for (const [day, slots] of Object.entries(timeTable)) {
        const row = document.createElement('tr');
        const dayCell = document.createElement('td');
        dayCell.textContent = day;
        row.appendChild(dayCell);
        
        for (const time of timeSlots) {
            const slot = slots[time];
            const td = document.createElement('td');
            
            if (slot.type === 'lunch') {
                td.classList.add('lunch-break');
            } else if (slot.type === 'lab') {
                td.classList.add('lab-session');
            }
            
            td.innerHTML = `
                <div>${slot.subject}</div>
                ${slot.professor ? `<div class="professor">(${slot.professor})</div>` : ''}
            `;
            
            row.appendChild(td);
        }
        
        tbody.appendChild(row);
    }
    updateCurrentClass();
}

function updateCurrentClass() {
    const now = new Date();
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
    const currentTime = now.toLocaleTimeString('en-US', { hour12: false });
    
    document.querySelectorAll('.current-class').forEach(el => el.classList.remove('current-class'));
    
    const classesEndedMsg = document.querySelector('.classes-ended');
    const isClassTime = currentTime >= '09:30:00' && currentTime <= '16:00:00';
    const isWeekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].includes(currentDay);
    
    if (!isClassTime || !isWeekday) {
        if (classesEndedMsg) {
            classesEndedMsg.classList.add('visible');
        }
        return;
    }
    
    if (classesEndedMsg) {
        classesEndedMsg.classList.remove('visible');
    }

    const currentSlot = timeSlots.find((slot) => {
        const [start, end] = slot.split('-');
        const [startHour, startMin] = start.split(':');
        const [endHour, endMin] = end.split(':');
        
        const slotStart = `${startHour.padStart(2, '0')}:${startMin}:00`;
        const slotEnd = `${endHour.padStart(2, '0')}:${endMin}:00`;
        
        return currentTime >= slotStart && currentTime < slotEnd;
    });

    if (currentSlot) {
        const rows = document.querySelectorAll('#timetableBody tr');
        let currentDayRow;
        rows.forEach(row => {
            if (row.firstChild.textContent === currentDay) {
                currentDayRow = row;
            }
        });

        if (currentDayRow) {
            const slotIndex = timeSlots.indexOf(currentSlot) + 1;
            const currentCell = currentDayRow.children[slotIndex];
            if (currentCell) {
                currentCell.classList.add('current-class');
            }
        }
    }
}

function getProfessorDetails() {
    const professors = {};
    
    // Initialize all professors with 0 hours
    for (const daySchedule of Object.values(timeTable)) {
        for (const slot of Object.values(daySchedule)) {
            if (slot.professor && !professors[slot.professor]) {
                professors[slot.professor] = {
                    name: slot.professorName || 'Unknown',
                    subjects: new Set(),
                    hours: 0
                };
            }
        }
    }
    
    // Calculate hours properly
    for (const daySchedule of Object.values(timeTable)) {
        for (const [time, slot] of Object.entries(daySchedule)) {
            if (slot.type !== 'lunch' && slot.professor) {
                professors[slot.professor].subjects.add(slot.subject);
                
                // Parse time properly
                const [start, end] = time.split('-');
                const [startHour, startMin] = start.split(':').map(Number);
                const [endHour, endMin] = end.split(':').map(Number);
                
                // Calculate duration in hours
                let duration = 0;
                if (endHour > startHour || (endHour === startHour && endMin > startMin)) {
                    duration = (endHour - startHour) + (endMin - startMin) / 60;
                }
                
                professors[slot.professor].hours += Math.abs(duration);
            }
        }
    }
    
    return professors;
}

function toggleFavorite(profCode) {
    const index = favorites.indexOf(profCode);
    if (index === -1) {
        favorites.push(profCode);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem('favoriteProfs', JSON.stringify(favorites));
    populateProfessorTable();
}

function populateProfessorTable() {
    const tbody = document.getElementById('professorTableBody');
    const professors = getProfessorDetails();
    tbody.innerHTML = '';
    
    for (const [code, details] of Object.entries(professors)) {
        const row = document.createElement('tr');
        const isFavorite = favorites.includes(code);
        row.innerHTML = `
            <td>${code}</td>
            <td>${details.name}</td>
            <td>${Array.from(details.subjects).join(', ')}</td>
            <td>${details.hours.toFixed(1)}</td>
            <td>
                <button onclick="toggleFavorite('${code}')" class="star-btn ${isFavorite ? 'active' : ''}">
                    ★
                </button>
            </td>
        `;
        tbody.appendChild(row);
    }
}

function toggleStats() {
    const timetableCard = document.querySelector('.timetable-card');
    const professorCard = document.querySelector('.professor-card');
    const statsContainer = document.getElementById('stats');
    const statsButtonText = document.getElementById('statsButtonText');
    const isHidden = statsContainer.style.display === 'none';
    
    statsContainer.style.opacity = '0';
    timetableCard.style.opacity = isHidden ? '0' : '1';
    professorCard.style.opacity = isHidden ? '0' : '1';
    
    setTimeout(() => {
        statsContainer.style.display = isHidden ? 'block' : 'none';
        timetableCard.style.display = isHidden ? 'none' : 'block';
        professorCard.style.display = isHidden ? 'none' : 'block';
        
        setTimeout(() => {
            statsContainer.style.opacity = isHidden ? '1' : '0';
            timetableCard.style.opacity = isHidden ? '0'
 : '1';
            professorCard.style.opacity = isHidden ? '0' : '1';
        }, 50);
    }, 300);
    
    statsButtonText.textContent = isHidden ? 'Hide Stats' : 'Show Stats';
    
    if (isHidden) {
        createCharts();
    }
}

function calculateStats() {
    const stats = {
        subjectDistribution: {},
        totalHours: 0,
        labHours: 0,
        busyDays: []
    };
    
    for (const [day, slots] of Object.entries(timeTable)) {
        let dayHours = 0;
        
        for (const [time, slot] of Object.entries(slots)) {
            if (slot.type !== 'lunch') {
                const [start, end] = time.split('-');
                const [startHour, startMin] = start.split(':').map(Number);
                const [endHour, endMin] = end.split(':').map(Number);
                
                const duration = (endHour - startHour) + (endMin - startMin) / 60;
                dayHours += duration;
                
                if (slot.type === 'lab') {
                    stats.labHours += duration;
                }
                
                if (slot.subject !== 'Lunch Break') {
                    stats.subjectDistribution[slot.subject] = (stats.subjectDistribution[slot.subject] || 0) + duration;
                }
            }
        }
        
        stats.busyDays.push({ day, hours: dayHours });
        stats.totalHours += dayHours;
    }
    
    return stats;
}

function createCharts() {
    const stats = calculateStats();
    
    new Chart(document.getElementById('subjectPieChart'), {
        type: 'pie',
        data: {
            labels: Object.keys(stats.subjectDistribution),
            datasets: [{
                data: Object.values(stats.subjectDistribution),
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
                    '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    new Chart(document.getElementById('dayBarChart'), {
        type: 'bar',
        data: {
            labels: stats.busyDays.map(d => d.day),
            datasets: [{
                label: 'Hours per Day',
                data: stats.busyDays.map(d => d.hours),
                backgroundColor: '#36A2EB'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(document.getElementById('typesPieChart'), {
        type: 'pie',
        data: {
            labels: ['Theory Hours', 'Lab Hours'],
            datasets: [{
                data: [stats.totalHours - stats.labHours, stats.labHours],
                backgroundColor: ['#FF6384', '#36A2EB']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    const professors = getProfessorDetails();
    const profData = Object.entries(professors).map(([code, details]) => ({
        code,
        hours: Math.round(details.hours * 10) / 10
    }));

    new Chart(document.getElementById('professorBarChart'), {
        type: 'bar',
        data: {
            labels: profData.map(p => p.code),
            datasets: [{
                label: 'Hours per Professor',
                data: profData.map(p => p.hours),
                backgroundColor: '#4BC0C0'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Hours'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.parsed.y} hours`;
                        }
                    }
                }
            }
        }
    });
}

function exportToPDF() {
    window.print();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = `<img id="themeIcon" src="https://api.iconify.design/ph/moon-bold.svg?color=black" alt="Theme Toggle">`;
    themeToggle.onclick = toggleDarkMode;
    document.body.appendChild(themeToggle);
    
    const classesEndedMsg = document.createElement('div');
    classesEndedMsg.className = 'classes-ended';
    classesEndedMsg.innerHTML = '<h3>Classes have ended for the day</h3>';
    document.querySelector('.container').appendChild(classesEndedMsg);
    
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    
    populateTimeTable();
    populateProfessorTable();
    document.getElementById('lastUpdated').textContent = new Date().toLocaleDateString();
    
    setInterval(updateCurrentClass, 60000);
});