# Incidente em ambiente Kubernetes

## A pergunta que orienta a busca

Quando surge um sinal de comprometimento em Kubernetes, como conter o risco sem destruir as evidências necessárias para entender o ocorrido e recuperar o serviço com confiança? A decisão é difícil porque pods são substituídos, nós drenados e controladores reconciliam o estado continuamente.

## O que significa um incidente em Kubernetes

O objeto de investigação costuma atravessar vários limites. Um pod pode obter uma identidade por meio de sua service account. Essa identidade pode ter permissões concedidas por RBAC. Um workload pode consumir um segredo montado como arquivo ou entregue por outro mecanismo. A imagem pode ter sido publicada por uma pipeline ou buscada em um registry. O nó executa o contêiner e mantém estados locais. O plano de controle recebe e registra operações sobre objetos do cluster, conforme a configuração e a disponibilidade de auditoria.

Por isso, “o contêiner está comprometido” é uma descrição insuficiente. Ela não esclarece se houve acesso a uma credencial, se a identidade tinha permissões excessivas, se outros workloads usam a mesma identidade, se o registro contém a imagem original ou se o plano de controle foi afetado. A equipe deve descrever a hipótese com escopo e evidência: por exemplo, “há indícios de execução não prevista no pod X do namespace Y; ainda não há confirmação de uso da service account fora desse workload”.

## O contexto que torna a resposta diferente

### Estado desejado e estado observado

Controladores Kubernetes trabalham para aproximar o estado observado do estado declarado. Se alguém exclui um pod administrado por um Deployment, o controlador pode criar outro. Se uma equipe altera um manifesto durante a contenção, uma reconciliação pode desfazer a alteração ou reaplicar um estado que não foi revisto. Assim, uma ação local sobre um objeto pode ter efeitos em cadeia e não representar uma contenção duradoura.

### Evidências com prazos diferentes

Alguns dados são relativamente persistentes, como logs de auditoria enviados a um destino externo, eventos de pipeline ou registros de publicação de imagens. Outros podem desaparecer rapidamente: saída de contêiner sem agregação, arquivos temporários no sistema de arquivos efêmero, estado em memória, eventos sujeitos à retenção curta e dados locais de um nó que será substituído.

### Isolamento não é sinônimo de recuperação

Bloquear tráfego, suspender uma credencial ou remover uma permissão pode reduzir risco. Nenhuma dessas ações demonstra, por si só, que o ambiente está limpo. Da mesma forma, reconstruir um Deployment a partir de um manifesto conhecido não prova que a imagem referenciada é confiável, que o segredo foi rotacionado ou que a identidade não foi usada em outro lugar.

## Decisões práticas nas primeiras horas

### Delimitar o alcance antes de alterar recursos

A triagem inicial deve registrar o alerta original, horário e fuso, cluster, conta ou projeto de nuvem, região, namespace, workload, pod, nó e identidade relacionados, quando disponíveis. Deve preservar os identificadores completos e os dados que distingam uma instância de outra. Nomes podem ser reutilizados; horários sem fuso podem induzir uma linha do tempo errada.

Em paralelo, a equipe deve definir o que está confirmado. Um alerta de processo inesperado confirma que uma ferramenta observou uma regra ou comportamento; não confirma automaticamente autoria, intenção, acesso a dados ou propagação. Um segredo encontrado em uma configuração suspeita indica exposição potencial; não comprova que foi copiado. Um objeto criado por uma identidade específica pode associar a operação àquela identidade, mas não necessariamente a uma pessoa: credenciais podem ser compartilhadas, automatizadas ou comprometidas.

### Escolher contenção proporcional

A contenção deve responder a uma hipótese concreta. Se a suspeita recai sobre uma identidade, pode ser apropriado restringir ou desabilitar essa identidade após identificar workloads dependentes e caminhos de recuperação. Se a hipótese envolve tráfego de saída, uma política de rede ou controle no perímetro pode reduzir a comunicação enquanto a coleta continua. Se uma imagem foi marcada como suspeita, suspender novas implantações daquela referência pode evitar novas instâncias. A escolha depende dos controles existentes e do impacto operacional.

### Preservar antes de reiniciar ou recriar

