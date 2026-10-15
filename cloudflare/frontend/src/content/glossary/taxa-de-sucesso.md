# Taxa de sucesso

## Definição e escopo

Taxa de sucesso é a proporção de casos que atenderam a critérios previamente definidos de contenção ou recuperação. Em resposta a incidentes, o termo resume em que medida uma população de eventos ou casos chegou a um resultado defensivo considerado aceitável. A expressão sinônima “taxa de sucesso da resposta” enfatiza que o resultado depende do trabalho de resposta, mas não altera o requisito central: definir antes o que significa ter sucesso.

A métrica pode ser expressa como casos bem-sucedidos divididos pelo total de casos elegíveis, multiplicado por cem quando apresentada como percentual. A fórmula é simples; a parte difícil é estabelecer o que conta como caso, qual resultado satisfaz o critério, qual janela de observação será usada e quais eventos entram no denominador. Sem essas decisões documentadas, duas taxas com o mesmo nome podem descrever realidades diferentes.

“Sucesso” não é uma propriedade intrínseca de um incidente. É uma classificação baseada em objetivos, evidências e limites definidos para determinado contexto. Um caso pode satisfazer o objetivo de conter a propagação observada e, ainda assim, manter dúvidas sobre persistência ou exposição de dados. O rótulo precisa indicar qual objetivo foi avaliado; não deve transformar uma conclusão delimitada em afirmação de que todo risco desapareceu.

## Como a métrica é construída

Antes de contar, a equipe precisa fixar a unidade de análise. Ela pode ser um incidente, um alerta investigado, uma solicitação de resposta ou uma campanha que reúna vários alertas relacionados. A escolha depende da pergunta gerencial ou técnica. Se alertas do mesmo incidente forem contados como casos separados, uma única ocorrência poderá pesar muitas vezes. Se vários incidentes forem agrupados sem regra consistente, diferenças importantes podem desaparecer.

Em seguida, a equipe define os critérios de êxito. Para contenção, critérios possíveis incluem interromper a atividade maliciosa identificada, limitar a comunicação entre ativos afetados e não observar novos sinais relacionados durante uma janela estabelecida. Para recuperação, podem incluir restaurar serviços a partir de estado considerado confiável, validar controles de acesso e confirmar a operação com as áreas responsáveis. São exemplos de desenho de métrica, não requisitos universais. Cada organização deve relacioná-los ao seu modelo de risco e às suas responsabilidades.

O denominador reúne os casos elegíveis segundo regras publicadas. Pode haver casos ainda em andamento, cancelados, duplicados, fora do escopo ou sem dados suficientes. Essas categorias não devem ser ocultadas sob uma exclusão genérica. Convém declarar como foram tratadas e manter seus totais visíveis. Em alguns relatórios, casos pendentes são separados; em outros, são considerados não bem-sucedidos até que haja evidência para encerrá-los. A regra escolhida altera a leitura e precisa permanecer estável ao longo da comparação.

O numerador corresponde aos casos do denominador que satisfizeram todos os critérios aplicáveis. Uma resposta parcialmente eficaz não deve ser promovida a êxito completo apenas porque uma ação importante foi realizada. Se o objetivo foi parcialmente atendido, uma classificação intermediária ou uma métrica complementar pode preservar essa nuance. Quando não há evidência suficiente para confirmar o resultado, “desconhecido” é mais fiel do que presumir sucesso ou fracasso.

A janela de avaliação também é parte da definição. Um serviço pode voltar a operar e falhar novamente depois; um indicador de atividade pode cessar temporariamente e reaparecer. O período de observação deve ser coerente com a ameaça, com os sistemas envolvidos e com a capacidade de monitoramento. Ele deve ser declarado para que “sem recorrência observada” não seja confundido com “recorrência impossível”. A taxa pode ser atualizada quando surgem evidências novas, desde que a política de revisão seja clara e as versões anteriores permaneçam rastreáveis.

