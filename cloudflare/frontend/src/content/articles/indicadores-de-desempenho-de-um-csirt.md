# Indicadores de desempenho de um CSIRT

## Pergunta central: o que os números devem ajudar a decidir?

Quando a liderança pergunta se o CSIRT está funcionando bem, uma lista de tickets fechados não responde. O volume pode ter aumentado porque houve mais incidentes, porque a equipe passou a registrar melhor, porque uma campanha de conscientização gerou mais notificações ou porque a triagem ficou menos eficiente. Também pode ter diminuído enquanto ameaças relevantes esperavam por análise. O indicador útil conecta uma observação a uma decisão: que capacidade precisa ser preservada, que gargalo deve ser removido e que serviço está falhando para quem depende dele?

Um CSIRT — equipe de resposta a incidentes de segurança computacional — presta serviços a uma comunidade definida. Pode receber notificações, avaliar relatos, coordenar respostas, compartilhar informações, orientar contenção, apoiar recuperação e produzir conhecimento preventivo. Seu desempenho, portanto, não cabe em uma única medida de velocidade ou produtividade. Precisa representar a qualidade e a capacidade desses serviços, além das condições que tornam a resposta possível.

A pergunta prática não é “quantos casos a equipe encerrou?”, mas “quais resultados o serviço precisa produzir, para quem, sob quais limites e como saberemos se está melhorando?”. A resposta começa pela missão e pelo acordo com as áreas atendidas. Métricas devem tornar visíveis escolhas e trade-offs; não devem fingir que transformam decisões complexas em uma nota objetiva.

Este artigo apresenta um método para escolher indicadores, definir sua semântica e usá-los em conversas operacionais. Fórmulas e exemplos são modelos ilustrativos, não padrões universais. Cada organização precisa validá-los diante do escopo, dos riscos, do modelo de atendimento, da legislação aplicável e da qualidade dos registros que possui.

## O que significa desempenho em resposta a incidentes

Desempenho é a relação entre objetivos do serviço, recursos e resultados observáveis. Em um CSIRT, “resultado” pode ser uma notificação triada com contexto suficiente, uma organização apoiada para conter uma ameaça, uma coordenação que esclarece dependências entre equipes ou uma recomendação de recuperação que evita retorno prematuro à operação. O serviço nem sempre controla o resultado final: quem opera o sistema, decide sobre desligamento ou autoriza mudanças é, em geral, outra equipe. É importante medir a contribuição do CSIRT sem atribuir a ele todo o desfecho.

## Contexto e limites do serviço

Antes de contar, delimite a comunidade atendida, os canais, os horários, os tipos de evento elegíveis e as responsabilidades. Um CSIRT interno pode atender empregados e unidades de negócio; um centro setorial pode coordenar organizações independentes; um prestador pode assumir apenas triagem e encaminhamento. Comparar seus tempos sem registrar diferenças de escopo é enganoso. Um serviço com plantão permanente não é diretamente comparável a outro que recebe casos somente em horário comercial.

## Da missão a um conjunto enxuto de indicadores

O ponto de partida é uma decisão recorrente. Se a gestão precisa definir cobertura para alertas críticos, a pergunta é se os casos de maior prioridade recebem atenção conforme o compromisso estabelecido. Se as equipes atendidas reclamam de orientações difíceis de executar, a questão é qualidade e utilidade da comunicação. Se a fila cresce, é necessário saber se o aumento vem de entradas, complexidade, espera externa, capacidade insuficiente ou retrabalho.

Para cada objetivo, formule uma hipótese verificável e uma decisão possível. “Queremos responder melhor” é amplo demais. “Casos classificados como urgentes devem receber uma primeira avaliação no período acordado, e a coordenação deve saber quando o prazo corre risco” é mais operacional. O indicador não prova que todo o objetivo foi atingido, mas mostra um aspecto relevante para agir.

- nome e finalidade decisória;
- população incluída e excluída, com unidade de análise;
- numerador, denominador e regra de cálculo;
- início, fim e tratamento de pausas no relógio;
- fonte, responsável, periodicidade e atraso esperado dos dados;
- cortes permitidos, como prioridade, canal, serviço ou horário;
- limitações conhecidas, riscos de incentivo e regra de revisão.

## Indicadores de fluxo e oportunidade

