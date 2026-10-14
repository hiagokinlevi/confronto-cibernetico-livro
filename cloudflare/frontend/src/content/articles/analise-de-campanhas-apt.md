# Análise de campanhas APT

## Pergunta central: o que permite reconhecer uma campanha persistente sem confundir semelhança com identidade?

A pergunta útil não é apenas “qual grupo fez isso?”. É: que sequência de atividades as evidências sustentam, que objetivos parecem orientá-la, quais alternativas cabem e que decisão operacional é necessária agora? Essa formulação desloca o foco da caça a um nome de ator para a compreensão do risco no ambiente. A atribuição pode ser relevante para inteligência estratégica, comunicação executiva ou cooperação externa, mas raramente é necessária para conter uma conta comprometida, preservar registros ou reduzir uma exposição.

## O que significa analisar uma campanha

### Campanha, incidente e ator são conceitos diferentes

Um incidente é um evento ou conjunto de eventos que exige avaliação e resposta, como acesso indevido confirmado ou comprometimento de um equipamento. Uma campanha é uma construção analítica que agrupa atividades relacionadas por um objetivo, um encadeamento, uma infraestrutura, uma seleção de alvos ou outros vínculos demonstráveis. O agrupamento é uma hipótese de trabalho que pode mudar. Um ator é uma entidade ou conjunto de operadores aos quais se atribui atividade, com diferentes níveis de confiança. Não se deve tratar essas três categorias como sinônimos.

APT é um rótulo amplo, usado em relatórios e conversas profissionais para caracterizar operações com recursos, objetivos ou persistência relevantes. O termo não é uma certificação universal e seus critérios variam entre organizações. Algumas fontes usam identificadores próprios; outras agrupam conjuntos de atividades sob nomes distintos. Um nome de grupo pode representar um cluster analítico, uma unidade operacional, uma campanha ou uma convenção editorial. Ao comparar fontes, registre qual significado o fornecedor atribui ao nome em vez de presumir equivalência.

### Por que a sequência importa mais que o artefato isolado

A leitura temporal também distingue um evento esperado de uma mudança relevante. Uma conta administrativa pode iniciar sessão com frequência; o horário, a origem, o dispositivo, o tipo de autenticação e as ações seguintes qualificam o evento. Um processo legítimo pode fazer conexões externas; o destino, o pai do processo, o usuário, a assinatura e a ocorrência em outros dispositivos alteram sua interpretação. O valor analítico emerge das relações, não de um adjetivo aplicado ao objeto.

## Contexto e limites da atribuição

### Nomes, clusters e confiança analítica

Relatórios públicos podem usar nomes diferentes para atividades que outra fonte considera relacionadas. Também podem reutilizar o mesmo nome com escopo ampliado à medida que surgem novos dados. Ao registrar uma referência, preserve o nome original, a fonte, a data, a definição fornecida e o nível de confiança declarado. Se houver aliases, descreva a relação como apresentada pela fonte e não a transforme em equivalência definitiva por conveniência editorial.

A confiança deve refletir a evidência, não a gravidade do incidente nem a pressão para dar uma resposta simples. Pode ser expressa em linguagem calibrada — baixa, moderada ou alta — acompanhada do motivo e das principais lacunas. Se a organização adotar uma escala própria, documente-a. “Alta confiança” sem critério compartilhado vira um selo retórico. Uma hipótese pode ser útil para orientar a busca mesmo com confiança baixa, desde que seja identificada como hipótese e não apresentada como fato.

### Fontes públicas e atualização

Registre data de publicação e de observação quando ambas estiverem disponíveis. Contexto público orienta buscas, mas não confirma que a atividade ocorreu no ambiente local.

## Da pergunta de investigação à linha do tempo

### Defina o que a equipe precisa decidir

