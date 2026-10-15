# Zero Trust

## Conceito e princípio de defesa

Zero Trust, ou confiança zero, é uma abordagem de arquitetura e operação de segurança que exige verificar continuamente o acesso considerando identidade, dispositivo e contexto, e limitar cada privilégio ao necessário. Seu princípio é não conceder confiança ampla só porque uma conexão vem da rede corporativa, usa um endereço conhecido ou já foi autenticada. Cada pedido deve ser avaliado para o recurso e a ação específicos, segundo uma política explícita e os sinais disponíveis naquele momento.

“Zero” não significa presumir que toda pessoa ou equipamento é malicioso, nem bloquear tudo sem exceção. Significa não usar localização de rede ou relação anterior como prova suficiente de legitimidade. Uma autenticação válida pode ser necessária, mas não garante que a sessão continue legítima, que o aparelho esteja em condição aceitável ou que o usuário precise de todos os recursos ao seu alcance.

A abordagem muda o foco de um perímetro único para decisões menores em torno de aplicações, bases de dados, funções administrativas e operações sensíveis. Isso pode reduzir o alcance de uma conta comprometida e tornar regras de acesso mais específicas. Não elimina redes, controles de borda ou resposta a incidentes; define como esses controles se combinam.

## Como a decisão de acesso funciona

Uma decisão consistente considera quem ou o que solicita acesso, qual recurso está sendo pedido, qual ação será executada e quais condições se aplicam. A identidade pode ser de uma pessoa, conta de serviço ou equipamento. A política também pode avaliar função, autenticação recente, estado do dispositivo, origem, horário, sensibilidade do recurso e risco observado. O peso dos sinais depende da organização: nenhum deles, isoladamente, substitui uma política clara.

Em geral, o fluxo identifica o solicitante, avalia atributos e contexto, aplica uma regra, concede acesso delimitado e registra o resultado. A verificação pode ocorrer na autenticação inicial e ser reavaliada durante a sessão ou em novos pedidos. Se a credencial for revogada, o dispositivo deixar de atender aos requisitos ou outro sinal relevante mudar, a política pode exigir nova verificação, reduzir o acesso ou encerrar a sessão. “Continuamente” não quer dizer pedir senha a cada clique; quer dizer que a autorização não fica imune a mudanças relevantes.

A autorização deve refletir a necessidade real. Poder consultar dados não implica poder exportá-los, alterá-los ou administrar o sistema. Privilégios temporários e elevação controlada podem substituir permissões administrativas permanentes. Para contas não humanas, a mesma disciplina limita sistemas acessíveis, finalidade e duração de credenciais ou permissões, além de registrar seu uso.

A implementação depende de componentes integrados: provedores de identidade, gestão de dispositivos, mecanismos de autorização, controles de rede ou aplicação, proteção de dados e coleta de eventos. Uma regra exibida em um console não protege o recurso se não controla o caminho efetivo até ele. As políticas precisam de responsáveis, sinais confiáveis e aplicação coerente com o que foi documentado.

## Quando é útil

Zero Trust é útil quando o perímetro tradicional já não descreve bem os caminhos de acesso: trabalho remoto, nuvem, aplicações distribuídas, integração entre organizações e uso de dispositivos diversos são exemplos. Também pode ajudar em redes internas extensas e ambientes híbridos, nos quais grupos distintos precisam de níveis diferentes de acesso.

A abordagem é relevante quando o comprometimento de uma conta pode se propagar. Políticas por recurso, privilégios mínimos e segmentação podem restringir o que aquela conta alcança. Isso ajuda a separar consulta, alteração e administração; produção e desenvolvimento; ou aplicações que contêm dados de sensibilidades distintas.

O conceito também serve para revisar controles existentes. Além de perguntar se há VPN ou firewall, a equipe pode verificar quem acessa cada recurso, quais atributos influenciam a decisão, como a permissão é revogada e que evidência confirma o funcionamento do controle. Essas perguntas revelam permissões herdadas, contas esquecidas, dependências técnicas e lacunas de registro.

## Evidências em uma investigação

A investigação pode encontrar políticas do provedor de identidade, requisitos de autenticação, regras de acesso condicional, inventário de dispositivos, permissões de aplicações, listas de autorização, configuração de proxies, segmentação e registros de auditoria. Um produto ou uma política com esse nome não prova implantação de ponta a ponta. É necessário verificar se o controle alcança o recurso investigado e se os eventos mostram o resultado esperado.

Evidências úteis incluem a identidade usada, método e resultado da autenticação, dispositivo associado, atributos avaliados, recurso solicitado, decisão de permitir ou negar e regra aplicada. Registros de concessão e revogação ajudam a determinar se o privilégio era permanente, temporário ou excepcional. Fluxos entre serviços e contas de máquina também importam: parte relevante do acesso ocorre sem uma pessoa interagindo diretamente.

Na linha do tempo, diferencie a concessão inicial do uso posterior. Uma aprovação legítima em certo momento não explica automaticamente todas as ações seguintes. Correlacione eventos de identidade, dispositivo, aplicação, rede e dados, considerando diferenças de relógio e atrasos de ingestão. Se os atributos usados na decisão não foram registrados, declare a lacuna em vez de preencher a informação por suposição.

Uma negativa mostra que uma política impediu uma tentativa, mas não determina a intenção de quem a fez. Muitas negativas podem decorrer de configuração errada, mudança legítima ou atividade hostil. Uma autorização tampouco prova que o usuário pretendido controlava a sessão: credenciais, tokens ou dispositivos podem estar comprometidos. A interpretação depende do conjunto de sinais.

## Distinções importantes

