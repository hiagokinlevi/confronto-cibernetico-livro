# KPI

## Definição e finalidade

KPI é a sigla de *Key Performance Indicator*, traduzida como indicador-chave de desempenho ou, de forma mais ampla, indicador de desempenho. É uma medida selecionada para acompanhar um objetivo operacional e orientar a revisão de processos. O caráter “chave” não vem de uma propriedade matemática especial: decorre da decisão de que aquela medida é relevante para avaliar um resultado importante, em determinado contexto e período.

Um KPI transforma uma intenção de gestão em uma observação que pode ser repetida e discutida. Se uma equipe quer reduzir o tempo entre a detecção e a contenção de incidentes, por exemplo, precisa definir que eventos entram no cálculo, quando cada intervalo começa e termina, quais registros são confiáveis e como interpretar os resultados. Sem essas escolhas, um número pode parecer preciso e ainda assim representar coisas diferentes para pessoas diferentes.

O indicador não é o objetivo em si. “Melhorar a prontidão de resposta” é uma intenção; a proporção de incidentes com responsável designado dentro de um prazo acordado pode ser um indicador relacionado. A medida oferece uma janela limitada sobre o processo. Ela não prova, sozinha, que a prontidão melhorou, que o risco total diminuiu ou que a equipe tomou boas decisões. Para sustentar essas conclusões, é preciso compreender o contexto e consultar outras evidências.

## Elementos de um KPI utilizável

Um indicador confiável precisa ser definido o suficiente para que duas pessoas, usando a mesma fonte e as mesmas regras, cheguem a resultados comparáveis. Uma ficha do KPI costuma registrar, em linguagem simples:

- **Objetivo associado:** que resultado operacional a medida pretende acompanhar e que decisão pode informar.
- **Fórmula:** numerador, denominador, unidade, filtros, regras para duplicatas, exceções e tratamento de dados ausentes. Se for uma contagem, explicitar o que conta como uma ocorrência.
- **Fonte:** sistemas, registros ou planilhas de onde vêm os dados, além de quem mantém cada fonte e como mudanças de esquema são tratadas.
- **Periodicidade:** frequência de coleta, cálculo e revisão. A frequência de atualização não precisa ser igual à frequência de decisão.
- **Escopo:** equipes, serviços, ambientes, tipos de incidente e intervalo temporal incluídos. Mudanças no escopo devem ser registradas para não criar comparações enganosas.
- **Interpretação:** que direção é desejável, que fatores podem alterar a medida e quais limites impedem conclusões mais fortes.
- **Responsável e versão:** quem verifica o cálculo e a definição vigente, com data de alteração para permitir auditoria e comparação histórica.

## Uso defensivo em segurança cibernética

A utilidade de um KPI é orientar uma conversa operacional e, quando apropriado, uma ação. Uma organização pode acompanhar o tempo entre o recebimento de um alerta e sua triagem, a proporção de ativos prioritários com telemetria disponível ou a parcela de ações corretivas concluídas no prazo definido. Cada medida responde a uma pergunta delimitada. Nenhuma representa por inteiro a segurança da organização.

Indicadores de prevenção podem acompanhar cobertura de controles e execução de tarefas, como a revisão de acessos privilegiados conforme a política. Indicadores de detecção podem examinar a disponibilidade de fontes de log ou o fluxo de alertas analisados. Na resposta, podem medir etapas do ciclo de tratamento, como tempo para atribuição, contenção ou comunicação. Na recuperação, podem acompanhar restauração validada de serviços. Na melhoria contínua, podem verificar se ações decorrentes de incidentes foram implementadas e se sua efetividade foi reavaliada.

KPI também serve para detectar mudanças que merecem investigação, sem declarar automaticamente sua causa. Uma elevação no tempo de triagem pode coincidir com aumento de volume, férias, indisponibilidade de ferramenta, alteração de critérios ou maior complexidade dos alertas. O número aponta onde perguntar; a análise dos registros e das condições de operação ajuda a explicar o que aconteceu.

