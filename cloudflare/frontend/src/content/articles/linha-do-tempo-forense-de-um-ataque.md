# Linha do tempo forense de um ataque

## A pergunta que orienta a busca

Quando uma equipe encontra sinais de atividade suspeita, a pergunta inicial não deveria ser apenas “quando começou o ataque?”.

Essa pergunta permite separar o que foi registrado daquilo que se infere. Um alerta pode confirmar que um sensor classificou determinada atividade como anômala.

O resultado esperado é uma sequência verificável, com horários interpretados, fontes identificadas, lacunas visíveis e graus de confiança explicados. Ela ajuda a responder perguntas operacionais: qual identidade iniciou uma sessão?

Uma linha do tempo também serve a quem precisa decidir sob incerteza.

## O que a linha do tempo representa

Uma linha do tempo forense reúne observações de fontes distintas numa ordem temporal comum, mantendo a referência de origem e o significado de cada observação. “Comum” não significa que todos os relógios sejam perfeitos ou que todos os eventos possam ser comparados com precisão idêntica.

O registro mínimo de um evento inclui um identificador, a descrição objetiva, a fonte, o horário tal como foi recebido, o fuso ou a referência temporal conhecida, o horário normalizado, a precisão estimada, o método de normalização e a referência ao artefato preservado.

É importante distinguir três tempos. O **horário do evento** é quando a atividade teria ocorrido segundo a fonte.

Uma linha do tempo pode conter eventos confirmados, eventos prováveis, hipóteses e lacunas. Esses estados precisam ser explicitados. “Confirmado” deve se referir ao que a fonte sustenta, não a uma interpretação mais ampla.

A linha do tempo não é necessariamente linear em sua origem.

## Por que a sequência importa na resposta

A resposta a incidentes depende de uma reconstrução que evolui. No início, há sinais dispersos: um alerta, um chamado de usuário, uma falha de login ou um pico de tráfego.

A cronologia sustenta decisões de contenção. Se uma identidade continua autenticando-se em ativos relevantes, revogar sessões ou suspender credenciais pode reduzir exposição; porém, uma conta de serviço pode sustentar funções críticas.

Ela também organiza a recuperação. Antes de restaurar, a equipe precisa saber o que foi alterado, quais credenciais podem ter sido expostas, quais sistemas dependem do ativo e em que ponto a confiança foi perdida.

Na análise posterior, a cronologia permite avaliar o processo de resposta. Quando o primeiro sinal foi recebido?

## Decisões práticas antes de combinar os registros

Antes de importar eventos, defina a pergunta de investigação e o escopo temporal inicial.

Defina também identificadores para relacionar observações sem presumir identidade. Nomes de conta podem ser reutilizados ou renomeados.

Decida qual precisão a análise suporta. Uma fonte pode registrar milissegundos, mas seu relógio pode estar atrasado alguns minutos.

Determine a forma de preservação.

Por fim, combine o nível de detalhe com os destinatários.

## Fontes de evidência e o que cada uma pode sustentar

### Identidade e autenticação

Provedores de identidade, diretórios, VPNs, sistemas de acesso remoto e aplicações podem registrar autenticações, negações, desafios adicionais, criação de sessão, emissão de token e encerramento.

Relacione a identidade a outros campos: identificador imutável da conta, aplicação, recurso, método de autenticação, resultado, ID de sessão, endereço de origem, agente cliente e dispositivo registrado. Atribuição depende de contexto: uma credencial pode ser usada por serviço automatizado, por uma sessão delegada ou por um operador autorizado.

### Endpoint e sistema operacional

A telemetria de endpoint pode registrar inicialização, criação e encerramento de processos, linha de comando, pai e filho, usuário, hash, assinatura, alterações de arquivo, conexões e eventos de segurança. Logs nativos também podem incluir criação de conta, elevação de privilégio, instalação de serviço ou alteração de política.

Processos precisam ser interpretados em árvore e contexto. Um processo iniciado por uma aplicação administrativa pode ser rotineiro; o mesmo nome em diretório inesperado ou sob uma conta incomum merece investigação.

### Aplicações, arquivos e dados

Logs de aplicação e auditoria podem identificar operações de leitura, alteração, exportação, compartilhamento e exclusão. “Acesso” precisa ser definido: uma solicitação recebida, uma resposta autorizada, uma consulta executada e uma leitura de conteúdo são fatos distintos.

Metadados de arquivo, trilhas de auditoria, registros de backup e controles de prevenção de perda podem complementar a reconstrução. Datas do sistema de arquivos são mutáveis e podem ser copiadas de forma que altere sua interpretação.

