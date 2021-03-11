const toggleButton = document.getElementById('toggle-button');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', show);

function show() {
    sidebar.classList.toggle('active');
}

// REMOVE SIDEBAR IF MAIN CONTENT IS CLICKED
const content = document.querySelector('.content');

content.addEventListener('click', () => {
    sidebar.classList.remove('active');
})