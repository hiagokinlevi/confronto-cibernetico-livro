# Tempo de permanência do invasor

## Pergunta central: o que o tempo de permanência consegue dizer à equipe?

Quando uma organização descobre uma intrusão, quanto tempo o invasor já estava presente? A pergunta parece pedir uma duração simples. Na prática, ela pede uma reconstrução: quais eventos sustentam a hipótese de acesso inicial, quando a atividade passou a ser reconhecida como incidente e em que momento o acesso deixou de ser possível? Cada marco pode ter fontes, lacunas e graus de certeza diferentes. O intervalo resultante é útil somente quando essas diferenças permanecem visíveis.

O tempo de permanência, também chamado de dwell time em materiais técnicos, é uma métrica derivada de uma linha do tempo de incidente. Em uma definição operacional comum, mede-se o intervalo entre o acesso inicial e a descoberta ou contenção. A organização precisa declarar qual desses eventos finais está usando. Descoberta, reconhecimento e expulsão não são sinônimos: um alerta pode surgir antes que alguém entenda sua importância; a investigação pode confirmar o incidente horas ou dias depois; e a contenção pode ocorrer em etapas, sem eliminar imediatamente todos os caminhos de acesso.

O número não informa, sozinho, o impacto, a intenção, a competência do agente, a qualidade da defesa ou o tempo necessário para erradicar a causa. Tampouco revela necessariamente quando uma pessoa começou a agir. Ele resume uma decisão de mensuração feita sobre evidências incompletas. A pergunta útil, portanto, não é apenas “quantos dias?”, mas também “entre quais marcos, segundo quais evidências, com que confiança e para qual decisão?”.

## Definição operacional e limites da medida

### Escolher os marcos antes de calcular

Para que duas pessoas calculem a mesma métrica a partir do mesmo conjunto de dados, a equipe deve definir os eventos de início e fim. Uma convenção prática é registrar separadamente: primeiro acesso observado ou estimado; primeira atividade maliciosa confirmada; primeira detecção disponível; primeiro reconhecimento humano do incidente; início da contenção; e confirmação de que os acessos e mecanismos conhecidos foram removidos ou neutralizados.

Esses marcos respondem a perguntas diferentes. Se o objetivo é avaliar quanto tempo uma intrusão ficou sem ser detectada, o fim pode ser a primeira detecção acionável. Se a finalidade é medir a duração até que a equipe reconheça um incidente, o marco é a declaração ou validação do caso. Para estimar exposição, pode ser mais pertinente observar a janela entre o provável acesso inicial e a contenção efetiva. A métrica deve nomear o marco; um rótulo genérico esconde a escolha.

Também é necessário definir o que conta como “acesso inicial”. Pode ser a primeira sessão bem-sucedida, o primeiro uso de uma conta comprometida, a execução inicial em um dispositivo, a primeira conexão de uma infraestrutura externa ou o primeiro evento malicioso que a equipe conseguiu observar. Essas opções não são equivalentes. Uma credencial pode ter sido obtida antes de ser usada; um registro pode indicar uma autenticação legítima sem provar quem controlava a sessão; um equipamento pode ter sido comprometido antes de entrar no conjunto monitorado.

Se há várias intrusões ou caminhos de entrada relacionados, não se deve presumir um único início. A equipe pode manter linhas do tempo por ativo, conta, segmento ou conjunto de atividade, e depois indicar se há evidência suficiente para agrupá-las. Um acesso posterior pode ser uma nova tentativa, persistência do mesmo incidente ou evento independente. A classificação deve permanecer como hipótese até ser sustentada por sinais de relação, como identidade técnica, sequência temporal, infraestrutura ou artefatos comuns. Coincidência temporal não prova unidade de autoria.

### Datas, horários e duração

A linha do tempo precisa registrar fuso horário, origem do horário e eventuais correções de relógio. Sistemas diferentes podem usar UTC, horário local, relógios adiantados ou atrasados, ou marcas de tempo geradas em momentos distintos do processamento. Uma diferença de alguns minutos talvez altere a ordem aparente dos eventos e, em incidentes curtos, mude a conclusão. Preservar o horário original junto com a normalização evita que uma conversão apague informação útil.

