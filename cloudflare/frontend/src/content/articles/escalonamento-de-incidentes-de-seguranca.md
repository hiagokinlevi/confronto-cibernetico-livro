# Escalonamento de incidentes de segurança

## Quando uma equipe deve escalar um incidente?

A pergunta prática não é apenas “o que aconteceu?”, mas “quem precisa participar agora para reduzir dano, preservar opções e tomar a próxima decisão?”. Uma equipe deve escalar quando o impacto observado, a criticidade dos ativos envolvidos ou a incerteza relevante ultrapassam a autoridade, a capacidade ou o conhecimento disponíveis no nível atual. Escalar significa envolver pessoas ou funções adicionais com um pedido claro de decisão, apoio ou coordenação. Não significa declarar que uma hipótese está provada, transferir toda a responsabilidade ou convocar automaticamente a organização inteira.

Uma resposta curta já publicada resume o princípio: envolver as pessoas certas no momento certo, com evidência suficiente para uma decisão proporcional. Gravidade pode mudar durante a apuração. Por isso, o escalonamento deve ser tratado como processo revisável, não como rótulo definitivo atribuído uma única vez na abertura do chamado.

## O que significa escalonar

Escalonamento é uma mudança deliberada de participação, autoridade ou cadência de coordenação. Pode ser vertical, quando o caso passa para uma liderança com poder para aprovar uma interrupção relevante; funcional, quando entram privacidade, jurídico, comunicação, continuidade ou uma equipe técnica especializada; ou operacional, quando se reúne um grupo que precisa executar ações coordenadas. Um caso pode exigir mais de uma dessas formas, em momentos distintos.

Escalonar não é simplesmente mudar a prioridade de uma fila. Prioridade organiza trabalho e prazo dentro de um fluxo. Severidade expressa a avaliação do dano potencial ou confirmado e da urgência. Escalonamento define quem precisa saber, deliberar ou agir. Os três conceitos se relacionam, mas não são equivalentes: uma ocorrência de severidade moderada pode exigir rapidamente parecer jurídico por causa de uma obrigação de comunicação; uma fila prioritária pode continuar com o mesmo grupo responsável; uma situação grave pode demandar coordenação ampliada antes de haver classificação final.

Também não é sinônimo de “passar adiante”. A equipe que identificou o sinal continua responsável por registrar fatos, preservar o contexto e acompanhar a resposta até que haja uma transferência explícita de responsabilidade. A função acionada precisa aceitar o papel ou apontar substituto. Sem confirmação de recebimento, uma mensagem enviada não garante que alguém esteja coordenando a decisão.

## Por que a gravidade muda durante a apuração

No início, sinais são incompletos. Um alerta pode refletir atividade legítima, uma falha de configuração, um teste aprovado ou uma ação maliciosa. A equipe precisa distinguir o alerta — aquilo que chamou atenção — da evidência — o registro ou observação verificável — e da interpretação — a explicação provisória para esse registro. Uma sequência de falhas de autenticação, por exemplo, é um fato observável se os logs forem íntegros; a hipótese de tentativa de comprometimento depende de contexto adicional; a afirmação de acesso bem-sucedido exige evidência própria.

Essa separação não serve para minimizar risco. Ela torna possível agir sem fingir certeza. A equipe pode dizer: “há acessos incomuns a uma conta privilegiada; ainda não confirmamos uso indevido; pedimos que a liderança autorize a revogação temporária da sessão e a validação com o responsável pelo sistema”. A hipótese orienta a investigação, enquanto a medida provisória reduz exposição dentro de limites conhecidos. O registro precisa marcar ambas como provisórias até que haja confirmação ou descarte.

A avaliação muda quando surgem dados sobre alcance, duração, privilégios, exposição, dependências e capacidade de recuperação. Um alerta inicialmente isolado pode ganhar importância se a identidade acessou um sistema crítico. Uma interrupção pode parecer apenas operacional até que se confirme que a alteração foi consequência de atividade não autorizada. Em sentido inverso, um evento de aparência alarmante pode ser explicado por mudança aprovada e documentada. Atualizar a severidade não é admitir erro; é incorporar informação nova.

## Que decisões práticas precisam de um gatilho