Comece pelo propósito operacional. A equipe precisa estimar se houve acesso indevido? Identificar sistemas e dados potencialmente afetados? Decidir a ordem de contenção? Avaliar se credenciais devem ser revogadas? Informar lideranças sobre risco residual? Uma pergunta delimitada evita uma busca indefinida por “tudo sobre o atacante” e permite escolher fontes adequadas.

Uma pergunta bem construída pode ser: “Há evidência de que a conta usada no alerta acessou outros recursos após a autenticação incomum, e quais dados preservados permitem sustentar essa conclusão?”. Ela é concreta e respondível. “Foi um APT?” é ampla demais para iniciar a coleta, pois mistura comportamento, classificação e autoria.

### Construa uma cronologia que preserve proveniência

Exemplo hipotético: o sistema de identidade registra uma autenticação de uma conta de serviço às 02h17 a partir de um endereço que não aparece no histórico recente. O log confirma hora, conta e origem como registrados pelo serviço. Não confirma, isoladamente, que uma pessoa desconhecida controlava a origem, que a senha foi roubada ou que um ator específico estava presente. Em seguida, os registros de auditoria mostram uma consulta a um repositório. Isso aumenta a relevância da investigação, mas ainda é necessário estabelecer se a consulta foi autorizada, qual conteúdo foi acessado e se há atividade associada em endpoint ou aplicação.

### Relacione os eventos sem forçar uma história

Use identificadores estáveis quando disponíveis: ID de sessão, conta, dispositivo, processo, aplicação, recurso, ticket de mudança e intervalo temporal. Correlação por nome parecido ou horário aproximado pode gerar vínculos falsos. Registre a regra usada para conectar eventos e avalie se há explicação alternativa. Quando uma relação é indireta, por exemplo porque um sistema não registra o mesmo identificador de sessão, declare o grau de inferência.

## Evidências que costumam esclarecer a sequência

### Identidade e controle de acesso

Compare o evento com padrões próprios da identidade: finalidade declarada, horário habitual, sistemas acessados, tipo de autenticação e mudanças recentes. Verifique aprovações e registros operacionais por canal independente. Confirme se uma conta de serviço deveria interagir com uma interface ou recurso específico. Preserve dados antes de revogar ou redefinir credenciais, quando isso puder ser feito sem prolongar risco; a decisão de contenção deve considerar o dano possível e o risco de perda de evidência.

### Endpoint, rede, nuvem e aplicação

Telemetria de endpoint pode contextualizar execução, usuário, árvore de processos, alterações de arquivos e conexões. A falta de um evento pode refletir cobertura parcial, agente parado, exclusão de coleta ou retenção. Logs de rede podem associar fluxo a ativo e período, mas muitas vezes não revelam conteúdo ou usuário. Dados de DNS, proxy, firewall e resolução de nomes têm limitações distintas; não os trate como equivalentes.

Os detalhes da coleta importam tanto quanto o evento. Registre produto e versão quando relevantes, fonte e método de extração, intervalo consultado, filtros, eventuais conversões de horário e limitações conhecidas. Preserve os originais de acordo com as políticas de retenção e cadeia de custódia da organização. Uma captura de tela isolada pode facilitar comunicação, mas não substitui dados de origem e metadados necessários à revisão.

### Pessoas, processos e contexto de mudança

Entrevistas devem ser conduzidas com perguntas neutras e documentadas segundo as regras internas. Pergunte o que a pessoa fez, qual ferramenta usou, que autorização recebeu e por qual canal; evite sugerir uma explicação já escolhida. Respeite privacidade, necessidade de acesso e políticas trabalhistas. A inteligência técnica não justifica coleta indiscriminada de comunicações pessoais.

## Papéis e coordenação na equipe defensiva

### Analista, resposta, operação e liderança

A coordenação precisa de um ponto de situação compartilhado, vocabulário comum e trilha de decisões. Separe a função de recomendar da autoridade para aprovar medidas que afetem serviços críticos, quando a organização assim determinar. Registre quem solicitou a coleta, quem alterou controles e quando. Isso reduz retrabalho e permite reconstruir o raciocínio se a hipótese mudar.