O tempo até a primeira avaliação pode ser calculado, por exemplo, como o intervalo entre o recebimento e a primeira classificação registrada. Relate mediana e distribuição por prioridade; uma média isolada pode esconder uma pequena quantidade de casos muito demorados. Se o compromisso é atender uma parcela dos casos dentro de um limite, a proporção dentro do prazo pode ser mais inteligível: casos elegíveis atendidos no limite dividido pelo total elegível no período. O limite deve vir do acordo de serviço e do risco, não de uma meta escolhida apenas porque parece ambiciosa.

Separe confirmação automática de análise humana. Uma resposta automática pode assegurar que a mensagem chegou e informar o próximo passo, mas não equivale a triagem. Exibir as duas como “tempo de resposta” mistura experiências distintas. Um painel pode apresentar confirmação de recebimento, contato humano e avaliação inicial como eventos separados, desde que cada um tenha valor operacional.

A idade da fila mostra há quanto tempo os casos ainda abertos aguardam uma etapa. Ela complementa o tempo dos casos concluídos, que tende a ignorar os que continuam parados. Acompanhe quantidade e idade por prioridade, etapa e motivo de espera. Um caso antigo que aguarda retorno externo não necessariamente indica inação do CSIRT, mas pode revelar que o processo de escalonamento precisa de um caminho melhor.

Tempos de contenção e recuperação são tentadores, mas dependem de autoridade, disponibilidade de cópias, fornecedores, decisões de negócio e condições técnicas. Se forem usados, nomeie-os como tempos do processo interorganizacional e identifique os marcos que cada parte controla. Uma medida útil pode ser o tempo entre a recomendação do CSIRT e a confirmação da ação pela equipe de infraestrutura; isso evidencia uma interface, sem atribuir ao CSIRT a decisão operacional que não lhe pertence.

## Indicadores de qualidade e utilidade

A completude não é qualidade por si só. Um formulário totalmente preenchido com informação incorreta ou sem utilidade continua ruim. Combine verificação documental com revisão por pares e, quando apropriado, retorno da equipe atendida. Pergunte se a orientação era compreensível, se chegou a tempo e se esclareceu quem deveria agir. Use perguntas breves e abertas quando a amostra for pequena, e interprete as respostas como sinais, não como prova de eficácia causal.

Retrabalho pode ser observado por reaberturas, reclassificações substanciais ou solicitações repetidas de informação que já deveria estar disponível. Mas cada ocorrência precisa de contexto. Reabrir um caso pode ser uma decisão prudente diante de nova evidência; uma classificação alterada pode refletir melhor conhecimento, não falha. A medida serve para selecionar casos para revisão e encontrar padrões, não para punir quem corrige o registro.

Indicadores de coordenação podem observar se organizações e áreas envolvidas foram identificadas, se responsáveis e próximos passos foram confirmados e se atualizações ocorreram no ritmo combinado. Isso não deve se transformar em contagem de reuniões. Uma reunião sem decisão não prova coordenação; uma atualização escrita bem estruturada pode resolver uma dependência sem reunião. Avalie artefatos e resultados do processo, preservando confidencialidade.

## Capacidade, prevenção e aprendizado

Uma medida de cobertura pode comparar horas de serviço previstas com horas efetivamente cobertas por profissionais habilitados, segmentada por capacidade necessária. Contudo, a escala preenchida não garante prontidão: indisponibilidade de ferramentas, acessos expirados ou ausência de autoridade podem impedir a ação. Revise cenários operacionais e dependências, registrando limitações como riscos, não convertendo-as artificialmente em um único índice.

O trabalho preventivo costuma desaparecer em métricas baseadas somente em incidentes concluídos. Registre publicações, orientações, revisões de padrões, exercícios e melhorias de processo como entregas com público e propósito. Avalie se a audiência recebeu e compreendeu a informação e se uma mudança operacional foi adotada quando isso puder ser observado. Não atribua a uma publicação isolada a queda de ocorrências: tendências podem refletir mudanças na exposição, na detecção ou na disposição de reportar.

O aprendizado pós-incidente pode ser acompanhado pela proporção de ações acordadas que foram concluídas no prazo e pela qualidade de sua verificação. Uma ação concluída não significa risco eliminado. É preciso verificar se a mudança foi implementada, se o responsável confirmou evidência e se a hipótese que motivou a ação continua válida. Atrasos devem ser discutidos com o dono do risco e a liderança pertinente, em vez de transferidos ao CSIRT como culpa por uma decisão alheia.

