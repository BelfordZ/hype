window.onload = function() {
  calvis.ready(main);
}

function main() {
  var calId = '0a9obnn6f18bjh1aneqs1if6jk@group.calendar.google.com';

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

  calendar.setDefaultView('week');
  // display the calendar
  calendar.render();  
}

function displayEvent(event) {    
  var title = event.getTitle().getText();  
  var date = event.getTimes()[0].getStartTime().getDate();
  var content = event.getContent().getText();

  content = $.parseJSON(content);
  
  var eventHtml = [];
  eventHtml.push('<div class=\"well\">');
   
  eventHtml.push('<p><b>Class Scheduled:</b> ');
  eventHtml.push(title);
  eventHtml.push('</p>');
  
  eventHtml.push('<p><b>Age Group: </b>');
  eventHtml.push(content.age);
  eventHtml.push('</p>');

  eventHtml.push('<p><b>Location: </b>');
  eventHtml.push(content.location);
  eventHtml.push('</p>');
 
 
  
  if (content.info != "") {
     eventHtml.push('<p><b>Info: </b>');
     eventHtml.push(content.info);
     eventHtml.push('</p>');
  }
  eventHtml.push('</div>');

  document.getElementById('eventDisplayDiv').innerHTML = eventHtml.join('');
} 