### Compartilhamento e proteção de dados

Compartilhe apenas o necessário para que cada parte cumpra sua função. Um resumo para liderança deve explicar impacto possível, confiança e decisão pendente sem expor detalhes pessoais ou dados técnicos que não ajudem a decidir. Uma equipe técnica pode precisar de eventos e identificadores; um parceiro externo pode precisar de indicadores sanitizados e contexto de tempo. Respeite contratos, regras de divulgação e políticas de classificação.

## Hipóteses, sinais e evidências

### Use uma matriz de hipótese em prosa ou registro estruturado

Para cada explicação plausível, descreva o que a sustenta, o que a enfraquece, qual observação adicional seria discriminante e qual decisão não deve esperar essa resposta. Hipóteses concorrentes podem incluir atividade maliciosa, uso indevido por pessoa autorizada, automação legítima, erro de configuração e falso positivo de coleta. Não é necessário dar o mesmo peso a possibilidades remotas; é necessário evitar que a primeira explicação se torne incontestável apenas por ter sido formulada cedo.

### Alertas orientam busca; provas sustentam afirmações

Um alerta é uma indicação que merece triagem. Uma regra pode ter sido acionada por padrão incomum, indicador conhecido ou comportamento suspeito. O alerta não é automaticamente um incidente confirmado. Evidência é um dado preservado com contexto suficiente para sustentar uma afirmação delimitada, sujeito à qualidade da fonte e à possibilidade de interpretação alternativa. “Prova” em sentido jurídico tem critérios próprios; equipes técnicas devem evitar usar a palavra como sinônimo casual de telemetria.

Classifique afirmações como observação direta, inferência, hipótese ou informação de fonte externa. Mantenha a distinção em notas, relatórios e apresentações. Uma narrativa fluida pode esconder saltos lógicos; rótulos explícitos permitem a um revisor localizar exatamente onde a análise depende de suposição.

## Comparação técnica com fontes confiáveis

### Compare comportamento e condições, não apenas rótulos

Documente cada correspondência com referência, data de consulta, trecho factual resumido em palavras próprias, observação local correspondente e diferença de contexto. Não copie um relatório inteiro para a ficha do incidente. Evite tratar a quantidade de coincidências como uma pontuação mecânica: dependências entre indicadores importam. Três nomes que derivam do mesmo endereço ou da mesma publicação não são necessariamente três linhas independentes de evidência.

### Registre alternativas e limites

Para cada semelhança, anote pelo menos uma alternativa concreta quando houver. Um endereço de rede pode ser infraestrutura compartilhada, saída de provedor ou proxy corporativo. Um padrão de acesso pode refletir uma integração nova. Uma técnica pode resultar de administração remota autorizada. Isso não invalida o sinal; define o que precisa ser verificado.

## Exemplos defensivos seguros

### Caça retrospectiva com escopo controlado

Cenário hipotético: após encontrar atividade incomum em um servidor de teste, a equipe pergunta se a mesma identidade foi usada em outros ativos no período de interesse. O analista define a janela, consulta logs de identidade e inventário autorizados, registra os filtros e compara os eventos com mudanças aprovadas. Não tenta acessar contas, contornar controles ou reproduzir técnicas em sistemas de terceiros. Se surgirem lacunas, solicita a fonte correspondente ao proprietário do sistema e anota a cobertura ausente.

### Revisão de uma mudança de identidade

Cenário hipotético: uma conta de serviço recebe um novo privilégio durante a mesma semana em que há consultas incomuns a dados. A equipe verifica o pedido de mudança, a aprovação, o executor, o escopo do privilégio e os registros de uso. Um pedido válido reduz a probabilidade de abuso, mas não torna automaticamente toda ação posterior legítima. A revisão compara o comportamento com a finalidade aprovada e confirma se a mudança foi revertida ou ainda é necessária.

