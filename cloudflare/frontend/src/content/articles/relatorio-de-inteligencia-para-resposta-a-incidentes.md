# Relatório de inteligência para resposta a incidentes

## Qual pergunta o relatório precisa responder?

A pergunta central não é “quais indicadores encontramos?”, mas “diante do que sabemos agora, que decisão a equipe precisa tomar e com que confiança?”. Um relatório de inteligência para resposta a incidentes organiza evidências e contexto para reduzir a incerteza de uma decisão operacional. Pode apoiar a escolha entre isolar um equipamento, ampliar a busca, preservar uma fonte de dados, avisar uma área interna ou aguardar uma confirmação. Seu valor depende de conectar cada informação a uma consequência possível, explicitar limites e indicar quando a análise deve ser revisada.

Essa pergunta central se desdobra em outras, priorizadas pela situação: há atividade em andamento? Que ativos, contas, serviços ou dados podem estar envolvidos? Quais observações sustentam essa avaliação? O que ainda não foi observado por falta de telemetria ou de tempo? Qual medida reduz risco sem destruir evidência ou interromper um serviço essencial? Quem tem autoridade para decidir? O que deve ser comunicado, a quem e em qual prazo? Uma peça de inteligência não precisa responder a tudo de uma vez. Precisa deixar claro o que é urgente, o que é conhecido e qual lacuna muda a próxima decisão.

Em uma resposta acelerada, a equipe pode precisar de uma nota curta com uma recomendação e uma hora de revisão. Em uma investigação que se prolonga, pode precisar de atualizações que registrem como a avaliação mudou. Em ambos os casos, a forma serve à decisão. Um documento extenso sem prioridade pode ocultar um alerta importante; uma nota concisa sem evidência pode soar como opinião. O objetivo é tornar o raciocínio rastreável, não aparentar certeza nem acumular detalhes por si mesmos.

## Definição e função operacional

Inteligência para resposta a incidentes é a interpretação contextualizada de informações relevantes para uma ação de defesa. Informação é um registro, uma observação, um relato ou um alerta. Inteligência é a avaliação que explica por que aquela informação importa, quais explicações alternativas cabem nos dados e como isso afeta uma decisão. A distinção não torna a análise infalível. Ela torna visível a passagem entre observação e conclusão para que outra pessoa possa contestá-la, atualizá-la ou usá-la com os limites corretos.

Um relatório operacional, portanto, não é apenas um inventário de indicadores, uma cronologia bruta, um resumo de notícias sobre ameaças nem uma atribuição de autoria. Pode incorporar esses elementos quando pertinentes, mas precisa responder a um consumidor concreto. Uma equipe de detecção pode precisar de comportamento observável e fontes a consultar. A equipe de infraestrutura pode precisar saber o impacto provável de uma medida de contenção. A liderança pode precisar compreender opções, riscos e dependências sem receber detalhes irrelevantes. Uma área jurídica ou de privacidade pode precisar ser envolvida conforme a natureza dos dados e as regras aplicáveis.

## Contexto: a posição do relatório no ciclo do incidente

Um incidente é dinâmico. Alertas chegam em tempos diferentes, registros podem atrasar, sistemas ficam indisponíveis e uma ação de contenção altera o ambiente observado. Por isso, a avaliação representa o conhecimento disponível em determinado momento, não uma descrição eterna do caso. Todo relatório operacional deve indicar quando foi preparado, qual período de atividade cobre e qual evento ou mudança motivou a análise. Sem referência temporal, o leitor pode aplicar uma conclusão antiga a uma situação já diferente.

A inteligência costuma atravessar várias etapas: alguém define a necessidade de decisão; analistas coletam fontes pertinentes; observações são examinadas e comparadas; a equipe formula uma avaliação; o resultado chega a quem pode agir; e o retorno da ação orienta novas perguntas. Esse ciclo não precisa virar burocracia. Em um incidente em andamento, as etapas podem ocorrer em paralelo. Ainda assim, é útil nomear a pergunta que abriu a análise e registrar se ela continua sendo a prioridade depois de novas evidências.

## Começar pelas decisões prioritárias

Antes de pesquisar fontes, o analista deve descobrir qual decisão está pendente, quem a tomará e até quando. Uma pergunta como “o que aconteceu?” é ampla demais para orientar uma resposta imediata. Pode ser convertida em perguntas operacionais: há indício suficiente para isolar o ativo agora? Que outros ativos merecem triagem primeiro? A atividade observada parece continuar? Que evidência deve ser preservada antes de uma mudança? Existe informação que exija comunicação a uma autoridade interna? Essas perguntas dão foco à coleta e evitam que a equipe passe horas reunindo dados interessantes mas sem efeito sobre a ação.

