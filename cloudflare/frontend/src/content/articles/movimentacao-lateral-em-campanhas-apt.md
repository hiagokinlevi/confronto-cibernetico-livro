# Movimentação lateral em campanhas APT

## Pergunta central: como reconhecer quando um acesso legítimo passa a compor uma campanha?

Uma conta válida entra em um servidor de arquivos às 2h; pouco depois, a mesma identidade autentica em uma estação de trabalho que nunca acessou; na manhã seguinte, uma conta de serviço consulta um conjunto incomum de diretórios. Cada evento, isolado, pode ter explicação operacional. Em conjunto, a sequência pode indicar que alguém está usando o ambiente para avançar até um objetivo mais valioso. A pergunta de investigação não é apenas “houve uma conexão entre máquinas?”, mas “que caminho de identidades, sistemas e permissões explica a sequência, e que evidências sustentam cada trecho desse caminho?”.

Essa distinção importa em campanhas de ameaça persistente avançada, ou APT. A movimentação lateral descreve um meio de ampliar presença dentro do ambiente após obter algum ponto de apoio. Ela não define, por si só, a motivação do intruso nem prova que houve exfiltração. Pode anteceder espionagem, coleta, preparação para impacto ou simplesmente a exploração de oportunidades encontradas. O defensor precisa descobrir o alcance provável sem transformar toda atividade administrativa em incidente confirmado.

A resposta depende de reconstruir relações no tempo. Uma máquina pode receber conexões de várias identidades; uma identidade pode tocar diversos ativos; sistemas podem compartilhar credenciais, funções ou dependências. O grafo resultante ajuda a localizar saltos que merecem exame, mas não substitui a análise dos registros de origem. A cada ligação convém perguntar: qual sensor observou o evento, que relógio registrou o horário, qual identidade foi usada, que ação ocorreu e que explicações legítimas permanecem plausíveis?


## O que significa movimentação lateral

Movimentação lateral é a atividade pela qual um adversário, já presente em uma parte do ambiente, tenta acessar outros sistemas ou contextos de identidade para ampliar suas opções. O acesso pode ocorrer por protocolos e mecanismos usados no trabalho normal: administração remota, compartilhamento de arquivos, execução centralizada, ferramentas de suporte ou autenticação federada. O fato de uma ferramenta ser legítima não torna legítimo o contexto em que ela foi usada.

O termo descreve uma relação de progressão, não uma técnica única. Um evento de logon remoto prova que houve uma autenticação registrada segundo os campos daquele produto. Não prova automaticamente quem operou a sessão, qual intenção tinha, nem que o sistema foi comprometido. Para sustentar a hipótese de movimentação, é necessário conectar eventos: uma origem, uma identidade, um destino, uma ação posterior e uma relação temporal coerente com o restante da investigação.




## Por que a resposta tradicional pode perder o encadeamento

Controles tradicionais costumam produzir sinais por ativo: um antivírus alerta em uma estação, um filtro bloqueia uma conexão, uma regra detecta uma autenticação incomum. Esse recorte é útil para conter uma ocorrência pontual, mas pode deixar invisível a campanha distribuída. Cada alerta parece pequeno; a relação entre eles é que revela a progressão. Se os eventos não compartilham identidade, tempo e contexto de ativo, a equipe pode tratar sintomas independentes e não perceber que um acesso inicial abriu caminho para outros sistemas.

Também há uma assimetria entre o adversário e a defesa. Uma campanha pode escolher contas e ferramentas já aceitas pelo ambiente, enquanto a detecção foi construída para procurar arquivos ou processos reconhecidamente maliciosos. A atividade pode se misturar à operação legítima. Regras baseadas apenas em nomes de ferramentas tendem a gerar falsos positivos quando a ferramenta é comum e falsos negativos quando a atividade muda de forma. O contexto de uso, portanto, ganha peso: quem iniciou, de onde, em qual janela, com que privilégio e em direção a qual serviço.


Outra limitação está na resposta concentrada em um único host. Reinstalar ou isolar a máquina alertada pode reduzir risco imediato, mas não resolve a exposição de uma conta que também autenticou em outros sistemas. Tampouco determina se uma sessão persistente, tarefa administrativa ou integração ainda dá acesso ao mesmo conjunto. A contenção precisa considerar caminhos de identidade e dependências, avaliando o impacto de interromper credenciais e serviços antes da ação.


## Como construir um grafo investigativo útil

