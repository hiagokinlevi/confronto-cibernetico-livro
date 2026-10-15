# NDR

## Definição

**NDR** é a capacidade de observar tráfego e metadados de rede para detectar comportamentos anômalos e apoiar a resposta a incidentes. A sigla vem de *Network Detection and Response*, expressão que combina duas funções: identificar sinais relevantes nas comunicações entre sistemas e oferecer contexto ou meios para que uma equipe investigue e contenha o problema. Em português, pode ser entendida como detecção e resposta em rede.

A definição descreve uma capacidade, não um sensor específico, um protocolo ou uma garantia de segurança. Um programa de NDR pode reunir fontes de dados, mecanismos de análise, regras, alertas e recursos para investigação. Sua forma varia conforme a arquitetura da organização e o que ela consegue coletar. O propósito defensivo é tornar observáveis relações e comportamentos que seriam difíceis de perceber examinando cada equipamento isoladamente.

## O que a observação de rede mostra

Uma comunicação costuma deixar mais de uma classe de evidência. O conteúdo de uma sessão, quando disponível, pode mostrar dados transmitidos ou comandos em protocolos que não estejam protegidos por criptografia. Mesmo quando o conteúdo não pode ser lido, metadados podem registrar endereços, portas, horários, duração, volume, direção, frequência e características do fluxo. Dependendo do ponto de coleta e dos registros disponíveis, também podem surgir nomes consultados em DNS, certificados, informações de protocolo ou relações entre conexões.

Esses elementos têm valor contextual, mas não equivalem automaticamente a uma identificação de intenção. Um endereço de destino pode pertencer a um serviço legítimo compartilhado por muitos clientes. Uma conexão longa pode corresponder a uma aplicação normal. Um volume elevado pode ser esperado em cópias de segurança. Para interpretar uma observação, é necessário considerar quem iniciou a comunicação, qual ativo estava envolvido, que função ele exerce, o que costuma fazer e se houve mudanças no ambiente.

A distinção entre conteúdo e metadados é essencial. Conteúdo é o material transportado dentro da comunicação; metadados descrevem aspectos da comunicação sem necessariamente revelar esse material. Em uma conexão criptografada, o observador pode ainda ver que dois sistemas trocaram dados, quando isso ocorreu e quanto foi transferido, mas não necessariamente o que foi enviado. O alcance depende da coleta e das políticas aplicáveis.

## Como funciona em termos defensivos

Uma implementação de NDR começa pela aquisição de dados. Sensores podem receber cópias de tráfego em pontos da rede, enquanto dispositivos e serviços podem fornecer registros de conexão ou outros metadados. A coleta também pode incluir dados de DNS, telemetria de componentes de rede ou informações de inventário. Não existe uma fonte universal: cada uma cobre uma parte do ambiente e tem limites próprios. A escolha dos pontos de observação define quais caminhos podem ser analisados.

Depois da coleta, os dados são organizados para permitir consultas e correlação temporal. Ferramentas podem relacionar fluxos com ativos, segmentos, usuários ou aplicações conhecidos. A análise pode combinar regras explícitas, indicadores conhecidos, perfis de comportamento esperado e métodos estatísticos ou de aprendizado de máquina. A qualidade depende dos dados, da lógica de detecção e da possibilidade de validação.

Um alerta é uma hipótese sustentada por evidências, não uma conclusão automática de incidente. O sistema pode apontar uma sequência incomum de conexões, comunicação com um destino associado a risco, variação abrupta de volume ou contato entre segmentos que raramente se comunicam. Analistas precisam verificar se o comportamento é realmente anômalo naquele contexto e se há uma explicação autorizada, como uma mudança, uma manutenção ou uma nova aplicação.

Quando a ferramenta oferece suporte à resposta, esse suporte pode incluir enriquecimento do alerta, busca retrospectiva, visualização de relações, criação de uma linha do tempo ou integração com controles capazes de restringir uma comunicação. A capacidade de bloquear ou isolar não deve ser confundida com a função de detectar. Restrições automáticas podem interromper serviços legítimos; por isso, ações de contenção exigem critérios, escopo e autorização compatíveis com o processo de resposta da organização.

