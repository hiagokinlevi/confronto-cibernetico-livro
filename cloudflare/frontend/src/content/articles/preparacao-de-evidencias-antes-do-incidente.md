# Preparação de evidências antes do incidente

## Qual pergunta deve orientar a preparação?

Se uma atividade suspeita for identificada amanhã, a equipe conseguirá reconstruir, com fontes verificáveis, o que ocorreu, em quais sistemas, por quais identidades e em que ordem? Essa é a pergunta central. Ela desloca a conversa de “temos muitos logs?” para “conseguiremos responder às questões relevantes sem alterar ou perder os registros?”. A preparação de evidências começa pela necessidade de decidir e explicar, não pela coleta indiscriminada de tudo que um equipamento consegue produzir.

Durante um incidente, decisões precisam ser tomadas sob pressão: bloquear uma conta, isolar um endpoint, revogar uma sessão, preservar uma máquina ou restaurar um serviço. A informação disponível costuma ser parcial. Um alerta pode indicar comportamento fora do padrão, mas não prova sozinho que houve comprometimento. Uma sequência de registros pode sustentar uma hipótese, refutá-la ou deixar pontos em aberto. Preparar evidências significa organizar fontes, responsabilidades, relógios, acesso, retenção e procedimentos para que os dados úteis estejam disponíveis quando a equipe precisar avaliar essas possibilidades.

## O que é evidência digital nesse contexto?

Evidência digital é informação registrada em sistemas, serviços ou processos que pode ajudar a esclarecer um evento. Pode incluir eventos de autenticação, criação de processos, alterações de configuração, consultas DNS, fluxos de rede, trilhas de auditoria de nuvem, alertas de segurança, registros de atendimento e metadados de coleta. O termo descreve a utilidade potencial do material; não significa que cada item seja conclusivo, autêntico por si só ou suficiente para atribuir uma ação a uma pessoa.

Um evento de login, por exemplo, pode confirmar que um provedor registrou uma autenticação associada a uma conta e a determinado contexto técnico. Isoladamente, não estabelece quem controlava o dispositivo, se a sessão foi autorizada, nem o que ocorreu depois. Um alerta de endpoint é uma observação produzida por uma regra ou mecanismo de detecção. Pode ser um sinal valioso para orientar a investigação, mas precisa ser comparado com telemetria, configuração, atividade correlata e explicações legítimas possíveis.

## Por que a preparação precisa ocorrer antes?

Muitas fontes têm retenção limitada, são substituídas por novos eventos ou dependem de licenças e configurações específicas. Um serviço pode registrar auditoria, mas mantê-la por poucos dias no plano contratado. Um endpoint pode produzir telemetria que nunca sai do equipamento. Uma conta de nuvem pode concentrar eventos em uma região ou escopo administrativo diferente daquele que a equipe consulta. Descobrir essas condições no meio de uma investigação reduz as opções e consome tempo.

O relógio é uma dependência menos visível. Se o provedor de identidade, o servidor, o endpoint e a plataforma de nuvem registrarem horários com diferenças desconhecidas, uma sequência aparente pode estar errada. A correlação por tempo exige conhecer a referência usada, o fuso apresentado, o tratamento de horário de verão e possíveis atrasos de ingestão. Sincronização confiável ajuda, mas não elimina atraso de processamento, eventos fora de ordem nem diferenças entre horário do fato e horário de chegada ao repositório.

## Como decidir o que coletar e por quanto tempo?

A decisão deve partir de perguntas investigativas plausíveis. A organização quer saber se uma conta foi usada de local ou dispositivo inesperado? Se houve alteração de privilégio? Se um endpoint executou um processo incomum? Se dados saíram por um serviço de nuvem? Cada pergunta aponta para fontes diferentes e para lacunas que precisam ser documentadas. Sem esse vínculo, a coleta tende a crescer por conveniência, enquanto as fontes realmente necessárias podem continuar ausentes.

Uma política de evidências deve explicitar finalidade, escopo, responsáveis, forma de acesso, proteção, descarte e exceções. O princípio prático é coletar o suficiente para responder a perguntas justificadas e preservar o contexto necessário para interpretar o material. Isso não autoriza ignorar dados relevantes; exige justificar sua utilidade e o impacto da retenção. Dados de navegação, identificadores, conteúdo de comunicações e informações pessoais podem ter riscos próprios, portanto as regras aplicáveis devem ser avaliadas por quem tem competência organizacional e jurídica.