A prioridade deve considerar o custo de esperar e o custo de agir. Isolar uma estação de trabalho pode reduzir uma via de comunicação, mas também interromper uma operação crítica ou eliminar acesso a dados voláteis. Bloquear uma conta pode conter abuso, mas impedir atividades legítimas ou dificultar a investigação se a equipe não preservar registros relevantes. Adiar uma medida pode manter risco ativo. O relatório precisa apresentar esses elementos como consequências a avaliar, sem fingir que existe uma resposta universal.

## Evidências, alertas e hipóteses

Um alerta é um sinal produzido por uma regra, ferramenta, serviço ou pessoa. Pode apontar para uma atividade relevante, mas sua existência não comprova por si só a interpretação associada. Uma evidência é uma observação identificável que sustenta ou enfraquece uma afirmação dentro de um contexto definido. Uma hipótese é uma explicação possível que ainda precisa ser testada. A linguagem do relatório deve conservar essas diferenças: “o sistema gerou um alerta” é observação; “a conta foi usada por pessoa não autorizada” é uma hipótese até haver sustentação suficiente; “o registro de autenticação mostra sucesso às 14h” é uma afirmação apoiada em fonte, sujeito às limitações do relógio, da cobertura e da integridade desse registro.

Para cada afirmação importante, o leitor deve conseguir localizar a fonte e entender o que ela realmente mostra. Registre o sistema de origem, o período consultado, o identificador ou localização interna suficiente para recuperação, quem obteve o dado, e limitações conhecidas. Quando a organização usa horários em fusos distintos, explicite a referência temporal e a normalização adotada. Um horário sem fuso ou sem indicação de atraso de ingestão pode tornar falsa a ordem aparente dos eventos.

A qualidade da evidência depende de cobertura e integridade, não apenas de aparente precisão. Uma ferramenta pode registrar conexões de rede mas não processos locais; um serviço de identidade pode reter dados por período limitado; um relógio fora de sincronização pode deslocar a cronologia; um endpoint pode estar desconectado; uma busca pode abranger apenas um conjunto de ativos. O relatório deve informar as lacunas que afetam a conclusão. “Não localizado nos registros consultados” não equivale a “não ocorreu”, especialmente quando não se sabe se os registros estavam disponíveis e completos.

## Grau de confiança e alternativas

Confiança expressa quão bem a avaliação é sustentada pela qualidade, quantidade, consistência e independência das evidências consideradas. Não é sinônimo de impacto, probabilidade matemática nem certeza. Uma hipótese de grande impacto pode ter confiança baixa; isso pode justificar uma ação preventiva de baixo custo, mas não autoriza descrevê-la como fato. Uma hipótese de impacto limitado pode ter confiança alta e ainda assim não merecer prioridade imediata. O relatório deve separar essas dimensões para que risco e confiança não sejam confundidos.

A escala usada precisa ser compreensível e consistente. Uma organização pode usar categorias como baixa, moderada e alta, desde que explique o significado de cada uma e aplique o mesmo critério entre relatórios. Se o processo ainda não tem uma escala definida, uma explicação em prosa é preferível a uma etiqueta decorativa. O analista pode dizer que a avaliação tem confiança moderada porque dois registros independentes convergem, mas a telemetria cobre somente parte dos ativos. O leitor entende tanto o apoio quanto a restrição.

## Fontes de evidência pertinentes

Fontes internas costumam ser prioritárias porque descrevem o ambiente afetado e podem responder à pergunta operacional. Conforme a arquitetura e a retenção disponíveis, isso pode incluir telemetria de endpoint, registros de autenticação e identidade, eventos de diretório, fluxos ou registros de rede, DNS, proxy, firewall, correio eletrônico, serviços em nuvem, aplicações, inventário de ativos, gestão de mudanças e chamados de suporte. Nenhuma fonte deve ser presumida disponível ou completa. O relatório registra o que foi consultado, o que estava fora do alcance e por quê.

As fontes devem ser selecionadas pela pergunta, não por hábito. Para entender uma autenticação, talvez sejam relevantes registros do provedor de identidade, contexto do dispositivo, horário, método e histórico de mudança de credencial. Para avaliar uma conexão de rede, podem importar o ativo de origem, destino, serviço, processo associado e período de retenção. Para decidir se uma atividade é autorizada, o inventário de mudanças e a confirmação do responsável pelo sistema podem ser mais esclarecedores que um catálogo externo de indicadores. A utilidade de uma fonte depende da relação demonstrável com a decisão.

