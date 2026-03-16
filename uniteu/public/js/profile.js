let editing = false;

const interests = ["Technology","Sports","Photography","Music","Travel"];

function loadInterests(){
  const container = document.getElementById("interestTags");

  interests.forEach(i=>{
    const span = document.createElement("span");
    span.className = "tag";
    span.innerText = i;
    container.appendChild(span);
  });
}

function enableEdit(){
  editing = true;
  document.getElementById("nameInput").disabled = false;
  document.getElementById("bioInput").disabled = false;
  document.getElementById("editActions").classList.remove("hidden");
}

function cancelEdit(){
  location.reload();
}

function saveProfile(){
  editing = false;
  document.getElementById("nameInput").disabled = true;
  document.getElementById("bioInput").disabled = true;
  document.getElementById("editActions").classList.add("hidden");

  // later send to backend
}

function logout(){
  window.location.href = "login.html";
}

window.onload = loadInterests;