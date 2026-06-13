// All site copy lives here so pages stay presentational and the text is easy to
// edit in one place. Legal bodies use the {{CONTACT_EMAIL}} token, which is
// replaced with a mailto link at render time (see components/legal-document.tsx).

export type Item = { title: string; body: string };
export type LegalSection = { heading: string; body: string };
export type LegalDoc = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export const home = {
  hero: {
    headline: "Turn your data into decisions you can act on.",
    subhead:
      "Doral Analytics is a boutique consultancy that helps growing companies make sense of their data and put it to work.",
    ctaPrimary: "Start a conversation",
    ctaSecondary: "About us",
  },
  valueProps: [
    {
      title: "Clarity over complexity",
      body: "We cut through the noise and deliver answers you can understand and use, not dashboards no one opens or reports no one reads.",
    },
    {
      title: "Built for your business",
      body: "Every engagement starts with your questions and constraints. We tailor the approach to your team, your tools, and the decisions you need to make.",
    },
    {
      title: "Practical from day one",
      body: "We focus on work that pays off: faster reporting, cleaner data, and models that hold up in the real world rather than just on a slide.",
    },
  ] satisfies Item[],
  services: [
    {
      title: "Business Intelligence & Dashboards",
      body: "We build clear, reliable dashboards and reporting that give your team a single source of truth and the confidence to act on it.",
    },
    {
      title: "Data Strategy & Engineering",
      body: "We design the pipelines, models, and infrastructure that turn scattered, messy data into a clean foundation you can build on.",
    },
    {
      title: "Predictive & Advanced Analytics",
      body: "We apply forecasting, segmentation, and machine learning to anticipate what's next and guide smarter, data-backed decisions.",
    },
    {
      title: "Analytics Enablement & Training",
      body: "We help your team build lasting data skills, so the value of the work stays with you long after the engagement ends.",
    },
  ] satisfies Item[],
  closing: {
    headline: "Let's put your data to work.",
    body: "Whether you're starting from scratch or refining what you already have, we'd like to hear what you're trying to solve. Tell us about your goals and we'll show you where the data can take you.",
    cta: "Get in touch",
  },
};

