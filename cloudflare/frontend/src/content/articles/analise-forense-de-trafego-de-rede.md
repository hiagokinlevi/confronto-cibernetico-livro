# Análise forense de tráfego de rede

## Que pergunta a investigação precisa responder?

Quando uma equipe encontra uma comunicação de rede suspeita, a pergunta útil não é simplesmente “qual era o IP?”. A investigação precisa estabelecer o que foi observado, em que intervalo, por quais pontos de coleta e com que grau de confiança isso se relaciona a uma atividade de interesse.

Essa formulação importa porque tráfego não é uma narrativa pronta. Um fluxo pode registrar endereços, portas, horário, duração e bytes, mas não necessariamente revelar o conteúdo, o processo local, a pessoa diante do teclado ou a finalidade da conexão.

A pergunta central deste artigo é: como reconstruir, com rigor e proporcionalidade, as comunicações relevantes de uma ocorrência e usar essa reconstrução para orientar contenção, preservação e recuperação?

## O que significa analisar tráfego de forma forense?

Análise forense de tráfego de rede é o exame sistemático de registros e capturas de comunicação para esclarecer eventos relacionados a um incidente.

A palavra “forense” acrescenta requisitos de método. A equipe deve registrar de onde veio cada artefato, quem o coletou, quando, com qual ferramenta ou processo institucional, em que formato e quais transformações foram aplicadas.

É importante separar três camadas. A primeira é o dado observado: por exemplo, um sensor registrou uma conexão TCP entre um endereço interno e um destino externo às 14h05, com certa duração e contagem de bytes.

A análise também tem limites de escopo. Ela não é, por si só, uma perícia completa de dispositivo, um julgamento sobre intenção nem uma garantia de que não houve exfiltração.

## Por que o contexto muda o significado de uma conexão?

Um endereço ou domínio não tem significado forense isolado. A mesma conexão pode ser normal em um servidor de atualização e anômala em uma estação de trabalho sem necessidade funcional.

A linha do tempo deve considerar o ciclo completo da ocorrência. Antes do alerta, pode haver sinais de preparação, autenticação ou resolução de nomes. Durante o evento, pode haver sessões de controle, transferências ou tentativas repetidas.

A arquitetura pode alterar tanto a visibilidade quanto a atribuição. Em uma rede com NAT, muitos hosts podem aparecer externamente sob um endereço público.

O tempo é outro elemento de contexto. Sensores diferentes podem usar fusos, fontes de relógio ou precisões distintas. Um registro sem fuso explícito pode ser interpretado de maneira errada; atrasos de ingestão podem fazer eventos aparecerem fora de ordem.

## Quais decisões práticas a evidência deve apoiar?

A análise deve começar por decisões concretas, que podem mudar conforme o impacto e a urgência. A primeira costuma ser delimitar o escopo: quais ativos, contas, serviços e períodos precisam ser examinados?

Decisões de contenção não precisam esperar uma atribuição completa. Um fluxo repetido para um destino recém-observado, combinado com comportamento anormal do endpoint e exposição relevante, pode justificar uma medida preventiva.

A proporcionalidade é central. Bloquear um domínio em toda a organização pode causar falha de uma dependência legítima; bloquear somente um host pode deixar outros afetados. Uma regra temporária e restrita, acompanhada por monitoramento, pode ser mais adequada até que se entenda o papel do serviço.

Também é útil perguntar o que ainda pode ser aprendido antes de alterar o ambiente. Se a situação permitir, preservar logs e capturas pertinentes antes de reiniciar ou reconfigurar equipamentos pode manter evidências que não serão recuperáveis.

## Fontes de evidência e o que cada uma pode demonstrar

### Fluxos e telemetria de rede

Registros de fluxo, como os gerados por sensores ou dispositivos de rede, costumam resumir origem, destino, protocolo, portas, início, fim, duração e volume. Dependendo do produto e da configuração, podem conter direção, interface, estado ou identificadores adicionais.

Antes de comparar contagens, confirme se “bytes” representa camada de rede, transporte, aplicação ou uma estimativa do equipamento. Descubra se os dados são amostrados e como o exportador trata sessões longas, fragmentação, retransmissões e fluxos bidirecionais.

### Capturas de pacotes

Uma captura pode preservar cabeçalhos e, quando não cifrado e coletado integralmente, partes do conteúdo de uma conversa. Ela permite examinar sequência, retransmissões, negociações de protocolo e detalhes que um registro resumido não retém.

