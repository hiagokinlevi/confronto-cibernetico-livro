# Evidências forenses em nuvem

## Pergunta central: como preservar evidências úteis sem perder contexto?


Quando uma equipe identifica atividade suspeita em uma conta de nuvem, a pergunta não é apenas “que arquivo devo copiar?”. A pergunta central é: quais registros podem esclarecer o que aconteceu, quem ou qual identidade realizou cada ação, em que sequência, sobre quais recursos e com que grau de confiança, e como preservá-los antes que desapareçam ou sejam alterados? A resposta depende da arquitetura e dos serviços efetivamente usados. “A nuvem” não é um repositório único, nem produz um conjunto universal de evidências.

O objetivo deste artigo é apresentar um método de preparação e resposta aplicável a ambientes de nuvem sem assumir um provedor, uma configuração ou um prazo universal. Os exemplos são defensivos e, quando descrevem uma situação, são explicitamente hipotéticos. As orientações não substituem as instruções atuais do provedor, a política interna, as obrigações legais aplicáveis ou o julgamento de uma equipe autorizada.
## O que significa evidência forense em nuvem


Evidência forense em nuvem é informação relevante para responder a uma questão investigativa, acompanhada de contexto que permita avaliar sua origem, integridade, período de cobertura, limitações e relação com outras fontes. Ela pode ser um evento de auditoria, um registro de aplicação, uma imagem de disco, uma configuração versionada, metadados de objeto, uma captura de memória obtida por procedimento suportado, uma cópia de banco de dados, um ticket de mudança ou uma declaração documentada do provedor.

Também é importante distinguir dado original, cópia de trabalho e conclusão analítica. O arquivo exportado é um artefato; a interpretação de que ele indica uma ação é uma hipótese a avaliar; a conclusão ganha sustentação quando se explicam a fonte, a cobertura e as correlações usadas. Um alerta de ferramenta é um sinal para investigar, não a prova completa de um evento. Uma lacuna de telemetria é uma limitação, não evidência de que a atividade não ocorreu.

Em serviços gerenciados, a equipe cliente pode não ter acesso ao disco físico, ao hipervisor, à memória do host ou aos registros internos do provedor. Isso não torna a investigação inviável, mas define seus limites. A equipe deve identificar o que consegue coletar diretamente, o que depende de recursos habilitados antes do incidente e o que só o provedor pode fornecer por processo de suporte apropriado. Não se deve afirmar que uma coleta representa o ambiente inteiro quando ela cobre apenas os registros acessíveis ao cliente.
## Por que o contexto muda a coleta


O plano de controle registra operações de gerenciamento, como criação de recursos, mudanças de configuração, concessão de permissões e chamadas de API administrativas. O plano de dados registra interações com o conteúdo ou o serviço, por exemplo acesso a objetos, consultas, mensagens ou operações de aplicação, de acordo com o produto e sua configuração. A separação é conceitual: o nome, a disponibilidade e o detalhe de cada trilha variam. Um registro do plano de controle pode mostrar que uma permissão foi alterada; não necessariamente demonstra quais dados foram lidos depois. Logs de acesso a dados podem responder a isso, se estavam habilitados, cobriam aquele serviço e foram retidos.

A arquitetura organizacional também afeta a visibilidade. Uma empresa pode ter várias contas, projetos ou assinaturas, serviços compartilhados de identidade, redes centralizadas, ferramentas de segurança externas e workloads administrados por equipes diferentes. A evidência de uma ação pode estar em uma conta central, enquanto o recurso afetado está em outra. A coleta precisa mapear esse caminho e registrar de quais escopos vieram os dados.
## Decisões práticas antes e durante um incidente


A preparação começa por decisões que não devem ficar para o momento de pressão. A organização precisa definir quais funções podem consultar e exportar logs, criar snapshots, alterar retenção, abrir chamados com o provedor e autorizar isolamento. A permissão de leitura não implica automaticamente a permissão de exportação, e ambas devem ser avaliadas pelo princípio do menor privilégio. A equipe deve saber como obter acesso emergencial aprovado sem depender de uma conta pessoal indisponível ou de uma credencial compartilhada.

A política de retenção deve ser revisada por serviço e por tipo de dado. Não basta saber que “os logs ficam disponíveis”. É necessário conhecer o período configurado, os atrasos possíveis, o destino das exportações, as limitações de consulta e o procedimento para recuperar dados arquivados. Registros de auditoria, dados de fluxo de rede, logs de aplicação, eventos de identidade e históricos de configuração podem ter políticas diferentes. A retenção contratual ou padrão não deve ser confundida com a configuração efetivamente ativa na organização.

