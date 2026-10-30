
const dictionary = {
  es: {
    navHome: 'Inicio',
    navAbout: 'Quién soy',
    navContact: 'Contáctame',
    navSocial: 'Redes',

    heroEyebrow: 'Sitio oficial',
    heroTitle: 'Bienvenidos al sitio oficial de Gio Zamora',
    heroCopy: 'Periodista independiente mexicano, creador de contenido digital y fundador de Global Media Today LLC.',
    heroContact: 'Comunícate con Gio',
    heroAbout: 'Conoce su historia',

    aboutLabel: '¿Quién es Gio Zamora?',
    aboutTitle: 'Una voz independiente para las comunidades latinas en Estados Unidos y México',

    bioOne: 'Gio Zamora es un periodista independiente mexicano, creador de contenido digital y fundador de Global Media Today LLC. Radicado en Los Ángeles, California, se especializa en reportajes de investigación sobre seguridad, inmigración y la política binacional entre México y Estados Unidos, con el propósito de informar y fortalecer a las comunidades latinas a ambos lados de la frontera.',

    bioTwo: 'Desde que comenzó su trabajo periodístico en 2022, ha desarrollado un estilo de comunicación claro, directo y accesible, basado en investigación y guiado por los principios de verdad, imparcialidad y objetividad. Licenciado en Derecho desde 2022, actualmente cursa una Maestría en Administración y Políticas Públicas. Es miembro periodista del National Press Club de Washington y de la National Association of Hispanic Journalists (NAHJ).',

    bioThree: 'A través de Global Media Today LLC, una empresa de medios digital-first enfocada en periodismo de calidad, produce contenido de alto impacto que alcanza a más de un millón de seguidores en sus plataformas. Este trabajo es posible gracias a un equipo de editores y redactores que colaboran de la mano con él en la investigación, redacción y producción de cada pieza informativa.',

    bioFour: 'Además de la cobertura noticiosa, dedica parte de su tiempo al estudio del panorama de seguridad en México y Estados Unidos, al acompañamiento de comunidades migrantes y al uso de la inteligencia artificial para la generación de contenido audiovisual. Toda la información que publica es verificada y supervisada por su equipo editorial.',

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
    heroTitle: "Welcome to Gio Zamora's official website",
    heroCopy: 'Independent Mexican journalist, digital content creator, and founder of Global Media Today LLC.',
    heroContact: 'Contact Gio',
    heroAbout: 'Learn his story',

    aboutLabel: 'Who is Gio Zamora?',
    aboutTitle: 'An independent voice for Latino communities in the United States and Mexico',

    bioOne: 'Gio Zamora is an independent Mexican journalist, digital content creator, and founder of Global Media Today LLC. Based in Los Angeles, California, he specializes in investigative reporting on security, immigration, and binational politics between Mexico and the United States, with the aim of informing and empowering Latino communities on both sides of the border.',

    bioTwo: "Since beginning his journalistic career in 2022, he has developed a clear, direct, and accessible communication style rooted in research and guided by the principles of truth, impartiality, and objectivity. He earned his law degree in 2022 and is currently pursuing a master's degree in Public Administration and Public Policy. He is a journalist member of the National Press Club in Washington, D.C., and the National Association of Hispanic Journalists (NAHJ).",

    bioThree: 'Through Global Media Today LLC, a digital-first media company focused on quality journalism, he produces high-impact content that reaches more than one million followers across his platforms. This work is made possible by a team of editors and writers who work closely with him on the research, writing, and production of every piece of news content.',

    bioFour: 'In addition to news coverage, he dedicates part of his time to studying the security landscape in Mexico and the United States, supporting migrant communities, and exploring the use of artificial intelligence in audiovisual content creation. All information he publishes is fact-checked and supervised by his editorial team.',

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

// ELEMENTOS DEL SITIO

const header = document.querySelector('[data-header]');
const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const languageButtons = document.querySelectorAll('[data-lang]');
const translatable = document.querySelectorAll('[data-i18n]');
const contactForm = document.querySelector('[data-contact-form]');

// ENCABEZADO DINÁMICO

const syncHeader = () => {
  if (header) {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  }
};

// SISTEMA DE TRADUCCIÓN

const setLanguage = (lang) => {
  if (!dictionary[lang]) return;

  document.documentElement.lang = lang;

  translatable.forEach((element) => {
    const key = element.dataset.i18n;

    if (Object.prototype.hasOwnProperty.call(dictionary[lang], key)) {
      element.textContent = dictionary[lang][key];
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });

  // Actualizar descripción SEO según el idioma.
  const metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (metaDescription) {
    const description = lang === 'es'
      ? 'Sitio oficial de Gio Zamora, periodista independiente mexicano, creador de contenido digital y fundador de Global Media Today LLC.'
      : 'Official website of Gio Zamora, independent Mexican journalist, digital content creator, and founder of Global Media Today LLC.';

    metaDescription.setAttribute('content', description);
  }
};

// INICIALIZACIÓN DEL ENCABEZADO

syncHeader();

window.addEventListener('scroll', syncHeader, {
  passive: true
});

// MENÚ DE NAVEGACIÓN MÓVIL

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');

    toggle.setAttribute(
      'aria-expanded',
      String(isOpen)
    );
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      nav.classList.remove('is-open');

      toggle.setAttribute(
        'aria-expanded',
        'false'
      );
    }
  });
}

// SELECTOR DE IDIOMA

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.lang);
  });
});

// IDIOMA INICIAL

setLanguage('es');

// FORMULARIO DE CONTACTO

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);

    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || '';
    const message = formData.get('message') || '';

    const subject = encodeURIComponent(
      `Contacto desde giozamora.com - ${name}`
    );

    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\n\nMensaje:\n${message}`
    );

    window.location.href =
      `mailto:info@giozamora.com?subject=${subject}&body=${body}`;
  });
}