## Uso na prática defensiva

A taxa é útil para acompanhar se a capacidade de resposta alcança resultados operacionais definidos, comparar períodos sob critérios constantes e localizar etapas que merecem revisão. Uma queda pode sinalizar maior complexidade dos casos, limitações de visibilidade, dependências externas, atrasos ou critérios mais exigentes. Uma alta pode indicar processos maduros, mas também pode refletir uma população de casos mais simples ou regras permissivas. A métrica, sozinha, não explica a causa.

Em uma revisão de incidente, ela pode ajudar a responder perguntas como: os casos comparáveis chegaram à contenção dentro do padrão adotado? A recuperação foi confirmada ou apenas declarada? Há classes de ativos ou equipes em que os critérios são atingidos com menor frequência? A resposta é mais útil quando leva à investigação de mecanismos concretos — por exemplo, disponibilidade de telemetria, clareza de responsabilidades ou dependências de restauração — em vez de funcionar como nota isolada para uma equipe.

Para planejamento, a série histórica pode apoiar decisões sobre capacitação, cobertura de monitoramento, redundância de serviços e procedimentos de recuperação. É preciso cruzá-la com a natureza dos casos e com medidas de tempo, impacto e recorrência. Uma taxa agregada não deve servir como atalho para comparar equipes que recebem escopos, severidades ou recursos diferentes. A interpretação exige contexto e oportunidade para registrar limitações dos dados.

## Evidências e investigação

A classificação de cada caso deve poder ser reconstruída a partir de registros. Evidências úteis incluem a linha do tempo de resposta, os critérios associados ao caso, registros de alteração de configuração, decisões de isolamento, alertas posteriores, resultados de validação e confirmação da recuperação por responsáveis técnicos ou de negócio. Inventários de ativos e relações entre alertas também ajudam a estabelecer se vários registros pertencem ao mesmo incidente.

O registro precisa separar ação executada de resultado observado. “Host isolado” descreve uma intervenção; não demonstra, por si só, que a contenção foi bem-sucedida. “Serviço disponível” comprova disponibilidade em algum instante, mas não necessariamente integridade, segurança ou restauração completa. A evidência deve ser ligada ao critério: qual observação sustenta a conclusão, em que momento foi obtida, por quem ou por qual sistema e com qual escopo.

Ao investigar a taxa, examine também os casos que ficaram fora do cálculo e os que foram reclassificados. Procure alterações nos campos de encerramento, justificativas de exclusão, mudanças de severidade, duplicações e lacunas entre o sistema de chamados e as fontes de telemetria. Uma trilha de auditoria permite saber se as regras foram aplicadas de modo uniforme e se uma conclusão foi atualizada por causa de novas evidências, em vez de uma mudança retrospectiva de conveniência.

A ausência de alertas posteriores é uma evidência limitada pela cobertura e pela qualidade da observação. Se a coleta estava interrompida, se os registros foram retidos por pouco tempo ou se os ativos relevantes não eram monitorados, silêncio não equivale a confirmação de contenção. O relatório deve registrar essas lacunas. Quando não for possível avaliar um critério, a incerteza precisa aparecer na classificação ou em uma ressalva explícita.


## Distinções importantes

### Taxa de sucesso e taxa de contenção

Taxa de contenção costuma se concentrar no cumprimento de objetivos de contenção. Taxa de sucesso pode abranger contenção ou recuperação, conforme a definição adotada. Se um relatório usar os termos como equivalentes, deve dizer exatamente qual resultado está contando. Um caso contido, mas ainda não recuperado, pode ser sucesso para uma meta de contenção e não para uma meta de recuperação.

### Taxa de sucesso e tempo de resposta

Tempo de resposta mede duração entre marcos definidos, como detecção, triagem ou contenção. A taxa mede a proporção de casos que alcançou um resultado. Uma organização pode conter muitos casos, porém lentamente; ou agir rapidamente em vários casos sem conseguir confirmar a recuperação. Combinar as medidas ajuda a ver dimensões distintas, mas não se deve inferir uma a partir da outra.

