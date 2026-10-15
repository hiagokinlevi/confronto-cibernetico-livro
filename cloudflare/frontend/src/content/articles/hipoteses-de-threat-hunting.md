# Hipóteses de threat hunting

## A pergunta que dá direção à caça

Uma atividade de threat hunting começa com uma pergunta delimitada: que comportamento, em qual ativo ou grupo de ativos, pode indicar uma ação adversária e que evidência disponível permitiria avaliá-lo? A pergunta não precisa antecipar exatamente o que será encontrado. Precisa ser específica o suficiente para orientar uma busca, sem confundir uma possibilidade plausível com um fato confirmado.

Considere, por exemplo, a pergunta: há sinais de que contas de serviço estejam sendo usadas em horários ou origens incompatíveis com a rotina dos sistemas que deveriam utilizá-las? A formulação aponta para identidades, sistemas, período e atributos comparáveis. Ela também deixa espaço para explicações legítimas, como uma manutenção extraordinária. Uma pergunta como “há invasores na rede?” é ampla demais para definir fontes, consulta e encerramento. Uma pergunta como “o invasor usou a conta X ontem?” presume tanto a presença de um invasor quanto um detalhe ainda não sustentado.

## O que significa formular uma hipótese

Uma hipótese de hunting é uma afirmação provisória sobre um comportamento que pode estar ocorrendo ou ter ocorrido, associada a observações que poderiam apoiá-la ou enfraquecê-la. Ela se distingue de uma detecção já confirmada porque ainda não há uma decisão baseada em evidências suficientes. Também se distingue de uma pergunta puramente exploratória: uma pergunta abre investigação; a hipótese descreve uma expectativa que pode ser confrontada com dados.

Uma forma prática de escrevê-la é: “Se determinado comportamento estiver ocorrendo neste contexto, esperamos observar tais eventos em tais fontes, durante este período; a hipótese ganhará suporte se a relação entre esses eventos atender a estes critérios, e perderá força se os dados completos mostrarem a alternativa esperada.” A frase deve nomear o comportamento sem afirmar que ele já foi atribuído a uma pessoa, grupo ou campanha. A atribuição exige evidência própria e costuma estar além do que uma única consulta consegue demonstrar.

A hipótese precisa ser observável. “Um agente malicioso está se preparando” descreve uma interpretação difícil de testar. “Um processo de gerenciamento inicia uma sequência de alterações em pontos de persistência fora da janela aprovada, em estações que não receberam a mudança planejada” oferece elementos verificáveis, desde que existam registros adequados. Mesmo assim, a sequência não prova intenção maliciosa: pode refletir uma implantação legítima, ferramenta administrativa ou erro operacional. A interpretação exige contexto e validação.

## Contexto: por que caçar além dos alertas

Controles de segurança produzem alertas para eventos que correspondem a regras, limiares ou modelos configurados. O threat hunting acrescenta uma investigação dirigida quando a equipe tem uma pergunta relevante que não está respondida por um alerta pronto, quando quer verificar uma hipótese sobre exposição ou quando um sinal isolado merece contexto. Isso não torna a caça superior à detecção automatizada. São atividades complementares: regras podem observar continuamente padrões conhecidos, enquanto uma investigação humana pode relacionar fontes e testar uma explicação contextual.

O conhecimento do ambiente dá significado aos dados. Um acesso remoto fora do horário pode ser esperado para uma equipe distribuída e incomum para outra. Uma conta privilegiada que inicia uma tarefa automatizada pode fazer parte da operação normal, desde que haja proprietário, finalidade e aprovação. Antes de interpretar desvio, convém entender a linha de base disponível, suas mudanças conhecidas e as exceções documentadas. A linha de base não é uma verdade imutável: ambientes mudam, e uma rotina anteriormente rara pode se tornar normal após uma migração.

## Da suspeita à previsão observável

O primeiro passo prático é registrar a razão da pergunta. Indique o sinal ou risco que motivou a investigação, a data em que foi recebido, a fonte dessa motivação e o grau de confiança. Separe informação confirmada de interpretação: “o sensor registrou uma conexão de um processo incomum” é diferente de “um adversário tentou exfiltrar dados”. A primeira frase pode ser verificada no registro; a segunda é uma hipótese que requer evidências adicionais.

Em seguida, traduza o comportamento de interesse em previsões concretas. Se a preocupação é abuso de credenciais, podem ser relevantes eventos de autenticação, mudanças de privilégio, acesso a recursos e contexto do dispositivo. Se a preocupação é execução fora de rotina, podem importar eventos de criação de processo, assinatura, caminho, usuário e sequência temporal. A escolha depende do ambiente e não deve ser copiada mecanicamente de um catálogo: um evento que existe em um sistema pode não existir ou não ter o mesmo significado em outro.

