document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: 'UTC',
      initialView: 'dayGridMonth',
      height: '100%',
      events: 'https://fullcalendar.io/demo-events.json'
    });
  
    calendar.render();
  });