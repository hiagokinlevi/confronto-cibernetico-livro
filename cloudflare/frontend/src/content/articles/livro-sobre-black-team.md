# Livro sobre Black Team

## Qual pergunta o conceito de Black Team ajuda a responder?

Quando uma organização enfrenta uma intrusão, um alerta de comportamento anômalo ou uma falha grave em um serviço, por que equipes competentes ainda podem demorar a construir uma resposta coerente? Em geral, o problema não é a ausência de ferramentas nem a falta de especialistas.

A ideia de Black Team, no enquadramento de Confronto Cibernético, ajuda a examinar essa lacuna de coordenação. Ela propõe aproximar defesa, inteligência e simulação autorizada em torno de objetivos, limites e decisões compreendidos por todos.

Este artigo responde a uma questão prática: como estudar e avaliar o conceito sem confundi-lo com uma licença para conduzir ataques? A resposta exige separar três coisas. A primeira é o que se pretende conhecer, como a qualidade de uma detecção ou a clareza de um fluxo de escalonamento.

## Definição: integração como função, não como cor

O nome Black Team pode sugerir uma equipe adversarial, mas, neste contexto, designa uma função de coordenação. Seu trabalho é fazer com que capacidades diferentes se conectem a um propósito defensivo comum.

Uma equipe integrada precisa compreender tanto a operação defensiva quanto os limites de uma atividade de teste. Ela pode ajudar a formular perguntas verificáveis, por exemplo: “O fluxo de resposta reconhece um acesso administrativo fora do padrão e chega à pessoa autorizada a conter a conta?”.

O conceito também não apaga especialidades. Analistas de SOC continuam responsáveis por interpretar e encaminhar sinais conforme seus procedimentos. Resposta a incidentes mantém a condução técnica e a preservação de evidências.

Há uma diferença útil entre integração e fusão. Integrar é definir interfaces: que dado é compartilhado, em que formato, com quem, em quanto tempo e com qual finalidade. Fundir seria supor que todos devem acessar tudo ou tomar as mesmas decisões.

## Contexto: por que as fronteiras entre áreas importam

O trabalho de segurança costuma atravessar diferentes ritmos. A triagem do SOC lida com grandes volumes e precisa priorizar. Uma resposta a incidente pode exigir decisões urgentes sobre isolamento, continuidade e preservação de registros.

Um alerta de endpoint, por exemplo, pode apontar execução incomum, mas não explicar se há impacto sobre um serviço crítico. A equipe de resposta talvez precise do identificador do ativo, da janela temporal e das ações já tomadas.

A integração ganha importância em ambientes com fornecedores, nuvem, filiais ou equipes terceirizadas. Nesses casos, a organização pode não controlar todos os sistemas nem os canais de resposta.

Esse contexto não prova que toda organização precise de uma unidade chamada Black Team.

## Decisões práticas antes de qualquer atividade

A primeira decisão é definir a pergunta. “Testar a segurança” é amplo demais para orientar uma atividade responsável.

A segunda decisão é escolher o nível de risco aceitável. Há uma diferença entre revisar documentos, percorrer um cenário em mesa, reproduzir um evento benigno em laboratório isolado e executar uma validação em produção. Cada nível tem efeitos e requisitos distintos.

A terceira decisão é estabelecer autoridade. Quem aprova o escopo? Quem pode iniciar, pausar ou encerrar o exercício? Quem decide uma contenção real se aparecer um incidente durante a atividade?

A quarta decisão é declarar limites técnicos e operacionais. O documento de autorização deve identificar ativos ou ambientes permitidos, horários, contas de teste, ações proibidas, dependências, limites de carga e condições de parada.

Por fim, planeje a saída. Um exercício sem plano para registrar observações, proteger dados, remover artefatos de teste e comunicar resultados pode deixar mais dúvida do que conhecimento.

## Fontes de evidência e o que cada uma sustenta

Fontes de evidência têm alcances diferentes. Um alerta do SIEM pode demonstrar que uma regra foi acionada para determinado evento registrado; sozinho, não prova que toda atividade semelhante será detectada nem que houve comprometimento.

Entre as fontes defensivas úteis estão registros de autenticação, telemetria de endpoint, eventos de rede, auditoria de nuvem, inventário de ativos, chamados, decisões de escalonamento e comunicações de crise. A seleção deve responder à pergunta definida, em vez de coletar tudo por precaução.