A equipe deve guardar metadados sobre o sensor, interface, posição topológica, filtros, intervalo, tamanho de buffer, formato, estatísticas de descarte e sincronização de relógio. Uma captura que começa no meio de uma sessão pode não conter a negociação inicial.

### DNS, proxy e firewall

Logs DNS podem vincular um cliente a uma consulta e resposta observadas, incluindo nome, tipo, horário e resultado, conforme o resolvedor registre.

O proxy pode registrar usuário autenticado, método, nome solicitado, categoria, decisão de política e volume, de acordo com a configuração.

Firewalls e gateways mostram decisões e sessões vistas em seu ponto. Um registro de permissão não prova que a aplicação completou uma operação; um bloqueio não prova que todas as rotas estavam bloqueadas.

### Endpoint, identidade e aplicações

A correlação com o endpoint pode aproximar a comunicação de um processo, serviço ou usuário. Fontes possíveis incluem telemetria de processos, registros do sistema, agentes de segurança, inventário, conexões observadas localmente e dados de execução. A disponibilidade varia por sistema e política.

Fontes de identidade, como autenticação, diretório, SSO e VPN, ajudam a identificar uma sessão ou credencial. Elas não provam quem estava fisicamente usando o dispositivo.

### Inventário e registros de mudança

CMDB, inventário de nuvem, mapas de rede, regras de segmentação, registros de mudança e documentação de aplicações dão referência para avaliar normalidade. Esses dados também podem estar desatualizados.

## Como construir uma linha do tempo confiável?

Uma linha do tempo começa com a delimitação da pergunta e da janela. A equipe identifica o horário inicial e final plausível, os fusos, os hosts candidatos e as fontes disponíveis. Em seguida, registra cada evento com sua origem, identificador original, horário original e horário normalizado.

O próximo passo é estabelecer entidades. Um endereço interno pode ser atribuído a um ativo somente com uma referência temporal: DHCP, inventário de IP, controlador de rede ou registro de nuvem no momento do evento.

Depois, agrupe eventos por sessão, ativo, serviço e comportamento. Um conjunto de conexões repetidas pode ser mais informativo que uma conexão isolada. Compare com uma linha de base adequada ao papel do ativo e ao período equivalente.

Ao final, redija a linha do tempo como uma sequência de observações e interpretações marcadas.

## Como lidar com NAT, proxies e infraestrutura compartilhada?

NAT rompe a correspondência simples entre endereço interno e externo. Para associar uma sessão externa a um host atrás de tradução, são necessários dados de mapeamento, como endereço e porta de origem antes e depois da tradução, protocolo e horário.

Proxies mudam a topologia lógica. O navegador pode conversar com um proxy, e o proxy com o serviço de destino. Um sensor externo verá a conexão do proxy; um sensor interno verá a sessão do cliente; o log do proxy pode ser a ponte.

Em serviços compartilhados, o endereço de destino pode representar hospedagem multiusuário, CDN, nuvem ou um front-end com muitos domínios. Reputação de IP e geolocalização são sinais auxiliares com cobertura e precisão variáveis.

Uma organização pode ter caminhos alternativos que contornem o ponto de coleta presumido: links de contingência, rede sem fio, celular corporativo, túneis, VPN dividida, acesso direto à internet ou saída por nuvem.

## Como avaliar origem, destino e volume sem exagerar a conclusão?

A origem observada pode ser um host, gateway, proxy, endereço traduzido ou serviço intermediário. A equipe deve descrever precisamente em qual ponto o endereço foi visto.

O destino também tem níveis. Um endereço IP é um endpoint de rede observado; um nome DNS é uma consulta ou associação registrada; uma organização provedora é uma relação administrativa estimada; uma pessoa ou operador é uma atribuição muito mais forte. Cada nível deve estar separado no relatório.

Volume requer qualificação semelhante. Contagem de bytes em fluxo pode incluir cabeçalhos ou refletir um lado da sessão. Uma conexão que envia mais bytes que recebe pode ser consistente com saída de dados, mas também com upload autorizado, cópia para armazenamento, telemetria ou sincronização.

A confiança da conclusão deve acompanhar a qualidade e a independência das fontes. Dois registros que derivam do mesmo sensor não são necessariamente duas confirmações independentes.

## Papéis e responsabilidades durante a análise

A equipe de resposta coordena a pergunta, preserva contexto da ocorrência e relaciona descobertas a decisões de contenção. Analistas de rede explicam pontos de coleta, semântica de campos, cobertura, perdas, amostragem e topologia. A equipe de endpoint investiga processos e estado local.

