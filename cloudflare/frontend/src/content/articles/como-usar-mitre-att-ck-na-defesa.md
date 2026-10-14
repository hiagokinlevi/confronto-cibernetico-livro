# Como usar MITRE ATT&CK na defesa

## A pergunta central: o que a equipe consegue defender melhor com ATT&CK?

Quando uma equipe de segurança procura “como usar MITRE ATT&CK na defesa”, a dúvida útil não é como preencher uma matriz inteira. É como transformar comportamentos adversários observados ou plausíveis em perguntas que melhorem a prevenção, a detecção, a investigação e a coordenação entre pessoas. ATT&CK é uma linguagem comum para descrever comportamentos; seu valor aparece quando essa linguagem ajuda a escolher uma ação defensiva verificável.

Uma técnica assinalada em uma planilha não prova que a organização está protegida. Também não prova que um atacante específico esteve presente, que uma campanha seguiu determinada sequência ou que o time cobriu todos os caminhos possíveis. A matriz organiza conhecimento; ela não é um selo de maturidade, um roteiro universal de ataque nem um substituto para contexto local.

A aplicação defensiva começa com uma pergunta delimitada: qual ativo, serviço, hipótese de ameaça ou objetivo de missão precisa orientar a análise? A partir dela, a equipe decide que comportamentos importam, quais fontes podem observá-los, que detecção seria útil, quem investigaria um alerta e como o resultado será validado. Essa cadeia é mais importante do que colorir muitas células.

## O que é ATT&CK e o que seus termos significam

MITRE ATT&CK é uma base de conhecimento estruturada sobre táticas, técnicas e procedimentos associados a comportamentos adversários. A estrutura é mantida pela MITRE e publicada em domínios que abrangem, entre outros contextos, ambientes corporativos, móveis e sistemas de controle industrial. Para a defesa corporativa, é comum consultar a matriz Enterprise, mas a escolha deve acompanhar o ambiente e a pergunta em análise.

Uma tática expressa o objetivo tático ou o “porquê” de um comportamento dentro de uma perspectiva adversária, como obter acesso inicial, persistir ou coletar informações. Uma técnica descreve, em nível mais concreto, um modo de alcançar esse objetivo. Subtécnicas detalham variantes quando a estrutura as define. Procedimentos são exemplos de como uma técnica foi empregada em casos documentados. A presença de uma técnica na base não significa que toda organização a verá da mesma maneira.

As relações entre táticas e técnicas não devem ser entendidas como uma trilha rígida de etapas. Um incidente pode começar por um acesso já existente, saltar entre objetivos, repetir um comportamento ou não deixar evidência observável em determinada fonte. Uma mesma técnica pode contribuir para mais de uma finalidade operacional, e a realidade pode combinar ações que a representação didática separa.

ATT&CK também não é uma lista completa de todas as ameaças possíveis. A base é uma representação curada do conhecimento disponível, sujeita a atualização, refinamento e diferenças de contexto. A equipe deve registrar qual versão ou data consultou quando a reprodutibilidade for importante. Nome, identificador e relações podem mudar ao longo do tempo; por isso, capturas de tela sem referência temporal envelhecem mal.

## Contexto defensivo: escolher um recorte antes de abrir a matriz

Uma organização pode usar ATT&CK em avaliação de cobertura, planejamento de inteligência, engenharia de detecção, resposta a incidentes, exercícios, comunicação executiva ou revisão de controles. Essas atividades se relacionam, mas não são intercambiáveis. Uma avaliação de cobertura pergunta quais comportamentos podem ser observados em um escopo definido. Uma investigação pergunta o que aconteceu em um caso concreto. Um exercício avalia coordenação sob condições simuladas. Misturar esses propósitos produz conclusões imprecisas.

O escopo precisa indicar ambiente, população de ativos, período e fontes. “Cobertura do ambiente” pode significar apenas estações Windows gerenciadas com agente ativo, e não servidores Linux, contas em nuvem, dispositivos pessoais ou sistemas de terceiros. Se o perímetro não estiver explícito, percentuais e mapas de calor dão uma aparência de completude que os dados não sustentam.

Também convém definir qual decisão será tomada com o resultado. Se o objetivo é priorizar engenharia, a saída pode ser uma fila de hipóteses de detecção com dependências e critérios de validação. Se o objetivo é informar liderança, a saída pode resumir risco operacional, exposição de ativos críticos e planos de tratamento. Se é apoiar resposta, a saída deve facilitar triagem e coleta de evidências. A mesma matriz não precisa servir como produto final para todos.