### Comparação de uma fonte externa com telemetria local

Cenário hipotético: uma organização recebe um aviso de que determinado padrão de autenticação foi observado em uma campanha descrita publicamente. A equipe identifica quais campos locais podem confirmar ou refutar o padrão e busca somente no escopo autorizado. Se encontra uma semelhança, registra que ela é compatível com a descrição, mas examina origem, período, aplicação e identidade. Se não encontra, registra quais fontes estavam disponíveis e quais não foram consultadas.

## Cenários contrastantes: mesma aparência, decisões distintas

### Evento legítimo fora do padrão e abuso de credencial

Dois eventos podem apresentar autenticação em horário incomum. No primeiro, uma manutenção autorizada foi remarcada, o executor confirma o procedimento e a trilha de mudança corresponde ao ativo e ao horário; as ações posteriores se limitam à tarefa. No segundo, não há solicitação válida, a identidade acessa recursos não relacionados e surgem alterações incompatíveis com sua função. A diferença não é o relógio por si só: é o conjunto de contexto, autorização, escopo e atividade posterior.

### Indicador público coincidente e vínculo operacional

Imagine, hipoteticamente, que um domínio visto em relatório público também aparece numa consulta DNS interna. Isso demonstra que um dispositivo resolveu o nome, se o log estiver correto; não demonstra necessariamente conexão, transferência de dados ou presença do ator descrito. A resolução pode vir de conteúdo, bloqueio preventivo, pré-carregamento ou uso legítimo. A equipe verifica host, processo, horário, conexão subsequente e controles de rede.

### Incidente grave com atribuição fraca e incidente limitado com evidência forte

Uma organização pode enfrentar indisponibilidade ampla sem conseguir determinar origem ou intenção. A prioridade é restabelecer serviços, preservar logs e coordenar comunicação; nomear um ator não resolve a interrupção. Em outro caso, uma alteração pequena pode ter registro preciso, identidade confirmada e trilha de aprovação ausente. A consequência operacional pode ser menor, embora a confiança sobre o evento seja maior.

## Erros comuns e como corrigi-los

### Atribuição prematura e viés de confirmação

O primeiro nome de ator encontrado tende a orientar buscas futuras. O analista passa a selecionar eventos que confirmam a hipótese e a descartar discrepâncias como ruído. Para reduzir esse viés, registre hipóteses concorrentes cedo, procure evidência que possa refutar a favorita e peça revisão por alguém que não tenha construído a narrativa inicial. Uma revisão independente deve avaliar dados e inferências, não apenas a conclusão final.

### Confundir ausência de log com ausência de atividade

Retenção desigual e fontes desligadas deixam pontos cegos. “Não foi observado” significa que a busca especificada não encontrou o evento nos dados consultados. Não significa “não ocorreu” se a fonte não cobria o sistema, o período ou o campo. Escreva qual fonte foi consultada, a janela e as limitações. Quando a equipe disser “não há evidência”, esclareça se quer dizer evidência procurada e não encontrada ou ausência de dados suficientes.

### Buscar tudo sem priorização

Coletar dados indiscriminadamente aumenta ruído e pode afetar privacidade. Priorize fontes pela pergunta, volatilidade e impacto potencial; cada coleta adicional deve fechar uma lacuna ou apoiar uma decisão.

### Misturar linguagem de certeza

Expressões como “provavelmente foi”, “parece confirmado” e “quase certamente” podem significar coisas diferentes para leitores distintos. Prefira frases com sujeito, observação e limite: “Os registros da aplicação mostram a identidade X consultando o recurso Y. Não há registro de exportação na fonte disponível; o sistema de rede consultado não cobre todo o tráfego.” Linguagem concreta permite que o leitor avalie a conclusão.

### Tratar um relatório externo como molde completo

