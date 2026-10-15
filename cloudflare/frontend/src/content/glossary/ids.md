# IDS

## Definição

IDS é a sigla de *Intrusion Detection System*, ou sistema de detecção de intrusão. É um recurso defensivo que observa eventos de rede, de um host ou de ambos para identificar padrões e comportamentos que possam indicar atividade maliciosa, violação de política ou uso indevido. Ao encontrar uma correspondência relevante, registra um evento e, em geral, produz um alerta para análise. Sua função central é detectar e comunicar; em sua forma clássica, não bloqueia automaticamente a atividade observada.

A palavra “intrusão” não deve ser lida como prova de que um invasor entrou. Um IDS aponta indícios que merecem avaliação, não estabelece por si só intenção, autoria, impacto ou sucesso de uma ação. Um alerta pode corresponder a uma ameaça real, a um teste autorizado, a uma configuração legítima que se parece com uma ameaça ou a uma regra inadequada. A conclusão depende de contexto e evidências adicionais.


## O que o IDS observa

### Detecção em rede

Um IDS de rede, frequentemente chamado NIDS, recebe tráfego ou metadados de tráfego em um ponto de visibilidade da rede. Esse ponto pode ser alimentado por espelhamento de portas, sensores conectados a segmentos específicos ou mecanismos de telemetria da infraestrutura. Dependendo da implantação, o sistema examina pacotes, fluxos, cabeçalhos, protocolos ou combinações desses elementos. A cobertura não é automaticamente equivalente a “toda a rede”: depende do caminho percorrido pelos dados, dos segmentos selecionados e do que o sensor consegue decodificar.

Um IDS de host, ou HIDS, acompanha eventos de um equipamento ou sistema operacional. Conforme sua configuração, pode observar alterações em arquivos, registros de auditoria, processos, contas, configurações, módulos ou chamadas registradas pelo sistema. Em servidores, estações e dispositivos especializados, o valor está na proximidade com a atividade local: ações que não aparecem no tráfego de rede podem deixar vestígios no próprio host.

Alguns produtos combinam telemetria de endpoint com detecção e resposta, inventário ou outras funções. O rótulo comercial não basta para determinar se um recurso é IDS, IPS, EDR ou uma combinação. Para análise técnica, importa identificar a origem dos dados, os comportamentos observados, a lógica de detecção, o tipo de saída e se existe capacidade de executar uma ação de contenção.

## Como a detecção é produzida

Uma estratégia comum é a detecção por assinatura: regras descrevem indicadores ou padrões associados a comportamentos previamente reconhecidos. Ela pode ser precisa quando o padrão é específico e o sensor vê os dados relevantes. Também pode falhar diante de variantes, alterações de protocolo, conteúdo cifrado ou atividade ainda desconhecida. Assinaturas precisam ser mantidas e avaliadas no contexto local; uma regra útil em uma rede pode gerar ruído em outra.

Outra estratégia é identificar anomalias em relação a uma linha de base ou a expectativas configuradas. O sistema pode sinalizar uma frequência, horário, destino ou combinação de eventos incomum para determinado ambiente. “Incomum” não significa necessariamente “malicioso”: uma organização pode ter atividades raras e legítimas, e mudanças de rotina deslocam a linha de base. Modelos estatísticos ou heurísticas podem priorizar desvios, mas a explicação do sinal e sua validação continuam necessárias.

## Posicionamento, cobertura e contexto

A qualidade do sinal depende primeiro da visibilidade. Um sensor colocado antes ou depois de um ponto de segmentação observa conjuntos diferentes de comunicações. Um espelho de tráfego pode perder pacotes quando há congestionamento ou configuração incorreta; uma interface pode não receber tráfego de determinados caminhos. Em host, a ausência de telemetria em um grupo de máquinas deixa uma área sem observação. Mapear a cobertura é parte da interpretação, não mero detalhe de infraestrutura.

