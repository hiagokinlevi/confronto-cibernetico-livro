# Critérios para encerrar um incidente de segurança

## Quando um incidente pode ser considerado encerrado?

A pergunta prática não é apenas se os alertas pararam. É se há evidência suficiente, proporcional ao impacto e à incerteza, de que a atividade adversária deixou de produzir efeitos, os caminhos conhecidos de acesso foram removidos ou controlados, os serviços voltaram a operar em condições verificadas e a organização consegue perceber uma retomada relevante.

Uma equipe pode ter restaurado um sistema e ainda não saber se a credencial usada pelo invasor continua válida.

Critérios para encerrar um incidente de segurança precisam, portanto, ser definidos antes da pressão por liberar equipes, normalizar serviços ou fechar um chamado. Eles devem estabelecer o que precisa ser conhecido, quem confirma cada ponto, quais exceções são admissíveis e como a decisão poderá ser revista.

## O que significa encerrar um incidente

### Encerramento é uma decisão sobre o trabalho de resposta

Um incidente é encerrado quando a organização conclui que as atividades de resposta imediata previstas para aquele caso foram concluídas ou transferidas de maneira explícita, que os critérios acordados foram avaliados e que uma autoridade responsável aceitou a situação restante.

A palavra “encerrado” também pode significar coisas diferentes em ferramentas diferentes. Um chamado pode ser fechado porque sua fila precisa ser liberada, enquanto uma investigação técnica continua.

Uma classificação útil separa pelo menos quatro marcos.

### Encerramento não é sinônimo de certeza

A investigação costuma avançar com observabilidade incompleta. Um registro pode ter sido sobrescrito, um equipamento pode ter ficado desconectado, um provedor pode não fornecer telemetria histórica ou uma aplicação antiga pode não registrar a ação relevante.

É importante formular conclusões com o grau de certeza que os dados sustentam. “Não identificamos novos acessos nos registros disponíveis entre tais datas” descreve uma observação. “O invasor não voltou” é uma afirmação mais ampla e talvez não demonstrável. “A conta foi desabilitada às 14h, e os registros do provedor confirmam a revogação das sessões conhecidas” combina ação e evidência. “Não há risco” não delimita o que foi examinado e deve ser evitada como conclusão absoluta.

Uma decisão de encerramento pode ser razoável apesar da incerteza, desde que ela esteja visível, delimitada e aceita por quem tem autoridade para assumir o risco.

## Como estabelecer critérios verificáveis

### Comece pelo objetivo e pelo escopo

Antes de perguntar se o incidente terminou, delimite o que está sendo avaliado. O escopo pode incluir identidades, endpoints, servidores, aplicações, contas de nuvem, redes, dados, dependências terceirizadas e usuários afetados.

O objetivo de cada critério deve ser claro.

Não existe um intervalo universal de observação que prove que um adversário se foi.

### Use uma matriz de condições e evidências

Para cada condição de saída, mantenha um registro simples com: condição, evidência esperada, fonte, responsável pela validação, resultado, limitação conhecida, decisão e data. Esse formato evita que a reunião de encerramento se reduza a impressões ou a uma lista de tarefas marcadas como feitas.

As condições devem contemplar ao menos alcance, contenção, erradicação, recuperação, monitoramento e governança.

Um status por critério torna visível a diferença entre “confirmado”, “não confirmado”, “não aplicável” e “pendente”. “Pendente” precisa incluir responsável e prazo; “não confirmado” deve indicar o bloqueio e as consequências; “não aplicável” exige justificativa. Não converta desconhecido em concluído só para fechar o registro.

## Alcance: o que foi afetado e o que ainda é hipótese

### Construa uma visão do escopo com graus de confiança

A avaliação de alcance reúne ativos diretamente observados, ativos relacionados por evidência e ativos considerados possíveis alvos.

Registre os identificadores e o contexto que permitem distinguir os ativos: proprietário, ambiente, criticidade, função, localização lógica e período relevante. Em ambientes dinâmicos, nomes de host podem mudar ou ser reutilizados; associe, quando possível, identificadores estáveis e horários.

A equipe deve relacionar contas, sessões, chaves, tokens, integrações e privilégios com os ativos alcançados.

### Trate limites de telemetria como parte do resultado

Uma conclusão de alcance deve declarar quais fontes foram consultadas e quais não estavam disponíveis. Exemplos incluem registros de autenticação, trilhas de auditoria de nuvem, telemetria de endpoint, logs de aplicação, DNS, proxy, firewall, correio eletrônico, inventário, backup e dados fornecidos por terceiros.