Os prazos precisam combinar duas realidades: o tempo necessário para detectar e investigar e o custo e risco de guardar dados. O período de permanência no sistema de origem pode diferir daquele da cópia central. Também pode haver retenções distintas para dados de alto valor, telemetria volumosa e registros administrativos. Em vez de adotar um único prazo para tudo, documente a razão de cada prazo, as dependências de licenciamento, os responsáveis pela revisão e o processo de descarte.

Como ponto inicial para uma avaliação — a validar com os fornecedores e as regras da organização — uma equipe pode considerar: identidade e auditoria administrativa por 90 a 180 dias; eventos de endpoint de 30 a 90 dias na plataforma operacional, com seleção de alertas e eventos relevantes preservados por 180 dias; auditoria de nuvem de 90 a 365 dias conforme criticidade e capacidade; registros de DNS e proxy de 30 a 90 dias; e fluxos de rede resumidos por 14 a 90 dias. Esses intervalos são exemplos de planejamento, não exigências técnicas ou legais. Alguns serviços oferecem muito menos por padrão; outros permitem retenção mais longa mediante configuração ou custo adicional.

## Quais fontes são essenciais?

Não existe uma lista universal, porque arquiteturas e serviços variam. Uma base razoável organiza as fontes por identidade, endpoint, rede e nuvem, acrescentando contexto de horário, inventário e mudanças administrativas. O valor está tanto nos eventos quanto na possibilidade de ligar uma ocorrência a um ativo, uma conta e uma janela temporal sem depender de memória informal.

### Identidade e acesso

No provedor de identidade, priorize autenticações bem-sucedidas e malsucedidas, desafios de autenticação multifator, emissão e revogação de sessões, alterações de credenciais, mudanças de grupo e função, criação ou desativação de contas, consentimentos de aplicativos e alterações em políticas de acesso. Registre identificadores estáveis de usuário, aplicação, sessão e dispositivo quando disponíveis, além de endereço de origem e resultado. A disponibilidade de cada campo depende do serviço e do nível contratado.

Como referência de planejamento, procure manter de 90 a 180 dias de auditoria pesquisável de identidade e registrar alterações administrativas críticas por um período maior se houver justificativa, salvaguardas e capacidade. O prazo final deve considerar o tempo entre atividade, detecção e resposta. Verifique separadamente a retenção de logs de autenticação, auditoria de diretório e relatórios de risco: eles podem ter políticas e limites diferentes.

### Endpoint e servidores

A telemetria de endpoint pode incluir inicialização e encerramento, logins locais, criação de processos, alterações de serviços, instalação de software, eventos de proteção, mudanças de configuração, conexão de dispositivos e comunicação observada pelo agente. O conteúdo exato depende do sistema operacional, da ferramenta e da política habilitada. Preserve também inventário de ativos, versão do sistema, versão do agente, nome e identificador do equipamento e grupos de política vigentes no período.

Um ponto de partida é manter de 30 a 90 dias de busca operacional na plataforma, conforme volume e custo, e preservar alertas ou eventos selecionados por 180 dias ou pelo prazo interno justificado. Se uma investigação começar perto do limite de retenção, exportações oportunas podem ser necessárias. A coleta de imagem completa de disco ou memória não deve ser rotina indiscriminada; é uma decisão especializada, com escopo, autorização, impacto e cadeia de custódia definidos.

### Rede e serviços de resolução

Fontes de rede incluem DNS, proxy, firewall, VPN, balanceadores, sistemas de prevenção, gateways de e-mail e telemetria de fluxos. Elas ajudam a observar conexões, destinos, horários, volume aproximado, decisões de política e caminhos de acesso. Fluxos resumidos geralmente não contêm o conteúdo da comunicação. Logs de proxy podem incluir URLs ou identificadores sensíveis, portanto a configuração deve limitar campos e acesso à finalidade necessária.

Como intervalos iniciais, avalie 30 a 90 dias para DNS e proxy e 14 a 90 dias para fluxos resumidos, adaptando-os ao volume e às perguntas de investigação. Para equipamentos de borda, retenha mudanças de configuração, reinicializações, alterações de regras e eventos administrativos. A equipe deve saber se a exportação inclui fuso e identificadores do sensor, além de conhecer políticas de amostragem e limites de ingestão.

### Nuvem, SaaS e plataformas de colaboração

Registre conta, organização, projeto ou assinatura, região, serviço, identidade iniciadora, recurso afetado, resultado e horário. Mantenha o inventário de quais contas e regiões estão cobertas, quem administra a configuração e para onde os eventos são enviados. Uma trilha habilitada em uma conta não prova que todas as contas ou regiões estejam cobertas. Mudanças na configuração de logging precisam ser elas próprias monitoradas, para que uma interrupção ou redução de coleta não passe despercebida.

