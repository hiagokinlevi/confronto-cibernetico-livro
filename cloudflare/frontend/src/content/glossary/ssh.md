# SSH

## Conceito

SSH, sigla de Secure Shell, é um protocolo usado para administrar sistemas remotamente e realizar transferências seguras em muitos ambientes. Ele permite que um cliente estabeleça uma sessão com um servidor, autentique uma identidade e troque dados protegidos por criptografia. A mesma família de ferramentas também pode encaminhar conexões de rede por um canal protegido, recurso conhecido como túnel ou encaminhamento de portas.

Na prática, “SSH” pode designar o protocolo, um cliente, um serviço servidor ou uma sessão. Encontrar o programa ou a porta associada não prova que houve sessão; uma sessão tampouco prova acesso indevido, e uma tentativa malsucedida não demonstra controle do sistema.

O propósito central é criar um canal de comunicação autenticado e confidencial entre extremos. Isso reduz a exposição de credenciais e comandos em trânsito em comparação com protocolos sem proteção criptográfica adequada. Não torna, por si só, confiável o usuário autenticado, seguro o computador cliente ou servidor, nem legítima a atividade realizada dentro da sessão. A segurança depende também das identidades, permissões, configurações, atualizações, redes e procedimentos que cercam o protocolo.

## Como funciona, em termos defensivos

Uma conexão SSH começa quando um cliente tenta alcançar um serviço servidor. Em muitas instalações, a porta TCP 22 é a configuração convencional, mas a porta pode ser alterada, o serviço pode estar restrito a uma rede interna ou pode não estar exposto diretamente. Portanto, a porta é um indício útil, não uma definição do protocolo. Um serviço em outra porta pode falar SSH, enquanto uma conexão à porta 22 pode falhar ou corresponder a outro uso configurado.

Antes de uma sessão interativa, os extremos negociam parâmetros para proteger a comunicação e estabelecer chaves de sessão. O cliente também precisa avaliar se está falando com o servidor esperado. Para isso, instalações comuns mantêm uma chave de host ou uma impressão digital associada ao servidor. A verificação dessa identidade ajuda a detectar servidores inesperados ou mudanças de destino. Uma mensagem de chave de host alterada pode ter explicações legítimas, como reconstrução do servidor, mas merece validação independente: aceitá-la automaticamente elimina uma salvaguarda importante.

Depois da negociação, o servidor autentica o usuário conforme as regras locais. Os métodos podem incluir senha, chave pública ou outros mecanismos configurados. Na autenticação por chave pública, o servidor verifica se a identidade apresentada corresponde a uma chave pública autorizada; a chave privada permanece sob controle do cliente e não deve ser enviada ao servidor. Uma frase secreta pode proteger o uso da chave privada no dispositivo. Assim, “autenticação por chave” não significa que todo acesso dispensou fatores adicionais, nem que a chave observada em um arquivo foi efetivamente usada.

Uma autenticação aceita abre possibilidades definidas pela conta e pela política do servidor. A sessão pode oferecer terminal interativo, execução de comandos sem terminal, cópia de arquivos ou encaminhamento de conexões. Quais opções estão disponíveis depende da configuração, dos privilégios da conta e de controles adicionais. Em um ambiente bem administrado, atividades administrativas podem exigir contas nominativas, autorização explícita e registro suficiente para atribuir ações. O protocolo criptografa o canal, mas os registros e controles do sistema determinam o que pode ser reconstruído depois.

## Utilidade para defesa e investigação

Para a defesa, SSH viabiliza administração remota, transferência de arquivos e acesso controlado a serviços internos. Essas funções tornam importante limitar identidades, origens e permissões. Inventariar servidores, responsáveis e usos previstos facilita a revisão de alertas e a remoção de acessos obsoletos.

Em uma investigação, SSH pode estar associado a acesso inicial, movimentação entre sistemas, administração e transferência ou encaminhamento de tráfego. São possibilidades analíticas, não conclusões decorrentes da simples presença do serviço.