Considere retenção, integridade e cobertura.

Fontes diferentes podem discordar por atraso de ingestão, filtros, fusos horários, nomes distintos ou escopos diferentes. Antes de interpretar a divergência, alinhe o período e a identidade dos objetos.

### Diferencie indicadores, alertas e confirmação

Um alerta é uma indicação produzida por regra, analista ou ferramenta; ele orienta uma investigação.

A equipe deve descrever a inferência. Por exemplo, um alerta de login fora do padrão justifica verificar a sessão, o dispositivo, a origem, a autenticação e as ações subsequentes.

Ao encerrar, resuma fatos confirmados, hipóteses testadas, hipóteses ainda abertas e evidências que poderiam alterar a interpretação.

## Contenção e erradicação: como demonstrar que a causa foi tratada

### Contenção deve impedir continuidade e expansão

A contenção procura limitar efeitos enquanto a equipe preserva opções de investigação e recuperação. Pode envolver isolamento de um ativo, suspensão temporária de uma identidade, bloqueio de uma integração, restrição de tráfego ou desativação de uma função.

Para avaliar a contenção, confirme que a medida foi aplicada ao objeto correto, que está ativa no plano de controle relevante e que os caminhos alternativos foram considerados.

Também é preciso observar efeitos colaterais. Uma contenção pode interromper processos de negócio, ocultar sinais ao desligar um equipamento ou remover dados voláteis úteis.

### Erradicação requer tratar mecanismos conhecidos

Erradicar não é simplesmente apagar um arquivo sinalizado ou reinstalar um sistema.

A validação pode incluir revisão das configurações relevantes, comparação com uma referência confiável, reemissão ou revogação de credenciais, revisão de privilégios, verificação de imagens e componentes, e confirmação de que serviços necessários não foram reativados com a condição insegura. Não se deve presumir que uma ferramenta de varredura ou uma imagem limpa cobre mecanismos fora de seu escopo.

Em sistemas que não podem ser modificados imediatamente, a erradicação pode ser substituída temporariamente por uma mitigação compensatória.

## Recuperação: restaurar serviço sem presumir integridade

### Verifique a origem e o conteúdo da restauração

A recuperação pode envolver reconstrução, restauração de backup, rotação de credenciais, reconfiguração, atualização, validação de dependências e retorno gradual ao uso. A seleção de um ponto de restauração requer avaliar se ele antecede a atividade suspeita e se sua integridade é confiável.

Quando houver cópias independentes e controles de integridade, use-os conforme o processo aprovado.

A restauração também pode reintroduzir dependências. Um servidor reconstruído pode voltar a confiar em uma conta com privilégios excessivos; uma aplicação pode reconectar uma integração comprometida; uma configuração anterior pode reabrir o caminho inicial.

### Confirme funcionamento e integridade com responsáveis

“Está no ar” é um teste de disponibilidade, não uma avaliação completa.

Defina sinais de falha e condições de reversão antes de reabrir o acesso quando possível. Se um serviço apresentar comportamento inesperado, erros de integridade ou reaparecimento de indicadores, a equipe precisa saber quem pode suspender a liberação e como retomar a resposta.

A recuperação pode ser parcial.

## Monitoramento depois da resposta imediata

### Um período sem alertas só vale dentro da cobertura observada

Monitoramento pós-incidente é uma medida deliberada para detectar sinais relevantes após contenção e recuperação. Deve indicar quais ativos, identidades e comportamentos serão observados, por quais fontes, durante qual período decidido para o caso, quem revisará os resultados e como ocorrerá o escalonamento.

A ausência de alertas só é informativa se as regras estavam ativas, os dados chegavam, o escopo estava incluído e alguém era responsável por analisar as ocorrências.

O monitoramento deve procurar comportamentos associados ao caso e também anomalias que possam indicar uma rota diferente. Não precisa reproduzir técnicas ofensivas nem criar atividade perigosa.

### Planeje a transição para as operações regulares

Nem toda observação adicional precisa permanecer com a equipe de resposta.

Se a equipe não puder garantir que os sinais serão revisados, não descreva a transferência como monitoramento ativo. Pode ser necessário ajustar a escala, criar uma fila de acompanhamento ou reduzir o escopo de forma consciente.

O caso pode ser encerrado administrativamente enquanto determinadas ações de melhoria continuam em outro sistema de acompanhamento.

## Quem decide e quem contribui

