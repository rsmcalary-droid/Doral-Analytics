// All site copy lives here so pages stay presentational and the text is easy to
// edit in one place. Legal bodies use the {{CONTACT_EMAIL}} token, which is
// replaced with a mailto link at render time (see components/legal-document.tsx).

export type Item = { title: string; body: string };
export type Founder = {
  name: string;
  title: string;
  location: string;
  bio: string;
};
export type LegalSection = { heading: string; body: string };
export type LegalDoc = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export const home = {
  hero: {
    headline: "Bespoke technical solutions, built around your business.",
    subhead:
      "Doral Analytics designs and builds cutting-edge technical solutions for ambitious small and medium-sized businesses — shaped around what you actually need, and delivered by a small, senior team who care as much about service as software.",
    ctaPrimary: "Start a conversation",
    ctaSecondary: "About us",
  },
  valueProps: [
    {
      title: "Cutting-edge, with a point",
      body: "We bring genuinely modern technology to real business problems — not novelty for its own sake, but solutions that give you an edge and stand the test of time.",
    },
    {
      title: "Built around your business",
      body: "Every engagement starts with your goals, your people, and your constraints. We listen first and stay close throughout — responsive, hands-on, and accountable.",
    },
    {
      title: "Service at the centre",
      body: "We pair serious technical capability with real strength in communication and stakeholder engagement, so what we build is understood, adopted, and genuinely useful.",
    },
  ] satisfies Item[],
  services: [
    {
      title: "Bespoke Software & Systems",
      body: "We design and build custom software and systems tailored to how you actually operate — from internal tools to the platforms your teams rely on every day.",
    },
    {
      title: "Systems Integration & Automation",
      body: "We connect the tools you already use and automate the manual work in between, so your processes run faster, more reliably, and with fewer errors.",
    },
    {
      title: "Technical Strategy & Advisory",
      body: "We help you choose the right technology and plan how to adopt it — practical, vendor-neutral advice grounded in what will actually work for your business.",
    },
    {
      title: "Stakeholder Engagement & Delivery",
      body: "We bring deep public-sector experience in communication, stakeholder engagement, and process management to make sure change is understood, supported, and delivered.",
    },
  ] satisfies Item[],
  process: [
    {
      title: "Understand your needs",
      body: "We come to you, get to know your business, and review what you actually need — the goals, the constraints, and the problems worth solving.",
    },
    {
      title: "Shape the specification",
      body: "We work with you to turn that into a clear, agreed specification, so everyone knows exactly what's being built — and why — before the work begins.",
    },
    {
      title: "Build the solution",
      body: "Our team brings its technical know-how and experience to build the solution to that specification, then delivers it ready to use.",
    },
  ] satisfies Item[],
  closing: {
    headline: "Let's build something that works for you.",
    body: "Whether you need a bespoke system, a smarter process, or a technology partner who'll actually listen, we'd like to hear what you're trying to achieve.",
    cta: "Get in touch",
  },
};

