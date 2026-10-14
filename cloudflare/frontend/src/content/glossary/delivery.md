# Delivery

## Sentido do termo

Delivery, ou entrega, é o envio de um artefato ou estímulo ao alvo em um incidente. O meio pode ser uma mensagem, uma página ou outro conteúdo acessível por um serviço exposto. O conceito descreve uma etapa de contato: algo chega a um usuário, dispositivo, aplicação ou ambiente que se pretende atingir. Ele não afirma, por si só, que o conteúdo foi aberto, interpretado, executado ou capaz de produzir dano.

## A entrega dentro de uma sequência

Uma investigação pode representar o que ocorreu em etapas, por exemplo: preparação de conteúdo, tentativa de entrega, recepção ou disponibilização, interação, execução ou processamento, comunicação com outros sistemas e efeitos. Essa representação é uma ferramenta de raciocínio, não uma lei segundo a qual todo incidente precisa percorrer a mesma ordem. Uma tentativa pode ser bloqueada; um artefato pode chegar e nunca ser aberto; uma interação pode buscar conteúdo adicional; um serviço pode receber uma solicitação sem que um usuário intervenha.

A fronteira entre fases depende do que está sendo medido. Em uma análise de correio eletrônico, pode-se chamar de entrega o depósito da mensagem na caixa postal. Em outra, pode-se reservar “entrega” para a mensagem que atravessou o gateway e ficou disponível ao destinatário. Se o objeto é um endereço, a página pode ter sido publicada e acessível antes de qualquer visita. Nesse caso, a publicação é disponibilidade do recurso; o acesso observado pelo navegador é um evento posterior. A equipe deve declarar essa convenção, em vez de supor que todos os sistemas usam a mesma definição.

O alvo também pode variar. Uma mensagem pode ser endereçada a uma pessoa, mas o sistema de correio é o primeiro componente a recebê-la. Um site pode ser acessado por um equipamento compartilhado, embora o objetivo aparente fosse um indivíduo. Um serviço exposto pode receber uma solicitação diretamente. Assim, distinguir destinatário pretendido, componente que recebeu o estímulo e ativo afetado evita atribuir a mesma identidade a todos os papéis.

## Canais e formas observáveis

Há diferença entre transportar um objeto e transportar uma referência a ele. Uma mensagem pode conter o arquivo; pode conter um endereço que leva a conteúdo remoto; ou pode incluir texto que solicita uma ação sem transferir outro objeto identificável. Em cada caso, a equipe pode observar coisas diferentes: os metadados e o conteúdo da mensagem, a resolução de um nome, uma conexão ao endereço remoto, uma resposta HTTP, o arquivo recuperado, ou apenas uma solicitação bloqueada. A palavra “entrega” não determina qual desses sinais precisa existir.

## Como reconhecer na investigação

Reconhecer uma possível entrega requer reconstruir o evento com evidências de mais de uma camada, . Em vez de perguntar apenas “o arquivo chegou?”, formule perguntas delimitadas: que objeto ou estímulo foi observado? Qual sistema o recebeu ou disponibilizou? Em que horário e fuso? Para qual conta, endereço, dispositivo ou serviço? O registro mostra tentativa, aceitação, entrega à caixa postal, visita, download ou bloqueio? Qual identificador permite relacionar os eventos sem confundir pessoas ou recursos?

### Evidência não é o mesmo que interpretação

Uma trilha de auditoria que indica a entrega de uma mensagem sustenta a afirmação de que a plataforma a colocou em determinado destino segundo sua própria semântica. Não sustenta automaticamente que o destinatário leu a mensagem. Um evento de clique sustenta que houve uma requisição atribuída a certo contexto técnico, conforme os dados disponíveis; talvez não identifique com certeza a pessoa que a realizou. A identificação do remetente também pode apontar para uma conta ou infraestrutura usada, sem provar quem controlava essas entidades no momento.

