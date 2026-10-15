# Threat hunting para encontrar APTs

## A pergunta que orienta a busca

Uma caçada começa com uma pergunta que possa ser confrontada com evidências: que comportamento persistente ou movimento de um invasor sofisticado poderia estar ocorrendo em nosso ambiente sem gerar um alerta conclusivo? A formulação precisa indicar um comportamento observável, uma população de ativos, um intervalo de tempo e as fontes que podem confirmar ou enfraquecer a hipótese. “Procurar APTs” expressa uma preocupação legítima, mas não define uma investigação. “Verificar se contas de serviço fizeram autenticações interativas incomuns em servidores que normalmente não administram” já oferece limites testáveis, desde que os registros necessários existam.

## O que é hunting e o que não é

Threat hunting, ou caça a ameaças, é uma investigação proativa conduzida sobre dados já disponíveis para descobrir atividade que controles automatizados não classificaram como incidente. Em vez de aguardar um alerta com confiança suficiente, a equipe formula hipóteses e procura evidências compatíveis, divergentes ou inconclusivas. O processo combina conhecimento do ambiente, análise de dados, validação com responsáveis e registro reproduzível. É uma forma de detecção e aprendizado, não uma garantia de que todo adversário será encontrado.

## Por que a resposta tradicional pode não bastar

Alertas dependem de dados, regras e limiares. Uma regra pode ser precisa em um ambiente e ruidosa em outro; pode cobrir uma técnica conhecida, mas não uma variação; pode ainda deixar de disparar quando um adversário utiliza uma ferramenta administrativa permitida. A ausência de alerta informa apenas que os mecanismos habilitados não produziram um alerta nas condições observadas. Não informa que o ambiente está livre de comprometimento.

## Como escolher uma hipótese observável

Uma hipótese forte é específica o bastante para ser investigada e ampla o suficiente para não depender de um único indicador frágil. Ela identifica comportamento e contexto, não uma atribuição prematura. Em vez de “um grupo conhecido está presente”, prefira “uma credencial privilegiada pode estar sendo usada de forma interativa fora dos sistemas e horários em que sua função costuma operar”. A primeira afirma uma identidade que os dados raramente demonstram; a segunda sugere observações verificáveis.

- **Comportamento:** qual ação ou sequência se espera observar.
- **Escopo:** quais usuários, ativos, segmentos ou aplicações entram na busca.
- **Período:** quando os eventos podem ter ocorrido e por que esse intervalo é relevante.
- **Evidência esperada:** quais campos, relações ou mudanças apoiariam a hipótese.
- **Explicações alternativas:** quais tarefas autorizadas poderiam produzir sinais semelhantes.
- **Critério de revisão:** que resultado faria ampliar, restringir ou abandonar a hipótese.
- **Limitações:** quais fontes ausentes ou retenções curtas impedem uma conclusão robusta.

## Do alerta à evidência: níveis de afirmação

Uma investigação precisa separar quatro coisas. Primeiro, um **alerta** ou um achado inicial é um motivo para examinar algo; não é confirmação. Segundo, um **fato observado** é um registro verificável, como uma autenticação registrada em determinado horário, com os campos preservados e a fonte identificada. Terceiro, uma **inferência** relaciona fatos, por exemplo que duas sessões provavelmente correspondem à mesma atividade. Quarto, uma **conclusão** atribui significado operacional, como atividade autorizada, suspeita ou incidente confirmado segundo os critérios internos.

## Fontes de evidência e suas perguntas

A escolha das fontes decorre da hipótese. Não há uma lista universal de telemetria que torne toda caça válida. Cada sistema registra aspectos diferentes, com níveis variados de detalhe e retenção. Antes de buscar, confirme como os eventos são gerados, encaminhados, normalizados e descartados, e quem pode interpretar seus campos.

### Identidade e autenticação

Registros de diretório, provedor de identidade, autenticação multifator e serviços de acesso remoto ajudam a entender inícios de sessão, falhas, concessões de sessão, alterações de credenciais e uso de contas privilegiadas. A pergunta pode ser se uma identidade acessou recursos incompatíveis com sua função, se houve mudança de padrão após uma alteração de privilégio ou se uma sessão veio de origem não esperada.

### Endpoints e servidores

Telemetria de endpoint pode registrar processos, relações entre processos, conexões, alterações de arquivos, serviços, tarefas agendadas ou mudanças de configuração, dependendo do agente e da política. Essa fonte ajuda a investigar persistência e execução, mas não é infalível: sensores podem estar desativados, hosts podem ficar desconectados e versões diferentes podem produzir campos distintos.

### Rede e serviços de infraestrutura