### A fonte de prioridade: missão, ameaça e exposição

Uma técnica merece atenção não apenas porque aparece frequentemente na base ou em um relatório. Considere a importância do ativo, o impacto possível, as rotas de acesso relevantes, a presença de controles, as lacunas de observabilidade, o custo de resposta e a qualidade da informação disponível sobre a ameaça. Uma hipótese de baixa probabilidade pode ainda ser prioritária se o impacto de não percebê-la for alto; essa é uma decisão de risco, não um fato produzido pela matriz.

## Decisões práticas: como sair da taxonomia e chegar a uma defesa

O uso operacional de ATT&CK pode ser organizado como um ciclo: formular uma pergunta defensiva; selecionar comportamentos associados; mapear cada comportamento a telemetria disponível; definir sinais e condições de triagem; validar em ambiente autorizado; medir o que a equipe consegue concluir; corrigir lacunas; revisar a hipótese quando o contexto muda. O ciclo é iterativo, e o resultado de uma fase pode alterar a prioridade da seguinte.

Uma técnica ampla não deve virar uma regra única sem análise. Primeiro, transforme a descrição em uma hipótese observável no ambiente. Pergunte que ação ou sequência de ações deixaria vestígios, em quais fontes, com que atraso e com que limitações. Depois, identifique quais eventos são normais, quais variações são esperadas e que contexto permitirá diferenciar uma operação administrativa legítima de uma atividade suspeita.

Uma detecção útil não precisa afirmar “esta técnica aconteceu” em seu título. Pode apontar um padrão anômalo ou uma condição de risco que mereça investigação. A classificação ATT&CK associada ajuda a explicar a intenção comportamental que motivou a regra, mas a mensagem do alerta deve descrever os fatos observados: sistemas envolvidos, horário, conta, processo ou mudança relevante, conforme a telemetria permita.

### Da técnica à hipótese testável

Use uma ficha simples por comportamento prioritário. Ela pode conter: identificador e nome consultados; pergunta defensiva; ativos no escopo; hipótese observável; fontes necessárias; eventos ou atributos considerados; possíveis explicações benignas; consequência de um falso negativo; ação de triagem; responsável; estado de validação; data e versão da referência. A ficha não precisa ser burocrática: seu propósito é tornar explícitos os pressupostos que poderiam ficar escondidos numa célula colorida.

## Fontes de evidência: o que pode sustentar um mapeamento

As fontes dependem da arquitetura. Em endpoints, podem ser relevantes eventos de sistema operacional, registros de autenticação, telemetria de processos, solução de proteção instalada e inventário de software. Em identidade, podem contribuir logs de provedores de autenticação, alterações de grupo, uso de fatores de autenticação, emissão de tokens e eventos administrativos. Em rede, podem ser úteis registros de DNS, proxy, firewall, fluxo ou sensores, observadas as limitações de criptografia e de retenção.

Em nuvem, considere trilhas de auditoria do provedor, eventos do plano de controle, identidade e acesso, configuração de recursos, alertas de postura e registros de aplicações. Em aplicações, logs de autenticação e autorização, alterações de configuração, acessos a dados e falhas de validação podem explicar comportamentos que não aparecem no endpoint. Em ambientes industriais, a coleta deve respeitar disponibilidade, segurança funcional, protocolos e processos específicos; não se deve presumir que sensores e testes apropriados para TI sejam seguros para tecnologia operacional.

Dados de chamados, aprovações de mudança, inventário, gestão de vulnerabilidades, contexto de identidade e cronologia de resposta podem transformar um evento isolado em uma observação interpretável. Uma alteração administrativa durante uma janela autorizada tem contexto diferente da mesma alteração sem responsável ou justificativa conhecida. Contexto não deve ser tratado como absolvição automática: uma mudança aprovada pode conter erro, e uma conta legítima pode ser usada de forma indevida.

## Papéis: quem transforma o mapa em decisão

A equipe de inteligência seleciona e contextualiza informação sobre ameaças, explicita a qualidade das fontes e traduz comportamentos em hipóteses pertinentes ao ambiente. Ela não deve apresentar uma associação de relatório externo como atribuição confirmada de um incidente interno. Também pode ajudar a identificar perguntas que merecem validação, sem assumir que toda técnica publicada é relevante para a organização.

