# DNS

## O que é

DNS, sigla de Domain Name System, é o sistema que relaciona nomes de domínio a informações usadas para localizar serviços na rede. Ele permite que aplicações trabalhem com nomes compreensíveis, como `portal.exemplo`, enquanto obtêm dados necessários para encontrar um destino ou aplicar outras decisões de serviço. Seu papel não se resume a converter um nome em um endereço IP: a resposta pode conter diferentes tipos de informação, e a consulta pode percorrer componentes distribuídos antes de chegar ao cliente.

## Como funciona uma consulta

Um programa solicita a resolução de um nome por meio do mecanismo disponível no sistema operacional ou em uma biblioteca própria. A solicitação costuma chegar a um resolvedor recursivo configurado para o dispositivo ou para a rede. Esse resolvedor pode responder a partir de seu cache ou buscar a informação em outros servidores, seguindo as delegações do espaço de nomes até obter uma resposta ou uma indicação de que ela não está disponível. O caminho exato depende da configuração, do tipo de consulta e de dados já armazenados.

Os registros publicados têm tipos distintos. Um registro A associa um nome a um endereço IPv4, e um AAAA a um endereço IPv6. CNAME indica um nome alternativo cujo destino deve ser acompanhado na resolução. MX identifica servidores associados ao recebimento de correio para um domínio. NS indica servidores de nomes de uma zona; SOA contém informações administrativas da zona; TXT transporta texto que aplicações podem interpretar para finalidades diversas. Esses exemplos ajudam a entender por que “DNS converte nomes em IP” é uma simplificação incompleta: há registros que não representam endereços e respostas podem encadear mais de um nome ou tipo de dado.

## O que o DNS revela na investigação

DNS pode fornecer contexto para reconstruir a atividade de um dispositivo. Registros de consultas e respostas podem indicar quais nomes foram solicitados, em que momento, por qual cliente ou endereço de origem, que tipo de dado foi pedido, qual resposta retornou e qual resolvedor a observou. Dependendo da plataforma, também podem existir código de resposta, duração, tamanho, indicador de cache, identidade do processo ou metadados de transporte. Nenhum conjunto é garantido: cada produto registra campos diferentes e pode omitir consultas atendidas localmente.

Em uma análise de incidente, DNS pode ajudar a delimitar escopo. A equipe pode buscar outros dispositivos que consultaram o mesmo domínio, identificar quais redes compartilham o resolvedor, verificar se houve resposta e cruzar a consulta com conexões, alertas de endpoint, autenticação e registros de proxy. Uma consulta isolada raramente permite afirmar que o conteúdo foi baixado, que credenciais foram enviadas ou que um processo específico iniciou a comunicação. O cruzamento reduz ambiguidades e pode revelar que um evento atribuído a um usuário veio de um serviço automático compartilhado.

## Evidências e preservação

As evidências podem vir de resolvedores corporativos, sensores de rede, sistemas de prevenção, agentes de endpoint, logs de aplicações, plataformas de filtragem e fontes de inteligência. Cada fonte responde a uma pergunta diferente. Um log do resolvedor mostra o que chegou àquele serviço; uma captura de rede mostra o tráfego visível naquele segmento; um registro do endpoint pode associar uma solicitação a um processo. A ausência de um evento em uma fonte não prova que ele não aconteceu: a consulta pode ter usado cache local, outro resolvedor, um canal criptografado ou um caminho fora do sensor.

Ao preservar dados, registre a zona de tempo, a origem do relógio, o intervalo de retenção, os filtros aplicados e os critérios de busca. Relógios desalinhados podem inverter a ordem aparente entre consulta e conexão. Campos como endereço de origem podem refletir um roteador, NAT, proxy ou resolvedor intermediário, e não diretamente o dispositivo original. Convém conservar os registros brutos disponíveis além de relatórios agregados, pois normalizações podem remover detalhes úteis, como tipo de resposta, cadeia de CNAME ou código de erro.

