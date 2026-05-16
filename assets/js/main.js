
document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => document.body.classList.remove('nav-open'));
});

const sections = [...document.querySelectorAll('section[id]')];
const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];

function setActiveNav(){
  const scrollY = window.scrollY + 120;
  let current = sections[0]?.id;
  for (const section of sections){
    if(section.offsetTop <= scrollY) current = section.id;
  }
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', setActiveNav, {passive:true});
setActiveNav();
