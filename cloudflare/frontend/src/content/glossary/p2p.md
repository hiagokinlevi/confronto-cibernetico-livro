# P2P

## Conceito

P2P, abreviação de *peer-to-peer* (par a par), descreve um modelo de comunicação em que participantes podem trocar dados diretamente entre si ou integrar uma rede distribuída que coordena essas trocas. Cada participante é chamado de par. Dependendo do desenho, um par pode solicitar e fornecer dados, anunciar recursos disponíveis ou ajudar a localizar outros participantes. A definição não determina, por si só, se existe um servidor central, qual protocolo é usado, se o conteúdo é legítimo ou se a rede é segura.

Em sistemas tradicionais cliente-servidor, o cliente costuma iniciar uma solicitação a um serviço que concentra a resposta. Em P2P, parte da comunicação e da distribuição pode ocorrer entre os próprios participantes. Isso não significa que todos os pares sejam idênticos em capacidade ou função. Um serviço pode combinar pares comuns, nós com tarefas especiais e componentes centrais de autenticação ou descoberta. O termo descreve uma arquitetura ou uma forma de interação, não uma categoria de aplicativo nem uma conclusão sobre intenção.

Essa distinção é essencial para a segurança. Um fluxo entre dois computadores pode fazer parte de sincronização, colaboração, distribuição de conteúdo ou de uma aplicação autorizada. Também pode estar associado a software não permitido, comunicação de comando e controle ou saída indevida de dados. O padrão de conexão, isoladamente, não resolve a questão; é preciso saber qual aplicativo o produziu e em que contexto opera.

## Como funciona

Uma rede P2P precisa, de alguma forma, encontrar participantes e organizar a troca. Alguns sistemas usam um serviço de descoberta ou diretório para informar onde estão os pares, mas transferem os dados diretamente entre eles. Outros distribuem também a descoberta, de modo que um participante obtenha informações de seus vizinhos. Há ainda modelos híbridos, nos quais servidores mantêm contas, coordenam sessões, publicam índices ou facilitam conexões, enquanto os dados seguem de par a par.

## Onde aparece na infraestrutura

P2P é usado em diferentes tipos de software: distribuição ou sincronização de arquivos, colaboração entre dispositivos, comunicação em tempo real e outras aplicações distribuídas. Também pode ser encontrado em ferramentas corporativas que transferem dados entre estações, em produtos de consumo instalados por usuários e em softwares que aproveitam dispositivos de uma rede para distribuir atualizações. A presença do modelo em uma organização pode ser intencional, tolerada ou desconhecida; a política de uso precisa ser consultada antes de classificar o comportamento.

## Reconhecimento defensivo

O primeiro passo é estabelecer a origem da comunicação. No endpoint, são úteis o nome e o caminho do processo, a assinatura do executável, o usuário que o iniciou, o horário de instalação ou execução e as relações entre processos. O inventário de software e os registros de gestão podem confirmar se a aplicação é aprovada. Em investigação, a identificação deve ser feita com cautela: nome de processo pode ser falsificado, um componente legítimo pode ser abusado e a ausência de uma assinatura conhecida não basta para concluir que há comprometimento.

Na rede, procure um conjunto coerente de indícios: conexões entre estações que não costumam comunicar-se, muitos pares ou destinos variáveis, tráfego nos dois sentidos, sessões recorrentes, transferências relevantes e atividade que persiste além do uso normal esperado. Esses sinais são pistas, não critérios absolutos. Aplicações de voz, videoconferência, jogos, descoberta local e distribuição corporativa também podem gerar fluxos diretos, simultâneos ou de curta duração.

## Uso em investigação de incidentes

P2P é um termo útil quando a investigação precisa descrever como componentes se comunicaram sem antecipar uma conclusão sobre o que foi enviado. Pode indicar uma hipótese de distribuição descentralizada, uma característica do aplicativo ou uma observação inicial sobre fluxos entre pares. No relatório, separe o que foi observado — por exemplo, conexões recorrentes entre estações — do que foi inferido — por exemplo, que uma aplicação P2P coordenava essas conexões — e do que ainda não foi demonstrado, como o conteúdo transferido.

Se houver suspeita de exfiltração, a pergunta principal não é apenas se o tráfego se parece com P2P. É necessário determinar se dados deixaram o ambiente, quais dados, a partir de qual ativo, sob qual identidade e para que destino ou grupo de destinatários. Evidências de leitura de arquivos, acesso a diretórios sensíveis, criação de arquivos compactados, transferência observada e atividade posterior podem sustentar uma hipótese de saída de dados. A falta de inspeção do conteúdo não prova nem descarta essa hipótese.

A identificação do aplicativo e do padrão de tráfego deve preceder a classificação de uma conexão P2P como exfiltração. Um volume elevado pode refletir distribuição legítima; um volume modesto pode conter informação sensível. Da mesma forma, envio a muitos pares não demonstra, por si só, que o conteúdo saiu da organização: os pares podem estar em uma rede local ou receber somente fragmentos. Determine os limites observáveis e registre incertezas em vez de transformar indicadores técnicos em afirmações sobre intenção.

Exemplo hipotético: uma equipe observa que uma estação envia e recebe dados de várias máquinas durante a noite. O processo identificado pertence a uma ferramenta de sincronização pessoal não aprovada. Os registros disponíveis mostram conexões internas e externas, mas não permitem inspecionar o conteúdo criptografado. É razoável abrir uma investigação sobre uso não autorizado e possível exposição de dados; não é razoável afirmar, só com esses fatos, que houve exfiltração. A equipe pode preservar os registros, identificar a conta e os diretórios acessados e verificar o escopo de destinos conforme seus procedimentos.