A sequência entre contenção e coleta depende do risco. Se uma sessão ativa estiver permitindo dano iminente, revogar ou restringir o acesso pode ser necessário antes de uma captura mais ampla. Se houver oportunidade segura, registrar os identificadores da sessão, os eventos recentes e o estado da configuração antes da revogação pode preservar contexto útil. Não há regra universal segundo a qual sempre se coleta tudo primeiro ou sempre se contém primeiro. A decisão e sua justificativa devem ser anotadas, inclusive quando a urgência impede uma coleta ideal.

Toda ação da resposta também pode gerar registros. Revogar uma chave, bloquear uma identidade, alterar uma regra de rede, parar uma instância, criar um snapshot ou mudar uma política pode aparecer nas trilhas e afetar o estado observado. O registro da resposta deve indicar quem agiu, em qual horário e escopo, por qual autorização e com qual resultado. Sem isso, um analista posterior pode atribuir uma mudança defensiva ao ator investigado ou interpretar a condição pós-contenção como condição original.
## Fontes de evidência e o que elas podem responder


### Identidade e autenticação

A equipe deve relacionar identidades humanas, funções assumidas por serviços, contas de automação e credenciais temporárias. Um nome de usuário pode não ser suficiente para diferenciar sessão, papel ou cadeia de delegação. É útil preservar identificadores de principal, contexto de autenticação e eventos de emissão de credencial conforme disponíveis. A existência de um login bem-sucedido demonstra autenticação aceita segundo o sistema, mas não explica sozinha quem controlava o dispositivo nem se a atividade subsequente foi autorizada.

### Auditoria e plano de controle

Para cada fonte, documente se o registro é de gerenciamento ou de acesso a dados, quais operações estão cobertas, quando a cobertura começou, onde os registros são entregues e se houve mudança de configuração. Consultar apenas eventos encontrados por um filtro pode ocultar eventos correlatos com outra grafia, serviço ou escopo. Filtros e consultas devem ser preservados junto com os resultados para que outra pessoa compreenda como a seleção foi feita.

### Acesso a dados e registros de serviço

### Rede, DNS e fluxo de tráfego

Para interpretar os dados, registre topologia e configuração vigentes no período, incluindo associação de interfaces, sub-redes, regras e rotas quando disponíveis. A topologia atual pode não ser a mesma da janela investigada. Histórico de configuração, inventário e eventos de mudança ajudam a entender o que um endereço ou identificador representava naquele momento. A correlação deve considerar fusos e precisão de timestamp, além de atrasos entre ocorrência e entrega do evento.

### Configuração, inventário e histórico

Inventário e relações entre recursos ajudam a evitar erros de escopo. Um identificador pode pertencer a uma conta diferente, ter sido recriado ou ser apenas um nome amigável reutilizado. Preserve identificadores únicos e o contexto de organização, conta, região, projeto e ambiente. Registre também as lacunas conhecidas, como recursos sem agente, serviços fora do inventário ou contas que não enviam telemetria central.

### Snapshots, imagens e cópias de dados

Antes de criar um snapshot, identifique recurso e região, horário, motivo, operador, opção de criptografia e chave associada, permissões de compartilhamento, etiquetas de caso e política de retenção. A criação pode produzir custo e alterar metadados ou trilhas. Um snapshot de banco gerenciado pode oferecer consistência e exportação de formas diferentes de um volume anexado a uma máquina. A equipe deve registrar o tipo exato de cópia, as limitações conhecidas e a relação com o recurso original.

### Ferramentas de segurança e fontes externas

Alertas de detecção, agentes de endpoint, sistemas de gestão de postura, SIEM e plataformas de resposta podem consolidar sinais de várias fontes. Preserve o alerta original, seus campos, regra ou versão quando possível, horário de geração e referências a eventos brutos. Tickets de mudança, aprovações, registros de plantão, inventário de responsáveis, sistemas de identidade corporativa e calendários operacionais podem contextualizar ações legítimas. Esses registros também exigem avaliação: um ticket aprovado demonstra que havia uma autorização registrada, mas não prova que cada ação observada correspondeu ao escopo autorizado. Compare horário, identidade, recursos e parâmetros, sem tratar coincidência temporal como confirmação suficiente.
## Papéis, responsabilidades e limites