A área de segurança operacional ou de rede avalia efeitos de regras e isolamento. Jurídico, privacidade e governança orientam coleta e uso de dados pessoais, especialmente quando tráfego pode conter conteúdo sensível ou comunicações de terceiros.

A separação de responsabilidades não serve para criar burocracia. Serve para evitar que uma hipótese técnica seja convertida em decisão de negócio sem contexto, ou que uma ação operacional destrua evidência sem registro.

## Exemplos defensivos e cenários contrastantes

### Cenário hipotético: serviço esperado em horário incomum

Imagine que uma estação de engenharia inicia várias conexões para um serviço externo durante a madrugada. O fluxo mostra volume de saída acima do padrão do ativo, e o sistema de alertas classifica o destino como recém-observado. Esses dados são sinais de atenção, não prova de roubo de dados.

A hipótese de operação legítima ganha apoio, mas a análise ainda verifica se o destino e o volume correspondem ao serviço documentado.

### Cenário hipotético: correlação incompleta atrás de NAT

Considere um alerta recebido por um provedor sobre uma conexão originada de um endereço público da organização. A telemetria de borda registra o endereço e a porta externa, mas os logs de tradução foram sobrescritos antes da coleta.

Nesse caso, declarar um nome de usuário ou equipamento seria uma extrapolação. A equipe registra o limite, procura evidências auxiliares em endpoint, VPN, wireless ou autenticação e preserva a incerteza se não houver correlação.

### Cenário hipotético: destino compartilhado com reputação adversa

Um servidor interno consulta um domínio hospedado em infraestrutura compartilhada. Uma fonte de inteligência indica reputação negativa para um endereço associado ao domínio, mas o mesmo endereço atende vários serviços.

O rótulo de reputação motivou a investigação, porém não estabelece que o servidor acessou conteúdo malicioso. Se outros registros contradisserem a explicação, a equipe amplia o exame.

### Cenário hipotético: tráfego cifrado e sinais indiretos

Um endpoint faz conexões cifradas curtas e periódicas a um destino pouco comum. A captura não revela o conteúdo. A cadência e o horário sugerem automação, mas não indicam por si só controle remoto.

Se a versão e a atividade forem compatíveis com manutenção, o padrão pode ser documentado como explicado. Se houver divergência, a investigação pode preservar a imagem ou os dados de endpoint segundo o procedimento aplicável, enquanto restringe a comunicação conforme o risco.

## Alertas, evidências e hipóteses

Um alerta é uma condição que merece triagem, criada por regra, reputação, desvio estatístico, inteligência ou relato. Ele sinaliza prioridade, não veredicto. Uma evidência é um artefato com origem, contexto e integridade suficientemente documentados para sustentar uma afirmação específica.

Por exemplo, “o sistema gerou alerta para comunicação com destino novo” é uma observação sobre a ferramenta. “O fluxo ocorreu entre o host identificado e o destino no intervalo” pode ser uma afirmação apoiada por telemetria.

A equipe também precisa buscar evidência que possa refutar a hipótese preferida. Se a explicação é que houve exfiltração, quais fluxos legítimos poderiam produzir o mesmo volume? Se a explicação é uma tarefa de manutenção, que registros a confirmariam e o que a contradiz?

## Erros comuns que comprometem a conclusão

Um erro frequente é tratar endereço IP como identidade. NAT, DHCP, proxies, endereços dinâmicos e hospedagem compartilhada tornam essa equivalência frágil. Outro é considerar que uma sessão permitida pelo firewall foi concluída com sucesso ou que um bloqueio impediu toda comunicação.

Também é comum confundir ausência de dados com ausência de atividade, ignorar amostragem, assumir que bytes enviados equivalem a dados roubados ou tomar reputação como atribuição.

Erros temporais incluem misturar UTC e horário local, não considerar horário de verão, usar o horário de ingestão como se fosse o de ocorrência e ignorar atraso de exportação. A correlação por proximidade pode ligar eventos não relacionados em ambientes de alto volume.

Outro risco é coletar mais do que a pergunta exige. Capturas completas podem conter conteúdo pessoal, segredos ou comunicações sem relação com o incidente. A organização deve aplicar políticas de minimização, controle de acesso e retenção.

Por fim, conclusões categóricas em relatórios prejudicam a revisão. “O host exfiltrou dados” exige evidência sobre origem, destino, transferência e natureza ou contexto dos dados.

## Critérios para avaliar qualidade e confiança

A qualidade da análise pode ser examinada por perguntas concretas. A fonte é identificada e seu funcionamento no período é conhecido? O artefato foi preservado sem alterações não documentadas? O sensor cobria a rota relevante? Há perda, amostragem ou retenção parcial?

