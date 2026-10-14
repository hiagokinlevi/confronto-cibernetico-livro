# Perfil de ator de ameaça cibernética

## Pergunta central: para que serve um perfil de ator?

Quando uma equipe encontra atividade suspeita, saber “quem” está por trás dela parece a pergunta mais urgente. Em geral, porém, a decisão operacional que não pode esperar é outra: o que está acontecendo agora, quais ativos estão expostos, que evidências precisam ser preservadas e qual ação reduz o risco sem interromper serviços desnecessariamente? Um perfil de ator de ameaça ajuda a orientar essas decisões quando organiza padrões conhecidos de comportamento, objetivos prováveis, capacidades observadas, alvos recorrentes e histórico disponível. Ele não transforma indícios em identidade comprovada nem substitui a análise do incidente em curso.

A pergunta central de quem pesquisa o tema, portanto, é como construir e usar um perfil de maneira útil sem confundir semelhança com autoria. A resposta exige separar observação, interpretação e atribuição. Uma conexão originada de uma infraestrutura já associada a uma campanha pode ser um indício relevante; por si só, não prova que a mesma equipe operou o evento atual. Uma técnica compartilhada por vários grupos pode ajudar a priorizar hipóteses, mas raramente identifica um operador de forma isolada. O perfil tem valor quando torna explícito o que se sabe, o que se supõe, por que se supõe e o que faria a equipe rever a avaliação.
## O que é um perfil de ator de ameaça

Um perfil é uma representação estruturada de um conjunto de atividades que podem estar relacionadas, acompanhada das evidências e do grau de confiança de cada afirmação. Dependendo do contexto, a unidade descrita pode ser um indivíduo, uma equipe, uma organização criminosa, um programa patrocinado por Estado, um agrupamento analítico ou uma campanha ainda sem atribuição. Esses termos não são intercambiáveis. “Ator” pode designar uma pessoa ou um conjunto de operadores; “grupo” costuma ser um rótulo de acompanhamento; “campanha” descreve atividade delimitada por objetivos ou período; “cluster” é um agrupamento provisório de eventos que compartilham características.

O nome usado para um grupo não deve ser tratado como uma identidade civil ou organizacional confirmada. Fornecedores e equipes diferentes podem atribuir nomes distintos a atividades sobrepostas, e um mesmo nome pode abranger operações que mais tarde se provam separadas. O perfil deve informar seus identificadores alternativos, quando conhecidos, e explicar que equivalência está sendo afirmada: identidade, sobreposição parcial de atividade ou apenas associação reportada. Se a relação não está resolvida, isso precisa aparecer no texto e nos metadados, não ficar implícito na escolha de um nome conhecido.
## Perfil, alerta, inteligência e prova

Um alerta é um sinal para investigação ou ação: uma regra detectou uma combinação de eventos, um endereço apareceu em uma lista, ou um usuário relatou uma mensagem suspeita. O alerta pode ser verdadeiro, falso positivo ou inconclusivo. Inteligência é informação contextualizada e avaliada para apoiar uma decisão. Um perfil é um produto de inteligência sobre atividade ou ator, enquanto uma evidência é um elemento que pode ser examinado no contexto de uma hipótese específica. A prova, em sentido jurídico ou disciplinar, depende de regras, contexto e procedimento que não são definidos por um perfil analítico.

Essa distinção evita dois atalhos perigosos. O primeiro é tratar um alerta como confirmação de presença de um ator. Uma detecção de ferramenta comum pode resultar de uso administrativo legítimo, atividade de outro adversário ou erro de classificação. O segundo é tratar a presença de um indicador associado a um grupo como prova de autoria. Um domínio, endereço de rede, hash ou nome de arquivo pode ser reutilizado, copiado, comprometido ou compartilhado. A associação sustenta uma pergunta de investigação, não necessariamente uma conclusão.
## Por que o contexto muda a interpretação

Uma técnica não existe fora do ambiente em que foi usada. A mesma sequência de autenticação pode refletir automação interna, operação de um fornecedor, teste autorizado ou atividade adversária. Um acesso fora do horário habitual pode ser rotineiro em uma equipe global e excepcional em outra. Uma ferramenta de administração remota pode ser parte da infraestrutura legítima e, ao mesmo tempo, ser abusada por invasores. Para interpretar a atividade, o analista precisa conhecer a arquitetura, os processos de negócio, as janelas de manutenção, os prestadores autorizados e as mudanças recentes.

