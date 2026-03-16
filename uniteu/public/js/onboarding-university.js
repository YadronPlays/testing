const universities = [
  "Harvard University",
  "Stanford University",
  "MIT",
  "University of Cambridge",
  "University of Oxford",
  "Imperial College London",
  "University College London",
  "University of Manchester",
  "University of Birmingham",
  "University of Leeds",
  "University of Nottingham",
  "University of Bristol"
];

let selectedUniversity = "";

function renderUniversities(list){
  const container = document.getElementById("universityList");
  container.innerHTML = "";

  list.forEach(name => {
    const div = document.createElement("div");
    div.className = "university-item";
    div.innerText = name;

    div.onclick = () => selectUniversity(div, name);

    container.appendChild(div);
  });
}

function selectUniversity(el, name){
  document.querySelectorAll(".university-item")
    .forEach(i => i.classList.remove("active"));

  el.classList.add("active");
  selectedUniversity = name;

  document.getElementById("continueBtn").disabled = false;
}

function filterUniversities(){
  const search = document.getElementById("searchInput").value.toLowerCase();
  const filtered = universities.filter(u =>
    u.toLowerCase().includes(search)
  );
  renderUniversities(filtered);
}

function goBack(){
  window.location.href = "login.html";
}

function goNext(){
  // later save university to database
  window.location.href = "onboarding-course.html";
}

window.onload = () => renderUniversities(universities);