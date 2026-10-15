# MTTD e MTTR em segurança

## Quanto tempo a organização leva para perceber um incidente e limitar seus efeitos?

A pergunta central por trás de MTTD e MTTR não é “qual é o número da equipe?”, mas “em que ponto do caminho de um incidente estamos perdendo tempo, e qual evidência sustenta essa conclusão?”. Uma métrica de tempo pode orientar investimento, capacidade de detecção, coordenação e recuperação. Também pode produzir uma falsa sensação de controle quando o relógio começa tarde, termina cedo ou descreve um conjunto conveniente de casos.

## O que cada métrica mede — e o que deixa de fora

### MTTD: intervalo entre início e reconhecimento

Uma definição operacional frequente de MTTD é o intervalo entre o início do incidente e sua detecção. Para um caso individual, pode ser representado como a diferença entre o horário atribuído ao início e o momento em que a organização reconheceu que havia um incidente. O agregado pode ser a média desses intervalos em um período e população definidos.

### MTTR: uma sigla que precisa de contrato

MTTR não tem um único significado universal em segurança. “Tempo médio de resposta”, “tempo médio de reparo”, “tempo médio de recuperação” e “tempo médio para resolução” são usos encontrados em contextos diferentes. Mesmo dentro de uma organização, equipes distintas podem usar a mesma sigla para marcos distintos. Portanto, antes de publicar ou comparar MTTR, escreva por extenso o nome adotado e defina o evento final observável.

### Tempo decorrido e tempo de trabalho

O tempo entre dois marcos pode ser tempo corrido, incluindo noites, fins de semana e períodos de espera, ou tempo em que alguém esteve efetivamente trabalhando no caso. São perguntas diferentes. Para o risco ao negócio, tempo corrido tende a mostrar quanto o ambiente permaneceu exposto. Para capacidade e fluxo de trabalho, horas ativas podem ajudar a entender esforço e filas. Nenhum dos dois substitui o outro.

## Por que os números dependem de contexto

### O relógio começa em uma história incompleta

A maioria das medições é retrospectiva. A equipe conhece o início porque encontrou evidência depois, e não porque havia um marcador inequívoco no momento. A evidência pode apontar para a primeira ação adversa observada, embora ações anteriores tenham ocorrido sem registro. Pode haver retenção limitada, lacunas de telemetria, diferença entre relógios de sistemas ou dados que foram sobrescritos.

### A composição dos casos muda o resultado

A média pode cair porque a equipe detectou melhor; também pode cair porque, naquele período, houve mais casos simples. Pode subir após uma melhoria porque a organização passou a descobrir atividades antigas que antes não enxergava. Pode ficar estável enquanto os casos críticos melhoram e os menores pioram. Sem segmentação, essas explicações permanecem misturadas.

### Melhor detecção pode elevar o tempo medido

Quando uma organização amplia a visibilidade, pode descobrir ocorrências antigas e incluir incidentes que antes eram invisíveis. O tempo entre início estimado e descoberta pode ser longo. A média de MTTD pode piorar mesmo que a equipe esteja vendo mais e agindo melhor. Isso não prova que a detecção regrediu; tampouco prova que melhorou. É necessário examinar a origem dos casos, a qualidade da evidência e a tendência por coorte.

## Um modelo de marcos para preservar o que aconteceu

### Registre eventos separados

Um registro útil pode conter, no mínimo, o início observado ou estimado, a primeira evidência disponível, a geração do primeiro sinal relevante, o reconhecimento do incidente, a primeira ação, a contenção confirmada, a erradicação quando aplicável e a recuperação validada. Nem todo caso terá todos os marcos. A ausência deve ser identificada como ausente, não preenchida com um horário conveniente.

### Defina início e fim por classe de caso

O início relevante pode variar. Em um caso de identidade, pode ser o primeiro uso suspeito confirmado; em indisponibilidade, a primeira degradação observada; em exposição de dados, o primeiro acesso indevido sustentado por evidência. A definição deve refletir o fenômeno que a organização quer medir e permanecer consistente dentro da classe. Se uma classe admite inícios diferentes, registre qual se aplicou em cada ocorrência.

## Evidências que sustentam os marcos

### Fontes de observação

A fonte adequada depende da pergunta. Registros de autenticação e auditoria podem apoiar uma linha do tempo de identidade; telemetria de endpoint pode mostrar execução ou isolamento; alertas e filas de triagem podem indicar quando um sinal foi produzido e analisado; registros de mudanças podem mostrar quando uma ação foi aplicada; sistemas de atendimento e comunicação operacional podem documentar decisões e aceites; observabilidade de serviço pode apoiar a validação de retorno.

