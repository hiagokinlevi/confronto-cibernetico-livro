# Análise comportamental

## Conceito

Análise comportamental, também chamada *behavior analytics*, é a avaliação de sequências e desvios de atividade para identificar ações que merecem investigação. Em vez de depender apenas de assinaturas previamente conhecidas — como um indicador, uma regra de correspondência ou um padrão fixo de conteúdo —, ela considera o que aconteceu, em que ordem, em qual contexto e como isso se compara ao funcionamento esperado. O objeto pode ser uma conta, estação, servidor, serviço, aplicação ou outro ativo observável.

“Desvio” não significa “ataque”: é um sinal para testar hipóteses. Uma atividade incomum pode decorrer de mudança legítima, tarefa excepcional, falha de coleta ou comprometimento. A interpretação depende do papel do ativo e de uma linha de base apropriada; um servidor e uma estação de trabalho não têm as mesmas expectativas.

A análise ganha sentido ao relacionar eventos. Um acesso isolado pode ser comum; a sequência de acesso de local atípico, consulta a recursos incomuns e alteração de permissões pode exigir verificação.

## O que é observado

As fontes dependem da arquitetura e dos registros disponíveis. Podem incluir autenticação, uso de aplicações, atividade de processos, consultas a serviços, alterações de configuração, acesso a arquivos e fluxos de rede. Em geral, cada registro descreve algum aspecto da atividade: quem ou o que agiu, em qual ativo, sobre qual recurso, quando e com que resultado. Nem toda fonte oferece todos esses campos, e os dados não são necessariamente comparáveis sem normalização e contexto.

O comportamento pode ser examinado em diferentes níveis:

- **Entidade:** uma conta, dispositivo, processo, serviço ou aplicação e sua atividade ao longo do tempo.
- **Relação:** interações entre entidades, como uma conta acessando um conjunto de sistemas ou um processo iniciando outro.
- **Sequência:** ordenação de eventos e transições, inclusive mudanças de contexto entre etapas.
- **Conjunto:** atividade agregada em uma janela temporal, como volume, diversidade de destinos ou distribuição de horários.

Esses níveis se complementam: contagens mostram mudanças, mas podem ocultar ordem; sequências revelam encadeamentos, mas exigem contexto. Convém preservar registros detalhados e visão agregada.

## Como funciona na defesa

Uma implementação defensiva começa por decidir quais entidades e atividades serão monitoradas e que perguntas a detecção deve ajudar a responder. Em seguida, reúne eventos de fontes pertinentes, alinha horários, identifica entidades de modo consistente e registra lacunas e limitações de coleta. Se um mesmo dispositivo aparece com identificadores diferentes ou os relógios estão dessincronizados, as relações temporais podem ficar distorcidas; esse problema deve ser considerado antes de interpretar a sequência.

A linha de base descreve atividade esperada em contexto definido e pode refletir histórico da entidade, grupo comparável ou função operacional. A comparação deve considerar papel, finalidade, período e mudanças autorizadas. Uma média ampla pode esconder padrões legítimos de equipes especializadas.

A detecção procura diferenças de frequência, horário, origem, destino, recursos, sequência ou relação entre entidades. Pode usar regras explícitas, métodos estatísticos ou modelos. Em todos os casos, o alerta é uma indicação contextual a examinar, não uma declaração automática de intenção maliciosa.

O resultado deve permitir reconstruir por que a atividade chamou atenção. Um alerta útil informa quais entidades participaram, qual intervalo foi observado, quais eventos sustentam a observação e qual referência foi usada para comparação. Se a ferramenta fornece somente uma pontuação, sem evidências ou contexto interpretável, o analista pode ter dificuldade para validar o achado ou explicar sua prioridade. Pontuações ajudam a ordenar trabalho; isoladamente, não demonstram comprometimento.

## Linha de base e contexto