## Da evidência à implicação defensiva

Cada evidência deve ser conectada a uma implicação possível para detecção, contenção ou comunicação. Para detecção, pergunte que padrão observável merece revisão, que população de ativos é pertinente, que janela temporal se aplica e que falsos positivos são plausíveis. Uma recomendação pode pedir que a equipe compare autenticações de uma conta com eventos de dispositivo, por exemplo, desde que os dados existam e a consulta seja autorizada. Deve explicar por que essa correlação distingue hipóteses e o que fazer se a fonte não estiver disponível.

Para contenção, descreva a ação como opção contextualizada. Uma recomendação pode avaliar o isolamento de um ativo se houver sinais convergentes de atividade ativa e se a equipe responsável considerar aceitável o impacto operacional. O relatório deve indicar dependências: criticidade do equipamento, possibilidade de manter serviço por alternativa, preservação de dados voláteis e autoridade para aprovar a medida. Evite formulações vagas como “bloquear tudo imediatamente” quando não há escopo, evidência ou análise de consequência.

Para comunicação, indique o fato que pode ser comunicado, seu público e a próxima atualização prevista. Uma mensagem interna pode informar que a investigação está em andamento, quais serviços estão sob análise e onde encaminhar observações. Não deve apresentar uma hipótese como confirmação nem prometer que dados não foram afetados antes que a investigação sustente essa afirmação. A comunicação externa e notificações regulatórias exigem coordenação com as funções competentes e análise das obrigações aplicáveis; o relatório de inteligência informa fatos e incertezas para essa avaliação, mas não substitui aconselhamento apropriado.

## Papéis e coordenação do Black Team

O capítulo 7 do manuscrito relacionado trata de estrutura, papéis e coordenação do Black Team. Nesse contexto, o relatório funciona como um ponto comum de entendimento entre pessoas que podem ter responsabilidades distintas. A equipe de inteligência organiza a avaliação e deixa visíveis suas bases. A resposta a incidentes coordena a investigação e as medidas acordadas. Detecção e engenharia de segurança verificam cobertura e observabilidade. Operações e proprietários de serviço avaliam impacto e dependências. Liderança, jurídico, privacidade, comunicação e outras áreas participam quando o escopo e as regras da organização requerem. A estrutura concreta varia; não se deve presumir que toda empresa use o mesmo nome ou tenha uma equipe dedicada para cada função.

Papéis claros reduzem dois problemas: recomendações sem dono e decisões tomadas por quem não tem autoridade. O documento pode registrar quem produziu a análise, quem revisou aspectos técnicos, quem recebeu a recomendação e quem decidiu. Isso não significa que o analista assine a decisão de negócio. Quem decide precisa compreender as opções e registrar a justificativa quando necessário. Quem executa precisa saber o escopo e os limites aprovados. Quem coordena deve manter as atualizações consistentes para que equipes diferentes não atuem com versões incompatíveis.

A coordenação também define como tratar divergências. Um responsável pelo sistema pode considerar uma interrupção inaceitável; a resposta pode avaliar que o risco de continuidade da atividade é maior. O relatório deve apresentar a evidência e as consequências para que a autoridade apropriada decida, com eventuais controles compensatórios. A discordância não deve ser apagada em uma nota final. Registrar a decisão, seu autor, o horário e as condições de revisão protege a continuidade do raciocínio e permite reavaliar se o risco ou o contexto mudar.

## Estrutura recomendada de um relatório operacional

O cabeçalho identifica assunto, classificação aplicável, versão, horário de emissão, período analisado, responsável e destinatários previstos. Uma nota de situação começa com a decisão necessária e o prazo relevante. Em poucas linhas, resume o que foi observado, a avaliação atual, o nível de confiança explicado e a ação sugerida. Se há risco de atividade em andamento, isso deve aparecer antes do contexto histórico. A primeira página ou mensagem precisa permitir ao leitor entender a situação sem interpretar uma longa cronologia.

Em seguida, registre escopo e método: ativos ou identidades cobertos, fontes consultadas, intervalo temporal, critérios de inclusão e lacunas de coleta. Diferencie claramente as observações confirmadas, as hipóteses, as alternativas e as questões em aberto. Use uma cronologia somente quando a ordem de eventos ajudar a decisão, e marque horários e fuso de forma consistente. Uma cronologia não substitui avaliação: ela organiza eventos, mas não explica sozinha o que significam.