### Fato, inferência e alerta

É útil distinguir três níveis. Um fato confirmado é um evento sustentado por evidência verificável, dentro dos limites dessa evidência. Uma inferência é uma explicação que conecta observações, como estimar que uma sessão foi usada por uma pessoa não autorizada. Um alerta é um sinal que pede triagem, mas não estabelece por si só que ocorreu um incidente.

### Retenção, acesso e integridade

A qualidade da métrica depende da preservação proporcional de registros e do acesso de pessoas autorizadas. A organização deve considerar requisitos legais, contratuais e internos aplicáveis à retenção, além de minimizar dados pessoais desnecessários. O relatório gerencial normalmente precisa de tempos e categorias, não de cópias indiscriminadas de conteúdo sensível. O acesso à linha do tempo detalhada deve seguir a necessidade de trabalho e as regras de proteção de dados da organização.

## Decisões que as métricas podem apoiar

### Onde investir em detecção

Se o tempo entre início estimado e primeiro sinal é persistentemente alto em uma classe relevante, a organização pode investigar cobertura, qualidade de telemetria, regras, integração de fontes e prioridades de monitoramento. Isso não leva automaticamente à compra de uma ferramenta. Pode revelar que os eventos necessários não são coletados, que sinais são descartados por ruído, que o contexto não está associado a ativos ou que o caso não tinha um padrão detectável com os dados disponíveis.

### Como avaliar um processo sem transformar pessoas em números

Métricas de resposta podem apoiar planejamento de capacidade, revisão de controles e conversas de risco. São menos úteis como placar individual. Um analista que investiga cuidadosamente um caso complexo pode levar mais tempo que alguém que fecha rapidamente um alerta simples. Um incentivo baseado em rapidez isolada pode estimular encerramentos prematuros, classificações convenientes e seleção de casos fáceis.

## Estatística que preserva a diversidade dos casos

### Média, mediana e cauda

A média é intuitiva e permite comparar totais sob algumas condições, mas é sensível a casos muito longos. A mediana descreve o ponto em que metade dos casos observados ficou abaixo e metade acima, oferecendo uma noção do caso central. Percentis superiores mostram a cauda: situações menos frequentes, porém potencialmente mais demoradas e relevantes. Apresentar uma medida central junto com a distribuição é geralmente mais informativo que publicar apenas a média.

### Coortes e comparabilidade

Uma coorte agrupa casos por uma característica e janela comparáveis, como classe de incidente e trimestre de abertura. Isso ajuda a verificar se uma mudança de processo afetou um conjunto de casos semelhante. A data de encerramento pode ser enganosa: incidentes iniciados num trimestre e resolvidos no seguinte podem migrar de grupo conforme o filtro escolhido. A regra deve ser explícita.

### Casos abertos e tempos desconhecidos

Um incidente aberto tem um tempo parcial, não um tempo final. Se começou na segunda e ainda está sendo tratado na sexta, sabe-se que o intervalo já ultrapassou quatro dias, ainda que o marco final não tenha ocorrido. Descartar o caso porque não está encerrado favorece artificialmente períodos com mais pendências longas. Uma visão operacional deve mostrar casos abertos e idade; uma análise histórica deve explicar como tratou durações incompletas.

## Papéis e decisões distribuídas

### Operações de segurança

A equipe de monitoramento ou resposta costuma manter a linha do tempo operacional: quando observou o sinal, quando iniciou a triagem, quando declarou ou escalou o incidente e quando executou ações. Ela deve registrar decisões e limitações em linguagem verificável, sem converter hipótese em fato. Em estruturas pequenas, uma mesma pessoa pode desempenhar mais de uma função, mas os marcos continuam distintos.

### Donos de serviço, identidade e infraestrutura

As equipes que operam identidade, endpoint, rede, nuvem, aplicações e dados conhecem a semântica dos registros e os efeitos de uma ação. Elas ajudam a verificar se um horário representa uma alteração aplicada ou apenas solicitada, se um ativo estava acessível e se o serviço retornou. Uma solicitação enviada a uma fila não equivale ao cumprimento da ação.

### Gestão, privacidade e auditoria

A liderança precisa interpretar os indicadores à luz de risco, capacidade e compromissos, sem exigir um único número que apague as diferenças entre casos. Pode decidir sobre investimento, cobertura fora de horário e tolerância a interrupções, mas deve receber a definição do indicador e as incertezas relevantes junto ao valor.

## Cenários hipotéticos para interpretar os intervalos

### Sinal rápido, reconhecimento demorado

