# Ataque a Active Directory

## A pergunta que orienta a resposta

Quando há sinais de comprometimento do Active Directory, como a equipe pode preservar a capacidade de autenticar e administrar o ambiente enquanto determina o que foi alterado, contém o acesso indevido e recupera uma base de confiança verificável? Essa é a pergunta prática por trás de uma busca por ataque a Active Directory. Ela desloca a atenção de uma lista de técnicas para uma sequência de decisões: o que sabemos, o que ainda é hipótese, quais identidades e serviços dependem do diretório, que controles podem ser usados com segurança e em que ordem a recuperação deve ocorrer.

## O que está em risco no diretório

### Identidade, autorização e confiança

O Active Directory Domain Services organiza objetos como usuários, computadores, grupos e unidades organizacionais, além de políticas que influenciam a configuração de máquinas e usuários. Controladores de domínio mantêm e replicam dados do diretório conforme a arquitetura implantada. Serviços e aplicações podem consultar o diretório para autenticar pessoas ou sistemas e para decidir o que cada identidade pode fazer. Relações de confiança conectam domínios ou florestas sob condições definidas. A consequência defensiva é simples: proteger o serviço de identidade significa proteger dados, mecanismos de administração e dependências que atravessam diferentes equipes.

Uma política de grupo é um mecanismo legítimo de administração em massa. Uma alteração inesperada pode afetar autenticação, firewall, auditoria, execução de serviços ou configurações de segurança em muitas máquinas. O conteúdo modificado pode ser confirmado por comparação com uma versão conhecida e por registros de alteração, se preservados. A intenção por trás da mudança, porém, não se deduz apenas do conteúdo: uma diferença pode refletir manutenção autorizada, erro operacional ou ação maliciosa. A equipe precisa verificar o chamado, o responsável, o horário, o processo de aprovação e os efeitos observados.

### Por que a recuperação é diferente de uma troca de senha

Em um incidente restrito a uma conta de usuário, a redefinição de credencial pode ser uma medida suficiente junto com a análise das sessões e dos recursos acessados. Se o plano de administração do domínio estiver em dúvida, a equipe precisa verificar quem controlou os mecanismos que definem identidades e políticas. Uma alteração persistente pode sobreviver a uma troca de senha. Da mesma forma, limpar um único controlador sem compreender replicação, cópias de segurança e dependências não estabelece por si só uma origem confiável.

## Como enquadrar o caso sem antecipar conclusões

### Fatos confirmados, hipóteses e alertas

Um fato confirmado é uma observação reproduzível, com origem e contexto registrados. Exemplos: um evento de auditoria indica que uma conta adicionou um membro a um grupo em determinado horário; o histórico de configuração mostra que uma política mudou; um controlador reporta replicação fora do padrão documentado; o proprietário de uma aplicação confirma que não havia mudança aprovada naquele período. Mesmo nesses exemplos, deve-se registrar a fonte, o fuso horário, o identificador do objeto, a janela consultada e eventuais limitações de retenção ou integridade do registro.

A distinção evita dois erros simétricos. Tratar todo indicador como prova pode provocar contenção desnecessária e contaminar a investigação com uma narrativa prematura. Tratar cada indicador como ruído até existir certeza absoluta pode prolongar o acesso indevido. Uma classificação útil expressa o grau de confiança e a decisão imediata: “confirmado na fonte X; origem ainda desconhecida”, “alerta correlacionado com manutenção aprovada, pendente de validação pelo proprietário” ou “hipótese plausível, sem evidência suficiente para atribuir autoria”.

### Escopo em camadas

Comece pelo objeto diretamente associado ao sinal e expanda o escopo por relações verificáveis. Se há uma conta alterada, identifique os grupos dos quais participa, permissões relevantes, estações e servidores em que pode administrar, serviços que executa e alterações que realizou. Se há uma política modificada, determine a quais unidades e máquinas ela se aplica, quem pode editá-la e se há cópia anterior confiável. Se há atividade em um controlador, avalie os outros controladores, o estado de replicação, as contas de administração usadas e os sistemas de gestão que podem ter iniciado a operação.

## Fontes de evidência e limites de interpretação

### Auditoria do diretório e autenticação