Um modelo útil conecta gatilhos a decisões, não apenas a números. A equipe pergunta: qual mudança observada pede ajuda? Quem tem capacidade ou autoridade para responder? Qual ação precisa ser tomada e até quando? Que dado mínimo permite uma decisão inicial? O nível pode ser descrito em termos de impacto e resposta requerida, com critérios que a organização consiga reconhecer e aplicar durante um plantão.

Impacto pode envolver confidencialidade, integridade ou disponibilidade. Na confidencialidade, avaliam-se dados possivelmente vistos ou extraídos, sensibilidade, quantidade, titulares e exposição externa. Na integridade, examinam-se alterações, privilégio usado, capacidade de propagação e confiança nos registros ou resultados. Na disponibilidade, consideram-se duração, usuários afetados, dependências e alternativas operacionais. Não basta usar o nome de uma dimensão: é preciso indicar o que está afetado e quais evidências sustentam a avaliação.

Criticidade acrescenta contexto. Um sistema pode ter pouca abrangência técnica, mas sustentar uma atividade de alto impacto; uma conta pode ser privilegiada mesmo sem grande volume de eventos; um serviço redundante pode ser menos urgente que um componente único. Os critérios devem apontar quais ativos e processos têm tratamento especial, quem reconhece sua criticidade e onde localizar essa informação fora do conhecimento informal de uma pessoa.

Incerteza merece gatilhos próprios. São exemplos: telemetria indisponível num sistema importante; registros inconsistentes; impossibilidade de determinar se uma ação foi autorizada; relato crível de acesso que não pode ser corroborado de imediato; ou dependência externa sem informação suficiente para avaliar alcance. A ausência de evidência não prova que o evento não ocorreu. Ao mesmo tempo, ausência de evidência não prova que ocorreu. O escalonamento viabiliza a obtenção de contexto e uma decisão sob limites explícitos.

## Como decidir com evidência incompleta

A decisão inicial raramente depende de provar a causa raiz. Depende de saber quais opções são reversíveis, quais podem preservar segurança e quais exigem autorização. Isolar temporariamente uma sessão pode ser menos disruptivo do que desligar um sistema inteiro; bloquear uma credencial de serviço sem conhecer as dependências pode interromper processos legítimos. O escalonamento deve apresentar a decisão necessária e as consequências conhecidas de cada opção, em vez de enviar apenas uma narrativa extensa.

Um informe conciso pode conter: horário e fonte do primeiro sinal; ativos, identidades ou processos possivelmente envolvidos; fatos confirmados; hipóteses e seu grau de confiança em linguagem qualitativa; lacunas importantes; ações executadas e resultados; impacto conhecido ou possível; decisão solicitada; função responsável por decidir; e horário da próxima atualização. Não é necessário fingir precisão numérica quando não existe método validado para calculá-la. “Ainda não estimado” é mais informativo que um número inventado.

Quando houver possibilidade de preservar material relevante, as pessoas autorizadas devem seguir o procedimento interno para coleta, retenção e acesso. A prioridade é evitar alterações desnecessárias, preservar registros e manter trilha de custódia quando o processo exigir. Este artigo não substitui instruções técnicas específicas de forense, obrigações legais ou políticas de preservação. Uma ação de contenção pode alterar o estado do sistema; por isso, quem propõe a ação deve explicitar o possível efeito sobre evidências e coordenar a decisão com quem tem competência para orientar a preservação.

## Quem deve participar e com qual responsabilidade

A estrutura exata varia, mas o modelo precisa atribuir funções sem depender de nomes pessoais. O primeiro respondente ou analista registra e valida sinais iniciais dentro de seu acesso. O líder de incidente coordena prioridades, mantém a visão comum do caso e convoca as funções previstas. A equipe técnica de resposta investiga e propõe medidas dentro da autorização recebida. O dono do ativo explica função, dependências e impacto operacional. A liderança apropriada decide sobre riscos e interrupções que ultrapassam a autoridade técnica delegada.

Segurança da informação organiza a resposta e assessora sobre risco técnico. Operações de tecnologia administra mudanças e recuperação nos sistemas sob sua responsabilidade. Identidade, rede, nuvem, aplicações ou fornecedores podem ter especialistas acionados conforme o escopo. Privacidade avalia questões relativas a dados pessoais e ajuda a orientar análise e obrigações. Jurídico interpreta deveres e restrições aplicáveis. Continuidade e responsáveis pelo negócio avaliam prioridades de operação e alternativas. Comunicação prepara mensagens internas ou externas quando acionada por quem tem essa atribuição. Essas funções não são intercambiáveis e não precisam estar todas em toda ocorrência.

