# Detecção de incidentes em nuvem

## A pergunta central: como perceber que uma ação na nuvem exige investigação?

Uma conta de nuvem recebe solicitações legítimas de pessoas, aplicações, serviços gerenciados e integrações. Algumas dessas solicitações criam recursos, alteram políticas, emitem credenciais ou mudam a exposição de dados. A pergunta prática não é apenas “houve uma atividade incomum?”, mas: qual ação ocorreu, sob qual identidade, sobre qual recurso, por qual caminho, com que resultado e em que contexto operacional?

## O que significa detectar na nuvem

### Plano de controle, plano de dados e execução

O plano de controle reúne as operações para criar, consultar, modificar ou excluir recursos e suas configurações. Exemplos defensivos incluem a criação de uma identidade, a alteração de uma política de acesso, a mudança de regras de rede e a configuração de um armazenamento.

### Eventos, alertas e provas

Um evento é um registro de uma ocorrência observada. Um alerta é uma interpretação automatizada ou humana de um ou mais sinais que merecem atenção. Uma prova é evidência examinada com contexto suficiente para sustentar uma conclusão dentro de limites definidos. Essa distinção impede que uma regra seja tratada como veredito. Um alerta de criação de credencial não confirma uso indevido; um evento de autenticação bem-sucedida não estabelece que a pessoa titular realizou a ação; um endereço de origem inesperado não demonstra, sozinho, invasão.

## Contexto que transforma telemetria em sinal

### Inventário e criticidade dos recursos

A mesma ação tem significados diferentes em contas e ambientes distintos. Uma nova chave numa conta de desenvolvimento pode fazer parte de uma migração planejada; a mesma ação em uma identidade com acesso a dados sensíveis precisa de escrutínio maior. O inventário deve relacionar contas, projetos ou assinaturas, regiões, serviços, proprietários, ambientes, dados tratados e dependências relevantes.

### Linha de base por conta, serviço e identidade

Uma linha de base descreve o comportamento operacional esperado com detalhe suficiente para reconhecer desvios relevantes. Não é um retrato imutável nem uma lista de ações universalmente permitidas. Pode incluir quais funções normalmente alteram recursos, em quais janelas ocorrem implantações, quais regiões uma aplicação usa, quais identidades assumem determinados papéis e quais tipos de operação são raros.

## Fontes de evidência e limites de observação

### Auditoria do provedor e trilhas de administração

Os registros de auditoria do provedor são a base para reconstruir operações do plano de controle. Verifique quais contas, regiões e serviços são cobertos, que tipos de evento são incluídos, se operações de leitura e gravação estão disponíveis e como o serviço representa chamadas feitas por serviços em nome de usuários.

### Identidade e autenticação

A trilha de identidade pode incluir autenticações, falhas, emissão e uso de credenciais, elevação de privilégios, delegação e sessões assumidas. A correlação exige compreender o ciclo de vida das identidades: pessoas, contas de serviço, papéis temporários, federação, provedores de identidade e integrações externas. Um identificador de sessão não deve ser confundido automaticamente com a pessoa final; uma chamada de serviço pode carregar contexto delegado; uma credencial compartilhada reduz a capacidade de atribuição.

### Configuração, postura e estado efetivo

Uma configuração atual indica como um recurso está definido no momento da consulta. Um evento de auditoria mostra uma ação em determinado instante. Para explicar impacto, muitas vezes são necessários ambos, além do histórico de alterações. Políticas podem herdar permissões, combinar regras, depender de condições, exceções e configurações em nível organizacional.

### Dados, aplicação e execução

Sinais do plano de dados e da aplicação podem revelar o que aconteceu depois de uma alteração administrativa. Logs de acesso a objetos, auditoria de banco, trilhas de consulta, registros de gateway, autenticação da aplicação e telemetria do ambiente de execução podem responder perguntas distintas. Antes de depender de uma fonte, confirme se ela está habilitada, se cobre o serviço e a operação, qual identificador permite correlação, qual é sua latência e como são protegidos os dados registrados.

### Rede, DNS e fluxos entre serviços

