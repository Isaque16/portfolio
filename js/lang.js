import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector'

i18next.use(LanguageDetector).init({
  fallbackLng: "pt",
  detection: {
    order: ['navigator', 'sessionStorage'],
    caches: ['sessionStorage'],
  },
  resources: {
    en: {
      translation: {
        "hero-section": {
          "hero-text": "Hey, my name is <span class='text-color-main name'>Isaque Costa</span>👋 <br /> I am a full-stack web developer passionate <span class='heart_animation'>❤️</span> about turning <span class='text-color-main name'>ideas into efficient digital solutions</span>.",
          "btn-content": "Get in touch"
        },
        "about-section": {
          "title": "About Me",
          "about-text": "I'm a full-stack web developer passionate about creating web applications. I'm currently pursuing a degree in Information Systems at the Federal University of Acre (UFAC), where I'm honing my skills and knowledge in modern development technologies. I'm always eager to learn something new and explore different technologies to improve my skills and deliver the best possible solutions. I love turning ideas into functional products. When I'm not coding, I'm learning about new technologies and exploring new ways to optimize system performance!"
        },
        "formation-section": {
          "title": "Academic Formation",
          "institution1": "Federal University of Acre (UFAC)",
          "course1": "Information Systems",
          "institution2": "Web Academy Project",
          "course2": "Full-Stack Web Training",
        },
        "tech-section": {
          "title": "Main Technologies"
        },
        "projects-section": {
          "title": "My Projects",
          "tech-stack-title": "Technologies Used",
          "view-btn": "View",
          "docs-btn": "Documentation",
          "project1-content": "This landing page was developed with <a href='https://nuxt.com/'>Nuxt.js</a> for the company <a href='https://www.instagram.com/telemensagem_rosadesarom_acre/reels/'>Telemensagem Rosa de Sarom AC</a>. The website was created to help reduce customer inquiries and increase appointments.",
          "project2-content": "This is an e-commerce project built with <a href='https://nextjs.org/'>Next.js</a>. The system allows full management of products, customers, and orders, in addition to presenting products and processing purchases.",
          "customers-project-title": "Your project here",
          "call-to-action": "Let's work together!",
          "contact-btn": "Contact",
          "effect-phrase": "The kickstart for <br/> your ideas is here!"
        },
        "contact-section": {
          "title": "Get in touch",
          "label1": "Contact",
          "inputPlaceholder1": "Your Contact",
          "label2": "Project Name",
          "inputPlaceholder2": "Your Project",
          "label3": "Your Name",
          "inputPlaceholder3": "Name",
          "label4": "Message",
          "inputPlaceholder4": "Enter your message",
          "submit-btn": "Send"
        }
      }
    },
    pt: {
      translation: {
        "hero-section": {
          "hero-text": "Olá, me chamo <span class='text-color-main name'>Isaque Costa</span>👋 <br /> Sou um desenvolvedor web full-stack apaixonado ❤️ por transformar <span class='text-color-main name'>ideias em soluções</span> digitais eficientes.",
          "btn-content": "Entre em Contato"
        },
        "about-section": {
          "title": "Sobre Mim",
          "about-text": "Sou um desenvolvedor web full-stack apaixonado por criar aplicações web. Atualmente estou cursando Sistemas de Informação na Universidade Federal do Acre (UFAC), onde estou aprimorando minhas habilidades e conhecimentos em tecnologias modernas de desenvolvimento. Estou sempre disposto a aprender algo novo e explorar diferentes tecnologias para melhorar minhas habilidades e entregar as melhores soluções possíveis. Adoro transformar ideias em produtos funcionais. Quando não estou programando, estou aprendendo sobre novas tecnologias e explorando novas maneiras de otimizar o desempenho dos sistemas!"
        },
        "formation-section": {
          "title": "Formação Acadêmica",
          "institution1": "Universidade Federal do Acre (UFAC)",
          "course1": "Sistemas de Informação",
          "institution2": "Projeto Web Academy",
          "course2": "Capacitação Web Full-Stack",
        },
        "tech-section": {
          "title": "Principais Tecnologias"
        },
        "projects-section": {
          "title": "Meus Projetos",
          "tech-stack-title": "Tecnologias Utilizadas",
          "view-btn": "Visualizar",
          "docs-btn": "Documentação",
          "project1-content": "Esta landing page foi desenvolvida com <a href='https://nuxt.com/'>Nuxt.js</a> para a empresa <a href='https://www.instagram.com/telemensagem_rosadesarom_acre/reels/'>Telemensagem Rosa de Sarom AC</a>. O site foi criado para reduzir dúvidas dos clientes e aumentar os agendamentos.",
          "project2-content": "Este é um projeto de e-commerce desenvolvido com <a href='https://nextjs.org/'>Next.js</a>. O sistema permite o gerenciamento completo de produtos, clientes e pedidos, além de apresentar produtos e processar compras.",
          "customers-project-title": "Seu projeto aqui",
          "call-to-action": "Vamos trabalhar juntos!",
          "contact-btn": "Contato",
          "effect-phrase": "O pontapé inicial das <br/> suas ideias é aqui!"
        },
        "contact-section": {
          "title": "Entre em contato",
          "label1": "Contato",
          "inputPlaceholder1": "Seu Contato",
          "label2": "Nome do Projeto",
          "inputPlaceholder2": "Seu Projeto",
          "label3": "Seu Nome",
          "inputPlaceholder3": "Nome",
          "label4": "Mensagem",
          "inputPlaceholder4": "Digite sua mensagem",
          "submit-btn": "Enviar"
        }
      }
    }
  }
}).then(() => {
  // Hero Section
  document.querySelector(".hero-title").innerHTML = i18next.t('hero-section.hero-text');
  document.querySelector(".cta-btn").innerHTML = i18next.t("hero-section.btn-content")

  // About Section
  document.querySelectorAll(".section-title")[0].innerHTML = i18next.t("about-section.title")
  document.querySelector(".about-wrapper__info-text").innerHTML = i18next.t("about-section.about-text")

  // Formation Section
  document.querySelector("h2#title").innerHTML = i18next.t("formation-section.title")
  document.querySelectorAll(".instituicao-name")[0].innerHTML = i18next.t("formation-section.institution1")
  document.querySelectorAll(".curso-name")[0].innerHTML = i18next.t("formation-section.course1")
  document.querySelectorAll(".instituicao-name")[1].innerHTML = i18next.t("formation-section.institution2")
  document.querySelectorAll(".curso-name")[1].innerHTML = i18next.t("formation-section.course2")

  // Main Tech Section
  document.querySelectorAll(".section-title")[1].innerHTML = i18next.t("tech-section.title")

  // Projects Section
  document.querySelectorAll(".section-title")[2].innerHTML = i18next.t("projects-section.title")
  document.querySelectorAll("h4[style='font-size: medium']").forEach(techTitle => techTitle.innerHTML = i18next.t("projects-section.tech-stack-title"))
  document.querySelectorAll(".view").forEach(btnContent => btnContent.innerHTML = i18next.t("projects-section.view-btn"))
  document.querySelectorAll(".docs").forEach(btnContent => btnContent.innerHTML = i18next.t("projects-section.docs-btn"))

  document.querySelectorAll(".project-wrapper__text-info")[0].innerHTML = i18next.t("projects-section.project1-content")
  document.querySelectorAll(".project-wrapper__text-info")[1].innerHTML = i18next.t("projects-section.project2-content")

  document.querySelectorAll(".project-wrapper__text-title")[2].innerHTML = i18next.t("projects-section.customers-project-title")
  document.querySelectorAll(".project-wrapper__text-info")[2].innerHTML = i18next.t("projects-section.call-to-action")
  document.querySelector(".contact-btn").innerHTML = i18next.t("projects-section.contact-btn");
  document.querySelector("span[style='font-size: 4em; font-weight: bolder']").innerHTML = i18next.t("projects-section.effect-phrase")

  // Contact Section
  document.querySelectorAll(".section-title")[3].innerHTML = i18next.t("contact-section.title")
  document.querySelectorAll(".form_label")[0].innerHTML = i18next.t("contact-section.label1");
  document.querySelectorAll(".form_input")[0].placeholder = i18next.t("contact-section.inputPlaceholder1")
  document.querySelectorAll(".form_label")[1].innerHTML = i18next.t("contact-section.label2");
  document.querySelectorAll(".form_input")[1].placeholder = i18next.t("contact-section.inputPlaceholder2")
  document.querySelectorAll(".form_label")[2].innerHTML = i18next.t("contact-section.label3");
  document.querySelectorAll(".form_input")[2].placeholder = i18next.t("contact-section.inputPlaceholder3")
  document.querySelectorAll(".form_label")[3].innerHTML = i18next.t("contact-section.label4");
  document.querySelectorAll(".form_input")[3].placeholder = i18next.t("contact-section.inputPlaceholder4")
  document.querySelector(".form_btn").value = i18next.t("contact-section.submit-btn");
});