### Rede, DNS e serviços de borda

Firewalls, proxies, balanceadores, sistemas de DNS, gateways de e-mail e sensores de rede fornecem observações complementares. Um registro de conexão pode indicar que houve fluxo entre pontos e em determinado período; pode não identificar o conteúdo, o processo responsável ou o usuário.

Para interpretar uma conexão, correlacione endereço e porta com equipamento, usuário, processo, direção, volume, duração, política de rede e contexto do serviço. A telemetria pode registrar abertura e fechamento, amostras ou fluxo agregado; essas diferenças limitam afirmações sobre quantidade transferida.

### E-mail, colaboração e dispositivos móveis

Sistemas de e-mail e colaboração podem registrar envio, entrega, encaminhamento, regras, compartilhamento e mudanças de permissão.

Em dispositivos móveis, registros de gerenciamento, autenticação, aplicações e rede podem ser fragmentários.

## Normalização de horários sem apagar a origem

A normalização começa por preservar o timestamp bruto exatamente como a fonte o apresentou.

Fusos não são meros rótulos.

Relógios podem divergir. NTP ou outro mecanismo de sincronização fornece evidência de configuração e estado, mas saber que o serviço estava habilitado não demonstra que o relógio estava correto naquele momento.

Atraso de ingestão merece coluna própria ou atributo explícito.

Considere a incerteza em conjunto. Se uma fonte tem desvio estimado de dois minutos e outra registra ao segundo, a comparação pode ter uma faixa de quatro minutos ou outro intervalo definido pela metodologia.

Um procedimento reprodutível mantém pelo menos quatro elementos: valor bruto, interpretação do fuso, valor normalizado e nota de incerteza.

## Montando a sequência verificável

Comece com eventos de alto valor para a pergunta definida, não com cada linha disponível.

Agrupe por entidades e relações. Uma conta, dispositivo, sessão, processo, arquivo e conexão são entidades diferentes.

Para cada evento, escreva uma descrição que contenha observação e contexto mínimo.

Faça uma revisão de contradições. Um registro pode indicar que uma conta estava inativa enquanto outro registra uma sessão; as fontes talvez usem definições distintas de atividade.

Marque explicitamente os trechos sem visibilidade. Se o endpoint deixou de enviar telemetria entre 09:10 e 10:45, registre o intervalo e a causa conhecida ou desconhecida.

Organize a visualização em camadas, se necessário: identidade, endpoint, aplicação, rede e resposta.

## Como avaliar causalidade e confiança

Correlação temporal significa que eventos ocorreram em períodos relacionados; não estabelece que um causou o outro.

Para sustentar uma relação, procure vínculos técnicos diretos e explicações alternativas. Uma associação entre sessão e processo pode ser sustentada por identificador de logon, usuário, token, cadeia de processos e registro do sistema.

Use níveis de confiança de forma consistente, se a organização os adotar.

Separe a confiança no registro da confiança na interpretação.

Uma hipótese útil gera previsões observáveis. Se a explicação é que uma conta foi usada a partir de um dispositivo não reconhecido, procure identificador de dispositivo, sessão, método de autenticação e registros de acesso ao recurso.

## Cenários contrastantes, sempre hipotéticos

### Uma sessão legítima e um alerta próximo

Imagine, hipoteticamente, que um analista de suporte faça uma autenticação válida às 13:02 e um endpoint gere um alerta às 13:03. A proximidade pode levar à hipótese de que a sessão iniciou a atividade detectada.

Uma decisão defensiva razoável pode ser preservar os registros e verificar com a equipe responsável se havia manutenção autorizada, enquanto se avalia o risco do alerta.

### Uma sessão válida seguida de atividade em outro sistema

Considere, também hipoteticamente, que um serviço de identidade registre autenticação bem-sucedida e minutos depois um servidor registre acesso a um compartilhamento. A sequência é compatível com uso da sessão, mas também pode envolver uma conta de serviço, autenticações distintas ou uma sessão automatizada.

O registro pode justificar uma investigação mais ampla mesmo antes de provar causalidade. A equipe pode revisar permissões da conta, procurar sessões correlatas e preservar logs do servidor. A formulação adequada distingue “autenticação aceita” de “recurso acessado” e de “dados lidos”. São três afirmações com suportes diferentes.

### Uma conexão de saída em período de backup

Em um cenário hipotético, um proxy registra uma conexão de saída volumosa durante a janela de backup. Um sistema de monitoramento sinaliza volume incomum e, pouco depois, há um alerta de endpoint.

A equipe pode preservar metadados e, conforme a política, restringir temporariamente o fluxo ou isolar o ativo depois de avaliar impactos.