A duração pode ser expressa em horas, dias ou intervalo de datas, mas a unidade não deve sugerir precisão maior que a evidência suporta. Se o último evento confiável sem atividade suspeita ocorreu na segunda-feira e o primeiro evento malicioso confirmado é de quinta-feira, o início está limitado por uma janela; não se conhece necessariamente a hora exata. Uma formulação como “entre segunda e quinta, com confiança moderada” é mais honesta do que um horário com segundos calculado a partir de um registro indireto.

Quando houver estimativa pontual para facilitar comparação, ela deve vir acompanhada do intervalo plausível e da regra usada para escolher o ponto. A estimativa não substitui a faixa. Em painéis, relatórios executivos ou revisões posteriores, a faixa preserva o que a equipe sabe; o valor central é apenas uma convenção de resumo, não um fato observado.

## Uso prático e limites da métrica

Uma janela longa pode apontar atraso de detecção, cobertura insuficiente, retenção curta ou atividade difícil de distinguir de uso legítimo. Uma janela curta pode refletir reconhecimento rápido, mas também uma definição estreita de início ou dados incompletos. O valor isolado não mede impacto, qualidade da defesa, intenção ou tempo total de resposta. Serve para orientar perguntas sobre quais sinais estavam disponíveis, quando foram avaliados e que obstáculos atrasaram a decisão.

Comparações só fazem sentido quando marcos, fontes e métodos são semelhantes. Uma equipe com histórico mais completo pode encontrar atividade anterior e calcular uma duração maior porque enxerga melhor. Separe o tempo até alerta, reconhecimento e contenção quando a finalidade exigir; a escolha do marco final muda o significado do indicador.

## Construir uma linha do tempo com confiança explícita

### Registrar evento, evidência e interpretação separadamente

Cada entrada da linha do tempo deve permitir que outra pessoa entenda o que foi observado e o que foi inferido. Um registro útil contém a data e a hora originais, o horário normalizado, a fonte, o ativo ou identidade envolvidos, a descrição objetiva do sinal, a interpretação atual, a confiança, as lacunas conhecidas e a referência ao material preservado. “O serviço de identidade registrou uma autenticação bem-sucedida para a conta às 10h14” descreve um evento. “O invasor entrou às 10h14” atribui pessoa, intenção e causalidade que o registro talvez não prove.

A distinção entre evento e interpretação deve continuar mesmo quando a hipótese pareça forte. Uma conexão incomum é um alerta; uma execução confirmada de ferramenta não autorizada é um indício mais específico; a correlação com outros eventos pode sustentar a hipótese de intrusão. Ainda assim, uma hipótese de atribuição a agente ou grupo exige evidência e método distintos. O tempo de permanência não deve carregar afirmações sobre autoria que sua base não sustenta.

Pode-se adotar uma escala qualitativa simples, desde que a equipe defina o significado de cada nível. Por exemplo, “alta” pode significar que uma fonte íntegra e próxima do evento registra diretamente a ação relevante e que há corroborantes; “média” pode indicar um sinal consistente, mas indireto ou com limitações conhecidas; “baixa” pode identificar uma possibilidade sustentada por poucos dados ou por inferência ampla. A escala é uma convenção interna, não uma probabilidade matemática. Não atribua percentuais sem um método válido para estimá-los.

### Evidência confirmada, hipótese e alerta

Um alerta informa que uma regra, sensor ou analista encontrou algo que merece atenção. Não confirma automaticamente comprometimento. Um login fora do padrão pode ser uma viagem legítima, uma VPN corporativa, um erro de geolocalização ou uso indevido de credenciais. É evidência de uma condição observada, não prova isolada de invasão. A equipe deve registrar as explicações concorrentes e o que poderia distingui-las.

Uma hipótese explica os sinais observados: por exemplo, “a conta pode ter sido usada por terceiro antes do primeiro alerta”. Para avaliar essa hipótese, procure evidência que a apoie e evidência que a enfraqueça. Há atividade da conta antes do marco? O dispositivo associado era conhecido? Há MFA e os registros mostram a forma de autenticação? O horário coincide com uma tarefa administrativa documentada? A ausência de eventos em um sistema cujo registro estava desativado não refuta a hipótese. Ela apenas estabelece uma lacuna.