Inteligência de ameaças pode fornecer contexto sobre comportamentos, infraestrutura ou objetivos observados em fontes confiáveis. A avaliação deve registrar proveniência, data, escopo e confiança. Uma correspondência de indicador é um alerta para investigação, não uma identificação automática de autor.

Uma evidência de exercício deve ser marcada e armazenada de modo que não se confunda com um incidente real, mas essa marcação não deve ser o único critério de classificação. Documente o cenário, as condições, a hora, os sistemas envolvidos e as ações realizadas.

Alertas e provas não são sinônimos. Um alerta é uma sinalização que merece triagem; pode ser verdadeiro, falso ou inconclusivo. Uma prova é um conjunto de elementos que sustenta uma afirmação delimitada.

## Papéis e passagem de informação

O SOC observa, qualifica e encaminha sinais de acordo com regras e procedimentos definidos. Para tornar sua análise útil às outras áreas, deve registrar o que foi visto, em qual fonte, em que intervalo, com que confiança e quais verificações já ocorreram.

A equipe de resposta a incidentes coordena a investigação e as ações técnicas quando há suspeita ou confirmação de incidente. Deve proteger a cadeia de custódia aplicável, manter a linha do tempo e avaliar impactos com os responsáveis pelo serviço.

Inteligência contextualiza informações e explicita incerteza. Pode relacionar eventos a padrões de comportamento conhecidos, avaliar relevância para a organização e apontar lacunas de coleta. Deve separar informação pública, dado interno e inferência analítica.

Especialistas de segurança ofensiva ou de testes controlados ajudam a formular validações seguras e a compreender limitações de controles. Eles precisam trabalhar sob autorização explícita e respeitar escopo, janela, métodos e limites de impacto.

A liderança de segurança ou o patrocinador do exercício define finalidade, apetite a risco, recursos e autoridade de decisão, em coordenação com responsáveis de negócio e tecnologia.

Uma passagem de informação bem desenhada inclui um mínimo comum: identificador do caso; horário e fuso; ativo e proprietário; fonte; observação; grau de confiança; impacto possível; ação já feita; pendência; responsável e próximo prazo. O formato exato pode variar.

## Exemplos defensivos seguros

Considere, hipoteticamente, um exercício em que uma conta de laboratório realiza uma autenticação fora do horário esperado.

O resultado pode revelar que a regra detectou o evento, mas o ticket não identificou o proprietário do ativo; ou que o analista encontrou o contato correto, mas o procedimento não esclarecia se deveria ligar fora do expediente. Cada conclusão é ligada à evidência observada.

Outro cenário hipotético é uma revisão de resposta a uma notificação de possível exposição de dados em um serviço contratado. A equipe usa um pacote fictício de evidências, um contato de fornecedor de exercício e um fluxo de comunicação previamente acordado.

Um terceiro cenário pode ocorrer em laboratório local, com snapshots descartáveis e dados sintéticos. A equipe valida se a coleta aprovada registra uma alteração benigna em uma configuração de teste e se o processo de resposta sabe preservar o estado da máquina.

Esses exemplos são hipotéticos e não descrevem incidentes reais. Eles ilustram uma regra de desenho: a simulação deve reproduzir a decisão ou o fluxo que se quer avaliar, sem reproduzir desnecessariamente o dano que um adversário poderia causar.

## Cenários contrastantes: a mesma integração, consequências diferentes

No primeiro cenário hipotético, SOC, resposta e inteligência participam de uma revisão de um alerta.

No segundo cenário hipotético, uma equipe de testes recebe autorização vaga e interpreta “validar detecção” como permissão para atuar em toda a rede corporativa. Um serviço compartilhado começa a apresentar lentidão. O SOC classifica os eventos como atividade do exercício e quase deixa de encaminhar sinais reais.

No terceiro cenário hipotético, um alerta chega durante uma simulação aprovada e aponta possível comprometimento de uma conta de produção. A equipe de resposta interrompe o exercício, preserva o material relevante e inicia a triagem real.

A comparação mostra que “integração” não é um estado binário. Ela depende de objetivos explícitos, rotas de comunicação, qualidade das evidências e autoridade praticável.

## Erros comuns ao estudar e aplicar a ideia