Use a publicação para formular perguntas verificáveis. Registre coincidências, diferenças e aspectos não observados, sem importar a narrativa inteira para o caso local.

## Critérios para avaliar a qualidade da análise

### Rastreabilidade, suficiência e utilidade

Uma análise de qualidade permite que outro profissional reconstrua como a equipe chegou à conclusão. Cada afirmação relevante aponta para uma fonte, horário ou conjunto de registros. A cronologia mostra relações e lacunas. Hipóteses concorrentes estão visíveis. O grau de confiança tem justificativa. As decisões registram responsável, momento e risco considerado.

Revise também a possibilidade de refutação. Que evidência faria a equipe abandonar sua hipótese principal? Se nenhuma observação puder alterá-la, a formulação está funcionando como crença, não como hipótese investigável. Registre a condição de revisão. Por exemplo, confirmação independente de manutenção autorizada pode reduzir a suspeita; associação entre a sessão e alteração não aprovada pode aumentá-la.

### Calibração e comunicação

Para liderança, explique consequência, incerteza e ação necessária. Para equipes técnicas, forneça evidência e próximos passos. Para comunicação externa, siga os processos de aprovação e divulgue apenas o confirmado e necessário. A pressão por uma resposta rápida pode ser atendida com uma atualização provisória claramente datada, seguida de revisões; não requer uma atribuição apressada.

## Exercício de mesa autorizado

### Objetivo e preparação

Entregue ao grupo um pacote de eventos fictícios com horários, fonte e qualidade variados: uma autenticação incomum, uma consulta de auditoria a um repositório, uma janela de manutenção agendada, um alerta de endpoint sem árvore de processo completa e um aviso público sobre atividade semelhante. Alguns eventos devem ser explicados por atividade legítima; outros devem permanecer ambíguos. Não identifique de antemão a resposta correta. O valor está no processo de justificar decisões, não em adivinhar o final preparado.

### Rodadas e perguntas

O facilitador pode introduzir uma correção de horário, confirmação de chamado ou indicação de retenção expirada. O grupo deve atualizar a cronologia sem apagar a versão anterior e registrar por que a confiança mudou. Pergunte quem aprova contenção, quem preserva logs, quem comunica impacto e quem monitora efeitos colaterais. Se houver divergência, registre a decisão e a incerteza restante em vez de forçar unanimidade.

### Debrief e aprendizado

O exercício não comprova que a equipe responderá da mesma forma num incidente real. Serve para revelar suposições e melhorar coordenação. Mantenha o cenário dentro do escopo acordado, não use credenciais reais e interrompa a atividade se participantes tentarem aplicar ações em produção sem autorização. Um exercício de laboratório separado pode usar máquinas isoladas, dados artificiais e procedimentos de reversão aprovados, mas não deve simular interação com infraestrutura externa.

## Roteiro de implementação na organização

### Comece pelo inventário de perguntas e fontes

Defina convenções para horário, identificadores, nomes de ativos, classificação e estados de evidência. Crie um modelo simples de registro com pergunta, escopo, evento observado, fonte, interpretação, hipótese alternativa, confiança, lacuna, decisão e responsável. O formato pode ser uma ferramenta existente; o importante é permitir revisão e preservar histórico de alterações.

### Formalize passagem entre inteligência e resposta

A inteligência deve entregar recomendações acionáveis, por exemplo quais identidades revisar, quais fontes consultar ou que hipótese testar, com justificativa e limite. A resposta deve devolver contexto sobre impacto, mudanças legítimas e resultados de contenção. Esse fluxo reduz a distância entre análise e defesa sem transformar a equipe de inteligência em autoridade implícita para qualquer mudança operacional.

### Desenvolva cobertura e aprendizagem contínua

