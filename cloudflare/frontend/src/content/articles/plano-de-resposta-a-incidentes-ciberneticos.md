# Plano de resposta a incidentes cibernéticos

## Como organizar uma resposta antes que a crise comece?

Quando uma organização sofre uma interrupção suspeita, quem pode declarar um incidente, quem decide desligar um serviço e quem autoriza a volta à operação? Essas perguntas não podem depender de uma reunião improvisada entre pessoas que talvez estejam indisponíveis. Um plano de resposta a incidentes cibernéticos transforma responsabilidades e critérios em decisões praticáveis, mesmo quando os fatos ainda são incompletos e o tempo é curto.

A pergunta central, portanto, não é apenas “o que fazer durante um ataque?”. É: como a organização toma decisões coordenadas quando há sinais contraditórios, sistemas indisponíveis, pressão para restabelecer serviços e incerteza sobre o alcance? A resposta depende de preparação anterior, conhecimento dos processos de negócio e exercícios que revelem lacunas antes da ocorrência real.

## O que o plano deve resolver

### Definição operacional

Um plano de resposta descreve a estrutura de atuação diante de eventos que possam comprometer confidencialidade, integridade ou disponibilidade de sistemas e informações. Pode cobrir incidentes confirmados e situações suspeitas que exijam investigação coordenada. Define acionamento, autoridade, responsabilidades, escalonamento, preservação de evidências, contenção, comunicação e transição para recuperação.

### Preparação como capacidade, não como arquivo

A preparação inclui pessoas treinadas, contatos válidos, acesso de emergência, autoridade delegada, inventário minimamente confiável e meios alternativos de comunicação. Inclui também entender dependências: quais serviços sustentam atendimento, folha de pagamento, produção ou obrigações regulatórias; quais fornecedores podem ser acionados; e quais sistemas não podem ser desligados sem criar riscos adicionais.

A preparação também exige limites. Nem todo alerta representa um incidente, nem toda suspeita justifica desligar uma operação crítica. O plano deve permitir investigação proporcional, ao mesmo tempo que estabelece condições para ação imediata quando a demora possa ampliar dano. O objetivo é reduzir improvisação sem eliminar o julgamento profissional necessário diante de fatos novos.

## Contexto: fases e adaptação do modelo NIST

### Um ciclo para orientar, não uma sequência rígida

O modelo tradicional de resposta a incidentes do NIST organiza o trabalho em preparação; detecção e análise; contenção, erradicação e recuperação; e atividade pós-incidente. Essa estrutura continua útil como mapa mental porque lembra que a resposta começa antes do alerta e não termina quando o serviço volta. Ela também ajuda a verificar se uma decisão operacional deixou de lado evidências, recuperação ou aprendizado.

### Como traduzir as fases em decisões

Na preparação, a organização identifica serviços prioritários, responsáveis, contatos, recursos, dependências e critérios para acionar apoio externo. Na detecção e análise, valida sinais, preserva contexto, formula hipóteses e determina se há base suficiente para classificar o evento. Na contenção, escolhe medidas que limitem impacto sem destruir evidências ou interromper desnecessariamente processos essenciais.

O plano pode associar a cada fase uma pergunta de controle. Preparação: temos autoridade e recursos? Análise: o que está confirmado e o que permanece em hipótese? Contenção: qual medida reduz risco e quais efeitos colaterais pode causar? Recuperação: que evidência demonstra que a condição está suficientemente estável? Pós-incidente: que mudança concreta reduzirá a chance de repetição ou melhorará a resposta?

## Comece pelo impacto e pelos serviços essenciais

### Priorizar cenários sem fingir prever o futuro

Uma organização não precisa começar com uma lista enciclopédica de ameaças. É mais produtivo identificar situações que podem interromper objetivos relevantes e perguntar como a equipe responderia. Exemplos hipotéticos incluem indisponibilidade de um sistema de atendimento, suspeita de exposição de dados, comprometimento de uma conta privilegiada, falha de um fornecedor que sustenta autenticação ou alteração não autorizada em registros críticos.

### Dependências e escolhas difíceis

Serviços modernos dependem de identidade, DNS, conectividade, nuvem, plataformas de terceiros, ferramentas de suporte e pessoas com conhecimento especializado. Um plano que liste apenas servidores próprios pode falhar justamente quando a organização precisar chamar um fornecedor ou usar uma conta de emergência. Para cada dependência crítica, identifique o ponto de contato, a forma alternativa de abertura de chamado, a informação que pode ser compartilhada e a autoridade para solicitar uma intervenção.