A telemetria de rede complementa a visão de API e identidade: pode mostrar conexões entre componentes, alterações de rota, fluxos para destinos externos ou padrões incompatíveis com o desenho. Não costuma dizer, sozinha, qual objeto foi consultado nem qual pessoa autorizou a chamada. Tradução de endereços, proxies, gateways gerenciados e tráfego interno de serviços podem dificultar a atribuição.

## Decidir o que merece alerta

### Ações de alto impacto

Regras de alta prioridade devem focar operações cujo efeito potencial justifica resposta rápida. Exemplos são mudanças que ampliem acesso a dados sensíveis, criação ou alteração de credenciais privilegiadas, concessão de novas permissões administrativas, desativação de controles de auditoria, alteração do destino de logs, mudanças críticas de rede e exclusão de recursos que sustentam serviços essenciais.

### Correlação e sequência temporal

Eventos isolados raramente contam a história inteira. Uma cadeia hipotética pode começar com uma autenticação incomum, seguir com a assunção de um papel, criar uma credencial, ampliar uma permissão e terminar com leitura de dados. Cada elo precisa de identificadores e janelas de tempo compatíveis. A equipe deve testar a qualidade da correlação com eventos legítimos de automação e com identidades assumidas, evitando juntar atividades distintas apenas porque ocorreram perto no relógio.

### Alertas de exposição e comprovação de acesso

Uma configuração que permite acesso externo merece avaliação imediata de escopo e necessidade. A pergunta inicial é se a exposição é efetiva, se era prevista, quais dados ou funções estão acessíveis e desde quando. Em seguida, procure evidências de acesso conforme os registros disponíveis. A existência de um caminho público não demonstra que houve leitura; a ausência de registros de acesso não demonstra que não houve, se a auditoria pertinente estava desabilitada ou incompleta.

## Exemplos defensivos hipotéticos

### Chave criada fora do fluxo esperado

Cenário hipotético: um serviço de produção normalmente usa credenciais temporárias, mas surge uma credencial persistente vinculada a uma identidade de aplicação. O evento de criação é fato observável se a auditoria o registrou. A hipótese é que alguém esteja preparando acesso duradouro; outra hipótese é uma migração autorizada que não foi comunicada.

### Permissão ampliada numa implantação

Cenário hipotético: uma alteração de infraestrutura concede a uma função automatizada acesso de leitura a um conjunto maior de armazenamento. O pipeline e a identidade que executou a mudança são conhecidos, mas o escopo diverge do plano revisado. O fato confirmado é a alteração registrada e sua configuração final; a hipótese é que tenha sido erro de template, aprovação incompleta ou abuso da identidade de implantação.

### Acesso de terceiro e identidade federada

Cenário hipotético: um fornecedor usa federação para operar uma integração, e uma sessão aparece em horário e conta inesperados. A equipe não conclui que a conta foi tomada apenas pelo horário. Verifica o contrato e o escopo vigente, o identificador federado, a sessão, as operações chamadas, os recursos alcançados e os registros do provedor de identidade do fornecedor que estejam disponíveis segundo o acordo.

### Mudança inesperada no destino de logs

Cenário hipotético: a política de entrega da auditoria aponta para um destino diferente, ou a taxa de ingestão cai sem mudança planejada. Isso pode resultar de manutenção, falha técnica, configuração equivocada ou tentativa de reduzir visibilidade. A evidência inicial pode ser o evento de alteração, uma lacuna temporal ou uma métrica de ingestão.

### Exfiltração presumida sem evidência suficiente

Cenário hipotético: uma equipe vê tráfego de saída maior que o habitual e suspeita de extração de dados. Antes de declarar exfiltração, identifica o workload e o destino, verifica alterações recentes, backups, replicação, exportações autorizadas e contexto de implantação. Cruza a evidência de rede com acessos ao armazenamento ou banco e com registros da aplicação, se disponíveis.

## Papéis e coordenação

A detecção envolve quem opera a plataforma, quem conhece a aplicação, quem administra identidades, quem monitora segurança, quem mantém dados e quem responde a obrigações de negócio. O centro de operações ou a função de resposta pode coordenar triagem, cronologia e registro de decisões; a equipe de nuvem explica semântica e estado dos recursos; o proprietário do serviço avalia impacto funcional; identidade e acesso esclarecem autenticação e federação; jurídico, privacidade ou conformidade participam quando a natureza dos dados e as regras internas exigirem.

## Erros recorrentes que degradam a detecção