Também se avalia a independência e a consistência das fontes. Logs de rede, endpoint, identidade e aplicação convergem para a mesma sequência? Eles têm relógios ou dependências comuns que possam reproduzir o mesmo erro? Existe evidência contraditória?

Uma conclusão pode ser classificada em linguagem qualitativa, desde que a equipe defina os termos. “Confirmado” pode significar que o evento específico aparece em fonte íntegra e diretamente pertinente. “Sustentado” pode indicar convergência de fontes independentes, com alguma lacuna.

A avaliação deve abranger utilidade operacional. A análise identificou o que preservar, quais ativos examinar, se a contenção reduziu exposição e quais lacunas impedem decisão? Um relatório tecnicamente detalhado pode falhar se não responder à pergunta do incidente.

## Exercício de mesa em ambiente autorizado

Um exercício pode treinar correlação sem tocar em sistemas de terceiros. Prepare um conjunto sintético ou previamente autorizado de registros: fluxo de rede, log DNS, evento de proxy, mapeamento de DHCP/NAT e telemetria de processo.

No primeiro ato, a equipe recebe apenas o alerta e um resumo de fluxo. Deve declarar o que sabe, o que não sabe e quais dados preservaria em seguida. No segundo ato, recebe um log de NAT com uma discrepância de horário e um registro DHCP que cobre apenas parte da janela.

O exercício não deve premiar adivinhação do “culpado”. Avalie se participantes distinguem fato e hipótese, registram proveniência, corrigem fusos, entendem o efeito do NAT, pedem fontes pertinentes e comunicam incerteza.

Para um laboratório autorizado, a mesma lógica pode usar tráfego controlado entre máquinas próprias ou imagens de dados didáticos. O objetivo é reconhecer o caminho da comunicação e comparar o que cada sensor registra.

## Roteiro de implementação na organização

### 1. Definir perguntas e limites

Comece com casos de uso defensivos: investigar comunicações externas de ativos críticos, reconstruir a sequência de uma ocorrência ou vincular sessões a processos quando a telemetria permitir.

### 2. Mapear pontos de observação

Desenhe os caminhos relevantes entre segmentos, datacenters, filiais, nuvem, VPN, proxies e saídas alternativas. Para cada ponto, registre que tráfego ele vê, que campos produz, se observa dados antes ou depois de NAT, qual é a precisão temporal e o que fica fora da cobertura.

### 3. Escolher fontes com propósito

Combine fluxos para visão ampla, DNS e proxy para contexto de solicitação, firewall para decisão de política, captura de pacotes para investigação seletiva e endpoint para atribuição local. Não é necessário coletar tudo em todos os lugares.

### 4. Definir retenção, acesso e integridade

Estabeleça quanto tempo cada fonte fica disponível, como preservar registros relevantes, quem pode acessá-los e como registrar consulta ou exportação.

### 5. Padronizar horário e identificadores

Documente fuso, formato, precisão e sincronização. Preserve o timestamp de origem e registre o normalizado. Padronize a representação de endereço, porta, protocolo, ativo, interface e identificadores de sessão sem perder os valores originais.

### 6. Preparar correlações operacionais

Mantenha acessíveis as relações entre endereço e ativo ao longo do tempo, mapeamentos de NAT, sessões de proxy, identidades e processos. A integração pode ser automatizada, mas deve deixar visíveis as regras de associação e as falhas.

### 7. Criar um fluxo de trabalho repetível

Um procedimento conciso pode orientar: registrar a pergunta, delimitar a janela, preservar fontes voláteis, verificar saúde dos sensores, normalizar horários, reconstruir entidades, comparar fontes, testar alternativas, avaliar impacto, documentar decisão e revisar a conclusão.

### 8. Exercitar e revisar lacunas

Faça exercícios autorizados com casos sintéticos e, quando apropriado, revisões após incidentes reais conforme governança. Verifique se os campos necessários estavam retidos, se as equipes conseguiram obtê-los e se os dados foram interpretáveis.

## Preservação e cadeia de custódia na prática

Antes de exportar um registro, anote a consulta ou o procedimento usado, o intervalo solicitado, a zona horária, os filtros e a identidade do sistema de origem. Registre também se a exportação foi completa, paginada, transformada ou limitada por permissões. Uma captura de tela pode ajudar a documentar uma interface, mas não substitui o arquivo nativo quando este está disponível. Guarde o original em repositório controlado e faça a análise em cópia de trabalho identificada.

