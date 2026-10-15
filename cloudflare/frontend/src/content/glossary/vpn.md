# VPN

## Conceito

VPN é a sigla de *Virtual Private Network*, em português, rede privada virtual. É um canal de acesso remoto ou de interligação de redes que encapsula tráfego entre pontos autorizados. Em termos práticos, um dispositivo, uma rede ou um serviço estabelece uma associação lógica com outro ponto, e determinados pacotes passam por esse canal em vez de seguir diretamente pela rede local ou pela Internet pública.

A palavra “privada” descreve o tratamento lógico e as condições de acesso ao tráfego, não um meio físico exclusivo. O canal costuma atravessar redes compartilhadas, como a Internet, cuja infraestrutura permanece sob controle de provedores e operadores distintos. “Virtual” indica que a conectividade é construída por software e protocolos sobre essa infraestrutura, em vez de depender necessariamente de cabos ou circuitos reservados entre cada participante.

## Para que serve

Uma VPN é útil quando pessoas precisam acessar recursos internos fora do escritório, quando filiais necessitam trocar tráfego por uma rede compartilhada, ou quando ambientes separados precisam de conectividade controlada. Ela permite que a organização estenda sua arquitetura de rede sem exigir que o usuário esteja fisicamente conectado à rede corporativa. Em ambientes de nuvem, uma conexão VPN também pode ligar redes locais a redes virtuais hospedadas por um provedor.

Uma VPN não substitui autorização por aplicação. O fato de um usuário conseguir estabelecer o túnel não deveria, por si só, permitir acesso irrestrito a todos os sistemas internos. Controles de identidade, regras de firewall, segmentação, permissões nos serviços e monitoramento continuam necessários. Em uma arquitetura bem delimitada, o túnel fornece um caminho de comunicação; os sistemas de destino ainda decidem o que a identidade pode fazer.

## Como funciona, em termos defensivos

Em uma conexão de acesso remoto, um cliente VPN no dispositivo inicia comunicação com um concentrador ou gateway administrado pela organização. Em uma interligação de redes, os pontos podem ser gateways que representam redes inteiras. O equipamento de destino valida a identidade ou os fatores apresentados, negocia os parâmetros da sessão e, se as verificações forem aprovadas, cria uma associação que permite encaminhar o tráfego autorizado.

O encapsulamento coloca um pacote dentro de outro formato de transporte para que ele atravesse a rede intermediária e chegue ao ponto remoto. Dependendo da tecnologia e da configuração, o conteúdo também é criptografado e protegido contra alterações. O gateway remove o encapsulamento, aplica as políticas correspondentes e encaminha o tráfego. O processo ocorre nas duas direções enquanto a sessão estiver válida. Protocolos e produtos diferem nos detalhes, portanto “VPN” identifica uma função ampla, não um protocolo único.

A autenticação pode envolver senha, certificado de dispositivo, chave criptográfica, autenticação multifator ou combinações desses elementos. A organização também pode avaliar postura do dispositivo, como estado de atualização ou presença de controles de segurança. Esses mecanismos respondem a perguntas diferentes: quem está tentando conectar-se, se o dispositivo é reconhecido e quais condições precisam ser satisfeitas. Um fator adicional reduz certas possibilidades de uso indevido de senha, mas não elimina riscos como aprovação indevida de solicitações, sessão já aberta em equipamento comprometido ou falhas no próprio gateway.

Após autenticar, a conexão recebe parâmetros de rede e políticas. A configuração pode direcionar todo o tráfego pelo gateway corporativo, ou apenas destinos e redes específicos. No primeiro modelo, chamado frequentemente de túnel completo, a organização pode inspecionar e registrar mais tráfego, conforme sua arquitetura e suas obrigações. No túnel dividido, apenas parte do tráfego passa pela VPN, enquanto outra parte segue pela conexão local. Esse desenho pode ser adequado, mas cria caminhos simultâneos que precisam ser considerados na análise de exposição, vazamento de dados e resolução de nomes.