As escolhas de contenção podem trazer prejuízos. Isolar uma rede pode interromper produção; revogar sessões pode desconectar equipes legítimas; bloquear uma integração pode afetar clientes. O plano não elimina esses custos: ajuda a avaliá-los, explicitar quem aceita o impacto e registrar por que a decisão foi tomada. Quando o risco de dano imediato superar a demora por aprovação, deve haver autoridade emergencial previamente definida e revisão posterior documentada.

## Detecção, análise e níveis de confiança

### Sinal, alerta e prova

Um alerta é uma indicação produzida por ferramenta, pessoa ou processo. Pode ser útil, falso positivo ou incompleto. Um evento é uma ocorrência observada. Um incidente é uma situação que, segundo critérios da organização, exige resposta coordenada por risco ou impacto. Evidência é informação coletada e preservada de modo que possa apoiar uma conclusão ou decisão. Esses termos precisam ser usados com cuidado para que a gravidade da linguagem não ultrapasse a qualidade dos dados.

### Critérios para declarar e escalar

Os critérios de incidente devem combinar impacto, sensibilidade, escopo, risco de propagação e incerteza relevante. Uma tentativa bloqueada sem consequência pode permanecer no fluxo de monitoramento. Sinais de acesso não autorizado a dados sensíveis, indisponibilidade de serviço essencial ou comprometimento de identidade privilegiada podem exigir coordenação imediata, ainda que o escopo permaneça desconhecido.

Um critério de escalonamento pode considerar que a resposta ultrapasse a equipe técnica quando houver possível impacto em clientes, obrigação de notificação, interrupção prolongada, risco à segurança de pessoas, suspeita de fraude ou necessidade de decisão de apetite de risco. Isso não significa que todas essas condições estejam presentes em qualquer ocorrência. São gatilhos de consulta a papéis especializados, conforme política e contexto aplicáveis.

### Construir uma linha do tempo confiável

Registros de sistemas, alertas de segurança, chamados, mensagens de suporte, alterações administrativas e relatos de usuários podem contribuir para reconstruir uma ocorrência. Sua utilidade depende de contexto, sincronização de horários, retenção, integridade e acesso controlado. Antes de concluir que um registro prova determinada ação, confirme de onde veio, que período cobre, como foi obtido e se há lacunas conhecidas.

## Papéis, autoridade e substituição

### Funções que precisam estar cobertas

Uma equipe de resposta pode variar conforme porte e setor, mas algumas funções precisam ser atribuídas, mesmo que uma pessoa acumule mais de uma. O coordenador organiza prioridades, convoca participantes e mantém o quadro de situação. A liderança técnica conduz análise e ações sobre sistemas. O responsável pelo negócio explica criticidade, alternativas e impactos operacionais. A direção assume decisões que excedem a autoridade técnica e aceita riscos organizacionais dentro de seus limites.

A pessoa que confirma tecnicamente um sinal não deve ser automaticamente a única a aprovar todas as consequências de negócio. Separar avaliação, recomendação e autorização reduz conflito de interesse e melhora a prestação de contas. Em equipes pequenas, a mesma pessoa talvez precise acumular papéis; nesse caso, o plano pode exigir revisão por outro responsável em decisões de maior impacto, sempre que houver disponibilidade.

### Autoridade em condições degradadas

Defina quem pode declarar incidente, aprovar isolamento, suspender uma integração, acionar fornecedor, preservar equipamento, autorizar retorno e aprovar comunicação. Estabeleça limites e suplentes para fins de semana, férias e ausência de executivos. O processo precisa funcionar sem depender exclusivamente de e-mail corporativo ou de uma aplicação que talvez esteja indisponível.

### Contatos e acessos de emergência

Mantenha contatos de equipes internas, fornecedores, provedores de nuvem, operadoras, assessoria jurídica e resposta especializada. Registre canal primário e alternativa, horário de atendimento, contrato ou referência necessária e quem está autorizado a solicitar serviço. Telefones devem ser verificados periodicamente. Um número publicado no plano pode ter mudado, e um portal do fornecedor pode exigir autenticação que depende do serviço afetado.