Uma pessoa deve ter autoridade definida para declarar ou encerrar a coordenação de incidente e para elevar a severidade, ainda que outros participantes possam recomendar mudança. O processo também deve descrever substitutos, plantões, indisponibilidade de responsáveis e critérios para mobilizar liderança executiva. Se uma decisão não pode esperar pelo titular habitual, a equipe precisa conhecer a cadeia de autoridade alternativa. A regra deve estar documentada e ser exercitável antes de um caso real.

O líder de incidente não precisa ser a pessoa mais experiente em cada tecnologia. Sua função é manter objetivos e decisões visíveis: o que está sendo protegido, o que se sabe, que ação está em curso, qual decisão está pendente e quem a assumiu. Especialistas trazem análise, mas a coordenação evita que instruções incompatíveis sejam executadas em paralelo. Quem registra decisões pode ser outra pessoa, para que o coordenador mantenha atenção ao fluxo.

## Cenários hipotéticos: quando a mesma pista pede respostas diferentes

Considere um cenário hipotético em que o monitoramento registra tentativas repetidas de autenticação numa conta comum. Os fatos confirmados são a existência das tentativas, os horários e a conta alvo. Ainda não há evidência de acesso bem-sucedido. Se a conta pertence a uma pessoa sem privilégios e os registros indicam bloqueio, a equipe pode validar o contexto com o usuário e acompanhar os sinais conforme o procedimento. Se o volume aumenta, se a conta é ligada a um processo crítico ou se a telemetria de sucesso está indisponível, cabe reavaliar criticidade e incerteza e envolver o responsável apropriado. A pista inicial é semelhante; o contexto muda o escalonamento.

Num quarto cenário hipotético, um colaborador relata que um documento pode ter sido compartilhado fora da organização. O relato merece registro, mas não comprova leitura, cópia ou exposição de dados pessoais. A equipe de colaboração ou armazenamento pode confirmar permissões e eventos de acesso; privacidade avalia a natureza dos dados caso haja fundamento. Se a trilha de auditoria não estiver disponível, essa lacuna também deve ser comunicada. O contato com pessoas potencialmente afetadas ou com entidades externas deve seguir a autoridade e o processo internos, não uma inferência improvisada do analista.

## Cenários contrastantes: escalar cedo, tarde ou em excesso

Escalar tarde ocorre quando a equipe mantém o caso num nível que já não pode conter o risco. Num exemplo hipotético, o analista vê mudança numa conta privilegiada e espera uma confirmação completa de acesso a dados antes de avisar o líder, embora a sessão ainda esteja ativa e a organização tenha uma opção autorizada de revogação. Atrasos podem reduzir a oportunidade de limitar impacto ou preservar uma janela de investigação. O procedimento deve explicitar quais sinais permitem acionar ajuda enquanto a hipótese ainda está sendo testada.

## Erros comuns e como corrigi-los

Um erro recorrente é classificar pelo tipo de alerta, como se cada regra determinasse uma gravidade fixa. A regra oferece um sinal, não a conclusão. A equipe deve combinar o sinal com identidade, ativo, privilégio, impacto, duração, contexto de mudança e confiabilidade dos dados. Se o alerta é conhecido por gerar falsos positivos, isso é contexto para triagem, não licença para ignorá-lo automaticamente.

Outro erro é confundir “não confirmado” com “sem risco”. A resposta correta é descrever o limite do conhecimento: não há evidência disponível até este horário; a fonte consultada cobre apenas determinado sistema; ou a validação depende de um log que ainda não chegou. Essa frase deve acompanhar uma decisão sobre o que fazer diante da lacuna, em vez de funcionar como motivo para interromper a comunicação.

Também é inadequado tratar toda possibilidade como fato. Uma hipótese grave não deve ser comunicada como incidente confirmado para forçar atenção. Linguagem precisa permite urgência sem exagero: “possível”, “observado”, “corroborado”, “não verificado” e “descartado” têm significados diferentes. A equipe pode indicar que o pior cenário plausível requer ação imediata, explicando que ainda não foi demonstrado.