### Uma lacuna durante a janela relevante

Imagine que, hipoteticamente, um agente de endpoint pare de enviar eventos por uma hora. Antes da interrupção há uma autenticação; após o retorno, há uma alteração de arquivo.

Se não houver fonte alternativa, registre o período sem cobertura como limite da investigação.

### Contenção que altera o estado observado

Em outro cenário hipotético, a equipe revoga uma sessão às 16:20 e reinicia o equipamento às 16:35.

Ações de contenção também podem reduzir evidência volátil ou interromper coleta.

## Papéis e responsabilidades

A pessoa que coordena o incidente define a pergunta prioritária, o escopo, os responsáveis por decisão e os critérios de escalonamento.

Analistas de identidade, endpoint, rede, nuvem e aplicações explicam a semântica das fontes que conhecem. Eles devem indicar como os horários são produzidos, quais campos são confiáveis, limitações de retenção, atrasos e mudanças recentes de configuração.

A área jurídica, privacidade, compliance ou proteção de dados pode orientar requisitos de preservação, acesso e comunicação, conforme jurisdição e política organizacional. Não cabe ao analista presumir obrigações legais a partir da cronologia.

Toda alteração na linha do tempo deve ser rastreável.

## Erros comuns e como corrigi-los

Um erro recorrente é ordenar por ingestão e chamar o resultado de cronologia do ataque.

Também é comum tratar timestamp preciso como relógio preciso.

Outro problema é presumir que a ausência de log prova ausência de ação.

Atribuir causalidade por proximidade é igualmente perigoso.

Rótulos vagos como “comprometimento”, “exfiltração” ou “movimento lateral” podem aparecer antes de haver suporte suficiente.

Por fim, não misture relógio do incidente com relógio da equipe.

## Critérios para avaliar a qualidade

Uma linha do tempo é útil quando outra pessoa consegue verificar cada afirmação.

A cobertura deve ser julgada em relação à pergunta e ao escopo, não por volume de eventos.

A precisão temporal deve ser compatível com o nível de conclusão.

A consistência exige que o mesmo evento mantenha significado e identificador entre rascunhos e relatórios.

A utilidade operacional pode ser avaliada perguntando se a cronologia ajudou a escolher uma ação, preservar uma fonte ou esclarecer impacto.

## Exercício de mesa ou laboratório autorizado

Um exercício seguro pode usar registros sintéticos ou dados de laboratório isolado, sem conectar sistemas de terceiros nem simular exploração real.

Prepare um pacote de eventos fictícios com fontes diversas: autenticação, telemetria de endpoint, aplicação, DNS, proxy e registro de resposta. Inclua timestamps em UTC e horário local, um atraso de ingestão, um relógio com desvio conhecido, dois eventos com a mesma hora arredondada e um intervalo sem telemetria.

Na primeira rodada, cada participante registra o que a fonte afirma literalmente, sem atribuir causa. Na segunda, o grupo normaliza horários, mantém os valores brutos e descreve incertezas.

O facilitador pode introduzir uma nova evidência, por exemplo, uma confirmação de que o atraso do coletor foi maior do que o inicialmente estimado.

Avalie se os participantes preservaram o timestamp original, distinguiram evento de ingestão, identificaram fusos ambíguos, marcaram lacunas, evitaram causalidade por proximidade e mantiveram fontes rastreáveis.

Em laboratório autorizado, uma variação pode usar máquinas virtuais próprias e tráfego benigno controlado, como login de teste, criação de arquivo de demonstração e transferência para um serviço interno de laboratório. Documente previamente as ações esperadas e seus horários, sem usar credenciais reais ou dados sensíveis.

## Roteiro de implementação na organização

Comece escolhendo um conjunto limitado de fontes prioritárias para um tipo de incidente frequente ou de alto impacto. Mapeie quem administra cada fonte, que eventos ela oferece, como define timestamp, qual fuso usa, quanto atrasa, por quanto tempo retém e como é possível preservar uma exportação.

Defina um esquema de evento simples e estável.

Escreva convenções curtas para verbos e níveis de afirmação.

Integre a coleta ao procedimento de resposta.

Crie uma revisão temporal em etapas: verificação de fuso; comparação com sincronização conhecida; identificação de atrasos; análise de eventos fora de ordem; inspeção de lacunas; e revisão por pares de relações causais.

Faça um piloto com caso encerrado e dados adequadamente protegidos ou com registros sintéticos.

Depois do piloto, estabeleça manutenção: revisão periódica das fontes, atualização dos procedimentos, exercícios de mesa, controle de acesso e descarte conforme política.

