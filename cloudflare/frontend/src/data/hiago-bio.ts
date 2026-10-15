export const BIO_LOCALES = ['pt', 'en', 'es', 'fr', 'de', 'he', 'zh', 'ja'] as const;
export type Locale = typeof BIO_LOCALES[number];
export const BIO_LANGUAGES = {pt:'Português',en:'English',es:'Español',fr:'Français',de:'Deutsch',he:'עברית',zh:'中文',ja:'日本語'};

// Public biography correction supplied by Hiago Kin Levi on 2026-10-15.
// ADAI is his proposed defensive architecture/category, not the name of the LLM.
export const HIAGO_BIO: Record<Locale, { role: string; description: string; paragraph: string }> = {
  pt: {
    role: 'Inventor da ADAI · Criador da DAI · Fundador e CEO',
    description: 'Hiago Kin Levi, inventor da ADAI, criador da DAI e fundador da Decripte. Brasileiro, desenvolveu a DAI com LLM própria nos EUA pela Decripte US, em Nova York.',
    paragraph: 'Hiago Kin Levi é o inventor da ADAI — Autonomous Defensive Artificial Intelligence —, uma nova abordagem de inteligência artificial autônoma para defesa cibernética proposta pela Decripte. É também o criador da DAI — Decripte Artificial Intelligence —, a IA com LLM própria desenvolvida nos Estados Unidos pela Decripte US, com base em Nova York. Brasileiro, une sua trajetória em segurança da informação à pesquisa e ao desenvolvimento de defesa autônoma, governada e verificável. ADAI é a arquitetura defensiva; DAI é a inteligência que opera nela.',
  },
  en: {
    role: 'ADAI inventor · DAI creator · Founder and CEO',
    description: 'Hiago Kin Levi, inventor of ADAI, creator of DAI and Decripte founder. A Brazilian developing proprietary-LLM AI in the US through New York-based Decripte US.',
    paragraph: 'Hiago Kin Levi is the inventor of ADAI — Autonomous Defensive Artificial Intelligence —, a new approach to autonomous AI for cyber defense proposed by Decripte. He is also the creator of DAI — Decripte Artificial Intelligence —, AI with its own LLM developed in the United States by New York-based Decripte US. Brazilian by nationality, he brings his information-security experience to the research and development of autonomous, governed and verifiable defense. ADAI is the defensive architecture; DAI is the intelligence operating within it.',
  },
  es: {
    role: 'Inventor de ADAI · Creador de DAI · Fundador y CEO',
    description: 'Hiago Kin Levi, inventor de ADAI, creador de DAI y fundador de Decripte. Brasileño, desarrolló DAI con LLM propia en EE. UU. por Decripte US, en Nueva York.',
    paragraph: 'Hiago Kin Levi es el inventor de ADAI — Autonomous Defensive Artificial Intelligence —, un nuevo enfoque de inteligencia artificial autónoma para defensa cibernética propuesto por Decripte. También es el creador de DAI — Decripte Artificial Intelligence —, la IA con LLM propia desarrollada en Estados Unidos por Decripte US, con sede en Nueva York. Brasileño, une su trayectoria en seguridad de la información a la investigación y el desarrollo de defensa autónoma, gobernada y verificable. ADAI es la arquitectura defensiva; DAI es la inteligencia que opera en ella.',
  },
  fr: {
    role: 'Inventeur d’ADAI · Créateur de DAI · Fondateur et PDG',
    description: 'Hiago Kin Levi, inventeur d’ADAI, créateur de DAI et fondateur de Decripte. Brésilien, il a développé DAI et son propre LLM aux USA avec Decripte US à New York.',
    paragraph: 'Hiago Kin Levi est l’inventeur d’ADAI — Autonomous Defensive Artificial Intelligence —, une nouvelle approche d’intelligence artificielle autonome pour la cyberdéfense proposée par Decripte. Il est aussi le créateur de DAI — Decripte Artificial Intelligence —, l’IA dotée de son propre LLM développée aux États-Unis par Decripte US, basée à New York. Brésilien, il associe son parcours en sécurité de l’information à la recherche et au développement d’une défense autonome, gouvernée et vérifiable. ADAI est l’architecture défensive ; DAI est l’intelligence qui y opère.',
  },
  de: {
    role: 'ADAI-Erfinder · DAI-Schöpfer · Gründer und CEO',
    description: 'Hiago Kin Levi, Erfinder von ADAI, Schöpfer von DAI und Decripte-Gründer. Der Brasilianer entwickelte DAI mit eigenem LLM in den USA bei Decripte US in New York.',
    paragraph: 'Hiago Kin Levi ist der Erfinder von ADAI — Autonomous Defensive Artificial Intelligence —, einem von Decripte vorgeschlagenen neuen Ansatz für autonome KI in der Cyberabwehr. Er ist außerdem der Schöpfer von DAI — Decripte Artificial Intelligence —, einer KI mit eigenem LLM, die in den USA von Decripte US mit Sitz in New York entwickelt wurde. Als Brasilianer verbindet er seine Erfahrung in der Informationssicherheit mit Forschung und Entwicklung autonomer, gesteuerter und überprüfbarer Abwehr. ADAI ist die defensive Architektur; DAI ist die darin arbeitende Intelligenz.',
  },
  he: {
    role: 'ממציא ADAI · יוצר DAI · מייסד ומנכ״ל',
    description: 'Hiago Kin Levi, ממציא ADAI, יוצר DAI ומייסד Decripte. ברזילאי שפיתח את DAI עם מודל LLM עצמאי בארה״ב ב-Decripte US, שבסיסה בניו יורק.',
    paragraph: 'Hiago Kin Levi הוא הממציא של ADAI — Autonomous Defensive Artificial Intelligence —, גישה חדשה לבינה מלאכותית אוטונומית להגנת סייבר שמציעה Decripte. הוא גם היוצר של DAI — Decripte Artificial Intelligence —, הבינה בעלת מודל LLM משלה שפותחה בארצות הברית בידי Decripte US, שבסיסה בניו יורק. כברזילאי הוא משלב את ניסיונו באבטחת מידע במחקר ובפיתוח של הגנה אוטונומית, מבוקרת וניתנת לאימות. ADAI היא הארכיטקטורה ההגנתית; DAI היא הבינה שפועלת בתוכה.',
  },
  zh: {
    role: 'ADAI 发明人 · DAI 创造者 · 创始人兼 CEO',
    description: 'Hiago Kin Levi 是 ADAI 发明人、DAI 创造者及 Decripte 创始人。他来自巴西，在美国纽约的 Decripte US 开发了拥有自有 LLM 的 DAI。',
    paragraph: 'Hiago Kin Levi 是 ADAI——Autonomous Defensive Artificial Intelligence——的发明人。ADAI 是 Decripte 提出的一种用于网络防御的自主人工智能新方法。他也是 DAI——Decripte Artificial Intelligence——的创造者；DAI 拥有自有 LLM，由位于纽约的 Decripte US 在美国开发。他是巴西人，将信息安全领域的经验用于研究和开发自主、受治理、可验证的防御。ADAI 是防御架构，DAI 是在该架构中运行的智能。',
  },
  ja: {
    role: 'ADAI 発明者 · DAI 開発者 · 創業者・CEO',
    description: 'Hiago Kin Levi は ADAI の発明者、DAI の開発者、Decripte の創業者です。ブラジル出身で、ニューヨーク拠点の Decripte US にて独自 LLM を持つ DAI を米国で開発しました。',
    paragraph: 'Hiago Kin Levi は ADAI — Autonomous Defensive Artificial Intelligence — の発明者です。ADAI は Decripte が提唱する、自律型 AI によるサイバー防御の新しいアプローチです。また、ニューヨークを拠点とする Decripte US が米国で開発した、独自 LLM を持つ DAI — Decripte Artificial Intelligence — の開発者でもあります。ブラジル出身で、情報セキュリティ分野の経験を、自律的で統制され検証可能な防御の研究開発に生かしています。ADAI は防御アーキテクチャであり、DAI はその中で動作するインテリジェンスです。',
  },
};
