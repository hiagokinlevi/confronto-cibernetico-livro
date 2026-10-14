# TTP

## Definição

TTP é a sigla usada para designar táticas, técnicas e procedimentos: um conjunto de objetivos, métodos e modos de execução que descreve o comportamento de um adversário.

A definição tem três níveis relacionados. As táticas expressam o propósito ou a etapa perseguida; as técnicas descrevem abordagens para cumprir esse propósito; e os procedimentos correspondem às formas concretas pelas quais uma técnica foi realizada em uma situação particular. Esses níveis não são compartimentos estanques.

O termo não descreve necessariamente uma pessoa, grupo ou ferramenta. Descreve comportamento atribuído, com maior ou menor confiança, a um adversário ou conjunto de atividades.

## Os três níveis do comportamento

### Tática: o objetivo em contexto

Uma tática responde, em termos gerais, a perguntas como “o que o adversário tenta obter nesta etapa?” ou “qual resultado operacional parece orientar esta atividade?”.

A leitura tática depende do contexto temporal e organizacional.

### Técnica: a abordagem

A técnica descreve uma maneira geral de realizar uma atividade associada à tática. Ela permite comparar incidentes mesmo quando os sistemas, nomes de arquivo, endereços ou ferramentas variam.

Uma técnica não é, por si só, um artefato.

### Procedimento: a execução observada

O procedimento é a forma concreta de execução encontrada em um caso: combinações de escolhas, sequência, parâmetros, recursos e condições particulares.

A fronteira entre técnica e procedimento depende do nível de detalhe necessário.

## Por que TTPs importam para a defesa

Indicadores pontuais, como um endereço IP, domínio, hash ou nome de arquivo, podem ajudar a localizar atividade conhecida. Contudo, podem desaparecer rapidamente, ser compartilhados por serviços legítimos ou reaparecer em contextos sem relação entre si.

Uma defesa orientada por comportamento pode produzir detecções menos dependentes de um único indicador.

TTPs também ajudam a estruturar a comunicação entre equipes.

## Onde aparecem na investigação

A análise de TTPs começa com dados heterogêneos: registros de autenticação, telemetria de endpoint, eventos de rede, trilhas de auditoria em serviços, alertas de ferramentas de segurança, evidências forenses e relatos de usuários ou administradores.

Uma linha do tempo permite relacionar eventos que, vistos separadamente, parecem comuns. Uma autenticação atípica pode ser relevante se antecede uma alteração de configuração e uma sequência incomum de acesso a dados.

Na prática, o analista compara a atividade com a linha de base do próprio ambiente, com hipóteses alternativas e com conhecimento de ameaças pertinente.

## Evidências e critérios de reconhecimento

Uma evidência útil descreve algo observável e verificável: um evento, alteração, conexão, sequência, artefato ou efeito. A classificação de TTP é uma interpretação dessas evidências.

A força da inferência aumenta quando sinais independentes convergem. Por exemplo, telemetria de processo pode mostrar uma execução fora do padrão, enquanto registros de identidade e auditoria contextualizam a conta e a alteração subsequente.

Também é preciso avaliar a qualidade e a cobertura da fonte. Um registro pode indicar que uma ação aconteceu, mas não quem controlava a conta; outro pode identificar uma sessão sem revelar o que foi feito nela.

Um registro operacional claro pode separar quatro elementos: observação direta, classificação comportamental, interpretação sobre a atividade e eventual atribuição.

## Uso em detecção e preparação defensiva

Para transformar conhecimento de TTP em detecção, é necessário perguntar quais sinais observáveis a técnica deixa naquele ambiente e quais atividades legítimas produzem sinais parecidos.

Detecções baseadas em sequência podem considerar relações temporais e contexto: quem iniciou a ação, em qual ativo, com que privilégio, após qual evento e com que efeito.

A validação defensiva deve usar cenários controlados e autorizados, dados históricos ou exercícios apropriados ao ambiente. O propósito é medir se os dados chegam, se a lógica identifica o padrão pretendido e se os analistas conseguem interpretar o alerta.

