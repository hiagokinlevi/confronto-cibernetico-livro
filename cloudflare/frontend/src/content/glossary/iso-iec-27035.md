# ISO/IEC 27035

## Definição e alcance

ISO/IEC 27035 é uma família de normas voltada à gestão de incidentes de segurança da informação. Em termos práticos, oferece orientação para organizar um processo que permita à organização preparar-se para incidentes, reconhecê-los, avaliá-los, responder a eles e aprender com o que ocorreu. O termo “27035” é usado como forma abreviada para se referir à família, embora uma referência formal possa apontar uma parte e uma edição específicas.

A palavra “gestão” é importante. A família não se limita a descrever ações técnicas tomadas depois que um alerta dispara. Ela trata também da capacidade organizacional que sustenta essas ações: papéis, comunicação, critérios de decisão, coordenação, registros e melhoria. Um incidente pode atravessar equipes e funções; por isso, a resposta não é apenas uma tarefa de quem administra servidores ou investiga malware. Pode envolver segurança, tecnologia, jurídico, privacidade, continuidade, comunicação, recursos humanos, fornecedores e liderança, conforme o impacto e as regras aplicáveis.

A norma fornece orientação de processo. Não identifica por si só um incidente, não determina se uma organização foi comprometida, não substitui julgamento profissional e não atribui automaticamente responsáveis. Cabe à organização decidir quem exerce cada função, adaptar procedimentos à sua realidade e testar se as pessoas conseguem executá-los. Essa distinção evita tratar a referência normativa como se fosse um serviço de resposta pronto para uso.

## Contexto no trabalho defensivo

A ISO/IEC 27035 é útil como referência para desenhar ou revisar essa estrutura. Ela ajuda a formular questões organizacionais: como uma suspeita chega à equipe responsável? Quem pode declarar um incidente? Como se avalia gravidade e prioridade? Quem autoriza contenção que afete serviços? Quando se envolve a direção? Como se preservam registros? O que deve ser comunicado, a quem e por qual canal? Como as lições retornam ao tratamento de riscos e às medidas preventivas?

## Como o processo se manifesta

A gestão de incidentes pode ser entendida como um ciclo conectado, ainda que na prática suas atividades se sobreponham e nem sempre ocorram em uma sequência linear. Preparação acontece antes do evento, mas também é revista depois dele. Identificação e avaliação podem continuar durante a resposta. A recuperação pode começar enquanto a investigação ainda esclarece a causa. Um procedimento maduro permite esses movimentos sem perder coordenação.

### Preparação

Preparar-se envolve definir o escopo do processo, as funções e autoridades, os meios para receber relatos, os critérios para escalar casos e as dependências necessárias à resposta. Inclui assegurar que as equipes saibam localizar procedimentos, contatos e fontes de informação mesmo se os sistemas usuais estiverem indisponíveis. Treinamento, exercícios e acordos com terceiros ajudam a revelar lacunas antes de uma crise real.

### Identificação, registro e avaliação

Um evento é uma observação que pode indicar uma condição relevante; nem todo evento é incidente. Uma falha de login, por exemplo, pode ser rotina, erro de usuário ou parte de atividade hostil. O processo recebe sinais de fontes diversas — ferramentas de monitoramento, usuários, fornecedores, auditorias ou equipes operacionais — e precisa registrar o relato de forma suficiente para triagem. A equipe verifica o que se sabe, o que permanece incerto e quais sistemas ou pessoas podem estar envolvidos.

A avaliação compara os fatos disponíveis com critérios acordados. Gravidade não é sinônimo de volume de alertas: um único evento pode afetar um serviço crítico, enquanto uma sequência numerosa pode ser de baixo impacto. A análise pode considerar confidencialidade, integridade e disponibilidade, alcance, duração, exposição de dados, dependências, capacidade de recuperação e risco de propagação. Também deve explicitar incertezas; ausência de evidência não prova, por si só, ausência de comprometimento.