Investigue qual identidade acessou qual ativo, de que origem, quando, com que resultado e que atividade se seguiu. Correlacione autenticação, rede e registros de sessão ou comandos. Se a auditoria não foi habilitada, está incompleta ou foi removida, algumas perguntas podem não ter resposta segura.

## Evidências e sinais observáveis

Registros do sistema e do serviço podem mostrar tentativas aceitas ou recusadas, conta informada, origem, horário e, conforme a configuração, método de autenticação. Os eventos podem estar no diário do sistema ou em arquivos de autenticação. Formato, retenção e detalhe variam; ausência de registro não prova ausência de conexão. Rotação, relógios desalinhados, coleta parcial e alteração do host afetam a linha do tempo.

Telemetria de rede pode indicar endereços, duração e volume aproximado. Como a sessão é criptografada, sensores comuns normalmente não veem comandos ou arquivos. Uma conexão persistente ou volumosa orienta a busca, mas não determina finalidade: automação, cópia legítima, sessão ociosa e túnel podem produzir sinais sobrepostos.

Configurações locais revelam serviço habilitado, contas autorizadas, chaves públicas, restrições e mudanças. Demonstram capacidade ou autorização potencial, não uso efetivo. Correlacione-as com registros de endpoint, identidade, inventário e mudanças. No cliente, histórico, configuração e agente de chaves podem indicar destinos, mas podem estar desativados, apagados ou associados a outro usuário. Registre a fonte e confiabilidade de cada achado, separando observação de hipótese.

## Chaves, contas e túneis

Chaves SSH são credenciais e devem ser tratadas conforme seu alcance e ciclo de vida. Uma chave privada pode ser exclusiva de uma pessoa, de um serviço ou de um processo automatizado; chaves compartilhadas dificultam atribuição e revogação. Uma chave pública instalada em uma conta permite autenticação segundo a política aplicável, mas não revela quem detém a chave privada nem quem a usou. Inventário, titularidade, finalidade, data de revisão e procedimento de revogação ajudam a reduzir essa ambiguidade.

Contas merecem análise própria. Contas individuais facilitam vincular a atividade a uma identidade; contas genéricas ou de serviço podem ser necessárias, mas exigem controles compensatórios e documentação. Verifique se a conta ainda tem responsável, se seus privilégios correspondem à função e se houve mudanças em grupos, diretórios autorizados ou métodos de autenticação. Um nome conhecido não assegura que o uso foi autorizado: credenciais legítimas podem ser comprometidas, emprestadas ou utilizadas fora de política.

O encaminhamento de portas, frequentemente chamado de túnel SSH, permite transportar conexões de rede através da sessão protegida. Pode servir a uma necessidade administrativa legítima, como alcançar um serviço interno a partir de um ponto autorizado. Também pode ocultar a relação entre a origem e o serviço final para ferramentas que observam apenas parte do caminho. Isso não torna todo túnel suspeito, nem significa que o conteúdo seja invisível a todos os controles: o endpoint, a configuração e a telemetria em cada trecho podem oferecer evidências distintas.

Quando há suspeita de acesso indevido, chaves, contas e túneis devem entrar explicitamente no escopo. Procure alterações de autorização, credenciais sem titular, novos caminhos de rede e sessões incompatíveis com a função do ativo. Evite remover indiscriminadamente arquivos ou bloquear o serviço antes de preservar evidências e entender dependências; uma chave de automação pode sustentar operação crítica. A contenção deve ser proporcional ao risco, coordenada com responsáveis e acompanhada de registro das decisões.

## Distinções e limites de interpretação

