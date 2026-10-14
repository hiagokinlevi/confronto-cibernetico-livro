# Memória volátil

## Conceito

Memória volátil é a memória de trabalho cujo conteúdo depende da manutenção de energia para permanecer disponível. Em computadores e outros dispositivos, o termo costuma designar a memória RAM, usada pelo sistema operacional e pelos programas para manter instruções, estados e dados em uso. A definição forense é mais ampla que a ideia de “espaço temporário”: uma imagem dessa memória pode conter vestígios relevantes que nunca foram gravados como arquivos, além de partes de dados que também existem em disco.

O adjetivo “volátil” descreve uma propriedade de retenção, não uma garantia de que todo conteúdo desapareça instantaneamente ao desligar. O comportamento concreto depende do equipamento, de sua configuração e do que ocorreu antes e durante a interrupção. Para a investigação, a consequência importante é que reiniciar, desligar ou deixar o dispositivo sem alimentação pode destruir ou alterar evidências que não são recuperáveis a partir do armazenamento persistente.

RAM e memória RAM são sinônimos usuais de memória volátil no vocabulário técnico, embora “memória volátil” possa ser empregado em sentido mais abrangente. Nem todo dado presente em RAM é necessariamente transitório em sua origem: uma senha digitada, um documento aberto ou uma configuração carregada do disco pode existir ali enquanto é utilizado. O que torna o conteúdo especialmente valioso é o seu estado de uso, não a ausência de qualquer cópia em outro lugar.

## O que pode estar presente

Uma captura pode, dependendo do sistema e do momento, revelar processos ativos ou encerrados recentemente, linhas de comando, bibliotecas carregadas, identificadores de usuário, objetos de rede, endereços e estados de conexão, chaves ou material criptográfico em uso, conteúdo de documentos, trechos de conversas e dados de autenticação. Esses são exemplos de categorias possíveis, não uma lista garantida. Uma imagem pode não conter determinada informação, ou conter apenas fragmentos sem contexto bastante para interpretá-la.

A memória não é um registro cronológico completo. Uma captura é, em geral, uma observação de um sistema em funcionamento, não uma gravação de tudo o que aconteceu desde a inicialização. Conteúdos podem ser sobrescritos, liberados, paginados ou transformados. Mesmo que uma cadeia de bytes seja encontrada, isso não prova automaticamente que uma pessoa a visualizou, que um processo a utilizou ou que um evento ocorreu na ordem sugerida por sua posição física.

## Por que importa na forense

Na forense digital, a memória volátil é útil quando a pergunta depende do estado presente ou recente da máquina. Ela pode esclarecer quais processos estavam ativos, se havia uma sessão interativa, que conexões estavam abertas, que arquivos ou dados eram usados por uma aplicação e se material necessário para compreender uma atividade estava disponível apenas durante a execução. Também pode apoiar a identificação de malware residente, ferramentas em execução ou alterações de sistema que não deixaram um arquivo óbvio.

Esse tipo de evidência é relevante em incidentes nos quais o armazenamento persistente não explica sozinho o comportamento observado. Um executável pode ter sido apagado, uma atividade pode ter ocorrido em memória ou a aplicação pode ter mantido dados sensíveis apenas enquanto estava aberta. A memória também pode fornecer contexto para interpretar artefatos persistentes: um nome de processo ou uma conexão observados na captura podem orientar a busca posterior por registros correspondentes.

## Coleta e preservação

A coleta de memória é uma intervenção no sistema vivo. A ferramenta de aquisição, o agente instalado, os comandos executados e a própria atividade de registrar os dados consomem recursos e podem alterar o estado que pretendem observar. Uma captura não é uma janela perfeitamente neutra: processos continuam rodando, temporizadores avançam e estruturas podem mudar durante a aquisição. O método escolhido deve ser adequado ao equipamento, ao sistema e ao objetivo, e seus efeitos previsíveis precisam ser anotados.

A decisão entre coletar memória e desligar o dispositivo exige avaliar risco, urgência e objetivo. Manter a máquina ligada pode preservar conteúdo volátil, mas também permite que uma ameaça continue ativa, que dados sejam modificados ou que um mecanismo de limpeza seja acionado. Desligar pode interromper uma atividade danosa, mas tende a eliminar o acesso direto ao estado corrente da RAM. Não há uma ordem universal: a equipe responsável deve aplicar o plano de resposta, considerar segurança física e operacional e registrar por que tomou a decisão.

Quando houver autorização e condições para adquirir a memória, a equipe deve estabelecer uma sequência clara e reduzir ações não essenciais. Convém registrar horário e fuso adotado, identificação do equipamento, estado visível, usuário ou sessão aparente, conexões relevantes, ferramentas e versões utilizadas, comandos ou ações executados e ocorrências durante a coleta. A documentação permite avaliar como a captura foi produzida e quais mudanças podem ter sido introduzidas pela própria intervenção.

## Análise e correlação

Uma imagem de memória costuma exigir análise especializada. O analista precisa identificar a arquitetura e o sistema operacional, compreender a estrutura da captura e escolher métodos compatíveis com a versão e as condições do equipamento. Um arquivo sem contexto técnico suficiente pode ser difícil de interpretar; informações sobre modelo, sistema, versão, estado de execução e ferramenta de aquisição são parte importante do conjunto probatório.

A análise pode procurar processos, módulos carregados, objetos do sistema, estruturas de rede e cadeias de texto, entre outros vestígios. Cada achado deve ser tratado como uma observação que pede contexto. Um nome encontrado como texto pode pertencer a um documento aberto, a uma região liberada, a uma cache ou a conteúdo sem relação com a hipótese. A atribuição a um processo ou usuário requer evidências estruturais e, sempre que possível, confirmação independente.