Reiniciar pods sem preservar vestígios pode apagar a única evidência de execução disponível. Antes de reiniciar, excluir, drenar ou substituir recursos, avalie se é possível obter logs de aplicação e de contêiner, estado e metadados do objeto, eventos relacionados, identidade efetiva, referência e digest da imagem, nó de execução, volumes associados e registros externos correlatos. Preserve também a declaração do controlador e o histórico de mudanças disponível.

## Fontes de evidência e o que cada uma pode demonstrar

### Auditoria do plano de controle

Os logs de auditoria, quando habilitados e retidos, podem registrar chamadas à API, identidade autenticada, recurso, verbo, resultado e contexto de origem, segundo a configuração adotada. Eles ajudam a responder quem solicitou uma operação, qual objeto foi atingido e quando o servidor recebeu a requisição. Seu detalhe e sua disponibilidade variam entre distribuições gerenciadas e clusters autogeridos.

### Logs de workloads e eventos

Logs da aplicação e da saída padrão podem revelar erros, acessos, alterações de comportamento ou mensagens produzidas pelo processo. Eventos do Kubernetes podem contextualizar agendamento, falhas de imagem, montagem de volumes e ações do controlador. Cada fonte tem limitações: logs podem ser incompletos, campos podem ser controlados pela aplicação e eventos podem ter retenção curta ou não conter a causa raiz.

### Nós e runtime

O nó pode conter registros do runtime, do agente de segurança, do sistema operacional, do kubelet e da plataforma de nuvem. Quando há suspeita de comprometimento do host, o escopo deixa de ser apenas o pod. A análise pode precisar incluir outras cargas no mesmo nó, credenciais ou sockets acessíveis e a confiança na própria coleta local.

### Identidade, segredos e permissões

A investigação deve mapear a service account usada por cada workload e as permissões concedidas por RoleBindings e ClusterRoleBindings. Verifique permissões diretas e indiretas, herança por grupos, automações que alteram RBAC e a possibilidade de tokens montados ou obtidos por outros mecanismos. Uma permissão ampla é uma condição de risco; não prova que foi usada durante o incidente.

### Registro, pipeline e cadeia de fornecimento

O registry e a pipeline podem ajudar a reconstruir como uma imagem foi produzida, aprovada e distribuída. Registros úteis incluem digest, autor ou identidade de publicação, origem do código, resultado de revisão, dependências, assinatura quando adotada, políticas de promoção e eventos de acesso. O objetivo é responder se o artefato executado corresponde a uma construção conhecida e se a referência foi alterada.

### Rede, aplicação e provedor

Telemetria de rede pode mostrar conexões entre workloads, destinos externos, DNS e fluxos observados por controles de nuvem. Logs de aplicação e de autenticação podem indicar uso de uma credencial fora do padrão esperado. O provedor pode registrar alterações em grupos de segurança, instâncias, balanceadores ou identidades associadas ao cluster.

## Papéis e coordenação durante a resposta

Uma resposta eficaz distribui responsabilidades sem diluir a decisão. O responsável pelo incidente define prioridade e autoriza mudanças dentro do processo vigente. A equipe de plataforma conhece controladores, política de configuração, ciclo de vida dos nós e dependências operacionais. Segurança conduz hipóteses, preservação e análise de evidências. O dono do serviço esclarece criticidade, comportamento esperado e impactos de interrupção. Operações de nuvem e identidade correlacionam eventos fora do cluster.

## Exemplos defensivos seguros

### Revisão de uma identidade associada ao workload

Em um exercício autorizado, a equipe recebe um alerta de que um pod fez uma chamada administrativa fora do padrão. O primeiro passo é localizar a identidade efetiva do pod e reunir os vínculos de RBAC que se aplicam a ela. Em seguida, compara-se a permissão observada com a função declarada do serviço e com outros workloads que usam a mesma service account.

### Conferência de uma imagem suspeita

Em outro cenário hipotético, um alerta aponta que um pod executa uma imagem com etiqueta familiar, mas o inventário mostra referência diferente. A equipe registra digest e origem disponíveis, verifica o histórico do Deployment e consulta os eventos de publicação e promoção. Não presume que o nome legível da etiqueta prove a origem do binário.

### Segredo possivelmente exposto

Num cenário hipotético, um processo em um pod acessou uma API externa com uma credencial de serviço em horário atípico. A equipe correlaciona logs de autenticação do serviço externo, configuração do workload, referências a segredos e registros de rede. O acesso demonstra uso aceito pelo sistema; ainda é necessário estabelecer origem, finalidade e possível acesso a dados.