A equipe de resposta coordena prioridades, decide com as áreas responsáveis a ordem entre contenção e coleta e mantém o registro cronológico. A equipe de plataforma ou operações conhece dependências, escopo de contas e impacto de mudanças. Segurança de identidade ajuda a interpretar autenticação, sessões e delegações. Engenharia de aplicação explica eventos do produto e seus registros. Jurídico, privacidade e conformidade orientam preservação, acesso e compartilhamento quando houver obrigações específicas. A divisão exata varia conforme a organização, mas os responsáveis precisam ser nomeados antes do incidente.

O provedor opera partes da infraestrutura e pode manter registros internos inacessíveis ao cliente. O contrato, o modelo de serviço e os canais de suporte definem quais informações podem ser solicitadas e em que condições. Um chamado não garante que o provedor disponha de dado específico, que possa fornecê-lo ou que o prazo atenda à investigação. A equipe deve registrar protocolo e escopo da solicitação sem apresentar como fato qualquer informação ainda não recebida.

A cadeia de custódia é um registro prático de posse e manuseio: o que foi coletado, por quem, quando, de qual fonte e escopo, por qual método, onde foi armazenado e a quem foi transferido. Em ambiente distribuído, ela também deve identificar filtros, exportações parciais, consultas e transformações. Não é um ritual que torna um dado automaticamente confiável; torna o caminho de obtenção mais transparente e passível de revisão.
## Cenários contrastantes para orientar escolhas


### Hipótese: trilha administrativa centralizada e retenção conhecida

Imagine que uma organização detecte uma alteração inesperada de política e já envie eventos administrativos das contas a um destino central. A equipe precisa descobrir qual identidade fez a mudança, se havia uma alteração aprovada e quais recursos foram afetados.

A centralização reduz o risco de perder eventos quando um recurso é alterado, mas não resolve lacunas de plano de dados, contas não integradas ou configurações modificadas antes do período retido. A equipe deve confirmar que a conta, região, categoria de evento e intervalo estão cobertos. O fato de a busca não retornar um evento é conclusivo somente dentro dos limites comprovados da fonte e da consulta.

### Hipótese: serviço recém-criado sem logs de acesso a dados

Considere um serviço de armazenamento criado recentemente, com auditoria administrativa habilitada, mas sem registro de leituras de objeto. Uma chave associada aparece em atividade suspeita. Os eventos existentes talvez mostrem mudanças de política, mas não quais objetos foram acessados.

Nesse cenário hipotético, ativar logs agora melhora observabilidade futura, mas não recria automaticamente o histórico que não foi coletado. A equipe deve separar a preservação retrospectiva da melhoria prospectiva. Uma configuração posterior não autoriza concluir que houve ou não houve acesso anterior.

### Hipótese: contenção urgente com impacto na evidência

Suponha que uma identidade de automação esteja realizando alterações destrutivas em recursos de produção. A equipe revoga a sessão e limita a função para interromper o dano, enquanto registra o contexto disponível e a urgência da decisão.

A trilha resultante pode mostrar a ação do ator investigado e a revogação realizada pela equipe. Sem anotação de resposta, ambas podem se misturar na sequência. A equipe não deve atrasar uma contenção urgente só para obter uma coleta ideal, mas deve documentar que a intervenção limitou a preservação e quais perguntas ficaram sem resposta.

### Hipótese: contas distribuídas e responsabilidade compartilhada

Imagine uma empresa com contas operadas por várias equipes e identidade centralizada. Um evento aponta para uma função assumida a partir de uma conta de rede, enquanto o recurso afetado está em outra. A investigação precisa ligar autenticação, delegação e alteração.

Nesse cenário hipotético, o mapa de contas, os responsáveis e os destinos de logs fazem parte da evidência contextual. Se alguma conta não estiver acessível, registre a limitação e o processo de solicitação. Não atribua automaticamente a ação ao proprietário da conta ou à pessoa cujo nome aparece no primeiro registro.
## Erros comuns e como evitá-los


Um erro recorrente é assumir que o provedor mantém todos os registros por tempo indefinido. Retenção pode variar por serviço, tipo de evento, plano contratado, configuração, região e destino de exportação. A prevenção é manter um catálogo de fontes e prazos, validar periodicamente a entrega e preservar cedo os dados relevantes quando houver incidente.

A equipe também pode confundir disponibilidade com cobertura. Uma fonte configurada hoje não prova que estava ativa no período investigado. Verifique data de habilitação, alterações de política, destino, falhas de entrega e permissões de escrita. Um bucket de logs existente pode ter sido criado depois do fato, estar recebendo somente algumas contas ou ter sofrido interrupção.

