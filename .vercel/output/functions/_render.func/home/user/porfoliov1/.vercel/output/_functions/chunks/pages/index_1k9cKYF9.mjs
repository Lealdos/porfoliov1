/* empty css                          */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, h as createAstro, i as renderComponent, g as addAttribute, j as renderHead, k as renderSlot, l as Fragment } from '../astro_D6XsLaqR.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$i = createAstro();
const $$Sun = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Sun;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path> <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path> </svg>`;
}, "/home/user/porfoliov1/src/components/icons/Sun.astro", void 0);

const $$Astro$h = createAstro();
const $$Moon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Moon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> </svg>`;
}, "/home/user/porfoliov1/src/components/icons/Moon.astro", void 0);

const $$Astro$g = createAstro();
const $$System = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$System;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path> <path d="M7 20h10"></path> <path d="M9 16v4"></path> <path d="M15 16v4"></path> </svg>`;
}, "/home/user/porfoliov1/src/components/icons/System.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  const THEMES = ["Light", "Dark", "System"];
  return renderTemplate(_a || (_a = __template(["", '<div class="relative ml-1 mr-1" data-astro-cid-x3pjskd3> <button id="theme-toggle-btn" class="appearance-none border-none flex hover:scale-125 transition" data-astro-cid-x3pjskd3> <span class="sr-only" data-astro-cid-x3pjskd3>pick theme</span> ', " ", " ", ' </button> <div id="themes-menu" class="absolute hidden scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md" data-astro-cid-x3pjskd3> <ul data-astro-cid-x3pjskd3> ', ' </ul> </div> </div>  <script>\n  let remove = null\n  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)")\n  const themesMenu = document.getElementById("themes-menu")\n\n  const getThemePreference = () => {\n    if (typeof localStorage !== "undefined") {\n      return localStorage.getItem("theme") ?? "system"\n    }\n\n    return window.matchMedia("(prefers-color-scheme: dark)").matches\n      ? "dark"\n      : "light"\n  }\n\n  const updateIcon = (themePreference) => {\n    document.querySelectorAll(".theme-toggle-icon").forEach((element) => {\n      element.style.scale = element.id === themePreference ? "1" : "0"\n    })\n  }\n\n  const updateTheme = () => {\n    if (remove != null) {\n      remove()\n    }\n    matchMedia.addEventListener("change", updateTheme)\n    remove = () => {\n      matchMedia.removeEventListener("change", updateTheme)\n    }\n\n    const themePreference = getThemePreference()\n    const isDark =\n      themePreference === "dark" ||\n      (themePreference === "system" && matchMedia.matches)\n\n    updateIcon(themePreference)\n    document.documentElement.classList[isDark ? "add" : "remove"]("dark")\n  }\n\n  updateTheme()\n\n  document.addEventListener("click", () => themesMenu.classList.remove("open"))\n\n  document.getElementById("theme-toggle-btn").addEventListener("click", (e) => {\n    e.stopPropagation()\n    const isClosed = !themesMenu.classList.contains("open")\n    themesMenu.classList[isClosed ? "add" : "remove"]("open")\n  })\n\n  document.querySelectorAll(".themes-menu-option").forEach((element) => {\n    element.addEventListener("click", (e) => {\n      localStorage.setItem("theme", e.target.innerText.toLowerCase().trim())\n      updateTheme()\n    })\n  })\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "SunIcon", $$Sun, { "id": "light", "class": "theme-toggle-icon size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "MoonIcon", $$Moon, { "id": "dark", "class": "theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "SystemIcon", $$System, { "id": "system", "class": "theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), THEMES.map((theme) => renderTemplate`<li class="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm" data-astro-cid-x3pjskd3> ${theme} </li>`));
}, "/home/user/porfoliov1/src/components/ThemeToggle.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      title: "Experience",
      label: "Experience",
      url: "/#Experiences"
    },
    {
      title: "Proyects",
      label: "Proyects",
      url: "/#Proyect"
    },
    {
      title: "About me",
      label: "About me",
      url: "/#About-me"
    },
    {
      title: "Contact",
      label: "Contact",
      url: "/#Contact-me"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2" data-astro-cid-3ef6ksr2> <nav class="flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center" data-astro-cid-3ef6ksr2> ${navItems.map((link) => renderTemplate`<a class="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400 text-center"${addAttribute(link.label, "id")} role="button"${addAttribute(link.label, "aria-label")}${addAttribute(link.url, "href")} data-astro-cid-3ef6ksr2> ${link.title} </a>`)} ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-3ef6ksr2": true })} </nav> </header>  `;
}, "/home/user/porfoliov1/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="opacity-80 m-4 mt-16 w-full md:mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center"> <div class="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4"> <span class="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">© ${currentYear} <a href="https://github.com/Lealdos" class="hover:underline">Lealdos</a>. some
      rights reserved.
