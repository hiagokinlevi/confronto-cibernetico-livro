# Incident Handler

## Definição e escopo

Incident Handler, também chamado de analista de resposta a incidentes, é o profissional que conduz ou coordena a análise e o tratamento de um incidente conforme o mandato da equipe. O papel transforma sinais e decisões urgentes em resposta coerente: compreender o que se sabe, explicitar incertezas, propor ou executar ações autorizadas e manter continuidade entre etapas. O título não determina, por si só, senioridade, especialidade técnica, poder de decisão ou posição hierárquica. Essas características dependem da organização, do modelo de resposta e da delegação recebida.

A palavra handler não significa que a pessoa execute toda tarefa técnica. Em equipes pequenas, pode acumular análise, coleta e coordenação; em estruturas maiores, organiza especialistas de várias áreas. Em qualquer arranjo, deve manter a resposta orientada por evidências, prioridades e autoridade definida.

O caso pode estar confirmado ou ainda sob suspeita; a resposta não exige conclusão sobre causa ou autoria. O handler trabalha com hipóteses provisórias, atualizadas conforme surgem dados, sem deixar que uma explicação inicial se transforme em fato por repetição.

## Mandato, responsabilidade e limites

O mandato da equipe define o que o handler pode decidir, o que pode realizar diretamente e o que precisa encaminhar para aprovação. Pode abranger sistemas, ambientes, períodos e tipos de incidente específicos. A pessoa que coordena uma investigação não recebe automaticamente autorização para desligar serviços, bloquear contas, acessar conteúdo pessoal, alterar evidências ou contatar terceiros. A urgência pode justificar decisões rápidas dentro da política estabelecida, mas não elimina limites legais, contratuais, de privacidade ou de continuidade do negócio.

A atribuição deve esclarecer quem declara o incidente, aprova medidas de impacto, coordena equipes e comunica públicos externos. O handler pode recomendar uma ação, enquanto a aprovação cabe a gerente, proprietário do sistema ou liderança; em outros modelos, há delegação para classes específicas. Essa fronteira precisa ser conhecida antes de uma decisão urgente.

Coordenar o fluxo não torna o handler proprietário dos sistemas. Operações conhece dependências, negócio avalia consequências, especialistas fornecem análise e liderança resolve prioridades. O handler conecta essas perspectivas sem substituir funções nem decidir além de sua autoridade.

## Como o trabalho se organiza

A atuação é iterativa, não uma sequência rígida. Triagem, investigação, contenção, recuperação e revisão podem se sobrepor. Um achado pode ampliar o escopo, uma contenção pode interromper uma fonte de evidência e uma restauração pode revelar persistência. O handler mantém visão atual do caso e considera efeitos entre etapas.

### Da triagem à hipótese de trabalho

Na triagem, o profissional reúne o relato inicial, o alerta que disparou a análise, o ativo envolvido, o horário conhecido, a criticidade do serviço e os sinais disponíveis. Verifica duplicidade, contexto e confiabilidade da fonte. A pergunta inicial não é apenas “o alerta é verdadeiro?”, mas também “qual decisão depende desta resposta agora?”. Um evento pode ser tecnicamente real e ainda assim não constituir incidente relevante; inversamente, um alerta incompleto pode merecer investigação rápida por envolver um sistema crítico.

A hipótese de trabalho descreve uma explicação provisória e testável: o que talvez tenha ocorrido, em que intervalo, quais recursos podem ter sido afetados e quais observações poderiam confirmar ou enfraquecer a hipótese. Ela deve registrar grau de confiança e lacunas importantes. Uma cronologia com fatos observados separados de inferências ajuda a evitar que interpretações sejam confundidas com registros. O handler também monitora hipóteses alternativas, sobretudo quando os mesmos sinais podem resultar de manutenção legítima, erro de configuração, automação ou atividade maliciosa.

### Coordenação da investigação