## Cache, resolvedores e pontos cegos

Resolvedores diferentes podem aplicar filtragem, registro, encaminhamento e validação distintos. Uma rede corporativa pode direcionar consultas internas a um servidor e consultas externas a outro. Um dispositivo pode ainda usar um resolvedor configurado pela aplicação ou por uma rede virtual privada. Quando o tráfego é criptografado até um serviço externo, o sensor intermediário talvez veja uma conexão, mas não o nome consultado nem a resposta. O endpoint ou o resolvedor final pode ser a única fonte capaz de associar a solicitação ao domínio.

A análise deve considerar também respostas que não são endereços, consultas repetidas, tentativas malformadas e códigos de erro. Uma consulta sem resposta pode significar falha de rede, política de bloqueio, nome inexistente, timeout ou problema no próprio serviço observado. Um código de resposta de sucesso não demonstra que a aplicação conseguiu usar o serviço. Da mesma forma, a inexistência de consulta visível pode ser compatível com cache, resolução por outro canal ou ausência de telemetria. É preferível registrar qual hipótese os dados sustentam e quais não conseguem distinguir.

## Relação com segurança defensiva

DNS é relevante para controles de segurança porque está presente em muitos fluxos de rede e pode ser observado antes ou durante a conexão a um serviço. Organizações podem aplicar políticas de resolução, bloquear nomes conhecidos como indesejados, detectar padrões atípicos ou alertar sobre mudanças em domínios importantes. A efetividade depende de cobertura, qualidade das listas e contexto. Um bloqueio pode interromper uma atividade, mas também causar indisponibilidade se uma regra atingir um nome legítimo ou um serviço compartilhado.

Em resposta a incidentes, uma consulta suspeita pode orientar contenção e busca de escopo. A equipe pode verificar se o nome foi resolvido, se algum endereço retornado foi contatado e se outros dispositivos repetiram a sequência. Quando há risco ativo, medidas possíveis incluem aplicar uma política no resolvedor, restringir tráfego para destinos confirmados, preservar telemetria e avaliar a configuração da zona. A decisão deve considerar impacto operacional, dependências e reversibilidade. Um domínio pode hospedar serviços legítimos além de um recurso suspeito, e um endereço pode servir a muitos nomes; bloquear sem contexto pode afetar terceiros ou usuários internos.

A investigação de alterações em DNS requer diferenciar dados publicados de dados recebidos. Se existe suspeita de modificação não autorizada, examine registros de administração do provedor, contas e permissões, trilhas de auditoria e dados consultados por fontes independentes. Uma resposta inesperada pode resultar de cache desatualizado, delegação alterada, configuração errada ou política de filtragem, além de uma intervenção maliciosa. O objetivo é identificar em que camada a divergência surgiu e quando ocorreu, sem presumir causa a partir de um único valor observado.

## Distinções importantes

DNS não é um diretório de usuários, embora nomes de domínio possam conter rótulos escolhidos por pessoas. Também não é um serviço de registro de domínios: registrar um nome e publicar seus dados são atividades relacionadas, mas diferentes. O registrador administra a relação de registro; os servidores autoritativos publicam informações de zona; o resolvedor recursivo procura respostas para clientes. Uma organização pode contratar esses serviços de fornecedores distintos.

Uma consulta é uma solicitação; uma resposta é o resultado observado por algum componente. Ambas diferem de uma conexão. O navegador pode consultar um nome e não abrir conexão alguma, ou conectar usando informação já armazenada sem emitir uma consulta naquele instante. Uma conexão pode ainda ser tentada e falhar depois da resolução. Em relatórios, use verbos precisos: “consultou”, “recebeu resposta”, “tentou conectar” e “estabeleceu conexão” descrevem evidências diferentes.

## Erros comuns de interpretação