Uma boa anotação separa observação, inferência e desconhecido. “A mensagem foi registrada na caixa postal às 10h” é uma observação se a fonte comprova esse estado. “O usuário recebeu o estímulo” pode ser uma síntese aceitável, mas deve esclarecer que recebimento significa disponibilidade técnica e não leitura. “O usuário executou o anexo” exigiria evidência distinta. Essa disciplina de linguagem reduz conclusões precipitadas e ajuda a equipe seguinte a saber quais hipóteses ainda precisam ser avaliadas.

## Entrega não comprova execução nem impacto

A nota prática central é simples: uma entrega observada não comprova execução; os eventos seguintes precisam ser acompanhados para medir impacto. “Chegou” não quer dizer “foi aberto”; “foi aberto” não quer dizer “um conteúdo ativo foi processado”; “foi processado” não quer dizer “houve acesso não autorizado”; e um alerta de bloqueio pode indicar que a tentativa foi contida antes de produzir efeitos. Cada afirmação exige evidência compatível com o evento que descreve.

O mesmo cuidado vale para efeitos intermediários. Uma visita a uma página pode ter sido feita por um verificador automático de links. Uma resposta de servidor pode conter apenas conteúdo inofensivo. Uma solicitação pode ter sido recusada. Um arquivo pode ter sido colocado em quarentena antes de ser disponibilizado. Em sentido inverso, não observar uma abertura na telemetria não prova que ninguém interagiu: o dispositivo pode não reportar, a atividade pode ocorrer fora da visibilidade da ferramenta ou os dados podem ter sido perdidos.

Para avaliar impacto, investigue a sequência com fontes apropriadas: eventos de autenticação, processos e arquivos no endpoint, atividade de navegador, alterações de configuração, conexões de rede e ações em serviços corporativos. A seleção depende da hipótese e do ambiente; não existe um único indicador universal. Correlacione os sinais pelo período, ativo, conta e identificadores disponíveis. Mantenha separadas a confirmação de entrega, a confirmação de interação, a confirmação de execução ou processamento e a comprovação de impacto. Uma conclusão pode permanecer inconclusiva, e isso é preferível a preencher lacunas com suposições.

## Uso em defesa e resposta a incidentes

Na triagem, registre canal, horário, destinatário e conteúdo observado. Confirme o evento e verifique se outras pessoas receberam conteúdo relacionado. Busque ocorrências por assunto, domínio, endereço ou identificador, lembrando que um indicador pode corresponder a tráfego legítimo. Correspondência técnica sugere relação, mas não prova que os eventos pertençam ao mesmo incidente.

Se houver risco plausível, medidas proporcionais podem incluir remover ou colocar em quarentena mensagens, bloquear temporariamente um recurso, restringir uma conta, isolar um dispositivo ou ampliar a coleta. A escolha deve considerar evidências e efeitos operacionais: um bloqueio pode interromper atividade legítima, a remoção pode eliminar contexto útil, e o isolamento pode afetar serviços. Coordene ações com os responsáveis pelo sistema e registre horário, escopo e justificativa. Medidas de contenção não substituem a investigação do que já ocorreu.

A equipe deve acompanhar a passagem entre etapas. Se a mensagem foi entregue, procure interação; se houve acesso a um link, determine se houve redirecionamento ou recuperação de conteúdo; se um arquivo foi obtido, verifique se foi aberto ou processado; se houve execução, avalie comportamento posterior e impacto. Essas relações não precisam ser lineares e podem existir eventos simultâneos ou paralelos. Um quadro temporal com os fatos confirmados e as hipóteses associadas ajuda a orientar consultas sem apresentar inferências como certeza.

## Distinções com termos próximos

“Envio” normalmente enfatiza a ação de transmitir. “Entrega” enfatiza que o objeto ou estímulo foi encaminhado ou ficou disponível no contexto de destino. Na prática, produtos e equipes podem usar os dois termos diferentemente, portanto a documentação deve definir estados concretos. Uma tentativa de envio rejeitada não deve ser relatada como entrega consumada sem explicar a convenção usada.

“Interação” é um evento posterior ou associado, como clicar, responder, navegar ou encaminhar. “Execução” descreve processamento de código ou comando em um ambiente; “exploração” refere-se ao uso de uma condição vulnerável para obter um resultado não autorizado. Nenhum desses termos é sinônimo de entrega. Um evento pode levar ao outro, mas a transição precisa ser demonstrada. “Impacto” diz respeito às consequências para dados, sistemas, operações ou pessoas e exige avaliação própria.