Cenário hipotético: um sistema de monitoramento gera um alerta de uso anômalo de uma conta. O alerta fica em uma fila sem contexto de criticidade e só recebe atenção depois de outros eventos. A organização registra o horário do alerta e o momento em que o caso foi reconhecido. O intervalo entre esses marcos é longo, embora a detecção técnica tenha ocorrido cedo.

### Contenção imediata, recuperação prolongada

Cenário hipotético: uma credencial suspeita é revogada logo após a confirmação, interrompendo a atividade conhecida. A investigação identifica integrações que dependem daquela identidade e a equipe precisa substituí-la de forma controlada. A recuperação do serviço leva mais tempo do que a contenção.

### Descoberta tardia após aumento de visibilidade

Cenário hipotético: uma nova fonte de auditoria permite correlacionar eventos que antes não eram preservados. A equipe encontra evidência de atividade antiga e abre um incidente com janela de início incerta. O MTTD calculado aumenta em relação ao trimestre anterior.

### Alertas rápidos, encerramento prematuro

Cenário hipotético: uma área adota uma meta de fechar alertas rapidamente. O tempo até encerramento cai, mas uma revisão posterior encontra casos reabertos e classificações alteradas. O indicador descreve melhor a velocidade de fechamento administrativo do que a contenção ou recuperação.

## Erros comuns e como reconhecê-los

### Publicar MTTR sem dizer o significado

Um leitor não consegue interpretar se o valor termina na primeira ação, na contenção, no reparo, na recuperação ou no fechamento do caso. A correção é nomear o marco, definir a condição e manter o uso consistente. Se o significado mudar, identifique a quebra na série histórica e evite comparação direta sem ajuste.

### Tratar alerta como incidente confirmado

Um alerta é um pedido de investigação, não uma confirmação. Contar todo alerta como incidente pode inflar o denominador e misturar falsos positivos com ocorrências reais. Excluir silenciosamente alertas descartados pode, por outro lado, esconder uma triagem ineficiente. Mantenha estados distintos e decida qual população cada indicador mede.

### Usar média sem distribuição

Uma média isolada esconde caudas, casos abertos e variação entre classes. O complemento é mostrar uma medida de centro, uma visão de dispersão ou percentis adequados, volume, período e critérios. Não é necessário publicar todo detalhe em toda tela, mas o leitor deve conseguir acessar contexto suficiente para avaliar a afirmação.

### Excluir os casos mais difíceis

Critérios como “somente casos encerrados” podem ser úteis para uma análise específica, porém enviesam o retrato se os abertos forem numerosos ou longos. A exclusão precisa aparecer ao lado do indicador, com contagem e razão. Uma visão de casos em andamento, por idade e classe, reduz o risco de uma taxa aparentemente boa ocultar pendências relevantes.

### Alterar o relógio após saber o desfecho

Reclassificar o início ou declarar que uma contenção “não contou” depois de conhecer o resultado pode tornar a série vulnerável a viés. As regras devem ser definidas antes da análise e mudanças precisam de trilha. Quando a compreensão do caso mudar, preserve a primeira versão, registre a revisão e explique como o indicador recalculado difere.

### Comparar equipes ou organizações sem equivalência

Escopo, horário, perfil de ativos, gravidade, definições, retenção e tecnologia variam. Um valor menor pode refletir casos mais fáceis ou um marco final mais estreito. Benchmark externo sem metodologia comparável oferece pouca evidência. Para gestão, a tendência interna sob definição estável costuma ser mais útil; comparações externas só ajudam quando população e método são realmente próximos.

### Confundir velocidade com redução de dano

Agir rápido pode reduzir exposição, mas a métrica de tempo não mede diretamente dados afetados, indisponibilidade, custo ou risco residual. Em alguns casos, preservar evidência ou coordenar uma interrupção controlada é a decisão prudente, embora aumente um intervalo. Os tempos devem ser lidos junto de impacto, qualidade da contenção e recuperação, sem transformar rapidez em objetivo absoluto.

## Critérios para avaliar se o indicador é confiável

Um indicador é utilizável quando outra pessoa consegue reconstruir o que ele representa. A definição deve identificar população, evento inicial, evento final, unidade temporal, regra para casos sem horário, tratamento de incidentes abertos, período de agregação e responsáveis pela validação. A fonte de cada marco deve ser rastreável. A pessoa que lê deve saber se o resultado é observado ou estimado.

A consistência pode ser avaliada por amostragem de casos. Revisores autorizados podem verificar se os horários correspondem aos eventos descritos, se as classificações seguem a regra e se os marcos estão completos. O propósito é descobrir ambiguidades e melhorar o processo de registro; uma revisão orientada a culpabilizar tende a incentivar registros defensivos e reduzir a qualidade da evidência.