## Onde NDR é útil

NDR é especialmente útil quando a pergunta investigativa envolve comunicações: que sistemas conversaram, em que momento, com que frequência e em qual direção? Essa perspectiva pode ajudar a identificar atividade que não gerou um alerta claro no endpoint, investigar dispositivos em que não é possível instalar um agente ou observar relações entre segmentos. Também pode mostrar que um sistema aparentemente isolado estabeleceu conexões externas inesperadas.

Em uma investigação, os dados de rede ajudam a construir e testar hipóteses. Após uma suspeita em um servidor, por exemplo, a equipe pode procurar comunicações anteriores com outros ativos, destinos incomuns ou tentativas de alcançar serviços que não fazem parte do padrão daquele servidor. Durante a análise de um alerta de endpoint, pode verificar se outros equipamentos falaram com o mesmo destino no período relevante. Depois de uma contenção, pode procurar sinais de que a comunicação cessou ou se deslocou para outro caminho observável.

## Evidências e investigação

Uma análise robusta preserva detalhes suficientes para que o alerta possa ser reproduzido e contestado. Entre as evidências úteis estão identificadores de origem e destino, horários com referência temporal consistente, protocolo e porta, duração, quantidade e direção dos dados, sensor que observou a conexão, regra ou mecanismo que gerou o sinal e histórico relacionado. Se houver captura de conteúdo, seu uso e retenção precisam respeitar as regras internas e legais aplicáveis.

O contexto do ativo faz diferença. É importante saber se a origem é um servidor de aplicação, uma estação de trabalho, um dispositivo de rede ou uma máquina virtual; que aplicações são esperadas; quem administra o sistema; e se houve mudança recente. A comparação com períodos anteriores pode mostrar se a atividade é nova para aquele ativo ou apenas rara na rede como um todo. O resultado deve registrar tanto os achados quanto as incertezas e as fontes consultadas.

### Exemplo hipotético: servidor com destino novo

Imagine que um servidor interno passe a estabelecer conexões periódicas com um destino externo nunca observado para aquele ativo. O NDR pode destacar a novidade, a periodicidade e o volume aproximado. A equipe verifica a função do servidor, consulta mudanças aprovadas e compara o destino com registros de DNS, firewall e telemetria do próprio servidor. Se uma atualização legítima explicar a comunicação, o alerta pode ser classificado e documentado. Se não houver explicação e outras fontes mostrarem atividade incompatível com a função do equipamento, a observação de rede passa a compor uma investigação mais ampla. O exemplo é hipotético; nenhum desses indícios, isoladamente, prova comprometimento.

### Exemplo hipotético: tráfego entre segmentos

## Relação com outras capacidades

NDR se sobrepõe a monitoramento de rede, análise de tráfego e detecção de intrusão, mas esses termos não são intercambiáveis em todos os contextos. Monitoramento pode limitar-se à disponibilidade, ao desempenho e à operação. Análise de tráfego descreve uma atividade mais ampla de examinar comunicações, sem implicar necessariamente detecção de ameaças ou apoio a resposta. Sistemas de detecção de intrusão em rede podem identificar padrões definidos e gerar alertas; NDR costuma designar uma capacidade que acrescenta contexto comportamental, investigação ou integração com resposta, embora as fronteiras variem entre produtos e organizações.

Também é diferente de EDR, que observa atividade em endpoints, como processos e alterações locais. Uma solução pode oferecer as duas perspectivas ou correlacioná-las, mas os dados são distintos. XDR é uma abordagem que relaciona sinais de várias áreas, como endpoint, identidade, nuvem e rede; portanto, NDR pode ser uma das fontes ou capacidades que contribuem para ela. SIEM, por sua vez, centraliza e correlaciona registros de diferentes sistemas, podendo receber alertas e metadados de NDR. Nenhuma dessas categorias garante, por si só, cobertura completa ou resposta eficaz.

## Limitações e pontos cegos

