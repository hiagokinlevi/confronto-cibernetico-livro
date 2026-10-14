# Logs essenciais para detectar invasões



## A pergunta que organiza a busca

Quais ações de um invasor precisam deixar evidência observável para que a equipe perceba uma intrusão a tempo de investigá-la? Essa é uma pergunta mais útil do que procurar uma lista universal de logs. A resposta depende dos sistemas utilizados, dos caminhos de acesso plausíveis, dos controles existentes e do tempo que a organização leva para reconhecer uma atividade indevida. Um registro é essencial quando ajuda a identificar uma ação relevante, reconstruir sua sequência ou decidir uma resposta, e quando sua coleta e retenção permitem de fato encontrá-lo.



## O que um log pode demonstrar

Log é um registro produzido por um sistema sobre uma ocorrência: uma tentativa de autenticação, uma alteração, uma conexão, uma execução ou uma falha, por exemplo. Em geral, os registros incluem alguns campos de tempo, origem, identidade, objeto e resultado. A forma e a precisão desses campos variam por produto e configuração. Um evento informa o que aquele componente observou sob determinadas condições; não é uma visão completa do ambiente nem, por si só, uma conclusão sobre intenção.

Essa distinção separa evidência, alerta e prova. Evidência é um dado relevante para uma hipótese; um alerta é uma regra que sinaliza uma combinação de dados; prova, no uso cotidiano, costuma significar uma conclusão suficientemente sustentada para uma decisão específica. Um alerta de autenticação incomum é um motivo para triagem, não demonstra que houve invasão. A ausência de um evento tampouco prova que a ação não ocorreu: a auditoria pode estar desativada, a coleta pode ter falhado, o sistema pode não registrar aquela ação ou a janela de retenção pode ter expirado.



## Contexto: observar ações, não colecionar produtos

A seleção de fontes começa pelo inventário do que a organização precisa proteger. Um servidor de identidade, uma estação de trabalho, um serviço de nuvem e um banco de dados têm atividades e formatos distintos. Mapear ativos, responsáveis, dados tratados, exposição e criticidade torna possível priorizar. Um log de alteração em uma conta com acesso a dados sensíveis pode ser mais importante do que uma sequência extensa de eventos rotineiros em uma máquina de baixo impacto.

Uma matriz de cobertura pode ser mantida em texto ou em ferramenta de gestão: ação de interesse, ativo ou serviço, fonte geradora, campos necessários, responsável pela coleta, prazo de disponibilidade, consulta ou regra de triagem, lacuna conhecida e teste mais recente. O valor não está no formato da matriz, mas em expor relações ausentes. Se a hipótese envolve uso de uma conta privilegiada, por exemplo, talvez seja necessário combinar autenticação, atribuição de papel, sessão administrativa e atividade no recurso. Um registro de login sozinho não conta o que ocorreu depois.



## Decisões antes de escolher fontes

A primeira decisão é o que precisa ser detectado e qual atraso é aceitável. Uma organização que só analisa eventos no dia seguinte pode priorizar retenção e investigação, mas não deve chamar isso de detecção imediata. Para ações de alto impacto, pode ser necessário alertar em minutos; para atividades raras e difíceis de contextualizar, uma busca retrospectiva bem preservada pode ser mais realista. O tempo de ingestão, processamento, triagem e escalonamento precisa ser medido no próprio ambiente.

A terceira decisão é onde manter a cópia e quem pode administrá-la. Um invasor com controle sobre o sistema de origem pode tentar alterar ou apagar os registros locais. Encaminhamento para armazenamento central com controle de acesso separado reduz essa dependência, desde que o caminho de coleta também seja monitorado. A segregação não torna os dados imutáveis por definição: privilégios administrativos, políticas de retenção e exclusão, credenciais do coletor e trilhas de auditoria precisam ser examinados. A proteção deve incluir cópias, chaves, contas de serviço e procedimentos de exportação.

Por fim, considere se há pessoas e ferramentas capazes de usar a fonte. Telemetria sem responsável, documentação, acesso autorizado e consultas testadas acumula volume sem criar capacidade de resposta. A disponibilidade também importa: filtros, limites de API, quotas, custo de consulta, dependência de um fornecedor e exportação em formato utilizável podem restringir uma investigação justamente durante um incidente. Avaliar esses fatores antes da contratação evita confundir recurso anunciado com cobertura operacional.



## Fontes de evidência prioritárias

### Identidade e autenticação

