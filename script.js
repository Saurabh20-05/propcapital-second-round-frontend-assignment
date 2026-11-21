
const U = (id, w = 700) => `https://images.unsplash.com/${id}?w=${w}&q=75`;
const FALLBACK_IMG = U("photo-1600596542815-ffad4c1539a9", 600);

const NAV = [
  ["AI Match", "#match"],
  [
    "Buyers",
    [
      ["Browse homes", "#homes"],
      ["By configuration", "#config"],
      ["By budget", "#budget"],
      ["By timeline", "#timeline"],
    ],
  ],
  ["Sellers", "#list"],
  [
    "NRIs",
    [
      ["NRI Hub", "#nri"],
      ["Cost calculator", "#tools"],
      ["Talk to NRI team", "#contact"],
    ],
  ],
  ["Project Hub", "#devs"],
  ["Estatepreneur", "#why"],
  [
    "Platform",
    [
      ["CRM", "#contact"],
      ["Integrations", "#contact"],
      ["Mobile app", "#contact"],
    ],
  ],
  [
    "Tools",
    [
      ["EMI calculator", "#tools"],
      ["Stamp duty", "#tools"],
    ],
  ],
  [
    "Media",
    [
      ["Blogs", "#contact"],
      ["Videos", "#contact"],
    ],
  ],
];
const PROMPTS = [
  "3 BHK in Gurugram under 4 Cr, ready to move",
  "Investment flat in Noida near metro",
  "RERA-verified 2 BHK in Faridabad",
  "Commercial office space in Gurugram",
];
const SUGG = [
  "Sell my 3 BHK in DLF 5",
  "New launches in Sector 150, Noida",
  "RERA-verified plots in Faridabad",
];
const STATS = [
  [250, "+", "Properties listed"],
  [50, "+", "Developers"],
  [3, "", "NCR cities covered"],
];
const FEAT = [
  [
    "Ask anything. No limits.",
    "Budget, builder, ROI, lifestyle, possession, resale.",
  ],
  [
    "Every parameter that matters.",
    "Thousands of data points weighed toward one goal.",
  ],
  [
    "100% personalized.",
    "Each result is ranked for you, never a generic filter.",
  ],
];
const EXAMPLES = [
  "Family home near top schools, about ₹4 Cr",
  "Highest rental yield under ₹3 Cr",
  "Quiet, green, ready-to-move 3 BHK",
];

