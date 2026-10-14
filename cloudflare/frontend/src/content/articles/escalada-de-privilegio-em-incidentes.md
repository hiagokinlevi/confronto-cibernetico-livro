# Escalada de privilégio em incidentes

## Pergunta central: o que mudou na capacidade do adversário?

Quando uma investigação encontra uma conta com direitos elevados, a primeira pergunta não deveria ser apenas “quem fez a alteração?”. É necessário descobrir que capacidade nova surgiu, por quais meios ela foi obtida, que recursos se tornaram alcançáveis e se o acesso continua disponível. Uma alteração administrativa pode ser legítima; uma sessão legítima pode ser usada por alguém não autorizado; e um processo pode obter direitos superiores por uma falha técnica. Esses casos podem produzir registros parecidos, mas exigem respostas diferentes.

A escalada de privilégio é uma mudança, direta ou indireta, na capacidade de uma identidade, processo ou sessão executar ações que antes não podia executar. Essa mudança pode ocorrer dentro de um sistema, entre sistemas, ou em uma plataforma de nuvem. Pode envolver a obtenção de uma função administrativa, a inclusão em um grupo privilegiado, o uso de uma credencial já poderosa, a emissão ou reutilização de um token, uma execução elevada ou a exploração de uma configuração ou vulnerabilidade. O termo descreve um efeito sobre capacidade; não identifica por si só a causa nem prova intenção maliciosa.

## O que significa privilégio no ambiente investigado?

“Privilégio” não é apenas a etiqueta de administrador. É o conjunto efetivo de operações que uma identidade ou processo consegue realizar, levando em conta permissões diretas, heranças, grupos, funções, políticas, delegações, escopos e condições de acesso. A mesma função pode conceder capacidades diferentes em ambientes distintos. Uma conta sem o rótulo de administradora pode, por exemplo, gerenciar credenciais de um serviço, alterar políticas de acesso ou conceder funções a terceiros. Já uma conta rotulada como administradora pode ter o acesso condicionado por aprovação, dispositivo confiável ou duração limitada.

Por isso, o inventário de nomes de grupos é insuficiente. A equipe deve compreender o que as permissões autorizam na prática. Em diretórios corporativos, isso inclui grupos aninhados, delegações sobre unidades organizacionais, direitos de redefinir credenciais e caminhos de administração de dispositivos. Em sistemas operacionais, importa distinguir privilégios do usuário, direitos do processo, permissões de arquivos e serviços, e contexto de execução. Em plataformas de nuvem, é preciso analisar funções, políticas associadas, relações de confiança, escopo de recursos, condições e capacidade de delegar ou assumir outras funções.

## Como distinguir concessão legítima, abuso e exploração?

A investigação deve testar três linhas de hipótese. Na primeira, houve uma concessão legítima e aprovada, executada pelo ator esperado, dentro do escopo e do prazo autorizados. Na segunda, o mecanismo de autorização funcionou como configurado, mas uma conta ou sessão legítima foi usada indevidamente. Na terceira, a capacidade foi obtida por uma falha técnica ou por uma combinação de permissões que permitiu contornar controles previstos. Pode haver outras explicações, como automação mal documentada ou erro operacional. As linhas não são mutuamente excludentes: uma conta comprometida pode usar uma permissão excessiva, e uma mudança autorizada pode ser seguida por abuso.

Uma aprovação registrada demonstra que determinado pedido foi aprovado, não que a pessoa que executou a ação era quem dizia ser, nem que todas as ações posteriores estavam cobertas por essa aprovação. Da mesma forma, um log com o identificador de uma conta demonstra que a plataforma atribuiu a operação àquela identidade ou sessão, conforme seu modelo de auditoria; não demonstra por si só que o titular humano a realizou. A análise de autoria exige correlação com autenticação, origem da sessão, dispositivo, fluxo de trabalho, automação e outros registros disponíveis.

## Qual sequência de investigação preserva o contexto?

Comece definindo o intervalo temporal e os ativos envolvidos. Escolha um evento inicial observável, como uma alteração de associação, uma emissão de token, uma mudança de política ou a primeira execução elevada. Expanda o período para abranger o contexto anterior e posterior, considerando atrasos de ingestão, diferenças de fuso, relógios desalinhados e retenção desigual. Uma busca restrita ao minuto de um alerta pode ignorar a autenticação que originou a sessão ou os acessos alternativos criados depois.