Fluxos de rede, DNS, proxy, firewall, VPN, balanceadores e registros de serviços podem mostrar comunicação entre segmentos, destinos consultados, volume e duração. São úteis para testar caminhos laterais, contato repetido com destinos raros e acessos que contrariam a segmentação planejada. Em geral, esses dados descrevem conexões, não intenção. DNS pode ser resolvido por cache ou encaminhadores; um domínio pouco frequente pode pertencer a um serviço legítimo recém-adotado.

### Correio, colaboração e aplicações

Logs de correio e aplicações SaaS podem esclarecer acesso a caixas, criação de regras, consentimentos, alterações em aplicações integradas, downloads e compartilhamentos. Uma busca pode investigar se uma conta alterou uma regra de encaminhamento após um acesso anômalo ou se um aplicativo recebeu permissões fora do padrão. Esses eventos podem envolver dados pessoais e conteúdo de comunicação; restrinja o escopo, aplique as políticas internas e envolva privacidade ou jurídico conforme necessário.

### Mudanças, inventário e contexto operacional

Inventário de ativos, gestão de configuração, chamados, janelas de manutenção, aprovações de acesso e mapas de dependência dão contexto aos eventos técnicos. Uma alteração pode ser legítima e ainda parecer incomum se a equipe não conhece a mudança autorizada. O oposto também acontece: um ativo sem proprietário ou uma conta antiga pode normalizar atividade arriscada por falta de governança.

## Como combinar fontes sem fabricar certeza

A correlação é mais forte quando fontes independentes descrevem a mesma sequência com identificadores compatíveis. Um registro de identidade mostra uma sessão; o endpoint associa essa sessão a um processo; o firewall registra uma conexão coerente com o destino; um chamado explica ou não a atividade. O valor está em testar se as relações temporais, os ativos e as identidades se alinham, não em somar alertas como se cada um fosse uma confirmação independente.

## Decisões práticas durante a caçada

### Definir escopo e prioridade

Priorize hipóteses pelo risco potencial, pela exposição do ativo e pela capacidade real de investigá-las. Uma hipótese sobre identidades privilegiadas em sistemas críticos pode merecer atenção antes de uma busca de baixa consequência em dispositivos de teste, mas a prioridade deve refletir a arquitetura e o impacto locais. A equipe pode considerar criticidade, sinais prévios, janela de retenção e custo de coleta; não precisa fingir uma precisão numérica que os dados não sustentam.

### Escolher entre amplitude e profundidade

Uma busca ampla pode localizar padrões inesperados, mas tende a gerar mais resultados para explicar. Uma busca focalizada em contas, segmentos ou eventos específicos facilita validação, mas depende de uma hipótese bem formada e pode deixar variações fora do recorte. Uma estratégia prática começa com um escopo justificável, inspeciona a qualidade dos dados e expande quando os achados ou as limitações indicarem.

### Definir quando envolver o CSIRT

Encaminhe quando houver evidência consistente de acesso não autorizado, persistência, privilégio indevido, movimento entre sistemas, exfiltração possível ou impacto em serviço, segundo os critérios internos. Sinais ambíguos em ativos sensíveis também podem justificar consulta antecipada. O analista de hunting não precisa decidir sozinho se há incidente: deve entregar observações, fontes, cronologia, escopo conhecido, hipóteses alternativas e lacunas para que o CSIRT aplique o processo de resposta.

### Encerrar, continuar ou redirecionar

Uma hipótese pode ser encerrada quando o escopo foi coberto com fontes adequadas, a evidência não a sustenta e as limitações estão claras. Pode continuar se houver uma linha de investigação concreta, relevância suficiente e dados que possam ser obtidos. Deve ser redirecionada se a pergunta inicial se mostrar mal formulada ou se um achado novo abrir uma hipótese diferente. O registro de encerramento informa o que foi examinado e o que não se pode afirmar.

## Cenários hipotéticos para testar o raciocínio

### Conta de serviço em um servidor inesperado

**Cenário hipotético:** uma conta usada por uma aplicação aparece em registros de autenticação de um servidor de arquivos. Esse fato é um alerta, não uma prova. A equipe formula a hipótese de que a conta está sendo usada fora da função prevista e verifica o inventário, as permissões, a origem da sessão, o tipo de autenticação e a janela de manutenção. O responsável pela aplicação confirma que houve uma migração, mas não encontra documentação para aquele servidor.

### Sessões administrativas fora do padrão

**Cenário hipotético:** uma conta privilegiada autentica em uma estação de trabalho fora de uma janela habitual. O desvio pode ser abuso de credencial, plantão legítimo, acesso de emergência ou erro de inventário. A equipe verifica política de acesso, origem do dispositivo, autenticação multifator, chamado associado e sequência de ações no endpoint. Horário incomum sozinho não resolve a pergunta.