const LISTINGS = [
  {
    n: "Fairway Heights",
    c: "Gurugram",
    a: "Golf Course Road",
    bhk: 4,
    p: 52000000,
    sf: 3100,
    s: "Ready to move",
    img: "photo-1600596542815-ffad4c1539a9",
  },
  {
    n: "Corridor Square",
    c: "Gurugram",
    a: "Dwarka Expressway",
    bhk: 2,
    p: 9800000,
    sf: 1120,
    s: "Under construction",
    img: "photo-1512917774080-9991f1c4c750",
  },
  {
    n: "Maple Row",
    c: "Gurugram",
    a: "Sohna Road",
    bhk: 3,
    p: 18500000,
    sf: 1700,
    s: "Ready to move",
    img: "photo-1560518883-ce09059eeffa",
  },
  {
    n: "Cedar Court",
    c: "Gurugram",
    a: "DLF Phase 5",
    bhk: 4,
    p: 95000000,
    sf: 4200,
    s: "Ready to move",
    img: "photo-1613490493576-7fde63acd811",
  },
  {
    n: "Linden Park",
    c: "Gurugram",
    a: "Golf Course Ext. Road",
    bhk: 3,
    p: 24000000,
    sf: 1850,
    s: "Ready to move",
    img: "photo-1600585154340-be6161a56a0c",
  },
  {
    n: "Ridge View",
    c: "Gurugram",
    a: "Southern Peripheral Rd",
    bhk: 2,
    p: 11500000,
    sf: 1250,
    s: "Under construction",
    img: "photo-1564013799919-ab600027ffc6",
  },
  {
    n: "Sunrise Nest",
    c: "Gurugram",
    a: "New Gurugram",
    bhk: 2,
    p: 7800000,
    sf: 1020,
    s: "New launch",
    img: "photo-1599809275671-b5942cabc7a2",
  },
  {
    n: "Plaza Residency",
    c: "Gurugram",
    a: "MG Road",
    bhk: 1,
    p: 8900000,
    sf: 720,
    s: "Ready to move",
    img: "photo-1571939228382-b2f2b585ce15",
  },
  {
    n: "Green Terrace",
    c: "Noida",
    a: "Sector 150",
    bhk: 1,
    p: 5400000,
    sf: 640,
    s: "New launch",
    img: "photo-1545324418-cc1a3fa10c00",
  },
  {
    n: "Orchard Walk",
    c: "Noida",
    a: "Greater Noida West",
    bhk: 3,
    p: 12600000,
    sf: 1580,
    s: "Under construction",
    img: "photo-1600607687939-ce8a6c25118c",
  },
  {
    n: "Willow Gate",
    c: "Faridabad",
    a: "Sector 80",
    bhk: 2,
    p: 7200000,
    sf: 1050,
    s: "Ready to move",
    img: "photo-1564013799919-ab600027ffc6",
  },
  {
    n: "Canal Court",
    c: "Faridabad",
    a: "NIT Faridabad",
    bhk: 4,
    p: 21000000,
    sf: 2600,
    s: "Ready to move",
    img: "photo-1599809275671-b5942cabc7a2",
  },
];
const STAGES = [
  [
    "AI Match & Discovery",
    "Tell IRA your goals and get every listing scored against them.",
    [
      ["Smart shortlist", "Ranked by fit, not by ad spend."],
      ["RERA check", "Every project cross-checked."],
      ["Saved searches", "Alerts when a better match appears."],
    ],
  ],
  [
    "Expert Consultation",
    "A verified consultant walks you through your options.",
    [
      ["1-to-1 call", "Plain-language advice on areas and builders."],
      ["Budget planning", "Loan eligibility and total cost."],
      ["Zero brokerage", "Buyers never pay a commission."],
    ],
  ],
  [
    "Shortlist & Compare",
    "Put your favourites side by side before you visit.",
    [
      ["Side-by-side view", "Price, size, possession and amenities."],
      ["Site visits", "Booked for you, in person or virtual."],
      ["Price insight", "See how a quote compares with the locality."],
    ],
  ],
  [
    "End-to-End Management",
    "We run the paperwork while you decide.",
    [
      ["Negotiation", "Support on price and payment plan."],
      ["Home loan", "Help with banks and sanction."],
      ["Legal checks", "Title and agreement review."],
    ],
  ],
  [
    "After-Sales Support",
    "24×7 assistance with registration, possession, handover and interiors. Real support long after you collect the keys.",
    [
      ["24×7 helpdesk", "Possession, handover and snag resolution."],
      ["Interiors & fit-out", "Trusted partners for a move-in-ready home."],
      ["Document vault", "Every paper stored, secure and accessible."],
    ],
  ],
  [
    "Lifetime Relationship",
    "Ongoing portfolio guidance plus resale and rental support. We stay your trusted property partner for life.",
    [
      ["Portfolio reviews", "Annual check-ins on value and rental yield."],
      ["Resale & rental", "We help you lease or exit whenever you are ready."],
      ["Priority access", "First look at new launches and private deals."],
    ],
  ],
];
const TRUST = [
  ["100%", "Verified consultants"],
  ["50,000+", "Happy clients"],
  ["End-to-end", "Management"],
  ["Transparent", "& secure"],
  ["4.8", "Client rating"],
];
const CFG = [
  ["1 BHK", 19, 1],
  ["2 BHK", 113, 2],
  ["3 BHK", 101, 3],
  ["4 BHK", 15, 4],
  ["4 BHK+", 16, 5],
];
const DEVS = [
  [
    "BPTP Limited",
    "BL",
    8,
    ["Residential", "Affordable", "Townships"],
    ["BPTP Discovery Park", "BPTP Park Grandeura", "BPTP District 1"],
    "₹55 Lakh",
  ],
  [
    "Adore Realtech Pvt Ltd",
    "AR",
    4,
    ["Residential", "Affordable"],
    [
      "Adore Samriddhi",
      "Adore Happy Homes Exclusive Phase 2",
      "Adore Happy Homes Pride",
    ],
    "₹22 Lakh",
  ],
  [
    "Signature Global",
    "SG",
    4,
    ["Residential", "Affordable"],
    [
      "Signature Global Aspire",
      "Signature Global Grand IVA",
      "Signature Global The Millennia 3",
    ],
    "₹32 Lakh 40K",
  ],
];
const FACTS = [
  ["50+", "Developers"],
  ["1,200+", "Projects"],
  ["4.8", "Average rating"],
  ["₹2 Cr", "Starting price"],
];
const BUDGET = [
  [
    "Value Homes",
    "Smart homes in prime Gurugram locations that fit your budget.",
    "Up to ₹1.2 Cr",
    "photo-1545324418-cc1a3fa10c00",
    12000000,
  ],
  [
    "Contemporary Homes",
    "Modern living with the perfect balance of comfort and value.",
    "₹1.2 Cr – ₹2.5 Cr",
    "photo-1512917774080-9991f1c4c750",
    25000000,
  ],
  [
    "Premium Luxury Homes",
    "Exquisite homes for those who want the very best.",
    "Above ₹2.5 Cr",
    "photo-1613490493576-7fde63acd811",
    999999999,
  ],
];
const TIME = [
  ["Ready to Move", 176, "Move in right away", 4],
  ["Under Construction", 60, "Pay as it builds", 3],
  ["New Launch", 14, "Best entry prices", 1],
];
const BENTO = [
  [
    "big",
    "Buy a Home",
    "RERA-verified listings in Gurugram, Faridabad & Noida. AI-matched to your goals.",
    "12,000+ listings",
    "photo-1600585154340-be6161a56a0c",
    "#homes",
  ],
  [
    "",
    "Commercial",
    "Offices, retail & warehouses across NCR.",
    "High-yield",
    "",
    "#homes",
  ],
  [
    "",
    "Invest & Grow",
    "Learn how to build a rental portfolio.",
    "7–12% avg returns",
    "photo-1611974789855-9c2a0a7236a3",
    "#tools",
  ],
  [
    "wide",
    "Buy in India from anywhere",
    "Virtual visits · FEMA guide · NRI loans",
    "NRI property platform",
    "photo-1569017388730-020b5f80a004",
    "#nri",
  ],
];
const AREAS = [
  ["Golf Course Road", "Luxury", "1,800+", "photo-1600596542815-ffad4c1539a9"],
  [
    "Dwarka Expressway",
    "Growth corridor",
    "2,400+",
    "photo-1486325212027-8081e485255e",
  ],
  ["Sohna Road", "Mid-premium", "1,600+", "photo-1560518883-ce09059eeffa"],
  ["DLF Phase 5", "Ultra luxury", "920+", "photo-1600585154340-be6161a56a0c"],
  [
    "Golf Course Ext. Road",
    "New luxury",
    "1,400+",
    "photo-1545324418-cc1a3fa10c00",
  ],
  [
    "Southern Peripheral Rd",
    "Emerging",
    "1,150+",
    "photo-1564013799919-ab600027ffc6",
  ],
  ["New Gurugram", "Value", "1,300+", "photo-1599809275671-b5942cabc7a2"],
  ["MG Road", "Established", "780+", "photo-1571939228382-b2f2b585ce15"],
];
const COUNTRIES = [
  "UAE",
  "USA",
  "UK",
  "Singapore",
  "Canada",
  "Australia",
  "Qatar",
  "Germany",
  "+8 more",
];
const NRI = [
  ["NRI Cost Calculator", "True all-in cost: TDS + LTCG", "#tools"],
  ["RERA-Verified Listings", "Every property, cross-checked", "#homes"],
  ["Talk to our NRI team", "FEMA, financing & buying questions", "#contact"],
];
const WHY = [
  [
    "End-to-end, not just search",
    "Most portals stop at a phone number. PropCapital covers AI matching, verified consultants, home loans and NRI services.",
  ],
  [
    "RERA-verified listings only",
    "Every project is cross-checked on the state RERA site before it goes live.",
  ],
  [
    "AI that understands you",
    "Describe your life in plain words and IRA turns it into filters, scores and a shortlist.",
  ],
];
const KPIS = [
  ["Free", "Professional HD photography"],
  ["2 hrs", "Average response time"],
  ["20+", "Portals your listing appears on"],
  ["48 hrs", "Average time to first enquiry"],
];
const FOOT = [
  [
    "Platform",
    [
      "PropCapital CRM",
      "Broker CRM",
      "Builder CRM",
      "Integrations",
      "Mobile app",
      "Book a demo",
    ],
  ],
  [
    "Company",
    [
      "About Us",
      "Careers",
      "Blogs & Insights",
      "Videos",
      "Property Maps",
      "Developer Directory",
      "Contact Us",
      "Privacy Policy",
      "Terms of Use",
    ],
  ],
  [
    "Properties",
    [
      "Buy a Home",
      "Commercial",
      "New Projects",
      "Plot & Land",
      "List Your Property",
    ],
  ],
  [
    "Services",
    ["AI Property Match", "All Services", "Home Loans", "Smart Match"],
  ],
  ["NRI Services", ["NRI Hub", "NRI Cost Calculator", "Talk to our NRI team"]],
];