### Resposta e coordenação

Quando a organização decide tratar o caso como incidente, a resposta combina análise, contenção, erradicação e recuperação de acordo com a situação. A ISO/IEC 27035 orienta a gestão desse trabalho; não prescreve um comando técnico universal para cada tipo de ameaça. A equipe escolhe medidas apropriadas ao ambiente, registra sua justificativa e considera os efeitos colaterais. Isolar um equipamento, suspender uma conta ou bloquear tráfego pode limitar dano, mas também interromper operações ou eliminar uma fonte de evidência se for feito sem avaliação.

A coordenação define quem investiga, quem decide, quem executa e quem precisa ser informado. Essas funções podem se acumular em equipes pequenas, mas precisam continuar claras. Um responsável por coordenar o incidente acompanha estado, prioridades, dependências e pendências. Especialistas contribuem com análise de sistemas, identidade, rede, aplicações ou dados. Gestores com autoridade avaliam riscos para o negócio e aprovam decisões que excedem o mandato técnico da equipe.

### Encerramento e aprendizagem

A redução dos sintomas não significa necessariamente que o incidente terminou. Antes de encerrar, a equipe pode precisar confirmar que o acesso indevido foi removido, que serviços foram restaurados de modo confiável, que riscos residuais foram aceitos e que os responsáveis operacionais receberam contexto suficiente. O critério de encerramento deve ser explícito e proporcional. Casos ainda incertos podem ser encerrados como investigação ativa transferida a outro processo, desde que essa transição tenha dono e registro.

## Relação com evidências e investigação

A ISO/IEC 27035 aparece na investigação como enquadramento para organizar o tratamento, não como ferramenta forense. Ela ajuda a explicar por que um incidente foi aberto, quem autorizou uma ação, como a prioridade mudou e para quem uma evidência foi entregue. Em uma investigação posterior, esses registros podem ser tão importantes quanto os artefatos técnicos, porque revelam a sequência decisória e os limites do conhecimento em cada momento.

Evidências que demonstram a existência de um processo podem incluir política de gestão de incidentes, plano ou procedimento de resposta, matriz de papéis, critérios de severidade, formulários de registro, histórico de chamados, atas de exercícios, listas de contato controladas e revisões pós-incidente. A evidência de execução é diferente da existência documental: registros de casos, trilhas de decisão, escalonamentos, comunicações, aprovações e ações corretivas mostram se o processo foi usado. Um documento bem escrito, isoladamente, não demonstra capacidade operacional.

## Exemplo hipotético

Imagine que uma equipe de suporte recebe relatos de usuários que não conseguem acessar um sistema interno. Ao mesmo tempo, o monitoramento registra autenticações incomuns em algumas contas. No processo inspirado pela ISO/IEC 27035, o relato é registrado, os sinais são correlacionados e alguém designado avalia o possível impacto. A organização decide tratar o caso como incidente porque há risco de acesso indevido a um serviço relevante.

A coordenação reúne segurança, operação do sistema e o responsável pelo serviço. A equipe preserva os registros disponíveis, verifica o alcance com fontes autorizadas e considera medidas temporárias de contenção. Uma decisão que afete todos os usuários é escalada ao gestor com autoridade para ponderar continuidade e risco. As comunicações informam o que foi confirmado e o que está sendo investigado, sem apresentar uma hipótese como fato. Depois da recuperação, a equipe registra a causa conhecida, as incertezas restantes e as ações de melhoria, atribuindo responsáveis.

## Distinções úteis

### Evento, alerta e incidente

Um evento é uma ocorrência observada; um alerta é uma sinalização produzida por uma pessoa ou sistema segundo algum critério; incidente é uma situação avaliada como merecedora de tratamento coordenado conforme a definição e os critérios adotados pela organização. Os termos não são intercambiáveis. Um alerta pode ser falso positivo, e um incidente pode começar por um relato sem alerta automatizado. O processo precisa permitir triagem sem descartar sinais importantes nem declarar todo desvio como incidente confirmado.