A engenharia de detecção avalia fontes, cria lógica de análise, documenta dependências, testa cenários autorizados e acompanha efeitos colaterais. Operações de segurança monitora filas, faz triagem, escala casos e registra resultados. Resposta a incidentes coordena contenção, investigação e recuperação conforme o plano organizacional. Administradores e donos de sistemas explicam comportamentos esperados e mudanças. Privacidade, jurídico, risco e conformidade podem participar quando coleta, retenção, impacto ou obrigação regulatória assim exigirem.

A responsabilidade não termina na pessoa que mantém uma matriz. Cada detecção precisa de um responsável técnico, um canal operacional e um caminho de manutenção. A liderança deve decidir prioridades e aceitar riscos residuais de forma informada, sem exigir que um mapa represente certeza que os dados não fornecem. Quando a organização usa uma função chamada Black Team, o nome não deve substituir uma definição clara de mandato, fronteiras de teste e interfaces com defesa, operação e gestão.

### Coordenação entre Black Team e defesa

Um Black Team pode participar de exercícios controlados para testar pressupostos defensivos, desde que escopo, autorização, horários, sistemas, dados e condições de interrupção estejam definidos. A conexão com ATT&CK pode facilitar a discussão sobre comportamento simulado e sobre a evidência esperada. Ela não autoriza, por si só, qualquer ação técnica nem torna segura uma atividade em produção.

## Exemplos defensivos seguros

### Identidade e autenticação

Cenário hipotético: uma organização quer avaliar como perceber alterações incomuns em privilégios administrativos. O time escolhe contas críticas, identifica os registros de autenticação e auditoria disponíveis e consulta como mudanças autorizadas são aprovadas. A hipótese pode combinar uma elevação de privilégio fora do fluxo usual com acesso posterior a um sistema sensível. O alerta informa eventos e entidades observados; o analista verifica identidade, origem, justificativa e mudança aprovada.

Se a trilha de auditoria não incluir o ator ou o recurso alterado, a equipe não deve declarar cobertura plena. Pode priorizar a melhoria da fonte, limitar o escopo da regra ou aceitar temporariamente que a atividade seja parcialmente observável. A decisão depende do risco e da viabilidade; ATT&CK ajuda a formular a pergunta e relacioná-la a comportamentos, mas não escolhe a resposta organizacional.

### Endpoint e execução de software

Cenário hipotético: uma equipe deseja saber se consegue investigar execução de software fora do padrão em estações gerenciadas. Ela verifica cobertura do agente, qualidade dos eventos de processo, associação entre processo e usuário e retenção. Em vez de depender de um nome isolado, define uma hipótese contextual, como um programa não reconhecido iniciando uma atividade incomum em um equipamento administrativo.

A validação pode usar uma simulação benigna previamente aprovada, um conjunto de eventos de teste ou uma reprodução controlada em laboratório. O objetivo é confirmar que os dados chegam, que a regra reconhece o sinal pretendido, que atividades administrativas legítimas não geram uma fila impraticável e que o analista sabe coletar o contexto. Não é necessário executar comportamento destrutivo nem replicar uma cadeia completa para avaliar uma pergunta limitada.

## Cenários contrastantes: o mesmo sinal pode significar coisas diferentes

Cenário hipotético A: uma conta privilegiada acessa um servidor fora do horário comum, mas existe uma mudança aprovada, executada pela pessoa responsável, com origem esperada e registros consistentes. Isso sustenta uma explicação legítima, embora a equipe ainda possa verificar se a aprovação e a execução correspondem. O alerta foi útil se permitiu essa conclusão com rapidez e evidência suficiente.

Cenário hipotético B: a mesma classe de acesso aparece sem janela de mudança, a origem não combina com o padrão da conta e há uma alteração de configuração subsequente. Esses elementos justificam investigação prioritária, mas ainda não identificam autor nem intenção. A classificação de comportamento deve refletir os eventos confirmados; uma hipótese sobre comprometimento fica claramente rotulada como hipótese até que evidência adicional a sustente.

Cenário hipotético C: nenhum evento aparece. Isso pode significar ausência da atividade na janela examinada, falha de ingestão, cobertura incompleta ou falta de campos para consulta. A conclusão adequada é descrever a janela e as fontes pesquisadas, e informar que não houve evento encontrado nelas. O silêncio do sistema não deve ser convertido automaticamente em prova de ausência.