### A autoridade de encerramento precisa estar definida

A equipe de resposta técnica reúne e interpreta evidências, mas nem sempre tem autoridade para aceitar risco de negócio. A política interna deve indicar quem declara o encerramento para diferentes níveis de impacto, quais aprovações são necessárias e quem pode decidir em situação urgente.

A autoridade não deve ser confundida com a pessoa que executa a tarefa.

A decisão final registra data, participantes, escopo, critérios avaliados, evidências consultadas, limitações, risco residual, ações transferidas e condições de reabertura. Quando houver discordância, registre a posição divergente e como foi resolvida.

### Inclua áreas que respondem por impactos diferentes

Segurança pode avaliar atividade adversária e cobertura de detecção; tecnologia confirma a configuração e o funcionamento dos sistemas; negócio avalia a necessidade de serviço e impacto nos usuários.

Defina uma pessoa responsável por coordenar a decisão e consolidar o registro. Isso reduz instruções contraditórias e impede que um ponto crítico fique sem acompanhamento.

Fornecedores e provedores de serviço podem ser fontes de evidência ou executores de ações, mas a organização continua precisando saber o que foi confirmado e o que permanece sob dependência externa.

## Riscos residuais e exceções

### Descreva o que permanece possível

Risco residual não é uma fórmula genérica.

Não apresente uma hipótese como fato para tornar a decisão mais dramática, nem minimize uma lacuna para encerrar rapidamente. Separe fatos, inferências e desconhecidos.

Ações de melhoria devem resolver causas e lacunas identificadas: instrumentação ausente, retenção curta, inventário desatualizado, privilégios amplos, procedimento de recuperação incompleto, dependência sem contato de emergência ou treinamento insuficiente.

### Determine quando reabrir

Defina condições concretas para reabertura ou escalonamento, como reaparecimento de comportamento associado, evidência de nova sessão não autorizada, confirmação de que um ativo importante ficou fora do escopo, falha de uma mitigação temporária ou descoberta de comprometimento em uma dependência relacionada. A lista não prevê todo evento possível, mas dá à equipe de operações um limiar inicial.

Uma nova ocorrência pode estar relacionada ao caso encerrado ou ser um evento separado.

A reabertura não significa que o encerramento anterior foi necessariamente errado. Uma decisão pode ter sido razoável com a evidência então disponível e ser revista quando chegam novos fatos.

## Exemplos defensivos e cenários contrastantes

### Cenário hipotético: identidade exposta e serviços de nuvem

Considere, hipoteticamente, uma equipe que recebe alertas de autenticação incomum em uma conta administrativa de nuvem.

A resposta revoga as sessões e credenciais envolvidas, revisa outras identidades com privilégios relacionados, restaura a configuração por referência aprovada e valida os registros de auditoria disponíveis. Antes do encerramento, os responsáveis confirmam que a alteração não reapareceu, que a conta opera com autenticação e privilégios revisados e que as trilhas relevantes estão chegando à coleta central.

Ainda assim, a equipe não afirma que todo o tenant está comprovadamente livre de atividade.

### Cenário hipotético: indisponibilidade após restauração

Em outro cenário hipotético, uma aplicação interna fica indisponível após uma alteração suspeita. A equipe restaura uma cópia conhecida, executa verificações funcionais e recebe confirmação de que usuários conseguem concluir o processo principal.

Suponha que os dados recuperados não incluam um intervalo recente.

### Contraste: alerta silenciado versus evidência de controle

Imagine, hipoteticamente, que uma regra de detecção deixe de gerar eventos depois de uma mudança de configuração. O painel mostra silêncio, mas a equipe descobre que a fonte deixou de enviar dados.

Em contraste, se a fonte continuou íntegra, os ativos afetados estavam cobertos, as credenciais e sessões foram revogadas, os mecanismos identificados foram removidos e as revisões do período acordado não encontraram atividade relevante, a evidência é mais favorável à contenção.

## Erros que enfraquecem a decisão

### Fechar porque a urgência diminuiu

Quando os serviços voltam, a pressão para liberar pessoas e encerrar a crise é compreensível. Contudo, disponibilidade e segurança respondem a perguntas diferentes.

Outro erro é encerrar porque o alerta original foi resolvido.

### Tratar tarefa executada como resultado validado

“Senha trocada”, “imagem reinstalada”, “regra criada” e “backup restaurado” são registros de ações. O resultado requer confirmar que a senha antiga não dá acesso, que a imagem é confiável e configurada corretamente, que a regra recebe os dados esperados e que o serviço restaurado funciona com integridade suficiente.

