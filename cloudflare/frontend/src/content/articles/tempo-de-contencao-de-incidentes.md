# Tempo de contenção de incidentes

## Pergunta central: o que a equipe quer saber quando mede contenção?

Quando uma organização pergunta quanto tempo leva para conter um incidente, a necessidade real raramente é obter um número para uma apresentação. A pergunta de gestão é mais concreta: depois que o incidente foi reconhecido, por quanto tempo a atividade adversária pôde continuar produzindo efeitos antes que a equipe conseguisse limitar sua capacidade de agir? Essa pergunta serve para orientar prioridades, revisar decisões e identificar gargalos. Ela não tem uma resposta confiável sem uma definição compartilhada de início, fim, escopo e resultado.

## Definição: qual intervalo será chamado de tempo de contenção?

Essa escolha não deve ser confundida com o começo da investigação. A investigação pode começar diante de um alerta ainda não confirmado. Se a organização inicia o relógio no primeiro alerta, mede também a triagem e a classificação. Se o inicia no reconhecimento formal, mede a resposta após a declaração. Os dois indicadores podem ser úteis, mas respondem a perguntas diferentes. Chamar ambos pelo mesmo nome, sem explicitar o marco, impede comparação e esconde onde o tempo foi consumido.

Também é comum confundir contenção com erradicação e recuperação. Contenção procura limitar atividade, alcance ou dano durante a resposta. Erradicação busca remover causas e mecanismos que permitiriam a continuidade ou o retorno. Recuperação restaura operações de forma controlada e verifica condições de funcionamento. As etapas podem se sobrepor: por exemplo, revogar um token pode conter uma via enquanto a equipe ainda investiga se outras credenciais foram expostas. Ainda assim, não são intercambiáveis. O indicador deve terminar quando a contenção definida foi validada, não quando toda a resposta está encerrada.

O escopo faz parte da definição, não é uma nota de rodapé. “Conter o incidente” pode significar interromper uma conta, bloquear uma sessão, isolar um equipamento, revogar credenciais, suspender uma integração, restringir tráfego ou desabilitar temporariamente uma função. Cada ação limita uma capacidade distinta. Se o caso envolve vários vetores, a contenção da primeira via não equivale à contenção de todas as vias conhecidas. O registro precisa nomear o objetivo: bloquear o acesso observado, interromper a execução em um ativo, impedir a propagação conhecida ou outra condição verificável.

## Contexto: por que as equipes precisam de mais de um relógio?

O tempo entre a atividade inicial e o reconhecimento costuma ter grande incerteza. Um evento mais antigo encontrado posteriormente pode indicar que o agente estava presente antes da primeira detecção, mas a primeira evidência localizada não revela necessariamente a hora real de entrada. Registros incompletos, retenção limitada, relógios desalinhados e fontes indisponíveis podem ampliar essa incerteza. É tecnicamente mais responsável registrar “atividade observada no intervalo conhecido” e indicar o grau de confiança do que afirmar um tempo de permanência exato sem sustentação.

O tempo após o reconhecimento também não é homogêneo. Uma equipe talvez precise decidir se uma conta deve ser desativada imediatamente ou se deve preservar acesso para coletar evidências e compreender o alcance. Uma medida de baixo impacto pode ser aplicada em minutos; uma ação que afeta operação crítica pode exigir validação de dependências, aprovação de um responsável e uma alternativa de continuidade. Esses passos não significam automaticamente falha. Podem refletir controles adequados para evitar dano operacional ou perda de evidência. A pergunta correta é se o risco foi entendido, documentado e revisado.

## Decisões práticas: como escolher os marcos e o resultado?

No final, diferencie “ação enviada”, “ação aplicada” e “ação validada”. Uma solicitação para revogar sessões não prova que as sessões foram invalidadas. Uma regra de bloqueio aprovada não comprova que todos os pontos de aplicação receberam a configuração. Um equipamento marcado como isolado pode permanecer com uma conexão de gerenciamento, conforme o desenho do ambiente. Esses estados são evidências distintas. A medida deve usar o mais forte que seja pertinente ao objetivo declarado e alcançável pelas fontes disponíveis.

