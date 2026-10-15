# MITRE ATT&CK

## Definição e escopo

MITRE ATT&CK é uma base de conhecimento que organiza táticas e técnicas observadas em operações adversárias. O nome ATT&CK é usado para designar essa estrutura de referência, que ajuda equipes de segurança a descrever comportamentos relacionados a intrusões com vocabulário comum. Em vez de resumir uma operação por uma ferramenta, um alerta ou uma suposta identidade, a estrutura permite registrar o que um adversário parece ter feito em diferentes etapas e contextos.

Uma tática expressa o objetivo que orienta uma ação em determinado contexto: por exemplo, obter acesso inicial, manter presença, descobrir recursos ou exfiltrar dados. Uma técnica descreve um modo de alcançar esse objetivo. Há técnicas com sub técnicas, que especificam variações ou meios mais delimitados. Esses elementos organizam conhecimento; não são, por si, alertas, indicadores, regras de detecção, instruções de resposta nem uma sequência obrigatória de eventos.

O modelo é comportamental. Ele concentra atenção em ações e efeitos que podem ser relevantes mesmo quando os artefatos mudam. Um mesmo objetivo pode ser alcançado por caminhos diferentes; uma ferramenta pode apoiar várias técnicas; e uma técnica pode aparecer em atividades de agentes distintos. A estrutura não determina quem agiu, por que agiu ou se uma atividade observada foi maliciosa. Essas conclusões dependem de evidências e contexto adicionais.

## Como a estrutura é organizada

O ATT&CK apresenta comportamentos por domínios e ambientes, cada qual com seu escopo. O domínio corporativo cobre contextos de tecnologia empresarial, enquanto outros recortes tratam de plataformas móveis ou sistemas de controle industrial. Uma técnica disponível em um domínio não deve ser presumida aplicável a outro: os ativos, as interfaces, os efeitos e as evidências podem diferir substancialmente.

As táticas funcionam como categorias de objetivos, não como fases rígidas de uma cadeia. Uma operação pode não apresentar evidência para várias táticas, pode repetir comportamentos ou alterar a ordem esperada. As técnicas associadas a uma tática representam formas conhecidas de perseguir aquele objetivo. Algumas técnicas cabem em mais de uma tática, refletindo que o mesmo comportamento pode cumprir propósitos distintos conforme a situação.

## Utilidade defensiva

O ATT&CK é útil para transformar observações dispersas em hipóteses verificáveis. Ao analisar um alerta ou incidente, a equipe pode perguntar qual objetivo parece estar em jogo, que técnica explica os artefatos vistos e quais alternativas plausíveis também explicariam os mesmos dados. A classificação dá uma linguagem compartilhada a analistas, responsáveis por detecção, resposta, inteligência e gestão de risco.

Em operações de segurança, essa linguagem pode apoiar:

- a descrição consistente de comportamentos em registros de incidente;
- a formulação de hipóteses para busca e investigação;
- a revisão de regras, telemetria e controles preventivos;
- a identificação de lacunas de observabilidade ou resposta;
- a comunicação de cenários de risco a equipes técnicas e lideranças.

## Uso durante investigação e resposta

Na investigação, o mapeamento deve acompanhar a análise, e não substituí-la. Primeiro se preservam e examinam os dados disponíveis: eventos de autenticação, registros de processos, alterações de configuração, tráfego, arquivos, alertas de ferramentas defensivas e relatos de usuários, entre outros. A equipe delimita o período e os sistemas afetados, confere integridade e procedência dos registros e estabelece uma cronologia. Só então uma técnica pode ser associada como hipótese, com justificativa explícita.

Durante a resposta, a classificação pode facilitar a comunicação do escopo comportamental e apoiar decisões sobre contenção, coleta adicional ou monitoramento. A decisão operacional, entretanto, depende de criticidade do ativo, risco de interrupção, extensão do acesso, sensibilidade dos dados e possibilidade de persistência. Uma técnica identificada não prescreve uma ação automática. Interromper um serviço, desabilitar uma conta ou isolar um equipamento requer avaliação do efeito sobre a operação e coordenação com as áreas responsáveis.