/* ============ HELPERS ============ */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");
const money = (n) =>
  n >= 1e7
    ? (n / 1e7).toFixed(2).replace(/\.?0+$/, "") + " Cr"
    : Math.round(n / 1e5) + " Lakh";
const go = (sel) => $(sel).scrollIntoView({ behavior: "smooth" });

/* ============ NAV ============ */
$("#nav").innerHTML = NAV.map(([l, t]) =>
  typeof t === "string"
    ? `<a href="${t}">${l}</a>`
    : `<div class="dd"><button aria-haspopup="true">${l}</button><div class="menu">${t.map(([x, h]) => `<a href="${h}">${x}</a>`).join("")}</div></div>`,
).join("");
const burger = $("#burger"),
  nav = $("#nav");
const setNav = (o) => {
  nav.classList.toggle("open", o);
  burger.setAttribute("aria-expanded", o);
};
burger.onclick = () => setNav(!nav.classList.contains("open"));
nav.addEventListener("click", (e) => {
  const dd = e.target.closest(".dd > button");
  if (dd) {
    dd.parentElement.classList.toggle("open");
    return;
  }
  if (e.target.closest("a")) setNav(false);
});
document.addEventListener(
  "keydown",
  (e) => e.key === "Escape" && setNav(false),
);

/* ============ HERO ============ */
let pi = 0;
const q = $("#heroQ");
q.placeholder = PROMPTS[0];
setInterval(() => {
  pi = (pi + 1) % PROMPTS.length;
  q.placeholder = PROMPTS[pi];
}, 3200);
$("#sugg").innerHTML = SUGG.map(
  (s) => `<button type="button">${s}</button>`,
).join("");
$("#sugg").onclick = (e) => {
  if (e.target.matches("button")) {
    q.value = e.target.textContent;
    q.focus();
  }
};
$("#heroForm").onsubmit = (e) => {
  e.preventDefault();
  go("#match");
  ask(q.value || PROMPTS[pi]);
};
$("#heroStats").innerHTML = STATS.map(
  ([n, s, l]) =>
    `<div><b data-n="${n}" data-s="${s}">0${s}</b><span>${l}</span></div>`,
).join("");