O grafo deve começar com entidades que possam ser reconhecidas e relacionadas: identidades humanas, contas de serviço, sessões quando disponíveis, endpoints, servidores, serviços, grupos de privilégio e segmentos de ambiente. As arestas representam eventos observados ou relações de configuração. Uma ligação de “autenticou em” não equivale a uma ligação de “administrou”; “pertence ao mesmo grupo” não equivale a “foi usado na campanha”. Separar tipos de aresta evita que o desenho sugira mais do que a evidência permite.

Cada evento ligado ao grafo deve carregar tempo, fonte, identificador original, método de observação e grau de confiança. O horário precisa incluir fuso ou referência temporal normalizada, sem descartar o horário original. A fonte pode ser um controlador de identidade, um agente de endpoint, um serviço de diretório, uma plataforma de acesso remoto ou um registro de aplicação. Se um campo estiver ausente, marque-o como ausente. Não preencha lacunas com valores presumidos apenas para facilitar a visualização.

Uma forma prática é manter duas camadas. A primeira contém os fatos observados: “a conta A teve autenticação registrada no host B às 01h12”; “o endpoint C abriu uma sessão de administração às 01h19”; “a conta D foi usada por um serviço no host E”. A segunda registra interpretações: “A pode ter sido reutilizada para alcançar B”; “a sessão pode estar relacionada à atividade de C”. As hipóteses devem apontar para os fatos que as motivaram e para as observações que poderiam refutá-las. Isso torna a revisão por outra equipe possível.

A busca por saltos temporais deve levar em conta a precisão do relógio e o padrão normal de cada fluxo. Um intervalo curto entre um novo logon e uma ação administrativa pode ser relevante, mas também pode refletir automação legítima. Um intervalo longo não invalida uma relação; pode haver espera, sessão persistente ou execução agendada. Em vez de impor um único intervalo universal, comece com janelas de investigação explícitas, examine sequências anteriores e posteriores e registre por que aquela janela foi escolhida.



## Quais fontes de evidência ajudam a confirmar o percurso

Os registros de autenticação ajudam a responder qual identidade foi aceita, em que destino e por qual mecanismo, conforme os campos disponíveis. Eles precisam ser relacionados aos eventos do endpoint, que podem mostrar criação de sessão, processo associado, alterações de configuração ou uso de ferramentas administrativas. Nenhuma dessas fontes, isoladamente, conta necessariamente a história completa. A correlação aumenta a qualidade quando os identificadores e horários podem ser reconciliados.

Registros de diretório e de gestão de identidade contextualizam grupos, alterações de privilégio, criação ou desativação de contas e políticas de acesso. Eles mostram o estado observado pela plataforma, mas uma alteração registrada não indica automaticamente intenção maliciosa. Compare a mudança com solicitações aprovadas, atividade de administração e responsáveis. Uma exceção de política pode ser urgente sem ser prova de comprometimento; a classificação deve refletir essa diferença.

Telemetria de rede pode indicar comunicação entre origem e destino, resolução de nomes ou padrões de conexão. Ela ajuda a preencher caminhos quando os registros de host estão incompletos, mas geralmente não identifica por si só a pessoa ou o processo que iniciou a comunicação. A ausência de fluxo em uma fonte também não prova ausência de atividade: a coleta pode ser seletiva, a conexão pode ter permanecido em sessão existente ou o tráfego pode não cruzar o ponto monitorado.

Registros de aplicações e serviços oferecem contexto sobre consultas, arquivos acessados, operações administrativas e objetos manipulados. Para investigar coleta, compare o que foi acessado com o papel da aplicação e a necessidade do usuário ou serviço. Um volume alto pode ser uma rotina de indexação ou uma exportação legítima; um volume modesto pode envolver um conjunto de grande valor. A relevância depende do conteúdo, do horário, da identidade e da função, sem assumir que volume equivale a impacto.



## Alertas, indícios e provas: calibrar o que se pode afirmar

Um alerta é um mecanismo de priorização. Pode refletir uma regra, uma anomalia ou uma correspondência com um indicador. Ele diz que algo merece avaliação dentro das condições configuradas; não demonstra sozinho que uma campanha está em andamento. A linguagem do relatório deve evitar transformar “sinal compatível” em “comprometimento confirmado”. Essa precisão protege a qualidade da decisão e reduz correções posteriores.

Um indício é uma observação relevante que aumenta ou diminui a plausibilidade de uma hipótese. Um acesso fora do perfil, a sequência entre dois hosts e a presença de uma conta de serviço em um destino novo podem ser indícios. Eles ganham peso quando fontes independentes convergem e quando explicações benignas são examinadas. A independência também importa: dois painéis que consomem o mesmo registro não constituem necessariamente duas confirmações distintas.

