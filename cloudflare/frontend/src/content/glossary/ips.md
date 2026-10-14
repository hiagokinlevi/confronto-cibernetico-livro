# IPS

## Conceito e finalidade

IPS é a sigla de *Intrusion Prevention System*, em português, sistema de prevenção de intrusões. É um controle de segurança que pode bloquear tráfego ou ações considerados maliciosos conforme políticas de prevenção. A palavra “pode” importa: a capacidade de impedir uma atividade não significa que todo IPS observe tudo, compreenda a intenção de cada evento ou bloqueie automaticamente qualquer ameaça. Seu comportamento depende da posição em que opera, dos dados que consegue inspecionar, das regras habilitadas e das decisões de configuração e operação.

Na área de detecção, o IPS ocupa uma posição particular. Ele identifica condições que correspondem a critérios definidos e pode agir sobre elas no mesmo fluxo de processamento, em vez de apenas produzir um alerta para análise posterior. A ação pode interromper uma conexão, descartar pacotes, limitar uma sessão ou impedir uma operação, conforme a arquitetura do produto e a política configurada. Em algumas implementações, o mesmo componente também registra ou encaminha alertas. Detecção e prevenção, portanto, estão relacionadas, mas não são sinônimos: encontrar um sinal não garante que a ação de bloqueio seja possível, adequada ou bem-sucedida.

O objetivo defensivo é reduzir a oportunidade de uma atividade indesejada alcançar um serviço, atravessar um segmento ou prosseguir dentro de um ambiente monitorado. O IPS é uma camada de controle, não uma declaração de que o sistema protegido está seguro. Ele não substitui correções, autenticação, segmentação, proteção de endpoint, cópias de segurança ou análise de incidentes. Seu valor aparece quando a observação e a decisão de bloqueio cobrem um risco relevante sem impor interrupções desproporcionais ao negócio.

## Como funciona em termos defensivos

Um IPS aplica políticas a eventos que consegue observar. Dependendo do ponto de implantação, esses eventos podem ser pacotes de rede, sessões, pedidos a uma aplicação ou ações percebidas por um agente no próprio sistema. O mecanismo compara características observadas com condições de detecção, que podem representar padrões conhecidos, violações de protocolo, comportamentos considerados impróprios ou outras regras. Quando a condição e o modo de operação permitem prevenção, o componente executa a ação configurada e, idealmente, registra o que motivou a decisão.

A inspeção pode considerar diferentes aspectos: endereços e portas, direção e estado de uma conexão, campos de protocolo, conteúdo visível, sequência de eventos ou contexto fornecido pelo ambiente. Nem toda implantação tem acesso a todos esses elementos. Criptografia, encapsulamento, segmentação, tráfego assimétrico, limites de desempenho e desenho da rede podem reduzir a visibilidade. Um IPS que vê apenas parte de uma sessão não deve ser presumido capaz de avaliar o conteúdo completo. Da mesma forma, a presença de um dispositivo em um caminho de rede não prova, sozinha, que ele está efetivamente inspecionando aquele fluxo.

A política define o que fazer diante de uma correspondência. Um modo de monitoramento registra eventos ou gera alertas sem impedir a passagem; um modo de prevenção permite descartar ou encerrar atividade classificada como indesejada. Os nomes e recursos variam entre produtos. Em ambos os casos, regras, exceções, atualizações e parâmetros influenciam os resultados. Uma regra pode ser desativada, estar restrita a certos segmentos, ter ação de alerta em vez de bloqueio ou não se aplicar ao protocolo efetivamente observado.


## Onde aparece na investigação

Em uma investigação, referências a IPS podem surgir em alertas, registros de firewall ou de gateway, consoles de monitoramento, inventários de controles, diagramas de rede, políticas de segurança, chamados de mudança e relatos de usuários. O registro pode indicar horário, origem e destino, protocolo, regra ou assinatura acionada, severidade atribuída, ação tomada e identificador do sensor. Campos disponíveis e nomenclatura variam. O investigador deve preservar o evento original e compreender o significado local dos campos antes de concluir o que ocorreu.