### Conexões raras de um segmento sensível

**Cenário hipotético:** a telemetria de rede mostra que um servidor de alto impacto iniciou conexões para um destino interno pouco frequente. A hipótese é que haja comunicação administrativa ou movimentação não documentada. A equipe consulta regras de segmentação, função do servidor, inventário do destino e registros de processo. A raridade ajuda a priorizar, mas não é um veredito.

### Padrão comum que não deve ser ignorado

**Cenário hipotético:** um utilitário de administração aparece em muitos endpoints durante a noite. A regra baseada apenas no nome da ferramenta geraria dezenas de alertas. O hunting agrupa os eventos por conta, origem, destino e relação temporal com mudanças autorizadas. A maioria corresponde a manutenção planejada, mas um pequeno subconjunto parte de uma estação sem função administrativa.

## Papéis, responsabilidade e cooperação

O analista de hunting conduz a pergunta, define escopo, consulta dados e registra raciocínio. Engenheiros de detecção podem ajudar a transformar padrões repetíveis em lógica de alerta. Operações e proprietários de sistemas explicam funções, mudanças e dependências. Identidade e rede esclarecem a semântica de seus registros. O CSIRT decide o tratamento do incidente e coordena preservação e contenção conforme os procedimentos vigentes.

## Como transformar achados em detecções sustentáveis

Nem todo achado deve virar uma regra. Um evento raro pode depender de uma exceção local ou de uma fonte instável. Antes de operacionalizar, determine se o comportamento é detectável de forma contínua, quais campos são necessários, que variações legítimas existem, quem será responsável por triagem e como a regra será revisada. Uma regra sem proprietário e sem processo de resposta pode se tornar ruído ignorado.

## Erros comuns e como evitá-los

### Procurar indicadores sem contexto

Endereços, nomes de arquivo, domínios e hashes podem ser úteis como pivôs, mas mudam e podem ser compartilhados por atividades legítimas. Uma correspondência pode justificar investigação; não identifica sozinha um operador ou intenção. Registre origem, data e escopo do indicador e busque relações locais antes de transformar a correspondência em conclusão.

### Tratar ausência como prova de segurança

Uma consulta vazia pode significar que o comportamento não ocorreu, mas só dentro do universo efetivamente observado. Verifique cobertura por ativo, período, campos e integridade do coletor. Se essa verificação não puder ser feita, declare que o resultado é inconclusivo. A pergunta “o que o sistema registrou?” vem antes de “o que aconteceu?”.

### Confundir novidade com malícia

Atividades incomuns podem resultar de atualização, migração, suporte, automação ou mudança de função. A novidade torna algo digno de explicação, não culpado. Compare com linhas de base relevantes, mas lembre-se de que uma linha de base contaminada por atividade antiga ou maliciosa pode normalizar o risco. Valide com fontes independentes e responsáveis pelo processo.

### Ampliar a busca sem controle

Adicionar fontes, ativos e meses de dados pode parecer uma forma de aumentar confiança. Sem uma relação clara com a hipótese, isso produz volume, exposição de dados e vieses de seleção. Cada expansão deve responder a uma pergunta derivada e ter justificativa. Se o objetivo mudar, crie uma nova hipótese e preserve o histórico.

### Ignorar a qualidade e a semântica dos dados

Campos com nomes parecidos podem significar coisas diferentes entre produtos. Uma “origem” pode ser o endereço do proxy, não o cliente; um horário pode refletir recebimento, não ocorrência; um usuário pode ser uma identidade de serviço. Leia a documentação da fonte e confirme a interpretação com seu proprietário. Se a semântica não estiver clara, evite conclusões que dependam dela.

### Fazer consultas impossíveis de repetir

Anotações como “filtrei os logs e parecia normal” não permitem revisão. Registre plataforma, fonte, período, filtros, transformações e versão da consulta, sem expor segredos. Guarde a amostra necessária conforme política e controle de acesso. Um colega deve conseguir compreender como o resultado foi produzido, mesmo que não possa acessar os mesmos dados por restrição de privilégio.

### Medir atividade em vez de resultado

Quantidade de consultas, eventos revisados ou horas gastas não demonstra valor por si só. Pode incentivar volume em vez de qualidade. Avalie se a pergunta foi respondida dentro dos limites, se o achado foi encaminhado corretamente, se a detecção ou a cobertura melhorou e se as lacunas críticas receberam dono. Métricas devem apoiar decisão e ser interpretadas no contexto.