A ausência de critérios de reavaliação prende o caso à primeira severidade. Para evitar isso, cada atualização relevante deve perguntar se mudou o impacto conhecido, a criticidade, a confiança na hipótese, o alcance, a duração, a capacidade de recuperação ou a autoridade necessária. Reavaliar não requer uma reunião longa; pode ser uma linha no registro e uma confirmação do líder. O importante é que mudanças materiais não fiquem apenas na conversa informal.

## Como avaliar se o processo funciona

A avaliação começa pela clareza: diferentes pessoas, lendo o mesmo cenário com as mesmas informações, entendem quais gatilhos se aplicam e qual é a próxima função? Não é necessário que concordem em cada nuance, mas divergências persistentes sobre definições como “crítico”, “confirmado” ou “fora da autoridade” indicam que o processo precisa de exemplos e termos melhores.

Outro critério é a rastreabilidade. Para uma amostra de incidentes ou exercícios, consegue-se reconstruir quando a equipe recebeu o sinal, quando avaliou a severidade, quem foi acionado, se confirmou recebimento, quais fatos estavam disponíveis e por que uma decisão foi tomada? Uma trilha incompleta impede aprender se houve atraso ou se a incerteza foi tratada razoavelmente. Ela também dificulta entregar o caso a outra equipe durante uma troca de turno.

Revisões pós-incidente devem perguntar se o gatilho foi claro, se a pessoa certa foi acionada, se a evidência apresentada bastou para a decisão disponível, se o nível mudou quando o contexto mudou e se alguma função recebeu informação desnecessária. A revisão deve separar qualidade da decisão com informação disponível naquele momento do conhecimento obtido depois. Julgar retrospectivamente uma escolha apenas pelo resultado ignora a incerteza real enfrentada pela equipe.

## Exercício de mesa ou laboratório autorizado

Um exercício de mesa pode testar o fluxo sem tocar em sistemas de produção. O facilitador apresenta, em etapas, um cenário fictício: primeiro um alerta incompleto; depois uma confirmação parcial; em seguida, uma lacuna de telemetria ou um impacto operacional inesperado. A equipe precisa dizer em voz alta o que é fato, o que é hipótese, qual nível de coordenação propõe, que função aciona, que decisão solicita e qual dado mudaria sua avaliação. O exercício testa o processo, não a capacidade de “adivinhar” a resposta do facilitador.

Um roteiro possível começa com um relato hipotético de atividade incomum numa conta de serviço, sem indicação de sucesso. A equipe registra o sinal e pergunta quem é o dono da conta, qual sistema ela alcança e se existe mudança aprovada. O facilitador então informa que a identidade teve acesso a uma aplicação importante, mas que os registros de alteração estão atrasados. A equipe deve decidir se a incerteza e a criticidade exigem liderança de incidente, operações ou o responsável pelo serviço, sem apresentar o acesso como prova de ação maliciosa.

Na etapa seguinte, o cenário informa que uma sessão continua válida e que revogá-la pode interromper uma integração. Os participantes identificam quem pode explicar dependências, quem autoriza a medida e como preservar o contexto para análise. O facilitador pode acrescentar que o titular da conta está indisponível. O grupo deve localizar a rota de substituição prevista, não improvisar uma autorização. Cada decisão deve registrar responsável, horário simulado, justificativa e condição de revisão.

## Roteiro de implementação

Comece mapeando como os incidentes são reconhecidos hoje. Converse com quem atende alertas, quem administra sistemas, quem responde pela operação e quem decide sobre dados, comunicação e continuidade. Identifique onde as pessoas já escalam, onde aguardam autorização e onde dependem de contatos informais. Use situações observadas pela própria organização, sem copiar incidentes de terceiros como se fossem equivalentes ao seu ambiente.

Em seguida, descreva as dimensões de decisão: impacto, criticidade, incerteza, urgência, obrigações e autoridade. Para cada uma, escreva sinais observáveis e a função que pode avaliá-los. Diferencie o que exige notificação imediata do que pede validação em rotina. Inclua casos em que a incerteza em ativo crítico justifica participação ampliada antes de uma confirmação final. Mantenha a escala pequena o bastante para ser usada sob pressão e precisa o bastante para orientar diferenças reais.

Depois, atribua papéis e rotas. Documente líder primário e substituto, equipe de resposta, donos de serviços críticos, funções consultivas e autoridades de aprovação. Especifique como confirmar recebimento, qual rota usar fora do horário, o que fazer se o canal estiver indisponível e como registrar transferência de turno. Não publique dados de contato sensíveis em locais sem controle; garanta, porém, que as pessoas de plantão autorizadas encontrem a informação.

