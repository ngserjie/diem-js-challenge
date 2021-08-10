let nameInput = document.getElementById('name');
let nameOutput = document.getElementById('nameOutput');

nameInput.onblur = nameInputBlur;
nameInput.onfocus = nameInputFocus;

function nameInputBlur() {
  let nameUser = document.getElementById("name").value;
  nameOutput.textContent = `Hi, ${nameUser}!`;
}

function nameInputFocus() {
  nameOutput.textContent = "Hello there! What's your name?";
}

let ageInput = document.getElementById('date');
let ageOutput = document.getElementById('ageOutput');

ageInput.onblur = ageInputBlur;
ageInput.onfocus = ageInputFocus;

function calculateAge(dobInput) { 
    let dob = new Date(dobInput); 
    let month_diff = Date.now() - dob.getTime(); 
    let age_dt = new Date(month_diff);
    return Math.abs(age_dt.getUTCFullYear() - 1970); 
}

function ageInputBlur() {
  let ageU = document.getElementById("date").value;
  let ageUser = calculateAge(ageU)
  if (ageUser){
    ageOutput.textContent = `Your age is ${ageUser} years old!`;
  } else {
    ageOutput.textContent = "Would you mind entering your birthday?"
  }
}

function ageInputFocus() {
  ageOutput.textContent = "Lemme guess, your age is...";
}

let themeOutput = document.getElementById('themeOutput');

let lightMode = document.getElementById('light');
lightMode.onchange = lightChange;

var cssStyle = document.getElementById('style');

window.onload = function(){
    if(localStorage && localStorage.getItem("style"))
        cssStyle.href = localStorage.getItem("style");
};

function setStyle(newStyle){
    cssStyle.href = newStyle;

    if(localStorage)
        localStorage.setItem("style", newStyle);
};

function lightChange() {
    modeChange(lightMode);
    let link = document.createElement( "link" );
    link.href = "light.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    document.body.appendChild(link);
}
  

let darkMode = document.getElementById('dark');
darkMode.onchange = darkChange;

function darkChange() {
  modeChange(darkMode)
  let link = document.createElement( "link" );
  link.href = "dark.css";
  link.type = "text/css";
  link.rel = "stylesheet";
  link.media = "screen,print";
  document.body.appendChild(link);
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
  addSkills(htmlOption)
}
function addCss(){
  addSkills(cssOption)
}
function addJs(){
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