A priorização não decorre apenas da classificação. Uma TTP observada pode ter importância diferente conforme a criticidade do ativo, o privilégio envolvido, a exposição dos dados e o impacto possível.

## Exemplo hipotético

Considere um cenário hipotético: uma equipe percebe autenticações de uma conta de serviço em horários e sistemas incomuns.

A equipe preserva os registros, confirma a sincronização de horários, consulta o responsável pela aplicação e compara a atividade com mudanças programadas. Suponha que não exista mudança aprovada e que telemetria adicional vincule a sessão a um host que não deveria usar a conta.

Como consequência defensiva, a equipe pode revisar privilégios da conta, buscar sessões relacionadas, verificar outros ativos e corrigir lacunas de auditoria.

## Relação com indicadores, campanhas e atribuição

Um indicador de comprometimento é um dado específico que pode ajudar a localizar ou reconhecer atividade, como um domínio ou um hash. Uma TTP descreve uma forma de agir.

Uma campanha é uma forma de agrupar atividades relacionadas ao longo do tempo; um ator é uma hipótese sobre quem conduz ou patrocina atividades.

A repetição de uma técnica também não é prova automática de continuidade. Mudanças de infraestrutura podem ocultar uma continuidade real; semelhanças superficiais podem criar uma associação falsa.

## Limitações e erros de interpretação

Um erro recorrente é tratar cada TTP como exclusiva de um adversário. Táticas e técnicas podem ser conhecidas, documentadas e usadas por muitos atores, inclusive em atividades legítimas.

Outro erro é confundir ferramenta com técnica. Uma ferramenta pode executar várias funções, e uma técnica pode ser realizada com diferentes ferramentas ou recursos disponíveis no sistema.

A categorização pode gerar uma falsa sensação de completude. Uma atividade pode atravessar várias etapas, conter comportamento novo ou não se ajustar claramente às categorias disponíveis.

Há ainda o risco de confirmação: após associar um caso a uma hipótese, a equipe pode interpretar cada novo evento como apoio e deixar de procurar evidência contrária.

A durabilidade também não deve ser exagerada. Um adversário pode alterar procedimentos, escolher outra técnica ou explorar condições específicas de um alvo.

## Implicações para a resposta a incidentes

Durante um incidente, classificar comportamento pode ajudar a definir escopo: buscar a mesma sequência em sistemas relacionados, identificar contas ou ativos que compartilham a condição e formular hipóteses sobre possíveis próximas ações.

A classificação também pode orientar contenção e recuperação.

Preservar evidências antes de mudanças que as apaguem é importante para reconstrução e aprendizado, dentro das políticas e responsabilidades aplicáveis.

No encerramento, registre quais comportamentos foram confirmados, quais permaneceram hipóteses e quais dados faltaram.

## Perguntas frequentes

### Uma TTP identifica um grupo específico?

Não necessariamente. Ela descreve comportamento atribuído com algum grau de confiança.

### TTP é o mesmo que indicador de comprometimento?

Não. Um indicador é um artefato ou valor observável particular; TTP descreve objetivos, métodos e execução.

### Uma classificação pode ser feita com um único evento?

Pode-se formular uma hipótese inicial a partir de um evento, mas a confiança e o detalhe devem refletir a evidência limitada.

### TTPs são sempre maliciosas?

Não. Ações técnicas semelhantes podem ocorrer em administração, manutenção, automação ou investigação autorizada.

### Como usar o termo em um relatório?

Descreva primeiro os fatos observados, depois a classificação proposta e a evidência que a sustenta. Indique confiança, lacunas e explicações alternativas relevantes.

### Quando a etiqueta disponível não se encaixa?

Descreva o comportamento diretamente e explique por que as categorias existentes não capturam bem a observação.

## Relação com o capítulo original

