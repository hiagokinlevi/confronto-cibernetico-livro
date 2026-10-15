# Correlação de eventos

## Conceito

Correlação de eventos, ou *event correlation*, é a relação analítica entre registros produzidos por fontes distintas ou em momentos diferentes para identificar sequências, dependências e padrões que não são perceptíveis em um registro isolado. Em segurança, cada evento costuma descrever uma observação parcial: uma autenticação, uma conexão, uma alteração de configuração, uma execução registrada por um endpoint ou uma decisão de um controle. Correlacioná-los significa examinar como essas observações se relacionam segundo atributos e contexto compartilhados, e avaliar se, em conjunto, sustentam uma hipótese relevante para detecção ou investigação.

A correlação não transforma automaticamente dados em certeza. Ela organiza indícios e destaca relações possíveis. Uma sequência de falhas de autenticação seguida de acesso bem-sucedido pode merecer atenção; a mesma combinação pode decorrer de uma pessoa que errou a senha antes de acertá-la. O resultado depende da qualidade dos registros, da precisão dos horários, da identificação dos sujeitos e ativos e das regras usadas para relacioná-los. Por isso, uma correlação é uma afirmação a ser examinada, não uma prova autossuficiente de comprometimento.

O termo pode designar tanto o raciocínio de um analista quanto os mecanismos que ajudam a realizá-lo. Uma plataforma pode correlacionar eventos por regras explícitas, consultas, agrupamentos ou análises que consideram contexto e comportamento. Em todos os casos, a ideia central permanece: reunir observações relacionadas para revelar informação que cada uma, separadamente, não contém.

## Como funciona na defesa

Uma correlação começa com registros que possam ser comparados. A equipe precisa saber o que cada campo representa, a qual entidade se refere e em que momento a observação ocorreu. Campos com o mesmo nome podem ter semânticas diferentes entre produtos; campos com nomes diferentes podem representar a mesma coisa. Uma preparação consistente normaliza formatos, preserva os valores originais relevantes e registra a proveniência da informação para que a interpretação possa ser refeita.

Em seguida, escolhe-se uma relação que responda a uma pergunta defensiva. A relação pode ser temporal — um evento ocorreu depois de outro dentro de uma janela —, de identidade — vários registros apontam para a mesma conta —, de ativo — diferentes sensores observam a mesma máquina —, ou contextual — uma ação se deu em uma sessão, aplicação ou ambiente relacionado. Muitas análises combinam esses critérios. A relação deve ser explícita o suficiente para que outro analista compreenda por que aqueles registros foram agrupados.

Regras podem exigir ordem, proximidade temporal, sinais de tipos diferentes, repetição ou mudança em relação ao comportamento habitual. A ausência de um registro não demonstra que uma ação não ocorreu: pode haver lacuna de cobertura, atraso ou falta de coleta.

O resultado normalmente é um alerta, um agrupamento de registros ou uma hipótese de investigação. O analista verifica se as fontes são independentes ou se um mesmo sistema replicou o evento; confere se a ordem temporal é confiável; busca evidências que confirmem ou enfraqueçam a hipótese; e registra a conclusão com o grau de confiança apropriado. Quando a relação se sustenta, o grupo de eventos pode compor um incidente ou orientar contenção. Quando não se sustenta, ainda pode revelar uma regra mal calibrada, uma identidade ambígua ou uma lacuna de telemetria.

### Horários e identidades

A nota prática essencial é padronizar horários e identidades antes de interpretar uma sequência como cadeia de ataque. Fontes podem usar fusos, formatos, precisão e relógios diferentes. Um registro pode representar o instante em que uma ação ocorreu; outro, quando foi recebido ou processado. Atrasos de coleta e diferenças entre relógios podem inverter a ordem aparente, criar intervalos artificiais ou juntar eventos que não se relacionam. A normalização precisa manter claro qual horário está sendo usado e, quando disponível, conservar a marca temporal original e a informação sobre sua origem.