Tempo reservado para treinamento e revisão técnica também é um indicador de capacidade sustentável. Se toda hora disponível é consumida por fila reativa, a equipe pode aparentar produtividade elevada enquanto perde competência e reduz sua prevenção. Compare demanda, complexidade e tempo protegido para melhoria ao longo do período. Os números não definem o nível ideal, que depende do mandato e do risco, mas revelam quando a operação se tornou incapaz de aprender.

## Fontes de evidência e qualidade dos dados

## Como transformar sinais em investigação útil

Um indicador serve também para escolher onde olhar em seguida. Se a idade da fila aumenta apenas em um tipo de solicitação, examine a etapa e a dependência que aparecem nos registros antes de ampliar a escala. Se a qualidade documental cai quando há troca de turno, verifique se a passagem de responsabilidade tem modelo claro e tempo reservado. São hipóteses de processo: precisam ser testadas com casos e conversas, não convertidas imediatamente em causa confirmada.

Para não confundir coincidência com explicação, mantenha uma breve trilha de análise. Registre o sinal, período e população observados; as hipóteses consideradas; a evidência consultada; as limitações; a decisão tomada; e quando será verificado se a ação ajudou. Isso permite que outra pessoa reconstrua o raciocínio sem depender da memória de quem estava na reunião. Também impede que uma correlação temporária vire narrativa permanente sobre uma equipe ou canal.

Ao comparar períodos, observe mudanças simultâneas: volume e mistura de prioridades, feriados, indisponibilidade de ferramentas, alteração na entrada de relatos ou novo procedimento. Não é necessário ajustar estatisticamente cada fator para toda análise, mas é necessário declará-los quando podem alterar a interpretação. Um pequeno gráfico anotado com mudanças de contexto e uma amostra de casos podem ser mais honestos que um índice composto de difícil explicação.

## Papéis e conversas de interpretação

As áreas atendidas precisam participar da escolha de compromissos e da interpretação dos resultados. Um tempo de retorno aceitável depende da criticidade, do canal e do que o solicitante precisa fazer. Convide representantes de operações, negócio e tecnologia para revisar exemplos anonimizados e identificar se os indicadores capturam fricções reais. Não transfira a elas a responsabilidade de classificar tecnicamente um incidente; a consulta serve para alinhar serviço e expectativa.

A reunião de revisão deve perguntar o que mudou, onde a distribuição se deslocou, que explicação é sustentada pelos registros e que ação será tomada. Diferencie observação, hipótese e alerta. Observação: a fila de prioridade alta envelheceu mais neste período. Hipótese: a ausência de um especialista em certo turno contribuiu. Evidência a buscar: escala, transferências e casos daquele turno. Alerta: há uma dependência que pode comprometer o compromisso, ainda que a causa não esteja confirmada. A ata deve preservar essa distinção.

## Cenários contrastantes para leitura do painel

Considere um cenário hipotético: em um trimestre, os casos recebidos aumentam após a adoção de um canal de denúncia mais acessível. O total de encerramentos também sobe, mas cresce a idade da fila de casos urgentes. A leitura “a produtividade aumentou” é incompleta. A nova entrada pode ser positiva, pois notificações antes invisíveis agora chegam; ao mesmo tempo, o aumento de fila urgente sinaliza risco de capacidade ou priorização. A equipe deve separar os dados por canal e prioridade, verificar se houve alteração na classificação e discutir cobertura. A hipótese de que o canal causou o aumento de trabalho é plausível, mas requer registros comparáveis.

Um terceiro cenário hipotético apresenta menos casos e maior satisfação. Isso pode refletir orientações preventivas melhores; também pode indicar que as pessoas não sabem como reportar, que um canal está indisponível ou que houve mudança de exposição. Verifique alcance dos canais, notificações de entrada, pesquisa de confiança e sinais de fontes independentes autorizadas. Não conclua que risco caiu apenas porque caiu a contagem.

## Exemplos defensivos seguros de uso

Em um exercício interno autorizado, a equipe pode usar registros fictícios ou anonimizados para testar o painel. Um caso simulado chega por e-mail, exige confirmação de recebimento, triagem, contato com o dono do sistema e acompanhamento de uma medida de contenção definida pelo exercício. Os participantes registram horários, pausas e responsáveis. Depois, comparam a visão da linha do tempo à visão agregada. O propósito é validar semântica e fluxo; não é testar técnicas contra sistemas reais.