Em seguida, reconstrua a identidade efetiva em cada etapa. Registre o identificador estável do usuário, serviço ou principal; o nome exibido; o tipo de credencial; os grupos e funções no momento relevante; e a sessão ou token usados, se esses dados estiverem disponíveis. Nomes podem ser reutilizados, aliases podem mudar e um mesmo usuário pode operar em vários contextos. Não suponha que duas ocorrências com o mesmo nome pertençam à mesma entidade sem conferir identificadores e origem.

## Que fontes de evidência ajudam a fechar a cadeia?

Registros de identidade e autenticação ajudam a estabelecer quem solicitou ou iniciou uma sessão, qual método foi usado, se houve fator adicional, de onde veio o acesso e como a sessão foi encerrada. Eles são especialmente úteis quando contêm identificadores de sessão, aplicação, dispositivo e principal. Devem ser interpretados segundo a plataforma: logs diferentes registram etapas diferentes do fluxo de autenticação, e nem todo evento de sucesso representa o uso de um recurso privilegiado.

Os registros de autorização e administração mostram alterações de grupos, funções, políticas, escopos, delegações, credenciais e relações de confiança. Procure tanto a concessão inicial quanto mudanças posteriores que expandiram o acesso. Em alguns ambientes, operações administrativas são registradas em uma trilha de auditoria central; em outros, os dados estão distribuídos por conta, região, diretório ou serviço. Confirme cobertura, retenção, integridade e sincronização antes de tratar ausência de evento como evidência de ausência de mudança.

## Quais sinais são alertas e quais são provas?

Um alerta é uma observação que merece validação. Exemplos incluem uma concessão fora do horário habitual, um novo membro em grupo sensível, uso de função por localidade inesperada, execução elevada por aplicativo raro ou tentativa de acesso negada a um recurso protegido. Esses sinais ajudam a priorizar. Isoladamente, não demonstram comprometimento, exploração nem impacto.

Uma evidência é um registro ou artefato verificável que sustenta uma afirmação delimitada. Um evento de auditoria pode provar que uma função foi anexada a um principal em determinado momento, desde que a fonte seja íntegra e o identificador esteja validado. Um log de recurso pode demonstrar que uma operação foi aceita. Nenhum desses fatos necessariamente prova quem estava diante do dispositivo, por que a ação ocorreu ou se houve intenção maliciosa. A afirmação precisa corresponder ao alcance real da fonte.

## Quem decide e quem executa cada parte?

A equipe de resposta a incidentes coordena a linha do tempo, define prioridades técnicas, mantém a lista de hipóteses e recomenda contenção proporcional. Ela precisa ter acesso às fontes de identidade, endpoint, rede e nuvem ou obter apoio dos responsáveis por essas plataformas. A equipe deve preservar o estado observado antes de mudanças que possam apagar contexto, sem atrasar uma ação urgente quando houver risco ativo e impacto relevante.

A equipe de identidade e diretório valida contas, autenticação, associações, funções, delegações, sessões e mecanismos de recuperação. Ela pode revogar sessões, suspender credenciais, alterar políticas e rastrear principais vinculados. Como uma ação de contenção pode afetar serviços e usuários, deve informar dependências e confirmar a propagação da mudança por meio de registros ou estado da plataforma.

## Quais decisões práticas reduzem risco sem apagar a investigação?

A decisão inicial deve considerar atividade em curso, alcance potencial, criticidade dos recursos e confiança das evidências. Se há operações privilegiadas acontecendo sem autorização aparente, uma contenção imediata pode ser necessária mesmo enquanto a causa permanece desconhecida. A medida deve ser específica: suspender a sessão identificada, limitar temporariamente a função, bloquear a credencial suspeita ou restringir um recurso. O registro da decisão deve explicar o risco observado, quem autorizou, horário e efeito esperado.

Quando a atividade não está em curso e a evidência é ambígua, a equipe pode adotar restrições temporárias e monitoramento reforçado enquanto valida o contexto. Isso pode incluir exigir uma nova autenticação forte, reduzir escopo, impor aprovação para certas operações ou suspender uma credencial não essencial. A escolha depende do ambiente e da capacidade de observar o efeito. Uma contenção ampla pode interromper automações, recuperação ou serviços críticos; uma contenção estreita demais pode manter o caminho abusado.

## Como avaliar o escopo e o impacto?

O escopo não se resume ao número de contas alteradas. Avalie quais recursos a identidade podia alcançar durante a janela, quais operações foram executadas, quais dados estavam disponíveis e que capacidades de administração ou delegação existiam. Uma função de baixo uso pode abrir um caminho para um recurso central; uma alteração ampla pode ter sido aplicada, mas nunca utilizada. Potencial de acesso e uso confirmado são dimensões diferentes e devem ser relatadas separadamente.

