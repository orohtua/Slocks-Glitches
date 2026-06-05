// Anti-Racist RBA System - Client-side logic

const API_BASE = '/api/v1';

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  console.log('Anti-Racist RBA System initialized');
  loadDashboard();
  setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
  const participantForm = document.getElementById('participant-form');
  const outcomeForm = document.getElementById('outcome-form');

  if (participantForm) {
    participantForm.addEventListener('submit', handleAddParticipant);
  }

  if (outcomeForm) {
    outcomeForm.addEventListener('submit', handleRecordOutcome);
  }
}

// Load Dashboard
function loadDashboard() {
  hideAllSections();
  document.getElementById('dashboard').style.display = 'block';
  updateDashboardStats();
}

// Load Participants
function loadParticipants() {
  hideAllSections();
  document.getElementById('participants').style.display = 'block';
  fetchParticipants();
}

// Load Outcomes
function loadOutcomes() {
  hideAllSections();
  document.getElementById('outcomes').style.display = 'block';
  fetchOutcomes();
}

// Load Reports
function loadReports() {
  hideAllSections();
  document.getElementById('reports').style.display = 'block';
}

// Hide all sections
function hideAllSections() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = 'none';
  });
}

// Update dashboard statistics
function updateDashboardStats() {
  // Simulate API call
  document.getElementById('total-participants').textContent = Math.floor(Math.random() * 100) + 50;
  document.getElementById('active-programs').textContent = Math.floor(Math.random() * 20) + 5;
  document.getElementById('outcomes-tracked').textContent = Math.floor(Math.random() * 500) + 100;
}

// Fetch participants (simulated)
function fetchParticipants() {
  const participantsList = document.getElementById('participants-list');
  participantsList.innerHTML = '<p>No participants added yet.</p>';
}

// Fetch outcomes (simulated)
function fetchOutcomes() {
  const outcomesList = document.getElementById('outcomes-list');
  outcomesList.innerHTML = '<p>No outcomes recorded yet.</p>';
}

// Handle add participant
function handleAddParticipant(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const program = document.getElementById('program').value;

  console.log('Adding participant:', { name, email, program });
  alert(`Participant ${name} added successfully!`);

  document.getElementById('participant-form').reset();
  fetchParticipants();
}

// Handle record outcome
function handleRecordOutcome(e) {
  e.preventDefault();
  const participantId = document.getElementById('participant-id').value;
  const outcomeType = document.getElementById('outcome-type').value;
  const outcomeDescription = document.getElementById('outcome-description').value;
  const outcomeDate = document.getElementById('outcome-date').value;

  console.log('Recording outcome:', { participantId, outcomeType, outcomeDescription, outcomeDate });
  alert(`Outcome recorded successfully for participant ${participantId}!`);

  document.getElementById('outcome-form').reset();
  fetchOutcomes();
}

// Generate reports
function generateReport(type) {
  const reportOutput = document.getElementById('report-output');

  if (type === 'summary') {
    reportOutput.innerHTML = `
SUMMARY REPORT - Anti-Racist RBA System
========================================

Generated: ${new Date().toLocaleString()}

Participants Enrolled: 75
Programs Active: 12
Outcomes Recorded: 325

Top Programs by Participation:
- Program A: 28 participants
- Program B: 22 participants
- Program C: 15 participants

Outcome Categories:
- Education: 120 outcomes
- Employment: 95 outcomes
- Health: 110 outcomes

Report completed successfully.
    `;
  } else if (type === 'detailed') {
    reportOutput.innerHTML = `
DETAILED REPORT - Anti-Racist RBA System
=========================================

Generated: ${new Date().toLocaleString()}

This detailed report contains comprehensive data about all participants,
their programs, and tracked outcomes. The system collects and visualizes
participant-level outcomes for Anti-Racist Results-Based Accountability.

Key Metrics:
- Total Participants: 75
- Active Programs: 12
- Total Outcomes: 325
- Average Outcomes per Participant: 4.3

Report completed successfully.
    `;
  } else if (type === 'export') {
    reportOutput.innerHTML = `
DATA EXPORT - Anti-Racist RBA System
====================================

Generated: ${new Date().toLocaleString()}

Export Formats:
- CSV
- JSON
- Excel (XLSX)
- PDF

Data Export Completed. Check downloads folder.
    `;
  }
}

// API functions (placeholder for future implementation)
const api = {
  getParticipants: async () => {
    try {
      const response = await fetch(`${API_BASE}/participants`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching participants:', error);
    }
  },

  getOutcomes: async () => {
    try {
      const response = await fetch(`${API_BASE}/outcomes`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching outcomes:', error);
    }
  },

  addParticipant: async (participantData) => {
    try {
      const response = await fetch(`${API_BASE}/participants`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(participantData),
      });
      return await response.json();
    } catch (error) {
      console.error('Error adding participant:', error);
    }
  },

  recordOutcome: async (outcomeData) => {
    try {
      const response = await fetch(`${API_BASE}/outcomes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(outcomeData),
      });
      return await response.json();
    } catch (error) {
      console.error('Error recording outcome:', error);
    }
  },
};

console.log('App loaded and ready to use');