Um evento de bloqueio é uma evidência de que o sistema registrou uma decisão ou resultado de prevenção, segundo sua própria configuração. Ele não demonstra automaticamente que todo o conteúdo foi barrado, que a conexão não teve sucesso por outro caminho ou que o destino permaneceu sem impacto. O registro pode refletir uma tentativa, uma sessão interrompida, um pacote isolado ou uma ação executada após parte da comunicação já ter ocorrido. Em sentido inverso, não encontrar um registro pode decorrer de ausência de cobertura, retenção curta, falha de encaminhamento, filtro no console, diferença de fuso horário, relógio desalinhado ou política de registro insuficiente.

Para interpretar um evento, correlacione-o com fontes independentes: registros do serviço de destino, firewall, balanceador, sistema operacional, identidade, DNS, proxy, telemetria de endpoint e informações de rede disponíveis. Use intervalos de tempo compatíveis e considere atrasos de ingestão. Confira se endereços foram traduzidos por NAT ou proxy e se os relógios das fontes estavam sincronizados. Uma coincidência temporal ou de endereço pode sustentar uma hipótese, mas não basta para atribuir intenção a uma pessoa ou confirmar comprometimento.

Na preservação, registre a origem do dado, o horário de coleta, a zona horária, os filtros usados e quaisquer conversões realizadas. Guarde exportações em formato que mantenha os campos relevantes, além de capturas legíveis quando forem úteis para revisão. Mudanças de regra feitas durante a resposta também devem ser registradas com autor, horário, escopo, motivo e estado anterior, para que a equipe consiga reconstruir a sequência e distinguir atividade do incidente de alterações de contenção.

## Evidências para reconhecer e validar um IPS

A simples ocorrência da palavra “IPS” em uma tela ou relatório não confirma função, cobertura ou estado efetivo. Procure evidências complementares que descrevam o componente e sua atuação:

- configuração que mostre regras habilitadas e a ação associada, distinguindo alerta, descarte, encerramento ou outra resposta;
- topologia ou documentação que identifique interfaces, segmentos, direção observada e se o controle está no caminho do tráfego;
- registros com identificador do sensor, regra acionada, horário, fluxo afetado e resultado informado;
- histórico de alterações, atualizações de regras, exceções e mudanças de modo de operação;
- métricas de saúde, capacidade, falhas de inspeção, perda de eventos e encaminhamento de logs;
- confirmação nos sistemas de origem e destino de que o evento corresponde ao mesmo fluxo e período.



## Distinções com termos próximos

**IDS** (*Intrusion Detection System*) é um sistema de detecção de intrusões. Em termos gerais, um IDS identifica e comunica eventos, mas não se deve presumir que bloqueie o tráfego. A distinção clássica destaca a ação preventiva do IPS; na prática, produtos podem combinar funções de detecção e prevenção, e um mesmo dispositivo pode oferecer modos de observação e bloqueio. Verifique a configuração efetiva, não apenas o rótulo.

**Firewall** aplica políticas de comunicação, com frequência baseadas em origem, destino, protocolo, porta, estado da conexão ou identidade. Um IPS costuma procurar condições de ameaça ou violação com maior atenção ao conteúdo ou ao comportamento observado, embora fronteiras funcionais variem e recursos possam coexistir no mesmo equipamento. O fato de um firewall bloquear uma conexão não torna automaticamente esse evento uma ação de IPS, nem todo IPS substitui as regras de segmentação e acesso do firewall.

**WAF** (*Web Application Firewall*) concentra-se em tráfego e regras relacionados a aplicações web. Algumas plataformas integram capacidades de prevenção semelhantes às de um IPS; outras as mantêm separadas. A distinção prática está no escopo de inspeção, no contexto que o controle compreende e nas políticas habilitadas. Um WAF não deve ser tratado como proteção universal de todos os protocolos ou sistemas.