Construa um grafo simples de relações: principal inicial, mecanismo de autenticação, concessão, função ou grupo, recurso e principal subsequente. Acrescente arestas apenas quando houver evidência de que a relação existia. Marque relações inferidas e suas fontes. Essa representação ajuda a perceber caminhos indiretos, como uma conta que pode editar uma automação que, por sua vez, executa com direitos maiores. Não é necessário usar uma ferramenta sofisticada; uma descrição consistente e revisável já evita que permissões derivadas desapareçam da análise.

## Exemplos defensivos em cenários hipotéticos

### Mudança de grupo durante manutenção

Cenário hipotético: uma solicitação aprovada prevê acesso administrativo temporário para corrigir um serviço. A auditoria mostra a inclusão do operador em um grupo privilegiado, mas a conta permanece nesse grupo depois da janela de manutenção. A equipe confirma que o chamado e o executor correspondem ao evento inicial. O problema confirmado é a permanência além do prazo aprovado; ainda não há prova de uso indevido durante esse período.

A resposta começa por remover ou limitar a associação residual conforme o processo de contenção, verificar se houve sessões e operações no intervalo estendido e confirmar a expiração em controles futuros. A equipe registra se o mecanismo de acesso temporário falhou, se a remoção dependia de uma tarefa manual e se outros grupos herdados mantêm direitos. O achado não autoriza concluir que o operador abusou do acesso. Ele demonstra uma falha de ciclo de vida que precisa de correção e monitoramento.

### Sessão de nuvem fora do padrão

### Execução elevada em estação de trabalho

### Permissão delegada sem mudança visível de grupo

### A conta bloqueada, mas o acesso continua

## Erros comuns que distorcem a conclusão

Um erro frequente é equiparar privilégio elevado a atividade maliciosa. Administradores, operadores de plantão e agentes de automação precisam executar tarefas poderosas. O sinal relevante é a divergência de identidade, contexto, escopo, sequência ou aprovação, e não apenas o nível de direito. Classificar todo uso administrativo como incidente produz ruído e pode incentivar exceções informais que reduzem a qualidade da auditoria.

Outro erro é confiar em um chamado como prova conclusiva. Chamados podem estar atrasados, incompletos ou vinculados a uma atividade diferente. Compare cada atributo da autorização com a execução e confirme mudanças emergenciais por um processo posterior. A existência de aprovação não torna legítima qualquer ação subsequente da mesma conta.

## Critérios para avaliar uma investigação

Uma investigação consistente responde, com fontes identificadas, a cinco perguntas: qual capacidade mudou; qual evento ou sequência sustentou a mudança; quais identidades e sessões participaram; quais recursos foram alcançados ou permaneceram acessíveis; e o que foi feito para conter e validar. Se alguma resposta não estiver disponível, o relatório indica a lacuna e seu efeito sobre a conclusão.

A linha do tempo deve permitir que outra pessoa reconstrua a ordem dos acontecimentos. Cada entrada importante inclui horário e fuso, fonte, principal, ação, resultado e referência ao registro original. A normalização não deve ocultar o horário fornecido pela origem. Divergências de relógio e atrasos de ingestão precisam ser anotados quando puderem alterar a interpretação da sequência.

## Exercício de mesa ou laboratório autorizado

Um exercício de mesa pode treinar investigação sem executar exploração. Use um ambiente fictício ou dados sintéticos e distribua os papéis de resposta, identidade, nuvem, endpoint, proprietário do serviço e aprovador de mudanças. O cenário começa com um evento de inclusão em grupo privilegiado fora da janela habitual. Entregue fatos em etapas: uma solicitação aprovada com escopo limitado; uma sessão de identidade com dispositivo não reconhecido; uma alteração de política por automação; e uma operação posterior em um recurso sensível.

Em cada etapa, os participantes devem separar fatos observados, hipóteses e perguntas pendentes. Devem decidir que fonte consultar, como preservar a evidência, quem autoriza a contenção e que risco existe ao suspender a identidade. Na etapa seguinte, revele que um serviço de produção depende de uma credencial relacionada e que uma sessão já emitida pode permanecer ativa. O grupo precisa propor contenção que cubra a cadeia sem ignorar continuidade e definir como verificar propagação e acesso residual.

## Roteiro de implementação para a organização

### Preparar inventário e propriedade