### Habilitar muitos logs sem definir uso

Coletar todos os eventos possíveis pode produzir custos elevados, dados sensíveis desnecessários e volume que ninguém consegue analisar. Antes de ampliar, identifique pergunta, fonte, consumidor, retenção e responsável. Priorize eventos que sustentem decisões de alto impacto e lacunas de investigação conhecidas.

### Tratar atividade fora do padrão como ataque

Anomalias estatísticas são convites para investigar, não rótulos de autoria. Mudanças de arquitetura, projetos sazonais, correções emergenciais e automações novas alteram padrões. Se toda variação virar incidente crítico, as equipes podem começar a ignorar alertas. Se a normalização for automática, comportamento indevido pode se tornar rotina no modelo.

### Confiar no painel sem validar a trilha

Painéis agregam e transformam eventos. Uma visualização pode ocultar filtros, atrasos, campos ausentes ou falhas de ingestão. Em casos relevantes, consulte o registro de origem, verifique a consulta e confirme que a conta e o período estão cobertos. Preserve cópia ou referência íntegra conforme procedimento.

### Ignorar a integridade e a retenção

Uma retenção curta pode apagar evidência antes de uma descoberta tardia; permissões excessivas podem permitir alteração dos registros. O prazo adequado depende do risco, dos requisitos aplicáveis, do custo e do tempo típico até a detecção. Não há um único número universal.

### Confundir proprietário do recurso com responsável pela mudança

Uma tag de equipe indica provável dono, não necessariamente quem solicitou, aprovou ou executou uma alteração. Automações podem agir em nome de identidades técnicas. Registre a relação entre execução de pipeline, revisão de código, solicitação e principal da nuvem.

### Fazer contenção sem preservar contexto

Remover imediatamente um recurso pode limitar risco, mas também eliminar estado útil ou quebrar serviço crítico. Quando possível, preserve configuração e eventos antes da alteração, registre o que será mudado e envolva o responsável do serviço. Em risco iminente, a contenção pode ter precedência; ainda assim, documente a justificativa e use procedimentos de recuperação.

### Tratar ausência de alerta como garantia

A ausência pode refletir comportamento normal, mas também falta de fonte, regra incorreta, atraso, filtro, falha de encaminhamento ou lacuna de identidade. Monitore a própria capacidade de detecção: saúde das entregas, atraso, cobertura por conta e serviço, falhas de consulta e alterações na configuração de auditoria.

## Como avaliar a qualidade da capacidade

### Cobertura e completude

Avalie se contas, regiões, serviços e identidades relevantes estão inventariados e se as fontes necessárias estão ativas. Identifique lacunas por tipo: operação sem auditoria, recurso sem dono, integração sem atribuição, trilha sem retenção ou evento sem correlação. Uma lista de cobertura deve informar data da verificação e limitações, pois a arquitetura muda.

### Qualidade do alerta e triagem

Um alerta de boa qualidade explica o que ocorreu, onde, sob qual identidade aparente, qual recurso foi afetado, qual é o impacto potencial e quais fontes sustentam esses campos. Deve indicar o grau de incerteza e facilitar o próximo passo de validação. Reveja amostras de alertas encerrados como legítimos e de casos escalados: a regra distinguiu contexto relevante?

### Capacidade de reconstrução

Escolha casos autorizados ou simulações e verifique se a equipe consegue construir uma linha do tempo reproduzível. Ela consegue relacionar identidade, sessão, chamada, recurso, mudança de configuração e eventual uso subsequente? Consegue indicar quais fontes estavam indisponíveis? Um analista diferente consegue repetir a consulta e chegar às mesmas observações?

### Retenção e integridade

Confirme se os registros chegam a um domínio administrativo separado, se as permissões são revisadas e se alterações ou exclusões ficam registradas. Verifique a capacidade de pesquisar o período necessário e de preservar evidência para análise autorizada. A integridade pode envolver controles nativos de retenção, cópias protegidas e trilhas independentes, conforme capacidades do provedor e políticas internas.

## Exercício de mesa ou laboratório autorizado

Um exercício de mesa pode validar decisões sem realizar atividade contra sistemas de terceiros. Defina previamente objetivo, participantes, ambiente, escopo, facilitador, canais de comunicação e critérios para interromper. Use eventos sintéticos ou um ambiente de laboratório autorizado, sem dados reais sensíveis.

