# Reconhecimento

## Conceito e escopo

Reconhecimento (em inglês, *reconnaissance*) é a coleta e a organização de informações sobre pessoas, serviços e infraestrutura associadas a um alvo, antes ou durante uma operação de intrusão. A definição descreve uma atividade, não um evento único nem uma ferramenta específica. Seu objetivo imediato é reduzir incerteza: compreender o que existe, como os componentes se relacionam, quais identidades ou serviços parecem relevantes e que mudanças merecem atenção. Em contexto defensivo, reconhecer essa atividade ajuda a interpretar sinais dispersos e a antecipar o que um adversário pode tentar em seguida.

O termo é usado em descrições de fases de ataque, mas essas fases são modelos para explicar uma operação, não uma sequência obrigatória observável em todo incidente. A coleta pode preceder qualquer acesso, continuar depois de um comprometimento ou reaparecer após uma pausa. Pode ser conduzida por uma pessoa, por processos automatizados, ou por ambos. E pode apoiar desde a seleção de alvos até a compreensão do ambiente já acessado. A presença de reconhecimento não prova que uma intrusão ocorreu; tampouco a ausência de sinais conhecidos prova que ninguém pesquisou a organização.

## Como observar defensivamente

Não existe uma fonte universal que mostre todo reconhecimento. Algumas atividades passam por serviços externos e deixam registros fora do controle direto da organização. Outras aparecem em logs de aplicações, DNS, autenticação, proxy, firewall ou sistemas de detecção de rede. Coletas feitas em fontes públicas podem não gerar qualquer evento local. A nota prática central é, portanto, contextual: exposição pública e logs de borda ajudam a avaliar o risco, mas nenhum deles é um retrato completo.

### Superfície externa e fontes públicas

Um inventário defensivo de domínios, endereços, serviços publicados, páginas e aplicações ajuda a comparar a exposição pretendida com a que pode ser observada de fora. Recursos esquecidos, ambientes de teste, portais de terceiros e nomes antigos podem ampliar essa superfície. Para cada ativo, convém conhecer finalidade, responsável e necessidade de exposição; sem isso, é difícil decidir se um achado é inesperado ou corrigir a condição com segurança.

### Telemetria de borda e registros internos

Logs de borda podem mostrar conexões repetidas, consultas a nomes inexistentes, acessos a caminhos variados, tentativas em diversos serviços ou padrões incompatíveis com o uso normal. Esses sinais podem indicar reconhecimento, mas também resultam de verificações automatizadas legítimas, indexação, monitoramento, pesquisas autorizadas ou erros de configuração. Um evento isolado raramente esclarece intenção.

A análise ganha força ao combinar intervalo de tempo, destino, protocolo, resultado, frequência, identidade autenticada e contexto operacional. Esses campos variam conforme a fonte e podem estar incompletos. Correlação entre firewall, proxy, DNS, aplicação, identidade e endpoint pode mostrar se houve somente observação externa ou interação mais significativa. Volume não equivale a gravidade: um padrão ruidoso pode ter sido bloqueado, enquanto uma consulta breve e direcionada pode fornecer informação valiosa.

## Evidências e investigação

O reconhecimento costuma aparecer como conjunto de indícios, não como um artefato conclusivo. Entre as evidências possíveis estão registros de DNS e de resolução de nomes, acessos em servidores web, telemetria de firewall e proxy, alertas de detecção, eventos de autenticação, histórico de alterações em ativos, mensagens recebidas por usuários e registros fornecidos por provedores. Em ambiente interno, podem ser relevantes consultas incomuns a diretórios, inventários de recursos, listagens de compartilhamentos e conexões a serviços que o usuário ou processo não costuma acessar.

