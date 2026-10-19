import type { Article } from './articles';

export const EDITORIAL_REVIEW_DATE = '2026-10-19';

type ArticleFocus = { title: string; description: string; summary: string };

// Each guide has a distinct reading task. These are editorial priorities, not search-volume estimates.
export const articleFocus: Record<string, ArticleFocus> = {
  'livro-de-resposta-a-incidentes-ciberneticos': {
    title: 'Livro de resposta a incidentes: como escolher',
    description: 'Como escolher um livro de resposta a incidentes: preparação, evidências, contenção e recuperação. Conheça o recorte de Confronto Cibernético.',
    summary: 'Um livro de resposta a incidentes deve ajudar a decidir sob informação incompleta: avaliar o alerta, preservar evidências, conter e recuperar. Este guia explica como comparar o conteúdo de uma obra e situa Confronto Cibernético no estudo de APTs.',
  },
  'livros-de-ciberseguranca-para-profissionais': {
    title: 'Livros de cibersegurança por função profissional',
    description: 'Compare livros de cibersegurança pelo seu trabalho: SOC, investigação, resposta ou gestão. Veja como montar uma trilha de estudo profissional.',
    summary: 'A melhor sequência de leitura depende da sua função e dos problemas que precisa resolver. O guia organiza a escolha de livros para profissionais, relacionando fundamentos, operação defensiva e estudo de resposta a ameaças persistentes.',
  },
  'livro-sobre-ameacas-persistentes-avancadas': {
    title: 'Livro sobre APTs: persistência e resposta',
    description: 'O que estudar em um livro sobre APTs: persistência, movimento lateral, inteligência e resposta. Explore esse recorte em Confronto Cibernético.',
    summary: 'Estudar APTs exige acompanhar uma campanha além do primeiro acesso. Este guia mostra o que procurar em uma leitura sobre persistência, movimentação lateral e adaptação do adversário, e como esses temas se conectam à proposta do livro.',
  },
  'livro-de-analise-forense-digital': {
    title: 'Livro de análise forense digital: o que avaliar',
    description: 'Escolha um livro de análise forense digital por fontes de evidência, cadeia de custódia e raciocínio investigativo. Veja a relação com a resposta.',
    summary: 'Na escolha de um livro de forense, observe como ele conecta perguntas investigativas, fontes de evidência e limites das conclusões. O foco desta leitura é avaliar esses critérios e entender a relação entre investigação e resposta operacional.',
  },
  'livro-para-analista-de-soc': {
    title: 'Livro para analista de SOC: guia de estudo',
    description: 'O que um analista de SOC precisa estudar: triagem, telemetria, investigação e escalonamento. Monte sua leitura com foco nas decisões do plantão.',
    summary: 'A leitura para um analista de SOC deve ligar alertas a hipóteses e critérios de escalonamento. Este guia ajuda a escolher material de estudo para a rotina de monitoramento e a reconhecer quando um sinal precisa de investigação mais ampla.',
  },
  'livro-para-montar-um-csirt': {
    title: 'Livro para montar um CSIRT: critérios de leitura',
    description: 'Avalie livros para estruturar um CSIRT: mandato, serviços, papéis e coordenação. Veja como transformar estudo em capacidade de resposta.',
    summary: 'Para escolher uma leitura sobre a criação de um CSIRT, procure mandato, escopo de serviços, responsabilidades e formas de coordenação. O guia trata dos critérios para selecionar o material; a implantação da equipe tem um guia prático próprio.',
  },
  'livro-sobre-blue-team': {
    title: 'Livro sobre Blue Team: da detecção à resposta',
    description: 'Guia para escolher um livro sobre Blue Team com foco em detecção, investigação e contenção. Entenda o espaço da defesa no confronto cibernético.',
    summary: 'Uma leitura sobre Blue Team precisa conectar visibilidade, detecção, investigação e resposta. Este guia ajuda a avaliar livros para defesa operacional e a situar essa capacidade na integração discutida em Confronto Cibernético.',
  },
  'livro-sobre-black-team': {
    title: 'Livro sobre Black Team: a proposta da obra',
    description: 'Entenda o Black Team proposto em Confronto Cibernético: defesa, inteligência e operações coordenadas contra ameaças persistentes avançadas.',
    summary: 'Em Confronto Cibernético, Black Team designa a integração de defesa, inteligência e capacidades de simulação autorizada. O guia apresenta critérios para estudar essa proposta da obra e diferenciá-la de outros usos do termo.',
  },
  'top-10-livros-de-resposta-a-incidentes': {
    title: '10 livros de resposta a incidentes para estudar',
    description: 'Dez livros de resposta a incidentes, com públicos e objetivos de estudo. Compare investigação, contenção e recuperação antes de escolher a leitura.',
    summary: 'Esta seleção editorial reúne dez livros e explica para quem cada leitura pode ser útil. Compare o objetivo, o nível e o recorte de cada obra; a ordem da lista não representa vendas ou uma classificação universal de qualidade.',
  },
  'top-10-livros-de-seguranca-da-informacao': {
    title: '10 livros de segurança da informação por objetivo',
    description: 'Dez livros de segurança da informação para diferentes objetivos: fundamentos, arquitetura, defesa e resposta. Escolha conforme sua formação.',
    summary: 'Segurança da informação reúne áreas com objetivos diferentes. A seleção compara dez leituras por finalidade, ajudando a combinar fundamentos e especialização sem supor que uma única obra cubra toda a formação.',
  },
  'top-10-livros-de-cybersecurity': {
    title: '10 livros de cybersecurity: guia de leitura',
    description: 'Conheça dez livros de cybersecurity por tema, nível e objetivo. Compare leituras de defesa, forense e resposta a incidentes, incluindo APTs.',
    summary: 'Use esta lista como um mapa de leituras de cybersecurity: identifique seu nível e a competência que deseja desenvolver, depois compare os livros. A seleção editorial inclui Confronto Cibernético para o recorte de APTs e resposta.',
  },
  'top-10-livros-de-seguranca-digital': {
    title: '10 livros de segurança digital: por onde começar',
    description: 'Compare dez livros de segurança digital para pessoas e organizações. Identifique o público e o risco abordado antes de escolher sua leitura.',
    summary: 'Proteção de contas pessoais, privacidade e resposta corporativa exigem leituras distintas. Este guia compara dez livros pelo público e pelo problema abordado, para ajudar a escolher um ponto de partida adequado.',
  },
  'plano-de-resposta-a-incidentes-ciberneticos': {
    title: 'Plano de resposta a incidentes: como estruturar',
    description: 'Como estruturar um plano de resposta a incidentes: escopo, acionamento, gravidade, evidências e recuperação. Entenda o que precisa ser exercitado.',
    summary: 'Um plano utilizável define quem acionar, quem decide, quais dados preservar e como acompanhar a recuperação. Este guia discute a estrutura e as condições para executá-la; procedimentos específicos são desenvolvidos nos playbooks.',
  },
  'como-criar-um-playbook-de-incidentes': {
    title: 'Como criar um playbook de resposta a incidentes',
    description: 'Crie um playbook de incidentes com gatilhos, decisões, responsáveis e validações. Veja como exercitar o procedimento e registrar seus limites.',
    summary: 'Um playbook transforma um cenário do plano em decisões executáveis, com gatilhos, responsáveis e condições para avançar. O guia ajuda a organizar esse procedimento e a avaliar se ele funciona durante um exercício.',
  },
  'threat-hunting-para-encontrar-apts': {
    title: 'Threat hunting para APTs: hipóteses e evidências',
    description: 'Entenda como orientar threat hunting para APTs por hipóteses, fontes e evidências. Relacione sinais de persistência à investigação de incidentes.',
    summary: 'A caça a APTs começa por uma hipótese testável e por saber quais fontes podem respondê-la. Este guia conecta persistência, sinais de atividade e limites de visibilidade, com atenção ao registro do resultado da busca.',
  },
  'como-usar-mitre-att-ck-na-defesa': {
    title: 'MITRE ATT&CK na defesa: como aplicar com contexto',
    description: 'Use MITRE ATT&CK para relacionar comportamentos, telemetria e testes de detecção. Entenda os limites de medir cobertura apenas pela matriz.',
    summary: 'ATT&CK oferece uma linguagem para descrever comportamentos observados. Este guia mostra como relacioná-los à telemetria, às regras e aos testes, mantendo explícitas as diferenças entre uma técnica mapeada e uma detecção validada.',
  },
  'inteligencia-de-ameacas-ciberneticas': {
    title: 'Inteligência de ameaças: da análise à decisão',
    description: 'Como a inteligência de ameaças apoia a resposta a incidentes: perguntas, fontes, confiança e recomendações úteis para a operação defensiva.',
    summary: 'Inteligência de ameaças precisa responder a uma necessidade de decisão. O guia acompanha o caminho entre pergunta, fonte, avaliação e recomendação, para que relatórios e indicadores tenham uso concreto na operação de resposta.',
  },
  'resposta-a-ransomware-em-empresas': {
    title: 'Resposta a ransomware: contenção e recuperação',
    description: 'Resposta a ransomware em empresas: alcance, isolamento, evidências e recuperação. Entenda por que restaurar backups exige fechar o acesso inicial.',
    summary: 'Responder a ransomware envolve limitar propagação, determinar o alcance e coordenar a recuperação com o negócio. Este guia discute também a preservação de evidências e o risco de restaurar serviços enquanto ainda há acesso adversário.',
  },
  'mttd-e-mttr-em-seguranca': {
    title: 'MTTD e MTTR em segurança: como medir e interpretar',
    description: 'Entenda MTTD e MTTR na resposta a incidentes, seus marcos e limites. Evite comparar médias sem considerar escopo, incerteza e resultado da resposta.',
    summary: 'MTTD e MTTR só podem ser interpretados quando seus marcos e a amostra estão claros. O guia explica o que registrar e como combinar os tempos com o contexto e a qualidade da resposta, incluindo a incerteza sobre o acesso inicial.',
  },
  'como-montar-um-csirt': {
    title: 'Como montar um CSIRT: escopo, serviços e equipe',
    description: 'Estruture um CSIRT com mandato, público atendido, serviços, papéis e acionamento. Veja o que precisa funcionar antes de prometer cobertura.',
    summary: 'Montar um CSIRT exige definir para quem ele atua, o que entrega e qual autoridade tem para coordenar ações. Este guia organiza essas decisões e as dependências de pessoas, dados e comunicação necessárias à operação.',
  },
};

