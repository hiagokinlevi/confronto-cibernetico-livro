# Como criar um playbook de incidentes

## A pergunta que precisa orientar a busca

Quando um alerta aparece às duas da manhã, como a equipe decide o que verificar primeiro, quem pode interromper um serviço e em que momento deve pedir ajuda? Essa é a questão prática por trás da busca por um playbook de incidentes.

Um playbook útil reduz hesitação sem substituir análise. Ele ajuda pessoas que talvez não trabalhem juntas todos os dias a formar uma imagem compartilhada do que se sabe, separar fatos de hipóteses e executar medidas proporcionais ao risco. Deve permitir adaptação: se a evidência contradiz o cenário presumido, a equipe precisa poder sair do roteiro, explicar por quê e continuar investigando.

A pergunta, portanto, não é apenas “quais passos devemos seguir?”. Também é: “qual decisão esta etapa prepara, que evidência a sustenta, quem tem autoridade para tomá-la e qual consequência pode produzir?”. Se uma instrução não responde a alguma dessas necessidades, provavelmente precisa ser esclarecida, movida para uma referência técnica ou removida.

## O que é um playbook e o que ele não resolve

Um playbook é uma sequência operacional voltada a uma classe de evento. Um documento para possível comprometimento de credenciais pode orientar a validação do alerta, a identificação da conta, a consulta a registros de autenticação, a avaliação de sessões e a decisão sobre revogação de acesso.

O plano de resposta a incidentes estabelece a estrutura maior: autoridade, objetivos, comunicação, escalonamento, relações com áreas internas e externas e princípios de resposta. O playbook traduz parte dessa estrutura para um cenário reconhecível.

Uma política define obrigações e limites. Um runbook operacional costuma detalhar uma tarefa recorrente, que pode ou não estar associada a um incidente. O playbook conecta sinais, investigação e decisões durante uma situação incerta. Na prática, esses nomes variam entre organizações; importa que as pessoas saibam qual documento consultar e qual deles tem autoridade para definir ações.

O roteiro não confirma sozinho que houve ataque, não substitui análise forense, não concede autorização para desligar sistemas e não garante recuperação. Ele também não transforma um alerta em prova. A utilidade está em tornar explícitas perguntas, permissões e dependências que, sem preparo, seriam resolvidas sob pressão e de maneiras inconsistentes.

## O vínculo com as fases de resposta

Uma forma de organizar o trabalho é relacioná-lo às fases de preparação, detecção e análise, contenção, erradicação e recuperação, seguidas de melhoria. Esse encadeamento é compatível com modelos conhecidos de resposta, mas não deve ser interpretado como uma fila rígida em que toda equipe conclui integralmente uma fase antes de tocar na seguinte.

Na preparação, o playbook aponta contatos, acessos, fontes de telemetria, autoridades e alternativas para indisponibilidade de ferramentas. Durante detecção e análise, orienta como validar o sinal, construir uma linha do tempo e avaliar escopo e impacto.

A conexão com o modelo NIST é uma referência de organização, não uma certificação automática do documento. A equipe deve consultar a edição e as orientações atuais aplicáveis ao seu contexto; nomes, publicações e práticas podem evoluir.

## Escolha um cenário que justifique um roteiro próprio

Comece com uma situação recorrente ou de alto impacto que exija coordenação e decisões repetíveis. Exemplos defensivos incluem alerta de uso atípico de conta privilegiada, suspeita de credencial comprometida, execução de malware identificada por uma ferramenta corporativa, exposição acidental de informação em um repositório interno ou indisponibilidade de um serviço crítico com indicadores de atividade maliciosa.

A escolha pode vir de registros de alertas, exercícios, auditorias, chamados, dependências do negócio ou análise de risco. Procure eventos que gerem dúvidas semelhantes de plantão para plantão: quem valida, de onde vêm os registros, quando revogar acesso, quem comunica a área afetada e qual é a condição para devolver o serviço.

Delimite o que entra e o que fica fora. Um roteiro de credencial comprometida pode cobrir uma conta de colaborador e contas privilegiadas, mas diferenciar as duas em suas decisões.

Registre também pressupostos: a organização possui registro centralizado de autenticação? Há equipe de identidade disponível fora do horário comercial? O inventário identifica a pessoa responsável por um sistema? Pressupostos não verificados são riscos do roteiro, não fatos. A equipe deve marcá-los como pendências e identificar como proceder quando não forem verdadeiros.

