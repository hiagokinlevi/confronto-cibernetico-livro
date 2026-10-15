# Rootkit

## Definição e ideia central

Um rootkit é um conjunto de componentes que procura ocultar atividade maliciosa em camadas profundas do sistema operacional. O termo descreve uma capacidade de persistência e ocultação, não uma família única de programa, um formato de arquivo específico ou uma técnica isolada. Um rootkit pode reunir código, configurações, alterações em componentes legítimos e mecanismos de inicialização. O ponto em comum é interferir no que o sistema apresenta como verdadeiro: processos, arquivos, conexões ou outros objetos podem existir sem aparecer em consultas usuais.

A palavra costuma evocar acesso privilegiado, mas a análise não deve depender apenas desse rótulo. Há rootkits que atuam em partes do sistema com privilégios elevados, e há mecanismos de ocultação que operam em espaço de usuário ou em componentes de inicialização. O que importa para a investigação é a posição ocupada na cadeia de observação e o efeito sobre a confiança nos dados coletados. Quanto mais próximo do núcleo do sistema, do processo de inicialização ou do firmware estiver o componente, maior pode ser sua capacidade de influenciar as ferramentas que dependem daquela camada.

“Ocultar” também não significa necessariamente tornar algo invisível em qualquer circunstância. Muitas vezes significa reduzir a visibilidade para interfaces e ferramentas comuns, ou apresentar resultados seletivos. Um arquivo pode ser omitido de uma listagem, embora seus dados ainda estejam em blocos do disco; um processo pode não aparecer em uma consulta, embora exista atividade associada a ele; ou uma ferramenta pode receber respostas manipuladas. Uma investigação deve, portanto, separar a ausência de uma evidência em determinada consulta da evidência de ausência do objeto.

## Como a ocultação afeta a observação

Um sistema operacional expõe seu estado por diversas interfaces: comandos administrativos, chamadas de sistema, registros, telemetria, interfaces de gerenciamento e ferramentas de segurança. Se um componente malicioso controla ou altera uma dessas rotas, a resposta recebida pode ser incompleta ou inconsistente com a realidade subjacente. Essa é a razão pela qual uma única ferramenta executada no próprio equipamento comprometido não é árbitro independente de sua integridade.

As formas de interferência variam. O componente pode filtrar objetos específicos, modificar resultados retornados por uma interface, ocultar artefatos de persistência, adulterar registros ou dificultar a execução de ferramentas de análise. Pode bastar proteger o mecanismo de acesso ou esconder indicadores úteis à detecção, fazendo uma inspeção superficial parecer normal.

A profundidade de uma camada não equivale automaticamente a invisibilidade. Mecanismos de integridade do sistema, inicialização verificada, controles de assinatura, telemetria externa e sensores independentes podem expor alterações ou limitar sua atuação. Esses controles não provam isoladamente que o dispositivo está limpo: podem estar desativados ou não cobrir o componente relevante. A interpretação precisa considerar qual controle estava ativo e o que ele efetivamente verificou.

## Onde aparece numa investigação

A suspeita costuma surgir quando fontes que deveriam descrever o mesmo estado entram em conflito. Uma ferramenta lista processos diferentes do que outra fonte de telemetria registra; um arquivo parece ausente no sistema em execução, mas há referências a ele em registros, imagens de disco ou eventos históricos; um componente reaparece depois de uma remoção; ou uma verificação de integridade identifica diferenças sem explicação administrativa. Nenhum desses sinais basta sozinho para concluir que há um rootkit. Eles indicam uma discrepância a explicar.

O termo é útil quando a hipótese de ocultação altera o método de coleta. Se houver motivo para acreditar que a interface local está sob controle do adversário, repetir a mesma consulta com outra ferramenta semelhante pode apenas reproduzir a mesma visão contaminada. O investigador passa a procurar fontes com dependências distintas, preservar evidências e testar a hipótese de que a camada em execução não oferece respostas confiáveis.

