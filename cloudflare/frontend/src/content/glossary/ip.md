# IP

## Conceito e alcance

IP é a sigla de Internet Protocol, ou Protocolo de Internet. Trata-se do conjunto de regras que permite endereçar e encaminhar unidades de dados entre pontos de comunicação em redes que usam esse protocolo. Um dispositivo ou serviço que participa de uma comunicação IP utiliza endereços para que os dados possam ser associados a uma origem e a um destino no contexto da rede. O endereço orienta a entrega, mas não é nome civil, identificador permanente de equipamento ou declaração de quem usava a conexão.

A definição reúne duas funções relacionadas, mas diferentes. O endereçamento representa pontos de comunicação por valores que podem ser examinados pelos sistemas de rede. O roteamento é o processo pelo qual os equipamentos encaminham o tráfego em direção ao destino indicado, com base nas informações disponíveis em cada trecho. O roteador encaminha conforme sua configuração e as rotas que conhece, sem precisar conhecer a pessoa ou o caminho completo.

Na prática, a expressão “IP” pode designar o protocolo, como em “tráfego IP”, ou, informalmente, um endereço IP, como em “o IP observado no registro”. São usos relacionados, mas não equivalentes. O protocolo descreve como representar e transportar pacotes entre redes; o endereço é um dos campos usados para indicar pontos de origem e destino. Ao ler um relatório, é importante identificar qual sentido está em jogo.

## Endereços e formas de utilização

Os endereços IPv4 e IPv6 são as versões mais conhecidas do protocolo em uso. Um endereço IPv4 costuma ser apresentado como quatro números separados por pontos; um endereço IPv6, como grupos de valores hexadecimais separados por dois-pontos, com abreviações permitidas em certas posições. A aparência ajuda a reconhecer a família, mas não revela sozinha a função do endereço, o usuário, a organização responsável ou o contexto em que apareceu.

Em redes internas, equipamentos podem receber endereços privados que não são encaminhados diretamente pela Internet pública. Para permitir que vários dispositivos compartilhem conectividade externa, um roteador ou gateway pode traduzir endereços e, em muitos casos, portas de comunicação. Essa tradução, frequentemente chamada NAT, altera a forma como os pontos são representados entre lados distintos da rede. Um serviço externo pode registrar o endereço público do gateway, embora diversos dispositivos internos tenham iniciado conexões por ele.

O endereço observado também pode ser compartilhado por clientes de um provedor, por uma rede corporativa, por uma rede de hospedagem ou por usuários de uma rede sem fio. Em cenários de tradução em larga escala, vários assinantes podem sair para a Internet por um conjunto compartilhado de endereços. Assim, “o endereço de origem no registro” normalmente identifica o ponto que a rede remota viu, não necessariamente o equipamento final que produziu o tráfego.

Endereços podem ser estáticos por configuração ou alocados de modo dinâmico. Um endereço dinâmico pode ser concedido por um intervalo de tempo e mudar quando a concessão termina, quando o equipamento se reconecta ou quando a rede reorganiza sua alocação. IPv6 também pode aparecer em configurações e políticas de atribuição variadas. Por isso, encontrar o mesmo endereço em duas datas não basta para concluir que se trata da mesma pessoa ou dispositivo; encontrar endereços diferentes tampouco prova que os usuários são diferentes.

## Como o encaminhamento se relaciona com a investigação

Essa lógica tem valor defensivo porque endereços aparecem em diferentes fontes de telemetria. Um firewall pode registrar conexões permitidas ou bloqueadas; um servidor pode guardar o endereço que recebeu como origem; um sistema de detecção pode agrupar eventos pelo par de endereços; uma plataforma de nuvem pode associar um endereço a uma interface ou recurso durante certo período. Cada fonte observa um trecho diferente da comunicação e responde a perguntas diferentes.