## Perguntas frequentes

### Qual fuso horário devo usar?

Use uma referência comum, frequentemente UTC, para ordenar e comparar sistemas, mas mantenha sempre o valor bruto e a zona original. UTC facilita integração; não corrige relógios incorretos nem resolve horários locais ambíguos. Registre a regra de conversão e a incerteza para que a interpretação seja reproduzível.

### O horário de ingestão pode substituir o horário do evento?

Não, quando a pergunta é quando a atividade ocorreu.

### Dois eventos no mesmo segundo provam que estão relacionados?

Não. Podem ser independentes, arredondados ou afetados por relógios diferentes. A proximidade orienta a investigação, mas a relação depende de IDs, contexto, artefatos e hipóteses alternativas. Se a precisão for insuficiente, a ordem entre eles pode ser indeterminada.

### Como tratar timestamps sem fuso?

Preserve o valor literal e procure configuração da fonte, documentação, registros de sincronização e eventos de referência. Se não for possível identificar a zona com segurança, não faça uma conversão silenciosa. Registre as interpretações possíveis e como a incerteza limita a sequência.

### A falta de um registro mostra que a ação não ocorreu?

Só em condições muito específicas, quando a fonte tinha cobertura comprovada, estava saudável, registraria aquela ação, reteve o período e a busca foi feita corretamente. Na maioria das investigações, ausência é inconclusiva até essas condições serem verificadas. Marque o limite de cobertura e procure fontes independentes.

### Devo incluir todas as observações disponíveis?

Inclua o que responde à pergunta, sustenta uma decisão ou delimita uma lacuna. Preserve e referencie os artefatos relevantes conforme o procedimento, mas a cronologia analítica não precisa reproduzir cada linha de telemetria. Registre critérios de inclusão e filtros para que outra pessoa entenda o escopo e possa expandi-lo.

### Como falar de exfiltração com precisão?

Descreva primeiro o observado: conexão de saída, volume registrado, aplicação que respondeu, arquivo acessado ou operação de exportação.

### Quando a linha do tempo está pronta?

Ela pode apoiar uma decisão antes de responder a tudo, desde que mostre fatos, hipóteses, lacunas e riscos.

## Relação com o capítulo de resposta e recuperação

No capítulo 8, dedicado às operações de resposta, contenção e recuperação, a cronologia se conecta a uma necessidade prática: agir sem perder a capacidade de explicar o que aconteceu. A equipe registra o sinal inicial, as hipóteses consideradas, as ações de contenção, os efeitos observados e os critérios para restaurar confiança.

O livro de Hiago Kin Levi, publicado pela Editora Brasport, pode servir como referência introdutória para relacionar esse tema às operações de resposta, contenção e recuperação.

## Conclusão: uma sequência que preserve a dúvida legítima

Uma boa linha do tempo não transforma registros heterogêneos em certeza por meio de alinhamento visual.

A disciplina central é separar proximidade de causalidade e alerta de confirmação.

O resultado talvez não responda de imediato a todas as perguntas, mas deve mostrar o caminho entre dados e decisão. Em resposta a incidentes, reconhecer o limite da evidência é parte da precisão técnica. Uma cronologia honesta ajuda a equipe a conter e recuperar com mais clareza, preservando espaço para revisão quando novos fatos surgirem.

## Preservação, acesso e rastreabilidade dos artefatos

A linha do tempo só é tão confiável quanto a forma como os registros foram obtidos e mantidos. Uma exportação pode ser alterada por filtros, conversões de formato ou seleção de campos; por isso, anote a consulta, o intervalo pedido, os filtros aplicados, a ferramenta utilizada e o momento da extração. Quando uma plataforma não permite preservar o formato nativo, guarde a exportação original, registre a limitação e explique quais transformações foram necessárias para análise. O objetivo é que um revisor saiba distinguir o dado da fonte e a representação produzida pela equipe.

Controle de acesso protege tanto os dados quanto a própria investigação. Conceda acesso à cópia de trabalho apenas a quem precisa, mantenha a fonte original em local aprovado e registre compartilhamentos relevantes. A cronologia pode conter identificadores pessoais, detalhes de atividade e informação comercial sensível; a necessidade de preservar não significa que toda pessoa envolvida no incidente deva ver todos os campos. Aplique minimização e retenção de acordo com as regras internas e com as orientações responsáveis para o caso.

