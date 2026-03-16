let selectedYear = "";

function selectYear(el){
  document.querySelectorAll(".year").forEach(y => y.classList.remove("active"));
  el.classList.add("active");
  selectedYear = el.innerText;
  checkForm();
}

function checkForm(){
  const course = document.getElementById("courseSelect").value;
  document.getElementById("continueBtn").disabled = !(course && selectedYear);
}

function goBack(){
  window.location.href = "onboarding-university.html";
}

function goNext(){
  window.location.href = "onboarding-interests.html";
}