Decida como lidar com pausas. Há organizações que reportam tempo corrido e tempo dentro do horário de cobertura. O primeiro representa a duração do risco no calendário; o segundo tenta representar esforço ou disponibilidade de resposta. Suspender o relógio durante uma noite pode ser útil para comparar carga de trabalho, mas não muda o fato de que a atividade adversária poderia persistir nesse intervalo. Se ambos forem necessários, mantenha-os com nomes distintos. Nunca subtraia horas sem registrar o motivo e o critério de pausa.

Também é importante decidir como representar incerteza e dados ausentes. Se o início provável da atividade é desconhecido, não o invente a partir do primeiro registro disponível. Se a hora de validação não foi preservada, mantenha o campo como ausente e explique a limitação. A ausência pode reduzir a comparabilidade, mas estimativas silenciosas reduzem a confiança nos resultados. Em relatórios agregados, informe quantos casos tinham marcos completos e quantos precisaram ser excluídos ou classificados como inconclusivos.

## Fontes de evidência: quais registros sustentam uma duração defensável?

O horário só é comparável se os relógios das fontes forem razoavelmente consistentes. Diferenças de fuso, horário de verão, sincronização deficiente, atrasos de ingestão e processamento em lote podem criar eventos fora de ordem. Registre o fuso ou normalize os horários para uma referência única, mantendo o dado original quando necessário. Se houver atraso entre a execução e a chegada do evento ao sistema central, não use automaticamente o horário de ingestão como horário de execução.

Uma reconstrução retrospectiva pode ser necessária quando a equipe não marcou todos os eventos em tempo real. Nesse caso, identifique-a como reconstrução, registre a fonte e a confiança atribuída, e não misture seu nível de certeza com registros contemporâneos sem sinalização. Por exemplo, o horário de uma decisão lembrado em entrevista pode ser menos preciso do que uma entrada automática de auditoria. Ambos podem contribuir, desde que a diferença seja legível para quem avalia o número.

O acesso aos registros também merece atenção. Evidências de incidente podem conter dados pessoais, identificadores de clientes, detalhes de arquitetura e informação comercial sensível. A coleta para métricas deve usar apenas o necessário para sustentar marcos e análise, com controles de acesso e retenção compatíveis com as políticas aplicáveis. Relatórios de tendência podem apresentar categorias e durações sem reproduzir dados identificáveis. Uma medição confiável preserva proveniência sem ampliar desnecessariamente a exposição da própria investigação.

## Papéis: quem registra, decide e valida?

O analista que abre a investigação deve registrar o evento inicial de triagem e a evidência que motivou o acompanhamento. Esse papel não implica autoridade para declarar qualquer sinal como incidente. O responsável pelo incidente, segundo o processo da organização, registra o reconhecimento formal ou delega essa confirmação. A separação evita que alterações posteriores no entendimento mudem retroativamente o início sem explicação.

O líder de resposta ou pessoa designada coordena a decisão de contenção. Deve registrar a opção selecionada e a razão operacional, incluindo o risco de agir e o risco de aguardar. Em sistemas com impacto relevante, a decisão pode envolver o responsável pelo serviço, identidade, infraestrutura, segurança, privacidade ou continuidade. A governança precisa estabelecer quem tem autoridade em situações urgentes e qual mecanismo permite decisões fora do fluxo normal. Um indicador não deve levar a equipes a pular aprovações necessárias.

## Cenários contrastantes: o mesmo tempo pode significar resultados diferentes

Considere um cenário hipotético de uma identidade de usuário usada em uma aplicação corporativa. A equipe reconhece sinais de uso indevido, registra a decisão de suspender a conta, executa o bloqueio e valida que a sessão observada não pode mais acessar o serviço. Se o escopo do caso é precisamente aquela identidade e aquela sessão, a duração entre reconhecimento e validação pode ser uma medida útil. Ainda assim, a conclusão não prova que não houve cópia de dados antes do bloqueio nem que outra credencial não esteja comprometida.

Agora considere outro cenário hipotético, também de identidade. A conta é suspensa quase imediatamente, mas a investigação posterior encontra um token de integração ainda válido, associado a um serviço. O tempo até a primeira ação foi curto; o tempo até a contenção da via conhecida não terminou na suspensão da conta. Apresentar somente o primeiro intervalo como “tempo de contenção” exageraria o resultado. A equipe deve registrar a primeira ação como marco intermediário e continuar a medida até validar as vias incluídas no escopo revisado.