Faça revisões periódicas de casos encerrados, inclusive daqueles classificados como benignos. Pergunte se a explicação alternativa foi validada, se os filtros descartaram atividade relevante e se uma hipótese foi mantida por inércia. Atualize procedimentos quando produto, arquitetura ou política mudar. Materiais públicos e documentação técnica também mudam; guarde data e versão da referência usada para que uma análise futura não atribua validade atual a uma informação antiga.

## Como relatar conclusão sem exagerar

Use formulações proporcionais. “Compatível com” indica correspondência, não identidade. “Associado por esta análise” explicita que o agrupamento é uma avaliação da equipe. “A fonte pública atribui” informa quem fez a afirmação. “Confirmado no ambiente” deve ser reservado a fatos sustentados pelos registros locais e verificações pertinentes. Não use linguagem de certeza absoluta quando a coleta é incompleta.

## Perguntas frequentes

### É possível identificar uma campanha sem saber quem está por trás?

Sim. A equipe pode agrupar eventos por comportamento, tempo, ativos e objetivos prováveis sem atribuir o conjunto a uma entidade. O agrupamento deve ser marcado como hipótese e revisado conforme novas evidências. Medidas defensivas podem ser justificadas pelo risco e pelos fatos locais, independentemente do nome do ator.

### Quantos indicadores são necessários para atribuir atividade?

Não há contagem universal. Avalie independência, especificidade, contexto e qualidade; indicadores derivados da mesma origem podem não constituir confirmações separadas.

### Um relatório que usa o mesmo nome de grupo confirma a presença desse grupo?

Não. O relatório fornece uma descrição para comparação. A presença local exige evidência do ambiente, e a atribuição exige uma avaliação adicional. Nomes podem divergir entre fontes e seus escopos podem mudar. Preserve o nome e o sentido conforme a fonte o define.

### O que fazer quando os registros são incompletos?

Declare fontes e períodos disponíveis, identifique pontos cegos e busque o dado mais útil para a decisão. Se não puder fechar a lacuna, mantenha a conclusão delimitada.

### Quando uma hipótese deve ser abandonada?

Quando evidências confiáveis a contradizem de forma relevante, quando outra explicação cobre melhor os fatos com menos suposições ou quando as previsões que ela gerou não se confirmam. Uma hipótese pode continuar como possibilidade residual, mas não deve permanecer como conclusão principal apenas porque orientou a investigação no início. Documente a mudança e o motivo.

### A equipe precisa usar uma matriz de ATT&CK?

Não. Uma taxonomia pode padronizar a descrição de comportamentos, mas não é requisito nem prova de autoria. Consulte a documentação atual da própria fonte quando a usar.

### Como comparar relatórios que discordam?

Compare período, dados observados, definições, métodos e dependências entre fontes. Uma divergência pode decorrer de cobertura ou de mudança no escopo do cluster. Registre versões das interpretações e evite escolher a mais conveniente sem justificar. Se a diferença não afetar uma decisão local, mantenha-a como incerteza contextual.

### A análise deve esperar pela atribuição antes da contenção?

Não necessariamente. Risco local suficiente pode justificar medidas proporcionais conforme a autoridade e os procedimentos da organização, mantendo a atribuição como questão separada.

### Como reduzir falsos positivos sem silenciar sinais úteis?

Investigue contexto, ajuste a regra a comportamentos legítimos conhecidos e valide as exceções com os proprietários. Registre escopo e validade de qualquer supressão, prefira ajustes específicos e revise-os quando o processo mudar. Não desative uma detecção ampla apenas porque um caso particular foi benigno; descubra qual condição discriminante faltou.

## Leitura relacionada ao capítulo

O livro de Hiago Kin Levi, publicado pela Editora Brasport, pode oferecer contexto adicional sobre essa discussão de estrutura e coordenação. A leitura não substitui documentação técnica atualizada, treinamento prático, políticas da organização ou julgamento profissional. Para analisar uma campanha, a equipe ainda precisa validar as fontes locais, explicitar incertezas e adaptar procedimentos ao ambiente sob sua responsabilidade.