Contexto inclui inventário e função do ativo, proprietário, criticidade, exposição, janela de manutenção, mudanças autorizadas, identidade do usuário e histórico recente. O mesmo evento pode ter significado distinto em um servidor público, em uma estação administrativa ou em um equipamento de laboratório. Enriquecer um alerta com esses dados ajuda a decidir prioridade, mas dados de inventário desatualizados podem induzir a decisões incorretas. O contexto deve ser tratado como evidência sujeita a verificação.

## Uso na investigação

Um IDS pode fornecer uma das primeiras indicações de uma atividade que merece investigação. Em uma apuração, o alerta orienta perguntas: qual ativo participou? O tráfego chegou ao destino? Há eventos correlatos antes ou depois? A identidade associada é esperada? Houve alteração no host? Outros sensores observaram o mesmo indicador? A resposta pode vir de registros de autenticação, telemetria de endpoint, DNS, proxy, firewall, aplicações, inventário ou entrevistas com responsáveis pelo sistema.

O alerta é também um artefato de investigação. Preserve a identificação da regra, o instante de geração, o instante do evento original, a fonte de dados, o endereço ou ativo envolvido, os campos originais e eventuais transformações aplicadas. Horários devem ser comparados levando em conta fuso, sincronização e atraso de ingestão. Uma tela resumida ou uma notificação isolada pode omitir campos necessários para reproduzir o raciocínio; obter o evento bruto e os registros próximos costuma ser mais esclarecedor.

A cadeia de eventos ajuda a avaliar se o sinal representa tentativa, execução, persistência ou efeito. Um indicador de conexão suspeita não prova que dados foram acessados; um padrão associado a varredura não prova que houve exploração; uma alteração de arquivo não prova que o arquivo foi usado de forma maliciosa. Busque evidências independentes e convergentes, sem transformar a hipótese inicial em conclusão automática. Quando a evidência for incompleta, registre explicitamente o que se sabe, o que se infere e o que ainda falta confirmar.

### Exemplo hipotético: comunicação atípica

Imagine que um sensor de rede alerte sobre uma estação que iniciou várias conexões curtas para destinos externos raros em um intervalo incomum. O alerta não demonstra comprometimento. A equipe verifica se houve uma atualização autorizada, consulta o proprietário do ativo, compara DNS e proxy, procura processos e eventos de autenticação no host e verifica se outras estações exibiram o mesmo padrão. Se a atividade corresponder a um serviço novo, a regra ou o inventário podem precisar de ajuste. Se surgirem evidências independentes de execução não autorizada, o caso pode ser escalado conforme o processo de resposta.

## Evidências de que há um IDS e de como opera

A evidência mais direta pode estar na documentação de arquitetura, no inventário de sensores, nas configurações de captura, na lista de agentes ou nas regras habilitadas. Registros de instalação e telemetria de saúde mostram versões, horários de contato, filas e erros. Uma solução central pode apresentar fontes integradas e alertas, mas a interface por si só não prova que cada fonte está ativa ou que a coleta cobre o tráfego e os ativos relevantes.

Em um alerta, examine campos como identificador e descrição da regra, severidade atribuída, endereço de origem e destino, protocolo, ativo, horário, sensor, evidência coincidente e estado da assinatura. Os nomes variam por produto. Uma classificação de severidade costuma refletir a política do fornecedor ou da organização, não uma medição universal do dano. A ausência de um campo também não prova ausência do evento: talvez a fonte não o capture, o parser não o reconheça ou a interface o omita.

Para verificar a operação, confronte eventos com fontes independentes. Um alerta de rede pode ser comparado a registros de firewall, DNS e proxy; um alerta de host, a auditoria do sistema e a telemetria de processos. A concordância aumenta a confiança quando as fontes são de fato independentes e os horários e identificadores estão alinhados. Duas telas que replicam o mesmo evento não constituem confirmação independente.

## IDS, IPS e ferramentas relacionadas

A distinção mais prática entre IDS e IPS (*Intrusion Prevention System*) está na ação. O IDS detecta e alerta; um IPS pode intervir no fluxo, por exemplo, descartando tráfego segundo uma política. Alguns produtos oferecem ambos os modos, e uma plataforma pode combinar capacidades. É necessário confirmar o comportamento configurado: operar em modo de bloqueio pode afetar disponibilidade, enquanto operar apenas em monitoramento não impede a atividade detectada.