Se um sensor permite busca interativa, preserve os resultados e os parâmetros que os reproduzem; a consulta pode mudar quando a plataforma atualiza índices ou normaliza campos. Para cada transformação — descompressão, conversão de formato, extração de intervalo ou enriquecimento com inventário — mantenha a relação com a fonte e descreva o efeito. A cadeia de custódia deve permitir que outra pessoa entenda de onde veio o dado e quais passos ocorreram, sem sugerir que um procedimento técnico garante por si só admissibilidade ou completude.

O acesso deve seguir necessidade funcional. Restrinja cópias com payload ou identificadores pessoais, registre compartilhamentos e aplique retenção e descarte conforme a política aprovada. Se a investigação for transferida entre equipes, entregue junto uma nota de escopo, limitações conhecidas e contato responsável; isso reduz o risco de que um fragmento seja interpretado fora do contexto original.

## Como relatar os achados a públicos diferentes?

Um relatório técnico deve permitir que outro analista refaça o caminho da conclusão. Registre a pergunta, escopo, fontes, período, estado de integridade, transformações, filtros e limitações.

Para gestores, traduza o achado em risco e decisão: que ativos podem estar envolvidos, que exposição permanece, que ação foi tomada e qual é o custo operacional esperado. Evite jargão sem definição e não esconda incerteza em um apêndice.

Para equipes de operação, detalhe indicadores observáveis e a janela relevante, com cautela para não transformar um endereço compartilhado em bloqueio indiscriminado. A recomendação deve apontar escopo, duração ou condição de revisão e possíveis dependências.

## Perguntas frequentes

### Uma conexão para um IP suspeito prova comprometimento?

Não. Ela prova, no máximo, que uma fonte observou determinada comunicação ou tentativa dentro de sua cobertura. O IP pode ser compartilhado, a conexão pode ter sido bloqueada, o destino pode estar associado a um serviço legítimo ou o evento pode ter sido interpretado incorretamente.

### É possível investigar quando o conteúdo está cifrado?

Sim, com limites. Endereços, horários, duração, tamanhos aproximados, consultas DNS visíveis, decisões de proxy e telemetria do endpoint podem sustentar reconstrução parcial. Certos protocolos deixam metadados adicionais, outros ocultam mais informação.

### Como associar um fluxo ao processo que o iniciou?

Use telemetria do endpoint que registre conexões e processos, ou uma fonte equivalente, e correlacione por identificador, endereço, porta, protocolo e tempo. Considere reutilização de PID, processos intermediários, contêineres, proxy local e diferenças de relógio.

### O que fazer quando os registros de NAT não existem?

Registre que a atribuição interna não pôde ser estabelecida por essa fonte. Procure caminhos auxiliares, como endpoint, proxy, VPN, DHCP, autenticação ou logs do serviço, e verifique se possuem atributos suficientes para restringir a origem. Não escolha um dispositivo por coincidência temporal ampla.

### Quanto tempo os dados devem ser retidos?

Não há duração universal. A organização deve considerar tempo médio de detecção, latência de notificação, requisitos legais e contratuais, custo, sensibilidade e objetivo de investigação. Dados de tradução e atribuição podem precisar de retenção compatível com os fluxos que ajudam a interpretar.

### Capturar pacotes é sempre melhor que guardar fluxos?

Não. Capturas podem oferecer detalhe maior, mas consomem armazenamento, podem conter conteúdo sensível e podem ser incompletas por filtros ou perda. Fluxos oferecem visão agregada e podem ser mais adequados para períodos longos, mas descartam detalhes.

### Um volume de saída elevado demonstra exfiltração?

Não isoladamente. Ele indica transferência observada segundo a semântica do sensor. Sincronização, backup, atualização, telemetria e operações legítimas podem gerar volume.

### Quando é apropriado bloquear um destino durante a análise?

Quando o risco de manter a comunicação supera o impacto esperado da interrupção, e a decisão segue a autoridade operacional e o procedimento do ambiente. A equipe pode adotar uma restrição temporária e delimitada diante de evidência parcial, desde que registre fundamento, escopo, efeitos e revisão.

## Relação com o capítulo 8 da versão original

No capítulo 8, dedicado a operações de resposta, contenção e recuperação, a análise de tráfego ocupa o espaço entre detectar uma comunicação preocupante e escolher uma ação proporcional.

O livro de Hiago Kin Levi, publicado pela Editora Brasport, pode oferecer um enquadramento complementar para a discussão de resposta e recuperação apresentada nesse capítulo.