Uma investigação pode encontrar indícios em diferentes momentos: alertas de inicialização, divergências entre inventário e telemetria, alterações não autorizadas em componentes, comportamento de rede atribuído a processos não identificados, registros incompletos, ou recorrência de um artefato após correção. Atualizações, drivers legítimos, ferramentas de monitoramento e mecanismos de segurança também podem interagir com interfaces profundas e gerar anomalias.

## Evidências e limites da verificação

A confiança aumenta quando evidências independentes convergem. A análise pode comparar a visão do sistema em execução com uma coleta feita fora desse ambiente, verificar assinaturas e hashes contra fontes confiáveis, examinar metadados e caminhos de inicialização, confrontar inventário com registros históricos e validar a integridade de componentes esperados. Um hash compatível valida apenas o conteúdo comparado; não prova que o componente foi carregado legitimamente nem que todo o sistema está íntegro.

Uma coleta de memória pode preservar estruturas presentes durante a execução e ajudar a identificar inconsistências que não aparecem em um inventário de arquivos. Uma imagem de disco pode permitir examinar conteúdo e metadados sem depender da visão normal do sistema ativo. Logs remotos ou telemetria coletada antes do incidente podem oferecer uma linha de comparação. Se a hipótese alcançar a cadeia de inicialização ou firmware, a análise pode exigir ferramentas e procedimentos próprios para aquela plataforma. Cada fonte tem limites de cobertura, temporalidade e confiabilidade.

A verificação pode exigir coleta especializada ou reconstrução a partir de uma base confiável. A primeira é importante para preservar estado volátil, investigar componentes específicos e reduzir dependência das interfaces suspeitas. A segunda pode ser necessária quando não há forma razoável de estabelecer a integridade do ambiente instalado. Reconstruir não significa simplesmente reinstalar por cima: é preciso considerar a origem da mídia, o estado das partições, a persistência fora do sistema operacional, a cadeia de inicialização e a restauração de dados potencialmente contaminados.

A coleta também pode destruir ou alterar evidências se for feita sem planejamento. Desligar um equipamento pode eliminar dados voláteis; iniciar uma ferramenta local pode modificar arquivos, registros ou memória; conectar um disco a outro sistema pode causar escritas automáticas. O procedimento adequado depende da prioridade entre contenção, preservação e recuperação. Em incidentes ativos, a segurança de pessoas e serviços pode exigir isolamento imediato, ainda que isso limite a evidência disponível. Registrar decisões, horários, ferramentas e condições de aquisição torna os resultados mais interpretáveis.

## Distinções importantes

**Rootkit e backdoor.** Uma backdoor oferece um caminho de acesso não autorizado ou não documentado. Um rootkit procura ocultar atividade em camadas do sistema. Um mesmo implante pode fazer ambos, mas uma backdoor não precisa esconder-se, e um rootkit pode apoiar a persistência ou ocultação de outro componente sem fornecer acesso remoto por conta própria.

**Rootkit e bootkit.** Bootkit é um termo usado para mecanismos que atuam na cadeia de inicialização, interferindo no carregamento do sistema antes ou durante sua entrada em operação. Pode ser considerado uma forma ou categoria relacionada à ocultação profunda, mas os termos não são sinônimos perfeitos: “bootkit” destaca o momento e a camada de inicialização; “rootkit” descreve mais amplamente o comportamento de ocultação em camadas do sistema.

**Rootkit e malware em espaço de usuário.** Um programa malicioso comum pode ser persistente e furtivo sem modificar o núcleo ou controlar interfaces profundas. A classificação deve seguir a evidência da camada e do mecanismo, não a gravidade percebida. Uma ferramenta que apaga arquivos ou muda nomes pode esconder atividade de modo rudimentar, mas isso não basta para afirmar que há um rootkit.

