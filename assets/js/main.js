document.querySelectorAll('[data-year]').forEach((item) => { item.textContent = new Date().getFullYear(); });

const interStylesheet = document.createElement('link');
interStylesheet.rel = 'stylesheet';
interStylesheet.href = 'assets/css/inter.css';
document.head.append(interStylesheet);

const mediaStylesheet = document.createElement('link');
mediaStylesheet.rel = 'stylesheet';
mediaStylesheet.href = 'assets/css/media.css';
document.head.append(mediaStylesheet);

const channelsStylesheet = document.createElement('link');
channelsStylesheet.rel = 'stylesheet';
channelsStylesheet.href = 'assets/css/channels.css';
document.head.append(channelsStylesheet);

const overridesStylesheet = document.createElement('link');
overridesStylesheet.rel = 'stylesheet';
overridesStylesheet.href = 'assets/css/overrides.css';
document.head.append(overridesStylesheet);

const blackThemeStylesheet = document.createElement('link');
blackThemeStylesheet.rel = 'stylesheet';
blackThemeStylesheet.href = 'assets/css/black-theme.css';
document.head.append(blackThemeStylesheet);

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
  });
}

document.querySelectorAll('form[data-message]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.querySelector('.form-message').textContent = form.dataset.message;
  });
});