Um erro recorrente é tratar Black Team como sinônimo de uma equipe de ataque sem limites. Essa interpretação ignora defesa e governança e pode levar a atividades fora de autorização.

Outro erro é acreditar que mais compartilhamento sempre melhora a resposta. Reunir logs, dados pessoais e inteligência em um repositório único pode aumentar exposição, custo e confusão.

Também é comum medir sucesso pelo número de alertas, achados ou participantes. Quantidade pode incentivar ruído e não demonstra que as decisões foram corretas. Um teste que gera muitos eventos pode apenas sobrecarregar o SOC.

Atribuição apressada é outro risco. Um indicador, ferramenta ou padrão conhecido não identifica necessariamente quem realizou uma ação. Uma organização pode sofrer atividade automatizada, erro interno, fornecedor comprometido ou evento legítimo com aparência incomum.

Por fim, exercícios podem ser usados como avaliação individual punitiva ou como demonstração de maturidade para uma audiência. Isso incentiva respostas ensaiadas e subnotificação de falhas.

## Critérios para avaliar se a integração funciona

Uma avaliação começa pela pergunta e pelo critério de conclusão. Para um fluxo de alerta, pode-se observar se o evento de teste foi registrado, se continha os campos essenciais, se foi encaminhado ao papel correto e se houve retorno ao SOC.

Tempo pode ser uma dimensão útil, mas precisa de contexto. Registre quando a evidência foi criada, observada, triada, escalada e decidida. Não transforme um único tempo de exercício em promessa sobre desempenho futuro.

Qualidade de evidência inclui completude, rastreabilidade, consistência temporal e possibilidade de interpretação. Uma conclusão deve poder ser ligada a uma fonte, a uma observação e a uma condição do exercício.

A avaliação também deve verificar limites e segurança. Houve alguma ação fora de escopo? Os participantes sabiam como pausar? Algum dado real foi exposto além do necessário? A atividade teve efeitos inesperados?

Depois, acompanhe ações corretivas com responsável, prioridade, prazo e evidência de conclusão. “Melhorar comunicação” não é uma tarefa verificável. “Atualizar a lista de contatos de plantão, validar o acesso ao diretório e revisar o fluxo com a equipe responsável” é mais concreto.

## Exercício de mesa: decidir com informação incompleta

Um exercício de mesa pode testar coordenação sem executar ações técnicas. Prepare um cenário hipotético em etapas e entregue aos participantes apenas as informações disponíveis naquele momento.

Antes da sessão, nomeie um facilitador, um registrador e uma pessoa com autoridade para encerrar. Informe os participantes sobre propósito, duração, regras de segurança psicológica e canal para reportar um incidente real.

Durante a sessão, o facilitador introduz fatos em blocos e registra quando cada decisão é tomada, qual evidência a sustenta, quais alternativas foram consideradas e quem assumiu a próxima ação.

Ao final, faça uma revisão focada no processo: que informação foi útil, que informação faltou, onde houve interpretações diferentes e qual autoridade permaneceu ambígua? Separe observações de opiniões.

## Laboratório autorizado: observar sem colocar produção em risco

Quando a pergunta depende de telemetria, um laboratório isolado pode oferecer evidência mais concreta do que uma discussão. Use máquinas virtuais ou contas de teste sob controle da organização, dados sintéticos e conectividade restrita ao necessário.

Uma validação segura pode reproduzir um evento administrativo benigno que já esteja documentado pelo sistema, como uma alteração controlada em uma preferência de uma máquina de teste, e verificar se os registros correspondentes são coletados e associados ao ativo correto.

Prepare critérios de interrupção antes de executar: perda de isolamento, indisponibilidade inesperada, dado real aparecendo, alerta de incidente legítimo ou dúvida sobre a autorização.

O laboratório responde somente pelo que foi observado naquele ambiente e naquela configuração. Diferenças de versão, política, identidade, rede ou retenção podem alterar o comportamento em produção. Portanto, descreva a validade externa com cuidado.

## Roteiro de implementação em etapas

Comece com um diagnóstico curto das interfaces existentes. Escolha alguns casos recentes ou exercícios anteriores que possam ser analisados sem expor dados desnecessários.

Em seguida, estabeleça um mandato. Declare qual problema a função de integração deve resolver, quais atividades estão fora de sua competência e quem patrocina decisões. Nomeie responsáveis por escopo, segurança operacional, registro de evidências e revisão.