## Erros comuns: como uma medida aparentemente simples se torna enganosa?

Um erro recorrente é iniciar o relógio no primeiro evento que mais tarde parece relacionado ao incidente. Se o sinal só foi reconhecido retrospectivamente, a equipe não estava necessariamente em posição de agir naquele momento. Esse dado pode apoiar uma análise de detecção, mas não mede a resposta após reconhecimento. A narrativa deve distinguir o momento em que a evidência ocorreu do momento em que foi observada e interpretada.

Outro erro é encerrar a medição quando uma solicitação foi encaminhada. O pedido pode ficar em fila, falhar, chegar ao destino errado ou ser aplicado apenas parcialmente. A evidência de execução e a de validação têm papéis próprios. Sem elas, o número representa a velocidade de abrir uma tarefa, não a efetividade da contenção.

Comparar períodos sem manter o método estável produz tendências falsas. Uma equipe que passou a registrar o reconhecimento mais cedo pode parecer mais lenta, embora a resposta tenha melhorado. Uma mudança na definição de validação pode alongar a duração reportada sem alterar o desempenho operacional. Quando a metodologia muda, documente a data, explique a alteração e evite apresentar séries como se fossem perfeitamente equivalentes.

Por último, um sinal ausente depois da ação não prova sempre que a contenção funcionou. Pode significar que o agente cessou atividade, que a telemetria parou, que o ativo ficou inacessível ou que o evento não foi coletado. A validação deve procurar evidência positiva da aplicação da medida e verificar se a observação continua disponível. “Não vimos mais nada” é uma conclusão fraca quando a capacidade de ver também foi interrompida.

## Critérios de avaliação: o que deve acompanhar o número?

Uma leitura responsável acompanha a duração com pelo menos quatro dimensões: o que foi contido, quanto do escopo conhecido foi coberto, que risco permaneceu e qual foi o efeito operacional. Para cada caso, a equipe pode perguntar se a via observada foi interrompida, se havia outras vias conhecidas, se a continuidade do serviço foi afetada e se surgiram sinais posteriores que mudaram a avaliação. Essa revisão transforma o valor em uma oportunidade de aprendizado.

Considere a completude dos marcos. Qual proporção dos registros tem horários de início, decisão, execução e validação apoiados por fonte? A resposta ajuda a avaliar a confiabilidade do próprio indicador. Se muitos casos dependem de lembrança posterior, o primeiro problema pode ser melhorar o registro durante a resposta, não comparar tempos entre equipes. Uma lacuna de dados é um resultado de governança que merece atenção, não uma razão para preencher campos com estimativas como se fossem fatos.

Observe a adequação da contenção. A equipe delimitou o objetivo e escolheu uma ação proporcional? Considerou alternativas menos disruptivas e o risco de esperar? A ação atingiu os sistemas e identidades relevantes? A evidência de validação foi suficiente para o escopo declarado? O incidente precisou ser reaberto? Essas questões evitam premiar a interrupção mais ampla e rápida quando ela não era necessária ou não resolveu a via investigada.

## Exercício de mesa: como testar a medição sem tocar em sistemas reais?

Um exercício de mesa pode testar o processo com uma narrativa fictícia e dados preparados. Seu propósito é verificar se os participantes sabem quando iniciar os marcos, quem decide, quais evidências serão necessárias e como comunicar incerteza. O exercício não deve incluir comandos de exploração nem interagir com infraestrutura real. Uma equipe autorizada pode conduzi-lo em sala, com um facilitador e registros simulados claramente marcados.

Em seguida, apresente uma restrição: o proprietário da aplicação informa que a suspensão da conta interromperá uma função operacional, e a equipe de identidade não sabe se a revogação encerra todas as sessões. O grupo deve explicitar opções, autoridade e riscos, escolhendo uma ação simulada e documentando por que é proporcional. O facilitador pode introduzir uma segunda via hipotética, como um token de integração, para verificar se os participantes confundem a primeira ação com contenção total.