Também é frágil usar uma varredura automatizada como certificado universal de limpeza.

### Confundir consenso com evidência

Uma sala de crise pode concordar que “parece resolvido”, mas consenso não substitui validação. Da mesma forma, uma pessoa sênior pode pedir encerramento sem que isso resolva critérios pendentes.

Evite ainda a conclusão absoluta de que nada mais aconteceu porque ninguém relatou problemas.

### Esquecer o que foi transferido

Uma ação movida para backlog sem responsável, prazo ou ligação com o incidente é uma pendência perdida. Outra falha é entregar monitoramento à operação sem confirmar capacidade, acesso, critérios e rota de escalonamento.

Por fim, não misture encerramento administrativo e encerramento técnico.

## Critérios de avaliação para uma revisão de encerramento

### Perguntas para a equipe revisora

A revisão deve ser curta o suficiente para ser praticável e abrangente o suficiente para encontrar lacunas. O facilitador pode pedir que cada responsável apresente a evidência que sustenta seu critério, em vez de ler uma lista de tarefas.

Para contenção e erradicação, verifique se os caminhos conhecidos de acesso foram tratados, se sessões ou credenciais persistentes foram consideradas, se a causa ou hipótese principal recebeu tratamento e se as exceções têm mitigação e dono.

Para governança, confirme quem aceita riscos, quem assume as ações restantes e quando elas serão revisadas. Para aprendizado, identifique uma ou mais melhorias diretamente ligadas a fatos do caso, evitando uma lista genérica de boas práticas.

### Escala de conclusão sem falsa precisão

Uma organização pode usar estados qualitativos: confirmado com evidência suficiente, confirmado com limitação, não confirmado, pendente ou não aplicável justificado.

A adequação da evidência depende do impacto. Para um ativo de baixo impacto, uma lacuna limitada pode ser aceita com controles compensatórios.

A revisão também avalia a qualidade do registro.

## Exercício de mesa ou laboratório autorizado

### Simule a decisão, não uma intrusão

Um exercício seguro pode testar o processo de encerramento sem executar ações contra sistemas reais. A equipe recebe um cenário hipotético por etapas: primeiro, um alerta de acesso incomum; depois, evidência de uma alteração não aprovada; em seguida, uma lacuna de logs em um serviço relacionado; por fim, a restauração de uma aplicação com uma dependência ainda não validada.

O objetivo não é descobrir um atacante simulado por meio de técnicas ofensivas.

### Observe decisões e pontos de passagem

O facilitador pode perguntar: qual evidência adicional mudaria a classificação do alerta? Quem autoriza suspender uma conta crítica?

Registre decisões, demora causada por falta de acesso, divergência entre equipes, informação ausente e passos que dependeram de uma pessoa específica.

Um tabletop pode ser realizado em uma sessão curta com segurança, operações, negócio e áreas pertinentes. Um laboratório controlado pode testar fluxos de coleta, recuperação e validação com dados sintéticos.

## Roteiro de implementação na organização

### Defina o padrão antes do próximo caso

Comece revisando a política de resposta, os níveis de severidade e os fluxos de mudança e recuperação.

Adapte o padrão a classes de serviço e identidade. Um incidente em estação de trabalho e um incidente em plataforma crítica podem compartilhar princípios, mas requerer evidências e aprovações distintas.

### Prepare fontes, papéis e registros

Mantenha inventário de ativos e proprietários suficientemente atualizado para permitir delimitar o alcance.

Defina papéis de coordenação, investigação, operação, comunicação e aceitação de risco. Garanta substitutos para funções críticas e canais de contato adequados.

### Treine e melhore com casos reais de forma responsável

Teste o processo com exercícios e revisões pós-incidente.

Não transforme todo incidente em uma lista indiscriminada de controles. Priorize melhorias que reduzam uma causa observada ou uma limitação que afetou a decisão.

Mantenha o padrão atualizado quando sistemas, provedores, obrigações ou estrutura de equipes mudarem.

## Perguntas frequentes

### Quanto tempo sem alertas é suficiente para encerrar?

Não há duração universal. A janela deve considerar o comportamento investigado, o risco dos ativos, a retenção e a cobertura das fontes, o uso normal do serviço e a possibilidade de atividade intermitente.

### É possível encerrar se a causa inicial não foi identificada?

Pode ser possível, mas a incerteza precisa ser tratada.