SSH não é sinônimo de terminal interativo: pode transportar comandos não interativos, transferências ou encaminhamentos. SCP e SFTP designam mecanismos ou ferramentas associados ao ecossistema, não nomes alternativos do próprio protocolo. Uma VPN costuma conectar redes ou dispositivos de modo mais amplo; TLS protege conexões de aplicações. Objetivos, modelos e pontos de observação diferem, embora essas tecnologias possam coexistir.

A criptografia limita a inspeção do conteúdo em trânsito, mas não impede que um extremo registre dados antes da cifragem ou depois da decifragem. Ela não torna confiável um usuário, não valida por si só a autorização e não garante a integridade do sistema remoto. A porta 22 é comum, mas pode mudar; sua presença não prova SSH e sua ausência não o exclui.

Tentativas recusadas demonstram tentativas observadas, não acesso bem-sucedido. Uma autenticação aceita demonstra que o servidor aceitou um método, mas não identifica necessariamente a pessoa ou as ações seguintes. Logs incompletos, endereços compartilhados, fusos diferentes e retenção limitada deixam lacunas. Explicite essas limitações e não transforme ausência de evidência em certeza de ausência.

## Resposta a incidentes

Ao investigar possível abuso de SSH, preserve registros e configurações relevantes conforme o procedimento local. Registre horário e fuso, host, conta, origem, resultado da autenticação e mudanças observadas. Se houver risco ativo, considere restringir origens, suspender uma conta ou revogar uma chave, ponderando impacto operacional e dependências de automação.

Em seguida, avalie outros sistemas que confiam na mesma identidade, destinos acessíveis a partir do host e transferências ou túneis relacionados. Revise alterações de configuração, contas, privilégios e mecanismos de persistência. A recuperação pode exigir rotação de credenciais, correção da causa e validação do acesso necessário; documente decisões e lacunas para não restabelecer inadvertidamente o mesmo caminho de risco.

## Exemplos hipotéticos

Um servidor normalmente acessível por SSH apenas a partir de uma estação administrativa registra uma autenticação aceita de uma rede incomum, seguida de alterações de configuração. A equipe compara o evento com a janela de manutenção, confirma com o responsável e correlaciona dados do endpoint. A origem inesperada e a sequência justificam investigação; a autenticação isolada não bastaria para concluir comprometimento.

Uma conta de automação conecta-se regularmente a servidores para transferir relatórios. Uma mudança de chave precede uma execução malsucedida. A equipe consulta gestão de mudanças, titularidade e destinos esperados para distinguir rotação autorizada de alteração indevida. Em ambos os cenários, sinais ganham sentido quando relacionados ao papel do ativo e ao histórico.

## Perguntas frequentes

### Uma chave pública encontrada no servidor foi usada?

Não necessariamente. Ela mostra que o servidor poderia aceitá-la segundo as regras vigentes. Procure registros de autenticação e evidências correlatas; cobertura depende da configuração e retenção.

### Uma conexão aceita prova que alguém invadiu?

Prova apenas que o servidor aceitou uma autenticação conforme o registro. Verifique titularidade, autorização, contexto e atividade subsequente para avaliar uso indevido.

### SSH é seguro por definição? Deve ser bloqueado?

O protocolo protege a comunicação quando configurado corretamente, mas a segurança depende também dos extremos, credenciais e permissões. Bloquear depende da necessidade operacional; onde for necessário, limite origens, controle contas e credenciais e mantenha registros adequados.

### O que muda quando há túnel?

Conexões podem atravessar o canal protegido, alterando o que alguns controles de rede observam. Identifique origem, host que termina a sessão, destino encaminhado e finalidade, correlacionando dados dos extremos.

## Relação com o capítulo

Na organização da versão original, SSH se relaciona ao capítulo 8. No glossário, o termo ajuda a enquadrar uma tecnologia cotidiana de infraestrutura que pode sustentar administração legítima e, sob determinadas condições, acesso indevido. A leitura defensiva depende de ligar protocolo, identidade, ativo e evidência, sem atribuir intenção apenas à presença do serviço.