## Cenários hipotéticos contrastantes

### Sinal isolado sem confirmação

Cenário hipotético: uma ferramenta registra conexão de um ativo para um domínio que consta em uma fonte externa como suspeito. A conexão aparece uma vez, e não há processo associado nos dados disponíveis. O inventário indica que o ativo pertence a uma área de negócio, mas ainda não há confirmação do usuário nem registro de alteração. A observação confirmada é a conexão registrada e a correspondência do domínio na fonte consultada, com a data dessa referência. A alegação de comprometimento permanece hipótese. A fonte externa não demonstra, sozinha, atividade maliciosa naquele ativo.

### Evidências convergentes e atividade possivelmente ativa

### Atividade explicada por manutenção autorizada

### Fonte ausente e decisão sob incerteza

## Exemplos defensivos seguros

Um uso seguro do relatório é orientar uma busca autorizada em fontes que a organização controla. Em vez de distribuir uma lista extensa de endereços e recomendar bloqueio automático, a análise pode definir quais ativos e período devem ser revisados, qual relação com o incidente motivou a busca e quais dados devem ser preservados. Pode também apontar uma regra de detecção candidata para avaliação em ambiente controlado, com escopo, risco de falso positivo e processo de aprovação. A finalidade é melhorar visibilidade e resposta; a execução deve respeitar as ferramentas e permissões estabelecidas.

Outro exemplo é a avaliação de exposição de uma conta corporativa. O relatório pode comparar registros de autenticação disponíveis com eventos de alteração, contexto do dispositivo e histórico de acesso relevante. Pode recomendar que a equipe autorizada valide sessões, verifique a necessidade de revogar credenciais conforme procedimento interno e analise contas com relação justificada. Não precisa fornecer instruções para testar credenciais em serviços, contornar controles ou acessar sistemas de terceiros. O foco é a evidência defensiva local e a contenção aprovada.

## Erros comuns que reduzem o valor

Um erro frequente é entregar listas extensas de indicadores sem explicar a relevância, a origem, o período de validade, as limitações ou o que fazer com eles. Isso transfere ao operador o trabalho de interpretar tudo e pode produzir bloqueios indiscriminados ou alertas ruidosos. Indicadores devem ser selecionados pelo vínculo com a pergunta e apresentados com contexto. Quando muitos elementos forem indispensáveis, agrupe-os por finalidade, dê referência controlada e resuma no corpo do relatório o que muda na decisão.

Outro erro é confundir severidade técnica do alerta com prioridade de resposta. Um alerta classificado como grave pode não ter evidência no ambiente; um evento de classificação menor pode afetar uma identidade privilegiada ou um serviço crítico. Prioridade resulta da combinação de evidência, impacto potencial, urgência, exposição e custo de intervenção. O relatório não deve simplesmente copiar a categoria da ferramenta como se fosse uma avaliação independente.

## Critérios para avaliar a qualidade

Uma avaliação de qualidade deve perguntar se o relatório responde à necessidade do destinatário. O leitor consegue identificar a decisão pedida, seu prazo e quem deve tomá-la? Consegue distinguir o que foi observado do que está sendo inferido? Cada conclusão importante aponta para evidência recuperável? A confiança tem justificativa? Limitações e alternativas capazes de alterar a ação aparecem? Se as respostas forem negativas, o documento pode estar bem escrito e ainda assim falhar operacionalmente.

A rastreabilidade é um critério central. Outro analista deve conseguir localizar a fonte, entender o intervalo e reconstruir por que uma evidência sustenta determinada avaliação. Isso não exige publicar dados sensíveis no corpo; exige referências estáveis e acesso apropriado. A consistência também importa: categorias e termos devem ter o mesmo significado entre atualizações, e mudanças de avaliação devem ser explicadas em vez de apagadas.

## Exercício de mesa ou laboratório autorizado

Um exercício de mesa pode treinar o fluxo sem tocar em sistemas de terceiros. A organização prepara um cenário hipotético, dados sintéticos e papéis dos participantes. O facilitador apresenta uma primeira observação: um alerta de autenticação atípica em uma conta de serviço. O grupo recebe o contexto de que há uma janela de manutenção no mesmo período, mas ainda não sabe se ela cobre o ativo. A tarefa inicial é escrever a pergunta prioritária, nomear a decisão pendente e separar observação, hipótese e informação ausente.