## Fontes de evidência e limites de visibilidade

As fontes devem ser escolhidas pela relação com a hipótese, não pela facilidade de consulta. Para autenticação e uso de identidade, registros de provedor de identidade, diretório, VPN, aplicações e sistemas podem oferecer horários, resultado, origem, método, conta e contexto do dispositivo. A cobertura varia: alguns registros identificam uma conta, mas não o usuário humano; outros não preservam endereço de origem ou método de autenticação com detalhe suficiente. A ausência de um campo não pode ser preenchida por suposição.

Em rede, registros de DNS, proxy, firewall, fluxo, balanceador e serviços de nuvem podem contextualizar destinos e horários. Eles podem não revelar conteúdo, identidade efetiva do processo ou atividade dentro de uma sessão criptografada. Um domínio consultado não prova que houve comunicação bem-sucedida; uma conexão registrada não prova que dados foram transferidos; uma ausência no proxy não prova que o ativo não se comunicou por outro caminho. A afirmação precisa refletir o tipo de observação realmente disponível.

A integridade e a qualidade dos dados também fazem parte da avaliação. Verifique sincronização de horário, fusos, atraso de ingestão, normalização de campos, duplicação, perdas, filtros, retenção e alterações recentes no pipeline. Uma diferença de alguns minutos entre relógios pode inverter a ordem aparente de uma sequência. Um campo de usuário normalizado de modo diferente entre fontes pode impedir uma junção. Antes de concluir que não há eventos, confirme que a consulta alcançou o índice, período e conjunto de ativos pretendidos.

## Desenho da consulta e do período

A consulta é uma implementação da hipótese. Ela deve corresponder às fontes selecionadas e à forma como os eventos são armazenados. Documente a lógica em linguagem legível: filtros, campos considerados, critérios de junção, exclusões e agregações. Quando consultas técnicas forem mantidas em ferramentas internas, registre a versão, o autor e o momento da execução, respeitando controles de acesso. O artigo não depende de uma sintaxe universal: plataformas diferem, e uma consulta válida em um produto pode produzir resultado distinto em outro.

Escolha um período que faça sentido para o comportamento e para a retenção. Uma janela muito curta pode perder uma sequência lenta; uma janela extensa pode incluir mudanças de contexto, aumentar o volume e dificultar a análise. Quando houver uma data de referência, como uma mudança ou um alerta, pode ser útil examinar intervalos antes e depois, explicitando o motivo. O período não deve ser ampliado indefinidamente só porque os primeiros resultados são inconclusivos; ampliação é uma decisão que precisa de hipótese atualizada e dados disponíveis.

## Papéis e coordenação da equipe

O especialista em telemetria ou plataforma confirma como os dados são produzidos, quais eventos existem, que filtros estão ativos e que lacunas podem afetar a busca. Sua contribuição evita interpretar campos sem conhecer a semântica técnica. Proprietários de sistemas e aplicações esclarecem rotinas e mudanças autorizadas; o time de identidade pode explicar ciclos de credenciais; operações de nuvem ou rede podem validar caminhos legítimos. Essas pessoas oferecem contexto, mas a análise deve registrar a fonte e não converter uma explicação verbal em prova documental sem sustentação.

O líder de incidente ou responsável por resposta define como escalar achados com potencial impacto, preserva a coordenação com investigações em curso e evita ações conflitantes. Se a hipótese envolve um sistema crítico, a equipe deve conhecer os limites de coleta e as aprovações pertinentes antes de executar atividades que possam afetar disponibilidade. Uma atividade de hunting defensivo costuma ser de leitura e análise, mas consultas pesadas, aquisição de evidências ou mudanças de configuração ainda podem ter efeitos operacionais.

A coordenação com o Black Team é especialmente relevante quando o capítulo relacionado trata da estrutura, dos papéis e da articulação desse time. Uma caçada pode receber perguntas de inteligência, verificar uma hipótese com operações e encaminhar evidências para resposta, mas as responsabilidades e limites de cada equipe precisam estar definidos no modelo da organização. “Black Team” não deve ser tratado como nome universal para qualquer equipe de segurança: o significado, mandato e composição dependem do contexto institucional. O valor está em coordenar funções, autorizações, canais de escalonamento e critérios de decisão sem confundir exercício, simulação e ocorrência real.

