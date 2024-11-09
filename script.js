// Calendar data for October and November 2024
const months = {
    october: { name: 'October 2024', days: 31, startDay: 2 }, // October starts on a Tuesday (0=Sunday)
    november: { name: 'November 2024', days: 30, startDay: 5 } // November starts on a Friday
};

// Space events for October and November
const events = {
    october: {
        1: "Asteroid 15 Eunomia at Opposition",
        4: "Launch of a private space mission",
        6: "International Observe the Moon Night",
        8: "Draconids Meteor Shower Peak",
        10: "Jupiter at Opposition",
        14: "Annular Solar Eclipse",
        18: "Lunar occultation of Jupiter",
        20: "Asteroid 19 Fortuna at Opposition",
        21: "Orionids Meteor Shower Peak",
        22: "SpaceX Starlink satellite launch",
        25: "Lunar Occultation of Venus",
        31: "Uranus at Opposition"
    },
    november: {
        1: "South Taurids Meteor Shower",
        4: "Taurids Meteor Shower Peak",
        5: "SpaceX Crew Dragon mission launch",
        8: "Conjunction of the Moon and Mars",
        11: "New Moon – Good for Deep Sky Observing",
        12: "Total Solar Eclipse (visible in Antarctica)",
        13: "Asteroid 8 Flora at Opposition",
        16: "Asteroid 4 Vesta reaches perihelion",
        17: "Leonids Meteor Shower Peak",
        21: "Launch of a Mars probe by NASA",
        27: "Full Beaver Moon",
        30: "Lunar Occultation of Saturn"
    }

};

// Function to show a specific month
function showMonth(month) {
    const monthData = months[month];
    const calendarDiv = document.getElementById('calendar');
    calendarDiv.innerHTML = `
        <h2>${monthData.name}</h2>
        <table class="calendar-table">
            <thead>
                <tr>
                    <th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
                </tr>
            </thead>
            <tbody>
                ${generateCalendar(monthData, month)}
            </tbody>
        </table>
    `;
}

// Function to generate the calendar HTML for a month, including events
function generateCalendar(monthData, month) {
    let html = '<tr>';
    for (let i = 0; i < monthData.startDay; i++) {
        html += '<td></td>'; // Empty cells for the first week
    }

    for (let day = 1; day <= monthData.days; day++) {
        const today = new Date();
        const isToday = (today.getMonth() + 1 === new Date(monthData.name).getMonth() + 1) && today.getDate() === day;
        
        // Check if there's an event for the day
        const event = events[month]?.[day] || '';
        html += `<td class="${isToday ? 'today' : ''}">
                    <div>${day}</div>
                    <div class="event">${event}</div>
                 </td>`;
        
        if ((day + monthData.startDay) % 7 === 0) {
            html += '</tr><tr>'; // Start a new row every Sunday
        }
    }
    html += '</tr>';
    return html;
}

// Initialize with October shown
showMonth('october');