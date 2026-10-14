# Movimentação lateral

## Definição e alcance

Movimentação lateral é a passagem do adversário de um sistema ou identidade para outros recursos do ambiente. A definição descreve uma mudança de alcance: depois de obter algum ponto de apoio, o intruso tenta acessar outros computadores, contas, serviços ou partes da infraestrutura. O ponto inicial pode ser um dispositivo de usuário, um servidor exposto, uma conta comprometida ou outro recurso. O destino pode estar no mesmo segmento de rede ou em uma área diferente, desde que haja um caminho de acesso e algum meio de autenticação ou execução.

O termo nomeia uma atividade observada no curso de um ataque, e não uma ferramenta, protocolo ou técnica única. Há muitas maneiras de transitar entre recursos, e nem toda conexão entre máquinas representa essa fase. O elemento central é a relação entre a origem, a identidade empregada, o destino e o contexto: a atividade permite ao adversário sair do escopo do recurso inicial e avançar para outros recursos do ambiente. Uma conexão remota habitual, por si só, não basta para concluir que houve movimentação lateral.

## Por que ocorre e o que significa

Um primeiro acesso raramente informa, sozinho, o alcance real de um incidente. O recurso inicial pode conter apenas dados limitados, enquanto outros sistemas guardam informações de maior interesse, oferecem serviços necessários ou permitem alcançar outras partes da organização. A movimentação lateral descreve o esforço de estender esse acesso. Ela pode servir à descoberta de ativos, à obtenção de dados, ao acesso a aplicações, à manutenção de presença ou a outras metas do adversário. A finalidade específica não deve ser presumida apenas pela existência de conexões entre hosts.

Em uma investigação, observar tráfego ou autenticações entre sistemas ajuda a responder perguntas concretas: o acesso saiu do equipamento inicialmente identificado? Quais identidades foram usadas? Quais destinos foram alcançados? Houve execução ou atividade posterior no destino? Alguma conta ou sistema sensível foi envolvido? Essas perguntas orientam a delimitação do incidente, a priorização da contenção e a busca por evidências adicionais. A expressão é útil porque oferece uma hipótese de trabalho para agrupar eventos distribuídos, sem decidir antecipadamente que todos são maliciosos.

## Como analisar defensivamente

A investigação começa por uma linha de base do evento: qual foi o primeiro recurso confirmado, quando ocorreu, que identidade esteve envolvida e qual evidência sustenta essa associação? “Primeiro host” significa aqui o primeiro host conhecido pela equipe, não necessariamente o primeiro recurso tocado pelo intruso. A distinção evita tratar a ordem em que os alertas chegaram como a ordem real dos acontecimentos. O acesso inicial pode ter sido apagado, não registrado ou ocorrido antes da janela de retenção disponível.

Em seguida, estabeleça relações entre origem e destino. Correlacione logons e conexões remotas, como recomenda a nota prática: um registro de autenticação pode indicar que uma conta foi aceita, enquanto um evento de rede mostra comunicação entre recursos. Nenhum dos dois, isoladamente, demonstra sempre que uma sessão interativa ocorreu ou que houve ação maliciosa. Quando disponíveis, registros de criação de processos, acesso a serviços, alterações de configuração, uso de compartilhamentos, atividades de aplicações e eventos do sistema de identidade ajudam a esclarecer o que aconteceu depois da conexão.

## Evidências que podem ajudar

As fontes úteis variam conforme a arquitetura e a retenção da organização. A correlação entre categorias de evidência tende a ser mais informativa que um indicador isolado.

- **Autenticação e identidade:** logons aceitos ou negados, origem informada, método de autenticação, tipo de sessão, uso de autenticação multifator quando registrado, concessão ou elevação de privilégios e alterações de conta. Esses dados ajudam a verificar se uma identidade autenticou-se em destinos incomuns e se o padrão difere do contexto habitual daquela conta.
- **Rede e acesso remoto:** conexões entre endereços, portas e serviços, registros de VPN ou de gateways, sessões de administração remota e fluxos vistos por sensores. O fluxo pode confirmar comunicação, mas em geral não revela sozinho quem a iniciou, o conteúdo trocado ou o resultado da sessão.
- **Atividade no destino:** início de sessão, criação de processos, execução por serviços, tarefas agendadas, acesso a arquivos, instalação ou alteração de componentes e mudanças administrativas. A disponibilidade e o detalhe variam entre sistemas operacionais, configurações e ferramentas de coleta.

## Exemplos hipotéticos

**Exemplo 1: conta de suporte em servidores.** Uma equipe identifica atividade suspeita em uma estação. Nos registros centralizados, uma conta de suporte usada naquela máquina autentica-se em dois servidores em um intervalo próximo. O primeiro servidor registra uma sessão administrativa; no segundo, não há dados suficientes para saber se a sessão avançou além da autenticação. A hipótese de movimentação lateral orienta a coleta nos destinos e a revisão do uso da conta. A conclusão deve separar o acesso confirmado no primeiro destino da tentativa ou autenticação sem resultado esclarecido no segundo.

**Exemplo 2: conexão legítima fora do padrão.** Um servidor de manutenção conecta-se a equipamentos de uma área diferente durante uma janela emergencial. O padrão é raro e gera alerta, mas o chamado correspondente, a conta de automação esperada e os registros de tarefa sustentam uma explicação autorizada. A atividade pode parecer lateral por sua forma, mas não deve ser rotulada como intrusão sem sinais que contrariem esse contexto. O caso pode ainda revelar que os registros disponíveis não distinguem suficientemente as operações legítimas de um possível abuso.