Serviços de identidade e autenticação registram tentativas aceitas ou recusadas, fatores utilizados, emissão e revogação de sessão, mudanças em credenciais e algumas decisões de acesso condicional. Campos úteis podem incluir identidade, resultado, método, origem, dispositivo, aplicativo, identificador da sessão e motivo da recusa. O conjunto depende do provedor e da configuração. Preserve os eventos bem-sucedidos e os fracassados: falhas repetidas podem ajudar a explicar uma sequência, mas não devem ser tratadas como prova isolada de tentativa maliciosa.

### Privilégios e mudanças de configuração

Mudanças em grupos, papéis, políticas de acesso, delegações, contas de serviço e permissões administrativas merecem registro explícito. É importante capturar ator, alvo, estado anterior ou ação efetuada, estado novo quando disponível, horário e resultado. A simples existência de um administrador não explica quando ou por que um privilégio foi concedido. A trilha deve permitir determinar quem solicitou, quem aprovou e qual processo de mudança autorizou a operação, conforme os controles da organização.

### Execução em estações e servidores

Telemetria de processo pode registrar nome, caminho, linha de comando, usuário, horário, processo pai, hash ou assinatura, dependendo da plataforma e do agente. Esses campos ajudam a contextualizar execução incomum, mas trazem custo e cuidados de privacidade: argumentos podem conter nomes de arquivos, parâmetros internos ou valores sensíveis. Defina quais dados são coletados, quem acessa e como são tratados. Evite copiar segredos de comandos para painéis ou alertas amplamente visíveis.

### Rede, DNS e acesso remoto

Registros de firewall, proxy, VPN, DNS, balanceadores e fluxos de rede descrevem aspectos diferentes da comunicação. Podem mostrar origem e destino, horário, porta ou protocolo, decisão, volume aproximado ou nome consultado. Em geral, não mostram o conteúdo completo e não identificam automaticamente a pessoa por trás de um endereço. NAT, proxies compartilhados, endereços dinâmicos e túneis complicam a atribuição. Relacione os dados de rede a identidade, dispositivo, sessão e inventário, sem inferir autoria apenas pelo IP.

### Aplicações, bancos de dados e serviços de nuvem

Aplicações críticas podem registrar autenticação própria, acesso a funções, exportação, mudanças administrativas e falhas. Se a organização usa login federado, o provedor de identidade pode descrever a autenticação enquanto a aplicação descreve a ação realizada. São camadas distintas. Confirme se os identificadores de usuário coincidem e se há um identificador de requisição ou sessão para correlacionar eventos sem expor conteúdo desnecessário.

Serviços de nuvem costumam separar eventos administrativos, acesso a dados, autenticação e atividade de workloads. Habilitar uma trilha de mudanças de configuração não garante que leituras de objetos ou chamadas de aplicação estejam cobertas. Verifique cada categoria, região ou conta pertinente, a continuidade da entrega e quem pode interromper ou excluir a trilha. Confirme ainda se os eventos de uma assinatura de teste aparecem no destino esperado, com campos e atraso compreendidos.



## Relacionar os eventos sem forçar conclusões

A correlação começa pela qualidade temporal. Sincronize relógios dos sistemas quando possível, registre fuso e precisão, e saiba se o horário do evento representa ocorrência, recebimento ou processamento. Em uma plataforma central, esses tempos podem diferir. Para reconstruir sequência, mantenha os campos originais e indique qual horário foi usado. Em caso de atraso ou reprocessamento, não trate a ordem de chegada como ordem de execução.

Uma linha do tempo útil anota tanto o observado quanto o inferido. “O provedor registrou uma sessão aceita às 09h” é observação. “A mesma sessão abriu o painel administrativo” pode ser uma inferência, que precisa de um identificador que conecte as ações. “O invasor alterou a regra” é uma conclusão que exige evidência e exclusão de mudanças autorizadas. Marcar explicitamente essas categorias reduz o risco de uma hipótese inicial virar fato por repetição em relatórios.



## Papéis e responsabilidades

A equipe de segurança define perguntas de detecção, prioriza hipóteses, mantém consultas e coordena triagem. Ela não deve presumir o formato interno de cada produto sem consultar quem o opera. Operações de TI e responsáveis por aplicações habilitam auditoria, explicam eventos legítimos, comunicam mudanças e mantêm agentes e conectores. Arquitetura e engenharia incorporam requisitos de observabilidade em serviços novos, evitando remendos após a entrada em produção.

