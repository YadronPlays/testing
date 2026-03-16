const interests = [
  "Sports & Fitness","Music","Art & Design","Gaming","Technology",
  "Reading","Photography","Travel","Cooking","Volunteering",
  "Entrepreneurship","Film & Cinema","Theater","Dance","Writing",
  "Coding","Environment","Politics","Fashion","Debate"
];

let selected = [];

function renderInterests(){
  const grid = document.getElementById("interestsGrid");

  interests.forEach(name => {
    const div = document.createElement("div");
    div.className = "interest-item";
    div.innerText = name;

    div.onclick = () => toggleInterest(div, name);

    grid.appendChild(div);
  });
}

function toggleInterest(el, name){
  if(selected.includes(name)){
    selected = selected.filter(i => i !== name);
    el.classList.remove("active");
    el.innerHTML = name;
  } else {
    selected.push(name);
    el.classList.add("active");
    el.innerHTML = name + '<span class="checkmark">✓</span>';
  }

  updateButton();
}

function updateButton(){
  const btn = document.getElementById("completeBtn");
  const warning = document.getElementById("interestWarning");

  btn.disabled = selected.length < 3;

  if(selected.length > 0 && selected.length < 3){
    warning.innerText = 
      "Select " + (3 - selected.length) + " more interest(s)";
  } else {
    warning.innerText = "";
  }
}

function goBack(){
  window.location.href = "onboarding-course.html";
}

function completeSetup(){
  // later store interests in database
  window.location.href = "home.html";
}

window.onload = renderInterests;