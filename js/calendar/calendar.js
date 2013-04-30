window.onload = function() {
  calvis.ready(main);
}

function main() {
  var calId = 'developer-calendar@google.com';

  var calendar = new calvis.Calendar();

  // set the CSS IDs for various visual components for the calendar container
  calendar.setCalendarBody('calendarBodyDiv');
  calendar.setStatusControl('statusControlDiv');
  calendar.setNavControl('navControlDiv');
  calendar.setViewControl('viewControlDiv');
  calendar.setEventCallback('mouseover', displayEvent);

  // set the calenar to pull data from this Google Calendar account
  calendar.setPublicCalendar(calId);  
  calendar.setLoginControl('loginControlDiv');  

  calendar.setDefaultView('month');
  // display the calendar
  calendar.render();  
}

function displayEvent(event) {    
  var title = event.getTitle().getText();  
  var date = event.getTimes()[0].getStartTime().getDate();
  var content = event.getContent().getText();  
  
  var eventHtml = [];
  eventHtml.push(date.toString());
  eventHtml.push('<br><br>');
  eventHtml.push('<b>Event title:</b> ');
  eventHtml.push(title);
  eventHtml.push('<br>');
  eventHtml.push('<br>');
  eventHtml.push('<b>Description:</b>');
  eventHtml.push('<p style="font-size: 11px;">');
  eventHtml.push(content); 
  eventHtml.push('</p>');
  eventHtml.push('<br>');

  document.getElementById('eventDisplayDiv').innerHTML = eventHtml.join('');
} 