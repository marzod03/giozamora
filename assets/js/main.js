
const dictionary = {

  // ============================================
  // ESPAÑOL
  // ============================================

  es: {

    navHome: 'Inicio',
    navAbout: 'Quién soy',
    navContact: 'Contáctame',
    navSocial: 'Redes',

    heroEyebrow: 'Sitio oficial',
    heroTitle: 'Bienvenidos al sitio oficial de Gio Zamora',

    heroCopy:
      'Periodista independiente mexicano, creador de contenido digital y fundador de Global Media Today LLC.',

    heroContact: 'Comunícate con Gio',
    heroAbout: 'Conoce su historia',

    aboutLabel: '¿Quién es Gio Zamora?',

    aboutTitle:
      'Una voz independiente para las comunidades latinas en Estados Unidos y México',

    bioOne:
      'Gio Zamora es un periodista independiente mexicano, creador de contenido digital y fundador de Global Media Today LLC. Radicado en Los Ángeles, California, se especializa en reportajes de investigación sobre seguridad, inmigración y la política binacional entre México y Estados Unidos, con el propósito de informar y fortalecer a las comunidades latinas a ambos lados de la frontera.',

    bioTwo:
      'Desde que comenzó su trabajo periodístico en 2022, ha desarrollado un estilo de comunicación claro, directo y accesible, basado en investigación y guiado por los principios de verdad, imparcialidad y objetividad. Licenciado en Derecho desde 2022, actualmente cursa una Maestría en Administración y Políticas Públicas. Es miembro periodista del National Press Club de Washington y de la National Association of Hispanic Journalists (NAHJ).',

    bioThree:
      'A través de Global Media Today LLC, una empresa de medios digital-first enfocada en periodismo de calidad, produce contenido de alto impacto que alcanza a más de un millón de seguidores en sus plataformas. Este trabajo es posible gracias a un equipo de editores y redactores que colaboran de la mano con él en la investigación, redacción y producción de cada pieza informativa.',

    bioFour:
      'Además de la cobertura noticiosa, dedica parte de su tiempo al estudio del panorama de seguridad en México y Estados Unidos, al acompañamiento de comunidades migrantes y al uso de la inteligencia artificial para la generación de contenido audiovisual. Toda la información que publica es verificada y supervisada por su equipo editorial.',

    // El quinto párrafo no se muestra en español.
    bioFive: '',

    sendwaveTitle:
      'Reclama $20 usando el código ZAMORA',

    sendwaveCopy:
      'Disponible para nuevos usuarios a través de Sendwave.',

    sendwaveButton: 'Reclamar $20',

    contactLabel: 'Contáctame',
    contactTitle: 'Comunícate con Gio',

    contactCopy:
      'Si tienes alguna pregunta, comentario, duda, trabajas con medios o deseas colaborar de alguna manera, por favor comunícate.',

    formName: 'Nombre',
    formEmail: 'Correo electrónico',
    formPhone: 'Teléfono',
    formMessage: 'Mensaje',
    formSubmit: 'Enviar mensaje',

    socialLabel: 'Redes sociales',
    socialTitle: 'Sigue a Gio Zamora'

  },


  // ============================================
  // ENGLISH
  // ============================================

  en: {

    navHome: 'Home',
    navAbout: 'About me',
    navContact: 'Contact me',
    navSocial: 'Social',

    heroEyebrow: 'Official website',

    heroTitle:
      "Welcome to Gio Zamora's official website",

    heroCopy:
      'Independent Mexican journalist, digital content creator, and founder of Global Media Today LLC.',

    heroContact: 'Contact Gio',
    heroAbout: 'Learn his story',

    aboutLabel: 'About Global Media Today LLC',

    aboutTitle:
      'Independent journalism with a global reach',

    // ENGLISH BIOGRAPHY - PARAGRAPH 1

    bioOne:
      'Global Media Today LLC is an independent, digital-first news organization founded and led by journalist Gio Zamora, based in Los Angeles, California. We produce Spanish-language news content focused on security, immigration, and binational politics between the United States and Mexico, delivering relevant, timely, and rigorously verified reporting.',

    // ENGLISH BIOGRAPHY - PARAGRAPH 2

    bioTwo:
      'We operate a fully remote newsroom: a team of editors, writers, and communications staff working hand in hand with Gio Zamora across the United States and Mexico. This model lets us move quickly, stay close to the stories that matter, and reach our audiences directly through digital platforms, where our content reaches more than a million followers.',

    // ENGLISH BIOGRAPHY - PARAGRAPH 3

    bioThree:
      'Our core audience is Latinos living in the United States and people in Mexico, with a strong base among Mexican-American and Chicano communities. Our content is also followed by viewers across Latin America and around the world. Our reporting combines in-depth investigation with clear, direct storytelling that makes complex issues accessible to everyone.',

    // ENGLISH BIOGRAPHY - PARAGRAPH 4

    bioFour:
      'Every story is cross-checked against official sources and reviewed by our editorial team before publication. When we get something wrong, we correct it openly and promptly.',

    // ENGLISH BIOGRAPHY - PARAGRAPH 5

    bioFive:
      'Global Media Today LLC is independent. We have no affiliation with any political party, government, or special interest, and our editorial decisions are made solely by our team. Human journalistic judgment and integrity guide every story we tell.',

    sendwaveTitle:
      'Claim $20 using code ZAMORA',

    sendwaveCopy:
      'Available for new users through Sendwave.',

    sendwaveButton: 'Claim $20',

    contactLabel: 'Contact me',
    contactTitle: 'Contact Gio',

    contactCopy:
      'If you have a question, comment, concern, work with the media, or would like to collaborate in any way, please get in touch.',

    formName: 'Name',
    formEmail: 'Email',
    formPhone: 'Phone',
    formMessage: 'Message',
    formSubmit: 'Send message',

    socialLabel: 'Social media',
    socialTitle: 'Follow Gio Zamora'

  }

};


