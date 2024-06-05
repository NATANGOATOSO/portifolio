const toggleButton = document.getElementById('toggleButton');
var cont = document.getElementById('contatos')

function toggleDarkMode() {
     document.body.classList.toggle('dark-mode');
     document.body.classList.toggle('light-mode');
     
     const icon = document.getElementById('modeicon');

     if (document.body.classList.contains('dark-mode')) {
          icon.textContent = "light_mode";
          cont.style.filter = "invert()";
     } else {
          icon.textContent = "dark_mode";
          cont.style.filter = "none";
     }
}

toggleButton.addEventListener('click', toggleDarkMode);
const icon = document.getElementById('modeicon');
var cont = document.getElementById('contatos')

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
     document.body.classList.add('dark-mode');
     icon.textContent = "light_mode";
} else {
     document.body.classList.add('light-mode');
     icon.textContent = "dark_mode"
}
