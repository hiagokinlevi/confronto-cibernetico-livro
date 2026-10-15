# Inteligência tática

## Definição e finalidade

Inteligência tática é informação específica sobre o comportamento de um adversário que orienta decisões operacionais de detecção e resposta. Seu valor está na ligação entre observação e ação: ajuda uma equipe a decidir o que procurar, em que contexto, com qual prioridade e qual medida defensiva pode reduzir o risco. Não é simplesmente um conjunto de indicadores, uma descrição de um ataque ou um resumo de notícias. É conhecimento preparado para apoiar uma escolha concreta em um ambiente, período e missão determinados.

O termo “tática” indica proximidade com a execução das operações defensivas. Uma análise tática pode orientar a busca em telemetria, a triagem de um alerta, a validação de uma hipótese de comprometimento, o ajuste de uma regra de detecção, o bloqueio de uma infraestrutura ou a contenção de um dispositivo. A recomendação precisa ser suficientemente específica para ser aplicada, mas também deve explicitar as condições em que faz sentido. Uma instrução como “bloqueie este domínio” é incompleta se não esclarecer a confiança na associação, a janela de validade e os possíveis efeitos sobre serviços legítimos.

A inteligência tática não substitui julgamento profissional nem transforma observações incompletas em certeza. Ela organiza evidências e interpretações para apoiar uma decisão dentro de limites conhecidos. Uma boa peça informa o que se observou, o que se infere, quais alternativas permanecem plausíveis e como o defensor pode confirmar ou refutar a hipótese. Assim, preserva a diferença entre dado, avaliação e recomendação.

## O que a torna tática

Em geral, uma informação tática responde a perguntas operacionais como: qual comportamento deve ser detectado? Que fontes de dados podem registrá-lo? Em quais sistemas ou segmentos a hipótese é pertinente? O que deve ser preservado antes de conter? Qual ação é reversível e proporcional? Que resultado justificaria ampliar a resposta? As respostas podem ser curtas em uma comunicação urgente, mas a lógica que as sustenta precisa estar disponível para quem executará ou revisará a decisão.

## Como funciona no ciclo defensivo

Em seguida, analistas reúnem observações de telemetria, relatos de equipes, artefatos de incidentes e outras fontes permitidas. Eles verificam procedência, integridade, horário, cobertura e limitações. Dados semelhantes podem ter significados diferentes conforme a configuração local. Um processo administrativo legítimo pode se parecer com atividade adversária; uma ausência de alerta pode refletir falta de sensor, retenção insuficiente ou uma regra que não cobre o comportamento. A análise precisa considerar tanto sinais positivos quanto lacunas de observação.

Por fim, a avaliação é convertida em ação e retroalimentação. A equipe decide se busca ocorrências correlatas, coleta dados adicionais, ajusta a cobertura ou contém um ativo. O resultado da decisão — confirmação, falso positivo, ausência de dados ou efeito colateral — retorna aos analistas. Esse retorno corrige a avaliação e melhora recomendações futuras. Inteligência tática, portanto, não é apenas um produto entregue: é parte de um ciclo de pergunta, análise, decisão e revisão.

## Evidências e sinais de reconhecimento

O comportamento adversário costuma ser mais útil para a defesa do que uma lista descontextualizada de artefatos. Evidências podem incluir relações temporais entre eventos, sequência de ações em um endpoint, padrão de autenticação, comunicação entre sistemas, alteração inesperada de configuração ou acesso a recursos fora do perfil esperado. Nenhum sinal deve ser interpretado automaticamente como prova de intrusão. A força da avaliação aumenta quando fontes independentes convergem e quando explicações benignas foram consideradas.

Na prática, uma recomendação tática de qualidade tende a indicar:

- o comportamento ou a hipótese sob investigação, em termos observáveis;
- quais fontes, campos, ativos e intervalo de tempo podem confirmar ou enfraquecer a hipótese;
- por que a evidência é relevante e qual é o nível de confiança;
- que limitações de coleta ou de contexto afetam a conclusão;
- qual ação é sugerida, quem pode executá-la e qual resultado deve ser observado;
- quando a recomendação deve ser reavaliada, especialmente se indicadores mudarem ou perderem atualidade.

A ausência de evidência só é informativa quando se conhece a capacidade de observação. Se um sistema não registra determinado evento, a consulta não pode provar que o evento não ocorreu. Da mesma forma, encontrar um artefato não prova por si só que o comportamento relacionado aconteceu naquele ativo. Pode haver reutilização legítima, resíduo de software ou correspondência acidental. A avaliação deve dizer o que o dado demonstra e o que não demonstra.

## Onde aparece na investigação e na resposta

Durante a triagem, inteligência tática ajuda a decidir se um alerta merece investigação prioritária e que evidências devem ser preservadas. Em busca proativa, pode transformar uma hipótese sobre comportamento em consultas para procurar vestígios que os alertas existentes não detectaram. Na análise de um incidente confirmado, ajuda a delimitar escopo: quais outros ativos podem apresentar a mesma sequência, quais credenciais ou serviços estão relacionados e que eventos antecedem ou sucedem o indício inicial.

## Exemplo hipotético