A investigação é distribuída conforme as perguntas: especialistas podem examinar endpoints, identidade, rede ou serviços hospedados. O handler transforma hipóteses em tarefas delimitadas por evidência, intervalo, fonte, responsável e prazo. Pedidos claros reduzem duplicação e tornam lacunas de cobertura visíveis.

O registro deve indicar origem e horário dos dados, responsável, contexto, limitações e preservação aplicável. Deve permitir compreender o raciocínio e a decisão; requisitos de cadeia de custódia dependem do contexto e das regras pertinentes.

### Contenção e continuidade

Conter significa reduzir a possibilidade de dano ou propagação, dentro dos objetivos e da autoridade definidos. Pode envolver limitar acesso, isolar um recurso, suspender uma credencial ou alterar uma regra defensiva. A escolha considera risco de continuidade, impacto no serviço, possível alerta a terceiros e preservação de dados. O handler compara fatores e registra a justificativa; bloquear não é automaticamente seguro ou suficiente.

Medidas provisórias precisam de responsável, prazo de revisão e condição de remoção. Uma regra esquecida pode causar indisponibilidade; esperar certeza absoluta pode prolongar o impacto. A resposta explicita confiança, escolhe medida proporcional e define como verificar seu efeito. Ações sobre serviços essenciais exigem consulta a quem conhece as dependências e aceita o risco residual.

### Recuperação e encerramento

Recuperar não é somente religar sistemas. A equipe precisa estabelecer critérios para considerar o ambiente suficientemente confiável, verificar se a condição que motivou a contenção foi removida ou controlada e observar sinais de recorrência. A restauração pode ocorrer por etapas, com monitoramento e um plano de retorno caso surjam novos indicadores. O handler acompanha dependências e confirma quem assume a operação após a resposta intensiva.

O encerramento sintetiza escopo, impacto, cronologia, decisões, evidências, incertezas e pendências. Pode ocorrer sem resposta a todas as perguntas, desde que o motivo e o destino das pendências sejam claros. A revisão busca melhorar controles e coordenação, não atribuir culpa automaticamente.

## Passagem de contexto e comunicação

A passagem clara entre triagem, contenção, comunicação e recuperação é parte do trabalho técnico, não uma formalidade. Cada transição deve dizer o que mudou, o que permanece desconhecido, quais ações estão em vigor, quem as aprovou, quais efeitos observar e quem responde pelo próximo passo. Uma equipe que recebe somente uma lista de indicadores, sem contexto ou prioridade, pode repetir trabalho ou aplicar uma ação incompatível com o estado atual.

A comunicação separa fatos, inferências e possibilidades. Uma atualização útil resume situação, impacto e confiança, ações e responsáveis, decisão necessária e próxima atualização. Causa, alcance ou recuperação não devem ser anunciados sem suporte; cada público recebe o contexto necessário à sua decisão.

A cadência deve acompanhar gravidade e velocidade: silêncio prolongado cria versões paralelas, mas mensagens sem novidade consomem atenção. Informações sensíveis circulam apenas nos meios aprovados e com acesso necessário.

## Onde aparece e como reconhecer o papel

O papel aparece em escalas, registros de caso, relatórios, organogramas e transferências de turno. Pode existir sem o título explícito. Receber um alerta ou executar uma consulta pontual, isoladamente, não caracteriza a função.

Evidências que ajudam a reconhecer a função incluem a designação de um responsável pelo caso, tarefas distribuídas com prazos, uma cronologia mantida, decisões ligadas a aprovações, atualização de situação e transferência documentada de responsabilidade. Esses sinais descrevem processo, não prova de competência ou de autoridade ilimitada. Em uma análise retrospectiva, convém examinar a política de resposta e a estrutura real de decisão, em vez de inferir o papel apenas pelo cargo ou pela presença em uma reunião.

A interlocução com provedores ou assessores não significa autorização para falar em nome da organização; contatos externos podem exigir porta-voz ou orientação apropriada.

## Distinções com termos próximos

