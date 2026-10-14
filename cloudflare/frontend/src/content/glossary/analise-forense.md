# Análise forense

## Definição e finalidade

Análise forense, também chamada forense digital, é o método de coleta, preservação e interpretação de vestígios digitais para responder perguntas de uma investigação. Seu objetivo não é simplesmente reunir arquivos ou localizar um culpado. É construir uma explicação verificável sobre eventos relevantes: o que pode ter ocorrido, em quais sistemas, em que sequência aproximada, por quais meios observáveis e com quais limites de confiança. A análise procura manter uma ligação rastreável entre a fonte, o vestígio obtido, as operações realizadas e a conclusão apresentada.

Na prática, a análise serve a questões técnicas e organizacionais. Uma equipe pode querer determinar se houve acesso indevido, se informações foram lidas ou copiadas, quais ativos podem estar envolvidos, se uma atividade continua e que medidas de contenção são proporcionais. Uma investigação interna pode verificar se uma ação ocorreu em dispositivo corporativo. Em qualquer caso, distinga o que os dados demonstram do que apenas tornam plausível.

## O que conta como vestígio digital

Vestígio digital é qualquer dado ou estado observável que possa contribuir para esclarecer uma pergunta investigativa. Pode estar em arquivos, bancos de dados, sistemas operacionais, serviços em nuvem, equipamentos de rede, aplicações, dispositivos móveis ou registros mantidos por terceiros. Também pode consistir em metadados, configurações, eventos de autenticação, cópias de segurança, filas de mensagens, históricos de acesso ou informações sobre o estado de um processo no momento da coleta.

Uma evidência não aponta necessariamente para ação maliciosa: autenticação, consulta a arquivo ou criação de conta também podem decorrer de operação normal, erro ou automação. Seu valor depende da relação entre fontes, do contexto e da avaliação de hipóteses concorrentes.

## Etapas do trabalho

As etapas se influenciam e podem exigir revisões. Uma nova hipótese pode levar à coleta de outra fonte; uma limitação identificada durante o exame pode reduzir o escopo da conclusão. Ainda assim, registrar um fluxo de trabalho ajuda a tornar as decisões compreensíveis e a evitar que a equipe confunda o dado original com uma transformação feita durante a análise.

### Delimitação e planejamento

Antes de examinar sistemas, define-se a pergunta, o escopo, as fontes prováveis, o período relevante e as restrições aplicáveis. “Investigar um computador” é uma instrução vaga; “determinar se determinada conta acessou o repositório durante a janela indicada” é uma pergunta que pode orientar fontes e critérios. ### Coleta e preservação

Coletar é obter os dados relevantes com um procedimento documentado. Conforme a situação, isso pode significar exportar registros, adquirir uma cópia de armazenamento, capturar dados voláteis ou solicitar a preservação de informações a um fornecedor. A escolha deve equilibrar fidelidade, urgência e impacto. Não existe uma única técnica que seja adequada para todo dispositivo, serviço ou pergunta.

Preservar significa manter a evidência em condições que permitam verificar sua integridade e procedência ao longo do trabalho. São importantes a identificação do item ou fonte, a data e o horário da aquisição, o responsável, as ferramentas e versões utilizadas, as configurações relevantes, as transferências e os locais de armazenamento. Quando aplicável, valores de hash ajudam a comparar cópias e a detectar mudanças posteriores. Um hash confirma a correspondência entre conteúdos comparados; não prova, sozinho, que a aquisição inicial foi completa, autorizada ou fiel ao estado anterior.

A cadeia de custódia registra quem acessou a evidência, quando, por quê e sob quais condições. Ela explica a história do material e ajuda a identificar alterações ou lacunas. Controles de acesso, cópias de trabalho e armazenamento protegido complementam esse registro. Mudanças inevitáveis, como coletar um sistema ativo, devem ser descritas com seus efeitos possíveis.

### Exame, análise e interpretação