Uma linha de base é uma referência de comparação, não uma regra rígida sobre o que uma entidade pode fazer. Ela é mais informativa quando separa diferenças relevantes: horário comercial e plantão, atividade de usuários e de serviços, períodos de manutenção e operação normal, ambientes de produção e homologação. O contexto pode vir de inventário, função do ativo, proprietário, mudanças aprovadas, calendário operacional e histórico de incidentes, além dos próprios registros técnicos.

A referência deve acompanhar mudanças operacionais, como migração ou nova aplicação. Incorporar automaticamente toda novidade pode normalizar atividade indevida persistente; atualizar a linha de base requer governança e revisão.

O contraste entre entidade e grupo pode ser valioso. Uma conta pode parecer normal quando comparada a si mesma, mas diferir de contas com a mesma função; inversamente, pode parecer rara no grupo geral e ser habitual em sua equipe. Nenhuma comparação resolve tudo. O analista deve perguntar qual população serve de referência, por que serve e que fatores fazem uma diferença ser esperada ou preocupante.

## Onde aparece na investigação

A análise comportamental pode participar da detecção inicial, da triagem de alertas e da reconstrução posterior de um incidente. Na triagem, ajuda a selecionar eventos que destoam do uso observado e a localizar atividades relacionadas. Na investigação, permite ampliar a linha do tempo: verificar o que ocorreu antes e depois, quais outras entidades interagiram com o ativo e se a mudança se repetiu. Também pode ajudar a identificar o alcance aparente de uma atividade, sem confundir os limites dos registros com os limites reais do incidente.

Correlacionar fontes importa: autenticação pode mostrar uso de uma conta e registros do sistema revelar o que veio depois. Coincidência de identidade, horário e ativo fortalece a hipótese; eventos ausentes, identificadores inconsistentes e retenção curta podem deixar a sequência incompleta.

Na resposta a incidentes, os achados orientam perguntas e prioridades: validar com o responsável, conferir mudanças aprovadas, preservar registros e buscar sinais relacionados. Contenção deve seguir o processo organizacional e considerar impacto; alerta isolado não determina bloqueio ou causa.

## Evidências que ajudam a reconhecer um desvio

Nenhum indicador isolado é universal. A interpretação fica mais sólida quando evidências independentes formam uma explicação coerente. Entre os elementos que podem ajudar estão:

- diferença persistente em relação ao histórico pertinente, e não apenas um evento raro;
- sequência de ações incompatível com a função conhecida da conta ou do ativo;
- mudança de origem, destino, horário ou recurso associada a outras alterações relevantes;
- eventos correlatos em fontes distintas, com tempos e identidades consistentes;
- ausência de mudança aprovada que explique a atividade, após consulta a registros e responsáveis;
- repetição, expansão ou encadeamento que indique que a ocorrência não foi simplesmente pontual.

A ausência de um dado não comprova que algo não aconteceu. Logs podem estar incompletos, ter sido perdidos, expirar ou não cobrir determinada aplicação. Da mesma forma, a presença de um dado não esclarece sozinha quem estava por trás da ação: uma identidade registrada pode ser compartilhada, delegada ou usada por automação. A qualidade da conclusão depende tanto das evidências presentes quanto da compreensão sobre o que cada fonte consegue e não consegue mostrar.

## Distinções com termos próximos

**Detecção baseada em assinatura** procura correspondência com características ou padrões já descritos. Pode ser precisa para ocorrências conhecidas, mas não cobre necessariamente variações novas. A análise comportamental amplia o olhar para sequências e desvios em contexto; pode coexistir com assinaturas e outras formas de detecção. Não é garantia de identificar qualquer atividade inédita.

**Detecção de anomalias** costuma designar a identificação de observações incomuns em relação a uma referência. A análise comportamental pode usar detecção de anomalias, mas tem escopo mais amplo: relaciona atividade, entidades, sequência e função. Uma anomalia estatística é uma diferença mensurável; comportamento é a interpretação de ações no contexto operacional.