No laboratório, operadores podem produzir alterações benignas e previamente aprovadas em recursos descartáveis, seguindo o procedimento do provedor e sem expor serviços à internet. O teste deve observar se os eventos chegam ao destino, se os campos identificam corretamente a identidade e o recurso, se alertas disparam quando esperado e se a reversão funciona. Não use credenciais produtivas nem altere controles de auditoria de ambientes reais.

## Roteiro de implementação

### 1. Estabeleça escopo e perguntas prioritárias

Comece por contas e serviços de maior impacto, os dados que protegem e as identidades privilegiadas. Pergunte quais mudanças poderiam expor informação, interromper serviço ou remover visibilidade; quais evidências permitem descobrir essas mudanças; quem responderia; e que fontes faltam. Registre exclusões justificadas e prazo de revisão.

### 2. Mapeie fontes e semântica

Para cada pergunta prioritária, documente a fonte, o evento ou campo necessário, a cobertura, o atraso conhecido, a retenção, o proprietário e os controles de acesso. Consulte documentação atualizada do provedor e valide em ambiente autorizado. Distinga evento de administração, uso de dados, identidade, aplicação e rede.

### 3. Habilite coleta e proteja o destino

Ative os registros requeridos em todas as contas, regiões e serviços do escopo, verificando herança e exceções. Encaminhe para local de análise adequado, com permissões restritas, retenção definida e monitoramento de saúde. Separe quem administra a produção de quem pode modificar ou excluir evidências, tanto quanto a arquitetura permitir.

### 4. Normalize sem apagar contexto

Padronize campos de horário, conta, região, identidade, sessão, serviço, operação, recurso e resultado, preservando os valores originais. Resolva diferenças de nomes entre eventos sem presumir equivalência. Mantenha referências a identificadores técnicos e mapeamentos com controle apropriado. Documente transformações e campos ausentes.

### 5. Construa inventário e relações de propriedade

Associe recursos a aplicação, ambiente, classificação de dados e responsável. Relacione identidades a pessoa, equipe, workload ou fornecedor e documente mecanismos de delegação. Comece pelos elementos críticos e acompanhe cobertura e lacunas. Use processos de criação e desativação para atualizar o catálogo, e faça reconciliação periódica com descoberta do provedor.

### 6. Priorize regras com base no risco

Implemente detecções para ações de alto impacto e falhas de visibilidade antes de ampliar para anomalias genéricas. Inclua mudança, identidade, recurso, resultado, contexto esperado e próximos passos. Diferencie ação negada de efetivada, recurso de laboratório de produção e automação aprovada de operação não reconhecida.

### 7. Defina triagem e resposta

Escreva um procedimento breve por família de alerta: verificações iniciais, fontes para correlacionar, responsáveis, condições de escalonamento, medidas de contenção possíveis e cuidados para preservar evidência. Inclua como tratar falso positivo, fonte indisponível e identidade desconhecida.

### 8. Teste, ajuste e mantenha

Valide periodicamente o caminho da evidência e os alertas em ambientes autorizados. Revise regras após mudanças arquiteturais e avalie casos reais ou exercícios sem expor dados além do necessário. Acompanhe falhas de ingestão e mudanças nos controles de auditoria. Atualize inventário, linha de base, responsáveis e documentação quando uma conta ou fornecedor muda.

## Perguntas frequentes

### Logs de auditoria são suficientes para detectar incidentes?

Não. Eles são fundamentais para entender operações administrativas, mas podem não registrar uso de dados, comportamento da aplicação ou todos os detalhes de uma sessão. Combine-os com fontes de identidade, configuração, dados, rede e execução conforme o risco e a disponibilidade. Confirme a cobertura real de cada serviço e registre lacunas. Uma estratégia que depende de fonte desabilitada não oferece a evidência que seu desenho pressupõe.

### Uma chamada de API desconhecida confirma invasão?

Não. “Desconhecida” pode significar que a equipe ainda não mapeou uma automação, uma implantação ou uma integração. Verifique principal, sessão, serviço, recurso, resultado, janela operacional e mudança aprovada. Se a operação tiver alto impacto, investigue rapidamente mesmo sem atribuição. O alerta é um sinal; a conclusão depende de evidência e contexto.