## Defina gatilhos e limites de confiança

O gatilho é a condição que inicia a triagem prevista, não a conclusão de que houve incidente. Pode ser uma detecção de ferramenta, uma notificação confiável, um relato de usuário ou uma combinação de sinais. O documento deve nomear a origem do alerta, as informações mínimas esperadas e o canal de registro. Se a qualidade do sinal variar, explique como comparar com atividade habitual e que contexto solicitar.

Diferencie alerta, indício e evidência confirmada. Um alerta é uma notificação que merece avaliação; pode ser falso positivo, duplicado ou incompleto.

O roteiro pode pedir validação por uma segunda fonte, como comparar uma detecção do endpoint com eventos de autenticação ou confirmar com o responsável pela conta uma atividade fora do padrão. Essa validação não deve atrasar contenção urgente quando o risco de dano em curso for alto. Nesse caso, o playbook precisa definir quem pode tomar uma medida provisória e como registrar a incerteza que a justificou.

Descreva sinais que enfraquecem a hipótese. Uma atividade pode coincidir com manutenção aprovada, viagem, tarefa automatizada ou mudança de configuração.

## Monte a trilha de evidência

Para cada pergunta investigativa, identifique a fonte que pode respondê-la, o campo necessário, quem tem acesso e por quanto tempo o dado fica disponível. Em um possível comprometimento de identidade, perguntas podem incluir: qual conta foi usada, de que dispositivo e origem, quais fatores de autenticação foram aceitos, que sessões permanecem ativas, que aplicações foram acessadas e que alterações ocorreram depois.

Fontes possíveis incluem registros de autenticação do provedor de identidade, trilhas de auditoria de aplicações, eventos de endpoint, registros de VPN ou acesso remoto, alertas de proteção de e-mail, inventário de ativos, sistema de gestão de mudanças e chamados de suporte. Para um serviço em nuvem, podem existir logs de atividade administrativa e de acesso a recursos.

Uma boa instrução explica o que consultar, qual janela temporal considerar e que identificadores correlacionar. A janela deve levar em conta quando o alerta foi gerado, o início possível da atividade e a retenção disponível.

Preservação também exige método. Registre sistema de origem, momento da coleta, fuso ou referência de tempo, operador, formato exportado e local autorizado de armazenamento.

O playbook deve prever falhas de visibilidade. Se a fonte estiver indisponível, registre a lacuna, busque uma alternativa autorizada e informe como isso limita a conclusão. Uma resposta honesta pode ser “não foi possível determinar a duração por falta de registros”, e não uma estimativa apresentada como fato. Essa disciplina melhora decisões posteriores e evita que hipótese vire certeza por repetição em relatórios.

## Atribua papéis e autoridade

Uma lista de nomes pessoais envelhece rápido. Prefira funções e mantenha contatos em um diretório controlado, com substitutos, horários e método alternativo de contato.

A coordenação mantém o quadro comum, define prioridades e acompanha decisões. Analistas validam sinais e documentam evidências.

Separe quem recomenda de quem aprova e de quem executa. Para ações de baixo impacto, a aprovação pode estar previamente delegada a uma função de plantão.

Toda decisão relevante deve registrar o estado conhecido, a ação escolhida, as alternativas consideradas, o responsável, a hora e o motivo. Também convém registrar a incerteza e a condição para reavaliar. Isso permite que outra equipe assuma o caso sem reconstruir conversas dispersas e ajuda a explicar por que uma intervenção foi proporcional ao que se sabia naquele momento.

## Use severidade para priorizar, sem automatizar o julgamento

A severidade comunica urgência e impacto provável. Uma escala interna pode usar níveis como baixo, moderado, alto e crítico, desde que cada um tenha critérios observáveis, expectativas de resposta e autoridade correspondente. A numeração ou o nome dos níveis não tem significado universal. Evite atribuir uma classificação só pela ferramenta que disparou o alerta.

Critérios podem considerar alcance observado ou plausível, sensibilidade dos dados, privilégio da identidade, criticidade do serviço, evidência de atividade em curso, possibilidade de propagação, duração da exposição e impacto sobre segurança ou operação. Um sinal isolado em conta sem privilégios pode começar em triagem normal; evidência de uso de conta administrativa em vários sistemas pode justificar escalonamento imediato.

Especifique ações permitidas por nível. Em um patamar inicial, pode ser apropriado preservar o alerta, enriquecer contexto e solicitar validação ao proprietário da conta.

