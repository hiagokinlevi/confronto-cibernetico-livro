# SOC e CSIRT: qual a diferença

## A pergunta que organiza a busca

Quando uma organização recebe um alerta de possível comprometimento, quem deve decidir se aquilo é um incidente, quem investiga e quem pode interromper um serviço para conter o risco? A resposta costuma revelar mais sobre a diferença entre SOC e CSIRT do que a placa na porta, o organograma ou o nome usado em uma vaga.

Em termos funcionais, um SOC acompanha sinais de segurança, faz triagem e conduz ou apoia a investigação inicial. Um CSIRT coordena a resposta a incidentes e os serviços associados, articulando as pessoas que precisam conter, erradicar, recuperar e aprender com o evento. O SOC tende a trabalhar continuamente com observabilidade e análise; o CSIRT tende a organizar decisões e ações quando há um incidente ou uma necessidade de preparação e coordenação. Essa distinção é útil, mas não é uma fronteira universal. Uma equipe pode exercer ambas as funções, e organizações diferentes usam os mesmos nomes para capacidades distintas.

## Definições pelo trabalho executado

### O que se espera do SOC

Um Security Operations Center, ou centro de operações de segurança, mantém capacidade de observar eventos relevantes para a segurança e transformar sinais em trabalho investigativo. Isso pode incluir receber telemetria, acompanhar alertas, validar contexto, eliminar falsos positivos, correlacionar eventos, registrar achados e encaminhar casos que exigem decisão ou resposta mais ampla.

### O que se espera do CSIRT

Um Computer Security Incident Response Team, ou equipe de resposta a incidentes de segurança computacional, coordena a preparação e a resposta a eventos que exigem tratamento como incidente, conforme a política da organização. Isso inclui receber e organizar informações, avaliar o impacto, convocar os responsáveis, apoiar decisões de contenção, coordenar comunicação, acompanhar erradicação e recuperação e preservar registros úteis para análise posterior.

### Por que a fronteira varia

Há organizações em que SOC e CSIRT são grupos independentes. Há outras em que analistas do SOC também executam resposta, ou em que o CSIRT é uma função de coordenação distribuída entre profissionais de segurança, tecnologia e negócio. Em serviços gerenciados, o fornecedor pode observar e investigar, enquanto a decisão de isolar um equipamento pertence ao cliente. Também é possível que um provedor de resposta seja contratado apenas para apoiar um incidente grave.

## O fluxo entre sinal e recuperação

### 1. Alerta: registrar e priorizar a indicação

A primeira passagem é a entrada do alerta. O responsável pelo monitoramento deve registrar origem, horário, ativo ou identidade envolvidos, regra ou relato que gerou a indicação, severidade atribuída pela ferramenta e limitações conhecidas dos dados. A severidade automática é uma pista para priorizar, não uma decisão final sobre impacto.

### 2. Investigação: transformar hipóteses em achados

Quando um alerta não pode ser encerrado com segurança, começa uma investigação delimitada. O SOC pode reunir eventos de autenticação, atividade de endpoint, alterações de configuração, registros de rede, histórico de chamados, inventário de ativos e informações do proprietário do serviço. A equipe deve perguntar se os registros cobrem o período relevante, se os relógios estão sincronizados e se a fonte é confiável para aquela conclusão.

### 3. Declaração: decidir que o processo de incidente se aplica

Declarar um incidente formalmente significa ativar um modo coordenado de trabalho. A declaração pode abrir uma trilha de registro, definir um coordenador, convocar áreas, estabelecer cadência de atualização e iniciar avaliação de impacto. Não significa que todos os detalhes já estejam provados. A classificação pode mudar à medida que fatos são confirmados.

### 4. Resposta: conter sem perder o contexto

Conter é limitar a possibilidade de dano adicional, mas a medida adequada depende do cenário. Desabilitar uma conta suspeita pode reduzir acesso indevido e também interromper uma integração essencial. Isolar um endpoint pode preservar outros sistemas e interromper trabalho legítimo. Bloquear um destino pode afetar tráfego de negócio. A escolha precisa considerar evidência, escopo, alternativas, duração, impacto e reversão.

### 5. Erradicação e recuperação: demonstrar retorno controlado

Eliminar a causa suspeita e recuperar o serviço são trabalhos relacionados, mas não idênticos. A erradicação procura remover persistência, corrigir configuração vulnerável, substituir credenciais expostas ou eliminar artefatos confirmados, conforme o caso e as evidências. A recuperação restaura funções de negócio em condição controlada e monitora se a atividade retorna.