Um responsável nominal por cada fonte evita que “a segurança” seja dona abstrata de um conector que ninguém consegue corrigir. Um modelo operacional pode designar quem habilita, quem valida, quem monitora saúde, quem aprova mudança, quem investiga e quem decide contenção. Em organizações menores, uma pessoa pode acumular papéis; ainda assim, convém registrar a responsabilidade e a substituição em ausências. A separação de funções deve ser proporcional ao risco e à capacidade real.



## Três consultas defensivas que vale testar

As consultas devem partir de dados autorizados e de um ambiente de teste ou escopo aprovado. O objetivo é confirmar que eventos representativos chegam, podem ser interpretados e aparecem para a equipe certa. Não é necessário executar técnicas intrusivas: alterações benignas de teste, contas controladas e simulações aprovadas podem validar o fluxo. Registre a janela, o ativo, o identificador esperado e quem autorizou o exercício; remova os dados de teste conforme a política.

### Login fora do padrão

Uma consulta simples pode agrupar autenticações bem-sucedidas por identidade, dispositivo, origem, aplicativo e período, identificando combinações novas ou horários incomuns em relação à linha de base disponível. O resultado é uma fila de revisão, não uma lista automática de contas comprometidas. Exclua ou rotule fontes de automação conhecidas, considere turnos e fusos, e mostre os dados que justificaram a sinalização. Uma regra transparente é mais fácil de validar do que uma pontuação sem explicação.

Teste a consulta com um acesso benigno de uma conta de laboratório em um dispositivo e horário documentados, se as políticas permitirem. Confirme se o evento possui resultado, identidade, origem e horário, e se o atraso de ingestão está dentro do esperado. Em paralelo, registre casos legítimos que parecem incomuns, como uma VPN nova aprovada, para avaliar falsos positivos sem apagar o alerta. A consulta precisa permitir ao analista abrir contexto suficiente para decidir o próximo passo.

### Criação de conta com privilégio

Uma consulta pode procurar criação de identidade, atribuição a grupo ou papel elevado e mudanças de política em uma janela definida, identificando ator, alvo e resultado. Como as plataformas registram essas operações com nomes diferentes, valide os tipos de evento na documentação do fornecedor e em eventos reais do ambiente. Correlacione a mudança a uma solicitação ou aprovação interna quando esse processo existir. Não trate toda conta privilegiada recém-criada como maliciosa; a falta de justificativa acessível é um sinal de triagem.

Em teste autorizado, use um fluxo previsto para criar e remover uma conta ou conceder e revogar um papel controlado. Confirme que ambos os lados da mudança aparecem, que os identificadores não se perdem na normalização e que a consulta diferencia operador, alvo e aprovação. Guarde o evento válido e documente o evento ausente se algum estágio não chegar. Não faça alterações em produção para testar sem autorização explícita e coordenação operacional.

### Execução incomum

Uma regra defensiva pode destacar processos raros para determinado host, usuário ou função, combinando caminho, assinatura, processo pai e horário quando esses campos forem coletados. Raridade é contexto, não veredito: atualização de software, ferramenta de suporte ou trabalho de desenvolvimento pode ser incomum e aprovado. A consulta deve permitir restringir por população comparável e explicar por que o registro apareceu. Se linha de comando for coletada, limite a visualização e o acesso por causa de possíveis dados sensíveis.

A validação pode usar um programa benigno aprovado, com nome conhecido e execução em máquina de laboratório, sem testar payloads ou evasão. Confirme que a fonte registra processo e usuário, que o agente mantém cobertura e que a busca retorna o evento esperado. Em seguida, verifique um host de teste sem agente ou com telemetria deliberadamente desabilitada, se o laboratório permitir, para comprovar que a lacuna é visível como falha de cobertura. O resultado importante é conhecer tanto a detecção quanto o limite.



## Cenários contrastantes para orientar a triagem

No primeiro cenário hipotético, uma pessoa autorizada viaja e acessa um serviço por uma rede que ainda não aparece no histórico. O provedor registra login bem-sucedido, dispositivo conhecido e segundo fator; a equipe encontra uma aprovação de viagem e horário compatível. O alerta de novidade continua correto como sinal técnico, mas o conjunto de contexto sustenta uma explicação legítima. O tratamento é documentar a decisão, ajustar contexto se apropriado e evitar uma exceção permanente ampla que esconda futuras mudanças.



## Retenção, perda e saúde da coleta

A retenção deve ser calculada com base no ciclo real de descoberta e resposta. Se incidentes são identificados semanas depois, eventos disponíveis por poucos dias podem não revelar a entrada inicial nem a progressão. A organização pode comparar datas de atividade suspeita conhecida, descoberta, preservação e expiração para avaliar a lacuna. Não precisa supor um prazo universal: o prazo adequado depende da ameaça considerada, de obrigações, custo, privacidade e capacidade de busca.

