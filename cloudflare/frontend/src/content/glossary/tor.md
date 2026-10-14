# Tor

## Definição e propósito

Tor, também chamado de rede Tor, é uma rede de roteamento projetada para reduzir a exposição da origem de uma conexão. Em vez de transportar o tráfego por um único caminho direto entre o dispositivo de origem e o serviço acessado, o sistema encaminha fluxos por uma sequência de relés operados por participantes distintos. Cada etapa conhece informações limitadas sobre o trajeto: em condições normais, um relé intermediário não recebe o caminho completo, e o destino final não vê diretamente o endereço de rede original do cliente.

A proteção pretendida é uma forma de privacidade de rede, não uma garantia de anonimato absoluto. Tor procura dificultar que um observador isolado associe uma pessoa ou dispositivo a um destino específico. O resultado depende do modelo de ameaça, da configuração do cliente, do comportamento do usuário, do serviço acessado e do que um adversário consegue observar. A rede não apaga os registros existentes em dispositivos, contas, servidores ou provedores, nem transforma automaticamente em sigilosa toda atividade realizada por meio dela.

Na prática, profissionais de segurança encontram Tor em situações diferentes: usuários podem adotá-lo para privacidade, pesquisa ou acesso a serviços, enquanto agentes maliciosos podem usá-lo para reduzir a atribuição de origem de uma infraestrutura ou de uma conexão. O nome da tecnologia, por si só, não explica a intenção. Essa distinção é central para análise de alertas e resposta a incidentes.

## Como o roteamento funciona

Um cliente Tor estabelece um circuito através de relés. De maneira simplificada, o circuito costuma envolver uma entrada, uma ou mais etapas intermediárias e uma saída para a internet pública. A seleção de relés e o estabelecimento do caminho são feitos pelo cliente conforme as regras do protocolo; a comunicação é encapsulada em camadas de criptografia associadas às etapas do circuito. Cada relé remove ou processa a camada que lhe cabe e encaminha o tráfego para a próxima etapa.

O relé de entrada, também chamado de guarda, recebe a conexão diretamente do cliente e, portanto, pode observar o endereço de origem da conexão que chega até ele. Ele não recebe, apenas por esse papel, uma lista completa dos destinos visitados pelo circuito. O relé de saída conecta-se ao serviço de destino e vê o endereço desse serviço, além do tráfego que não esteja protegido por criptografia de ponta a ponta. Em condições usuais, a saída não recebe o endereço de rede original do cliente: sua conexão aparenta vir do próprio relé de saída.

Essa separação não significa que cada trecho seja invisível. Um observador posicionado em pontos diferentes pode ver partes diferentes da comunicação. Um provedor local pode identificar uma conexão do dispositivo a um relé conhecido, mas em geral não vê, por isso apenas, qual site está sendo acessado. O serviço de destino pode registrar o endereço de saída e os dados da sessão que recebe, mas não necessariamente a origem real do cliente. Um observador capaz de monitorar os dois extremos pode tentar relacionar padrões de tráfego e horários. O grau de dificuldade dessa correlação depende das capacidades e da visibilidade do observador.

## O que a rede protege — e o que não protege

A rede não elimina identificação por conta. Se alguém se autentica em um serviço com uma identidade conhecida, o serviço pode relacionar a sessão à conta, mesmo que veja como origem um relé de saída. Padrões de uso, horários, idioma, dados fornecidos e identificadores persistentes também podem revelar relações. O anonimato de rede e a confidencialidade do conteúdo são propriedades distintas: uma conexão pode ocultar melhor a origem e ainda assim revelar conteúdo ao destino, ou proteger o conteúdo por criptografia de aplicação enquanto expõe a origem por uma conexão direta.

## Relevância para defesa e investigação

Em uma investigação, Tor pode aparecer como contexto de rede, como componente instalado ou executado em um endpoint, como origem aparente de uma sessão recebida por um serviço ou como meio de acesso a um serviço da própria rede. Cada ocorrência responde a perguntas distintas. Uma conexão de saída de um host para um relé conhecido pode refletir navegação legítima, pesquisa, teste autorizado, software embarcado ou uso indevido. Uma conexão recebida por um serviço a partir de um endereço associado a uma saída Tor diz respeito à origem aparente daquela sessão, mas não identifica automaticamente a pessoa ou o equipamento que iniciou a conexão.

O valor analítico aumenta quando a observação é relacionada a um objetivo concreto. Em vez de classificar o evento simplesmente como “uso de Tor”, procure responder: qual processo iniciou a conexão? Que usuário estava ativo? O horário coincide com outra atividade relevante? O destino ou recurso acessado está relacionado ao incidente? Houve transferência, autenticação, alteração de arquivos ou execução de comandos no mesmo período? Há tráfego paralelo por caminhos diretos? A combinação dessas evidências ajuda a diferenciar uma ferramenta legítima de um comportamento associado à intrusão.

Tor também pode afetar mecanismos defensivos dependentes de reputação de IP. Um serviço pode receber tráfego de um endereço de saída compartilhado por muitos usuários não relacionados. Bloquear esse endereço pode reduzir uma atividade abusiva observada, mas também atingir usuários legítimos e não impedir que a origem altere o caminho. A decisão deve considerar o impacto sobre o serviço, a evidência de abuso, alternativas de controle e a duração apropriada da medida.

## Evidências que ajudam a reconhecer o uso

Nenhum indício isolado é conclusivo. A identificação mais confiável combina dados de rede, telemetria de endpoint, configuração e contexto temporal. Entre os sinais que podem ser úteis estão:

- conexões de saída para endereços e portas associados a relés, pontes ou serviços Tor conhecidos, conforme fontes e listas mantidas pela organização;
- presença de um cliente, biblioteca ou componente relacionado a Tor no inventário de software, nos processos ativos ou em artefatos de execução;
- padrões de conexão recorrentes, como sessões persistentes com um pequeno conjunto de destinos e mudanças de circuito ao longo do tempo;
- registros do proxy, firewall, DNS, EDR ou captura de tráfego que indiquem qual processo e qual dispositivo iniciaram a comunicação;
- alertas em serviços de destino que registrem endereço de saída Tor como origem aparente, acompanhados de dados da sessão e ações executadas;
- arquivos de configuração, registros locais ou evidências de inicialização que ajudem a estabelecer quando e por quem o cliente foi usado.

A interpretação desses sinais tem limites. Listas de relés podem ficar desatualizadas; endereços podem ser compartilhados ou mudar de função; uma conexão a um endereço de nuvem, VPN ou proxy não prova uso de Tor. Pontes e mecanismos para contornar bloqueios podem tornar a identificação por listas públicas menos direta. Do outro lado, um endereço de saída registrado por um serviço informa apenas o ponto de saída observado pelo serviço, não a identidade civil do usuário ou o endereço original do dispositivo.

## Exemplo hipotético de triagem

Imagine que um servidor web registre tentativas de autenticação vindas de um endereço de saída associado à rede Tor. Esse registro torna plausível que o solicitante tenha usado Tor para chegar ao serviço; ele não mostra o endereço original do solicitante. A equipe verifica a conta alvo, os horários, o volume e os resultados das tentativas, correlaciona-os com alertas de autenticação e procura sessões posteriores bem-sucedidas. Caso haja comprometimento, preserva os registros do serviço e aplica controles à conta e ao endpoint afetados. O endereço de saída pode ser incluído na análise, mas a equipe não atribui a atividade a um indivíduo apenas com base nele.

Em outro cenário hipotético, uma estação de trabalho de um laboratório inicia conexões a relés Tor durante uma atividade de pesquisa aprovada. O processo é conhecido, o usuário está autorizado e o horário coincide com a tarefa registrada. O evento continua sendo uma conexão relevante para inventário e política, mas o contexto reduz a hipótese de que seja parte de uma intrusão. Se, em vez disso, o processo for desconhecido e surgir junto a execução suspeita, persistência ou comunicação com infraestrutura não aprovada, o uso da rede passa a compor uma hipótese de investigação mais ampla. O elemento decisivo é a correlação, não o rótulo Tor.

## Distinções importantes

### Tor, VPN e proxy

### Criptografia e anonimato

Criptografia protege conteúdo contra leitura por observadores que não possuem as chaves apropriadas. Anonimato de rede busca reduzir a associação entre origem e destino. Uma não garante a outra. Um fluxo criptografado pode revelar metadados e endereço de origem; um fluxo encaminhado por Tor pode chegar a um serviço que recebe dados de aplicação identificáveis. Em relatórios, descreva separadamente o que foi observado sobre o caminho, o conteúdo e a identidade.

### Endereço de saída e origem real

O endereço que aparece no servidor é a origem de rede da conexão que alcançou o servidor. Se o tráfego passou por uma saída Tor, esse endereço pertence ao relé, não é o endereço original do cliente. Ele pode ajudar a agrupar eventos ou aplicar controles no serviço, mas não sustenta, sozinho, atribuição do usuário. A origem real exige evidências adicionais obtidas de fontes legítimas e compatíveis com a autoridade e o escopo da investigação.

## Limitações e erros de interpretação

## Resposta a incidentes

Quando o uso surge em um alerta, a primeira etapa é preservar os dados que podem desaparecer: logs de firewall, proxy, DNS, EDR, autenticação e aplicação, além dos registros locais pertinentes. Documente horário e fuso, host, usuário, processo, destino observado, duração e política aplicável. Se a atividade ainda estiver em curso e houver risco, medidas de contenção devem considerar o impacto no serviço e no usuário; interromper conectividade indiscriminadamente pode destruir evidência ou afetar operações legítimas.

## Perguntas frequentes

### O uso de Tor prova que houve ataque?

Não. O uso de Tor, por si só, não prova ataque. Correlacione horário, processo e objetivo da comunicação com a política local, o usuário, o destino, os resultados e possíveis efeitos no sistema.

### Um endereço de saída identifica a pessoa que acessou um serviço?

Não. Ele identifica o ponto de rede que se conectou ao serviço. Como vários usuários podem compartilhar uma saída, o endereço sozinho não identifica o cliente nem sua localização.

Não necessariamente. O site pode associar a sessão a uma conta autenticada, aos dados fornecidos, a identificadores de aplicação ou a padrões de comportamento. Tor reduz a exposição da origem da conexão, mas não apaga os demais sinais.

Às vezes, com registros de conexões, inventário de processos e fontes atualizadas de endereços conhecidos. A detecção pode ser incompleta, especialmente quando há pontes, cobertura limitada ou ausência de telemetria de processo. Toda classificação precisa indicar sua fonte e confiança.

Depende do propósito do ambiente e dos riscos operacionais. Uma restrição pode ser coerente com a política de uma rede, mas requer avaliar usuários legítimos, exceções autorizadas e impactos sobre serviços. O bloqueio deve ser acompanhado de monitoramento e não substitui a investigação de comportamento suspeito.

## Relação com o capítulo

Na versão original do manuscrito, o capítulo 1 oferece o contexto relacionado a este verbete. Tor deve ser entendido ali como infraestrutura que altera a visibilidade da origem de uma conexão, e não como evidência automática de intenção. Essa distinção ajuda o leitor a interpretar observações de rede com precisão e a formular perguntas defensivas proporcionais.
