# Fileless

## Conceito

**Fileless**, também chamado de *fileless malware* ou malware sem arquivo, descreve uma técnica de execução que reduz a dependência de arquivos persistentes no disco. Em vez de deixar o componente principal da atividade maliciosa como um executável convencional, pronto para ser localizado por uma varredura de arquivos, a intrusão pode usar memória, dados recebidos durante a execução e ferramentas legítimas já disponíveis no sistema. O objetivo prático pode ser dificultar a detecção baseada em arquivos, diminuir artefatos duradouros ou aproveitar mecanismos administrativos que já fazem parte do ambiente.

A definição não afirma que nada jamais seja gravado. O termo se refere sobretudo à forma como o código ou a lógica maliciosa é introduzida, mantida ou executada, e não a uma propriedade absoluta de toda a intrusão. Um ataque descrito como fileless pode criar arquivos auxiliares, modificar configurações persistentes, deixar registros no sistema, ou depender de um documento ou instalador que existiu em disco. O elemento relevante é a dependência reduzida de um arquivo malicioso tradicional, não a inexistência universal de qualquer arquivo.

Essa nuance importa porque “sem arquivo” é uma expressão intuitiva, mas pode levar a uma conclusão errada: a de que o ataque não deixa vestígios. Ele pode deixar muitos vestígios, apenas em lugares diferentes dos diretórios examinados por um antivírus ou por uma triagem inicial. Processos, conexões, memória, mecanismos de inicialização, registros de autenticação e telemetria de segurança podem registrar partes da sequência. Por isso, a ausência de um executável suspeito é uma observação limitada, não um veredito sobre a integridade da máquina.

## Como a técnica aparece

Em um sistema comprometido, um adversário pode abusar de componentes autorizados para executar comandos, interpretar conteúdo ou administrar o dispositivo. Em ambientes Windows, por exemplo, ferramentas de automação e administração podem ser usadas por equipes legítimas e também abusadas em uma intrusão. Em outros sistemas, interpretadores, utilitários do sistema ou serviços de gerenciamento podem desempenhar papel semelhante. A ferramenta, isoladamente, não demonstra intenção maliciosa: o contexto, a origem da ação, os argumentos, a identidade que a iniciou e os efeitos observados são essenciais.

A lógica maliciosa pode chegar como conteúdo, ser decodificada ou montada em tempo de execução e permanecer em regiões de memória associadas a um processo. Também pode ser carregada por um interpretador ou por um componente legítimo, sem que o payload seja instalado como um programa convencional. Em alguns casos, o mecanismo usado para iniciar a atividade é distinto daquele que a mantém após uma reinicialização. Assim, uma fase pode ser pouco persistente e outra pode alterar configurações, tarefas ou outros pontos de inicialização. Essa combinação não deixa de ser compatível com a descrição fileless: a classificação não exige que todas as etapas usem a mesma técnica.

## Por que o termo é útil

O termo chama atenção para uma lacuna comum de monitoramento: controles centrados em arquivos em repouso podem não observar uma execução cujo conteúdo relevante passa principalmente por memória ou por componentes já confiáveis. Uma busca por arquivos novos continua útil, mas não cobre sozinha execução, uso abusivo de ferramentas, alterações de configuração ou atividade de rede. Fileless é, portanto, uma lente para ampliar a investigação além do sistema de arquivos.

Na triagem, a hipótese pode ser pertinente quando há atividade suspeita sem um artefato executável evidente, quando uma ferramenta legítima se comporta de maneira incomum ou quando a telemetria mostra uma cadeia de processos incompatível com a função do equipamento. O termo também ajuda a explicar por que a detecção pode depender de registros de execução e de contexto. Ele não identifica, por si, uma família de malware, uma campanha, uma motivação ou um nível de sofisticação.

Na comunicação entre equipes, “possível execução fileless” pode resumir uma hipótese de trabalho: a atividade talvez tenha ocorrido sem depender de um arquivo malicioso persistente em disco. A formulação deve permanecer provisória enquanto não houver evidências suficientes. Se uma amostra for encontrada depois, isso não invalida necessariamente a hipótese; pode mostrar que a operação combinou técnicas ou que a descrição inicial era incompleta. Da mesma forma, a mera falta de amostra não confirma o caráter fileless.

## Evidências e investigação

A memória pode preservar conteúdo, módulos carregados, regiões executáveis ou relações entre processos que já não estão disponíveis no disco. Uma captura de memória, quando tecnicamente apropriada e autorizada, pode ser valiosa, mas não é uma fotografia completa nem necessariamente fácil de interpretar. O conteúdo pode ter sido alterado, descarregado ou substituído; uma análise negativa não exclui a atividade. Além disso, coletar memória pode exigir decisões rápidas de resposta e recursos especializados. É importante registrar a origem, o horário e as condições da coleta para que os resultados possam ser avaliados com rigor.

Os dados de endpoint devem ser correlacionados com fontes independentes, como autenticação centralizada, proxy, DNS, firewall, plataforma de gestão e registros de serviços em nuvem, quando disponíveis. Uma estação pode não reter certos eventos localmente, mas outra fonte pode registrar a conta, o destino ou o horário. A retenção, a configuração e a integridade desses registros variam de organização para organização; ausência de telemetria significa falta de observabilidade, não ausência de atividade.

## Distinções importantes

**Fileless não é sinônimo de “sem malware”.** O termo descreve uma técnica ou característica de execução, não a natureza benigna da atividade. Código malicioso pode ser executado por um processo legítimo, e um processo legítimo pode ser abusado sem se tornar, por isso, um programa malicioso em todas as suas funções.