Um intervalo de 90 a 365 dias pode ser considerado para auditoria de nuvem, variando conforme criticidade, custo, volume e capacidade de proteger a cópia. Essa amplitude é intencional: os serviços diferem muito e a organização deve confirmar retenção, formato, custo de exportação, limites de consulta e comportamento em caso de encerramento da conta ou mudança de plano. Cópias centralizadas devem ser verificadas quanto à completude e independência dos controles que poderiam ser alterados por um administrador investigado.

### Contexto que permite interpretar os eventos

Logs sem contexto podem ser tecnicamente íntegros e ainda assim enganosos. Mantenha inventários com identificadores de ativos, proprietários, função, ambiente, criticidade e datas de entrada ou retirada. Guarde histórico de mudanças de configuração, políticas de auditoria e versões de agentes. Sem isso, uma ação legítima de manutenção pode parecer anômala, ou uma alteração de regra pode ser confundida com comportamento normal.

## Como preservar origem, integridade e contexto?

Uma coleta útil precisa responder: de qual fonte veio o material, quem o obteve, quando, por qual método, para qual finalidade e onde foi armazenado? A resposta pode estar em um registro de coleta associado ao caso. Inclua o identificador do caso, o sistema e escopo consultados, o intervalo solicitado, o formato exportado, o fuso conhecido, a identidade do operador e eventuais limitações relatadas pela plataforma.

Quando disponível e apropriado, calcule um resumo criptográfico do arquivo exportado e registre o algoritmo e o resultado no manifesto de coleta. Esse resumo ajuda a detectar alterações posteriores no arquivo que foi verificado. Não prova sozinho que o evento original era verdadeiro, que a exportação estava completa ou que o sistema de origem não foi alterado. Para reforçar a confiança, preserve também os metadados da exportação e as informações sobre a consulta e a plataforma que a produziu.

Armazene cópias investigativas em local controlado, com acesso baseado em necessidade, autenticação forte, trilha de auditoria, proteção contra alteração ou exclusão indevida e política de expiração. Separar o repositório de evidências da administração cotidiana reduz o risco de uma mesma conta alterar fonte e cópia. A imutabilidade pode ser útil, mas precisa ser dimensionada: uma retenção bloqueada sem processo de correção pode prolongar exposição ou impedir descarte devido. O controle deve atender à política e às regras aplicáveis, não ser um fim isolado.

## Quem participa e quais decisões cabem a cada papel?

A preparação funciona melhor quando segurança, operações, privacidade, jurídico, gestão de dados e proprietários de sistemas têm responsabilidades explícitas. A equipe de segurança pode definir perguntas e coordenar análise; operações pode garantir acesso técnico e explicar mudanças; o proprietário do serviço pode esclarecer cobertura e impacto; privacidade e jurídico podem orientar escopo e obrigações; gestão de dados pode administrar retenção e proteção. Em organizações menores, uma pessoa pode ocupar mais de um papel, mas a acumulação deve ser reconhecida e registrada.

Defina quem autoriza uma coleta ampla, quem pode declarar uma preservação excepcional, quem aprova acesso a dados restritos e quem decide sobre contenção urgente. A autorização não precisa atrasar uma ação de proteção previamente prevista. O procedimento pode definir condições de emergência e exigir documentação posterior. O essencial é que a equipe saiba qual autoridade consultar e não improvise permissões durante o evento.

## Como a correlação transforma registros em uma linha do tempo?

Correlacionar é comparar eventos de fontes distintas usando atributos comuns e tempo. Uma sessão de identidade pode compartilhar um identificador com uma atividade de aplicação; um endpoint pode mostrar o mesmo usuário e equipamento; um registro de proxy pode indicar comunicação próxima ao evento. Quanto mais forte o identificador comum, menor a dependência de aproximações. Endereço IP, nome de host e horário são úteis, mas podem ser compartilhados, reutilizados, traduzidos ou alterados.

Uma boa síntese marca claramente: “observado” para o que consta na fonte; “correlacionado” para eventos relacionados por atributos ou tempo; “hipótese” para explicações que ainda precisam de confirmação; e “não determinado” para questões sem evidência suficiente. A linguagem protege a precisão: “a conta autenticou às 10h” descreve um registro; “a pessoa realizou a ação” é uma atribuição que pode exigir evidências adicionais.

## Cenários hipotéticos para orientar a preparação