Dados de autenticação devem ser examinados em contexto: identidade, dispositivo de origem, serviço de destino, método, horário, localização de rede e padrão conhecido. Um logon fora do expediente pode decorrer de manutenção, automação ou fuso horário diferente. Um endereço de origem incomum pode ser um concentrador legítimo, VPN ou proxy. A combinação de atributos e a validação com o dono da atividade têm mais valor que um único campo isolado. Não atribua uma sessão a uma pessoa sem considerar contas compartilhadas, automação, delegação e credenciais comprometidas.

### Configuração, replicação e política

Compare o estado atual de grupos, delegações e políticas com uma referência conhecida e datada. Uma referência pode ser exportação anterior, cópia de segurança validada, controle de versão aprovado ou registro de configuração mantido pelo processo de mudança. Uma cópia antiga não é automaticamente correta: pode conter configurações já retiradas, credenciais expostas ou exceções expiradas. A equipe deve identificar a origem, a data e o propósito da referência antes de usá-la como base de restauração.

Os mecanismos de replicação fazem parte da análise porque controladores compartilham alterações conforme a topologia e o estado do ambiente. Uma divergência pode decorrer de falha de comunicação, atraso operacional, recuperação recente ou incidente. Confirme a saúde do serviço e compare os dados em fontes distintas antes de interpretar qualquer diferença como adulteração. Se a equipe suspeita que a própria administração esteja comprometida, valide a coleta por um canal independente e envolva especialistas capazes de preservar a evidência sem introduzir novas alterações inadvertidas.

### Estações, servidores e fontes externas ao diretório

A equipe deve preservar evidências antes de ações que as apaguem ou sobrescrevam, dentro dos limites de continuidade e segurança. Isso pode significar exportar registros, documentar o estado de configuração, registrar os responsáveis e horários, ou acionar coleta forense autorizada. Capturas de tela podem apoiar a comunicação, mas raramente substituem dados estruturados e metadados. Se a prioridade operacional exigir desligamento ou isolamento imediato, registre a razão, o momento e os dados que não puderam ser coletados.

## Decisões de contenção

### Proteger primeiro a capacidade de administrar

Antes de desabilitar identidades, confirme quais contas e estações a equipe ainda pode usar para responder, quais são as vias de emergência e como será validada a legitimidade dessas vias. Mantenha mais de uma pessoa autorizada no processo para decisões de alto impacto e registre quem executa cada mudança. O objetivo é impedir que uma ação de contenção deixe a organização sem meios confiáveis para administrar controladores, restaurar serviços ou verificar o resultado.

A contenção pode combinar medidas no plano de identidade e no de rede: limitar o uso de uma conta, retirar temporariamente uma atribuição privilegiada, restringir a estação de origem, bloquear um caminho de administração ou suspender uma integração. Cada medida precisa ter um responsável, um escopo, um efeito esperado, uma forma de reversão e uma checagem posterior. Uma ação ampla pode ser necessária diante de risco iminente, mas a equipe deve registrar por que a urgência superou o custo de indisponibilidade.

### Quando bloquear uma conta ou uma sessão

Revogar sessões ou redefinir credenciais pode reduzir oportunidades de reuso, mas o alcance depende do tipo de credencial e do serviço. Avalie tickets, tokens, conexões persistentes, credenciais em cache e mecanismos de federação relacionados, além de sistemas que não consultam o diretório em cada operação. Uma alteração de senha deve seguir a sequência compatível com a arquitetura e com as dependências. Verifique autenticações posteriores e erros funcionais; não assuma que a mudança propagou ou invalidou tudo porque a interface confirmou a operação.

### O risco específico das contas de serviço

Contas de serviço podem sustentar tarefas agendadas, aplicações, integrações, agentes de monitoramento, rotinas de backup e componentes cuja dependência não está bem documentada. A rotação indiscriminada pode provocar falhas em cascata, indisponibilidade silenciosa ou perda de dados. Por outro lado, manter uma credencial suspeita sem controle pode preservar acesso indevido. O equilíbrio exige mapear uso observado e declarado, proprietário técnico, sistemas consumidores, janela de manutenção, método de atualização e caminho para validar a aplicação após a troca.