</span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"> <li> <a href="/#sobre-mi" class="hover:underline me-4 md:me-6">About me</a> </li> <li> <a id="contacto" href="mailto:j3leonardodelgado@gmail.com" class="hover:underline">Contact</a> </li> </ul> </div> </footer>`;
}, "/home/user/porfoliov1/src/components/Footer.astro", void 0);

const $$Astro$f = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/user/porfoliov1/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$e = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="relative text-black dark:text-white"> <div class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "/home/user/porfoliov1/src/layouts/Layout.astro", void 0);

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const personalImageAlt = "Jose Delgado";
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row"> <div class="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1"> <p>
As a Full Stack Software Developer, I'm enthusiastic to significantly contribute to creating innovative and efficient software solutions.
</p> <p>
I have a robust skill set encompassing JavaScript, Python, Node.js, SQL, Git, CSS, HTML, Express, FastAPI, Object-Oriented Programming (OOP), and Linux, I'm well-prepared to embrace fresh challenges while continuing my journey of learning and development as a developer.
</p> </div> <img width="450" height="450" src="/lealdos.webp"${addAttribute(personalImageAlt, "alt")} class="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 " style="object-position: 50% 50%"> </article> <!-- FRASES PROHIBIDAS EN VUESTRO PORTFOLIO

<p>
  Mi sueño es encontrar mi primer empleo en el mundo de la programación. Una empresa donde pueda seguir aprendiendo. ❌
</p>

<p>
  ❌ Apasionado de la programación desde chekitito. Me encantan los ordenadores y crear páginas web buenas y rápidas con la última tecnología.
</p>

<p>
  Trabajo bien en equipo. Siempre estoy aprendiendo cosas nuevas.
</p>

-------------------------------------

--------------------------------------

<p>
  ¡Soy Leo! Estudié Derecho Empresarial y, tras años ejerciendo, me pasé al mundo de la Programación. Desde entonces disfruto creando experiencias web para los usuarios.
</p>

<p>
  Entre mis éxitos destaco que durante el Grado Superior, ayudé a mis compañeros a aprender sobre TDD. Me encanta el testing, creo en su importancia, y me gusta compartir mi conocimiento sobre ello.
</p>

<p>
  Cuento con experiencia desarrollando aplicaciones móviles, y he creado una iniciativa llamada X para mezclar mis dos pasiones: la programación y el derecho. Ayudando a la sociedad a acceso a una defensa justa.
</p>

---------------------------------------

<p>Me llamo Sara, tengo 25 años y soy de Santiago, Chile 🇨🇱. Terminé mis estudios como Desarrolladora Web. Me encanta enfocarme en la parte del rendimiento, para ofrecer la mejora experiencia al usuario.</p>

<p>
  Colaboro en la organización del MeetUp local BeerJS donde reunimos a desarrolladores de Santiago para compartir conocimiento y experiencias. El año 2023 hicimos un total de 25 charlas con más de 2000 asistentes.
</p>