### O incidente pode ser encerrado com ações corretivas pendentes?

Sim, quando as ações pendentes não impedem a contenção e a recuperação exigidas para o caso, têm responsável, prazo, prioridade e acompanhamento, e o risco temporário foi avaliado e aceito por autoridade apropriada. Se uma pendência representa um caminho ativo de acesso ou invalida a conclusão central, não é uma melhoria futura comum: pode impedir o encerramento ou exigir uma exceção explícita e mitigação imediata.

### Quem deve aprovar o encerramento?

A política interna deve definir a autoridade por severidade e impacto.

### O que fazer quando um provedor não entrega todos os registros?

Registre a solicitação, o escopo recebido, o que faltou e a limitação de retenção ou acesso. Use fontes independentes disponíveis para responder às perguntas, avalie controles compensatórios e determine se a lacuna altera materialmente o risco.

### Encerrar o incidente encerra as obrigações de comunicação?

Não necessariamente.

### Quando um novo alerta deve reabrir o caso?

Quando satisfaz um gatilho definido ou apresenta relação plausível que precisa ser avaliada, como nova atividade em identidade afetada, reaparecimento de mecanismo tratado ou confirmação de ativo fora do escopo. Faça triagem, compare identificadores e horários e registre por que o caso foi reaberto ou separado.

### Como comunicar que a conclusão tem limites?

Use uma formulação delimitada: informe o escopo examinado, o período, as fontes consultadas, a conclusão sustentada e as limitações relevantes.

## Como manter uma trilha de decisão útil

### Registre evidências de modo reproduzível

O registro de evidência deve permitir localizar a fonte e entender o contexto sem copiar indiscriminadamente dados sensíveis para o chamado. Anote identificador do evento ou artefato, sistema de origem, intervalo de tempo, método de obtenção e pessoa que realizou a coleta. Quando a política exigir preservação formal, siga o procedimento de custódia e controle de acesso definido pela organização. Um resumo legível pode apontar para um repositório restrito, evitando espalhar material bruto por canais de comunicação.

Mantenha uma cronologia consistente, inclusive para ações de resposta. Registre quando uma medida foi solicitada, aprovada, executada e verificada; esses horários podem ser diferentes. A distinção ajuda a explicar períodos de exposição e a avaliar se um alerta posterior ocorreu antes ou depois de uma revogação. Se fontes usam fusos ou atrasos diferentes, indique a normalização aplicada e preserve o horário original quando isso for relevante.

Uma revisão independente deve conseguir repetir a lógica, não necessariamente refazer toda a coleta. Para isso, associe cada conclusão às observações que a sustentam e descreva alternativas consideradas. Se um artefato não puder ser preservado, explique a razão, quem autorizou a ação e quais dados substitutos existem. Essas práticas são especialmente úteis quando a investigação atravessa turnos, equipes ou fornecedores.

### Evite conclusões que envelhecem mal

Relatórios de encerramento podem ser consultados muito depois, quando o sistema mudou de nome, o fornecedor atualizou sua interface ou os participantes já não estão disponíveis. Use datas completas, nomes e identificadores reconhecíveis no momento do incidente e uma descrição suficiente do escopo. Evite referências vagas como “ontem”, “o servidor principal” ou “a regra normal”, que podem perder sentido rapidamente.

Separe a conclusão da recomendação. A primeira responde o que as evidências permitiram determinar naquele momento; a segunda propõe uma ação futura. Se a recomendação não for aprovada, o registro deve mostrar isso e o risco que permanece, sem alterar retroativamente a conclusão técnica. Essa separação torna possível avaliar a qualidade da resposta mesmo que as prioridades de negócio mudem.

## Encerramento como prestação de contas

A qualidade de um encerramento aparece na conexão entre condição, evidência, decisão e acompanhamento. A equipe identifica o que foi afetado; mostra como limitou a atividade; explica quais mecanismos conhecidos foram removidos; valida a restauração; demonstra que há monitoramento com cobertura e responsável; e torna explícito o que ainda não sabe.

Esse processo preserva duas necessidades que parecem competir durante uma crise: recuperar operações e manter rigor sobre o que os dados realmente demonstram.

No capítulo 8, dedicado a operações de resposta, contenção e recuperação, o livro de Hiago Kin Levi, publicado pela Editora Brasport, pode servir como referência de contexto para profissionais que organizam essas atividades. A obra não substitui documentação técnica atualizada, treino, políticas aplicáveis nem o julgamento da equipe diante das evidências específicas de cada incidente.