### Taxa de sucesso e eficácia

Eficácia é uma avaliação mais ampla de quanto uma resposta alcançou seus objetivos e reduziu consequências relevantes. A taxa é um indicador operacional que pode contribuir para essa avaliação, mas não representa todas as dimensões. Ela não mede automaticamente o impacto evitado, a qualidade da investigação, os custos, a experiência dos usuários nem a possibilidade de recorrência fora da janela observada.

### Taxa de sucesso e taxa de detecção

Taxa de detecção trata da identificação de eventos relevantes, sob um universo e critérios próprios. A taxa de sucesso da resposta começa depois ou durante a identificação, conforme o processo definido, e avalia resultados de contenção ou recuperação. Uma organização pode detectar muitos eventos e responder mal, ou responder bem aos casos identificados enquanto deixa eventos sem detecção. São perguntas diferentes.

## Limitações e leituras equivocadas

A principal ameaça à validade é alterar critérios depois de conhecer os resultados. Se a equipe amplia a noção de êxito para incluir casos que antes falhariam, ou retira incidentes difíceis do denominador, a taxa melhora sem que a capacidade tenha mudado. A regra deve ser definida antes da avaliação e as alterações devem ser versionadas, justificadas e acompanhadas de uma série comparável, quando possível. A nota prática é direta: a métrica perde valor quando critérios mudam após o resultado ou incidentes difíceis são excluídos.

Outra limitação é a composição da população. Casos de baixa severidade e resposta padronizada podem ser mais frequentes em um período; no seguinte, a equipe pode receber poucos casos, porém complexos. O percentual agregado pode então variar por causa da mistura, não da qualidade do processo. Segmentar por tipo, criticidade, ambiente ou dependência pode esclarecer essa diferença, desde que haja volume e proteção suficientes para não expor informações sensíveis nem produzir conclusões instáveis.

A taxa também pode incentivar comportamentos indesejados se virar meta isolada. Equipes podem preferir encerrar casos fáceis, reclassificar pendências, limitar o registro de incerteza ou concentrar esforço no que conta para o numerador. Para reduzir esse risco, critérios devem valorizar evidência e segurança, e a taxa deve ser lida junto com pendências, recorrências, impacto e qualidade dos registros. O propósito é aprender e alocar capacidade, não premiar um percentual descontextualizado.

Percentuais sem contagens absolutas escondem o tamanho da amostra. Uma mudança pequena no número de casos pode alterar bastante uma taxa calculada sobre poucos incidentes. Apresente o numerador, o denominador, o período e as exclusões, além do percentual. Evite afirmar tendência robusta quando os dados não sustentam essa leitura. Em períodos curtos, comentários sobre casos específicos podem ser mais informativos que comparações numéricas.

Por fim, “sucesso” pode ser confundido com ausência de dano. Uma resposta que conteve uma atividade observada não demonstra necessariamente que nenhum dado foi acessado, que nenhum ativo permaneceu comprometido ou que a organização não sofrerá efeitos posteriores. A taxa fala sobre critérios delimitados. O relatório deve evitar linguagem absoluta e distinguir resultado confirmado, resultado provável e questão ainda aberta.



## Pergunta frequente

### Como tratar casos sem evidência suficiente?

Registre-os como inconclusivos e informe como entram no cálculo. Não transforme falta de telemetria em confirmação de contenção nem exclua silenciosamente esses casos do denominador. Identifique quais registros faltaram e se a lacuna limita a conclusão; a equipe poderá então corrigir a coleta e reavaliar o resultado se surgirem evidências novas.

## Relação com o capítulo

Na versão original, este verbete se relaciona ao capítulo 9. A métrica ajuda a transformar objetivos de contenção e recuperação em resultados verificáveis, desde que o escopo, os critérios e as limitações permaneçam explícitos.