Identidades também variam. Uma pessoa pode aparecer por nome de usuário, identificador interno, endereço de correio, sessão ou conta de serviço; um ativo pode ter nome local, nome de domínio, endereço de rede ou identificador de inventário. Valores iguais podem referir-se a entidades distintas em domínios diferentes, e uma mesma entidade pode aparecer com valores diferentes após renomeação, rotação ou mudança de contexto. O vínculo entre identificadores deve ser sustentado por dados de diretório, inventário, sessão ou outra fonte adequada, e não por semelhança textual apenas.

A padronização não deve apagar incertezas. Se não for possível vincular duas identidades com segurança, a relação deve ser tratada como possível, não confirmada. Se o desvio dos relógios for desconhecido, a ordem deve ser considerada aproximada. Essa disciplina evita que uma visualização convincente pareça mais precisa do que os dados permitem.

## Evidências que sustentam uma relação

Uma relação fica mais compreensível quando o alerta apresenta os registros de origem e os atributos que os conectam: horário e fonte, identificadores de conta e ativo, sessão ou processo, ação observada e regra que reuniu o conjunto. A proveniência permite voltar ao registro original e avaliar se a transformação preservou seu sentido.

Proximidade temporal pode fortalecer uma hipótese, mas não basta. Eventos próximos podem ser independentes; eventos distantes podem pertencer à mesma atividade se houver atrasos ou etapas sem registro. Também é preciso saber se as fontes são independentes: produtos podem replicar a mesma observação, e contar cópias como confirmações distintas inflaria a confiança. O analista deve procurar confirmação e contradição, registrar o que não conseguiu verificar e evitar tratar ausência de contradição como prova.

## Exemplo hipotético

Considere, como exemplo hipotético, uma conta que apresenta autenticação a partir de um contexto incomum. Pouco depois, o serviço de identidade registra uma alteração de privilégio; mais tarde, um endpoint associado à conta registra acesso a um recurso sensível. Lidos isoladamente, cada evento admite explicações legítimas. Relacionados por identidade, ativo, sessão e ordem temporal, formam uma hipótese coerente de uso indevido da conta e justificam investigação prioritária.

A equipe não deve encerrar a análise ao ver a sequência. Deve validar se a identidade corresponde à mesma pessoa ou processo nos três registros, se os relógios estão alinhados e se a atribuição do endpoint é correta. Pode verificar se a mudança de privilégio foi aprovada, se havia atividade administrativa planejada, se a autenticação gerou uma sessão contínua e se há registros independentes que sustentem o acesso. Se a conta for compartilhada ou de serviço, isso altera substancialmente o valor do vínculo.

Suponha agora que o horário de um dos sistemas estivesse em outro fuso não normalizado. A aparente ordem entre alteração de privilégio e acesso poderia estar invertida. A correlação inicial continuaria útil como pista, mas a narrativa de progressão precisaria ser corrigida antes de qualquer conclusão sobre causalidade. Esse exemplo mostra por que uma sequência temporal plausível não equivale a uma cadeia comprovada.

## Distinções com termos próximos

**Agregação** reúne registros, por exemplo, por período, conta ou ativo. Pode facilitar a consulta, mas não necessariamente estabelece uma relação interpretativa entre os itens. Correlação acrescenta uma hipótese de vínculo — temporal, identitário, contextual ou outra — que deve poder ser examinada.

**Enriquecimento** acrescenta contexto a um registro, como o proprietário de um ativo ou a criticidade de uma conta. Pode melhorar uma correlação, mas não é a mesma operação: enriquecer um evento não prova que ele se relaciona com outro. Uma análise pode agregar, enriquecer e correlacionar em etapas complementares.

**Detecção de anomalia** identifica desvio em relação a uma referência, que pode ser um padrão esperado ou um modelo de comportamento. Correlação pode usar esse desvio como um dos sinais, mas também pode relacionar eventos sem qualquer anomalia individual. Um comportamento raro não é necessariamente malicioso, e uma sequência suspeita pode ser composta por eventos comuns.

