# Indicadores de comprometimento e TTPs

## A pergunta que orienta a busca

Quando um indicador de comprometimento deixa de ser uma pista útil e passa a ser apenas um vestígio antigo, e como a equipe pode reconhecer uma atividade semelhante quando os endereços, nomes de arquivo ou hashes já mudaram? Essa é a pergunta central para quem pesquisa indicadores de comprometimento e TTPs.

A resposta curta é que indicadores pontuais descrevem artefatos observados, enquanto táticas, técnicas e procedimentos descrevem formas de agir. Os primeiros podem ser precisos e rápidos de aplicar, mas costumam envelhecer quando a infraestrutura é substituída.

Uma busca por um endereço IP, por exemplo, pode localizar registros históricos de conexão. Sozinha, ela não responde quem controlava o endereço, qual processo iniciou a comunicação, se a conexão teve sucesso, se corresponde a uma campanha conhecida ou se houve impacto.

## O que se está descrevendo

### Indicadores de comprometimento

Um indicador de comprometimento, ou IOC, é um dado observável que pode ajudar a identificar ou investigar uma atividade de interesse.

O valor precisa vir acompanhado de contexto. Uma soma criptográfica identifica determinado conteúdo com alta especificidade, mas não explica se o arquivo foi executado, encontrado em uma quarentena ou recebido como amostra em um laboratório.

Também é útil separar indicadores de observáveis e de conclusões. O observável é o evento registrado: um processo consultou um nome, um arquivo apareceu em um diretório, uma conta autenticou-se de um local incomum.

### Táticas, técnicas e procedimentos

Táticas, técnicas e procedimentos são frequentemente chamados de TTPs. Tática expressa o objetivo amplo que orienta uma parte da atividade, como obter acesso, manter presença ou coletar informação.

Uma técnica não é necessariamente maliciosa por si só.

O nível de detalhe importa. “Uso de script” é amplo demais para sustentar uma hipótese específica. “Um processo recém-criado por uma aplicação de escritório iniciou um interpretador com argumentos incomuns, seguido por conexões externas fora do padrão daquele ativo” já delimita observações e relações que podem ser verificadas. Ainda assim, essa frase descreve uma hipótese até que os registros correspondentes sejam examinados.

### Relação entre os dois tipos de conhecimento

Um IOC pode apontar para um artefato de um procedimento particular. A investigação desse artefato pode revelar uma sequência de ações compatível com uma técnica.

A relação deve ser registrada como uma ligação explicável, não como equivalência. Um domínio associado a um caso não demonstra que toda conexão a esse domínio represente a mesma técnica.

## Por que o contexto muda a decisão

### Validade temporal

Indicadores têm períodos de utilidade distintos.

A validade temporal deve ser tratada como hipótese operacional revisável. Registre quando o indicador foi observado, quando a fonte publicou ou atualizou a informação, quando a equipe o incorporou e qual intervalo considera apropriado para busca, bloqueio ou retenção.

É igualmente importante não confundir “não observado recentemente” com “inofensivo” ou “extinto”. A ausência de eventos pode decorrer de coleta incompleta, retenção curta, sensores indisponíveis ou mudanças na infraestrutura.

### Proveniência e cadeia de interpretação

Proveniência é a história de como um dado chegou à equipe e como foi transformado. Uma fonte pode ser telemetria própria, um relatório técnico, um compartilhamento entre organizações, uma análise de amostra ou um fornecedor.

Ao ingerir um indicador, preserve o valor exatamente como recebido e registre normalizações separadamente.

A cadeia de interpretação também inclui decisões negativas. Se um endereço foi descartado por ser infraestrutura compartilhada, se um hash não pôde ser validado ou se uma hipótese perdeu força após revisão, essa avaliação é parte útil do histórico.

### Escopo e confiança

Escopo responde onde e para que o indicador pode ser aplicado: a quais ativos, ambientes, períodos e tipos de investigação. Confiança expressa a força da evidência para uma afirmação determinada.

Em vez de perguntar apenas “qual é a confiança?”, pergunte “confiança em quê?”. A equipe pode confiar que um hash corresponde ao arquivo analisado, mas não que esse arquivo esteve ativo em um endpoint.

As decisões de resposta também têm escopos distintos.

## Como passar da pista à investigação

### Começar por uma afirmação verificável

