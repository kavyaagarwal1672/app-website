
// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Find the buttons in the HTML
    const addSubjectBtn = document.getElementById('addSubjectBtn');
    const generateBtn = document.getElementById('generateBtn');

    // Add click event listeners to the buttons
    addSubjectBtn.addEventListener('click', addSubjectField);
    generateBtn.addEventListener('click', generateTimetable);

    // --- Function to add a new subject input field ---
    function addSubjectField() {
        const container = document.getElementById('subjects-container');
        const subjectInputs = container.getElementsByClassName('subject');

        // Limit the number of subjects to 5
        if (subjectInputs.length >= 5) {
            alert("You can add a maximum of 5 subjects for the study session.");
            return;
        }
        
        const newEntry = document.createElement('div');
        newEntry.className = 'subject-entry';
        newEntry.innerHTML = `<input type="text" class="subject" placeholder="Subject ${subjectInputs.length + 1}">`;
        container.appendChild(newEntry);
    }

    // --- Main function to generate the timetable ---
    function generateTimetable() {
        // Get all input values from the form
        const startTimeInput = document.getElementById('startTime').value;
        const hobby = document.getElementById('hobby').value.trim();
        const subjectInputs = document.querySelectorAll('.subject');
        
        // Collect subject names, ignoring any empty fields
        let subjects = [];
        subjectInputs.forEach(input => {
            if (input.value.trim() !== '') {
                subjects.push(input.value.trim());
            }
        });

        // --- Input Validation ---
        if (!startTimeInput) {
            alert("Please select a start time.");
            return;
        }
        if (subjects.length === 0) {
            alert("Please add at least one subject.");
            return;
        }
        if (!hobby) {
            alert("Please enter a hobby for your break time.");
            return;
        }

        // --- Scheduling Logic ---
        const studySlots = 5;
        let schedule = [];

        // Fill the schedule array with subjects, using a placeholder for empty slots
        for (let i = 0; i < studySlots; i++) {
            schedule.push(subjects[i] || 'Free Study Slot');
        }
        
        // Place the hobby in the middle of the schedule to act as a break
        const hobbyPosition = Math.floor(studySlots / 2) + 1;
        schedule.splice(hobbyPosition, 0, hobby);

        // --- Generate Table HTML ---
        const outputDiv = document.getElementById('timetable-output');
        
        // Start building the HTML string for the table
        let tableHTML = `
            <h2>Your 6-Hour Study Plan</h2>
            <table>
                <thead>
                    <tr>
                        <th>Time Slot</th>
                        <th>Activity</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        let currentTime = new Date(`1970-01-01T${startTimeInput}:00`);

        // Loop 6 times to create 6 one-hour slots
        for (let i = 0; i < 6; i++) {
            const slotStart = new Date(currentTime);
            // Increment the hour for the next loop
            currentTime.setHours(currentTime.getHours() + 1);
            const slotEnd = new Date(currentTime);

            // Format time to a readable AM/PM format
            const timeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
            const startTimeStr = slotStart.toLocaleTimeString('en-US', timeFormatOptions);
            const endTimeStr = slotEnd.toLocaleTimeString('en-US', timeFormatOptions);
            
            const activity = schedule[i];
            const isHobby = (activity === hobby);
            // Add a special class to the table row if it's the hobby slot
            const rowClass = isHobby ? 'class="hobby-row"' : '';

            // Append the table row to our HTML string
            tableHTML += `
                <tr ${rowClass}>
                    <td>${startTimeStr} - ${endTimeStr}</td>
                    <td>${activity}</td>
                </tr>
            `;
        }

        tableHTML += `</tbody></table>`;
        
        // --- Display the final table on the page ---
        outputDiv.innerHTML = tableHTML;
    
        // --- Display the final table on the page ---
outputDiv.innerHTML = tableHTML;

// Create Proceed button (unstyled)
const proceedButton = document.createElement('button');
proceedButton.textContent = "Proceed";

// Add to output div
outputDiv.appendChild(proceedButton);

// Redirect when clicked
proceedButton.addEventListener('click', () => {
  localStorage.setItem('timetableHTML', tableHTML);  
  window.location.href = "app1.html";
});

  }

});
