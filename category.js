const translations = {
  ar: {
    nav: { home: "الرئيسية", categories: "الأصناف", about: "من نحن", contact: "التواصل" },
    footer: {
      companyText: "من الخيط إلى الموضة",
      linksTitle: "الروابط القانونية",
      terms: "الشروط والأحكام",
      privacy: "سياسة الخصوصية",
      cookies: "سياسة ملفات تعريف الارتباط",
      accessibility: "إمكانية الوصول",
      shipping: "الشحن والتسليم",
      kvkk: "KVKK",
      contactBtn: "التواصل"
    },
    categoryPage: {
      kicker: "الأصناف",
      description: "مجموعة أنيقة من الصور الخاصة بهذا الصنف، مصممة بعرض راقٍ ومريح بصريًا.",
      items: {
        linen: "الكتان",
        viscose: "الفسكوزي",
        cotton: "القطن",
        silk: "الحرير"
      },
      cardLabel: "تصميم مختار بعناية"
    }
  },
  tr: {
    nav: { home: "Ana Sayfa", categories: "Kategoriler", about: "Hakkımızda", contact: "İletişim" },
    footer: {
      companyText: "İplikten modaya",
      linksTitle: "Yasal Bağlantılar",
      terms: "Şartlar ve Koşullar",
      privacy: "Gizlilik Politikası",
      cookies: "Çerez Politikası",
      accessibility: "Erişilebilirlik",
      shipping: "Kargo ve Teslimat",
      kvkk: "KVKK",
      contactBtn: "İletişim"
    },
    categoryPage: {
      kicker: "Kategoriler",
      description: "Bu kategoriye ait görselleri zarif ve estetik bir düzen içinde keşfedin.",
      items: {
        linen: "Keten",
        viscose: "Viskon",
        cotton: "Pamuk",
        silk: "İpek"
      },
      cardLabel: "Özenle seçilmiş tasarım"
    }
  },
  en: {
    nav: { home: "Home", categories: "Categories", about: "About Us", contact: "Contact" },
    footer: {
      companyText: "From thread to trend",
      linksTitle: "Legal Links",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      cookies: "Cookies Policy",
      accessibility: "Accessibility",
      shipping: "Shipping & Delivery",
      kvkk: "KVKK",
      contactBtn: "Contact"
    },
    categoryPage: {
      kicker: "Categories",
      description: "Discover a refined collection of images for this fabric type in an elegant visual layout.",
      items: {
        linen: "Linen",
        viscose: "Viscose",
        cotton: "Cotton",
        silk: "Silk"
      },
      cardLabel: "Carefully selected design"
    }
  }
};

const fabricData = {
  linen: [
    { image: "./images/Linen/linenİmageCategory.jpg" },
    { image: "./images/Linen/linenİmageCategory1.png" },
    { image: "./images/Linen/linenİmageCategory2.jpg" },
    { image: "./images/Linen/linenİmageCategory3.jpg" },
    { image: "./images/Linen/linenİmageCategory4.jpg" },
    { image: "./images/Linen/linenİmageCategory5.jpg" },
    { image: "./images/Linen/linenİmageCategory6.jpg" },
    { image: "./images/Linen/linenİmageCategory7.jpg" }
  ],
  viscose: [
    { image: "./images/Viscose/viscoseİmageCategory1.jpg" },
    { image: "./images/Viscose/viscoseİmageCategory2.jpg" },
    { image: "./images/Viscose/viscoseİmageCategory3.jpg" },
    { image: "./images/Viscose/viscoseİmageCategory4.jpg" },
    { image: "./images/Viscose/viscoseİmageCategory5.jpg" },
    { image: "./images/Viscose/viscoseİmageCategory6.jpg" },
    { image: "./images/Viscose/viscoseİmageCategory7.jpg" },
    { image: "./images/Viscose/viscoseİmageCategory8.jpg" }
  ],
  cotton: [
    { image: "./images/Cotton/cottonİmageCategory1.jpg" },
    { image: "./images/Cotton/cottonİmageCategory2.jpg" },
    { image: "./images/Cotton/cottonİmageCategory3.jpg" },
    { image: "./images/Cotton/cottonİmageCategory9.jpg" },
    { image: "./images/Cotton/cottonİmageCategory4.webp" },
    { image: "./images/Cotton/cottonİmageCategory6.jpeg" },
    { image: "./images/Cotton/cottonİmageCategory11.jpg" },
    { image: "./images/Cotton/cottonİmageCategory8.jpeg" }
  ],
  silk: [
    { image: "./images/Silk/silkİmageCategory1.avif" },
    { image: "./images/Silk/silkİmageCategory2.avif" },
    { image: "./images/Silk/silkİmageCategory3.jpg" },
    { image: "./images/Silk/silkİmageCategory4.jpg" },
    { image: "./images/Silk/silkİmageCategory5.jpg" },
    { image: "./images/Silk/silkİmageCategory6.jpg" },
    { image: "./images/Silk/silkİmageCategory7.webp" },
    { image: "./images/Silk/silkİmageCategory8.jpg" }
  ]
};

const defaultLang = localStorage.getItem("siteLanguage") || "ar";
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const langButtons = document.querySelectorAll(".lang-btn");

function getValue(obj, path) {
  return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), obj);
}

function getCategoryType() {
  const params = new URLSearchParams(window.location.search);
  return params.get("type") || "linen";
}

function renderGallery(lang) {
  const type = getCategoryType();
  const gallery = document.getElementById("fabricGallery");
  const title = document.getElementById("categoryTitle");
  const kicker = document.getElementById("categoryKicker");
  const description = document.getElementById("categoryDescription");

  const locale = translations[lang] || translations.ar;
  const items = fabricData[type] || fabricData.linen;

  kicker.textContent = locale.categoryPage.kicker;
  title.textContent = locale.categoryPage.items[type] || locale.categoryPage.items.linen;
  description.textContent = locale.categoryPage.description;

  gallery.innerHTML = items.map((item, index) => `
    <article class="fabric-card reveal">
      <div class="fabric-card-image" style="background-image: url('${item.image}')"></div>
      <div class="fabric-card-body">
        <h3> <!-- ${title.textContent} --> ${index + 1}</h3>
       <!-- <p>${locale.categoryPage.cardLabel}</p> -->
      </div>
    </article>
  `).join("");

  const revealItems = document.querySelectorAll(".reveal");
  revealItems.forEach((el) => observer.observe(el));
}

function applyLanguage(lang) {
  const safeLang = translations[lang] ? lang : "ar";
  const locale = translations[safeLang];

  document.documentElement.lang = safeLang;
  document.body.setAttribute("lang", safeLang);
  document.documentElement.dir = safeLang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = getValue(locale, key);
    if (value) el.textContent = value;
  });

  langButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === safeLang));
  localStorage.setItem("siteLanguage", safeLang);

  renderGallery(safeLang);
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

applyLanguage(defaultLang);