Mudanças defensivas sem anotação são outra fonte de ambiguidade. Bloqueios, revogações e alterações de rede afetam o ambiente e geram eventos. Um registro operacional com justificativa, autorização e resultado permite separar intervenção legítima de atividade suspeita. Ele também ajuda a equipe seguinte a entender por que a situação observada difere do estado anterior.

Por fim, a equipe pode interpretar ausência de evidência como evidência de ausência. Para fazer uma afirmação negativa com rigor, é preciso saber que fonte cobria o evento esperado, em todo o escopo relevante, no intervalo correto, com relógio e entrega adequados e sem lacuna conhecida. Se essas condições não forem demonstráveis, a formulação correta é que os dados disponíveis não mostraram o evento, com a limitação descrita.
## Critérios para avaliar a qualidade da coleta


Uma conclusão deve indicar o nível de suporte: confirmado diretamente por uma fonte, corroborado por fontes independentes, provável com ressalvas ou ainda hipótese. “Confirmado” também precisa de escopo: confirmado que uma chamada foi registrada com determinado principal e recurso não é necessariamente o mesmo que confirmado quem operou a credencial ou qual intenção havia. A linguagem precisa evita converter um registro técnico em alegação mais ampla do que ele sustenta.

A linha do tempo deve apontar horários originais e eventual normalização para um fuso comum, conservando os valores de origem. Para ordenar eventos de fontes diferentes, considere diferenças de relógio, atraso de ingestão e processamento assíncrono. Uma sequência visual pode sugerir causalidade, mas a proximidade temporal sozinha não a estabelece. Registre correlações como correlações e explicite o dado que sustenta cada ligação.
## Exercício de mesa ou laboratório autorizado


Um exercício seguro pode usar uma conta de laboratório isolada, recursos fictícios e dados sintéticos, sem testar controles de terceiros nem produzir acesso não autorizado. O objetivo é verificar se a equipe consegue localizar, preservar e interpretar evidências dentro do escopo autorizado. Antes do exercício, defina proprietário, janela, recursos, limites, contatos e critério para interromper a atividade. Não use dados reais de clientes se não houver autorização e controles apropriados.

Em seguida, introduza uma decisão de contenção: a identidade de teste permanece ativa, mas a alteração pode expor conteúdo de laboratório. A equipe decide se preserva eventos adicionais antes de revogar o acesso, documentando urgência, autorização, risco e efeito sobre a evidência. O facilitador inclui um evento produzido pela própria resposta para testar se a equipe separa ação de contenção da atividade investigada.

O exercício não deve premiar uma resposta única quando a situação admite escolhas razoáveis. Deve revelar dependências: permissões ausentes, logs não centralizados, responsáveis não identificados, procedimento de snapshot desatualizado ou confusão sobre quem pode contatar o provedor. Cada achado vira uma ação concreta com responsável e prazo interno definido pela organização. O laboratório é uma validação do processo, não uma prova de que o ambiente de produção está coberto.
## Roteiro de implementação


### 1. Inventariar escopos e serviços

### 2. Mapear fontes, cobertura e retenção

Para cada serviço, identifique eventos administrativos, eventos de acesso a dados, logs de identidade, rede, aplicação e configuração disponíveis. Anote como são habilitados, quais campos contêm, onde chegam, qual é a retenção observada e quais lacunas são conhecidas. Consulte a documentação atual do serviço e valide a configuração real, pois capacidade oferecida e configuração ativa são coisas diferentes.

### 3. Definir permissões e armazenamento de evidências

### 4. Escrever procedimentos por tipo de fonte

Descreva como preservar eventos do plano de controle, exportar logs de dados, obter histórico de configuração e criar snapshots suportados. Inclua escopo, campos, filtros, formatos, horários, verificações e impactos operacionais. O procedimento deve dizer quais ações exigem autorização e quais informações serão registradas. Não prometa uma aquisição idêntica para todos os serviços.

### 5. Integrar contenção e preservação

### 6. Preparar a relação com o provedor

Mantenha os canais e requisitos de suporte acessíveis aos responsáveis autorizados. Registre quais informações podem ser solicitadas, como descrever o escopo temporal e os identificadores relevantes e como guardar a resposta. Essa preparação não pressupõe que o provedor possa fornecer qualquer item; permite formular pedidos precisos e acompanhar limitações.

### 7. Revisar e exercitar

### 8. Aprimorar a partir de incidentes e mudanças