Padronize o mínimo necessário para a troca de evidências. Um formulário ou modelo de ticket pode pedir horário, fonte, ativo, observação, confiança, impacto possível, ações realizadas e próximo responsável. Evite campos que ninguém usa ou que induzam certeza falsa.

Depois, escreva o procedimento de autorização e parada. Inclua aprovação, escopo positivo e exclusões, janela, limites, contas de teste, dependências, contatos, registro, proteção de dados, plano de reversão e critérios de interrupção.

Faça um primeiro exercício de baixo risco, de preferência uma mesa que examine uma interface específica. Registre linha de base qualitativa e, se houver medidas temporais, as definições usadas.

Por último, revise a prática em ciclos. Após as ações, faça uma nova observação adequada ao risco e compare resultados com as mesmas definições. Ajuste o escopo se a pergunta inicial mudou. Atualize contatos e documentos quando pessoas, sistemas ou contratos mudarem.

## Como escolher o que não testar

A disciplina de integração aparece também na decisão de recusar uma atividade.

Há sistemas em que a disponibilidade, a segurança física, a privacidade ou a continuidade tornam qualquer estímulo adicional desproporcional.

A escolha de não testar diretamente não é uma falha de rigor. Rigor é adequar a evidência à afirmação e declarar limites. Uma revisão documental pode demonstrar que a política prevê uma ação, mas não que ela será executada sob pressão.

## O que um relatório útil deve conter

Um relatório de integração começa pelo escopo e pela pergunta, informa participantes por função, período, método e limitações, e resume as evidências sem expor detalhes que não sejam necessários ao público.

A classificação de achados deve considerar impacto e contexto, com critérios que a organização compreenda. Uma falha que impediria resposta a um incidente de alto impacto pode exigir prioridade mesmo que apareça apenas uma vez.

O relatório deve atribuir ações a funções ou responsáveis acordados, com prazo e forma de verificar conclusão. Pode conter um resumo executivo que preserve incertezas e indique decisões necessárias, além de um anexo técnico com evidências restritas.

Uma revisão posterior verifica se as mudanças resolveram o problema observado e se criaram efeitos colaterais.


## Governança, autorização e responsabilidade

Autorização precisa ser compreendida como um acordo operacional, não como uma assinatura genérica arquivada. Ela deve vincular uma finalidade a sistemas identificáveis, responsáveis e período de validade. Uma pessoa que executa precisa conseguir responder, antes de agir, se o ativo está incluído, qual ação está permitida, que condições exigem pausa e quem atende em caso de dúvida. Se a resposta depender de interpretação improvisada, o escopo ainda não está pronto. A organização deve manter a versão aprovada acessível aos envolvidos, com data e histórico de mudanças.

A governança também determina como conflitos são tratados. O responsável pelo serviço pode priorizar continuidade; a equipe de resposta pode priorizar preservação; o patrocinador do teste pode desejar completar o cenário. Um procedimento deve dizer quem decide diante dessas prioridades e como a decisão é comunicada. Em situação urgente, a autoridade de resposta pode prevalecer sobre o cronograma do exercício. Registrar essa regra antes do evento reduz a pressão para manter uma simulação quando os fatos indicam risco real.

## Confiança e qualidade dos registros

A confiança em uma conclusão depende da relação entre a fonte e a afirmação. Um registro gerado pelo próprio exercício é apropriado para demonstrar que o estímulo foi realizado, mas pode não ser independente para provar que o monitoramento o detectou. Um ticket criado pelo analista e o log de auditoria do sistema oferecem perspectivas diferentes. Sempre que possível, use fontes que permitam corroborar etapas críticas e informe quando a verificação depende de uma única fonte. Isso evita que um relatório confunda documentação da ação com evidência do resultado.

Preservar contexto inclui conservar identificadores, relógios e transformações aplicadas aos dados. Uma captura de tela pode ser útil para uma revisão, mas omitir metadados ou impedir consulta posterior. Uma exportação pode alterar campos ou fuso horário. Anote método de coleta, filtros, intervalo e responsável, respeitando os procedimentos de cadeia de custódia quando se tratar de incidente. Para um exercício simples, a formalidade pode ser proporcional, mas a origem e o significado dos registros ainda devem ficar claros.