Uma prova, no uso operacional, precisa ser entendida em relação à afirmação específica que se quer sustentar. Um registro pode provar que o sistema reportou uma autenticação com certos atributos; não prova automaticamente a identidade física do operador. Uma evidência de acesso a arquivos pode sustentar que uma conta consultou determinados objetos; não prova que os dados deixaram o ambiente. Uma conexão de saída observada pode sustentar comunicação, mas seu conteúdo e propósito podem continuar desconhecidos.



## Como priorizar identidades e sistemas

Priorize primeiro o que pode ampliar o alcance: identidades privilegiadas, contas reutilizadas, sessões administrativas, serviços de gestão e sistemas que alcançam muitos destinos. Em seguida, considere ativos com função crítica, dados sensíveis ou capacidade de servir como ponto de passagem. Essa ordem não substitui a avaliação de impacto; uma estação aparentemente comum pode ser relevante se for a origem de uma sessão privilegiada ou hospedar uma ferramenta de operação compartilhada.



Evidências de coleta merecem atenção própria. Acesso sequencial a repositórios, consultas incomuns, compactação observada, preparação de arquivos ou transferência para outro serviço podem formar uma cadeia relevante, mas cada etapa exige confirmação. Não trate leitura como exfiltração. Se houver indício de coleta, examine quem iniciou, quais dados foram afetados, se houve staging conhecido e quais caminhos de saída estavam disponíveis. Mantenha a descrição proporcional ao que os registros mostram.

## Papéis durante a investigação

A equipe de resposta a incidentes coordena a linha do tempo, mantém o registro de hipóteses e decide prioridades com base no risco. Ela precisa dizer claramente quais perguntas estão em aberto e qual evidência falta. O analista de identidade ajuda a interpretar autenticações, grupos, políticas e sessões. Operações de endpoint e infraestrutura explicam telemetria, administração e dependências técnicas. Nenhum desses grupos deve presumir que o outro possui toda a visibilidade.


Um coordenador de incidente pode manter um quadro de fatos e decisões com quatro campos: observação, interpretação atual, alternativa plausível e próxima verificação. Por exemplo: “a conta de serviço autenticou fora dos servidores habituais”; “pode ter sido reutilizada”; “uma implantação foi agendada”; “comparar origem, horário e registro de execução”. Essa estrutura evita que a hipótese seja copiada como se fosse fato em atualizações de status.


## Cenários hipotéticos contrastantes

### Manutenção agendada em vários servidores

Imagine, hipoteticamente, uma equipe de plataforma que usa uma ferramenta central para atualizar servidores durante uma janela aprovada. Uma conta administrativa autentica em diversos destinos em sequência. O grafo apresenta muitos saltos em poucos minutos e a atividade ocorre fora do horário comercial. Esses atributos podem disparar uma análise, mas não bastam para classificar o evento como campanha.

A validação deve comparar origem da sessão, identidade usada, escopo da mudança, ativos previstos e registros de execução. Se o conjunto corresponde ao plano e os eventos de endpoint são coerentes com a atualização, a hipótese de manutenção ganha sustentação. Uma divergência — como um servidor fora do escopo ou uma origem não reconhecida — abre uma investigação específica. A aprovação da mudança é contexto útil; a confirmação técnica da execução continua necessária.

### Conta de serviço em um destino novo

Em outro cenário hipotético, uma conta usada por uma aplicação passa a autenticar em uma estação que não consta entre suas dependências documentadas. O evento pode resultar de uma migração incompleta, de um agente instalado pelo suporte ou de uso indevido. O simples fato de ser uma conta não humana não torna a atividade invisível nem maliciosa; torna importante localizar o proprietário e a finalidade.

A equipe confirma primeiro se o destino pertence ao fluxo de aplicação, se houve alteração de configuração e se a autenticação corresponde ao método normal. Depois verifica se a conta acessou outros ativos, se recebeu privilégios adicionais e se houve leitura de dados além do serviço esperado. Se a explicação de migração for confirmada, atualiza o inventário e registra o novo perfil. Se permanecer sem explicação e houver relações adicionais, a prioridade sobe e as credenciais relacionadas entram no escopo de avaliação.

### Acesso seguido de sinais de coleta

Considere, hipoteticamente, uma identidade que alcança um servidor de arquivos fora de seu padrão. Na sequência, aparecem consultas a diretórios de projetos e uma transferência para um serviço interno de sincronização. Esses fatos podem indicar coleta e preparação, mas também podem decorrer de uma tarefa legítima de migração. O conjunto é mais significativo do que cada evento, porém a finalidade permanece uma hipótese até que os responsáveis e os registros a esclareçam.