**Causalidade** afirma que um evento produziu ou contribuiu para outro. Correlação de eventos identifica relações e sequências compatíveis com uma hipótese, mas a proximidade ou associação não demonstra causalidade. Uma conclusão causal requer evidência adicional e consideração de explicações alternativas. Em relatórios, prefira descrever o que os registros mostram e qual relação é inferida, sem apresentar inferência como fato observado.

**Encadeamento de eventos** costuma enfatizar a ordem de etapas numa sequência. Pode ser um resultado de correlação, mas não cobre necessariamente todas as formas de relação, como ocorrências paralelas ligadas a um mesmo ativo. **Agrupamento de alertas** reúne notificações para reduzir duplicação ou organizar um caso; pode usar correlação, porém a simples consolidação não garante que os alertas componham uma única atividade.

## Limitações e erros de interpretação

A correlação depende da cobertura, retenção e qualidade da telemetria. Uma fonte ausente, campo inconsistente ou período de retenção curto pode ocultar etapas; uma lacuna não prova que nada ocorreu. Regras amplas podem unir atividades legítimas que compartilham conta ou janela temporal. Regras estreitas podem perder variações, atrasos de ingestão ou identificadores alternativos. A janela deve refletir a pergunta e o ambiente: ampliá-la pode capturar eventos atrasados, mas também combinar atividades independentes.

Há risco de viés de confirmação: após surgir uma hipótese de ataque, eventos seguintes podem parecer confirmação e sinais incompatíveis serem ignorados. Registre alternativas, separe observação de interpretação e procure dados que possam refutar a narrativa. Identidades compartilhadas, contas de serviço, NAT, ativos reutilizados e inventário desatualizado dificultam atribuição. Um endereço de rede não identifica necessariamente pessoa ou dispositivo; um evento associado a uma conta não prova quem a utilizou.

Uma pontuação, grafo ou linha do tempo é uma representação de critérios e dados, não um juízo infalível. Regras opacas e alertas sem acesso aos registros de origem dificultam contestação. Para uso operacional, conserve os critérios e permita inspeção dos elementos que geraram o resultado.

## Implicações para resposta a incidentes

Uma correlação consistente pode acelerar a triagem e indicar evidências a preservar, mas contenção deve considerar confiança e custo de uma ação equivocada. Em risco elevado, pode ser apropriado agir enquanto a investigação prossegue; registre a justificativa e a incerteza. Preserve registros originais, proveniência e visão normalizada para permitir revisar horários, vínculos de identidade e filtros.

Para delimitar o escopo, procure identificadores relacionados em outros ativos e períodos, guiado pela hipótese e pelo risco. Não trate toda ocorrência semelhante como parte do mesmo incidente: agrupar demais mistura casos, e agrupar de menos pode ocultar atividade distribuída. Depois, identifique se uma falha veio de relógios divergentes, identificadores não mapeados, atraso ou regra inadequada; corrigir só o critério pode deixar dados deficientes sem solução.

## Perguntas frequentes

### Uma correlação confirma um ataque?

Não. Ela indica que registros se relacionam segundo determinados critérios e pode sustentar uma hipótese. A confirmação depende da qualidade e independência das evidências, do contexto e da análise de explicações alternativas. O relatório deve separar eventos observados de conclusões inferidas.

### Como comunicar uma relação incerta?

Descreva quais eventos foram relacionados, quais atributos sustentam o vínculo, que limitações existem e que evidência adicional falta. Use formulações proporcionais quando a relação ainda não estiver confirmada.

## Relação com o capítulo

Na versão original, o capítulo 6 oferece o contexto de leitura relacionado a este verbete. A correlação de eventos conecta observações parciais e ajuda a compreender como a detecção defensiva pode reconhecer relações que nenhum registro isolado revela. A aplicação rigorosa depende de qualidade de dados, contexto e validação cuidadosa.