No capítulo 1 da versão original do manuscrito, TTP pode ser entendido como uma lente para descrever o comportamento de um adversário ao longo da atividade, conectando finalidade, abordagem e execução.
A boa descrição mantém os níveis relacionados sem misturá-los. “Obter acesso” indica uma finalidade geral; uma forma de autenticação ou execução pode representar uma técnica; a ordem, os parâmetros e o recurso particular vistos no ambiente compõem o procedimento. Essa decomposição é útil porque permite comparar casos em níveis diferentes. Mesmo quando só há evidência suficiente para classificar uma técnica, a equipe pode conservar os detalhes do procedimento em notas investigativas sem afirmar que conhece toda a cadeia.

## Comparação e compartilhamento de inteligência

Ao comparar dois incidentes, a equipe precisa definir qual aspecto está comparando. Pode comparar a finalidade aparente, a técnica geral, um procedimento detalhado ou a sequência completa. Uma correspondência ampla pode ser útil para triagem, mas tem menor poder para distinguir atividades; detalhes raros e corroborados podem pesar mais, desde que sua origem e confiabilidade estejam claras. Não existe uma pontuação universal que converta semelhança em atribuição.

O compartilhamento de uma descrição comportamental exige contexto suficiente para que outra organização a interprete. Informar apenas o nome de uma técnica pode deixar de fora plataforma, condições, observabilidade e falsos positivos conhecidos. Quando apropriado, indique a fonte, a janela temporal, os ambientes em que o padrão foi visto e se a observação é direta ou inferida. Dados pessoais, detalhes sensíveis de infraestrutura e restrições de divulgação devem ser tratados segundo as regras aplicáveis, sem retirar da análise a informação necessária para avaliar a confiabilidade.

## Da inteligência ao controle

Uma vez descrito o comportamento, a equipe pode perguntar em que ponto da cadeia poderia preveni-lo, detectá-lo ou limitar seu efeito. Algumas oportunidades estão na gestão de identidade, outras na configuração de sistemas, segmentação, auditoria, proteção de dados ou resposta operacional. A escolha depende do mecanismo observado e das dependências do negócio; não é adequado prescrever um controle apenas com base no rótulo geral.

A cobertura de uma TTP pode ser avaliada por perguntas concretas: há dados para observar o evento? O alerta chega a alguém capaz de agir? A equipe consegue distinguir o padrão de operações aprovadas? Há um procedimento para investigar e conter sem causar impacto desnecessário? Essas perguntas expõem diferenças entre possuir uma ferramenta e ter uma capacidade defensiva funcional. A resposta pode levar tanto a ajustes técnicos quanto a mudanças de processo e treinamento.

## Cuidado com a intenção inferida

O termo “adversário” supõe uma atividade relevante para a análise de segurança, mas a intenção raramente é diretamente visível nos registros. Logs mostram ações, horários, contas, processos e efeitos; raramente mostram o propósito subjetivo de quem as iniciou. A inferência sobre objetivo deve levar em conta sequência, contexto e alternativas, e pode permanecer incerta mesmo após uma investigação extensa.

Essa distinção é particularmente importante em ambientes com automação e contas compartilhadas. Um serviço pode executar ações em nome de usuários, e uma conta válida pode ser usada tanto em operação autorizada quanto em atividade indevida. A equipe deve relacionar identidade técnica, autorização e contexto de uso, sem assumir que o nome da conta identifica a pessoa que controlou a sessão. A classificação comportamental pode ajudar a localizar o desvio, mas não resolve sozinha questões de autoria.

Em comunicações executivas, uma frase curta como “a atividade é compatível com determinado comportamento” deve vir acompanhada do que foi observado e do grau de confiança. Termos categóricos podem induzir decisões precipitadas, como atribuir responsabilidade ou interromper serviços com base em evidência inconclusiva. Linguagem calibrada não enfraquece a resposta: torna explícito o que já se sabe, o que falta esclarecer e quais ações são proporcionais à incerteza.
