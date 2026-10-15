# IOC

## Conceito

IOC é a sigla de *Indicator of Compromise*, em português, indicador de comprometimento. Designa um artefato observável que pode sinalizar atividade maliciosa. Hashes de arquivos, nomes de domínio e endereços de rede são exemplos frequentes, mas um indicador também pode ser um caminho de arquivo, uma chave de registro, um nome de processo, um identificador de mensagem, uma sequência de eventos ou outro dado que possa ser comparado com telemetria disponível. O tipo de dado, por si só, não o torna malicioso: o que lhe confere valor é a relação sustentada por evidências entre aquele artefato e uma atividade sob investigação.

O verbo “pode” é essencial. Um IOC não é prova autossuficiente de invasão, nem uma descrição completa de uma campanha ou de um agente. É uma pista que ajuda a localizar, agrupar ou priorizar observações. Um hash pode corresponder a uma amostra analisada como maliciosa; um domínio pode ter sido usado para distribuir um arquivo; um endereço pode ter aparecido em conexões relacionadas a um incidente. Cada associação depende de fonte, circunstância e período. Sem esses elementos, o dado é apenas um valor, facilmente interpretado fora de contexto.

Na prática defensiva, IOCs permitem formular perguntas verificáveis à telemetria: algum equipamento acessou o domínio durante o período relevante? O arquivo identificado pelo hash apareceu em algum repositório? Houve uma conexão compatível com o comportamento investigado? A resposta pode ser positiva, negativa ou inconclusiva, conforme a cobertura, retenção e qualidade dos registros. Por isso, a utilidade do indicador não está em “acusar” por conta própria, mas em orientar uma busca e fornecer um ponto de partida reproduzível.

## Papel na detecção e na investigação

## Formas comuns e evidências associadas

O formato do IOC determina que tipo de evidência pode corroborá-lo, mas não determina sozinho a força da conclusão. Alguns exemplos de categorias são:

- **Hash de arquivo:** identifica uma sequência de bytes segundo uma função de resumo. Uma correspondência exata pode localizar o mesmo conteúdo em um conjunto de arquivos, mas não revela automaticamente como chegou ao sistema, se foi executado ou quem o colocou ali. Arquivos modificados podem ter hashes diferentes, mesmo quando relacionados.
- **Domínio ou URL:** pode aparecer em consultas DNS, histórico de proxy, telemetria de navegador, mensagens ou configurações. Um domínio pode hospedar conteúdo legítimo e malicioso em momentos distintos, ou compartilhar infraestrutura com vários clientes. Uma URL completa costuma ser mais específica que um nome de domínio, mas pode conter dados sensíveis e requer cuidado no registro e compartilhamento.
- **Endereço IP:** pode ser observado em fluxos de rede, logs de firewall ou resolução de nomes. Serviços em nuvem, hospedagem compartilhada, redes de distribuição de conteúdo e endereços dinâmicos tornam perigoso tratar um IP como identidade permanente de um operador ou serviço.
- **Artefato em endpoint:** um caminho, nome de arquivo, processo, serviço ou alteração de configuração pode ser comparado com inventário e telemetria local. Nomes comuns são fáceis de imitar e, isoladamente, podem corresponder a componentes legítimos.
- **Padrão de atividade:** uma combinação delimitada de campos e eventos pode funcionar como indicador observável, desde que seja descrita de maneira suficientemente precisa para a busca e acompanhada dos limites conhecidos. Uma regra ampla pode corresponder a operações normais.

## Contexto, confiança e validade

Um indicador útil deve vir acompanhado de informações que permitam interpretá-lo. Conforme o caso, convém registrar a fonte, a data em que foi observado e a data em que foi publicado, o ambiente ou amostra relacionados, o motivo da classificação, o grau de confiança e as limitações conhecidas. É importante distinguir o tempo de observação do tempo de validade: o primeiro diz quando a evidência foi vista; o segundo indica por quanto tempo se espera que a associação continue útil. Uma data de expiração é uma regra de gestão, não uma garantia de que o artefato deixou de ser perigoso naquele instante.

