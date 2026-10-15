# SOAR

## Definição

SOAR é a sigla de *Security Orchestration, Automation and Response*, em português, orquestração, automação e resposta de segurança. Designa uma plataforma que integra ferramentas de segurança e automatiza etapas de triagem ou resposta segundo fluxos definidos. Seu papel é coordenar trabalho que, sem essa camada, dependeria de um analista alternar entre consoles, copiar dados e executar manualmente procedimentos repetidos.

A definição contém três ideias relacionadas, mas distintas. **Orquestração** é a coordenação entre sistemas, fontes de informação e responsáveis. **Automação** é a execução de tarefas previstas sem exigir que uma pessoa repita cada passo. **Resposta** é o conjunto de decisões e ações adotadas para tratar uma ocorrência, desde validar um alerta até conter um risco. Uma solução SOAR pode combinar essas capacidades em graus diferentes; o nome, por si só, não garante que todas estejam maduras ou plenamente integradas.

Um fluxo automatizado, também chamado de playbook ou procedimento, traduz uma sequência de trabalho em etapas e condições. Pode enriquecer um alerta com contexto, consultar fontes autorizadas, organizar evidências, encaminhar uma tarefa e, sob condições estabelecidas, solicitar ou executar uma ação. O fluxo deve deixar claro o que o sistema sabe, o que concluiu e qual decisão cabe a uma pessoa.

## Para que serve

Equipes de resposta recebem ocorrências em volume e formatos variados. A mesma triagem pode exigir identificar o ativo envolvido, consultar informações de identidade, verificar alertas relacionados, registrar o resultado no sistema de chamados e notificar a equipe responsável. Quando essas tarefas são repetitivas, previsíveis e sustentadas por dados acessíveis, a orquestração reduz alternâncias entre ferramentas e ajuda a aplicar procedimentos de maneira consistente.

SOAR é especialmente útil quando um processo atravessa ferramentas que não compartilham automaticamente o mesmo contexto. A plataforma pode receber um alerta de uma fonte, consultar outras, reunir resultados numa visão de caso e acionar o próximo passo. O valor depende, contudo, da qualidade das integrações e dos dados. Uma automação rápida sobre informação incompleta apenas acelera uma conclusão ruim.

## Como funciona em uma operação defensiva

A implementação concreta varia, mas um fluxo costuma começar com um evento que chega por integração, fila ou encaminhamento de um analista. A plataforma normaliza campos e associa informações disponíveis, como identificador do alerta, horário, ativo, conta relacionada e origem do dado. Essa normalização ajuda o fluxo a tratar eventos de formatos diferentes, mas pode perder nuances se os campos forem mapeados incorretamente.

Em seguida, o procedimento pode consultar sistemas autorizados para enriquecer o caso. Exemplos incluem inventário de ativos, diretório de identidades, ferramenta de gestão de vulnerabilidades, registros de endpoint ou histórico de chamados. O enriquecimento acrescenta contexto; não converte automaticamente uma suspeita em fato. Uma conta listada como privilegiada, por exemplo, pode explicar a relevância potencial de um alerta, mas não prova que houve uso indevido.

O fluxo então aplica condições explícitas: verificar presença de determinados dados, comparar critérios, classificar o caso ou selecionar uma rota. Condições simples são mais fáceis de revisar do que inferências opacas. Se houver lacuna, conflito ou falha de integração, o procedimento deve prever uma saída segura, como registrar a indisponibilidade e encaminhar para análise humana, em vez de tratar ausência de resposta como evidência de ausência de risco.

Por fim, o fluxo pode atualizar o registro, atribuir responsável, abrir uma tarefa, avisar uma equipe ou propor uma medida de contenção. A ação pode ser executada automaticamente, aguardando aprovação, ou apenas apresentada como recomendação. Essas modalidades devem ser distinguíveis nos registros. Uma aprovação precisa identificar quem autorizou, sobre qual evidência e em que momento; a execução deve deixar resultado verificável, inclusive quando falhar.

## Onde aparece na investigação

Na reconstrução de uma ocorrência, registros da plataforma podem responder perguntas como: qual alerta iniciou o fluxo? Quais consultas foram feitas? Que respostas retornaram? Qual regra encaminhou o caso? Houve aprovação? Qual sistema recebeu a ação e qual foi o resultado? A utilidade dessas respostas depende de retenção, sincronização de relógios, identificação inequívoca dos casos e preservação dos registros originais das ferramentas integradas.

Uma linha do tempo de SOAR deve ser lida como evidência do processo de coordenação, não como retrato completo do ambiente. Uma anotação dizendo que uma conta foi desabilitada pode comprovar que uma solicitação foi enviada ou que uma integração informou sucesso; talvez não prove, isoladamente, que todos os sistemas de identidade aplicaram a alteração. Sempre que a consequência for relevante, confronte o registro de orquestração com a fonte que executou a mudança.

## Evidências para reconhecer e avaliar

Para avaliar um fluxo específico, procure a versão do procedimento vigente no momento, o evento de entrada, os dados consultados, as condições avaliadas, os caminhos tomados e as saídas registradas. Compare o horário da plataforma com o dos sistemas de origem e destino. Verifique se o caso foi encerrado por uma regra, por ação humana ou por falha técnica. Uma execução marcada como concluída pode significar que o fluxo chegou ao fim, não necessariamente que o incidente foi resolvido.

## Exemplo hipotético

Imagine que uma equipe receba um alerta de possível acesso anômalo a uma conta corporativa. Um fluxo SOAR reúne o horário e o identificador do alerta, consulta o diretório para obter o estado e o nível de privilégio da conta, busca eventos correlatos na ferramenta de identidade e cria um caso com os resultados. Se as fontes estiverem indisponíveis ou discordarem, o caso é encaminhado para um analista com essa limitação explícita.