A confirmação precisa ser delimitada. É possível confirmar que uma conta realizou autenticação em certo horário, sem confirmar a identidade de quem a controlava; confirmar execução de processo em um endpoint, sem confirmar que esse foi o primeiro acesso; ou confirmar que um alerta foi gerado, sem saber se chegou ao analista. Uma conclusão forte em uma dimensão não elimina incerteza em outra. A linha do tempo deve registrar esse alcance com clareza.

### Revisar sem reescrever o passado

Novas fontes podem mudar a janela. Registros recuperados, cópias de segurança, telemetria de endpoint ou relatos de pessoas podem deslocar o início estimado para trás; uma correção de relógio pode reordenar eventos; a descoberta de uma atividade legítima pode retirar um marco antes tratado como suspeito. A revisão deve atualizar a conclusão e guardar o estado anterior, a data da mudança e a razão. Assim, a equipe consegue explicar por que um relatório de hoje difere da estimativa inicial.

Evite apagar interpretações antigas sem trilha. Uma investigação evolui, e as decisões tomadas com a informação disponível em cada momento também importam. Manter versões não significa perpetuar erro como verdade: significa distinguir “o que se concluiu então” de “o que as fontes sustentam agora”. A nova avaliação deve informar quais eventos foram acrescentados, removidos ou reclassificados e como isso alterou os limites da duração.

## Fontes de evidência pertinentes

### Identidade e autenticação

Registros de provedores de identidade, diretórios, VPN, autenticação multifator e aplicações podem mostrar sessões, falhas, mudanças de credencial, emissão de tokens ou uso de métodos incomuns. São úteis para identificar quando uma identidade foi usada e de onde aparentava vir. Precisam ser interpretados conforme retenção, sincronização, campos disponíveis e semântica do produto. Um endereço IP pode representar um gateway compartilhado; um nome de dispositivo pode ser fornecido pelo cliente; uma autenticação válida não demonstra que o titular humano a iniciou.

### Endpoint, servidor e aplicações

Telemetria de endpoint, logs do sistema operacional, registros de processos, eventos de serviços, auditoria de aplicações, proxy e balanceadores podem estabelecer sequência de execução e comunicação. A força da conclusão depende da cobertura do agente, integridade, política de auditoria e retenção. Uma máquina fora de gerenciamento, desligada ou com sensor degradado pode criar um ponto cego. O evento mais antigo disponível no agente não é necessariamente o primeiro evento da atividade.

Dados de aplicação podem revelar criação de sessão, alterações administrativas e uso de funções sensíveis. É importante saber se a aplicação grava ator, objeto, resultado e contexto, e se esses campos são confiáveis. Um evento “alteração concluída” pode não registrar a origem com precisão suficiente; uma falha pode ter sido tentada sem produzir impacto. Preserve o significado original do campo ao resumir a evidência.

### Rede, nuvem e serviços de terceiros

DNS, firewall, proxy, fluxos de rede, gateways, registros de nuvem e trilhas de auditoria podem ajudar a identificar comunicações, criação de recursos ou mudanças de configuração. Cada fonte tem escopo particular: um fluxo pode indicar que houve tráfego entre dois pontos, mas não o conteúdo; uma trilha de nuvem pode mostrar uma chamada de API sem identificar com certeza o operador humano; DNS pode ser armazenado em cache ou estar ausente. A retenção e o modelo de coleta variam conforme serviço e configuração.

Quando a atividade depende de fornecedor externo, a equipe pode precisar solicitar preservação ou exportação por canais autorizados. O atraso de um terceiro, os limites contratuais e a diferença de fusos podem restringir a linha do tempo. Registre quando a solicitação foi feita, qual intervalo foi coberto e se houve confirmação de completude. Não trate silêncio ou indisponibilidade do fornecedor como evidência de que nada ocorreu.

## Papéis e decisões na reconstrução

A pessoa que coordena o incidente define qual pergunta a métrica deve responder e assegura que a convenção seja aplicada de modo consistente. A equipe de investigação coleta e correlaciona sinais, mantém as hipóteses explícitas e registra lacunas. Operações de segurança e proprietários de ferramentas esclarecem configuração, retenção e significado dos campos. Administradores de sistemas e responsáveis por aplicações ajudam a identificar mudanças autorizadas e dependências. A área jurídica, privacidade e governança orienta a preservação, o acesso e o uso adequado dos registros conforme as regras aplicáveis à organização.