## Critérios e responsáveis nos pontos de passagem

Um fluxo saudável tem critérios que podem ser usados em um plantão real. Para cada passagem, a equipe deve saber qual informação mínima acompanha o caso, quem recebe, quem decide e o que acontece se não houver resposta. Um formulário ou sistema de chamados pode ajudar, mas não substitui acordos entre as pessoas.

## Fontes de evidência e limites do que demonstram

### Telemetria de identidade e acesso

Registros de autenticação, alterações de privilégios, criação de credenciais, sessões e eventos de provedores de identidade ajudam a reconstruir quem ou o que tentou acessar recursos. Podem apontar horários, origem observada, resultado e método de autenticação. Em geral, não provam por si sós a identidade da pessoa diante do teclado nem a intenção por trás da ação. Contas compartilhadas, tokens, serviços automatizados e lacunas de retenção complicam a interpretação.

### Endpoint, rede e aplicações

A telemetria de endpoint pode registrar processos, alertas de proteção, conexões e mudanças locais. Registros de rede podem ajudar a identificar comunicação, volume ou sequência temporal. Logs de aplicação podem mostrar ações de usuário ou erros relevantes. Cada fonte representa uma perspectiva parcial; ausência de evento pode significar que nada ocorreu, mas também que a coleta estava desativada, o dado expirou ou o sensor não cobria o ativo.

### Inventário, mudanças e contexto de negócio

Inventário de ativos ajuda a identificar criticidade, proprietário, ambiente e dependências. Registros de mudança e chamados permitem verificar se uma atividade foi aprovada. Mapas de serviço ajudam a avaliar o efeito de uma contenção. Esses registros também podem estar desatualizados. Confirme com a equipe que opera o serviço quando uma decisão depende da dependência ou criticidade atual.

### Preservação e cadeia de decisões

Além da evidência técnica, a resposta precisa preservar a sequência de decisões: quem foi acionado, o que foi informado, qual medida foi aprovada, quem executou e qual resultado foi observado. Isso permite coordenar turnos e avaliar posteriormente se o procedimento funcionou. Registros devem ser protegidos de alteração inadequada e acessíveis a quem tem necessidade legítima.

## Papéis que precisam se encontrar

### Analista de monitoramento e investigador

O analista observa, prioriza, contextualiza e documenta. Em uma operação madura, sabe quais consultas são permitidas, quando não deve agir sem aprovação e qual canal acionar diante de risco urgente. O investigador pode aprofundar a análise, comparar fontes e formular hipóteses, mas deve manter clara a diferença entre fato observado e explicação provável.

### Coordenador de incidente

O coordenador organiza o trabalho, mantém o estado do caso, identifica decisões pendentes e alinha equipes. Não precisa ser a pessoa com maior conhecimento de cada tecnologia. Sua responsabilidade é fazer as competências necessárias convergirem no tempo certo e assegurar que a linha de decisão seja registrada.

### Dono do serviço e executor técnico

O dono do serviço explica importância, dependências e tolerância operacional. O executor administra o sistema ou controle e realiza a ação autorizada. Esses papéis podem residir na mesma equipe, mas são diferentes: conhecer o impacto não equivale automaticamente a ter permissão para executar uma alteração, e ter privilégio técnico não equivale a aceitar o risco de negócio.

### Liderança, jurídico, privacidade e comunicação

A liderança pode decidir sobre risco, recursos e impacto organizacional. Jurídico e privacidade avaliam questões de sua competência quando acionados. Comunicação prepara mensagens consistentes para públicos internos ou externos, quando isso for necessário. A presença dessas áreas depende do caso; ativá-las cedo não significa divulgar informação além do necessário. O processo deve definir gatilhos e canais seguros.

### Terceiros e serviços gerenciados

Contratos e procedimentos devem esclarecer cobertura de monitoramento, horários, prazos de notificação, formatos de evidência, limites de acesso e autoridade para agir. O fornecedor pode identificar um sinal e recomendar contenção, enquanto o cliente decide. Se essa divisão só for descoberta durante o incidente, os minutos mais importantes podem ser consumidos em disputas sobre responsabilidade.

## Cenários contrastantes para testar o desenho

### Sinal isolado sem impacto confirmado

Cenário hipotético: o SOC identifica uma autenticação fora do padrão em uma conta sem privilégio elevado. O usuário confirma atividade autorizada, e o registro de viagem ou acesso remoto dá contexto consistente. A equipe registra a validação e encerra ou monitora conforme o critério interno. Não há motivo automático para declarar incidente apenas porque uma regra disparou.