Suponha que o conjunto de sinais atenda a critérios previamente aprovados para elevar a prioridade. A plataforma pode registrar a justificativa e solicitar análise. Se a política permitir uma contenção automática de baixo impacto, o fluxo pode executar a medida e confirmar o resultado na ferramenta de destino. Para uma ação que interrompa o acesso de uma pessoa ou serviço, pode exigir aprovação conforme o procedimento local. O exemplo ilustra coordenação defensiva; os critérios concretos dependem do ambiente e da avaliação de risco.

## Distinções importantes

### SOAR e SIEM

Um SIEM concentra e correlaciona registros para detectar ou investigar eventos. Um SOAR pode receber alertas produzidos por um SIEM, complementá-los com contexto e coordenar etapas de resposta. Há sobreposição entre produtos e arquiteturas, e algumas plataformas reúnem funções de ambos. A diferença prática está no papel desempenhado no fluxo, não apenas no rótulo comercial: perguntar se a ferramenta está agregando e analisando eventos ou coordenando tarefas e ações ajuda a esclarecer o uso.

### SOAR e EDR

Uma solução EDR observa atividades em endpoints e oferece capacidades de investigação e resposta nesse domínio. O SOAR pode integrar-se ao EDR para consultar dados ou encaminhar uma contenção, mas não substitui a telemetria e os controles próprios do endpoint. Se o conector falha, a plataforma de orquestração não passa a ter visibilidade independente sobre o dispositivo.

## Limitações e modos de falha

A terceira limitação é o escopo de impacto. Uma ação automatizada pode bloquear uma conta legítima, isolar um equipamento crítico, interromper um serviço ou apagar contexto útil à investigação. Quanto maior o efeito, mais importante é limitar permissões, reduzir o escopo, exigir autorização apropriada e prever reversão ou recuperação. Aprovação humana não é uma formalidade: precisa ocorrer antes da ação, com informação suficiente para uma decisão responsável.

Há ainda o risco de a automação tornar o processo difícil de compreender. Fluxos extensos, dependências implícitas e alterações sem controle de versão dificultam explicar por que um caso tomou certo caminho. Documentação, revisão periódica, testes em condições controladas e registro de mudanças ajudam a manter a lógica auditável. O fluxo também deve permitir interrupção segura quando a equipe identifica um comportamento inesperado.

## Implicações para resposta a incidentes

Uma equipe deve decidir quais etapas são repetitivas, têm entradas confiáveis e produzem resultados observáveis antes de automatizá-las. Coleta de contexto, criação de caso, deduplicação cautelosa e encaminhamento previsível costumam ser candidatos mais simples do que contenção ampla. A prioridade é automatizar primeiro ações bem delimitadas e auditáveis, mantendo critérios de aprovação para medidas de alto impacto.

Cada playbook precisa ter responsável, propósito, limites, pré-condições, tratamento de erro e forma de validar o resultado. Deve indicar quais dados são necessários, quais sistemas serão consultados ou alterados, que identidade executará cada operação e quais situações interrompem a execução. Uma trilha de auditoria útil preserva a entrada relevante, as decisões do fluxo, aprovações, chamadas realizadas, respostas e horário, respeitando as regras de retenção e acesso do ambiente.

A resposta também deve considerar contingência. Se o SOAR estiver indisponível durante um incidente, a equipe precisa saber como prosseguir manualmente sem perder a coordenação. Se uma automação executar uma ação incorreta, deve haver um caminho definido para interromper execuções relacionadas, reverter quando possível, avaliar efeitos e preservar evidências. O procedimento de contingência faz parte da prontidão operacional, não é um detalhe posterior.

## Erros de interpretação

Um erro comum é presumir que SOAR decide sozinho o que é incidente. Em geral, ele operacionaliza lógica e procedimentos configurados, que podem depender de alertas de outras fontes e de escolhas humanas. Uma plataforma não torna um sinal confiável apenas por processá-lo; a qualidade continua ligada às fontes, às regras e à revisão.

Por fim, integração não significa interoperabilidade perfeita. Campos com nomes parecidos podem ter semânticas diferentes, horários podem divergir e identificadores podem não corresponder entre sistemas. Uma investigação deve confirmar a origem e o significado dos dados antes de tirar conclusões sobre a sequência dos fatos.

## Perguntas frequentes

### SOAR substitui analistas de segurança?

Não. Ele pode executar etapas definidas e repetitivas, mas análise de ambiguidade, avaliação de impacto, coordenação com áreas responsáveis e decisões de alto risco exigem julgamento e responsabilidade. O objetivo operacional é apoiar a equipe e tornar procedimentos explícitos, não presumir que toda ocorrência cabe numa regra.

### Um playbook pode conter ações automáticas?

Sim. A automação pode incluir ações de resposta, desde que escopo, autorização, condições e confirmação estejam definidos. A conveniência não basta para justificar uma medida: é necessário considerar consequências, possibilidade de erro e como interromper ou corrigir a execução.

### O que conferir quando o registro diz que uma ação teve sucesso?

Localize a chamada e a resposta registradas, identifique o sistema de destino e confirme a mudança nele ou por uma fonte independente adequada. Verifique também o horário, o objeto afetado e se a confirmação corresponde ao resultado desejado. Uma mensagem de sucesso do conector pode confirmar apenas o recebimento da solicitação.

## Relação com o capítulo

Na organização da versão original, o tema se relaciona ao capítulo 8 por tratar da coordenação da resposta. O ponto prático é reconhecer que o SOAR transforma procedimentos em fluxos executáveis e auditáveis. Seu benefício depende de limites claros, evidências preservadas e aprovação proporcional ao impacto das ações.