A utilidade de cada evidência depende da pergunta. Para saber se um endereço recebeu conexões, o registro de borda pode ser apropriado; para saber se houve sessão autenticada, a trilha de identidade é mais direta; para saber o conteúdo efetivamente entregue por uma aplicação, talvez sejam necessários registros da própria aplicação. Não se deve inferir o conteúdo de uma consulta apenas pelo volume de tráfego se a fonte não registra esse conteúdo. Descreva limites de visibilidade explicitamente. Ao reconstruir a linha do tempo, separe observação de inferência. “O serviço registrou requisições para vários caminhos” é observação; “o operador procurava uma página administrativa” é hipótese. Preserve registros originais, metadados e horários conforme o procedimento de resposta. Anote fontes indisponíveis, retenção expirada, relógios desalinhados e dependência de provedores. Essas lacunas não confirmam nem refutam atividade.



## Exemplo hipotético

Considere uma organização fictícia que mantém um portal de suporte público. Durante uma manhã, o proxy registra acessos de uma mesma origem a várias páginas públicas e o firewall mostra conexões a um serviço de teste que deveria estar restrito. A equipe confirma no inventário que o serviço foi publicado por engano após uma mudança. Mais tarde, os logs de autenticação não mostram tentativas bem-sucedidas, e a aplicação registra apenas respostas de erro.

É razoável classificar os acessos observados como atividade compatível com reconhecimento e tratar a exposição do serviço como risco que requer correção. Ainda não é razoável concluir que houve comprometimento, que os dados foram consultados ou que a origem pertence a um adversário específico. A equipe preserva evidências, confirma o conteúdo acessível, restringe o serviço conforme o procedimento de mudança e verifica sinais de acesso ou exploração em fontes relacionadas. Se novas evidências surgirem, a avaliação muda; se não surgirem, a conclusão continua limitada ao que os registros permitem afirmar.

O exemplo mostra por que a resposta depende de dois eixos: a atividade observada e a condição do ativo. Mesmo sem intenção maliciosa demonstrada, um serviço exposto por engano pode exigir correção. Mesmo com atividade suspeita, uma tentativa bloqueada pode não ter causado impacto. Separar esses eixos torna a comunicação mais precisa e evita que o rótulo “reconhecimento” substitua a análise do risco real.

## Distinções úteis

### Reconhecimento e descoberta de ativos

Descoberta de ativos é uma função defensiva de inventário: identificar o que a organização possui ou opera para manter e proteger. Reconhecimento é coleta de informação no contexto de uma operação ou possível operação contra um alvo. Os mesmos dados e padrões de tráfego podem aparecer nos dois casos; autorização, finalidade, origem e contexto ajudam a distingui-los. Uma ferramenta de inventário autorizada pode gerar consultas semelhantes às de sondagem externa.

### Reconhecimento e varredura

Varredura descreve um padrão de consulta a muitos endereços, portas, nomes ou recursos. Pode servir ao reconhecimento, mas não é sinônimo: reconhecimento também ocorre por pesquisa documental e observação de páginas, sem sondagem ativa. Uma varredura autorizada pela equipe pode ser manutenção ou avaliação, não ação hostil.

### Reconhecimento e enumeração

Enumeração costuma designar a obtenção sistemática de detalhes mais específicos sobre recursos, contas ou serviços. Em alguns vocabulários, é tratada como parte do reconhecimento; em outros, como etapa distinta. Para fins operacionais, é mais importante especificar o que foi consultado e qual informação retornou do que disputar o limite conceitual. Se um registro mostra apenas consultas, não afirme que dados foram enumerados com sucesso sem evidência da resposta.

## Limitações e erros de interpretação

O erro mais comum é transformar um indício ambíguo em certeza sobre intenção. Muitos serviços recebem tráfego automatizado legítimo, e ferramentas administrativas podem produzir padrões semelhantes aos de reconhecimento hostil. Classificar automaticamente qualquer consulta incomum como ataque cria falsos positivos, desgasta as equipes e pode levar a bloqueios de usuários ou parceiros. A triagem deve avaliar escopo, repetição, resultados, criticidade do recurso, origem conhecida e ações que vieram depois.