### Uma trilha incompleta por falta de registros

Em cenário hipotético, a autenticação inicial está registrada, mas a telemetria detalhada do endpoint expirou. Um sistema adjacente mostra conexões posteriores e uma conta privilegiada aparece em um servidor crítico. A ausência de eventos intermediários não deve ser preenchida por uma narrativa imaginada. A equipe pode ampliar o escopo com registros de identidade, rede, aplicação e gestão, além de consultar retenções disponíveis.


## Erros comuns que distorcem o alcance

Um erro frequente é tratar uma conexão como prova de comprometimento do destino. Conexões podem ser tentadas, recusadas, intermediadas ou realizadas por uma rotina legítima. Verifique o resultado, a identidade, a ação no host e a sequência. Do mesmo modo, um acesso autorizado não prova que o operador era legítimo: credenciais válidas podem ter sido usadas por uma pessoa ou processo não autorizado.


Também é perigoso tomar a linha de base como regra rígida. Um acesso novo pode ser uma implantação real, enquanto um adversário pode imitar uma rotina frequente. Use a linha de base para formular perguntas e priorizar; combine-a com evidências de sessão, processo, mudança, destino e finalidade. “Normal” significa observado em determinado contexto, não automaticamente seguro.


Por fim, conclusões exageradas comprometem decisões. Afirmar que houve exfiltração quando só há leitura, ou declarar toda a rede comprometida com base em uma autenticação, pode levar a interrupções desnecessárias e reduzir a confiança nos relatórios. O extremo oposto — declarar falso positivo porque existe uma explicação possível — também é falho. A explicação precisa ser verificada; até então, mantenha o caso em avaliação segundo o risco.

## Critérios para avaliar a qualidade da resposta

Uma investigação de qualidade permite a outra pessoa reconstituir a cronologia sem depender de memória oral. Cada evento tem fonte, horário, identidade, ativo e descrição do que o registro realmente informa. Os eventos ausentes são identificados. As relações inferidas estão marcadas como hipóteses, e há uma justificativa para o escopo de busca escolhido.

A equipe consegue explicar por que determinados ativos foram priorizados, como a criticidade foi determinada e quais dependências poderiam ser afetadas por contenção. Também consegue dizer quais identidades foram examinadas, incluindo contas de serviço e credenciais compartilhadas, e quais não puderam ser avaliadas. A lista de evidências de coleta separa acesso, preparação, transferência interna e comunicação externa, em vez de agrupar tudo sob um rótulo único.



## Exercício de mesa em ambiente autorizado

Um exercício pode usar um conjunto fictício de eventos preparado pela própria equipe, sem executar técnicas contra sistemas de produção. O cenário começa com um alerta de autenticação incomum em uma estação. Em seguida, os participantes recebem fragmentos de registros: uma identidade acessa um servidor de arquivos, uma conta de serviço aparece em um destino novo e o inventário indica que um dos ativos suporta uma função crítica. Alguns horários têm pequena diferença entre fontes e um chamado de manutenção está incompleto.

O grupo deve desenhar o grafo, separar eventos observados de relações presumidas e indicar quais fontes consultaria em seguida. Deve explicitar que evidência confirmaria ou enfraqueceria cada hipótese. Uma pessoa representa o dono do serviço e informa que há uma atualização programada, mas não sabe se incluiu o destino incomum. Outra representa identidade e confirma que a conta é compartilhada por um processo de legado. O propósito é testar perguntas e coordenação, não adivinhar um final predeterminado.

Na rodada de decisão, os participantes escolhem se restringem uma conta, isolam um host, preservam a sessão ou aguardam uma verificação adicional. Para cada escolha, registram impacto esperado, risco de demora, dependências e critério de revisão. Depois, o facilitador apresenta uma evidência nova, como um registro de execução compatível ou uma autenticação a partir de origem inesperada. A equipe revisa a hipótese e explica por que a decisão se mantém ou muda.

O encerramento deve produzir artefatos práticos: uma lista de fontes necessárias, perguntas de triagem para contas de serviço, contatos de donos de ativos e lacunas de retenção. Também deve identificar termos ambíguos no processo interno, como “acesso suspeito” ou “comprometido”, e propor definições operacionais. Em laboratório isolado, com autorização explícita e dados sintéticos, o mesmo fluxo pode ser praticado na ferramenta de análise já adotada pela organização. Não é necessário introduzir ações ofensivas para testar a capacidade de correlacionar e decidir.