## Exercício de mesa ou laboratório autorizado

### Objetivo e limites

Um exercício interno pode testar se as pessoas conseguem registrar marcos e comunicar incerteza sem praticar ações contra sistemas de terceiros. Defina uma narrativa fictícia, os participantes, o ambiente autorizado, a duração, as regras de segurança e o que não será executado. O cenário pode usar eventos simulados em planilhas ou uma plataforma de treinamento isolada, sem credenciais reais ou dados de produção.

### Roteiro de discussão

Apresente um alerta fictício com horário e contexto limitados. Pergunte qual evidência adicional é necessária para classificá-lo, quem deve receber a informação e qual evento será marcado como reconhecimento. Em seguida, introduza uma evidência posterior que sugira que a atividade pode ter começado antes. Os participantes devem atualizar a hipótese e indicar como representar a janela de início sem apagar a estimativa anterior.

### Avaliação e aprendizado

Registre quais marcos foram identificados, quais foram inferidos, quais fontes sustentariam cada horário e que decisões ficaram sem responsável. Observe se os participantes distinguiram tempo corrido de esforço ativo e se reconheceram a incerteza do início. Não transforme o exercício em uma pontuação pública por pessoa. O resultado deve alimentar definições, procedimentos, contatos e novos exercícios autorizados.

## Roteiro de implementação

### 1. Escreva a pergunta de gestão

Comece por uma pergunta concreta: a organização quer saber se reconhece incidentes antes, se contém mais cedo, se restaura serviços com menos atraso ou onde se acumulam esperas? Uma métrica não deve ser criada apenas porque está em um painel de mercado. A pergunta determina os marcos e a população necessários.

### 2. Escolha as classes e o escopo inicial

Defina quais casos entram primeiro e quais ativos ou serviços cobrem. Um escopo pequeno pode ajudar a validar a qualidade dos dados, desde que seja apresentado como escopo parcial. Evite selecionar somente a classe que tem registros mais fáceis e depois generalizar o resultado para toda a segurança da organização.

### 3. Acorde os marcos e a linguagem

Escreva o evento inicial, detecção, reconhecimento, primeira ação, contenção e recuperação em termos verificáveis. Diferencie evento observado, inferência e alerta. Declare qual nome será usado para cada intervalo. Consulte as equipes que geram e consomem as evidências para confirmar que os eventos podem ser capturados de modo consistente.

### 4. Mapeie as fontes e limitações

Para cada marco, identifique a fonte provável, sua retenção, acesso, qualidade temporal e responsável. Verifique se há relógios diferentes, campos manuais, registros ausentes ou dependências de sistemas externos. Se a fonte necessária não existe, registre a lacuna como requisito de visibilidade em vez de fabricar um horário retrospectivo.

### 5. Defina regras para incerteza e incompletude

Especifique como registrar janelas de início, estimativas, horários desconhecidos, casos reclassificados, casos abertos, reaberturas e mudanças de escopo. Preserve valores anteriores e o motivo de correções. Escolha uma regra de agregação que não descarte silenciosamente casos difíceis.

### 6. Faça uma linha de base com revisão

Calcule os primeiros resultados e revise uma amostra com as equipes envolvidas. A linha de base descreve o processo observado; não é automaticamente uma meta nem um julgamento de desempenho. Verifique se o cálculo pode ser reproduzido, se as exclusões estão visíveis e se a conclusão muda diante de incertezas plausíveis.

### 7. Publique contexto junto com o valor

Inclua nome completo do intervalo, população, período, contagem, medidas de distribuição, casos em aberto relevantes, proporção de horários estimados e mudanças metodológicas. Para uma audiência executiva, um resumo compacto pode ser suficiente, desde que exista detalhe rastreável para revisão. Não remova o contexto para caber num semáforo.

### 8. Relacione o resultado a uma ação verificável

Cada achado deve levar a uma pergunta ou ação possível: revisar a fila, enriquecer sinais, testar a revogação de identidade, documentar autoridade, validar restauração, ampliar retenção dentro das regras aplicáveis. Registre hipótese, responsável e critério para observar mudança. Evite afirmar que uma ação funcionou antes de comparar evidência sob definições estáveis.

### 9. Reavalie a definição com governança

Revise periodicamente se os marcos continuam relevantes e se as fontes mudaram. Uma mudança de ferramenta ou processo pode exigir novo campo, mas deve ter versão e data. Preserve a possibilidade de explicar a série antiga sem forçar equivalência com a nova. Compartilhe alterações com quem interpreta ou presta contas dos indicadores.

## Como ler uma tendência sem exagerar a conclusão

