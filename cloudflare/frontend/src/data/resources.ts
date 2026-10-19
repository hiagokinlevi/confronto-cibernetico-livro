export const resourceDate = '2026-10-19';
export const resources = [
  { slug: 'calculadora-mttd-mttr', title: 'Calculadora de MTTD e MTTR', description: 'Calcule médias, mediana e P90 dos tempos de detecção, contenção e recuperação. Use dados de exemplo e exporte um resumo com os marcos definidos.', kind: 'CALCULADORA', article: 'mttd-e-mttr-em-seguranca', term: 'mttr', chapter: 'metricas-mttd-mttr-resposta-apts' },
  { slug: 'modelo-plano-resposta-incidentes', title: 'Modelo de plano de resposta a incidentes', description: 'Prepare um modelo editável com escopo, papéis, acionamento, evidências, comunicação e critérios de recuperação. Baixe em Markdown, sem cadastro.', kind: 'MODELO EDITÁVEL', article: 'plano-de-resposta-a-incidentes-ciberneticos', term: 'csirt', chapter: 'fases-resposta-incidentes-nist' },
  { slug: 'simulador-tabletop-ransomware', title: 'Exercício de mesa: ransomware e incidentes', description: 'Conduza um exercício de mesa com cenários fictícios, perguntas por rodada e registro de decisões. Inclui ransomware, conta em nuvem e persistência.', kind: 'EXERCÍCIO GUIADO', article: 'exercicio-de-mesa-de-incidente-cibernetico', term: 'playbook', chapter: 'contencao-erradicacao-recuperacao' },
];
export const resourceUrl = (resource: typeof resources[number]) => `/recursos/${resource.slug}/`;

export const scenarios = [
  { id: 'ransomware', name: 'Ransomware no início do expediente', objective: 'Discutir contenção, preservação e recuperação com visibilidade incompleta.', rounds: [
    ['0–10 min', 'O atendimento recebe relatos de arquivos inacessíveis. Há uma nota de extorsão em duas estações. O sistema de pedidos ainda funciona.', 'Quem declara o incidente e coordena a resposta? Quais fatos precisam ser confirmados antes de uma contenção ampla?'],
    ['10–20 min', 'Surge uma sessão administrativa fora do padrão. O responsável por um servidor crítico informa que o desligamento interromperia a operação.', 'Que informação sustenta isolar o equipamento ou restringir o acesso? Quem autoriza a ação e como preservar os registros?'],
    ['20–30 min', 'O backup mais recente aparece como concluído, mas não há teste recente de restauração. Uma conta privilegiada acessou o repositório durante a noite.', 'Como verificar integridade e separar uma cópia confiável? Qual é a prioridade de recuperação e quais dependências precisam voltar primeiro?'],
    ['30–45 min', 'Há tráfego de saída elevado antes da criptografia. Não foi confirmado o conteúdo transferido. A direção pede uma mensagem para clientes.', 'O que pode ser comunicado como fato? Quem participa da avaliação de dados e das obrigações aplicáveis? Quais hipóteses continuam abertas?'],
    ['45–60 min', 'Um serviço foi reconstruído em ambiente separado. A equipe encontra uma identidade de serviço sem responsável conhecido.', 'Quais condições permitem voltar à produção? Como validar identidades, acesso residual e monitoramento antes do retorno?'],
  ] },
  { id: 'cloud', name: 'Conta administrativa em nuvem', objective: 'Examinar sessões, permissões, trilhas de auditoria e dependências de acesso.', rounds: [
    ['0–10 min', 'Uma regra alerta para criação de uma chave de acesso fora do horário esperado. O proprietário da conta ainda não respondeu.', 'Quais registros distinguem atividade autorizada de abuso? Quem pode preservar a trilha de auditoria?'],
    ['10–20 min', 'A conta criou uma identidade adicional e modificou uma política. Uma automação de faturamento usa a mesma função.', 'Como limitar o acesso e preservar a operação? Quais sessões, chaves e permissões precisam de revisão coordenada?'],
    ['20–30 min', 'O controle registra leitura em um repositório. A auditoria detalhada sobre objetos não estava habilitada.', 'Que conclusões são sustentáveis sobre acesso a dados? Como registrar essa lacuna e procurar fontes complementares?'],
    ['30–45 min', 'O fornecedor confirma a revogação de uma sessão. A nova identidade ainda tem uma credencial válida.', 'Como validar que a contenção abrange todos os caminhos conhecidos? Quem confere recursos e relações de confiança criados?'],
    ['45–60 min', 'A aplicação volta a operar com uma identidade dedicada. Há permissões históricas além do escopo necessário.', 'Quais riscos residuais podem ser aceitos e por quem? Que melhoria terá responsável, prazo e evidência de conclusão?'],
  ] },
  { id: 'apt', name: 'Persistência após uma contenção inicial', objective: 'Testar hipóteses, coordenação e revisão do alcance de uma intrusão persistente.', rounds: [
    ['0–10 min', 'Após a remoção de um arquivo suspeito, uma estação mantém contatos recorrentes com um destino não reconhecido.', 'Qual é a hipótese investigativa? Que fontes podem confirmá-la ou enfraquecê-la sem presumir que toda comunicação seja maliciosa?'],
    ['10–20 min', 'Uma conta usada no host aparece em outro servidor. O administrador reconhece parte das ferramentas, mas não o horário.', 'Como reconstruir a sequência com identidade, processo e rede? Que relógios e lacunas afetam a linha do tempo?'],
    ['20–30 min', 'Há uma tarefa administrativa sem mudança documentada. A conta que a criou tem acesso a uma aplicação sensível.', 'Que escopo precisa ser reavaliado? Quem coordena contenção, investigação e continuidade para evitar decisões isoladas?'],
    ['30–45 min', 'Uma hipótese de caça não encontra correspondências em dois segmentos. Em um terceiro, a retenção expirou.', 'Como descrever o resultado sem tratar ausência de registros como ausência de intrusão? Que controles temporários são justificáveis?'],
    ['45–60 min', 'Os caminhos conhecidos de acesso foram tratados. A direção solicita o encerramento do incidente.', 'Que evidência sustenta o encerramento? Como documentar incerteza, monitoramento adicional e critérios para reabrir a investigação?'],
  ] },
];
