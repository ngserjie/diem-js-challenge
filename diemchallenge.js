let nameInput = document.getElementById('name');
let nameOutput = document.getElementById('nameOutput');

nameInput.onblur = nameInputBlur;
nameInput.onfocus = nameInputFocus;

function nameInputBlur() {
  nameOutput.textContent = `Hi, ${nameInput.value}!`;
}

function nameInputFocus() {
  if (nameInput.value == "") {
    nameOutput.textContent = "Hello there! What's your name?";
  } else {
    nameOutput.textContent = `Hi, ${nameInput.value}!`;
  }
}

function calculateAge(dobInput) { 
    let dob = new Date(dobInput); 
    let month_diff = Date.now() - dob.getTime(); 
    let age_dt = new Date(month_diff);
    return Math.abs(age_dt.getUTCFullYear() - 1970); 
}

let ageInput = document.getElementById('date');
let ageOutput = document.getElementById('ageOutput');

ageInput.onblur = ageInputBlur;
ageInput.onfocus = ageInputFocus;

function ageInputBlur() {
  if (ageInput.value == ""){
    ageOutput.textContent = "Would you mind entering your birthday?"
  } else {
    ageOutput.textContent = `Your age is ${calculateAge(ageInput.value)} years old!`;
  }
}

function ageInputFocus() {
  if (ageInput.value == "") {
    ageOutput.textContent = "Lemme guess, your age is...";
  } else {
    ageOutput.textContent = `Your age is ${calculateAge(ageInput.value)} years old!`;
  }
}

let themeOutput = document.getElementById('themeOutput');

let lightMode = document.getElementById('light');
lightMode.onchange = lightChange;


function lightChange() {
    modeChange(lightMode);
    let output = document.getElementsByTagName("P");
    let sheet = document.createElement('style')
    sheet.innerHTML = "div {color:black; background-color: #f8f9fa;}";
    themeOutput.appendChild(sheet);
}
  

let darkMode = document.getElementById('dark');
darkMode.onchange = darkChange;

function darkChange() {
  modeChange(darkMode)
}

function modeChange(modeOpt){
  let themeMode = modeOpt.value;
  themeOutput.textContent = `You chose ${themeMode} Mode!`;
}

let skillsOutput = document.getElementById('skillsOutput');

let htmlOption = document.getElementById('html');
htmlOption.onclick = addHtml;

let cssOption = document.getElementById('css');
cssOption.onclick = addCss;

let jsOption = document.getElementById('javascript');
jsOption.onclick = addJs;

function addHtml(){
  htmlOption.parentNode.removeChild(htmlOption);
  addSkills(htmlOption)
}
function addCss(){
  cssOption.parentNode.removeChild(cssOption);
  addSkills(cssOption)
}
function addJs(){
  jsOption.parentNode.removeChild(jsOption);
  addSkills(jsOption)
}
function addSkills(skillsOption) {
  let newButton = document.createElement("div");
  newButton.id = 'mybutton';
  newButton.innerHTML = skillsOption.getAttribute('id'); 
  newButton.classList.add("btn");
  newButton.classList.add("btn-sm");
  newButton.classList.add("btn-success");
  skillsOutput.appendChild(newButton);

newButton.onmouseover = logMouseOver;
newButton.onmouseout = logMouseOut;

function logMouseOver() { 
  newButton.classList.add('btn-danger');
}

function logMouseOut() {
  newButton.classList.remove('btn-danger');
}
}
