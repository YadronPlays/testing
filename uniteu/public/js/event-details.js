// simulated event data (later from database)
const eventData = {
  title: "Spring Concert: The Indie Collective",
  category: "Music",
  date: "March 15, 2026",
  time: "7:00 PM – 10:00 PM",
  location: "University Auditorium",
  attendees: 234,
  description:
    "Join us for an unforgettable evening featuring local indie bands and student musicians.",
  organizer: "Student Events Committee",
  organizerAvatar: "SE",
  emoji: "🎵"
};

function loadEvent(){
  document.getElementById("eventHero").textContent = eventData.emoji;
  document.getElementById("eventCategory").textContent = eventData.category;
  document.getElementById("eventTitle").textContent = eventData.title;
  document.getElementById("eventDate").textContent = eventData.date;
  document.getElementById("eventTime").textContent = eventData.time;
  document.getElementById("eventLocation").textContent = eventData.location;
  document.getElementById("eventAttendees").textContent =
    eventData.attendees + " students attending";
  document.getElementById("eventDescription").textContent =
    eventData.description;
  document.getElementById("organizerName").textContent = eventData.organizer;
  document.getElementById("organizerAvatar").textContent =
    eventData.organizerAvatar;
}

function goBack(){
  window.location.href = "events.html";
}

window.onload = loadEvent;