O perfil acrescenta contexto histórico, não substitui o contexto local. Se um conjunto conhecido costuma buscar ambientes de nuvem, isso pode justificar atenção especial aos registros de identidade e às alterações de configuração. Não demonstra que uma atividade suspeita na nuvem pertence a esse conjunto. Da mesma forma, um setor frequentemente visado pode elevar a prioridade de investigação, mas não torna toda anomalia naquele setor parte de uma campanha conhecida. O contexto altera a ordem e a profundidade das perguntas; não elimina a necessidade de verificar os dados da organização.
## Como escolher a unidade de análise

Antes de nomear um ator, defina o que está sendo agrupado. O ponto de partida pode ser um incidente, um conjunto de incidentes, uma campanha, uma infraestrutura relacionada ou um padrão de comportamento. Agrupar primeiro reduz o risco de encaixar evidências em uma identidade já conhecida. A equipe pode registrar observações sem rótulo, comparar eventos e só depois propor uma associação. Se houver motivo para usar um nome de acompanhamento desde o início, a documentação deve deixar explícito que se trata de uma convenção provisória.

Uma campanha é uma unidade frequentemente mais útil para a resposta do que a suposta organização por trás dela. Campanhas podem ter objetivos, alvos, infraestrutura e métodos distintos, ainda que se sobreponham em alguns recursos ou operadores. Se uma campanha específica tenta obter credenciais de um fornecedor, o plano defensivo pode se concentrar em relações de confiança, autenticação e monitoramento de acessos. Não é necessário inferir a cadeia de comando inteira para agir sobre o risco observado.
## Fontes de evidência e limites

As fontes mais valiosas são aquelas que sustentam uma afirmação específica e cujo contexto pode ser avaliado. Registros internos de identidade, endpoint, rede, e-mail, aplicações e nuvem podem mostrar o que ocorreu no ambiente afetado. Imagens forenses, artefatos coletados e cronologias construídas a partir de fontes independentes podem reforçar a compreensão do incidente, desde que aquisição e integridade sejam preservadas. Dados internos geralmente são mais próximos do evento, mas têm limites: cobertura incompleta, relógios desalinhados, retenção curta, configuração inadequada ou coleta iniciada depois da atividade.

Relatórios externos podem oferecer contexto comparativo, histórico de campanhas e descrição de técnicas. Sua utilidade depende de transparência metodológica, data, escopo e proximidade com a evidência primária. Uma publicação pode descrever observações próprias, resumir material de terceiros ou repetir uma atribuição amplamente citada. Essas situações têm pesos distintos. Registrar a fonte original, quando disponível, ajuda a evitar que uma mesma alegação apareça em várias publicações e seja confundida com múltiplas confirmações independentes.
## Construção de hipóteses e confiança

Uma hipótese começa com uma proposição que pode ser confrontada com dados: “a sessão foi usada por um operador externo”, “o objetivo provável era obter acesso persistente” ou “esta atividade está relacionada a uma campanha documentada”. Cada uma exige evidências diferentes. Uma hipótese clara também permite prever que observações a fortaleceriam, quais a enfraqueceriam e quais seriam neutras. Sem esses critérios, o analista pode interpretar qualquer novo dado como confirmação.

Considere explicações concorrentes desde o começo. Uma atividade incomum pode resultar de um adversário, de uma mudança interna, de um fornecedor, de uma automação defeituosa ou de um teste autorizado cuja comunicação falhou. Isso não significa tratar todas as possibilidades como igualmente prováveis. Significa registrar as alternativas plausíveis, identificar dados capazes de distingui-las e evitar o viés de confirmação. Se uma hipótese concorrente for descartada, registre a razão e a evidência que sustentou o descarte.
## Capacidades, alvos, objetivos e técnicas

Capacidade descreve o que um conjunto demonstrou conseguir fazer, sob condições observadas. Não deve ser inferida apenas de uma ferramenta que alguém poderia obter publicamente. Se uma ferramenta aparece em um sistema, a equipe ainda precisa determinar se foi executada, por quem, com que privilégios e para qual finalidade. “Capaz de acessar uma rede” é uma formulação vaga; a afirmação melhora quando delimita a ação, o ambiente e a evidência que a sustenta.