### Sinais correlacionados em ativo crítico

Cenário hipotético: aparecem falhas de autenticação seguidas de uma sessão válida e uma mudança não prevista em um sistema que sustenta um serviço importante. O responsável técnico não reconhece a mudança. Ainda não se sabe se houve uso indevido de credencial ou uma alteração operacional mal registrada.

### Indisponibilidade com causa incerta

Cenário hipotético: um serviço deixa de responder e há alertas de segurança próximos no tempo. A coincidência não confirma que atividade maliciosa causou a interrupção. Operações investiga capacidade e mudanças recentes; o SOC verifica sinais técnicos pertinentes; o CSIRT coordena se os critérios de incidente forem atingidos. A comunicação interna deve dizer que há uma indisponibilidade sob investigação, sem atribuição prematura.

### Incidente limitado, mas com obrigações de avaliação

Cenário hipotético: uma investigação encontra indício confiável de que um conjunto restrito de dados pode ter sido acessado sem autorização. O alcance ainda não está estabelecido. O CSIRT coordena a investigação com o proprietário do sistema, segurança, privacidade e jurídico, conforme o procedimento. A equipe não deve minimizar o caso porque o volume parece pequeno, nem afirmar exposição confirmada antes de verificar evidências.

### Cobertura fora do horário habitual

Cenário hipotético: o monitoramento detecta atividade suspeita durante a madrugada, mas o aprovador primário está indisponível. O fluxo precisa indicar substituto, autoridade temporária e medidas pré-autorizadas. Se não houver esse desenho, o analista pode hesitar, o serviço pode permanecer exposto ou alguém pode adotar uma medida fora de sua alçada.

## Erros comuns ao comparar SOC e CSIRT

### Tratar o título como garantia de capacidade

O nome SOC não prova que existe cobertura contínua, investigação avançada ou autoridade de resposta. O nome CSIRT não prova que há plantão, coordenação, experiência em recuperação ou acesso aos sistemas. Avalie escopo, pessoas, ferramentas, horários, processos e limites documentados.

### Confundir alerta com incidente

Alertas são entradas para análise; incidentes são classificados segundo critérios e decisões da organização. Declarar todo alerta como incidente sobrecarrega a coordenação e torna a classificação pouco informativa. Esperar uma prova completa para acionar coordenação também pode atrasar a contenção. O equilíbrio vem de limiares explícitos e status provisórios.

### Delegar a decisão a uma ferramenta

Automação pode enriquecer, agrupar ou encaminhar eventos. Uma regra pode até executar ação previamente aprovada em contexto delimitado. Ainda assim, a organização deve definir o objetivo, as salvaguardas, a reversão e a revisão. A ferramenta não entende sozinha dependências de negócio nem assume responsabilidade por um impacto operacional.

### Separar equipes sem definir a interface

Um SOC pode fechar o chamado após enviar uma mensagem que ninguém monitora. Um CSIRT pode esperar informações que não foram solicitadas. Defina um canal de transferência, confirmação de recebimento, campos mínimos e regra de escalonamento se o destinatário não responder. Registre a aceitação do caso e o novo responsável.

### Centralizar tudo sem capacidade de execução

Uma equipe central pode coordenar bem e ainda depender de dezenas de donos de sistemas. Sem acesso a contatos, procedimentos locais e autoridade compatível, a centralização vira fila. A equipe não precisa administrar cada ativo, mas precisa saber quem pode executar a ação e como essa pessoa será acionada.

### Medir volume em lugar de qualidade

Contar alertas, casos encerrados ou incidentes declarados pode descrever atividade, mas não revela se o fluxo foi adequado. Incentivos baseados apenas em fechar rapidamente podem favorecer encerramentos superficiais. Avalie amostras de casos, qualidade de evidência, clareza de decisão, tempo até o responsável correto e recorrência de lacunas. Interprete números com contexto e sem transformar uma medida isolada em promessa de segurança.

### Encerrar sem critério de recuperação

A restauração de serviço pode ser confundida com a conclusão do incidente. Sem verificar controles, sinais posteriores e risco residual, a equipe pode reabrir o mesmo problema ou não perceber nova atividade. Critérios de encerramento precisam estar acordados e ser proporcionais ao caso.

## Como avaliar a capacidade real

Uma avaliação deve perguntar se as pessoas conseguem executar o fluxo com os recursos disponíveis. Documentos são um começo, não evidência de funcionamento. Selecione casos encerrados e verifique se há origem do alerta, linha temporal, fontes consultadas, hipótese, decisão, responsável, ação e resultado. Procure entender também por que os casos foram encerrados e como a equipe tratou incerteza.