### Acesso inesperado a uma conta privilegiada

Em um cenário hipotético, um alerta aponta uma autenticação de uma conta administrativa em horário incomum. A equipe consulta o provedor de identidade, encontra o evento de login e verifica se houve desafio multifator, emissão de sessão ou alteração recente de privilégio. Em seguida, compara a atividade com VPN, inventário do dispositivo, registros do diretório e auditoria de nuvem durante a janela relevante.

O alerta é um sinal, a autenticação registrada é um evento observado e a conclusão de comprometimento ainda é uma hipótese. Uma mudança de plantão, uma manutenção aprovada ou uma sessão de automação podem explicar a atividade. Se a identidade não incluir o dispositivo ou se os logs de nuvem expiraram, a equipe deve registrar essa lacuna e limitar a conclusão. Preparação útil aqui significa ter os identificadores, a retenção e o acesso definidos antes que a conta precise ser suspensa.

### Mudança não reconhecida em um serviço de nuvem

A existência de uma alteração não demonstra intenção maliciosa. O nome da conta pode indicar uma automação legítima, mas é necessário conferir o responsável, o processo de mudança e o contexto da credencial. Se os eventos de auditoria estiverem disponíveis apenas na conta afetada, a cópia central e os controles administrativos tornam-se importantes para avaliar independência e completude. A preservação deve incluir a configuração atual e o histórico disponível, respeitando a política de acesso.

### Alerta de endpoint sem sinais correlatos

A equipe verifica o estado do agente, a política aplicada, a cobertura da rede, a janela consultada e os horários das fontes. Se uma ação de contenção for necessária, registra o que foi feito antes de coletar novos dados, porque isolamento ou desligamento pode alterar estado. O cenário demonstra por que cobertura e saúde de sensores precisam ser documentadas, e por que alertas devem ser tratados como ponto de partida para perguntas, não como sentença.

## Quais erros reduzem a confiabilidade?

Um erro recorrente é confiar no prazo padrão de retenção sem confirmá-lo. Planos de serviço mudam, configurações ficam diferentes entre contas e a retenção pode depender de uma opção paga. A correção é verificar de forma periódica a retenção efetiva e manter evidência da configuração. O mesmo vale para exportação: conseguir consultar na interface não garante que seja possível baixar um período completo em formato utilizável.

Outro problema é manter uma única fonte como relógio de referência sem conhecer sua precisão ou fuso. A equipe pode ordenar eventos incorretamente e construir uma narrativa convincente, porém falsa. Registre a referência temporal e trate diferenças como incerteza. Quando necessário, compare eventos de relógio confiável e conhecidos, sem “corrigir” registros de modo irreversível.

A coleta excessiva também é um erro. Guardar tudo indefinidamente eleva custo, aumenta impacto de uma exposição e pode contrariar princípios de minimização e regras internas. A alternativa não é apagar indiscriminadamente, mas classificar fontes, justificar prazos, limitar campos e estabelecer exceção de preservação quando houver motivo documentado. O descarte precisa ser controlado e verificável.

A confiança cega em capturas de tela, alertas ou planilhas prejudica a revisão. A captura perde campos e contexto; o alerta resume uma regra; a planilha pode incorporar filtros ou conversões não documentados. Preserve a fonte original quando possível e mantenha a trilha das transformações. Também não misture observações de fontes diferentes em uma narrativa sem identificar de onde veio cada afirmação.

## Como avaliar se a preparação funciona?

Avaliar não significa contar logs sem contexto. Uma revisão pode verificar se as fontes prioritárias estão identificadas, se a retenção observada corresponde à política, se os relógios e fusos são compreendidos, se os responsáveis têm acesso e se os arquivos exportados chegam ao repositório com contexto e proteção. Os critérios devem refletir perguntas investigativas e riscos reais da organização.

Um teste simples deve confirmar que a equipe consegue localizar um evento benigno conhecido em cada fonte prioritária, exportá-lo com os campos relevantes, registrar a origem e explicar o fuso e a janela. Depois, deve verificar se outra pessoa consegue reproduzir a consulta e entender o material sem depender de explicações orais do operador. Uma coleta que só seu autor consegue interpretar não está suficientemente documentada.

## Exercício de mesa ou laboratório autorizado

Um exercício seguro pode usar uma conta de teste, um endpoint de laboratório e uma alteração administrativa reversível previamente aprovada. Não é necessário simular malware nem acessar sistemas de terceiros. O objetivo é treinar a descoberta e a preservação de eventos comuns, observando se a equipe consegue explicar fontes, limites e decisões. Antes do exercício, confirme autorização, escopo, janela, dados permitidos e responsáveis por interromper a atividade.