## Avaliar qualidade e utilidade

Uma caçada bem conduzida deixa uma trilha revisável. Outra pessoa consegue identificar hipótese, escopo, fontes, período, método, fatos, inferências, alternativas consideradas e conclusão. A confiança não precisa ser um número se a equipe não tem escala validada; categorias descritivas como baixa, moderada ou alta podem ser úteis quando acompanhadas de critérios explícitos.

## Exercício de mesa autorizado

Um exercício pode ensinar método sem executar ações em sistemas reais. Prepare um conjunto fictício de registros, com nomes e identificadores inventados, horários e limitações declaradas. Apresente à equipe uma hipótese: “uma conta técnica pode ter sido usada para acessar um servidor fora do padrão documentado”. Inclua um evento de autenticação, um inventário incompleto, um chamado de manutenção e a indicação de que um dos servidores não envia telemetria de endpoint.

## Roteiro de implementação

### Etapa inicial: estabelecer condições

Defina um responsável pela iniciativa e o canal de coordenação com o CSIRT. Escolha um risco prioritário e escreva uma hipótese pequena. Confirme quais fontes existem, seus proprietários, retenção, cobertura e restrições de acesso. Não comece com um catálogo de centenas de técnicas; comece com uma pergunta que a equipe tenha condições de investigar e que esteja ligada a ativos relevantes.

### Etapa de execução: testar e validar

Faça a consulta em um conjunto delimitado. Primeiro valide a qualidade dos dados: horários, campos, duplicidades, cobertura e comportamento esperado da fonte. Depois examine os resultados e selecione amostras que possam confirmar ou contestar a hipótese. Uma consulta tecnicamente correta sobre um campo mal interpretado continua produzindo resposta errada.

### Etapa de aprendizagem: consolidar o que mudou

Ao concluir, atualize a documentação da hipótese e informe o CSIRT sobre achados e limitações relevantes. Transforme padrões repetíveis em detecção somente após avaliar falsos positivos, dependências e capacidade de triagem. Atribua dono a cada melhoria e defina como verificar sua execução. O ciclo se completa quando a organização aprende algo sobre atividade, cobertura ou processo e consegue agir sobre esse aprendizado.

## Perguntas frequentes

### É preciso ter um SIEM para fazer hunting?

Não necessariamente. Um SIEM facilita centralizar e correlacionar eventos, mas a investigação pode usar registros de fontes específicas, desde que haja acesso autorizado, contexto e possibilidade de reproduzir a análise. A ausência de centralização pode aumentar o esforço e limitar correlação; registre esse custo e avalie a melhoria conforme a necessidade real.

### Hunting significa procurar sem qualquer indício?

Não. A busca pode partir de uma hipótese baseada em risco, inteligência, lacuna de controle ou evento fraco. “Sem alerta conclusivo” não significa “sem pergunta”. A equipe ainda precisa decidir o que espera encontrar e quais observações seriam relevantes. Explorar dados sem objetivo tende a produzir associações acidentais e conclusões difíceis de revisar.

### Uma busca sem achados prova que não há APT?

Não. Ela só pode reduzir a plausibilidade de uma hipótese dentro do escopo, período e fontes efetivamente examinados. Para interpretar uma ausência, é necessário conhecer cobertura, retenção e qualidade dos dados. Mesmo uma investigação cuidadosa não demonstra ausência total de adversários; ela informa o que foi possível observar e quais limites permanecem.

### Um indicador conhecido confirma presença de um grupo?

Não por si só. Um indicador pode estar desatualizado, compartilhado, reaproveitado ou presente por causa de uma atividade legítima. A correspondência é um pivô para análise. Atribuição requer evidências e critérios próprios; confirme primeiro o evento local, a procedência do dado e as relações com outras observações.

### Quando uma anomalia vira incidente?

Quando atende aos critérios internos de resposta ou quando a combinação de evidências e impacto potencial exige tratamento formal. A decisão cabe ao processo e aos responsáveis designados, não a uma regra universal. Um sinal ambíguo em ativo crítico pode merecer consulta precoce ao CSIRT, mesmo sem confirmação de comprometimento.

### Como evitar que a equipe seja inundada por alertas novos?

Converta achados em detecções com contexto, exemplos legítimos, campos confiáveis e proprietário de triagem. Avalie o comportamento em modo controlado, ajuste a lógica com justificativa e defina como revisar a regra. Se a condição depende de inventário desatualizado, corrija essa dependência ou explicite o limite antes de confiar na detecção.

### Quanto tempo uma caçada deve durar?