Alvo pode significar setor, organização, função, sistema ou tipo de dado. Relatar que uma atividade atingiu uma organização de determinado setor não basta para concluir que o setor inteiro está na mira. É possível que a organização tenha sido escolhida por sua cadeia de fornecimento, localização, acesso a um parceiro ou exposição específica. O perfil deve separar alvos observados de alvos considerados prováveis e indicar a base dessa inferência. Também deve evitar transformar uma amostra parcial em regra universal.
## Papéis e coordenação na análise

A inteligência não deve operar isolada da resposta. A pessoa analista de inteligência formula perguntas, reúne contexto, avalia fontes e documenta hipóteses. A resposta a incidentes preserva evidências, determina escopo e conduz contenção e recuperação. Operações de segurança ajustam monitoramento e detecções com base em comportamentos relevantes. Engenharia e proprietários de sistemas explicam arquitetura, mudanças e dependências. Gestão de risco e liderança avaliam impacto e apetite a interrupção. Jurídico, privacidade e comunicação orientam obrigações, uso de dados e mensagens externas conforme o caso.

A coordenação precisa deixar claro quem pode alterar o estado do incidente e quem aprova mudanças com impacto operacional. Um analista pode recomendar bloquear um domínio; o responsável por serviço precisa avaliar o risco de indisponibilidade; a equipe de resposta pode determinar se a urgência justifica ação imediata conforme procedimento. O perfil informa opções e contexto, mas não concede autoridade para desligar sistemas, contatar terceiros ou divulgar atribuições. A governança local e o plano de incidentes definem essas responsabilidades.
## Exemplos defensivos seguros

Em um cenário hipotético, uma organização recebe alertas de autenticação de uma conta privilegiada em horário incomum, seguidos por uma alteração de regra de encaminhamento de e-mail. A equipe pode consultar registros de identidade, trilhas de auditoria da caixa postal, alterações administrativas, histórico de dispositivos e chamados de manutenção. Um perfil de ator conhecido por abuso de contas poderia orientar perguntas sobre sessões, privilégios e persistência, mas não autorizaria concluir autoria. A resposta imediata pode revogar sessões, proteger a conta e preservar dados, conforme o procedimento, enquanto a hipótese de ator permanece em aberto.

Em outro cenário hipotético, um endpoint apresenta um arquivo cuja impressão digital aparece em um boletim externo associado a uma campanha. A equipe verifica a origem do arquivo, o processo que o criou, a assinatura, a telemetria de execução e o contexto do usuário. Se não há execução e a origem é um pacote legítimo de software, a ocorrência pode ser um falso positivo de associação. Se houve execução suspeita, isso justifica ampliar a investigação, mas ainda não estabelece quem a conduziu. O boletim é uma pista; o conjunto de eventos locais determina o escopo da resposta.
## Cenários contrastantes e atualização da hipótese

Imagine, de forma hipotética, dois eventos que compartilham um mesmo indicador de rede. No primeiro, a conexão coincide com um agente corporativo conhecido, parte de uma janela de manutenção aprovada, e não há comportamento subsequente suspeito. No segundo, a conexão ocorre após autenticação anômala, seguida de leitura de dados e alteração não autorizada de configuração. O indicador isolado é igual; o contexto e a sequência diferem. A decisão defensiva deve levar em conta a cadeia de eventos e a identidade da sessão, não apenas a correspondência com um perfil.

Considere também uma campanha hipotética de fraude por e-mail cujo nome de domínio se parece com o de uma organização parceira. Uma primeira hipótese pode associá-la a um conjunto que já usou mensagens semelhantes. Mais tarde, registros de registro de domínio e dados de comunicação mostram que a infraestrutura não coincide e que o objetivo e a sequência operacional diferem. A associação deve ser reduzida ou removida, mesmo que a técnica de engenharia social seja parecida. Semelhança de método pode refletir popularidade, imitação ou coincidência.
## Erros comuns e como corrigi-los

O erro mais frequente é começar pelo nome. Ao encontrar uma técnica familiar, o analista procura o grupo que a popularizou e passa a interpretar novos sinais para confirmar a associação. A correção é começar por observações e proposições: quais eventos estão confirmados, que hipótese explica cada um, que alternativas permanecem e que evidência permitiria distingui-las. Atribuir um identificador só depois de delimitar o cluster reduz a influência de narrativas preexistentes.

Outro erro é tratar ferramentas e técnicas como impressões digitais. Ferramentas comerciais, utilitários legítimos e técnicas comuns circulam entre operadores. Mesmo uma ferramenta associada a um ator pode ser copiada, vendida ou usada por terceiros. A correção é ponderar conjunto, contexto, sequência, infraestrutura, alvo e comportamento, e explicar a contribuição de cada elemento. Nenhum traço isolado deve receber peso maior do que sua capacidade de discriminar entre hipóteses.
## Avaliação da qualidade e utilidade