## Roteiro de implementação

### 1. Defina perguntas prioritárias

Reúna segurança, operações e proprietários de sistemas para listar as decisões que dependem de registros: confirmar uso de uma conta, entender alterações administrativas, localizar atividade em endpoint ou verificar caminhos de comunicação. Limite a primeira rodada a perguntas que tenham impacto operacional claro. Para cada uma, relacione fontes, identificadores de correlação e possíveis limitações.

### 2. Faça o inventário das fontes

Registre produto ou sistema, proprietário, escopo coberto, eventos disponíveis, forma de acesso, formato de exportação, retenção efetiva, localização, dependências de licença e contato de suporte. Inclua contas, regiões, ambientes e equipamentos. Marque o que não está coberto e evite preencher lacunas com suposições. Um inventário simples, atualizado, é mais útil do que uma arquitetura ideal que ninguém consegue verificar.

### 3. Ajuste relógios, retenção e acesso

Confirme sincronização e fuso, escolha prazos proporcionais à necessidade e verifique os limites dos fornecedores. Configure acesso mínimo e identidades nominativas ou administrativas rastreáveis. Garanta que exista um caminho de acesso emergencial documentado. Se uma cópia central for necessária, avalie separação de funções, proteção contra alteração, disponibilidade durante interrupções e descarte controlado.

### 4. Escreva o procedimento de coleta

### 5. Teste o percurso completo

Faça uma coleta autorizada de eventos benignos em cada grupo de fontes. Verifique se os dados estão presentes, se podem ser exportados, se o fuso é conhecido, se os identificadores se relacionam e se o repositório preserva acesso e integridade. Peça a alguém que não executou a coleta para revisar o material. Registre falhas como tarefas com responsáveis, sem ocultá-las em uma nota genérica.

### 6. Revise continuamente

Reavalie quando houver troca de fornecedor, migração de serviço, alteração de licença, mudança relevante de arquitetura ou incidente que revele uma lacuna. Confirme periodicamente a retenção efetiva e a saúde dos coletores. Revise permissões temporárias e a política de descarte. A preparação é uma capacidade operacional que precisa acompanhar o ambiente, não um documento concluído uma única vez.

## Como registrar alertas, provas e incertezas?

Um relato claro pode separar “sinal recebido”, “registro consultado”, “correlação encontrada”, “interpretação atual” e “decisão tomada”. Um alerta é um sinal de que uma regra ou serviço observou algo que merece atenção. O registro consultado é a evidência disponível naquela fonte. A correlação relaciona eventos com critérios explícitos. A interpretação considera explicações plausíveis. A decisão responde ao risco, mesmo quando a investigação ainda não fechou.

## FAQ

### É necessário guardar todos os logs pelo maior prazo possível?

### Um alerta confirma que houve invasão?

### Um hash prova que o arquivo é autêntico?

### Qual prazo de retenção devo adotar?

### O que fazer quando uma fonte não está disponível?

Registre a lacuna, o período afetado, o escopo consultado e a razão conhecida ou ainda desconhecida. Procure fontes complementares e evite inferir que a atividade não ocorreu. Se a lacuna mudar uma decisão importante, deixe clara a incerteza e priorize uma correção proporcional para o futuro.

### A coleta pode ser feita por qualquer administrador?

### É preciso criar uma cópia imutável de tudo?

### Como tratar divergência entre horários?

### Quem deve aprovar a coleta durante uma crise?

## Relação com o capítulo sobre resposta, contenção e recuperação

No capítulo 8 da versão original de Confronto Cibernético, dedicado a operações de resposta, contenção e recuperação, Hiago Kin Levi aborda decisões que ocorrem enquanto a organização procura limitar danos e restabelecer serviços. A preparação de evidências se conecta a esse momento porque contenção e recuperação podem mudar sistemas, encerrar sessões, remover artefatos ou substituir ambientes. Definir fontes, acesso e registros antes da crise ajuda a preservar contexto suficiente para entender o que motivou uma ação e o que ela alterou.

A referência ao livro de Hiago Kin Levi, publicado pela Editora Brasport, funciona como contexto editorial para essa relação entre preparo e operação. Uma obra pode apoiar a reflexão, mas não substitui documentação técnica atualizada dos produtos, treinamento prático, políticas da organização nem julgamento da equipe diante de fatos específicos. A preparação mais útil combina orientação, configuração verificável, exercício autorizado e revisão contínua.