Mantenha um inventário de contas humanas e não humanas, grupos sensíveis, funções, aplicações, credenciais, delegações e recursos críticos. Associe cada item a um responsável e a uma finalidade conhecida. O inventário pode começar pelos caminhos de maior impacto, como identidades que administram diretórios, plataformas de nuvem, backups, sistemas de identidade ou segredos. Expanda a cobertura por risco e dependência, em vez de presumir que uma lista de administradores resolve o problema.

Documente quais operações cada papel permite e quais identidades podem concedê-las. Inclua caminhos indiretos, herança, confiança federada e capacidade de delegar. Revise se funções emergenciais têm responsável, justificativa, duração e método de auditoria. Para contas de serviço, registre dependências e processo de rotação para que a resposta não precise escolher entre manter uma credencial suspeita e interromper um serviço sem plano.

### Melhorar aprovação e concessão

### Garantir evidência útil

### Definir resposta e recuperação

### Revisar após incidentes e mudanças

## Perguntas frequentes

### A inclusão em um grupo administrativo confirma escalada maliciosa?

Confirma que houve uma alteração de associação se o registro for válido e corresponder à identidade correta. Não confirma motivação, autoria humana ou uso posterior. Compare a mudança com a solicitação e a janela, investigue a sessão que a executou e verifique as operações realizadas depois. Se a aprovação não puder ser encontrada, classifique a autorização como não confirmada, sem concluir automaticamente que houve exploração.

### O que diferencia uso indevido de conta de exploração técnica?

No uso indevido, o mecanismo de autorização pode ter funcionado normalmente, mas uma identidade ou sessão foi usada fora da finalidade esperada. Na exploração, uma falha ou configuração permitiu obter capacidade sem a concessão prevista. Os registros nem sempre distinguem as causas. A resposta deve identificar a capacidade obtida e manter a causa como hipótese até encontrar evidência sobre autenticação, processo, configuração ou vulnerabilidade.

### Redefinir a senha encerra o acesso?

Não necessariamente. Tokens, sessões, chaves de aplicação e credenciais de serviço podem permanecer válidos. Identifique os artefatos vinculados à identidade, revogue-os conforme a plataforma e confirme o resultado observando tentativas e operações posteriores.

### Uma permissão concedida prova que os dados foram acessados?

Não. A permissão indica capacidade potencial. Para confirmar acesso, procure eventos do recurso com operação e resultado; para afirmar cópia ou exfiltração, são necessárias evidências adicionais de transferência e destino. Relate cada etapa separadamente.

### E se não houver logs suficientes?

Declare fontes ausentes, período de retenção e efeito sobre a conclusão. Use o primeiro evento disponível como limite observado, não como início certo. A lacuna pode justificar contenção preventiva e melhoria da coleta, mas não autoriza preencher o desconhecido com suposições.

### Quando bloquear imediatamente uma conta?

Quando houver risco ativo relevante ou operações privilegiadas sem autorização aparente, contenha proporcionalmente e registre a decisão. Se não houver atividade em curso e os sinais forem ambíguos, valide rapidamente e considere restrições temporárias, levando em conta impacto e dependências.

### Como saber que a contenção funcionou?

Confirme o estado das alterações, a invalidação de sessões e credenciais relevantes, a remoção de permissões derivadas e a inexistência de vias alternativas conhecidas. Observe eventos posteriores em fontes com cobertura adequada e confirme que serviços legítimos foram recuperados.

### A escalada sempre acontece depois de uma invasão inicial?

Não. Direitos podem aumentar por mudança administrativa ou automação defeituosa sem invasão demonstrada; também é possível haver comprometimento sem uma nova elevação. Descreva a sequência observada sem impor fases que os fatos não sustentam.

## Relação com o capítulo do manuscrito

No capítulo 1, “APTs, persistência e ciclo de ataque”, do livro de Hiago Kin Levi, publicado pela Editora Brasport, a escalada pode ser compreendida como parte de uma cadeia mais ampla de acesso e persistência. Essa conexão ajuda a formular perguntas sobre o que o adversário poderia fazer depois de obter direitos maiores e que caminhos poderiam permanecer após uma contenção inicial. O livro oferece contexto conceitual; não substitui documentação técnica atualizada das plataformas, treinamento prático autorizado nem o julgamento da equipe que responde ao incidente.


## Como tratar credenciais e sessões relacionadas