Esses papéis colaboram, mas não devem confundir autoridade. O investigador pode propor uma janela provável; o proprietário do sistema pode contestar a interpretação de um evento; o coordenador do incidente pode aprovar uma conclusão operacional; e a comunicação executiva deve reproduzir os limites. A atribuição de cada afirmação a uma fonte e a um responsável facilita a revisão. Não é necessário que uma única pessoa decida todos os detalhes, mas alguém deve responder pela versão atual da linha do tempo.

A decisão de conter pode precisar ocorrer antes de a cronologia estar completa. A equipe não precisa esperar por certeza absoluta para bloquear um acesso com risco elevado, desde que avalie o impacto da ação e tenha autoridade. Em paralelo, deve marcar a justificativa como decisão baseada na informação disponível naquele momento. Contenção prudente é uma escolha de gestão de risco; não transforma automaticamente a hipótese que a motivou em fato confirmado.

## Cenários hipotéticos e contrastantes

### Retenção curta, início desconhecido

Cenário hipotético: o alerta inicial vem de um sistema de nuvem, mas a trilha de auditoria disponível começa poucos dias antes da descoberta. Um administrador relata que uma conta pode ter sido usada anteriormente, sem registro contemporâneo. O primeiro evento observado fornece um limite inferior: a atividade já existia naquele ponto. Não fornece um limite superior confiável para o início. A duração real pode ser maior, mas os dados não permitem quantificá-la.

A equipe deve registrar “início anterior ao primeiro evento disponível; duração indeterminada” ou uma faixa sustentada por limites reais, em vez de preencher a lacuna com a data de retenção. O limite da coleta é um fato sobre os dados, não uma prova do começo da intrusão. A ação útil é identificar a fonte ausente, a janela não coberta e a decisão de retenção ou exportação que poderia reduzir a incerteza em incidentes futuros.

### Detecção externa e operação interna lenta

Cenário hipotético: um terceiro comunica que observou uma credencial corporativa em atividade suspeita. A organização confirma que a conta é válida, mas ainda não sabe se houve sessão bem-sucedida nos sistemas internos. O aviso é um sinal importante e pode justificar investigação imediata e medidas de proteção. Não prova, sozinho, acesso a um ativo interno. A equipe deve separar a data em que a credencial apareceu no alerta externo, a data de qualquer uso interno confirmado e a data da descoberta pela organização.

Se a revisão posterior encontrar uma sessão antiga, a janela poderá começar naquele evento; se não encontrar e os registros forem completos, a hipótese de intrusão interna pode ser enfraquecida. Se os registros forem incompletos, a conclusão continua inconclusiva. A ausência de confirmação não equivale a uma confirmação de ausência.

## Erros comuns de interpretação

O primeiro erro é apresentar um número exato quando o primeiro acesso é incerto. A precisão visual de uma data com hora e minuto não corrige uma inferência frágil. Se o evento inicial é estimado, a duração também é estimada. Declare a faixa, o ponto de referência e a confiança, mesmo que um painel peça um único valor.

Outro erro é tratar “primeiro evento encontrado” como “primeiro evento ocorrido”. Essa equivalência só seria defensável com cobertura suficiente para o período, os sistemas e os tipos de evento relevantes. A equipe raramente consegue provar completude absoluta. Pode, porém, avaliar cobertura, lacunas e retenção e dizer até onde a evidência permite retroceder.

## Critérios para avaliar uma estimativa

## Exercício de mesa com dados autorizados

Um exercício seguro pode usar dados sintéticos ou registros históricos devidamente aprovados, minimizados e protegidos. O objetivo é testar a capacidade de construir a linha do tempo, e não ensinar exploração. O facilitador fornece, em etapas, um alerta inicial, um registro de identidade, um evento de endpoint, uma lacuna de retenção e, por fim, uma confirmação de relógio desalinhado. Os participantes devem distinguir observação, hipótese e conclusão, atribuir confiança e declarar qual fonte adicional mudaria a janela.

## Roteiro de implementação

### 1. Fixar a pergunta e a convenção

Escolha o uso pretendido: análise de exposição, avaliação de detecção, acompanhamento de contenção ou comunicação de incidente. Defina o início e o fim que respondem a essa pergunta e documente os eventos que não entram nessa definição. Se várias finalidades forem relevantes, mantenha métricas separadas. Não altere a definição no meio de uma série sem registrar a transição.