## Exemplos hipotéticos

**Exemplo hipotético: mensagem filtrada.** Uma pessoa relata um e-mail suspeito. O gateway registra a mensagem e informa que ela foi colocada em quarentena. A conclusão sustentada é que houve tentativa e processamento pelo controle; se a política define entrega como chegada à caixa postal, não há evidência de entrega ao destinatário. A equipe confirma que não houve cópia em caixa postal e mantém a distinção entre tentativa e disponibilização. O relato do usuário continua útil como sinal de triagem, mas não muda a semântica do evento técnico.

**Exemplo hipotético: link em mensagem.** Uma mensagem chega à caixa postal com um endereço externo. Minutos depois, o proxy registra acesso ao domínio. A sequência é compatível com interação, mas pode refletir um verificador automático. A equipe compara agente, horário, origem e telemetria do navegador, e procura sinais adicionais antes de afirmar que a pessoa abriu a página. Mesmo que a visita humana seja confirmada, isso ainda não demonstra que houve download, execução ou comprometimento.

## Limitações e erros de interpretação

A primeira limitação é semântica: a palavra pode se referir à tentativa, ao transporte, à aceitação por um sistema ou à disponibilidade para o destinatário. Sem contexto, leitores podem imaginar estados diferentes. Defina a convenção em relatórios, consultas e métricas. Se houver mais de uma etapa, nomeie cada uma em separado.

A segunda é observacional: controles raramente enxergam o caminho inteiro. Um sensor pode ver um endereço, outro um objeto, e um terceiro a ação do endpoint; os relógios ou identificadores talvez não permitam correlação perfeita. Evite transformar uma lacuna de telemetria em afirmação categórica. Declare o escopo da busca, o período coberto e as fontes consultadas quando esses limites forem importantes para a conclusão.

## Perguntas frequentes

### Um e-mail na caixa postal foi necessariamente lido?

Não. O registro de disponibilidade na caixa postal comprova um estado da plataforma, não a atenção do destinatário. Eventos de leitura podem ter semânticas próprias e também não garantem que o conteúdo tenha sido compreendido ou que um link tenha sido acionado.

### Uma visita a um endereço prova que houve interação humana?

Não necessariamente. Ferramentas de segurança, serviços de pré-visualização e automações podem requisitar endereços. Atribua a visita a uma pessoa apenas quando houver evidência que sustente essa atribuição; caso contrário, descreva a requisição observada e trate a origem humana como hipótese.

### Quando faz sentido dizer que houve entrega?

Quando a equipe especifica o estado que está afirmando e há evidência compatível com ele: aceitação por um gateway, depósito em caixa postal, disponibilização em um serviço ou outro evento definido. Se o registro mostra apenas uma tentativa, use “tentativa de entrega” ou formulação equivalente.

### A entrega é uma fase obrigatória de todo incidente?

Não. É uma lente útil para organizar certos percursos, mas incidentes também podem surgir de acesso indevido, falha de configuração, abuso de credenciais ou erro operacional. Mesmo quando há entrega, as fases podem se sobrepor ou não ser observáveis. A taxonomia deve esclarecer o caso, sem forçá-lo a uma sequência artificial.

### O que fazer quando não há registro de entrega?

Verifique se a fonte estava ativa, cobria aquele canal e preservou o período relevante. Consulte registros complementares e procure eventos correlatos. Se os dados continuarem insuficientes, registre que a entrega não foi confirmada, em vez de concluir que não ocorreu. A resposta pode continuar proporcional ao risco enquanto a incerteza é reduzida.

## Relação com o capítulo

No capítulo 1 da versão original do manuscrito, o termo pode ser lido como uma peça de vocabulário para descrever o percurso de um estímulo até o alvo. Seu valor está em distinguir esse contato de interação, execução e impacto, dando à investigação uma linguagem precisa para dizer o que ocorreu e o que ainda precisa ser verificado.