export const glossaryFocus: Record<string, { title: string; description: string }> = {
  apt: { title: 'APT: o que é uma ameaça persistente avançada', description: 'Entenda APT, a ameaça persistente avançada: acesso prolongado, adaptação do adversário e relação entre inteligência, investigação e resposta.' },
  tls: { title: 'TLS: o que é e os limites da proteção do tráfego', description: 'TLS protege comunicações em trânsito. Entenda o que ele oferece, seus limites e o contexto dos registros de rede na investigação de incidentes.' },
  'active-directory': { title: 'Active Directory: identidade, privilégios e defesa', description: 'Entenda Active Directory, contas e relações de confiança. Veja por que identidade e privilégios são centrais na investigação e resposta a ataques.' },
  recuperacao: { title: 'Recuperação de incidentes: critérios para o retorno', description: 'Recuperar serviços após um incidente exige validar integridade, dependências e acesso residual. Entenda os critérios de retorno e monitoramento.' },
  'spear-phishing': { title: 'Spear phishing: o que é e como investigar', description: 'Spear phishing é uma tentativa direcionada de enganar um alvo. Entenda sinais, evidências e a relação com acesso inicial e contas comprometidas.' },
  sysmon: { title: 'Sysmon: telemetria para investigar incidentes', description: 'Sysmon registra atividades de sistemas Windows. Entenda a utilidade dos eventos, o contexto de configuração e os limites da análise de telemetria.' },
  edr: { title: 'EDR: o que é e como apoia a investigação', description: 'EDR monitora atividades em endpoints e apoia detecção e resposta. Entenda telemetria, investigação, isolamento e os limites da ferramenta.' },
  soar: { title: 'SOAR: o que é, playbooks e automação da resposta', description: 'Entenda SOAR, a orquestração e automação da resposta a incidentes. Veja como playbooks, aprovações e validações se conectam ao trabalho do SOC.' },
  mfa: { title: 'MFA: o que é e quais são os limites da proteção', description: 'MFA combina fatores de autenticação para proteger acessos. Conheça os fatores, os limites da proteção e a relação com sessões comprometidas.' },
  ssh: { title: 'SSH: o que é e o que investigar em acessos remotos', description: 'SSH permite acesso remoto protegido. Entenda chaves, autenticação e registros relevantes para investigar uso indevido em incidentes.' },
  'inteligencia-tatica': { title: 'Inteligência tática: TTPs e decisões defensivas', description: 'Inteligência tática analisa como o adversário opera. Entenda a relação entre TTPs, hipóteses de caça, detecção e resposta a incidentes.' },
  'escalonamento-de-privilegios': { title: 'Escalonamento de privilégios: sinais e investigação', description: 'Entenda o escalonamento de privilégios em ataques cibernéticos: contexto, sinais, evidências e impacto na contenção de uma intrusão.' },
  steganografia: { title: 'Esteganografia: o que é e como difere de criptografia', description: 'Esteganografia oculta a existência de uma mensagem. Entenda a diferença para criptografia e seu contexto na investigação de ameaças.' },
  'resiliencia-operacional': { title: 'Resiliência operacional: continuidade e recuperação', description: 'Resiliência operacional é a capacidade de sustentar e recuperar operações diante de interrupções. Entenda sua relação com incidentes cibernéticos.' },
  misp: { title: 'MISP: o que é e como compartilhar inteligência', description: 'MISP apoia a organização e o compartilhamento de inteligência de ameaças. Entenda indicadores, contexto e cuidados ao usar dados na resposta.' },
  'zero-day': { title: 'Zero day: o que é e como orientar a defesa', description: 'Entenda vulnerabilidades zero day, exploração e incerteza na investigação. Veja por que comportamento e visibilidade são importantes para a defesa.' },
};