### 3. Mapear cobertura e retenção

Para cada fonte relevante, documente quais eventos registra, desde quando, por quanto tempo, quem pode consultar, como verificar integridade e como solicitar dados a terceiros. Identifique ativos críticos sem telemetria e sistemas cuja retenção não cobre o tempo necessário à investigação. O mapa não precisa alegar cobertura total: deve mostrar claramente onde a equipe consegue observar e onde permanece cega.

## Perguntas frequentes

### Tempo de permanência começa no acesso inicial ou na primeira evidência disponível?

A definição conceitual costuma se referir ao intervalo desde o acesso inicial até a descoberta ou contenção, mas o acesso inicial pode não ser observável. Na prática, registre o primeiro evento confirmado e estime ou delimite o início separadamente. Se não houver base para retroceder, informe que a duração é indeterminada ou que há somente um limite sustentado pelos dados.

### Descoberta é o primeiro alerta?

Depende da convenção. Um alerta automático pode ser a primeira detecção técnica; o reconhecimento humano do incidente pode vir depois. Declare qual evento o indicador chama de descoberta e mantenha os horários de alerta, triagem e confirmação separados quando forem relevantes.

### Posso informar um número exato se a equipe precisa de um KPI?

Pode haver um valor de resumo para uma finalidade administrativa, mas ele não deve ser apresentado como fato exato quando o início é incerto. Informe a regra de cálculo e preserve uma faixa ou ressalva junto ao número. Se a incerteza não permite estimar uma duração, marque o caso como indeterminado em vez de inventar um ponto inicial.

### Um registro de autenticação prova que o invasor acessou o sistema?

Prova, no máximo, o evento que o sistema registrou conforme sua semântica e integridade. Pode confirmar uma autenticação para uma conta sem revelar quem controlava a sessão ou se a ação foi autorizada. Correlacione com contexto de identidade, dispositivo, aplicação e atividade subsequente antes de concluir que houve intrusão.

### Como tratar um caso em que não existe registro antigo?

Primeiro, determine se a fonte deveria ter registrado o evento e se cobria o período. Documente retenção, configuração, lacunas e fontes alternativas. A ausência pode limitar a conclusão, não provar que a atividade começou no primeiro dia registrado. Expresse o limite com precisão e priorize preservar fontes adicionais que ainda estejam disponíveis.

### É válido comparar organizações ou fornecedores?

Somente com cautela. As definições, fontes, retenções, tipos de incidentes e métodos de estimativa podem divergir. Sem critérios comuns e transparência sobre casos indeterminados, a comparação numérica sugere uma equivalência que não existe. Para gestão interna, uma série consistente e bem documentada tende a ser mais acionável que uma classificação externa sem contexto.

### Quando a linha do tempo deve ser considerada final?

Uma cronologia operacional pode ser fechada para uma etapa de resposta e ainda ser revisitada quando surgir evidência nova. Marque a data de corte, a versão, as fontes consultadas e as limitações. “Final” deve significar que a equipe encerrou a revisão prevista com os dados disponíveis, não que provou cada instante da atividade.

## Relação com o capítulo de métricas de resposta a incidentes

No capítulo 9, “métricas de resposta a incidentes”, do livro de Hiago Kin Levi, publicado pela Editora Brasport, o tempo de permanência se conecta à discussão sobre como medir uma resposta sem reduzir um incidente complexo a um placar. A leitura pode ajudar a organizar perguntas sobre marcos, interpretação e uso gerencial das métricas. Para aplicar o método a um ambiente concreto, a equipe ainda precisa consultar documentação técnica atualizada, conhecer a configuração de suas fontes, praticar com cenários autorizados e exercer julgamento profissional. Um livro não substitui esses recursos nem transforma incerteza em certeza.

Uma medida útil não precisa aparentar precisão absoluta. Ela precisa mostrar o que foi observado, o que foi inferido, qual intervalo os dados sustentam e quais decisões podem ser tomadas apesar das lacunas. Ao construir e revisar a linha do tempo dessa forma, a organização transforma um número potencialmente enganoso em uma descrição verificável do que sabe — e do que ainda precisa descobrir.