## Exercício de mesa ou laboratório autorizado

Um exercício seguro testa coordenação em ambiente fictício ou controlado, sem atingir terceiros e sem usar dados reais desnecessários. Antes de começar, defina participantes, objetivo, limites, facilitador e regra para interromper a atividade. Não é preciso simular técnicas ofensivas para avaliar a passagem de alertas a decisões. Um roteiro de eventos pode fornecer observações fictícias em sequência.

### Preparação

Escolha um serviço interno de exemplo, seus papéis e um cenário compatível com o objetivo. Confirme que todos sabem que os eventos são simulados e quem pode responder dúvidas. Determine quais procedimentos podem ser consultados e como registrar decisões. Se for laboratório técnico autorizado, use ativos isolados, dados sintéticos e controles de segurança apropriados, com escopo aprovado pelos responsáveis.

### Sequência de eventos

O facilitador pode apresentar inicialmente um alerta de autenticação incomum, sem indicar causa. Depois, fornecer um registro autorizado que aumenta a plausibilidade de uso indevido, mas não confirma escopo. Em seguida, informar que o ativo está ligado a um serviço importante e que o aprovador habitual está indisponível. Por fim, fornecer evidência de que uma ação limitada alterou o padrão observado, sem afirmar que toda a causa foi removida.

### Observação e revisão

O facilitador registra pontos de passagem, decisões pendentes, termos ambíguos e informações solicitadas. Não avalia apenas se a equipe escolheu a resposta esperada. Avalia se ela identificou incertezas, buscou o dono correto, explicou impacto, registrou a decisão e definiu uma próxima verificação.

## Roteiro de implementação

### 1. Descrever o fluxo atual

Comece com a jornada real de um caso, do sinal ao encerramento. Converse com quem monitora, quem administra sistemas e quem recebe escalonamentos. Desenhe entradas, decisões, canais, horários e saídas. Inclua caminhos fora do expediente e serviços fornecidos por terceiros. A finalidade é descobrir onde uma responsabilidade desaparece, não produzir um desenho idealizado.

### 2. Escolher uma linguagem operacional

Defina termos como alerta, evento, caso em investigação, incidente declarado, contenção, recuperação e encerramento. Não é necessário que toda organização use as mesmas palavras de outra. É necessário que as pessoas entendam a mesma coisa quando uma palavra aparece no procedimento e no plantão.

### 3. Atribuir decisões e substituições

Para cada passagem, escolha quem recebe, quem conduz e quem tem autoridade para decidir. Identifique substitutos e canais. Para contenções frequentes, avalie quais medidas podem ser previamente autorizadas, em quais condições, por quanto tempo e com qual revisão. Evite dar poderes indefinidos a uma função apenas para eliminar uma lacuna de processo.

### 4. Padronizar o registro mínimo

Crie um registro que acompanhe o caso entre turnos e equipes. Um conjunto inicial pode incluir identificador, horário, origem, ativo, resumo observável, impacto conhecido, hipóteses, fontes consultadas, limitações, classificação, prioridade, responsável atual, decisão pendente, ações, aprovações e próxima atualização. Adapte os campos para não coletar informação sem finalidade.

### 5. Ajustar observabilidade e cobertura

Liste serviços e identidades prioritários e verifique quais sinais estão disponíveis, quem mantém a coleta e qual é a retenção. Trate lacunas como risco conhecido. Se uma fonte crítica não está integrada, decida se a integração é necessária, se existe uma alternativa ou se a limitação precisa ser aceita por um responsável.

### 6. Formalizar o acordo com fornecedores

Para cada serviço externo, documente o que é monitorado, como são enviados os casos, quais dados podem ser compartilhados, quem investiga, quem pode executar mudanças e quem toma decisões. Estabeleça contatos de plantão, escalonamento, condições de encerramento e participação em exercícios. Revise o acordo quando escopo, sistemas ou operação mudarem.

### 7. Treinar, observar e revisar

Treine cada papel em suas decisões, especialmente nas transferências. Use um caso de mesa simples antes de tentar automatizar todo o fluxo. Depois de cada caso relevante ou exercício, registre melhorias em procedimentos, contatos, telemetria e autoridade. Defina um responsável por cada ação e verifique se foi concluída.

### 8. Automatizar com limites explícitos