Antes de criar uma busca, formule o que se quer descobrir em termos observáveis. “Saber se estamos comprometidos” é uma intenção compreensível, mas ampla demais para orientar uma consulta ou decisão. Uma pergunta mais útil pode ser: “Há eventos de resolução deste domínio nos registros disponíveis, em quais ativos e horários, e que processo originou as consultas?” Outra: “Os endpoints que exibiram o artefato também registraram o comportamento associado à hipótese?”

Uma afirmação investigável inclui entidade, evento, período e relação esperada. Ela separa o que a equipe sabe do que deseja verificar.

Depois, identifique quais registros podem responder à pergunta e quais não podem. Logs de DNS podem mostrar consultas observadas, mas talvez não o processo que as originou.

### Correlacionar sem apagar diferenças

Correlacionar não significa fundir todos os eventos em uma história única.

Uma boa linha do tempo distingue relações confirmadas de proximidades temporais. Se o processo A abriu uma conexão B, e o domínio C foi resolvido pelo mesmo host pouco antes, os registros podem sustentar uma associação; ela fica mais forte se houver identificador de processo ou telemetria que ligue a conexão à resolução.

Buscas por IOC devem retornar contexto ao redor do acerto: registros adjacentes, processo, usuário, ativo, destino, resultado e período. Um alerta isolado não deve ser copiado para um relatório como se fosse a sequência completa.

### Procurar comportamentos equivalentes

Se o indicador não aparece, ainda pode haver valor em investigar o comportamento associado, desde que esse comportamento esteja sustentado por evidência. Transforme uma descrição de técnica em perguntas sobre eventos que os controles realmente registram.

A expressão “comportamento equivalente” não quer dizer que qualquer ação parecida corresponda à mesma técnica.

Também é necessário pensar nos limites da detecção. Uma regra pode cobrir uma família de eventos e perder variantes que usam outro mecanismo.

## Fontes de evidência e suas perguntas

### Telemetria de endpoint

Registros de endpoint podem oferecer relações entre processos, arquivos, identidades, alterações locais e conexões. A qualidade depende da configuração, da retenção, da integridade do agente e dos campos efetivamente coletados.

Procure manter identificadores que permitam seguir uma atividade entre eventos, como identificador do processo, processo pai, sessão e ativo. Nomes de executáveis e caminhos ajudam, mas podem variar, ser falsificados ou ser pouco específicos.

### DNS, proxy, firewall e fluxo de rede

Fontes de rede mostram aspectos diferentes da comunicação.

Uma consulta de domínio não demonstra que uma conexão ocorreu. Uma tentativa bloqueada não demonstra que houve acesso ao serviço.

### Identidade, aplicações e nuvem

Registros de identidade podem ajudar a entender autenticações, fatores usados, origem, dispositivo, concessão ou negação de sessão e mudanças de privilégio. Logs de aplicações e serviços em nuvem acrescentam operações executadas por usuários, tokens ou identidades de serviço.

A interpretação depende de contexto operacional: turnos, viagens, acessos de serviço, automações, endereços corporativos e mudanças aprovadas. Uma geolocalização aproximada ou um dispositivo novo pode ser alerta para triagem, não prova de roubo de conta.

### Relatos externos e compartilhamento

Relatórios externos podem oferecer contexto que a organização ainda não tem: famílias de artefatos, cronologias, técnicas atribuídas e observações em outros ambientes.

Ao receber dados de compartilhamento, examine se a licença e as condições permitem armazenamento, enriquecimento e redistribuição. Remova dados pessoais ou detalhes de terceiros quando não forem necessários ao propósito autorizado.

## Decisões práticas sobre uso

### Buscar, alertar ou bloquear

A mesma observação pode justificar ações diferentes. Uma busca retrospectiva é adequada quando o indicador é incerto, possivelmente antigo ou proveniente de fonte externa.

A decisão não deve ser reduzida a uma pontuação. Considere a qualidade da evidência, atualidade, escopo, impacto potencial, reversibilidade, cobertura e custo de falso positivo.

Toda ação deve ter responsável e caminho de revisão.

### Priorizar investigações

Quando existem muitos indicadores, priorizar significa escolher quais perguntas merecem atenção primeiro, não declarar que os demais são irrelevantes. Critérios úteis incluem recência da evidência, especificidade, presença em ativos críticos, concordância entre fontes independentes, relação com comportamento observado e possibilidade de ação defensiva concreta.