Planeje a rotação com o responsável pelo sistema. Determine a ordem de atualização dos consumidores, como validar autenticação e função, quais dependências podem permanecer em cache e como voltar a um estado seguro se a aplicação falhar. Se há suspeita de uso ativo, pode ser necessário conter primeiro o acesso da conta ou reduzir seu escopo enquanto a migração é preparada. Se a rotação é a medida escolhida, faça-a em grupos controlados, monitore erros e confirme que os consumidores deixaram de depender da credencial anterior. Uma troca em lote sem evidência de uso e sem coordenação pode transformar um incidente de identidade em uma interrupção generalizada.

## Papéis e coordenação

### Quem decide e quem executa

A liderança do incidente define prioridade, tolerância a indisponibilidade, nível de escalonamento e critérios para declarar contenção. A equipe de identidade conhece topologia, controladores, delegações e procedimentos de recuperação. Operações de infraestrutura administra servidores, rede, virtualização, cópias e estações. Segurança monitora sinais, preserva evidência e mantém a análise de hipóteses. Proprietários de aplicações informam dependências e validam comportamento funcional. Continuidade de negócios avalia serviços essenciais e alternativas. Jurídico, privacidade e comunicação entram conforme a natureza dos dados, obrigações e audiência, seguindo a governança da organização.

Defina um canal de coordenação que continue acessível se o domínio afetado não estiver confiável. Registre decisões em local com acesso restrito e retenção apropriada. Evite instruções ambíguas como “limpar o administrador” ou “resetar tudo”; especifique identidade, objeto, escopo, janela, responsável, efeito esperado e plano de validação. A comunicação com usuários deve informar impacto e procedimento sem expor detalhes que permitam contornar a contenção.

### Especialistas externos e limites de autoridade

## Cenários hipotéticos e decisões diferentes

### Mudança privilegiada sem chamado

A equipe preserva o evento e o estado atual do grupo, consulta o processo de mudanças e contata os responsáveis por canal confiável. Em paralelo, verifica autenticações da conta, estação de origem e atividade subsequente da nova associação. Se não houver explicação autorizada e o risco permanecer, pode remover a associação ou limitar a conta após confirmar que há capacidade administrativa alternativa. Registra a decisão e observa se novas alterações ocorrem. O grupo restaurado é validado por membro autorizado, e o caso permanece aberto até que a origem e o alcance sejam avaliados. O alerta não prova autoria humana nem extensão para toda a floresta.

### Política alterada com efeito amplo

A equipe identifica o vínculo e o escopo da política, consulta o proprietário da aplicação, verifica o estado de replicação e recolhe uma amostra controlada das máquinas afetadas. Antes de reverter, estima os efeitos funcionais e compara com uma versão validada. Se o risco de manter a configuração for maior que o risco de interrupção, pode aplicar uma correção delimitada e monitorar a propagação. Se não há referência confiável, a decisão pode ser manter isolamento de segmentos ou restringir a aplicação da política enquanto se reconstrói a configuração aprovada. A reversão é confirmada em controladores e clientes; o simples ato de editar a política não demonstra que todos os consumidores convergiram.

### Conta técnica com proprietário desconhecido

A equipe identifica os sistemas que autenticaram com a conta no período relevante, consulta operações e negócio, verifica se a aplicação é necessária e procura documentação de transferência. Enquanto busca um proprietário, pode reduzir exposição por meio de restrições compatíveis, alertas de uso e contenção de origem, com acompanhamento. Caso a credencial precise ser rotacionada, combina a mudança com testes da função e um caminho de recuperação. Se nenhum uso legítimo for encontrado e a desativação for autorizada, mantém monitoramento para detectar dependências não mapeadas e registra o critério que levou à retirada.

### Divergência entre controladores

O responsável por identidade preserva os resultados e consulta a saúde da topologia, a linha do tempo de manutenção, os registros de replicação e a referência aprovada. Se há sinais adicionais de alteração privilegiada, a prioridade é limitar mudanças não autorizadas e obter orientação especializada antes de propagar uma correção potencialmente destrutiva. Se a causa é operacional e confirmada, a equipe segue o procedimento de reparo documentado e verifica convergência. Em ambos os casos, registra qual fonte foi considerada confiável e por quê.