<p>
  Además de participar activamente en la comunidad, he participado en la Hackathon de Midudev quedando en 3er puesto con mi proyecto _Chatty_, donde usando IA podías interactuar con un PDF. ¡Échale un vistazo!
</p>

-->`;
}, "/home/user/porfoliov1/src/components/AboutMe.astro", void 0);

const $$Astro$d = createAstro();
const $$Briefcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>`;
}, "/home/user/porfoliov1/src/components/icons/Briefcase.astro", void 0);

const $$Astro$c = createAstro();
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "/home/user/porfoliov1/src/components/icons/Code.astro", void 0);

const $$Astro$b = createAstro();
const $$LinkInline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$LinkInline;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} role="link" class="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/user/porfoliov1/src/components/LinkInline.astro", void 0);

const $$Astro$a = createAstro();
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, company, description, url, date, endDate } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"> <div class="relative pb-12 md:col-span-2"> <div class="sticky top-0"> <span class="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">&bull;</span> <h3 class="text-xl font-bold text-yellow-400">${title}</h3> <h4 class="font-semibold text-xl text-gray-600 dark:text-white">${company}</h4> <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">${date} - ${endDate ? endDate : "Present"}</time> </div> </div> <div class="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3"> ${description} ${url && renderTemplate`${renderComponent($$result, "LinkInline", $$LinkInline, { "href": url }, { "default": ($$result2) => renderTemplate`
check company${" "}<svg xmlns="http://www.w3.org/2000/svg" class="w-5 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 6l6 6l-6 6"></path> ` })} </svg> ` })}`} </div> </div>`;
}, "/home/user/porfoliov1/src/components/ExperienceItem.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const EXPERIENCIE = [
    {
      company: "Surge Staffing",
      title: "Onsite supervisor",
      url: "https://surgestaffing.com/",
      date: "05-05-2023",
      endDate: null,
      description: "overseeing and managing on-site operations, ensuring compliance with safety regulations, supervising staff, and addressing any issues that may arise during the course of work.",
      highlights: [""]
    },
    {
      company: "FreeLancer",
      title: "Software engineer",
      date: "2020-06-01",
      endDate: "2023-05-01",
      description: "crafting custom code, building websites or applications tailored to client needs, troubleshooting technical issues, and effectively communicating to understand and meet project requirements.",
      highlights: ["Started the company"]
    },
    {
      company: "Momentum labs",
      title: "Full Stack Developer",
      date: "2017-01-02",
      endDate: "2018-06-01",
      description: "My responsibility was to analyze, design, develop, deploy, and test software solutions made with the following stacks: NestJs, javascript, HTML, CSS, fast API, python, Django, and Flask.",
      highlights: ["Started the company"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative mt-16"> ${EXPERIENCIE.map((experiencie) => renderTemplate`<li class=""> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experiencie })} </li>`)} </ol>`;
}, "/home/user/porfoliov1/src/components/Experience.astro", void 0);

const $$Astro$9 = createAstro();
const $$ProfileCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ProfileCheck;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path><path d="M15 19l2 2l4 -4"></path></svg>`;
}, "/home/user/porfoliov1/src/components/icons/ProfileCheck.astro", void 0);

const $$Astro$8 = createAstro();
const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>`;
}, "/home/user/porfoliov1/src/components/icons/GitHub.astro", void 0);

const $$Astro$7 = createAstro();
const $$NextJS = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$NextJS;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="256" height="256" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <defs> <linearGradient id="c" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"> <stop offset="0%" stop-color="#FFF"></stop> <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop> </linearGradient> <linearGradient id="d" x1="50%" x2="49.953%" y1="0%" y2="73.438%"> <stop offset="0%" stop-color="#FFF"></stop> <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop> </linearGradient> <circle id="a" cx="128" cy="128" r="128"></circle> </defs> <mask id="b" fill="#fff"> <use xlink:href="#a"></use> </mask> <g mask="url(#b)"> <circle cx="128" cy="128" r="128"></circle> <path fill="url(#c)" d="M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"></path> <path fill="url(#d)" d="M163.556 76.8h17.067v102.4h-17.067z"></path> </g> </svg>`;
}, "/home/user/porfoliov1/src/components/icons/NextJS.astro", void 0);