Endereços e domínios podem mudar de proprietário, ser reciclados, abrigar serviços legítimos ou deixar de apontar para a infraestrutura anteriormente observada. Um hash exato tende a identificar o mesmo conteúdo com maior estabilidade, mas pode perder cobertura quando o arquivo é recompilado ou alterado. Artefatos internos, como nomes de tarefas ou caminhos, podem colidir com padrões válidos da própria organização. A validade deve refletir a natureza do indicador e a evidência que o sustenta, em vez de ser presumida indefinida.

## Uso operacional defensivo

Em uma triagem, um IOC ajuda a transformar uma pista em uma busca direcionada. A equipe identifica quais fontes podem conter o artefato, escolhe uma janela de tempo coerente e procura correspondências. Antes de agir sobre o resultado, verifica duplicatas, escopo, dispositivo, usuário e eventos próximos. Uma correspondência em registro de DNS, por exemplo, demonstra que houve uma consulta registrada; não demonstra por si só que o usuário acessou um conteúdo, que houve execução de código ou que o sistema foi comprometido.

Em monitoramento, indicadores podem alimentar regras de alerta ou listas de observação. Uma correspondência pode gerar enriquecimento, revisão humana, bloqueio ou investigação, dependendo da confiança e do impacto potencial. O controle precisa considerar falsos positivos, cobertura e custo de operação. Um bloqueio amplo de endereço compartilhado pode interromper um serviço legítimo; uma regra muito restrita pode não detectar variantes ou fontes de telemetria diferentes. O nível de resposta deve ser proporcional à qualidade da evidência e à consequência de errar.

A ausência de correspondências pode ser informativa, mas deve ser expressa com precisão: “não houve ocorrência encontrada nos registros disponíveis para os ativos e período pesquisados” é diferente de “a organização não foi afetada”. Essa distinção importa quando existem lacunas de coleta, retenção curta, sensores desativados ou sistemas fora do inventário. Uma busca negativa reduz ou não altera uma hipótese conforme a cobertura da fonte; não transforma desconhecimento em evidência de ausência.

## Exemplos hipotéticos

**Exemplo hipotético — hash de um anexo:** uma equipe recebe a informação de que um arquivo associado a uma mensagem suspeita foi analisado como malicioso. Ela procura o hash informado no armazenamento de anexos e nos registros de endpoint. Encontra o mesmo hash em um computador e confirma, em outra fonte, que o arquivo foi aberto. A equipe então examina a linha do tempo e o escopo da conta. A correspondência é um achado relevante, mas a conclusão sobre impacto depende das demais evidências; a simples presença do arquivo não esclareceria se houve execução.

**Exemplo hipotético — domínio em período limitado:** analistas observam que um domínio apareceu em conexões de uma estação durante uma investigação. Consultam os registros de DNS e proxy, confirmam os horários e comparam com a informação de que o domínio esteve associado a uma atividade suspeita naquele período. Antes de bloquear em toda a organização, verificam se a associação continua válida e se o nome serve outros recursos legítimos. Se a evidência apontar para uso malicioso apenas em uma janela ou caminho específico, a regra pode ser limitada e reavaliada, em vez de tratar qualquer acesso futuro como prova de incidente.


## Distinções importantes

IOC é próximo de outros termos usados em detecção, mas não deve ser confundido com eles. Uma **assinatura** é um padrão de detecção implementado para reconhecer conteúdo ou comportamento; pode usar um ou vários indicadores, e sua eficácia depende da lógica e dos dados disponíveis. Uma **regra de detecção** define condições para produzir um alerta. Já um IOC pode ser apenas um valor pesquisado manualmente ou usado como uma das condições da regra.