export const about = {
  lead: "Doral Analytics is a boutique consultancy building bespoke, technology-driven solutions for small and medium-sized businesses (SMEs) that want to do things better. We were founded by two people who spent years in central government — across communications, data, stakeholder engagement, and complex programmes — and who saw how often good technology fails because no one brings the people and the process along with it. We pair genuinely modern technology with that hard-won experience, and we deliberately take on a small number of engagements at a time, so each one gets senior attention and is built around what it actually needs. We're based in Cheltenham and London.",
  mission:
    "Our mission is to give ambitious SMEs an edge through technology that's built around them — not off-the-shelf, not over-engineered, but bespoke, modern, and genuinely useful. We care as much about service as we do about software: listening closely, communicating clearly, and staying close from the first conversation to the final handover, so the solutions we build are understood, adopted, and made to last.",
  founders: [
    {
      name: "[Add name]",
      title: "Director of Strategy",
      location: "Cheltenham, England",
      bio: "He spent several years in central government, specialising in communications, media relations, and policy. He holds a BA in Politics and an MA in Law, and maintains a close interest in AI and frontier technologies.",
    },
    {
      name: "[Add name]",
      title: "Director of Operations",
      location: "London, England",
      bio: "He spent several years in central government, working across data analysis, stakeholder engagement, and discrete service delivery. He holds a BA in International Relations.",
    },
  ] satisfies Founder[],
  approach: [
    {
      title: "We start with the business, not the technology",
      body: "Before we propose a single solution, we get to grips with your goals, your people, and how things work today. The technology comes second — what matters first is solving the right problem.",
    },
    {
      title: "We keep it senior and personal",
      body: "As a boutique firm, the people who scope your project are the people who deliver it. You get direct access, fast decisions, and a level of attention larger firms can't match.",
    },
    {
      title: "We make change land",
      body: "Great technology only counts if it's adopted. We bring real expertise in communication, stakeholder engagement, and process to make sure your people are with you and the solution actually sticks.",
    },
    {
      title: "We build to hand over",
      body: "We document our work, explain our thinking, and bring your team along — so you finish each engagement more capable, not more dependent.",
    },
  ] satisfies Item[],
  values: [
    {
      title: "Client service",
      body: "We're responsive, attentive, and genuinely invested in your outcome. You'll never wonder where things stand or feel like a ticket in a queue.",
    },
    {
      title: "Innovation with purpose",
      body: "We use modern, cutting-edge technology — but only ever in service of a real result. New for its own sake doesn't interest us; new that gives you an edge does.",
    },
    {
      title: "Integrity",
      body: "We tell you what we honestly think, including when it's not what you hoped to hear. Good advice is the foundation of a relationship worth having.",
    },
    {
      title: "Partnership",
      body: "We treat your goals as our own and stay invested well beyond the deliverable. The best work comes from working shoulder to shoulder with your team.",
    },
  ] satisfies Item[],
};

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  lastUpdated: "13 June 2026",
  intro: `Doral Analytics ("Doral Analytics", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains what personal information we collect through our website, how we use and protect it, and the rights you have under UK data protection law. We are a technical solutions consultancy based in Cheltenham, England. Our website is informational, and the only personal data we collect from the public is the information you choose to provide through our contact form. We do not sell your personal information. This policy is a general template and should be reviewed by a qualified solicitor before launch to confirm it reflects our actual practices and complies with applicable law.`,
  sections: [
    {
      heading: "Who We Are",
      body: `Doral Analytics is the data controller responsible for your personal data when you use this website. We are a boutique technical solutions consultancy based in Cheltenham, England. If you have any questions about this policy or about how we handle your information, you can reach us at {{CONTACT_EMAIL}}.`,
    },
    {
      heading: "Information We Collect",
      body: `We collect only the personal information you choose to submit through our website contact form: your name, your email address, an optional subject line, and the contents of your message. We do not require you to create an account, and we do not collect payment details, special category data, or location data through the website. Our site does not use third-party advertising or analytics trackers, so we do not build profiles of visitors or track you across other sites. A limited amount of technical information, such as a standard server log entry, may be generated automatically when the site is accessed; this is used only to keep the site secure and running and is not used to identify members of the public.`,
    },
    {
      heading: "How We Use Your Information",
      body: `We use the information you submit through the contact form for one purpose: to read, respond to, and follow up on your enquiry. That includes contacting you by email to answer your question, to provide the information you asked for, or to discuss whether and how our services might fit your needs. We do not use your contact-form information for marketing, and we will not add you to any mailing list without a separate, clear opt-in. We never sell, rent, or trade your personal information.`,
    },
    {
      heading: "Legal Bases for Processing",
      body: `Under the UK GDPR we must have a lawful basis for processing your personal data. We rely on your consent, which you give by choosing to complete and submit the contact form, and on our legitimate interests in responding to enquiries, communicating with prospective clients, and operating and securing our website — balanced against your rights and expectations. Where you contact us about engaging our services, processing may also be necessary to take steps at your request before entering into a contract. You can withdraw your consent at any time by contacting us, which will not affect the lawfulness of any processing carried out beforehand. If you are located in the European Economic Area, the EU GDPR may also apply on the same bases.`,
    },
    {
      heading: "How We Store and Protect Your Information",
      body: `Contact-form submissions are stored in a managed PostgreSQL database provided by Supabase, hosted on servers located in the European Economic Area (Ireland). Access to that database is restricted to authorised personnel and protected by authentication controls. We apply reasonable technical and organisational measures designed to protect personal information against unauthorised access, disclosure, alteration, or destruction, including encryption in transit. No method of transmission or storage is completely secure, however, and we cannot guarantee absolute security, so please avoid sending highly sensitive or confidential information through the contact form.`,
    },
    {
      heading: "Data Retention",
      body: `We keep contact-form information only for as long as we need it to handle your enquiry, and for a reasonable period afterwards to maintain a record of our correspondence, follow up on related discussions, and meet any legal or accounting obligations. When the information is no longer needed for these purposes we delete it or otherwise remove its connection to you. If you ask us to delete your information sooner, we will do so unless we are required to keep it by law.`,
    },
    {
      heading: "Sharing and Sub-Processors",
      body: `We do not sell your personal information and we do not share it for anyone else's marketing. We rely on a small number of service providers (sub-processors) who process information on our behalf and under our instructions. Supabase hosts the database and provides the authentication used by our internal team. When we reply to your enquiry, we do so from our own business email accounts. We may also disclose information where required by law, to comply with legal process, or to protect our rights, safety, or property and those of others.`,
    },
    {
      heading: "Your Rights",
      body: `Under UK data protection law you have rights over your personal data, including the right to be informed; to access the information we hold about you; to have inaccurate information corrected; to have your information erased; to restrict or object to certain processing; to data portability; and to withdraw consent at any time. To exercise any of these rights, contact us at {{CONTACT_EMAIL}}. We will respond within the time limits set by law and may need to verify your identity first. If you are unhappy with how we have handled your personal data, you have the right to complain to the Information Commissioner's Office (ICO), the UK's data protection regulator, at ico.org.uk — though we would appreciate the chance to put things right first.`,
    },
    {
      heading: "Cookies",
      body: `Our public website uses only minimal, strictly necessary cookies. We do not use advertising, marketing, or third-party analytics cookies. The single functional cookie we use is a session cookie that supports the internal developer login used to maintain the site; it is not used to track members of the public. Because we rely only on strictly necessary cookies, the site does not require a cookie consent banner under the Privacy and Electronic Communications Regulations (PECR), though your browser settings let you block or delete cookies if you prefer.`,
    },
    {
      heading: "Children's Privacy",
      body: `Our website and services are intended for businesses and adults. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information through the contact form, please contact us at {{CONTACT_EMAIL}} and we will delete it.`,
    },
    {
      heading: "International Data Transfers",
      body: `Your information is stored within the European Economic Area. Some of our service providers may process limited information in other countries. Where personal data is transferred outside the UK or the EEA, we take steps to ensure it is protected by appropriate safeguards, such as the UK government's adequacy regulations or the International Data Transfer Agreement, as required by UK data protection law.`,
    },
    {
      heading: "Changes to This Policy",
      body: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make changes we will revise the effective date shown at the top of this policy and post the updated version on our website. We encourage you to review this policy periodically so you stay informed about how we handle personal information.`,
    },
    {
      heading: "How to Contact Us",
      body: `If you have questions about this Privacy Policy, about how we handle your personal information, or if you wish to exercise any of your rights, please contact us at {{CONTACT_EMAIL}}. Doral Analytics is based in Cheltenham, England. You can also contact the Information Commissioner's Office (ICO) at ico.org.uk if you have concerns we have not been able to resolve.`,
    },
  ],
};