Uma tendência descendente de tempo pode indicar melhora, mas precisa de confirmação. Verifique se as definições e cobertura permaneceram comparáveis, se o conjunto de casos mudou, se aumentaram encerramentos prematuros ou se os casos abertos foram excluídos. Examine a distribuição e os resultados operacionais associados. Se o tempo até contenção caiu e o impacto também diminuiu, essa combinação é mais informativa que o tempo sozinho, embora ainda não prove causalidade.

Uma tendência ascendente não deve ser ocultada. Pode sinalizar deterioração, casos mais complexos, descoberta de atividade antiga ou coleta mais completa. A resposta é decompor os marcos e as coortes, identificar evidência para cada explicação e comunicar o que ainda não se sabe. A métrica serve para abrir investigação sobre o processo, não para fornecer automaticamente uma narrativa de sucesso ou falha.

## FAQ

### MTTD deve começar no primeiro evento suspeito?

Não necessariamente. O primeiro evento suspeito pode ser benigno ou estar apenas correlacionado retrospectivamente. Defina o início que representa o fenômeno medido e registre o nível de confiança. Se a evidência só delimita uma janela, mantenha essa janela em vez de afirmar um ponto exato.

### O primeiro alerta pode ser considerado detecção?

Pode ser um marco útil para medir geração do sinal, mas não equivale sempre ao reconhecimento de um incidente. Registre alerta e reconhecimento separadamente quando essa distinção ajuda a localizar atrasos. A escolha precisa ser consistente e estar escrita na definição do indicador.

### Qual é o significado correto de MTTR?

Não há um único significado aplicável a todos os relatórios. A organização deve dizer se mede resposta, reparo, recuperação ou resolução e descrever o evento final. Sempre que possível, nomeie o intervalo diretamente, como “tempo até contenção confirmada”, para reduzir ambiguidade.

### Devo reportar média ou mediana?

A resposta depende da pergunta e da distribuição. Média pode mostrar o efeito dos casos longos no total; mediana descreve o centro de uma forma menos sensível a extremos. Relate também dispersão ou percentis, volume e contexto quando isso for necessário para a decisão. Nenhuma medida deve aparecer sem população e período.

### Como tratar incidente ainda aberto?

Mantenha-o visível como duração parcial e informe sua idade ou estado. Não o trate como se tivesse duração zero nem o exclua sem declarar a regra. Para análises históricas, explique como casos sem marco final foram tratados e mostre quantos permanecem em andamento.

### Um número menor prova que a equipe melhorou?

Não. Pode refletir melhoria, mudança na população, definição mais estreita, exclusão de casos longos ou registro diferente. Verifique comparabilidade, evidências, distribuição e resultados associados antes de atribuir a mudança a uma causa.

### É possível comparar fornecedores ou organizações?

Só com definições, escopo, composição de casos e métodos suficientemente comparáveis. Sem isso, diferenças podem ser artefatos de medição. Uma comparação interna consistente costuma ser mais útil que um benchmark sem método claro.

### Qual é uma boa meta universal para MTTD ou MTTR?

Não existe um prazo universal que sirva a todos os ambientes e classes de incidente. A organização pode estabelecer objetivos internos baseados em risco, capacidade, dependências e obrigações aplicáveis. Deve explicitar o marco, a população e as exceções, e evitar prometer que um alvo temporal assegura ausência de dano.

### Tempo de resposta deve excluir espera por aprovações?

O tempo corrido deve preservar a duração da exposição. A espera pode ser categorizada separadamente para entender dependências, mas subtraí-la do indicador sem transparência produz uma visão incompleta. A distinção entre tempo corrido e tempo ativo responde a perguntas diferentes e pode ser reportada lado a lado.

### Como medir sem incentivar atalhos?

Não use rapidez isolada como avaliação individual. Combine tempos com qualidade de evidência, integridade do registro, impacto, contenção e recuperação. Audite definições e reaberturas, mantenha casos difíceis no escopo e crie um ambiente em que seja seguro reportar incerteza e erro de classificação.

## Relação com o capítulo sobre resposta a incidentes

No capítulo 9 da versão original, dedicado a métricas de resposta a incidentes, o livro de Hiago Kin Levi, publicado pela Editora Brasport, oferece um ponto de apoio para situar a discussão de MTTD e MTTR no conjunto da resposta. A contribuição de uma obra é organizar conceitos e perguntas; a operação ainda depende de documentação técnica atualizada, treinamento, dados confiáveis e julgamento da equipe. Para aplicar qualquer métrica, a organização precisa definir os próprios marcos, validar as fontes e revisar o que os números permitem concluir.