## Evidências e reconhecimento

Não existe um único artefato que prove uma técnica em todos os ambientes. A evidência pode vir de fontes diferentes, e cada fonte revela apenas parte do comportamento. Registros de sistema podem mostrar que um processo foi iniciado; telemetria de identidade pode indicar uma sequência de autenticações; dados de rede podem mostrar comunicação entre ativos; e uma imagem forense pode preservar arquivos ou configurações. A correlação temporal e contextual entre fontes costuma ser mais informativa que um indicador isolado.

## Exemplo hipotético de aplicação

Considere uma organização que observa autenticações incomuns em uma conta válida e, em seguida, consultas a recursos internos a partir de uma estação de trabalho. O alerta isolado não permite concluir que houve invasão: a conta pode estar sendo usada por uma tarefa programada ou por um administrador. A equipe compara horários, origem das conexões, histórico da conta, processo associado e mudanças recentes, e entrevista os responsáveis pelo serviço.

Se os dados sustentarem comportamento compatível com uso de credenciais válidas e descoberta de recursos, o relatório pode registrar essas técnicas como hipóteses apoiadas por eventos específicos. A equipe verifica se houve acesso a dados, criação de sessões persistentes ou movimentação para outros ativos, sem presumir que essas ações ocorreram só porque aparecem como possibilidades relacionadas na base. Se a conta pertencer a uma automação autorizada, o contexto pode refutar a hipótese maliciosa, ainda que os eventos se pareçam com o comportamento descrito.

O exemplo não representa um procedimento de ataque nem um padrão universal. Ele mostra como a classificação pode organizar perguntas, indicar fontes a consultar e manter separadas observações e conclusões. Se a evidência for insuficiente, a conclusão apropriada pode ser “atividade não explicada” ou “hipótese em aberto”, acompanhada das lacunas que impedem uma classificação mais segura.

## Distinções importantes

ATT&CK não é uma cadeia de ataque linear. Uma cadeia costuma organizar etapas em uma narrativa sequencial; o ATT&CK cataloga objetivos e comportamentos com relações que não obrigam uma ordem fixa. As duas perspectivas podem ser combinadas para fins diferentes, mas uma técnica não deve ser tratada como prova de que as etapas anteriores ou posteriores aconteceram.

Também não é uma taxonomia de indicadores de comprometimento. Endereços, nomes de arquivo, hashes e domínios são artefatos observáveis, frequentemente temporários. Técnicas descrevem comportamentos mais gerais. Um indicador pode ajudar a detectar uma instância, mas sua presença não determina por si só a técnica ou o agente; sua ausência tampouco exclui o comportamento.

Uma técnica não é um grupo adversário. Grupos distintos podem usar a mesma técnica, e um grupo pode mudar de métodos. A associação de procedimentos a grupos na base é informação contextual sujeita a qualidade e evolução das fontes. Portanto, mapear uma técnica não identifica automaticamente quem a realizou. A atribuição exige evidências adicionais, análise de confiança e consideração de explicações concorrentes.

O ATT&CK não é um produto de segurança nem um mecanismo automático de detecção. Uma regra pode ser mapeada a uma técnica, mas essa relação descreve o objetivo da regra; não mede sua precisão, cobertura, taxa de falsos positivos ou capacidade de resposta. Da mesma forma, um controle preventivo pode mitigar parte de uma técnica sem eliminá-la. É necessário validar o controle no ambiente real.

Por fim, o ATT&CK não é uma lista de verificação que toda organização deve completar. A relevância depende do contexto: sistemas usados, dados protegidos, modelo de ameaças, requisitos operacionais e capacidades de coleta. Cobertura ampla pode ser uma meta de pesquisa ou teste, mas não é automaticamente a melhor prioridade para uma equipe com recursos limitados.

## Limitações e erros de interpretação