Cenário hipotético D: a detecção dispara com uma conta de automação durante implantação prevista. A equipe confirma que o comportamento é esperado, mas percebe que o alerta não tem contexto de mudança. Isso é um falso positivo operacional para aquela regra e um achado sobre a integração de dados. A resposta pode incluir contexto adicional, ajuste de lógica ou tratamento de fila; simplesmente descartar o alerta sem registrar o motivo impede aprendizado.

## Erros comuns e como corrigir o raciocínio

Um erro recorrente é transformar a matriz inteira numa lista de tarefas iguais. A equipe termina com centenas de itens sem prioridade, dono ou critério de conclusão. Para evitar isso, use recortes ligados a ativos e decisões, priorize de forma explícita e revise a seleção quando a arquitetura, a ameaça ou a missão mudar. Nem toda técnica merece uma detecção dedicada.

Outro erro é tratar o número de células marcadas como medida de segurança. A contagem não informa qualidade dos sensores, precisão, cobertura de ativos, tempo de triagem, dependências nem capacidade de resposta. Um indicador agregado pode servir para acompanhar trabalho, se a definição for estável, mas deve vir acompanhado de limites e exemplos de validação. Não use uma porcentagem para prometer proteção total.

Também é comum mapear um alerta para uma técnica só porque a descrição parece semelhante. O mapeamento deve vir depois da análise do comportamento observado, com justificativa e confiança. Em alguns casos, mais de uma técnica é compatível; em outros, a evidência não permite escolher. Registrar “não classificado ainda” pode ser tecnicamente mais honesto e orientar a coleta necessária.

Atribuir um evento a um grupo a partir de uma técnica isolada é outra inferência indevida. Comportamentos podem ser usados por operadores diferentes, ferramentas legítimas podem produzir eventos semelhantes e relatórios externos podem agrupar observações com graus diversos de confiança. A atribuição exige um conjunto de evidências, análise de contexto e método apropriado. O rótulo ATT&CK organiza comportamento; não identifica automaticamente quem o executou.

## Critérios de avaliação: como saber se o uso está ajudando

Avalie se a equipe consegue responder à pergunta que motivou o trabalho. Para uma detecção, verifique se os eventos necessários existem, se a regra reconhece o padrão que foi definido, se os alertas têm contexto suficiente, se a triagem segue um caminho claro e se a manutenção tem responsável. Para uma análise de cobertura, verifique se o escopo e as exclusões estão claros, se as fontes foram avaliadas e se estados de confiança não foram confundidos.

A qualidade também aparece na rastreabilidade. Uma pessoa que não participou da análise consegue localizar a evidência, reproduzir a consulta dentro dos limites autorizados, entender por que o comportamento foi associado à técnica e identificar as incertezas? Se a conclusão depende de conhecimento oral de um analista, há risco de perda na troca de turno e na auditoria.

Considere o custo operacional. Uma detecção que produz mais alertas do que a equipe pode investigar pode reduzir a capacidade de resposta. Uma regra silenciosa pode estar precisa, mas talvez não seja acionada pelo cenário que se pretendia cobrir. A avaliação precisa incluir sinais positivos e benignos, cargas representativas quando possível e uma decisão sobre limiar e contexto. Não existe um valor universal de ruído que garanta qualidade para toda equipe.

Resultados úteis incluem lacunas de telemetria priorizadas, detecções validadas em escopo conhecido, procedimentos de triagem melhorados, dependências identificadas e riscos aceitos com justificativa. Registre também o que ficou inconclusivo. Uma lacuna reconhecida e atribuída pode ser mais valiosa do que uma marcação positiva sem teste.

## Exercício de mesa ou laboratório autorizado

O exercício a seguir é hipotético e não requer executar técnicas contra sistemas reais. Seu objetivo é testar se participantes conseguem separar observação, inferência e desconhecido, relacionar evidências a comportamentos e encaminhar ações defensivas. Pode ser feito em uma sala, com cartões de eventos fictícios, ou em laboratório isolado com dados sintéticos aprovados.

Defina previamente um serviço de identidade fictício, um conjunto de ativos, fontes disponíveis e uma janela de exercício. Nomeie uma pessoa facilitadora, observadores e responsáveis por registrar decisões. Informe a todos os limites: não haverá conexão a terceiros, coleta de credenciais reais, mudança de produção nem ação destrutiva. Se o laboratório usar ferramentas, confirme que é isolado, restaurável e autorizado.

