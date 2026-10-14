# VLAN

## Conceito

VLAN, sigla de Virtual LAN, é uma segmentação lógica que separa domínios de rede em uma infraestrutura compartilhada. Em vez de exigir um conjunto independente de switches e cabos para cada grupo, a rede pode usar os mesmos equipamentos físicos para transportar tráfego de vários segmentos lógicos, mantendo-os separados no nível de enlace.

A palavra “virtual” não significa que a rede seja apenas uma abstração sem consequências físicas. A separação depende de configurações aplicadas aos equipamentos e de como os quadros Ethernet são classificados e encaminhados.

Em termos simples, imagine um edifício com vários escritórios que compartilham corredores e elevadores, mas cujas portas e regras de acesso distribuem as pessoas por áreas distintas. A analogia ajuda a visualizar a separação, mas tem limite: na rede, os equipamentos precisam classificar cada quadro corretamente e as conexões entre áreas são dispositivos e políticas técnicas concretos.

## Para que serve

A VLAN é útil para organizar uma infraestrutura segundo necessidades que não coincidem necessariamente com a localização física. Uma instituição pode separar estações de trabalho, servidores, telefonia, dispositivos de visitantes e equipamentos de operação predial, embora todos estejam conectados aos mesmos switches.

Essa organização pode melhorar a administração e apoiar controles defensivos. Equipes podem aplicar endereçamento, monitoramento e políticas distintos a grupos com perfis diferentes; incidentes em um segmento podem ser investigados com fronteiras mais delimitadas.

A motivação não precisa ser exclusivamente segurança. Separação por função, redução de tráfego de difusão, requisitos de disponibilidade e clareza operacional também são razões comuns.

## Como funciona

Em uma rede Ethernet, switches encaminham quadros entre portas. Uma VLAN atribui portas ou tráfego a um domínio lógico específico.

Quando um quadro precisa atravessar um enlace entre switches transportando tráfego de mais de uma VLAN, o enlace costuma operar como tronco. Nesse caso, os quadros são identificados com um marcador de VLAN, conforme o padrão Ethernet de marcação usado pelos equipamentos, para que o switch receptor saiba a qual domínio lógico cada quadro pertence.

O identificador numérico permite que os dispositivos distingam VLANs em uma mesma infraestrutura. A existência de um identificador em um quadro não prova que o segmento esteja protegido nem revela toda a política aplicada.

A comunicação dentro de uma mesma VLAN pode ocorrer no nível de enlace, sem passar por um roteador. Para que uma estação em uma VLAN alcance outra VLAN, o tráfego precisa de uma função de camada 3, como um roteador ou um switch multicamada, além de endereçamento e rotas compatíveis.

Há implementações em que interfaces virtuais de camada 3 no switch fazem o encaminhamento entre VLANs; em outras, a função é entregue a um roteador ou firewall. O aspecto decisivo para a análise é localizar o ponto de passagem e identificar qual política se aplica nele.

## VLAN como controle defensivo

A segmentação lógica apoia o princípio de reduzir caminhos de comunicação desnecessários. Uma estação de usuário, por exemplo, pode precisar acessar determinados serviços corporativos, mas não administrar diretamente equipamentos de rede.

Uma política defensiva eficaz combina a separação de camada 2 com controles na passagem entre zonas. Entre as práticas de projeto estão definir quais grupos precisam conversar, permitir somente os fluxos necessários, registrar comunicações relevantes e revisar exceções.

A VLAN também pode apoiar a contenção durante um incidente. Se a equipe souber que um ativo está em um segmento específico, pode restringir temporariamente a comunicação desse segmento ou ajustar regras na fronteira, preservando serviços não afetados.

A segmentação não autentica o usuário nem prova a confiabilidade de um dispositivo. Um equipamento conectado a uma porta autorizada pode estar comprometido.

## Onde aparece na investigação

Em uma investigação, a VLAN surge em inventários de rede, diagramas, configurações de switches e roteadores, registros de alterações, tabelas de encaminhamento, dados de monitoramento e descrições de interfaces. A associação de uma porta a uma VLAN pode ajudar a relacionar um endereço físico ou lógico a um local e a uma função.

A informação pode aparecer também em capturas de pacotes. Quadros marcados podem carregar um identificador de VLAN, desde que o ponto de captura preserve a marcação.

Dados de endereçamento ajudam a contextualizar a segmentação. Sub-redes IP são frequentemente associadas a VLANs, mas essa correspondência é uma escolha de projeto e não uma equivalência universal.

Logs de firewall e de roteamento podem indicar que houve tentativa ou passagem entre zonas, mas costumam usar nomes de interfaces, sub-redes ou objetos administrativos em vez do termo “VLAN”. Um nome como “usuários” ou “convidados” é apenas um rótulo até que seja correlacionado com a configuração efetiva.

## Evidências para reconhecê-la

Uma investigação sólida combina fontes independentes, mantendo a janela temporal e a proveniência de cada evidência. Entre os elementos úteis estão:

- configuração das portas de acesso e dos enlaces de tronco, incluindo VLANs permitidas e tratamento de tráfego sem marcação;
- inventário de switches, interfaces e equipamentos conectados, com data da última atualização;
- tabelas de encaminhamento de endereços físicos, que associam endereços observados a portas e VLANs em determinado momento;
- configurações de interfaces de camada 3, rotas, listas de controle e regras de firewall nas fronteiras entre segmentos;
- capturas de pacotes e registros de fluxo, interpretados conforme o ponto de coleta e a forma de preservação das marcas;
- logs de autenticação, atribuição dinâmica de rede, gestão e mudanças, quando disponíveis, para reconstruir como um dispositivo recebeu sua conectividade.