A base é um modelo útil do conhecimento documentado, não um retrato completo de toda atividade adversária. Comportamentos não publicados, pouco observados ou específicos de um ambiente podem não aparecer. A ausência de uma técnica no inventário de um incidente significa apenas que ela não foi identificada com as evidências e critérios usados; não prova que não ocorreu.

O conteúdo evolui, e nomenclatura, organização e detalhes podem mudar entre versões. Relatórios internos devem registrar a versão ou data de referência usada quando a precisão histórica for importante. Sem isso, uma comparação futura pode misturar mudanças no incidente com mudanças na própria estrutura. Para decisões correntes, a equipe deve consultar a versão aplicável e avaliar se os elementos citados continuam pertinentes.

Erros frequentes incluem selecionar uma técnica apenas porque o nome parece combinar com um alerta, confundir capacidade de uma ferramenta com uso comprovado, inferir intenção a partir de um evento isolado e tratar uma associação publicada como atribuição certa. Outro erro é mapear cada linha de uma regra para uma técnica sem demonstrar que a regra observa o comportamento indicado. O mapeamento precisa ser explicado e revisável.

## Aplicação responsável em detecção e avaliação

Ao criar ou revisar uma detecção, a equipe deve começar pelo comportamento de interesse e pelo risco local. Em seguida, identifica os eventos necessários, confirma se são coletados e constrói uma lógica que distingue atividade relevante de uso legítimo. O mapeamento ATT&CK pode documentar a intenção da regra e facilitar sua descoberta, mas a regra deve ser testada com dados representativos e revisada quando sistemas ou rotinas mudarem.

Para avaliar cobertura, convém especificar o que está sendo medido. “Temos telemetria para observar”, “temos uma detecção que gera alerta”, “o alerta foi validado” e “há um procedimento de resposta” descrevem capacidades diferentes. A equipe pode registrá-las separadamente, incluindo escopo de ativos, dependências, limitações conhecidas e data da validação. Assim, uma lacuna de coleta não fica escondida por uma regra teoricamente associada à técnica.

O nível de detalhe importa. ## Perguntas frequentes

### Uma técnica no ATT&CK prova que houve ataque?

Não. A técnica é uma categoria para descrever um comportamento. Eventos semelhantes podem decorrer de atividade administrativa, automação, erro ou teste autorizado. A conclusão depende de contexto, evidências correlacionadas e análise de hipóteses alternativas.

### Se a equipe não encontrou uma técnica, pode descartá-la?

Não necessariamente. Pode não haver coleta adequada, retenção suficiente ou oportunidade de observar o comportamento. É mais preciso registrar que a técnica não foi identificada nas fontes examinadas e indicar limitações relevantes, em vez de afirmar ausência sem qualificação.

### Mapear uma detecção significa que a técnica está coberta?

Não por si só. É preciso saber o que a detecção observa, em quais sistemas, com qual qualidade e se foi validada. Também importa se existe processo para triagem e resposta. O rótulo facilita organização; não certifica desempenho.

### O uso de uma técnica permite atribuir um incidente a um grupo?

Não. Técnicas são compartilhadas e podem ser reproduzidas por ferramentas comuns. A atribuição exige outros elementos, como contexto operacional, infraestrutura, padrões corroborados e avaliação crítica das fontes, além de uma declaração explícita de confiança.

### Como registrar uma classificação incerta?

Descreva a observação, indique a técnica ou alternativas consideradas, explique o que sustenta cada hipótese e registre a confiança ou o estado de validação segundo a convenção da equipe. Evite converter uma suposição em fato ao simplificar o relatório para outro público.

## Relação com o capítulo

No capítulo 1 da versão original, o termo pode servir de referência para apresentar uma linguagem estruturada de análise de comportamentos adversários. Seu uso mais rigoroso começa por distinguir objetivo, comportamento observado e interpretação, e termina por relacionar a classificação à evidência e às decisões defensivas. A estrutura ajuda a fazer perguntas melhores; a qualidade das respostas continua dependendo da investigação.
