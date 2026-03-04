import { b as createAstro, c as createComponent, a as renderTemplate, e as renderSlot, f as renderHead, u as unescapeHTML, d as addAttribute, m as maybeRenderHead, r as renderComponent, F as Fragment } from './astro/server_BaRvc-HO.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://www.spiritofamazonas.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description,
    image = "/og-image.jpg",
    lang = "es",
    canonicalURL = Astro2.url.href
  } = Astro2.props;
  const siteName = "Spirit of Amazonas";
  const siteURL = "https://www.spiritofamazonas.com";
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteName,
    description: "Centro de retiros de ayahuasca y medicina ancestral amaz\xF3nica con facilitadores certificados.",
    url: siteURL,
    telephone: "+51999999999",
    email: "info@spiritofamazonas.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. La Marina 123",
      addressLocality: "Iquitos",
      addressRegion: "Loreto",
      postalCode: "16001",
      addressCountry: "PE"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -3.7437,
      longitude: -73.2516
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "20:00"
    },
    sameAs: [
      "https://www.facebook.com/spiritofamazonas",
      "https://www.instagram.com/spiritofamazonas",
      "https://www.youtube.com/@spiritofamazonas",
      "https://www.tiktok.com/@spiritofamazonas"
    ],
    image: `${siteURL}/og-image.jpg`,
    priceRange: "$$"
  };
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', "><!-- Primary SEO --><title>", '</title><meta name="description"', '><link rel="canonical"', '><meta name="robots" content="index, follow"><meta name="theme-color" content="#0a1a0f"><!-- Alternate languages --><link rel="alternate" hreflang="es"', '><link rel="alternate" hreflang="en"', '><link rel="alternate" hreflang="pt"', '><link rel="alternate" hreflang="x-default"', '><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:site_name"', '><meta property="og:locale"', '><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:site" content="@spiritamazonas"><!-- Keywords SEO (complementario) --><meta name="keywords" content="ayahuasca, retiros ayahuasca, ceremonia ayahuasca, medicina ancestral, sanaci\xF3n espiritual, amazon\xEDa, curanderismo, retiro espiritual, planta maestra, dieta de plantas"><meta name="author"', '><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><!-- Preconnect fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Global Styles are imported via Astro frontmatter --><!-- JSON-LD Structured Data --><script type="application/ld+json">', "<\/script>", '</head> <body> <!-- Skip to content (accessibility) --> <a href="#main-content" class="skip-link">Saltar al contenido</a> <!-- Scroll progress bar --> <div id="scroll-progress" aria-hidden="true"></div> ', " <!-- Scroll reveal & progress scripts -->  </body> </html>"])), addAttribute(lang, "lang"), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(`${siteURL}/`, "href"), addAttribute(`${siteURL}/en/`, "href"), addAttribute(`${siteURL}/pt/`, "href"), addAttribute(`${siteURL}/`, "href"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`${siteURL}${image}`, "content"), addAttribute(siteName, "content"), addAttribute(lang === "es" ? "es_PE" : lang === "en" ? "en_US" : "pt_BR", "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`${siteURL}${image}`, "content"), addAttribute(siteName, "content"), unescapeHTML(JSON.stringify(jsonLD)), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/Jorge/Downloads/ayahuasca-web/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro("https://www.spiritofamazonas.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const currentPath = Astro2.url.pathname;
  const lang = currentPath.startsWith("/en") ? "en" : currentPath.startsWith("/pt") ? "pt" : "es";
  const navLinks = {
    es: [
      { href: "/", label: "Inicio" },
      { href: "/sobre-nosotros", label: "Nosotros" },
      { href: "/servicios", label: "Servicios" },
      { href: "/retiros", label: "Retiros" },
      { href: "/galeria", label: "Galer\xEDa" },
      { href: "/testimonios", label: "Testimonios" },
      { href: "/blog", label: "Blog" },
      { href: "/preguntas-frecuentes", label: "FAQ" },
      { href: "/contacto", label: "Contacto" }
    ],
    en: [
      { href: "/en", label: "Home" },
      { href: "/en/about", label: "About" },
      { href: "/en/services", label: "Services" },
      { href: "/en/retreats", label: "Retreats" },
      { href: "/en/gallery", label: "Gallery" },
      { href: "/en/testimonials", label: "Testimonials" },
      { href: "/en/blog", label: "Blog" },
      { href: "/en/faq", label: "FAQ" },
      { href: "/en/contact", label: "Contact" }
    ],
    pt: [
      { href: "/pt", label: "In\xEDcio" },
      { href: "/pt/sobre", label: "Sobre" },
      { href: "/pt/servicos", label: "Servi\xE7os" },
      { href: "/pt/retiros", label: "Retiros" },
      { href: "/pt/galeria", label: "Galeria" },
      { href: "/pt/depoimentos", label: "Depoimentos" },
      { href: "/pt/blog", label: "Blog" },
      { href: "/pt/perguntas", label: "FAQ" },
      { href: "/pt/contato", label: "Contato" }
    ]
  };
  const links = navLinks[lang] ?? navLinks.es;
  const langSwitcher = {
    es: [
      { href: "/", code: "ES", label: "Espa\xF1ol" },
      { href: "/en", code: "EN", label: "English" },
      { href: "/pt", code: "PT", label: "Portugu\xEAs" }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<header id="site-header" class="site-header" data-astro-cid-3ef6ksr2> <div class="container header-inner" data-astro-cid-3ef6ksr2> <!-- Logo --> <a${addAttribute(lang === "es" ? "/" : `/${lang}`, "href")} class="header-logo" aria-label="Spirit of Amazonas - Inicio" data-astro-cid-3ef6ksr2> <span class="logo-icon" aria-hidden="true" data-astro-cid-3ef6ksr2>🌿</span> <span class="logo-text" data-astro-cid-3ef6ksr2> <span class="logo-title" data-astro-cid-3ef6ksr2>Spirit of</span> <span class="logo-sub" data-astro-cid-3ef6ksr2>Amazonas</span> </span> </a> <!-- Desktop Navigation --> <nav id="main-nav" class="header-nav" aria-label="Navegación principal" data-astro-cid-3ef6ksr2> <ul class="nav-list" data-astro-cid-3ef6ksr2> ${links.map(({ href, label }) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(href, "href")}${addAttribute(["nav-link", { "nav-link--active": currentPath === href || href !== "/" && currentPath.startsWith(href) }], "class:list")}${addAttribute(currentPath === href ? "page" : void 0, "aria-current")} data-astro-cid-3ef6ksr2> ${label} </a> </li>`)} </ul> </nav> <!-- Right controls --> <div class="header-controls" data-astro-cid-3ef6ksr2> <!-- Language switcher --> <div class="lang-switcher" role="navigation" aria-label="Cambiar idioma" data-astro-cid-3ef6ksr2> ${langSwitcher.es.map(({ href, code, label }) => renderTemplate`<a${addAttribute(href, "href")}${addAttribute(["lang-btn", { "lang-btn--active": lang === code.toLowerCase() }], "class:list")}${addAttribute(label, "title")}${addAttribute(`Cambiar a ${label}`, "aria-label")} data-astro-cid-3ef6ksr2> ${code} </a>`)} </div> <!-- WhatsApp CTA (desktop) --> <a href="https://wa.me/51999999999?text=Hola%2C%20me%20interesa%20un%20retiro" target="_blank" rel="noopener noreferrer" class="header-wa-btn" aria-label="Contactar por WhatsApp" data-astro-cid-3ef6ksr2> <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-3ef6ksr2> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" data-astro-cid-3ef6ksr2></path> <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.557 4.113 1.527 5.845L.073 23.203a.75.75 0 0 0 .903.962l5.534-1.451A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.878 0-3.645-.52-5.153-1.422l-.367-.217-3.803.998.998-3.803-.217-.367A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" data-astro-cid-3ef6ksr2></path> </svg>
WhatsApp
</a> <!-- Hamburger button --> <button id="menu-toggle" class="menu-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-menu" data-astro-cid-3ef6ksr2> <span class="hamburger" aria-hidden="true" data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2></span><span data-astro-cid-3ef6ksr2></span><span data-astro-cid-3ef6ksr2></span> </span> </button> </div> </div> <!-- Mobile menu --> <div id="mobile-menu" class="mobile-menu" aria-hidden="true" data-astro-cid-3ef6ksr2> <nav aria-label="Menú móvil" data-astro-cid-3ef6ksr2> <ul class="mobile-nav-list" data-astro-cid-3ef6ksr2> ${links.map(({ href, label }) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(href, "href")} class="mobile-nav-link" data-astro-cid-3ef6ksr2>${label}</a> </li>`)} </ul> </nav> <div class="mobile-lang" data-astro-cid-3ef6ksr2> ${langSwitcher.es.map(({ href, code, label }) => renderTemplate`<a${addAttribute(href, "href")}${addAttribute(["lang-btn", { "lang-btn--active": lang === code.toLowerCase() }], "class:list")}${addAttribute(label, "title")} data-astro-cid-3ef6ksr2> ${code} </a>`)} </div> <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer" class="mobile-wa-btn btn btn--whatsapp" data-astro-cid-3ef6ksr2>
Contactar por WhatsApp
</a> </div> </header>  `;
}, "C:/Users/Jorge/Downloads/ayahuasca-web/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const socials = [
    { name: "Facebook", href: "https://facebook.com/spiritofamazonas", icon: "facebook" },
    { name: "Instagram", href: "https://instagram.com/spiritofamazonas", icon: "instagram" },
    { name: "YouTube", href: "https://youtube.com/@spiritofamazonas", icon: "youtube" },
    { name: "TikTok", href: "https://tiktok.com/@spiritofamazonas", icon: "tiktok" },
    { name: "X / Twitter", href: "https://twitter.com/spiritamazonas", icon: "twitter" },
    { name: "Pinterest", href: "https://pinterest.com/spiritofamazonas", icon: "pinterest" },
    { name: "Telegram", href: "https://t.me/spiritofamazonas", icon: "telegram" },
    { name: "WhatsApp", href: "https://wa.me/51999999999", icon: "whatsapp" }
  ];
  const svgIcons = {
    facebook: '<path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07"/>',
    instagram: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>',
    youtube: '<path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>',
    tiktok: '<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>',
    twitter: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>',
    pinterest: '<path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>',
    telegram: '<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>',
    whatsapp: '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M12 0C5.373 0 0 5.373 0 12c0 2.122.557 4.113 1.527 5.845L.073 23.203a.75.75 0 0 0 .903.962l5.534-1.451A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.878 0-3.645-.52-5.153-1.422l-.367-.217-3.803.998.998-3.803-.217-.367A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>'
  };
  const navPages = [
    { href: "/", label: "Inicio" },
    { href: "/sobre-nosotros", label: "Nosotros" },
    { href: "/servicios", label: "Servicios" },
    { href: "/retiros", label: "Retiros" },
    { href: "/galeria", label: "Galer\xEDa" },
    { href: "/testimonios", label: "Testimonios" },
    { href: "/blog", label: "Blog" },
    { href: "/preguntas-frecuentes", label: "FAQ" },
    { href: "/contacto", label: "Contacto" },
    { href: "/libro-reclamaciones", label: "Libro de Reclamaciones" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" data-astro-cid-sz7xmlte> <!-- Wave top --> <div class="footer-wave" aria-hidden="true" data-astro-cid-sz7xmlte> <svg viewBox="0 0 1200 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-sz7xmlte> <path d="M0 80 L0 40 Q300 0 600 40 Q900 80 1200 40 L1200 80 Z" fill="var(--color-jungle-deep)" data-astro-cid-sz7xmlte></path> </svg> </div> <div class="footer-main" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="footer-grid" data-astro-cid-sz7xmlte> <!-- Brand column --> <div class="footer-brand" data-astro-cid-sz7xmlte> <a href="/" class="footer-logo" aria-label="Spirit of Amazonas" data-astro-cid-sz7xmlte> <span class="logo-icon" aria-hidden="true" data-astro-cid-sz7xmlte>🌿</span> <span class="logo-text" data-astro-cid-sz7xmlte> <span class="logo-title" data-astro-cid-sz7xmlte>Spirit of</span> <span class="logo-sub" data-astro-cid-sz7xmlte>Amazonas</span> </span> </a> <p class="footer-tagline" data-astro-cid-sz7xmlte>
Guardianes de la medicina ancestral amazónica. Ceremonias de ayahuasca auténticas con facilitadores certificados.
</p> <!-- Social links --> <div class="social-links" aria-label="Redes sociales" data-astro-cid-sz7xmlte> ${socials.map(({ name, href, icon }) => renderTemplate`<a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`social-link social-link--${icon}`, "class")}${addAttribute(name, "aria-label")}${addAttribute(name, "title")} data-astro-cid-sz7xmlte> <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="18" height="18" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(svgIcons[icon] ?? "")}` })} </svg> </a>`)} </div> </div> <!-- Pages column --> <div class="footer-col" data-astro-cid-sz7xmlte> <h3 class="footer-col-title" data-astro-cid-sz7xmlte>Páginas</h3> <ul class="footer-links" data-astro-cid-sz7xmlte> ${navPages.map(({ href, label }) => renderTemplate`<li data-astro-cid-sz7xmlte><a${addAttribute(href, "href")} class="footer-link" data-astro-cid-sz7xmlte>${label}</a></li>`)} </ul> </div> <!-- Contact column --> <div class="footer-col" data-astro-cid-sz7xmlte> <h3 class="footer-col-title" data-astro-cid-sz7xmlte>Contacto</h3> <ul class="footer-contact-list" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <span class="contact-icon" aria-hidden="true" data-astro-cid-sz7xmlte>📍</span> <span data-astro-cid-sz7xmlte>Iquitos, Loreto, Perú</span> </li> <li data-astro-cid-sz7xmlte> <span class="contact-icon" aria-hidden="true" data-astro-cid-sz7xmlte>📞</span> <a href="tel:+51999999999" class="footer-link" data-astro-cid-sz7xmlte>+51 999 999 999</a> </li> <li data-astro-cid-sz7xmlte> <span class="contact-icon" aria-hidden="true" data-astro-cid-sz7xmlte>✉️</span> <a href="mailto:info@spiritofamazonas.com" class="footer-link" data-astro-cid-sz7xmlte>info@spiritofamazonas.com</a> </li> <li data-astro-cid-sz7xmlte> <span class="contact-icon" aria-hidden="true" data-astro-cid-sz7xmlte>🕐</span> <span data-astro-cid-sz7xmlte>Lun–Dom, 8:00–20:00</span> </li> </ul> <!-- Newsletter --> <div class="newsletter" aria-label="Suscribirse al boletín" data-astro-cid-sz7xmlte> <h4 class="footer-col-title" style="margin-top:1.5rem" data-astro-cid-sz7xmlte>Newsletter</h4> <form class="newsletter-form" aria-label="Formulario de suscripción" onsubmit="return false;" data-astro-cid-sz7xmlte> <input type="email" placeholder="Tu correo electrónico" class="newsletter-input" aria-label="Correo electrónico" required data-astro-cid-sz7xmlte> <button type="submit" class="newsletter-btn" aria-label="Suscribirse" data-astro-cid-sz7xmlte>
Suscribir
</button> </form> </div> </div> <!-- Map column --> <div class="footer-col" data-astro-cid-sz7xmlte> <h3 class="footer-col-title" data-astro-cid-sz7xmlte>Encuéntranos</h3> <div class="footer-map-wrap" data-astro-cid-sz7xmlte> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127607.55539783025!2d-73.31583!3d-3.7437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ea0a2b2e4b31c7%3A0x2e31e1c9d5e88c2c!2sIquitos%2C%20Peru!5e0!3m2!1ses!2spe!4v1" width="100%" height="200" style="border:0;border-radius:8px;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Ubicación Spirit of Amazonas en Iquitos, Perú" data-astro-cid-sz7xmlte></iframe> </div> <!-- WhatsApp direct button --> <a href="https://wa.me/51999999999?text=Hola%2C%20quisiera%20información%20sobre%20retiros" target="_blank" rel="noopener noreferrer" class="footer-wa-btn" data-astro-cid-sz7xmlte> <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-sz7xmlte> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M12 0C5.373 0 0 5.373 0 12c0 2.122.557 4.113 1.527 5.845L.073 23.203a.75.75 0 0 0 .903.962l5.534-1.451A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.878 0-3.645-.52-5.153-1.422l-.367-.217-3.803.998.998-3.803-.217-.367A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" data-astro-cid-sz7xmlte></path> </svg>
Escríbenos al WhatsApp
</a> </div> </div> </div> </div> <!-- Bottom bar --> <div class="footer-bottom" data-astro-cid-sz7xmlte> <div class="container footer-bottom-inner" data-astro-cid-sz7xmlte> <p class="footer-copy" data-astro-cid-sz7xmlte>
&copy; ${year} Spirit of Amazonas. Todos los derechos reservados.
</p> <nav class="footer-legal" aria-label="Legal" data-astro-cid-sz7xmlte> <a href="/privacidad" class="footer-legal-link" data-astro-cid-sz7xmlte>Privacidad</a> <span aria-hidden="true" data-astro-cid-sz7xmlte>·</span> <a href="/terminos" class="footer-legal-link" data-astro-cid-sz7xmlte>Términos</a> <span aria-hidden="true" data-astro-cid-sz7xmlte>·</span> <a href="/libro-reclamaciones" class="footer-legal-link" data-astro-cid-sz7xmlte>Reclamaciones</a> </nav> <p class="footer-langs" aria-label="Idiomas disponibles" data-astro-cid-sz7xmlte> <a href="/" class="footer-lang-link" data-astro-cid-sz7xmlte>🇵🇪 Español</a> <a href="/en" class="footer-lang-link" data-astro-cid-sz7xmlte>🇺🇸 English</a> <a href="/pt" class="footer-lang-link" data-astro-cid-sz7xmlte>🇧🇷 Português</a> </p> </div> </div> </footer> `;
}, "C:/Users/Jorge/Downloads/ayahuasca-web/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://www.spiritofamazonas.com");
const $$WhatsAppButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WhatsAppButton;
  const {
    phone = "51999999999",
    message = "Hola, me interesa conocer m\xE1s sobre sus retiros de ayahuasca."
  } = Astro2.props;
  const waURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return renderTemplate`${maybeRenderHead()}<a id="whatsapp-float"${addAttribute(waURL, "href")} target="_blank" rel="noopener noreferrer" class="wa-float" aria-label="Contáctanos por WhatsApp" title="Chatea con nosotros en WhatsApp" data-astro-cid-iehx2mtc> <!-- WhatsApp SVG icon --> <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="28" height="28" data-astro-cid-iehx2mtc> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" data-astro-cid-iehx2mtc></path> <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.557 4.113 1.527 5.845L.073 23.203a.75.75 0 0 0 .903.962l5.534-1.451A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.878 0-3.645-.52-5.153-1.422l-.367-.217-3.803.998.998-3.803-.217-.367A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" data-astro-cid-iehx2mtc></path> </svg> <span class="wa-label" data-astro-cid-iehx2mtc>WhatsApp</span> </a> `;
}, "C:/Users/Jorge/Downloads/ayahuasca-web/src/components/WhatsAppButton.astro", void 0);

export { $$Layout as $, $$Header as a, $$Footer as b, $$WhatsAppButton as c };