O exame organiza e pesquisa os dados, identificando arquivos ou extraindo eventos. A análise relaciona resultados às perguntas, compara fontes e avalia alternativas; a interpretação formula afirmações de escopo definido. Uma ferramenta pode produzir muitos resultados sem, por isso, produzir uma conclusão.

Separe três camadas: observação (“o registro mostra uma autenticação associada à conta”), inferência (alguém ou algum processo pode ter usado a credencial) e conclusão, que responde à pergunta considerando contexto e alternativas. Misturá-las transforma pressupostos em fatos.

A correlação temporal exige identificar fusos, relógios desalinhados, formatos e atrasos de ingestão. Um horário pode indicar ocorrência, recebimento ou processamento. Documente conversões e incertezas: uma linha do tempo sintetiza dados, mas não prova causalidade.

### Relato e revisão

O relatório registra pergunta, escopo, fontes, procedimento, achados e limites, separando conclusões diretas das inferências. Um resultado negativo também requer contexto: a fonte pode não existir, ter sido sobrescrita ou estar fora do escopo.

## Onde aparece em uma investigação

A análise forense pode começar durante a resposta a incidentes, quando há urgência para entender uma atividade e limitar danos. Pode continuar depois da contenção, com exame mais amplo de sistemas e registros. Também pode ocorrer em auditoria, apuração de fraude, análise de abuso interno, recuperação de dados ou investigação de falhas. A finalidade muda o tipo de pergunta e o nível de detalhe necessário, mas o cuidado com procedência e limitações permanece.

## Exemplos hipotéticos

Os exemplos a seguir são ilustrativos e não descrevem casos reais.

### Acesso a uma conta corporativa

Uma organização detecta acessos incomuns a uma conta. Registros de identidade mostram autenticações em horários atípicos, e o serviço de arquivos registra consultas a documentos. Isso associa eventos à conta, mas não identifica necessariamente a pessoa: pode haver conta compartilhada, sessão aberta ou origem intermediária.

A equipe compara esses dados com autenticação multifator, dispositivos gerenciados e alterações administrativas. Fontes compatíveis podem apoiar a hipótese de acesso indevido. Porém, consulta a um documento não prova que seu conteúdo foi compreendido ou copiado; essa afirmação requer evidência própria.

### Arquivo removido de uma estação

Em outro cenário hipotético, um arquivo desaparece de uma estação reiniciada antes da coleta. Há um evento compatível com remoção, mas parte dos registros foi substituída. Isso pode apoiar a ocorrência de uma operação, sem identificar quem a iniciou ou qual era o conteúdo integral. Cópias de segurança, sincronização e histórico de versões podem esclarecer o caso. A ausência no disco atual, por si só, não distingue remoção intencional, limpeza automática, falha de sincronização ou erro operacional.

## Como reconhecer uma análise confiável

São sinais úteis de rigor:

- identificação das fontes, do período, dos responsáveis e do escopo;
- registro de horários, fuso, método de aquisição e limitações conhecidas;
- preservação de originais ou de uma referência verificável, com controle das cópias de trabalho;
- distinção entre observação, inferência e conclusão;
- consideração de hipóteses alternativas e de evidências que poderiam contradizer a hipótese principal;
- descrição de lacunas, alterações inevitáveis e efeitos possíveis das ferramentas;
- conclusões calibradas ao que as fontes realmente demonstram.

## Limitações e erros de interpretação

Sistemas geram dados para fins operacionais, não necessariamente investigativos. Registros podem estar incompletos, desabilitados, expirar ou variar entre versões. A falta de um evento não prova que a atividade não ocorreu.

Coletar um sistema ativo pode alterar seu estado. Uma imagem de disco não inclui necessariamente dados remotos, criptografados ou inacessíveis; uma exportação em nuvem pode omitir metadados ou limitar-se às permissões da conta. Informe o que ficou fora e por quê.

Alguns erros recorrentes merecem atenção especial:

- Tratar um endereço de rede, nome de usuário ou dispositivo como identificação conclusiva de uma pessoa. Esses elementos podem ser compartilhados, delegados, mascarados ou comprometidos.
- Interpretar uma ferramenta de segurança como autoridade infalível. Alertas ajudam a priorizar, mas podem ter falsos positivos, regras desatualizadas ou contexto insuficiente.
- Confundir proximidade temporal com causalidade. Eventos próximos podem não ter relação, e atrasos de registro podem inverter a ordem aparente.
- Considerar que um arquivo encontrado foi aberto, lido ou transmitido. Presença, acesso e transferência são afirmações diferentes e exigem suporte adequado.
- Tratar ausência de evidência como evidência de ausência sem verificar retenção, cobertura, integridade e método de busca.
- Ajustar a análise para confirmar a hipótese inicial, ignorando explicações alternativas ou achados incompatíveis.

## Relação com resposta a incidentes

Resposta a incidentes e análise forense se complementam, mas têm objetivos imediatos diferentes. A resposta procura limitar impacto, restaurar serviços e reduzir a possibilidade de recorrência. A análise busca esclarecer eventos com base em vestígios preservados e interpretados. Em uma situação ativa, esperar por uma coleta extensa pode aumentar o dano; agir sem considerar a evidência pode apagar dados necessários. A equipe precisa escolher uma ordem razoável para o caso, registrando as consequências de cada medida.

Conter pode exigir desabilitar credenciais, isolar equipamentos ou bloquear comunicações. Isso protege sistemas, mas pode eliminar sessões e dados voláteis. Preserve informações críticas quando viável; se a urgência impedir, registre ação, responsável, horário e justificativa.

Os achados ajudam a delimitar o escopo, avaliar exposição, orientar recuperação e revisar controles. Não substituem a validação de segurança para retorno à operação, nem uma conclusão sobre um dispositivo exclui envolvimento de outros.

## Distinções com termos próximos

**Coleta de evidências** é a obtenção de dados. Pode ser uma etapa da análise forense, mas não inclui necessariamente a interpretação investigativa. Uma exportação de registros, por exemplo, coleta dados; relacioná-los a uma hipótese e explicar limites exige trabalho adicional.

**Resposta a incidentes** é o conjunto de ações para detectar, conter, erradicar e recuperar de um incidente. Pode incorporar técnicas forenses, mas uma ação emergencial não se torna análise completa apenas por preservar alguns registros. Do mesmo modo, uma investigação pode continuar após a recuperação operacional.

## Perguntas frequentes

### A análise identifica quem realizou a ação?

Nem sempre. Pode associar atividade a conta, sessão ou dispositivo, mas contas compartilhadas, credenciais comprometidas e automação limitam a atribuição pessoal.

### Um hash prova autenticidade?

Não sozinho. Ele compara conteúdos, mas não prova origem, completude da aquisição ou correção do procedimento.

### É necessário desligar o equipamento antes de coletar?

Não há resposta universal. Desligar pode interromper atividade e eliminar informações voláteis; manter ligado pode permitir alterações contínuas, acesso remoto ou risco operacional. A decisão depende da ameaça, do papel do ativo, das capacidades de coleta, da autorização e da urgência. Deve ser tomada por profissionais responsáveis, considerando segurança e preservação, e registrada com seus efeitos esperados.

### Se não foi encontrado um indicador, o ambiente está limpo?

Não necessariamente. A busca pode ter sido estreita, a fonte pode não registrar o comportamento, os dados podem ter expirado ou a técnica observada pode não corresponder ao indicador procurado. A conclusão adequada descreve quais fontes e períodos foram examinados e qual atividade não foi identificada nelas. Uma busca negativa reduz ou altera hipóteses apenas na medida da cobertura obtida.

## Aplicação no capítulo relacionado

Na organização original do manuscrito, este verbete se relaciona ao capítulo 8. A análise forense transforma sinais técnicos em afirmações avaliáveis: delimita a pergunta, preserva vestígios e explicita incertezas. No confronto cibernético, ajuda a evitar atribuições precipitadas e orienta decisões defensivas.