## Erros comuns e como evitá-los

Contar tickets isoladamente recompensa volume. Pode encorajar divisão artificial de casos, encerramento prematuro ou priorização de tarefas fáceis. Volume é contexto de demanda, não medida suficiente de desempenho. Apresente-o ao lado de gravidade, idade, complexidade, resultados de qualidade e trabalho preventivo. Explique quando uma notificação foi agrupada ou desmembrada.

Misturar prioridades apaga risco. Uma melhora geral pode resultar de muitos casos simples, enquanto os críticos pioram. Separe prioridades e monitore mudanças na composição. Se os critérios de severidade mudarem, documente a versão e evite comparar períodos como se fossem equivalentes. Em alguns casos, uma revisão retrospectiva da classificação é necessária para entender uma discrepância.

## Critérios para avaliar se o indicador serve

Um indicador é útil quando tem relação explícita com um objetivo, dados cuja origem pode ser explicada e uma interpretação que orienta uma ação possível. Deve ser compreensível para quem executa e para quem recebe o serviço. Deve permitir identificar efeitos adversos: por exemplo, acelerar a primeira resposta enquanto cai a qualidade da triagem. E deve ser proporcional à capacidade de coleta; uma medida sofisticada que exige manutenção manual constante pode se tornar menos confiável que uma revisão simples.

## Exercício de mesa: do caso à decisão

O exercício a seguir é hipotético e deve ser realizado em ambiente autorizado, com participantes e dados fictícios ou devidamente anonimizados. O facilitador apresenta uma sequência: chega uma notificação incompleta; a triagem identifica possível impacto relevante; o responsável pelo ativo está indisponível; uma área de negócio pede previsão de retorno; mais tarde, a equipe recebe evidência que altera a prioridade. Não são necessários comandos ou técnicas de exploração. O objetivo é observar como a equipe registra e coordena decisões.

Antes de começar, cada participante recebe a definição de “recebimento”, “primeira avaliação”, “espera externa”, “mudança de prioridade” e “conclusão do trabalho do CSIRT”. A equipe percorre a linha do tempo e anota evento, hora, responsável, informação disponível e próximo passo. O facilitador não deve avaliar a rapidez como um fim em si; deve observar se incerteza e dependências são comunicadas, se há dono para ações e se a prioridade é revista diante de nova evidência.

Ao terminar, cada grupo calcula, de forma aproximada, os tempos definidos na ficha e compara interpretações. Perguntas úteis: dois participantes identificaram o mesmo início do relógio? A pausa externa foi registrada sem desaparecer do tempo total? A resposta automática foi confundida com análise? O indicador de cumprimento mudou quando a prioridade foi atualizada? A decisão de recuperação cabia ao CSIRT ou ao proprietário do sistema? Divergências apontam para definições ou procedimentos a ajustar.

O produto do exercício é uma lista curta de mudanças: clarificar um campo, definir quem registra uma espera, ajustar a mensagem para o solicitante ou rever um escalonamento. A equipe deve atribuir responsáveis e prazo de revisão. Não transforme o resultado em ranking de participantes. O cenário é artificial e não prevê todos os incidentes; serve para revelar pressupostos e testar se as medidas são interpretáveis antes de serem usadas na operação.

## Roteiro de implementação

Primeiro, faça inventário dos serviços e de seus públicos. Converse com as equipes atendidas para confirmar expectativas, canais e limites, e registre decisões que pertencem a cada parte. Em seguida, desenhe o fluxo real, incluindo exceções e esperas. Não comece pelo dashboard; comece por uma descrição que analistas e usuários reconheçam.

Depois, escolha um objetivo operacional e uma ou duas perguntas de gestão que ajudem a agir. Selecione um conjunto inicial pequeno, combinando oportunidade, qualidade e capacidade. Escreva as fichas completas, determine quem é dono do dado e defina quais informações não devem aparecer em relatórios agregados. Revise critérios com representantes da operação, dados, privacidade e áreas atendidas.

Antes de estabelecer metas, extraia uma linha de base e valide amostras. Compare manualmente uma pequena seleção com o cálculo automatizado. Registre lacunas, duplicatas e efeitos de mudanças de processo. Se os dados forem insuficientes, use uma coleta temporária e claramente identificada, ou priorize melhorar o registro; não apresente precisão que não existe.

