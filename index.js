document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('menu');
    const menu = document.getElementById('dropdownMenu');
    const header = document.getElementById('header');
    const recommendations = document.getElementById('recommendations');
    const recommend = document.getElementById('recommend');
    button.addEventListener('mouseover', () => {
        menu.classList.toggle('hidden');
    });

    document.addEventListener('mouseover', function (event) {
        if (!button.contains(event.target) && !menu.contains(event.target) && !header.contains(event.target)) {
            menu.classList.add('hidden');
        }
    });

    recommendations.addEventListener('click',() => {
        heroText.classList.toggle('hidden');
        recommend.classList.toggle('hidden');
    });
});