### Como distinguir credencial nova legítima de abuso?

Confira a solicitação ou implantação que a motivou, o responsável pelo workload, o modelo de autenticação previsto, o escopo e a duração da credencial, os recursos que pode alcançar e se houve uso subsequente. Uma chave tecnicamente válida pode violar o padrão de segurança, ainda que criada para uma necessidade real.

### O que fazer se a auditoria estava desabilitada?

Restaure a coleta de forma controlada, registre o intervalo sem cobertura e determine contas, serviços e operações afetados. Busque fontes independentes, como identidade corporativa, pipelines, registros de aplicação e inventário de configuração, observando seus limites. A lacuna reduz o que pode ser confirmado; não autoriza concluir que nada ocorreu nem que houve ocultação deliberada.

### É necessário registrar toda operação de leitura?

Depende do serviço, da sensibilidade dos dados, do objetivo de investigação, do custo e das regras aplicáveis. Para dados críticos, a visibilidade de acesso pode ser essencial; em outros casos, detalhes extensos podem criar exposição e volume sem benefício claro. Avalie opções de auditoria por recurso, campos, amostragem quando apropriada, retenção e acesso.

### Como lidar com acesso de fornecedores?

Use identidades individuais ou federadas sempre que possível, privilégios delimitados, prazo e responsável interno. Registre escopo contratado, contas autorizadas, forma de autenticação, eventos que devem ser notificados e procedimento de suspensão. Compare atividade observada com a janela e os recursos acordados. A existência de contrato não torna todo uso esperado, e uma sessão incomum não demonstra má conduta: confirme pelos registros e pelo canal de gestão do fornecedor.

### Que retenção é adequada?

Não existe prazo universal. Defina-o a partir do tempo provável para descobrir uma atividade, da duração de investigações, de requisitos legais e contratuais, do custo e da minimização de dados. Separe registros operacionais de evidências preservadas para um caso, quando a política permitir. Verifique capacidade de retenção, proteção contra alteração e processo de acesso.

### Como reduzir falsos positivos sem esconder sinais importantes?

Contextualize por conta, serviço, identidade, ambiente, recurso e janela de mudança; agrupe eventos relacionados; diferencie sucesso de tentativa; e use exceções estreitas, aprovadas e com prazo. Revise amostras de alertas e documente o que a regra pretende identificar. Não reduza prioridade só porque um comportamento é frequente: confirme se é legítimo e se seus privilégios são apropriados.

### Quando um alerta deve ser tratado como incidente?

A política da organização define o limiar, considerando impacto potencial, credibilidade e necessidade de coordenação. Uma operação efetivada que amplie acesso a dados sensíveis pode justificar resposta mesmo antes de prova de uso indevido. Um desvio pequeno e explicado pode permanecer como evento ou solicitação de melhoria. Registre por que o limiar foi atingido, quem tomou a decisão e qual informação pode mudá-la.

### Como comunicar uma possível exposição?

Descreva o fato observado, o escopo conhecido, o período, as fontes consultadas, as incertezas e as medidas em curso. Use “exposição potencial” quando a configuração permitir acesso, mas não houver confirmação de acesso; use “acesso observado” apenas quando a telemetria sustentar isso. Não especule sobre autoria ou volume de dados sem evidência. Envolva as funções responsáveis por privacidade, jurídico e comunicação conforme os procedimentos internos e os requisitos aplicáveis.

## Relação com o capítulo sobre identificação e resposta a incidentes

A detecção na nuvem conecta identificação e resposta porque converte eventos distribuídos em uma cronologia que permite decidir com contexto. No capítulo 6 da versão original, a atuação de Black Teams na identificação e resposta a incidentes oferece uma referência para pensar coordenação, validação de sinais e passagem entre observação e ação. Aplicada a ambientes de nuvem, essa perspectiva pede que a equipe conheça as identidades, as APIs, a configuração e o estado de execução, e que trate evidências com rigor antes de afirmar causa ou impacto.



O livro de Hiago Kin Levi, publicado pela Editora Brasport, relaciona-se a esse capítulo e à atuação de equipes na identificação e resposta. A obra não substitui documentação técnica atualizada, treino nem julgamento da equipe.