const io = new IntersectionObserver(
  (es) =>
    es.forEach((en) => {
      if (!en.isIntersecting) return;
      io.unobserve(en.target);
      const el = en.target,
        end = +el.dataset.n,
        s = el.dataset.s;
      let t0;
      const step = (t) => {
        t0 = t0 || t;
        const k = Math.min((t - t0) / 900, 1);
        el.textContent = Math.round(end * k) + s;
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }),
  { threshold: 0.6 },
);
$$("[data-n]").forEach((el) => io.observe(el));

/* ============ AI MATCH ============ */
$("#feat").innerHTML = FEAT.map(([t, d]) => `<li><b>${t}</b>${d}</li>`).join(
  "",
);
$("#startMatch").onclick = (e) => {
  e.preventDefault();
  go("#match");
  $("#chatIn").focus();
};
const chat = $("#chatBody"),
  results = $("#results");
const say = (t, me, extra = "") => {
  const d = document.createElement("div");
  d.className = "msg" + (me ? " me" : "");
  d.innerHTML = t + extra;
  chat.appendChild(d);
  chat.scrollTop = chat.scrollHeight;
};
const emptyState = () => {
  results.innerHTML = `<div class="empty"><div class="empty-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5"/><path d="M9 20v-6h6v6"/></svg></div><b>No results yet</b><p>Describe what you're looking for in the chat and your scored matches appear here.</p><ul>${EXAMPLES.map((x) => `<li><span>${x}</span></li>`).join("")}</ul></div>`;
};
const greet = () =>
  say(
    `Hi! I'm <b>IRA</b>, your AI property consultant. Tell me what you're looking for.`,
    false,
    `<small>Try: "3 BHK in Gurugram under 2 Cr, ready to move"</small>`,
  );
emptyState();
greet();
results.onclick = (e) => {
  const li = e.target.closest("li");
  if (li) ask(li.textContent);
};

function parse(text) {
  const t = text.toLowerCase();
  const bhk = (t.match(/(\d)\s*bhk/) || [])[1];
  const m = t.match(/(\d+(?:\.\d+)?)\s*(cr|crore|lakh|lac)/);
  const max = m ? +m[1] * (m[2][0] === "c" ? 1e7 : 1e5) : null;
  const city = [
    ["gurugram", "Gurugram"],
    ["gurgaon", "Gurugram"],
    ["noida", "Noida"],
    ["faridabad", "Faridabad"],
  ].find(([k]) => t.includes(k));
  return {
    bhk: bhk && +bhk,
    max,
    city: city && city[1],
    ready: /ready/.test(t),
  };
}
function match(c) {
  return LISTINGS.map((p) => {
    let s = 55;
    if (c.bhk) s += p.bhk === c.bhk || (c.bhk >= 4 && p.bhk >= 4) ? 18 : -15;
    if (c.max) s += p.p <= c.max ? 18 : -25;
    if (c.city) s += p.c === c.city ? 12 : -12;
    if (c.ready) s += p.s === "Ready to move" ? 8 : -6;
    return { p, fit: Math.max(35, Math.min(98, s)) };
  })
    .sort((a, b) => b.fit - a.fit)
    .slice(0, 3);
}
function ask(text) {
  if (!text.trim()) return;
  say(text, true);
  const top = match(parse(text));
  setTimeout(() => {
    say(
      `Here are your top ${top.length} matches, best fit first. I weigh budget, size, city and possession.`,
    );
    results.innerHTML = top
      .map(
        ({ p, fit }) =>
          `<div class="mini"><img src="${U(p.img, 200)}" alt="${p.n}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'"><div><span class="fit">${fit}% fit</span><br><b>${p.n}</b><br><small>${p.bhk} BHK · ${p.a}, ${p.c}</small><br><b>₹${money(p.p)}</b></div></div>`,
      )
      .join("");
  }, 350);
}
$("#chatForm").onsubmit = (e) => {
  e.preventDefault();
  ask($("#chatIn").value);
  $("#chatIn").value = "";
};
$("#quickForm").onsubmit = (e) => {
  e.preventDefault();
  const b = +$("#qBud").value,
    bh = $("#qBhk").value,
    ci = $("#qCity").value;
  ask(
    `${bh ? bh + " BHK " : ""}${ci ? "in " + ci + " " : ""}${b ? "under " + b + " Cr" : ""}`.trim() ||
      "Show me the best homes",
  );
};
$("#iraTabs").onclick = (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  $$("#iraTabs button").forEach((x) => x.classList.toggle("on", x === b));
  const chatMode = b.dataset.t === "chat";
  $("#chatBody").hidden = $("#chatForm").hidden = !chatMode;
  $(".ira-head").hidden = !chatMode;
  $("#quickForm").hidden = chatMode;
};
$("#fab").onclick = () => {
  go("#match");
  setTimeout(() => $("#chatIn").focus(), 500);
};


const wheel = $("#wheel"),
  stage = $("#stage");
let cur = 0,
  timer;
STAGES.forEach(([t], i) => {
  const th = Math.PI - (i * Math.PI) / 5;
  const b = document.createElement("button");
  b.className = "node";
  b.type = "button";
  b.style.left = 50 + 40 * Math.cos(th) + "%";
  b.style.bottom = 24 + 235 * Math.sin(th) + "px";
  b.innerHTML = `<i>0${i + 1}</i>${t}`;
  b.onclick = () => {
    show(i);
    restart();
  };
  wheel.appendChild(b);
});
function show(i) {
  cur = i;
  $$(".node", wheel).forEach((n, k) => n.classList.toggle("on", k === i));
  const [t, d, items] = STAGES[i];
  stage.innerHTML = `<small>Stage ${i + 1} of ${STAGES.length}</small><h3>${t}</h3><p>${d}</p><ul style="padding:0">${items.map(([a, b]) => `<li><b>${a}</b>${b}</li>`).join("")}</ul>`;
}
const restart = () => {
  clearInterval(timer);
  if (!matchMedia("(prefers-reduced-motion:reduce)").matches)
    timer = setInterval(() => show((cur + 1) % STAGES.length), 5000);
};
$("#how").onmouseenter = () => clearInterval(timer);
$("#how").onmouseleave = restart;
show(4);
restart();
$("#trust").innerHTML =
  TRUST.map(([a, b]) => `<div><b>${a}</b>${b}</div>`).join("") +
  `<a class="btn gold" href="#contact">Contact our team</a>`;


const plan = (n) => {
 
  
  if (n === 1) {
    return `<svg class="plan" viewBox="0 0 140 94" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="128" height="82" rx="6" fill="#f4f7ec" stroke="#0b2a10" stroke-width="2"/>
      <line x1="72" y1="6" x2="72" y2="54" stroke="#0b2a10" stroke-width="1.8"/>
      <line x1="72" y1="74" x2="72" y2="88" stroke="#0b2a10" stroke-width="1.8"/>
      <!-- Living room sofa & table -->
      <rect x="14" y="16" width="28" height="11" rx="3" fill="#c8dc00" stroke="#0b2a10" stroke-width="1.2"/>
      <rect x="20" y="32" width="16" height="8" rx="2" fill="#e8f0d0" stroke="#0d4a19" stroke-width="1"/>
      <!-- Kitchen counter -->
      <rect x="14" y="64" width="38" height="16" rx="2" fill="#e8f0d0" stroke="#0d4a19" stroke-width="1.2"/>
      <!-- Bedroom double bed -->
      <rect x="84" y="20" width="38" height="34" rx="4" fill="#eef3b0" stroke="#0b2a10" stroke-width="1.4"/>
      <rect x="89" y="24" width="12" height="7" rx="1.5" fill="#fff" stroke="#0b2a10" stroke-width="1"/>
      <rect x="105" y="24" width="12" height="7" rx="1.5" fill="#fff" stroke="#0b2a10" stroke-width="1"/>
      <line x1="84" y1="36" x2="122" y2="36" stroke="#0d4a19" stroke-width="1.2"/>
    </svg>`;
  }
  if (n === 2) {
    return `<svg class="plan" viewBox="0 0 140 94" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="128" height="82" rx="6" fill="#f4f7ec" stroke="#0b2a10" stroke-width="2"/>
      <line x1="56" y1="6" x2="56" y2="88" stroke="#0b2a10" stroke-width="1.8"/>
      <line x1="56" y1="47" x2="112" y2="47" stroke="#0b2a10" stroke-width="1.8"/>
      <!-- Living + Dining -->
      <rect x="14" y="14" width="26" height="10" rx="2.5" fill="#c8dc00" stroke="#0b2a10" stroke-width="1.2"/>
      <rect x="14" y="62" width="32" height="18" rx="2" fill="#e8f0d0" stroke="#0d4a19" stroke-width="1.2"/>
      <!-- Bedroom 1 -->
      <rect x="78" y="13" width="46" height="26" rx="3" fill="#eef3b0" stroke="#0b2a10" stroke-width="1.3"/>
      <rect x="110" y="16" width="10" height="8" rx="1.5" fill="#fff" stroke="#0b2a10" stroke-width="1"/>
      <rect x="110" y="28" width="10" height="8" rx="1.5" fill="#fff" stroke="#0b2a10" stroke-width="1"/>
      <!-- Bedroom 2 -->
      <rect x="78" y="55" width="46" height="26" rx="3" fill="#e8f0d0" stroke="#0b2a10" stroke-width="1.3"/>
      <rect x="110" y="58" width="10" height="8" rx="1.5" fill="#fff" stroke="#0b2a10" stroke-width="1"/>
      <rect x="110" y="70" width="10" height="8" rx="1.5" fill="#fff" stroke="#0b2a10" stroke-width="1"/>
    </svg>`;
  }
  if (n === 3) {
    return `<svg class="plan" viewBox="0 0 140 94" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="128" height="82" rx="6" fill="#f4f7ec" stroke="#0b2a10" stroke-width="2"/>
      <line x1="52" y1="6" x2="52" y2="48" stroke="#0b2a10" stroke-width="1.8"/>
      <line x1="94" y1="6" x2="94" y2="88" stroke="#0b2a10" stroke-width="1.8"/>
      <line x1="6" y1="48" x2="52" y2="48" stroke="#0b2a10" stroke-width="1.8"/>
      <line x1="94" y1="48" x2="134" y2="48" stroke="#0b2a10" stroke-width="1.8"/>
      <!-- Living center -->
      <rect x="60" y="16" width="26" height="10" rx="2.5" fill="#c8dc00" stroke="#0b2a10" stroke-width="1.2"/>
      <rect x="64" y="31" width="18" height="8" rx="2" fill="#e8f0d0" stroke="#0d4a19" stroke-width="1"/>
      <rect x="60" y="64" width="26" height="16" rx="2" fill="#e8f0d0" stroke="#0d4a19" stroke-width="1.2"/>
      <!-- 3 Bedrooms -->
      <rect x="13" y="13" width="32" height="27" rx="3" fill="#eef3b0" stroke="#0b2a10" stroke-width="1.3"/>
      <rect x="17" y="16" width="10" height="6" rx="1" fill="#fff" stroke="#0b2a10" stroke-width="0.9"/>
      <rect x="31" y="16" width="10" height="6" rx="1" fill="#fff" stroke="#0b2a10" stroke-width="0.9"/>
      <rect x="101" y="13" width="26" height="27" rx="3" fill="#e8f0d0" stroke="#0b2a10" stroke-width="1.3"/>
      <rect x="106" y="16" width="16" height="6" rx="1" fill="#fff" stroke="#0b2a10" stroke-width="0.9"/>
      <rect x="101" y="55" width="26" height="26" rx="3" fill="#e8f0d0" stroke="#0b2a10" stroke-width="1.3"/>
      <rect x="106" y="58" width="16" height="6" rx="1" fill="#fff" stroke="#0b2a10" stroke-width="0.9"/>
    </svg>`;
  }
  if (n === 4) {
    return `<svg class="plan" viewBox="0 0 140 94" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="128" height="82" rx="6" fill="#f4f7ec" stroke="#0b2a10" stroke-width="2"/>
      <line x1="48" y1="6" x2="48" y2="88" stroke="#0b2a10" stroke-width="1.8"/>
      <line x1="92" y1="6" x2="92" y2="88" stroke="#0b2a10" stroke-width="1.8"/>
      <line x1="6" y1="47" x2="48" y2="47" stroke="#0b2a10" stroke-width="1.8"/>
      <line x1="92" y1="47" x2="134" y2="47" stroke="#0b2a10" stroke-width="1.8"/>
      <!-- Grand central living -->
      <rect x="56" y="15" width="28" height="10" rx="2.5" fill="#c8dc00" stroke="#0b2a10" stroke-width="1.2"/>
      <rect x="60" y="30" width="20" height="8" rx="2" fill="#e8f0d0" stroke="#0d4a19" stroke-width="1"/>
      <rect x="56" y="63" width="28" height="17" rx="2" fill="#e8f0d0" stroke="#0d4a19" stroke-width="1.2"/>
      <!-- 4 Corner Bedrooms -->
      <rect x="13" y="13" width="28" height="26" rx="3" fill="#eef3b0" stroke="#0b2a10" stroke-width="1.2"/>
      <rect x="18" y="16" width="18" height="5" rx="1" fill="#fff" stroke="#0b2a10" stroke-width="0.9"/>
      <rect x="13" y="55" width="28" height="26" rx="3" fill="#e8f0d0" stroke="#0b2a10" stroke-width="1.2"/>
      <rect x="18" y="58" width="18" height="5" rx="1" fill="#fff" stroke="#0b2a10" stroke-width="0.9"/>
      <rect x="99" y="13" width="28" height="26" rx="3" fill="#e8f0d0" stroke="#0b2a10" stroke-width="1.2"/>
      <rect x="104" y="16" width="18" height="5" rx="1" fill="#fff" stroke="#0b2a10" stroke-width="0.9"/>
      <rect x="99" y="55" width="28" height="26" rx="3" fill="#e8f0d0" stroke="#0b2a10" stroke-width="1.2"/>
      <rect x="104" y="58" width="18" height="5" rx="1" fill="#fff" stroke="#0b2a10" stroke-width="0.9"/>
    </svg>`;
  }
  
  return `<svg class="plan" viewBox="0 0 140 94" fill="none" aria-hidden="true">
    <rect x="6" y="6" width="128" height="82" rx="6" fill="#f4f7ec" stroke="#0b2a10" stroke-width="2"/>
    <!-- Private Terrace Deck strip -->
    <rect x="6" y="6" width="128" height="16" rx="4" fill="#c8dc00" fill-opacity="0.35" stroke="#0b2a10" stroke-width="1.5"/>
    <circle cx="24" cy="14" r="4" fill="#1b7f3c"/>
    <circle cx="116" cy="14" r="4" fill="#1b7f3c"/>
    <rect x="52" y="10" width="36" height="8" rx="4" fill="#fff" stroke="#0d4a19" stroke-width="1"/>
    <!-- Interior rooms -->
    <line x1="48" y1="22" x2="48" y2="88" stroke="#0b2a10" stroke-width="1.8"/>
    <line x1="92" y1="22" x2="92" y2="88" stroke="#0b2a10" stroke-width="1.8"/>
    <line x1="6" y1="55" x2="48" y2="55" stroke="#0b2a10" stroke-width="1.8"/>
    <line x1="92" y1="55" x2="134" y2="55" stroke="#0b2a10" stroke-width="1.8"/>
    <rect x="56" y="30" width="28" height="10" rx="2.5" fill="#c8dc00" stroke="#0b2a10" stroke-width="1.2"/>
    <rect x="56" y="64" width="28" height="16" rx="2" fill="#e8f0d0" stroke="#0d4a19" stroke-width="1.2"/>
    <rect x="13" y="28" width="28" height="21" rx="2.5" fill="#eef3b0" stroke="#0b2a10" stroke-width="1.2"/>
    <rect x="13" y="61" width="28" height="21" rx="2.5" fill="#e8f0d0" stroke="#0b2a10" stroke-width="1.2"/>
    <rect x="99" y="28" width="28" height="21" rx="2.5" fill="#e8f0d0" stroke="#0b2a10" stroke-width="1.2"/>
    <rect x="99" y="61" width="28" height="21" rx="2.5" fill="#e8f0d0" stroke="#0b2a10" stroke-width="1.2"/>
  </svg>`;
};
$("#cfg").innerHTML = CFG.map(
  ([l, c, n]) =>
    `<a class="card ${n === 2 ? "hot" : ""}" href="#homes" data-b="${Math.min(n, 4)}">${n === 2 ? '<i class="tag">Most popular</i>' : ""}<h3>${l}</h3><p>${c} Properties</p>${plan(n)}<span class="more">Explore →</span></a>`,
).join("");
$("#cfg").onclick = (e) => {
  const a = e.target.closest("[data-b]");
  if (a) {
    Object.assign(state, { bhk: a.dataset.b, area: "", max: 0, status: "" });
    draw();
  }
};

$("#facts").innerHTML = FACTS.map(
  ([a, b]) => `<div><b>${a}</b>${b}</div>`,
).join("");
$("#devTrack").innerHTML = DEVS.map(
  ([n, i, c, tg, pr, from]) =>
    `<article class="dev"><div class="av">${i}</div><h3>${n}</h3><small>${c} Projects</small><div class="tags">${tg.map((x) => `<span>${x}</span>`).join("")}</div><b style="font-size:14px">Featured projects</b><ul>${pr.map((x) => `<li>${x}</li>`).join("")}</ul><p><b>${from}</b> <small>${from[0] === "₹" ? "onwards" : ""}</small></p></article>`,
).join("");
const track = $("#devTrack");
const step = () => track.firstElementChild.getBoundingClientRect().width + 24;
const pages = () =>
  Math.max(1, DEVS.length - Math.round(track.clientWidth / step()) + 1);
const count = () => {
  $(".pager").hidden = pages() <= 1;
  $("#devCount").textContent =
    `${Math.min(Math.round(track.scrollLeft / step()) + 1, pages())} / ${pages()}`;
};
$("#devPrev").onclick = () =>
  track.scrollBy({ left: -step(), behavior: "smooth" });
$("#devNext").onclick = () =>
  track.scrollBy({ left: step(), behavior: "smooth" });
track.onscroll = count;
addEventListener("resize", count);
count();

$("#budgetGrid").innerHTML = BUDGET.map(
  ([t, d, r, img, mx]) =>
    `<a class="ph" href="#homes" data-max="${mx}" style="--i:url('${U(img, 900)}')"><div><h3>${t}</h3><p>${d}</p><span class="chip">${r}</span></div></a>`,
).join("");
$("#budgetGrid").onclick = (e) => {
  const a = e.target.closest("[data-max]");
  if (a) {
    Object.assign(state, { max: +a.dataset.max, area: "", bhk: "" });
    syncChips();
    draw();
  }
};

const stageArt = (stage) => {
  if (stage === "Ready to Move") {
    return `<svg class="tl-art" viewBox="0 0 260 110" fill="none" aria-hidden="true">
      <rect x="20" y="96" width="220" height="4" rx="2" fill="#0b2a10"/>
      <!-- Left completed tower -->
      <rect x="42" y="28" width="54" height="68" rx="4" fill="#0b2a10"/>
      <rect x="50" y="36" width="12" height="10" rx="1.5" fill="#c8dc00"/>
      <rect x="74" y="36" width="12" height="10" rx="1.5" fill="#e8f0d0"/>
      <rect x="50" y="54" width="12" height="10" rx="1.5" fill="#e8f0d0"/>
      <rect x="74" y="54" width="12" height="10" rx="1.5" fill="#c8dc00"/>
      <rect x="50" y="72" width="12" height="10" rx="1.5" fill="#c8dc00"/>
      <rect x="74" y="72" width="12" height="10" rx="1.5" fill="#e8f0d0"/>
      <!-- Right completed tall tower -->
      <rect x="106" y="14" width="66" height="82" rx="4" fill="#0d4a19"/>
      <rect x="128" y="8" width="22" height="6" rx="2" fill="#c8dc00"/>
      <rect x="116" y="24" width="16" height="11" rx="1.5" fill="#c8dc00"/>
      <rect x="144" y="24" width="16" height="11" rx="1.5" fill="#e8f0d0"/>
      <rect x="116" y="42" width="16" height="11" rx="1.5" fill="#e8f0d0"/>
      <rect x="144" y="42" width="16" height="11" rx="1.5" fill="#c8dc00"/>
      <rect x="116" y="60" width="16" height="11" rx="1.5" fill="#c8dc00"/>
      <rect x="144" y="60" width="16" height="11" rx="1.5" fill="#e8f0d0"/>
      <rect x="131" y="78" width="16" height="18" rx="2" fill="#c8dc00"/>
      <!-- Trees -->
      <circle cx="196" cy="78" r="12" fill="#1b7f3c"/>
      <rect x="194" y="86" width="4" height="10" fill="#0b2a10"/>
      <circle cx="216" cy="82" r="9" fill="#c8dc00"/>
      <rect x="214" y="88" width="4" height="8" fill="#0b2a10"/>
    </svg>`;
  }
  if (stage === "Under Construction") {
    return `<svg class="tl-art" viewBox="0 0 260 110" fill="none" aria-hidden="true">
      <rect x="20" y="96" width="220" height="4" rx="2" fill="#0b2a10"/>
      <!-- Built lower floors -->
      <rect x="48" y="54" width="76" height="42" rx="3" fill="#0b2a10"/>
      <rect x="58" y="63" width="14" height="10" rx="1.5" fill="#e8f0d0"/>
      <rect x="80" y="63" width="14" height="10" rx="1.5" fill="#c8dc00"/>
      <rect x="102" y="63" width="14" height="10" rx="1.5" fill="#e8f0d0"/>
      <rect x="58" y="79" width="14" height="10" rx="1.5" fill="#c8dc00"/>
      <rect x="80" y="79" width="14" height="10" rx="1.5" fill="#e8f0d0"/>
      <rect x="102" y="79" width="14" height="10" rx="1.5" fill="#c8dc00"/>
      <!-- Exposed structural frame / scaffolding upper floors -->
      <rect x="50" y="34" width="72" height="20" stroke="#0d4a19" stroke-width="2.5" stroke-dasharray="5 3" fill="#f4f7ec"/>
      <line x1="74" y1="34" x2="74" y2="54" stroke="#0d4a19" stroke-width="2"/>
      <line x1="98" y1="34" x2="98" y2="54" stroke="#0d4a19" stroke-width="2"/>
      <!-- Tower Crane -->
      <line x1="158" y1="12" x2="158" y2="96" stroke="#0b2a10" stroke-width="4"/>
      <line x1="152" y1="24" x2="164" y2="34" stroke="#0b2a10" stroke-width="2"/>
      <line x1="152" y1="44" x2="164" y2="54" stroke="#0b2a10" stroke-width="2"/>
      <line x1="152" y1="64" x2="164" y2="74" stroke="#0b2a10" stroke-width="2"/>
      <line x1="92" y1="16" x2="196" y2="16" stroke="#c8dc00" stroke-width="4" stroke-linecap="round"/>
      <line x1="158" y1="10" x2="104" y2="16" stroke="#0b2a10" stroke-width="1.5"/>
      <line x1="158" y1="10" x2="190" y2="16" stroke="#0b2a10" stroke-width="1.5"/>
      <line x1="106" y1="16" x2="106" y2="28" stroke="#0b2a10" stroke-width="1.5"/>
      <rect x="101" y="28" width="10" height="5" rx="1" fill="#c8dc00"/>
      <rect x="182" y="16" width="12" height="8" rx="1" fill="#0b2a10"/>
    </svg>`;
  }
  return `<svg class="tl-art" viewBox="0 0 260 110" fill="none" aria-hidden="true">
    <rect x="20" y="96" width="220" height="4" rx="2" fill="#0b2a10"/>
    <!-- Future blueprint ghost outline -->
    <rect x="68" y="22" width="76" height="74" rx="4" stroke="#b9c6a8" stroke-width="2" stroke-dasharray="5 5" fill="#f4f7ec"/>
    <line x1="84" y1="38" x2="128" y2="38" stroke="#cfd9be" stroke-width="2" stroke-dasharray="4 4"/>
    <line x1="84" y1="54" x2="128" y2="54" stroke="#cfd9be" stroke-width="2" stroke-dasharray="4 4"/>
    <!-- Foundation base & rebar pillars -->
    <rect x="58" y="84" width="96" height="12" rx="2" fill="#0b2a10"/>
    <rect x="74" y="72" width="6" height="12" fill="#0d4a19"/>
    <rect x="103" y="72" width="6" height="12" fill="#0d4a19"/>
    <rect x="132" y="72" width="6" height="12" fill="#0d4a19"/>
    <!-- Launch Flag & Signboard -->
    <line x1="184" y1="44" x2="184" y2="96" stroke="#0b2a10" stroke-width="3" stroke-linecap="round"/>
    <path d="M184 46H218L211 55L218 64H184V46Z" fill="#c8dc00" stroke="#0b2a10" stroke-width="1.5" stroke-linejoin="round"/>
    <rect x="34" y="78" width="18" height="18" rx="2" fill="#c8dc00" stroke="#0b2a10" stroke-width="1.5"/>
    <line x1="34" y1="84" x2="52" y2="84" stroke="#0b2a10" stroke-width="1.5"/>
  </svg>`;
};

$("#timeGrid").innerHTML = TIME.map(
  ([t, c, d]) =>
    `<a class="card tl" href="#homes" data-s="${t}"><div><h3>${t}</h3><p>${c} Properties · ${d}</p></div>${stageArt(t)}</a>`,
).join("");

$("#timeGrid").onclick = (e) => {
  const a = e.target.closest("[data-s]");
  if (a) {
    Object.assign(state, {
      status:
        a.dataset.s === "Ready to Move"
          ? "Ready to move"
          : a.dataset.s === "New Launch"
            ? "New launch"
            : "Under construction",
      area: "",
      bhk: "",
      max: 0,
    });
    syncChips();
    draw();
  }
};

$("#bento").innerHTML = BENTO.map(
  ([k, t, d, s, img, h]) =>
    `<a class="bt ${k}" href="${h}" style="${img ? `--i:url('${U(img, 900)}')` : ""}"><small>${s}</small><h3>${t}</h3><p>${d}</p></a>`,
).join("");
$("#areaGrid").innerHTML = AREAS.map(
  ([n, t, c, img]) =>
    `<button class="area" data-a="${n}" style="--i:url('${U(img, 600)}')"><div><small>Gurugram · ${t}</small><b>${n}</b><i>${c} listings</i></div></button>`,
).join("");
$("#areaGrid").onclick = (e) => {
  const b = e.target.closest("[data-a]");
  if (b) {
    Object.assign(state, { area: b.dataset.a, bhk: "", max: 0, status: "" });
    syncChips();
    draw();
    go("#homes");
  }
};


const state = { bhk: "", max: 0, area: "", status: "", saved: new Set() };
function syncChips() {
  const other = state.area || state.max || state.status;
  $$("#bhkChips button").forEach((b) =>
    b.classList.toggle("on", !other && b.dataset.b === state.bhk),
  );
}
function draw() {
  syncChips();
  const rows = LISTINGS.map((p, i) => [p, i]).filter(
    ([p]) =>
      (!state.bhk || (state.bhk === "4" ? p.bhk >= 4 : p.bhk === +state.bhk)) &&
      (!state.max ||
        (state.max === 999999999 ? p.p > 25000000 : p.p <= state.max)) &&
      (!state.area || p.a === state.area) &&
      (!state.status || p.s === state.status),
  );
  const bits = [
    state.bhk && (state.bhk === "4" ? "4 BHK+" : state.bhk + " BHK"),
    state.area,
    state.status,
    state.max &&
      (state.max === 999999999
        ? "above ₹2.5 Cr"
        : "up to ₹" + money(state.max)),
  ].filter(Boolean);
  $("#homesNote").innerHTML = bits.length
    ? `Showing ${rows.length} home${rows.length === 1 ? "" : "s"} for ${bits.join(", ")}. <button class="lnk" data-clear>Clear filters</button>`
    : "Sample listings. Filter by size or save the ones you like.";
  $("#listings").innerHTML = rows.length
    ? rows
        .map(([p, i]) => {
          const sv = state.saved.has(i);
          return `<article class="lc"><div class="pic"><img src="${U(p.img)}" alt="${p.n}, ${p.a}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'"><span class="badge">${p.s}</span><button class="save" data-i="${i}" aria-pressed="${sv}" aria-label="Save ${p.n}">${sv ? "♥" : "♡"}</button></div><div class="bd"><div class="price">₹${money(p.p)}</div><b>${p.n}</b><div class="meta">${p.bhk} BHK · ${p.sf} sq ft</div><div class="meta">${p.a}, ${p.c}</div></div></article>`;
        })
        .join("")
    : `<p class="none">No homes match these filters yet. <button class="lnk" data-clear>Clear filters</button></p>`;
}
document.addEventListener("click", (e) => {
  if (e.target.dataset && e.target.dataset.clear !== undefined) {
    Object.assign(state, { bhk: "", max: 0, area: "", status: "" });
    draw();
  }
});
$("#listings").onclick = (e) => {
  const b = e.target.closest(".save");
  if (!b) return;
  const i = +b.dataset.i;
  state.saved.has(i) ? state.saved.delete(i) : state.saved.add(i);
  draw();
};
$("#bhkChips").onclick = (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  Object.assign(state, { bhk: b.dataset.b, area: "", max: 0, status: "" });
  syncChips();
  draw();
};
draw();

const rP = $("#rP");
const rR = $("#rR");
const rN = $("#rN");

const oP = $("#oP");
const oR = $("#oR");
const oN = $("#oN");

const emiOut = $("#emiOut");

const sV = $("#sV");
const sC = $("#sC");
const stOut = $("#stOut");

const emi = () => {
  const P = +rP.value,
    r = +rR.value / 1200,
    n = +rN.value * 12,
    m = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  oP.textContent = inr(P);
  oR.textContent = rR.value + "%";
  oN.textContent = rN.value + " yrs";
  emiOut.innerHTML = `${inr(m)} / month<br><small style="font-weight:400">Total interest ${inr(m * n - P)}</small>`;
};
const stamp = () => {
  const v = +sV.value,
    d = (v * sC.value) / 100,
    reg = Math.min(v * 0.01, 300000);
  stOut.innerHTML = `${inr(d + reg)}<br><small style="font-weight:400">Duty ${inr(d)} + registration ${inr(reg)}</small>`;
};
[rP, rR, rN].forEach((e) => (e.oninput = emi));
[sV, sC].forEach((e) => (e.oninput = stamp));
emi();
stamp();


$("#countries").innerHTML = COUNTRIES.map((c) => `<span>${c}</span>`).join("");
$("#nriLinks").innerHTML =
  NRI.map(([a, b, h]) => `<a href="${h}">${a}<small>${b}</small></a>`).join(
    "",
  ) +
  `<div class="big">₹5,250 Cr<small>DLF NRI sales in FY2025 · 32% of total revenue</small></div>`;
$("#faq").innerHTML = WHY.map(
  ([q, a], i) =>
    `<details ${i ? "" : "open"}><summary>${q}</summary><p>${a}</p></details>`,
).join("");
$("#kpis").innerHTML = KPIS.map(([a, b]) => `<div><b>${a}</b>${b}</div>`).join(
  "",
);
$("#foot").innerHTML =
  `<div><a class="brand" href="#top" style="color:#fff"><svg class="brand-icon" style="color:var(--gold)" viewBox="0 0 48 48" fill="none"><path d="M5 40V22L17 14V40" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/><path d="M17 40V9L30 2V40" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/><path d="M30 40V19L43 12V40" stroke="currentColor" stroke-width="3.5" stroke-linejoin="round"/><path d="M3 43H45" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg><span>PropCapital<span>.ai</span></span></a><p>India's AI-powered real estate platform. Search, match and invest with confidence across Gurugram, Faridabad and Noida.</p></div>` +
  FOOT.map(
    ([h, l]) =>
      `<div><b>${h}</b>${l.map((x) => `<a href="#top">${x}</a>`).join("")}</div>`,
  ).join("");
$("#leadForm").onsubmit = (e) => {
  e.preventDefault();
  const f = e.target,
    ok = f.name.value.trim() && /^\d{10}$/.test(f.phone.value.trim()),
    m = $("#leadMsg");
  m.className = "msg" + (ok ? "" : " err");
  m.textContent = ok
    ? `Thanks ${f.name.value.trim()}, we'll call you within 2 hours.`
    : "Enter your name and a 10-digit phone number.";
  if (ok) f.reset();
};