Outro exemplo hipotético: um sistema de distribuição gerenciado transfere pacotes de atualização entre computadores de uma filial após um serviço central autorizar a versão. O tráfego entre estações é previsto e coincide com a janela de manutenção. O modelo pode conter elementos P2P, embora haja coordenação central. A validação depende do inventário, das configurações aprovadas e da correspondência entre o pacote distribuído e a versão autorizada, não apenas de uma lista de endereços permitidos.

## Distinções importantes

**P2P e cliente-servidor.** São formas de organizar a comunicação, mas podem coexistir na mesma aplicação. Um servidor pode autenticar usuários, coordenar pares ou fornecer um índice, enquanto os pares trocam os dados. Uma arquitetura híbrida não deixa de ter componentes P2P; tampouco toda conversa com múltiplos clientes é P2P.

**P2P e descentralização.** A troca entre pares não implica ausência completa de controle central. Diretórios, serviços de identidade, políticas e mecanismos de atualização podem permanecer centralizados. “Distribuído” descreve a divisão de funções ou recursos; não garante que não exista um ponto central, nem que a rede seja resiliente ou confiável.

**P2P e torrent.** Torrent é uma família conhecida de protocolos e aplicações para distribuição de arquivos em partes, mas P2P é mais amplo. Uma conexão P2P pode transportar outros tipos de dados e usar outros mecanismos. Detectar características associadas à troca de arquivos não identifica automaticamente qual aplicativo está ativo.

**P2P e exfiltração.** P2P descreve uma relação de comunicação; exfiltração descreve a saída não autorizada de dados. A segunda pode ocorrer por diferentes arquiteturas, e a primeira pode ser usada sem qualquer vazamento. Para relacioná-las, é preciso evidência sobre dados, origem, destino, autorização e contexto.

**P2P e criptografia.** São propriedades distintas. Uma aplicação P2P pode usar criptografia ou não; tráfego criptografado pode ser cliente-servidor. A criptografia afeta o que pode ser examinado no conteúdo, enquanto P2P diz respeito à organização das trocas.

## Limitações e erros de interpretação

A atribuição de tráfego a um aplicativo pode ser incompleta quando há criptografia, NAT, retransmissão ou registros com resolução limitada. Um endereço observado pode pertencer a um serviço compartilhado; uma porta pode ser escolhida dinamicamente; a ausência de um nome conhecido não identifica o protocolo. Regras de detecção baseadas em porta fixa ou em listas de reputação tendem a produzir lacunas e falsos positivos. São mais confiáveis quando combinadas com telemetria do endpoint e contexto da organização.

Volume e número de conexões não equivalem a impacto. A avaliação deve considerar sensibilidade dos dados, privilégios do usuário, abrangência dos ativos envolvidos, duração, destinos e capacidade de contenção. Um evento pode exigir resposta mesmo sem prova de exfiltração, por exemplo, quando há software proibido ou execução suspeita; a medida adotada, porém, deve refletir o nível de evidência e o risco observado.

## Resposta e prevenção

Organizações podem definir quais aplicações P2P são permitidas, em que segmentos e para quais finalidades. Controles de instalação, gestão de aplicações e regras de saída ajudam a reduzir usos não autorizados, enquanto exceções documentadas evitam bloquear fluxos necessários. Monitoramento deve privilegiar identificação de processos, destinos e comportamento compatível com a política, em vez de tratar todo tráfego entre pares como incidente.

Diante de atividade suspeita, preserve evidências antes de alterar o estado quando isso for compatível com a urgência e os procedimentos locais. Registre horários, ativos, contas, processos, conexões e fontes consultadas. Determine se há risco ativo e se a contenção deve interromper o processo, restringir a comunicação ou isolar o dispositivo. A escolha depende de impacto operacional, capacidade de propagação e possibilidade de preservar dados úteis à investigação.

Depois de conter, avalie escopo e exposição: quais dispositivos participaram, se arquivos foram compartilhados, quais permissões foram concedidas, se credenciais podem ter sido usadas e se o software instalou componentes adicionais. Remover o aplicativo sem compreender sua função pode apagar evidências ou deixar persistência associada. Ao encerrar, documente a base factual da classificação, as limitações de visibilidade e a justificativa para as medidas tomadas.

## Perguntas frequentes

### Toda conexão direta entre computadores é P2P?

Não. A conexão direta descreve um caminho observado. Para chamar a aplicação de P2P, é preciso entender como ela organiza a descoberta, a troca e os papéis dos participantes. Um aplicativo tradicional pode abrir conexões diretas como parte de uma sessão coordenada por servidor.

### P2P é sempre descentralizado?

Não necessariamente. O sistema pode depender de servidores para autenticação, diretório, coordenação ou retransmissão, mesmo que os dados circulem entre pares. A descentralização pode ser parcial e variar entre funções.

### Como diferenciar uso legítimo de exfiltração?

Identifique o aplicativo, confirme sua autorização e compare o padrão observado com a atividade esperada. Em seguida, procure evidências relacionadas a arquivos, contas, destinos e conteúdo transferido. Se os registros não permitirem determinar o conteúdo, declare essa limitação e mantenha a classificação como hipótese até haver suporte adicional.

### Bloquear uma porta conhecida resolve?

Em geral, não é uma conclusão segura sem entender a aplicação. Portas podem variar, ser configuradas ou ser compartilhadas por outros serviços. Controles mais robustos combinam gestão de software, telemetria de endpoint, política de rede e análise contextual.

## Relação com o capítulo

No capítulo 1 da versão original do manuscrito, o verbete ajuda a interpretar infraestrutura de comunicação distribuída. Seu valor prático está em nomear o modelo com precisão e manter separadas arquitetura, aplicativo e intenção: essa separação torna a investigação mais clara quando fluxos entre pares aparecem em um incidente.