const $$Astro$6 = createAstro();
const $$Tailwind = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Tailwind;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clip-path="url(#a)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h54v32.4H0z"></path></clipPath></defs></svg>`;
}, "/home/user/porfoliov1/src/components/icons/Tailwind.astro", void 0);

const $$Astro$5 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Link;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;
}, "/home/user/porfoliov1/src/components/icons/Link.astro", void 0);

const $$Astro$4 = createAstro();
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} role="link" class="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/user/porfoliov1/src/components/LinkButton.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const TAGS = {
    Next: {
      background: "bg-black text-white",
      icon: $$NextJS
    },
    Tailwind: {
      background: "bg-[#003159] text-white",
      icon: $$Tailwind
    }
  };
  const PROJECTS = [
    {
      image: "/poem.jpg",
      name: "Poem Generator",
      isActive: true,
      description: "A web application through which, with the assistance of an AI, you can upload any image. You will be able to visualize it, and after a short time, you will receive a poem that uses the previously uploaded image as inspiration.",
      highlights: ["React", "TypeScript", "Tailwind", "Gemini AI"],
      link: "https://regalo-ana.vercel.app/",
      github: "https://github.com/Lealdos/regalo-ana"
    },
    {
      name: "Future Store",
      image: "/futureword.jpg",
      isActive: true,
      description: "Creation of an E-commerce platform with functionalities including authentication, shopping cart, AI-powered virtual assistant, integration with the Shopify API, and more. It is built primarily using Next.js 14, TypeScript, Tailwind, and Zustand.",
      highlights: [
        "Next",
        "OpenAI API",
        "TypeScript",
        "Vercel Deploy",
        "ShopifyAPI",
        "Tailwind",
        "Zustand",
        "SDK"
      ],
      link: "https://shopify-ecommerce-three.vercel.app/",
      github: "https://github.com/Lealdos/Shopify-ecommerce"
    },
    {
      name: "Resdy",
      image: "/resdyB.jpg",
      isActive: false,
      description: "A powerful RESTfull API built with Prisma ORM, Node.js, TSOA, and TypeScript. This API serves as a robust backend for our application, providing seamless data management and powerful endpoint interactions. With TypeScript's typing and TSOA's automatic routing, this project ensures a scalable and maintainable codebase.",
      highlights: [
        "ORM",
        "Prisma",
        "Express",
        "Docker",
        "TypeScript",
        "Tsoa",
        "API REST"
      ],
      link: "https://github.com/Lealdos/restify-v2-backend",
      github: "https://github.com/Lealdos/restify-v2-backend"
    },
    {
      name: "ToDo App With login",
      image: "/ToDosphoto.jpg",
      isActive: true,
      description: "This is a Todo List application built using React. It allows users to manage their tasks efficiently by adding, editing, and deleting items from their to-do list. Also the users can check their tasks list from any divice when they login using the auth feature and connect to the backed. ",
      highlights: [
        "Authentication",
        "React",
        "PostgreSQL",
        "Modals",
        "LocalStorages",
        "Data Fetching"
      ],
      link: "https://lealdos.github.io/TodoAppJS/",
      github: "https://github.com/Lealdos/TodoAppJS"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-16"> ${PROJECTS.map(
    ({ image, name, description, highlights, link, github }) => renderTemplate`<article class="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"> <div class="w-full md:w-1/2"> <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"> <img alt="Recién llegado vs 5 años en Nueva Zelanda" class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy"${addAttribute(image, "src")}> </div> </div> <div class="w-full md:w-1/2 md:max-w-lg"> <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100"> ${name} </h3> <div class="flex flex-wrap mt-2"> <div class="my-2 text-gray-700 dark:text-gray-300"> ${description} </div> <ul class="flex flex-row mb-2 gap-2 flex-wrap "> ${highlights.map((highlight) => renderTemplate`<span${addAttribute(`flex items-center justify-center gap-1 text-md border border-gray-500 rounded-md px-2 py-1  p-1 ${TAGS[highlight]?.background} `, "class")}> ${highlight} </span>`)} </ul> <footer class="flex items-end justify-start mt-4 gap-x-4"> ${github && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": github }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GitHub", $$GitHub, { "class": "size-6" })}
