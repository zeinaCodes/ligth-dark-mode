const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or light Images
function imageMode(color) {
image1.src = `img/undraw_web_development_${color}.svg`;
image2.src = `img/undraw_my_code_snippets_${color}.svg`;
image3.src = `img/undraw_programmer_${color}.svg`;
}

// Toggle Icon and text
function iconMode(color, remIcon, icon){
    toggleIcon.children[0].textContent = `${color} Mode`;
    toggleIcon.children[1].classList.remove(`fa-${remIcon}`);
    toggleIcon.children[1].classList.add(`fa-${icon}`);
}

// Dark Mode Styles
function darkMode() {
nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
iconMode('Dark', 'sun', 'moon')
imageMode('dark');
}

// Light Mode Styles
function lightMode() {
nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
iconMode('Light', 'moon', 'sun')
imageMode('light');
}

// switch theme dynamically
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

// event listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        darkMode();
    }
}