Um bom perfil pode ser avaliado por sua rastreabilidade: cada afirmação importante tem fonte, data, escopo e confiança? A organização consegue identificar o que veio de observação direta e o que foi inferido? Há registro de dependências entre fontes? Um revisor pode refazer o caminho analítico sem depender da memória de quem escreveu? Esses critérios são mais úteis do que contar páginas ou indicadores, pois medem se o perfil pode ser verificado e corrigido.

A utilidade operacional pode ser examinada perguntando que decisão o perfil apoiou. Ele levou a uma consulta adicional de telemetria, a uma revisão de controles, a uma priorização de ativos ou a uma mudança de comunicação? A resposta não precisa ser sempre uma ação concreta: às vezes o valor é evitar escalada indevida ou preservar uma hipótese alternativa. Ainda assim, se o produto não se conecta a nenhuma pergunta decisória, convém revisar seu escopo e público.
## Exercício de mesa autorizado

Um exercício de mesa pode ensinar a equipe a separar fatos, alertas e hipóteses sem executar atividade contra terceiros. Use um cenário fictício e dados sintéticos: uma conta de serviço apresenta autenticação fora do padrão, um alerta externo associa um domínio a uma campanha, e um gestor relata uma alteração não planejada em um sistema de negócio. Os participantes recebem os elementos em etapas, sem detalhes que permitam reproduzir intrusão. O objetivo é praticar análise e coordenação, não testar técnicas ofensivas.

Na primeira etapa, cada grupo lista o que está confirmado, o que é relato e o que é hipótese. Deve registrar período, sistemas envolvidos, fonte e lacunas. Na etapa seguinte, recebe informação que oferece explicação alternativa, como uma manutenção autorizada ainda não comunicada à equipe de segurança. Os participantes decidem quais verificações autorizadas distinguiriam as hipóteses e quais ações de contenção seriam proporcionais enquanto a análise continua.
## Roteiro de implementação

Comece identificando decisões recorrentes que precisam de contexto de ator: priorização de alertas, investigação de identidade, proteção de serviços expostos, comunicação de incidente ou avaliação de risco de fornecedor. Escolha uma pergunta específica e um público. Esse recorte impede que o esforço inicial se transforme em enciclopédia sem consumidor. Registre também quais decisões não podem depender de atribuição, para que a equipe não atrase contenção enquanto espera uma conclusão impossível.

Em seguida, estabeleça um modelo mínimo de registro. Para cada afirmação, inclua texto claro, tipo de alegação, evidência, fonte, data, período observado, confiança, limitações e responsável pela revisão. Inclua campos para fatos locais, contexto externo, inferências, hipóteses concorrentes e decisões apoiadas. Defina vocabulário para diferenciar ator, campanha, cluster, ferramenta e indicador. Um esquema simples e consistente supera um formato sofisticado que ninguém atualiza.
## Como transformar o perfil em decisões defensivas

O perfil só deve alimentar controles quando a ligação entre comportamento e controle estiver clara. Se a hipótese aponta para abuso de sessão, a equipe pode revisar cobertura de autenticação, revogação de tokens e alertas de alteração de privilégios. Se aponta para coleta de dados, pode verificar registros de acesso, volume e destino de transferências dentro das capacidades autorizadas. A recomendação deve indicar o objetivo do controle e seus limites: um alerta mais sensível pode ampliar falsos positivos, enquanto um bloqueio abrangente pode afetar atividade legítima.

A tradução de inteligência para detecção pede colaboração com quem conhece os dados. Uma descrição publicada como “uso de ferramenta administrativa” não informa qual evento local procurar. Analista e engenharia precisam identificar processo, conta, origem, sequência e contexto de execução disponíveis na telemetria. Quando a fonte externa não oferece detalhes suficientes, registre a lacuna em vez de fabricar uma regra. Testes em ambiente autorizado e revisão de falsos positivos ajudam a calibrar o monitoramento sem presumir que uma correspondência equivale a incidente confirmado.