Finalize com evidências simuladas de execução e validação. Uma fonte confirma a revogação; outra não tem dados suficientes para demonstrar que o token foi invalidado. A equipe deve decidir se declara a contenção completa, parcial ou inconclusiva segundo o escopo que escolheu. Deve ainda dizer quem autorizaria uma nova intervenção e quais registros preservaria. O facilitador observa se o grupo distingue fato confirmado, hipótese e alerta.

Após o exercício, revise o mapa de eventos. Os participantes conseguiram identificar cada marco? A decisão foi atribuída ao papel adequado? O horário utilizado representa a execução ou apenas a solicitação? O critério de validação estava definido antes da chegada da evidência? O cenário revelou dependência de uma pessoa, uma fonte de dados ausente ou um campo pouco claro no sistema de casos? As respostas podem orientar ajustes no procedimento e no formulário.

## Roteiro de implementação: como tornar a medida útil no processo existente?

Comece com um objetivo explícito de uso. Decida se o indicador servirá para identificar gargalos, revisar cobertura de resposta, orientar investimento ou acompanhar uma mudança de processo. Evite começar pela criação de um ranking. Um objetivo claro determina quais classes de incidentes, marcos e evidências são necessários e reduz o risco de coletar dados sem aplicação prática.

Escreva uma definição curta e testável. Declare o marco inicial, a condição de término, o escopo de contenção, o relógio usado e a regra para reabertura. Inclua uma distinção entre tempo corrido e qualquer medida de esforço ou cobertura, se ambas forem desejadas. Peça a profissionais que participam de incidentes diferentes que leiam a definição e descrevam como a aplicariam; divergências mostram termos que precisam ser esclarecidos.

Implemente os registros mínimos no sistema já usado, se possível. Cada marco deve comportar horário, autor ou sistema de origem, estado, escopo e referência à evidência. Um campo para motivo de espera ou risco aceito pode ser útil quando há uma decisão deliberada, mas evite exigir narrativas longas em todas as ocorrências. O processo deve permitir marcar “desconhecido”, “não aplicável” e “reconstruído” sem forçar uma falsa precisão.

Na operação, faça uma revisão proporcional no encerramento. Confirme marcos, evidências, escopo e classificação; registre incertezas e reaberturas; e preserve a trilha original. Uma revisão breve pode ser suficiente para casos rotineiros. Casos de alto impacto, contenção prolongada ou desfecho inesperado podem justificar análise mais profunda. O propósito é melhorar processo e capacidade, não impor o mesmo peso administrativo a todas as ocorrências.

Associe cada achado a uma hipótese de melhoria e a uma forma de avaliá-la. Se o intervalo decisão até execução for recorrente por falta de autoridade delegada, teste uma regra de substituição em ambiente governado. Se a validação demora por ausência de sinal, melhore a fonte ou defina uma checagem alternativa. Depois verifique se a alteração resolveu o gargalo sem elevar risco, interrupção ou reabertura. Uma variação numérica após mudança não prova causalidade; registre outras alterações relevantes.

Atribua a uma função identificável a manutenção da definição e dos campos de registro. Sem esse cuidado, áreas diferentes podem usar o mesmo nome para marcos distintos ou alterar o critério sem avisar quem consome a análise. Uma revisão periódica entre resposta, operações e gestão de risco permite confirmar que a medida ainda corresponde ao fluxo de trabalho. Registre a versão metodológica de cada período, sobretudo após mudanças de sistema ou cobertura.

## Como usar a medida na gestão sem distorcer a resposta?

Na conversa de gestão, exponha primeiro a pergunta que o dado responde e a pergunta que ele não responde. Uma duração entre reconhecimento e validação informa sobre a resposta observada após a declaração, sob certo escopo. Não estima necessariamente toda a presença adversária, não mede sozinho a qualidade da equipe e não certifica que o risco foi eliminado. Esse enunciado reduz o risco de que um indicador operacional seja usado como prova geral de segurança.

Ao discutir casos rápidos, pergunte também qual foi a cobertura e como o efeito foi confirmado. O objetivo não é desestimular prontidão. É assegurar que rapidez represente redução efetiva da oportunidade adversária e não apenas encerramento prematuro da tarefa. Uma resposta veloz acompanhada de evidência clara e baixo risco residual é um aprendizado valioso. Uma resposta veloz que exigiu reversão ou deixou um vetor ativo oferece um aprendizado diferente.