A revisão de contatos pode ser simples: confirmação periódica por seus responsáveis, registro de data da última verificação e teste de um canal alternativo. A frequência deve acompanhar a velocidade de mudança do ambiente e a criticidade da relação. Uma lista sem dono tende a envelhecer; cada área precisa responder pela exatidão de seus contatos e dependências.

## Contenção, recuperação e preservação

### Escolher medidas proporcionais

Contenção procura limitar dano e propagação, preservando opções para a investigação e a operação. Pode incluir restrição temporária de acesso, isolamento de um componente, suspensão de uma integração ou proteção reforçada de uma identidade, sempre conforme contexto e autoridade. Não existe uma medida universal: a ação apropriada depende de evidência, arquitetura, impacto e risco de esperar.

### Retorno controlado ao serviço

Recuperar não é apenas ligar novamente. A equipe precisa saber qual condição permite reabertura: origem provável tratada ou risco residual entendido, controles relevantes ativos, integridade verificada conforme o serviço, monitoramento reforçado definido e proprietário de negócio ciente dos impactos. Esses critérios variam; devem ser estabelecidos antes do incidente para cada serviço prioritário, com espaço para exceção autorizada.

A recuperação pode ser gradual. O serviço pode voltar para uma parcela controlada da operação enquanto a equipe acompanha sinais relevantes, ou permanecer limitado até que se obtenha mais confiança. A decisão de aceitar risco residual pertence à autoridade apropriada, com contribuição técnica e de negócio. O plano deve registrar quem aceitou, por quanto tempo a exceção vale e qual condição requer reavaliação.

### Pós-incidente sem caça a culpados

Após estabilizar a operação, revise cronologia, decisões, comunicação, controles e coordenação. Pergunte quais informações estavam disponíveis em cada momento, quais estavam ausentes e se os critérios ajudaram ou confundiram. Distinga uma falha de processo de uma decisão razoável tomada sob incerteza. A finalidade é corrigir condições e melhorar a capacidade coletiva, não punir quem relatou um problema ou tomou uma decisão autorizada.

## Comunicação durante a ocorrência

### Uma fonte de situação comum

A comunicação da resposta precisa oferecer um quadro comum: estado do incidente, serviços afetados, fatos confirmados, hipóteses, decisões em vigor, responsáveis, próximos marcos e questões pendentes. Um canal dedicado, com acesso controlado, reduz versões conflitantes. Se a plataforma principal não estiver disponível ou comprometida, a equipe precisa de meio alternativo conhecido, com limites de confidencialidade e registro.

Para cada público, determine quem prepara, revisa e aprova. Funcionários podem precisar saber como reportar sintomas e quais atividades evitar. Clientes podem precisar de orientação sobre disponibilidade ou proteção de informações, se a organização confirmar que há impacto relevante. Órgãos, parceiros ou reguladores podem ter canais e prazos definidos por regras aplicáveis. O plano deve encaminhar essas decisões a jurídico, privacidade e liderança, considerando fatos e jurisdição, sem presumir uma obrigação universal.

### Fato, hipótese e aviso

Um aviso de precaução comunica uma ação prudente diante de incerteza; não é prova de que a ameaça ocorreu. Uma hipótese é uma explicação a testar. Um fato confirmado é uma observação sustentada por fonte identificável e contexto suficiente para a afirmação específica. Mesmo fatos podem ter escopo limitado: confirmar acesso indevido a uma conta não confirma automaticamente leitura ou extração de todos os dados disponíveis a ela.

## Cenários hipotéticos para testar decisões

### Interrupção de um serviço essencial

Cenário hipotético: a equipe de atendimento perde acesso a uma aplicação e recebe relatos de lentidão em sistemas relacionados. Ainda não há evidência de atividade maliciosa. A resposta começa por identificar impacto de negócio, confirmar a extensão observável e acionar responsáveis técnicos e operacionais. Se os sinais sugerirem risco cibernético, o coordenador pode declarar resposta em nível inicial enquanto a análise continua.

### Suspeita de exposição de informação

Cenário hipotético: um fornecedor alerta a organização sobre acesso incomum a um repositório que pode conter dados de clientes. O alerta não determina se houve leitura ou cópia, nem delimita o período. A equipe identifica proprietário dos dados, preserva o aviso original, solicita detalhes ao fornecedor por canal validado e restringe acessos conforme avaliação de risco e autoridade.