Após um incidente ou exercício, registre lacunas sem expor detalhes além do necessário. Ajuste cobertura, retenção, documentação, treinamento e responsabilidades. A melhoria não consiste em coletar tudo indiscriminadamente: consiste em conseguir responder às perguntas relevantes com dados proporcionais, preservados e compreensíveis. Reavalie também o custo operacional, o acesso a dados sensíveis e os efeitos de retenção prolongada.
## Perguntas frequentes


### O provedor de nuvem guarda todos os logs?

### Snapshot basta para preservar uma máquina?

Não necessariamente. Um snapshot pode preservar parte do estado persistente conforme o serviço, mas pode não incluir memória, buffers, estado de outros volumes ou contexto de rede. Registre o tipo de snapshot, a consistência oferecida e as limitações. Combine-o com eventos e configurações pertinentes quando a pergunta investigativa exigir.

### A equipe deve coletar antes de conter?

### Um log prova quem estava usando a conta?

Em geral, ele pode registrar uma identidade, sessão ou credencial reconhecida pelo serviço. Isso não identifica necessariamente a pessoa que controlava o dispositivo nem a intenção. Correlacione autenticação, delegação, origem, endpoint, histórico de mudança e contexto operacional, descrevendo o que permanece incerto.

### Como lidar com logs que contêm dados pessoais ou segredos?

### O que fazer quando a conta investigada pode apagar as evidências?

Preserve os registros relevantes em destino controlado ao qual a conta não tenha permissão de alterar, conforme a arquitetura e as autorizações existentes. Avalie acesso administrativo, retenção e cópias centralizadas. A medida deve ser coordenada por responsáveis autorizados e documentada; não presuma que um destino central seja imutável sem verificar seus controles.

### É necessário calcular hash de tudo?

### Como relatar uma lacuna de evidência?

Descreva qual fonte seria necessária, se estava habilitada, qual escopo e período cobria, que prazo ou falha afetou a disponibilidade e quais fontes alternativas foram examinadas. Separe a ausência de registro da conclusão sobre a ausência da ação. Diga explicitamente o que os dados permitem afirmar e o que não permitem.
## Resposta e recuperação também fazem parte do registro


A preservação não termina quando a equipe exporta os primeiros eventos. Durante recuperação, recursos podem ser recriados, imagens restauradas, políticas corrigidas, chaves rotacionadas e integrações reconfiguradas. Essas medidas podem eliminar ou substituir estados úteis para comparação. Sempre que houver risco de perda de contexto, preserve configurações e identificadores anteriores de maneira proporcional antes de reconstruir, sem comprometer a restauração segura do serviço.

O encerramento também requer uma decisão sobre retenção e descarte. Evidências podem conter dados sensíveis e não devem ficar acessíveis indefinidamente por inércia. A organização deve seguir suas políticas e obrigações aplicáveis, documentar quem autorizou a retenção ou eliminação e conservar os materiais necessários pelo período definido. A cadeia de custódia continua relevante enquanto o material existir e for usado para decisões.

Uma resposta madura não promete reconstruir cada ação com certeza absoluta. Ela comunica achados apoiados, hipóteses em avaliação, limitações de telemetria e decisões tomadas sob urgência. Essa distinção protege a qualidade técnica e evita que uma narrativa mais categórica do que os dados sejam usados para orientar correções erradas. Também permite priorizar melhorias concretas na próxima rodada de preparação.
## Relação com o capítulo de resposta, contenção e recuperação


No capítulo 8 da versão original do livro, Hiago Kin Levi trata de operações de resposta, contenção e recuperação. Esse enquadramento ajuda a entender a evidência em nuvem como parte do trabalho operacional: preservar o que pode desaparecer, conter o risco, registrar as intervenções e recuperar o serviço com contexto suficiente para aprender. O livro de Hiago Kin Levi, publicado pela Editora Brasport, oferece uma referência relacionada a esse tema. Ele não substitui documentação técnica atualizada de cada serviço, treinamento prático nem julgamento da equipe diante das condições específicas do incidente.

A aplicação central é simples de enunciar e exige preparação para ser executada: conhecer permissões de leitura e exportação, validar retenção por serviço, definir procedimentos de snapshot e saber onde os eventos do plano de controle são preservados. No incidente, agir com rapidez sem apagar a distinção entre evidência, alerta, hipótese e ação defensiva. A nuvem muda depressa; uma investigação confiável depende de capturar não apenas dados, mas também o contexto que explica como eles foram obtidos e o que ainda não é possível concluir.