## Distinções importantes

**Acesso inicial** é a obtenção de um primeiro ponto de entrada conhecido ou investigado. Movimentação lateral diz respeito à passagem desse ponto para outros recursos. A ordem observada pode ser incerta: uma conta comprometida pode ter sido usada em mais de um sistema antes de a equipe identificar qualquer host, portanto “inicial” depende da evidência e do recorte da investigação.

**Escalada de privilégios** é a obtenção de permissões superiores às que uma identidade ou processo possuía. Pode ocorrer no mesmo sistema, durante uma transição entre sistemas ou em outro momento. Uma autenticação em novo host não demonstra, por si, escalada; e uma escalada local não demonstra movimentação lateral. Os dois fenômenos podem ocorrer no mesmo incidente e devem ser sustentados por evidências próprias.

**Movimento vertical**, quando usado informalmente, descreve a mudança de privilégio ou de nível de controle, em contraste com a passagem entre recursos. A terminologia nem sempre é aplicada de modo uniforme. Para evitar ambiguidade, descreva diretamente se houve mudança de host, de identidade, de permissão ou das três coisas.

**Acesso remoto administrativo** é uma capacidade legítima usada por administradores, suporte e automação. Pode também ser abusada por um adversário. O protocolo ou a ferramenta empregados não definem a intenção. A classificação depende de identidade, origem, destino, horário, ação resultante, autorização e demais evidências disponíveis. Da mesma forma, uma conexão entre máquinas não é sinônimo de movimentação lateral: comunicação de aplicação, monitoramento e replicação são comuns em ambientes saudáveis.

## Limitações e erros de interpretação

O conceito é útil para organizar uma investigação, mas não substitui a identificação do evento específico. Um alerta de “movimentação lateral” pode ser produzido por uma regra comportamental, uma correlação ou uma classificação de produto. O rótulo indica que vale examinar relações entre recursos; não equivale a uma conclusão pericial. Verifique quais sinais acionaram o alerta e se eles são independentes ou derivados do mesmo registro.

Entre os erros recorrentes estão tratar todo logon remoto como comprometimento, considerar qualquer conta administrativa maliciosa, presumir que um endereço de origem identifica uma pessoa, ou atribuir uma ação a um usuário apenas porque sua credencial aparece no evento. Credenciais compartilhadas, serviços intermediários, delegação, estações remotas e automação podem complicar a atribuição. A conta usada é evidência sobre uma identidade lógica, não necessariamente sobre quem controlava a sessão.

## Implicações para resposta a incidentes

Quando há indícios confiáveis de transição não autorizada, a equipe deve ampliar o escopo para os destinos, identidades e sistemas que possam estar relacionados. Isso inclui preservar registros, identificar responsáveis por ativos, avaliar criticidade e verificar se há atividade em curso. A investigação não deve ficar restrita à máquina que primeiro gerou o alerta, pois ela pode ser apenas um ponto intermediário ou um dos vários recursos alcançados.

Se uma identidade parece ter sido usada indevidamente, a resposta pode envolver contenção da conta, revisão de sessões e credenciais relacionadas, análise dos privilégios e busca de outros sistemas onde a mesma identidade aparece. Alterar uma senha, isoladamente, não responde se houve sessões abertas, credenciais alternativas, tokens ou outras contas afetadas. A escolha das ações depende da plataforma e da política local; a investigação deve coordenar-se com os responsáveis por identidade, sistemas, rede e negócio.

## Perguntas frequentes

### Toda conexão entre dois computadores é movimentação lateral?

Não. A conexão pode fazer parte da operação normal de uma aplicação, de uma rotina de backup, monitoramento, suporte ou atualização. Para usar o termo com segurança, investigue se houve uma passagem de acesso atribuível ao adversário ou suspeita de abuso, considerando identidade, origem, destino e atividade resultante. Uma conexão isolada pode ser apenas um indício que merece contexto.

### É necessário haver execução no destino?

Nem sempre é possível demonstrá-la para reconhecer que houve tentativa ou passagem de acesso. Uma autenticação pode ter sido aceita sem que os registros disponíveis mostrem o que veio depois. Nessa situação, descreva precisamente a evidência: por exemplo, “autenticação observada” ou “sessão remota confirmada”, sem converter uma lacuna de telemetria em prova de execução. A distinção afeta tanto a avaliação de impacto quanto a resposta.

### Como separar uma sessão legítima de uma sessão abusada?

Não há um único atributo que resolva todos os casos. Compare o padrão com o esperado para a função, confirme se a operação foi autorizada, examine a origem e o destino e procure ações posteriores compatíveis ou incompatíveis com o trabalho previsto. O chamado ou a janela de manutenção ajuda, mas não basta se outros sinais o contradizem. A confirmação deve combinar fontes independentes sempre que possível.

### O que fazer quando a origem da transição é desconhecida?

Registre o primeiro ponto confirmado como tal e expanda a busca a partir das identidades, destinos e horários observados. Consulte dados de identidade, rede, sistema operacional e aplicações que possam cobrir o período anterior. Se a retenção ou a coleta impedir reconstruir a origem, indique essa limitação e use-a na avaliação de risco. Não invente um ponto inicial para preencher a lacuna.

## Relação com o capítulo

Na versão original do manuscrito, o conceito se relaciona ao capítulo 1. Neste verbete, a movimentação lateral é tratada como uma lente para acompanhar a expansão do acesso entre recursos e para orientar a investigação defensiva. O número do capítulo situa o tema na estrutura daquela versão; não altera a definição nem substitui a análise das evidências de cada incidente.