Uma equipe pode separar triagem inicial, investigação aprofundada e monitoramento. A triagem verifica se há correspondência e se os registros têm contexto mínimo.

A capacidade também entra na decisão. Uma regra que gere centenas de alertas sem contexto pode reduzir a atenção disponível para casos relevantes.

### Comunicar o grau de certeza

Relatórios internos devem usar verbos que indiquem o que ocorreu no nível de evidência conhecido: “a fonte relatou”, “o sensor registrou”, “a consulta encontrou”, “os eventos são compatíveis com”, “não foi possível confirmar”.

Separe fatos observados, inferências, hipóteses e lacunas. Um fato pode ser que determinado endpoint registrou execução de um processo em certo horário.

Quando a confiança muda, explique por quê. Uma nova evidência pode elevar a confiança, enquanto uma explicação administrativa validada pode reduzi-la.

## Papéis e coordenação

### Inteligência e análise

A função de inteligência organiza perguntas, avalia fontes, relaciona observações a comportamentos e explicita incertezas. Isso não significa que uma única pessoa seja dona de toda a interpretação.

Quem publica ou mantém um indicador deve fornecer proveniência, contexto e condição de uso.

### Operações de segurança e resposta

A equipe de operações transforma conhecimento em buscas, detecções e fluxos de atendimento. Precisa conhecer o custo de cada alerta, o procedimento de triagem e quem pode agir.

Os donos de sistemas e serviços oferecem contexto sobre mudanças planejadas, ferramentas autorizadas e impactos de bloqueios. Sua participação não deve ser usada para descartar sinais por conveniência, mas ajuda a testar explicações benignas.

### Governança e comunicação

Gestores definem apetite de risco, critérios de escalonamento e autoridade para ações que afetem disponibilidade. Privacidade, jurídico e conformidade podem orientar retenção, compartilhamento e tratamento de dados conforme as regras aplicáveis à organização.

Compartilhamento entre equipes precisa preservar a distinção entre fatos locais e informação recebida.

## Cenários contrastantes

### Hipótese: domínio associado a atividade suspeita

Considere um cenário hipotético em que uma equipe recebe de um relatório um domínio associado a uma campanha. A primeira ação razoável pode ser buscar consultas e conexões relacionadas durante o intervalo coberto pelos registros internos.

Imagine que a busca encontre consultas em uma estação de laboratório, cujo processo pertence a uma ferramenta de análise aprovada. Essa evidência muda a interpretação e pode justificar excluir o evento da investigação de atividade no ambiente corporativo, mantendo o registro para auditoria.

Mesmo no segundo caso, a conexão a um domínio não estabelece qual dado, se algum, foi transmitido. A equipe buscaria evidência adicional nos registros disponíveis e seguiria os procedimentos de resposta.

### Hipótese: comportamento semelhante sem indicador conhecido

Em outro cenário hipotético, não há correspondência com hashes ou endereços publicados.

Se um administrador confirmar uma operação de manutenção e os registros de mudança, identidade e processo forem coerentes, a hipótese de abuso perde força. Se a explicação não corresponder ao horário, à conta ou à cadeia observada, a equipe mantém a investigação.

Esse cenário mostra por que comportamento e indicador se complementam. A busca por um valor exato pode falhar diante da troca de infraestrutura.

### Hipótese: indicador exato em contexto benigno

Considere ainda um cenário hipotético no qual um hash publicado aparece em um repositório de amostras de segurança. A correspondência confirma que o mesmo conteúdo está armazenado ali, mas não que tenha sido executado em uma estação de produção.

A resposta adequada depende dos controles e do propósito do sistema.

## Erros que distorcem a análise

### Tratar associação como prova

Uma fonte pode associar um valor a uma campanha sem demonstrar que toda ocorrência pertence a ela. Repetir a associação em ferramentas diferentes não cria necessariamente confirmação independente se todas herdaram o mesmo dado inicial.

Da mesma forma, classificar uma ação em um catálogo de técnicas não confirma intenção adversa. A categoria ajuda a conversar e comparar observações, mas é uma representação.

### Aplicar indicadores sem expiração ou escopo

Uma lista permanente acumula valores antigos, compartilhados e mal contextualizados. O resultado pode ser ruído, bloqueio indevido ou confiança falsa na cobertura.

Bloquear infraestrutura compartilhada é especialmente delicado.

### Supergeneralizar uma TTP