Code
` })}`} ${link && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": link }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", $$Link, { "class": "size-4" })}
Preview
` })}`} </footer> </div> </div> </article>`
  )} </div>`;
}, "/home/user/porfoliov1/src/components/Projects.astro", void 0);

const $$Astro$3 = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(id, "data-section")}${addAttribute(`section ${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/home/user/porfoliov1/src/components/SectionContainer.astro", void 0);

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center "> <span class="relative inline-flex overflow-hidden rounded-full p-[1px]"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span> <div class="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap"> ${renderSlot($$result, $$slots["default"])} </div> </span> </div>`;
}, "/home/user/porfoliov1/src/components/Badge.astro", void 0);

const $$Astro$2 = createAstro();
const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>`;
}, "/home/user/porfoliov1/src/components/icons/LinkedIn.astro", void 0);

const $$Astro$1 = createAstro();
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-forward" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>`;
}, "/home/user/porfoliov1/src/components/icons/Mail.astro", void 0);

const $$Astro = createAstro();
const $$SocialPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<a${spreadAttributes(Astro2.props)} target="_blank" rel="noopener noreferrer" role="link" class="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/user/porfoliov1/src/components/SocialPill.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const personalImageAlt = "Devgado";
  return renderTemplate`${maybeRenderHead()}<div class="max-w-xl"> <div class="flex gap-4 mb-4"> <img class="rounded-full shadow-lg size-16  object-contain	" src="/favicon.svg"${addAttribute(personalImageAlt, "alt")}> <a href="https://www.linkedin.com/in/jleonardod/" target="_blank" rel="noopener" class="flex items-center transition md:justify-center md:hover:scale-105"> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`Open to work` })} </a> </div> <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
Hello, i'm  Lealdos
</h1> <p class="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">
A bilingual developer committed to their work, constantly expanding and broadening my problem-solving skills through the use of software.
</p> <nav class="flex flex-wrap gap-4 mt-8"> ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "mailto:j3leonardodelgado@gmail.com" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MailIcon", $$Mail, { "class": "size-4" })}
Contact me
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "https://www.linkedin.com/in/jleonardod/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LinkedInIcon", $$LinkedIn, { "class": "size-4" })}
LinkedIn
` })} </nav> </div>`;
}, "/home/user/porfoliov1/src/components/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Porfolio de midudev - Desarrollador y Programador Web con 15 a\xF1os de experiencia", "description": "Contrata a midudev para crear tu aplicaci\xF3n web o m\xF3vil. Desarrollador Web y Creador de Contenido. Especializado en crear aplicaciones \xFAnicas." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-16 md:py-36" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ` })} <div class="space-y-24"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experiencia" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"> ${renderComponent($$result3, "Briefcase", $$Briefcase, { "class": "size-8" })}
Experiencia laboral
</h2> ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "proyectos" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"> ${renderComponent($$result3, "CodeIcon", $$Code, { "class": "size-7" })}
Proyectos
</h2> ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "sobre-mi" }, { "default": ($$result3) => renderTemplate` <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white"> ${renderComponent($$result3, "ProfileCheck", $$ProfileCheck, { "class": "size-8" })}
Sobre mí
</h2> ${renderComponent($$result3, "AboutMe", $$AboutMe, {})} ` })} </div> </main> ` })}`;
}, "/home/user/porfoliov1/src/pages/index.astro", void 0);

const $$file = "/home/user/porfoliov1/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