Endereço de origem e endereço de destino são campos relativos ao ponto que registrou o pacote. Tradução de endereços, proxies, VPNs, gateways, balanceadores e serviços intermediários podem fazer com que a origem vista por um servidor não seja a origem original do usuário. Um serviço pode ainda receber cabeçalhos adicionados por um proxy para indicar uma origem aparente, mas esses campos só são confiáveis quando a cadeia de intermediários e a configuração do serviço são conhecidas. Um valor fornecido livremente pelo cliente não comprova a origem de rede.

## Onde aparece e que evidências registrar

Uma evidência útil costuma incluir mais do que o endereço. Horário com fuso ou referência temporal clara, precisão do relógio, porta de origem e destino quando disponíveis, protocolo de transporte, direção, serviço acessado, identificador de sessão e resultado da conexão ajudam a distinguir eventos. Em redes com tradução, o mapeamento entre endereço e porta pode ser necessário para correlacionar uma conexão pública a um assinante ou dispositivo interno. Sem os campos e registros correspondentes, um endereço compartilhado pode não permitir essa associação.

A preservação deve manter a forma original do dado e sua proveniência: sistema que o gerou, período de retenção, método de coleta, ajustes feitos e limitações conhecidas. Se o valor foi normalizado, convertido ou enriquecido, convém conservar o valor original junto da transformação. Datas são críticas porque alocações e traduções mudam. Um registro sem sincronização de relógio ou com horário ambíguo pode produzir uma correlação falsa, mesmo quando o endereço foi copiado corretamente.

## Uso defensivo e resposta a incidentes

Regras de bloqueio por endereço podem ser úteis quando há uma necessidade operacional clara e quando o efeito colateral é aceitável. Um bloqueio amplo pode interromper usuários legítimos que compartilham um gateway, um serviço de hospedagem ou uma saída corporativa. Endereços dinâmicos podem deixar de representar a mesma origem, e endereços de infraestrutura compartilhada podem atender vários serviços. Antes de bloquear, a equipe deve considerar o alcance da regra, a duração, a possibilidade de exceção e os sinais que indicarão se a medida continua necessária.

Ao responder a um incidente, preserve rapidamente logs sujeitos a retenção curta, mas mantenha a coleta proporcional à hipótese. A falta de dados de tradução, de horários confiáveis ou de registros de origem pode impedir a reconstrução posterior. Documentar lacunas é parte do resultado: explicita o que foi possível observar e o que permanece desconhecido. A equipe também deve avaliar se a própria infraestrutura alterou o endereço observado, por exemplo, com proxy reverso, rede privada virtual, serviço de borda ou balanceamento.

## Distinções importantes

### IP e endereço IP

IP é o protocolo; endereço IP é o valor de endereçamento usado no contexto desse protocolo. Na conversa cotidiana, “IP” muitas vezes é uma abreviação de “endereço IP”, mas relatórios técnicos devem evitar ambiguidade quando a diferença afeta a conclusão. Dizer “o IP falhou” pode significar que a comunicação IP não ocorreu ou que um endereço específico não respondeu; a descrição precisa elimina essa incerteza.

### Endereço IP e porta

O endereço aponta para um ponto de rede; a porta ajuda a distinguir serviços ou conversas de transporte nesse ponto. Registros costumam combinar endereço e porta para caracterizar os extremos de uma sessão. A porta não identifica uma pessoa nem necessariamente um programa específico: serviços podem mudar de porta, e aplicações diferentes podem usar a mesma.

### Endereço IP e nome de domínio

Um nome de domínio é uma forma legível usada para localizar serviços por mecanismos como o DNS. Um nome pode corresponder a endereços diferentes em momentos distintos, e um endereço pode atender vários nomes. Uma consulta DNS, isoladamente, não demonstra que houve conexão nem qual conteúdo foi trocado.

### Endereço IP e identidade

Um endereço pode ser evidência sobre uma conexão, uma rede ou uma alocação em determinado momento. Não é credencial, identidade civil nem identificador confiável de uma pessoa. Para associá-lo a um assinante ou a uma conta, podem ser necessários registros de atribuição, tradução, autenticação e contexto temporal, mantidos por organizações diferentes. Mesmo uma associação técnica bem documentada não prova, por si só, quem estava diante do dispositivo ou quem controlava a atividade.