Automação pode enriquecer um alerta, agrupar eventos semelhantes, abrir um caso, notificar papéis ou executar uma ação segura previamente aprovada. Comece por tarefas repetitivas com resultados verificáveis. Defina as condições de acionamento, as exceções, o registro, os controles contra duplicação e um caminho manual quando a automação falhar.

## Perguntas frequentes

### SOC e CSIRT são a mesma equipe?

Podem ser a mesma equipe em uma organização, ou funções separadas. A equivalência depende das responsabilidades efetivamente assumidas. Se uma equipe monitora, investiga, declara, coordena resposta e acompanha recuperação, ela pode exercer várias funções sob uma única estrutura. O nome local deve ser acompanhado de uma descrição clara do escopo.

### O SOC deve declarar incidentes?

Depende da política. O SOC pode identificar que os critérios foram atingidos e acionar a declaração, ou ter autoridade formal para declarar certos casos. É importante separar reconhecer o limiar técnico, ativar coordenação e aprovar medidas com impacto. Uma regra interna deve dizer quem decide e como escalar quando essa pessoa não está disponível.

### O CSIRT precisa operar 24 horas por dia?

A necessidade depende do risco, da criticidade dos serviços e do tempo aceitável para resposta. Uma organização pode combinar monitoramento contínuo com uma escala de resposta sob acionamento, desde que a diferença de cobertura seja explícita e compatível com o risco. “Temos plantão” deve significar que existe contato testado, substituição e autoridade para encaminhar decisões.

### Um SOC terceirizado substitui o CSIRT interno?

Não automaticamente. Um fornecedor pode monitorar e investigar conforme contrato, mas a organização ainda precisa coordenar proprietários de serviços, avaliar impacto, aprovar ações reservadas ao cliente e tratar responsabilidades internas. O contrato deve detalhar limites, escalonamentos e evidências fornecidas.

### Qual equipe é dona da investigação?

O SOC pode conduzir a análise inicial e continuar a investigação técnica; o CSIRT pode coordenar o caso formal e solicitar linhas de investigação. A propriedade deve ser registrada por etapa, especialmente em transferências. Uma investigação pode ter vários especialistas, mas precisa de um responsável por manter o raciocínio e comunicar o estado.

### Quando um alerta vira incidente?

Quando os critérios definidos pela organização são satisfeitos ou quando o responsável autorizado decide ativar a coordenação sob incerteza relevante. A classificação pode ser provisória e revisada. Não espere que todo detalhe esteja provado se há risco de dano crescente, mas registre o que motivou a decisão e o que ainda precisa ser verificado.

### Quem pode isolar um sistema ou bloquear uma conta?

Quem a política autoriza, considerando o domínio técnico e o impacto. Pode haver ações previamente aprovadas para condições limitadas e decisões que exigem o dono do serviço ou uma liderança. O processo deve dizer quem executa, quem aprova, quais alternativas existem e como reverter ou revisar a medida.

### Como saber se o fluxo está funcionando?

Examine casos e exercícios. Verifique se alertas relevantes chegam ao responsável, se evidências e limitações são registradas, se a declaração ocorre por critérios claros, se as decisões têm autoridade identificada e se a recuperação tem condições verificáveis. Indicadores podem ajudar a localizar atrasos, mas precisam de definições e contexto.

### Uma equipe pequena precisa de SOC e CSIRT separados?

Não necessariamente. Pode atribuir as funções a um grupo pequeno ou a pessoas com mais de um papel, desde que haja cobertura suficiente, substitutos, limites de autoridade e acesso a competências externas quando necessário. Separação formal não é pré-requisito; clareza de responsabilidade é.

### O que fazer quando faltam evidências?

Registrar a lacuna, buscar fontes autorizadas e adequadas, indicar o que não pode ser concluído e decidir se o risco exige coordenação provisória. A ausência de dado não confirma nem descarta um evento. A equipe deve considerar se a fonte estava ativa, se o período está coberto e se a retenção permite responder à pergunta.

## Leitura relacionada ao capítulo sobre Black Team

No capítulo 7 da versão original, a discussão sobre estrutura, papéis e coordenação do Black Team se relaciona diretamente à interface entre monitoramento e resposta: equipes só funcionam como capacidade organizacional quando papéis, autoridade e passagens de responsabilidade se encontram na prática. O livro de Hiago Kin Levi, publicado pela Editora Brasport, pode ser uma referência para aprofundar essa conversa sobre organização e coordenação. Ele não substitui documentação técnica atualizada, treinamento, exercícios nem o julgamento de quem conhece o ambiente e precisa decidir diante de evidências incompletas.