O plano de retenção precisa ser testado. Confirme que um evento de referência continua consultável após o período de busca quente, que a exportação pode ser lida e que a restauração não depende exclusivamente de uma conta que poderia estar comprometida. Testes de recuperação devem usar dados permitidos e não interromper a operação. Documente quem pode estender retenção durante um caso, como preservar dados antes da expiração e qual procedimento evita mudanças destrutivas na fonte original.



## Erros comuns e como corrigi-los

Um erro recorrente é tratar volume ingerido como sinônimo de cobertura. A ingestão total pode crescer enquanto uma fonte crítica está desligada. Corrija isso mantendo inventário por fonte e ativo, expectativa de atualização e alerta de saúde com responsável. Outro erro é ativar auditoria sem testar uma ocorrência conhecida. Uma configuração habilitada na interface pode não entregar eventos por falta de permissão, escopo, região ou conectividade. Valide de ponta a ponta e guarde a evidência do teste.

Por fim, alertas podem ser tratados sem registrar a decisão. Sem anotação de contexto, evidência consultada, escalonamento e motivo de encerramento, a organização repete a mesma investigação e não aprende. A solução não é forçar uma narrativa conclusiva. Uma conclusão “inconclusiva por ausência de telemetria” é operacionalmente valiosa se apontar a fonte e o período que faltaram. O objetivo é tornar o estado de conhecimento explícito.



## Como avaliar se a cobertura é útil

Avalie a cobertura com perguntas verificáveis. Para cada ação prioritária, a equipe consegue apontar a fonte e os campos necessários? O evento chega dentro do atraso aceito? Está disponível durante todo o período de retenção escolhido? Há responsável por corrigir falhas? Existe uma consulta que um analista consegue executar e interpretar? A resposta a cada pergunta deve estar apoiada em configuração, evento de teste ou registro de operação, não apenas em uma declaração de que o produto oferece o recurso.



## Exercício de mesa ou laboratório autorizado

Um exercício de mesa pode testar decisões sem alterar sistemas. Escolha um cenário hipotético aprovado, como uma conta administrativa usada fora do padrão, e entregue aos participantes uma linha do tempo com lacunas planejadas: autenticação disponível, mudança de papel atrasada, atividade da aplicação sem identificador de sessão. Pergunte que conclusão é sustentada, que informação ainda falta, quem pode obtê-la e qual decisão pode ser tomada com o nível atual de confiança. Não peça que os participantes adivinhem um invasor ou uma ferramenta.



## Roteiro de implementação

### 1. Defina prioridades e limites

Liste ativos e serviços de maior impacto, identidades administrativas, dados sensíveis e dependências críticas. Para cada um, descreva ações que exigem detecção ou investigação e o prazo de resposta esperado. Registre pressupostos e limites: serviços fora do controle direto, retenção imposta pelo fornecedor, sistemas sem agente ou dados que não podem ser coletados. Essa definição impede que o projeto comece pela ferramenta e termine sem pergunta operacional.

### 2. Verifique a fonte na origem

Consulte a documentação vigente do sistema e confirme quais eventos e campos são realmente produzidos, quais dependem de licença ou política, e como são filtrados. Envolva o responsável pelo serviço para validar impacto, volume e dados sensíveis. Ative a auditoria necessária segundo o processo de mudança da organização e registre configuração, escopo e data. Não conclua cobertura a partir do nome de uma opção de console.

### 3. Transporte e proteja

Configure coleta com credenciais de menor privilégio compatível, conexão protegida e monitoramento de erros. Encaminhe para um repositório com acesso controlado e trilha administrativa. Separe funções quando possível entre quem pode alterar a fonte e quem pode excluir a cópia. Documente dependências, renovação de credenciais, limites de API, fila, destinos e resposta a interrupção. Faça uma restauração ou leitura de arquivo em teste autorizado.

### 4. Normalize preservando contexto

Defina convenções para tempo, identidade, host, resultado e nomes de campos, mantendo os valores originais necessários para auditoria. Documente conversões, fusos, campos derivados e perdas conhecidas. Faça validação com exemplos diferentes: sucesso, falha, identidade federada, conta de serviço e eventos com atraso. A normalização precisa tornar consultas consistentes sem ocultar semântica específica do produto.

### 5. Construa consultas pequenas e explicáveis