## Cenários contrastantes e decisões

### Um pod descartável em serviço não crítico

Considere, hipoteticamente, um workload sem estado persistente, atendendo uma função interna de baixa criticidade, com logs enviados a armazenamento externo e imagem reprodutível. Se a atividade suspeita está limitada ao contêiner e não há indício de exposição de identidade compartilhada, a equipe pode preservar metadados e logs, bloquear a referência da imagem, isolar a instância e recriar o workload a partir de uma base verificada.

### Um StatefulSet com dados e dependências críticas

Agora considere, hipoteticamente, um banco de dados executado em StatefulSet, com volume persistente e dependências de produção. Excluir o pod pode provocar failover, reanexação do volume e mudanças que complicam a análise. Um isolamento mal planejado pode interromper replicação ou acesso de clientes. A equipe deve envolver o responsável pelo serviço, preservar informações do controlador e do armazenamento e avaliar o estado de replicação antes de uma mudança.

### Suspeita de comprometimento do nó

Num terceiro cenário hipotético, sinais de runtime aparecem em workloads distintos no mesmo nó. Isso aumenta a relevância de uma hipótese de host e reduz a confiança em tratar cada pod como unidade isolada. A equipe deve avaliar os outros workloads, credenciais acessíveis, registros do nó e telemetria externa; pode ser necessário limitar o nó e coordenar substituição após preservação.

### Possível alteração do plano de controle

Se auditoria mostra uma mudança inesperada em ClusterRoleBinding ou configuração crítica, a equipe precisa verificar a identidade autenticada, o contexto da chamada, a origem e a cadeia de automação. Um controlador legítimo pode ter realizado a alteração, mas uma operação aparentemente válida também pode decorrer de credencial comprometida. A investigação inclui a pipeline, a identidade técnica e o histórico declarativo.

## Erros comuns que enfraquecem a resposta

### Reiniciar tudo antes da coleta

Reinicializações podem resolver um sintoma e remover a camada gravável, a memória e a sequência de processo do pod. Em clusters com substituição automática, a nova instância pode começar a produzir sinais diferentes antes que o estado anterior seja documentado. A mitigação é definir previamente uma lista mínima de dados a preservar e um responsável por decidir quando a urgência justifica agir sem a coleta completa.

### Tratar um manifesto como retrato completo

Um manifesto versionado representa uma declaração, mas pode não capturar alterações manuais, valores resolvidos por admission controllers, configuração externa, identidade efetiva ou estado do volume. A equipe deve comparar declaração, objeto observado, eventos e histórico de implantação. Recuperar apenas “do Git” é insuficiente se a referência de imagem, os segredos ou as permissões não foram verificados.

### Revogar uma credencial sem mapear consumidores

Uma revogação ampla pode interromper serviços e sistemas de recuperação, enquanto uma rotação incompleta deixa o valor antigo válido. Antes da mudança, mapeie consumidores, escopo, emissor, cache e mecanismo de invalidação. Quando a urgência impedir esse levantamento, comunique o impacto esperado e valide a revogação no serviço que aceita a credencial.

### Confundir ausência de alerta com ausência de atividade

Controles de detecção cobrem fontes e comportamentos específicos. Se auditoria não estava habilitada para uma categoria ou a telemetria de rede não cobre determinado segmento, o silêncio não responde à pergunta. Registre as lacunas e ajuste o grau de confiança da conclusão. “Não observado” e “não ocorreu” são afirmações diferentes.

### Aplicar uma correção local que a automação desfaz

Alterações manuais podem ser revertidas por GitOps, operadores ou pipelines. Isso pode criar um ciclo de mudanças ou restaurar uma permissão insegura. Identifique a fonte de verdade e ajuste-a de forma controlada, preservando a versão anterior e observando reconciliações. Em emergência, um bloqueio temporário pode ser necessário, mas precisa de proprietário e condição de remoção.

### Limpar evidências sem custódia

Capturas compartilhadas por canais informais podem expor segredos e perder contexto. Uma coleta sem origem, horário, responsável ou registro de integridade pode ser difícil de validar. Use o destino aprovado, limite acesso e documente o método. Se uma fonte não puder ser preservada, registre por que e o que foi observado antes da perda.