Zero Trust não é um produto, marca ou tecnologia única. Uma plataforma pode fornecer recursos importantes, mas a abordagem exige políticas, inventário, integração, segmentação, observabilidade e revisão. Comprar uma solução ou habilitar uma opção rotulada “zero trust” não demonstra que os acessos estão limitados e reavaliados.

Não significa “não confiar em ninguém” no sentido pessoal. É uma regra operacional sobre acesso, baseada em evidência e política. Pessoas e parceiros continuam realizando trabalho legítimo; os controles devem permitir esse trabalho com escopo proporcional e registro. A abordagem não presume que toda solicitação seja maliciosa, mas impede que familiaridade ou posição na rede substituam a verificação.

Não equivale a autenticação multifator. Esta fortalece a comprovação de identidade em determinadas etapas, mas não define quais recursos essa identidade pode acessar, se o dispositivo é aceitável, como a sessão será acompanhada ou como o privilégio será reduzido. Tampouco equivale a uma VPN: ela pode proteger a conexão remota, mas o acesso amplo à rede após a conexão ainda pode deixar recursos expostos.

Segmentação e menor privilégio são conceitos relacionados, não substitutos. Segmentar zonas limita alguns caminhos, mas sem regras alinhadas a identidade e recurso pode restar confiança excessiva. O menor privilégio restringe permissões à necessidade; Zero Trust combina esse princípio com avaliação contextual, verificação durante o acesso e aplicação coerente de políticas.

“Verificar continuamente” também não significa repetir autenticação sem motivo nem inspecionar todo conteúdo de toda comunicação. Significa reavaliar decisões conforme a política e mudanças relevantes. Coletar mais dados não torna a decisão automaticamente melhor e pode criar riscos de exposição e retenção. O desenho precisa equilibrar segurança, privacidade, disponibilidade e facilidade de uso.

## Limitações e falhas comuns

A abordagem depende de inventário e classificação razoáveis. Se a organização não sabe que um sistema existe, quem o administra ou quais dados contém, dificilmente definirá controles adequados. Inventários desatualizados favorecem permissões órfãs, políticas incompletas e aparelhos tratados como gerenciados depois de perderem essa condição. Manter essas informações é atividade contínua.

Políticas permissivas podem reproduzir o problema sob uma interface moderna. Regras vagas, exceções permanentes e grupos amplos tornam a verificação formal e ineficaz. No extremo oposto, controles rígidos sem recuperação interrompem serviços e incentivam atalhos, como contas compartilhadas. Exceções devem ter motivo, escopo, responsável, prazo e registro; sua necessidade deve ser revista.

Sinais de identidade e dispositivo podem faltar, chegar atrasados ou estar comprometidos. Quem controla uma sessão legítima pode herdar parte do contexto. Uma pontuação opaca pode negar usuários válidos sem explicar a causa ou permitir uma sessão indevida sem que a equipe consiga auditar a decisão. É essencial saber quais sinais são usados, como a falta deles é tratada e como corrigir decisões incorretas.

Sistemas antigos podem não aceitar autenticação moderna ou autorização granular; aplicações podem manter contas locais que contornam o provedor central; serviços podem depender de fluxos não documentados. Aplicar controles sem mapear essas dependências causa indisponibilidade ou exceções difíceis de controlar. A priorização por risco e a coordenação com responsáveis técnicos ajudam a modernizar sem perder de vista a operação.

A centralização também cria dependências. A indisponibilidade de um provedor de identidade pode afetar vários serviços; seu comprometimento pode ampliar o impacto. A arquitetura precisa considerar continuidade, proteção administrativa, recuperação de contas e segregação de funções. Além disso, dados de localização, comportamento e estado de dispositivos exigem finalidade, controle de acesso e retenção definidos. Uma implantação madura explica por que coleta cada atributo e quem pode consultá-lo.

## Perguntas frequentes

### A rede interna deixa de ter valor?

Não. A rede continua sendo uma fonte de contexto e pode aplicar controles úteis. O que muda é que ela deixa de ser prova suficiente para conceder acesso amplo. Uma conexão interna pode ser legítima, comprometida ou originada de aparelho mal configurado; a decisão também considera identidade, recurso e política.

### É preciso reautenticar a cada ação?

Não. A frequência depende da sensibilidade, do risco e das regras. Uma sessão pode permanecer válida enquanto as condições forem adequadas, e uma mudança relevante pode provocar nova verificação. Repetir desafios sem critério prejudica a operação sem garantir decisões melhores.

### É possível adotar o conceito sem trocar todos os sistemas?

Sim, de forma gradual, reconhecendo os limites dos sistemas que ainda não oferecem controles compatíveis. Integrações, mudanças de processo ou substituições podem ser necessárias em pontos específicos. A organização deve registrar onde as políticas são efetivas e onde restam lacunas, em vez de declarar cobertura total sem evidência.

### Como avaliar se está funcionando?

Verifique se o acesso a recursos prioritários segue políticas explícitas, se as permissões correspondem à necessidade, se mudanças relevantes afetam decisões e se os registros permitem reconstruí-las. Exercícios autorizados de revisão e resposta podem confirmar que revogações, restrições e alertas funcionam como previsto. Uma política publicada sem validação do caminho real não basta.

## Relação com o capítulo 4

No capítulo 4 da versão original, Zero Trust pode ser compreendido como uma abordagem defensiva para organizar decisões de acesso e limitar o alcance de uma intrusão. Seu valor está na combinação de identidade, condição do dispositivo, contexto, privilégio mínimo, segmentação e observabilidade. O conceito orienta perguntas sobre como uma conta chega a um recurso e quais controles podem interromper essa cadeia; não promete impedir todo comprometimento.