### Sinal limitado a uma conta de usuário

Se não surgem conexões com administração, políticas ou contas técnicas, a resposta pode permanecer delimitada, com monitoramento proporcional e fechamento documentado. Se aparecem novas evidências de uso de estação administrativa ou de alteração de objetos, o escopo se expande. Esse cenário ilustra por que a resposta não deve presumir comprometimento total nem encerrar a investigação apenas porque a conta foi redefinida.

## Erros frequentes que aumentam o custo do incidente

### Ações abrangentes sem mapa de dependências

### Confundir remoção de acesso com erradicação

Retirar uma conta de um grupo remove uma atribuição específica, mas pode não encerrar sessões existentes, corrigir permissões delegadas, invalidar credenciais em cache ou retirar outros caminhos de administração. Restaurar uma política conhecida não corrige necessariamente um controlador ou estação comprometidos. A equipe precisa verificar os mecanismos que permitiam a ação e os que podem mantê-la, não apenas apagar o objeto mais visível.

### Usar uma referência não validada

### Alterar sistemas antes de preservar o que importa

### Assumir que ferramenta ou relatório é prova conclusiva

### Fechar o caso após o serviço voltar

A disponibilidade recuperada não significa que a confiança foi restaurada. O serviço pode funcionar enquanto uma atribuição indevida continua presente, enquanto uma credencial antiga permanece ativa ou enquanto os logs não foram revisados. O encerramento precisa considerar contenção, remoção da causa provável, validação técnica, monitoramento e comunicação aos responsáveis. Se algo não pôde ser determinado, registre a incerteza e o risco aceito por quem tem autoridade.

## Como avaliar a qualidade da resposta

Avalie também a capacidade de manter administração confiável durante o caso. Quem aprovou as mudanças? Havia uma alternativa de emergência validada? Os responsáveis por aplicações participaram antes das rotações? As alterações críticas foram revisadas por outra pessoa? Houve registro de efeito colateral e reversão? As respostas devem apontar procedimentos que funcionaram e dependências frágeis que precisam de investimento, não culpados individuais por falhas sistêmicas.

Os critérios de encerramento devem ser definidos antes de declarar o incidente resolvido. Podem incluir ausência de novas alterações não autorizadas durante uma janela acordada, explicação suficiente para as alterações conhecidas, revisão dos caminhos privilegiados relevantes, confirmação dos serviços essenciais e plano para lacunas remanescentes. Não prometa que nenhuma persistência existe se a cobertura não permite essa conclusão. Declare o alcance da validação e o que ficou fora dela.

## Exercício de mesa ou laboratório autorizado

### Preparação

Prepare artefatos benignos: um alerta sintético, um registro de mudança aprovado, uma alteração de grupo simulada, um histórico de política fictício, um mapa de aplicação e uma lacuna deliberada de inventário. Identifique claramente tudo como material de exercício. Não reutilize nomes, endereços, segredos ou dados pessoais reais. O facilitador deve saber quais fatos estão confirmados no roteiro, quais pistas são ambíguas e quais informações só serão fornecidas se a equipe fizer perguntas apropriadas.

### Injeções e decisões

Em seguida, o facilitador revela que uma conta técnica usa a mesma atribuição em um serviço essencial, e que o inventário está desatualizado. A equipe precisa decidir como limitar a exposição sem fazer rotação às cegas. Depois, uma diferença de política aparece em um controlador, enquanto outro mostra o estado anterior. Os participantes devem explicar que evidência falta, como a replicação pode influenciar a leitura e quem autoriza uma correção. O roteiro não exige uma única ação; avalia justificativa, escopo, impacto, reversibilidade e validação.

### Debriefing e aprendizado

Após o exercício, reconstrua a linha do tempo das decisões. Separe fatos do roteiro, hipóteses dos participantes e suposições que passaram sem validação. Identifique onde a equipe perdeu tempo por falta de proprietário, acesso de emergência, inventário ou critério de aprovação. Registre mudanças concretas: quem mantém o mapa de dependências, como registrar a referência de política, qual canal de crise funciona sem o domínio e como os serviços serão validados depois de rotação.