## Onde aparece na investigação

Em uma investigação, a VPN pode surgir como serviço exposto, caminho de acesso a recursos internos, componente da infraestrutura de uma organização ou ferramenta de privacidade instalada por um usuário. O contexto determina a relevância. A conexão remota de uma pessoa autorizada pode ser atividade normal; uma sequência atípica de autenticação seguida por acessos incompatíveis com seu perfil pode merecer apuração. Um endereço de saída associado a um provedor de VPN comercial também não identifica, isoladamente, quem controlava a atividade observada.

As evidências costumam estar distribuídas entre o gateway VPN, o provedor de identidade, o sistema de autenticação multifator, o inventário de dispositivos, o firewall e os serviços internos. Registros úteis podem incluir horário de início e término, identificador da conta, método de autenticação, resultado, endereço de origem observado, endereço atribuído ao cliente, identificador da sessão, gateway utilizado, mudanças de configuração e volume ou destinos de tráfego. Nem todo produto registra os mesmos campos, e alguns registros podem ser mantidos por períodos distintos.

A correlação exige atenção aos horários e à semântica dos campos. O endereço de origem registrado pelo gateway pode ser o endereço público visto após tradução de endereços, e não um endereço exclusivo do usuário. O endereço atribuído dentro do túnel pode ser reutilizado depois que uma sessão termina. Horários podem estar em fusos diferentes ou ter sido registrados por equipamentos com relógios desalinhados. Uma correlação segura deve relacionar sessão, conta e intervalo de tempo, em vez de tratar um endereço IP isolado como prova de identidade.

## Evidências para reconhecer e contextualizar

Em uma análise de endpoint, são relevantes o horário em que o cliente foi iniciado, a identidade usada, a origem do pacote de instalação, alterações de configuração, certificados relacionados e processos que surgiram no mesmo período. Em um gateway, interessa verificar se a sessão foi aceita, qual política foi associada, que redes ficaram acessíveis e se houve falhas ou alterações administrativas. Em serviços de destino, registros de acesso podem ajudar a determinar o que foi consultado depois da conexão, por qual conta e com quais privilégios.

## Ameaças e resposta a incidentes

Credenciais VPN comprometidas podem dar acesso inicial a uma rede ou a recursos internos. A nota prática é simples: revisar autenticação, dispositivos e sessões. Na resposta, a equipe deve determinar se a suspeita envolve senha exposta, fator adicional, certificado, token de sessão, dispositivo controlado por terceiro ou falha de configuração. Cada caso pede ações diferentes; redefinir uma senha pode ser insuficiente se uma sessão continuar válida ou se outra credencial permanecer confiável.

Em paralelo, preserve os registros do gateway e da identidade, identifique sessões ativas e construa a linha do tempo. Compare local, horário, dispositivo e padrão de acesso com o histórico conhecido, sem concluir a partir de um único indicador. Examine os recursos alcançados depois da conexão, inclusive autenticações em outros serviços, alterações de privilégios, consultas a dados e mudanças administrativas. Se houver risco de propagação, o escopo deve incluir sistemas acessados pela sessão, e não apenas o cliente VPN.

## Distinções importantes

**VPN e proxy:** um proxy encaminha solicitações de aplicações ou protocolos específicos por outro serviço. Uma VPN cria conectividade de rede encapsulada entre pontos, embora produtos possam combinar funções ou apresentar uma experiência semelhante para o usuário. Um proxy não equivale automaticamente a uma VPN, e ambos podem deixar metadados ou registros em seus pontos de operação.

**VPN e acesso remoto:** acesso remoto é a finalidade mais ampla de usar sistemas a distância. VPN é uma forma de prover caminho de rede para isso. Uma solução de acesso remoto pode publicar apenas uma aplicação, sem conceder conectividade geral à rede interna; inversamente, uma VPN pode habilitar acesso a muitos destinos, dependendo das rotas e regras.