## Onde aparece na investigação

Na investigação de um incidente, indicadores podem ser vistos em painéis, relatórios de operação, atas de revisão, acordos de nível de serviço, registros de auditoria e documentos de melhoria. Para interpretar um indicador durante ou depois de um incidente, o analista deve procurar a definição vigente na data observada, a consulta ou regra que produziu o valor, o período de referência e a origem dos dados. Também importa verificar fusos horários, atraso de ingestão, alterações de ferramenta, políticas de retenção, filtros, exclusões e correções retroativas. Uma captura de tela é útil como registro do que foi apresentado, mas pode não revelar a lógica de cálculo nem permitir reproduzir o resultado.

Evidências úteis incluem exportações com carimbo temporal, histórico de alterações do painel, configuração de consultas, documentação de campos, trilhas de auditoria e registros originais que alimentam o cálculo. Quando o dado é agregado, preservar ou localizar os itens subjacentes pode permitir conferir amostras, identificar duplicidades e verificar se a população medida corresponde ao escopo declarado. O acesso deve respeitar controles de privacidade, retenção e autorização da organização.

É importante separar três perguntas: o valor foi calculado corretamente? A medida representa o processo que se pretendia acompanhar? E o processo teve relação causal com o impacto observado? A primeira pode ser respondida por reprodução do cálculo; a segunda exige avaliar a definição e a cobertura; a terceira costuma exigir evidências adicionais e análise do contexto. Um KPI isolado raramente responde às três.

## Exemplos hipotéticos

**Hipótese: cobertura de telemetria.** O indicador é a proporção de servidores classificados como prioritários que enviaram os tipos de evento requeridos durante uma janela definida. O denominador vem do inventário aprovado para aquele período, e o numerador exige evidência de recebimento, não apenas que o agente esteja instalado. Se o inventário estiver desatualizado, o percentual perde significado. A equipe pode usar o KPI para direcionar verificações, mas deve investigar ativos sem registro antes de afirmar que estão protegidos.

**Hipótese: correções de causa recorrente.** Após incidentes repetidos, a organização acompanha a parcela de ações corretivas verificadas como concluídas até a data acordada. “Concluída” precisa significar mais do que uma tarefa marcada como encerrada: pode exigir evidência de implantação e revisão de efetividade. Um percentual alto não prova que a causa foi eliminada se a ação foi mal especificada ou se surgiram novos caminhos para a mesma falha.

## Distinções importantes

**Métrica e KPI.** Métrica é qualquer medida quantitativa ou qualitativa estruturada. KPI é uma métrica selecionada por sua relação com um objetivo operacional relevante. Todo KPI é uma medida, mas muitas medições de rotina não são “chave”. O nome dado em um painel não substitui a justificativa da escolha.

**KPI e meta.** O KPI descreve o que será acompanhado; a meta estabelece um valor ou condição desejada. Uma organização pode medir o tempo de triagem sem fixar uma meta, ou definir uma meta para um KPI já existente. Metas precisam considerar risco, capacidade e qualidade, pois uma meta inadequada pode induzir a equipe a otimizar o número em prejuízo do resultado.

**KPI e indicador de risco.** Um indicador de risco procura sinalizar exposição, mudança de probabilidade ou impacto potencial. Pode também ser usado como KPI, mas a finalidade precisa estar explícita. Volume de vulnerabilidades abertas, por exemplo, não mede risco de modo direto sem considerar exposição, criticidade, possibilidade de exploração, controles e contexto do ativo.

**KPI e evidência.** O indicador é um resumo construído a partir de dados e regras. A evidência original pode ser um evento, tíquete, registro de mudança ou resultado de validação. Resumos ajudam a observar tendências, mas não substituem os elementos necessários para reconstruir um caso ou sustentar uma conclusão de investigação.

## Limitações e erros de interpretação

