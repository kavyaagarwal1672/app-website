function generateTimetableHTML() {
    // Get the timetable table from localStorage (or show fallback message)
    return localStorage.getItem('timetableHTML') || '<p>No timetable found.</p>';
}