A severidade é uma classificação provisória, não um veredito. Diga quem pode elevá-la ou reduzi-la, quais fatos justificam a mudança e como comunicar a revisão. Se a equipe não consegue avaliar um critério porque faltam dados, registre “desconhecido” e indique como isso afeta a confiança. Não transforme ausência de evidência em evidência de ausência, nem aumente automaticamente a severidade apenas para garantir atenção sem explicar o motivo.

## Transforme cada etapa em uma decisão executável

Um passo operacional claro contém uma ação, um responsável, uma entrada, um resultado esperado e uma decisão seguinte. “Investigar o usuário” não é suficiente.

Para cada decisão, apresente opções. Se a atividade for compatível com mudança autorizada e houver validação independente, documente a justificativa e monitore conforme o processo local.

As ações devem ser específicas ao cenário e ao ambiente, mas não precisam ser comandos de terminal. Procedimentos de plataforma podem ficar em referências internas versionadas, com requisitos de acesso e passos de reversão.

Inclua pontos de parada. Se a coleta envolver dados pessoais fora do escopo, risco de indisponibilidade, sistema de segurança física ou ambiente de produção sensível, a equipe deve acionar a função pertinente antes de prosseguir, salvo autoridade emergencial definida.

## Pense em contenção como escolha com consequências

Conter significa limitar a oportunidade de dano, mas uma ação pode interromper atividade legítima, apagar contexto, prejudicar clientes ou afetar a recuperação. O playbook deve comparar opções de maneira explícita.

Para cada opção, descreva o efeito esperado, o alcance, os riscos, os pré-requisitos, a autoridade de aprovação, o responsável pela execução e como confirmar o resultado. Se houver possibilidade de perder evidência, indique como preservá-la antes, quando viável, ou quem avalia a urgência de agir primeiro. Uma conta comprometida pode permanecer ativa durante uma análise longa; deixar isso implícito não é uma decisão neutra.

Considere contenção reversível e proporcional, mas não presuma que reversível significa sem impacto. Uma restrição temporária de acesso pode bloquear uma operação crítica.

Após a ação, verifique o efeito por uma fonte independente quando possível. A solicitação de bloqueio não prova que todos os tokens foram invalidados, que cada réplica recebeu a mudança ou que uma sessão já existente terminou. Registre o resultado observado e as exceções. Se a contenção não funcionar, revise hipótese, dependências e escopo; não repita a mesma medida sem compreender por que falhou.

## Erradicação, recuperação e encerramento

Uma intervenção inicial reduz risco, mas não encerra o incidente. Antes de declarar erradicação, a equipe precisa definir quais condições sustentam essa afirmação.

Recuperar é restabelecer funções com controle. Identifique quem aprova o retorno do serviço, quais verificações são necessárias, como monitorar após a liberação e o que aciona nova contenção.

O encerramento administrativo não deve confundir “a equipe parou de atuar” com “todas as questões foram resolvidas”. Registre o escopo conhecido, a linha do tempo, o impacto confirmado e potencial, as decisões, as fontes consultadas, as lacunas, as ações pendentes, os responsáveis e os critérios que levaram ao encerramento operacional.

## Dois percursos contrastantes, em situações hipotéticas

No primeiro cenário hipotético, uma pessoa da equipe recebe um alerta de autenticação fora do padrão para uma conta comum. A consulta inicial mostra uma sessão aprovada durante uma viagem previamente informada, com dispositivo conhecido e atividade compatível com a função.

Esse percurso não prova que a conta nunca foi comprometida. Mostra que as evidências consideradas naquele momento são coerentes com atividade autorizada. Se aparecer um acesso a recurso incompatível, uma alteração inesperada ou uma confirmação posterior de que a pessoa não realizou a sessão, a classificação e o fluxo mudam. A decisão deve ser reavaliável, e os dados usados para sustentá-la precisam estar registrados.

No segundo cenário hipotético, um alerta de identidade privilegiada coincide com alterações administrativas que o responsável não reconhece. Registros de autenticação e auditoria oferecem horários e ações compatíveis entre si, mas a equipe ainda não sabe como a sessão foi obtida nem quais sistemas foram alcançados.

Nesse caso, as alterações são fatos se confirmadas pelos registros; a autoria e o caminho de acesso ainda são hipóteses. A restrição não deve ser descrita como erradicação.

## Erros que enfraquecem um playbook