Erros frequentes incluem:

- Tratar correlação temporal como causa. Uma melhora simultânea a uma mudança não prova que a mudança produziu o efeito.
- Comparar períodos com denominadores, fontes, critérios ou escopos diferentes sem assinalar a quebra da série.
- Usar médias que ocultam extremos, casos graves ou desigualdades entre equipes e serviços.
- Considerar ausência de registro como ausência de evento ou como sucesso.
- Definir um indicador tão amplo que equipes diferentes o calculam de formas incompatíveis.
- Interpretar aumento de notificações como piora automática. Pode haver mais cobertura, maior transparência ou mudança na classificação.
- Usar uma meta como substituto de julgamento técnico, especialmente em incidentes excepcionais.

Há também o efeito de incentivo: quando uma medida se torna alvo de recompensa ou punição, as pessoas podem concentrar esforço no que é contado. Uma equipe avaliada apenas pelo número de alertas encerrados pode priorizar encerramentos rápidos em vez de análises completas. Uma meta rígida de tempo pode encorajar a redefinição do início do relógio ou a reclassificação de casos. Esse efeito não exige má-fé; pode surgir como adaptação previsível às regras de avaliação.

Para reduzir distorções, alinhe o indicador ao resultado desejado, examine medidas complementares e faça revisão qualitativa de amostras. Documente exceções e alterações. Use métricas para aprender e decidir, não como prova automática de desempenho individual. Quando decisões de alto impacto dependem do valor, confira a origem, reproduza o cálculo e registre as incertezas.

## Implicações para resposta a incidentes

Durante uma resposta ativa, KPIs podem ajudar a coordenar trabalho, identificar gargalos e comunicar andamento. A equipe pode acompanhar casos sem responsável, sistemas ainda sem avaliação ou ações pendentes. O painel deve deixar claro o horário da última atualização e o universo coberto, porque dados atrasados ou incompletos podem parecer um quadro atual.

## Perguntas frequentes

### Todo indicador precisa ter uma meta?

Não. Defina primeiro o que será medido e por quê. Uma meta pode ajudar quando há base para escolher uma condição desejada e a equipe consegue influenciar o resultado; se for prematura, pode incentivar comportamentos contraproducentes.

### Quantos KPIs uma equipe deve acompanhar?

Não há quantidade universal. Cada KPI requer coleta, validação e atenção. Prefira um conjunto administrável, ligado a decisões reais, e mantenha medidas suficientes para revelar dimensões relevantes e efeitos colaterais. Mais indicadores não significam automaticamente mais controle.

### Um KPI que piorou significa que a segurança piorou?

Não necessariamente. Verifique definição, fonte e escopo; depois decomponha o resultado por contexto e consulte evidências operacionais. Pode haver deterioração, mudança de cobertura ou coleta, aumento de demanda ou alteração de classificação. O indicador sinaliza uma questão, não oferece diagnóstico completo.

### Como comparar equipes ou organizações?

Só com cautela e definições, períodos, denominadores e condições suficientemente compatíveis. Missão, arquitetura, severidade, população, ferramentas e capacidade influenciam os valores. Uma comparação não deve virar ranking automático de competência.

### Como saber se um KPI ainda é útil?

Confirme se segue ligado a um objetivo, se os dados são confiáveis, se alguém usa o resultado e se os incentivos continuam aceitáveis. Revise-o quando processo ou risco mudar; aposente-o quando deixar de orientar decisões, preservando versões para interpretar o histórico.

## Relação com o capítulo 9

Na versão original, o capítulo 9 oferece o contexto relacionado a este verbete. A aplicação prática do KPI depende de explicitar objetivo, fórmula, fonte, periodicidade e interpretação, e de tratar a medida como apoio à revisão do processo. Essa disciplina ajuda profissionais de defesa a reconhecer o que um número mostra, o que deixa em aberto e que evidência adicional é necessária antes de agir ou concluir.