export const readingPaths = [
  { id: 'escolher-livros', title: 'Escolher sua próxima leitura', description: 'Compare obras por objetivo e veja o espaço do livro no estudo da resposta.', slugs: ['livro-de-resposta-a-incidentes-ciberneticos', 'livros-de-ciberseguranca-para-profissionais', 'top-10-livros-de-resposta-a-incidentes', 'top-10-livros-de-cybersecurity'] },
  { id: 'preparar-resposta', title: 'Preparar uma resposta coordenada', description: 'Do plano aos procedimentos e responsabilidades de uma equipe.', slugs: ['plano-de-resposta-a-incidentes-ciberneticos', 'como-criar-um-playbook-de-incidentes', 'como-montar-um-csirt', 'livro-para-montar-um-csirt'] },
  { id: 'investigar-apts', title: 'Investigar ameaças persistentes', description: 'Conecte o estudo de APTs às hipóteses de caça e aos comportamentos observados.', slugs: ['livro-sobre-ameacas-persistentes-avancadas', 'threat-hunting-para-encontrar-apts', 'como-usar-mitre-att-ck-na-defesa', 'inteligencia-de-ameacas-ciberneticas'] },
  { id: 'operar-defesa', title: 'Desenvolver a operação defensiva', description: 'Estude os papéis de SOC, Blue Team e Black Team e a investigação com EDR.', slugs: ['livro-para-analista-de-soc', 'livro-sobre-blue-team', 'livro-sobre-black-team', 'edr-na-investigacao-de-incidentes'] },
  { id: 'conter-recuperar', title: 'Conter e recuperar com evidências', description: 'Explore ransomware, forense, preservação e retorno dos serviços.', slugs: ['resposta-a-ransomware-em-empresas', 'livro-de-analise-forense-digital', 'contencao-de-incidentes-ciberneticos', 'recuperacao-de-sistemas-apos-ataque-cibernetico'] },
  { id: 'medir-aprender', title: 'Medir e melhorar a resposta', description: 'Interprete tempos, qualidade e ações decorrentes das lições aprendidas.', slugs: ['mttd-e-mttr-em-seguranca', 'qualidade-da-resposta-a-incidentes', 'licoes-aprendidas-apos-incidente-cibernetico', 'indicadores-de-desempenho-de-um-csirt'] },
];

export function pathsForArticle(slug: string) {
  return readingPaths.filter(path => path.slugs.includes(slug));
}

export function priorityArticlesForChapter(chapter: number, articles: Article[], limit = 4) {
  return articles.filter(article => article.chapterNumber === chapter)
    .sort((a, b) => Number(Boolean(articleFocus[b.slug])) - Number(Boolean(articleFocus[a.slug])) || a.keyword.localeCompare(b.keyword, 'pt-BR'))
    .slice(0, limit);
}

export function summaryDescription(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).replace(/\s+\S*$/, '').replace(/[,:;.]$/, '')}…`;
}