### Declarar recuperação cedo demais

Pods em estado Ready indicam uma condição de prontidão definida para o workload, não uma garantia geral de integridade. Recuperação exige verificar imagem, configuração, identidades, dados, dependências e comportamento após a restauração. A equipe deve observar o serviço por um período adequado à natureza do risco e manter critérios claros para reabrir a investigação se surgirem novos sinais.

## Critérios para avaliar qualidade e confiança

Uma resposta madura pode ser avaliada pela clareza do escopo: a equipe consegue dizer quais clusters, namespaces, identidades, imagens, nós e dados foram considerados, e quais ficaram fora? O escopo pode mudar com novas evidências, mas cada mudança deve ter motivo registrado.

A preservação é avaliável por perguntas concretas: dados voláteis foram identificados antes da reinicialização? Os artefatos foram armazenados sob acesso controlado? A relação entre logs, recursos e responsáveis foi mantida? Quais fontes não existiam ou já haviam expirado? Uma resposta honesta a essas perguntas oferece mais valor que uma alegação genérica de “forense completa”.

A contenção deve demonstrar redução de um caminho de risco específico. Se uma identidade foi revogada, a equipe verificou que o sistema externo deixou de aceitá-la? Se o tráfego foi restringido, os fluxos necessários foram preservados e a política cobre os workloads relevantes? Se novas implantações foram bloqueadas, a automação e os caches não podem reintroduzir o artefato? A verificação deve se apoiar em observação independente sempre que possível.

A recuperação precisa ter critérios acordados: artefato de origem conhecida, configuração revisada, segredo substituído quando necessário, permissões compatíveis com a função, dados validados e monitoramento ativo. A equipe também deve avaliar o que mudou no processo para reduzir a recorrência. Critérios não são promessas de que outro incidente não ocorrerá; são evidências de que as condições conhecidas foram tratadas.

## Exercício de mesa ou laboratório autorizado

Um exercício de mesa pode começar com um cenário hipotético: durante uma janela de operação, um serviço de baixa criticidade apresenta conexão de saída incomum; o pod usa uma service account compartilhada e sua imagem está identificada por etiqueta mutável. A equipe recebe os fatos em etapas, sem uma causa definida. Primeiro, os participantes indicam o que está confirmado e quais hipóteses precisam ser testadas.

Na etapa seguinte, o facilitador informa que os logs do contêiner têm retenção curta, a auditoria do plano de controle está disponível e há dois workloads que usam a mesma identidade. O grupo decide qual evidência preservar, quem aprova uma restrição e como evitar que o controlador recrie o estado afetado. Deve também explicar como manter o serviço necessário e quais efeitos colaterais são aceitáveis.

Depois, uma nova informação hipotética revela que a imagem executada tem digest diferente do aprovado no inventário. A equipe define como suspender novas implantações, verificar a pipeline e determinar se outros namespaces usam o mesmo artefato. O exercício deve forçar uma distinção entre suspeita de imagem alterada e prova de execução de código malicioso. O facilitador pode perguntar qual evidência mudaria a decisão e qual fonte é independente da primeira.

## Roteiro de implementação antes do próximo incidente

### Preparar inventário e propriedade

Mantenha uma relação atualizada de clusters, ambientes, equipes responsáveis, criticidade de workloads, controladores, registries, pipelines, fontes declarativas e dependências de identidade. Inclua contatos de escalonamento e decisões que exigem aprovação. Inventário não precisa reproduzir cada detalhe técnico; precisa permitir localizar rapidamente quem conhece o serviço e onde obter os dados relevantes.

### Garantir evidências acessíveis

Defina quais registros são necessários para reconstruir chamadas de API, execução de workloads, alterações de identidade, publicação de imagens e atividade de infraestrutura. Confirme habilitação, retenção, sincronização de horário, acesso durante uma crise e responsável pela exportação. Uma política que existe no papel, mas não pode ser consultada durante o incidente, não atende à resposta.

### Preparar decisões de contenção

Crie procedimentos curtos para cenários como identidade suspeita, imagem questionada, exposição de segredo, tráfego inesperado e possível comprometimento de nó. Cada procedimento deve listar sinais que acionam a revisão, dados mínimos a preservar, opções de contenção, dependências a verificar e papéis de aprovação. Evite transformar a lista em receita cega: o responsável deve adaptar a ação ao impacto e à evidência.

