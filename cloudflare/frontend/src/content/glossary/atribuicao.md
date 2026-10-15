# Atribuição

## Definição e escopo

Atribuição é a análise que busca relacionar uma atividade observada a uma campanha ou ator com determinado grau de confiança. Em segurança cibernética, o termo descreve uma conclusão construída a partir de evidências, não uma propriedade que possa ser lida diretamente em um arquivo, endereço de rede ou alerta. Um evento pode ser observado com alta precisão — por exemplo, uma autenticação em um horário específico — enquanto a identidade de quem o provocou permanece incerta. A qualidade da atribuição depende de manter clara essa diferença entre observar fatos e inferir relações.

Por isso, atribuir não é simplesmente dar um nome ao invasor. É formular uma ou mais hipóteses sobre relações entre eventos, recursos, métodos e entidades, avaliar o suporte de cada hipótese e declarar o nível de confiança adequado. Dependendo da pergunta, a conclusão pode ser: a atividade pertence provavelmente a uma campanha conhecida; foi executada por alguém com acesso a determinada infraestrutura; ou é compatível com um conjunto de atores, sem base suficiente para escolher um deles. “Desconhecido” e “inconclusivo” são resultados legítimos.

## Níveis e perguntas de atribuição

A palavra cobre questões distintas, que precisam ser separadas para evitar que uma conclusão limitada pareça mais abrangente do que a evidência permite.

Cada nível requer evidências compatíveis com a afirmação. Um domínio associado a uma operação pode ajudar a ligar ocorrências, mas não identifica por si só quem o registrou ou controlou. Do mesmo modo, uma análise técnica pode sustentar a associação de um artefato a um conjunto de campanhas sem provar quem tomou a decisão política de empregá-lo. Relatórios sólidos dizem exatamente o que foi atribuído e em que nível.

## Evidências e raciocínio analítico

A atribuição combina fontes heterogêneas. A utilidade de cada uma depende de sua origem, integridade, contexto e independência em relação às demais. Não há um indicador universal que funcione como assinatura infalível de um ator.

### Evidência técnica

Registros de autenticação, telemetria de endpoint, tráfego de rede, amostras de arquivos, comandos registrados, configurações, sequências de atividade e padrões de uso podem ajudar a reconstruir o que ocorreu. A análise pode comparar horários, encadeamento de ações, escolhas de ferramenta e detalhes de implementação entre incidentes. Semelhanças consistentes podem apoiar a hipótese de continuidade operacional; diferenças podem sugerir mudança de operador, adaptação ou uma relação apenas superficial.

É essencial preservar proveniência e contexto. Um endereço IP pode pertencer a um serviço legítimo compartilhado, ser alugado ou estar comprometido. Um arquivo pode ter sido obtido de terceiros. Um registro pode refletir um intermediário, um proxy ou uma configuração automática. Sem a janela temporal, o fuso horário, a fonte do dado e as condições de coleta, um elemento aparentemente específico pode induzir a uma conclusão errada. A ausência de um indicador também não prova ausência de atividade: a fonte pode não registrar aquele comportamento ou a retenção pode ter expirado.

A seleção de alvos, o momento das ações, o idioma de mensagens, a infraestrutura utilizada e o conhecimento demonstrado sobre o ambiente podem acrescentar contexto. Ainda assim, cada traço admite explicações alternativas. O idioma pode ter sido escolhido deliberadamente; o horário pode refletir a localização de um servidor; o conhecimento pode resultar de acesso anterior ou de informações públicas. Contexto ajuda a priorizar hipóteses, mas não converte automaticamente um indício em prova de identidade.

### Hipóteses concorrentes

Uma análise cuidadosa pergunta não apenas “o que apoia esta hipótese?”, mas também “o que eu esperaria observar se ela fosse falsa?” e “que outra explicação encaixa nos mesmos fatos?”. Hipóteses concorrentes podem incluir atividade de outro ator, uso de ferramenta pública, comprometimento de infraestrutura de terceiros, ação de um operador oportunista ou erro de coleta. A equipe deve procurar evidências que discriminem entre essas possibilidades, não apenas acumular semelhanças convenientes.

## Como a atribuição aparece na defesa

Na resposta a incidentes, a atribuição é um processo contínuo, não uma etapa reservada ao encerramento. No início, a equipe precisa conter risco e restabelecer serviços com evidências incompletas. Ela pode reconhecer uma família de atividade ou uma campanha provável para orientar buscas, enquanto mantém aberta a autoria. Conforme surgem registros, amostras e contexto, as hipóteses são atualizadas.

A equipe defensiva pode começar por estabelecer uma linha do tempo: primeiro sinal, contas envolvidas, sistemas afetados, ações observadas e medidas tomadas. Em seguida, preserva evidências relevantes, documenta métodos de coleta e identifica lacunas, como equipamentos sem telemetria ou períodos sem retenção. A comparação com incidentes anteriores pode revelar relações úteis, mas deve ser feita com os dados originais disponíveis, e não apenas com rótulos de relatórios passados.

## Quando o termo é útil

Atribuição é útil quando a relação entre eventos muda uma decisão. Se uma equipe identifica que atividades distintas provavelmente pertencem à mesma campanha, pode ampliar a investigação para sistemas ou períodos não incluídos no alerta inicial. Se um incidente parece conectado a uma operação persistente, essa avaliação pode justificar coordenação com outras áreas e busca por sinais adicionais. Se a associação não altera a defesa, registrar a incerteza pode ser suficiente, sem gastar recursos tentando obter uma identificação nominal.