export const about = {
  lead: "Doral Analytics is a boutique data and analytics consultancy that helps mid-market and growing companies turn their data into clear, confident decisions. We are a focused practice built on a simple conviction: most organizations are sitting on more insight than they realize, and the work that matters is making it usable. From a base in Doral, in the greater Miami area, we partner closely with each client, keeping our engagements small enough to stay hands-on and senior throughout.",
  mission:
    "Our mission is to help businesses see clearly and act with confidence. We do that by connecting the right data to the right questions, building the dashboards, models, and processes that put answers within reach, and leaving every client more capable than we found them. We measure our success not by the volume of reports we produce, but by the quality of the decisions our clients are able to make.",
  approach: [
    {
      title: "We start with the decision, not the data",
      body: "Before we touch a database, we get clear on the questions you need answered and the decisions riding on them. That focus keeps the work practical and ensures every dashboard, model, and report earns its place by changing what you do next.",
    },
    {
      title: "We keep engagements small and senior",
      body: "As a boutique firm, we work in tight, accountable teams without layers of handoffs. The people who scope your project are the people who do the work, so you get direct access, fast iteration, and a clear line of ownership from start to finish.",
    },
    {
      title: "We build for clarity over complexity",
      body: "Sophisticated analysis only helps if people can act on it. We favor solutions that are well-structured, well-documented, and easy to understand, so the value holds up long after a given project wraps and your team can carry it forward.",
    },
    {
      title: "We transfer knowledge, not dependency",
      body: "Our aim is to make you more self-sufficient. We document our work, explain our reasoning, and train your team along the way, so the capability we build stays with you rather than walking out the door when the engagement ends.",
    },
  ] satisfies Item[],
  values: [
    {
      title: "Clarity",
      body: "We translate complex data into plain language and clear recommendations. If a finding cannot be explained simply, it is not finished, and we hold ourselves to that standard in every deliverable.",
    },
    {
      title: "Integrity",
      body: "We tell clients what the data actually shows, including when it is inconvenient or inconclusive. Honest analysis is the only kind worth paying for, and trust is the foundation of every engagement we take on.",
    },
    {
      title: "Rigor",
      body: "We are careful with methods, assumptions, and sources. Sound conclusions come from sound work, and we would rather take the time to get it right than ship a confident answer that does not hold up.",
    },
    {
      title: "Partnership",
      body: "We treat our clients' goals as our own and stay invested in the outcome, not just the output. The best results come from working alongside your team, sharing context openly, and building something that lasts.",
    },
  ] satisfies Item[],
};

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  lastUpdated: "June 13, 2026",
  intro:
    'Doral Analytics ("Doral Analytics," "we," "us," or "our") respects your privacy. This Privacy Policy explains what personal information we collect through our website, how we use and protect it, and the choices and rights you have. We are a data and analytics consultancy based in Doral, in the greater Miami area of South Florida, USA. Our website is informational, and the only personal data we collect from the public is the information you choose to provide through our contact form. We do not sell your personal information. This policy is a general template and should be reviewed by qualified legal counsel before launch to confirm it fits our specific practices and applicable law.',
  sections: [
    {
      heading: "Information We Collect",
      body: "We collect only the personal information you voluntarily submit through our website contact form. This consists of your name, your email address, an optional subject line, and the contents of your message. We do not require you to create an account, and we do not collect payment information, special categories of sensitive data, or location data through the website. Our website does not use third-party advertising or analytics trackers, so we do not build behavioral profiles of visitors. A limited amount of technical information, such as a server log entry, may be generated automatically when the site is accessed, but this is not used to identify individual members of the public.",
    },
    {
      heading: "How We Use Your Information",
      body: "We use the information you submit through the contact form for one purpose: to read, respond to, and follow up on your inquiry. This includes contacting you by email to answer your question, to provide the information you requested, or to discuss whether and how our services might fit your needs. We do not use your contact-form information for marketing or advertising, and we do not add you to mailing lists without a separate, clear opt-in. We do not sell, rent, or trade your personal information to anyone.",
    },
    {
      heading: "Legal Bases for Processing",
      body: "Where data protection laws such as the EU or UK General Data Protection Regulation apply, we process your contact-form information on the following legal bases. We rely on your consent, which you give by choosing to complete and submit the form. We also rely on our legitimate interests in responding to inquiries, communicating with prospective clients, and operating and securing our website, balanced against your rights and expectations. Where you contact us about engaging our services, processing may also be necessary to take steps at your request before entering into a contract. You may withdraw consent at any time, which will not affect the lawfulness of processing carried out before withdrawal.",
    },
    {
      heading: "How Your Information Is Stored and Secured",
      body: "Contact-form submissions are stored in a managed Postgres database hosted by Supabase. Access to that database is restricted to authorized personnel and protected by authentication controls. We apply reasonable administrative, technical, and organizational measures designed to protect personal information against unauthorized access, disclosure, alteration, or destruction, including encryption in transit and access controls on our systems. No method of transmission or storage is completely secure, however, and we cannot guarantee absolute security. Please avoid sending highly sensitive or confidential information through the contact form.",
    },
    {
      heading: "Data Retention",
      body: "We keep contact-form information only for as long as needed to handle your inquiry and for a reasonable period afterward to maintain a record of our correspondence, to follow up on related discussions, and to meet any legal, accounting, or recordkeeping obligations. When the information is no longer needed for these purposes, we delete it or otherwise remove its connection to you. If you ask us to delete your information sooner, we will do so unless we are required to retain it by law.",
    },
    {
      heading: "Sharing and Sub-Processors",
      body: "We do not sell your personal information and we do not share it for others' marketing purposes. We rely on a small number of service providers (sub-processors) who process information on our behalf and under our instructions. Supabase hosts the database and provides the authentication infrastructure where contact-form submissions and our internal login are managed. We also use a transactional email provider to send and receive the messages we use to reply to your inquiry. These providers are permitted to use the information only to deliver their services to us. We may also disclose information if required by law, to comply with legal process, or to protect our rights, safety, or property and those of others.",
    },
    {
      heading: "Your Privacy Rights",
      body: "Depending on where you live, you may have rights over your personal information, including the right to access the information we hold about you, to correct inaccurate information, to request deletion, to object to or restrict certain processing, to withdraw consent, and, where applicable, to receive a copy of your information in a portable format. Residents of certain jurisdictions, including those covered by the GDPR and by U.S. state privacy laws such as those in Florida and California, may have additional rights, including the right not to be discriminated against for exercising them. To exercise any of these rights, contact us at {{CONTACT_EMAIL}}. We will respond within the timeframe required by applicable law and may need to verify your identity before acting on your request. If you are in the EU or UK, you also have the right to lodge a complaint with your local data protection authority.",
    },
    {
      heading: "Cookies",
      body: "Our public website uses minimal, essential cookies only. We do not use advertising, marketing, or third-party analytics cookies. The single functional cookie we use is a session cookie that supports the internal developer login used to maintain and administer the site; it is not used to track members of the public. Because we rely only on strictly necessary cookies, the site does not require a tracking consent banner, though your browser settings allow you to block or delete cookies if you prefer.",
    },
    {
      heading: "Children's Privacy",
      body: "Our website and services are intended for businesses and adults. We do not knowingly collect personal information from children under the age of 16 (or under the age defined by applicable local law). If you believe a child has provided us with personal information through the contact form, please contact us at {{CONTACT_EMAIL}} so we can delete it.",
    },
    {
      heading: "International Users",
      body: "We are based in the United States, and our service providers may process and store information in the United States or in other countries. If you access our website or contact us from outside the United States, you understand that your information may be transferred to, stored in, and processed in the United States and other jurisdictions whose data protection laws may differ from those of your country. Where required, we take steps to ensure that international transfers are subject to appropriate safeguards.",
    },
    {
      heading: "Changes to This Policy",
      body: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make changes, we will revise the effective date associated with this policy and post the updated version on our website. Material changes will be made clear on this page. We encourage you to review this policy periodically so you stay informed about how we handle personal information.",
    },
    {
      heading: "How to Contact Us",
      body: "If you have questions about this Privacy Policy, about how we handle your personal information, or if you wish to exercise any of your privacy rights, please contact us at {{CONTACT_EMAIL}}. As a firm based in the Doral and greater Miami area of South Florida, we will do our best to respond promptly to your request.",
    },
  ],
};