Um erro frequente é escrever um procedimento genérico que manda “avaliar o impacto”, “coletar evidências” e “conter”. Essas expressões nomeiam objetivos, mas não dizem quem age, que fonte consulta, como decide ou qual autoridade precisa. Converta os verbos vagos em perguntas e saídas observáveis, e mantenha julgamento profissional onde não existe resposta mecânica.

Outro problema é misturar fatos presumidos com requisitos. “Os registros estarão disponíveis” não é um passo; é um pressuposto que precisa ser testado. Se a coleta depende de acesso privilegiado, conta de emergência, licença de produto ou pessoa específica, documente a dependência e o substituto. Um roteiro que só funciona em horário comercial deve assumir essa limitação com clareza e oferecer caminho de escalonamento.

Também é arriscado copiar uma lista de ações de outro ambiente sem validar permissões e efeitos. Uma instrução para desabilitar uma conta pode interromper aplicações de serviço ou processos essenciais. Uma ação tecnicamente possível pode não estar autorizada pela política, contrato ou obrigação de privacidade. Revise cada medida com a equipe dona do sistema e com as funções responsáveis por risco e continuidade.

A rigidez excessiva produz outro tipo de falha. Um fluxo que manda sempre bloquear após um único indício pode converter falsos positivos em indisponibilidade.

Por fim, documentos longos podem parecer completos e ser inutilizáveis no plantão. Excesso de explicações no caminho crítico esconde as decisões. Separe a orientação imediata de contexto, referências e anexos. Use títulos que correspondam às perguntas do operador, linguagem consistente e links internos mantidos. O objetivo é reduzir o tempo para encontrar uma instrução sem retirar informação necessária para agir com segurança.

## Como avaliar se o roteiro funciona

Avalie o playbook por sua capacidade de orientar decisões, não pelo número de páginas. Uma revisão pode verificar se o gatilho é reconhecível, se o primeiro responsável sabe onde registrar o caso, se as fontes existem e estão acessíveis, se cada ação tem autoridade, se há caminhos para dados contraditórios e se o encerramento exige evidências compatíveis com a conclusão.

Observe também dependências reais: contatos desatualizados, permissões ausentes, sistemas com relógios divergentes, retenção inferior à janela necessária, procedimentos externos indisponíveis e instruções que apontam para versões antigas. Se a equipe não consegue consultar uma fonte em contexto de emergência, a existência nominal do log não é suficiente. Registre a diferença entre cobertura planejada e cobertura demonstrada.

Uma métrica isolada não demonstra qualidade. Tempo de triagem pode cair porque o evento foi encerrado cedo demais; quantidade de alertas pode aumentar por mudança de detecção; tempo de contenção pode melhorar enquanto a preservação piora.

A evidência de que o playbook foi usado também deve ser interpretada com cuidado. Um campo preenchido não garante que a pessoa compreendeu a instrução.

## Exercício de mesa e laboratório autorizado

Um exercício de mesa permite testar coordenação sem alterar sistemas. Reúna pessoas que desempenhariam os papéis de plantão, identidade, infraestrutura, negócio e comunicação.

O facilitador não precisa premiar quem adivinha a resposta esperada. O propósito é revelar dependências, linguagem ambígua e conflitos de autoridade.

Um laboratório técnico só deve usar sistemas, contas e dados autorizados, isolados conforme a política da organização. Pode servir para verificar se a equipe consegue exportar registros de teste, aplicar uma ação administrativa aprovada e confirmar o resultado sem afetar produção.

Depois, registre observações concretas. “A comunicação foi ruim” não aponta uma correção.

## Um roteiro para implementar em etapas

Primeiro, escolha um cenário e indique um proprietário do playbook. Reúna quem opera as fontes, quem administra o serviço, quem responde por identidade e quem pode aprovar medidas de impacto. Use registros e exercícios existentes para formular o problema, mas não trate uma lembrança isolada como descrição completa do processo atual.

Em seguida, escreva o escopo e as premissas. Defina o gatilho, as perguntas de triagem e os critérios que distinguem níveis de severidade. Relacione cada pergunta à fonte que pode respondê-la e confirme acesso, retenção, fuso, cobertura e procedimento de preservação. Onde a fonte não existir ou não estiver disponível, documente a lacuna e escolha uma alternativa aprovada ou um caminho de escalonamento.

Depois, desenhe as decisões e os papéis. Para cada etapa, identifique entrada, responsável, resultado esperado, opções, aprovações e pontos de parada. Revise ações de contenção com as áreas proprietárias e de continuidade. Separe orientações gerais de procedimentos técnicos sujeitos a mudança; verifique que as referências apontam para instruções aprovadas e acessíveis durante o plantão.