## Distinções importantes

Identificar um ativo, uma conta ou um endereço é determinar qual objeto técnico aparece nos dados. Atribuir é interpretar a relação desse objeto com atividade, campanha ou ator. Uma identificação pode ser precisa e a atribuição continuar incerta: conhecer o servidor de origem aparente não determina quem o controlou. Inversamente, uma campanha pode ser reconhecida por padrões observados em vários ambientes mesmo sem a identificação de cada operador.

Classificar uma amostra como pertencente a uma família de software, ou um evento como certo tipo de comportamento, organiza observações. Isso pode contribuir para atribuir, mas não equivale a fazê-lo. Ferramentas circulam entre grupos, são compradas, copiadas ou incorporadas a operações diferentes. A classificação descreve semelhança com uma categoria; a atribuição propõe uma relação de responsabilidade ou continuidade, que precisa de apoio adicional.

Atribuição pergunta quem ou qual campanha está relacionada à atividade. A intenção procura explicar o objetivo, como espionagem, fraude, interrupção ou coleta de acesso. O alvo e o efeito podem sugerir uma finalidade, mas não a estabelecem com certeza. Um incidente pode produzir um efeito não planejado, e um mesmo ator pode realizar operações com objetivos diversos. Convém tratar intenção como inferência própria, com evidências e confiança próprias.

Atribuição operacional é a avaliação usada por uma equipe para orientar investigação e defesa, com qualificadores provisórios e hipóteses concorrentes. A atribuição pública é uma afirmação comunicada fora desse contexto e pode ser interpretada como conclusão institucional. A segunda exige atenção ao que pode ser divulgado, à robustez das fontes e à possibilidade de que a audiência entenda “associado a” como “comprovadamente executado por”. A linguagem precisa reduzir essa ambiguidade.

## Limitações e fontes de erro

Um erro frequente é tratar semelhança de técnica como prova de autoria. Muitas organizações usam utilitários semelhantes; procedimentos se difundem; equipes diferentes podem ter acesso ao mesmo material. Uma coincidência pode ser útil para gerar uma hipótese, mas sua força aumenta apenas quando aparece em combinação com evidências independentes e contextualizadas. Mesmo uma coleção de semelhanças pode refletir uma fonte compartilhada, em vez de um único ator.

## Exemplos hipotéticos

**Exemplo 1 — possível continuidade de campanha.** Uma organização encontra uma sequência de acesso não autorizado em dois ambientes, em semanas diferentes. Há semelhança na ordem de ações e em uma configuração incomum observada em ambos, além de uma relação temporal plausível. A equipe considera provável que os incidentes estejam conectados e amplia a busca por sinais relacionados. Ainda não sabe se o mesmo operador executou ambos, nem quem o empregava. A conclusão defensiva é sobre continuidade provável, não sobre identidade final.

## Implicações para a resposta a incidentes

A resposta deve avançar mesmo quando a autoria continua desconhecida. Contenção, recuperação e avaliação de impacto podem basear-se em evidências de comprometimento e risco diretamente observadas. Esperar uma atribuição definitiva antes de desabilitar uma credencial exposta ou isolar um sistema afetado pode prolongar o dano. Ao mesmo tempo, uma hipótese de ator não deve justificar ações indiscriminadas contra terceiros ou mudanças que não correspondam ao risco confirmado.

Se houver possibilidade de comunicação pública, coordene a revisão com as áreas responsáveis e mantenha a afirmação proporcional ao suporte disponível. Descreva se a ligação é provável, possível ou inconclusiva conforme o padrão de linguagem adotado pela organização. Evite transformar a ausência de uma alternativa conhecida em prova da hipótese preferida. A clareza sobre limites tende a tornar a análise mais útil, não menos.

## Perguntas frequentes

### É possível atribuir um incidente com certeza?

Em geral, identifica um ponto de comunicação observado, sujeito ao contexto e à qualidade do registro. Pode corresponder a uma rede compartilhada, serviço intermediário, equipamento comprometido ou outro recurso cuja relação com o operador seja indireta. É um elemento para investigação, não uma identificação pessoal automática.

Use categorias definidas internamente, acompanhadas de uma justificativa legível. Explique quais evidências sustentam a conclusão, quais alternativas permanecem plausíveis e quais lacunas limitam o juízo. Se a organização emprega escalas formais, esclareça o que cada nível significa; sem isso, números podem sugerir uma precisão que o método não oferece.

Quando o nome acrescenta valor à decisão e a associação tem suporte adequado ao público e ao propósito do documento. Declare que a relação é uma avaliação, indique o escopo e a confiança, e explique limitações relevantes. Se a evidência permite apenas dizer que a atividade é compatível com técnicas conhecidas, não transforme compatibilidade em autoria.

Não. A equipe pode agir sobre comportamento malicioso, exposição e impacto observados sem conhecer o responsável. A atribuição é uma dimensão da análise; a resposta deve acompanhar o risco concreto e não ficar condicionada a uma identificação nominal.

## Relação com o capítulo

Na versão original, o tema se relaciona ao capítulo 7. Neste verbete, a ideia central é manter a atribuição como uma inferência graduada: ela pode conectar observações e orientar a defesa, desde que semelhança técnica, hipótese operacional e afirmação pública permaneçam claramente diferenciadas.