### Conta privilegiada sob suspeita

Cenário hipotético: uma ferramenta de monitoramento indica atividade incomum associada a uma identidade administrativa. A equipe verifica a origem do alerta, período coberto e contexto de mudanças autorizadas. O responsável técnico recomenda uma medida de proteção proporcional; o proprietário do serviço avalia efeitos e a autoridade designada aprova eventual interrupção relevante.

### Fornecedor indisponível durante a crise

## Exercício de mesa ou laboratório autorizado

### Preparar um exercício de mesa

Um exercício de mesa é uma discussão guiada sobre decisões em um cenário hipotético. Não precisa simular um ataque real nem tocar em sistemas de produção. Escolha um serviço importante, defina objetivos modestos — por exemplo, testar acionamento, autoridade e comunicação — e convide representantes técnicos, de negócio, jurídico, privacidade e comunicação conforme o cenário.

Os observadores anotam atrasos, ambiguidades, dependências e decisões tomadas sem autoridade clara. No encerramento, os participantes identificam duas ou três melhorias prioritárias, donos e prazos. O resultado não é uma nota de desempenho isolada; é uma lista verificável de mudanças no plano e nas capacidades. Um exercício deve ser acessível a quem precisa participar, incluindo suplentes, e respeitar limites de confidencialidade.

### Quando usar laboratório

Um laboratório pode testar procedimentos técnicos em ambiente isolado, autorizado e representativo o suficiente para a pergunta de validação. O escopo deve definir sistemas incluídos, dados permitidos, responsáveis, janela, mecanismos de interrupção e critério de retorno ao estado inicial. Use contas e dados de teste, não credenciais ou informações reais sem autorização apropriada.

## Erros comuns que reduzem a utilidade do plano

### Documento extenso sem caminho de ação

Planos podem crescer até se tornarem difíceis de consultar sob pressão. Informações de referência são úteis, mas as primeiras páginas devem ajudar a identificar o acionamento, o coordenador, os contatos de emergência e as decisões imediatas. Use navegação clara, nomes consistentes e anexos controlados. A equipe deve conseguir localizar a orientação sem ler um manual inteiro durante um evento.

### Papéis sem autoridade real

Nomear uma equipe não basta se ninguém sabe quem pode aprovar ações. Uma lista de pessoas sem responsabilidades, substitutos ou limites não resolve conflitos. Da mesma forma, dizer que “a direção decide tudo” pode tornar a resposta lenta e sobrecarregar executivos com decisões técnicas rotineiras. Delegue autoridade para medidas previstas e reserve escalonamento executivo para impacto, risco ou exceções relevantes.

### Evidências tratadas como detalhe posterior

A pressão para restaurar serviço pode levar a reinicialização, limpeza ou descarte de componentes antes de avaliar preservação. O inverso também acontece: equipes preservam tudo por tempo indefinido, sem finalidade, aumentando exposição e custo. O plano deve pedir avaliação proporcional, registro de origem e custódia quando necessário, e consulta especializada conforme a situação.

### Comunicação improvisada ou excessivamente segura

### Plano que não acompanha mudanças

Mudanças de arquitetura, contratos, equipe, processos e regras podem tornar o documento obsoleto. Uma revisão anual fixa pode não ser suficiente para componentes que mudam com frequência; por outro lado, revisar tudo a cada alteração menor pode criar burocracia. Defina eventos que exigem revisão, como troca de fornecedor crítico, mudança de proprietário, alteração de canal de suporte ou exercício que revele falha.

## Como avaliar se a resposta está melhorando

### Critérios observáveis

Uma avaliação útil observa se a equipe consegue encontrar o plano, acionar suplentes, distinguir fato de hipótese, identificar o proprietário do serviço, obter autoridade e registrar decisões. Também pode observar se canais alternativos funcionam, se o fornecedor responde pelo caminho previsto, se a restauração segue critérios e se as ações pós-exercício têm responsáveis.

Uma organização pode acompanhar tendências como proporção de contatos verificados, ações corretivas concluídas no prazo acordado, presença de suplentes em exercícios e procedimentos prioritários validados. Esses indicadores são opções, não metas universais. Estabeleça definições consistentes, evite manipular números para parecer preparado e investigue causas quando uma medida piorar.

### Evidência de prontidão

## Roteiro de implementação