Quando o público do relatório não participa da resposta, explique os termos técnicos essenciais e evite apresentar um horário sem sua origem. Uma legenda curta sobre escopo, marco inicial e critério de validação reduz interpretações equivocadas em reuniões executivas. O dado permanece verificável para especialistas e compreensível para quem precisa decidir sobre capacidade, prioridade e recursos.

## FAQ: perguntas que surgem ao adotar a métrica

### O tempo começa na primeira atividade adversária?

Somente se a organização tiver evidência suficiente para definir esse evento e estiver medindo especificamente a duração da atividade observada. Em geral, a hora real de início pode ser desconhecida. Para avaliar a resposta operacional, é mais reproduzível começar no reconhecimento formal ou em outro marco claramente registrado e manter separada a análise retrospectiva de possível atividade anterior.

### O tempo começa no alerta ou na declaração do incidente?

Depende da pergunta. Do alerta até o reconhecimento, mede-se parte da triagem e da classificação. Da declaração até a validação, mede-se a resposta após o reconhecimento. É possível reportar ambos, com nomes distintos e marcos definidos. Misturá-los torna impossível saber se uma variação veio da detecção, da decisão ou da execução.

### Uma solicitação de bloqueio concluída encerra o relógio?

### É melhor medir tempo corrido ou tempo útil de trabalho?

Eles respondem a perguntas diferentes. Tempo corrido representa a duração no calendário durante a qual a situação pode ter permanecido ativa. Tempo útil tenta descrever disponibilidade ou esforço operacional. Um intervalo fora da cobertura ainda pode envolver risco; por isso, a medida de esforço não deve substituir a duração corrido. Se os dois forem acompanhados, defina regras e nomes separados.

### Como lidar com uma decisão de aguardar para preservar evidência?

Registre a razão, a autoridade, o risco aceito, a alternativa considerada e a condição que encerrará a espera. Preserve evidência de maneira autorizada e revise a decisão quando as circunstâncias mudarem. A espera pode ser tecnicamente justificável, mas não deve desaparecer do histórico nem ser removida do relógio sem uma regra explícita.

### A contenção é completa quando não aparecem mais alertas?

Não necessariamente. A ausência de novos alertas pode significar que a atividade cessou, mas também que a fonte deixou de observar ou que o agente mudou de via. A conclusão exige evidência adequada à técnica aplicada, ao escopo e às limitações de telemetria. A equipe deve separar ausência de sinal de confirmação positiva da medida.

### Posso comparar a equipe com uma média externa?

### O que fazer quando faltam horários ou registros?

Marque a lacuna, identifique se houve reconstrução e registre a fonte e o nível de confiança. Não invente precisão. Use a ausência para melhorar o processo de documentação ou a disponibilidade de logs. Se o dado for agregado, informe a cobertura para que o leitor entenda quantos casos sustentam a conclusão.

### Como evitar que a métrica incentive atalhos?

Não use duração isoladamente para premiar pessoas ou classificar equipes. Combine-a com critérios de escopo, validação, risco residual, reabertura e impacto operacional. Permita documentar exceções justificadas e revise a qualidade das decisões. Se a organização percebe que marcos estão sendo alterados para melhorar o placar, o problema está no desenho de governança, não apenas no preenchimento.

### Quando o incidente pode ser considerado encerrado?

O encerramento da resposta é uma decisão mais ampla do que o fim do intervalo de contenção. Pode depender de investigação, erradicação, recuperação, monitoramento e comunicação, conforme o processo institucional. A equipe deve registrar cada etapa e não usar um tempo de contenção curto como prova de que a resposta integral terminou.

O capítulo 9 do manuscrito original, dedicado a métricas de resposta a incidentes, relaciona a medição à interpretação do processo e das decisões. O livro de Hiago Kin Levi, publicado pela Editora Brasport, pode servir como leitura complementar para situar essa discussão dentro de uma abordagem mais ampla de resposta a incidentes. A obra não substitui documentação técnica atualizada, treino, evidência específica do ambiente nem julgamento da equipe responsável.