## Roteiro de implementação

### Primeiro, estabelecer o escopo observável



### Depois, documentar o perfil legítimo

Com donos de serviço e identidade, descreva quais contas podem acessar quais classes de ativos e por qual finalidade. Isso não precisa começar como uma matriz perfeita. Um catálogo curto de contas privilegiadas, serviços críticos e dependências conhecidas já oferece contexto para uma triagem melhor. Registre a data e a fonte da validação; o perfil deve ser revisado quando sistemas e equipes mudarem.


### Em seguida, padronizar a investigação

Crie um roteiro que comece pelo alerta e expanda para identidade, origem, destino, período anterior e posterior, relações de privilégio e sinais de coleta. Para cada etapa, indique a fonte preferencial, alternativa quando ela faltar e campo necessário para correlação. O roteiro deve permitir registrar um resultado negativo, como “nenhuma sessão correspondente encontrada nesta fonte e neste intervalo”, sem transformar isso em prova de ausência global.


### Por fim, fechar o ciclo com melhorias

Após um caso ou exercício, compare o grafo esperado com os dados realmente disponíveis. Identifique eventos que não puderam ser vinculados, horários incompatíveis, contas sem dono e ativos sem criticidade documentada. Priorize correções pelo impacto na capacidade de detectar e limitar o alcance. Exemplos incluem ajustar retenção, reconciliar inventário, registrar autenticações de contas de serviço ou esclarecer a aprovação de acessos administrativos.


## Perguntas frequentes

### Uma autenticação fora do perfil confirma movimentação lateral?

Não. Ela é um indício que deve ser contextualizado com identidade, origem, destino, ação e sequência. A movimentação lateral é uma interpretação da progressão entre sistemas; uma autenticação isolada pode ter explicação legítima ou até ter sido recusada. Confirme o que ocorreu no destino e procure relações adicionais.

### O uso de uma ferramenta administrativa conhecida é benigno?

Não necessariamente. Ferramentas legítimas podem ser usadas em atividades autorizadas ou abusadas. Avalie quem iniciou a sessão, se a origem e o destino são esperados, quais ações foram executadas e se há mudança em relação ao perfil do serviço. O nome do executável não resolve a questão.

### Contas de serviço devem ser removidas da investigação?

Não. Elas podem aparecer em fluxos automáticos e facilitar acesso entre sistemas, mas seu comportamento costuma ser difícil de interpretar sem contexto. Identifique o responsável, a finalidade e as dependências. Se o uso estiver fora do escopo esperado, trate como hipótese relevante e confirme antes de interromper um serviço crítico.

### Até onde ampliar a busca?

Amplie para máquinas e contas que compartilharam credenciais, sessões, grupos, relações de confiança ou infraestrutura, além dos destinos envolvidos na cronologia. O limite deve acompanhar evidências e dependências, não uma distância fixa na rede. Registre por que um ativo entrou ou saiu do escopo e que dados foram consultados.

### A falta de registros significa que não houve acesso?

Não. Significa que a fonte consultada não mostrou o evento dentro de sua cobertura, retenção e filtros. Busque fontes complementares e registre a lacuna. A conclusão deve refletir o grau de visibilidade: alcance desconhecido é diferente de alcance inexistente.

### Quando conter antes de confirmar?

Quando a combinação de risco, criticidade e evidência justificar reduzir a possibilidade de progressão enquanto a investigação continua. A decisão deve considerar efeitos operacionais, alternativas menos disruptivas e critério para reavaliar. Uma contenção preventiva não é uma declaração de culpa nem prova de que a hipótese estava correta.

### Como comunicar o que se sabe?


## Relação com o capítulo sobre resposta tradicional a APTs

No capítulo 4 do manuscrito original, sobre limitações da resposta tradicional diante de APTs, a movimentação lateral permite observar por que uma sequência de alertas locais pode esconder uma campanha. Um processo de resposta que acompanha somente o host inicial corre o risco de perder relações entre credenciais, sessões e sistemas críticos. Construir a cronologia e o grafo amplia a pergunta defensiva: além de remover um artefato, é preciso entender que caminhos de acesso foram usados e quais permanecem disponíveis.

O livro de Hiago Kin Levi, publicado pela Editora Brasport, pode servir como leitura de contexto para essa discussão específica. Ele não substitui documentação técnica atualizada, treinamento prático nem julgamento da equipe diante das evidências e dependências de seu próprio ambiente.