Considere uma organização que observa, em um computador de uma área financeira, uma execução incomum de um processo seguida por uma conexão de saída não habitual. O registro de conexão, sozinho, não identifica o responsável nem prova comprometimento. Uma peça de inteligência tática poderia registrar que os dois eventos ocorreram em sequência, apontar a fonte dos logs e indicar que a combinação é compatível com uma hipótese de atividade maliciosa, mas também pode resultar de uma tarefa administrativa ainda não identificada.

A recomendação poderia orientar a equipe a preservar os eventos do endpoint e da rede, verificar a origem do processo, procurar a mesma sequência em outros computadores e confirmar com o responsável pelo sistema se havia uma mudança autorizada. Se a atividade continuar ou aparecer em outros ativos sem explicação plausível, a equipe pode escalar a investigação e considerar contenção conforme o impacto. Se a tarefa legítima for confirmada, deve registrar a explicação e ajustar a detecção para reduzir recorrências de falso positivo. O exemplo é hipotético: não descreve um incidente real nem uma assinatura universal.

## Distinções com conceitos próximos

### Inteligência estratégica

A inteligência estratégica apoia decisões de direção e planejamento com horizonte mais amplo, como prioridades de investimento, exposição de setores ou mudanças duradouras no cenário de risco. A inteligência tática trata de escolhas operacionais ligadas a comportamentos e situações específicas. Não são compartimentos estanques: uma tendência estratégica pode motivar uma busca tática, e incidentes observados taticamente podem revelar uma mudança relevante para o planejamento.

### Inteligência operacional

O uso do termo “operacional” varia entre organizações. Em certos modelos, ele descreve campanhas, objetivos e relações entre atividades ao longo de um período; em outros, é empregado para decisões da operação diária. Por isso, a distinção não deve depender apenas do nome da categoria. Convém declarar a pergunta respondida, o nível de detalhe, o público e a decisão pretendida. Uma análise de campanha pode gerar uma orientação tática quando indica que comportamento procurar agora.

### Dados, indicadores e inteligência

Dados são registros ou observações ainda sem interpretação suficiente para uma decisão. Indicadores são elementos que podem ajudar a reconhecer ou relacionar atividade, como um domínio, hash, endereço ou padrão de evento. Inteligência resulta de avaliação contextualizada, com relevância para uma necessidade e explicitação das incertezas. Um indicador pode ser parte da inteligência tática, mas não a substitui. A mesma lista pode ser útil em uma busca bem delimitada e inútil se não houver validade, contexto ou capacidade de observação.

### Procedimentos técnicos e inteligência

Um procedimento de resposta descreve como executar uma tarefa de forma controlada; inteligência informa por que a tarefa é pertinente, onde aplicá-la e que resultado esperar. Um manual pode orientar a coleta de evidência, enquanto a análise tática aponta quais evidências priorizar neste caso. A separação favorece revisão: o procedimento pode continuar válido mesmo quando a hipótese sobre um adversário muda, e a avaliação pode ser atualizada sem reescrever todo o manual.

## Limitações e erros de interpretação

A primeira limitação é temporal. Comportamentos, serviços, endereços e ferramentas mudam; uma observação válida ontem pode não justificar um bloqueio hoje. A validade não é igual para todos os elementos: um comportamento geral pode seguir relevante enquanto um endereço específico já foi abandonado ou passou a atender uso legítimo. Recomendações devem trazer data de observação e condição de revisão compatíveis com a decisão.

Outra limitação é a cobertura. Sensores ausentes, configurações diferentes, retenção curta, relógios desalinhados e ambientes terceirizados podem impedir a confirmação. A análise deve registrar esses limites, em vez de tratar silêncio como segurança. Um erro recorrente é atribuir identidade ou intenção com base em semelhança superficial. Um artefato compartilhado por vários grupos, uma infraestrutura comprometida ou uma ferramenta comum não identifica de maneira conclusiva quem agiu. Para a decisão defensiva, atribuição pode ser menos necessária do que reconhecer um comportamento e conter seus efeitos. Se a identidade não altera a ação recomendada, apresentá-la como certeza pode distrair e ampliar o risco de uma conclusão precipitada.

Também é um erro converter confiança em uma escala sem significado operacional. Rótulos como “alta” ou “baixa” confiança precisam estar ligados à qualidade e à convergência das evidências, não à segurança retórica do analista. A equipe deve entender o que falta para elevar ou reduzir a confiança e se a ação proposta ainda é apropriada sob a incerteza atual. Uma resposta proporcional pode ser investigar sem bloquear, ou conter preventivamente e revisar em seguida, conforme consequências e urgência.

## Compartilhamento, registro e governança

## Perguntas frequentes

### Inteligência tática é sempre produzida durante um incidente?

Não. Ela pode ser preparada para apoiar monitoramento e busca antes de um incidente, ou surgir durante a resposta. O critério é a finalidade operacional, não o momento. Uma hipótese produzida preventivamente também precisa estar vinculada a dados disponíveis, a um público e a uma ação possível.

### Um indicador isolado pode ser inteligência tática?

Pode ser um componente, mas raramente é suficiente por si só. Para orientar uma decisão, precisa de contexto: origem, validade, relação com comportamentos, ambiente em que foi observado e risco de uso legítimo. Quanto mais disruptiva a ação proposta, maior a necessidade de corroborar a informação e avaliar impactos.

## Relação com o capítulo da versão original

Na versão original, o capítulo 7 é o ponto de referência para este verbete.
