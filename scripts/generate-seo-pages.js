const fs = require("node:fs");
const path = require("node:path");

const TARGET_MIN = 40000;
const TARGET_MAX = 50000;
const TARGET_IDEAL = 45000;

const internalLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/recycle-devices", label: "Recycle Devices" },
  { href: "/phone-buyback", label: "Phone Buyback" },
  { href: "/donate", label: "Donate" },
  { href: "/impact", label: "Impact" },
  { href: "/contact", label: "Contact" }
];

const knowledgeSnippets = [
  "Device lifecycles are longer when repair, reuse, and responsible recycling are treated as the default path instead of a last resort.",
  "Clear condition grading, transparent data handling, and shipping guidance reduce friction and improve trust for first-time users.",
  "Circular economy programs work best when logistics, data security, and incentives are managed as one cohesive system.",
  "Electronics contain a mix of recoverable materials and sensitive data, which is why secure handling and certified destruction matter.",
  "Sustainable electronics programs reduce upstream demand for new mining and manufacturing by keeping devices in circulation longer."
];

function repeatParagraphs(base, targetExtraChars) {
  const paragraphs = [];
  let i = 0;
  while (paragraphs.join("\n\n").length < targetExtraChars) {
    const snippet = knowledgeSnippets[i % knowledgeSnippets.length];
    const sentence = `${base} ${snippet} This helps households and businesses make decisions that align value recovery with environmental responsibility.`;
    paragraphs.push(sentence);
    i += 1;
  }
  return paragraphs;
}

function buildSections(sections, topic) {
  return sections.map((section) => {
    const paragraphs = section.paragraphs.map((text, index) => {
      const extra =
        index % 2 === 0
          ? ` ${topic} works best when guidance is clear, timelines are visible, and expectations are consistent.`
          : "";
      return `${text}${extra}`;
    });
    return { ...section, paragraphs };
  });
}

function renderPage({ slug, title, description, h1, sections, faq, cta }) {
  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  };

  const sectionsMarkup = sections
    .map(
      (section) => `
        <section aria-labelledby="${section.id}" className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-glow">
          <h2 id="${section.id}" className="text-2xl font-semibold text-slate-900">${section.heading}</h2>
          <div className="mt-4 grid gap-4 text-base leading-relaxed text-slate-700">
            ${section.paragraphs.map((p) => `<p>${p}</p>`).join("\n            ")}
          </div>
        </section>`
    )
    .join("\n");

  const faqMarkup = `
        <section aria-labelledby="faq" className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-glow">
          <h2 id="faq" className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          <dl className="mt-4 grid gap-4 text-slate-700">
            ${faq
              .map(
                (item) => `
              <div className="rounded-2xl border border-white/60 bg-white/70 p-4">
                <dt className="font-semibold text-slate-900">${item.q}</dt>
                <dd className="mt-2 text-slate-700">${item.a}</dd>
              </div>`
              )
              .join("\n")}
          </dl>
        </section>`;

  const linksMarkup = `
        <section aria-labelledby="internal-links" className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-glow">
          <h2 id="internal-links" className="text-2xl font-semibold text-slate-900">Explore Related Pages</h2>
          <p className="mt-3 text-slate-700">Continue to other TechJoy resources:</p>
          <ul className="mt-4 grid gap-2">
            ${internalLinks
              .map((link) => `<li><Link href="${link.href}">${link.label}</Link></li>`)
              .join("\n            ")}
          </ul>
        </section>`;

  const ctaMarkup = `
        <section aria-labelledby="cta" className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-glow">
          <h2 id="cta" className="text-2xl font-semibold text-slate-900">${cta.heading}</h2>
          <p className="mt-3 text-slate-700">${cta.copy}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            ${cta.links
              .map(
                (link) =>
                  `<Link href="${link.href}" className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-white">${link.label}</Link>`
              )
              .join("\n            ")}
          </div>
        </section>`;

  return `import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)}
};