SIEM é uma plataforma que reúne e correlaciona registros de várias fontes para pesquisa, alertas e gestão de eventos de segurança. Um IDS pode enviar dados a um SIEM, e um SIEM pode criar uma detecção a partir de telemetria que não veio de um IDS. Assim, o nome do painel em que o alerta aparece não identifica necessariamente o componente que observou o evento. A origem e a regra que produziram o sinal devem ser rastreadas.

## Limitações e erros de interpretação

Falsos positivos ocorrem quando um evento legítimo é sinalizado como suspeito. Falsos negativos ocorrem quando uma atividade relevante não gera alerta. Os dois tipos podem resultar de regras, cobertura, qualidade dos dados, evasão, mudanças de ambiente ou limitações de análise. Não há uma taxa única que descreva todo IDS: o desempenho depende da finalidade, do tráfego, da configuração e do critério usado para avaliar resultados. Um período sem alertas pode refletir normalidade, mas também falha de coleta, regra desativada ou ausência de visibilidade.

Outro erro é confiar sem validação na prioridade atribuída pelo produto. Severidade alta não equivale automaticamente a incidente crítico, e severidade baixa não torna um achado irrelevante. A triagem deve considerar criticidade do ativo, plausibilidade, alcance, evidências associadas e consequências possíveis. Da mesma forma, ausência de alerta não é evidência suficiente de ausência de atividade: detecção depende do que foi observado e do que as regras reconhecem.

## Integração com a resposta a incidentes

Quando um alerta é plausível e potencialmente relevante, a triagem deve preservar evidências e buscar confirmação antes de escolher uma ação que afete sistemas. Uma sequência defensiva pode incluir validar a origem do alerta, identificar ativos e responsáveis, consultar fontes correlatas, avaliar impacto e escopo, registrar decisões e escalar conforme a gravidade. A urgência pode justificar contenção enquanto a análise continua, mas a decisão deve considerar continuidade do serviço e efeitos colaterais.

IDS em modo de monitoramento normalmente não contém a ameaça por conta própria. A equipe pode precisar acionar controles distintos, como isolamento de endpoint, bloqueio de comunicação ou suspensão de credenciais, seguindo autoridade e procedimento aplicáveis. A resposta não deve depender de presumir que “o IDS já bloqueou”. Se houver prevenção automatizada integrada, verifique se a ação ocorreu, qual política a autorizou e se o bloqueio foi efetivo.

## Perguntas frequentes

### Um IDS detecta toda intrusão?

Não. Ele detecta padrões observáveis e reconhecidos por suas regras ou métodos, dentro da cobertura disponível. Pode não ver segmentos, ativos, conteúdo cifrado ou comportamentos para os quais não tenha lógica de detecção. É uma camada de defesa, não garantia de detecção completa.

### Um alerta confirma que houve invasão?

Não. Confirma que uma condição de detecção foi satisfeita. A atividade pode ser legítima, um teste ou um falso positivo; mesmo um evento malicioso pode representar tentativa sem sucesso. Investigue contexto, resultado e evidências independentes antes de classificar o caso.

### Qual é a diferença entre IDS de rede e IDS de host?

O primeiro observa tráfego em pontos da rede e pode revelar relações entre sistemas; o segundo observa eventos locais no equipamento monitorado. Cada perspectiva tem lacunas próprias. Em conjunto podem se complementar, desde que os dados e horários possam ser correlacionados.

### Um IDS consegue bloquear atividade?

A função típica de IDS é detectar e alertar. Bloqueio é associado a prevenção, como em IPS, embora produtos e implantações possam combinar funções. Confirme o modo efetivo e as políticas antes de contar com contenção automática.

## Relação com o capítulo

Na versão original, o capítulo 6 oferece o contexto editorial relacionado a este verbete. A leitura técnica do IDS, porém, deve permanecer ancorada no funcionamento observado: fontes de dados, regras, cobertura, contexto e processo de triagem. Essa combinação permite interpretar alertas como evidências a investigar, e não como veredictos automáticos.