## Exemplo defensivo: uso atípico de identidade

Cenário hipotético: uma organização observa que algumas contas de serviço foram usadas fora das janelas de manutenção documentadas. A hipótese inicial afirma que pode haver uso de identidade fora do processo operacional previsto. Não afirma roubo de credenciais. A equipe delimita as contas e sistemas envolvidos, seleciona registros de identidade, aplicação e mudança, e cobre um período que inclui as janelas relevantes e os dias úteis próximos.

A previsão observável é que os acessos considerados incomuns possam coincidir com uma origem, dispositivo, método ou recurso diferente do padrão conhecido para a conta. A busca também considera as janelas aprovadas, alterações recentes e donos do serviço. Um registro de autenticação bem-sucedida em horário atípico é uma observação; a relação entre conta e pessoa, a legitimidade da origem e o propósito do acesso continuam sendo questões de validação. Se o sistema não registra dispositivo ou método, essa parte da hipótese permanece sem teste.

Suponha que apareça um acesso fora de janela, mas o registro de mudança descreva uma manutenção autorizada. A equipe compara identidade, horário, ativo e serviço registrados com o escopo aprovado, e pede confirmação ao proprietário por um canal rastreável. Se tudo se alinha, a ocorrência pode ser classificada como explicada, sem inferir que as contas nunca foram usadas indevidamente em outros períodos. Se a janela não corresponde, a origem permanece desconhecida e há outros eventos relacionados, o caso merece validação e possível escalonamento. A decisão considera a convergência de evidências, não um único atributo.

## Cenários contrastantes e interpretação

Um resultado positivo é aquele em que observações relevantes atendem aos critérios definidos e resistem às explicações alternativas examinadas. “Positivo” não significa necessariamente “incidente confirmado”: pode significar que a hipótese ganhou suporte suficiente para escalar. A linguagem do relatório deve explicitar o nível de conclusão. Por exemplo, “foram observados eventos compatíveis com uso fora da rotina, ainda sem validação de autorização” é mais fiel do que “a conta foi comprometida”.

Um resultado negativo ocorre quando a consulta não encontra os eventos esperados nos dados examinados. Isso reduz o suporte à hipótese dentro daquele escopo, mas não demonstra ausência universal do comportamento. A interpretação depende da cobertura, qualidade e período. Se as fontes estavam completas e o comportamento deveria gerar os eventos procurados, o resultado negativo é mais informativo. Se a auditoria estava desativada, os dados expiraram ou o ativo não estava coberto, a busca é inconclusiva.

Um resultado ambíguo combina observações que admitem explicações concorrentes ou evidência insuficiente para escolher entre elas. A ambiguidade é um resultado legítimo, não uma falha a esconder. A próxima pergunta pode ser qual fonte discriminaria melhor as alternativas, quem tem autoridade para validar a mudança, ou se vale ampliar o escopo. Repetir a mesma consulta sem adicionar informação raramente resolve ambiguidade.

Há ainda o resultado de cobertura: a equipe descobre que determinada fonte não coleta, a retenção é curta, os campos não permitem relacionar eventos, ou os ativos não estão inventariados. Cobertura insuficiente não é confirmação nem refutação. Deve ser apresentada como uma limitação concreta e priorizada conforme o risco. Identificar onde a organização está cega é parte útil da inteligência defensiva, desde que a lacuna seja descrita sem exagerar seu impacto.

## Erros comuns que enfraquecem uma caça

Uma hipótese formulada depois de examinar muitos resultados pode se ajustar aos dados por acaso. Esse viés de retrospectiva é especialmente provável quando a equipe muda filtros repetidamente sem guardar o raciocínio anterior. A mitigação é registrar a previsão inicial, os critérios e os refinamentos. Uma hipótese exploratória posterior ainda pode ser valiosa, mas deve ser identificada como gerada a partir dos achados e validada em outra amostra ou período quando isso for apropriado e viável.

Também é comum misturar escopos: iniciar com um grupo de servidores, incluir endpoints depois, e ao final escrever uma conclusão sobre toda a empresa. A conclusão precisa ser limitada ao universo efetivamente analisado. Aumentar cobertura requer atualizar a documentação, conferir o novo conjunto de dados e considerar diferenças de retenção e configuração. Pequenos deslizes de escopo podem mudar substancialmente o significado de um resultado negativo.

A consulta pode conter erros de junção, campos com nomes iguais mas semânticas diferentes, exclusões excessivas ou filtros que removem o próprio comportamento de interesse. A revisão por outra pessoa e a validação com eventos conhecidos ajudam a encontrar esses problemas. Se for seguro e autorizado, pode-se verificar se um evento de teste já registrado aparece na consulta. Isso avalia o caminho analítico; não autoriza gerar atividade intrusiva em sistemas reais.