### Definir recuperação e aprendizagem

Mantenha uma forma revisada de reconstruir workloads a partir de imagens e configurações confiáveis, incluindo volumes e dependências quando aplicável. Defina como validar integridade dos dados e como observar sinais de retorno. Documente critérios de encerramento e situações que reabrem a investigação, como reaparecimento da identidade, divergência de digest ou nova operação administrativa não explicada.

## Perguntas frequentes

### Devo excluir o pod assim que houver suspeita?

Não há uma regra única. Primeiro avalie urgência, risco de continuidade, disponibilidade de logs e estado volátil. Se a atividade estiver em curso e o dano potencial for alto, conter rapidamente pode ser necessário. Preserve o que for viável, registre a decisão e documente quais evidências a exclusão pode ter removido. Se não houver urgência, colete os dados relevantes e entenda o controlador antes de substituir a instância.

### Um alerta de runtime comprova invasão?

Não. Ele indica que um sensor observou um comportamento compatível com uma regra ou política. Verifique processo, contexto, imagem, usuário efetivo, chamadas à API, atividade da aplicação e eventos próximos. Uma ferramenta administrativa legítima ou comportamento esperado pode explicar o alerta; uma explicação plausível também precisa ser corroborada.

### Uma imagem conhecida por etiqueta é suficiente para recuperar?

Não necessariamente. Etiquetas podem ser alteradas ou apontar para conteúdos diferentes ao longo do tempo. Registre e valide o digest do artefato, sua origem e o processo de publicação. Confirme que a versão usada na recuperação corresponde ao artefato aprovado e que a configuração e as dependências também foram revisadas.

### Quando devo rotacionar um segredo?

Quando houver evidência de exposição ou quando o risco e a possibilidade de acesso justificarem a precaução, segundo a política do ambiente. Antes, identifique consumidores, validade, mecanismo de revogação e efeitos de cache. Em risco ativo, pode ser necessário revogar imediatamente; nesse caso, coordene a indisponibilidade e confirme no sistema emissor que o valor anterior foi invalidado.

### O que fazer se a auditoria do plano de controle não estava habilitada?

Trate isso como uma lacuna, não como prova de que nenhuma operação ocorreu. Preserve as fontes restantes, como logs de aplicação, eventos de nuvem, pipeline, identidade, rede e runtime. Registre quais conclusões não podem ser sustentadas por falta de dados. Depois do incidente, avalie a habilitação e a retenção necessárias para as perguntas que a organização precisa responder.

### Drenar o nó é uma boa contenção?

Pode ajudar a retirar cargas de um nó, mas também pode encerrar processos, perder estado local e redistribuir workloads. Se houver suspeita de host, examine o que precisa ser preservado e quais outras cargas seriam afetadas. A decisão deve considerar arquitetura, criticidade e capacidade de análise; não deve ser automática apenas porque existe um alerta no nó.

### Como saber se a recuperação foi suficiente?

Verifique o artefato, a configuração, as identidades, os segredos relevantes, os dados e as dependências. Confirme que os sinais que motivaram a resposta cessaram e que os controles independentes observam o comportamento esperado. Declare as limitações remanescentes e mantenha monitoramento compatível com o risco. Prontidão do pod, isoladamente, não responde a essas perguntas.

### Um snapshot garante que os dados estão limpos?

## Leitura relacionada ao capítulo 8

O capítulo 8 da versão original, dedicado a operações de resposta, contenção e recuperação, oferece o contexto editorial para aprofundar a sequência de decisões discutida aqui: preservar o que pode desaparecer, limitar o impacto, erradicar a causa conhecida e recuperar a partir de bases confiáveis. O livro de Hiago Kin Levi, publicado pela Editora Brasport, pode apoiar essa reflexão ao apresentar o tema no contexto mais amplo de resposta a incidentes.

A leitura deve ser combinada com a documentação técnica atualizada da distribuição Kubernetes e dos serviços utilizados, com exercícios autorizados e com o julgamento da equipe que conhece o ambiente. Uma obra não substitui esses recursos nem determina a ação correta para um cluster específico. Cabe à organização adaptar procedimentos à sua arquitetura, às obrigações aplicáveis e às evidências disponíveis.