**VPN e criptografia:** encapsular tráfego não significa necessariamente que todo conteúdo esteja criptografado. É preciso conhecer o protocolo, os parâmetros e a implementação. Mesmo com criptografia adequada no túnel, aplicações podem ter sua própria proteção, e dados ficam expostos nos pontos finais onde são processados. A criptografia do túnel não substitui controles de identidade ou autorização.

**VPN corporativa e serviço comercial de privacidade:** ambas podem criar túneis, mas têm objetivos, operadores e políticas diferentes. A primeira normalmente conecta a recursos de uma organização e pode registrar atividade para segurança e administração. Um serviço comercial pode encaminhar o tráfego do cliente por servidores de seu operador, mas não cria por si só autorização para entrar em uma rede corporativa. A presença de qualquer um deles não basta para concluir que houve intenção maliciosa.

**VPN e rede confiável:** estar conectado à rede corporativa não torna automaticamente confiável todo dispositivo ou usuário. A identidade pode ter sido comprometida, o endpoint pode estar infectado e as permissões podem ser excessivas. É mais preciso pensar em VPN como um caminho sujeito a políticas e monitoramento do que como um selo de segurança.

## Limitações e erros de interpretação

Um erro comum é tratar o endereço IP de saída como identidade pessoal. Endereços podem ser compartilhados, traduzidos, dinâmicos ou atribuídos a diferentes sessões ao longo do tempo. Atribuição exige correlação com registros de sessão e outras evidências. Outro erro é supor que a conexão representa uma localização física exata: o ponto observado pode ser um gateway intermediário, uma rede móvel ou uma infraestrutura remota.

Também é incorreto considerar todo tráfego que passa pela VPN seguro. Um túnel pode estar configurado com escopo amplo, encaminhar tráfego a sistemas vulneráveis ou permitir que uma estação comprometida alcance serviços internos. Da mesma forma, bloquear toda VPN não é uma estratégia suficiente: usuários podem ter necessidades legítimas, e controles devem distinguir conexões autorizadas, não gerenciadas e suspeitas com base em política e contexto.

Uma VPN não garante anonimato. O serviço que opera o gateway pode conhecer a conta, manter registros e associar a sessão a uma origem. Sites e aplicações ainda podem identificar usuários por login, cookies ou outras características. A criptografia também não oculta necessariamente o fato de que existe uma conexão com determinado gateway, nem elimina a visibilidade do tráfego após o ponto de saída.

Finalmente, “VPN” não informa por si só a qualidade da implementação. Produtos podem variar em suporte, atualizações, administração, registro e integração com identidade. A equipe deve avaliar a configuração efetiva e o ciclo de vida do equipamento, inclusive quem pode alterar políticas e como mudanças são auditadas. Nome comercial ou presença de criptografia não substituem essa avaliação.

## Perguntas frequentes

### Todo acesso VPN é criptografado?

Não é seguro presumir isso apenas pelo nome. Muitas implementações protegem o tráfego do túnel com criptografia, mas o protocolo e a configuração precisam ser conhecidos. Também importa onde a proteção começa e termina e como o gateway trata os dados depois da decapsulação.

### O que verificar primeiro diante de uma sessão suspeita?

Confirme se a sessão está ativa, identifique a conta e o dispositivo, preserve os registros disponíveis e determine quais recursos foram acessados. Em seguida, conforme o risco, revogue a sessão ou as credenciais envolvidas e examine a atividade nos sistemas de destino. A ordem pode variar quando há serviço crítico ou indício de comprometimento em andamento.

## Relação com o capítulo

Na versão original, o capítulo 1 trata o contexto de infraestrutura em que caminhos de acesso remoto podem ser relevantes. Para a investigação, o ponto central é associar a sessão VPN a uma identidade, um dispositivo e uma sequência de ações, preservando os limites do que cada evidência permite concluir.
