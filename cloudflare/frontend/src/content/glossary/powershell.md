# PowerShell

## Conceito e escopo

PowerShell é um ambiente de comandos e automação usado para administrar sistemas, consultar informações e encadear tarefas. É uma ferramenta legítima, disponível em contextos Windows e também em outras plataformas por meio de versões multiplataforma. Seu uso em uma máquina pode representar manutenção rotineira, atividade de suporte, execução de uma aplicação ou ação indevida. O nome do executável, isoladamente, não informa qual dessas situações ocorreu.

Windows PowerShell é um sinônimo comum, mas também pode indicar especificamente a edição tradicional distribuída com versões do Windows. PowerShell moderno é uma edição distinta, disponível em mais de um sistema operacional. A distinção importa quando se examinam caminhos de executáveis, versões, módulos, políticas e registros. Em relatórios, convém registrar o que foi efetivamente identificado — produto, versão e caminho, se disponíveis — em vez de usar os nomes como se sempre apontassem para o mesmo binário.

## Como funciona, em linhas gerais

O interpretador recebe comandos em uma sessão, avalia a sintaxe e executa operações. Essas operações podem ser comandos internos, funções, scripts ou componentes fornecidos por módulos. Um comando pode consultar o sistema, manipular dados, chamar interfaces administrativas ou iniciar outros processos, conforme as permissões do usuário e os recursos disponíveis. Scripts permitem reunir operações em uma sequência reutilizável; sessões interativas permitem que uma pessoa emita comandos e observe resultados enquanto trabalha.

Uma característica importante é o uso de objetos para representar resultados e passá-los entre comandos. Em vez de depender sempre de texto formatado para a tela, um comando pode entregar dados estruturados ao próximo elemento de uma sequência. Isso favorece filtragem, seleção e transformação de informações administrativas. Para a defesa, essa flexibilidade é útil e também explica por que uma sequência curta de comandos pode fazer bastante trabalho sem criar um programa separado para cada tarefa.

A execução acontece sob uma identidade e um contexto concretos: usuário, nível de privilégio, sessão, ambiente e recursos acessíveis. Um comando de leitura executado por uma conta comum não tem o mesmo alcance que uma operação equivalente sob uma conta administrativa. Além disso, o efeito depende de parâmetros, conteúdo carregado, módulos disponíveis, políticas aplicadas e respostas dos serviços chamados. Ao analisar um evento, a pergunta relevante não é apenas “qual ferramenta apareceu?”, mas “qual operação foi solicitada, por quem, em que contexto, com que resultado observável?”.

## Uso legítimo e valor operacional

Administradores usam PowerShell para inventariar configurações, verificar serviços, gerir contas autorizadas, coletar informações, automatizar manutenção e aplicar procedimentos consistentes em vários equipamentos. Equipes de suporte podem utilizá-lo para diagnosticar falhas; ferramentas de gerenciamento podem iniciar comandos em segundo plano; e rotinas agendadas podem executar tarefas sem interação visível. Desenvolvedores também podem recorrer ao ambiente para tarefas locais de construção e manutenção.

A automação reduz trabalho repetitivo e ajuda a reproduzir procedimentos. Essa mesma capacidade torna necessário conhecer o padrão normal de cada ambiente. Uma execução iniciada por uma ferramenta de gestão aprovada, em uma janela de manutenção, com uma conta e argumentos esperados, tem contexto diferente de uma execução fora de horário, com identidade incomum e atividade subsequente incompatível com a função do dispositivo. Nenhum desses fatores, sozinho, prova legitimidade ou abuso; são elementos que ganham valor quando correlacionados.

## Abuso em intrusões: leitura defensiva

Em uma intrusão, o interpretador pode servir para executar comandos, inspecionar o ambiente, coordenar outras ferramentas ou realizar alterações com os direitos disponíveis. Também pode aparecer como etapa intermediária acionada por outro processo. Essas possibilidades são descrições de comportamento observável, não instruções para reproduzi-lo. A presença de PowerShell pode refletir abuso, mas atacantes também podem evitar ferramentas conhecidas; portanto, sua presença ou ausência não resolve, por si só, a avaliação de um incidente.

O abuso pode se misturar à atividade administrativa porque a ferramenta é compartilhada por usuários e aplicações legítimos. A distinção depende da combinação de sinais: processo pai, conta, dispositivo, argumentos, conteúdo executado, origem do comando, horário, conexões e efeitos. Uma linha de comando incomum merece exame; uma linha comum também pode ser indevida se a identidade ou o contexto não fizer sentido. Por outro lado, opções de aparência suspeita podem ter explicação documentada em ferramentas corporativas.

## Onde aparece na investigação

O primeiro ponto costuma ser a telemetria de processos do sistema operacional ou do agente de segurança. Ela pode registrar nome e caminho do executável, identificador do processo, processo pai, usuário, horário, argumentos e, dependendo da fonte, sessão ou nível de integridade. Esses dados ajudam a reconstituir a cadeia de execução: o que iniciou o interpretador, qual identidade o executou e que processos vieram depois. A disponibilidade e a precisão variam conforme produto, configuração e retenção.

Outras fontes podem complementar a linha do tempo. Registros de criação de processos, eventos próprios do PowerShell, histórico de sessão, registros de tarefas agendadas, ferramentas de gerenciamento, autenticação, alterações de arquivos e telemetria de rede podem esclarecer uma execução. Alguns registros de comandos dependem de configuração prévia; a ausência de um evento não significa necessariamente ausência de atividade. O histórico local pode ser apagado, não existir para sessões não interativas ou estar incompleto. É essencial documentar a fonte e suas limitações.