export const terms: LegalDoc = {
  title: "Terms of Service",
  lastUpdated: "13 June 2026",
  intro: `These Terms of Service ("Terms") govern your access to and use of the Doral Analytics website (the "Site"). Doral Analytics is a technical solutions consultancy based in Cheltenham, England. By accessing or using the Site you agree to be bound by these Terms. If you do not agree, please do not use the Site. Please read these Terms carefully, as they include important information about your rights and obligations, together with limitations and exclusions that apply to you. This document is a general template provided for information only and should be reviewed by a qualified solicitor before launch to confirm it fits your circumstances and complies with applicable law.`,
  sections: [
    {
      heading: "Acceptance of Terms",
      body: `By accessing, browsing, or otherwise using the Site, you acknowledge that you have read, understood, and agree to be bound by these Terms and by any additional guidelines or policies referred to here. These Terms form a binding agreement between you and Doral Analytics. If you are using the Site on behalf of a company or other organisation, you confirm that you have authority to bind that organisation to these Terms, and references to "you" include that organisation. We may update these Terms from time to time as described below, and your continued use of the Site after any update means you accept the revised Terms.`,
    },
    {
      heading: "Eligibility and Acceptable Use",
      body: `You must be at least 18 years old to use the Site, and by using it you confirm that you meet this requirement and that your use complies with all applicable laws. You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use and enjoyment of the Site by, anyone else. In particular, you agree not to: attempt to gain unauthorised access to the Site, its servers, or any connected systems; introduce viruses, malware, or other harmful code; use automated means such as scrapers or bots to access or collect data from the Site without our prior written consent; interfere with or disrupt the integrity or performance of the Site; reverse engineer or attempt to extract its source code; or use the Site to transmit unlawful, harassing, defamatory, or otherwise objectionable content. We may restrict or suspend your access to the Site at any time, without notice, for conduct we reasonably believe breaches these Terms or is otherwise harmful.`,
    },
    {
      heading: "Intellectual Property",
      body: `The Site and all of its contents — including text, graphics, logos, the Doral Analytics name and wordmark, page layouts, design elements, images, and any underlying code — are owned by or licensed to Doral Analytics and are protected by UK and international copyright, trade mark, and other intellectual property laws. Except as expressly permitted, you may not copy, reproduce, distribute, modify, publicly display, create derivative works from, or otherwise exploit any part of the Site without our prior written permission. You are granted a limited, revocable, non-exclusive, non-transferable licence to access and view the Site for your own informational and non-commercial purposes. All rights not expressly granted are reserved.`,
    },
    {
      heading: "Contact Form and Submissions",
      body: `The Site offers a contact form so you can send us enquiries. Any information you submit through the Site, including your name, email address, and the contents of your message ("Submissions"), is provided voluntarily. You are responsible for the accuracy of your Submissions and agree not to submit anything false, misleading, unlawful, or infringing, or any sensitive personal information that is not necessary for your enquiry. By sending a Submission you grant us permission to use the information to respond to and manage your enquiry and any resulting business relationship. Please do not include confidential or proprietary information in a Submission, as we cannot guarantee that communications sent through the Site are secure, and sending an enquiry does not by itself create any consulting, advisory, or other professional relationship between you and Doral Analytics.`,
    },
    {
      heading: `Disclaimers; Information Provided "As Is"`,
      body: `The Site and all information, materials, and content on it are provided on an "as is" and "as available" basis, without warranties of any kind, whether express or implied, except to the extent that such warranties cannot be excluded under applicable law. To the fullest extent permitted by law, we disclaim all implied warranties, including any implied terms as to satisfactory quality, fitness for a particular purpose, and non-infringement, and we do not warrant that the Site will be uninterrupted, secure, error-free, or free of harmful components. The content on the Site is provided for general information only and does not constitute professional, legal, financial, accounting, tax, or other advice, and should not be relied on as a substitute for advice from a suitably qualified professional who knows your specific circumstances. Any reliance you place on the Site's content is at your own risk.`,
    },
    {
      heading: "Limitation of Liability",
      body: `Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot be excluded or limited under the laws of England and Wales. Subject to that, and to the fullest extent permitted by law, we will not be liable for any indirect, incidental, special, consequential, or punitive loss, or for any loss of profits, revenue, data, goodwill, or other intangible losses, arising out of or relating to your access to or use of, or inability to use, the Site or its content, whether based in contract, tort (including negligence), or otherwise. To the extent we are liable, our total aggregate liability arising out of or relating to these Terms or your use of the Site shall not exceed one hundred pounds sterling (£100).`,
    },
    {
      heading: "Indemnification",
      body: `You agree to indemnify and hold harmless Doral Analytics and its owners, members, employees, contractors, and agents from and against any claims, liabilities, damages, losses, costs, and expenses, including reasonable legal fees, arising out of or connected with: your access to or use of the Site; your breach of these Terms; your breach of any applicable law or the rights of any third party; or any content or Submission you provide through the Site. This obligation survives the termination of these Terms and your use of the Site.`,
    },
    {
      heading: "Third-Party Links",
      body: `The Site may contain links to third-party websites, services, or resources that we do not own or control. We provide these links for convenience only and do not endorse and are not responsible for the content, products, services, privacy practices, or availability of any third-party site. Accessing any linked site is done at your own risk, and your dealings with any third party are solely between you and that third party. We encourage you to review the terms and privacy policies of any third-party website you visit.`,
    },
    {
      heading: "Governing Law and Jurisdiction",
      body: `These Terms, and any dispute or claim (including non-contractual disputes or claims) arising out of or relating to them, the Site, or your use of the Site, are governed by and construed in accordance with the laws of England and Wales. You agree that the courts of England and Wales will have exclusive jurisdiction over any such dispute or claim, although we retain the right to bring proceedings for breach of these Terms in your country of residence or any other relevant country. If any provision of these Terms is found to be unlawful, void, or unenforceable, that provision will be severed and the remaining provisions will continue in full force and effect.`,
    },
    {
      heading: "Changes to These Terms",
      body: `We may revise these Terms from time to time — for example, to reflect changes to the Site, our practices, or the law. When we do, we will post the updated Terms on the Site and update the effective date. Any changes take effect when posted, unless stated otherwise. We encourage you to review these Terms periodically. Your continued use of the Site after revised Terms are posted means you accept the changes; if you do not agree, you should stop using the Site.`,
    },
    {
      heading: "How to Contact Us",
      body: `If you have any questions about these Terms or the Site, you can contact us by email at {{CONTACT_EMAIL}}. Doral Analytics is based in Cheltenham, England. We will make reasonable efforts to respond to legitimate enquiries in good time.`,
    },
  ],
};