Uma detecção descrita como “comportamento malicioso” não permite entender o que foi observado nem como será validada. Uma regra muito ampla pode capturar ferramentas administrativas comuns; uma regra muito específica pode apenas reencontrar um procedimento já conhecido.

Generalizações também surgem ao atribuir todos os casos de uma técnica ao mesmo ator. Técnicas são usadas por agentes diferentes, equipes de teste e administradores.

### Confundir silêncio com cobertura

Uma consulta vazia não significa que nenhum evento ocorreu. Pode significar que a fonte não registra aquele tipo de evento, que o período foi removido, que a busca usou um formato incompatível ou que o sensor não cobria o ativo.

A equipe deve avaliar visibilidade antes de interpretar ausência.

### Perseguir atribuição cedo demais

Atribuir um incidente a um grupo pode ser intelectualmente atraente, mas frequentemente não é necessário para conter, investigar e recuperar. Indicadores compartilhados, infraestrutura alugada e ferramentas públicas dificultam uma conclusão.

Comece por perguntas sobre alcance, mecanismo, identidade e impacto. Se a atribuição for relevante para decisão estratégica, trate-a como hipótese separada e exija fontes e argumentos próprios.

## Como avaliar qualidade e utilidade

### Qualidade de um indicador

Avalie se o valor está sintaticamente correto, se a fonte é identificável, se há data e contexto, se a observação foi reproduzida ou verificada e se o escopo de aplicação está claro. Pergunte se o valor é exclusivo ou compartilhado, se pode ser reaproveitado e se há razão para acreditar que continua relevante.

A utilidade prática também depende da capacidade interna de procurar o valor.

### Qualidade de uma afirmação sobre TTP

Verifique se a técnica está descrita no nível adequado, se os eventos observáveis correspondem à descrição e se a evidência sustenta a relação entre eles. Examine se a interpretação considera comportamento legítimo, exceções conhecidas e limitações dos sensores.

Também avalie se a afirmação é transportável. Um padrão observado num tipo de servidor pode não se aplicar a estações, ambientes de nuvem ou versões diferentes de software.

### Qualidade operacional de uma detecção

Uma detecção útil explica por que disparou, apresenta os eventos relevantes e aponta o próximo passo de triagem. Ela deve ser testada contra atividades esperadas e registros históricos disponíveis, com participação de quem conhece a operação.

Avalie ruído, atraso, cobertura, campos ausentes e esforço de investigação.

Considere ainda a possibilidade de regressão. Mudanças no agente, no esquema de logs, na retenção ou na infraestrutura podem alterar o comportamento da regra.

## Exercício de mesa autorizado

### Objetivo e preparação

Um exercício de mesa permite praticar interpretação e coordenação sem executar atividade em sistemas de terceiros. O cenário a seguir é hipotético e deve ser adaptado a políticas internas.

Antes do exercício, escolha participantes de inteligência, operações, resposta, rede, identidade e administração dos sistemas pertinentes. Disponibilize um conjunto fictício de registros ou um ambiente de treinamento autorizado.

### Rodadas de decisão

Na primeira rodada, peça ao grupo que registre a pergunta de investigação, a fonte de cada indicador, a janela temporal e as fontes internas disponíveis.

Na rodada seguinte, acrescente que a estação pertence a uma equipe que usa ferramentas de análise de amostras, mas não há registro de mudança associado ao horário. O grupo deve buscar explicações concorrentes e decidir que fonte consultar em seguida.

Por fim, apresente uma hipótese alternativa: uma conta de serviço foi usada de modo incomum e houve sequência de processos em outro ativo, sem coincidência com os indicadores conhecidos. Os participantes devem decidir se investigam comportamento, quem coordena a busca e que limiar exige contenção.

### Debriefing e aprendizado

No encerramento, compare as decisões com as evidências disponibilizadas. Pergunte em que ponto uma hipótese virou fato sem suporte, quais fontes foram consideradas e quais ficaram fora, se houve confusão entre ausência de alerta e ausência de atividade, e quem tinha autoridade para cada ação.

Converta as observações em mudanças concretas: melhorar campos de telemetria, documentar quem aprova bloqueios, revisar o modelo de anotação de indicadores ou definir um caminho para validar atividades de laboratório.

## Roteiro de implementação

### 1. Definir propósito e público