Uma linha de comando recuperada, por exemplo, pode indicar contexto de execução, mas não necessariamente o resultado do comando. Uma conexão listada pode ter sido estabelecida ou estar em estado de encerramento, dependendo da estrutura interpretada. O relatório deve explicar o que foi observado, de que fonte veio, qual inferência é razoável e quais alternativas permanecem. Separe fatos diretamente identificados de hipóteses e indique limites que afetem a conclusão.

## Exemplo hipotético

Considere um servidor sob investigação por possível acesso remoto indevido. Antes de reiniciá-lo, a equipe autorizada registra o estado visível e adquire a memória conforme o procedimento aplicável. A análise identifica um processo incomum, uma sessão de usuário e estruturas compatíveis com uma conexão de rede recente. Os logs de autenticação mostram um acesso no intervalo correspondente, e a telemetria de rede registra comunicação com o mesmo destino.

## Distinções importantes

### Memória volátil e armazenamento persistente

RAM é memória de trabalho; SSDs, discos rígidos e outros meios persistentes conservam dados sem depender da alimentação contínua do equipamento. O armazenamento persistente pode manter arquivos, logs e configurações por períodos longos. A memória pode mostrar a forma como dados estavam carregados ou em uso em determinado momento. As fontes se complementam: encontrar um arquivo no disco não demonstra que estava aberto, e não encontrá-lo não exclui que seus dados tenham passado pela RAM.

### RAM e arquivo de paginação

Quando o sistema move páginas de memória para armazenamento, parte do conteúdo pode aparecer em arquivos de paginação ou mecanismos semelhantes. Esses artefatos ficam em suporte persistente, mas guardam dados relacionados à gestão da memória; não são uma captura integral nem necessariamente atual do estado da RAM. Sua presença não permite reconstruir por si só todo o conteúdo que estava em uso, e sua ausência não demonstra que determinada informação nunca esteve na memória.

## Limitações e erros de interpretação

O principal limite é a mutabilidade. Entre o início do incidente, o acionamento da resposta e a captura, o conteúdo pode ter mudado. O próprio processo de aquisição também altera o ambiente. Por isso, a imagem representa um recorte temporal imperfeito, e não necessariamente o estado exato no instante do evento. Quanto maior o intervalo e mais intensa a atividade do sistema, mais cautela é necessária ao relacionar a captura à situação anterior.

A cobertura pode ser parcial. Restrições do sistema, criptografia, áreas inacessíveis, falha da ferramenta ou perda de energia podem impedir a coleta de regiões relevantes. Uma análise que não encontra certo indicador não demonstra que ele nunca existiu. Do mesmo modo, fragmentos recuperados podem não conservar autoria, integridade ou contexto suficientes para uma atribuição segura.

Também é inadequado interpretar a ausência de evidência como evidência de ausência. A RAM é reutilizada, nem toda atividade deixa vestígio recuperável e a captura pode ocorrer tarde demais. Em sentido inverso, a recuperação de um fragmento não prova que ele era funcional ou estava ativo. O grau de confiança precisa refletir a qualidade da aquisição, a especificidade do achado, as alternativas plausíveis e a corroboração disponível.

## Uso na resposta a incidentes

A memória deve entrar no planejamento de resposta antes que a equipe precise decidir sob pressão se mantém o equipamento ativo, o isola ou o desliga. Procedimentos devem definir autoridade para a coleta, papéis, ferramentas aprovadas, destinos de armazenamento, proteção de dados e critérios para priorizar ativos. O objetivo é reduzir decisões improvisadas sem transformar a aquisição em etapa obrigatória em toda ocorrência.

A contenção pode entrar em tensão com a preservação. Isolar a rede pode limitar comunicação externa e, ao mesmo tempo, alterar conexões em andamento. Encerrar uma sessão pode reduzir risco, mas remover contexto útil. Manter energia pode conservar dados e prolongar exposição. A escolha depende da gravidade, do alcance e das obrigações da organização; registre o raciocínio, o horário e as ações para que a análise posterior distinga efeitos do incidente dos efeitos da resposta.

## Perguntas frequentes

### Desligar o computador apaga tudo que havia na RAM?

A interrupção de energia normalmente faz com que o conteúdo volátil deixe de estar disponível como estava durante a execução. A velocidade e a extensão dessa perda dependem de condições técnicas; não se deve contar com a recuperação posterior. A regra prática é tratar o desligamento como uma mudança que pode eliminar evidência e decidir a sequência de preservação com base no risco e no plano de resposta.

### A captura de memória prova que um processo executou uma ação?

Não por si só. Ela pode mostrar estruturas associadas a um processo e dados compatíveis com determinada atividade. Para afirmar que uma ação ocorreu, o analista precisa estabelecer o significado desses vestígios, sua relação temporal e, quando possível, corroborá-los com outras fontes.

### A memória permite saber exatamente quando cada dado foi usado?

Em geral, não. Alguns objetos incluem horários ou relações úteis, mas uma imagem não é um histórico completo e uniforme. O tempo informado por uma estrutura pode ter semântica própria e depender do relógio do sistema. A cronologia deve ser construída pela combinação crítica de fontes, com incertezas explicitadas.

## Relação com o capítulo

Na versão original, o capítulo 8 situa a memória volátil no confronto cibernético. Processos, conexões e dados não persistidos em disco podem depender de um sistema ainda ligado para serem examinados. Coleta e desligamento mudam o estado do sistema; por isso, a ordem deve ser planejada e registrada.