**Análise de comportamento de usuários e entidades** é uma aplicação do conceito que examina atividade de usuários, dispositivos, serviços ou outras entidades. A terminologia e o escopo variam entre produtos. A análise comportamental não depende de uma categoria comercial específica nem exige uma plataforma determinada.

**Monitoramento de atividade** coleta e apresenta eventos. A análise vai além da observação ao comparar padrões, relacionar ações e apoiar uma hipótese. Coleta ampla sem contexto não é, por si só, análise comportamental; uma detecção útil depende de dados adequados e interpretação.

## Limitações e erros de interpretação

O risco conceitual principal é equiparar incomum a malicioso: emergências, novos fluxos e manutenção também geram desvios. O inverso é tratar recorrência como legitimidade; um padrão pode refletir configuração inadequada ou atividade indevida não investigada.

Outras limitações são práticas. Registros com baixa cobertura deixam pontos cegos; retenção insuficiente prejudica comparações; relógios desalinhados comprometem ordem temporal; dados de identidade inconsistentes confundem relações. Ambientes com muita variação legítima podem produzir alertas demais, enquanto referências excessivamente amplas ou desatualizadas podem deixar passar diferenças importantes. Modelos e regras também podem reagir a mudanças na coleta, não apenas a mudanças na atividade real.

Automação pode resumir volumes, mas pontuação de risco não revela necessariamente evidências nem ação adequada. Não se deve inferir intenção, autoria ou impacto apenas pelo desvio. Registrar incertezas, alternativas e fontes torna a conclusão auditável.

## Operação responsável

A detecção precisa de manutenção contínua. A equipe pode revisar alertas encerrados, identificar lacunas de coleta e ajustar a referência quando houver mudança operacional confirmada. Reduzir ruído sem examinar sua causa pode ocultar sinais relevantes; regras sensíveis demais podem sobrecarregar a triagem. Exceções devem ter escopo e revisão, pois uma exclusão ampla pode remover visibilidade de entidades que mudaram de função.

Dados de atividade podem revelar hábitos, relações de trabalho e informações sensíveis. A coleta deve ter finalidade definida, acesso limitado a quem precisa investigar, retenção compatível com as regras aplicáveis e tratamento coerente com políticas internas.

## Perguntas frequentes

### Uma atividade rara indica comprometimento?

Não. Raridade é motivo possível para comparação e investigação, mas deve ser avaliada em relação ao papel do ativo, à linha de base e às mudanças conhecidas. Uma atividade rara pode ser legítima; uma atividade frequente também pode merecer atenção.

### Uma linha de base elimina falsos positivos?

Não. Ela melhora a comparação quando representa a entidade e o período pertinentes, mas mudanças legítimas, coleta incompleta e referências inadequadas ainda podem gerar alertas enganosos. A revisão da linha de base é parte do trabalho, não uma garantia de precisão.

### Como diferenciar uma mudança autorizada de uma atividade suspeita?

Cruze a sequência observada com registros de mudança, calendário, finalidade do ativo e confirmação do responsável. Verifique se a explicação corresponde aos eventos concretos, aos horários e aos recursos envolvidos. Se restarem contradições, preserve essa incerteza e continue a investigação segundo os procedimentos da organização.

### O que deve ser registrado ao encerrar um alerta?

A conclusão, as evidências consultadas, a referência de comparação, a explicação validada ou as dúvidas restantes e qualquer ajuste de detecção recomendado. Esse registro ajuda a evitar que a mesma ocorrência seja investigada repetidamente sem contexto e permite revisar decisões futuras.

## Relação com o capítulo

No capítulo 6 da versão original, o termo se relaciona à perspectiva de detectar atividade pelo encadeamento e pelos desvios observados. O ponto prático permanece: comparar com a função do ativo e com uma linha de base pertinente, tratando o alerta como hipótese a verificar. Essa abordagem ajuda a organizar a investigação mesmo quando nenhuma assinatura conhecida descreve exatamente a atividade encontrada.