## Perguntas frequentes

### Quais indicadores devem aparecer primeiro?

A resposta depende dos compromissos do serviço. Um início razoável costuma combinar tempo de primeira avaliação por prioridade, idade da fila, qualidade de registro ou orientação, cumprimento de compromissos acordados e capacidade de cobertura. O conjunto é apenas uma hipótese de trabalho. Se uma dessas medidas não levar a uma decisão ou depender de dado duvidoso, substitua-a. Não existe lista universal que sirva igualmente a CSIRTs internos, setoriais e prestadores.

### Tempo médio de resposta é suficiente?

Não. Ele pode ocultar diferenças de prioridade, atrasos extremos e casos ainda abertos. Também pode misturar confirmação automática com análise. Defina marcos, mostre distribuição e denominador, segmente por prioridade e acompanhe a fila em aberto. Use o número junto a medidas de qualidade, para que rapidez não seja confundida com resolução.

### Devo medir satisfação das áreas atendidas?

Pode ser útil para entender clareza, acessibilidade e confiança. Explique a pergunta, o público e a taxa de resposta; respostas voluntárias podem representar desproporcionalmente experiências muito boas ou ruins. Satisfação não comprova contenção ou recuperação e não substitui revisão técnica. Combine percepção com evidência do processo e convide comentários que apontem uma mudança prática.

Somente quando escopo, prioridades, horários, recursos, definições e qualidade de dados forem suficientemente comparáveis. Mesmo assim, use a comparação para localizar perguntas e compartilhar práticas, não para inferir competência a partir de uma classificação. Uma diferença pode refletir demanda, exposição ou mandato. Explique limitações e evite publicar comparações identificáveis sem base e governança apropriadas.

Não há número fixo. Um sinal prático é quando o painel exige explicações repetitivas, ninguém consegue relacionar medidas a decisões ou a coleta consome tempo que deveria servir ao atendimento. Mantenha apenas medidas com propósito e responsável. Indicadores de diagnóstico podem existir em análises internas sem ocupar a visão executiva permanente.

Declare a limitação e melhore a fonte. Faça amostragem manual com critérios, corrija definições, estabeleça validações simples e acompanhe completude. Se necessário, adie conclusões sobre desempenho. Um dado incompleto pode orientar uma investigação, mas não deve ser apresentado como fato preciso. Registre a confiança na informação e a ação para elevá-la.

Pode, desde que haja acordo entre as partes sobre escopo, relógio, prioridades, exceções e responsabilidades, e que a capacidade correspondente exista. Um indicador descritivo não se torna compromisso apenas por ter um limite colorido. Metas de serviço devem ser revistas quando demanda ou risco muda e precisam distinguir o que o CSIRT controla do que depende de outras equipes.

Contagem de tickets, tempo bruto por caso e taxa de encerramento isolados são especialmente frágeis. Casos variam em complexidade e gravidade, e a cooperação entre funções é essencial. O uso individual pode levar a seleção de tarefas fáceis e ocultação de incerteza. Para apoiar desenvolvimento, prefira conversas sobre competências, revisão por pares e condições de trabalho, com evidências contextualizadas.

Apresente o que foi observado, o período, a dimensão afetada, o denominador e as limitações. Separe a hipótese de causa da evidência disponível. Informe a consequência possível e o passo de verificação ou mitigação em curso. Um sinal de alerta merece atenção mesmo antes da causa estar provada, mas deve ser rotulado como sinal, não como diagnóstico confirmado.

## Leitura complementar e responsabilidade profissional

O capítulo 9 da versão original, dedicado a métricas de resposta a incidentes, oferece um ponto de partida para relacionar medição ao trabalho do CSIRT. O livro de Hiago Kin Levi, publicado pela Editora Brasport, pode ajudar o leitor a situar essa discussão no contexto mais amplo de resposta a incidentes. A leitura não substitui documentação técnica atualizada, treinamento, validação de procedimentos nem julgamento da equipe diante de um caso concreto.

Uma prática madura de medição explica o que cada número representa, quem pode agir sobre ele e que incerteza permanece. O CSIRT deve mostrar sua contribuição sem reivindicar controle sobre decisões alheias; as equipes atendidas precisam participar das definições e melhorias. Assim, os indicadores apoiam confiança e capacidade compartilhada.