**Fileless não significa “sem disco”.** Um ataque pode começar por um arquivo, registrar artefatos auxiliares ou estabelecer persistência em configurações armazenadas. A afirmação mais defensável é que a execução ou o payload principal não depende, em determinada etapa, de um arquivo malicioso convencional persistente. A extensão dessa afirmação deve ser compatível com o que foi observado.

**Não é sinônimo de malware residente apenas em memória.** “Residente em memória” enfatiza onde uma parte do código está ativa ou mantida. “Fileless” enfatiza a baixa dependência de arquivos persistentes. Os conceitos podem se sobrepor, mas não são idênticos: a atividade pode usar memória e ainda gravar outros artefatos; também pode reduzir arquivos sem que a investigação consiga demonstrar residência contínua em memória.

**Não é igual a malware sem arquivo de assinatura.** A expressão não descreve ausência de assinatura digital, de hash ou de indicador conhecido. Um executável assinado pode ser abusado; conteúdo sem arquivo persistente pode ainda produzir indicadores observáveis. Confundir o termo com uma propriedade de assinatura mistura categorias distintas de análise.

**Living off the land** descreve o uso de ferramentas ou componentes legítimos disponíveis no ambiente para realizar ações. Essa prática pode apoiar uma execução fileless, mas os termos não são intercambiáveis. Uma intrusão pode abusar de ferramentas do sistema e ainda gravar payloads em disco; uma atividade com pouca dependência de arquivos pode envolver componentes que não fazem parte do conjunto habitual de ferramentas do ambiente.

## Limitações e erros de interpretação

A principal limitação é a amplitude do rótulo. “Fileless” aparece com sentidos diferentes em relatórios e conversas: pode se referir ao estágio inicial, ao payload, a uma forma de persistência ou simplesmente à falta de um arquivo detectado. Sem especificar qual etapa está em questão, o termo pode parecer mais preciso do que realmente é. Em um relatório técnico, é melhor descrever o comportamento observado e esclarecer o que “fileless” significa naquele caso.

Um erro frequente é tratar o termo como uma categoria binária: ou o ataque não escreveu nada em disco, ou não era fileless. Essa leitura não corresponde à definição técnica adotada aqui. Técnicas diferentes podem ser combinadas, e uma mesma operação pode alternar entre conteúdo em memória e artefatos persistentes. Outro erro é concluir que uma ferramenta amplamente usada é maliciosa porque apareceu num incidente. A investigação deve demonstrar abuso pelo contexto, pela finalidade e pelos efeitos, não pelo nome do executável.

O inverso também merece cuidado: não encontrar uma amostra pode decorrer de limpeza, quarentena, retenção insuficiente, criptografia, falta de coleta ou limitações do método de busca. Isso não estabelece que a execução foi fileless. A conclusão deve mencionar quais fontes foram examinadas e quais não estavam disponíveis, especialmente se o incidente exigir atribuição, auditoria ou comunicação formal.

## Implicações para resposta a incidentes

A resposta deve equilibrar contenção e preservação. Se houver risco ativo, a organização pode precisar isolar o equipamento ou bloquear uma conta ou destino, seguindo seus procedimentos e considerando o impacto operacional. Quando possível, antes de reiniciar, desligar ou limpar o sistema, a equipe deve avaliar se a volatilidade da memória torna relevante coletar dados que desapareceriam. Essa decisão depende do risco, da capacidade técnica e das regras aplicáveis; preservar evidências não deve atrasar uma medida urgente de contenção.

A análise deve buscar a cadeia completa: vetor inicial, processo que iniciou a execução, identidade usada, privilégios, comunicação externa, tentativas de persistência, alcance a outros ativos e ações posteriores. Bloquear somente o arquivo suspeito pode ser ineficaz quando não existe um arquivo principal a remover ou quando a execução depende de configurações e credenciais que continuam válidas. A erradicação pode exigir remover alterações não autorizadas, revogar sessões ou credenciais expostas, corrigir o ponto de entrada e verificar ativos relacionados.

## Perguntas frequentes

### Um ataque fileless nunca grava arquivos?

Não. O termo indica dependência reduzida de arquivos persistentes na execução relevante. A operação pode envolver arquivos de entrada, auxiliares, registros, configurações ou outros artefatos em disco. É necessário especificar o componente e a etapa analisados.

### A ausência de arquivo suspeito confirma fileless?

Não. Ela apenas informa que a busca realizada não encontrou aquele tipo de artefato. Limitações de coleta, retenção, método ou limpeza também explicam a ausência. Logs de processo, memória e fontes externas podem ajudar a avaliar a hipótese.

### Uma ferramenta legítima é malware quando usada numa intrusão?

A ferramenta continua sendo um componente legítimo, mas seu uso pode fazer parte de uma ação maliciosa. A análise deve atribuir a intenção à atividade e à cadeia de execução com base em contexto, autorização e efeitos observados, não somente ao nome do programa.

### O que é mais importante numa conclusão técnica?

Separar observações de interpretação. Informe se foi visto conteúdo em memória, uso anômalo de ferramenta ou apenas ausência de arquivo; descreva as fontes e limitações. Use “fileless” como caracterização sustentada por evidências, não como substituto da descrição do comportamento.

## Relação com o capítulo

No capítulo 1 da versão original, o termo pode ser situado entre as técnicas de ataque que desafiam a leitura baseada apenas em artefatos persistentes. A conexão prática é direta: entender a execução fileless amplia o foco da investigação para processos, memória e contexto operacional, sem tratar a ausência de um arquivo como prova de ausência de intrusão.