// ============================================
// ELEMENTOS DEL DOCUMENTO
// ============================================

const header = document.querySelector('[data-header]');

const toggle = document.querySelector('[data-nav-toggle]');

const nav = document.querySelector('[data-nav]');

const languageButtons = document.querySelectorAll(
  '[data-lang]'
);

const translatable = document.querySelectorAll(
  '[data-i18n]'
);

const contactForm = document.querySelector(
  '[data-contact-form]'
);


// ============================================
// ENCABEZADO DINÁMICO
// ============================================

const syncHeader = () => {

  if (!header) return;

  header.classList.toggle(
    'is-scrolled',
    window.scrollY > 12
  );

};


// ============================================
// SISTEMA DE TRADUCCIÓN
// ============================================

const setLanguage = (lang) => {

  if (!dictionary[lang]) return;

  // Actualizar idioma principal del HTML.

  document.documentElement.lang = lang;

  // Traducir todos los elementos disponibles.

  translatable.forEach((element) => {

    const key = element.dataset.i18n;

    if (
      Object.prototype.hasOwnProperty.call(
        dictionary[lang],
        key
      )
    ) {

      element.textContent = dictionary[lang][key];

    }

  });


  // ==========================================
  // QUINTO PÁRRAFO
  // Visible únicamente en inglés.
  // ==========================================

  const bioFive = document.querySelector(
    '[data-i18n="bioFive"]'
  );

  if (bioFive) {

    bioFive.hidden = lang !== 'en';

  }


  // ==========================================
  // ACTUALIZAR BOTONES DE IDIOMA
  // ==========================================

  languageButtons.forEach((button) => {

    const isActive = button.dataset.lang === lang;

    button.classList.toggle('active', isActive);

    button.setAttribute(
      'aria-pressed',
      String(isActive)
    );

  });


  // ==========================================
  // ACTUALIZAR META DESCRIPTION
  // ==========================================

  const metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (metaDescription) {

    const description = lang === 'es'

      ? 'Sitio oficial de Gio Zamora, periodista independiente mexicano, creador de contenido digital y fundador de Global Media Today LLC.'

      : 'Global Media Today LLC is an independent, digital-first news organization founded and led by journalist Gio Zamora in Los Angeles, California.';

    metaDescription.setAttribute(
      'content',
      description
    );

  }

};


// ============================================
// INICIALIZACIÓN DEL ENCABEZADO
// ============================================

syncHeader();

window.addEventListener(
  'scroll',
  syncHeader,
  { passive: true }
);


// ============================================
// MENÚ MÓVIL
// ============================================

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


// ============================================
// BOTONES DE IDIOMA
// ============================================

languageButtons.forEach((button) => {

  button.addEventListener('click', () => {

    setLanguage(button.dataset.lang);

  });

});


// ============================================
// IDIOMA INICIAL
// ============================================

setLanguage('es');


// ============================================
// FORMULARIO DE CONTACTO
// ============================================

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