## Como avaliar a qualidade e o resultado

A avaliação começa pela rastreabilidade: outra pessoa consegue entender a pergunta, localizar as fontes, reproduzir a lógica ou reconhecer a versão utilizada e saber qual período foi coberto? A rastreabilidade não exige que toda organização adote a mesma ferramenta. Exige documentação suficiente para distinguir resultado original, refinamento e interpretação.

Avalie a qualidade da evidência: os registros são contemporâneos aos eventos, possuem identificadores úteis, mantêm horários coerentes e têm origem conhecida? Há falhas de ingestão ou alterações de política? As fontes independentes concordam em aspectos relevantes? Concordância não significa necessariamente independência, pois dois painéis podem depender do mesmo evento original. A proveniência ajuda a evitar contar uma mesma observação duas vezes como confirmação separada.

Avalie a calibração da conclusão. O texto distingue fatos, hipóteses, explicações testadas e questões em aberto? Ele declara o que faria a equipe mudar de avaliação? O grau de confiança decorre de critérios compreensíveis, ainda que qualitativos, e não da autoridade de quem escreveu? Não é necessário inventar uma pontuação numérica para parecer rigoroso. Uma escala interna pode ser útil se tiver definições acordadas, mas não deve sugerir precisão que os dados não oferecem.

Avalie também o valor operacional. A investigação levou a uma decisão, esclareceu um processo, melhorou telemetria, identificou uma necessidade de autorização ou revelou uma questão que deve voltar ao backlog? Uma caça pode ser bem conduzida e não achar evidência de ameaça. Seu valor não depende de produzir um incidente. A equipe deve evitar recompensar apenas achados positivos, pois isso pode incentivar interpretações exageradas e buscas enviesadas.

## Exercício de mesa ou laboratório autorizado

Cenário hipotético para uma equipe: durante uma revisão de rotina, analistas notam que uma conta de automação aparece em registros de autenticação de dois servidores fora da janela esperada. O exercício não presume comprometimento nem exige produzir tráfego ofensivo. A organização usa apenas dados históricos autorizados, registros sintéticos ou um laboratório isolado previamente aprovado. O propósito é praticar formulação, análise e coordenação.

Antes de examinar resultados, a equipe registra a hipótese, o que espera observar, quais fontes podem confirmá-la ou enfraquecê-la, o intervalo de busca, os ativos abrangidos e as limitações conhecidas. Os participantes definem quem conduz análise, quem valida a telemetria, quem fornece contexto operacional e quem decide escalonamento. O facilitador prepara três conjuntos de fatos hipotéticos: uma mudança aprovada que coincide com parte dos eventos; um acesso sem explicação nos registros; e uma falha de coleta em um dos servidores.

A equipe então recebe os dados em etapas, sem saber de antemão qual interpretação é esperada. Primeiro, deve separar observações diretas de inferências. Depois, precisa identificar que verificação distinguiria a mudança aprovada de atividade fora de escopo. A validação pode envolver ticket, proprietário do serviço e registros de execução; nenhuma explicação verbal deve ser tratada automaticamente como evidência completa. Quando aparece a falha de coleta, a equipe deve dizer que parte da hipótese não pôde ser testada.

O exercício termina com uma nota de encerramento curta, mas completa: pergunta original, fontes, período, observações, resultado, confiança qualitativa, limitações e próximo passo. A discussão posterior examina se alguém chamou um alerta de prova, se a equipe ampliou conclusões além dos ativos cobertos, se reconheceu a lacuna e se acionaria resposta a incidente no momento adequado. Não se avalia o grupo pela descoberta de um adversário fictício, mas pela clareza e disciplina da análise.

## Roteiro de implementação

Comece escolhendo um caso de uso estreito e importante para a organização. A escolha pode vir de um risco conhecido, de uma lacuna em detecção ou de uma mudança relevante. Prefira uma pergunta que possa ser ligada a ativos identificáveis e fontes acessíveis. Uma agenda de caça não precisa prever todas as ameaças; precisa manter um conjunto priorizado de perguntas e uma forma de revisar prioridades.

Em seguida, confirme autoridade, escopo e impacto. Defina quem pode consultar os dados, como serão protegidos, se há restrições de privacidade ou retenção e quem deve ser avisado caso apareçam indícios de incidente. Estabeleça com operações que atividades de consulta podem ser executadas sem impacto e quais exigem janela ou coordenação. Essas verificações evitam que a busca defensiva altere sistemas ou exponha informações sem necessidade.