Uma cadeia de custódia operacional deve permitir responder quem coletou um artefato, quando, de qual sistema, como foi transferido e onde ficou armazenado. Registre verificações de integridade quando adotadas e mantenha a associação entre a entrada analítica e o arquivo de origem. Se um registro foi copiado para uma ferramenta de trabalho, conserve referência suficiente para localizar a cópia preservada. Uma planilha editável sem histórico pode ser conveniente, mas não deve ser a única representação de uma evidência importante.

Quando um fornecedor ou equipe externa fornece dados, documente o pedido e o formato recebido, incluindo qualquer diferença entre o período solicitado e o período entregue. Não presuma que um relatório agregado corresponde ao registro bruto. Pergunte o que cada campo significa, como o relógio do serviço é mantido e se os horários representam atividade, processamento ou apresentação. Se a resposta não estiver disponível, marque a semântica como desconhecida e limite as conclusões que dependem dela.

## Comunicação de resultados para públicos diferentes

Uma apresentação técnica deve permitir que analistas revisem a sequência sem depender de frases de efeito. Inclua identificadores de evento, timestamps bruto e normalizado, fonte, interpretação, precisão e link interno ou referência ao artefato preservado, conforme as ferramentas aprovadas. Indique lacunas e contradições junto aos períodos a que pertencem. Uma legenda deve explicar como o documento diferencia observação, alerta, inferência e hipótese; se o leitor precisar adivinhar a convenção, o documento falha em comunicar.

Para liderança, resuma os fatos que influenciam a decisão, o impacto observado, as medidas já tomadas e as incertezas capazes de alterar o próximo passo. Não é necessário transferir cada campo técnico para um resumo executivo, mas as afirmações devem continuar rastreáveis à versão analítica. Se a equipe não sabe se houve leitura de dados, diga que a investigação identificou acesso ou tentativa conforme o registro, e especifique o que ainda falta para distinguir as possibilidades. Essa precisão permite decisões proporcionais sem transmitir certeza inexistente.

Em atualizações durante um incidente, indique a hora da atualização e o intervalo analisado. Separe o que mudou desde a versão anterior do que permanece igual. Quando uma hipótese for descartada, explique qual evidência a enfraqueceu e se a decisão tomada enquanto ela estava em aberto continua válida. Isso evita que uma frase antiga circule como conclusão atual e permite que áreas distintas trabalhem com a mesma compreensão do estado da análise.

A comunicação também deve registrar decisões e seus fundamentos. Uma linha como “às 17:10, a equipe suspendeu a sessão por risco de continuidade de acesso; a operação foi aprovada pelo responsável de plantão” ajuda a reconstruir resposta, mesmo quando a hipótese técnica não se confirma depois. Registre o resultado observado e efeitos colaterais, como interrupção de tarefa legítima ou perda de telemetria. O registro não serve para atribuir culpa retrospectiva, mas para avaliar se o processo e a informação disponível sustentaram a escolha.

## Da reconstrução à melhoria contínua

Depois do encerramento, compare a sequência reconstruída com a forma como os controles deveriam ter observado o evento. Pergunte se os relógios estavam sincronizados, se os campos essenciais foram coletados, se a retenção cobriu o intervalo e se a equipe conseguiu obter os registros sem atrasar uma contenção necessária. Essas perguntas tratam de capacidade e processo, não apenas de desempenho individual. Uma fonte que não registrou um campo essencial pode exigir ajuste de configuração ou revisão do desenho de monitoramento.

Transforme lacunas em ações específicas, com responsável, prazo e critério de conclusão definido pela organização. Uma ação útil pode ser documentar a semântica de um campo, habilitar retenção apropriada, corrigir configuração de fuso ou ensaiar a exportação de uma fonte. Evite recomendações vagas como “melhorar visibilidade” sem identificar a pergunta que a nova telemetria deve responder e a forma de validar que ela está disponível.

Nem toda investigação precisa resultar em mais coleta. Se a linha do tempo mostrou volume excessivo sem valor analítico, refine filtros e procedimentos para preservar o que responde às perguntas prioritárias. Se houve coleta ampla de dados pessoais sem necessidade demonstrada, ajuste escopo e acesso. A melhoria deve equilibrar utilidade investigativa, custo operacional, privacidade e capacidade de revisão, conforme as responsabilidades e políticas aplicáveis.

Registre as lições de modo que sirvam a casos futuros sem expor detalhes desnecessários do incidente. Procedimentos e exemplos sintéticos podem ensinar a interpretar horários, mas devem ser marcados como exemplos e não confundidos com dados reais. Atualize o material quando sistemas ou fornecedores mudarem. A prática de revisão periódica mantém a cronologia conectada às ferramentas que a equipe realmente usa, em vez de depender de um modelo que ficou desatualizado.
