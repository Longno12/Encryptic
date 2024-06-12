document.addEventListener('DOMContentLoaded', () => {
    const contactLink = document.querySelector('nav ul li:nth-child(5) a');
    const hiddenButtons = document.querySelector('.mt-8');

    const firstClickHandler = () => {
        contactLink.innerText = 'Mod List';
        hiddenButtons.classList.remove('hidden');
        contactLink.removeEventListener('click', firstClickHandler);
        contactLink.addEventListener('click', secondClickHandler);
    };

    const secondClickHandler = () => {
        window.location.href = '/';
    };

    contactLink.addEventListener('click', firstClickHandler);
});