Implemente a busca em etapas pequenas. Primeiro valide período, ativos e campos com uma consulta limitada; em seguida, acrescente relações ou contexto conforme necessário. Mantenha registro das versões e não descarte resultados por conveniência sem justificar filtros. Estime custo operacional e evite consultas desnecessariamente amplas em sistemas compartilhados. Uma análise cuidadosa de um recorte justificável é preferível a uma extração volumosa sem pergunta clara.

Analise os resultados e peça validação direcionada. Cada solicitação a proprietários deve ser específica: qual evento, qual horário, qual ativo, que autorização ou processo poderia explicá-lo? Evite enviar conclusões acusatórias antes de compreender o contexto. Preserve evidências conforme políticas internas e restrinja o acesso a dados sensíveis. Se houver critérios de incidente, acione o canal responsável com a rapidez exigida pelo risco.

Feche a atividade com uma conclusão proporcional e ações concretas. Ações podem incluir uma investigação formal, ajuste de detecção, correção de cobertura, revisão de acesso, documentação de rotina legítima ou nenhuma mudança além do registro. Toda ação deve ter responsável e mecanismo de acompanhamento. Se a hipótese gerar uma regra de detecção, teste-a em dados pertinentes e defina manutenção para lidar com mudanças normais do ambiente.

## Perguntas frequentes

### Uma hipótese precisa estar correta para justificar a busca?

Não. Ela precisa ser plausível, relevante para o risco e formulada de modo que possa ser avaliada. Uma hipótese serve para organizar a investigação, não para anunciar uma descoberta antecipada. Registrar resultados que a enfraquecem é parte da disciplina analítica.

### Uma busca sem achados foi inútil?

Não necessariamente. Se as fontes eram adequadas e o escopo foi coberto, o resultado pode reduzir a preocupação naquele recorte. Se faltou telemetria, o resultado revela uma limitação. A utilidade depende de como o resultado foi interpretado e se ele melhorou uma decisão ou entendimento do ambiente.

### Quando ampliar o período ou o conjunto de ativos?

Amplie quando houver uma razão analítica clara, como uma sequência que pode ultrapassar a janela original ou uma relação encontrada em outro ativo relevante. Registre a justificativa, confirme cobertura e retenção, e reavalie o custo. Ampliar para sempre até que apareça algo torna a pergunta difícil de refutar e aumenta o risco de coincidências sem contexto.

### Como lidar com dados ausentes?

Diga quais dados faltam, em quais ativos ou intervalos, e qual parte da hipótese isso impede de avaliar. Procure uma fonte alternativa somente se ela puder responder à mesma questão com qualidade conhecida. Não substitua falta de observação por presunção de atividade nem por presunção de ausência.

### Como atribuir confiança sem uma métrica universal?

Use critérios explícitos e linguagem calibrada: que observações são diretas, quais são correlacionadas, quais alternativas foram examinadas e que lacunas permanecem. Se a organização adotar uma escala qualitativa ou numérica, documente definições e limites. Evite números que escondam incerteza ou permitam comparar investigações incomparáveis.

### Quando a caça deve virar resposta a incidente?

Quando os critérios definidos pela organização forem atingidos, especialmente diante de sinais consistentes de atividade nociva em curso ou impacto relevante. O escalonamento pode acontecer antes de a hipótese estar completamente provada, para preservar opções de resposta. Registre que a evidência é preliminar e deixe a confirmação para o processo apropriado.

## Relação com o capítulo sobre o Black Team

O capítulo 7 da versão original de Confronto Cibernético, de Hiago Kin Levi aborda estrutura, papéis e coordenação do Black Team. A relação com hipóteses de hunting está na organização do trabalho: perguntas relevantes precisam de responsáveis, fontes acessíveis, limites de atuação e um caminho claro entre análise, validação e escalonamento. Uma equipe bem coordenada pode preservar a distinção entre inteligência, observação técnica e decisão operacional, além de registrar de onde veio cada conclusão.

O livro de Hiago Kin Levi, publicado pela Editora Brasport, pode servir como referência para refletir sobre esse arranjo de papéis e sobre a coordenação discutida no capítulo. A leitura não substitui documentação técnica atualizada dos produtos, treinamento prático autorizado nem julgamento da equipe diante do ambiente real. A hipótese continua sendo uma ferramenta para perguntar com precisão, observar com cuidado e comunicar limites com honestidade.