export const terms: LegalDoc = {
  title: "Terms of Service",
  lastUpdated: "June 13, 2026",
  intro:
    'These Terms of Service ("Terms") govern your access to and use of the Doral Analytics website (the "Site"). Doral Analytics is a data and analytics consultancy based in Doral, in the greater Miami area of South Florida, United States. By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site. Please read these Terms carefully, as they include important information about your rights and obligations, as well as limitations and exclusions that apply to you. This document is a general template provided for informational purposes and should be reviewed by qualified legal counsel before launch to confirm it fits your specific circumstances and complies with applicable law.',
  sections: [
    {
      heading: "Acceptance of Terms",
      body: 'By accessing, browsing, or otherwise using the Site, you acknowledge that you have read, understood, and agree to be bound by these Terms and by any additional guidelines or policies referenced here. These Terms constitute a binding agreement between you and Doral Analytics. If you are using the Site on behalf of a company or other organization, you represent that you have the authority to bind that organization to these Terms, and references to "you" include that organization. We may update these Terms from time to time as described below, and your continued use of the Site after any such update constitutes acceptance of the revised Terms.',
    },
    {
      heading: "Eligibility and Acceptable Use",
      body: "You must be at least 18 years of age, or the age of legal majority in your jurisdiction, to use the Site. By using the Site, you represent that you meet this requirement and that your use complies with all applicable laws and regulations. You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of the Site by, any third party. You agree not to: attempt to gain unauthorized access to the Site, its servers, or any connected systems; introduce viruses, malware, or other harmful code; use any automated means, such as scrapers or bots, to access or collect data from the Site without our prior written consent; interfere with or disrupt the integrity or performance of the Site; reverse engineer or attempt to extract the source code of the Site; or use the Site to transmit unlawful, harassing, defamatory, or otherwise objectionable content. We reserve the right to restrict or terminate your access to the Site at any time, without notice, for conduct that we believe violates these Terms or is otherwise harmful.",
    },
    {
      heading: "Intellectual Property and Ownership of Site Content",
      body: "The Site and all of its contents, including but not limited to text, graphics, logos, the Doral Analytics name and wordmark, page layouts, design elements, images, and any underlying code, are owned by or licensed to Doral Analytics and are protected by United States and international copyright, trademark, and other intellectual property laws. Except as expressly permitted, you may not copy, reproduce, distribute, modify, publicly display, create derivative works from, or otherwise exploit any part of the Site without our prior written permission. You are granted a limited, revocable, non-exclusive, non-transferable license to access and view the Site for your own informational and non-commercial purposes. All rights not expressly granted in these Terms are reserved by Doral Analytics. Nothing in these Terms transfers to you any ownership interest in any of the Site content or intellectual property.",
    },
    {
      heading: "Contact Form and User Submissions",
      body: 'The Site may offer a contact form or similar means for you to send us inquiries and information. Any information you submit through the Site, including your name, email address, and the contents of your message ("Submissions"), is provided voluntarily by you. You are responsible for the accuracy of your Submissions and agree not to submit any false, misleading, unlawful, or infringing information, or any sensitive personal information that is not necessary for your inquiry. By sending a Submission, you grant Doral Analytics permission to use the information for the purpose of responding to and managing your inquiry and our potential business relationship. Please do not include confidential or proprietary information in a Submission, as we cannot guarantee that communications sent through the Site are secure, and submitting an inquiry does not by itself create any consulting, advisory, or other professional relationship between you and Doral Analytics.',
    },
    {
      heading: 'Disclaimers; Information Provided "As Is"',
      body: 'The Site and all information, materials, and content available on it are provided on an "as is" and "as available" basis, without warranties of any kind, whether express, implied, or statutory. To the fullest extent permitted by law, Doral Analytics disclaims all warranties, including any implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement, and any warranties that the Site will be uninterrupted, secure, error-free, or free of viruses or other harmful components. The content on the Site is provided for general informational purposes only and does not constitute professional, legal, financial, accounting, tax, or other advice, and should not be relied upon as a substitute for advice from a qualified professional who is familiar with your specific situation. Any reliance you place on information found on the Site is strictly at your own risk. We make no representation or warranty regarding the accuracy, completeness, or timeliness of any content on the Site.',
    },
    {
      heading: "Limitation of Liability",
      body: "To the fullest extent permitted by applicable law, in no event shall Doral Analytics, or its owners, members, employees, contractors, or agents, be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, including but not limited to loss of profits, revenue, data, goodwill, or other intangible losses, arising out of or relating to your access to or use of, or inability to access or use, the Site or any content on it, whether based in contract, tort, negligence, strict liability, or any other legal theory, even if we have been advised of the possibility of such damages. To the extent any liability cannot be excluded, the total aggregate liability of Doral Analytics arising out of or relating to these Terms or your use of the Site shall not exceed one hundred United States dollars (US $100.00). Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you.",
    },
    {
      heading: "Indemnification",
      body: "You agree to defend, indemnify, and hold harmless Doral Analytics and its owners, members, employees, contractors, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with: your access to or use of the Site; your violation of these Terms; your violation of any applicable law or the rights of any third party; or any content or Submission you provide through the Site. We reserve the right, at our own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which case you agree to cooperate with our defense of that claim. This indemnification obligation will survive the termination of these Terms and your use of the Site.",
    },
    {
      heading: "Third-Party Links",
      body: "The Site may contain links to third-party websites, services, or resources that are not owned or controlled by Doral Analytics. We provide these links for your convenience only and do not endorse and are not responsible for the content, products, services, privacy practices, or availability of any third-party sites. Accessing any linked third-party site is done at your own risk, and your dealings with any third party are solely between you and that third party. We encourage you to review the terms and privacy policies of any third-party website you visit. The inclusion of any link does not imply any affiliation, sponsorship, or endorsement by Doral Analytics.",
    },
    {
      heading: "Governing Law and Venue",
      body: "These Terms and any dispute or claim arising out of or relating to them, the Site, or your use of the Site, including non-contractual disputes or claims, shall be governed by and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law principles. You agree that any legal action or proceeding arising out of or relating to these Terms or the Site shall be brought exclusively in the state or federal courts located in Miami-Dade County, Florida, and you irrevocably consent to the personal jurisdiction and venue of those courts. If any provision of these Terms is found to be unlawful, void, or unenforceable, that provision shall be severed and the remaining provisions shall continue in full force and effect.",
    },
    {
      heading: "Changes to These Terms",
      body: "We may revise these Terms from time to time, for example to reflect changes to the Site, to our practices, or to applicable law. When we make changes, we will post the updated Terms on the Site and update the effective date. Any changes are effective when posted, unless otherwise stated. We encourage you to review these Terms periodically so that you are aware of any updates. Your continued access to or use of the Site after revised Terms have been posted constitutes your acceptance of those changes. If you do not agree to the revised Terms, you should stop using the Site.",
    },
    {
      heading: "How to Contact Us",
      body: "If you have any questions about these Terms or the Site, you can contact us by email at {{CONTACT_EMAIL}}. Doral Analytics is based in Doral, in the greater Miami area of South Florida, United States. We will make reasonable efforts to respond to legitimate inquiries in a timely manner.",
    },
  ],
};