Uma identidade privilegiada pode materializar sua autorização em artefatos com durações e escopos diferentes. A senha autentica, mas um token, uma sessão federada, uma chave de aplicação ou uma credencial temporária pode permitir operações posteriores sem nova digitação da senha. O inventário do incidente deve registrar o tipo do artefato, quem o emitiu, a identidade a que se vincula, o escopo, a validade conhecida e os recursos que o aceitam. Não registre o valor secreto em relatórios ou canais de resposta; use identificadores, metadados e os procedimentos protegidos da plataforma.

A revogação deve ser planejada por dependência. Encerrar sessões pode forçar reautenticação de vários serviços; rotacionar uma chave pode interromper um processo legítimo; invalidar uma relação de confiança pode afetar usuários federados. Essas consequências não justificam manter um acesso suspeito sem controle, mas precisam ser conhecidas para reduzir interrupções e garantir recuperação. Se a plataforma não oferece revogação seletiva, a equipe pode precisar combinar rotação, bloqueio temporário do principal e observação dos serviços dependentes.

Depois da ação, valide com evidências compatíveis com o artefato. O estado “credencial desativada” não demonstra que uma sessão previamente emitida deixou de funcionar. Observe tentativas de uso, eventos de renovação, operações no recurso e identidade efetiva apresentada. Uma resposta bem documentada identifica tanto o que a plataforma confirmou quanto o que não oferece meios de verificar; essa limitação entra no risco residual, não deve ser escondida em uma declaração genérica de sucesso.

## Como lidar com contas de serviço e automações

Identidades não humanas costumam ter padrões diferentes dos usuários: podem operar continuamente, acessar recursos em várias regiões e não produzir uma autenticação interativa. Por isso, regras baseadas apenas em horário ou localização podem gerar alertas pouco úteis. Para cada identidade de serviço, mantenha proprietário, aplicação associada, finalidade, dependências, origem operacional esperada e processo de rotação. Quando esse contexto falta, a equipe deve tratar a lacuna como problema de governança e validar com os responsáveis técnicos antes de interromper um serviço crítico, salvo risco ativo que exija contenção imediata.

Automação também pode conceder privilégios. Pipelines de implantação, ferramentas de configuração e agentes de gestão frequentemente precisam alterar recursos. A investigação deve identificar qual identidade executou o pipeline, qual revisão foi aprovada, quais artefatos foram implantados e se a execução corresponde ao resultado esperado. Um commit aprovado não prova que o ambiente recebeu exatamente aquela configuração: pode haver variável externa, credencial alterada ou diferença de estado. Compare a intenção declarada com a configuração efetiva e os eventos de auditoria.

Quando a automação for o caminho legítimo, corrija o desenho para limitar seu alcance. Separe credenciais por ambiente e finalidade, proteja segredos, use permissões estreitas, exija revisão para mudanças de alto impacto e registre execuções com identificadores correlacionáveis. Se uma automação comprometida puder alterar as próprias trilhas ou ampliar a identidade que a executa, trate esse poder como parte do escopo e procure evidências em fontes independentes. A finalidade é conter o incidente sem confundir atividade automatizada com atividade inofensiva.

## Relação entre privilégio e persistência

Em uma investigação de APT, a escalada de privilégio pode criar condições para persistência, mas a relação precisa ser demonstrada. Direitos administrativos podem permitir instalar um serviço, criar uma identidade alternativa ou alterar uma configuração de inicialização. Porém, encontrar esses direitos não prova que qualquer mecanismo persistente foi criado. A equipe deve procurar mudanças concretas em serviços, tarefas, contas, políticas, aplicações, chaves de acesso e mecanismos de recuperação, considerando os controles de auditoria disponíveis para cada plataforma.

A persistência também pode existir sem uma elevação recente: o adversário pode ter comprometido uma conta autorizada, uma aplicação ou uma relação de confiança que já possuía acesso duradouro. Portanto, a revisão deve abranger a duração e a renovação do acesso, e não apenas o instante da concessão. Compare o estado observado com configurações aprovadas e versões históricas, identifique alterações não explicadas e procure sinais de uso. Uma alteração suspeita continua sendo um achado a validar, sobretudo quando ferramentas legítimas de gestão realizam mudanças semelhantes.

Ao fechar o incidente, relacione cada mecanismo de persistência confirmado à identidade e à capacidade que o sustentavam. Remova ou corrija o mecanismo, invalide as credenciais envolvidas e confirme que não existe uma via equivalente criada em outro lugar. Se houver apenas indícios, apresente-os como hipóteses pendentes e indique a evidência necessária para confirmá-los. Essa disciplina evita tanto ignorar uma permanência real quanto afirmar que a organização foi comprometida por completo sem sustentação.