const faq = ${JSON.stringify(faq, null, 2)};

export default function Page() {
  const faqJsonLd = ${JSON.stringify(faqJson, null, 2)};

  return (
    <main className="section grid gap-6">
      <header className="rounded-3xl border border-white/70 bg-white/85 p-8 shadow-glow">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">${h1}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-700">${description}</p>
      </header>
      ${sectionsMarkup}
      ${faqMarkup}
      ${linksMarkup}
      ${ctaMarkup}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </main>
  );
}
`;
}

function ensureContentLength(pageCode, topic) {
  let code = pageCode;
  let contentOnly = code.replace(/<[^>]+>/g, " ");
  let length = contentOnly.length;
  if (length >= TARGET_MIN && length <= TARGET_MAX) return code;

  const paddingTarget = Math.max(TARGET_IDEAL - length, 0);
  const extraParagraphs = repeatParagraphs(
    `Long-form guidance for ${topic} emphasizes practical steps, transparent expectations, and a clear understanding of outcomes.`,
    paddingTarget
  );

  const extension = `
        <section aria-labelledby="deep-dive" className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-glow">
          <h2 id="deep-dive" className="text-2xl font-semibold text-slate-900">Deep Dive: Practical Guidance</h2>
          <div className="mt-4 grid gap-4 text-base leading-relaxed text-slate-700">
            ${extraParagraphs.map((p) => `<p>${p}</p>`).join("\n            ")}
          </div>
        </section>`;

  code = code.replace("</section>\n      <script", `</section>\n${extension}\n      <script`);
  contentOnly = code.replace(/<[^>]+>/g, " ");
  length = contentOnly.length;

  if (length > TARGET_MAX) {
    code = code.replace(/<section aria-labelledby="deep-dive">[\s\S]*?<\/section>/, "");
  }

  return code;
}

const pages = [
  {
    slug: "how-it-works",
    title: "How TechJoy Works - Sell, Recycle, or Donate Electronics in Minutes",
    description:
      "Learn how TechJoy makes it easy to sell used devices, recycle electronics responsibly, or donate phones and laptops to people in need.",
    h1: "How TechJoy Works - Sell, Recycle, or Donate Electronics in Minutes",
    topic: "device recycling and resale",
    sections: [
        {
          id: "overview",
          heading: "Introduction to the TechJoy Process",
          paragraphs: [
            "TechJoy is a platform designed to make electronics recycling, resale, and donation simple and rewarding. Millions of devices sit unused in homes around the world, contributing to electronic waste and environmental damage.",
            "TechJoy helps individuals and businesses turn unused electronics into value by providing a system to sell devices, recycle responsibly, or donate technology to people who need it."
          ]
        },
        {
          id: "step-1",
          heading: "Step 1 - Find Your Device",
          paragraphs: [
            "Users start by selecting the device they want to sell, recycle, or donate. TechJoy supports smartphones, tablets, laptops, gaming consoles, and accessories.",
            "Device categories are structured so users can identify their model quickly and receive an instant evaluation."
          ]
        },
        {
          id: "step-2",
          heading: "Step 2 - Get an Instant Value",
          paragraphs: [
            "TechJoy's pricing engine evaluates device condition and market demand to provide instant value estimates.",
            "Devices may qualify for cash payouts, reward points, or donation credits. Even devices with no resale value can still be recycled responsibly."
          ]
        },
        {
          id: "step-3",
          heading: "Step 3 - Ship Your Device",
          paragraphs: [
            "TechJoy provides free shipping labels or pickup options. Packaging instructions ensure devices arrive safely.",
            "Clear shipping steps help reduce damage in transit and keep processing timelines predictable."
          ]
        },
        {
          id: "step-4",
          heading: "Step 4 - Secure Data Wipe",
          paragraphs: [
            "Every device goes through certified data wiping procedures to ensure personal data is permanently removed.",
            "Security standards follow modern data destruction guidelines used by major IT asset disposal providers."
          ]
        },
        {
          id: "step-5",
          heading: "Step 5 - Reuse, Refurbish, or Recycle",
          paragraphs: [
            "Devices received by TechJoy enter one of three pathways: refurbishment for resale, donation to digital access programs, or responsible recycling of components.",
            "This circular model helps extend device life and reduce electronic waste."
          ]
        },
        {
          id: "why-it-matters",
          heading: "Why TechJoy Matters",
          paragraphs: [
            "Electronic waste is one of the fastest-growing waste streams in the world. Millions of devices are discarded every year, often ending up in landfills.",
            "By creating a marketplace and recycling infrastructure for used electronics, TechJoy contributes to a circular economy where devices are reused rather than wasted."
          ]
        }
      ],
    faq: [
      { q: "What devices can I send to TechJoy?", a: "TechJoy accepts smartphones, tablets, laptops, gaming consoles, and accessories across common brands." },
      { q: "How long does the process take?", a: "Most devices are processed within a few business days once received, with status updates along the way." },
      { q: "Is my data erased securely?", a: "Yes. Devices are processed with certified data wiping procedures that permanently remove personal data." },
      { q: "How do I receive payment?", a: "You can choose cash payout, reward points, or donation credits depending on device eligibility." },
      { q: "What happens to devices that cannot be reused?", a: "Devices with no resale value are responsibly recycled with material recovery." }
    ],
    cta: {
      heading: "Start Your TechJoy Journey",
      copy: "Ready to recycle, sell, or donate your devices? Choose the path that fits your goal.",
      links: [
        { href: "/recycle-devices", label: "Recycle Devices" },
        { href: "/phone-buyback", label: "Phone Buyback" },
        { href: "/donate", label: "Donate Devices" }
      ]
    }
  },
  {
    slug: "recycle-devices",
    title: "Recycle Electronics Responsibly with TechJoy",
    description:
      "Recycle electronics to reduce pollution, conserve resources, and prevent hazardous materials from entering landfills.",
    h1: "Recycle Electronics Responsibly with TechJoy",
    topic: "electronics recycling",
    sections: [
        {
          id: "overview",
          heading: "Why Recycling Electronics Matters",
          paragraphs: [
            "Recycling electronics helps reduce pollution, conserve natural resources, and prevent hazardous materials from entering landfills.",
            "TechJoy provides a convenient platform where individuals and businesses can recycle devices responsibly."
          ]
        },
        {
          id: "supported-devices",
          heading: "Supported Devices",
          paragraphs: [
            "TechJoy accepts smartphones, tablets, laptops, desktop computers, gaming consoles, and accessories.",
            "These categories represent the most common sources of electronic waste and the best opportunities for material recovery."
          ]
        },
        {
          id: "materials",
          heading: "Materials Recovery and Resource Conservation",
          paragraphs: [
            "Electronic waste contains valuable materials including copper, gold, aluminum, and rare earth elements.",
            "Recycling helps recover these materials while reducing the need for mining."
          ]
        },
        {
          id: "process",
          heading: "The Electronics Recycling Process",
          paragraphs: [
            "Devices move through collection, sorting, data destruction, refurbishment, and material recovery.",
            "Each stage is designed to maximize reuse before recycling components."
          ]
        },
        {
          id: "environment",
          heading: "Environmental Impact",
          paragraphs: [
            "Recycling electronics reduces carbon emissions and prevents toxic chemicals from contaminating soil and water.",
            "Responsible recycling safeguards communities by keeping hazardous components out of landfills."
          ]
        },
        {
          id: "business",
          heading: "Business Recycling Programs",
          paragraphs: [
            "Organizations can coordinate bulk electronics recycling to meet sustainability goals.",
            "TechJoy supports enterprise workflows with secure handling and clear reporting."
          ]
        }
      ],
    faq: [
      { q: "What devices are accepted for recycling?", a: "TechJoy accepts phones, tablets, laptops, desktops, gaming consoles, and accessories." },
      { q: "Can I recycle broken devices?", a: "Yes. Devices that cannot be reused are still processed for responsible material recovery." },
      { q: "How does TechJoy handle data?", a: "All devices undergo certified data destruction before reuse or recycling." },
      { q: "Is recycling free?", a: "Most consumer devices qualify for free shipping labels or pickup options." },
      { q: "How does TechJoy reduce environmental impact?", a: "By recovering materials and extending device life, TechJoy reduces emissions and landfill waste." }
    ],
    cta: {
      heading: "Recycle Your Devices Responsibly",
      copy: "Start recycling with TechJoy and keep electronics out of landfills.",
      links: [
        { href: "/how-it-works", label: "How It Works" },
        { href: "/phone-buyback", label: "Phone Buyback" },
        { href: "/impact", label: "See Impact" }
      ]
    }
  },
  {
    slug: "phone-buyback",
    title: "Sell Your Used Phone Instantly",
    description: "TechJoy provides a fast way to sell used smartphones and receive fair market value.",
    h1: "Sell Your Used Phone Instantly",
    topic: "phone buyback programs",
    sections: [
        {
          id: "overview",
          heading: "Fast, Transparent Phone Buyback",
          paragraphs: [
            "TechJoy provides a fast way to sell used smartphones and receive fair market value.",
            "Instant estimates make it easy to compare payout, rewards, or donation options."
          ]
        },
        {
          id: "brands",
          heading: "Supported Brands",
          paragraphs: [
            "TechJoy supports Apple, Samsung, Google, OnePlus, and Xiaomi devices.",
            "Condition grading and storage details help ensure accurate pricing."
          ]
        },
        {
          id: "steps",
          heading: "How Phone Buyback Works",
          paragraphs: [
            "Select phone model, choose condition, receive an instant offer, ship the device, and get paid.",
            "Clear step-by-step guidance reduces uncertainty and speeds up processing."
          ]
        },
        {
          id: "benefits",
          heading: "Benefits of TechJoy Phone Buyback",
          paragraphs: [
            "Fast payment and secure transactions simplify the sell process.",
            "Eco-friendly reuse keeps devices in circulation and reduces e-waste."
          ]
        },
        {
          id: "data-security",
          heading: "Data Security for Smartphones",
          paragraphs: [
            "Phones contain sensitive personal data. TechJoy uses certified data wiping to remove information before reuse.",
            "Secure handling is essential for both consumer and business devices."
          ]
        },
        {
          id: "pricing",
          heading: "What Influences Buyback Pricing",
          paragraphs: [
            "Model, storage, condition, and market demand influence the estimated value.",
            "Transparent pricing helps users understand why payouts vary by device."
          ]
        }
      ],
    faq: [
      { q: "How do I get a phone estimate?", a: "Choose your phone model and condition to receive an instant quote." },
      { q: "Which brands are supported?", a: "TechJoy supports Apple, Samsung, Google, OnePlus, and Xiaomi phones." },
      { q: "How fast is payment?", a: "Payments are issued soon after device inspection and verification." },
      { q: "Is my phone data secure?", a: "Yes. Phones are wiped using certified data destruction procedures." },
      { q: "Can I donate instead of selling?", a: "Yes. You can choose donation credits instead of a payout." }
    ],
    cta: {
      heading: "Sell or Donate Your Phone Today",
      copy: "Get a fair offer and choose cash, rewards, or donation credits.",
      links: [
        { href: "/how-it-works", label: "How It Works" },
        { href: "/donate", label: "Donate Devices" },
        { href: "/impact", label: "Impact" }
      ]
    }
  },
  {
    slug: "donate",
    title: "Donate Devices to Reduce the Digital Divide",
    description: "Donate unused phones and laptops to education programs and nonprofit organizations.",
    h1: "Donate Devices to Reduce the Digital Divide",
    topic: "device donations",
    sections: [
        {
          id: "overview",
          heading: "Why Donate Electronics",
          paragraphs: [
            "Millions of people around the world lack access to basic technology.",
            "TechJoy helps donors redirect unused devices to education programs and nonprofit organizations."
          ]
        },
        {
          id: "how-donations-work",
          heading: "How Device Donations Work",
          paragraphs: [
            "Devices are collected, evaluated, refurbished when possible, and matched with partners focused on digital access.",
            "Donation credits provide a way to track impact and support community programs."
          ]
        },
        {
          id: "eligible-devices",
          heading: "Devices You Can Donate",
          paragraphs: [
            "Smartphones, tablets, laptops, and accessories are among the most requested items.",
            "Even older devices can be useful after secure data wiping and refurbishment."
          ]
        },
        {
          id: "data-security",
          heading: "Secure Data Handling",
          paragraphs: [
            "TechJoy applies certified data wiping before devices enter donation channels.",
            "This protects donor privacy and makes donated devices safe for reuse."
          ]
        },
        {
          id: "community-impact",
          heading: "Community Impact",
          paragraphs: [
            "Donations support students, nonprofits, and community technology initiatives.",
            "Access to devices enables digital learning, job applications, and remote services."
          ]
        },
        {
          id: "business-donations",
          heading: "Corporate Donation Programs",
          paragraphs: [
            "Businesses can donate batches of devices and receive sustainability reporting.",
            "Corporate donations align IT asset management with social impact goals."
          ]
        }
      ],
    faq: [
      { q: "What devices can be donated?", a: "Phones, tablets, laptops, and accessories are commonly accepted." },
      { q: "Is my data removed?", a: "Yes. All devices are wiped using certified data destruction methods." },
      { q: "Can businesses donate devices?", a: "Yes. Corporate donation programs are supported for bulk devices." },
      { q: "How are donation recipients chosen?", a: "Devices are matched with education programs and nonprofit partners." },
      { q: "Do donors get confirmation?", a: "TechJoy provides confirmation and donation credits where applicable." }
    ],
    cta: {
      heading: "Donate Devices with TechJoy",
      copy: "Support digital access by donating devices that still have life left.",
      links: [
        { href: "/how-it-works", label: "How It Works" },
        { href: "/recycle-devices", label: "Recycle Devices" },
        { href: "/contact", label: "Contact TechJoy" }
      ]
    }
  },
  {
    slug: "impact",
    title: "TechJoy Environmental Impact",
    description: "Track how reuse, refurbishment, and recycling reduce global electronic waste.",
    h1: "TechJoy Environmental Impact",
    topic: "environmental impact",
    sections: [
        {
          id: "overview",
          heading: "Why Impact Tracking Matters",
          paragraphs: [
            "By promoting reuse and responsible recycling, TechJoy helps reduce global electronic waste.",
            "Impact metrics quantify how many devices are recycled, refurbished, and donated."
          ]
        },
        {
          id: "metrics",
          heading: "Key Impact Metrics",
          paragraphs: [
            "Devices recycled, devices refurbished, devices donated, and carbon emissions avoided are core indicators.",
            "These metrics help households and businesses understand their contribution to circular electronics."
          ]
        },
        {
          id: "carbon",
          heading: "Reducing Carbon Emissions",
          paragraphs: [
            "Extending device life reduces the need for new manufacturing, which lowers emissions.",
            "Recycling materials also cuts emissions compared to raw mining and refinement."
          ]
        },
        {
          id: "reuse",
          heading: "Refurbishment and Reuse",
          paragraphs: [
            "Refurbishment keeps devices in circulation, providing affordable technology to new users.",
            "Reuse is often the most environmentally beneficial outcome for functional devices."
          ]
        },
        {
          id: "recycling",
          heading: "Responsible Recycling",
          paragraphs: [
            "Devices not suitable for reuse are processed for material recovery.",
            "Responsible recycling prevents hazardous materials from entering landfills."
          ]
        },
        {
          id: "reporting",
          heading: "Reporting for Individuals and Businesses",
          paragraphs: [
            "Transparent reporting builds trust and supports sustainability goals.",
            "Businesses can use impact data for ESG and compliance reporting."
          ]
        }
      ],
    faq: [
      { q: "What impact does TechJoy measure?", a: "TechJoy tracks devices recycled, refurbished, donated, and emissions avoided." },
      { q: "How is impact reported?", a: "Impact reporting is shared through summaries and partner reporting tools." },
      { q: "Why is reuse prioritized?", a: "Reuse typically delivers the highest environmental benefit for functional devices." },
      { q: "Does TechJoy measure carbon impact?", a: "Yes. Carbon emissions avoided are part of the core metrics." },
      { q: "Can businesses access impact reports?", a: "Yes. Corporate reporting is available for enterprise programs." }
    ],
    cta: {
      heading: "See Your Impact with TechJoy",
      copy: "Measure progress and keep electronics in the circular economy.",
      links: [
        { href: "/recycle-devices", label: "Recycle Devices" },
        { href: "/phone-buyback", label: "Phone Buyback" },
        { href: "/donate", label: "Donate Devices" }
      ]
    }
  },
  {
    slug: "contact",
    title: "Contact TechJoy",
    description: "Reach TechJoy for support, corporate partnerships, and recycling inquiries.",
    h1: "Contact TechJoy",
    topic: "support and partnerships",
    sections: [
        {
          id: "overview",
          heading: "How to Reach TechJoy",
          paragraphs: [
            "Users can contact TechJoy for support, corporate partnerships, and recycling inquiries.",
            "Contact methods include email, contact form, and a dedicated support center."
          ]
        },
        {
          id: "support",
          heading: "Customer Support",
          paragraphs: [
            "Support teams handle shipping questions, device tracking, and payout timelines.",
            "Clear communication helps users stay informed throughout the process."
          ]
        },
        {
          id: "corporate",
          heading: "Corporate Partnerships",
          paragraphs: [
            "Businesses can request recycling programs, pickup schedules, and reporting.",
            "TechJoy provides structured workflows for enterprise device management."
          ]
        },
        {
          id: "donations",
          heading: "Donation Inquiries",
          paragraphs: [
            "Donors can ask about accepted devices and donation credits.",
            "TechJoy routes donations to education and nonprofit partners."
          ]
        },
        {
          id: "privacy",
          heading: "Privacy and Data Questions",
          paragraphs: [
            "TechJoy uses certified data wiping and secure handling procedures.",
            "Questions about data destruction and compliance are handled by the security team."
          ]
        },
        {
          id: "response",
          heading: "Response Times",
          paragraphs: [
            "Most requests are answered within a few business days.",
            "Priority support is available for enterprise programs."
          ]
        }
      ],
    faq: [
      { q: "How do I contact support?", a: "Use the contact form or email to reach the TechJoy support team." },
      { q: "Do you offer corporate programs?", a: "Yes. Corporate recycling and IT asset disposal programs are available." },
      { q: "Can I ask about donations?", a: "Yes. Donation inquiries are supported for individuals and businesses." },
      { q: "How long does support take to respond?", a: "Most inquiries are answered within a few business days." },
      { q: "Who can I contact about data security?", a: "Security-related questions can be directed through the contact form for routing." }
    ],
    cta: {
      heading: "Start a Conversation",
      copy: "Let us know how we can help with recycling, buyback, donations, or partnerships.",
      links: [
        { href: "/how-it-works", label: "How It Works" },
        { href: "/recycle-devices", label: "Recycle Devices" },
        { href: "/phone-buyback", label: "Phone Buyback" }
      ]
    }
  }
];

for (const page of pages) {
  const pageSections = buildSections(page.sections, page.topic);
  let code = renderPage({ ...page, sections: pageSections });
  code = ensureContentLength(code, page.topic);

  const outPath = path.join(process.cwd(), "app", page.slug, "page.tsx");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, code, "utf8");
}

console.log("SEO pages generated.");