A criptografia reduz a visibilidade direta do conteúdo. Metadados ainda podem revelar padrões, mas sua interpretação é limitada: volume, duração e destino não mostram necessariamente o propósito ou os dados transmitidos. A inspeção de tráfego criptografado pode depender de informações obtidas em outros pontos, de registros dos próprios serviços ou de mecanismos de inspeção autorizados. Mesmo nesses casos, há impactos técnicos, operacionais e de privacidade a considerar.

Detecções baseadas em desvios podem gerar falsos positivos quando operações legítimas mudam e falsos negativos quando a atividade maliciosa se parece com o tráfego esperado. Um padrão frequente não é necessariamente benigno; uma novidade não é necessariamente hostil. Atacantes também podem usar serviços legítimos, tráfego criptografado ou infraestrutura compartilhada, o que reduz a força de conclusões baseadas somente em reputação de destino. Essas limitações pedem combinação de evidências, revisão contínua e comunicação clara da confiança atribuída a cada achado.

## Implicações para resposta a incidentes

Na triagem, o NDR pode ajudar a priorizar alertas ao mostrar ativos afetados, amplitude temporal, destinos e relações observadas. Na análise, pode apoiar a delimitação do incidente e a busca por atividade semelhante. Na contenção, pode contribuir para selecionar comunicações a bloquear ou segmentos a restringir, quando houver controles integrados. Na recuperação, pode ajudar a verificar se o padrão suspeito reaparece. Em cada etapa, a equipe deve registrar a janela observada, a cobertura disponível e o que permaneceu desconhecido.

Uma resposta proporcional evita bloquear um destino ou isolar um ativo apenas porque a ferramenta atribuiu uma pontuação elevada. Antes de agir, convém verificar o impacto potencial, confirmar o ativo e a comunicação, procurar dependências operacionais e alinhar a ação ao plano de resposta. Quando a urgência exigir contenção rápida, a decisão pode ser tomada com evidência incompleta, mas a incerteza e o motivo devem ficar documentados. Após a ação, a equipe deve observar efeitos colaterais e validar se a medida reduziu o risco pretendido.

## Perguntas frequentes

### NDR precisa ler o conteúdo das comunicações?

Não. A detecção pode usar metadados e padrões de fluxo sem decifrar o conteúdo. A disponibilidade de conteúdo depende do protocolo, do ponto de coleta e das políticas aplicáveis. Metadados podem ser suficientes para levantar uma hipótese, mas nem sempre para confirmá-la.

### Um alerta de NDR confirma que houve comprometimento?

Não. Ele indica uma condição que merece validação. A equipe deve confirmar a observação, avaliar o contexto e buscar evidências complementares antes de declarar incidente ou atribuir causa.

### NDR substitui EDR ou SIEM?

Não. NDR observa comunicações de rede; EDR observa atividade local em endpoints; SIEM agrega e correlaciona registros de várias fontes. Podem trabalhar juntos, mas respondem a perguntas diferentes e dependem da qualidade da integração.

### É possível detectar tudo em uma rede virtual ou em nuvem?

Não se deve presumir cobertura total. A visibilidade depende dos pontos em que dados são gerados e coletados, das configurações e do caminho efetivamente percorrido pelo tráfego. Redes virtuais e serviços distribuídos podem exigir fontes próprias de telemetria; a cobertura precisa ser verificada para cada arquitetura.

### Como avaliar se uma detecção é confiável?

Verifique quais dados a sustentam, qual regra ou análise a gerou, se o horário e os ativos estão corretos, se o comportamento é incomum naquele contexto e se fontes independentes corroboram a hipótese. Uma explicação verificável é mais útil do que uma pontuação sem contexto.

## No contexto do capítulo

No capítulo 6 da versão original, NDR se relaciona à discussão de detecção: a observação de comunicações pode revelar relações e desvios que complementam outras fontes defensivas. Seu valor prático depende de saber o que foi efetivamente observado, reconhecer os pontos cegos e tratar cada alerta como evidência a investigar, não como veredito.