Também é importante controlar versões de regras e procedimentos. Se uma detecção mudou durante a avaliação, o relatório deve indicar qual versão estava ativa em cada momento. Se um fluxo de contato foi atualizado após o primeiro cenário, não compare o segundo como se as condições fossem idênticas. A mudança pode ser justamente o resultado de aprendizagem; registrá-la torna a comparação mais honesta e ajuda a identificar qual intervenção esteve associada ao efeito observado.

## Sinais de que a prática precisa ser revista

Uma prática de integração pode se degradar com o tempo. Sinais incluem autorizações reutilizadas sem verificar ativos, contatos de emergência desatualizados, exceções tratadas apenas por mensagens informais e relatórios que repetem recomendações sem registrar seu destino. Também merece revisão o exercício que sempre termina sem interrupções e sem divergência: pode ser um cenário fácil demais, mas pode também indicar que os participantes não se sentem seguros para apontar problemas. Esses sinais não provam falha; indicam perguntas para uma revisão independente.

Mudanças organizacionais alteram o mapa de responsabilidades. Fusões, novos fornecedores, migração de serviços e reorganizações de plantão podem invalidar contatos ou pressupostos. A revisão deve ocorrer após mudanças relevantes, além de uma cadência definida pela própria organização. Não é necessário revalidar tudo com a mesma intensidade; priorize interfaces que protegem serviços críticos e aquelas em que a dependência externa limita a visibilidade. Documente o que foi revisado e o que permanece pendente, com dono e prazo.

Outro sinal é a divergência entre documentos e prática. O procedimento pode dizer que uma equipe preserva evidências, enquanto os registros mostram que um sistema rotaciona logs antes da coleta. A política pode prever contato imediato, mas o canal depender de uma pessoa ausente. Ao encontrar discrepância, trate-a como uma oportunidade de corrigir sistema, contrato ou procedimento, e não apenas de lembrar indivíduos. Uma ação de conscientização pode ser adequada, mas não substitui correções estruturais quando o processo depende de automação ou acesso que não existe.

## Perguntas frequentes

### Black Team é o mesmo que Red Team?

Não neste enquadramento. Um Red Team costuma representar uma perspectiva adversarial dentro de um exercício delimitado, enquanto a função Black Team aqui enfatizada coordena defesa, inteligência e simulação autorizada.

### É necessário criar uma equipe permanente?

Não necessariamente. Uma organização pode começar com uma prática de coordenação entre funções existentes ou instituir um grupo temporário para um exercício.

### Uma simulação pode ocorrer em produção?

Pode haver atividades controladas em produção em algumas organizações, mas não é uma decisão automática nem uma recomendação geral.

### Como distinguir um evento de exercício de um incidente real?

Use planejamento, comunicação e registros consistentes, mas não dependa exclusivamente de um rótulo técnico.

### A inteligência pode confirmar quem está por trás de um evento?

Às vezes há evidências suficientes para sustentar atribuições com graus variados de confiança, mas um indicador isolado raramente é base adequada. A equipe deve informar fontes, data, limitações e hipóteses alternativas.

### Que resultado demonstra maturidade?

Nenhum número único. Evidências de maturidade incluem escopo compreensível, autorização rastreável, passagem de informação com contexto, autoridade de interrupção, incertezas registradas e ações corretivas acompanhadas.

### Como evitar que o exercício vire uma avaliação punitiva?

Declare que o foco é o processo, não a exposição de indivíduos; registre condições e dependências; e transforme achados em melhorias com responsáveis e recursos.

### O que fazer quando as áreas discordam sobre a evidência?

Registre a observação comum, as interpretações distintas e a informação necessária para resolver a divergência. A pessoa com autoridade definida decide medidas urgentes conforme o risco, sem apresentar uma hipótese como fato confirmado.

### Que materiais são necessários para começar?

Uma pergunta delimitada, um patrocinador, participantes com papéis claros, um procedimento de autorização e parada, um meio de registrar evidências e um cenário proporcional já permitem um exercício inicial.

## Leitura relacionada ao capítulo 5

Para quem quer estudar a formulação de Black Team apresentada em Confronto Cibernético, o capítulo 5, dedicado ao conceito, oferece o contexto autoral para refletir sobre a integração entre defesa, inteligência e simulação autorizada.