Comece pelas perguntas prioritárias e crie consultas que retornem os campos necessários para uma decisão. Inclua contexto e instruções de triagem, proprietário e versão. Teste com evento representativo e caso legítimo que possa parecer anômalo. Ajuste para que a equipe veja por que o item foi sinalizado. Uma regra de baixa complexidade e bem entendida costuma ser mais sustentável que uma lógica impossível de revisar.

### 6. Monitore a observabilidade

### 7. Exercite, documente e revise



## Perguntas frequentes

### Quais logs devo habilitar primeiro?

Comece por autenticação, alterações e uso de privilégios, execução em ativos relevantes, mudanças administrativas e atividade dos serviços que armazenam dados críticos. Ajuste a ordem ao ambiente e aos riscos. Para cada fonte, valide campos, cobertura, atraso e retenção com evento conhecido. Um serviço importante sem registro de atividade pode ter prioridade maior do que uma categoria abundante e pouco útil.

### Logs de login bastam para investigar uma conta comprometida?

Não. Eles podem indicar tentativas e sessões, mas normalmente não descrevem todas as ações posteriores. Correlacione a sessão com dispositivo, processos, alterações de privilégios, atividade da aplicação, rede e recursos acessados, conforme disponibilidade. Se faltarem identificadores para relacionar as camadas, registre a limitação e evite afirmar mais do que os dados sustentam.

### Como saber se um login é realmente suspeito?

Considere identidade, função, dispositivo, origem, horário, método, política aplicada e comportamento posterior. Compare com padrões relevantes, valide mudanças legítimas e consulte o proprietário da conta ou do serviço pelo canal estabelecido. “Novo” significa que não foi observado na referência escolhida; não significa automaticamente malicioso. Um alerta deve acelerar a pergunta certa, não substituir a investigação.

### Por quanto tempo devo guardar os registros?

Não existe prazo universal. Considere o intervalo entre a atividade e a descoberta, o tempo necessário para resposta, obrigações aplicáveis, privacidade, custo e capacidade de restaurar dados. Compare com a experiência real de incidentes e exercícios. Documente a justificativa e reveja-a quando o tempo de descoberta, o ambiente ou os requisitos mudarem.

### A ausência de um evento indica que a ação não aconteceu?

Não necessariamente. Pode indicar ausência de atividade, auditoria desligada, escopo incompleto, perda de transporte, filtro, falha de parsing ou expiração. Primeiro confirme a saúde e a cobertura da fonte no período; depois procure registros independentes. Se não for possível determinar, classifique como inconclusivo e trate a lacuna operacionalmente.

### Preciso registrar todas as linhas de comando e consultas?

Não por padrão. Campos detalhados podem ajudar a investigação, mas também elevar volume e expor conteúdo sensível. Defina finalidade, necessidade, acesso, retenção e controles antes da coleta. Avalie se eventos de operação privilegiada, acesso a dados ou certos tipos de ação oferecem contexto suficiente com menor exposição. A decisão depende do ambiente e deve ser validada com as áreas responsáveis.

### Como reduzir falsos positivos sem ocultar atividade real?

Entenda a causa de cada alerta, inclua contexto de função e mudança aprovada, revise a população de comparação e limite exceções por escopo e prazo. Preserve uma amostra de eventos legítimos e reavalie a regra com casos de teste. Não silencie uma fonte inteira por causa de ruído; investigue se o problema está no campo, no limiar, na linha de base ou na própria pergunta de detecção.

### Como lidar com dados de fornecedores?

Confirme quais eventos o fornecedor oferece, por quanto tempo, em que formato e com qual atraso. Verifique permissões, escopo, exportação, limites e custos, incluindo o que ocorre se a assinatura mudar. Documente lacunas que a organização não controla e teste a chegada de eventos representativos. Uma promessa comercial não substitui validação técnica no tenant e plano efetivamente usados.



## Relação com o capítulo do manuscrito

No capítulo 6, “Black Teams na identificação e resposta a incidentes”, do livro de Hiago Kin Levi, publicado pela Editora Brasport, a relação útil com este tema está na conexão entre identificação e resposta: registros servem para formular e revisar hipóteses, construir uma linha do tempo e apoiar decisões coordenadas. A equipe precisa saber o que observou, o que ainda é hipótese e que informação pode mudar a decisão. A leitura pode oferecer contexto para discutir papéis e dinâmica de resposta, mas uma obra não substitui documentação técnica atualizada dos produtos, treino prático nem julgamento da equipe diante do ambiente concreto.