### Primeiros passos

Comece identificando patrocinador executivo e responsável operacional pelo plano. Defina propósito, escopo, serviços prioritários e relação com continuidade, gestão de crise, privacidade e recuperação. Reúna equipes técnicas e proprietários de negócio para localizar dependências e listar cenários de maior impacto. Registre premissas e incertezas em vez de esperar um inventário perfeito.

Escreva um fluxo curto para as primeiras decisões e conecte-o a procedimentos existentes. O fluxo deve indicar como verificar segurança das comunicações, quem coordena, como classificar provisoriamente, como preservar informações e quando escalar. Revise com as pessoas que realmente serão acionadas; linguagem compreensível para quem não escreveu o documento é um teste importante de qualidade.

### Validar e manter

Execute um exercício de mesa focado em uma lacuna específica. Após revisar as observações, atualize o documento e atribua responsáveis às melhorias. Teste separadamente acessos e recuperação em ambiente autorizado quando isso responder a uma pergunta concreta. Registre limites, aprovações e resultados, evitando converter uma simulação em falsa prova de capacidade ampla.

## Perguntas frequentes

### Qual deve ser o tamanho do plano?

O tamanho adequado é o que permite encontrar decisões e contatos com rapidez, mantendo detalhes suficientes para orientar autoridade, escalonamento e evidências. Um fluxo principal curto pode remeter a procedimentos técnicos separados. Revise com usuários reais: se eles não conseguem localizar o próximo passo ou dependem de conhecimento informal, o documento precisa de ajuste, independentemente do número de páginas.

### Toda anomalia deve ser declarada incidente?

Não. Anomalias podem ser eventos esperados, erros ou falsos positivos. A organização deve estabelecer critérios proporcionais para análise e escalonamento. Entretanto, a incerteza não deve impedir mobilização quando há potencial impacto relevante. Uma classificação inicial pode ser conservadora e provisória, com revisão conforme chegam dados, desde que a decisão e sua justificativa sejam registradas.

### Quem deve liderar a resposta?

A liderança operacional deve estar claramente designada e ter autoridade compatível com a função. Pode ser um coordenador de resposta ou outra pessoa definida pela organização. Especialistas técnicos orientam as ações sobre sistemas; proprietários de negócio explicam impactos; liderança executiva decide sobre riscos e consequências que excedem delegação. A estrutura exata varia, mas não deve deixar disputa de comando sem resolução.

### Quando envolver jurídico e privacidade?

### Com que frequência revisar contatos e procedimentos?

A frequência deve refletir criticidade e ritmo de mudança. Contatos de fornecedores essenciais e canais de emergência merecem verificação regular; alterações de equipe, contrato, identidade ou arquitetura devem disparar revisão. Registre quem confirmou cada informação e quando. Uma periodicidade escrita sem responsável ou mecanismo de verificação pode produzir uma falsa sensação de atualização.

### É necessário contratar uma equipe externa?

Não existe resposta universal. Uma equipe externa pode oferecer capacidade especializada, independência ou cobertura que a organização não mantém internamente, mas requer escopo, canal, autoridade e regras de compartilhamento definidos. Avalie contratos, disponibilidade, confidencialidade, tratamento de dados e compatibilidade com processos internos. Se houver apoio externo, o plano ainda precisa identificar quem dentro da organização decide e coordena.

### Como evitar que o plano revele informação sensível?

Controle acesso conforme necessidade, mantenha versões e anexos protegidos e evite incluir senhas, chaves ou dados pessoais desnecessários. Disponibilize uma cópia de emergência com conteúdo suficiente para acionar a resposta, guardada por mecanismo aprovado. Defina como revogar cópias antigas e como obter o documento quando os serviços corporativos usuais estiverem comprometidos.

### O que fazer quando os fatos mudam?

## Relação com o capítulo da versão original

O capítulo 2 da versão original aborda fases da resposta a incidentes e o modelo NIST. Um plano prático conecta esse ciclo a pessoas, critérios, evidências e autoridade da organização. Para aprofundar a discussão editorial sobre resposta e preparação, o livro de Hiago Kin Levi, publicado pela Editora Brasport, pode ser consultado em relação a esse capítulo. A obra oferece contexto de leitura, mas não substitui documentação técnica atualizada, treino, políticas aplicáveis nem o julgamento da equipe diante de evidências concretas.