O erro oposto é descartar atividade por não parecer intensa. Um acesso simples pode revelar mais do que uma sequência ruidosa; um recurso exposto pode estar vulnerável mesmo sem evidência de consulta adversária. A ausência de alertas também pode refletir baixa cobertura, retenção curta ou registros insuficientes. Portanto, confiança deve acompanhar a conclusão: confirmado, provável, possível ou indeterminado, usando as categorias definidas pela organização e explicando a base de cada uma.

## Resposta e preparação defensiva

Quando surgem sinais compatíveis com reconhecimento, a equipe deve determinar primeiro se há impacto imediato: recurso exposto, credencial afetada, acesso confirmado, serviço instável ou evidência de exploração. Preserve os registros relevantes antes que expirem e correlacione fontes proporcionais à hipótese. Se um ativo estiver publicado sem necessidade, trate a exposição segundo o processo de mudança e gestão de risco, registrando a decisão e o responsável. Não é preciso esperar atribuição para reduzir uma exposição conhecida.



## Quando o termo é útil

“Reconhecimento” é útil para descrever uma atividade de coleta que pode anteceder ou acompanhar outras ações, organizar uma linha do tempo e explicar por que informações aparentemente pequenas têm valor combinado. Também ajuda a conversar sobre exposição externa sem afirmar que ocorreu invasão. Em relatórios, o termo deve vir acompanhado do comportamento específico, da evidência e do nível de confiança: por exemplo, “atividade compatível com reconhecimento externo, observada em registros de borda”, em vez de “o invasor mapeou a rede” quando isso não foi demonstrado.

Em gestão de risco, a ideia orienta revisões de exposição pública, de dependências e de informação organizacional disponível. Para operações de segurança, pode apoiar regras de detecção e priorização de alertas. Para resposta a incidentes, ajuda a formular perguntas: que informação foi acessível? quem poderia tê-la observado? havia autenticação? que ações subsequentes são compatíveis com as hipóteses? Essas perguntas permanecem úteis mesmo quando a classificação final é inconclusiva.

## Perguntas frequentes

### Toda coleta externa é maliciosa?

Não. Pesquisa, indexação, monitoramento, suporte e avaliação autorizada também coletam informações. A interpretação depende do contexto, da autorização, do padrão de atividade e do que ocorreu depois. A defesa pode registrar um comportamento suspeito sem alegar intenção comprovada.

### Reconhecimento significa que a organização foi invadida?

Não. Ele pode acontecer sem acesso não autorizado e pode usar apenas informações públicas. Para afirmar invasão, é necessário encontrar evidência de acesso ou efeito que sustente essa conclusão, conforme os critérios de resposta da organização.

### Como reduzir a exposição sem ocultar informações necessárias?

Comece por inventariar o que está publicado e por que, confirme se cada recurso tem responsável e finalidade, e reduza detalhes desnecessários. Preserve informações exigidas para transparência, suporte e operação. Revisões com as áreas responsáveis permitem equilibrar utilidade pública e redução de risco, em vez de retirar conteúdo de forma indiscriminada.

### É possível detectar todo reconhecimento?

Não. Parte da coleta ocorre em fontes externas que não produzem registros locais, e a telemetria própria pode ser incompleta. Logs de borda melhoram a visibilidade sobre interações com serviços publicados, mas não revelam toda pesquisa feita sobre pessoas, fornecedores ou infraestrutura.

### Qual é a diferença entre indício e confirmação?

Um indício é compatível com uma hipótese, mas admite explicações alternativas. Confirmação exige evidência suficiente segundo o padrão de investigação da organização. Registre o que foi observado, o que foi inferido e que dados faltam para aumentar a confiança.

## Relação com o capítulo

Na organização da versão original do manuscrito, o tema se relaciona ao capítulo 1. No glossário, a entrada complementa esse contexto ao tratar reconhecimento como uma atividade que pode ocorrer antes ou durante uma intrusão e ao enfatizar como a defesa interpreta sinais e limites de visibilidade.