A priorização também precisa considerar exposição e impacto. Uma técnica associada a um ator pode ser relevante para sistemas que a organização possui, mas a prioridade depende de criticidade, acesso, controles existentes e sinais locais. Um perfil pode destacar que certos ativos merecem revisão; o inventário e a avaliação de risco determinam se estão presentes e vulneráveis. Assim, a inteligência reduz o espaço de busca e orienta perguntas, enquanto a avaliação local mantém a decisão ligada à realidade do ambiente.

## Gestão de versões, distribuição e correção

Trate o perfil como um produto versionado. Uma revisão deve registrar o que mudou, quais fontes entraram ou foram retiradas, que afirmações tiveram confiança alterada e quem aprovou a distribuição. Se um indicador for revogado, usuários técnicos precisam receber a correção de forma acionável para remover regras ou exceções desatualizadas. Se uma hipótese de atribuição cair, áreas de comunicação e liderança precisam saber quais mensagens dependiam dela. A revisão deve alcançar consumidores reais, não apenas atualizar um arquivo central.

A distribuição pode ter níveis diferentes. Um resumo executivo apresenta impacto, confiança e decisões; uma nota operacional inclui comportamentos e dados necessários para monitoramento; um registro analítico preserva fontes, alternativas e histórico. Esses produtos precisam apontar para a mesma avaliação vigente e não divergir em certeza. Limitar detalhes sensíveis conforme a necessidade de conhecimento protege fontes e dados pessoais, sem omitir a incerteza necessária para interpretar a conclusão.

A retenção também merece política explícita. Informações antigas podem continuar úteis como histórico, mas precisam ser marcadas para não aparecer como orientação atual. Indicadores vencidos podem ser arquivados, retirados de controles ativos e mantidos em contexto para investigação retrospectiva. A organização deve definir quem autoriza esse ciclo, como preservar registros necessários e como respeitar prazos legais e contratuais aplicáveis.

## Perguntas frequentes

### Um perfil identifica com certeza quem atacou?

Não necessariamente. Pode descrever comportamentos associados a um conjunto e avaliar uma atribuição com determinado nível de confiança. A identidade pode permanecer desconhecida mesmo quando a atividade e o impacto estão bem documentados. O perfil deve indicar precisamente qual proposição foi avaliada e quais evidências a sustentam.

### Posso usar um perfil para decidir se um alerta é verdadeiro?

Use-o para contextualizar e priorizar a investigação, não como veredito automático. Compare o alerta com os registros locais, o comportamento observado, a atividade autorizada e as explicações alternativas. A correspondência com uma técnica ou indicador associado a um ator aumenta o interesse analítico, mas não resolve a classificação sem evidência contextual.

### Qual é a diferença entre ator e campanha?

Ator descreve quem pode estar conduzindo atividade, geralmente com incertezas de identidade e agrupamento. Campanha delimita uma série de ações relacionadas por objetivo, período ou operação. Uma campanha pode ser uma unidade mais confiável para orientar defesa, mesmo quando a identidade do responsável não está estabelecida.

### Quantas fontes são necessárias para uma atribuição?

Não existe quantidade universal. Importam a qualidade, a independência, o acesso à evidência e a capacidade de discriminar hipóteses concorrentes. Várias publicações derivadas de uma única fonte não equivalem a confirmações independentes. A conclusão deve refletir a evidência disponível e suas limitações, sem transformar contagem de citações em confiança.

### Com que frequência o perfil deve ser atualizado?

Atualize quando surgir evidência relevante, quando uma fonte corrigir uma alegação, quando um indicador envelhecer ou quando uma decisão depender de informação que pode ter mudado. Registre a data da revisão e o escopo revisado. Frequência fixa pode ajudar a organizar o trabalho, mas não substitui atualização motivada por mudanças concretas.

### O que fazer quando fontes confiáveis discordam?

Separe as afirmações em disputa, compare datas, escopo, métodos e dependências entre fontes e procure evidência local ou independente. Registre versões e limites sem forçar consenso. Se a discordância não puder ser resolvida, apresente as interpretações concorrentes e indique quais decisões permanecem seguras sob ambas.

## Leitura relacionada

No capítulo 7 de seu livro, publicado pela Editora Brasport, Hiago Kin Levi trata da estrutura, dos papéis e da coordenação do Black Team. Esse recorte ajuda a situar a colaboração necessária entre inteligência, operação e decisão ao construir perfis de atores. A leitura pode apoiar a reflexão sobre responsabilidades e fluxo de trabalho, mas não substitui documentação técnica atualizada, treinamento prático nem o julgamento da equipe diante das evidências específicas de cada incidente.