## Evidências e reconhecimento

Sinais úteis incluem o caminho do executável, a versão, os argumentos, a identidade de execução, a relação entre processo pai e filhos, os módulos carregados, os eventos disponíveis e as ações observadas no sistema. A investigação pode ainda comparar a execução com tarefas aprovadas, inventário de software, procedimentos de suporte e janelas de mudança. A origem pode ser uma sessão local, um agente de gestão, uma tarefa agendada ou outro processo; entender essa origem costuma ser mais esclarecedor que classificar o nome do binário.

Uma evidência forte é aquela que liga a execução a um efeito ou a um conteúdo verificável. Por exemplo, argumentos registrados junto a um processo podem demonstrar o que foi solicitado, mas não necessariamente o resultado. Um evento de alteração confirmado em outra fonte pode mostrar que uma mudança aconteceu, embora não identifique sozinho qual comando a causou. Logs de script podem revelar conteúdo, mas é preciso confirmar a integridade, a cobertura e o horário desses registros. A convergência entre fontes melhora a confiança sem eliminar incertezas.

## Distinções com termos próximos

**Prompt de comando** é outra interface de linha de comando do Windows. Ele oferece comandos e mecanismos diferentes; não é sinônimo de PowerShell, ainda que ambos possam iniciar programas e apoiar administração. A aparência de uma janela de terminal pode ser semelhante, mas o processo executado e os registros associados permitem distingui-los.

**Script** é um conjunto de instruções que pode ser interpretado ou executado por uma ferramenta. Um script PowerShell é um tipo de conteúdo; PowerShell é o ambiente que pode interpretá-lo. Um arquivo de script pode existir sem execução, e comandos podem ser fornecidos sem um arquivo persistente. Essa diferença é relevante para evitar inferir atividade a partir de extensões encontradas no disco.

**Shell** é uma categoria mais ampla de interface que recebe comandos e permite interagir com o sistema. PowerShell é um shell e uma linguagem de automação; o termo “shell” sozinho não identifica produto, plataforma ou método de execução. **Execução remota** descreve uma forma de operar em outro sistema; não é uma propriedade automática de qualquer processo PowerShell. É preciso identificar o mecanismo remoto, as credenciais e a máquina de origem e destino.

## Limitações e erros de interpretação

O erro mais comum é tratar qualquer execução como maliciosa ou, no extremo oposto, considerar toda execução legítima porque o software é nativo ou aprovado. A reputação da ferramenta não determina a natureza do uso. Também é equivocado supor que um comando curto seja inofensivo, que uma linha longa seja necessariamente hostil, ou que a execução sem janela visível indique ocultação. Serviços, tarefas agendadas e agentes podem operar sem interação visual por razões normais.

A ausência de um arquivo de script não prova que não houve uso; comandos podem ser fornecidos de outras maneiras. A existência de um arquivo, por sua vez, não prova que ele foi aberto. Um registro de processo pode omitir conteúdo, e registros detalhados podem estar desativados ou ter sido removidos. Não se deve converter lacunas de observabilidade em certeza. O relatório deve distinguir fatos observados, inferências e hipóteses, indicando confiança e evidências faltantes.

Também é importante não confundir capacidade com resultado. Um comando pode solicitar uma ação que falha por falta de permissão, indisponibilidade do serviço ou erro de sintaxe. Ver o argumento não comprova que a operação se completou. Inversamente, uma mudança observada pode resultar de outra ferramenta ou de ação humana. Correlacionar pedido, retorno e efeito ajuda a construir uma conclusão mais sólida.

Por fim, não existe uma configuração única de registros que sirva a todas as organizações. A visibilidade depende de versões, políticas, ferramentas de segurança, retenção e práticas de administração. Uma equipe deve conhecer as fontes disponíveis antes de um incidente e evitar presumir que determinada opção de auditoria estava ativa. Melhorar a cobertura prospectivamente é útil, mas não recupera automaticamente eventos passados que nunca foram coletados.

## Implicações para resposta a incidentes

Quando a execução é suspeita, preserve primeiro os dados voláteis e os registros sujeitos a rotação, dentro do procedimento de resposta da organização. Registre horário, host, conta, identificadores, argumentos disponíveis, processo pai e filhos, além da fonte de cada observação. Se houver arquivo associado, preserve-o com metadados e hash, sem executar seu conteúdo. Documentar a cadeia de custódia e as ações realizadas facilita revisão posterior e reduz alterações acidentais.

Depois de conter a atividade conforme necessário, remova persistência ou acesso indevido somente quando houver base suficiente e plano de recuperação. Revise a origem do processo, as permissões da conta, o mecanismo de gestão e eventuais credenciais expostas. Reforce a coleta de telemetria e ajuste regras a partir do caso, validando-as contra operações legítimas conhecidas. A lição não é eliminar uma ferramenta versátil, mas garantir que o uso autorizado seja observável, atribuível e compatível com a função do usuário e do equipamento.

## Relação com o capítulo

No capítulo 6 da versão original, PowerShell se relaciona ao conjunto de ferramentas que podem apoiar administração ou aparecer em uma intrusão. A leitura defensiva exige avaliar argumentos, origem e identidade de execução em conjunto. O nome, sozinho, não determina intenção.