Nenhuma dessas evidências, isoladamente, necessariamente mostra a arquitetura completa. Uma tabela de encaminhamento é uma fotografia transitória: entradas expiram e podem refletir atividade recente, não a totalidade dos dispositivos.

Também importa distinguir evidência de inferência. Se uma estação tem endereço de uma sub-rede usada habitualmente por uma VLAN, isso sugere uma associação; não prova que sua porta estava naquela VLAN no horário investigado.

## Exemplo hipotético

Considere uma empresa fictícia com estações de funcionários, servidores internos e terminais de visitantes conectados a switches compartilhados. A equipe mantém esses grupos em VLANs distintas.

Nesse caso hipotético, a VLAN ajuda a formular a pergunta correta: qual caminho entre o segmento de usuários e o serviço administrativo tornou a tentativa possível? A equipe examina a regra, as rotas e os registros correspondentes, e pode restringir o fluxo ou isolar a porta enquanto preserva as dependências necessárias à investigação.

Suponha ainda que o desenho mostre a separação, mas uma regra temporária tenha permitido comunicação ampla entre as redes. A divergência entre o desenho e o estado efetivo é um achado relevante.

## Distinções importantes

### VLAN e sub-rede IP

VLAN descreve um domínio lógico de camada 2; sub-rede descreve um conjunto de endereços e regras de camada 3. É comum que uma VLAN tenha uma sub-rede associada, mas isso não deve ser presumido sem verificar o projeto.

### VLAN e roteamento

A VLAN separa domínios de enlace. O roteamento conecta redes IP e pode permitir comunicação entre VLANs.

### VLAN e zona de segurança

Uma zona de segurança é uma classificação de sistemas e fluxos segundo uma política ou nível de confiança. Uma VLAN pode implementar parte dessa separação, mas a zona pode abranger diversas VLANs, sub-redes, redes sem fio ou controles de aplicação.

### VLAN e rede virtual sobreposta

VLANs tradicionais segmentam tráfego Ethernet em uma infraestrutura de comutação. Redes sobrepostas podem criar segmentos lógicos usando encapsulamento e identificadores adicionais sobre uma rede subjacente.

## Limitações e erros de interpretação

A VLAN restringe o domínio de camada 2, mas não constitui uma barreira absoluta contra movimento lateral. Se o atacante já controla um sistema em determinada VLAN, outros sistemas do mesmo domínio podem estar alcançáveis conforme os serviços e controles locais.

Um erro recorrente é tratar a separação lógica como equivalente a isolamento físico. Os segmentos compartilham equipamentos e podem depender da mesma infraestrutura de gestão, enlaces e serviços.

Outro erro é considerar que VLANs diferentes sempre impedem qualquer comunicação. A conectividade pode ser autorizada por roteamento.

A atribuição de um dispositivo a uma VLAN pode ser estática ou depender de políticas de acesso e mecanismos de configuração. Mudanças de porta, autenticação, perfis de dispositivo ou automação podem alterar a associação ao longo do tempo.

Por fim, nomes e números de VLAN não carregam significado universal. Um número baixo não é inerentemente mais confiável, e um nome sugestivo não comprova a função.

## Implicações para resposta a incidentes

No início de uma resposta, identificar a VLAN de um ativo pode ajudar a estimar quais outros sistemas compartilham o domínio de enlace e quais controles se aplicam às saídas dele. Essa estimativa deve ser tratada como ponto de partida para delimitar o escopo, não como prova de que todos os membros foram afetados ou de que os demais segmentos ficaram intactos.

A contenção pode ocorrer em diferentes pontos: na porta do switch, na política de roteamento, no firewall ou no próprio ativo. Cada opção tem alcance e efeitos operacionais distintos.

Antes de alterar configurações, a equipe deve registrar o estado observado e preservar os dados necessários, seguindo os procedimentos de resposta da organização. Depois da contenção, convém confirmar a efetividade por meio de registros e observação do tráfego, além de verificar caminhos alternativos.

Após o incidente, revisar a segmentação pode revelar permissões excessivas, dependências não documentadas, inconsistências entre equipamentos e lacunas de monitoramento. A correção pode envolver ajustar políticas, reduzir VLANs excessivamente abrangentes, melhorar inventário ou registrar melhor as mudanças.

## Perguntas frequentes

### Uma VLAN impede que um dispositivo comprometido alcance outro?

Não necessariamente. Se ambos estiverem no mesmo domínio de camada 2, pode haver comunicação direta, sujeita aos controles e serviços presentes.

### Uma VLAN é uma medida de segurança suficiente?

Não. Ela é uma peça de segmentação.

### VLAN e Wi-Fi são a mesma coisa?

Não. Wi-Fi descreve uma tecnologia de acesso sem fio.

### Como saber a qual VLAN um equipamento pertencia durante um incidente?

Correlacione a porta ou associação sem fio, a configuração vigente no período, os registros de autenticação ou atribuição de rede, o endereço do dispositivo e as tabelas de encaminhamento disponíveis. Compare horários e fontes.

### A ausência de um identificador de VLAN em uma captura descarta o uso de VLAN?

Não. O ponto de captura pode estar em uma porta de acesso ou um sistema de captura pode retirar a marcação.

## Relação com o capítulo da versão original

Na versão original do manuscrito, o capítulo 8 oferece o contexto relacionado a este verbete. A VLAN pode ser lida ali como elemento de infraestrutura cujo valor defensivo depende de fronteiras compreensíveis e políticas efetivas.