Determine se o repositório servirá à investigação retrospectiva, triagem, detecção, bloqueio ou compartilhamento. Um mesmo sistema pode atender a mais de um uso, mas cada uso precisa de regras próprias.

### 2. Padronizar o registro

Para cada indicador, registre tipo e valor, fonte, referência ou identificador da observação, data de primeira e última observação quando conhecidas, contexto, escopo, confiança por afirmação, restrições de uso, responsável e estado. Acrescente uma descrição do que o indicador permite procurar e o que não permite concluir.

Para TTPs, registre a descrição do comportamento, as evidências que sustentam a classificação, o nível de especificidade, os sistemas em que foi observado e as alternativas consideradas. Se for usado um esquema de classificação, identifique sua versão ou referência, pois a organização e os nomes podem mudar.

### 3. Validar antes de operacionalizar

Faça uma revisão de sintaxe, proveniência, atualidade, escopo e risco de compartilhamento.

Para comportamentos, traduza a descrição em eventos observáveis e confirme que os sensores disponíveis registram esses eventos. Examine amostras de atividade legítima e as limitações conhecidas.

### 4. Separar pesquisa de resposta automática

Comece por buscas controladas e revisão humana. Só promova um indicador ou padrão a alerta recorrente quando houver finalidade, contexto, rota de triagem e responsável.

Use ambientes de teste ou conjuntos históricos autorizados para avaliar a lógica antes de implantá-la amplamente. Verifique se a regra localiza os eventos que deveria, se ignora cenários que não deveria classificar e se o alerta traz campos suficientes.

### 5. Acompanhar, revisar e aposentar

Defina datas de revisão e responsáveis.

Revise também as TTPs. Uma descrição pode tornar-se imprecisa quando a equipe descobre outro mecanismo ou quando o padrão se revela normal no ambiente.

### 6. Fechar o ciclo de aprendizado

Após cada investigação relevante, atualize o conhecimento com fatos que podem ser reutilizados: quais fontes confirmaram a atividade, que indicadores eram específicos, quais eram compartilhados, qual comportamento permaneceu observável após mudanças e que lacunas impediram uma conclusão. Não transforme detalhes sensíveis de um caso em regra geral sem revisão de privacidade, escopo e aplicabilidade.

Compartilhe lições com as equipes que mantêm sensores e sistemas. Se uma investigação não conseguiu ligar uma consulta DNS a um processo, avalie se essa relação é necessária e viável.

## Perguntas frequentes

### Um IOC confirma que houve invasão?

Não.

### TTP é sempre mais útil que indicador?

Não. Um hash exato pode ser altamente útil para localizar uma amostra específica.

### Quanto tempo um indicador deve permanecer ativo?

Não há duração única. A equipe deve considerar natureza do valor, data da observação, possibilidade de compartilhamento ou reaproveitamento, atualizações da fonte e consequência da ação.

### Como atribuir confiança sem inventar precisão?

Descreva a base da avaliação e a afirmação a que ela se refere. A confiança pode ser categórica se os critérios forem consistentes e conhecidos; não é obrigatório convertê-la em percentual.

### Como agir quando duas fontes discordam?

Compare o que cada fonte observou, em que data, com qual método e escopo.

### Uma regra baseada em TTP detecta variantes desconhecidas?

Pode encontrar comportamentos que compartilhem os eventos definidos pela regra, mesmo que alguns artefatos sejam diferentes. Isso não garante cobertura de todas as variantes.

### Como demonstrar que uma busca negativa é útil?

Informe quais fontes e ativos estavam cobertos, o período consultado, a retenção e quaisquer falhas conhecidas. Uma busca negativa documentada pode reduzir incerteza dentro desse escopo.

### Quando compartilhar indicadores com outras organizações?

Quando houver propósito defensivo legítimo, base de compartilhamento adequada e informação suficiente para que o destinatário entenda proveniência, escopo, atualidade e limitações. Respeite restrições da fonte, privacidade, contratos e política aplicável.

## Leitura relacionada ao capítulo 7

A discussão de indicadores e TTPs se conecta ao capítulo 7 do manuscrito original, dedicado à estrutura, aos papéis e à coordenação do Black Team.

O livro de Hiago Kin Levi, publicado pela Editora Brasport, oferece ao leitor o contexto mais amplo dessa estrutura e coordenação. Esta leitura relacionada não substitui documentação técnica atualizada, treinamento, políticas locais ou julgamento da equipe.