Apresente uma sequência de evidências em partes. Primeiro, um registro de autenticação fora do padrão esperado. Depois, um evento de alteração de privilégio. Em seguida, um chamado de mudança que parece relacionado, mas não contém todos os campos necessários. Por fim, informe que um dos sensores teve atraso de ingestão. A equipe deve dizer o que sabe, o que suspeita, o que precisa buscar e que decisão é segura naquele momento.

Peça que os participantes indiquem os comportamentos ATT&CK possivelmente pertinentes, sem exigir um rótulo se a evidência não permitir. Em seguida, pergunte que fontes confirmariam ou refutariam cada hipótese, quem pode consultá-las, que risco existe em esperar e que ação de triagem não destrutiva pode ser tomada. O facilitador deve distinguir a qualidade da classificação da qualidade da resposta coordenada.

## Roteiro de implementação

### 1. Defina a decisão e o escopo

Escreva em uma frase qual decisão o trabalho deve apoiar: priorizar detecções para identidade, avaliar visibilidade de um serviço crítico, preparar uma investigação ou exercitar coordenação. Delimite sistemas, contas, unidades, período e exclusões. Identifique o dono do risco e os participantes. Sem essa etapa, a equipe tende a tratar a base toda como obrigação imediata.

### 2. Consulte a referência adequada

Escolha o domínio e a versão compatíveis com a tecnologia e a pergunta. Leia descrições e relações relevantes, além de exemplos e referências fornecidos pela base quando necessários. Registre a data de consulta. Não copie um nome de relatório secundário como se fosse a definição oficial e não assuma que uma técnica em um domínio se aplica a todos os outros.

### 3. Priorize comportamentos

Use criticidade de ativos, arquitetura, exposição, inteligência contextualizada, controles existentes e impacto para selecionar um conjunto gerenciável. Registre por que cada item entrou na pauta e o que ficou fora. Uma prioridade representa julgamento informado e pode mudar; não é previsão certa de ocorrência.

### 4. Faça o inventário de evidências

Para cada hipótese, liste as fontes necessárias, cobertura, campos, retenção, atraso, acesso e dependências. Verifique a saúde de ingestão e a população efetivamente monitorada. Converse com quem opera o sistema para compreender mudanças legítimas e limitações. Classifique lacunas como desconhecidas, parciais ou confirmadas com base em observações, não em expectativa.

## Perguntas frequentes

### A matriz serve como checklist de segurança?

Pode inspirar perguntas e organizar uma avaliação, mas não funciona como checklist universal de conformidade. A relevância depende do ambiente, da finalidade e do risco. Uma lista completa não garante controles adequados, e itens não aplicáveis precisam de justificativa vinculada ao escopo.

### Devo mapear cada alerta para uma técnica?

Somente quando houver base suficiente para uma associação útil. Um alerta pode ser um sinal genérico, pertencer a mais de uma hipótese ou não ter evidência para uma classificação. Use rótulos provisórios ou deixe a classificação em aberto até que a investigação produza contexto. Mapeamento deve facilitar análise, não forçar certeza.

### Uma técnica observada identifica o grupo atacante?

Não. A técnica descreve um comportamento e pode ser comum a agentes diferentes ou a atividades legítimas. Atribuição requer análise mais ampla, fontes confiáveis e evidências que sustentem a conclusão. Mesmo uma combinação de comportamentos não deve ser tratada como identificação automática.

### Se não há alerta, a técnica não ocorreu?

Não é possível concluir isso apenas pelo silêncio de uma ferramenta. Pode não ter ocorrido na janela observada, mas também pode faltar cobertura, retenção, ingestão ou lógica apropriada. Declare a população e as fontes consultadas e teste a capacidade de observação dentro de escopo autorizado.

### Como evitar um mapa de calor enganoso?

Defina estados e critérios, ligue cada avaliação a evidências, indique escopo e versão, e diferencie prevenção de detecção e resposta. Não use a cor como substituto de validação. Inclua desconhecidos e lacunas, além de responsáveis e próximos passos.

## Leitura relacionada ao capítulo sobre estrutura e coordenação

No capítulo 7 do manuscrito original, a discussão sobre estrutura, papéis e coordenação do Black Team se relaciona ao uso defensivo de ATT&CK porque uma hipótese só se torna útil quando há fronteiras de atuação, responsabilidades e comunicação entre quem simula, quem observa e quem decide. O livro de Hiago Kin Levi, publicado pela Editora Brasport, pode oferecer contexto complementar para essa conversa sobre organização de equipe. A obra não substitui documentação técnica atualizada, treino, autorização de exercício nem julgamento da equipe.
