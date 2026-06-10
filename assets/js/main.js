const dictionary = {
  es: {
    navHome: 'Inicio',
    navAbout: 'Quién soy',
    navContact: 'Contáctame',
    navSocial: 'Redes',
    heroEyebrow: 'Sitio oficial',
    heroTitle: 'Bienvenidos al sitio oficial de Gio Zamora',
    heroCopy: 'Periodista independiente, creador de contenido, activista y fundador de Gio Global LLC.',
    heroContact: 'Comunícate con Gio',
    heroAbout: 'Conoce su historia',
    aboutLabel: '¿Quién es Gio Zamora?',
    aboutTitle: 'Una voz independiente para comunidades latinas en Estados Unidos y México.',
    bioOne: 'Gio Zamora es un periodista independiente, creador de contenido, activista y fundador de Gio Global LLC de 28 años. Se dedica a informar y apoyar a las comunidades latinas en Estados Unidos y México a través de reportajes de investigación y contenido digital de alto impacto.',
    bioTwo: 'Desde que inició su trabajo en el periodismo en 2022, Gio se ha enfocado en cubrir temas clave en la intersección de la seguridad, la inmigración y la política binacional entre México y Estados Unidos. Su trabajo combina investigación con un estilo de comunicación claro y directo, guiado por la verdad, la imparcialidad y la objetividad.',
    bioThree: 'Graduado de leyes en 2022, actualmente cursa una maestría en Administración y Políticas Públicas. Radica en Los Ángeles, California, donde desarrolla su trabajo a través de Gio Global LLC, una empresa de medios digital-first enfocada en contenido periodístico de calidad.',
    bioFour: 'Con más de un millón de seguidores en sus plataformas, Gio también dedica gran parte de su tiempo al estudio del panorama de seguridad en México y Estados Unidos, al apoyo a comunidades migrantes y al uso responsable de nuevas tecnologías para ampliar el alcance del periodismo.',
    sendwaveTitle: 'Reclama $20 usando el código ZAMORA',
    sendwaveCopy: 'Disponible para nuevos usuarios a través de Sendwave.',
    sendwaveButton: 'Reclamar $20',
    contactLabel: 'Contáctame',
    contactTitle: 'Comunícate con Gio',
    contactCopy: 'Si tienes alguna pregunta, comentario, duda, trabajas con medios o deseas colaborar de alguna manera, por favor comunícate.',
    formName: 'Nombre',
    formEmail: 'Correo electrónico',
    formPhone: 'Teléfono',
    formMessage: 'Mensaje',
    formSubmit: 'Enviar mensaje',
    socialLabel: 'Redes sociales',
    socialTitle: 'Sigue a Gio Zamora'
  },
  en: {
    navHome: 'Home',
    navAbout: 'About me',
    navContact: 'Contact me',
    navSocial: 'Social',
    heroEyebrow: 'Official website',
    heroTitle: 'Welcome to Gio Zamora official website',
    heroCopy: 'Independent journalist, content creator, activist, and founder of Gio Global LLC.',
    heroContact: 'Contact Gio',
    heroAbout: 'Learn his story',
    aboutLabel: 'Who is Gio Zamora?',
    aboutTitle: 'An independent voice for Latino communities in the United States and Mexico.',
    bioOne: 'Gio Zamora is a 28-year-old independent journalist, content creator, activist, and founder of Gio Global LLC. He informs and supports Latino communities in the United States and Mexico through rigorous investigative reporting and high-impact digital content.',
    bioTwo: 'Since beginning his journalism work in 2022, Gio has focused on key issues at the intersection of security, immigration, and binational politics between Mexico and the United States. His work combines deep research with clear, direct communication guided by truth, impartiality, and objectivity.',
    bioThree: 'A law graduate since 2022, Gio is currently pursuing a master’s degree in Administration and Public Policy. He is based in Los Angeles, California, where he develops his work through Gio Global LLC, a digital-first media company focused on quality journalism.',
    bioFour: 'With more than one million followers across his platforms, Gio also dedicates much of his time to studying the security landscape in Mexico and the United States, supporting migrant communities, and exploring the responsible use of new technologies to expand the reach of journalism.',
    sendwaveTitle: 'Claim $20 using code ZAMORA',
    sendwaveCopy: 'Available for new users through Sendwave.',
    sendwaveButton: 'Claim $20',
    contactLabel: 'Contact me',
    contactTitle: 'Contact Gio',
    contactCopy: 'If you have a question, comment, concern, work with the media, or would like to collaborate in any way, please get in touch.',
    formName: 'Name',
    formEmail: 'Email',
    formPhone: 'Phone',
    formMessage: 'Message',
    formSubmit: 'Send message',
    socialLabel: 'Social media',
    socialTitle: 'Follow Gio Zamora'
  }
};

const header = document.querySelector('[data-header]');
const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const languageButtons = document.querySelectorAll('[data-lang]');
const translatable = document.querySelectorAll('[data-i18n]');
const contactForm = document.querySelector('[data-contact-form]');

const syncHeader = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 12);
};

const setLanguage = (lang) => {
  document.documentElement.lang = lang;

  translatable.forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = dictionary[lang][key];
  });

  languageButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });
};

syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

nav.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get('name') || '';
  const email = formData.get('email') || '';
  const phone = formData.get('phone') || '';
  const message = formData.get('message') || '';
  const subject = encodeURIComponent(`Contacto desde giozamora.com - ${name}`);
  const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\n\nMensaje:\n${message}`);

  window.location.href = `mailto:info@giozamora.com?subject=${subject}&body=${body}`;
});