Na etapa seguinte, o facilitador libera registros sintéticos de autenticação e um inventário incompleto. Os participantes devem indicar o que a evidência sustenta, quais limitações permanecem e que fonte autorizada consultariam em seguida. Depois, um novo dado mostra que uma sessão continua ativa, mas o responsável pelo serviço informa que uma interrupção afetaria um processo importante. O grupo precisa comparar opções de contenção, preservar evidências e registrar quem tem autoridade para decidir. O facilitador não precisa revelar uma resposta única; avalia se o raciocínio e os limites ficaram visíveis.

## Roteiro de implementação

Comece identificando os consumidores do relatório e as decisões que eles precisam tomar durante os tipos de incidente mais prováveis para a organização. Converse com resposta, operações, detecção, liderança e funções de apoio relevantes. O resultado deve ser um conjunto curto de perguntas recorrentes e de informações necessárias para respondê-las. Essa etapa impede que um modelo seja desenhado apenas para quem escreve e depois se torne pouco útil para quem executa.

Em seguida, estabeleça um formato mínimo viável: contexto e horário, pergunta prioritária, resumo de situação, evidências, avaliação e confiança, lacunas, recomendação, responsável e revisão. Defina como referenciar fontes internas, como marcar períodos e fusos, que classificação se aplica e onde a versão controlada ficará. O formato precisa ser curto o bastante para uso sob pressão e expansível quando a análise exigir detalhes. Campos obrigatórios devem reforçar o raciocínio, não virar preenchimento automático sem conteúdo.

Combine vocabulário e critérios. Defina o que a organização chama de observação confirmada, hipótese, confiança e impacto; estabeleça como indicar fonte indisponível e como expressar ausência de evidência. Se usar uma escala de confiança, descreva-a e treine exemplos. Evite termos que diferentes equipes interpretam de modos opostos, como “contido” sem dizer quais ativos ou caminhos foram cobertos. A consistência é mais importante que a sofisticação da escala.

## Quando revisar a análise

A revisão deve ocorrer quando chega evidência que pode alterar a avaliação, quando uma hipótese é confirmada ou enfraquecida, quando muda o escopo, quando uma contenção produz efeito inesperado, quando uma fonte crítica se torna indisponível ou quando uma decisão importante vence. Também pode haver uma revisão periódica acordada para incidentes em andamento. A cadência deve refletir o ritmo do risco e a capacidade da equipe, e não um prazo universal inventado.

A atualização precisa dizer se a conclusão mudou, por que mudou e qual ação decorre disso. Se nada mudou, ainda pode registrar que as fontes e lacunas foram reavaliadas, desde que haja valor para o destinatário. Evite republicar o texto integral sem destacar alterações, pois isso força leitores a fazer comparação manual. Se uma informação foi corrigida, preserve a trilha apropriada e evite que versões antigas continuem circulando como atuais.

## Perguntas frequentes

### Qual é a diferença entre relatório de inteligência e relatório de incidente?

O relatório de incidente pode registrar cronologia, ações executadas, impacto, responsáveis e encerramento. O relatório de inteligência enfatiza a avaliação de evidências, hipóteses, contexto, confiança e implicações para decisões. Eles podem compartilhar conteúdo e até coexistir no mesmo sistema, mas têm perguntas dominantes diferentes. A organização deve evitar duplicar registros sem necessidade e manter referências entre eles quando a separação ajudar os públicos.

### Um relatório precisa conter indicadores técnicos?

### Como informar que a confiança é baixa?

### O que fazer quando fontes discordam?

### Quem deve aprovar a recomendação?

### Como evitar excesso de detalhes para a liderança?

### Com que frequência o relatório deve ser atualizado?

### É possível afirmar que não houve impacto?

### Quando uma lista de indicadores deve ser compartilhada?

### Um relatório pode orientar uma comunicação externa?

## Relação com o capítulo do manuscrito

O capítulo 7 do manuscrito original aborda estrutura, papéis e coordenação do Black Team; essa conexão está no modo como uma avaliação circula entre quem produz inteligência, quem coordena a resposta e quem decide ou executa medidas. Um relatório bem estruturado oferece a essas funções uma base comum: perguntas prioritárias, evidências rastreáveis, limites explícitos, responsáveis e momento de revisão. A leitura pode complementar a reflexão sobre coordenação, mas uma obra não substitui documentação técnica atualizada, treinamento prático nem julgamento da equipe. O livro de Hiago Kin Levi, publicado pela Editora Brasport, pode ser consultado nesse recorte de organização e papéis, sem ser tratado como manual de procedimento para todo ambiente.