Valide o processo com exercícios variados: uma ocorrência de baixo impacto que não precisa de mobilização ampla; um sinal ambíguo em ativo crítico; um evento confirmado que exige contenção coordenada; uma indisponibilidade em que uma medida de segurança pode afetar a operação; e um caso em que a primeira hipótese é descartada. A variedade ajuda a identificar se o procedimento sempre sobe tudo ou se desestimula escaladas justificadas. Registre as dúvidas e corrija definições e rotas antes de considerar o material pronto.

Após incidentes e exercícios, revise o que ocorreu, documente ajustes e comunique a versão vigente. Preserve versões anteriores segundo as regras internas, para que uma investigação futura possa entender qual procedimento estava valendo. Um processo de escalonamento útil não depende de perfeição inicial; depende de clareza suficiente para começar, feedback para corrigir e disciplina para não deixar a revisão informal.

## Perguntas frequentes

### É necessário confirmar que houve ataque antes de escalar?

Não. O gatilho pode ser impacto potencial, criticidade ou incerteza que ultrapasse a capacidade ou a autoridade atual. A comunicação deve dizer claramente que a causa ou a ação ainda não foi confirmada e indicar qual decisão ou apoio é necessário. Escalar para avaliar não equivale a declarar um ataque comprovado.

Não. Severidade e público acionado são decisões relacionadas, mas diferentes. Uma revisão pode exigir um especialista técnico ou o dono do serviço sem mobilizar executivos. A liderança entra quando critérios de impacto, autoridade, continuidade, comunicação ou risco definido pela organização pedirem essa participação.

### Quem pode mudar o nível do incidente?

O procedimento deve nomear uma função responsável por coordenar a classificação, além de definir quem pode recomendar mudanças e quem assume na ausência do titular. A avaliação pode ser atualizada por nova evidência ou contexto. O registro precisa indicar quem alterou, quando, por qual razão e que participantes foram informados.

### Quando é apropriado reduzir a severidade?

Quando evidência confiável reduz o impacto conhecido, descarta uma hipótese relevante ou mostra que a resposta necessária cabe num nível menor. Reduzir não apaga o histórico nem encerra automaticamente ações pendentes. A equipe deve documentar a razão e manter monitoramento ou preservação que ainda sejam necessários.

### Como agir se ninguém responder à escalada?

O fluxo deve definir confirmação de recebimento, tempo ou condição de espera compatível com a urgência e uma rota substituta. O caso continua com um responsável identificado até que outra pessoa aceite a coordenação. A falta de resposta é uma condição operacional que precisa ser registrada e encaminhada, não interpretada como aprovação tácita.

### O que fazer quando os dados disponíveis são contraditórios?

Registrar cada fonte, seu horário e o que ela sustenta; evitar escolher a versão mais conveniente; buscar uma fonte independente se isso for viável e seguro; e comunicar a divergência a quem precisa decidir. Se o ativo ou impacto for crítico, a contradição pode justificar apoio ampliado enquanto a validação prossegue. O grau de confiança deve refletir a qualidade e a cobertura das fontes.

Compartilhar o mínimo necessário com funções que têm uma ação ou decisão legítima, usando canais autorizados e destinatários verificados. O resumo inicial pode omitir detalhes que não afetam a decisão e acrescentá-los em espaço com acesso apropriado. A urgência deve acelerar a rota definida, não ampliar indiscriminadamente a exposição de evidências.

### O escalonamento encerra o trabalho da equipe que detectou o caso?

Não. A equipe de origem preserva contexto, fornece registros e acompanha até que haja transferência explícita e aceita. Mesmo depois da transferência, pode continuar responsável por investigação ou contenção específica. O coordenador precisa tornar claros os donos de cada atividade para evitar lacunas e duplicação.

## A relação com o capítulo sobre o Black Team

O capítulo 7 da versão original aborda estrutura, papéis e coordenação do Black Team, temas diretamente ligados à definição de autoridade, responsabilidade e comunicação que sustentam um escalonamento consistente. O livro de Hiago Kin Levi, publicado pela Editora Brasport, pode oferecer um ponto de partida para refletir sobre essa estrutura. A leitura não substitui documentação técnica atualizada, treino, procedimentos adequados ao ambiente nem julgamento da equipe diante dos fatos disponíveis.