**EDR** (*Endpoint Detection and Response*) coleta e analisa sinais em endpoints e costuma apoiar investigação e resposta nesse contexto. Uma função de prevenção de endpoint pode bloquear ações locais, mas isso não equivale necessariamente a inspecionar e impedir tráfego de rede no caminho. O agente pode complementar um IPS de rede, oferecendo observação em outro ponto.

**SIEM** (*Security Information and Event Management*) reúne e correlaciona registros para monitoramento e investigação. Pode exibir um evento originado por IPS e acionar fluxos de resposta, mas a ingestão do evento não prova que o SIEM bloqueou o fluxo. Separe o sensor que detectou, o componente que aplicou a ação e a plataforma que centralizou o registro.

## Limitações e riscos de interpretação

Um IPS só pode tomar decisões confiáveis sobre o que consegue observar e interpretar. Tráfego cifrado pode ocultar conteúdo; a descriptografia, quando existente, depende de desenho, autorização e configuração apropriados. Protocolos novos, fragmentação, compressão, encapsulamento, aplicações personalizadas ou estados de sessão incompletos podem limitar a inspeção. Uma assinatura desatualizada pode não reconhecer padrões novos; uma política permissiva pode deixar passar atividade que deveria examinar; uma regra excessivamente abrangente pode classificar tráfego legítimo como nocivo.

A prevenção também pode ter custo operacional. Em implantação em linha, falha, sobrecarga ou decisão incorreta pode interromper serviços. Regras muito amplas podem interromper serviços legítimos; monitore efeitos e mantenha plano de reversão. Antes de ampliar bloqueios, avalie o impacto por serviço e segmento, valide regras com tráfego representativo e planeje como reverter a mudança.

Há erros recorrentes de leitura que podem distorcer a análise:

- considerar um alerta como prova de que a ação foi bloqueada;
- considerar um evento bloqueado como prova de que nenhuma parte da comunicação foi processada;
- interpretar silêncio do sensor como ausência de atividade sem verificar cobertura e retenção;
- tratar nome ou severidade de assinatura como confirmação de comprometimento;
- supor que dois eventos com o mesmo endereço representam o mesmo agente ou fluxo;
- confundir a ação do IPS com a ação de firewall, proxy, agente ou automação que recebeu o alerta;
- concluir eficácia ou falha sem verificar estado, política e registros dos sistemas envolvidos.

Essas cautelas não tornam o controle inútil. Elas delimitam a força de cada conclusão e ajudam a direcionar a coleta adicional. Um resultado bem documentado distingue fato observado, interpretação e lacuna: por exemplo, “o sensor registrou descarte segundo a regra X às 14h” é diferente de “o ataque foi impedido”. A segunda afirmação requer evidência sobre o fluxo completo e o sistema de destino.

## Uso durante resposta a incidentes

Na resposta, identifique a instância que gerou o evento, os ativos e fluxos abrangidos, a regra ativa e a ação executada. Correlacione os dados com evidências de endpoint e aplicação para distinguir tentativa, atividade permitida, interrupção parcial e possível impacto.

Se o IPS já bloqueou tráfego associado ao incidente, registre a ação e avalie se o escopo é suficiente. Bloquear uma origem pode não resolver o problema se houver outros caminhos, ativos ou identidades envolvidos. Uma alteração emergencial de política pode ser apropriada para reduzir exposição, mas deve ser delimitada, aprovada segundo o procedimento aplicável e observada após a aplicação. Quando possível, preserve a configuração anterior e o evento que motivou a mudança. Se o controle causar indisponibilidade, a reversão deve considerar o risco de reabrir o caminho suspeito; a decisão deve ser coordenada com responsáveis pelo serviço e pela segurança.

Ao encerrar, avalie ajustes de cobertura, regras, registros e capacidade. Confirme o destino de exceções temporárias e considere falsos positivos e falsos negativos observados; ausência de bloqueios não prova adequação da política.

## Relação com o capítulo

Na versão original do manuscrito, o capítulo 6 oferece o contexto para relacionar IPS à detecção e à prevenção dentro de uma estratégia defensiva. Este verbete detalha como interpretar a função do controle, suas evidências e seus limites durante a operação e a resposta a incidentes.