Faça uma revisão de mesa antes de publicar. Convide alguém que não escreveu o documento para percorrer o fluxo, pois essa pessoa encontrará pressupostos invisíveis ao autor. Peça que explique com as próprias palavras o primeiro sinal, a primeira consulta, a decisão seguinte e a autoridade para agir. Se a leitura depende de interpretação que só o autor possui, simplifique ou acrescente o contexto que falta.

Publique em um repositório com controle de versão e acesso adequado. Inclua proprietário, data de revisão, versão, escopo e referências. Não coloque segredos, dados reais de incidentes ou instruções com privilégio excessivo em local aberto. Garanta que a cópia necessária esteja acessível quando a ferramenta principal de colaboração estiver indisponível, respeitando as regras de segurança da organização.

Por fim, defina manutenção orientada a mudanças: alteração de provedor de identidade, ferramenta, arquitetura, equipe, retenção, política ou obrigação pode invalidar um passo. Faça revisões periódicas segundo o risco e revise também após exercícios e incidentes pertinentes. O registro de alteração deve explicar o que mudou e qual dependência foi revalidada. Um playbook confiável é um artefato vivo porque suas condições operacionais também mudam.

## Perguntas frequentes

### Um playbook serve para qualquer incidente?

Não. O plano geral coordena a resposta em alto nível; playbooks cobrem cenários com sinais, fontes ou decisões suficientemente específicos. Um evento fora do escopo deve seguir o processo geral e ser escalonado. Se a equipe começa a repetir as mesmas perguntas ou decisões em novos casos, isso pode justificar outro roteiro.

### Quantos playbooks uma organização deve ter?

Não há um número universal. Comece pelos cenários de maior recorrência, risco ou dependência entre equipes. Muitos documentos sem proprietários e sem exercícios criam custo de manutenção. Poucos documentos excessivamente abrangentes podem deixar lacunas. Priorize com base no risco e na capacidade real de manter cada fluxo.

### O playbook pode conter comandos e consultas?

Pode referenciar consultas ou procedimentos internos aprovados quando isso ajuda uma função autorizada, mas deve indicar ambiente, pré-requisitos, versão, limites e validação. Comandos que dependem de plataforma mudam e podem ter efeitos colaterais; mantenha-os em material técnico controlado e revise-os com quem administra o sistema. O fluxo decisório precisa continuar compreensível sem memorizar sintaxe.

### Quem deve aprovar uma ação de contenção?

A matriz de autoridade da organização deve responder. A aprovação pode variar com o impacto, o ativo, a urgência e a reversibilidade. Defina antecipadamente quem pode autorizar cada categoria e quem substitui essa pessoa. Em emergência, o procedimento precisa deixar claro o alcance da autoridade delegada e a documentação posterior.

### Como saber se uma hipótese está confirmada?

Defina a afirmação específica e verifique quais fontes a sustentam, a confiabilidade e as limitações de cada uma. Um log pode confirmar uma autenticação ou alteração registrada, sem identificar conclusivamente a pessoa por trás da sessão. Registre o que foi observado, o que foi inferido e o que permanece desconhecido. Use revisão especializada quando o impacto ou a complexidade exigir.

### Quando encerrar a resposta?

Use critérios acordados para o cenário: risco imediato controlado, ações prioritárias concluídas, serviço recuperado ou encaminhado, evidências e decisões registradas, responsáveis por pendências identificados e comunicação apropriada realizada. O encerramento operacional não precisa declarar que toda incerteza foi eliminada. Deve indicar limites e acompanhamento necessário.

### Com que frequência revisar o documento?

Revise quando uma mudança relevante puder afetar gatilhos, acesso, fontes, autoridade ou impacto. Uma cadência periódica também ajuda a encontrar contatos e referências vencidos. A periodicidade deve refletir o ritmo de mudança e o risco do ambiente; uma data de revisão por si só não confirma que o fluxo foi testado.

## Leitura relacionada ao capítulo sobre resposta a incidentes

O livro de Hiago Kin Levi, publicado pela Editora Brasport, pode ser apresentado como leitura relacionada ao capítulo 2 da versão original, que trata das fases da resposta a incidentes e do modelo NIST. Essa conexão ajuda a situar o playbook dentro do ciclo mais amplo de preparação, análise, resposta e melhoria.