**Rootkit e vulnerabilidade.** Uma vulnerabilidade é uma fraqueza que pode permitir impacto; um rootkit é um conjunto de componentes ou comportamento de ocultação. Uma vulnerabilidade pode ser explorada para instalar um rootkit, mas encontrar uma falha não prova instalação, assim como encontrar um rootkit não identifica automaticamente como o acesso inicial ocorreu.

**Rootkit e falso positivo de integridade.** Diferenças em arquivos, drivers ou módulos podem resultar de atualização, configuração local, corrupção, incompatibilidade ou monitoramento legítimo. Um alerta de integridade é um achado que precisa ser validado. Atribuir intenção maliciosa exige contexto, proveniência e correlação com outros sinais.

## Exemplo hipotético

Imagine uma estação de trabalho em que a equipe de resposta recebe um alerta de conexões de rede recorrentes. A lista de processos do sistema não mostra um programa correspondente, mas o sensor corporativo registra atividade associada a um identificador de processo que não aparece nas consultas locais. Uma primeira possibilidade é atraso ou falha de telemetria. Outra é um componente malicioso que manipula a enumeração de processos. A divergência justifica preservar dados e comparar fontes, mas não permite concluir imediatamente que existe um rootkit.

A equipe registra o estado observado, isola o equipamento conforme o plano de resposta e obtém uma coleta independente. Na análise, encontra uma referência de inicialização incompatível com a imagem aprovada e estruturas de memória que explicam a discrepância. Em paralelo, verifica que a atualização recente não deveria ter alterado aquele componente. A combinação de achados sustenta uma hipótese de ocultação em uma camada privilegiada. O exemplo é ilustrativo; conclusões reais dependem da qualidade da coleta e da exclusão de explicações legítimas.


## Resposta a incidentes

Quando a hipótese é plausível, a resposta deve proteger tanto a organização quanto a evidência. A equipe deve avaliar impacto e exposição, registrar o que foi observado, preservar fontes relevantes e decidir se o equipamento permanece ligado para aquisição ou é isolado imediatamente. A decisão depende do risco de propagação, da criticidade do serviço e da volatilidade das evidências.

A contenção pode incluir isolamento de rede, bloqueio de credenciais comprometidas, suspensão de acessos e proteção de sistemas relacionados. Essas medidas precisam considerar se o componente pode sobreviver a uma simples remoção ou reaparecer por persistência em outra camada. Remover apenas o artefato visível pode deixar o mecanismo de reinfecção intacto; por outro lado, uma limpeza apressada pode eliminar informações necessárias para entender o escopo. A equipe deve definir objetivos: interromper atividade, preservar prova, recuperar o serviço ou cumprir obrigações de investigação.

A erradicação exige uma decisão fundamentada sobre confiança. Em alguns casos, remover um componente identificado e validar a integridade do restante pode ser suficiente. Em outros, a dúvida sobre componentes centrais torna mais prudente reinstalar ou reconstruir a partir de fontes confiáveis, atualizar firmware quando indicado pelo fabricante e restaurar dados verificados. Credenciais usadas no dispositivo devem ser avaliadas e possivelmente renovadas por canais confiáveis. A reconstrução deve cobrir o vetor de persistência identificado e não apenas a superfície em que o alerta apareceu.

Depois da recuperação, monitoramento reforçado ajuda a detectar recorrência. A equipe deve revisar como o acesso ocorreu, quais controles falharam ou não cobriam aquela camada, que alertas poderiam ter sido correlacionados e quais ativos compartilham a mesma exposição. A documentação deve separar fatos, inferências e incertezas.

## Relação com o capítulo original

No capítulo 1 da versão original, o verbete serve como referência para interpretar a ocultação em camadas profundas do sistema e suas consequências para a confiança na observação. A conexão prática é direta: reconhecer a possibilidade de uma visão local manipulada ajuda a orientar a coleta, a análise e a decisão de reconstrução, sem transformar qualquer alerta isolado em prova de comprometimento.
