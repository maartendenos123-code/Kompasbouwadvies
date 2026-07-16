
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if(toggle && nav){
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => nav?.classList.remove('open'));
});
const year = document.querySelector('[data-year]');
if(year) year.textContent = new Date().getFullYear();

const contactForm = document.querySelector('#contact-form');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(contactForm);
    const subject = encodeURIComponent('Websiteaanvraag: ' + (data.get('dienst') || 'Bouwkundig advies'));
    const body = encodeURIComponent(
      'Naam: ' + data.get('naam') + '\n' +
      'Telefoon: ' + data.get('telefoon') + '\n' +
      'E-mail: ' + data.get('email') + '\n' +
      'Dienst: ' + data.get('dienst') + '\n\n' +
      'Bericht:\n' + data.get('bericht')
    );
    window.location.href = 'mailto:info@kompasbouwadvies.nl?subject=' + subject + '&body=' + body;
  });
}