O tempo depende da pergunta, criticidade, dados e disponibilidade dos responsáveis. Um limite pode ajudar a controlar esforço, desde que não force uma conclusão artificial. Se a investigação não pode avançar por falta de registros, documente a lacuna e proponha uma decisão sobre coleta. Se surgir evidência de incidente, siga a resposta formal em vez de manter o caso como pesquisa indefinida.

### É correto compartilhar a hipótese com o usuário do ativo?

Depende da necessidade de validação, do risco de alertar alguém mal-intencionado e das políticas internas. Perguntas neutras ao proprietário operacional podem esclarecer mudanças, mas a coordenação deve respeitar confidencialidade e o processo do CSIRT. Limite a divulgação às pessoas que precisam participar e registre a fonte de cada confirmação.

### O que deve constar no relatório final?

Inclua a pergunta, o escopo e período, as fontes e limitações, o método reproduzível, fatos observados, inferências separadas, alternativas avaliadas e decisão. Registre resultados negativos relevantes, cobertura ausente, encaminhamentos e melhorias com responsáveis. A conclusão deve dizer o que os dados sustentam e o que continua desconhecido.

## Relação com o capítulo da versão original

No capítulo 4, dedicado às limitações da resposta tradicional diante de APTs, Hiago Kin Levi discute por que depender exclusivamente de alertas e regras conhecidas pode deixar lacunas. A caça a ameaças se relaciona a esse problema ao criar uma investigação orientada por hipótese sobre a telemetria disponível, com atenção às limitações de cobertura e à passagem de achados para o processo de resposta. O livro de Hiago Kin Levi, publicado pela Editora Brasport, pode oferecer um contexto editorial para essa discussão. Ele não substitui documentação técnica atualizada, treino, fontes confiáveis nem o julgamento da equipe que conhece o ambiente.

## Conclusão: responder com limites explícitos

Uma busca por APTs começa com uma pergunta verificável e termina com uma afirmação proporcional à evidência. Entre esses pontos, a equipe escolhe fontes, testa a qualidade dos dados, confronta explicações alternativas, registra consultas e resultados e decide se deve encaminhar, melhorar a detecção ou reconhecer uma lacuna. A disciplina de declarar incerteza não reduz o valor da investigação; ela impede que o alerta vire prova ou que o silêncio dos registros vire garantia.

## Governança dos dados e limites de acesso

O acesso às fontes precisa acompanhar a finalidade da hipótese. Ter permissão técnica para consultar um repositório não significa que qualquer investigação deva examinar todo o conteúdo nele armazenado. Defina previamente quais campos são necessários, quem pode aprovar a consulta e como os resultados serão protegidos. Para perguntas sobre autenticação, metadados podem bastar; conteúdo de mensagens ou arquivos pode ser excessivo. Minimizar a coleta reduz exposição e ajuda a manter a investigação proporcional.

A retenção cria escolhas concretas. Guardar eventos por mais tempo pode permitir reconstruir uma atividade persistente, mas envolve custo, capacidade de busca, obrigações de privacidade e gestão de acesso. A decisão deve partir do risco e das exigências aplicáveis ao ambiente, com responsáveis técnicos e jurídicos quando pertinente. Não presuma que uma cópia exportada será preservada com o mesmo controle do sistema de origem: defina armazenamento, prazo e descarte autorizado antes de produzir conjuntos de trabalho.

A cadeia de custódia formal pode ser necessária quando a investigação evolui para processo disciplinar, regulatório ou jurídico. O hunting exploratório não deve improvisar esses requisitos. Se um achado puder exigir preservação probatória, consulte o CSIRT e as áreas competentes antes de alterar o sistema, coletar conteúdo ou redistribuir evidências. Registre quem acessou os artefatos, quando e para qual finalidade, conforme o procedimento da organização.

## Decisões quando a visibilidade é desigual

Fontes raramente cobrem todos os ativos com a mesma qualidade. Um servidor crítico pode ter telemetria detalhada e uma estação remota enviar apenas eventos de autenticação. Compare a cobertura com o papel e a exposição dos ativos, e evite tratar a amostra bem monitorada como representação de toda a rede. Se a hipótese envolve um segmento sem dados, é preciso declarar que a investigação não pode testá-la nesse segmento.

Há mais de uma resposta possível para essa lacuna. A equipe pode priorizar a instrumentação, restringir a hipótese ao conjunto observável ou solicitar registros a um sistema proprietário. Cada opção tem custo e risco operacional distintos. Instalar um coletor durante uma investigação pode alterar o ambiente ou não recuperar eventos passados; restringir o escopo reduz a abrangência; uma exportação manual pode atrasar a resposta. Documentar a decisão permite que gestores escolham conscientemente o nível de risco residual.