### Gestão de incidentes e resposta técnica

Resposta técnica é o conjunto de atividades especializadas para entender e limitar um evento, remover sua causa ou restaurar sistemas. Gestão de incidentes organiza a capacidade mais ampla: prepara, coordena, comunica, registra, escala e aprende. A primeira ocorre dentro da segunda, mas não a esgota. Uma equipe pode executar contenção tecnicamente correta e ainda falhar na coordenação, na preservação de evidências ou na comunicação aos responsáveis.

### Norma, política e procedimento

A norma oferece orientação reconhecida para estruturar práticas. A política expressa compromissos e diretrizes aprovados pela organização; procedimentos traduzem essas diretrizes em passos, papéis e decisões locais. Planos e runbooks podem detalhar cenários, contatos e ações operacionais. Esses documentos devem ser coerentes, mas não são a mesma coisa. Adotar uma referência não significa que a organização tenha automaticamente uma política adequada nem que seus procedimentos estejam atualizados.

### Conformidade e capacidade

## Limitações e erros de interpretação

Também é arriscado copiar um fluxo de outra organização sem ajustar autoridades e dependências. Um procedimento que manda desligar imediatamente todo equipamento comprometido pode ser inadequado se interromper um serviço essencial, destruir dados voláteis relevantes ou exceder a autoridade de quem recebeu o alerta. Da mesma forma, um processo excessivamente burocrático pode atrasar contenção. Critérios simples, caminhos de escalonamento claros e revisões periódicas ajudam a equilibrar velocidade e controle.

Por fim, a norma não substitui obrigações legais, regulatórias ou contratuais, nem determina sozinha prazos de notificação ou regras de preservação. Essas exigências variam conforme jurisdição, setor, natureza dos dados e relações contratuais. A organização deve identificá-las com as funções responsáveis e incorporar os requisitos pertinentes ao processo. Uma referência de gestão não é parecer jurídico nem autorização para compartilhar dados.

## Aplicação e perguntas frequentes

### Como começar a aplicar a orientação?

Comece mapeando como os incidentes chegam hoje, quem toma decisões e quais serviços dependem da resposta. Defina um responsável pelo processo, critérios de triagem e escalonamento, canais de contato e registros mínimos. Em seguida, valide o desenho com as equipes que terão de executá-lo. Um exercício de mesa com um cenário plausível costuma revelar dúvidas sobre autoridade, comunicação e dependências que a leitura do procedimento não mostra.



### Como saber se um evento deve virar incidente?

Use critérios acordados e uma triagem proporcional, considerando impacto potencial, ativos afetados, confiança na informação e urgência. Quando os fatos forem incompletos, registre a incerteza e defina o próximo passo de verificação. Uma categoria provisória é preferível a atrasar a coordenação enquanto se busca certeza impossível, mas a classificação não deve exagerar o que foi confirmado. Critérios devem ser revistos após exercícios e ocorrências reais.


### Como diferenciar um plano útil de um documento de prateleira?

Um plano útil corresponde a contatos e sistemas reais, pode ser localizado durante uma interrupção e ajuda pessoas específicas a decidir e agir. Deve ter proprietário, versão, escopo e critérios de revisão. Exercícios permitem observar se os participantes sabem acioná-lo e se as autoridades descritas existem de fato. Atualizar somente a redação, sem testar acesso, compreensão e dependências, não demonstra prontidão.

## Relação com o capítulo 2

No capítulo 2 da versão original do manuscrito, a ISO/IEC 27035 pode ser entendida como referência para práticas estruturadas de gestão de incidentes. Seu valor está em oferecer um modo de organizar preparação, avaliação, resposta e aprendizagem; a execução concreta ainda depende de responsáveis definidos, procedimentos adequados ao ambiente e exercícios que revelem se o processo funciona. Essa leitura mantém a norma no papel de orientação e evita confundi-la com garantia de prevenção ou resposta automática.