Um erro frequente é tratar todo domínio consultado como destino visitado pelo usuário. Aplicações fazem consultas em segundo plano, e navegadores podem antecipar resolução. A consulta pode decorrer de atualização, sincronização, publicidade, telemetria ou checagem de segurança. Sem evidência complementar, não atribua intenção humana nem ação de navegação. A formulação correta pode ser “o dispositivo consultou o nome”, acompanhada da fonte e do horário.

Por fim, falha de consulta não é sinônimo de bloqueio deliberado, e ausência de log não é prova de ausência de atividade. Falhas podem decorrer de configuração, conectividade ou indisponibilidade. Uma política pode atuar em outro ponto ou registrar apenas parte dos eventos. Em documentação técnica, separe observação, interpretação e hipótese: essa disciplina facilita revisão por outros analistas e evita que uma conclusão provisória se transforme em fato no registro do incidente.

## Exemplo hipotético de análise

Considere um notebook que, às 10h15, aparece em um log de resolvedor solicitando um registro A para `login.conta-exemplo.test`. O resolvedor registra resposta com um endereço e, dois segundos depois, um sensor de rede vê uma conexão do mesmo segmento para esse endereço. A sequência justifica investigação, mas ainda não identifica o processo solicitante nem confirma que a conexão veio daquele notebook se há NAT e vários dispositivos compartilham o endereço de origem. O domínio com sufixo `.test` é fictício e serve apenas para ilustrar a análise.

A equipe então consulta a telemetria do endpoint, que associa uma requisição ao processo de um navegador, e compara o horário com o histórico de navegação preservado. Verifica ainda se o nome fazia parte de um fluxo de autenticação aprovado, se o endereço estava dentro da faixa esperada e se outros dispositivos tiveram a mesma sequência. Se houver divergência, os analistas podem investigar redirecionamentos, configuração do resolvedor e alterações na zona. Cada elemento aumenta ou reduz confiança em hipóteses, mas a conclusão depende da integridade e cobertura das fontes.

## Perguntas frequentes

### Uma consulta DNS prova que alguém acessou um site?

Não. Ela prova, no máximo, que uma fonte observou uma solicitação de resolução, dentro do escopo e da confiabilidade dessa fonte. O acesso precisa ser demonstrado por registros de conexão ou aplicação; a identidade de quem iniciou a ação exige evidência adicional.

### Por que dois computadores recebem respostas diferentes?

Podem usar resolvedores diferentes, consultar em instantes distintos, ter caches com estados diversos ou estar sujeitos a políticas e configurações diferentes. Serviços distribuídos também podem variar a resposta conforme a localização ou o estado do serviço. A diferença, isoladamente, não prova adulteração.

### O que um TTL permite concluir?

Ele informa por quanto tempo um dado pode ser mantido em cache conforme a resposta e o comportamento dos componentes. Ajuda a explicar por que alterações não aparecem ao mesmo tempo para todos. Não informa quando cada cliente consultou, se a aplicação usou aquela resposta nem quanto durou uma conexão.

### Se uma ferramenta não mostra DNS, o dispositivo não resolveu nomes?

Não necessariamente. A consulta pode ter sido respondida no cache, enviada a outro resolvedor, feita por um canal criptografado ou omitida pela coleta. Primeiro determine quais fontes, redes, protocolos e períodos a ferramenta cobre.

### DNS sobre HTTPS impede uma investigação?

Não por completo, mas muda o ponto de observação. Um sensor no caminho pode não ler o conteúdo da consulta. Registros do endpoint, do serviço resolvedor ou de controles de rede ainda podem oferecer contexto, conforme a configuração e a política. A equipe deve registrar a limitação e buscar fontes que observem o fluxo no ponto adequado.

## Relação com o capítulo

No capítulo 1 da versão original do manuscrito, DNS se relaciona à infraestrutura que permite localizar serviços e interpretar comunicações de rede. Para o profissional, a ideia central é observar a resolução como uma etapa do fluxo, com evidências próprias e limites próprios. A consulta ajuda a formular perguntas investigativas; o contexto de cache, resolvedores e conexão determina o que se pode afirmar com segurança.