**Analista de segurança** é uma função ampla; pode atuar como handler, mas o título não implica coordenação integral. **Investigador forense** concentra-se na aquisição, preservação e interpretação de evidências e pode fornecer achados sem coordenar o caso.

**Gerente do incidente** pode ter coordenação geral ou autoridade executiva; a fronteira com o handler varia e os papéis podem ser acumulados. **Proprietário do sistema** oferece contexto operacional, sem necessariamente conduzir investigação. **Threat hunter** busca atividade suspeita proativamente; um achado seu não transfere automaticamente a responsabilidade pelo caso.

O termo designa uma função, não o incidente, a equipe ou uma ferramenta. Pode ser atribuído a uma pessoa ou escala, mas a responsabilidade deve persistir nas trocas de turno.

## Exemplos hipotéticos

Em um cenário hipotético, uma ferramenta alerta sobre autenticação incomum em conta privilegiada. O handler registra fonte e horário, consulta se havia atividade administrativa prevista e solicita à equipe de identidade eventos correlatos. Em paralelo, verifica com o responsável pelo serviço o impacto de restringir a credencial. Se a medida for aprovada, registra quem a aplicará e acompanha os efeitos. O alerta não prova invasão, e a restrição não encerra a investigação.

Em outro exemplo hipotético, arquivos são alterados em um servidor importante. O handler coordena preservação de dados pertinentes, consulta dependências e reúne especialistas para avaliar extensão e contenção. A liderança recebe distinção entre observação e hipótese. A recuperação segue critérios acordados; o registro final explicita períodos sem telemetria. São ilustrações, não procedimentos universais.

## Limitações e erros de interpretação

O handler não compensa telemetria ausente, registros incompletos ou controles inadequados. Depende da qualidade dos relatos e pode enfrentar conflito entre disponibilidade e contenção. Pode expor essas limitações, mas não eliminá-las.

Erros frequentes incluem tratar o primeiro alerta como diagnóstico; assumir que um indicador ausente prova ausência de atividade; confundir recomendação com decisão aprovada; executar mudanças sem avaliar dependências; deixar uma medida temporária sem revisão; e transferir o caso sem registrar estado, incertezas e responsáveis. Outro erro é concentrar todo o conhecimento em uma pessoa. Isso cria dependência de memória individual e torna a resposta frágil durante troca de turno, indisponibilidade ou simultaneidade de incidentes.

Não se deve avaliar a função apenas por velocidade ou tarefas concluídas. Importam proporcionalidade, tratamento honesto da incerteza, respeito ao mandato e continuidade, considerando as informações disponíveis à época.

## Perguntas frequentes

### O handler precisa dominar todas as tecnologias?

Não. Deve formular boas perguntas, reconhecer dependências e convocar especialistas, sem fingir domínio que não possui. Pedir revisão técnica é uma medida de controle.

### É sempre quem decide a contenção?

Não. Depende do mandato e do impacto. Pode recomendar, coordenar ou executar medida autorizada; quando a decisão cabe a outra função, deve fornecer contexto e recomendação claros.

### Um caso pode ter mais de um handler?

Pode haver coordenação compartilhada, escala ou divisão por frentes. É essencial haver responsabilidade principal identificável, conciliação de decisões e transferência explícita.

### Quando a responsabilidade passa a outra pessoa?

Quando há aceitação explícita da transferência ou encerramento conforme o processo. O registro informa estado, decisões vigentes, riscos, contatos e próximos passos; enviar mensagem sem confirmação não garante a transição.

### Como lidar com fatos contraditórios?

Registrar fontes e horários, separar observação de interpretação e buscar verificação. Se não houver resposta a tempo, comunicar a incerteza e adotar medida proporcional dentro da autoridade. Ocultar a divergência enfraquece decisões e revisão.

## Relação com o capítulo

No capítulo 7 da versão original, o termo se relaciona à organização das equipes e à continuidade da resposta. Seu uso no glossário destaca a função de conduzir ou coordenar o tratamento segundo mandato definido e de manter contexto entre triagem, contenção, comunicação e recuperação.