## Limitações e erros de interpretação

O erro mais comum é converter “o servidor recebeu tráfego deste endereço” em “esta pessoa realizou a ação”. Entre esses pontos há possibilidades de compartilhamento, tradução, roteamento indireto, automação, dispositivos comprometidos e uso por terceiros. O endereço pode ser correto e a atribuição ainda estar errada. Relatórios devem separar observação, inferência e conclusão, indicando quais evidências sustentam cada etapa.

Também é arriscado assumir que o endereço permanece associado ao mesmo equipamento. Alocações dinâmicas, mudança de provedor, troca de rede, mobilidade e reutilização de endereços alteram a associação ao longo do tempo. Sem o instante relevante e os dados de atribuição correspondentes, uma consulta atual não comprova a condição passada. A ausência de um registro pode decorrer de retenção, coleta incompleta ou arquitetura, e não necessariamente da ausência da atividade.

Há limites de visibilidade. Criptografia pode ocultar o conteúdo de uma comunicação, enquanto o endereço e certos metadados de rede continuam visíveis em pontos específicos. Por outro lado, túneis e intermediários podem esconder da rede local os destinos finais, apresentando apenas o endereço do túnel. Um registro de fluxo pode resumir que houve comunicação sem revelar a requisição ou o arquivo transmitido. IP oferece uma perspectiva de conectividade, não uma narrativa completa da atividade.

## Exemplos hipotéticos

Uma equipe recebe um alerta de tentativas repetidas de acesso a um portal. O log do portal mostra um endereço público e horários, mas o serviço está atrás de um proxy reverso. A equipe consulta a configuração e confirma que o proxy registra a origem recebida apenas de intermediários autorizados. Em seguida, compara horários com o firewall e com os eventos de autenticação. O endereço serve para localizar conexões e organizar a investigação; só esses dados não permitem nomear a pessoa que tentou entrar.

## Perguntas frequentes

### Um endereço IP identifica uma pessoa?

Não diretamente. Pode apontar para uma conexão ou alocação em certo contexto e momento. Associá-lo a um assinante exige registros adicionais; saber quem efetivamente usou a conexão requer outras evidências. Uma rede compartilhada pode representar muitas pessoas e dispositivos sob um endereço público.

### Dois registros com o mesmo endereço representam o mesmo usuário?

Não necessariamente. Podem corresponder a usuários diferentes atrás do mesmo gateway ou a um endereço reutilizado em horários distintos. Compare horário, portas, tradução, autenticação e outros registros antes de inferir continuidade.

### Um endereço diferente prova que houve troca de pessoa ou dispositivo?

Não. Um mesmo equipamento pode alternar entre redes, receber nova alocação ou usar outro intermediário. A mudança pode refletir apenas uma rota de saída diferente.

### É possível saber a localização exata pelo endereço?

Em geral, não. Uma estimativa regional pode ajudar na triagem, mas pode apontar para a infraestrutura do provedor ou para um ponto de saída, não para a posição de uma pessoa.

### O endereço mostrado em um site é o endereço real do visitante?

É o endereço observado na conexão ou o valor que a aplicação escolheu registrar. Proxy, VPN, gateway e outros intermediários podem fazer com que o endereço visível seja o deles. Cabeçalhos de origem só são confiáveis quando vêm de intermediários conhecidos e configurados.

### O que devo guardar quando um endereço for relevante?

Preserve o endereço original, horário e referência, porta e protocolo quando disponíveis, origem do log e recurso envolvido. Em cenários com tradução, guarde os mapeamentos necessários. Registre transformações e lacunas; não copie o endereço sem contexto.

## Relação com o capítulo 1

No capítulo 1 da versão original, o termo integra a infraestrutura que torna possível a comunicação entre redes. Endereços são evidências técnicas contextuais: descrevem pontos observados por sistemas, mas não encerram a investigação sobre dispositivos, usuários ou autoria.