## Roteiro de implementação para antes e durante um incidente

### Preparação contínua

Mantenha um inventário dos controladores, domínios, relações de confiança, estações de administração e ferramentas que alteram o diretório. Registre responsável técnico, criticidade, dependências e canais para contato. O inventário precisa ter um processo de atualização ligado a mudanças reais; uma lista criada uma vez e abandonada oferece falsa confiança. Inclua fontes e data de revisão para que a equipe reconheça informação antiga.

Configure auditoria e encaminhamento centralizado compatíveis com as necessidades de investigação e a capacidade de armazenamento. Revise a cobertura para alterações de grupos e políticas, logons privilegiados, uso de contas técnicas e saúde de replicação. A equipe deve saber que período está disponível, quem pode consultá-lo e como exportar evidência. Ajustes de auditoria devem ser planejados para evitar volume inútil e preservar sinais relevantes; teste a coleta em ambiente autorizado antes de depender dela em crise.

### Primeiras horas de resposta

Declare um líder e um canal de coordenação. Registre a hora de detecção, fontes iniciais, sistemas envolvidos e impacto aparente. Não transforme a primeira descrição em conclusão. Determine se há atividade em andamento e se existe risco imediato para disponibilidade ou integridade. Preserve registros e estado pertinentes; se a contenção urgente vier primeiro, anote a limitação e siga com coleta complementar.

Comunique aos proprietários de serviços afetados o que precisam saber para manter operação e validar mudanças. Para contas técnicas, não faça rotação sem compreender consumidores e sequência; se o risco exigir ação imediata, planeje contenção e suporte funcional em paralelo. Preserve uma trilha de decisões suficiente para que outra equipe possa continuar o trabalho no próximo turno. Faça passagem de plantão com estado atual, ações concluídas, efeitos, dúvidas e próxima decisão pendente.

### Recuperação e estabilização

Renove credenciais conforme uma ordem definida pela dependência e pelo risco, registrando cada lote e sua validação. Considere contas administrativas, contas de emergência, contas técnicas e credenciais de integrações separadamente. A ordem exata depende de como os sistemas autenticam e de quais mecanismos foram expostos. Não publique senhas em tickets, mensagens ou scripts; use os mecanismos aprovados pela organização. Verifique se as credenciais antigas deixaram de ser aceitas onde isso puder ser observado com segurança.

Encerre com um registro de fatos confirmados, hipóteses não resolvidas, evidência preservada, mudanças executadas, serviços validados e riscos aceitos. Atribua melhorias a responsáveis e acompanhe-as até serem implantadas. Atualize inventários e procedimentos usando o que foi aprendido, com revisão dos donos. A recuperação só é sustentável quando a organização consegue repetir as verificações sem depender da memória de uma pessoa que participou do incidente.

## Perguntas frequentes

### Todo alerta de alteração em grupo significa que o domínio foi comprometido?

### Devo redefinir imediatamente todas as senhas administrativas?

Não existe uma ordem universal que seja segura para qualquer ambiente. Se há risco ativo, credenciais privilegiadas podem exigir contenção urgente, mas a equipe precisa manter acesso administrativo confiável e considerar sessões, dependências, sistemas de recuperação e propagação. Defina a sequência com responsáveis por identidade e infraestrutura, preserve evidências pertinentes e valide cada etapa. Uma redefinição ampla e descoordenada pode aumentar a indisponibilidade sem resolver mecanismos que não dependem daquela senha.

### Uma conta de serviço suspeita deve ser desativada na hora?

### A ausência de registros de auditoria mostra que nada aconteceu?

Não. Primeiro é preciso saber se a auditoria cobria o evento, se a coleta estava funcionando, qual retenção existia e se o período está íntegro. Sem essa informação, a ausência é uma lacuna. Correlacione outras fontes disponíveis, como ferramentas de gestão, estação de origem, sistema de chamados e telemetria de rede, sem tratar nenhuma delas como substituto perfeito. Documente o limite da conclusão.

### Quando se justifica uma recuperação ampla do ambiente?

### Como demonstrar que o ambiente está estável após a contenção?

## Leitura complementar e limites