Um **indicador de ataque** (IoA) costuma enfatizar ações ou sequências comportamentais associadas a uma técnica, em vez de um artefato isolado deixado ou observado. Na prática, os limites terminológicos variam entre equipes e produtos. A distinção útil é perguntar se o dado descreve um vestígio observável ou uma condição de comportamento, e como será validado no ambiente. Uma **tática, técnica ou procedimento** descreve objetivos e modos de atuação em nível mais amplo; não é, por si, um endereço, hash ou evento específico a buscar.

Um **alerta** é uma notificação produzida por uma regra, pessoa ou serviço. Pode citar um IOC, mas requer triagem e não equivale a confirmação de comprometimento. Um **indicador de falso positivo** ou uma exceção de detecção é uma observação conhecida que ajuda a reduzir alertas indevidos; não deve apagar a evidência, mas documentar por que certa correspondência é esperada e sob quais condições. Finalmente, um IOC não é necessariamente um artefato exclusivo de um agente: infraestrutura e ferramentas podem ser compartilhadas ou reutilizadas por atores distintos.

## Limitações e erros de interpretação

O erro mais comum é tratar qualquer correspondência como prova conclusiva. Dados são copiados entre fontes, publicados sem revisão ou extraídos de observações cuja origem não está clara. Uma correspondência exata pode ser um falso positivo, uma ocorrência legítima ou uma consequência indireta. O analista deve conferir a semântica do campo, a origem da informação, o período e os eventos próximos antes de atribuir causa ou intenção.

Outro erro é tratar indicadores como permanentes. Listas antigas podem continuar ativas depois que domínios, endereços ou recursos mudam de uso. A nota prática é direta: associe cada indicador a contexto e prazo de validade, e reveja a classificação antes de aplicar bloqueios ou decisões de grande alcance. Bloquear com base em informação vencida pode afetar infraestrutura legítima e gerar interrupções; ignorar um indicador por estar vencido sem avaliar a evidência também pode deixar uma ocorrência sem exame. Expiração deve acionar revisão, não julgamento automático sobre benignidade.

Há ainda o risco de confundir ausência de correspondência com segurança comprovada. Um indicador pode não coincidir com uma variante, um artefato pode ter sido removido, e a fonte consultada pode não registrar o evento. Do mesmo modo, perseguir apenas listas de IOCs conhecidos favorece uma postura reativa: aquilo que ainda não foi observado ou compartilhado não aparecerá na lista. A investigação deve combinar indicadores com análise de comportamento, linha do tempo, contexto do ativo e hipóteses alternativas.

## Perguntas frequentes

### Todo IOC confirma um comprometimento?

Não. O termo descreve um artefato que pode sinalizar atividade maliciosa. A correspondência abre uma linha de investigação; a conclusão exige avaliar a fonte, o contexto, o período e evidências adicionais disponíveis.

### Quanto tempo um indicador deve permanecer ativo?

Não há prazo universal. A validade depende do tipo de artefato, da estabilidade da associação observada e do risco de uso legítimo. Registre quando foi observado, por que foi incluído e quando deve ser revisto. Indicadores associados a infraestrutura mutável tendem a exigir reavaliação mais frequente do que identificadores de conteúdo exato, mas nenhum prazo substitui análise contextual.

### O que registrar ao compartilhar um IOC?

Inclua o valor em formato claro, o tipo, a fonte, as datas relevantes, a confiança ou justificativa, a janela de validade e as limitações conhecidas. Preserve também o contexto necessário para distinguir observação de conclusão. Evite transmitir dados pessoais ou segredos desnecessários e aplique os controles de acesso definidos pela organização.


## Relação com a investigação do capítulo 6

No capítulo 6 da versão original, o tema dos IOCs pode ser relacionado à passagem da observação para a busca defensiva: reconhecer um artefato, situá-lo no tempo e no ambiente, e testar o que ele permite concluir. O ponto prático é preservar essa cadeia de raciocínio. Um indicador ajuda a encontrar evidências e a orientar decisões de resposta, desde que permaneça ligado à sua origem, às incertezas e ao prazo em que sua associação foi considerada válida.
